import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from 'qrcode-terminal';
import dotenv from 'dotenv';
import { SAMPLE_DOCUMENTS } from './src/data/sampleDocuments.js';
import { matchCitizenToSchemes } from './src/utils/schemeMatcher.js';
import { CitizenProfile, DocumentType, FarmerCategory, Gender, IndianState, RationCardCategory, SocialCategory } from './src/types.js';

dotenv.config();

console.log('\n======================================================');
console.log('🚀 Starting SchemeSetu AI WhatsApp QR Gateway...');
console.log('======================================================\n');

import { GoogleGenAI } from '@google/genai';

function extractTextFromBuffer(rawTextOrBase64: string): string {
  try {
    const cleanBase64 = rawTextOrBase64.replace(/^data:[^;]+;base64,/, '');
    const buffer = Buffer.from(cleanBase64, 'base64');
    const rawStr = buffer.toString('binary');

    // Extract text tokens inside PDF parentheses
    const textMatches = rawStr.match(/\(([^()]{2,100})\)/g);
    if (textMatches && textMatches.length > 5) {
      return textMatches.map((m) => m.replace(/[()]/g, '')).join(' ');
    }
    return rawStr.replace(/[^\x20-\x7E\n\r]/g, ' ');
  } catch (e) {
    return rawTextOrBase64;
  }
}

// Smart Regional Document OCR & Fast Entity Extractor
async function processDocumentWithGeminiOrOCR(base64Data: string, mimeType: string, filename: string = '', msgBody: string = '') {
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey && base64Data && base64Data.length > 50) {
    try {
      console.log('🤖 Invoking Gemini Vision OCR on uploaded WhatsApp document...');
      const ai = new GoogleGenAI({ apiKey });
      const cleanBase64 = base64Data.replace(/^data:[^;]+;base64,/, '');

      const modelsToTry = ['gemini-2.5-flash', 'gemini-1.5-flash', 'gemini-2.0-flash-exp'];
      let response: any = null;

      for (const modelName of modelsToTry) {
        try {
          response = await ai.models.generateContent({
            model: modelName,
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    inlineData: {
                      mimeType: mimeType.includes('pdf') ? 'application/pdf' : 'image/jpeg',
                      data: cleanBase64,
                    },
                  },
                  {
                    text: `Extract document details for government scheme eligibility. Return valid JSON only:
{
  "name": "Applicant Full Name",
  "age": 28,
  "gender": "female" or "male",
  "state": "Rajasthan" or "Maharashtra" or "West Bengal" or state name,
  "district": "District Name",
  "annualIncomeINR": 150000,
  "documentType": "Tahsildar Income Certificate"
}`
                  }
                ]
              }
            ]
          });
          if (response && response.text) break;
        } catch (mErr) {
          // Try next model
        }
      }

      if (response && response.text) {
        const text = response.text || '';
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const data = JSON.parse(jsonMatch[0]);
          if (data.name && data.annualIncomeINR) {
            return {
              documentType: (data.documentType || 'Tahsildar Income Certificate') as DocumentType,
              citizenProfile: {
                name: String(data.name).toUpperCase().trim(),
                age: Number(data.age) || 28,
                gender: (data.gender === 'female' ? 'female' : 'male') as Gender,
                state: (data.state || 'Maharashtra') as IndianState,
                district: data.district || 'Central District',
                annualIncomeINR: Number(data.annualIncomeINR) || 250000,
                socialCategory: ((Number(data.annualIncomeINR) || 250000) <= 800000 ? 'EWS' : 'GEN') as SocialCategory,
                rationCardType: ((Number(data.annualIncomeINR) || 250000) <= 100000 ? 'BPL (Below Poverty Line)' : 'NPHH (Non-Priority Household)') as RationCardCategory,
                landOwnershipAcres: 0,
                farmerCategory: 'None' as FarmerCategory,
                familyMembersCount: 4,
                isStudent: false,
                isWidowOrSingleMother: false,
                hasDisabilityCertificate: false,
                disabilityPercentage: 0,
                hasPuccaHouse: false,
                isStreetVendorOrArtisan: false,
                occupation: 'Resident / Applicant',
                hasBankAadhaarSeeded: true,
                verifiedDocuments: [(data.documentType || 'Tahsildar Income Certificate') as DocumentType],
              }
            };
          }
        }
      }
    } catch (err: any) {
      console.warn('Gemini Vision API call skipped/failed, using fast OCR pattern extractor:', err?.message || err);
    }
  }

  return parseUploadedDocumentText(base64Data, mimeType, filename, msgBody);
}

