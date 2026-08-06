import React, { useState } from 'react';
import { SLIDES_KELAS6_P1, SlideData } from '../../data/kelas6Pembelajaran1Data';
import { soundFX } from '../../utils/audio';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Target, 
  PenTool, 
  Layers, 
  CheckSquare, 
  Volume2, 
  Sparkles, 
  FileText, 
  AlertTriangle, 
  Book, 
  Bookmark, 
  Sun, 
  Globe, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2,
  Printer,
  VolumeX,
  Volume1
} from 'lucide-react';

interface MateriSlideView6_P1Props {
  grade: number;
  lesson: number;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Target,
  BookOpen,
  PenTool,
  Layers,
  CheckSquare,
  Volume2,
  Sparkles,
  FileText,
  AlertTriangle,
  Book,
  Bookmark,
  Sun,
  Globe,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2
};

export const MateriSlideView6_P1: React.FC<MateriSlideView6_P1Props> = ({ grade, lesson }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const currentSlide: SlideData = SLIDES_KELAS6_P1[currentSlideIndex];
  const totalSlides = SLIDES_KELAS6_P1.length;

  const handleNext = () => {
    if (currentSlideIndex < totalSlides - 1) {
      soundFX.playClick();
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      soundFX.playClick();
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const handleJumpToSlide = (idx: number) => {
    soundFX.playClick();
    setCurrentSlideIndex(idx);
  };

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
    } else {
      soundFX.playBasmalah();
      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 3000);
    }
  };

  const handlePrint = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Materi Pembelajaran - Kelas ${grade} Bab ${lesson}: Membaca, Menulis, & Membedakan Huruf Hijaiyah Bersambung serta Surat Al-Insyirah</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 40px;
              color: #1e293b;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #e2e8f0;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              margin: 0;
              color: #0f766e;
              font-size: 24px;
              font-weight: 800;
            }
            .header p {
              margin: 5px 0 0;
              color: #64748b;
              font-size: 14px;
            }
            .slide-card {
              page-break-inside: avoid;
              border: 1px solid #cbd5e1;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 24px;
              background-color: #ffffff;
            }
            .slide-title {
              font-size: 18px;
              font-weight: 700;
              color: #0f766e;
              margin-top: 0;
              border-bottom: 2px solid #99f6e4;
              padding-bottom: 8px;
            }
            .slide-subtitle {
              font-size: 13px;
              color: #64748b;
              margin-bottom: 12px;
              font-style: italic;
            }
            ul {
              margin: 0;
              padding-left: 20px;
            }
            li {
              margin-bottom: 8px;
              font-size: 14px;
            }
            .explanation {
              margin-top: 12px;
              padding: 10px 14px;
              background-color: #f0fdfa;
              border-left: 4px solid #0d9488;
              border-radius: 4px;
              font-size: 13px;
              color: #115e59;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              font-size: 12px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 16px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>SIMPAD PAI-SD KELAS ${grade}</h1>
            <p><strong>Rangkuman Slide Materi Bab ${lesson}:</strong> Membaca, Menulis, & Membedakan Huruf Hijaiyah Bersambung serta Surat Al-Insyirah</p>
          </div>

          ${SLIDES_KELAS6_P1.map((s, i) => `
            <div class="slide-card">
              <div class="slide-title">Slide ${i + 1}: ${s.title}</div>
              <div class="slide-subtitle">${s.subtitle} • Category: ${s.category}</div>
              <ul>
                ${s.points.map(pt => `<li>${pt}</li>`).join('')}
              </ul>
              ${s.explanation ? `<div class="explanation"><strong>Penjelasan:</strong> ${s.explanation}</div>` : ''}
            </div>
          `).join('')}

          <div class="footer">
            Dokumen ini dicetak otomatis dari SIMPAD (Sistem Media Pembelajaran Digital PAI-SD) • Boleh Digunakan oleh Semua Guru
          </div>

          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const CurrentIcon = ICON_MAP[currentSlide.icon] || BookOpen;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-wider text-teal-600 uppercase">
              Materi Slide • Kelas {grade} Pembelajaran {lesson}
            </span>
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Huruf Hijaiyah Bersambung, Ghunnah & Surat Al-Insyirah
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleAudio}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
              isPlayingAudio 
                ? 'bg-teal-600 text-white border-teal-600 animate-pulse' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
            }`}
          >
            {isPlayingAudio ? <Volume1 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span>{isPlayingAudio ? 'Memutar Audio...' : 'Audio Basmalah'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Download Materi PDF</span>
          </button>
        </div>
      </div>

      {/* Main Slide Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300">
        {/* Top Banner Gradient */}
        <div className={`h-3 bg-gradient-to-r ${currentSlide.color}`} />

        <div className="p-6 sm:p-10 space-y-8">
          {/* Top Info Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${currentSlide.color} text-white shadow-md`}>
                <CurrentIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border border-teal-200 dark:border-teal-800 uppercase">
                  {currentSlide.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {currentSlide.title}
                </h3>
              </div>
            </div>

            <div className="text-xs font-extrabold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
              Slide {currentSlideIndex + 1} / {totalSlides}
            </div>
          </div>

          <p className="text-sm sm:text-base font-semibold text-teal-900 dark:text-teal-300 italic bg-teal-50/60 dark:bg-teal-950/30 p-3.5 rounded-xl border-l-4 border-teal-500">
            {currentSlide.subtitle}
          </p>

          {/* Bullet List Points - Strictly using bullet symbols (NO numbers!) */}
          <div className="space-y-3.5">
            {currentSlide.points.map((pt, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 hover:border-teal-300 transition-all shadow-2xs"
              >
                {/* Black Circle Bullet Symbol */}
                <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  {pt}
                </p>
              </div>
            ))}
          </div>

          {/* Explanation Box if Available */}
          {currentSlide.explanation && (
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-1">
              <div className="font-extrabold flex items-center gap-2 text-amber-800 dark:text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Penjelasan Tambahan:</span>
              </div>
              <p className="leading-relaxed font-medium">
                {currentSlide.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Bottom Navigation Control Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all disabled:opacity-30 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>

          {/* Progress Indicator */}
          <div className="text-xs font-extrabold text-slate-600 dark:text-slate-400">
            {currentSlideIndex + 1} dari {totalSlides} Slide
          </div>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all disabled:opacity-30 bg-teal-600 hover:bg-teal-700 text-white shadow-md"
          >
            <span className="hidden sm:inline">Selanjutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Number-Only Quick Navigation Buttons (NO TEXT LABELS) */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
          Pilih Nomor Slide untuk Melompat Langsung:
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SLIDES_KELAS6_P1.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleJumpToSlide(idx)}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-black text-xs sm:text-sm transition-all duration-200 flex items-center justify-center border ${
                currentSlideIndex === idx
                  ? 'bg-teal-600 text-white border-teal-600 shadow-md scale-105 ring-2 ring-teal-300 dark:ring-teal-900'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200'
              }`}
              title={`Slide ${idx + 1}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
