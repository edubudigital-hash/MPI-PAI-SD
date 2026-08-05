import React, { useState } from 'react';
import { KELAS5_P3_SLIDES } from '../../data/kelas5Pembelajaran3Data';
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
  Smile,
  CheckCircle2,
  ListOrdered,
  MessageSquare,
  BookOpenCheck,
  CalendarCheck,
  Compass,
  Star,
  UserCheck
} from 'lucide-react';

interface MateriSlideView5P3Props {
  grade: number;
  lesson: number;
}

export const MateriSlideView5_P3: React.FC<MateriSlideView5P3Props> = ({ grade, lesson }) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);
  const slides = KELAS5_P3_SLIDES;
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
        <h2>PEMBELAJARAN ${lesson}: Akhlak Kepada Allah Swt. Melalui Doa dan Tawakal</h2>
        <p>Berdasarkan Buku Teks PAI BAB III • SD Kelas V</p>
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
            <div style="background-color: #f8fafc; border-left: 3px solid #0d9488; padding: 8px 12px; margin-top: 8px; border-radius: 4px;">
              <p style="font-family: 'Traditional Arabic', 'Amiri', serif; font-size: 14pt; font-weight: bold; text-align: right; margin: 0 0 4px 0; color: #0f766e;">${ex.arabic}</p>
              <p style="font-size: 9pt; font-style: italic; margin: 0 0 2px 0; color: #334155;">${ex.latin}</p>
              <p style="font-size: 9pt; margin: 0; color: #1e293b;"><strong>Artinya:</strong> "${ex.meaning}"</p>
              ${ex.note ? `<p style="font-size: 8pt; color: #0f766e; margin: 2px 0 0 0;">Note: ${ex.note}</p>` : ''}
            </div>
          `;
        });
      }

      if (slide.highlightBox) {
        bodyHtml += `
          <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 8px 12px; margin-top: 8px; border-radius: 6px;">
            <strong style="color: #166534; font-size: 9.5pt;">${slide.highlightBox.title}</strong>
            <p style="margin: 4px 0 0 0; font-size: 9pt; color: #14532d;">${slide.highlightBox.content}</p>
          </div>
        `;
      }

      if (slide.tableData) {
        bodyHtml += `
          <table style="width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 8.5pt;">
            <thead>
              <tr style="background-color: #0d9488; color: white;">
                ${slide.tableData.headers.map((h) => `<th style="padding: 6px; border: 1px solid #0f766e; text-align: left;">${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${slide.tableData.rows.map((row) => `
                <tr>
                  ${row.map((cell) => `<td style="padding: 6px; border: 1px solid #cbd5e1;">${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }

      bodyHtml += `</div>`;
    });

    printOrDownloadDocument(
      `Materi PAI Kelas 5 Pembelajaran 3`,
      `Akhlak Kepada Allah Swt. Melalui Doa dan Tawakal`,
      bodyHtml
    );
  };

  const getSlideIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-teal-600" />;
      case 'Heart': return <Heart className="w-6 h-6 text-rose-500" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-indigo-600" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-sky-600" />;
      case 'BookOpenCheck': return <BookOpenCheck className="w-6 h-6 text-emerald-600" />;
      case 'ListOrdered': return <ListOrdered className="w-6 h-6 text-amber-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-600" />;
      case 'Smile': return <Smile className="w-6 h-6 text-emerald-600" />;
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-blue-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-500" />;
      case 'Compass': return <Compass className="w-6 h-6 text-indigo-600" />;
      case 'Star': return <Star className="w-6 h-6 text-yellow-500" />;
      default: return <BookOpen className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <div id="materi-slide-5-3" className="max-w-5xl mx-auto p-4 md:p-6 space-y-6">
      {/* Header View */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Materi Interaktif • Slide {currentSlideIdx + 1} dari {slides.length}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Akhlak Kepada Allah Swt. Melalui Doa dan Tawakal
          </h1>
          <p className="text-teal-100 text-sm mt-1">
            Berdasarkan Buku Teks Resmi PAI & BP SD Kelas V Bab III
          </p>
        </div>

        <button
          onClick={handleDownloadMateri}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-teal-800 hover:bg-teal-50 rounded-xl font-semibold text-sm transition-all shadow-md shrink-0 active:scale-95"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Materi</span>
        </button>
      </div>

      {/* Slide Navigation Header */}
      <div className="flex items-center justify-between bg-white p-3 md:p-4 rounded-xl border border-slate-200 shadow-sm">
        <button
          onClick={handlePrev}
          disabled={currentSlideIdx === 0}
          className={`inline-flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            currentSlideIdx === 0
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Sebelumnya</span>
        </button>

        {/* Thumbnail Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-[50%] px-2 py-1 scrollbar-none">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                soundFX.playClick();
                setCurrentSlideIdx(idx);
              }}
              className={`w-7 h-7 rounded-lg text-xs font-bold transition-all shrink-0 ${
                idx === currentSlideIdx
                  ? 'bg-teal-600 text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s.id}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentSlideIdx === slides.length - 1}
          className={`inline-flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            currentSlideIdx === slides.length - 1
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-teal-600 text-white hover:bg-teal-700 shadow-sm'
          }`}
        >
          <span className="hidden sm:inline">Selanjutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Slide Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden min-h-[460px] flex flex-col justify-between">
        <div className="p-6 md:p-8 space-y-6">
          {/* Title Area */}
          <div className="flex items-start gap-4 border-b border-slate-100 pb-5">
            <div className="p-3 bg-teal-50 rounded-xl border border-teal-100 shrink-0">
              {getSlideIcon(currentSlide.iconName)}
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                {currentSlide.title}
              </h2>
              <p className="text-teal-600 font-medium text-sm mt-0.5">
                {currentSlide.subtitle}
              </p>
            </div>
          </div>

          {/* Points List */}
          <div className="space-y-3">
            {currentSlide.points.map((point, idx) => (
              <p key={idx} className="text-slate-700 text-base leading-relaxed pl-1">
                {point}
              </p>
            ))}
          </div>

          {/* Arabic Examples */}
          {currentSlide.arabicExamples && currentSlide.arabicExamples.length > 0 && (
            <div className="space-y-4 pt-2">
              {currentSlide.arabicExamples.map((ex, idx) => (
                <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50/60 border-l-4 border-emerald-500 rounded-r-2xl p-5 shadow-sm space-y-2">
                  <p className="font-arabic text-2xl md:text-3xl text-right font-bold text-emerald-950 leading-loose">
                    {ex.arabic}
                  </p>
                  <p className="text-emerald-800 text-sm italic font-medium">
                    {ex.latin}
                  </p>
                  <p className="text-slate-800 text-sm font-semibold">
                    <span className="text-emerald-700">Artinya: </span>"{ex.meaning}"
                  </p>
                  {ex.note && (
                    <p className="text-xs text-emerald-600 font-bold bg-white/70 inline-block px-2.5 py-1 rounded-md mt-1">
                      {ex.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Highlight Box */}
          {currentSlide.highlightBox && (
            <div className="bg-amber-50/90 border border-amber-200/80 rounded-2xl p-5 shadow-sm space-y-1.5">
              <h4 className="font-bold text-amber-900 text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                {currentSlide.highlightBox.title}
              </h4>
              <p className="text-amber-900/90 text-sm leading-relaxed">
                {currentSlide.highlightBox.content}
              </p>
            </div>
          )}

          {/* Table Data */}
          {currentSlide.tableData && (
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm text-left text-slate-700">
                <thead className="bg-teal-700 text-white font-semibold">
                  <tr>
                    {currentSlide.tableData.headers.map((h, idx) => (
                      <th key={idx} className="p-3 border-b border-teal-800">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-slate-50/50">
                  {currentSlide.tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-100/80 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3 font-medium text-slate-800">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer Progress */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>PAI SD Kelas 5 • Pembelajaran 3</span>
          <div className="flex items-center gap-2">
            <div className="w-28 bg-slate-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-teal-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentSlideIdx + 1) / slides.length) * 100}%` }}
              />
            </div>
            <span className="font-bold text-teal-700">
              {Math.round(((currentSlideIdx + 1) / slides.length) * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
