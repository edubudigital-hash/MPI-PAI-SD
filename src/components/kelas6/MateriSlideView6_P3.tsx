import React, { useState } from 'react';
import { SLIDES_KELAS6_P3, SlideData } from '../../data/kelas6Pembelajaran3Data';
import { soundFX } from '../../utils/audio';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Home, 
  Users, 
  CheckCircle2, 
  HeartHandshake, 
  AlertTriangle, 
  BookOpenCheck, 
  Smile, 
  Scale, 
  Printer, 
  Volume2, 
  VolumeX 
} from 'lucide-react';

interface MateriSlideView6_P3Props {
  grade: number;
  lesson: number;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Target,
  BookOpen,
  Sparkles,
  Home,
  Users,
  CheckCircle2,
  Award,
  ShieldCheck,
  HeartHandshake,
  AlertTriangle,
  BookOpenCheck,
  Smile,
  Scale
};

export const MateriSlideView6_P3: React.FC<MateriSlideView6_P3Props> = ({ grade, lesson }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const currentSlide: SlideData = SLIDES_KELAS6_P3[currentSlideIndex];
  const totalSlides = SLIDES_KELAS6_P3.length;

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
          <title>Materi Pembelajaran - Kelas ${grade} Bab ${lesson}: Akhlak Terpuji kepada Tetangga dan Non-Muslim</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 40px;
              color: #0f172a;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #cbd5e1;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              margin: 0;
              color: #0f766e;
              font-size: 22px;
              font-weight: 800;
            }
            .header p {
              margin: 5px 0 0;
              color: #64748b;
              font-size: 13px;
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
              font-size: 17px;
              font-weight: 800;
              color: #0f766e;
              margin-top: 0;
              border-bottom: 2px solid #99f6e4;
              padding-bottom: 8px;
            }
            .slide-subtitle {
              font-size: 12px;
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
              font-size: 13px;
            }
            .arabic-box {
              background-color: #f0fdf4;
              border: 1px solid #bbf7d0;
              border-radius: 8px;
              padding: 12px;
              text-align: center;
              font-size: 20px;
              font-weight: bold;
              margin: 12px 0;
              font-family: 'Amiri', serif;
              color: #166534;
            }
            .translation {
              font-style: italic;
              font-size: 12px;
              color: #334155;
              text-align: center;
            }
            .explanation {
              background-color: #f8fafc;
              border-left: 4px solid #0f766e;
              padding: 10px 14px;
              font-size: 12px;
              color: #334155;
              margin-top: 12px;
            }
            .footer-info {
              text-align: center;
              font-size: 11px;
              color: #94a3b8;
              margin-top: 40px;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>MODUL MATERI PEMBELAJARAN PAI-SD KELAS ${grade}</h1>
            <p>BAB ${lesson}: Akhlak Terpuji kepada Tetangga dan Non-Muslim</p>
          </div>

          ${SLIDES_KELAS6_P3.map((slide, idx) => `
            <div class="slide-card">
              <div style="float: right; font-size: 11px; font-weight: bold; color: #0f766e; background-color: #ccfbf1; padding: 2px 8px; border-radius: 4px;">
                SLIDE ${idx + 1} OF ${SLIDES_KELAS6_P3.length}
              </div>
              <h2 class="slide-title">${slide.title}</h2>
              <div class="slide-subtitle">${slide.subtitle}</div>
              
              ${slide.arabicText ? `
                <div class="arabic-box">${slide.arabicText}</div>
                ${slide.translationText ? `<div class="translation">"${slide.translationText}"</div>` : ''}
              ` : ''}

              <ul>
                ${slide.points.map(p => `<li>${p}</li>`).join('')}
              </ul>

              ${slide.explanation ? `
                <div class="explanation">
                  <strong>Penjelasan Detail Guru:</strong> ${slide.explanation}
                </div>
              ` : ''}
            </div>
          `).join('')}

          <div class="footer-info">
            Dicetak dari Aplikasi Interaktif PAI-SD Kelas 6 • Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
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

  const IconComp = ICON_MAP[currentSlide.icon] || BookOpen;

  return (
    <div className="space-y-6">
      {/* Top Bar Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-wider">
              Slide Interaktif Kelas {grade} Bab {lesson}
            </span>
            <h2 className="text-base font-black text-slate-900 dark:text-white">
              Slide {currentSlideIndex + 1} dari {totalSlides}
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Audio Toggle */}
          <button
            onClick={handleToggleAudio}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              isPlayingAudio 
                ? 'bg-amber-100 text-amber-800 border-amber-300 animate-pulse' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
            }`}
          >
            {isPlayingAudio ? <Volume2 className="w-4 h-4 text-amber-600" /> : <VolumeX className="w-4 h-4" />}
            <span>{isPlayingAudio ? 'Audio Basmalah...' : 'Audio Murattal'}</span>
          </button>

          {/* Jump Dropdown */}
          <select
            value={currentSlideIndex}
            onChange={(e) => handleJumpToSlide(Number(e.target.value))}
            className="p-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
          >
            {SLIDES_KELAS6_P3.map((s, idx) => (
              <option key={s.id} value={idx}>
                {idx + 1}. {s.title.substring(0, 32)}...
              </option>
            ))}
          </select>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Download Materi PDF</span>
          </button>
        </div>
      </div>

      {/* Main Slide Card */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-900/60 shadow-xl overflow-hidden transition-all duration-300">
        {/* Slide Header Banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-teal-700 via-emerald-700 to-indigo-800 text-white space-y-3 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
            <IconComp className="w-64 h-64 text-white" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-white/20 backdrop-blur-md border border-white/30 text-teal-100">
              {currentSlide.category}
            </span>
            <span className="text-xs font-black tracking-widest uppercase opacity-80">
              SLIDE {currentSlideIndex + 1} / {totalSlides}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-sm">
            {currentSlide.title}
          </h1>
          <p className="text-xs sm:text-sm text-teal-100 font-medium max-w-2xl">
            {currentSlide.subtitle}
          </p>
        </div>

        {/* Slide Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Arabic Box if available */}
          {currentSlide.arabicText && (
            <div className="p-6 rounded-2xl bg-teal-50/80 dark:bg-teal-950/40 border-2 border-teal-200 dark:border-teal-800/80 text-center space-y-3">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 dark:text-teal-200 font-serif leading-loose">
                {currentSlide.arabicText}
              </div>
              {currentSlide.translationText && (
                <div className="text-xs sm:text-sm italic font-medium text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                  "{currentSlide.translationText}"
                </div>
              )}
            </div>
          )}

          {/* Bullet Points */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Poin Penting Pembelajaran:
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {currentSlide.points.map((pt, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 transition hover:bg-teal-50/50 dark:hover:bg-teal-950/20"
                >
                  <div className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Explanation Box */}
          {currentSlide.explanation && (
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-extrabold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Penjelasan Mendalam Guru:</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {currentSlide.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Slide Navigation Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs ${
              currentSlideIndex === 0
                ? 'opacity-40 bg-slate-200 text-slate-500 cursor-not-allowed'
                : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Slide Sebelumnya</span>
          </button>

          {/* Dots Indicator */}
          <div className="hidden md:flex items-center gap-1.5 max-w-xs overflow-x-auto py-1">
            {SLIDES_KELAS6_P3.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleJumpToSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlideIndex 
                    ? 'w-6 bg-teal-600 dark:bg-teal-400' 
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                title={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md ${
              currentSlideIndex === totalSlides - 1
                ? 'opacity-40 bg-slate-200 text-slate-500 cursor-not-allowed'
                : 'bg-teal-600 hover:bg-teal-700 text-white active:scale-95'
            }`}
          >
            <span>Slide Berikutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
