import { Scheme } from '../types';

export const SCHEMES_DATABASE: Scheme[] = [
  // 1. PM-Kisan Samman Nidhi
  {
    id: 'pm-kisan',
    name: {
      en: 'PM-Kisan Samman Nidhi Yojana',
      hi: 'प्रधानमंत्री किसान सम्मान निधि योजना',
      mr: 'पीएम-किसान सन्मान निधी योजना',
    },
    shortCode: 'PM-KISAN',
    department: {
      en: 'Ministry of Agriculture & Farmers Welfare, Govt. of India',
      hi: 'कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार',
      mr: 'कृषी आणि शेतकरी कल्याण मंत्रालय, भारत सरकार',
    },
    level: 'Central',
    applicableState: 'All India',
    category: 'Agriculture & Farming',
    tagline: {
      en: '₹6,000 yearly direct income support in 3 equal installments of ₹2,000 for landholder farmer families.',
      hi: 'भूमिधारक किसान परिवारों को ₹2,000 की 3 समान किस्तों में ₹6,000 प्रति वर्ष प्रत्यक्ष आय सहायता।',
      mr: 'जमीनधारक शेतकरी कुटुंबांना ₹२,००० च्या ३ समान हप्त्यांमध्ये वार्षिक ₹६,००० थेट बँक खात्यात आर्थिक मदत.',
    },
    benefit: {
      amountINR: 6000,
      period: 'yearly',
      displayText: {
        en: '₹6,000 / year (Direct Bank Transfer)',
        hi: '₹6,000 / वर्ष (प्रत्यक्ष बैंक अंतरण)',
        mr: '₹६,००० / वर्ष (थेट बँक खात्यात)',
      },
      details: {
        en: 'Transferred directly to Aadhaar-seeded bank account in three 4-monthly tranches.',
        hi: 'चार-चार महीने के अंतराल पर तीन समान किस्तों में आधार-सीडेड बैंक खाते में भेजी जाती है।',
        mr: 'दर चार महिन्यांनी ₹२,००० याप्रमाणे ३ हप्त्यांमध्ये थेट आधार लिंक बँक खात्यात जमा.',
      },
    },
    eligibilityCriteria: {
      requiresFarmer: true,
      maxLandAcres: 5,
      description: {
        en: 'All landholding farmer families with cultivable land in their names. Institutional landholders and high tax payers excluded.',
        hi: 'खेती योग्य भूमि वाले सभी पात्र किसान परिवार। संस्थागत भूधारक एवं आयकर दाता बाहर हैं।',
        mr: 'नावावर शेतजमीन असलेले सर्व शेतकरी कुटुंब. करदाते व संस्थागत खातेदार वगळून.',
      },
    },
    requiredDocuments: [
      {
        name: 'Land Record (7/12 Satbara / Khatauni / RoR)',
        documentType: '7/12 Land Record (Satbara / RoR / Khasra)',
        mandatory: true,
        howToGet: {
          en: 'Download from State Bhulekh portal (e.g. Mahabhulekh/Bhulekh UP) or obtain from Talathi/Lekhpal.',
          hi: 'राज्य भूलेख पोर्टल या लेखपाल/पटवारी से खतौनी नकल प्राप्त करें।',
          mr: 'महाभूलेख पोर्टलवरून किंवा तलाठ्याकडून डिजिटल स्वाक्षरी असलेला ७/१२ उतारा मिळवा.',
        },
      },
      {
        name: 'Aadhaar Card with Bank NPCI Seeding',
        documentType: 'Aadhaar / Voter ID',
        mandatory: true,
        howToGet: {
          en: 'Visit bank branch or post office to enable Aadhaar NPCI direct benefit transfer mapping.',
          hi: 'बैंक शाखा या डाकघर जाकर अपने खाते में आधार डीबीटी एनपीसीआई लिंक कराएं।',
          mr: 'बँकेत किंवा पोस्टात जाऊन आधार एनपीसीआई (DBT) मॅपिंग पूर्ण करा.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Visit official portal pmkisan.gov.in or nearest CSC Seva Kendra.',
        'Click on "New Farmer Registration" and enter Aadhaar number & Mobile.',
        'Upload Land Khatauni / 7/12 extract and bank details.',
        'Complete mandatory e-KYC via OTP or biometric authentication.',
      ],
      hi: [
        'आधिकारिक पोर्टल pmkisan.gov.in पर जाएं या नजदीकी सीएससी केंद्र पर जाएं।',
        '"नया किसान पंजीकरण" पर क्लिक करें और आधार नंबर दर्ज करें।',
        'खतौनी / 7/12 नकल और बैंक विवरण दर्ज कर अपलोड करें।',
        'ओटीपी या बायोमेट्रिक से अनिवार्य e-KYC पूरा करें।',
      ],
      mr: [
        'pmkisan.gov.in पोर्टल किंवा जवळच्या सीएससी केंद्रावर जा.',
        '"New Farmer Registration" निवडून आधार व मोबाईल क्रमांक टाका.',
        'जमिनीचा ७/१२ उतारा व बँक तपशील भरा.',
        'OTP किंवा बायोमेट्रिकद्वारे e-KYC पूर्ण करा.',
      ],
    },
    officialPortalUrl: 'https://pmkisan.gov.in',
    helplineNumber: '155261 / 011-24300606',
  },

  // 2. Ayushman Bharat (PM-JAY)
  {
    id: 'ayushman-bharat',
    name: {
      en: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
      hi: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना',
      mr: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (पीएम-जय)',
    },
    shortCode: 'PM-JAY',
    department: {
      en: 'National Health Authority (NHA), MoHFW',
      hi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण, स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
      mr: 'राष्ट्रीय आरोग्य प्राधिकरण, आरोग्य व कुटुंब कल्याण मंत्रालय',
    },
    level: 'Central',
    applicableState: 'All India',
    category: 'Healthcare & Insurance',
    tagline: {
      en: 'World’s largest health assurance scheme providing ₹5 Lakh cashless hospital treatment per family per year.',
      hi: 'प्रति परिवार प्रति वर्ष ₹5 लाख का मुफ्त व कैशलेस अस्पताल इलाज प्रदान करने वाली योजना।',
      mr: 'दरवर्षी प्रति कुटुंब ₹५ लाखांपर्यंत मोफत व कॅशलेस वैद्यकीय उपचारांची हमी देणारी योजना.',
    },
    benefit: {
      amountINR: 500000,
      period: 'health_cover',
      displayText: {
        en: '₹5,00,000 / family / year (Cashless Cover)',
        hi: '₹5,00,000 / परिवार / वर्ष (कैशलेस इलाज)',
        mr: '₹५,००,००० / कुटुंब / वर्ष (कॅशलेस आरोग्य कवच)',
      },
      details: {
        en: 'Covers hospitalization, surgeries, medicines, diagnostics in 28,000+ empaneled public & private hospitals across India.',
        hi: 'भारत के 28,000+ सरकारी एवं निजी अस्पतालों में भर्ती, ऑपरेशन, दवा और जांच पूरी तरह कैशलेस कवर।',
        mr: 'भारतातील २८,००० हून अधिक शासकीय व खाजगी रुग्णालयांत शस्त्रक्रिया व उपचार मोफत.',
      },
    },
    eligibilityCriteria: {
      maxIncomeINR: 300000,
      rationCardAllowed: ['AAY (Antyodaya Anna Yojana)', 'BPL (Below Poverty Line)', 'PHH (Priority Household)'],
      description: {
        en: 'Families listed in SECC 2011 database, NFSA Ration Card holders (AAY/PHH/BPL), or senior citizens aged 70+ (universal cover).',
        hi: 'SECC सूची में दर्ज परिवार, राशन कार्ड (AAY/PHH/BPL) धारक अथवा 70 वर्ष से अधिक आयु के वरिष्ठ नागरिक।',
        mr: 'SECC यादीतील कुटुंब, रेशन कार्ड (AAY/PHH/BPL) धारक किंवा ७० वर्षांवरील सर्व ज्येष्ठ नागरिक.',
      },
    },
    requiredDocuments: [
      {
        name: 'Ration Card (NFSA / BPL / AAY)',
        documentType: 'Ration Card (NFSA/BPL/AAY)',
        mandatory: true,
        howToGet: {
          en: 'Issued by State Food & Civil Supplies Department (ePDS portal).',
          hi: 'राज्य खाद्य एवं रसद विभाग द्वारा जारी डिजिटल या बुकलेट राशन कार्ड।',
          mr: 'अन्न व नागरी पुरवठा विभागामार्फत जारी केलेले रेशन कार्ड.',
        },
      },
      {
        name: 'Aadhaar Card of all family members',
        documentType: 'Aadhaar / Voter ID',
        mandatory: true,
        howToGet: {
          en: 'UIDAI Aadhaar letter or PVC card.',
          hi: 'यूआईडीएआई आधार कार्ड।',
          mr: 'सर्व सदस्यांचे आधार कार्ड.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Visit beneficiary.nha.gov.in or the Ayushman Mitra desk at any government hospital.',
        'Search by Aadhaar number, Ration card number, or Family ID.',
        'Complete instant Face/Biometric eKYC to generate your Ayushman Golden Card.',
        'Download and carry Ayushman Card for cashless admission.',
      ],
      hi: [
        'beneficiary.nha.gov.in पर जाएं या किसी भी सरकारी अस्पताल में आयुष्मान मित्र से संपर्क करें।',
        'आधार नंबर या राशन कार्ड नंबर डालकर पात्रता खोजें।',
        'ई-केवाईसी पूरी करके तुरंत आयुष्मान गोल्डन कार्ड डाउनलोड करें।',
        'अस्पताल में भर्ती के समय कार्ड दिखाकर मुफ्त इलाज पाएं।',
      ],
      mr: [
        'beneficiary.nha.gov.in पोर्टलवर जा किंवा सरकारी दवाखान्यातील आयुष्मान मित्राशी संपर्क साधा.',
        'आधार किंवा रेशन कार्ड क्रमांक टाकून पडताळणी करा.',
        'e-KYC पूर्ण करून आयुष्मान डिजिटल कार्ड डाऊनलोड करा.',
        'रुग्णालयात मोफत उपचारासाठी हे कार्ड वापरा.',
      ],
    },
    officialPortalUrl: 'https://beneficiary.nha.gov.in',
    helplineNumber: '14555 / 1800-111-565',
  },

  // 3. PM Awas Yojana (PMAY-Gramin / Urban)
  {
    id: 'pm-awas-yojana',
    name: {
      en: 'Pradhan Mantri Awas Yojana (PMAY)',
      hi: 'प्रधानमंत्री आवास योजना (ग्रामीण / शहरी)',
      mr: 'प्रधानमंत्री आवास योजना (PMAY)',
    },
    shortCode: 'PMAY',
    department: {
      en: 'Ministry of Rural Development & MoHUA, Govt. of India',
      hi: 'ग्रामीण विकास एवं आवासन और शहरी कार्य मंत्रालय',
      mr: 'ग्रामीण विकास आणि गृहनिर्माण व शहरी व्यवहार मंत्रालय',
    },
    level: 'Central',
    applicableState: 'All India',
    category: 'Housing & Shelter',
    tagline: {
      en: 'Financial assistance of ₹1.20 Lakh to ₹1.30 Lakh for building a pucca permanent house with toilet & electricity.',
      hi: 'पक्का मकान और शौचालय निर्माण हेतु ₹1.20 लाख से ₹1.30 लाख की सीधी वित्तीय सहायता।',
      mr: 'पक्के घर बांधण्यासाठी ₹१.२० लाख ते ₹१.३० लाख रुपयांचे थेट शासकीय अनुदान.',
    },
    benefit: {
      amountINR: 130000,
      period: 'one-time',
      displayText: {
        en: '₹1,20,000 - ₹1,30,000 (Construction Grant)',
        hi: '₹1,20,000 - ₹1,30,000 (मकान निर्माण अनुदान)',
        mr: '₹१,२०,००० - ₹१,३०,००० (घरकुल अनुदान)',
      },
      details: {
        en: 'Direct transfer in 3 geo-tagged installments + 90 days MGNREGA wages + ₹12,000 for toilet under SBM.',
        hi: 'जियो-टैगिंग सत्यापन के साथ 3 किस्तों में बैंक ट्रांसफर + मनरेगा मजदूरी + शौचालय हेतु ₹12,000।',
        mr: 'जियो-टॅगिंगनंतर थेट खात्यात ३ हप्त्यांत अनुदान + ९० दिवसांची मनरेगा मजुरी + स्वच्छ भारत शौचालय अनुदान.',
      },
    },
    eligibilityCriteria: {
      requiresNoPuccaHouse: true,
      maxIncomeINR: 300000,
      description: {
        en: 'Homeless families or households living in kutcha/dilapidated homes without a pucca house in India.',
        hi: 'बेघर परिवार या कच्चे/जीर्ण-शीर्ण मकानों में रहने वाले परिवार जिनके पास पक्का मकान नहीं है।',
        mr: 'कच्च्या घरात राहणारे किंवा बेघर असलेले आर्थिक दुर्बल कुटुंब.',
      },
    },
    requiredDocuments: [
      {
        name: 'Income & Caste / BPL Certificate',
        documentType: 'Tahsildar Income Certificate',
        mandatory: true,
        howToGet: {
          en: 'Issued by Tahsildar / Revenue Department.',
          hi: 'तहसीलदार या राजस्व अधिकारी द्वारा जारी आय प्रमाण पत्र।',
          mr: 'तहसीलदार कार्यालयाकडून मिळणारा उत्पन्नाचा दाखला.',
        },
      },
      {
        name: 'Land Ownership / Allotment Patta or NOC',
        documentType: '7/12 Land Record (Satbara / RoR / Khasra)',
        mandatory: true,
        howToGet: {
          en: 'Gram Panchayat resolution or Land Patta record.',
          hi: 'ग्राम पंचायत अनापत्ति प्रमाण पत्र या पट्टा नकल।',
          mr: 'ग्रामपंचायत नमुना ८ किंवा जमिनीचा हक्क दाखला.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Contact Gram Panchayat Secretary / Block Development Officer (BDO) or apply on pmayg.nic.in / pmayu.gov.in.',
        'Submit Aadhaar, Job Card number, and bank account details.',
        'Gram Sabha verifies kutcha house status via Awaas+ mobile geo-tagging.',
        'Fund sanction order issued upon stage-wise photo verification.',
      ],
      hi: [
        'ग्राम प्रधान/पंचायत सचिव या बीडीओ कार्यालय से संपर्क करें या पोर्टल पर आवेदन करें।',
        'आधार, मनरेगा जॉब कार्ड व बैंक खाता विवरण जमा करें।',
        'आवास+ ऐप द्वारा कच्चे मकान की जियो-टैगिंग से जांच की जाएगी।',
        'सत्यापन उपरांत 3 किस्तों में राशि सीधे खाते में भेजी जाएगी।',
      ],
      mr: [
        'ग्रामसेवक किंवा बीडीओ कार्यालयाशी संपर्क साधा किंवा pmayg.nic.in वर नोंदणी करा.',
        'आधार, जॉब कार्ड व बँक तपशील सादर करा.',
        'आवास+ ॲपद्वारे घराची पाहणी व जिओ-टॅगिंग केले जाईल.',
        'टप्प्याटप्प्याने घराच्या बांधकामानुसार खात्यात रक्कम जमा होईल.',
      ],
    },
    officialPortalUrl: 'https://pmayg.nic.in',
    helplineNumber: '1800-11-6446',
  },

  // 4. PM Ujjwala Yojana 2.0
  {
    id: 'pm-ujjwala',
    name: {
      en: 'Pradhan Mantri Ujjwala Yojana 2.0 (PMUY)',
      hi: 'प्रधानमंत्री उज्ज्वला योजना 2.0',
      mr: 'प्रधानमंत्री उज्ज्वला योजना २.० (मोफत गॅस जोडणी)',
    },
    shortCode: 'PMUY',
    department: {
      en: 'Ministry of Petroleum and Natural Gas, Govt. of India',
      hi: 'पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय, भारत सरकार',
      mr: 'पेट्रोलियम व नैसर्गिक वायू मंत्रालय, भारत सरकार',
    },
    level: 'Central',
    applicableState: 'All India',
    category: 'Women & Child Welfare',
    tagline: {
      en: 'Deposit-free LPG connection, free first cylinder and gas stove for adult women of low-income families.',
      hi: 'गरीब परिवारों की वयस्क महिलाओं के लिए मुफ्त एलपीजी कनेक्शन, पहला भरा हुआ सिलेंडर और गैस चूल्हा।',
      mr: 'कमी उत्पन्न गटातील महिलांच्या नावावर मोफत एलपीजी गॅस कनेक्शन, पहिला गॅस सिलिंडर व शेगडी.',
    },
    benefit: {
      amountINR: 3200,
      period: 'one-time',
      displayText: {
        en: 'Free LPG Connection + ₹300/cylinder subsidy',
        hi: 'मुफ्त एलपीजी कनेक्शन + ₹300 प्रति सिलेंडर सब्सिडी',
        mr: 'मोफत गॅस जोडणी + ₹३०० प्रति सिलिंडर सबसिडी',
      },
      details: {
        en: '₹1,600 one-time setup cost waived + free first refill and hotplate stove + recurring ₹300 DBT refill subsidy.',
        hi: 'कनेक्शन सिक्योरिटी शुल्क शून्य + पहला रिफिल व चूल्हा मुफ्त + प्रत्येक रिफिल पर ₹300 सीधी सब्सिडी।',
        mr: 'सुरक्षा ठेव माफ + पहिली मोफत रिफिल व शेगडी + दर सिलिंडरवर ₹३०० थेट बँक सबसिडी.',
      },
    },
    eligibilityCriteria: {
      genderRequired: 'female',
      minAge: 18,
      rationCardAllowed: ['AAY (Antyodaya Anna Yojana)', 'BPL (Below Poverty Line)', 'PHH (Priority Household)'],
      description: {
        en: 'Adult woman from SC/ST, PMAY beneficiary, Forest Dwellers, Most Backward Classes, Tea Garden workers, or BPL/poor households without existing LPG connection.',
        hi: 'अनुसूचित जाति/जनजाति, बीपीएल राशन कार्ड धारक अथवा निर्धन परिवारों की 18+ वर्ष की महिला जिनके घर पहले से गैस कनेक्शन न हो।',
        mr: '१८ वर्षांवरील महिला, ज्यांच्या कुटुंबात आधीपासून एलपीजी गॅस कनेक्शन नाही (एससी/एसटी/बीपीएल/अल्प उत्पन्न).',
      },
    },
    requiredDocuments: [
      {
        name: 'Ration Card with family members list',
        documentType: 'Ration Card (NFSA/BPL/AAY)',
        mandatory: true,
        howToGet: {
          en: 'State PDS Ration card showing applicant & family composition.',
          hi: 'खाद्य विभाग द्वारा जारी राशन कार्ड जिसमें परिवार के सदस्यों के नाम हों।',
          mr: 'कुटुंबातील सदस्यांची नावे असलेले रेशन कार्ड.',
        },
      },
      {
        name: 'Woman Applicant Aadhaar & Bank Passbook',
        documentType: 'Aadhaar / Voter ID',
        mandatory: true,
        howToGet: {
          en: 'Aadhaar of female applicant and adult family members.',
          hi: 'महिला आवेदक का आधार कार्ड और बैंक पासबुक।',
          mr: 'महिला अर्जदाराचे आधार कार्ड व बँक पासबुक.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Visit nearest Indane, Bharat Gas, or HP Gas distributor, or apply on pmuy.gov.in.',
        'Submit Ujjwala 2.0 application form with Ration card and Aadhaar copies.',
        'Sign the 14-point declaration confirming no other LPG connection exists.',
        'Distributor delivers installed connection, stove, and cylinder at home.',
      ],
      hi: [
        'नजदीकी इंडेन, भारत गैस या एचपी गैस एजेंसी पर जाएं अथवा pmuy.gov.in पर ऑनलाइन भरें।',
        'राशन कार्ड और आधार की प्रतियों के साथ फॉर्म जमा करें।',
        '14-सूत्रीय घोषणा पत्र पर हस्ताक्षर करें।',
        'गैस एजेंसी द्वारा आपके घर गैस कनेक्शन, चूल्हा व सिलेंडर स्थापित किया जाएगा।',
      ],
      mr: [
        'जवळच्या इंडेन, भारत गॅस किंवा एचपी गॅस वितरकाकडे जा किंवा pmuy.gov.in वर अर्ज करा.',
        'रेशन कार्ड व आधार कार्ड जोडून अर्ज द्या.',
        'हमीपत्रावर स्वाक्षरी करा.',
        'गॅस वितरकाकडून मोफत जोडणी व शेगडी मिळवा.',
      ],
    },
    officialPortalUrl: 'https://pmuy.gov.in',
    helplineNumber: '1906 / 1800-266-6696',
  },

  // 5. Indira Gandhi National Old Age Pension Scheme (IGNOAPS)
  {
    id: 'ignoaps-pension',
    name: {
      en: 'Indira Gandhi National Old Age Pension Scheme (IGNOAPS)',
      hi: 'इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना',
      mr: 'इंदिरा गांधी राष्ट्रीय वृद्धापकाळ निवृत्तीवेतन योजना',
    },
    shortCode: 'IGNOAPS',
    department: {
      en: 'Ministry of Rural Development, Govt. of India & State Social Welfare Dept.',
      hi: 'ग्रामीण विकास मंत्रालय एवं राज्य समाज कल्याण विभाग',
      mr: 'ग्रामीण विकास मंत्रालय व राज्य सामाजिक न्याय विभाग',
    },
    level: 'Central',
    applicableState: 'All India',
    category: 'Pensions & Divyangjan',
    tagline: {
      en: 'Monthly financial pension for senior citizens (60+ years) from BPL households.',
      hi: 'बीपीएल परिवारों के 60 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिकों के लिए मासिक पेंशन।',
      mr: '६० वर्षे व त्याहून अधिक वयाच्या दारिद्र्यरेषेखालील (BPL) ज्येष्ठ नागरिकांना मासिक निवृत्तीवेतन.',
    },
    benefit: {
      amountINR: 6000,
      period: 'yearly',
      displayText: {
        en: '₹6,000 - ₹12,000 / year (Monthly Pension)',
        hi: '₹6,000 - ₹12,000 / वर्ष (मासिक पेंशन)',
        mr: '₹६,००० - ₹१२,००० / वर्ष (मासिक पेन्शन)',
      },
      details: {
        en: 'Central share + State top-up (e.g. ₹1,000 - ₹2,500/month depending on state, increased at age 80+).',
        hi: 'केंद्र व राज्य सरकार द्वारा सम्मिलित रूप से प्रति माह ₹500 से ₹2,500 की पेंशन बैंक खाते में।',
        mr: 'केंद्र व राज्य शासनाचा एकत्रित वाटा मिळून दरमहा ₹५०० ते ₹२,५०० थेट बँक खात्यात.',
      },
    },
    eligibilityCriteria: {
      minAge: 60,
      rationCardAllowed: ['AAY (Antyodaya Anna Yojana)', 'BPL (Below Poverty Line)'],
      maxIncomeINR: 120000,
      description: {
        en: 'Citizen aged 60 years or above living below the poverty line (BPL).',
        hi: '60 वर्ष या उससे अधिक आयु का नागरिक जो गरीबी रेखा से नीचे (BPL) जीवन यापन कर रहा हो।',
        mr: '६० वर्षे पूर्ण झालेले दारिद्र्यरेषेखालील (BPL) ज्येष्ठ नागरिक.',
      },
    },
    requiredDocuments: [
      {
        name: 'Age Proof (Aadhaar / Voter ID / Birth Certificate)',
        documentType: 'Aadhaar / Voter ID',
        mandatory: true,
        howToGet: {
          en: 'Aadhaar card showing date of birth.',
          hi: 'जन्म तिथि प्रमाणित करने वाला आधार कार्ड या वोटर आईडी।',
          mr: 'जन्मतारीख दर्शविणारे आधार किंवा मतदान ओळखपत्र.',
        },
      },
      {
        name: 'BPL / Income Certificate',
        documentType: 'Tahsildar Income Certificate',
        mandatory: true,
        howToGet: {
          en: 'Tahsildar certificate or BPL survey number.',
          hi: 'तहसीलदार द्वारा जारी आय प्रमाण पत्र या बीपीएल सूची क्रमांक।',
          mr: 'तहसीलदारांचा उत्पन्नाचा दाखला किंवा बीपीएल यादीतील नोंद.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Apply online on nsap.nic.in or submit form at Block/Tehsil / Ward office.',
        'Attach Age proof, BPL certificate, and Aadhaar-seeded bank passbook.',
        'Social Welfare Inspector verifies physical credentials.',
        'Monthly pension credited via Direct Benefit Transfer (DBT).',
      ],
      hi: [
        'nsap.nic.in पोर्टल पर आवेदन करें या तहसील/प्रखंड/नगर पालिका कार्यालय में फॉर्म जमा करें।',
        'आयु प्रमाण, बीपीएल प्रमाण पत्र और बैंक पासबुक संलग्न करें।',
        'समाज कल्याण अधिकारी द्वारा सत्यापन किया जाएगा।',
        'मासिक पेंशन सीधे आपके बैंक खाते में भेजी जाएगी।',
      ],
      mr: [
        'nsap.nic.in वर ऑनलाईन अर्ज करा किंवा तहसील/पंचायत समिती कार्यालयात अर्ज द्या.',
        'वयाचा पुरावा, बीपीएल दाखला व बँक पासबुक जोडा.',
        'पडताळणीनंतर दरमहा निवृत्तीवेतन खात्यात जमा होईल.',
      ],
    },
    officialPortalUrl: 'https://nsap.nic.in',
    helplineNumber: '1800-11-1967',
  },

  // 6. Divyangjan Pension & UDID Swavlamban Scheme
  {
    id: 'divyangjan-pension',
    name: {
      en: 'Divyangjan Disability Pension & UDID Welfare',
      hi: 'दिव्यांगजन पेंशन एवं यूडीआईडी स्वावलंबन योजना',
      mr: 'दिव्यांग निवृत्तीवेतन व स्वावलंबन योजना (UDID)',
    },
    shortCode: 'DIVYANG-UDID',
    department: {
      en: 'Department of Empowerment of Persons with Disabilities (DEPwD), MoSJE',
      hi: 'दिव्यांगजन सशक्तिकरण विभाग, सामाजिक न्याय एवं अधिकारिता मंत्रालय',
      mr: 'दिव्यांगजन सक्षमीकरण विभाग, सामाजिक न्याय मंत्रालय',
    },
    level: 'Central',
    applicableState: 'All India',
    category: 'Pensions & Divyangjan',
    tagline: {
      en: 'Financial pension, free assistive aids, travel concessions, and education support for persons with disabilities (40%+).',
      hi: '40% या अधिक दिव्यांगता वाले व्यक्तियों के लिए मासिक पेंशन, मुफ्त सहायक उपकरण और यात्रा छूट।',
      mr: '४०% किंवा त्याहून अधिक दिव्यांगत्व असलेल्या व्यक्तींसाठी मासिक पेन्शन, मोफत साधने व सवलती.',
    },
    benefit: {
      amountINR: 18000,
      period: 'yearly',
      displayText: {
        en: '₹12,000 - ₹36,000 / year + Free Aids',
        hi: '₹12,000 - ₹36,000 / वर्ष + मुफ्त उपकरण',
        mr: '₹१२,००० - ₹३६,००० / वर्ष + मोफत साहित्य',
      },
      details: {
        en: 'Monthly pension of ₹1,000 - ₹3,000/mo (combined Central IGNDPS + State share) + free motorized tricycles/hearing aids under ADIP.',
        hi: 'मासिक ₹1,000 से ₹3,000 तक की पेंशन + एडिप योजना के तहत मुफ्त व्हीलचेयर, कान की मशीन, ट्राईसाइकिल।',
        mr: 'दरमहा ₹१,००० ते ₹३,००० पेन्शन + मोफत कृत्रिम अवयव, व्हीलचेअर व श्रवणयंत्र.',
      },
    },
    eligibilityCriteria: {
      requiresDisability: true,
      minDisabilityPercentage: 40,
      maxIncomeINR: 200000,
      description: {
        en: 'Person with 40% or more certified disability (UDID card or Medical Board Disability Certificate) and low family income.',
        hi: 'सक्षम चिकित्सा बोर्ड द्वारा 40% या अधिक दिव्यांगता प्रमाणित व्यक्ति।',
        mr: 'वैद्यकीय मंडळाचे किमान ४०% दिव्यांगत्व प्रमाणपत्र किंवा UDID कार्ड असलेले नागरिक.',
      },
    },
    requiredDocuments: [
      {
        name: 'UDID Card / Medical Disability Certificate',
        documentType: 'Divyangjan UDID / Disability Certificate',
        mandatory: true,
        howToGet: {
          en: 'Issued by District Hospital Medical Board via swavlambancard.gov.in.',
          hi: 'जिला अस्पताल मेडिकल बोर्ड या swavlambancard.gov.in से यूडीआईडी कार्ड प्राप्त करें।',
          mr: 'जिल्हा शासकीय रुग्णालयाकडून किंवा swavlambancard.gov.in वरून UDID कार्ड मिळवा.',
        },
      },
      {
        name: 'Income & Residence Proof',
        documentType: 'Tahsildar Income Certificate',
        mandatory: true,
        howToGet: {
          en: 'Tahsildar income certificate showing annual family income.',
          hi: 'तहसीलदार द्वारा जारी आय प्रमाण पत्र।',
          mr: 'तहसीलदारांचा उत्पन्नाचा दाखला.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Apply for UDID card on swavlambancard.gov.in or visit District Civil Hospital.',
        'Submit medical assessment by civil surgeon / specialist board.',
        'Apply for Disability Pension at District Social Welfare Office or state Seva portal.',
        'Pension is directly credited every month to Aadhaar-seeded bank account.',
      ],
      hi: [
        'swavlambancard.gov.in पर यूडीआईडी कार्ड हेतु आवेदन करें।',
        'जिला अस्पताल में मेडिकल बोर्ड द्वारा परीक्षण कराएं।',
        'जिला समाज कल्याण कार्यालय या ई-डिस्ट्रिक्ट पोर्टल पर पेंशन फॉर्म भरें।',
        'मासिक पेंशन सीधे बैंक खाते में प्राप्त करें।',
      ],
      mr: [
        'swavlambancard.gov.in वर नोंदणी करून जिल्हा रुग्णालयात तपासणी करून घ्या.',
        'UDID कार्ड मिळाल्यानंतर सामाजिक न्याय विभागाकडे पेन्शनचा अर्ज करा.',
        'दरमहा खात्यात पेन्शन जमा होईल.',
      ],
    },
    officialPortalUrl: 'https://www.swavlambancard.gov.in',
    helplineNumber: '011-24365019 / 1800-180-5122',
  },

  // 7. PM Vishwakarma Scheme
  {
    id: 'pm-vishwakarma',
    name: {
      en: 'PM Vishwakarma Scheme',
      hi: 'प्रधानमंत्री विश्वकर्मा योजना',
      mr: 'पीएम विश्वकर्मा योजना (कारागीर व कामगार मदत)',
    },
    shortCode: 'PM-VISHWAKARMA',
    department: {
      en: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
      hi: 'सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय, भारत सरकार',
      mr: 'सूक्ष्म, लघू आणि मध्यम उद्योग मंत्रालय (MSME)',
    },
    level: 'Central',
    applicableState: 'All India',
    category: 'Skill & Self-Employment',
    tagline: {
      en: '₹15,000 modern toolkit grant, ₹500/day training stipend, and up to ₹3 Lakh collateral-free loan at 5% interest for traditional artisans & craftspeople.',
      hi: 'पारंपरिक कारीगरों और शिल्पकारों को ₹15,000 टूलकिट अनुदान, ₹500/दिन प्रशिक्षण स्टाइपेंड और 5% ब्याज पर ₹3 लाख तक का गारंटी-मुक्त ऋण।',
      mr: 'पारंपरिक कारागिरांना ₹१५,००० मोफत टूलकिट अनुदान, ₹५००/दिवस विद्यावेतन व ₹३ लाखांपर्यंत विनातारण कर्ज (५% व्याज).',
    },
    benefit: {
      amountINR: 15000,
      period: 'loan_subsidy',
      displayText: {
        en: '₹15,000 Free Toolkit + ₹3 Lakh Loan at 5%',
        hi: '₹15,000 मुफ्त टूलकिट + 5% पर ₹3 लाख तक लोन',
        mr: '₹१५,००० मोफत टूलकिट + ५% व्याजाने ₹३ लाख कर्ज',
      },
      details: {
        en: '₹15,000 e-voucher for tools + basic (5-7 days) & advanced training with ₹500/day stipend + collateral-free enterprise loan (Tranche 1: ₹1L, Tranche 2: ₹2L).',
        hi: 'औजार खरीदने के लिए ₹15,000 का ई-वाउचर + ट्रेनिंग के दौरान ₹500 प्रतिदिन + 5% रियायती दर पर ₹3 लाख तक व्यापार लोन।',
        mr: 'साहित्य खरेदीसाठी ₹१५,००० ई-व्हाउचर + प्रशिक्षणासाठी रोज ₹५०० + व्यवसाय वाढीसाठी विनातारण स्वस्त कर्ज.',
      },
    },
    eligibilityCriteria: {
      minAge: 18,
      requiresArtisanOrVendor: true,
      description: {
        en: 'Traditional artisans & craftsmen in 18 trades (Carpenters, Blacksmiths, Potters, Masons, Cobblers, Tailors, Barbers, Washermen, Basket makers, Fisher net makers, Sculptors etc.).',
        hi: '18 पारंपरिक व्यवसायों (बढ़ई, लोहार, कुम्हार, राजमिस्त्री, मोची, दर्जी, नाई, धोबी, बुनकर आदि) में कार्यरत कारीगर।',
        mr: '१८ पारंपरिक व्यवसायांमधील कारागीर (सुतार, लोहार, कुंभार, गवंडी, चांभार, शिंपी, नाभिक, धोबी, मूर्तिकार इत्यादी).',
      },
    },
    requiredDocuments: [
      {
        name: 'Aadhaar Card with Mobile Link',
        documentType: 'Aadhaar / Voter ID',
        mandatory: true,
        howToGet: {
          en: 'Aadhaar linked with mobile OTP.',
          hi: 'आधार कार्ड मोबाइल नंबर से लिंक होना चाहिए।',
          mr: 'मोबाईलशी लिंक असलेले आधार कार्ड.',
        },
      },
      {
        name: 'Bank Passbook & Skill Certificate / Self-Declaration',
        documentType: 'General Regional Document',
        mandatory: true,
        howToGet: {
          en: 'Self-declaration of trade verified by Gram Panchayat Head / Urban Local Body.',
          hi: 'ग्राम प्रधान / नगर पालिका द्वारा सत्यापित व्यवसाय स्व-घोषणा पत्र।',
          mr: 'ग्रामसेवक/सरपंच किंवा नगरपालिकेकडून व्यवसायाचा दाखला.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Visit nearest Common Service Centre (CSC) with Aadhaar and Bank Passbook.',
        'CSC operator registers citizen on pmvishwakarma.gov.in portal.',
        'Stage 1 Gram Panchayat verification, Stage 2 District verification, Stage 3 Screening committee.',
        'Receive PM Vishwakarma Digital Certificate, ID card, and ₹15,000 toolkit voucher.',
      ],
      hi: [
        'आधार और बैंक पासबुक लेकर नजदीकी सीएससी (CSC) केंद्र पर जाएं।',
        'सीएससी वीएलई pmvishwakarma.gov.in पर बायोमेट्रिक पंजीकरण करेगा।',
        'ग्राम पंचायत एवं जिला स्तरीय सत्यापन होगा।',
        'डिजिटल विश्वकर्मा प्रमाणपत्र, आईडी कार्ड और ₹15,000 का टूलकिट वाउचर प्राप्त करें।',
      ],
      mr: [
        'जवळच्या सीएससी केंद्रात जाऊन आधार व बँक खात्यासह नोंदणी करा.',
        'ग्रामपंचायत व जिल्हा समितीकडून अर्जाची पडताळणी होईल.',
        'विश्वकर्मा ओळखपत्र व ₹१५,००० चे मोफत टूलकिट व्हाउचर मिळवा.',
      ],
    },
    officialPortalUrl: 'https://pmvishwakarma.gov.in',
    helplineNumber: '18002677777 / 011-23061500',
  },

  // 8. Post-Matric Scholarship for SC/ST/OBC Students
  {
    id: 'post-matric-scholarship',
    name: {
      en: 'Post-Matric Scholarship for SC / ST / OBC / EWS Students',
      hi: 'अनुसूचित जाति/जनजाति/पिछड़ा वर्ग हेतु पोस्ट-मैट्रिक छात्रवृत्ति',
      mr: 'पोस्ट-मॅट्रिक शिष्यवृत्ती योजना (SC/ST/OBC/EWS)',
    },
    shortCode: 'POST-MATRIC',
    department: {
      en: 'Ministry of Social Justice & Empowerment / Tribal Affairs & State Govt',
      hi: 'सामाजिक न्याय एवं अधिकारिता तथा जनजातीय कार्य मंत्रालय',
      mr: 'सामाजिक न्याय व आदिवासी विकास विभाग, भारत सरकार व राज्य शासन',
    },
    level: 'Central',
    applicableState: 'All India',
    category: 'Education & Scholarships',
    tagline: {
      en: '100% compulsory non-refundable fees reimbursement + monthly maintenance allowance up to ₹13,500/year for higher education.',
      hi: 'उच्च शिक्षा हेतु पूर्ण शिक्षण शुल्क की प्रतिपूर्ति और ₹13,500 प्रति वर्ष तक का मासिक निर्वाह भत्ता।',
      mr: 'उच्च शिक्षणासाठी संपूर्ण शैक्षणिक फी परतावा आणि दरवर्षी ₹१३,५०० पर्यंत निर्वाह भत्ता.',
    },
    benefit: {
      amountINR: 25000,
      period: 'yearly',
      displayText: {
        en: '₹10,000 - ₹50,000 / year (Fee Reimbursement + Stipend)',
        hi: '₹10,000 - ₹50,000 / वर्ष (फीस माफी + भत्ता)',
        mr: '₹१०,००० - ₹५०,००० / वर्ष (फी परतावा + विद्यावेतन)',
      },
      details: {
        en: 'Covers college tuition, exam fees, study tour, book allowance, and monthly maintenance allowance credited directly to student account.',
        hi: 'कॉलेज ट्यूशन फीस, परीक्षा शुल्क, किताबें और मासिक जेबखर्च सीधे छात्र के बैंक खाते में DBT द्वारा।',
        mr: 'महाविद्यालयाची फी, परीक्षा शुल्क व मासिक भत्ता थेट विद्यार्थ्याच्या खात्यात जमा.',
      },
    },
    eligibilityCriteria: {
      requiresStudent: true,
      socialCategories: ['SC', 'ST', 'OBC', 'EWS', 'Minority'],
      maxIncomeINR: 250000,
      description: {
        en: 'Students belonging to SC/ST/OBC/EWS studying in Class 11, 12, ITI, Diploma, Degree, Medical, or Engineering with family income under ₹2.5 Lakh/yr.',
        hi: '11वीं, 12वीं, आईटीआई, डिप्लोमा, ग्रेजुएशन, मेडिकल या इंजीनियरिंग में अध्ययनरत छात्र जिनकी वार्षिक पारिवारिक आय ₹2.5 लाख से कम हो।',
        mr: '११ वी, १२ वी, पदवी, डिप्लोमा, इंजिनिअरिंग किंवा मेडिकलचे शिक्षण घेणारे विद्यार्थी (कौटुंबिक उत्पन्न ₹२.५ लाखांपेक्षा कमी).',
      },
    },
    requiredDocuments: [
      {
        name: 'Caste / Category Certificate',
        documentType: 'Caste / Community Certificate',
        mandatory: true,
        howToGet: {
          en: 'Issued by Sub-Divisional Officer (SDO) / Tahsildar.',
          hi: 'उपजिलाधिकारी (SDM) या तहसीलदार द्वारा जारी जाति प्रमाण पत्र।',
          mr: 'उपविभागीय अधिकारी (SDO) किंवा तहसीलदार कार्यालयाकडून जारी केलेले जात प्रमाणपत्र.',
        },
      },
      {
        name: 'Tahsildar Income Certificate (< ₹2.5 Lakh)',
        documentType: 'Tahsildar Income Certificate',
        mandatory: true,
        howToGet: {
          en: 'Revenue department income certificate for the current financial year.',
          hi: 'चालू वित्तीय वर्ष का सक्षम अधिकारी द्वारा निर्गत आय प्रमाण पत्र।',
          mr: 'चालू आर्थिक वर्षाचा अधिकृत उत्पन्नाचा दाखला.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Register on National Scholarship Portal (scholarships.gov.in) or State scholarship portal (e.g. MahaDBT, UP Scholarship).',
        'Enter College Admission details, Course, and Roll Number.',
        'Upload Caste certificate, Income certificate, Fee receipt, and previous year marksheet.',
        'Institute verifies application, followed by District Social Welfare approval.',
      ],
      hi: [
        'राष्ट्रीय छात्रवृत्ति पोर्टल (scholarships.gov.in) या राज्य पोर्टल (जैसे MahaDBT, UP Scholarship) पर पंजीकरण करें।',
        'कॉलेज प्रवेश, पाठ्यक्रम और रोल नंबर दर्ज करें।',
        'जाति प्रमाण पत्र, आय प्रमाण पत्र, फीस रसीद और अंकतालिका अपलोड करें।',
        'कॉलेज और जिला समाज कल्याण विभाग द्वारा सत्यापन के बाद छात्रवृत्ति सीधे खाते में आएगी।',
      ],
      mr: [
        'National Scholarship Portal (scholarships.gov.in) किंवा MahaDBT वर नोंदणी करा.',
        'कॉलेज प्रवेश व अभ्यासक्रमाचा तपशील भरा.',
        'जात दाखला, उत्पन्नाचा दाखला व गुणपत्रिका अपलोड करा.',
        'कॉलेज पडताळणीनंतर थेट खात्यात शिष्यवृत्ती जमा होईल.',
      ],
    },
    officialPortalUrl: 'https://scholarships.gov.in',
    helplineNumber: '0120-6619540',
  },

  // 9. MAHARASHTRA: Mukhyamantri Majhi Ladki Bahin Yojana
  {
    id: 'ladki-bahin-maharashtra',
    name: {
      en: 'Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra)',
      hi: 'मुख्यमंत्री माझी लाडकी बहीण योजना (महाराष्ट्र)',
      mr: 'मुख्यमंत्री माझी लाडकी बहीण योजना (महाराष्ट्र शासन)',
    },
    shortCode: 'LADKI-BAHIN',
    department: {
      en: 'Women and Child Development Department, Govt. of Maharashtra',
      hi: 'महिला एवं बाल विकास विभाग, महाराष्ट्र शासन',
      mr: 'महिला व बालविकास विभाग, महाराष्ट्र शासन',
    },
    level: 'State',
    applicableState: 'Maharashtra',
    category: 'Women & Child Welfare',
    tagline: {
      en: 'Monthly financial assistance of ₹1,500 (₹18,000/year) directly credited to bank accounts of women aged 21 to 65 years in Maharashtra.',
      hi: 'महाराष्ट्र की 21 से 65 वर्ष की पात्र महिलाओं को ₹1,500 प्रति माह (₹18,000/वर्ष) की सीधी वित्तीय सहायता।',
      mr: 'महाराष्ट्रातील २१ ते ६५ वयोगटातील पात्र महिलांना दरमहा ₹१,५०० (वार्षिक ₹१८,०००) थेट बँक खात्यात.',
    },
    benefit: {
      amountINR: 18000,
      period: 'yearly',
      displayText: {
        en: '₹18,000 / year (₹1,500/month)',
        hi: '₹18,000 / वर्ष (₹1,500/माह)',
        mr: '₹१८,००० / वर्ष (दरमहा ₹१,५००)',
      },
      details: {
        en: '₹1,500 direct bank transfer every month to woman head of household with Aadhaar-linked bank account.',
        hi: 'प्रति माह ₹1,500 की राशि सीधे महिला के आधार-लिंक्ड बैंक खाते में जमा।',
        mr: 'प्रत्येक महिन्याला ₹१,५०० थेट आधार लिंक असलेल्या बँक खात्यात DBT द्वारे जमा.',
      },
    },
    eligibilityCriteria: {
      genderRequired: 'female',
      minAge: 21,
      maxAge: 65,
      maxIncomeINR: 250000,
      rationCardAllowed: ['AAY (Antyodaya Anna Yojana)', 'BPL (Below Poverty Line)', 'PHH (Priority Household)', 'White Card (APL)'],
      description: {
        en: 'Women resident of Maharashtra aged 21-65 years with annual family income up to ₹2.5 Lakh (or holding Yellow/Orange Ration Card).',
        hi: 'महाराष्ट्र की स्थायी निवासी 21-65 वर्ष की महिलाएं जिनकी पारिवारिक आय ₹2.5 लाख से कम हो या पीला/केसरी राशन कार्ड धारक हों।',
        mr: 'महाराष्ट्रातील २१ ते ६५ वयोगटातील महिला, ज्यांच्या कुटुंबाचे वार्षिक उत्पन्न ₹२.५ लाखांपर्यंत आहे किंवा पिवळे/केशरी रेशन कार्ड आहे.',
      },
    },
    requiredDocuments: [
      {
        name: 'Aadhaar Card & Domicile / Ration Card (Yellow/Orange)',
        documentType: 'Ration Card (NFSA/BPL/AAY)',
        mandatory: true,
        howToGet: {
          en: 'Ration card issued by Maharashtra Food & Civil Supplies or Domicile certificate from Aaple Sarkar.',
          hi: 'महाराष्ट्र सरकार द्वारा जारी राशन कार्ड या अधिवास (डोमिसाइल) प्रमाण पत्र।',
          mr: 'पिवळे किंवा केशरी रेशन कार्ड किंवा महाराष्ट्राचे अधिवास (Domicile) प्रमाणपत्र.',
        },
      },
      {
        name: 'Tahsildar Income Certificate (< ₹2.5 Lakh) or Yellow/Orange Card',
        documentType: 'Tahsildar Income Certificate',
        mandatory: false,
        howToGet: {
          en: 'If holding Yellow/Orange ration card, separate income certificate is waived.',
          hi: 'यदि पीला/केसरी राशन कार्ड है तो अलग से आय प्रमाण पत्र की आवश्यकता नहीं है।',
          mr: 'पिवळे/केशरी रेशन कार्ड असल्यास वेगळ्या उत्पन्नाच्या दाखल्याची गरज नाही.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Apply online on "Nari Shakti Doot" app or ladakibahin.maharashtra.gov.in portal.',
        'Enter Aadhaar number and verify via OTP.',
        'Upload Ration Card / Domicile, Bank details, and Self-Declaration form.',
        'Approval issued by Taluka verification committee.',
      ],
      hi: [
        '"नारी शक्ति दूत" ऐप या पोर्टल पर ऑनलाइन आवेदन करें।',
        'आधार नंबर दर्ज कर ओटीपी से सत्यापित करें।',
        'राशन कार्ड/डोमिसाइल और बैंक पासबुक अपलोड करें।',
        'तालुका स्तरीय जांच के उपरांत पैसा खाते में आना शुरू होगा।',
      ],
      mr: [
        '"नारी शक्ती दूत" ॲप किंवा ladakibahin.maharashtra.gov.in पोर्टलवर अर्ज करा.',
        'आधार क्रमांक टाकून OTP पडताळणी करा.',
        'रेशन कार्ड, बँक खाते व हमीपत्र अपलोड करा.',
        'मंजुरीनंतर थेट दरमहा ₹१,५०० खात्यात जमा होतील.',
      ],
    },
    officialPortalUrl: 'https://ladakibahin.maharashtra.gov.in',
    helplineNumber: '181 / 022-22027050',
  },

  // 10. MAHARASHTRA: Namo Shetkari Mahasanman Nidhi Yojana
  {
    id: 'namo-shetkari-maharashtra',
    name: {
      en: 'Namo Shetkari Maha Samman Nidhi Yojana (Maharashtra)',
      hi: 'नमो शेतकरी महासन्मान निधि योजना (महाराष्ट्र)',
      mr: 'नमो शेतकरी महासन्मान निधी योजना (महाराष्ट्र शासन)',
    },
    shortCode: 'NAMO-SHETKARI',
    department: {
      en: 'Department of Agriculture, Govt. of Maharashtra',
      hi: 'कृषि विभाग, महाराष्ट्र शासन',
      mr: 'कृषी विभाग, महाराष्ट्र शासन',
    },
    level: 'State',
    applicableState: 'Maharashtra',
    category: 'Agriculture & Farming',
    tagline: {
      en: 'Additional ₹6,000/year state top-up for Maharashtra farmers on top of central PM-Kisan (Total ₹12,000/year).',
      hi: 'महाराष्ट्र के किसानों को पीएम-किसान के अतिरिक्त राज्य सरकार द्वारा ₹6,000/वर्ष का अतिरिक्त लाभ (कुल ₹12,000/वर्ष)।',
      mr: 'पीएम-किसान व्यतिरिक्त महाराष्ट्र शासनाकडून शेतकऱ्यांना आणखी ₹६,००० चे अनुदान (एकूण ₹१२,००० वार्षिक).',
    },
    benefit: {
      amountINR: 6000,
      period: 'yearly',
      displayText: {
        en: '₹6,000 / year (State Farmer Top-up)',
        hi: '₹6,000 / वर्ष (राज्य किसान सहायता)',
        mr: '₹६,००० / वर्ष (राज्य शेतकरी अनुदान)',
      },
      details: {
        en: 'Disbursed in 3 tranches of ₹2,000 each in sync with PM-Kisan tranches.',
        hi: 'पीएम-किसान की तरह ही 3 किस्तों में प्रति किस्त ₹2,000 सीधे बैंक खाते में।',
        mr: 'पीएम-किसान प्रमाणेच दर ४ महिन्यांनी ₹२,००० चे ३ हप्ते थेट खात्यात.',
      },
    },
    eligibilityCriteria: {
      requiresFarmer: true,
      maxLandAcres: 5,
      description: {
        en: 'Farmers in Maharashtra who are approved beneficiaries of PM-Kisan Samman Nidhi.',
        hi: 'महाराष्ट्र के वे सभी किसान जो केंद्र की पीएम-किसान योजना के तहत स्वीकृत हैं।',
        mr: 'महाराष्ट्रातील सर्व शेतकरी जे केंद्र शासनाच्या पीएम-किसान योजनेत पात्र आहेत.',
      },
    },
    requiredDocuments: [
      {
        name: '7/12 Satbara Extract & PM-Kisan Registration ID',
        documentType: '7/12 Land Record (Satbara / RoR / Khasra)',
        mandatory: true,
        howToGet: {
          en: 'Mahabhulekh digital 7/12 and Aadhaar-linked bank account.',
          hi: 'महाभूलेख डिजिटल 7/12 और पीएम-किसान पंजीकरण संख्या।',
          mr: 'डिजिटल ७/१२ उतारा व पीएम-किसान नोंदणी क्रमांक.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Automatic enrollment for active PM-Kisan beneficiaries in Maharashtra.',
        'Ensure Land Seeding and e-KYC are complete on pmkisan.gov.in.',
        'Track payment status on krishi.maharashtra.gov.in.',
      ],
      hi: [
        'पीएम-किसान के पंजीकृत लाभार्थियों को स्वतः शामिल किया जाता है।',
        'भूलेख सत्यापन और e-KYC पूरा रखें।',
        'कृषि विभाग की वेबसाइट पर स्थिति जांचें।',
      ],
      mr: [
        'पीएम-किसान पात्र शेतकऱ्यांना आपोआप हा लाभ मिळतो.',
        'भूमी अभिलेख व e-KYC पूर्ण असल्याची खात्री करा.',
      ],
    },
    officialPortalUrl: 'https://krishi.maharashtra.gov.in',
    helplineNumber: '1800-233-4000',
  },

  // 11. UTTAR PRADESH: Mukhyamantri Kanya Sumangala Yojana
  {
    id: 'kanya-sumangala-up',
    name: {
      en: 'Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh)',
      hi: 'मुख्यमंत्री कन्या सुमंगला योजना (उत्तर प्रदेश)',
      mr: 'मुख्यमंत्री कन्या सुमंगला योजना (उत्तर प्रदेश)',
    },
    shortCode: 'UP-MKSY',
    department: {
      en: 'Women and Child Development Department, Govt. of UP',
      hi: 'महिला एवं बाल विकास विभाग, उत्तर प्रदेश शासन',
      mr: 'महिला व बालविकास विभाग, उत्तर प्रदेश शासन',
    },
    level: 'State',
    applicableState: 'Uttar Pradesh',
    category: 'Women & Child Welfare',
    tagline: {
      en: 'Total financial assistance of ₹25,000 in 6 installments from birth to degree graduation for girl children of UP.',
      hi: 'उत्तर प्रदेश की बालिकाओं को जन्म से स्नातक तक 6 चरणों में कुल ₹25,000 की वित्तीय सहायता।',
      mr: 'उत्तर प्रदेशातील मुलींना जन्मापासून ते पदवीपर्यंत ६ टप्प्यांत एकूण ₹२५,००० ची आर्थिक मदत.',
    },
    benefit: {
      amountINR: 25000,
      period: 'one-time',
      displayText: {
        en: '₹25,000 (Milestone Grants in 6 stages)',
        hi: '₹25,000 (6 चरणों में जन्म से कॉलेज तक)',
        mr: '₹२५,००० (जन्मापासून पदवीपर्यंत ६ हप्त्यांत)',
      },
      details: {
        en: '₹5,000 at birth, ₹2,000 at 1-year vaccination, ₹3,000 at Class 1, ₹3,000 at Class 6, ₹5,000 at Class 9, ₹7,000 at graduation/diploma.',
        hi: 'जन्म पर ₹5,000, टीकाकरण पर ₹2,000, कक्षा 1 में ₹3,000, कक्षा 6 में ₹3,000, कक्षा 9 में ₹5,000 और डिग्री/डिप्लोमा में ₹7,000।',
        mr: 'जन्म, लसीकरण, शाळा प्रवेश व पदवी अशा ६ टप्प्यांत थेट बँक खात्यात अनुदान.',
      },
    },
    eligibilityCriteria: {
      genderRequired: 'female',
      maxIncomeINR: 300000,
      description: {
        en: 'Permanent resident of Uttar Pradesh with annual family income under ₹3 Lakh and maximum 2 girl children in the family.',
        hi: 'उत्तर प्रदेश का स्थायी निवासी परिवार जिसकी वार्षिक आय ₹3 लाख से कम हो एवं परिवार में अधिकतम 2 बेटियां हों।',
        mr: 'उत्तर प्रदेशातील रहिवासी, कौटुंबिक उत्पन्न ₹३ लाखांपेक्षा कमी आणि कमाल २ मुली असलेले कुटुंब.',
      },
    },
    requiredDocuments: [
      {
        name: 'Birth Certificate of Girl Child & Domicile of Parents',
        documentType: 'General Regional Document',
        mandatory: true,
        howToGet: {
          en: 'Municipal / Nagar Panchayat birth certificate and UP residence certificate.',
          hi: 'नगर निगम/ग्राम पंचायत जन्म प्रमाण पत्र और उत्तर प्रदेश निवास प्रमाण पत्र।',
          mr: 'जन्म प्रमाणपत्र व रहिवासी दाखला.',
        },
      },
      {
        name: 'Tahsildar Income Certificate (< ₹3 Lakh)',
        documentType: 'Tahsildar Income Certificate',
        mandatory: true,
        howToGet: {
          en: 'Issued by Tehsil via e-District UP portal (edistrict.up.gov.in).',
          hi: 'ई-डिस्ट्रिक्ट यूपी पोर्टल द्वारा जारी तहसीलदार आय प्रमाण पत्र।',
          mr: 'तहसीलदारांचा उत्पन्नाचा दाखला.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Register on mksy.up.gov.in portal.',
        'Select applicable stage (e.g. Stage 1 at birth, Stage 6 for college).',
        'Upload child photo, Aadhaar of parents, income certificate, and school admission certificate.',
        'Sanctioned amount credited to parent/girl bank account.',
      ],
      hi: [
        'mksy.up.gov.in पोर्टल पर नागरिक पंजीकरण करें।',
        'बालिका की वर्तमान कक्षा/आयु अनुसार चरण का चयन करें।',
        'आय प्रमाण पत्र, निवास प्रमाण पत्र और स्कूल प्रवेश रसीद अपलोड करें।',
        'जांच के बाद सीधे बैंक खाते में किस्त भेजी जाएगी।',
      ],
      mr: [
        'mksy.up.gov.in वर ऑनलाईन नोंदणी करा.',
        'मुलीचे वय/वर्ग निवडून आवश्यक कागदपत्रे जोडा.',
        'मंजुरीनंतर खात्यात रक्कम जमा होईल.',
      ],
    },
    officialPortalUrl: 'https://mksy.up.gov.in',
    helplineNumber: '181 / 0522-2286315',
  },

  // 12. MADHYA PRADESH: Mukhyamantri Ladli Behna Yojana
  {
    id: 'ladli-behna-mp',
    name: {
      en: 'Mukhyamantri Ladli Behna Yojana (Madhya Pradesh)',
      hi: 'मुख्यमंत्री लाड़ली बहना योजना (मध्य प्रदेश)',
      mr: 'मुख्यमंत्री लाडली बहना योजना (मध्य प्रदेश)',
    },
    shortCode: 'MP-LADLI-BEHNA',
    department: {
      en: 'Women & Child Development, Govt. of Madhya Pradesh',
      hi: 'महिला एवं बाल विकास विभाग, मध्य प्रदेश शासन',
      mr: 'महिला व बालविकास विभाग, मध्य प्रदेश शासन',
    },
    level: 'State',
    applicableState: 'Madhya Pradesh',
    category: 'Women & Child Welfare',
    tagline: {
      en: '₹1,250 monthly (₹15,000/year) direct financial assistance for married/widowed/divorced women aged 21-60 in MP.',
      hi: 'मध्य प्रदेश की 21-60 वर्ष की महिलाओं को ₹1,250 प्रति माह (₹15,000/वर्ष) की सीधी आर्थिक मदद।',
      mr: 'मध्य प्रदेशातील २१ ते ६० वयोगटातील महिलांना दरमहा ₹१,२५० (वार्षिक ₹१५,०००) थेट खात्यात.',
    },
    benefit: {
      amountINR: 15000,
      period: 'yearly',
      displayText: {
        en: '₹15,000 / year (₹1,250/month)',
        hi: '₹15,000 / वर्ष (₹1,250/माह)',
        mr: '₹१५,००० / वर्ष (दरमहा ₹१,२५०)',
      },
      details: {
        en: 'Direct Benefit Transfer on the 10th of every month directly to woman’s Aadhaar-seeded bank account.',
        hi: 'प्रत्येक माह की 10 तारीख को महिला के बैंक खाते में ₹1,250 की राशि अंतरित।',
        mr: 'दर महिन्याच्या १० तारखेला थेट बँक खात्यात रक्कम जमा.',
      },
    },
    eligibilityCriteria: {
      genderRequired: 'female',
      minAge: 21,
      maxAge: 60,
      maxIncomeINR: 250000,
      maxLandAcres: 5,
      description: {
        en: 'Married, widowed, divorced women of MP with family income < ₹2.5L and land < 5 acres without four-wheeler.',
        hi: 'मध्य प्रदेश की 21-60 वर्ष की विवाहित/विधवा/परित्यक्ता महिलाएं (आय < ₹2.5 लाख, भूमि < 5 एकड़)।',
        mr: 'मध्य प्रदेशातील २१ ते ६० वयोगटातील महिला (कौटुंबिक उत्पन्न ₹२.५ लाखांपेक्षा कमी व ५ एकरापेक्षा कमी जमीन).',
      },
    },
    requiredDocuments: [
      {
        name: 'Samagra ID & Aadhaar with Bank DBT active',
        documentType: 'Aadhaar / Voter ID',
        mandatory: true,
        howToGet: {
          en: 'MP Samagra Portal (samagra.gov.in) Family ID and Aadhaar e-KYC.',
          hi: 'समग्र आईडी एवं आधार कार्ड (ई-केवाईसी और डीबीटी सक्रिय होना अनिवार्य)।',
          mr: 'समग्र आयडी व आधार लिंक बँक खाते.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Apply at Gram Panchayat / Ward camp or on cmladlibahna.mp.gov.in.',
        'Submit Samagra Member ID and Aadhaar number.',
        'Complete on-the-spot biometric/photo verification.',
        'Track monthly credit SMS on registered mobile.',
      ],
      hi: [
        'ग्राम पंचायत/वार्ड स्तर के विशेष शिविर में जाएं या पोर्टल पर आवेदन करें।',
        'समग्र परिवार एवं सदस्य आईडी तथा आधार दर्ज कराएं।',
        'फोटो व बायोमेट्रिक सत्यापन कराएं।',
        'प्रति माह 10 तारीख को बैंक खाते में राशि प्राप्त करें।',
      ],
      mr: [
        'ग्रामपंचायत किंवा वॉर्ड शिबिरामध्ये जाऊन नोंदणी करा.',
        'समग्र आयडी व आधार क्रमांक द्या.',
      ],
    },
    officialPortalUrl: 'https://cmladlibahna.mp.gov.in',
    helplineNumber: '0755-2700800',
  },

  // 13. KARNATAKA: Gruha Lakshmi Scheme
  {
    id: 'gruha-lakshmi-karnataka',
    name: {
      en: 'Gruha Lakshmi Scheme (Karnataka)',
      hi: 'गृह लक्ष्मी योजना (कर्नाटक)',
      mr: 'गृह लक्ष्मी योजना (कर्नाटक शासन)',
    },
    shortCode: 'GRUHA-LAKSHMI',
    department: {
      en: 'Department of Women and Child Development, Govt. of Karnataka',
      hi: 'महिला एवं बाल विकास विभाग, कर्नाटक सरकार',
      mr: 'महिला व बालविकास विभाग, कर्नाटक सरकार',
    },
    level: 'State',
    applicableState: 'Karnataka',
    category: 'Women & Child Welfare',
    tagline: {
      en: '₹2,000 monthly (₹24,000/year) direct cash assistance to female head of family listed in BPL/APL ration cards in Karnataka.',
      hi: 'कर्नाटक के राशन कार्ड में दर्ज परिवार की महिला मुखिया को ₹2,000 प्रति माह (₹24,000/वर्ष) की सीधी सहायता।',
      mr: 'कर्नाटकातील रेशन कार्डावरील कुटुंबप्रमुख महिलांना दरमहा ₹२,००० (वार्षिक ₹२४,०००) थेट मदत.',
    },
    benefit: {
      amountINR: 24000,
      period: 'yearly',
      displayText: {
        en: '₹24,000 / year (₹2,000/month)',
        hi: '₹24,000 / वर्ष (₹2,000/माह)',
        mr: '₹२४,००० / वर्ष (दरमहा ₹२,०००)',
      },
      details: {
        en: 'Direct benefit transfer of ₹2,000/month to woman head of household. Tax paying women and GST registered families are excluded.',
        hi: 'महिला मुखिया के बैंक खाते में ₹2,000 प्रति माह। आयकर दाता एवं जीएसटी पंजीकृत परिवार बाहर हैं।',
        mr: 'कुटुंबप्रमुख महिलेच्या बँक खात्यात दरमहा ₹२,००० थेट जमा.',
      },
    },
    eligibilityCriteria: {
      genderRequired: 'female',
      rationCardAllowed: ['AAY (Antyodaya Anna Yojana)', 'BPL (Below Poverty Line)', 'PHH (Priority Household)', 'White Card (APL)'],
      description: {
        en: 'Female head of family named in Karnataka BPL / Antyodaya / APL ration cards, whose husband is not paying Income Tax/GST.',
        hi: 'कर्नाटक बीपीएल/अंत्योदय राशन कार्ड में महिला मुखिया के रूप में नामित महिला (पति आयकर/जीएसटी दाता न हो)।',
        mr: 'कर्नाटक रेशन कार्डावरील महिला प्रमुख (पती करदाता नसावा).',
      },
    },
    requiredDocuments: [
      {
        name: 'Karnataka Ration Card (BPL / AAY / APL)',
        documentType: 'Ration Card (NFSA/BPL/AAY)',
        mandatory: true,
        howToGet: {
          en: 'Karnataka Ahara portal (ahara.kar.nic.in) ration card showing female head.',
          hi: 'कर्नाटक आहार पोर्टल राशन कार्ड जिसमें महिला मुखिया का नाम हो।',
          mr: 'कर्नाटक रेशन कार्ड.',
        },
      },
      {
        name: 'Aadhaar Card linked to Bank Account',
        documentType: 'Aadhaar / Voter ID',
        mandatory: true,
        howToGet: {
          en: 'Aadhaar of wife and husband.',
          hi: 'महिला व पति का आधार कार्ड।',
          mr: 'पती व पत्नीचे आधार कार्ड.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Visit nearest Karnataka One, Grama One, or Bapuji Seva Kendra.',
        'SMS your 12-digit Ration card number to 1902 or 8147500500 to get an appointment slot.',
        'Provide Aadhaar and bank details for biometric verification.',
        'Amount credited monthly via DBT.',
      ],
      hi: [
        'कर्नाटक वन, ग्राम वन या बापूजी सेवा केंद्र पर जाएं।',
        'राशन कार्ड नंबर 1902 पर एसएमएस करके अपॉइंटमेंट लें।',
        'आधार और बैंक विवरण देकर सत्यापन पूरा करें।',
      ],
      mr: [
        'कर्नाटक वन किंवा ग्राम वन सेवा केंद्रात जाऊन नोंदणी करा.',
        'आधार व रेशन कार्ड द्वारे पडताळणी करा.',
      ],
    },
    officialPortalUrl: 'https://sevasindhuservices.karnataka.gov.in',
    helplineNumber: '1902',
  },

  // 14. WEST BENGAL: Lakshmir Bhandar Scheme
  {
    id: 'lakshmir-bhandar-wb',
    name: {
      en: 'Lakshmir Bhandar Scheme (West Bengal)',
      hi: 'लक्ष्मी भंडार योजना (पश्चिम बंगाल)',
      mr: 'लक्ष्मी भंडार योजना (पश्चिम बंगाल शासन)',
    },
    shortCode: 'LAKSHMIR-BHANDAR',
    department: {
      en: 'Department of Women & Child Development and Social Welfare, Govt. of West Bengal',
      hi: 'महिला एवं बाल विकास तथा समाज कल्याण विभाग, पश्चिम बंगाल सरकार',
      mr: 'महिला व बालविकास विभाग, पश्चिम बंगाल शासन',
    },
    level: 'State',
    applicableState: 'West Bengal',
    category: 'Women & Child Welfare',
    tagline: {
      en: '₹1,200/month (₹14,400/yr) for SC/ST women and ₹1,000/month (₹12,000/yr) for General/OBC women aged 25-60 in West Bengal.',
      hi: 'पश्चिम बंगाल की 25-60 वर्ष की एससी/एसटी महिलाओं को ₹1,200/माह और सामान्य/ओबीसी महिलाओं को ₹1,000/माह।',
      mr: 'पश्चिम बंगालमधील २५ ते ६० वयोगटातील SC/ST महिलांना दरमहा ₹१,२०० व इतर महिलांना ₹१,००० थेट मदत.',
    },
    benefit: {
      amountINR: 14400,
      period: 'yearly',
      displayText: {
        en: '₹12,000 - ₹14,400 / year',
        hi: '₹12,000 - ₹14,400 / वर्ष',
        mr: '₹१२,००० - ₹१४,४०० / वर्ष',
      },
      details: {
        en: 'Direct bank transfer of ₹1,200/mo (SC/ST) or ₹1,000/mo (General/OBC) to the female head of the family.',
        hi: 'एससी/एसटी वर्ग को ₹1,200 प्रति माह एवं सामान्य/ओबीसी वर्ग को ₹1,000 प्रति माह सीधे खाते में।',
        mr: 'SC/ST महिलांना दरमहा ₹१,२०० व इतर महिलांना ₹१,००० बँक खात्यात.',
      },
    },
    eligibilityCriteria: {
      genderRequired: 'female',
      minAge: 25,
      maxAge: 60,
      description: {
        en: 'Women aged 25-60 years residing in West Bengal with Swasthya Sathi card, excluding permanent govt employees.',
        hi: 'पश्चिम बंगाल की 25 से 60 वर्ष की महिलाएं जिनके पास स्वास्थ्य साथी कार्ड हो (स्थायी सरकारी कर्मचारी बाहर)।',
        mr: 'पश्चिम बंगालमधील २५ ते ६० वयोगटातील महिला ज्यांच्याकडे स्वास्थ्य साथी कार्ड आहे.',
      },
    },
    requiredDocuments: [
      {
        name: 'Swasthya Sathi Card & Aadhaar Card',
        documentType: 'General Regional Document',
        mandatory: true,
        howToGet: {
          en: 'West Bengal Swasthya Sathi health smart card and Aadhaar card.',
          hi: 'स्वास्थ्य साथी स्मार्ट कार्ड और आधार कार्ड।',
          mr: 'स्वास्थ्य साथी कार्ड व आधार कार्ड.',
        },
      },
      {
        name: 'Caste Certificate (for SC/ST higher rate)',
        documentType: 'Caste / Community Certificate',
        mandatory: false,
        howToGet: {
          en: 'Sub-Division / DM office caste certificate.',
          hi: 'एसडीएम या जिला अधिकारी द्वारा जारी जाति प्रमाण पत्र।',
          mr: 'जात प्रमाणपत्र.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Collect and submit form at Duare Sarkar camps or Block BDO office.',
        'Attach Swasthya Sathi card copy, Aadhaar copy, Caste certificate (if SC/ST), and Bank passbook.',
        'Form processed and approved by BDO / SDO.',
        'Monthly assistance credited directly to bank account.',
      ],
      hi: [
        '"द्वारे सरकार" शिविर या प्रखंड विकास अधिकारी (BDO) कार्यालय से फॉर्म लें।',
        'स्वास्थ्य साथी कार्ड, आधार, जाति प्रमाण पत्र और बैंक पासबुक संलग्न करें।',
        'सत्यापन उपरांत सीधे खाते में मासिक राशि आनी शुरू होगी।',
      ],
      mr: [
        '"दुआरे सरकार" शिबिरात अर्ज सादर करा.',
        'स्वास्थ्य साथी कार्ड व बँक खाते जोडून मंजुरी मिळवा.',
      ],
    },
    officialPortalUrl: 'https://socialwelfare.wb.gov.in',
    helplineNumber: '033-22143526 / 1800-345-5678',
  },

  // 15. TAMIL NADU: Kalaignar Magalir Urimai Thogai
  {
    id: 'magalir-urimai-tamilnadu',
    name: {
      en: 'Kalaignar Magalir Urimai Thogai Scheme (Tamil Nadu)',
      hi: 'कलैग्नार मगलिर उरिमई थोगई योजना (तमिलनाडु)',
      mr: 'कलैग्नार मगलिर उरिमई थोगई योजना (तमिळनाडू)',
    },
    shortCode: 'KMUT-TN',
    department: {
      en: 'Special Programme Implementation Department, Govt. of Tamil Nadu',
      hi: 'विशेष कार्यक्रम कार्यान्वयन विभाग, तमिलनाडु सरकार',
      mr: 'विशेष कार्यक्रम अंमलबजावणी विभाग, तमिळनाडू शासन',
    },
    level: 'State',
    applicableState: 'Tamil Nadu',
    category: 'Women & Child Welfare',
    tagline: {
      en: '₹1,000 monthly rights grant (₹12,000/year) to women heads of eligible households in Tamil Nadu.',
      hi: 'तमिलनाडु की पात्र परिवारों की महिला मुखिया को ₹1,000 प्रति माह (₹12,000/वर्ष) का अधिकार अनुदान।',
      mr: 'तमिळनाडूतील पात्र कुटुंबप्रमुख महिलांना दरमहा ₹१,००० (वार्षिक ₹१२,०००) थेट हक्क अनुदान.',
    },
    benefit: {
      amountINR: 12000,
      period: 'yearly',
      displayText: {
        en: '₹12,000 / year (₹1,000/month)',
        hi: '₹12,000 / वर्ष (₹1,000/माह)',
        mr: '₹१२,००० / वर्ष (दरमहा ₹१,०००)',
      },
      details: {
        en: 'Credited on the 15th of every month directly to woman’s bank account via DBT.',
        hi: 'प्रत्येक माह की 15 तारीख को महिला के खाते में ₹1,000 अंतरित।',
        mr: 'दरमहा १५ तारखेला थेट बँक खात्यात ₹१,००० जमा.',
      },
    },
    eligibilityCriteria: {
      genderRequired: 'female',
      minAge: 21,
      maxIncomeINR: 250000,
      maxLandAcres: 5,
      description: {
        en: 'Women aged 21+ named in Tamil Nadu Smart Ration Card with annual family income < ₹2.5L, land < 5 acres, and electricity usage < 3600 units/year.',
        hi: 'तमिलनाडु स्मार्ट राशन कार्ड में महिला मुखिया, परिवार की वार्षिक आय ₹2.5 लाख से कम एवं कृषि भूमि 5 एकड़ से कम।',
        mr: 'तमिळनाडू स्मार्ट रेशन कार्डावरील महिला, कौटुंबिक उत्पन्न ₹२.५ लाखांपेक्षा कमी व जमीन ५ एकरांपेक्षा कमी.',
      },
    },
    requiredDocuments: [
      {
        name: 'TN Smart Ration Card & Aadhaar Card',
        documentType: 'Ration Card (NFSA/BPL/AAY)',
        mandatory: true,
        howToGet: {
          en: 'Tamil Nadu TNePDS smart family card.',
          hi: 'तमिलनाडु खाद्य विभाग द्वारा जारी स्मार्ट राशन कार्ड।',
          mr: 'तमिळनाडू स्मार्ट रेशन कार्ड.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Apply at Special Camps held at Fair Price (Ration) Shops with Smart Card & Aadhaar.',
        'Submit biometric verification through e-Sevai device.',
        'Application field-verified by Revenue Department.',
        'Approved beneficiaries receive ₹1,000 monthly.',
      ],
      hi: [
        'उचित मूल्य (राशन) दुकान पर आयोजित विशेष शिविर में स्मार्ट कार्ड व आधार ले जाएं।',
        'बायोमेट्रिक सत्यापन पूरा करें।',
        'राजस्व विभाग द्वारा जांच के बाद पैसा खाते में आएगा।',
      ],
      mr: [
        'रेशन दुकानांवरील विशेष शिबिरात जाऊन स्मार्ट कार्ड व आधार द्वारे नोंदणी करा.',
      ],
    },
    officialPortalUrl: 'https://kmut.tn.gov.in',
    helplineNumber: '044-25619208',
  },

  // 16. BIHAR: Mukhyamantri Kanya Utthan Yojana
  {
    id: 'kanya-utthan-bihar',
    name: {
      en: 'Mukhyamantri Kanya Utthan Yojana (Bihar)',
      hi: 'मुख्यमंत्री कन्या उत्थान योजना (बिहार)',
      mr: 'मुख्यमंत्री कन्या उत्थान योजना (बिहार शासन)',
    },
    shortCode: 'MKUY-BIHAR',
    department: {
      en: 'Education & Social Welfare Department, Govt. of Bihar',
      hi: 'शिक्षा एवं समाज कल्याण विभाग, बिहार सरकार',
      mr: 'शिक्षण व समाज कल्याण विभाग, बिहार शासन',
    },
    level: 'State',
    applicableState: 'Bihar',
    category: 'Education & Scholarships',
    tagline: {
      en: 'Up to ₹54,100 from birth till graduation + ₹50,000 one-time scholarship for girls passing Graduation degree in Bihar.',
      hi: 'बिहार में बालिकाओं को जन्म से स्नातक तक ₹54,100 एवं स्नातक उत्तीर्ण करने पर ₹50,000 की प्रोत्साहन छात्रवृत्ति।',
      mr: 'बिहारमधील मुलींना जन्मापासून पदवीपर्यंत ₹५४,१०० व पदवी उत्तीर्ण झाल्यावर ₹५०,००० ची शिष्यवृत्ती.',
    },
    benefit: {
      amountINR: 50000,
      period: 'one-time',
      displayText: {
        en: '₹50,000 (Graduation Pass Grant) / ₹25,000 (12th Pass)',
        hi: '₹50,000 (ग्रेजुएशन पास) / ₹25,000 (12वीं पास)',
        mr: '₹५०,००० (पदवीधर मुलींसाठी) / ₹२५,००० (१२ वी पास)',
      },
      details: {
        en: '₹50,000 credited to girl student upon graduating from any recognized Bihar college/university + ₹25,000 for unmarried girls passing Class 12.',
        hi: 'बिहार के मान्यता प्राप्त कॉलेज से स्नातक पास करने पर ₹50,000 एवं अविवाहित छात्राओं को 12वीं पास करने पर ₹25,000।',
        mr: 'मान्यताप्राप्त कॉलेजमधून पदवी पूर्ण केलेल्या विद्यार्थिनींना ₹५०,००० थेट बँक खात्यात.',
      },
    },
    eligibilityCriteria: {
      genderRequired: 'female',
      requiresStudent: true,
      description: {
        en: 'Girl students who are permanent residents of Bihar and passed Intermediate (12th) or Graduation degree.',
        hi: 'बिहार की स्थायी निवासी छात्राएं जिन्होंने इंटरमीडिएट (12वीं) या स्नातक डिग्री उत्तीर्ण की हो।',
        mr: 'बिहारमधील १२ वी किंवा पदवी उत्तीर्ण झालेल्या विद्यार्थिनी.',
      },
    },
    requiredDocuments: [
      {
        name: 'Graduation / 12th Marksheet & Roll No',
        documentType: 'Student ID / Enrollment',
        mandatory: true,
        howToGet: {
          en: 'University marksheet and registration certificate.',
          hi: 'विश्वविद्यालय द्वारा जारी अंकतालिका और प्रवेश पत्र।',
          mr: 'विद्यापीठ गुणपत्रिका.',
        },
      },
      {
        name: 'Bihar Domicile Certificate & Aadhaar linked bank account',
        documentType: 'General Regional Document',
        mandatory: true,
        howToGet: {
          en: 'RTPS Bihar online portal (serviceonline.bihar.gov.in) domicile certificate.',
          hi: 'आरटीपीएस बिहार पोर्टल द्वारा जारी स्थायी निवास प्रमाण पत्र।',
          mr: 'बिहार रहिवासी दाखला.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Visit medhasoft.bih.nic.in portal.',
        'Click on "Mukhyamantri Kanya Utthan Yojana (Graduation)" link.',
        'Enter University name, Registration number, Marksheet details, and Aadhaar.',
        'Funds credited directly to student’s individual bank account.',
      ],
      hi: [
        'medhasoft.bih.nic.in पोर्टल पर जाएं।',
        '"मुख्यमंत्री कन्या उत्थान योजना" लिंक पर क्लिक करें।',
        'यूनिवर्सिटी, रजिस्ट्रेशन नंबर, मार्कशीट और आधार नंबर दर्ज करें।',
        'सत्यापन उपरांत ₹50,000 सीधे छात्रा के बैंक खाते में भेजे जाएंगे।',
      ],
      mr: [
        'medhasoft.bih.nic.in वर ऑनलाईन नोंदणी करा.',
        'विद्यापीठ नोंदणी क्रमांक व गुणपत्रिका भरा.',
        'थेट बँक खात्यात ₹५०,००० जमा होतील.',
      ],
    },
    officialPortalUrl: 'https://medhasoft.bih.nic.in',
    helplineNumber: '0612-2215197',
  },

  // 17. RAJASTHAN: Mukhyamantri Chiranjeevi / Ayushman Arogya Yojana
  {
    id: 'chiranjeevi-rajasthan',
    name: {
      en: 'Mukhyamantri Ayushman Arogya (Chiranjeevi) Yojana (Rajasthan)',
      hi: 'मुख्यमंत्री आयुष्मान आरोग्य (चिरंजीवी) योजना (राजस्थान)',
      mr: 'मुख्यमंत्री आयुष्मान आरोग्य योजना (राजस्थान)',
    },
    shortCode: 'RAJ-CHIRANJEEVI',
    department: {
      en: 'Medical and Health Department, Govt. of Rajasthan',
      hi: 'चिकित्सा एवं स्वास्थ्य विभाग, राजस्थान सरकार',
      mr: 'वैद्यकीय व आरोग्य विभाग, राजस्थान शासन',
    },
    level: 'State',
    applicableState: 'Rajasthan',
    category: 'Healthcare & Insurance',
    tagline: {
      en: 'Up to ₹25 Lakh cashless medical treatment + ₹5 Lakh accidental insurance for all families in Rajasthan.',
      hi: 'राजस्थान के सभी परिवारों को ₹25 लाख तक का कैशलेस अस्पताल इलाज एवं ₹5 लाख का दुर्घटना बीमा।',
      mr: 'राजस्थानमधील सर्व कुटुंबांना ₹२५ लाखांपर्यंत कॅशलेस उपचार व ₹५ लाख अपघात विमा.',
    },
    benefit: {
      amountINR: 2500000,
      period: 'health_cover',
      displayText: {
        en: '₹25,00,000 / family / year (Cashless Cover)',
        hi: '₹25,00,000 / परिवार / वर्ष (कैशलेस इलाज)',
        mr: '₹२५,००,००० / कुटुंब / वर्ष (कॅशलेस आरोग्य कवच)',
      },
      details: {
        en: 'Covers major organ transplants, cancer therapies, heart surgeries, ICU care in empaneled private & govt hospitals in Rajasthan.',
        hi: 'अंग प्रत्यारोपण, कैंसर, हार्ट सर्जरी, आईसीयू सहित सभी गंभीर बीमारियों का पूर्ण कैशलेस इलाज।',
        mr: 'अवयव प्रत्यारोपण, कर्करोग, हृदय शस्त्रक्रिया व सर्व गंभीर आजारांवर मोफत उपचार.',
      },
    },
    eligibilityCriteria: {
      description: {
        en: 'All Jan Aadhaar card holding families of Rajasthan. Free for NFSA/BPL/Small farmers/Contract workers, nominal ₹850/yr premium for others.',
        hi: 'राजस्थान के सभी जन आधार कार्ड धारक परिवार। एनएफएसए/बीपीएल/लघु कृषकों हेतु पूर्णतः निःशुल्क।',
        mr: 'राजस्थानमधील जन आधार कार्ड असलेले सर्व कुटुंब. अल्पभूधारक व गरीबांसाठी पूर्ण मोफत.',
      },
    },
    requiredDocuments: [
      {
        name: 'Jan Aadhaar Card / Family ID',
        documentType: 'General Regional Document',
        mandatory: true,
        howToGet: {
          en: 'Jan Aadhaar authority portal (janaadhaar.rajasthan.gov.in) or nearest e-Mitra kiosk.',
          hi: 'जन आधार पोर्टल या ई-मित्र केंद्र से जन आधार कार्ड प्राप्त करें।',
          mr: 'जन आधार कार्ड.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Visit nearest e-Mitra kiosk or login to sso.rajasthan.gov.in.',
        'Link Jan Aadhaar number and verify beneficiary category.',
        'Eligible free categories get instant cashless health card.',
        'Show Jan Aadhaar card at hospital Chiranjeevi Helpdesk for immediate cashless admission.',
      ],
      hi: [
        'ई-मित्र केंद्र पर जाएं या sso.rajasthan.gov.in पर लॉगिन करें।',
        'जन आधार नंबर डालकर पॉलिसी नवीनीकरण/सत्यापन करें।',
        'अस्पताल में जन आधार कार्ड दिखाकर तुरंत कैशलेस इलाज पाएं।',
      ],
      mr: [
        'ई-मित्र केंद्रात जाऊन जन आधार कार्डद्वारे नोंदणी करा.',
        'रुग्णालयात जन आधार कार्ड दाखवून मोफत उपचार मिळवा.',
      ],
    },
    officialPortalUrl: 'https://health.rajasthan.gov.in',
    helplineNumber: '181 / 104',
  },

  // 18. ODISHA: Biju Swasthya Kalyan Yojana (BSKY) / KALIA Farmer Scheme
  {
    id: 'kalia-odisha',
    name: {
      en: 'KALIA & BSKY Scheme (Odisha)',
      hi: 'कालिया एवं बीएसकेवाई योजना (ओडिशा)',
      mr: 'कालिया व बीएसकेवाय योजना (ओडिशा शासन)',
    },
    shortCode: 'KALIA-BSKY',
    department: {
      en: 'Agriculture & FE and Health Department, Govt. of Odisha',
      hi: 'कृषि एवं स्वास्थ्य विभाग, ओडिशा सरकार',
      mr: 'कृषी व आरोग्य विभाग, ओडिशा शासन',
    },
    level: 'State',
    applicableState: 'Odisha',
    category: 'Agriculture & Farming',
    tagline: {
      en: '₹10,000/year farmer financial support (KALIA) + up to ₹10 Lakh cashless health cover for women (₹5 Lakh for men) under BSKY in Odisha.',
      hi: 'ओडिशा के किसानों हेतु ₹10,000/वर्ष (कालिया) एवं महिलाओं हेतु ₹10 लाख (पुरुषों हेतु ₹5 लाख) तक का कैशलेस स्वास्थ्य बीमा (BSKY)।',
      mr: 'ओडिशामधील शेतकऱ्यांसाठी ₹१०,००० वार्षिक मदत + महिलांसाठी ₹१० लाख कॅशलेस आरोग्य कवच.',
    },
    benefit: {
      amountINR: 10000,
      period: 'yearly',
      displayText: {
        en: '₹10,000 / year (KALIA) + ₹10 Lakh Health Cover (BSKY)',
        hi: '₹10,000 / वर्ष (कालिया) + ₹10 लाख इलाज (BSKY)',
        mr: '₹१०,००० / वर्ष + ₹१० लाख आरोग्य कवच',
      },
      details: {
        en: 'KALIA provides ₹10,000 in two seasons (Kharif & Rabi) to small/marginal farmers and ₹12,500 livelihood unit grant to landless agricultural households.',
        hi: 'कालिया योजना के तहत खरीफ व रबी में ₹5,000-₹5,000 + भूमिहीन कृषि परिवारों को ₹12,500 की आजीविका सहायता।',
        mr: 'शेतकऱ्यांना खरिप व रब्बी हंगामात आर्थिक मदत व मोफत आरोग्य सुविधा.',
      },
    },
    eligibilityCriteria: {
      requiresFarmer: true,
      maxLandAcres: 5,
      description: {
        en: 'Small/marginal farmers, sharecroppers, and landless agricultural laborers in Odisha holding BSKY/Ration Card.',
        hi: 'ओडिशा के लघु एवं सीमांत किसान, बटाईदार और भूमिहीन खेतिहर मजदूर।',
        mr: 'ओडिशामधील अल्पभूधारक शेतकरी व शेतमजूर.',
      },
    },
    requiredDocuments: [
      {
        name: 'Odisha Ration Card / BSKY Card & Land Records',
        documentType: '7/12 Land Record (Satbara / RoR / Khasra)',
        mandatory: true,
        howToGet: {
          en: 'Odisha Bhulekh RoR and PDS Ration card.',
          hi: 'ओडिशा भूलेख खतियान और राशन कार्ड।',
          mr: 'जमीन महसूल नोंद व रेशन कार्ड.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Apply on kalia.odisha.gov.in or submit form at Gram Panchayat office.',
        'Include Aadhaar, bank passbook, and land RoR.',
        'Approval through Gram Sabha public scrutiny list.',
      ],
      hi: [
        'kalia.odisha.gov.in पर आवेदन करें या ग्राम पंचायत में फॉर्म भरें।',
        'आधार और बैंक पासबुक संलग्न करें।',
      ],
      mr: [
        'kalia.odisha.gov.in वर अर्ज करा किंवा ग्रामपंचायतीत संपर्क साधा.',
      ],
    },
    officialPortalUrl: 'https://kalia.odisha.gov.in',
    helplineNumber: '1800-572-1122',
  },

  // 19. GUJARAT: Mukhyamantri Amrutum (MAA) & Namo Saraswati Scheme
  {
    id: 'maa-yojana-gujarat',
    name: {
      en: 'Mukhyamantri Amrutum (MAA) & Namo Saraswati (Gujarat)',
      hi: 'मुख्यमंत्री अमृतम (मां) एवं नमो सरस्वती योजना (गुजरात)',
      mr: 'मुख्यमंत्री अमृतम व नमो सरस्वती योजना (गुजरात)',
    },
    shortCode: 'GUJ-MAA-NAMO',
    department: {
      en: 'Health and Family Welfare & Education Dept, Govt. of Gujarat',
      hi: 'स्वास्थ्य एवं परिवार कल्याण तथा शिक्षा विभाग, गुजरात सरकार',
      mr: 'आरोग्य व शिक्षण विभाग, गुजरात शासन',
    },
    level: 'State',
    applicableState: 'Gujarat',
    category: 'Healthcare & Insurance',
    tagline: {
      en: '₹10 Lakh cashless tertiary care for families with income < ₹4 Lakh + ₹25,000 scholarship for Science students in Gujarat.',
      hi: 'गुजरात में ₹4 लाख से कम आय वाले परिवारों को ₹10 लाख तक का कैशलेस इलाज एवं 11वीं-12वीं साइंस छात्रों को ₹25,000 छात्रवृत्ति।',
      mr: 'गुजरातमधील कमी उत्पन्न गटातील कुटुंबांना ₹१० लाखांपर्यंत मोफत उपचार व विज्ञान शाखेच्या विद्यार्थ्यांना ₹२५,००० शिष्यवृत्ती.',
    },
    benefit: {
      amountINR: 1000000,
      period: 'health_cover',
      displayText: {
        en: '₹10,00,000 / family / year (Cashless Cover)',
        hi: '₹10,00,000 / परिवार / वर्ष (कैशलेस इलाज)',
        mr: '₹१०,००,००० / कुटुंब / वर्ष (कॅशलेस आरोग्य कवच)',
      },
      details: {
        en: 'Full cashless hospital treatment for cardiovascular, neurosurgery, burns, cancer, renal diseases in network hospitals.',
        hi: 'हार्ट, कैंसर, किडनी, न्यूरो सर्जरी आदि गंभीर बीमारियों के लिए ₹10 लाख तक का शत-प्रतिशत कैशलेस इलाज।',
        mr: 'गंभीर आजारांवर ₹१० लाखांपर्यंत मोफत उपचार.',
      },
    },
    eligibilityCriteria: {
      maxIncomeINR: 400000,
      description: {
        en: 'Families residing in Gujarat with annual income up to ₹4 Lakh (verified by Mamlatdar/TDO).',
        hi: 'गुजरात के निवासी परिवार जिनकी वार्षिक आय ₹4 लाख तक हो (मामलतदार/टीडीओ द्वारा प्रमाणित)।',
        mr: 'गुजरातमधील रहिवासी (वार्षिक उत्पन्न ₹४ लाखांपर्यंत).',
      },
    },
    requiredDocuments: [
      {
        name: 'Mamlatdar Income Certificate (< ₹4 Lakh)',
        documentType: 'Tahsildar Income Certificate',
        mandatory: true,
        howToGet: {
          en: 'Issued via Digital Gujarat portal (digitalgujarat.gov.in).',
          hi: 'डिजिटल गुजरात पोर्टल या मामलतदार कार्यालय से आय प्रमाण पत्र।',
          mr: 'मामलतदार कार्यालयाकडून मिळणारा उत्पन्नाचा दाखला.',
        },
      },
      {
        name: 'Gujarat Ration Card & Aadhaar',
        documentType: 'Ration Card (NFSA/BPL/AAY)',
        mandatory: true,
        howToGet: {
          en: 'Barcoded Gujarat Ration card.',
          hi: 'गुजरात राशन कार्ड और आधार कार्ड।',
          mr: 'गुजरात रेशन कार्ड.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Visit nearest Civic Centre, Taluka Mamlatdar office, or District Hospital MAA kiosk.',
        'Submit Income certificate and Ration Card.',
        'Biometric finger and iris scan taken for all family members.',
        'MAA card generated on spot.',
      ],
      hi: [
        'नागरिक सुविधा केंद्र या तालुका मामलतदार कार्यालय में जाएं।',
        'आय प्रमाण पत्र और राशन कार्ड प्रस्तुत करें।',
        'बायोमेट्रिक सत्यापन कराकर मौके पर ही मां कार्ड प्राप्त करें।',
      ],
      mr: [
        'तालुका मामलतदार कार्यालयात जाऊन बायोमेट्रिक पडताळणी करा व कार्ड मिळवा.',
      ],
    },
    officialPortalUrl: 'https://magujarat.com',
    helplineNumber: '1800-233-1022',
  },

  // 20. TELANGANA: Rythu Bandhu / Mahalakshmi / Aarogyasri
  {
    id: 'rythu-mahalakshmi-telangana',
    name: {
      en: 'Rythu Bharosa & Mahalakshmi Scheme (Telangana)',
      hi: 'रैतु भरोसा एवं महालक्ष्मी योजना (तेलंगाना)',
      mr: 'रैतू भरोसा व महालक्ष्मी योजना (तेलंगणा शासन)',
    },
    shortCode: 'TS-RYTHU-MAHALAKSHMI',
    department: {
      en: 'Agriculture & Women and Child Welfare, Govt. of Telangana',
      hi: 'कृषि एवं महिला कल्याण विभाग, तेलंगाना सरकार',
      mr: 'कृषी व महिला कल्याण विभाग, तेलंगणा शासन',
    },
    level: 'State',
    applicableState: 'Telangana',
    category: 'Agriculture & Farming',
    tagline: {
      en: '₹15,000/acre/year farmer investment support + ₹2,500/month financial aid for women & ₹10 Lakh Aarogyasri health cover in Telangana.',
      hi: 'तेलंगाना में किसानों को ₹15,000/एकड़/वर्ष + महिलाओं को ₹2,500/माह एवं ₹10 लाख आरोग्यश्री स्वास्थ्य कवर।',
      mr: 'शेतकऱ्यांना ₹१५,०००/एकर/वर्ष + महिलांना दरमहा ₹२,५०० व ₹१० लाख आरोग्यश्री कवच.',
    },
    benefit: {
      amountINR: 15000,
      period: 'yearly',
      displayText: {
        en: '₹15,000 / acre / year (Farmer Support) + ₹2,500/mo (Women)',
        hi: '₹15,000 / एकड़ / वर्ष (किसान) + ₹2,500/माह (महिला)',
        mr: '₹१५,००० / एकर / वर्ष + दरमहा ₹२,५००',
      },
      details: {
        en: 'Direct bank transfer per acre of agricultural land + subsidized LPG cylinders at ₹500 + free RTC bus travel for women in Telangana.',
        hi: 'प्रति एकड़ कृषि भूमि पर वित्तीय सहायता + ₹500 में गैस सिलेंडर + महिलाओं को सरकारी बसों में मुफ्त यात्रा।',
        mr: 'शेतकऱ्यांना थेट मदत + महिलांसाठी मोफत बस प्रवास व गॅस अनुदान.',
      },
    },
    eligibilityCriteria: {
      requiresFarmer: true,
      description: {
        en: 'Pattadar passbook holding farmers and Praja Palana registered low-income families of Telangana.',
        hi: 'तेलंगाना के पट्टादार पासबुक धारक किसान एवं प्रजा पालन पंजीकृत परिवार।',
        mr: 'पट्टादार पासबुकधारक शेतकरी व पात्र कुटुंब.',
      },
    },
    requiredDocuments: [
      {
        name: 'Dharani Pattadar Passbook / Land Record',
        documentType: '7/12 Land Record (Satbara / RoR / Khasra)',
        mandatory: true,
        howToGet: {
          en: 'Telangana Dharani portal (dharani.telangana.gov.in) digital Pattadar Passbook.',
          hi: 'धरणी पोर्टल द्वारा जारी डिजिटल पट्टादार पासबुक।',
          mr: 'धरणी पोर्टल डिजिटल पट्टादार पासबुक.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Register through Praja Palana Seva application or at MeeSeva center.',
        'Enter Pattadar passbook number and Aadhaar.',
        'Funds credited before Kharif and Rabi sowing seasons.',
      ],
      hi: [
        'प्रजा पालन सेवा केंद्र या मीसेवा केंद्र पर आवेदन करें।',
        'पट्टादार पासबुक एवं आधार विवरण दर्ज करें।',
      ],
      mr: [
        'मीसेवा केंद्रात पट्टादार पासबुक व आधार द्वारे नोंदणी करा.',
      ],
    },
    officialPortalUrl: 'https://dharani.telangana.gov.in',
    helplineNumber: '040-23383520',
  },

  // 21. ANDHRA PRADESH: YSR Rythu Bharosa / Amma Vodi
  {
    id: 'rythu-bharosa-ap',
    name: {
      en: 'YSR Rythu Bharosa & Thalli Ki Vandanam (Andhra Pradesh)',
      hi: 'वाईएसआर रैतु भरोसा एवं अम्मा वोडी (आंध्र प्रदेश)',
      mr: 'रैतू भरोसा व अम्मा वोडी योजना (आंध्र प्रदेश)',
    },
    shortCode: 'AP-RYTHU-BHAROSA',
    department: {
      en: 'Agriculture & School Education Department, Govt. of Andhra Pradesh',
      hi: 'कृषि एवं स्कूल शिक्षा विभाग, आंध्र प्रदेश सरकार',
      mr: 'कृषी व शालेय शिक्षण विभाग, आंध्र प्रदेश शासन',
    },
    level: 'State',
    applicableState: 'Andhra Pradesh',
    category: 'Agriculture & Farming',
    tagline: {
      en: '₹13,500/year farmer input assistance + ₹15,000/year financial aid to mothers sending children to school in Andhra Pradesh.',
      hi: 'आंध्र प्रदेश में किसानों को ₹13,500/वर्ष इनपुट सहायता + बच्चों को स्कूल भेजने वाली माताओं को ₹15,000/वर्ष की सहायता।',
      mr: 'आंध्र प्रदेशातील शेतकऱ्यांना ₹१३,५०० वार्षिक मदत + मुलांना शाळेत पाठवणाऱ्या मातांना ₹१५,००० वार्षिक अनुदान.',
    },
    benefit: {
      amountINR: 15000,
      period: 'yearly',
      displayText: {
        en: '₹13,500 / year (Farmer) + ₹15,000 / year (School Mother)',
        hi: '₹13,500 / वर्ष (किसान) + ₹15,000 / वर्ष (माता)',
        mr: '₹१३,५०० / वर्ष (शेतकरी) + ₹१५,००० / वर्ष (माता)',
      },
      details: {
        en: 'Disbursed directly into mother’s / farmer’s bank account in 3 installments.',
        hi: 'सीधे लाभार्थी के आधार-लिंक्ड बैंक खाते में 3 किस्तों में जमा।',
        mr: 'थेट लाभार्थ्यांच्या बँक खात्यात थेट ३ हप्त्यांत जमा.',
      },
    },
    eligibilityCriteria: {
      requiresFarmer: true,
      maxLandAcres: 5,
      description: {
        en: 'Small/marginal landholder farmers and tenant farmers (including SC/ST/BC/Minorities) and BPL mothers of school children in AP.',
        hi: 'आंध्र प्रदेश के लघु, सीमांत एवं बटाईदार किसान तथा स्कूल जाने वाले बच्चों की बीपीएल माताएं।',
        mr: 'आंध्र प्रदेशातील अल्पभूधारक शेतकरी व शालेय विद्यार्थ्यांच्या माता.',
      },
    },
    requiredDocuments: [
      {
        name: 'AP Rice Card & Meebhoomi 1B / Adangal Record',
        documentType: '7/12 Land Record (Satbara / RoR / Khasra)',
        mandatory: true,
        howToGet: {
          en: 'AP Meebhoomi portal (meebhoomi.ap.gov.in) Adangal extract.',
          hi: 'मीभूमि पोर्टल से अडंगल नकल एवं चावल (राशन) कार्ड।',
          mr: 'मीभूमी पोर्टल जमीन नोंद व रेशन कार्ड.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Visit nearest Grama / Ward Sachivalayam (Village Secretariats).',
        'Village Agriculture Assistant verifies land details via e-Crop booking.',
        'Sanction list published on transparent social audit notice board.',
      ],
      hi: [
        'ग्राम/वार्ड सचिवालय में संपर्क करें।',
        'ई-क्रॉप बुकिंग के जरिए भूमि का सत्यापन कराएं।',
      ],
      mr: [
        'ग्राम किंवा वॉर्ड सचिवालयात जाऊन पडताळणी करून घ्या.',
      ],
    },
    officialPortalUrl: 'https://ysrrythubharosa.ap.gov.in',
    helplineNumber: '1902 / 155251',
  },

  // 22. ASSAM: Orunodoi 2.0 Scheme
  {
    id: 'orunodoi-assam',
    name: {
      en: 'Orunodoi 2.0 Scheme (Assam)',
      hi: 'ओरुनोदोई 2.0 योजना (असम)',
      mr: 'ओरुनोदोई २.० योजना (आसाम शासन)',
    },
    shortCode: 'ASSAM-ORUNODOI',
    department: {
      en: 'Finance Department, Govt. of Assam',
      hi: 'वित्त विभाग, असम सरकार',
      mr: 'वित्त विभाग, आसाम शासन',
    },
    level: 'State',
    applicableState: 'Assam',
    category: 'Women & Child Welfare',
    tagline: {
      en: '₹1,250 monthly direct cash assistance (₹15,000/year) to women nominated heads of low-income families in Assam.',
      hi: 'असम के निर्धन परिवारों की नामित महिला मुखिया को ₹1,250 प्रति माह (₹15,000/वर्ष) की सीधी वित्तीय सहायता।',
      mr: 'आसाममधील गरीब कुटुंबातील महिला प्रमुखांना दरमहा ₹१,२५० (वार्षिक ₹१५,०००) थेट आर्थिक मदत.',
    },
    benefit: {
      amountINR: 15000,
      period: 'yearly',
      displayText: {
        en: '₹15,000 / year (₹1,250/month)',
        hi: '₹15,000 / वर्ष (₹1,250/माह)',
        mr: '₹१५,००० / वर्ष (दरमहा ₹१,२५०)',
      },
      details: {
        en: 'Direct transfer on 10th of every month for medicines, nutrition, pulses, and sugar needs of the family.',
        hi: 'प्रति माह 10 तारीख को पोषण, दवा और आवश्यक घरेलू जरूरतों हेतु सीधे बैंक में जमा।',
        mr: 'दरमहा १० तारखेला औषधोपचार व पोषण आहारासाठी थेट बँक खात्यात जमा.',
      },
    },
    eligibilityCriteria: {
      genderRequired: 'female',
      maxIncomeINR: 200000,
      description: {
        en: 'Permanent resident of Assam with annual family income under ₹2 Lakh. Priority to widows, unmarried women, Divyangjan, and distressed families.',
        hi: 'असम की स्थायी निवासी महिला (वार्षिक पारिवारिक आय ₹2 लाख से कम)। विधवा, दिव्यांग व असहाय महिलाओं को प्राथमिकता।',
        mr: 'आसाममधील महिला, कौटुंबिक उत्पन्न ₹२ लाखांपेक्षा कमी (विधवा व दिव्यांग कुटुंबांना प्राधान्य).',
      },
    },
    requiredDocuments: [
      {
        name: 'Assam Ration Card / NFSA & Aadhaar Card',
        documentType: 'Ration Card (NFSA/BPL/AAY)',
        mandatory: true,
        howToGet: {
          en: 'Assam Food & Civil Supplies Ration Card and Aadhaar.',
          hi: 'असम राशन कार्ड और आधार कार्ड।',
          mr: 'आसाम रेशन कार्ड व आधार कार्ड.',
        },
      },
      {
        name: 'Gaonburha / Circle Officer Income Certificate',
        documentType: 'Tahsildar Income Certificate',
        mandatory: true,
        howToGet: {
          en: 'Issued by Revenue Circle Officer in Assam.',
          hi: 'राजस्व अंचल अधिकारी (Circle Officer) द्वारा जारी आय प्रमाण पत्र।',
          mr: 'उत्पन्नाचा दाखला.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Apply through District Level Monitoring Committee (DLMC) or Block Development Office.',
        'Submit Orunodoi application form with Gaonburha income certificate and Bank Passbook.',
        'Verification done by VCDC / Gaon Panchayat.',
        'Funds credited monthly through PFMS DBT.',
      ],
      hi: [
        'प्रखंड (ब्लॉक) कार्यालय या ग्राम पंचायत में फॉर्म जमा करें।',
        'आय प्रमाण पत्र और बैंक पासबुक संलग्न करें।',
        'सत्यापन के बाद प्रतिमाह खाते में पैसा आएगा।',
      ],
      mr: [
        'ब्लॉक किंवा ग्रामपंचायतीत अर्ज सादर करा.',
      ],
    },
    officialPortalUrl: 'https://orunodoi.assam.gov.in',
    helplineNumber: '1800-345-3567',
  },

  // 23. DELHI: Mukhyamantri Mahila Samman Yojana & Vridha Pension
  {
    id: 'mahila-samman-delhi',
    name: {
      en: 'Mukhyamantri Mahila Samman Yojana (Delhi)',
      hi: 'मुख्यमंत्री महिला सम्मान योजना (दिल्ली)',
      mr: 'मुख्यमंत्री महिला सन्मान योजना (दिल्ली शासन)',
    },
    shortCode: 'DELHI-MAHILA-SAMMAN',
    department: {
      en: 'Department of Women and Child Development, Govt. of NCT of Delhi',
      hi: 'महिला एवं बाल विकास विभाग, दिल्ली सरकार',
      mr: 'महिला व बालविकास विभाग, दिल्ली शासन',
    },
    level: 'State',
    applicableState: 'Delhi',
    category: 'Women & Child Welfare',
    tagline: {
      en: '₹1,000 monthly financial honorarium (₹12,000/year) to all non-taxpaying women aged 18+ in Delhi.',
      hi: 'दिल्ली की 18 वर्ष से अधिक आयु की सभी गैर-करदाता महिलाओं को ₹1,000 प्रति माह (₹12,000/वर्ष) की सम्मान राशि।',
      mr: 'दिल्लीतील १८ वर्षांवरील सर्व गैर-करदाता महिलांना दरमहा ₹१,००० (वार्षिक ₹१२,०००) सन्मान निधी.',
    },
    benefit: {
      amountINR: 12000,
      period: 'yearly',
      displayText: {
        en: '₹12,000 / year (₹1,000/month)',
        hi: '₹12,000 / वर्ष (₹1,000/माह)',
        mr: '₹१२,००० / वर्ष (दरमहा ₹१,०००)',
      },
      details: {
        en: 'Direct monthly credit of ₹1,000 to woman’s bank account. Govt employees and taxpayers excluded.',
        hi: 'सीधे महिला के बैंक खाते में ₹1,000 प्रति माह। सरकारी कर्मचारी एवं आयकर दाता बाहर हैं।',
        mr: 'दरमहा ₹१,००० थेट बँक खात्यात जमा.',
      },
    },
    eligibilityCriteria: {
      genderRequired: 'female',
      minAge: 18,
      description: {
        en: 'Woman aged 18+ who is a registered voter in Delhi, not paying income tax, and not receiving any other government pension.',
        hi: 'दिल्ली की 18+ वर्ष की महिला जो दिल्ली की मतदाता हो तथा आयकर दाता न हो।',
        mr: 'दिल्लीतील १८ वर्षांवरील महिला (मतदार ओळखपत्र दिल्लीचे असणे आवश्यक).',
      },
    },
    requiredDocuments: [
      {
        name: 'Delhi Voter ID Card & Aadhaar Card',
        documentType: 'Aadhaar / Voter ID',
        mandatory: true,
        howToGet: {
          en: 'Election Commission Voter ID with Delhi address.',
          hi: 'दिल्ली के पते वाला वोटर आईडी कार्ड और आधार कार्ड।',
          mr: 'दिल्लीचे मतदान ओळखपत्र व आधार कार्ड.',
        },
      },
      {
        name: 'Self-Declaration Form of Non-Taxpayer',
        documentType: 'General Regional Document',
        mandatory: true,
        howToGet: {
          en: 'Self-attested affidavit confirming non-income tax status.',
          hi: 'स्व-घोषणा पत्र (मैं आयकर दाता अथवा सरकारी कर्मचारी नहीं हूँ)।',
          mr: 'स्वयंघोषणापत्र.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Apply online on Delhi e-District portal (edistrict.delhigovt.nic.in) or at MLA / WCD facilitation camps.',
        'Enter Delhi Voter ID EPIC number and Aadhaar.',
        'Upload bank passbook copy and self-declaration.',
        'Approval notified via SMS and money credited monthly.',
      ],
      hi: [
        'दिल्ली ई-डिस्ट्रिक्ट पोर्टल पर ऑनलाइन आवेदन करें।',
        'वोटर कार्ड नंबर और आधार विवरण दर्ज करें।',
        'बैंक पासबुक और स्व-घोषणा पत्र अपलोड करें।',
      ],
      mr: [
        'दिल्ली ई-डिस्ट्रिक्ट पोर्टलवर जाऊन नोंदणी करा.',
      ],
    },
    officialPortalUrl: 'https://edistrict.delhigovt.nic.in',
    helplineNumber: '1076 / 011-23382060',
  },

  // 24. PUNJAB & HARYANA: Old Age Samman Allowance / Parivar Pehchan Patra Schemes
  {
    id: 'punjab-haryana-pension',
    name: {
      en: 'Old Age Samman Allowance & Parivar Samriddhi (Punjab & Haryana)',
      hi: 'वृद्धावस्था सम्मान भत्ता एवं परिवार समृद्धि योजना (पंजाब / हरियाणा)',
      mr: 'वृद्धापकाळ सन्मान भत्ता (पंजाब व हरियाणा)',
    },
    shortCode: 'PB-HR-SAMMAN',
    department: {
      en: 'Social Justice and Empowerment Department, Govt. of Haryana / Punjab',
      hi: 'सामाजिक न्याय एवं अधिकारिता विभाग, हरियाणा व पंजाब सरकार',
      mr: 'सामाजिक न्याय विभाग, हरियाणा व पंजाब शासन',
    },
    level: 'State',
    applicableState: 'Haryana',
    category: 'Pensions & Divyangjan',
    tagline: {
      en: '₹3,000 monthly pension (₹36,000/year) for senior citizens aged 60+ in Haryana via auto-proactive Parivar Pehchan Patra (PPP).',
      hi: 'हरियाणा में 60+ वर्ष के वरिष्ठ नागरिकों को ₹3,000 प्रति माह (₹36,000/वर्ष) का वृद्धावस्था सम्मान पेंशन।',
      mr: 'हरियाणातील ६० वर्षांवरील ज्येष्ठ नागरिकांना दरमहा ₹३,००० (वार्षिक ₹३६,०००) पेन्शन.',
    },
    benefit: {
      amountINR: 36000,
      period: 'yearly',
      displayText: {
        en: '₹36,000 / year (₹3,000/month)',
        hi: '₹36,000 / वर्ष (₹3,000/माह)',
        mr: '₹३६,००० / वर्ष (दरमहा ₹३,०००)',
      },
      details: {
        en: 'Automatic sanction upon turning 60 years old based on verified income in Parivar Pehchan Patra (PPP).',
        hi: 'परिवार पहचान पत्र (PPP) में आय व आयु सत्यापित होने पर 60 वर्ष की आयु होते ही स्वतः पेंशन शुरू।',
        mr: '६० वर्षे पूर्ण होताच कुटुंब ओळखपत्राद्वारे (PPP) थेट पेन्शन सुरू.',
      },
    },
    eligibilityCriteria: {
      minAge: 60,
      maxIncomeINR: 300000,
      description: {
        en: 'Resident of Haryana/Punjab aged 60+ with annual combined family income under ₹3 Lakh.',
        hi: 'हरियाणा/पंजाब के 60 वर्ष या उससे अधिक आयु के नागरिक जिनकी पारिवारिक आय ₹3 लाख से कम हो।',
        mr: '६० वर्षांवरील नागरिक (कौटुंबिक उत्पन्न ₹३ लाखांपेक्षा कमी).',
      },
    },
    requiredDocuments: [
      {
        name: 'Parivar Pehchan Patra (PPP) / Family ID & Aadhaar',
        documentType: 'General Regional Document',
        mandatory: true,
        howToGet: {
          en: 'Haryana Meraparivar portal (meraparivar.haryana.gov.in).',
          hi: 'मेरा परिवार पोर्टल (PPP ID) और आधार कार्ड।',
          mr: 'कुटुंब ओळखपत्र व आधार कार्ड.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Verify age and income in Parivar Pehchan Patra (PPP).',
        'Citizen gives one-time consent on SARAL portal (saralharyana.gov.in) or CSC.',
        'Pension credited monthly via DBT to Aadhaar linked bank account.',
      ],
      hi: [
        'परिवार पहचान पत्र में आयु और आय का सत्यापन कराएं।',
        'सरल हरियाणा पोर्टल पर सहमति दर्ज करें।',
        'हर महीने ₹3,000 बैंक खाते में प्राप्त करें।',
      ],
      mr: [
        'सरल हरियाणा पोर्टलवर संमती नोंदवून पेन्शन सुरू करा.',
      ],
    },
    officialPortalUrl: 'https://meraparivar.haryana.gov.in',
    helplineNumber: '1800-2000-023',
  },

  // 25. KERALA: Karunya Health & Social Security Pension
  {
    id: 'kerala-karunya-kasp',
    name: {
      en: 'Karunya Arogya Suraksha Padhathi (KASP) & Sevana Pension (Kerala)',
      hi: 'कारुण्या आरोग्य सुरक्षा पद्धति (KASP) एवं सेवाना पेंशन (केरल)',
      mr: 'कारुण्या आरोग्य योजना व सेवाना पेन्शन (केरळ)',
    },
    shortCode: 'KER-KARUNYA',
    department: {
      en: 'State Health Agency & Social Justice Department, Govt. of Kerala',
      hi: 'राज्य स्वास्थ्य एजेंसी एवं सामाजिक न्याय विभाग, केरल सरकार',
      mr: 'आरोग्य व सामाजिक न्याय विभाग, केरळ शासन',
    },
    level: 'State',
    applicableState: 'Kerala',
    category: 'Healthcare & Insurance',
    tagline: {
      en: '₹5 Lakh cashless health cover per family + ₹1,600 monthly social security pension (₹19,200/yr) in Kerala.',
      hi: 'केरल में ₹5 लाख तक का कैशलेस स्वास्थ्य बीमा + ₹1,600 प्रति माह सामाजिक सुरक्षा पेंशन।',
      mr: 'केरळमधील कुटुंबांना ₹५ लाख कॅशलेस आरोग्य संरक्षण + दरमहा ₹१,६०० सामाजिक सुरक्षा पेन्शन.',
    },
    benefit: {
      amountINR: 500000,
      period: 'health_cover',
      displayText: {
        en: '₹5,00,000 / family / year (Health Cover) + ₹1,600/mo (Pension)',
        hi: '₹5,00,000 / वर्ष (इलाज) + ₹1,600/माह (पेंशन)',
        mr: '₹५,००,००० / वर्ष + दरमहा ₹१,६००',
      },
      details: {
        en: 'Free treatments in all government and empaneled private medical colleges/hospitals across Kerala.',
        hi: 'केरल के सभी सरकारी एवं पैनलबद्ध निजी अस्पतालों में कैशलेस भर्ती एवं सर्जरी।',
        mr: 'केरळमधील शासकीय व खाजगी रुग्णालयांत मोफत उपचार.',
      },
    },
    eligibilityCriteria: {
      maxIncomeINR: 300000,
      rationCardAllowed: ['AAY (Antyodaya Anna Yojana)', 'BPL (Below Poverty Line)', 'PHH (Priority Household)'],
      description: {
        en: 'Yellow and Pink ration card holders in Kerala (BPL/PHH/AAY categories).',
        hi: 'केरल के पीले और गुलाबी राशन कार्ड धारक परिवार (BPL/PHH श्रेणी)।',
        mr: 'केरळमधील पिवळे व गुलाबी रेशन कार्ड असलेले कुटुंब.',
      },
    },
    requiredDocuments: [
      {
        name: 'Kerala Ration Card (Pink / Yellow) & Aadhaar',
        documentType: 'Ration Card (NFSA/BPL/AAY)',
        mandatory: true,
        howToGet: {
          en: 'Civil Supplies Kerala e-services portal (eticketing.civilsupplieskerala.gov.in).',
          hi: 'केरल खाद्य विभाग द्वारा जारी राशन कार्ड।',
          mr: 'केरळ रेशन कार्ड.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Visit nearest Akshaya Centre or government hospital KASP Kiosk.',
        'Submit Ration card and Aadhaar for instant biometric verification.',
        'Show KASP e-card for cashless medical treatment.',
      ],
      hi: [
        'नजदीकी अक्षया केंद्र या सरकारी अस्पताल कियोस्क पर जाएं।',
        'राशन कार्ड और आधार देकर तुरंत ई-कार्ड बनवाएं।',
      ],
      mr: [
        'अक्षया केंद्रात जाऊन रेशन कार्डाद्वारे नोंदणी करा.',
      ],
    },
    officialPortalUrl: 'https://sha.kerala.gov.in',
    helplineNumber: '1056 / 1800-425-3456',
  },

  // 26. PM SVANidhi (Street Vendors Working Capital)
  {
    id: 'pm-svanidhi',
    name: {
      en: 'PM Street Vendor’s AtmaNirbhar Nidhi (PM SVANidhi)',
      hi: 'पीएम स्ट्रीट वेंडर्स आत्मनिर्भर निधि (पीएम स्वनिधि)',
      mr: 'पीएम स्वनिधी योजना (फेरीवाले व लहान विक्रेते कर्ज)',
    },
    shortCode: 'PM-SVANIDHI',
    department: {
      en: 'Ministry of Housing and Urban Affairs (MoHUA), Govt. of India',
      hi: 'आवासन और शहरी कार्य मंत्रालय, भारत सरकार',
      mr: 'गृहनिर्माण आणि शहरी व्यवहार मंत्रालय, भारत सरकार',
    },
    level: 'Central',
    applicableState: 'All India',
    category: 'Skill & Self-Employment',
    tagline: {
      en: 'Collateral-free working capital loan from ₹10,000 up to ₹50,000 with 7% interest subsidy and cashback on digital transactions for urban/semi-urban street vendors.',
      hi: 'शहरी रेहड़ी-पटरी विक्रेताओं (स्ट्रीट वेंडर्स) के लिए ₹10,000 से ₹50,000 तक का बिना गारंटी कार्यशील पूंजी ऋण, 7% ब्याज सब्सिडी और डिजिटल कैशबैक।',
      mr: 'फेरीवाले, हातगाडी चालक व पथविक्रेत्यांसाठी ₹१०,००० ते ₹५०,००० विनातारण कर्ज (७% व्याज सबसिडी व कॅशबॅकसह).',
    },
    benefit: {
      amountINR: 50000,
      period: 'loan_subsidy',
      displayText: {
        en: '₹10,000 - ₹50,000 (Low-Interest Loan + ₹1,200 Cashback)',
        hi: '₹10,000 - ₹50,000 (सस्ता लोन + ₹1,200 कैशबैक)',
        mr: '₹१०,००० - ₹५०,००० (विनातारण कर्ज + कॅशबॅक)',
      },
      details: {
        en: '1st Tranche: ₹10,000 (1 year repay). 2nd Tranche: ₹20,000. 3rd Tranche: ₹50,000 + 7% interest subsidy directly credited to bank account.',
        hi: 'पहला चरण: ₹10,000, दूसरा चरण: ₹20,000, तीसरा चरण: ₹50,000। समय पर भुगतान पर 7% ब्याज सब्सिडी एवं ₹100/माह तक डिजिटल कैशबैक।',
        mr: 'पहिला टप्पा: ₹१०,०००, दुसरा: ₹२०,०००, तिसरा: ₹५०,०००. वेळेवर परतफेडीवर ७% व्याज सबसिडी थेट खात्यात.',
      },
    },
    eligibilityCriteria: {
      requiresArtisanOrVendor: true,
      description: {
        en: 'Street vendors, hawkers, thela-walas, and small stall owners operating in urban and peri-urban areas holding Vending Certificate / LOR.',
        hi: 'शहरी क्षेत्रों में फल, सब्जी, चाय, नाश्ता, कपड़े आदि बेचने वाले पटरी विक्रेता व फेरीवाले।',
        mr: 'शहरात भाजीपाला, फळे, चहा, खाद्यपदार्थ किंवा वस्तू विकणारे फेरीवाले व पथविक्रेते.',
      },
    },
    requiredDocuments: [
      {
        name: 'Urban Local Body Vending Certificate or Letter of Recommendation (LoR)',
        documentType: 'General Regional Document',
        mandatory: true,
        howToGet: {
          en: 'Issued by Municipality / Municipal Corporation or Town Vending Committee (TVC).',
          hi: 'नगर निगम/नगर पालिका अथवा टाउन वेंडिंग कमेटी द्वारा जारी वेंडिंग प्रमाण पत्र या अनुशंसा पत्र (LoR)।',
          mr: 'महानगरपालिका/नगरपालिकेकडून फेरीवाला ओळखपत्र किंवा शिफारस पत्र (LoR).',
        },
      },
      {
        name: 'Aadhaar Card linked with Mobile',
        documentType: 'Aadhaar / Voter ID',
        mandatory: true,
        howToGet: {
          en: 'UIDAI Aadhaar Card.',
          hi: 'आधार कार्ड।',
          mr: 'आधार कार्ड.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Visit pmsvanidhi.mohua.gov.in or nearest CSC / Banking Correspondent (BC).',
        'Search your name in ULB vendor survey or apply for Letter of Recommendation (LoR).',
        'Choose preferred lending bank and submit digital loan request.',
        'Loan disbursed directly to bank account within 7 days.',
      ],
      hi: [
        'pmsvanidhi.mohua.gov.in पर जाएं या नजदीकी सीएससी केंद्र/बैंक मित्र से संपर्क करें।',
        'नगर पालिका वेंडिंग सूची में नाम खोजें या LoR प्राप्त करें।',
        'बैंक का चयन कर आवेदन सबमिट करें।',
        '7 दिनों के भीतर ऋण सीधे बैंक खाते में आ जाता है।',
      ],
      mr: [
        'pmsvanidhi.mohua.gov.in किंवा सीएससी केंद्रावर जाऊन ऑनलाईन अर्ज करा.',
        'नगरपालिका नोंदणी किंवा LoR दाखवून बँकेतून ७ दिवसांत कर्ज मिळवा.',
      ],
    },
    officialPortalUrl: 'https://pmsvanidhi.mohua.gov.in',
    helplineNumber: '1800-11-1979',
  },

  // 27. PM Matru Vandana Yojana (PMMVY)
  {
    id: 'pm-matru-vandana',
    name: {
      en: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
      hi: 'प्रधानमंत्री मातृ वंदना योजना',
      mr: 'प्रधानमंत्री मातृ वंदना योजना (गर्भवती महिला अनुदान)',
    },
    shortCode: 'PMMVY',
    department: {
      en: 'Ministry of Women and Child Development, Govt. of India',
      hi: 'महिला एवं बाल विकास मंत्रालय, भारत सरकार',
      mr: 'महिला व बालविकास मंत्रालय, भारत सरकार',
    },
    level: 'Central',
    applicableState: 'All India',
    category: 'Women & Child Welfare',
    tagline: {
      en: 'Direct cash incentive of ₹5,000 for first child and ₹6,000 for second girl child to pregnant & lactating mothers for health & nutrition.',
      hi: 'गर्भवती एवं स्तनपान कराने वाली माताओं को पहले बच्चे पर ₹5,000 और दूसरी कन्या संतान पर ₹6,000 की सीधी आर्थिक सहायता।',
      mr: 'गर्भवती व स्तनदा मातांना पोषण आहारासाठी पहिल्या अपत्यावर ₹५,००० व दुसऱ्या मुलगी झाल्यास ₹६,००० चे अनुदान.',
    },
    benefit: {
      amountINR: 6000,
      period: 'one-time',
      displayText: {
        en: '₹5,000 - ₹6,000 (Direct Nutrition Incentive)',
        hi: '₹5,000 - ₹6,000 (मातृत्व एवं पोषण सहायता)',
        mr: '₹५,००० - ₹६,००० (मातृत्व अनुदान)',
      },
      details: {
        en: 'Transferred via DBT in installments upon early pregnancy registration, ANC checkups, and child vaccination.',
        hi: 'गर्भावस्था पंजीकरण, एएनसी जांच और नवजात शिशु के प्रथम चक्र टीकाकरण के बाद किस्तों में बैंक में अंतरित।',
        mr: 'गर्भारपणाची नोंदणी, वैद्यकीय तपासणी व बाळाच्या लसीकरणानंतर थेट बँक खात्यात.',
      },
    },
    eligibilityCriteria: {
      genderRequired: 'female',
      minAge: 19,
      maxIncomeINR: 800000,
      rationCardAllowed: ['AAY (Antyodaya Anna Yojana)', 'BPL (Below Poverty Line)', 'PHH (Priority Household)', 'White Card (APL)'],
      description: {
        en: 'Pregnant and lactating mothers who are socially/economically disadvantaged (holding Ration card, E-Shram, MGNREGA job card, or annual income < ₹8L).',
        hi: 'गर्भवती एवं धात्री माताएं (राशन कार्ड, ई-श्रम, मनरेगा जॉब कार्ड धारक अथवा ₹8 लाख से कम पारिवारिक आय)।',
        mr: 'गर्भवती माता (रेशन कार्ड, ई-श्रम किंवा मनरेगा जॉब कार्डधारक).',
      },
    },
    requiredDocuments: [
      {
        name: 'Mother & Child Protection (MCP) Card',
        documentType: 'General Regional Document',
        mandatory: true,
        howToGet: {
          en: 'Issued at Anganwadi Centre or Primary Health Centre (PHC).',
          hi: 'आंगनवाड़ी केंद्र या प्राथमिक स्वास्थ्य केंद्र (PHC) द्वारा जारी मातृ एवं बाल सुरक्षा (MCP) कार्ड।',
          mr: 'अंगणवाडी केंद्र किंवा प्राथमिक आरोग्य केंद्राकडून मिळणारे MCP कार्ड.',
        },
      },
      {
        name: 'Aadhaar of Mother and Husband',
        documentType: 'Aadhaar / Voter ID',
        mandatory: true,
        howToGet: {
          en: 'UIDAI Aadhaar Cards.',
          hi: 'माता और पति का आधार कार्ड।',
          mr: 'माता व पतीचे आधार कार्ड.',
        },
      },
    ],
    applicationSteps: {
      en: [
        'Register at local Anganwadi Centre (AWC) or apply online on pmmvy.wcd.gov.in.',
        'Submit MCP card registration, Aadhaar, and Bank Passbook.',
        'Installments credited to bank after routine checkups and vaccination.',
      ],
      hi: [
        'स्थानीय आंगनवाड़ी केंद्र पर पंजीकरण कराएं या pmmvy.wcd.gov.in पर भरें।',
        'एमसीपी कार्ड, आधार और बैंक पासबुक प्रस्तुत करें।',
        'जांच और टीकाकरण के प्रमाण के साथ बैंक में किस्तें आएंगी।',
      ],
      mr: [
        'स्थानिक अंगणवाडी केंद्रात जाऊन नोंदणी करा किंवा pmmvy.wcd.gov.in वर अर्ज करा.',
      ],
    },
    officialPortalUrl: 'https://pmmvy.wcd.gov.in',
    helplineNumber: '1098 / 011-23382393',
  },
];
