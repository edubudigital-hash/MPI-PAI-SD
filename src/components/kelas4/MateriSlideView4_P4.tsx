import React, { useState } from 'react';
import { KELAS4_P4_SLIDES } from '../../data/kelas4Pembelajaran4Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Sparkles, 
  Sun, 
  Heart, 
  Clock, 
  Award, 
  SunMedium, 
  Moon, 
  Table, 
  CheckSquare, 
  Volume2, 
  VolumeX,
  FileText
} from 'lucide-react';

interface MateriSlideView4P4Props {
  grade: number;
  lesson: number;
}

export const MateriSlideView4_P4: React.FC<MateriSlideView4P4Props> = ({ grade, lesson }) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const slides = KELAS4_P4_SLIDES;
  const currentSlide = slides[currentSlideIdx];

  const handleNext = () => {
    soundFX.playClick();
    if (currentSlideIdx < slides.length - 1) {
      setCurrentSlideIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    soundFX.playClick();
    if (currentSlideIdx > 0) {
      setCurrentSlideIdx((prev) => prev - 1);
    }
  };

  const handleDownloadMateri = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>RANGKUMAN MATERI PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Memahami dan Menerapkan Ketentuan Shalat Sunah Rawatib, Shalat Dhuha, dan Shalat Tahajud</h2>
        <p>Berdasarkan Panduan Kurikulum Merdeka BAB 4 • SD Kelas IV</p>
      </div>
    `;

    slides.forEach((slide) => {
      bodyHtml += `
        <div class="card">
          <h3 style="color: #0d9488; margin-top: 0; font-size: 12pt;">${slide.title}</h3>
          <p style="color: #64748b; font-size: 9pt; margin-bottom: 8px;"><em>${slide.subtitle}</em></p>
          <ul style="margin: 0; padding-left: 18px; font-size: 9.5pt; line-height: 1.5;">
            ${slide.points.map((pt) => `<li style="margin-bottom: 4px;">${pt}</li>`).join('')}
          </ul>
      `;

      if (slide.arabicExamples && slide.arabicExamples.length > 0) {
        slide.arabicExamples.forEach((ex) => {
          bodyHtml += `
            <div style="background-color: #f0fdf4; border-left: 3px solid #10b981; padding: 8px; margin-top: 8px; border-radius: 4px;">
              <div class="arabic" style="font-size: 16pt; margin-bottom: 4px;">${ex.arabic}</div>
              <div style="font-size: 9pt; font-style: italic; color: #047857;">${ex.latin}</div>
              <div style="font-size: 9pt; color: #1e293b; margin-top: 2px;"><strong>Artinya:</strong> "${ex.meaning}" (${ex.note})</div>
            </div>
          `;
        });
      }

      if (slide.highlightBox) {
        bodyHtml += `
          <div style="background-color: #fffbeb; border: 1px solid #f59e0b; padding: 8px; margin-top: 8px; border-radius: 4px; font-size: 9pt;">
            <strong style="color: #b45309;">${slide.highlightBox.title}:</strong> ${slide.highlightBox.content}
          </div>
        `;
      }

      if (slide.tableData) {
        bodyHtml += `
          <table style="width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 8.5pt;">
            <thead>
              <tr style="background-color: #0d9488; color: white;">
                ${slide.tableData.headers.map((h) => `<th style="padding: 6px; border: 1px solid #cbd5e1;">${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${slide.tableData.rows.map((row) => `
                <tr>
                  ${row.map((c) => `<td style="padding: 6px; border: 1px solid #cbd5e1;">${c}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }

      bodyHtml += `</div>`;
    });

    printOrDownloadDocument(
      `Materi_PAI_Kelas_${grade}_P${lesson}_Shalat_Sunah`,
      `Materi PAI Kelas ${grade} Bab ${lesson} Shalat Sunah`,
      bodyHtml
    );
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-6 h-6 text-amber-500" />;
      case 'Heart': return <Heart className="w-6 h-6 text-rose-500" />;
      case 'Clock': return <Clock className="w-6 h-6 text-teal-500" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-600" />;
      case 'SunMedium': return <SunMedium className="w-6 h-6 text-orange-500" />;
      case 'Moon': return <Moon className="w-6 h-6 text-indigo-500" />;
      case 'Table': return <Table className="w-6 h-6 text-emerald-600" />;
      case 'CheckSquare': return <CheckSquare className="w-6 h-6 text-blue-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-500" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-teal-600" />;
      default: return <BookOpen className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 text-white rounded-3xl p-6 shadow-xl border-2 border-emerald-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <BookOpen className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-200 uppercase tracking-wider block">
              Materi Slide Interaktif & Visual
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Kelas {grade} • Pembelajaran {lesson} (BAB 4)
            </h3>
            <p className="text-xs text-teal-100 font-medium">
              Ketentuan Shalat Sunah Rawatib, Shalat Dhuha, dan Shalat Tahajud
            </p>
          </div>
        </div>

        <button
          onClick={handleDownloadMateri}
          className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center space-x-2 border border-amber-200 shadow-md transition active:scale-95 cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download Materi PDF</span>
        </button>
      </div>

      {/* SLIDE CONTAINER */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-teal-200 dark:border-teal-800 shadow-xl space-y-6 min-h-[460px] flex flex-col justify-between relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div>
          {/* SLIDE TOP HEADER */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800">
                {renderIcon(currentSlide.iconName)}
              </div>
              <div>
                <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 block uppercase tracking-wider">
                  Slide {currentSlide.id} dari {slides.length}
                </span>
                <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  {currentSlide.title}
                </h4>
              </div>
            </div>

            <span className="hidden sm:inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {currentSlide.subtitle}
            </span>
          </div>

          {/* SLIDE MAIN CONTENT */}
          <div className="space-y-4">
            <div className="space-y-2">
              {currentSlide.points.map((pt, idx) => (
                <div 
                  key={idx}
                  className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed"
                >
                  {pt}
                </div>
              ))}
            </div>

            {/* Arabic Examples if present */}
            {currentSlide.arabicExamples && currentSlide.arabicExamples.length > 0 && (
              <div className="space-y-3 pt-2">
                {currentSlide.arabicExamples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2"
                  >
                    <div className="font-arabic text-2xl sm:text-3xl font-bold text-emerald-900 dark:text-emerald-200 text-right leading-loose">
                      {ex.arabic}
                    </div>
                    <div className="text-xs italic text-emerald-700 dark:text-emerald-400 font-semibold">
                      {ex.latin}
                    </div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <strong>Artinya:</strong> "{ex.meaning}" <span className="text-emerald-800 dark:text-emerald-300 font-bold">({ex.note})</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Highlight Box if present */}
            {currentSlide.highlightBox && (
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border-2 border-amber-300 dark:border-amber-700 space-y-1">
                <span className="text-xs font-black text-amber-800 dark:text-amber-300 block">
                  {currentSlide.highlightBox.title}
                </span>
                <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 font-medium">
                  {currentSlide.highlightBox.content}
                </p>
              </div>
            )}

            {/* Table Data if present */}
            {currentSlide.tableData && (
              <div className="overflow-x-auto pt-2">
                <table className="w-full text-xs text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-teal-700 text-white font-extrabold">
                      {currentSlide.tableData.headers.map((h, idx) => (
                        <th key={idx} className="p-3 border border-teal-600">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentSlide.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 hover:bg-teal-50/50">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* SLIDE FOOTER NAVIGATION */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Slide Indicator Dots */}
          <div className="flex items-center space-x-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  soundFX.playClick();
                  setCurrentSlideIdx(idx);
                }}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentSlideIdx === idx
                    ? 'w-8 bg-teal-600'
                    : 'w-2.5 bg-slate-200 dark:bg-slate-700 hover:bg-teal-300'
                }`}
                title={`Ke slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Nav Controls */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrev}
              disabled={currentSlideIdx === 0}
              className={`px-4 py-2.5 rounded-2xl font-black text-xs flex items-center space-x-1.5 transition cursor-pointer ${
                currentSlideIdx === 0
                  ? 'bg-slate-100 text-slate-300 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed'
                  : 'bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200 hover:bg-teal-200'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentSlideIdx === slides.length - 1}
              className={`px-5 py-2.5 rounded-2xl font-black text-xs flex items-center space-x-1.5 transition cursor-pointer shadow-md ${
                currentSlideIdx === slides.length - 1
                  ? 'bg-slate-100 text-slate-300 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed'
                  : 'bg-teal-600 text-white hover:bg-teal-700 active:scale-95'
              }`}
            >
              <span>Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
