import { SCHEMES_DATABASE } from '../data/schemesDatabase';
import { CitizenProfile, DocumentType, MatchStatus, Scheme, SchemeMatchResult } from '../types';

export function matchCitizenToSchemes(profile: CitizenProfile): {
  matchedSchemes: SchemeMatchResult[];
  summary: {
    totalEligibleSchemes: number;
    totalPartialSchemes: number;
    totalAnnualCashBenefitINR: number;
    totalCashlessHealthCoverINR: number;
    totalOneTimeGrantsINR: number;
  };
} {
  const results: SchemeMatchResult[] = [];

  for (const scheme of SCHEMES_DATABASE) {
    const evalResult = evaluateSingleScheme(scheme, profile);
    if (evalResult.status !== 'NOT_ELIGIBLE' || evalResult.matchScore >= 40) {
      results.push(evalResult);
    }
  }

  // Sort results by status (ELIGIBLE first, then PARTIALLY_ELIGIBLE) and highest financial benefit
  results.sort((a, b) => {
    if (a.status === 'ELIGIBLE' && b.status !== 'ELIGIBLE') return -1;
    if (b.status === 'ELIGIBLE' && a.status !== 'ELIGIBLE') return 1;
    return (
      (b.scheme.benefit.amountINR || 0) * (b.matchScore / 100) -
      (a.scheme.benefit.amountINR || 0) * (a.matchScore / 100)
    );
  });

  const eligibleList = results.filter((r) => r.status === 'ELIGIBLE');
  const partialList = results.filter((r) => r.status === 'PARTIALLY_ELIGIBLE');

  let totalAnnualCash = 0;
  let totalHealthCover = 0;
  let totalOneTime = 0;

  for (const item of [...eligibleList, ...partialList]) {
    const benefit = item.scheme.benefit;
    if (benefit.period === 'yearly' || benefit.period === 'monthly') {
      totalAnnualCash += benefit.amountINR;
    } else if (benefit.period === 'health_cover') {
      if (benefit.amountINR > totalHealthCover) {
        totalHealthCover = benefit.amountINR; // Maximum health cover available
      }
    } else if (benefit.period === 'one-time' || benefit.period === 'loan_subsidy') {
      totalOneTime += benefit.amountINR;
    }
  }

  return {
    matchedSchemes: results,
    summary: {
      totalEligibleSchemes: eligibleList.length,
      totalPartialSchemes: partialList.length,
      totalAnnualCashBenefitINR: totalAnnualCash,
      totalCashlessHealthCoverINR: totalHealthCover,
      totalOneTimeGrantsINR: totalOneTime,
    },
  };
}

