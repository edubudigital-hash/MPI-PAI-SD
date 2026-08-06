import React, { useState } from 'react';
import { SLIDES_KELAS2_P2, SlideData } from '../../data/kelas2Pembelajaran2Data';
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

interface MateriSlideView2_P2Props {
  grade: number;
  lesson: number;
}

export const MateriSlideView2_P2: React.FC<MateriSlideView2_P2Props> = ({ grade, lesson }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [bookmarkedSlides, setBookmarkedSlides] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'bookmarked'>('all');

  const currentSlide: SlideData = SLIDES_KELAS2_P2[currentSlideIndex];

  // Filtering slides for bookmark / search
  const filteredSlides = SLIDES_KELAS2_P2.filter(slide => {
    const matchesSearch = slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.badge.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBookmark = activeTab === 'all' || bookmarkedSlides.includes(slide.id);
    return matchesSearch && matchesBookmark;
  });

  const handleNext = () => {
    if (currentSlideIndex < SLIDES_KELAS2_P2.length - 1) {
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
          <title>Materi PAI SD Kelas ${grade} Bab ${lesson}: Mengenal & Meneladani Asmaul Husna (Ar-Rahman, Ar-Rahim, As-Salam, Al-Mu'min)</title>
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
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
              background-color: #ffffff;
            }
            .badge {
              display: inline-block;
              background-color: #fef3c7;
              color: #b45309;
              font-size: 11px;
              font-weight: 700;
              padding: 4px 10px;
              border-radius: 20px;
              margin-bottom: 10px;
            }
            .slide-title {
              font-size: 16px;
              font-weight: 700;
              color: #1e293b;
              margin-bottom: 10px;
            }
            .arabic-box {
              font-family: 'Amiri', 'Traditional Arabic', serif;
              font-size: 22px;
              direction: rtl;
              text-align: right;
              background-color: #fffbeb;
              padding: 12px;
              border-radius: 8px;
              border-right: 4px solid #d97706;
              margin: 12px 0;
            }
            .translation {
              font-style: italic;
              color: #475569;
              font-size: 13px;
              margin-bottom: 12px;
            }
            ul {
              margin: 8px 0;
              padding-left: 20px;
            }
            li {
              margin-bottom: 4px;
              font-size: 13px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              font-size: 11px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 15px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>MODUL AJAR DIGITAL PAI - KELAS ${grade} LESSON ${lesson}</h1>
            <p>Mengenal dan Meneladani Asmaul Husna: Ar-Raḥmān, Ar-Raḥīm, As-Salām, dan Al-Mu'min</p>
          </div>
          ${SLIDES_KELAS2_P2.map((slide, idx) => `
            <div class="slide-card">
              <span class="badge">Slide ${idx + 1}: ${slide.badge}</span>
              <div class="slide-title">${slide.title}</div>
              <p style="font-size: 13px; color: #334155;">${slide.content}</p>
              ${slide.arabicText ? `<div class="arabic-box">${slide.arabicText}</div>` : ''}
              ${slide.translation ? `<div class="translation">" ${slide.translation} "</div>` : ''}
              ${slide.bulletPoints ? `
                <ul>
                  ${slide.bulletPoints.map(bp => `<li>${bp}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
          <div class="footer">
            Modul Pembelajaran Interaktif PAI SD Kelas ${grade} - Dokumen Resmi Pembelajaran
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  return (
    <div className="space-y-6">
      {/* Top Bar Navigation & Actions */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/80 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 font-bold shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800 leading-tight">
              Materi Interaktif: Asmaul Husna
            </h2>
            <p className="text-xs text-slate-500">
              Kelas {grade} • Pembelajaran {lesson} (Ar-Raḥmān, Ar-Raḥīm, As-Salām, Al-Mu'min)
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          {/* Search Box */}
          <div className="relative flex-1 md:w-48">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari slide..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>

          {/* Filter Tab Bookmark */}
          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab(activeTab === 'all' ? 'bookmarked' : 'all');
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5 ${
              activeTab === 'bookmarked'
                ? 'bg-amber-500 text-white border-amber-500'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Tersimpan ({bookmarkedSlides.length})</span>
          </button>

          {/* Download PDF Button */}
          <button
            onClick={handlePrintMateri}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Download Materi PDF</span>
          </button>
        </div>
      </div>

      {/* Main Slide Viewer Container */}
      {filteredSlides.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
          <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-600 font-medium text-sm">Tidak ada slide yang sesuai dengan pencarian atau filter tersimpan.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveTab('all');
            }}
            className="mt-3 text-xs text-amber-600 hover:underline font-semibold"
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md relative overflow-hidden">
          {/* Header Card Slide */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-100">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-white shadow-sm flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {currentSlide.badge}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                Slide {currentSlideIndex + 1} dari {SLIDES_KELAS2_P2.length}
              </span>
            </div>

            <button
              onClick={() => toggleBookmark(currentSlide.id)}
              className={`p-2 rounded-xl border transition-all ${
                bookmarkedSlides.includes(currentSlide.id)
                  ? 'bg-amber-50 border-amber-300 text-amber-600'
                  : 'bg-white border-slate-200 text-slate-400 hover:text-amber-500'
              }`}
              title="Tandai Slide Ini"
            >
              {bookmarkedSlides.includes(currentSlide.id) ? (
                <BookmarkCheck className="w-5 h-5 text-amber-600" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Title Slide */}
          <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-4 tracking-tight">
            {currentSlide.title}
          </h3>

          {/* Content Paragraph */}
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {currentSlide.content}
          </p>

          {/* Arabic & Translation Block */}
          {currentSlide.arabicText && (
            <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-amber-100/80 to-amber-50 border-r-4 border-amber-500 shadow-inner">
              <p className="text-2xl sm:text-3xl font-serif text-amber-950 text-right leading-loose mb-3 font-semibold">
                {currentSlide.arabicText}
              </p>
              {currentSlide.translation && (
                <p className="text-xs sm:text-sm text-slate-600 italic border-t border-amber-200/60 pt-3">
                  " {currentSlide.translation} "
                </p>
              )}
            </div>
          )}

          {/* Bullet Points */}
          {currentSlide.bulletPoints && currentSlide.bulletPoints.length > 0 && (
            <div className="my-6 bg-white/80 rounded-2xl p-5 border border-amber-100 shadow-sm">
              <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">Poin Penting:</h4>
              <ul className="space-y-2.5">
                {currentSlide.bulletPoints.map((bp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Terms Grid */}
          {currentSlide.keyTerms && currentSlide.keyTerms.length > 0 && (
            <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentSlide.keyTerms.map((kt, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <span className="text-xs font-bold text-amber-700 block mb-1">{kt.term}</span>
                  <p className="text-xs text-slate-600 leading-snug">{kt.definition}</p>
                </div>
              ))}
            </div>
          )}

          {/* Table Data */}
          {currentSlide.tableData && currentSlide.tableData.length > 0 && (
            <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-amber-100/70 text-amber-900 border-b border-amber-200">
                    <th className="p-3 font-bold">Kategori / Nama</th>
                    <th className="p-3 font-bold">Makna / Rincian</th>
                    {currentSlide.tableData[0].col3 && <th className="p-3 font-bold">Pengamalan</th>}
                  </tr>
                </thead>
                <tbody>
                  {currentSlide.tableData.map((td, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/80">
                      <td className="p-3 font-semibold text-slate-800">{td.col1}</td>
                      <td className="p-3 text-slate-600">{td.col2}</td>
                      {td.col3 && <td className="p-3 text-slate-600">{td.col3}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Interactive Mini Quiz per Slide */}
          {currentSlide.quiz && (
            <div className="mt-8 pt-6 border-t border-amber-200/70">
              <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs sm:text-sm mb-3">
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                  <span>Kuis Pemahaman Cepat Slide Ini:</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-3">
                  {currentSlide.quiz.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                  {currentSlide.quiz.options.map((option, optIdx) => {
                    const isSelected = userAnswers[currentSlide.id] === optIdx;
                    const isCorrect = currentSlide.quiz?.correct === optIdx;
                    const hasAnswered = userAnswers[currentSlide.id] !== undefined;

                    let btnClass = 'bg-white border-slate-200 hover:bg-amber-50 text-slate-700';
                    if (hasAnswered) {
                      if (isSelected) {
                        btnClass = isCorrect
                          ? 'bg-emerald-500 text-white border-emerald-500 font-bold'
                          : 'bg-rose-500 text-white border-rose-500 font-bold';
                      } else if (isCorrect) {
                        btnClass = 'bg-emerald-100 border-emerald-300 text-emerald-800 font-bold';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectQuizOption(currentSlide.id, optIdx)}
                        className={`p-3 text-left text-xs rounded-xl border transition-all ${btnClass}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showExplanation[currentSlide.id] && (
                  <div className="p-3 rounded-xl bg-white border border-amber-200 text-xs text-amber-900 leading-relaxed">
                    <span className="font-bold block mb-0.5">Penjelasan:</span>
                    {currentSlide.quiz.explanation}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Controls Bottom */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 border transition-all ${
                currentSlideIndex === 0
                  ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-amber-50 hover:border-amber-300 shadow-xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {/* Slide Indicators */}
            <div className="hidden sm:flex items-center gap-1 overflow-x-auto max-w-xs py-1">
              {SLIDES_KELAS2_P2.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    soundFX.playClick();
                    setCurrentSlideIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentSlideIndex
                      ? 'bg-amber-500 w-6'
                      : bookmarkedSlides.includes(s.id)
                      ? 'bg-amber-300'
                      : 'bg-slate-200'
                  }`}
                  title={`Ke Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentSlideIndex === SLIDES_KELAS2_P2.length - 1}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 border transition-all ${
                currentSlideIndex === SLIDES_KELAS2_P2.length - 1
                  ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
                  : 'bg-amber-500 text-white border-amber-500 hover:bg-amber-600 shadow-md'
              }`}
            >
              <span>Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
