import React, { useState } from 'react';
import { KELAS3_P1_SLIDES } from '../../data/kelas3Pembelajaran1Data';
import { KELAS3_P2_SLIDES } from '../../data/kelas3Pembelajaran2Data';
import { KELAS3_P3_SLIDES } from '../../data/kelas3Pembelajaran3Data';
import { KELAS3_P4_SLIDES } from '../../data/kelas3Pembelajaran4Data';
import { KELAS3_P5_SLIDES } from '../../data/kelas3Pembelajaran5Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  BookOpen, 
  Target, 
  Layers, 
  CheckCircle, 
  Volume2, 
  Sparkles,
  Award
} from 'lucide-react';

interface MateriSlideViewProps {
  grade: number;
  lesson: number;
}

export const MateriSlideView: React.FC<MateriSlideViewProps> = ({ grade, lesson }) => {
  const slidesData = lesson === 5 ? KELAS3_P5_SLIDES : (lesson === 4 ? KELAS3_P4_SLIDES : (lesson === 3 ? KELAS3_P3_SLIDES : (lesson === 2 ? KELAS3_P2_SLIDES : KELAS3_P1_SLIDES)));
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const slide = slidesData[currentSlideIndex] || slidesData[0];
  const totalSlides = slidesData.length;

  const handleNext = () => {
    soundFX.playClick();
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    soundFX.playClick();
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleDownloadMateri = () => {
    soundFX.playClick();
    
    let slidesHtml = '';
    slidesData.forEach((s) => {
      slidesHtml += `
        <div class="card">
          <div class="badge">SLIDE ${s.id} dari ${totalSlides}</div>
          <h3 style="margin: 4px 0 2px 0; color: #065f46; font-size: 14pt;">${s.title}</h3>
          <p style="margin: 0 0 10px 0; color: #64748b; font-size: 10pt; font-weight: 600;">${s.subtitle}</p>
          
          <ul style="margin-bottom: 12px;">
            ${s.points.map(p => `<li style="font-size: 10.5pt; color: #1e293b; margin-bottom: 4px;">${p}</li>`).join('')}
          </ul>
      `;

      if (s.tableData) {
        slidesHtml += `
          <table style="width:100%; border-collapse:collapse; margin: 12px 0; font-size: 10pt;">
            <thead>
              <tr style="background-color:#d1fae5; color:#065f46;">
                ${s.tableData.headers.map(h => `<th style="border:1px solid #a7f3d0; padding:6px; text-align:center;">${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${s.tableData.rows.map(row => `
                <tr>
                  ${row.map((cell, idx) => `<td style="border:1px solid #cbd5e1; padding:6px; text-align:center; ${idx>0 && s.id<=2?'font-family:Amiri; font-size:14pt; color:#047857;':''}">${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }

      if (s.arabicExamples && s.arabicExamples.length > 0) {
        slidesHtml += `<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top:10px;">`;
        s.arabicExamples.forEach(ex => {
          slidesHtml += `
            <div style="border:1px solid #a7f3d0; background-color:#ffffff; padding:10px; border-radius:8px; text-align:center;">
              <div class="arabic" style="font-size:18pt; color:#047857;">${ex.arabic}</div>
              <div style="font-weight:bold; font-size:9.5pt; color:#1e293b; margin-top:2px;">${ex.latin}</div>
              <div style="font-size:8.5pt; color:#64748b;">${ex.meaning}</div>
            </div>
          `;
        });
        slidesHtml += `</div>`;
      }

      if (s.highlightBox) {
        slidesHtml += `
          <div style="background-color:#fef3c7; border-left:4px solid #f59e0b; padding:8px 12px; margin-top:10px; border-radius:4px;">
            <strong style="color:#92400e; font-size:9.5pt;">${s.highlightBox.title}</strong>
            <p style="margin:2px 0 0 0; font-size:9.5pt; color:#78350f;">${s.highlightBox.content}</p>
          </div>
        `;
      }

      slidesHtml += `</div>`;
    });

    const docSubtitle = lesson === 4
      ? 'PEMBELAJARAN 4: MENGENAL DAN MEMPRAKTIKKAN AZAN DAN IQAMAH SECARA SEDERHANA'
      : lesson === 3
      ? 'PEMBELAJARAN 3: MENERAPKAN HUSNUZAN DAN MENGHINDARI SUUZAN KEPADA ALLAH SWT.'
      : lesson === 2
      ? 'PEMBELAJARAN 2: 20 SIFAT WAJIB & 20 SIFAT MUSTAHIL BAGI ALLAH SWT.'
      : 'PEMBELAJARAN 1: MEMBACA, MENULIS & MAD ṬABĪ‘Ī DAN SURAH AL-KAUTSAR';

    printOrDownloadDocument(
      `MATERI PEMBELAJARAN SLIDE - KELAS ${grade}`,
      docSubtitle,
      slidesHtml
    );
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Target': return <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'CheckCircle': return <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Volume2': return <Volume2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Award': return <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default: return <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* Slide Navigation Header Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border-2 border-emerald-200 dark:border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 font-extrabold text-xs uppercase border border-emerald-300">
            SLIDE INTERAKTIF {currentSlideIndex + 1} / {totalSlides}
          </span>
          <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
            • Kelas {grade} Pembelajaran {lesson}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Quick Slide Selector Dots */}
          <div className="hidden md:flex items-center space-x-1.5 mr-2">
            {slidesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  soundFX.playClick();
                  setCurrentSlideIndex(idx);
                }}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer ${
                  currentSlideIndex === idx
                    ? 'bg-emerald-600 text-white shadow-xs scale-110'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-100'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleDownloadMateri}
            className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs sm:text-sm flex items-center space-x-1.5 shadow-xs transition active:scale-95 cursor-pointer border border-amber-300"
          >
            <Download className="w-4 h-4" />
            <span>Download Materi</span>
          </button>
        </div>
      </div>

      {/* Main Slide Card Layout */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-emerald-300 dark:border-emerald-800 shadow-xl space-y-6 min-h-[420px] flex flex-col justify-between relative overflow-hidden">
        
        {/* Background Subtle Pattern Accent */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="space-y-5">
          {/* Slide Header */}
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-start space-x-3">
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 shrink-0">
              {renderIcon(slide.iconName)}
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-wider bg-amber-100 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full">
                Slide {slide.id}
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white pt-1">
                {slide.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                {slide.subtitle}
              </p>
            </div>
          </div>

          {/* Slide Main Points */}
          <div className="space-y-3 pt-1">
            {slide.points.map((point, index) => (
              <div
                key={index}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-200 flex items-start space-x-3"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Table Data (If Available in Slide 2) */}
          {slide.tableData && (
            <div className="overflow-x-auto rounded-2xl border border-emerald-200 dark:border-slate-700 my-4 shadow-xs">
              <table className="w-full text-center text-xs sm:text-sm">
                <thead className="bg-emerald-100 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-200 font-extrabold">
                  <tr>
                    {slide.tableData.headers.map((h, i) => (
                      <th key={i} className="p-3 border-b border-emerald-200 dark:border-slate-700">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  {slide.tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-emerald-50/50 dark:hover:bg-slate-800/50 transition">
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`p-3 ${
                            cIdx > 0
                              ? 'font-arabic text-xl sm:text-2xl text-emerald-800 dark:text-emerald-300 font-bold'
                              : 'font-semibold text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Arabic Examples Grid (If Available) */}
          {slide.arabicExamples && slide.arabicExamples.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {slide.arabicExamples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border-2 border-emerald-200 dark:border-emerald-800/80 text-center space-y-1 hover:border-emerald-400 transition"
                >
                  <div className="font-arabic text-2xl sm:text-3xl text-emerald-900 dark:text-emerald-200 font-bold">
                    {ex.arabic}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-amber-700 dark:text-amber-400">
                    {ex.latin}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-300 italic font-medium">
                    "{ex.meaning}"
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Highlight Box (If Available) */}
          {slide.highlightBox && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-800 text-slate-800 dark:text-slate-200 space-y-1">
              <h4 className="font-extrabold text-amber-800 dark:text-amber-300 text-xs sm:text-sm flex items-center space-x-2">
                <span>{slide.highlightBox.title}</span>
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed font-medium">
                {slide.highlightBox.content}
              </p>
            </div>
          )}
        </div>

        {/* Slide Bottom Controls */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Slide Progress Indicator Bar */}
          <div className="w-full sm:w-1/2 space-y-1.5">
            <div className="flex justify-between text-[11px] font-bold text-slate-500">
              <span>Kemajuan Slide</span>
              <span>{Math.round(((currentSlideIndex + 1) / totalSlides) * 100)}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300"
                style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Previous / Next Buttons */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center space-x-1.5 border transition cursor-pointer active:scale-95 ${
                currentSlideIndex === 0
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700 cursor-not-allowed opacity-60'
                  : 'bg-white dark:bg-slate-800 hover:bg-emerald-50 text-slate-800 dark:text-white border-slate-300 dark:border-slate-700 shadow-xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentSlideIndex === totalSlides - 1}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center space-x-1.5 border transition cursor-pointer active:scale-95 ${
                currentSlideIndex === totalSlides - 1
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700 cursor-not-allowed opacity-60'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
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
