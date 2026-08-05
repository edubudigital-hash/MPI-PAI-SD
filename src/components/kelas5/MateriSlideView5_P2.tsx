import React, { useState } from 'react';
import { KELAS5_P2_SLIDES } from '../../data/kelas5Pembelajaran2Data';
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
  Gift,
  Compass,
  Users,
  Smile,
  Layers,
  Building,
  Home,
  CheckCircle2
} from 'lucide-react';

interface MateriSlideView5P2Props {
  grade: number;
  lesson: number;
}

export const MateriSlideView5_P2: React.FC<MateriSlideView5P2Props> = ({ grade, lesson }) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);
  const slides = KELAS5_P2_SLIDES;
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
        <h2>PEMBELAJARAN ${lesson}: Mengenal dan Meneladani Asmaul Husna (Al-Halīm, Asy-Syakūr, Al-Hakīm, dan Al-Wadūd)</h2>
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
                ${slide.tableData.headers.map((h) => `<th style="padding: 6px; border: 1px solid #cbd5e1; text-align: left;">${h}</th>`).join('')}
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
      `Materi_PAI_Kelas_${grade}_Pembelajaran_${lesson}`,
      `Mengenal dan Meneladani Asmaul Husna (Al-Halīm, Asy-Syakūr, Al-Hakīm, Al-Wadūd)`,
      bodyHtml
    );
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Heart': return <Heart className="w-6 h-6 text-rose-500" />;
      case 'Award': return <Award className="w-6 h-6 text-yellow-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Grid': return <Grid className="w-6 h-6 text-indigo-600" />;
      case 'Gift': return <Gift className="w-6 h-6 text-emerald-500" />;
      case 'Compass': return <Compass className="w-6 h-6 text-cyan-600" />;
      case 'Users': return <Users className="w-6 h-6 text-violet-600" />;
      case 'Smile': return <Smile className="w-6 h-6 text-pink-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-teal-600" />;
      case 'Building': return <Building className="w-6 h-6 text-orange-600" />;
      case 'Home': return <Home className="w-6 h-6 text-blue-500" />;
      default: return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header Controls */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Materi Pembelajaran Slide Interaktif • Kelas {grade} BAB III</span>
          </div>
          <h2 className="text-2xl font-extrabold text-amber-200">
            Mengenal & Meneladani Asmaul Husna
          </h2>
          <p className="text-emerald-100 text-sm mt-1">
            Al-Halīm, Asy-Syakūr, Al-Hakīm, dan Al-Wadūd (Sesuai PDF BAB III)
          </p>
        </div>

        <button
          onClick={handleDownloadMateri}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-xl font-bold shadow-md transition-transform hover:scale-105"
        >
          <Download className="w-5 h-5" />
          <span>Download PDF Materi</span>
        </button>
      </div>

      {/* Slide Navigator & Counter */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100 flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentSlideIdx === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Sebelumnya</span>
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-[60vw] py-1">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundFX.playClick();
                setCurrentSlideIdx(idx);
              }}
              className={`w-7 h-7 rounded-full font-bold text-xs transition flex items-center justify-center ${
                currentSlideIdx === idx
                  ? 'bg-emerald-600 text-white shadow-md scale-110'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentSlideIdx === slides.length - 1}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm"
        >
          <span>Berikutnya</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Main Slide Card Content */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-emerald-100 min-h-[460px] flex flex-col justify-between">
        <div className="space-y-6">
          {/* Header Title of Active Slide */}
          <div className="flex items-start gap-4 border-b border-emerald-100 pb-4">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
              {renderIcon(currentSlide.iconName)}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                Slide {currentSlide.id} dari {slides.length}
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 mt-1">
                {currentSlide.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                {currentSlide.subtitle}
              </p>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3">
            {currentSlide.points.map((pt, index) => (
              <p
                key={index}
                className="text-slate-700 leading-relaxed font-medium text-base pl-2 border-l-2 border-emerald-300"
              >
                {pt}
              </p>
            ))}
          </div>

          {/* Arabic Examples Box if available */}
          {currentSlide.arabicExamples && currentSlide.arabicExamples.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {currentSlide.arabicExamples.map((ex, i) => (
                <div
                  key={i}
                  className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2 shadow-sm"
                >
                  <p className="text-2xl font-bold text-emerald-800 text-right font-serif leading-loose">
                    {ex.arabic}
                  </p>
                  <p className="text-xs font-bold text-emerald-700 italic">
                    {ex.latin}
                  </p>
                  <p className="text-xs text-slate-700 font-medium">
                    <span className="font-bold text-emerald-900">Artinya: </span>
                    "{ex.meaning}"
                  </p>
                  {ex.note && (
                    <span className="inline-block text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {ex.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Highlight Box if available */}
          {currentSlide.highlightBox && (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl space-y-1">
              <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                {currentSlide.highlightBox.title}
              </h4>
              <p className="text-xs md:text-sm text-amber-800 leading-relaxed">
                {currentSlide.highlightBox.content}
              </p>
            </div>
          )}

          {/* Table Data if available */}
          {currentSlide.tableData && (
            <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-emerald-700 text-white font-bold">
                  <tr>
                    {currentSlide.tableData.headers.map((h, i) => (
                      <th key={i} className="p-3 border-b border-emerald-600">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-100 bg-emerald-50/30">
                  {currentSlide.tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-emerald-50/60 transition">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3 font-medium text-slate-700">
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

        {/* Bottom Slide Progress Bar */}
        <div className="mt-8 pt-4 border-t border-emerald-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-400">
            Halaman Slide {currentSlideIdx + 1} dari {slides.length}
          </span>
          <div className="w-1/3 bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-full transition-all duration-300"
              style={{
                width: `${((currentSlideIdx + 1) / slides.length) * 100}%`
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
