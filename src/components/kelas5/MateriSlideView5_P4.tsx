import React, { useState } from 'react';
import { KELAS5_P4_SLIDES } from '../../data/kelas5Pembelajaran4Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Heart,
  Volume2,
  ListOrdered,
  Lightbulb
} from 'lucide-react';

interface Props {
  grade: number;
  lesson: number;
}

export const MateriSlideView5_P4: React.FC<Props> = ({ grade, lesson }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slide = KELAS5_P4_SLIDES[currentSlideIndex];

  const handleNext = () => {
    if (currentSlideIndex < KELAS5_P4_SLIDES.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const handleDownload = () => {
    let bodyHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
        <h1 style="text-align: center; color: #0d9488; margin-bottom: 4px; font-size: 18pt;">MATERI PEMBELAJARAN PAI KELAS 5</h1>
        <h2 style="text-align: center; color: #334155; margin-top: 0; font-size: 14pt; font-weight: normal;">BAB IV: PUASA WAJIB DAN SUNAH, SERTA HIKMAHNYA</h2>
        <hr style="border: none; border-top: 2px solid #0d9488; margin: 16px 0 24px 0;" />
    `;

    KELAS5_P4_SLIDES.forEach((s) => {
      bodyHtml += `
        <div style="margin-bottom: 24px; padding: 16px; border: 1px solid #cbd5e1; border-radius: 8px; background-color: #ffffff; page-break-inside: avoid;">
          <h3 style="color: #0f766e; margin-top: 0; font-size: 13pt; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">
            Slide ${s.id}: ${s.title}
          </h3>
          <p style="font-weight: bold; color: #475569; margin-bottom: 12px;">${s.subtitle}</p>
      `;

      if (s.arabicText) {
        bodyHtml += `
          <div style="background-color: #f8fafc; padding: 12px; border-radius: 6px; margin-bottom: 12px; text-align: right; border-right: 4px solid #0d9488;">
            <p style="font-size: 16pt; font-family: 'Traditional Arabic', 'Amiri', serif; margin: 0; color: #0f172a;">${s.arabicText}</p>
            ${s.latinText ? `<p style="font-size: 9.5pt; font-style: italic; color: #475569; margin: 6px 0 0 0; text-align: left;"><strong>Latin:</strong> ${s.latinText}</p>` : ''}
            ${s.translation ? `<p style="font-size: 9.5pt; color: #334155; margin: 4px 0 0 0; text-align: left;"><strong>Artinya:</strong> ${s.translation}</p>` : ''}
          </div>
        `;
      }

      bodyHtml += `<ul style="padding-left: 20px; margin-top: 8px; margin-bottom: 12px;">`;
      s.points.forEach((point) => {
        bodyHtml += `<li style="margin-bottom: 6px; font-size: 10pt;">${point}</li>`;
      });
      bodyHtml += `</ul>`;

      if (s.explanation) {
        bodyHtml += `
          <div style="background-color: #f0fdf4; border-left: 3px solid #16a34a; padding: 8px 12px; margin-top: 8px; border-radius: 4px;">
            <strong style="color: #15803d; font-size: 9.5pt;">Penjelasan / Hikmah:</strong>
            <p style="margin: 4px 0 0 0; font-size: 9.5pt; color: #166534;">${s.explanation}</p>
          </div>
        `;
      }

      if (s.examples && s.examples.length > 0) {
        bodyHtml += `
          <div style="background-color: #fffbebf1; border-left: 3px solid #d97706; padding: 8px 12px; margin-top: 8px; border-radius: 4px;">
            <strong style="color: #b45309; font-size: 9.5pt;">Contoh Tambahan:</strong>
            <ul style="margin: 4px 0 0 0; padding-left: 18px; font-size: 9pt; color: #78350f;">
              ${s.examples.map(ex => `<li>${ex}</li>`).join('')}
            </ul>
          </div>
        `;
      }

      bodyHtml += `</div>`;
    });

    bodyHtml += `</div>`;

    printOrDownloadDocument(
      `Materi PAI Kelas ${grade} Pembelajaran ${lesson}`,
      `Puasa Wajib dan Sunah, Serta Hikmahnya`,
      bodyHtml
    );
  };

  const getSlideIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-purple-600" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6 text-rose-600" />;
      case 'Heart': return <Heart className="w-6 h-6 text-emerald-600" />;
      default: return <BookOpen className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-5 rounded-2xl border border-slate-200 shadow-sm gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            Kelas {grade} • Pembelajaran {lesson}
          </div>
          <h2 className="text-xl font-bold text-slate-800">Materi Interaktif: Puasa Wajib dan Sunah, Serta Hikmahnya</h2>
          <p className="text-sm text-slate-500">Sesuai Buku PAI & Budi Pekerti Kelas 5 Bab IV</p>
        </div>

        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all shadow-md hover:shadow-emerald-200 active:scale-95"
        >
          <Download className="w-4 h-4" />
          <span>Download Materi (PDF)</span>
        </button>
      </div>

      {/* Progress & Navigation dots */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex justify-between items-center text-sm font-medium text-slate-600">
          <span>Slide {currentSlideIndex + 1} dari {KELAS5_P4_SLIDES.length}</span>
          <span className="text-emerald-600 font-semibold">{Math.round(((currentSlideIndex + 1) / KELAS5_P4_SLIDES.length) * 100)}% Selesai</span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div 
            className="bg-emerald-500 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentSlideIndex + 1) / KELAS5_P4_SLIDES.length) * 100}%` }}
          />
        </div>
        
        {/* Slide quick selectors */}
        <div className="flex flex-wrap gap-2 pt-2 justify-center">
          {KELAS5_P4_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`w-9 h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                idx === currentSlideIndex 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200 scale-105' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
              }`}
              title={s.title}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Slide Card Display */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden transition-all duration-300">
        {/* Top Header Gradient */}
        <div className={`p-6 bg-gradient-to-r ${slide.color} text-white`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl text-white">
              {getSlideIcon(slide.icon)}
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold opacity-90">Bagian {slide.id}</span>
              <h3 className="text-2xl font-bold">{slide.title}</h3>
            </div>
          </div>
          <p className="text-white/90 text-sm font-medium ml-12">{slide.subtitle}</p>
        </div>

        {/* Slide Main Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Arabic & Latin Callout if present */}
          {slide.arabicText && (
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
              <div className="flex items-center justify-between text-emerald-800 text-xs font-semibold">
                <span className="flex items-center gap-1.5"><Volume2 className="w-4 h-4" /> QS. Al-Baqarah: 183</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md">Dalil Al-Qur'an</span>
              </div>
              <p className="text-2xl sm:text-3xl text-right font-serif leading-relaxed text-slate-800 font-bold" dir="rtl">
                {slide.arabicText}
              </p>
              {slide.latinText && (
                <p className="text-xs text-slate-600 font-mono italic bg-white/80 p-3 rounded-xl border border-emerald-100">
                  {slide.latinText}
                </p>
              )}
              {slide.translation && (
                <p className="text-sm text-slate-700 font-medium leading-relaxed bg-white/80 p-3.5 rounded-xl border border-emerald-100">
                  {slide.translation}
                </p>
              )}
            </div>
          )}

          {/* Points List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              Poin-Poin Penting Materi:
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {slide.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/40 hover:border-emerald-200 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{pt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Explanation Box */}
          {slide.explanation && (
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm text-amber-900 leading-relaxed">
                <span className="font-bold text-amber-950 block mb-1">Pendalaman Pemahaman:</span>
                {slide.explanation}
              </div>
            </div>
          )}

          {/* Examples Box if any */}
          {slide.examples && slide.examples.length > 0 && (
            <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-2">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider">Contoh & Ilustrasi:</div>
              <ul className="list-disc list-inside text-sm text-blue-950 space-y-1">
                {slide.examples.map((ex, idx) => (
                  <li key={idx}>{ex}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Slide Bottom Controls */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
              currentSlideIndex === 0
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          <span className="text-xs font-medium text-slate-500">
            {currentSlideIndex + 1} / {KELAS5_P4_SLIDES.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === KELAS5_P4_SLIDES.length - 1}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
              currentSlideIndex === KELAS5_P4_SLIDES.length - 1
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm active:scale-95'
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
