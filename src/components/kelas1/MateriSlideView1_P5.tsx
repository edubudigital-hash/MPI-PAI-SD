import React, { useState } from 'react';
import { SLIDES_KELAS1_P5 } from '../../data/kelas1Pembelajaran5Data';
import { soundFX } from '../../utils/audio';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Search, 
  Download, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Quote, 
  Sparkles, 
  Maximize2, 
  Minimize2,
  BookOpen
} from 'lucide-react';

interface MateriSlideView1_P5Props {
  grade?: number;
  lesson?: number;
}

export const MateriSlideView1_P5: React.FC<MateriSlideView1_P5Props> = ({
  grade = 1,
  lesson = 5,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedSlides, setBookmarkedSlides] = useState<number[]>([]);
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = SLIDES_KELAS1_P5[currentSlideIndex];

  const handleNext = () => {
    soundFX.playClick();
    if (currentSlideIndex < SLIDES_KELAS1_P5.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    soundFX.playClick();
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const toggleBookmark = (slideId: number) => {
    soundFX.playClick();
    setBookmarkedSlides((prev) =>
      prev.includes(slideId)
        ? prev.filter((id) => id !== slideId)
        : [...prev, slideId]
    );
  };

  const handleQuizSelect = (slideId: number, optionIdx: number) => {
    soundFX.playClick();
    setSelectedQuizAnswers((prev) => ({
      ...prev,
      [slideId]: optionIdx,
    }));
  };

  const toggleFullscreen = () => {
    soundFX.playClick();
    setIsFullscreen(!isFullscreen);
  };

  const filteredSlides = SLIDES_KELAS1_P5.filter(
    (slide) =>
      slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownloadPDF = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Materi PAI SD Kelas ${grade} - Pembelajaran ${lesson}: Kisah Nabi Adam a.s. dan Meneladani Akhlaknya</title>
          <style>
            @page {
              size: A4;
              margin: 15mm;
            }
            body {
              font-family: 'Helvetica Neue', Arial, sans-serif;
              color: #1e293b;
              line-height: 1.6;
              margin: 0;
              padding: 0;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #059669;
              padding-bottom: 12px;
              margin-bottom: 20px;
            }
            .header h1 {
              margin: 0;
              font-size: 20px;
              color: #065f46;
              text-transform: uppercase;
            }
            .header p {
              margin: 4px 0 0 0;
              font-size: 12px;
              color: #64748b;
            }
            .slide-box {
              page-break-inside: avoid;
              border: 1px solid #cbd5e1;
              border-radius: 8px;
              padding: 16px;
              margin-bottom: 20px;
              background-color: #ffffff;
            }
            .slide-badge {
              display: inline-block;
              background-color: #ecfdf5;
              color: #047857;
              font-size: 11px;
              font-weight: bold;
              padding: 3px 8px;
              border-radius: 4px;
              border: 1px solid #a7f3d0;
              margin-bottom: 8px;
            }
            .slide-title {
              font-size: 16px;
              font-weight: bold;
              color: #0f172a;
              margin-bottom: 10px;
            }
            .slide-content {
              font-size: 13px;
              color: #334155;
              margin-bottom: 12px;
              text-align: justify;
            }
            ul {
              margin: 8px 0;
              padding-left: 20px;
              font-size: 12px;
            }
            li {
              margin-bottom: 4px;
            }
            .key-terms {
              margin-top: 10px;
              background-color: #f8fafc;
              padding: 10px;
              border-radius: 6px;
              border-left: 3px solid #10b981;
            }
            .term-item {
              font-size: 11px;
              margin-bottom: 4px;
            }
            .footer {
              text-align: center;
              font-size: 11px;
              color: #94a3b8;
              margin-top: 30px;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Materi Pembelajaran PAI & Budi Pekerti SD</h1>
            <p>Kelas ${grade} • Pembelajaran ${lesson}: Kisah Nabi Adam a.s. dan Meneladani Akhlaknya</p>
          </div>

          ${SLIDES_KELAS1_P5.map(
            (slide) => `
            <div class="slide-box">
              <span class="slide-badge">Slide ${slide.id}: ${slide.badge}</span>
              <div class="slide-title">${slide.title}</div>
              <div class="slide-content">${slide.content}</div>

              ${slide.bulletPoints ? `
                <ul>
                  ${slide.bulletPoints.map((bp) => `<li>${bp}</li>`).join('')}
                </ul>
              ` : ''}

              ${slide.keyTerms ? `
                <div class="key-terms">
                  <strong style="font-size: 11px; color: #047857;">Glosarium:</strong>
                  ${slide.keyTerms.map((kt) => `<div class="term-item"><strong>• ${kt.term}:</strong> ${kt.definition}</div>`).join('')}
                </div>
              ` : ''}
            </div>
          `
          ).join('')}

          <div class="footer">
            <p>Dokumen Pembelajaran Digital PAI SD Kelas ${grade} - Pembelajaran ${lesson} | Dicetak Otomatis</p>
          </div>

          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
  };

  return (
    <div className={`space-y-6 ${isFullscreen ? 'fixed inset-0 z-50 bg-slate-900 p-6 overflow-y-auto' : ''}`}>
      {/* TOP CONTROL BAR */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-800">
              Materi Slide: Kisah Nabi Adam a.s.
            </h3>
            <p className="text-xs text-slate-500">
              Slide {currentSlideIndex + 1} dari {SLIDES_KELAS1_P5.length}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* SEARCH BAR */}
          <div className="relative flex-1 sm:w-56">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari materi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <button
            onClick={toggleFullscreen}
            className="p-2 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            title="Layar Penuh"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Cetak / Download PDF</span>
          </button>
        </div>
      </div>

      {/* SEARCH OR SLIDE VIEW */}
      {searchQuery ? (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-slate-500">
            Ditemukan {filteredSlides.length} slide matching "{searchQuery}":
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSlides.map((slide) => (
              <div
                key={slide.id}
                onClick={() => {
                  soundFX.playClick();
                  setCurrentSlideIndex(slide.id - 1);
                  setSearchQuery('');
                }}
                className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition cursor-pointer space-y-2"
              >
                <span className="text-[10px] font-extrabold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  Slide {slide.id}: {slide.badge}
                </span>
                <h4 className="text-sm font-bold text-slate-800">{slide.title}</h4>
                <p className="text-xs text-slate-600 line-clamp-3">{slide.content}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden transition-all duration-300">
          {/* SLIDE HEADER */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white flex items-center justify-between border-b border-emerald-600/50">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase px-3 py-1 bg-white/20 text-emerald-100 rounded-full border border-white/30 backdrop-blur-xs">
                Slide {currentSlide.id} / {SLIDES_KELAS1_P5.length} • {currentSlide.badge}
              </span>
              <h2 className="text-xl md:text-2xl font-black pt-2 leading-snug">
                {currentSlide.title}
              </h2>
            </div>

            <button
              onClick={() => toggleBookmark(currentSlide.id)}
              className={`p-3 rounded-2xl transition border ${
                bookmarkedSlides.includes(currentSlide.id)
                  ? 'bg-amber-400 text-amber-950 border-amber-300 shadow-md'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
              title="Tandai Slide Ini"
            >
              <Bookmark className="w-5 h-5 fill-current" />
            </button>
          </div>

          {/* SLIDE CONTENT */}
          <div className="p-6 md:p-10 space-y-6">
            <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">
              {currentSlide.content}
            </p>

            {/* BULLET POINTS */}
            {currentSlide.bulletPoints && (
              <div className="bg-emerald-50/60 p-5 md:p-6 rounded-2xl border border-emerald-100 space-y-3">
                <h4 className="text-xs font-black uppercase text-emerald-800 tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Poin Penting Pembelajaran:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700 font-medium leading-relaxed">
                  {currentSlide.bulletPoints.map((bp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* QUOTE */}
            {currentSlide.quote && (
              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 space-y-2 relative">
                <Quote className="w-8 h-8 text-amber-300 absolute top-3 right-4 opacity-40" />
                <p className="text-sm font-serif italic text-amber-950 font-semibold">
                  "{currentSlide.quote.text}"
                </p>
                <div className="text-xs font-bold text-amber-800 text-right">
                  — {currentSlide.quote.source}
                </div>
              </div>
            )}

            {/* KEY TERMS */}
            {currentSlide.keyTerms && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {currentSlide.keyTerms.map((term, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-xs font-black text-emerald-700 uppercase">
                      {term.term}
                    </span>
                    <p className="text-xs text-slate-600">{term.definition}</p>
                  </div>
                ))}
              </div>
            )}

            {/* QUIZ */}
            {currentSlide.quiz && (
              <div className="p-6 bg-emerald-900 text-white rounded-2xl space-y-4 border border-emerald-700 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wide">
                  <HelpCircle className="w-4 h-4" /> Kuis Cepat Pemahaman
                </div>
                <h4 className="text-base font-bold">{currentSlide.quiz.question}</h4>
                <div className="space-y-2">
                  {currentSlide.quiz.options.map((opt, optIdx) => {
                    const selected = selectedQuizAnswers[currentSlide.id] === optIdx;
                    const isCorrect = optIdx === currentSlide.quiz?.correctIndex;
                    const hasAnswered = selectedQuizAnswers[currentSlide.id] !== undefined;

                    let btnStyle = 'bg-white/10 border-white/20 hover:bg-white/20 text-white';
                    if (hasAnswered) {
                      if (selected && isCorrect) btnStyle = 'bg-emerald-500 text-white border-emerald-400 font-bold';
                      else if (selected && !isCorrect) btnStyle = 'bg-rose-500 text-white border-rose-400';
                      else if (isCorrect) btnStyle = 'bg-emerald-500/80 text-white border-emerald-400';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleQuizSelect(currentSlide.id, optIdx)}
                        className={`w-full p-3 text-left rounded-xl text-xs md:text-sm border transition flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {hasAnswered && selected && isCorrect && <CheckCircle2 className="w-4 h-4 text-white" />}
                        {hasAnswered && selected && !isCorrect && <XCircle className="w-4 h-4 text-white" />}
                      </button>
                    );
                  })}
                </div>

                {selectedQuizAnswers[currentSlide.id] !== undefined && (
                  <div className="p-3 bg-white/10 rounded-xl text-xs text-emerald-200 border border-white/10">
                    <span className="font-bold text-amber-300">Penjelasan:</span> {currentSlide.quiz.explanation}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* FOOTER NAV */}
          <div className="p-5 md:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-bold transition disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <div className="text-xs font-extrabold text-slate-500 hidden sm:block">
              {currentSlideIndex + 1} / {SLIDES_KELAS1_P5.length}
            </div>

            <button
              onClick={handleNext}
              disabled={currentSlideIndex === SLIDES_KELAS1_P5.length - 1}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl text-xs font-bold transition disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
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
