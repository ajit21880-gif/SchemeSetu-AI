import React, { useState, useRef, useCallback } from 'react';
import {
  Camera,
  Upload,
  FileText,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertCircle,
  Clock,
  Scan,
  RefreshCw,
  X,
  HelpCircle,
} from 'lucide-react';
import { Language, SampleDocumentItem } from '../types';
import { SAMPLE_DOCUMENTS } from '../data/sampleDocuments';
import { TRANSLATIONS } from '../utils/translations';

interface HeroDocumentScannerProps {
  currentLanguage: Language;
  onScanFile: (file: File) => void;
  onSelectSample: (sample: SampleDocumentItem) => void;
  isScanning: boolean;
}

export const HeroDocumentScanner: React.FC<HeroDocumentScannerProps> = ({
  currentLanguage,
  onScanFile,
  onSelectSample,
  isScanning,
}) => {
  const t = TRANSLATIONS[currentLanguage];
  const [isDragOver, setIsDragOver] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Handle Drag and Drop
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onScanFile(e.dataTransfer.files[0]);
      }
    },
    [onScanFile]
  );

  // Handle file input change
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onScanFile(e.target.files[0]);
    }
  };

  // Start live camera
  const startCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setCameraActive(true);
    } catch (err: any) {
      console.error('Camera access error:', err);
      setCameraError('Unable to open camera. Please ensure camera permissions are granted or upload a file.');
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  // Capture frame from camera
  const capturePhoto = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const capturedFile = new File([blob], 'captured_document.jpg', { type: 'image/jpeg' });
            stopCamera();
            onScanFile(capturedFile);
          }
        },
        'image/jpeg',
        0.95
      );
    }
  };

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 bg-linear-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Proposition Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold mb-4 shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-orange-600 fill-orange-500" />
            <span>{t.tagHoursToSeconds}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight sm:leading-tight mb-3">
            {t.appTitle}: <span className="bg-gradient-to-r from-orange-600 to-emerald-700 bg-clip-text text-transparent">{t.appSubtitle}</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {t.appTagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.tagCentralAndState}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.tagNoAgentBribe}</span>
            </div>
          </div>
        </div>

        {/* Primary Interactive Scan Area */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl border-2 border-dashed border-slate-300 shadow-xl overflow-hidden">
          {!cameraActive ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`p-6 sm:p-10 transition-colors ${
                isDragOver ? 'bg-orange-50/80 border-orange-500' : 'hover:bg-slate-50/50'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-orange-100/80 border border-orange-200 flex items-center justify-center text-orange-600 mb-4 shadow-sm">
                  <Scan className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {t.scanZoneTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-lg mb-6 leading-relaxed">
                  {t.scanZoneDesc}
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isScanning}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Upload className="w-4 h-4" />
                    <span>{t.btnUploadFile}</span>
                  </button>

                  <button
                    onClick={startCamera}
                    disabled={isScanning}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Camera className="w-4 h-4 text-emerald-400" />
                    <span>{t.btnTakePhoto}</span>
                  </button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleFileInputChange}
                  className="hidden"
                />

                <p className="text-[11px] text-slate-400">
                  {t.fileSupportText}
                </p>

                {cameraError && (
                  <div className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{cameraError}</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Live Camera Viewfinder Overlay */
            <div className="relative bg-black p-4 flex flex-col items-center">
              <div className="relative w-full max-w-lg aspect-4/3 rounded-xl overflow-hidden bg-slate-950 border-2 border-orange-500 shadow-2xl">
                <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />

                {/* Document Alignment Frame Guides */}
                <div className="absolute inset-4 border-2 border-white/70 rounded-lg pointer-events-none flex flex-col justify-between p-2">
                  <div className="flex justify-between">
                    <div className="w-5 h-5 border-t-4 border-l-4 border-orange-400" />
                    <div className="w-5 h-5 border-t-4 border-r-4 border-orange-400" />
                  </div>
                  <div className="text-center text-white/90 text-xs font-semibold drop-shadow-md bg-black/40 py-1 rounded-sm">
                    Align document inside this rectangle (Ration Card, Income Certificate)
                  </div>
                  <div className="flex justify-between">
                    <div className="w-5 h-5 border-b-4 border-l-4 border-orange-400" />
                    <div className="w-5 h-5 border-b-4 border-r-4 border-orange-400" />
                  </div>
                </div>
              </div>

              {/* Camera Action Bar */}
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={stopCamera}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>

                <button
                  onClick={capturePhoto}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-sm shadow-xl hover:scale-105 transition-transform cursor-pointer"
                >
                  <Camera className="w-5 h-5" />
                  <span>Capture & Scan Document</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 1-Click Realistic Sample Document Presets */}
        <div className="max-w-6xl mx-auto mt-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                {t.instantSampleNotice}
              </h4>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              6 Real Indian Document Presets
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {SAMPLE_DOCUMENTS.map((sample) => (
              <button
                key={sample.id}
                onClick={() => onSelectSample(sample)}
                disabled={isScanning}
                className="group relative text-left p-4 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between disabled:opacity-50"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
                      {sample.state}
                    </span>
                    <span className="text-[10px] font-medium text-slate-500">
                      {sample.language}
                    </span>
                  </div>

                  <h5 className="font-bold text-sm text-slate-900 group-hover:text-orange-700 transition-colors mb-1 line-clamp-1">
                    {sample.title[currentLanguage] || sample.title.en}
                  </h5>

                  <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                    {sample.subtitle[currentLanguage] || sample.subtitle.en}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-orange-600 group-hover:translate-x-0.5 transition-transform">
                  <span>Test This Document &rarr;</span>
                  <span className="text-slate-400 font-normal">Instant 10s Test</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
