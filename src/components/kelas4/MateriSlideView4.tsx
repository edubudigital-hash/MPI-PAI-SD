import React, { useState } from 'react';
import { KELAS4_P1_SLIDES } from '../../data/kelas4Pembelajaran1Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  BookOpen, 
  Sparkles, 
  Target, 
  UserCheck, 
  Heart, 
  AlertCircle, 
  Award, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  HelpCircle,
  Edit3,
  Layers,
  Volume2,
  VolumeX,
  CheckSquare,
  FileText
} from 'lucide-react';

interface MateriSlideView4Props {
  grade: number;
  lesson: number;
}

export const MateriSlideView4: React.FC<MateriSlideView4Props> = ({ grade, lesson }) => {
  const slidesData = KELAS4_P1_SLIDES;
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const slide = slidesData[currentSlideIndex] || slidesData[0];
  const totalSlides = slidesData.length;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Edit3': return <Edit3 className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Volume2': return <Volume2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'VolumeX': return <VolumeX className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'CheckSquare': return <CheckSquare className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'FileText': return <FileText className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'HelpCircle': return <HelpCircle className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Heart': return <Heart className="w-6 h-6 text-rose-500" />;
      case 'Compass': return <Compass className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      default: return <BookOpen className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
    }
  };

  const handleNext = () => {
    if (currentSlideIndex < totalSlides - 1) {
      soundFX.playClick();
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      soundFX.playClick();
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleDownloadMateri = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>MATERI PEMBELAJARAN PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Membaca, Menulis & Tajwid Idgham serta Surah An-Nasr</h2>
        <p>Berdasarkan Buku Kurikulum Merdeka PAI Kelas 4 SD</p>
      </div>
    `;

    slidesData.forEach((s) => {
      bodyHtml += `
        <div class="card">
          <div class="badge">Slide ${s.id} dari ${totalSlides}</div>
          <h3 style="margin: 4px 0; color: #0d9488; font-size: 14pt;">${s.title}</h3>
          <p style="margin: 0 0 8px 0; font-size: 10pt; color: #475569; font-weight: bold;">${s.subtitle}</p>
          <ul style="margin: 0; padding-left: 20px;">
            ${s.points.map((p) => `<li style="margin-bottom: 4px; font-size: 10pt;">${p}</li>`).join('')}
          </ul>
      `;

      if (s.tableData) {
        bodyHtml += `
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 9pt;">
            <thead>
              <tr style="background-color: #ccfbf1; color: #115e59;">
                ${s.tableData.headers.map((h) => `<th style="border: 1px solid #99f6e4; padding: 6px;">${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${s.tableData.rows.map((row) => `
                <tr>
                  ${row.map((cell) => `<td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }

      if (s.arabicExamples) {
        bodyHtml += `
          <div style="margin-top: 10px; background-color: #f0fdf4; padding: 8px; border-radius: 6px;">
            ${s.arabicExamples.map((ex) => `
              <div style="margin-bottom: 8px; border-bottom: 1px dashed #bbf7d0; padding-bottom: 4px;">
                <div class="arabic" style="font-size: 18pt;">${ex.arabic}</div>
                <div style="font-size: 9pt; font-weight: bold; color: #166534;">${ex.latin}</div>
                <div style="font-size: 9pt; color: #374151;"><em>${ex.meaning}</em></div>
                ${ex.note ? `<div style="font-size: 8pt; color: #059669;">Catatan: ${ex.note}</div>` : ''}
              </div>
            `).join('')}
          </div>
        `;
      }

      if (s.highlightBox) {
        bodyHtml += `
          <div style="margin-top: 8px; padding: 8px; background-color: #fef3c7; border-left: 4px solid #f59e0b; font-size: 9pt;">
            <strong>${s.highlightBox.title}</strong>: ${s.highlightBox.content}
          </div>
        `;
      }

      bodyHtml += `</div>`;
    });

    printOrDownloadDocument(`Materi_PAI_Kelas_${grade}_P${lesson}`, `Materi Pembelajaran PAI Kelas ${grade}`, bodyHtml);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <BookOpen className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-200 uppercase tracking-wider block">
              Materi Slide Interaktif PAI & BP
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Kelas {grade} • Pembelajaran {lesson}
            </h3>
            <p className="text-xs text-teal-100 font-medium">
              Tajwid Idgham Bi Ghunnah & Bila Ghunnah serta Surah An-Nasr
            </p>
          </div>
        </div>

        <button
          onClick={handleDownloadMateri}
          className="px-5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow-lg border border-amber-200 transition active:scale-95 cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Materi</span>
        </button>
      </div>

      {/* SLIDE CARD CONTAINER */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-teal-200 dark:border-teal-800 shadow-xl space-y-6 relative">
        {/* Slide Counter & Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800">
              {getIcon(slide.iconName)}
            </div>
            <div>
              <span className="text-[10px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Slide {currentSlideIndex + 1} / {totalSlides}
              </span>
              <h4 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
                {slide.title}
              </h4>
            </div>
          </div>
          <span className="hidden sm:inline-block text-xs font-extrabold text-amber-700 bg-amber-100 dark:bg-amber-950 dark:text-amber-300 px-3 py-1 rounded-full border border-amber-300">
            {slide.subtitle}
          </span>
        </div>

        {/* Slide Content Points */}
        <div className="space-y-4 min-h-[220px]">
          <ul className="space-y-3">
            {slide.points.map((pt, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          {/* Table Data Render if available */}
          {slide.tableData && (
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-xs sm:text-sm border-collapse border border-teal-200 dark:border-teal-800 rounded-xl overflow-hidden shadow-xs">
                <thead>
                  <tr className="bg-teal-100 dark:bg-teal-950 text-teal-900 dark:text-teal-100 font-extrabold">
                    {slide.tableData.headers.map((h, i) => (
                      <th key={i} className="p-3 border border-teal-200 dark:border-teal-800 text-center">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {slide.tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-teal-50/50 dark:hover:bg-slate-800/50">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3 border border-slate-200 dark:border-slate-800 text-center font-medium text-slate-800 dark:text-slate-200">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Arabic Examples Render if available */}
          {slide.arabicExamples && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {slide.arabicExamples.map((ex, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-1">
                  <div className="font-arabic text-2xl text-emerald-800 dark:text-emerald-300 font-bold text-right leading-loose">
                    {ex.arabic}
                  </div>
                  <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    {ex.latin}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 italic">
                    "{ex.meaning}"
                  </div>
                  {ex.note && (
                    <div className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 pt-1 border-t border-emerald-200 dark:border-emerald-800">
                      📌 {ex.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Highlight Box if available */}
          {slide.highlightBox && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 text-slate-800 dark:text-slate-200 space-y-1">
              <h5 className="text-xs font-black uppercase text-amber-800 dark:text-amber-300">
                {slide.highlightBox.title}
              </h5>
              <p className="text-xs sm:text-sm font-semibold whitespace-pre-line leading-relaxed">
                {slide.highlightBox.content}
              </p>
            </div>
          )}
        </div>

        {/* Slide Controls Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800 pt-5">
          {/* Direct Slide Picker */}
          <div className="flex items-center space-x-1 overflow-x-auto max-w-full pb-2 sm:pb-0">
            {slidesData.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  soundFX.playClick();
                  setCurrentSlideIndex(idx);
                }}
                className={`w-7 h-7 rounded-lg text-xs font-extrabold transition cursor-pointer ${
                  currentSlideIndex === idx
                    ? 'bg-teal-600 text-white shadow-md scale-110'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {s.id}
              </button>
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center space-x-1.5 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentSlideIndex === totalSlides - 1}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs flex items-center justify-center space-x-1.5 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-md active:scale-95"
            >
              <span>Berikutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
