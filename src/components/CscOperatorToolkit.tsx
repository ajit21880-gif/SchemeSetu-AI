import React, { useState } from 'react';
import {
  Building2,
  Phone,
  FileText,
  CheckCircle2,
  Users,
  Printer,
  ShieldCheck,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface CscOperatorToolkitProps {
  currentLanguage: Language;
  onOpenScanner: () => void;
}

export const CscOperatorToolkit: React.FC<CscOperatorToolkitProps> = ({
  currentLanguage,
  onOpenScanner,
}) => {
  const t = TRANSLATIONS[currentLanguage];

  const HELPLINES = [
    { name: 'PM-Kisan Samman Nidhi Helpline', number: '155261 / 011-24300606', dept: 'Ministry of Agriculture' },
    { name: 'Ayushman Bharat (PM-JAY) National Call Center', number: '14555 / 1800-111-565', dept: 'National Health Authority' },
    { name: 'National Food Security (NFSA / Ration PDS)', number: '1967 / 1800-180-2087', dept: 'Food & Civil Supplies Dept' },
    { name: 'PMAY-G Rural Housing Helpline', number: '1800-11-6446', dept: 'Ministry of Rural Development' },
    { name: 'PM SVANidhi Street Vendor Support', number: '1800-11-1979', dept: 'Ministry of Housing & Urban Affairs' },
    { name: 'PM Vishwakarma Artisan Helpline', number: '1800-267-7777', dept: 'Ministry of MSME' },
    { name: 'National Social Assistance (Pensions / Disability)', number: '1800-11-0001', dept: 'Ministry of Social Justice' },
  ];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>CSC / Gram Panchayat / VLE Portal Mode</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              Village Level Entrepreneur & Citizen Facilitator Desk
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Empowering CSC Seva Kendras, Aaple Sarkar centers, and Gram Sevaks to eliminate corrupt middlemen and match rural families to welfare entitlements in 10 seconds.
            </p>

            <button
              onClick={onOpenScanner}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Scan Villager / Citizen Document Now</span>
            </button>
          </div>
        </div>

        {/* 3 Core VLE Operational Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: 5-Step Middleman-Free Process */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Middleman-Free Citizen Protocol
            </h3>
            <ol className="space-y-2 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900">1.</span>
                <span>Ask citizen for their Ration Card, Income Cert, or 7/12 Land Record.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900">2.</span>
                <span>Take a quick photo using SchemeSetu Scanner (10 seconds).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900">3.</span>
                <span>Review extracted details with citizen in Hindi or Marathi.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-slate-900">4.</span>
                <span>Click "Download / Print Dossier Slip" and hand it to the citizen.</span>
              </li>
            </ol>
          </div>

          {/* Card 2: Essential Documents Checklist */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Mandatory DBT Bank Seeding
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              90% of welfare grant delays happen due to unseeded bank accounts. Advise citizens on:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>NPCI Aadhaar-Bank Mapping at post office or bank branch.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Active mobile number linked to Aadhaar OTP.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>e-KYC verification on PM-Kisan and Ration portals.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Non-Literate Support & Audio */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Regional Audio Read-Out
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              For low-literacy beneficiaries, toggle the <strong>Listen in Regional Voice</strong> button to explain entitlements aloud in Hindi or Marathi.
            </p>
            <div className="p-3 bg-amber-50 rounded-xl text-[11px] text-amber-900 border border-amber-200 font-medium">
              Citizens can hear their exact eligibility reasons and required papers directly through the speakers.
            </div>
          </div>
        </div>

        {/* National Welfare Escalation Directory */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>National Government Welfare Toll-Free Escalation Directory</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {HELPLINES.map((h, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-slate-900">{h.name}</div>
                  <div className="text-[10px] text-slate-500">{h.dept}</div>
                </div>
                <a
                  href={`tel:${h.number.split('/')[0].trim()}`}
                  className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-900 font-bold text-xs hover:bg-emerald-200 transition-colors flex items-center gap-1 shrink-0"
                >
                  <Phone className="w-3 h-3" />
                  <span>{h.number}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
