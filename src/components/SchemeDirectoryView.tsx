import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, ExternalLink, Phone, Building2, IndianRupee, Sparkles, MapPin } from 'lucide-react';
import { SCHEMES_DATABASE } from '../data/schemesDatabase';
import { IndianState, Language, Scheme } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface SchemeDirectoryViewProps {
  currentLanguage: Language;
  selectedState: IndianState | 'All India';
  onStateChange: (state: IndianState | 'All India') => void;
  onReadSchemeAloud?: (text: string) => void;
}

const INDIAN_STATES_LIST: (IndianState | 'All India')[] = [
  'All India',
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
];

const CATEGORIES = [
  'all',
  'Financial / Cash Aid',
  'Healthcare',
  'Agriculture & Farming',
  'Housing & Sanitation',
  'Women & Child Welfare',
  'Education & Skill',
  'Social Security & Pension',
  'Livelihood & Artisan',
];

export const SchemeDirectoryView: React.FC<SchemeDirectoryViewProps> = ({
  currentLanguage,
  selectedState,
  onStateChange,
  onReadSchemeAloud,
}) => {
  const t = TRANSLATIONS[currentLanguage];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSchemes = useMemo(() => {
    return SCHEMES_DATABASE.filter((s) => {
      // State match
      if (selectedState !== 'All India') {
        if (s.level === 'State' && s.applicableState !== selectedState) {
          return false;
        }
      }

      // Category match
      if (selectedCategory !== 'all' && s.category !== selectedCategory) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const nameEn = s.name.en.toLowerCase();
        const nameHi = s.name.hi.toLowerCase();
        const nameMr = s.name.mr.toLowerCase();
        const taglineEn = s.tagline.en.toLowerCase();
        const deptEn = s.department.en.toLowerCase();
        const code = s.shortCode.toLowerCase();

        return (
          nameEn.includes(q) ||
          nameHi.includes(q) ||
          nameMr.includes(q) ||
          taglineEn.includes(q) ||
          deptEn.includes(q) ||
          code.includes(q)
        );
      }

      return true;
    });
  }, [selectedState, selectedCategory, searchQuery]);

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Official Government Welfare Repository</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-2">
            Explore 40+ Central & All India State Schemes
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Browse verified welfare schemes across agriculture, health, direct cash transfers, education, and pensions.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs mb-8 space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scheme by name, ministry, keyword, or short code..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 text-slate-800 font-medium"
              />
            </div>

            {/* State Filter Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                State:
              </span>
              <select
                value={selectedState}
                onChange={(e) => onStateChange(e.target.value as IndianState | 'All India')}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-hidden"
              >
                {INDIAN_STATES_LIST.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-4 text-xs font-bold text-slate-500">
          <span>Showing {filteredSchemes.length} Government Welfare Schemes</span>
          {selectedState !== 'All India' && (
            <span className="text-orange-700">Filtered for: {selectedState} & Central</span>
          )}
        </div>

        {/* Grid of Schemes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSchemes.map((scheme) => {
            const schemeName = scheme.name[currentLanguage] || scheme.name.en;
            const tagline = scheme.tagline[currentLanguage] || scheme.tagline.en;
            const departmentName = scheme.department[currentLanguage] || scheme.department.en;

            return (
              <div
                key={scheme.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        scheme.level === 'Central'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      }`}
                    >
                      {scheme.level === 'Central' ? 'Central Scheme' : `${scheme.applicableState} State`}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">
                      {scheme.shortCode}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                    {schemeName}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    {departmentName}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {tagline}
                  </p>
                </div>

                <div>
                  {/* Financial Benefit Box */}
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 mb-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-900">
                      Entitlement Benefit:
                    </span>
                    <span className="text-xs font-black text-emerald-800">
                      ₹{scheme.benefit.amountINR.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                    {scheme.helplineNumber && (
                      <a
                        href={`tel:${scheme.helplineNumber}`}
                        className="text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-1"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{scheme.helplineNumber}</span>
                      </a>
                    )}

                    {scheme.officialPortalUrl && (
                      <a
                        href={scheme.officialPortalUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 font-bold text-orange-600 hover:text-orange-700 ml-auto"
                      >
                        <span>Official Portal</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