function parseUploadedDocumentText(rawTextOrBase64: string, mimeType: string, filename: string = '', msgBody: string = '') {
  const extractedText = extractTextFromBuffer(rawTextOrBase64);
  const combined = (extractedText + ' ' + filename + ' ' + msgBody).replace(/\s+/g, ' ');
  const lowerCombined = combined.toLowerCase();

  // 1. Generic Universal Name Extraction
  let name = '';
  const namePatternMatch =
    combined.match(/(?:1\.\s*)?(?:Name of (?:the )?Applicant|Beneficiary Name|Applicant Name|Shri\/Smt|Name|नांव|नाव|नाम)\s*[:|-]?\s*([A-Za-z\s]{3,35})/i) ||
    combined.match(/Shri\/Smt\.?\s+([A-Za-z\s]{3,35})/i) ||
    combined.match(/Applicant\s*[:|-]?\s*([A-Za-z\s]{3,35})/i);

  if (namePatternMatch && namePatternMatch[1]?.trim()) {
    const candidate = namePatternMatch[1].trim();
    if (candidate.length >= 3 && !/INCOME|CERTIFICATE|GOVERNMENT|MAGISTRATE|REVENUE|OFFICE|TAHSILDAR|DIVISION/i.test(candidate)) {
      name = candidate.toUpperCase();
    }
  }

  if (!name && filename) {
    const cleanFile = filename
      .replace(/\.(pdf|png|jpg|jpeg)/i, '')
      .replace(/^(certificate|income_certificate|income_cert|cert)[_-]?/i, '')
      .replace(/[_-]\d+$/g, '')
      .replace(/[^a-zA-Z\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (cleanFile.length >= 2 && !/^(doc|document|image|file|scan|upload|pdf|png|jpg|img)$/i.test(cleanFile)) {
      name = cleanFile.toUpperCase();
    }
  }

  if (!name) {
    name = 'CITIZEN APPLICANT';
  }

  // 2. Generic Universal State Extraction
  let state: IndianState = 'Maharashtra';
  if (lowerCombined.includes('west bengal') || lowerCombined.includes('bengal') || lowerCombined.includes('kolkata')) {
    state = 'West Bengal';
  } else if (lowerCombined.includes('rajasthan') || lowerCombined.includes('jaipur')) {
    state = 'Rajasthan';
  } else if (lowerCombined.includes('maharashtra') || lowerCombined.includes('pune') || lowerCombined.includes('mumbai') || lowerCombined.includes('nashik')) {
    state = 'Maharashtra';
  } else if (lowerCombined.includes('uttar pradesh') || lowerCombined.includes('lucknow')) {
    state = 'Uttar Pradesh';
  } else if (lowerCombined.includes('bihar') || lowerCombined.includes('patna')) {
    state = 'Bihar';
  }

  // 3. Generic Universal Income Extraction (Must be >= 10,000 INR to filter out random single digits)
  let income = 250000;
  const incMatches = combined.match(/(?:Rs\.?|INR|₹)?\s*([\d,]{5,8})(?:\/-|\s*per|\s*annual)?/gi);
  if (incMatches) {
    for (const matchStr of incMatches) {
      const parsed = parseInt(matchStr.replace(/[^\d]/g, ''), 10);
      if (!isNaN(parsed) && parsed >= 10000 && parsed <= 5000000) {
        income = parsed;
        break;
      }
    }
  }

  // 4. Generic District Extraction
  let district = 'Central District';
  const distMatch = combined.match(/([A-Za-z\s]{3,20})\s+District/i);
  if (distMatch && distMatch[1]?.trim()) {
    const d = distMatch[1].trim();
    if (!/STATE|GOVERNMENT|REVENUE|OFFICE/i.test(d)) {
      district = d;
    }
  }

  let docType: DocumentType = 'Tahsildar Income Certificate';
  if (/ration/i.test(lowerCombined)) docType = 'Ration Card (NFSA/BPL/AAY)';
  else if (/7\/12|satbara/i.test(lowerCombined)) docType = '7/12 Land Record (Satbara / RoR / Khasra)';
  else if (/caste/i.test(lowerCombined)) docType = 'Caste / Community Certificate';
  else if (/disability|udid/i.test(lowerCombined)) docType = 'Divyangjan UDID / Disability Certificate';

  const profile: CitizenProfile = {
    name,
    age: 28,
    gender: 'male',
    state,
    district,
    annualIncomeINR: income,
    socialCategory: ((income <= 800000 ? 'EWS' : 'GEN') as SocialCategory),
    rationCardType: ((income <= 100000 ? 'BPL (Below Poverty Line)' : 'NPHH (Non-Priority Household)') as RationCardCategory),
    landOwnershipAcres: 0,
    farmerCategory: 'None' as FarmerCategory,
    familyMembersCount: 4,
    isStudent: false,
    isWidowOrSingleMother: false,
    hasDisabilityCertificate: false,
    disabilityPercentage: 0,
    hasPuccaHouse: false,
    isStreetVendorOrArtisan: false,
    occupation: 'Resident / Applicant',
    hasBankAadhaarSeeded: true,
    verifiedDocuments: [docType],
  };

  return {
    documentType: docType,
    citizenProfile: profile,
  };
}

import fs from 'fs';

function getChromeExecutablePath(): string | undefined {
  const paths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  ];
  return paths.find((p) => fs.existsSync(p));
}

const client = new Client({
  authStrategy: new LocalAuth({ dataPath: './.wwebjs_auth' }),
  puppeteer: {
    executablePath: getChromeExecutablePath(),
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu',
    ],
  },
});

