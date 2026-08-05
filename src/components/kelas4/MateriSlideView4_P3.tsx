import React, { useState } from 'react';
import { KELAS4_P3_SLIDES, SlideData } from '../../data/kelas4Pembelajaran3Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Heart, 
  Home, 
  Users, 
  CheckSquare, 
  HeartHandshake, 
  Smile, 
  Sparkles, 
  Award, 
  Volume2,
  Bookmark
} from 'lucide-react';

interface ComponentProps {
  grade: number;
  lesson: number;
}

export const MateriSlideView4_P3: React.FC<ComponentProps> = ({ grade, lesson }) => {
  const slides = KELAS4_P3_SLIDES;
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);

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
        <h1>MATERI PEMBELAJARAN PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Menerapkan Akhlak Terpuji kepada Anggota Keluarga Inti dan Anggota Keluarga Lainnya</h2>
        <p>Berdasarkan Buku Teks Utama PAI Kemenag RI • BAB 3 Kurikulum Merdeka</p>
      </div>

      <div class="card" style="background-color: #f0fdf4; border-color: #86efac;">
        <h3 style="margin: 0 0 6px 0; color: #166534; font-size: 11pt;">🎯 TUJUAN PEMBELAJARAN BAB 3:</h3>
        <ol style="margin: 0; padding-left: 20px; font-size: 9.5pt; color: #14532d;">
          <li>Menjelaskan pengertian akhlak terpuji.</li>
          <li>Menjelaskan pentingnya berakhlak mulia dalam keluarga.</li>
          <li>Menerapkan akhlak terpuji kepada anggota keluarga inti.</li>
          <li>Menerapkan akhlak terpuji kepada anggota keluarga lainnya.</li>
          <li>Membiasakan sikap hormat, kasih sayang, tolong-menolong, dan tanggung jawab dalam kehidupan keluarga.</li>
        </ol>
      </div>
    `;

    slides.forEach((s) => {
      bodyHtml += `
        <div class="card">
          <div style="font-size: 11pt; font-weight: bold; color: #0d9488; margin-bottom: 4px;">
            ${s.title}
          </div>
          <div style="font-size: 9pt; font-style: italic; color: #64748b; margin-bottom: 10px;">
            ${s.subtitle}
          </div>

          <div style="font-size: 9.5pt; line-height: 1.6; color: #1e293b;">
            ${s.points.map((pt) => `<div style="margin-bottom: 6px;">${pt}</div>`).join('')}
          </div>

          ${
            s.arabicExamples
              ? s.arabicExamples
                  .map(
                    (ex) => `
              <div class="arabic-box" style="margin-top: 10px;">
                <div class="arabic" style="font-size: 18pt;">${ex.arabic}</div>
                <div class="latin" style="font-size: 9pt; margin-top: 4px;">${ex.latin}</div>
                <div class="meaning" style="font-size: 9pt; font-weight: bold; margin-top: 4px;">"${ex.meaning}"</div>
                ${ex.note ? `<div style="font-size: 8pt; color: #047857; margin-top: 2px;">📌 ${ex.note}</div>` : ''}
              </div>
            `
                  )
                  .join('')
              : ''
          }

          ${
            s.highlightBox
              ? `
            <div style="margin-top: 10px; padding: 10px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px; font-size: 9pt; color: #78350f;">
              <strong>${s.highlightBox.title}:</strong> ${s.highlightBox.content}
            </div>
          `
              : ''
          }
        </div>
      `;
    });

    printOrDownloadDocument(
      `Materi_PAI_Kelas_${grade}_Pembelajaran_${lesson}`,
      `Materi Akhlak Terpuji Keluarga Kelas ${grade}`,
      bodyHtml
    );
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Heart':
        return <Heart className="w-6 h-6 text-emerald-600" />;
      case 'Home':
        return <Home className="w-6 h-6 text-teal-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-indigo-600" />;
      case 'CheckSquare':
        return <CheckSquare className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Award':
        return <Award className="w-6 h-6 text-purple-600" />;
      default:
        return <BookOpen className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <BookOpen className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider block">
              Slide Interaktif Materi PAI • BAB 3
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Menerapkan Akhlak Terpuji Kepada Keluarga
            </h3>
            <p className="text-xs text-emerald-100 font-medium">
              Keluarga Inti (Ayah, Ibu, Anak) & Keluarga Besar (Kakek, Nenek, Paman, Bibi, Silaturahmi)
            </p>
          </div>
        </div>

        <button
          onClick={handleDownloadMateri}
          className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center space-x-2 shadow-lg border border-amber-200 transition active:scale-95 cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Materi</span>
        </button>
      </div>

      {/* SLIDE NAVIGATION BAR THUMBNAILS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              soundFX.playClick();
              setCurrentSlideIdx(idx);
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center space-x-1.5 shrink-0 ${
              idx === currentSlideIdx
                ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-300'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-slate-700'
            }`}
          >
            <span>Slide {s.id}</span>
          </button>
        ))}
      </div>

      {/* MAIN SLIDE STAGE CARD */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-emerald-200 dark:border-emerald-800 shadow-xl space-y-6 relative min-h-[460px] flex flex-col justify-between">
        <div className="space-y-6">
          {/* Slide Top Indicator */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
                {getIcon(currentSlide.iconName)}
              </div>
              <div>
                <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">
                  Slide {currentSlideIdx + 1} Dari {slides.length}
                </span>
                <h4 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
                  {currentSlide.title}
                </h4>
              </div>
            </div>
            <span className="text-xs font-extrabold text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
              {currentSlide.subtitle}
            </span>
          </div>

          {/* Points List */}
          <div className="space-y-3">
            {currentSlide.points.map((pt, idx) => (
              <div
                key={idx}
                className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800/80"
              >
                {pt}
              </div>
            ))}
          </div>

          {/* Arabic Examples Box */}
          {currentSlide.arabicExamples && currentSlide.arabicExamples.length > 0 && (
            <div className="space-y-4 pt-2">
              {currentSlide.arabicExamples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800/90 border-2 border-emerald-200 dark:border-emerald-800 text-center space-y-2 shadow-sm"
                >
                  <div className="font-arabic text-3xl sm:text-4xl text-emerald-900 dark:text-emerald-300 font-bold leading-loose">
                    {ex.arabic}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-400 italic">
                    {ex.latin}
                  </div>
                  <div className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl inline-block border border-emerald-200">
                    "{ex.meaning}"
                  </div>
                  {ex.note && (
                    <p className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400 pt-1">
                      📌 {ex.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Highlight Box */}
          {currentSlide.highlightBox && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700 flex items-start space-x-3">
              <Bookmark className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-black text-amber-900 dark:text-amber-300 uppercase">
                  {currentSlide.highlightBox.title}
                </h5>
                <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 font-medium">
                  {currentSlide.highlightBox.content}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Slide Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={handlePrev}
            disabled={currentSlideIdx === 0}
            className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm flex items-center space-x-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-200 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          <span className="text-xs font-bold text-slate-400">
            {currentSlideIdx + 1} / {slides.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentSlideIdx === slides.length - 1}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-md"
          >
            <span>Selanjutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
