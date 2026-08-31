import React, { useEffect, useState } from 'react';
import { Scan, CheckCircle, Loader2, Sparkles, Database, FileSearch, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface ScanProgressModalProps {
  currentLanguage: Language;
  isOpen: boolean;
}

export const ScanProgressModal: React.FC<ScanProgressModalProps> = ({
  currentLanguage,
  isOpen,
}) => {
  const t = TRANSLATIONS[currentLanguage];
  const [currentStep, setCurrentStep] = useState(1);
  const [progressPercent, setProgressPercent] = useState(15);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
      setProgressPercent(15);
      return;
    }

    // Fast progress animation over 1.5-2.0 seconds
    const interval = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev < 35) {
          setCurrentStep(1);
          return prev + 12;
        } else if (prev < 65) {
          setCurrentStep(2);
          return prev + 10;
        } else if (prev < 90) {
          setCurrentStep(3);
          return prev + 8;
        } else if (prev < 98) {
          setCurrentStep(4);
          return prev + 4;
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const steps = [
    { num: 1, text: t.stepOcr, icon: FileSearch },
    { num: 2, text: t.stepEntity, icon: Sparkles },
    { num: 3, text: t.stepRuleMatch, icon: Database },
    { num: 4, text: t.stepBenefit, icon: ShieldCheck },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden relative">
        {/* Animated Scanner Laser Effect on top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex flex-col items-center text-center mt-2 mb-6">
          <div className="relative w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 mb-3 shadow-inner">
            <Scan className="w-8 h-8 animate-spin" />
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
              AI
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
            {t.progressScanningTitle}
          </h3>
          <p className="text-xs text-slate-500">
            Parsing regional language script & matching across 40+ Central and State welfare schemes
          </p>
        </div>

        {/* Dynamic Progress Steps */}
        <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          {steps.map((s) => {
            const Icon = s.icon;
            const isCompleted = currentStep > s.num;
            const isActive = currentStep === s.num;

            return (
              <div
                key={s.num}
                className={`flex items-start gap-3 text-left transition-opacity ${
                  isActive
                    ? 'opacity-100 text-slate-900 font-semibold'
                    : isCompleted
                    ? 'opacity-80 text-emerald-800'
                    : 'opacity-40 text-slate-500'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ) : isActive ? (
                    <Loader2 className="w-4 h-4 text-orange-600 animate-spin" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[9px] font-bold text-slate-400">
                      {s.num}
                    </div>
                  )}
                </div>

                <div className="text-xs leading-tight">
                  <span>{s.text}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Status Ticker */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Hours-to-Seconds Engine Active
          </span>
          <span className="font-mono font-bold text-orange-600">
            {Math.min(99, progressPercent)}%
          </span>
        </div>
      </div>
    </div>
  );
};
