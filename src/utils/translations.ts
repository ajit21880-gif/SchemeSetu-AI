import { Language } from '../types';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    appTitle: 'SchemeSetu AI',
    appSubtitle: 'Regional Document to Government Scheme Matcher',
    appTagline: 'Scan any regional document (Hindi, Marathi, English) in 10 seconds to discover eligible government welfare money & benefits.',
    tagCentralAndState: 'Central & All 28 States Schemes',
    tagHoursToSeconds: '10-Second Instant OCR & Eligibility Engine',
    tagNoAgentBribe: 'Zero Agent Fees • 100% Free for Citizens',

    // Nav & Controls
    tabScanner: 'Document Scanner',
    tabExploreSchemes: 'Scheme Directory',
    tabCscDesk: 'CSC / VLE Operator Mode',
    btnScanDocument: 'Scan Document',
    btnTakePhoto: 'Take Photo / Camera',
    btnUploadFile: 'Upload Image / PDF',
    btnTrySampleDocs: 'Try Sample Documents',
    btnVerifyProfile: 'Verify Extracted Details',
    btnRecalculate: 'Recalculate Schemes',
    btnDownloadReport: 'Download / Print Welfare Dossier',
    btnListenVoice: 'Listen in Regional Voice',
    btnStopVoice: 'Stop Audio',
    stateFilterLabel: 'Filter by State:',
    allIndia: 'All India & States',

    // Scanner
    scanZoneTitle: 'Upload or Capture Citizen Document',
    scanZoneDesc: 'Supports mobile camera photos, scans, and PDFs in Hindi, Marathi, English, or regional scripts (Ration Card, Income Certificate, 7/12 Land Record, Caste, Disability, etc.)',
    dropFilesHere: 'Drop document file here...',
    browseFiles: 'Browse from Device',
    fileSupportText: 'Supported formats: PNG, JPG, JPEG, WEBP, PDF (Max 15MB)',
    instantSampleNotice: 'Don\'t have a document ready? Select a realistic sample below to test in 1 click:',

    // Scan Progress
    progressScanningTitle: 'Processing Regional Document with Multimodal AI...',
    stepOcr: 'Step 1: Reading regional Devanagari & Latin script with OCR...',
    stepEntity: 'Step 2: Extracting family income, caste, landholdings, & state jurisdiction...',
    stepRuleMatch: 'Step 3: Evaluating eligibility rules across 40+ Central & State schemes...',
    stepBenefit: 'Step 4: Calculating exact financial benefits (₹ INR) & missing documents...',

    // Dashboard Cards
    totalAnnualCashBenefit: 'Direct Annual Cash Aid',
    totalCashlessHealthCover: 'Cashless Health Cover',
    totalOneTimeGrants: 'Lump Sum Grants & Loans',
    eligibleSchemesCount: 'Schemes You Can Claim',
    partiallyEligibleCount: 'Need 1-2 Documents',
    totalBenefitHeading: 'Estimated Total Welfare Entitlement',

    // Filter Bar
    filterAll: 'All Matched Schemes',
    filterEligible: 'Fully Eligible (Claim Now)',
    filterPartial: 'Needs Extra Document',
    filterCategory: 'All Categories',
    searchSchemesPlaceholder: 'Search scheme by name, ministry, or benefit...',

    // Scheme Card
    badgeEligible: 'Fully Eligible',
    badgePartial: 'Document Needed',
    badgeNotEligible: 'Not Eligible',
    badgeCentral: 'Central Govt',
    badgeState: 'State Govt',
    whyYouQualify: 'Why You Qualify:',
    missingDocumentsTitle: 'Missing Documents Needed to Apply:',
    howToApply: 'Step-by-Step Application Guide:',
    btnOfficialPortal: 'Official Portal',
    helpline: 'Toll-Free Helpline',
    howToGetDocument: 'How to obtain this document:',
    mandatoryDocBadge: 'Mandatory',

    // Entity Drawer
    drawerTitle: 'Extracted Citizen Profile & Entities',
    drawerDesc: 'Review the parameters automatically parsed from your document. You can adjust any field to update scheme eligibility.',
    fieldName: 'Beneficiary Name',
    fieldAge: 'Age (Years)',
    fieldGender: 'Gender',
    fieldState: 'State Jurisdiction',
    fieldDistrict: 'District',
    fieldAnnualIncome: 'Annual Family Income (₹ INR)',
    fieldSocialCategory: 'Social Category (Caste)',
    fieldRationCard: 'Ration Card Type',
    fieldLandAcres: 'Agricultural Land (Acres)',
    fieldFamilySize: 'Family Members Count',
    fieldOccupation: 'Occupation',
    fieldDisability: 'Disability Status',
    fieldIsStudent: 'Is Student in Family',
    fieldIsVendorArtisan: 'Is Artisan / Street Vendor',
    btnApplyChanges: 'Apply & Match Schemes',

    // Voice
    voiceReadingOut: 'Playing audio overview in',
    voiceStopped: 'Audio stopped',

    // Dossier Modal
    dossierTitle: 'SchemeSetu Official Citizen Welfare Dossier',
    dossierSubtitle: 'Print or carry this slip to your nearest Gram Panchayat, CSC Seva Kendra, or Tehsildar Office for instant application.',
    btnPrint: 'Print / Save PDF',
    btnShareWhatsApp: 'Share on WhatsApp',
    btnClose: 'Close',
    dossierCitizenDetails: 'Citizen Profile Summary',
    dossierSummaryBenefits: 'Summary of Entitlements',
    dossierActionChecklist: 'Immediate Action Checklist (Documents to Carry)',

    // Footer
    disclaimer: 'SchemeSetu AI is an open-access public interest welfare eligibility platform. Official scheme approvals and fund disbursements are subject to verification by the respective Central and State Government departments.',
  },

  hi: {
    appTitle: 'योजना सेतु (SchemeSetu AI)',
    appSubtitle: 'क्षेत्रीय दस्तावेज़ से सरकारी योजना मिलान प्रणाली',
    appTagline: 'हिंदी, मराठी या अंग्रेजी में कोई भी सरकारी दस्तावेज़ (राशन कार्ड, आय, खतौनी) 10 सेकंड में स्कैन करें और अपनी पात्र सरकारी योजनाएं व वित्तीय लाभ जानें।',
    tagCentralAndState: 'केंद्र एवं सभी 28 राज्यों की कल्याणकारी योजनाएं',
    tagHoursToSeconds: '10-सेकंड त्वरित ओसीआर एवं पात्रता इंजन',
    tagNoAgentBribe: 'शून्य एजेंट शुल्क • नागरिकों के लिए 100% निःशुल्क',

    // Nav & Controls
    tabScanner: 'दस्तावेज़ स्कैनर',
    tabExploreSchemes: 'योजना निर्देशिका',
    tabCscDesk: 'सीएससी / जन सेवा केंद्र मोड',
    btnScanDocument: 'दस्तावेज़ स्कैन करें',
    btnTakePhoto: 'कैमरा से फोटो खींचें',
    btnUploadFile: 'दस्तावेज़ / पीडीएफ अपलोड करें',
    btnTrySampleDocs: 'नमूना दस्तावेज़ आज़माएं',
    btnVerifyProfile: 'निकाले गए विवरण की जांच करें',
    btnRecalculate: 'योजनाओं की पुनः गणना करें',
    btnDownloadReport: 'कल्याणकारी पर्ची डाउनलोड / प्रिंट करें',
    btnListenVoice: 'क्षेत्रीय भाषा में सुनें',
    btnStopVoice: 'आवाज़ रोकें',
    stateFilterLabel: 'राज्य के अनुसार छांटें:',
    allIndia: 'संपूर्ण भारत व सभी राज्य',

    // Scanner
    scanZoneTitle: 'नागरिक का सरकारी दस्तावेज़ अपलोड या फोटो खींचें',
    scanZoneDesc: 'मोबाइल कैमरे की फोटो, स्कैन या पीडीएफ (राशन कार्ड, आय प्रमाण पत्र, 7/12 खतौनी, जाति, दिव्यांगता प्रमाण पत्र आदि) समर्थित है।',
    dropFilesHere: 'दस्तावेज़ फ़ाइल यहाँ छोड़ें...',
    browseFiles: 'डिवाइस से चुनें',
    fileSupportText: 'समर्थित प्रारूप: PNG, JPG, JPEG, WEBP, PDF (अधिकतम 15MB)',
    instantSampleNotice: 'दस्तावेज़ उपलब्ध नहीं है? 1 क्लिक में परीक्षण हेतु नीचे से वास्तविक नमूना चुनें:',

    // Scan Progress
    progressScanningTitle: 'मल्टीमॉडल एआई द्वारा क्षेत्रीय दस्तावेज़ की प्रोसेसिंग...',
    stepOcr: 'चरण 1: देवनागरी एवं क्षेत्रीय लिपि को ओसीआर से पढ़ा जा रहा है...',
    stepEntity: 'चरण 2: पारिवारिक आय, जाति वर्ग, भूमि और राज्य का विवरण निकाला जा रहा है...',
    stepRuleMatch: 'चरण 3: 40+ केंद्रीय व राज्य योजनाओं के पात्रता नियमों का मिलान...',
    stepBenefit: 'चरण 4: सटीक वित्तीय लाभ (₹) और आवश्यक शेष दस्तावेज़ों की सूची तैयार की जा रही है...',

    // Dashboard Cards
    totalAnnualCashBenefit: 'वार्षिक सीधी नकद सहायता',
    totalCashlessHealthCover: 'कैशलेस स्वास्थ्य बीमा',
    totalOneTimeGrants: 'एकमुश्त अनुदान व लोन सहायता',
    eligibleSchemesCount: 'पात्र योजनाएं (तुरंत क्लेम करें)',
    partiallyEligibleCount: '1-2 दस्तावेज़ शेष',
    totalBenefitHeading: 'अनुमानित कुल सरकारी कल्याणकारी लाभ',

    // Filter Bar
    filterAll: 'सभी मिलान योजनाएं',
    filterEligible: 'पूर्णतः पात्र (अभी आवेदन करें)',
    filterPartial: 'अतिरिक्त दस्तावेज़ की आवश्यकता',
    filterCategory: 'सभी श्रेणियां',
    searchSchemesPlaceholder: 'योजना का नाम, मंत्रालय या लाभ से खोजें...',

    // Scheme Card
    badgeEligible: 'पूर्णतः पात्र',
    badgePartial: 'दस्तावेज़ आवश्यक',
    badgeNotEligible: 'पात्र नहीं',
    badgeCentral: 'केंद्र सरकार',
    badgeState: 'राज्य सरकार',
    whyYouQualify: 'आप क्यों पात्र हैं:',
    missingDocumentsTitle: 'आवेदन हेतु आवश्यक शेष दस्तावेज़:',
    howToApply: 'आवेदन प्रक्रिया (चरणबद्ध मार्गदर्शिका):',
    btnOfficialPortal: 'आधिकारिक पोर्टल',
    helpline: 'टोल-फ्री हेल्पलाइन',
    howToGetDocument: 'यह दस्तावेज़ कैसे प्राप्त करें:',
    mandatoryDocBadge: 'अनिवार्य',

    // Entity Drawer
    drawerTitle: 'दस्तावेज़ से निकाली गई नागरिक प्रोफ़ाइल',
    drawerDesc: 'दस्तावेज़ से स्वतः निकाले गए विवरण की जांच करें। आवश्यकतानुसार किसी भी जानकारी को बदलकर योजनाओं का पुनः मिलान कर सकते हैं।',
    fieldName: 'लाभार्थी का नाम',
    fieldAge: 'आयु (वर्ष)',
    fieldGender: 'लिंग',
    fieldState: 'राज्य',
    fieldDistrict: 'जिला',
    fieldAnnualIncome: 'वार्षिक पारिवारिक आय (₹)',
    fieldSocialCategory: 'सामाजिक वर्ग (जाति)',
    fieldRationCard: 'राशन कार्ड का प्रकार',
    fieldLandAcres: 'कृषि भूमि (एकड़)',
    fieldFamilySize: 'परिवार के कुल सदस्य',
    fieldOccupation: 'व्यवसाय',
    fieldDisability: 'दिव्यांगता की स्थिति',
    fieldIsStudent: 'परिवार में अध्ययनरत छात्र',
    fieldIsVendorArtisan: 'कारीगर / स्ट्रीट वेंडर',
    btnApplyChanges: 'परिवर्तन लागू करें व योजनाएं खोजें',

    // Voice
    voiceReadingOut: 'योजना विवरण आवाज़ में सुनाया जा रहा है:',
    voiceStopped: 'आवाज़ बंद की गई',

    // Dossier Modal
    dossierTitle: 'योजना सेतु - आधिकारिक नागरिक कल्याणकारी विवरण पर्ची',
    dossierSubtitle: 'इस पर्ची को प्रिंट करके या मोबाइल में लेकर अपने नजदीकी ग्राम पंचायत, सीएससी सेवा केंद्र या तहसील में जाएं।',
    btnPrint: 'प्रिंट करें / पीडीएफ सेव करें',
    btnShareWhatsApp: 'व्हाट्सएप पर भेजें',
    btnClose: 'बंद करें',
    dossierCitizenDetails: 'नागरिक प्रोफ़ाइल सारांश',
    dossierSummaryBenefits: 'कुल सरकारी लाभ सारांश',
    dossierActionChecklist: 'आवेदन हेतु साथ ले जाने वाले दस्तावेज़',

    // Footer
    disclaimer: 'योजना सेतु एआई एक निःशुल्क जनहित कल्याणकारी पात्रता प्रणाली है। योजनाओं की अंतिम स्वीकृति संबंधित केंद्रीय एवं राज्य सरकारी विभागों द्वारा सत्यापन के अधीन है।',
  },

  mr: {
    appTitle: 'योजना सेतू (SchemeSetu AI)',
    appSubtitle: 'प्रादेशिक कागदपत्रांवरून थेट शासकीय योजना शोध प्रणाली',
    appTagline: 'मराठी, हिंदी किंवा इंग्रजीमधील कोणतेही शासकीय कागदपत्र (रेशन कार्ड, उत्पन्न दाखला, ७/१२) १० सेकंदात स्कॅन करा व पात्र शासकीय योजना व आर्थिक लाभ जाणून घ्या.',
    tagCentralAndState: 'केंद्र व सर्व २८ राज्य शासनाच्या योजना',
    tagHoursToSeconds: '१०-सेकंद इन्स्टंट ओसीआर व पात्रता शोध',
    tagNoAgentBribe: 'कोणतीही दलाली नाही • नागरिकांसाठी १००% मोफत',

    // Nav & Controls
    tabScanner: 'कागदपत्र स्कॅनर',
    tabExploreSchemes: 'योजना सूची',
    tabCscDesk: 'आपले सरकार / सीएससी सेवा केंद्र',
    btnScanDocument: 'कागदपत्र स्कॅन करा',
    btnTakePhoto: 'कॅमेऱ्याने फोटो काढा',
    btnUploadFile: 'कागदपत्र / पीडीएफ अपलोड करा',
    btnTrySampleDocs: 'नमुना कागदपत्रे वापरून पहा',
    btnVerifyProfile: 'माहिती तपासा व दुरुस्त करा',
    btnRecalculate: 'योजनांची फेरगणती करा',
    btnDownloadReport: 'शासकीय पात्रता पावती डाउनलोड / प्रिंट करा',
    btnListenVoice: 'मराठी आवाजात ऐका',
    btnStopVoice: 'आवाज थांबवा',
    stateFilterLabel: 'राज्यानुसार निवडा:',
    allIndia: 'संपूर्ण भारत व सर्व राज्ये',

    // Scanner
    scanZoneTitle: 'नागरिकांचे शासकीय कागदपत्र अपलोड करा किंवा फोटो काढा',
    scanZoneDesc: 'मोबाईल कॅमेऱ्याचा फोटो, स्कॅन किंवा पीडीएफ (रेशन कार्ड, उत्पन्नाचा दाखला, ७/१२ उतारा, जात प्रमाणपत्र, दिव्यांगत्व दाखला इत्यादी).',
    dropFilesHere: 'कागदपत्र येथे ड्रॉप करा...',
    browseFiles: 'गॅलरी/फायलींमधून निवडा',
    fileSupportText: 'समर्थित प्रकार: PNG, JPG, JPEG, WEBP, PDF (कमाल १५ MB)',
    instantSampleNotice: 'कागदपत्र सोबत नाही? १ क्लिकमध्ये तपासण्यासाठी खालीलपैकी खरा नमुना निवडा:',

    // Scan Progress
    progressScanningTitle: 'मल्टीमॉडेल एआय द्वारे प्रादेशिक कागदपत्राचे विश्लेषण सुरू आहे...',
    stepOcr: 'टप्पा १: देवनागरी व मोडी/मराठी मजकूर ओसीआर द्वारे वाचत आहे...',
    stepEntity: 'टप्पा २: वार्षिक उत्पन्न, जात, शेती जमीन व कुटुंबाची माहिती काढत आहे...',
    stepRuleMatch: 'टप्पा ३: ४०+ केंद्र व राज्य योजनांच्या पात्रता नियमांची पडताळणी...',
    stepBenefit: 'टप्पा ४: अचूक आर्थिक लाभ (₹) व आवश्यक कागदपत्रांची यादी तयार होत आहे...',

    // Dashboard Cards
    totalAnnualCashBenefit: 'वार्षिक थेट बँक आर्थिक मदत',
    totalCashlessHealthCover: 'कॅशलेस आरोग्य संरक्षण',
    totalOneTimeGrants: 'एकरकमी अनुदान व स्वस्त कर्ज',
    eligibleSchemesCount: 'पात्र योजना (थेट लाभ घ्या)',
    partiallyEligibleCount: '१-२ कागदपत्रे आवश्यक',
    totalBenefitHeading: 'अंदाजे एकूण शासकीय कल्याणकारी हक्क',

    // Filter Bar
    filterAll: 'सर्व पात्र योजना',
    filterEligible: 'पूर्ण पात्र (आताच अर्ज करा)',
    filterPartial: 'कागदपत्र जोडणे आवश्यक',
    filterCategory: 'सर्व प्रकार',
    searchSchemesPlaceholder: 'योजना, विभाग किंवा लाभाच्या नावाने शोधा...',

    // Scheme Card
    badgeEligible: 'पूर्ण पात्र',
    badgePartial: 'कागदपत्र आवश्यक',
    badgeNotEligible: 'अपात्र',
    badgeCentral: 'केंद्र शासन',
    badgeState: 'राज्य शासन',
    whyYouQualify: 'तुम्ही पात्र का आहात:',
    missingDocumentsTitle: 'अर्जासाठी लागणारी उर्वरित कागदपत्रे:',
    howToApply: 'अर्ज कसा करावा (सविस्तर टप्पे):',
    btnOfficialPortal: 'अधिकृत पोर्टल',
    helpline: 'टोल-फ्री हेल्पलाइन',
    howToGetDocument: 'हे कागदपत्र कसे मिळवावे:',
    mandatoryDocBadge: 'आवश्यक',

    // Entity Drawer
    drawerTitle: 'कागदपत्रातून मिळालेली माहिती',
    drawerDesc: 'कागदपत्रावरून आपोआप काढलेली माहिती तपासा. गरज भासल्यास माहिती बदलून पुन्हा योजना शोधू शकता.',
    fieldName: 'लाभार्थ्याचे नाव',
    fieldAge: 'वय (वर्षे)',
    fieldGender: 'लिंग',
    fieldState: 'राज्य',
    fieldDistrict: 'जिल्हा',
    fieldAnnualIncome: 'वार्षिक कौटुंबिक उत्पन्न (₹)',
    fieldSocialCategory: 'सामाजिक प्रवर्ग (जात)',
    fieldRationCard: 'रेशन कार्ड प्रकार',
    fieldLandAcres: 'शेतजमीन (एकर)',
    fieldFamilySize: 'कुटुंबातील एकूण सदस्य',
    fieldOccupation: 'व्यवसाय',
    fieldDisability: 'दिव्यांगत्व स्थिती',
    fieldIsStudent: 'कुटुंबात शिकणारा विद्यार्थी',
    fieldIsVendorArtisan: 'कारागीर / फेरीवाला',
    btnApplyChanges: 'बदल जतन करा व योजना शोधा',

    // Voice
    voiceReadingOut: 'योजनेची माहिती मराठी आवाजात सुरू आहे:',
    voiceStopped: 'आवाज बंद केला',

    // Dossier Modal
    dossierTitle: 'योजना सेतू - अधिकृत नागरिक कल्याणकारी हक्क पावती',
    dossierSubtitle: 'ही पावती प्रिंट करून किंवा मोबाईलमध्ये दाखवून जवळच्या ग्रामपंचायत, आपले सरकार केंद्र किंवा तहसील कार्यालयात अर्ज करा.',
    btnPrint: 'प्रिंट करा / PDF जतन करा',
    btnShareWhatsApp: 'व्हॉट्सॲपवर पाठवा',
    btnClose: 'बंद करा',
    dossierCitizenDetails: 'नागरिकांची माहिती',
    dossierSummaryBenefits: 'एकूण शासकीय लाभ सारांश',
    dossierActionChecklist: 'अर्जासाठी सोबत न्यायची कागदपत्रे',

    // Footer
    disclaimer: 'योजना सेतू एआय ही एक विनामूल्य जनहित कल्याणकारी शोध प्रणाली आहे. अंतिम मंजुरी व लाभ वितरण संबंधित केंद्र व राज्य शासकीय विभागांच्या पडताळणीनंतरच होते.',
  },
};
