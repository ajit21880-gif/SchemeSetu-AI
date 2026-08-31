import { SampleDocumentItem } from '../types';

export const SAMPLE_DOCUMENTS: SampleDocumentItem[] = [
  {
    id: 'sample-ration-card-mh',
    title: {
      en: 'Maharashtra NFSA BPL Ration Card (द्विभाषिक रेशन कार्ड)',
      hi: 'महाराष्ट्र एनएफएसए बीपीएल राशन कार्ड (द्विभाषी)',
      mr: 'महाराष्ट्र राष्ट्रीय अन्न सुरक्षा योजना बीपीएल रेशन कार्ड',
    },
    subtitle: {
      en: '4 Family Members • Annual Income ₹38,000 • Yellow Card',
      hi: '4 सदस्य परिवार • वार्षिक आय ₹38,000 • पीला कार्ड धारक',
      mr: '४ सदस्य कुटुंब • वार्षिक उत्पन्न ₹३८,००० • पिवळे रेशन कार्ड',
    },
    documentType: 'Ration Card (NFSA/BPL/AAY)',
    state: 'Maharashtra',
    language: 'Marathi / English',
    description: {
      en: 'Official bilingual ration card issued under NFSA 2013 by Food & Civil Supplies Dept, Nashik, Maharashtra showing low income and female head.',
      hi: 'महाराष्ट्र अन्न व नागरी पुरवठा विभाग द्वारा जारी बीपीएल राशन कार्ड (महिला मुखिया, आय ₹38,000)।',
      mr: 'अन्न व नागरी पुरवठा विभाग, नाशिक द्वारे जारी केलेले पिवळे बीपीएल रेशन कार्ड.',
    },
    rawTextPreview: `शासकीय अन्न व नागरी पुरवठा विभाग - महाराष्ट्र शासन
राष्ट्रीय अन्न सुरक्षा योजना (NFSA) - रेशन कार्ड क्र: 2724-9182-4512
कार्ड प्रकार: पिवळे रेशन कार्ड (BPL / PHH)
कुटुंब प्रमुख: सुनीता रमेश पाटील (Sunita Ramesh Patil), वय: ३८ वर्षे (Female)
पतीचे नाव: रमेश किसन पाटील (Ramesh Patil), वय: ४३ वर्षे
सदस्य संख्या: ४ (२ प्रौढ, २ मुले - १ महाविद्यालयीन विद्यार्थी)
पत्ता: मु. पो. दिंडोरी, जि. नाशिक, महाराष्ट्र - ४२२२०२
वार्षिक उत्पन्न: ₹ ३८,०००/- (अठतीस हजार रुपये मात्र)
सामाजिक प्रवर्ग: ओबीसी (OBC)
गॅस जोडणी: निरंक (No LPG Connection)
जमीन धारणा: अल्पभूधारक (१.२ एकर शेती जमीन)
अधिकृत वितरण केंद्र: रास्त भाव दुकान क्र. १८४, दिंडोरी`,
    mockProfile: {
      name: 'Sunita Ramesh Patil',
      age: 38,
      gender: 'female',
      state: 'Maharashtra',
      district: 'Nashik',
      annualIncomeINR: 38000,
      socialCategory: 'OBC',
      rationCardType: 'BPL (Below Poverty Line)',
      landOwnershipAcres: 1.2,
      farmerCategory: 'Small (1-2 ha)',
      familyMembersCount: 4,
      isStudent: true,
      isWidowOrSingleMother: false,
      hasDisabilityCertificate: false,
      disabilityPercentage: 0,
      hasPuccaHouse: false,
      isStreetVendorOrArtisan: false,
      occupation: 'Small Farmer / Agriculture Worker',
      hasBankAadhaarSeeded: true,
      verifiedDocuments: ['Ration Card (NFSA/BPL/AAY)'],
    },
    previewColor: 'from-amber-600 to-orange-700',
  },
  {
    id: 'sample-income-cert-up',
    title: {
      en: 'UP Tahsildar Income Certificate (आय प्रमाण पत्र)',
      hi: 'उत्तर प्रदेश तहसीलदार आय प्रमाण पत्र',
      mr: 'उत्तर प्रदेश तहसीलदार उत्पन्नाचा दाखला',
    },
    subtitle: {
      en: 'Tahsildar Gorakhpur • Family Income ₹45,000/yr • Rural EWS',
      hi: 'तहसीलदार गोरखपुर • वार्षिक आय ₹45,000 • ग्रामीण ईडब्ल्यूएस',
      mr: 'तहसीलदार गोरखपूर • वार्षिक उत्पन्न ₹४५,००० • ग्रामीण गरीब',
    },
    documentType: 'Tahsildar Income Certificate',
    state: 'Uttar Pradesh',
    language: 'Hindi / English',
    description: {
      en: 'Revenue Department Government of Uttar Pradesh authenticated income certificate signed by Tehsildar Gorakhpur under e-District UP.',
      hi: 'राजस्व परिषद उत्तर प्रदेश, ई-डिस्ट्रिक्ट पोर्टल द्वारा डिजिटल हस्ताक्षरित आय प्रमाण पत्र।',
      mr: 'उत्तर प्रदेश ई-डिस्ट्रिक्ट पोर्टलवरून जारी केलेला तहसीलदार उत्पन्नाचा दाखला.',
    },
    rawTextPreview: `कार्यालय तहसीलदार - सदर गोरखपुर, उत्तर प्रदेश शासन
ई-डिस्ट्रिक्ट प्रमाण पत्र क्रमांक: 241850029411 | आवेदन संख्या: 24185003921
आय प्रमाण पत्र (INCOME CERTIFICATE)
प्रमाणित किया जाता है कि श्री रामनाथ मौर्य (Ramnath Maurya)
पिता का नाम: स्व. प्यारेलाल मौर्य
निवासी: ग्राम- पिपरौली, पोस्ट- चौरीचौरा, तहसील- सदर, जनपद- गोरखपुर (उ.प्र.)
परिवार की कुल वार्षिक आय सभी स्रोतों (कृषि मजदूरी सहित): ₹ 45,000/- (पैंतालीस हजार रुपये मात्र)
परिवार के आश्रित सदस्य: 5 (पत्नी, 2 बेटियां स्कूल में अध्ययनरत, 1 बेटा)
सामाजिक वर्ग: अन्य पिछड़ा वर्ग (OBC / Non-Creamy Layer)
मकान का प्रकार: कच्चा मकान (खपड़ा)
जारी दिनांक: 14-06-2025 | डिजिटल हस्ताक्षर: तहसीलदार, सदर गोरखपुर`,
    mockProfile: {
      name: 'Ramnath Maurya',
      age: 46,
      gender: 'male',
      state: 'Uttar Pradesh',
      district: 'Gorakhpur',
      annualIncomeINR: 45000,
      socialCategory: 'OBC',
      rationCardType: 'BPL (Below Poverty Line)',
      landOwnershipAcres: 0.8,
      farmerCategory: 'Marginal (<1 ha)',
      familyMembersCount: 5,
      isStudent: true,
      isWidowOrSingleMother: false,
      hasDisabilityCertificate: false,
      disabilityPercentage: 0,
      hasPuccaHouse: false,
      isStreetVendorOrArtisan: false,
      occupation: 'Marginal Farmer & Farm Laborer',
      hasBankAadhaarSeeded: true,
      verifiedDocuments: ['Tahsildar Income Certificate'],
    },
    previewColor: 'from-blue-600 to-indigo-800',
  },
  {
    id: 'sample-land-satbara-mh',
    title: {
      en: '7/12 Land Record Extract (डिजिटल सातबारा उतारा / RoR)',
      hi: '7/12 भूलेख खतौनी / सातबारा उतारा (कृषि भूमि)',
      mr: 'डिजिटल स्वाक्षरीत ७/१२ उतारा (महसूल विभाग महाराष्ट्र)',
    },
    subtitle: {
      en: '0.80 Hectare (1.98 Acres) • Small Farmer • Ahmednagar',
      hi: '0.80 हेक्टेयर (1.98 एकड़) • लघु किसान • अहिल्यानगर',
      mr: '०.८० हेक्टर (१.९८ एकर) • अल्पभूधारक शेतकरी • अहिल्यानगर',
    },
    documentType: '7/12 Land Record (Satbara / RoR / Khasra)',
    state: 'Maharashtra',
    language: 'Marathi / English',
    description: {
      en: 'Government of Maharashtra Revenue Department digital 7/12 extract showing cultivable landholding, crop survey, and farmer classification.',
      hi: 'महाराष्ट्र भू-अभिलेख विभाग डिजिटल सातबारा (7/12) खसरा खतौनी भू-स्वामित्व अभिलेख।',
      mr: 'महाराष्ट्र शासन महसूल विभागाचा डिजिटल स्वाक्षरी असलेला शेतजमीन ७/१२ उतारा.',
    },
    rawTextPreview: `महाराष्ट्र शासन - महसूल व वन विभाग
गाव नमुना सात (अधिकार अभिलेख पत्रक) व गाव नमुना बारा (पिकांची नोंदवही)
गाव: संगमनेर, तालुका: संगमनेर, जिल्हा: अहिल्यानगर (अहमदनगर)
भूमापन क्रमांक / गट क्रमांक: १४२/२ ब
खातेदार / भूधारक नाव: ज्ञानेश्वर तुकाराम शिंदे (Dnyaneshwar Tukaram Shinde)
एकूण क्षेत्र: ०.८० हेक्टर (सुमारे १.९८ एकर)
पोटखराब: ०.०५ हेक्टर | लागवडीयोग्य क्षेत्र: ०.७५ हेक्टर
पिकाखालील क्षेत्र: खरीप बाजरी, रब्बी हरभरा, कांदा
सिंचन साधन: विहीर / कोरडवाहू
इतर हक्क व बोजा: निरंक (कोणतेही व्यावसायिक कर्ज नाही)
वार्षिक शेती उत्पन्न: ₹ ५५,०००/-
शेतकरी वर्ग: अल्प व अत्यल्प भूधारक शेतकरी (Small & Marginal Farmer)`,
    mockProfile: {
      name: 'Dnyaneshwar Tukaram Shinde',
      age: 52,
      gender: 'male',
      state: 'Maharashtra',
      district: 'Ahilyanagar',
      annualIncomeINR: 55000,
      socialCategory: 'GEN',
      rationCardType: 'PHH (Priority Household)',
      landOwnershipAcres: 1.98,
      farmerCategory: 'Small (1-2 ha)',
      familyMembersCount: 4,
      isStudent: false,
      isWidowOrSingleMother: false,
      hasDisabilityCertificate: false,
      disabilityPercentage: 0,
      hasPuccaHouse: false,
      isStreetVendorOrArtisan: false,
      occupation: 'Small Farmer',
      hasBankAadhaarSeeded: true,
      verifiedDocuments: ['7/12 Land Record (Satbara / RoR / Khasra)'],
    },
    previewColor: 'from-emerald-700 to-green-900',
  },
  {
    id: 'sample-caste-cert-bihar',
    title: {
      en: 'SC/ST Caste & Domicile Certificate (जाति प्रमाण पत्र)',
      hi: 'अनुसूचित जाति प्रमाण पत्र (बिहार सरकार)',
      mr: 'अनुसूचित जाती प्रमाणपत्र व रहिवासी दाखला',
    },
    subtitle: {
      en: 'Scheduled Caste (SC) • Student in College • Income ₹52,000',
      hi: 'अनुसूचित जाति (SC) • महाविद्यालयीन छात्रा • आय ₹52,000',
      mr: 'अनुसूचित जाती (SC) • विद्यार्थिनी • उत्पन्न ₹५२,०००',
    },
    documentType: 'Caste / Community Certificate',
    state: 'Bihar',
    language: 'Hindi / English',
    description: {
      en: 'Bihar Administrative Reforms RTPS certificate authenticating Scheduled Caste (SC) category and domicile for post-matric educational scholarships.',
      hi: 'बिहार लोक सेवाओं का अधिकार (RTPS) द्वारा निर्गत डिजिटल जाति प्रमाण पत्र।',
      mr: 'बिहार शासनाचे अनुसूचित जाती (SC) अधिकृत जात प्रमाणपत्र.',
    },
    rawTextPreview: `बिहार सरकार - सामान्य प्रशासन विभाग
लोक सेवाओं का अधिकार (RTPS) - प्रमाण पत्र संख्या: BCCC/2025/892014
जाति प्रमाण पत्र (CASTE CERTIFICATE)
प्रमाणित किया जाता है कि सुश्री प्रिया कुमारी (Priya Kumari), पुत्री- श्री किशुन दास
माता का नाम: श्रीमती मालती देवी
ग्राम: मनेर, प्रखंड: मनेर, अनुमंडल: दानापुर, जिला: पटना, राज्य: बिहार
यह प्रमाणित किया जाता है कि यह संविधान के अंतर्गत अनुसूचित जाति (SC) के अंतर्गत आती हैं।
वार्षिक पारिवारिक आय: ₹ 52,000/- (बावन हजार रुपये मात्र)
वर्तमान स्थिति: 12वीं उत्तीर्ण, स्नातक प्रथम वर्ष (B.Sc 1st Year) छात्रा
जारी कर्ता: अनुमंडल दंडाधिकारी / अंचलाधिकारी, दानापुर, पटना`,
    mockProfile: {
      name: 'Priya Kumari',
      age: 19,
      gender: 'female',
      state: 'Bihar',
      district: 'Patna',
      annualIncomeINR: 52000,
      socialCategory: 'SC',
      rationCardType: 'BPL (Below Poverty Line)',
      landOwnershipAcres: 0,
      farmerCategory: 'Landless',
      familyMembersCount: 5,
      isStudent: true,
      isWidowOrSingleMother: false,
      hasDisabilityCertificate: false,
      disabilityPercentage: 0,
      hasPuccaHouse: false,
      isStreetVendorOrArtisan: false,
      occupation: 'College Student (Graduation)',
      hasBankAadhaarSeeded: true,
      verifiedDocuments: ['Caste / Community Certificate'],
    },
    previewColor: 'from-purple-700 to-violet-900',
  },
  {
    id: 'sample-udid-disability',
    title: {
      en: 'Divyangjan UDID Disability Card (दिव्यांगता प्रमाण पत्र)',
      hi: 'यूडीआईडी विशिष्ट दिव्यांगता पहचान पत्र',
      mr: 'विशिष्ट दिव्यांगत्व ओळखपत्र (UDID)',
    },
    subtitle: {
      en: '60% Locomotor Disability • Eligible for IGNDPS & Pension',
      hi: '60% चलन दिव्यांगता • पेंशन व सहायक उपकरण हेतु पात्र',
      mr: '६०% दिव्यांगत्व • मासिक पेन्शन व मोफत साधनांसाठी पात्र',
    },
    documentType: 'Divyangjan UDID / Disability Certificate',
    state: 'Madhya Pradesh',
    language: 'Hindi / English',
    description: {
      en: 'Unique Disability ID (UDID) issued by Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & Empowerment.',
      hi: 'भारत सरकार, सामाजिक न्याय एवं अधिकारिता मंत्रालय द्वारा जारी यूडीआईडी कार्ड (60% दिव्यांगता)।',
      mr: 'भारत सरकारकडून जारी केलेले ६०% दिव्यांगत्व ओळखपत्र.',
    },
    rawTextPreview: `भारत सरकार - सामाजिक न्याय एवं अधिकारिता मंत्रालय
UNIQUE DISABILITY ID (UDID CARD) - दिव्यांगजन पहचान पत्र
UDID संख्या: MP1420519820019284
नाम: अशोक कुमार वर्मा (Ashok Kumar Verma), आयु: ४१ वर्ष (Male)
पिता: श्री कन्हैयालाल वर्मा
पता: मकान नं. ४८, वार्ड १२, सीहोर, मध्य प्रदेश - ४६६००१
दिव्यांगता का प्रकार: Locomotor Disability (अस्थि दिव्यांगता)
दिव्यांगता का प्रतिशत: 60% (Permanent Disability)
प्रमाणन चिकित्सालय: जिला चिकित्सालय सीहोर, मध्य प्रदेश
पारिवारिक वार्षिक आय: ₹ 32,000/-
सहायक उपकरण की आवश्यकता: मोटराइज्ड ट्राईसाइकिल / व्हीलचेयर`,
    mockProfile: {
      name: 'Ashok Kumar Verma',
      age: 41,
      gender: 'male',
      state: 'Madhya Pradesh',
      district: 'Sehore',
      annualIncomeINR: 32000,
      socialCategory: 'OBC',
      rationCardType: 'BPL (Below Poverty Line)',
      landOwnershipAcres: 0,
      farmerCategory: 'Landless',
      familyMembersCount: 3,
      isStudent: false,
      isWidowOrSingleMother: false,
      hasDisabilityCertificate: true,
      disabilityPercentage: 60,
      hasPuccaHouse: false,
      isStreetVendorOrArtisan: false,
      occupation: 'Small Shopkeeper / Self-employed',
      hasBankAadhaarSeeded: true,
      verifiedDocuments: ['Divyangjan UDID / Disability Certificate'],
    },
    previewColor: 'from-teal-700 to-cyan-900',
  },
  {
    id: 'sample-pm-vishwakarma-artisan',
    title: {
      en: 'Artisan & Street Vendor Proof (कारीगर व पथविक्रेता दाखला)',
      hi: 'पारंपरिक बढ़ई/शिल्पकार स्व-घोषणा एवं वेंडिंग प्रमाण पत्र',
      mr: 'पारंपरिक सुतार/कारागीर व पथविक्रेता नोंदणी दाखला',
    },
    subtitle: {
      en: 'Carpenter (बढ़ई) Trade • Urban Local Body Registered',
      hi: 'पारंपरिक काष्ठशिल्प (बढ़ई) • नगर पालिका पंजीकृत',
      mr: 'सुतार व्यवसाय • नगरपालिका नोंदणीकृत कारागीर',
    },
    documentType: 'General Regional Document',
    state: 'Rajasthan',
    language: 'Hindi / English',
    description: {
      en: 'Urban Local Body artisan identification card and trade endorsement for PM Vishwakarma and PM SVANidhi.',
      hi: 'नगर निगम जयपुर द्वारा जारी पारंपरिक कारीगर पहचान पत्र (पीएम विश्वकर्मा योजना)।',
      mr: 'पारंपरिक कारागीर व विक्रेता ओळखपत्र.',
    },
    rawTextPreview: `नगर निगम ग्रेटर जयपुर, राजस्थान
पारंपरिक कारीगर एवं पथ विक्रेता पहचान पत्र
नाम: गजानंद सुथार (Gajanand Suthar), आयु: ३७ वर्ष
पिता: श्री भंवरलाल सुथार
व्यवसाय: बढ़ई / काष्ठशिल्प (Carpenter - Traditional Wood Artisan)
अनुभव: 15 वर्ष | दुकान/कार्यशाला: सांगानेर, जयपुर (राजस्थान)
वार्षिक पारिवारिक आय: ₹ 65,000/-
सामाजिक श्रेणी: ओबीसी (OBC)
पीएम विश्वकर्मा ट्रेड: Carpenter (बढ़ई)
वर्तमान आवश्यकता: ₹ 15,000 टूलकिट अनुदान एवं ₹ 1,00,000 सस्ता व्यापार लोन`,
    mockProfile: {
      name: 'Gajanand Suthar',
      age: 37,
      gender: 'male',
      state: 'Rajasthan',
      district: 'Jaipur',
      annualIncomeINR: 65000,
      socialCategory: 'OBC',
      rationCardType: 'PHH (Priority Household)',
      landOwnershipAcres: 0,
      farmerCategory: 'None',
      familyMembersCount: 4,
      isStudent: false,
      isWidowOrSingleMother: false,
      hasDisabilityCertificate: false,
      disabilityPercentage: 0,
      hasPuccaHouse: false,
      isStreetVendorOrArtisan: true,
      occupation: 'Carpenter (Wood Artisan)',
      hasBankAadhaarSeeded: true,
      verifiedDocuments: ['General Regional Document'],
    },
    previewColor: 'from-amber-700 to-rose-900',
  },
];
