import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle,
  Sparkles,
  User,
  MapPin,
  IndianRupee,
  Shield,
  Layers,
  Home,
  GraduationCap,
  Hammer,
  Accessibility,
} from 'lucide-react';
import {
  CitizenProfile,
  Gender,
  IndianState,
  Language,
  RationCardCategory,
  SocialCategory,
} from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface EntityVerificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialProfile: CitizenProfile;
  onSaveAndRecalculate: (updatedProfile: CitizenProfile) => void;
  currentLanguage: Language;
}

const ALL_STATES: IndianState[] = [
  'Maharashtra',
  'Uttar Pradesh',
  'Bihar',
  'Madhya Pradesh',
  'Rajasthan',
  'Karnataka',
  'Tamil Nadu',
  'West Bengal',
  'Gujarat',
  'Andhra Pradesh',
  'Telangana',
  'Odisha',
  'Kerala',
  'Punjab',
  'Haryana',
  'Assam',
  'Jharkhand',
  'Chhattisgarh',
  'Uttarakhand',
  'Himachal Pradesh',
  'Delhi',
  'Jammu & Kashmir',
  'Goa',
  'Tripura',
  'Meghalaya',
  'Manipur',
  'Nagaland',
  'Arunachal Pradesh',
  'Mizoram',
  'Sikkim',
  'Puducherry',
  'Chandigarh',
  'Ladakh',
];

export const EntityVerificationDrawer: React.FC<EntityVerificationDrawerProps> = ({
  isOpen,
  onClose,
  initialProfile,
  onSaveAndRecalculate,
  currentLanguage,
}) => {
  const t = TRANSLATIONS[currentLanguage];
  const [profile, setProfile] = useState<CitizenProfile>({ ...initialProfile });

  useEffect(() => {
    setProfile({ ...initialProfile });
  }, [initialProfile, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveAndRecalculate(profile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div className="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {t.drawerTitle}
              </h3>
              <p className="text-xs text-slate-500">{t.drawerDesc}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs">
          {/* Beneficiary Name & Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                {t.fieldName}
              </label>
              <input
                type="text"
                value={profile.name || ''}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500/20 text-xs font-semibold text-slate-900"
                placeholder="e.g. Ramesh Patil"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {t.fieldAge}
                </label>
                <input
                  type="number"
                  value={profile.age ?? ''}
                  onChange={(e) =>
                    setProfile({ ...profile, age: e.target.value ? parseInt(e.target.value) : null })
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500/20 text-xs font-semibold text-slate-900"
                  placeholder="38"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {t.fieldGender}
                </label>
                <select
                  value={profile.gender}
                  onChange={(e) => setProfile({ ...profile, gender: e.target.value as Gender })}
                  className="w-full px-2.5 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 bg-white"
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="transgender">Transgender</option>
                  <option value="unspecified">Unspecified</option>
                </select>
              </div>
            </div>
          </div>

          {/* State Jurisdiction & District */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                {t.fieldState}
              </label>
              <select
                value={profile.state}
                onChange={(e) => setProfile({ ...profile, state: e.target.value as IndianState })}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 bg-white"
              >
                {ALL_STATES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                {t.fieldDistrict}
              </label>
              <input
                type="text"
                value={profile.district || ''}
                onChange={(e) => setProfile({ ...profile, district: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900"
                placeholder="e.g. Nashik / Gorakhpur"
              />
            </div>
          </div>

          {/* Annual Family Income & Social Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                {t.fieldAnnualIncome}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                  ₹
                </span>
                <input
                  type="number"
                  value={profile.annualIncomeINR ?? ''}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      annualIncomeINR: e.target.value ? parseFloat(e.target.value) : null,
                    })
                  }
                  className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-900"
                  placeholder="38000"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                {t.fieldSocialCategory}
              </label>
              <select
                value={profile.socialCategory}
                onChange={(e) =>
                  setProfile({ ...profile, socialCategory: e.target.value as SocialCategory })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 bg-white"
              >
                <option value="GEN">General (GEN)</option>
                <option value="OBC">Other Backward Class (OBC)</option>
                <option value="SC">Scheduled Caste (SC)</option>
                <option value="ST">Scheduled Tribe (ST)</option>
                <option value="EWS">Economically Weaker Section (EWS)</option>
                <option value="Minority">Religious Minority</option>
                <option value="unspecified">Unspecified</option>
              </select>
            </div>
          </div>

          {/* Ration Card & Landholdings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                {t.fieldRationCard}
              </label>
              <select
                value={profile.rationCardType}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    rationCardType: e.target.value as RationCardCategory,
                  })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 bg-white"
              >
                <option value="AAY (Antyodaya Anna Yojana)">AAY (Antyodaya Yellow/Poorest)</option>
                <option value="BPL (Below Poverty Line)">BPL (Below Poverty Line)</option>
                <option value="PHH (Priority Household)">PHH (Priority Household - Orange/Pink)</option>
                <option value="NPHH (Non-Priority Household)">NPHH (Non-Priority Household)</option>
                <option value="White Card (APL)">White Card (Above Poverty Line)</option>
                <option value="None">None / No Ration Card</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                {t.fieldLandAcres}
              </label>
              <input
                type="number"
                step="0.1"
                value={profile.landOwnershipAcres ?? ''}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    landOwnershipAcres: e.target.value ? parseFloat(e.target.value) : 0,
                  })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900"
                placeholder="1.2"
              />
            </div>
          </div>

          {/* Family Size & Occupation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                {t.fieldFamilySize}
              </label>
              <input
                type="number"
                value={profile.familyMembersCount ?? ''}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    familyMembersCount: e.target.value ? parseInt(e.target.value) : 4,
                  })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                {t.fieldOccupation}
              </label>
              <input
                type="text"
                value={profile.occupation || ''}
                onChange={(e) => setProfile({ ...profile, occupation: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900"
                placeholder="Farmer / Artisan / Laborer"
              />
            </div>
          </div>

          {/* Checkboxes: Student, Disability, Artisan */}
          <div className="pt-2 border-t border-slate-200 space-y-2 bg-slate-50 p-3 rounded-xl">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.isStudent}
                onChange={(e) => setProfile({ ...profile, isStudent: e.target.checked })}
                className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500"
              />
              <span className="font-semibold text-slate-800 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                {t.fieldIsStudent}
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.isStreetVendorOrArtisan}
                onChange={(e) =>
                  setProfile({ ...profile, isStreetVendorOrArtisan: e.target.checked })
                }
                className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500"
              />
              <span className="font-semibold text-slate-800 flex items-center gap-1">
                <Hammer className="w-3.5 h-3.5 text-amber-600" />
                {t.fieldIsVendorArtisan}
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.hasDisabilityCertificate}
                onChange={(e) =>
                  setProfile({ ...profile, hasDisabilityCertificate: e.target.checked })
                }
                className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500"
              />
              <span className="font-semibold text-slate-800 flex items-center gap-1">
                <Accessibility className="w-3.5 h-3.5 text-teal-600" />
                {t.fieldDisability}
              </span>
            </label>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{t.btnApplyChanges}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
