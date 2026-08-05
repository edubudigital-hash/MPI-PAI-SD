import React, { useState } from 'react';
import { KELAS5_P1_SLIDES } from '../../data/kelas5Pembelajaran1Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Sparkles, 
  Heart, 
  Award, 
  ShieldCheck,
  Grid,
  PenTool,
  Volume2,
  Mic,
  Layers,
  Clock
} from 'lucide-react';

interface MateriSlideView5P1Props {
  grade: number;
  lesson: number;
}

export const MateriSlideView5_P1: React.FC<MateriSlideView5P1Props> = ({ grade, lesson }) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);
  const slides = KELAS5_P1_SLIDES;
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
        <h2>PEMBELAJARAN ${lesson}: Membaca, Menulis, dan Membedakan Huruf Hijaiyah Bersambung Tiga Kata atau Lebih dengan Praktik Membaca Mim Sukun & Surat Al-'Asr</h2>
        <p>Berdasarkan Buku Teks PAI BAB 1 • SD Kelas V</p>
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
              <div style="font-size: 9pt; font-style: italic; color: #047857;">"${ex.latin}"</div>
              <div style="font-size: 9pt; color: #1e293b; margin-top: 2px;"><strong>Artinya:</strong> "${ex.meaning}" ${ex.note ? `(${ex.note})` : ''}</div>
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
                  ${row.map((c) => `<td style="padding: 6px; border: 1px solid #cbd5e1; text-align: center;">${c}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }

      bodyHtml += `</div>`;
    });

    printOrDownloadDocument(
      `Materi_PAI_Kelas5_P1_Hijaiyah_MimSukun_AlAsr.pdf`,
      `Materi PAI Kelas 5 Pembelajaran 1 - Huruf Hijaiyah Bersambung, Hukum Mim Sukun & Surat Al-'Asr`,
      bodyHtml
    );
  };

  const getSlideIcon = (name: string) => {
    switch (name) {
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-600" />;
      case 'Grid': return <Grid className="w-6 h-6 text-teal-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-indigo-600" />;
      case 'PenTool': return <PenTool className="w-6 h-6 text-purple-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      case 'Volume2': return <Volume2 className="w-6 h-6 text-emerald-600" />;
      case 'Mic': return <Mic className="w-6 h-6 text-blue-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-rose-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-cyan-600" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-600" />;
      case 'Heart': return <Heart className="w-6 h-6 text-rose-600" />;
      default: return <BookOpen className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <div id="materi-slide-v5-p1" className="space-y-6 max-w-5xl mx-auto">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-100 text-sm font-medium mb-1">
            <BookOpen className="w-4 h-4" />
            <span>PAI & BP • Kelas {grade} Pembelajaran {lesson}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Membaca, Menulis, dan Membedakan Huruf Hijaiyah Bersambung & Surat Al-'Asr
          </h2>
          <p className="text-emerald-100 text-sm mt-1">
            Materi Interaktif Berdasarkan Buku Teks Kurikulum Merdeka BAB 1
          </p>
        </div>
        <button
          id="btn-download-materi-p1"
          onClick={handleDownloadMateri}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2.5 rounded-xl font-semibold transition-all shadow-md shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Materi</span>
        </button>
      </div>

      {/* Slide Navigation Progress */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/80 flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-slate-700">
          Slide <span className="text-emerald-600 text-base font-bold">{currentSlideIdx + 1}</span> dari {slides.length}
        </div>
        <div className="flex-1 max-w-md bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200">
          <div 
            className="bg-emerald-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentSlideIdx + 1) / slides.length) * 100}%` }}
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            id="btn-prev-slide-p1"
            onClick={handlePrev}
            disabled={currentSlideIdx === 0}
            className={`p-2 rounded-lg border transition-all ${
              currentSlideIdx === 0 
                ? 'opacity-40 cursor-not-allowed bg-slate-50 border-slate-200 text-slate-400' 
                : 'bg-white hover:bg-emerald-50 border-slate-300 text-slate-700 hover:text-emerald-600'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            id="btn-next-slide-p1"
            onClick={handleNext}
            disabled={currentSlideIdx === slides.length - 1}
            className={`p-2 rounded-lg border transition-all ${
              currentSlideIdx === slides.length - 1 
                ? 'opacity-40 cursor-not-allowed bg-slate-50 border-slate-200 text-slate-400' 
                : 'bg-white hover:bg-emerald-50 border-slate-300 text-slate-700 hover:text-emerald-600'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slide Main Content Display */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden transition-all duration-300 min-h-[460px] flex flex-col justify-between">
        <div className="p-6 md:p-8 space-y-6">
          {/* Title Header */}
          <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
            <div className="p-3.5 bg-emerald-50 border border-emerald-200/60 rounded-2xl shrink-0">
              {getSlideIcon(currentSlide.iconName)}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">
                {currentSlide.title}
              </h3>
              <p className="text-emerald-700 font-medium text-sm mt-1">
                {currentSlide.subtitle}
              </p>
            </div>
          </div>

          {/* Points List */}
          <div className="space-y-3">
            {currentSlide.points.map((pt, idx) => (
              <div key={idx} className="text-slate-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
                {pt}
              </div>
            ))}
          </div>

          {/* Table Data if available */}
          {currentSlide.tableData && (
            <div className="overflow-x-auto my-4 border border-slate-200 rounded-xl">
              <table className="w-full text-sm text-left text-slate-700">
                <thead className="text-xs text-white uppercase bg-emerald-600">
                  <tr>
                    {currentSlide.tableData.headers.map((h, i) => (
                      <th key={i} className="px-4 py-3 border-r border-emerald-500 last:border-r-0 text-center">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {currentSlide.tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-emerald-50/50 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 border-r border-slate-200 last:border-r-0 text-center font-medium">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Arabic Callout if available */}
          {currentSlide.arabicExamples && currentSlide.arabicExamples.length > 0 && (
            <div className="space-y-4 pt-4">
              {currentSlide.arabicExamples.map((ex, idx) => (
                <div key={idx} className="bg-emerald-50/80 border border-emerald-200/80 p-5 rounded-2xl text-center space-y-3">
                  <div className="text-3xl md:text-4xl font-serif text-emerald-900 dir-rtl tracking-wide leading-loose">
                    {ex.arabic}
                  </div>
                  <div className="text-sm font-semibold text-emerald-700 italic">
                    "{ex.latin}"
                  </div>
                  <div className="text-slate-800 text-sm font-medium bg-white px-4 py-2 rounded-xl border border-emerald-100 inline-block">
                    <strong>Artinya:</strong> "{ex.meaning}" {ex.note && <span className="text-emerald-600 font-semibold">({ex.note})</span>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Highlight Box if available */}
          {currentSlide.highlightBox && (
            <div className="bg-amber-50 border border-amber-200/80 p-4 rounded-xl text-amber-900 text-sm space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-amber-800">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{currentSlide.highlightBox.title}</span>
              </div>
              <p className="text-amber-800/90 leading-relaxed">{currentSlide.highlightBox.content}</p>
            </div>
          )}
        </div>

        {/* Slide Footer Controls */}
        <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentSlideIdx === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
              currentSlideIdx === 0
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>
          
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Kurikulum Merdeka • Kelas 5 SD
          </span>

          <button
            onClick={handleNext}
            disabled={currentSlideIdx === slides.length - 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
              currentSlideIdx === slides.length - 1
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
            }`}
          >
            <span>Selanjutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