function evaluateSingleScheme(scheme: Scheme, profile: CitizenProfile): SchemeMatchResult {
  const reasonsEn: string[] = [];
  const reasonsHi: string[] = [];
  const reasonsMr: string[] = [];

  const missingEn: string[] = [];
  const missingHi: string[] = [];
  const missingMr: string[] = [];

  let score = 100;
  let isHardExcluded = false;

  // 1. State check
  if (scheme.level === 'State') {
    if (
      scheme.applicableState !== 'All India' &&
      scheme.applicableState !== profile.state
    ) {
      isHardExcluded = true;
      score = 0;
      missingEn.push(`Only applicable for permanent residents of ${scheme.applicableState} (Current: ${profile.state}).`);
      missingHi.push(`यह केवल ${scheme.applicableState} के स्थायी निवासियों हेतु है (वर्तमान: ${profile.state})।`);
      missingMr.push(`फक्त ${scheme.applicableState} राज्यातील रहिवाशांसाठी लागू (सध्या: ${profile.state}).`);
    } else {
      reasonsEn.push(`Resident of ${profile.state}, matching state domicile criteria.`);
      reasonsHi.push(`${profile.state} के निवासी होने के कारण राज्य अधिवास पात्रता पूर्ण है।`);
      reasonsMr.push(`${profile.state} राज्याचे रहिवासी असल्याने अधिवास पात्रता पूर्ण.`);
    }
  } else {
    reasonsEn.push('Applicable across all Indian States & Union Territories (Central Scheme).');
    reasonsHi.push('संपूर्ण भारत के नागरिकों के लिए केंद्र सरकार की योजना।');
    reasonsMr.push('संपूर्ण भारतातील नागरिकांसाठी केंद्र शासन योजना.');
  }

  // 2. Gender check
  if (scheme.eligibilityCriteria.genderRequired) {
    if (
      profile.gender !== 'unspecified' &&
      profile.gender !== scheme.eligibilityCriteria.genderRequired
    ) {
      isHardExcluded = true;
      score = 0;
      missingEn.push(`Exclusively for ${scheme.eligibilityCriteria.genderRequired} beneficiaries.`);
      missingHi.push(`यह योजना केवल ${scheme.eligibilityCriteria.genderRequired === 'female' ? 'महिला' : 'पुरुष'} लाभार्थियों हेतु है।`);
      missingMr.push(`ही योजना फक्त ${scheme.eligibilityCriteria.genderRequired === 'female' ? 'महिला' : 'पुरुष'} लाभार्थ्यांसाठी आहे.`);
    } else if (profile.gender === scheme.eligibilityCriteria.genderRequired) {
      reasonsEn.push(`Applicant matches gender criterion (${profile.gender}).`);
      reasonsHi.push(`आवेदक लिंग मानदंड (${profile.gender === 'female' ? 'महिला' : 'पुरुष'}) को पूरा करता है।`);
      reasonsMr.push(`अर्जदार लिंग निकष (${profile.gender === 'female' ? 'महिला' : 'पुरुष'}) पूर्ण करतो.`);
    }
  }

  // 3. Income check
  if (scheme.eligibilityCriteria.maxIncomeINR && profile.annualIncomeINR != null) {
    if (profile.annualIncomeINR <= scheme.eligibilityCriteria.maxIncomeINR) {
      reasonsEn.push(
        `Annual income ₹${profile.annualIncomeINR.toLocaleString('en-IN')} is within the limit of ₹${scheme.eligibilityCriteria.maxIncomeINR.toLocaleString('en-IN')}.`
      );
      reasonsHi.push(
        `वार्षिक आय ₹${profile.annualIncomeINR.toLocaleString('en-IN')} निर्धारित सीमा ₹${scheme.eligibilityCriteria.maxIncomeINR.toLocaleString('en-IN')} के अंतर्गत है।`
      );
      reasonsMr.push(
        `वार्षिक उत्पन्न ₹${profile.annualIncomeINR.toLocaleString('en-IN')} कमाल मर्यादा ₹${scheme.eligibilityCriteria.maxIncomeINR.toLocaleString('en-IN')} च्या आत आहे.`
      );
    } else {
      score -= 50;
      isHardExcluded = true;
      missingEn.push(
        `Annual income ₹${profile.annualIncomeINR.toLocaleString('en-IN')} exceeds the ceiling of ₹${scheme.eligibilityCriteria.maxIncomeINR.toLocaleString('en-IN')}.`
      );
      missingHi.push(
        `वार्षिक आय ₹${profile.annualIncomeINR.toLocaleString('en-IN')} अधिकतम सीमा ₹${scheme.eligibilityCriteria.maxIncomeINR.toLocaleString('en-IN')} से अधिक है।`
      );
      missingMr.push(
        `वार्षिक उत्पन्न ₹${profile.annualIncomeINR.toLocaleString('en-IN')} कमाल मर्यादेपेक्षा अधिक आहे.`
      );
    }
  }

  // 4. Age check
  if (profile.age != null) {
    if (scheme.eligibilityCriteria.minAge && profile.age < scheme.eligibilityCriteria.minAge) {
      score -= 40;
      isHardExcluded = true;
      missingEn.push(`Age ${profile.age} is below minimum requirement of ${scheme.eligibilityCriteria.minAge} years.`);
      missingHi.push(`आयु ${profile.age} वर्ष न्यूनतम आवश्यकता ${scheme.eligibilityCriteria.minAge} वर्ष से कम है।`);
      missingMr.push(`वय ${profile.age} वर्षे किमान आवश्यक ${scheme.eligibilityCriteria.minAge} वर्षांपेक्षा कमी आहे.`);
    }
    if (scheme.eligibilityCriteria.maxAge && profile.age > scheme.eligibilityCriteria.maxAge) {
      score -= 40;
      isHardExcluded = true;
      missingEn.push(`Age ${profile.age} exceeds maximum limit of ${scheme.eligibilityCriteria.maxAge} years.`);
      missingHi.push(`आयु ${profile.age} वर्ष अधिकतम सीमा ${scheme.eligibilityCriteria.maxAge} वर्ष से अधिक है।`);
      missingMr.push(`वय ${profile.age} वर्षे कमाल मर्यादा ${scheme.eligibilityCriteria.maxAge} पेक्षा जास्त आहे.`);
    }
  }

  // 5. Social Category (Caste) check
  if (scheme.eligibilityCriteria.socialCategories && scheme.eligibilityCriteria.socialCategories.length > 0) {
    if (
      profile.socialCategory !== 'unspecified' &&
      !scheme.eligibilityCriteria.socialCategories.includes(profile.socialCategory)
    ) {
      score -= 40;
      missingEn.push(
        `Caste category ${profile.socialCategory} is not in target list (${scheme.eligibilityCriteria.socialCategories.join(', ')}).`
      );
      missingHi.push(
        `जाति वर्ग ${profile.socialCategory} लक्षित सूची में शामिल नहीं है।`
      );
      missingMr.push(
        `जात प्रवर्ग ${profile.socialCategory} या योजनेच्या प्रवर्गात नाही.`
      );
    } else if (scheme.eligibilityCriteria.socialCategories.includes(profile.socialCategory)) {
      reasonsEn.push(`Belongs to eligible category: ${profile.socialCategory}.`);
      reasonsHi.push(`पात्र सामाजिक वर्ग: ${profile.socialCategory} से संबंधित।`);
      reasonsMr.push(`पात्र सामाजिक प्रवर्ग: ${profile.socialCategory}.`);
    }
  }

  // 6. Farmer check
  if (scheme.eligibilityCriteria.requiresFarmer) {
    const isFarmer =
      (profile.landOwnershipAcres != null && profile.landOwnershipAcres > 0) ||
      profile.farmerCategory !== 'None' ||
      profile.occupation?.toLowerCase().includes('farmer') ||
      profile.occupation?.toLowerCase().includes('kisan') ||
      profile.occupation?.toLowerCase().includes('sheti');

    if (isFarmer) {
      reasonsEn.push(
        `Landholder/Farmer status confirmed (${profile.landOwnershipAcres ? profile.landOwnershipAcres + ' acres' : profile.farmerCategory}).`
      );
      reasonsHi.push(
        `भूस्वामी/किसान स्थिति प्रमाणित (${profile.landOwnershipAcres ? profile.landOwnershipAcres + ' एकड़' : profile.farmerCategory})।`
      );
      reasonsMr.push(
        `शेतकरी/जमीनधारक स्थिती प्रमाणित (${profile.landOwnershipAcres ? profile.landOwnershipAcres + ' एकर' : profile.farmerCategory}).`
      );
    } else {
      score -= 40;
      missingEn.push('Requires agricultural land ownership or farmer passbook.');
      missingHi.push('कृषि भूमि स्वामित्व अथवा किसान पासबुक की आवश्यकता है।');
      missingMr.push('शेतजमीन धारणा किंवा शेतकरी पासबुक आवश्यक.');
    }
  }

  // 7. Disability check
  if (scheme.eligibilityCriteria.requiresDisability) {
    if (
      profile.hasDisabilityCertificate ||
      (profile.disabilityPercentage != null && profile.disabilityPercentage >= (scheme.eligibilityCriteria.minDisabilityPercentage || 40))
    ) {
      reasonsEn.push(
        `Certified disability verified (${profile.disabilityPercentage || 40}% or higher).`
      );
      reasonsHi.push(
        `प्रमाणित दिव्यांगता (${profile.disabilityPercentage || 40}% या अधिक) सत्यापित।`
      );
      reasonsMr.push(
        `वैद्यकीय दिव्यांगत्व (${profile.disabilityPercentage || 40}% किंवा अधिक) प्रमाणित.`
      );
    } else {
      score -= 50;
      isHardExcluded = true;
      missingEn.push('Requires Medical Board Disability / UDID Certificate with minimum 40% disability.');
      missingHi.push('कम से कम 40% दिव्यांगता का यूडीआईडी / मेडिकल बोर्ड प्रमाण पत्र आवश्यक है।');
      missingMr.push('किमान ४०% दिव्यांगत्व दाखवणारे UDID किंवा वैद्यकीय प्रमाणपत्र आवश्यक.');
    }
  }

  // 8. Student check
  if (scheme.eligibilityCriteria.requiresStudent) {
    if (profile.isStudent) {
      reasonsEn.push('Enrolled student status verified in household.');
      reasonsHi.push('परिवार में अध्ययनरत छात्र/छात्रा की स्थिति सत्यापित।');
      reasonsMr.push('कुटुंबात शिक्षण घेणारा विद्यार्थी असल्याची नोंद.');
    } else {
      score -= 30;
      missingEn.push('Requires currently enrolled student in family.');
      missingHi.push('परिवार में वर्तमान में अध्ययनरत छात्र का होना आवश्यक है।');
      missingMr.push('कुटुंबात शाळेत/कॉलेजमध्ये शिकणारा विद्यार्थी आवश्यक.');
    }
  }

  // 9. Artisan / Vendor check
  if (scheme.eligibilityCriteria.requiresArtisanOrVendor) {
    if (profile.isStreetVendorOrArtisan) {
      reasonsEn.push('Traditional artisan or street vendor occupational criteria met.');
      reasonsHi.push('पारंपरिक कारीगर या स्ट्रीट वेंडर व्यवसाय मानदंड पूर्ण।');
      reasonsMr.push('पारंपरिक कारागीर किंवा पथविक्रेता निकष पूर्ण.');
    } else {
      score -= 30;
      missingEn.push('Requires artisan trade or street vending registration.');
      missingHi.push('कारीगर व्यवसाय या स्ट्रीट वेंडिंग पंजीकरण की आवश्यकता है।');
      missingMr.push('कारागीर व्यवसाय किंवा फेरीवाला नोंदणी आवश्यक.');
    }
  }

  // 10. Check Missing Documents
  const missingDocsList: SchemeMatchResult['missingDocuments'] = [];
  for (const doc of scheme.requiredDocuments) {
    const isDocHeld = profile.verifiedDocuments.some((v) => {
      if (doc.documentType === 'Other') return false;
      return v === doc.documentType;
    });

    if (!isDocHeld) {
      missingDocsList.push({
        documentName: doc.name,
        howToGet: doc.howToGet,
        isMandatory: doc.mandatory,
      });

      if (doc.mandatory) {
        score -= 15;
      }
    }
  }

  // Determine Final Status
  let status: MatchStatus = 'ELIGIBLE';
  if (isHardExcluded || score < 40) {
    status = 'NOT_ELIGIBLE';
  } else if (score < 80 || missingDocsList.some((d) => d.isMandatory)) {
    status = 'PARTIALLY_ELIGIBLE';
  }

  // If eligible, ensure we have at least 1 reason
  if (reasonsEn.length === 0 && status !== 'NOT_ELIGIBLE') {
    reasonsEn.push('Profile meets all general welfare parameters.');
    reasonsHi.push('प्रोफ़ाइल सभी सामान्य कल्याणकारी मानदंडों को पूरा करता है।');
    reasonsMr.push('प्रोफाइल सर्व कल्याणकारी निकष पूर्ण करते.');
  }

  return {
    scheme,
    status,
    matchScore: Math.max(0, Math.min(100, score)),
    reasonsForEligibility: {
      en: reasonsEn,
      hi: reasonsHi,
      mr: reasonsMr,
    },
    missingRequirements: {
      en: missingEn,
      hi: missingHi,
      mr: missingMr,
    },
    missingDocuments: missingDocsList,
    estimatedAnnualBenefitINR: scheme.benefit.amountINR || 0,
  };
}
