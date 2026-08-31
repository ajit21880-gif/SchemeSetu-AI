import React from 'react';
import { Search, Filter, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';
import { Language, SchemeCategory } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface SchemeFilterBarProps {
  currentLanguage: Language;
  filterStatus: 'all' | 'eligible' | 'partial';
  onFilterStatusChange: (status: 'all' | 'eligible' | 'partial') => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalCount: number;
  eligibleCount: number;
  partialCount: number;
}

const CATEGORIES: { id: string; label: Record<Language, string> }[] = [
  { id: 'all', label: { en: 'All Categories', hi: 'सभी श्रेणियां', mr: 'सर्व प्रकार' } },
  { id: 'Financial / Cash Aid', label: { en: 'Direct Cash DBT', hi: 'नकद सहायता (DBT)', mr: 'थेट बँक मदत' } },
  { id: 'Healthcare', label: { en: 'Healthcare', hi: 'स्वास्थ्य सुरक्षा', mr: 'आरोग्य संरक्षण' } },
  { id: 'Agriculture & Farming', label: { en: 'Agriculture & Kisan', hi: 'कृषि व किसान', mr: 'शेती व शेतकरी' } },
  { id: 'Housing & Sanitation', label: { en: 'Housing & PMAY', hi: 'आवास व घरकुल', mr: 'घरकुल व स्वच्छता' } },
  { id: 'Women & Child Welfare', label: { en: 'Women & Child', hi: 'महिला व बाल विकास', mr: 'महिला व बाल कल्याण' } },
  { id: 'Education & Skill', label: { en: 'Education & Students', hi: 'शिक्षा व छात्रवृत्ति', mr: 'शिक्षण व शिष्यवृत्ती' } },
  { id: 'Social Security & Pension', label: { en: 'Pensions & Disability', hi: 'पेंशन व दिव्यांगता', mr: 'पेन्शन व सामाजिक सुरक्षा' } },
  { id: 'Livelihood & Artisan', label: { en: 'Artisan & Vendor', hi: 'कारीगर व पथविक्रेता', mr: 'कारागीर व फेरीवाला' } },
];

export const SchemeFilterBar: React.FC<SchemeFilterBarProps> = ({
  currentLanguage,
  filterStatus,
  onFilterStatusChange,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  totalCount,
  eligibleCount,
  partialCount,
}) => {
  const t = TRANSLATIONS[currentLanguage];

  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs mb-6 space-y-3">
      {/* Top row: Status Tabs & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Status Pill Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => onFilterStatusChange('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              filterStatus === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.filterAll} ({totalCount})
          </button>

          <button
            onClick={() => onFilterStatusChange('eligible')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              filterStatus === 'eligible'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t.filterEligible} ({eligibleCount})</span>
          </button>

          <button
            onClick={() => onFilterStatusChange('partial')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              filterStatus === 'partial'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{t.filterPartial} ({partialCount})</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchSchemesPlaceholder}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 text-slate-800 placeholder:text-slate-400 font-medium"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
          <Filter className="w-3 h-3" />
          Category:
        </span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-orange-100 text-orange-800 border border-orange-300'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat.label[currentLanguage] || cat.label.en}
          </button>
        ))}
      </div>
    </div>
  );
};
