export type Language = 'en' | 'hi' | 'mr';

export type IndianState =
  | 'All India'
  | 'Maharashtra'
  | 'Uttar Pradesh'
  | 'Bihar'
  | 'Madhya Pradesh'
  | 'Rajasthan'
  | 'Karnataka'
  | 'Tamil Nadu'
  | 'West Bengal'
  | 'Gujarat'
  | 'Andhra Pradesh'
  | 'Telangana'
  | 'Odisha'
  | 'Kerala'
  | 'Punjab'
  | 'Haryana'
  | 'Assam'
  | 'Jharkhand'
  | 'Chhattisgarh'
  | 'Uttarakhand'
  | 'Himachal Pradesh'
  | 'Delhi'
  | 'Jammu & Kashmir'
  | 'Goa'
  | 'Tripura'
  | 'Meghalaya'
  | 'Manipur'
  | 'Nagaland'
  | 'Arunachal Pradesh'
  | 'Mizoram'
  | 'Sikkim'
  | 'Puducherry'
  | 'Chandigarh'
  | 'Ladakh';

export type SocialCategory = 'GEN' | 'OBC' | 'SC' | 'ST' | 'EWS' | 'Minority' | 'unspecified';

export type RationCardCategory =
  | 'AAY (Antyodaya Anna Yojana)'
  | 'BPL (Below Poverty Line)'
  | 'PHH (Priority Household)'
  | 'NPHH (Non-Priority Household)'
  | 'White Card (APL)'
  | 'None'
  | 'Unknown';

export type FarmerCategory = 'Marginal (<1 ha)' | 'Small (1-2 ha)' | 'Medium/Large (>2 ha)' | 'Landless' | 'None';

export type Gender = 'female' | 'male' | 'transgender' | 'unspecified';

export type DocumentType =
  | 'Ration Card (NFSA/BPL/AAY)'
  | 'Tahsildar Income Certificate'
  | 'Caste / Community Certificate'
  | '7/12 Land Record (Satbara / RoR / Khasra)'
  | 'Divyangjan UDID / Disability Certificate'
  | 'Kisan Credit Card / Farmer Passbook'
  | 'EWS Certificate'
  | 'Aadhaar / Voter ID'
  | 'Senior Citizen / Pension Card'
  | 'Student ID / Enrollment'
  | 'General Regional Document';

export interface ExtractedEntity {
  label: string;
  value: string;
  confidence: number;
  originalText?: string;
}

export interface CitizenProfile {
  name?: string;
  age?: number | null;
  gender: Gender;
  state: IndianState;
  district?: string;
  annualIncomeINR?: number | null;
  socialCategory: SocialCategory;
  rationCardType: RationCardCategory;
  landOwnershipAcres?: number | null;
  farmerCategory: FarmerCategory;
  familyMembersCount?: number | null;
  isStudent?: boolean;
  isWidowOrSingleMother?: boolean;
  hasDisabilityCertificate?: boolean;
  disabilityPercentage?: number | null;
  hasPuccaHouse?: boolean;
  isStreetVendorOrArtisan?: boolean;
  occupation?: string;
  hasBankAadhaarSeeded?: boolean;
  verifiedDocuments: DocumentType[];
}

export type SchemeCategory =
  | 'Financial & Direct Cash'
  | 'Healthcare & Insurance'
  | 'Housing & Shelter'
  | 'Agriculture & Farming'
  | 'Education & Scholarships'
  | 'Women & Child Welfare'
  | 'Pensions & Divyangjan'
  | 'Skill & Self-Employment';

export interface SchemeBenefit {
  amountINR: number;
  period: 'yearly' | 'monthly' | 'one-time' | 'health_cover' | 'loan_subsidy' | 'food_grain';
  displayText: {
    en: string;
    hi: string;
    mr: string;
  };
  details: {
    en: string;
    hi: string;
    mr: string;
  };
}

export interface Scheme {
  id: string;
  name: {
    en: string;
    hi: string;
    mr: string;
  };
  shortCode: string;
  department: {
    en: string;
    hi: string;
    mr: string;
  };
  level: 'Central' | 'State';
  applicableState: IndianState | 'All India';
  category: SchemeCategory;
  tagline: {
    en: string;
    hi: string;
    mr: string;
  };
  benefit: SchemeBenefit;
  eligibilityCriteria: {
    maxIncomeINR?: number;
    minAge?: number;
    maxAge?: number;
    genderRequired?: Gender;
    socialCategories?: SocialCategory[];
    rationCardAllowed?: RationCardCategory[];
    maxLandAcres?: number;
    requiresDisability?: boolean;
    minDisabilityPercentage?: number;
    requiresStudent?: boolean;
    requiresFarmer?: boolean;
    requiresNoPuccaHouse?: boolean;
    requiresArtisanOrVendor?: boolean;
    requiresWidowOrSingle?: boolean;
    description: {
      en: string;
      hi: string;
      mr: string;
    };
  };
  requiredDocuments: {
    name: string;
    documentType: DocumentType | 'Other';
    mandatory: boolean;
    howToGet: {
      en: string;
      hi: string;
      mr: string;
    };
  }[];
  applicationSteps: {
    en: string[];
    hi: string[];
    mr: string[];
  };
  officialPortalUrl: string;
  helplineNumber: string;
  popularInStates?: IndianState[];
}

export type MatchStatus = 'ELIGIBLE' | 'PARTIALLY_ELIGIBLE' | 'NOT_ELIGIBLE';

export interface SchemeMatchResult {
  scheme: Scheme;
  status: MatchStatus;
  matchScore: number; // 0 - 100
  reasonsForEligibility: {
    en: string[];
    hi: string[];
    mr: string[];
  };
  missingRequirements: {
    en: string[];
    hi: string[];
    mr: string[];
  };
  missingDocuments: {
    documentName: string;
    howToGet: {
      en: string;
      hi: string;
      mr: string;
    };
    isMandatory: boolean;
  }[];
  estimatedAnnualBenefitINR: number;
}

export interface DocumentScanResponse {
  success: boolean;
  documentType: DocumentType;
  detectedLanguage: string;
  ocrConfidence: number;
  extractedRawText: string;
  citizenProfile: CitizenProfile;
  keyEntities: ExtractedEntity[];
  matchedSchemes: SchemeMatchResult[];
  summary: {
    totalEligibleSchemes: number;
    totalPartialSchemes: number;
    totalAnnualCashBenefitINR: number;
    totalCashlessHealthCoverINR: number;
    totalOneTimeGrantsINR: number;
  };
  processingTimeMs: number;
}

export interface SampleDocumentItem {
  id: string;
  title: {
    en: string;
    hi: string;
    mr: string;
  };
  subtitle: {
    en: string;
    hi: string;
    mr: string;
  };
  documentType: DocumentType;
  state: IndianState;
  language: string;
  description: {
    en: string;
    hi: string;
    mr: string;
  };
  rawTextPreview: string;
  mockProfile: CitizenProfile;
  previewColor: string;
}
