import React from 'react';
import { ShieldCheck, Volume2, VolumeX, Sparkles, Building2, FileText, Layers } from 'lucide-react';
import { IndianState, Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  selectedState: IndianState | 'All India';
  onStateChange: (state: IndianState | 'All India') => void;
  activeTab: 'scanner' | 'directory' | 'csc';
  onTabChange: (tab: 'scanner' | 'directory' | 'csc') => void;
  isSpeaking: boolean;
  onToggleVoice: () => void;
  hasScanResults: boolean;
  onOpenDossier: () => void;
  onOpenEntityDrawer: () => void;
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

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  selectedState,
  onStateChange,
  activeTab,
  onTabChange,
  isSpeaking,
  onToggleVoice,
  hasScanResults,
  onOpenDossier,
  onOpenEntityDrawer,
}) => {
  const t = TRANSLATIONS[currentLanguage];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Tiranga Subtle Indicator */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-white to-emerald-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onTabChange('scanner')}
              className="flex items-center gap-3 text-left focus:outline-hidden group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-orange-600 via-amber-600 to-emerald-700 p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight">
                    {t.appTitle}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-800 border border-orange-200">
                    BHARAT AI
                  </span>
                </div>
                <p className="text-xs text-slate-500 hidden sm:block">
                  {t.appSubtitle}
                </p>
              </div>
            </button>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80">
            <button
              onClick={() => onTabChange('scanner')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'scanner'
                  ? 'bg-white text-orange-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {t.tabScanner}
            </button>
            <button
              onClick={() => onTabChange('directory')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'directory'
                  ? 'bg-white text-orange-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              {t.tabExploreSchemes}
            </button>
            <button
              onClick={() => onTabChange('csc')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'csc'
                  ? 'bg-white text-orange-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              {t.tabCscDesk}
            </button>
          </nav>

          {/* Right Controls: State Filter, Voice, Language, Active Dossier Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick State Selector */}
            <div className="hidden lg:flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
              <span className="text-[11px] font-medium text-slate-500">State:</span>
              <select
                value={selectedState}
                onChange={(e) => onStateChange(e.target.value as IndianState | 'All India')}
                className="text-xs font-semibold text-slate-800 bg-transparent border-none focus:outline-hidden cursor-pointer"
              >
                {INDIAN_STATES_LIST.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Voice Read-Out Toggle */}
            <button
              onClick={onToggleVoice}
              title={isSpeaking ? t.btnStopVoice : t.btnListenVoice}
              className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-all ${
                isSpeaking
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 animate-pulse'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline text-[11px] font-bold">Speaking...</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-slate-600" />
                  <span className="hidden sm:inline text-[11px]">Audio</span>
                </>
              )}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center rounded-lg border border-slate-200 bg-slate-100/80 p-0.5 text-xs font-bold">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded-md transition-all ${
                  currentLanguage === 'en'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-2 py-1 rounded-md transition-all ${
                  currentLanguage === 'hi'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => onLanguageChange('mr')}
                className={`px-2 py-1 rounded-md transition-all ${
                  currentLanguage === 'mr'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                मराठी
              </button>
            </div>

            {/* If has active scan, show Dossier Print Quick Button */}
            {hasScanResults && (
              <button
                onClick={onOpenDossier}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Dossier Slip</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex md:hidden items-center justify-around border-t border-slate-200 py-2 gap-1">
          <button
            onClick={() => onTabChange('scanner')}
            className={`flex-1 py-1.5 text-center text-xs font-bold rounded-md ${
              activeTab === 'scanner' ? 'bg-orange-50 text-orange-700' : 'text-slate-600'
            }`}
          >
            {t.tabScanner}
          </button>
          <button
            onClick={() => onTabChange('directory')}
            className={`flex-1 py-1.5 text-center text-xs font-bold rounded-md ${
              activeTab === 'directory' ? 'bg-orange-50 text-orange-700' : 'text-slate-600'
            }`}
          >
            {t.tabExploreSchemes}
          </button>
          <button
            onClick={() => onTabChange('csc')}
            className={`flex-1 py-1.5 text-center text-xs font-bold rounded-md ${
              activeTab === 'csc' ? 'bg-orange-50 text-orange-700' : 'text-slate-600'
            }`}
          >
            {t.tabCscDesk}
          </button>
        </div>
      </div>
    </header>
  );
};
