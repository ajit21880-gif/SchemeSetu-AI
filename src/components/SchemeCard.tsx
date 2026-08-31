import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Phone,
  ChevronDown,
  ChevronUp,
  FileQuestion,
  HelpCircle,
  Volume2,
  VolumeX,
  IndianRupee,
  Building,
  Sparkles,
} from 'lucide-react';
import { Language, SchemeMatchResult } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface SchemeCardProps {
  matchResult: SchemeMatchResult;
  currentLanguage: Language;
  onReadSchemeAloud?: (text: string) => void;
  isReadingCurrent?: boolean;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({
  matchResult,
  currentLanguage,
  onReadSchemeAloud,
  isReadingCurrent = false,
}) => {
  const t = TRANSLATIONS[currentLanguage];
  const { scheme, status, reasonsForEligibility, missingRequirements, missingDocuments, matchScore } = matchResult;

  const [expanded, setExpanded] = useState(status === 'ELIGIBLE');

  const schemeName = scheme?.name?.[currentLanguage] || scheme?.name?.en || 'Government Scheme';
  const tagline = scheme?.tagline?.[currentLanguage] || scheme?.tagline?.en || '';
  const departmentName = scheme?.department?.[currentLanguage] || scheme?.department?.en || 'Government of India';
  const benefitDesc = scheme?.benefit?.displayText?.[currentLanguage] || scheme?.benefit?.displayText?.en || '';
  const applySteps = scheme?.applicationSteps?.[currentLanguage] || scheme?.applicationSteps?.en || [];

  const reasons = (reasonsForEligibility?.[currentLanguage] || reasonsForEligibility?.en) || [];
  const missing = (missingRequirements?.[currentLanguage] || missingRequirements?.en) || [];

  // Format financial amount badge
  const formatBenefitBadge = () => {
    const amt = scheme.benefit.amountINR;
    if (!amt) return benefitDesc;
    if (scheme.benefit.period === 'health_cover') {
      return `₹${(amt / 100000).toFixed(0)} Lakhs Health Cover`;
    }
    if (scheme.benefit.period === 'yearly') {
      return `₹${amt.toLocaleString('en-IN')} / year`;
    }
    if (scheme.benefit.period === 'monthly') {
      return `₹${amt.toLocaleString('en-IN')} / month (₹${(amt * 12).toLocaleString('en-IN')}/yr)`;
    }
    if (scheme.benefit.period === 'one-time') {
      return `₹${amt.toLocaleString('en-IN')} Grant`;
    }
    if (scheme.benefit.period === 'loan_subsidy') {
      return `₹${amt.toLocaleString('en-IN')} Collateral-Free Loan`;
    }
    return `₹${amt.toLocaleString('en-IN')}`;
  };

  const handleVoiceRead = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onReadSchemeAloud) return;
    const speechScript = `${schemeName}. ${tagline}. Benefit: ${formatBenefitBadge()}. Status: ${
      status === 'ELIGIBLE' ? 'You are fully eligible' : 'You need additional documents'
    }. Reasons: ${reasons.join('. ')}`;
    onReadSchemeAloud(speechScript);
  };

  return (
    <div
      className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden bg-white shadow-xs hover:shadow-md ${
        status === 'ELIGIBLE'
          ? 'border-emerald-200/90 ring-1 ring-emerald-500/20'
          : status === 'PARTIALLY_ELIGIBLE'
          ? 'border-amber-200/90 ring-1 ring-amber-500/20'
          : 'border-slate-200 opacity-75'
      }`}
    >
      {/* Top Banner & Status Header */}
      <div className="p-4 sm:p-6 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          {/* Level and Category Badges */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                scheme.level === 'Central'
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
              }`}
            >
              {scheme.level === 'Central' ? t.badgeCentral : `${scheme.applicableState} ${t.badgeState}`}
            </span>

            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
              {scheme.category}
            </span>

            <span className="text-[10px] font-mono text-slate-500">
              {scheme.shortCode}
            </span>
          </div>

          {/* Eligibility Status Pill */}
          <div className="flex items-center gap-1.5">
            {status === 'ELIGIBLE' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {t.badgeEligible} ({matchScore}%)
              </span>
            )}
            {status === 'PARTIALLY_ELIGIBLE' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                {t.badgePartial}
              </span>
            )}
            {status === 'NOT_ELIGIBLE' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                {t.badgeNotEligible}
              </span>
            )}

            {/* Audio speaker button */}
            {onReadSchemeAloud && (
              <button
                onClick={handleVoiceRead}
                title={isReadingCurrent ? 'Stop speech' : 'Listen in regional voice'}
                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                  isReadingCurrent
                    ? 'bg-emerald-600 text-white border-emerald-700 animate-pulse'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                {isReadingCurrent ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>

        {/* Scheme Title & Financial Benefit Highlight */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight leading-snug">
              {schemeName}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {departmentName}
            </p>
          </div>

          {/* Large Financial Benefit Pill */}
          <div className="shrink-0 self-start sm:self-auto">
            <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-xs flex items-center gap-1.5">
              <IndianRupee className="w-4 h-4" />
              <span>{formatBenefitBadge()}</span>
            </div>
          </div>
        </div>

        {/* Scheme Tagline */}
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-3">
          {tagline}
        </p>

        {/* Reasons for Qualification Quick List */}
        {reasons && reasons.length > 0 && (
          <div className="mb-3 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
            <div className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              {t.whyYouQualify}
            </div>
            <ul className="space-y-1">
              {reasons.map((r, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-xs text-emerald-900 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Missing Documents Alert (if any) */}
        {missingDocuments && missingDocuments.length > 0 && (
          <div className="mb-3 p-3 rounded-xl bg-amber-50/80 border border-amber-200">
            <div className="text-[11px] font-bold text-amber-900 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              {t.missingDocumentsTitle}
            </div>
            <div className="space-y-2">
              {missingDocuments.map((doc, idx) => {
                const howTo = doc.howToGet[currentLanguage] || doc.howToGet.en;
                return (
                  <div key={idx} className="bg-white/80 p-2.5 rounded-lg border border-amber-200/80 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-900 mb-0.5">
                      <span className="flex items-center gap-1">
                        <FileQuestion className="w-3.5 h-3.5 text-amber-600" />
                        {doc.documentName}
                      </span>
                      {doc.isMandatory && (
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200">
                          {t.mandatoryDocBadge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-normal pl-4.5">
                      <span className="font-semibold text-slate-700">{t.howToGetDocument}</span> {howTo}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Expand / Collapse Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full py-1.5 flex items-center justify-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors border-t border-slate-100 pt-2 cursor-pointer"
        >
          <span>{expanded ? 'Show Less Details' : 'View Step-by-Step Application Guide & Official Links'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Expanded Accordion: Step-by-Step Guide & Official Portal */}
      {expanded && (
        <div className="bg-slate-50/80 p-4 sm:p-6 border-t border-slate-200">
          <div className="mb-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              {t.howToApply}
            </h4>
            <ol className="space-y-1.5 text-xs text-slate-700 font-medium">
              {applySteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Links: Official Portal & Helpline */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 text-xs">
            {scheme.helplineNumber && (
              <a
                href={`tel:${scheme.helplineNumber}`}
                className="inline-flex items-center gap-1.5 font-bold text-slate-700 hover:text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.helpline}: {scheme.helplineNumber}</span>
              </a>
            )}

            {scheme.officialPortalUrl && (
              <a
                href={scheme.officialPortalUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-bold text-white bg-slate-900 hover:bg-slate-800 px-4 py-1.5 rounded-lg shadow-2xs transition-colors ml-auto"
              >
                <span>{t.btnOfficialPortal}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
