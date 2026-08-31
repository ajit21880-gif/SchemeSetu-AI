import React from 'react';
import {
  Wallet,
  HeartPulse,
  Award,
  CheckCircle,
  FileText,
  Volume2,
  VolumeX,
  Edit3,
  RefreshCw,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  UserCheck,
  MapPin,
  IndianRupee,
} from 'lucide-react';
import { CitizenProfile, DocumentScanResponse, Language, SchemeMatchResult } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface EligibilityDashboardProps {
  currentLanguage: Language;
  scanResponse: DocumentScanResponse;
  onOpenDossier: () => void;
  onOpenEntityDrawer: () => void;
  onResetScan: () => void;
  isSpeaking: boolean;
  onToggleVoice: () => void;
}

export const EligibilityDashboard: React.FC<EligibilityDashboardProps> = ({
  currentLanguage,
  scanResponse,
  onOpenDossier,
  onOpenEntityDrawer,
  onResetScan,
  isSpeaking,
  onToggleVoice,
}) => {
  const t = TRANSLATIONS[currentLanguage];
  const { summary, citizenProfile, documentType, detectedLanguage, ocrConfidence } = scanResponse;

  return (
    <section className="py-6 sm:py-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Verified Document & Citizen Header */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xs mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <CheckCircle className="w-3 h-3" />
                  OCR Verified ({ocrConfidence.toFixed(0)}%)
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {documentType} • {detectedLanguage}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>{citizenProfile.name || 'Citizen Beneficiary'}</span>
                <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {citizenProfile.district ? `${citizenProfile.district}, ` : ''}
                  {citizenProfile.state}
                </span>
              </h2>
            </div>
          </div>

          {/* Quick Actions for Citizen */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={onOpenEntityDrawer}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-slate-600" />
              <span>{t.btnVerifyProfile}</span>
            </button>

            <button
              onClick={onToggleVoice}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                isSpeaking
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-2xs'
              }`}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>{t.btnStopVoice}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-orange-600" />
                  <span>{t.btnListenVoice}</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenDossier}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.btnDownloadReport}</span>
            </button>

            <button
              onClick={onResetScan}
              title="Scan another document"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Core Financial Entitlement Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Direct Annual Cash Aid */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-2xl p-4 sm:p-5 text-white shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-3 opacity-15">
              <Wallet className="w-20 h-20" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                  Direct Bank Transfer (DBT)
                </span>
                <span className="p-1 rounded-md bg-white/20 text-white">
                  <IndianRupee className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-1">
                ₹{summary.totalAnnualCashBenefitINR.toLocaleString('en-IN')}
                <span className="text-xs font-medium text-emerald-100 ml-1">/ year</span>
              </h3>
            </div>
            <p className="text-xs text-emerald-100 mt-2 font-medium">
              {t.totalAnnualCashBenefit} deposited straight into bank account
            </p>
          </div>

          {/* Card 2: Cashless Health Cover */}
          <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-2xl p-4 sm:p-5 text-white shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-3 opacity-15">
              <HeartPulse className="w-20 h-20" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">
                  Health Coverage
                </span>
                <span className="p-1 rounded-md bg-white/20 text-white">
                  <HeartPulse className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-1">
                {summary.totalCashlessHealthCoverINR >= 100000
                  ? `₹${(summary.totalCashlessHealthCoverINR / 100000).toFixed(0)} Lakhs`
                  : `₹${summary.totalCashlessHealthCoverINR.toLocaleString('en-IN')}`}
              </h3>
            </div>
            <p className="text-xs text-blue-100 mt-2 font-medium">
              {t.totalCashlessHealthCover} at empaneled hospitals across India
            </p>
          </div>

          {/* Card 3: Lump Sum Grants / Subsidies */}
          <div className="bg-gradient-to-br from-amber-600 to-orange-800 rounded-2xl p-4 sm:p-5 text-white shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-3 opacity-15">
              <Award className="w-20 h-20" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                  Grants & Subsidies
                </span>
                <span className="p-1 rounded-md bg-white/20 text-white">
                  <Award className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-1">
                ₹{summary.totalOneTimeGrantsINR.toLocaleString('en-IN')}
              </h3>
            </div>
            <p className="text-xs text-amber-100 mt-2 font-medium">
              {t.totalOneTimeGrants} (PMAY Housing, PM Vishwakarma, etc.)
            </p>
          </div>

          {/* Card 4: Schemes Count Breakdown */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Qualified Schemes
              </span>
              <div className="flex items-baseline gap-2 mt-1 mb-2">
                <span className="text-3xl font-black text-slate-900">
                  {summary.totalEligibleSchemes}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  {t.badgeEligible}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span>{t.partiallyEligibleCount}:</span>
              <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                {summary.totalPartialSchemes} Schemes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
