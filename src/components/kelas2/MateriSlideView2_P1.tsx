import React, { useState } from 'react';
import { SLIDES_KELAS2_P1, SlideData } from '../../data/kelas2Pembelajaran1Data';
import { soundFX } from '../../utils/audio';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Bookmark, 
  BookmarkCheck, 
  Printer, 
  HelpCircle, 
  BookOpen,
  Search
} from 'lucide-react';

interface MateriSlideView2_P1Props {
  grade: number;
  lesson: number;
}

export const MateriSlideView2_P1: React.FC<MateriSlideView2_P1Props> = ({ grade, lesson }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [bookmarkedSlides, setBookmarkedSlides] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'bookmarked'>('all');

  const currentSlide: SlideData = SLIDES_KELAS2_P1[currentSlideIndex];

  // Filtering slides for bookmark / search
  const filteredSlides = SLIDES_KELAS2_P1.filter(slide => {
    const matchesSearch = slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.badge.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBookmark = activeTab === 'all' || bookmarkedSlides.includes(slide.id);
    return matchesSearch && matchesBookmark;
  });

  const handleNext = () => {
    if (currentSlideIndex < SLIDES_KELAS2_P1.length - 1) {
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

  const toggleBookmark = (slideId: number) => {
    soundFX.playClick();
    setBookmarkedSlides(prev => 
      prev.includes(slideId) ? prev.filter(id => id !== slideId) : [...prev, slideId]
    );
  };

  const handleSelectQuizOption = (slideId: number, optionIdx: number) => {
    soundFX.playClick();
    setUserAnswers(prev => ({ ...prev, [slideId]: optionIdx }));
    setShowExplanation(prev => ({ ...prev, [slideId]: true }));
  };

  // Download PDF functionality for Materi
  const handlePrintMateri = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Materi PAI SD Kelas ${grade} Bab ${lesson}: Membaca & Menulis Hijaiyah Bersambung 3 Huruf, Surah An-Nas & Surah Al-Falaq</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 30px;
              color: #0f172a;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #d97706;
              padding-bottom: 15px;
              margin-bottom: 25px;
            }
            .header h1 {
              margin: 0;
              color: #d97706;
              font-size: 22px;
              font-weight: 800;
            }
            .header p {
              margin: 4px 0 0;
              color: #475569;
              font-size: 13px;
            }
            .slide-card {
              page-break-inside: avoid;
              border: 1px solid #cbd5e1;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
              background-color: #ffffff;
              box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            }
            .slide-badge {
              display: inline-block;
              background-color: #fef3c7;
              color: #92400e;
              font-weight: 700;
              font-size: 11px;
              padding: 4px 10px;
              border-radius: 20px;
              margin-bottom: 8px;
              text-transform: uppercase;
            }
            .slide-title {
              font-size: 16px;
              font-weight: 800;
              color: #1e293b;
              margin-bottom: 10px;
            }
            .slide-content {
              font-size: 13px;
              color: #334155;
              margin-bottom: 12px;
            }
            .arabic-box {
              background-color: #fffbeb;
              border-right: 4px solid #d97706;
              padding: 10px 15px;
              margin: 10px 0;
              font-size: 18px;
              text-align: right;
              font-family: 'Traditional Arabic', 'Amiri', serif;
            }
            .translation {
              font-size: 11px;
              color: #64748b;
              font-style: italic;
              margin-top: 4px;
            }
            .bullet-list {
              margin: 8px 0;
              padding-left: 20px;
              font-size: 12px;
            }
            .bullet-list li {
              margin-bottom: 4px;
            }
            .table-custom {
              width: 100%;
              border-collapse: collapse;
              font-size: 12px;
              margin-top: 10px;
            }
            .table-custom th, .table-custom td {
              border: 1px solid #cbd5e1;
              padding: 8px 10px;
              text-align: left;
            }
            .table-custom th {
              background-color: #fef3c7;
              color: #78350f;
              font-weight: 700;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              font-size: 11px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 12px;
            }
            @media print {
              body { padding: 0; }
              .slide-card { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>RANGKUMAN MATERI PAI SD KELAS ${grade}</h1>
            <p>BAB ${lesson}: Membaca & Menulis Hijaiyah Bersambung 3 Huruf, Surah An-Nas & Surah Al-Falaq</p>
          </div>

          ${SLIDES_KELAS2_P1.map((s, idx) => `
            <div class="slide-card">
              <span class="slide-badge">Slide ${idx + 1} • ${s.badge}</span>
              <div class="slide-title">${s.title}</div>
              <div class="slide-content">${s.content}</div>

              ${s.arabicText ? `
                <div class="arabic-box">
                  ${s.arabicText}
                  <div class="translation">" ${s.translation} "</div>
                </div>
              ` : ''}

              ${s.bulletPoints ? `
                <ul class="bullet-list">
                  ${s.bulletPoints.map(bp => `<li>${bp}</li>`).join('')}
                </ul>
              ` : ''}

              ${s.tableData ? `
                <table class="table-custom">
                  <thead>
                    <tr>
                      <th>Poin Kata / Konsep</th>
                      <th>Keterangan Huruf</th>
                      ${s.tableData[0].col3 ? '<th>Artinya / Penerapan</th>' : ''}
                    </tr>
                  </thead>
                  <tbody>
                    ${s.tableData.map(row => `
                      <tr>
                        <td>${row.col1}</td>
                        <td>${row.col2}</td>
                        ${row.col3 ? `<td>${row.col3}</td>` : ''}
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              ` : ''}
            </div>
          `).join('')}

          <div class="footer">
            Dokumen Rangkuman Materi Pembelajaran PAI SD Kelas 2 - Bab 1 • Dicetak Otomatis
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

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Materi Interaktif • Kelas {grade} Bab {lesson}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Huruf Hijaiyah Bersambung 3 Huruf, Surah An-Nas & Al-Falaq
            </h1>
            <p className="text-xs sm:text-sm text-amber-100 mt-1">
              Jelajahi 15 slide interaktif membaca & menulis hijaiyah 3 huruf, mengartikan Surah An-Nas & Al-Falaq, serta kuis pemahaman.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrintMateri}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Download PDF Materi</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation & Filter Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('all');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Semua Slide ({SLIDES_KELAS2_P1.length})
          </button>
          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('bookmarked');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'bookmarked'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Tersimpan ({bookmarkedSlides.length})</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari kata kunci materi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* MAIN SLIDE STAGE */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden min-h-[480px] flex flex-col justify-between">
        {/* Slide Header */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-5 sm:p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-2xl bg-amber-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md">
              {currentSlide.id}
            </span>
            <div>
              <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                {currentSlide.badge}
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100 mt-0.5">
                {currentSlide.title}
              </h2>
            </div>
          </div>

          <button
            onClick={() => toggleBookmark(currentSlide.id)}
            className={`p-2.5 rounded-2xl transition-all border ${
              bookmarkedSlides.includes(currentSlide.id)
                ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-600'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500'
            }`}
            title="Tandai Slide Ini"
          >
            {bookmarkedSlides.includes(currentSlide.id) ? (
              <BookmarkCheck className="w-5 h-5 fill-amber-500" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Slide Body Content */}
        <div className="p-6 sm:p-8 space-y-6 grow">
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
            {currentSlide.content}
          </p>

          {/* Arabic Text Box if exists */}
          {currentSlide.arabicText && (
            <div className="bg-amber-50/70 dark:bg-amber-950/30 border-r-4 border-amber-600 p-4 sm:p-5 rounded-2xl space-y-2">
              <p className="text-right text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100 leading-loose">
                {currentSlide.arabicText}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                "{currentSlide.translation}"
              </p>
            </div>
          )}

          {/* Bullet Points */}
          {currentSlide.bulletPoints && (
            <div className="space-y-2.5 bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
              {currentSlide.bulletPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          )}

          {/* Key Terms */}
          {currentSlide.keyTerms && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentSlide.keyTerms.map((kt, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-1">
                  <span className="text-xs font-bold text-amber-900 dark:text-amber-300 block">
                    📌 {kt.term}
                  </span>
                  <p className="text-[11px] text-amber-950 dark:text-amber-200 leading-relaxed">
                    {kt.definition}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Table Data */}
          {currentSlide.tableData && (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-xs text-left">
                <thead className="bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 font-bold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3">Satu Kata / Konsep</th>
                    <th className="p-3">Susunan Huruf / Keterangan</th>
                    {currentSlide.tableData[0].col3 && <th className="p-3">Arti / Penerapan</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {currentSlide.tableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-extrabold text-amber-800 dark:text-amber-300 text-sm">{row.col1}</td>
                      <td className="p-3 font-medium text-slate-700 dark:text-slate-300">{row.col2}</td>
                      {row.col3 && <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">{row.col3}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Slide Interactive Quiz */}
          {currentSlide.quiz && (
            <div className="mt-6 p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>Kuis Mini Pemahaman Slide {currentSlide.id}:</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                {currentSlide.quiz.question}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentSlide.quiz.options.map((opt, oIdx) => {
                  const isSelected = userAnswers[currentSlide.id] === oIdx;
                  const isCorrect = currentSlide.quiz?.correct === oIdx;
                  const hasAnswered = userAnswers[currentSlide.id] !== undefined;

                  let btnBg = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-amber-100';
                  if (hasAnswered) {
                    if (isCorrect) btnBg = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                    else if (isSelected) btnBg = 'bg-rose-600 text-white border-rose-600 font-bold';
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={hasAnswered}
                      onClick={() => handleSelectQuizOption(currentSlide.id, oIdx)}
                      className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${btnBg}`}
                    >
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {showExplanation[currentSlide.id] && currentSlide.quiz && (
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <div className="font-bold text-amber-700 dark:text-amber-400">
                    💡 Pembahasan:
                  </div>
                  <p>{currentSlide.quiz.explanation}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Slide Controls Footer */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-4 sm:p-5 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
              currentSlideIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-slate-200 dark:bg-slate-700 text-slate-400'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 shadow-sm border border-slate-200 dark:border-slate-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-xs py-1">
            {SLIDES_KELAS2_P1.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  soundFX.playClick();
                  setCurrentSlideIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all shrink-0 ${
                  currentSlideIndex === idx
                    ? 'w-6 bg-amber-600 dark:bg-amber-400'
                    : bookmarkedSlides.includes(s.id)
                    ? 'bg-amber-400'
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                }`}
                title={`Ke Slide ${s.id}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === SLIDES_KELAS2_P1.length - 1}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
              currentSlideIndex === SLIDES_KELAS2_P1.length - 1
                ? 'opacity-40 cursor-not-allowed bg-slate-200 dark:bg-slate-700 text-slate-400'
                : 'bg-amber-600 hover:bg-amber-700 text-white shadow-md'
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
