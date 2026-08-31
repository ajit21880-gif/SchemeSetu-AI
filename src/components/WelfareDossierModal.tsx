import React from 'react';
import {
  X,
  Printer,
  Share2,
  CheckCircle2,
  ShieldCheck,
  Building2,
  IndianRupee,
  Phone,
  FileCheck,
} from 'lucide-react';
import { CitizenProfile, DocumentScanResponse, Language, SchemeMatchResult } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface WelfareDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  scanResponse: DocumentScanResponse;
  currentLanguage: Language;
}

export const WelfareDossierModal: React.FC<WelfareDossierModalProps> = ({
  isOpen,
  onClose,
  scanResponse,
  currentLanguage,
}) => {
  const t = TRANSLATIONS[currentLanguage];
  if (!isOpen) return null;

  const { citizenProfile, summary, matchedSchemes, documentType, detectedLanguage } = scanResponse;
  const eligibleList = matchedSchemes.filter((m) => m.status === 'ELIGIBLE');
  const partialList = matchedSchemes.filter((m) => m.status === 'PARTIALLY_ELIGIBLE');

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    const text = `🏛️ *SchemeSetu AI - Citizen Welfare Entitlement Summary*
Beneficiary: ${citizenProfile.name || 'Citizen'}
State: ${citizenProfile.state}
💰 Total Annual Direct Cash (DBT): ₹${summary.totalAnnualCashBenefitINR.toLocaleString('en-IN')}/year
🏥 Cashless Health Cover: ₹${(summary.totalCashlessHealthCoverINR / 100000).toFixed(0)} Lakhs
📜 Qualified Schemes (${summary.totalEligibleSchemes}):
${eligibleList.map((e, idx) => `${idx + 1}. ${e.scheme.name[currentLanguage] || e.scheme.name.en} - ₹${e.scheme.benefit.amountINR.toLocaleString('en-IN')}`).join('\n')}

Generated via SchemeSetu AI (Free Citizen Welfare Platform)`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white animate-fade-in">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden print:shadow-none print:border-none">
        {/* Top Control Bar (Hidden when printed) */}
        <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between print:hidden">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-600" />
              {t.dossierTitle}
            </h3>
            <p className="text-xs text-slate-500">{t.dossierSubtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsAppShare}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>{t.btnShareWhatsApp}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{t.btnPrint}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Sheet */}
        <div className="p-6 sm:p-8 text-slate-900 text-xs">
          {/* Official Letterhead */}
          <div className="border-b-2 border-slate-900 pb-4 mb-6 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-black text-xl tracking-tight text-slate-950">
                  SCHEMESETU AI • योजना सेतू
                </span>
                <span className="text-[10px] font-bold bg-slate-900 text-white px-2 py-0.5 rounded">
                  OFFICIAL WELFARE DOSSIER
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-medium">
                National Regional Document to Government Scheme Matching Infrastructure
              </p>
            </div>
            <div className="text-right">
              <div className="text-[11px] font-mono text-slate-500">
                Date: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                Doc Ref: SS-{Math.floor(100000 + Math.random() * 900000)}
              </div>
            </div>
          </div>

          {/* Beneficiary Profile Card */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              {t.dossierCitizenDetails}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-slate-500 text-[10px] block">Beneficiary Name</span>
                <span className="font-bold text-slate-900">{citizenProfile.name || 'Citizen'}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">State / District</span>
                <span className="font-semibold text-slate-900">
                  {citizenProfile.district ? `${citizenProfile.district}, ` : ''}
                  {citizenProfile.state}
                </span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">Annual Income (₹)</span>
                <span className="font-bold text-emerald-700">
                  ₹{citizenProfile.annualIncomeINR?.toLocaleString('en-IN') || 'N/A'}
                </span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">Caste / Category</span>
                <span className="font-semibold text-slate-900">{citizenProfile.socialCategory}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">Ration Card Type</span>
                <span className="font-semibold text-slate-900">{citizenProfile.rationCardType}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">Landholding</span>
                <span className="font-semibold text-slate-900">
                  {citizenProfile.landOwnershipAcres ? `${citizenProfile.landOwnershipAcres} Acres` : 'Landless / Non-Agri'}
                </span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">Family Size</span>
                <span className="font-semibold text-slate-900">{citizenProfile.familyMembersCount} Members</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">Scanned Document</span>
                <span className="font-semibold text-slate-900">{documentType}</span>
              </div>
            </div>
          </div>

          {/* Entitlements Financial Matrix */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
              <span className="text-[10px] font-bold text-emerald-800 uppercase block mb-1">
                Direct Annual Cash Aid (DBT)
              </span>
              <span className="text-lg font-black text-emerald-950">
                ₹{summary.totalAnnualCashBenefitINR.toLocaleString('en-IN')}
                <span className="text-[10px] font-normal text-emerald-700 ml-1">/ year</span>
              </span>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
              <span className="text-[10px] font-bold text-blue-800 uppercase block mb-1">
                Cashless Health Cover
              </span>
              <span className="text-lg font-black text-blue-950">
                ₹{(summary.totalCashlessHealthCoverINR / 100000).toFixed(0)} Lakhs
              </span>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
              <span className="text-[10px] font-bold text-amber-800 uppercase block mb-1">
                Grants & Loan Subsidies
              </span>
              <span className="text-lg font-black text-amber-950">
                ₹{summary.totalOneTimeGrantsINR.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Fully Eligible Schemes Table */}
          <div className="mb-6">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
              1. Fully Eligible Schemes ({eligibleList.length} Approved)
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 text-[11px]">
                  <tr>
                    <th className="p-2.5">Scheme Name & Ministry</th>
                    <th className="p-2.5">Level</th>
                    <th className="p-2.5">Financial Benefit (₹)</th>
                    <th className="p-2.5">Action & Portal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {eligibleList.map((item) => (
                    <tr key={item.scheme.id} className="hover:bg-slate-50/50">
                      <td className="p-2.5">
                        <div className="font-bold text-slate-900">
                          {item.scheme.name[currentLanguage] || item.scheme.name.en}
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {item.scheme.department[currentLanguage] || item.scheme.department.en}
                        </div>
                      </td>
                      <td className="p-2.5">
                        <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-800">
                          {item.scheme.level === 'Central' ? 'Central' : item.scheme.applicableState}
                        </span>
                      </td>
                      <td className="p-2.5 font-bold text-emerald-800">
                        ₹{item.scheme.benefit.amountINR.toLocaleString('en-IN')}
                        <span className="text-[10px] font-normal text-slate-500 block">
                          {item.scheme.benefit.period}
                        </span>
                      </td>
                      <td className="p-2.5 text-[11px] text-slate-700">
                        {item.scheme.helplineNumber && (
                          <div className="font-semibold text-slate-900">
                            Helpline: {item.scheme.helplineNumber}
                          </div>
                        )}
                        <div className="text-[10px] text-blue-700 truncate max-w-xs">
                          {item.scheme.officialPortalUrl}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Checklist for Citizen */}
          <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-200 mb-6">
            <h4 className="font-bold text-orange-950 text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-orange-600" />
              {t.dossierActionChecklist}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="w-3.5 h-3.5 text-orange-600 rounded" />
                <span>Original Aadhaar Card (Linked to Mobile Number)</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="w-3.5 h-3.5 text-orange-600 rounded" />
                <span>Bank Passbook / Cancelled Cheque (DBT / NPCI Enabled)</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="w-3.5 h-3.5 text-orange-600 rounded" />
                <span>Ration Card (NFSA / BPL / AAY)</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="w-3.5 h-3.5 text-orange-600 rounded" />
                <span>Tahsildar Income / Caste / Land RoR Certificate</span>
              </div>
            </div>
          </div>

          {/* Footer Official Stamp & Disclaimer */}
          <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 gap-2">
            <p>{t.disclaimer}</p>
            <div className="font-bold text-slate-800 shrink-0">
              VERIFIED BY SCHEMESETU AI BHARAT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