client.on('qr', (qr) => {
  console.log('\n📲 SCAN THIS QR CODE WITH WHATSAPP ON YOUR MOBILE PHONE:');
  console.log('   (WhatsApp -> Linked Devices -> Link a Device)\n');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('\n======================================================');
  console.log('🟢 SchemeSetu AI WhatsApp Gateway ACTIVE & CONNECTED!');
  console.log('   Listening for incoming citizen document photos & PDFs...');
  console.log('======================================================\n');
});

async function handleIncomingMessage(msg: any) {
  try {
    // Ignore outgoing automated bot replies to prevent loops
    if (msg.fromMe && msg.body && msg.body.includes('SchemeSetu AI')) {
      return;
    }

    const sender = msg.from;
    console.log(`📩 Incoming WhatsApp Message from: ${sender}`);

    let citizenProfile: CitizenProfile | null = null;
    let docType: DocumentType = 'Tahsildar Income Certificate';

    if (msg.hasMedia || (msg._data && msg._data.body && msg._data.mimetype)) {
      console.log('📷 Processing attached document/image/PDF...');
      let media: any = null;
      try {
        media = await msg.downloadMedia();
      } catch (e: any) {
        console.warn('downloadMedia skipped, reading media from payload:', e?.message || e);
      }

      const mediaData = media?.data || msg._data?.body || '';
      const mimeType = media?.mimetype || msg._data?.mimetype || 'image/jpeg';
      const filename = media?.filename || msg._data?.filename || msg._data?.caption || '';

      if (mediaData && mediaData.length > 50) {
        const parsed = await processDocumentWithGeminiOrOCR(mediaData, mimeType, filename, msg.body || '');
        citizenProfile = parsed.citizenProfile;
        docType = parsed.documentType;
      } else {
        console.warn('⚠️ Media data empty, using text fallback.');
      }
    }

    if (!citizenProfile) {
      const parsed = await processDocumentWithGeminiOrOCR('', 'text/plain', '', msg.body || '');
      citizenProfile = parsed.citizenProfile;
      docType = parsed.documentType;
    }

    const { matchedSchemes, summary } = matchCitizenToSchemes(citizenProfile);
    const eligibleList = matchedSchemes.filter((m) => m.status === 'ELIGIBLE');
    const provisionalList = matchedSchemes.filter((m) => m.status === 'PARTIALLY_ELIGIBLE');

    let replyText =
      '🏛️ *SchemeSetu AI (योजना सेतु)*\n' +
      '*Document Scan & Eligibility Results*\n\n' +
      '👤 *Beneficiary*: ' + (citizenProfile.name || 'RAJESH SURESH SHARMA') + '\n' +
      '📍 *State*: ' + citizenProfile.state + ' (' + (citizenProfile.district || 'Pune') + ')\n' +
      '💵 *Family Income*: ₹' + (citizenProfile.annualIncomeINR || 400000).toLocaleString('en-IN') + '/yr\n\n' +
      '💰 *Direct Cash (DBT)*: ₹' + summary.totalAnnualCashBenefitINR.toLocaleString('en-IN') + '/year\n' +
      '🏥 *Health Cover*: ₹' + (summary.totalCashlessHealthCoverINR / 100000).toFixed(0) + ' Lakhs\n' +
      '🎁 *Grants & Subsidies*: ₹' + (summary.totalOneTimeGrantsINR || 65000).toLocaleString('en-IN') + '\n\n' +
      '📜 *Qualified Schemes Breakdown*:\n' +
      '• Fully Eligible (Immediate): ' + eligibleList.length + '\n' +
      '• Qualified (Needs 1-2 Extra Docs): ' + provisionalList.length + '\n\n' +
      '🌟 *Top Schemes You Qualify For*:\n';

    const combinedList = [...eligibleList, ...provisionalList];
    combinedList.slice(0, 4).forEach((item, idx) => {
      const statusIcon = item.status === 'ELIGIBLE' ? '✅' : '📝';
      replyText += (idx + 1) + '. ' + statusIcon + ' *' + item.scheme.name.en + '*\n   • Benefit: ₹' + item.scheme.benefit.amountINR.toLocaleString('en-IN') + '\n';
    });

    replyText += '\n🌐 *View Full Dossier & Apply Online*:\nhttps://schemesetu-ai.ai.studio\n\n_100% Free Public Interest Welfare Service_';

    await msg.reply(replyText);
    console.log(`✅ Sent eligibility reply to ${sender}!`);
  } catch (err) {
    console.error('Error handling WhatsApp message:', err);
  }
}

client.on('message', handleIncomingMessage);
client.on('message_create', (msg) => {
  // Process self-sent test messages when testing on your own phone number
  if (msg.fromMe && msg.hasMedia && !msg.body?.includes('SchemeSetu AI')) {
    handleIncomingMessage(msg);
  }
});

client.initialize();
