import React, { useState } from 'react';
import { SLIDES_KELAS6_P4, SlideData } from '../../data/kelas6Pembelajaran4Data';
import { soundFX } from '../../utils/audio';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Target, 
  Sparkles, 
  Award, 
  Home, 
  Users, 
  CheckCircle2, 
  HeartHandshake, 
  BookOpenCheck, 
  Smile, 
  Scale, 
  Printer, 
  Volume2, 
  VolumeX,
  Coins,
  Calculator,
  PieChart,
  HandHeart,
  CheckSquare
} from 'lucide-react';

interface MateriSlideView6_P4Props {
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
  HeartHandshake,
  BookOpenCheck,
  Smile,
  Scale,
  Coins,
  Calculator,
  PieChart,
  HandHeart,
  CheckSquare
};

export const MateriSlideView6_P4: React.FC<MateriSlideView6_P4Props> = ({ grade, lesson }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const currentSlide: SlideData = SLIDES_KELAS6_P4[currentSlideIndex];
  const totalSlides = SLIDES_KELAS6_P4.length;

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

  const handleJumpToSlide = (index: number) => {
    soundFX.playClick();
    setCurrentSlideIndex(index);
  };

  const toggleAudioReadout = () => {
    soundFX.playClick();
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        window.speechSynthesis.cancel();
        const textToRead = `${currentSlide.title}. ${currentSlide.content.heading || ''}. ${currentSlide.content.description || ''}. ${currentSlide.explanation || ''}`;
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'id-ID';
        utterance.rate = 0.95;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        setIsPlayingAudio(true);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  // Download PDF / Print Function
  const handlePrintPDF = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Materi PAI Kelas ${grade} Bab ${lesson} - Zakat, Infak, & Sedekah</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 40px;
              color: #0f172a;
              line-height: 1.6;
              background: #fff;
            }
            .header-banner {
              text-align: center;
              border-bottom: 3px double #0d9488;
              padding-bottom: 15px;
              margin-bottom: 25px;
            }
            .header-banner h1 {
              margin: 0;
              color: #0d9488;
              font-size: 22px;
              font-weight: 800;
            }
            .header-banner p {
              margin: 4px 0 0;
              color: #64748b;
              font-size: 13px;
            }
            .slide-card {
              page-break-inside: avoid;
              border: 1px solid #cbd5e1;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
              background-color: #f8fafc;
            }
            .slide-badge {
              display: inline-block;
              background-color: #ccfbf1;
              color: #0f766e;
              font-size: 11px;
              font-weight: 700;
              padding: 3px 10px;
              border-radius: 20px;
              margin-bottom: 8px;
            }
            .slide-title {
              font-size: 16px;
              font-weight: 800;
              color: #1e293b;
              margin: 0 0 10px 0;
            }
            .arabic-text {
              font-family: 'Amiri', 'Traditional Arabic', serif;
              font-size: 20px;
              text-align: right;
              direction: rtl;
              color: #0d9488;
              background: #f1f5f9;
              padding: 10px 15px;
              border-radius: 8px;
              margin: 10px 0;
            }
            .translation {
              font-style: italic;
              color: #334155;
              font-size: 12px;
              margin-bottom: 10px;
            }
            .points-list {
              margin: 10px 0;
              padding-left: 20px;
            }
            .points-list li {
              margin-bottom: 5px;
              font-size: 13px;
            }
            .table-custom {
              width: 100%;
              border-collapse: collapse;
              margin-top: 10px;
              font-size: 12px;
            }
            .table-custom th, .table-custom td {
              border: 1px solid #cbd5e1;
              padding: 8px 10px;
              text-align: left;
            }
            .table-custom th {
              background-color: #0d9488;
              color: white;
            }
            .formula-box {
              background-color: #ecfdf5;
              border: 1px solid #a7f3d0;
              padding: 12px;
              border-radius: 8px;
              margin: 10px 0;
              font-size: 13px;
            }
            .teacher-note {
              background-color: #fffbeb;
              border-left: 4px solid #f59e0b;
              padding: 10px;
              font-size: 12px;
              color: #92400e;
              margin-top: 10px;
              border-radius: 4px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              font-size: 11px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
            }
            @media print {
              body { padding: 0; }
              .slide-card { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header-banner">
            <h1>MODUL MATERI BANTUAN PAUD/SD PAI KELAS 6</h1>
            <p>BAB 4: Mengenal Zakat Fitrah, Zakat Mal, Infak, dan Sedekah</p>
          </div>

          ${SLIDES_KELAS6_P4.map(slide => `
            <div class="slide-card">
              <span class="slide-badge">Slide ${slide.id}: ${slide.badge}</span>
              <h2 class="slide-title">${slide.title} - ${slide.subtitle}</h2>
              ${slide.content.heading ? `<p><strong>${slide.content.heading}</strong></p>` : ''}
              ${slide.content.description ? `<p style="font-size:13px;">${slide.content.description}</p>` : ''}
              
              ${slide.content.arabicText ? `
                <div class="arabic-text">${slide.content.arabicText}</div>
                <div class="translation">${slide.content.translation}</div>
              ` : ''}

              ${slide.content.formulaBox ? `
                <div class="formula-box">
                  <strong>${slide.content.formulaBox.title}</strong><br/>
                  <em>${slide.content.formulaBox.formula}</em><br/>
                  ${slide.content.formulaBox.example}
                </div>
              ` : ''}

              ${slide.content.points ? `
                <ul class="points-list">
                  ${slide.content.points.map(pt => `<li>${pt}</li>`).join('')}
                </ul>
              ` : ''}

              ${slide.content.tableData ? `
                <table class="table-custom">
                  <thead>
                    <tr>${slide.content.tableData.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                  </thead>
                  <tbody>
                    ${slide.content.tableData.rows.map(row => `
                      <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
                    `).join('')}
                  </tbody>
                </table>
              ` : ''}

              ${slide.explanation ? `
                <div class="teacher-note">
                  <strong>Penjelasan Mendalam Guru:</strong> ${slide.explanation}
                </div>
              ` : ''}
            </div>
          `).join('')}

          <div class="footer">
            Modul PAI SD Kelas 6 - Bab 4 Zakat Fitrah, Zakat Mal, Infak, dan Sedekah • Dicetak Otomatis
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

  const HeaderIcon = ICON_MAP[currentSlide.iconName] || BookOpen;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Top Title Bar */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-teal-100 font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Materi Interactive Slide • Kelas {grade} Bab {lesson}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Zakat Fitrah, Zakat Mal, Infak, & Sedekah
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 mt-1">
              Panduan Slide Presentasi Interaktif Sesuai Kurikulum PAI Bab 4
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={toggleAudioReadout}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md ${
                isPlayingAudio
                  ? 'bg-amber-500 text-white animate-pulse'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isPlayingAudio ? 'Hentikan Suara' : 'Baca Slide'}</span>
            </button>

            <button
              onClick={handlePrintPDF}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Download PDF / Cetak</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col min-h-[550px]">
        {/* Slide Header */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md">
              <HeaderIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 font-extrabold text-[11px] uppercase">
                  {currentSlide.badge}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Slide {currentSlideIndex + 1} dari {totalSlides}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 mt-0.5">
                {currentSlide.title}
              </h2>
            </div>
          </div>

          <div className="text-xs font-bold text-teal-600 dark:text-teal-400 hidden sm:block">
            {currentSlide.subtitle}
          </div>
        </div>

        {/* Slide Content Body */}
        <div className="p-6 sm:p-8 flex-1 space-y-6">
          {currentSlide.content.heading && (
            <h3 className="text-lg sm:text-xl font-extrabold text-teal-900 dark:text-teal-300">
              {currentSlide.content.heading}
            </h3>
          )}

          {currentSlide.content.description && (
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentSlide.content.description}
            </p>
          )}

          {/* Arabic Callout */}
          {currentSlide.content.arabicText && (
            <div className="p-5 rounded-2xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/80 space-y-2">
              <p className="text-2xl sm:text-3xl font-serif text-teal-900 dark:text-teal-200 text-right leading-loose tracking-wide">
                {currentSlide.content.arabicText}
              </p>
              <p className="text-xs sm:text-sm font-medium italic text-slate-700 dark:text-slate-300">
                {currentSlide.content.translation}
              </p>
            </div>
          )}

          {/* Formula / Calculation Box */}
          {currentSlide.content.formulaBox && (
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-extrabold text-sm">
                <Calculator className="w-5 h-5 text-emerald-600" />
                <span>{currentSlide.content.formulaBox.title}</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 font-mono font-bold text-sm sm:text-base text-center shadow-xs">
                {currentSlide.content.formulaBox.formula}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {currentSlide.content.formulaBox.example}
              </p>
              {currentSlide.content.formulaBox.note && (
                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  💡 Catatan: {currentSlide.content.formulaBox.note}
                </div>
              )}
            </div>
          )}

          {/* Points List */}
          {currentSlide.content.points && (
            <div className="space-y-2.5">
              {currentSlide.content.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Interactive Cards Grid */}
          {currentSlide.content.interactiveCards && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentSlide.content.interactiveCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-md transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                      {card.title}
                    </span>
                    {card.tag && (
                      <span className="px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-extrabold text-[10px]">
                        {card.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Data Table */}
          {currentSlide.content.tableData && (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-teal-700 text-white font-bold uppercase text-[11px]">
                  <tr>
                    {currentSlide.content.tableData.headers.map((h, i) => (
                      <th key={i} className="px-4 py-3 border-r last:border-r-0 border-teal-600">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
                  {currentSlide.content.tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-teal-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200 border-r last:border-r-0 border-slate-200 dark:border-slate-800">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Teacher Explanation Box */}
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

          {/* Slide Jump Dots */}
          <div className="hidden md:flex items-center gap-1.5 max-w-xs overflow-x-auto py-1">
            {SLIDES_KELAS6_P4.map((_, idx) => (
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
