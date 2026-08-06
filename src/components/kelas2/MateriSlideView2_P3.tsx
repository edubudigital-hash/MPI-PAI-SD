import React, { useState } from 'react';
import { SLIDES_KELAS2_P3 } from '../../data/kelas2Pembelajaran3Data';
import { soundFX } from '../../utils/audio';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Printer, 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Maximize2, 
  Minimize2,
  ListCheck,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';

interface MateriSlideView2_P3Props {
  grade: number;
  lesson: number;
}

export const MateriSlideView2_P3: React.FC<MateriSlideView2_P3Props> = ({ grade, lesson }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedSlides, setBookmarkedSlides] = useState<number[]>([]);
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = SLIDES_KELAS2_P3[currentSlideIndex];

  // Filtering slides based on search
  const filteredSlides = SLIDES_KELAS2_P3.filter(slide => 
    slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    slide.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    slide.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNextSlide = () => {
    if (currentSlideIndex < SLIDES_KELAS2_P3.length - 1) {
      soundFX.playClick();
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const handlePrevSlide = () => {
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

  const handleQuizAnswer = (slideId: number, optionIdx: number) => {
    soundFX.playClick();
    setSelectedQuizAnswers(prev => ({ ...prev, [slideId]: optionIdx }));
  };

  // PDF Print & Download handler
  const handlePrintMateri = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Materi PAI SD Kelas ${grade} Bab ${lesson}: Akhlak kepada Diri (Hidup Bersih & Sehat)</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 40px;
              color: #0f172a;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #10b981;
              padding-bottom: 16px;
              margin-bottom: 24px;
            }
            .header h1 {
              margin: 0;
              color: #059669;
              font-size: 22px;
              font-weight: 800;
            }
            .header p {
              margin: 6px 0 0;
              color: #475569;
              font-size: 13px;
            }
            .slide-card {
              page-break-inside: avoid;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              padding: 18px 22px;
              margin-bottom: 20px;
              background-color: #ffffff;
            }
            .slide-badge {
              display: inline-block;
              background-color: #ecfdf5;
              color: #047857;
              font-size: 11px;
              font-weight: 700;
              padding: 3px 10px;
              border-radius: 6px;
              margin-bottom: 8px;
            }
            .slide-title {
              font-size: 16px;
              font-weight: 800;
              color: #1e293b;
              margin: 4px 0 10px;
            }
            .slide-content {
              font-size: 12px;
              color: #334155;
              margin-bottom: 12px;
            }
            ul {
              margin: 6px 0;
              padding-left: 20px;
              font-size: 12px;
            }
            li {
              margin-bottom: 4px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 10px;
              font-size: 11px;
            }
            th, td {
              border: 1px solid #cbd5e1;
              padding: 8px 12px;
              text-align: left;
            }
            th {
              background-color: #f1f5f9;
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
          </style>
        </head>
        <body>
          <div class="header">
            <h1>MODUL AJAR & MATERI SLIDE PAI SD KELAS ${grade} BAB ${lesson}</h1>
            <p>Menerapkan Akhlak kepada Diri melalui Pola Hidup Bersih dan Pola Hidup Sehat</p>
          </div>

          ${SLIDES_KELAS2_P3.map((slide, idx) => `
            <div class="slide-card">
              <span class="slide-badge">Slide ${idx + 1} • ${slide.badge}</span>
              <div class="slide-title">${slide.title}</div>
              <div class="slide-content">${slide.content}</div>

              ${slide.bulletPoints ? `
                <ul>
                  ${slide.bulletPoints.map(pt => `<li>${pt}</li>`).join('')}
                </ul>
              ` : ''}

              ${slide.keyTerms ? `
                <div style="margin-top: 10px; font-size: 11px;">
                  <strong>Istilah Kunci:</strong>
                  <ul>
                    ${slide.keyTerms.map(kt => `<li><strong>${kt.term}:</strong> ${kt.definition}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}

              ${slide.tableData ? `
                <table>
                  <thead>
                    <tr>
                      <th>Kategori / Nama</th>
                      <th>Keterangan / Penerapan</th>
                      ${slide.tableData[0]?.col3 ? `<th>Tujuan / Catatan</th>` : ''}
                    </tr>
                  </thead>
                  <tbody>
                    ${slide.tableData.map(row => `
                      <tr>
                        <td><strong>${row.col1}</strong></td>
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
            Dokumen Resmi Materi Pembelajaran PAI & BP SD Kelas ${grade} Bab ${lesson} • Kurikulum Merdeka
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
    <div className={`space-y-6 ${isFullscreen ? 'fixed inset-0 z-50 bg-slate-900 p-6 overflow-y-auto text-white' : ''}`}>
      {/* Top Bar Controls */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 font-bold shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-800 leading-tight">
              Materi Slide Interaktif: Pola Hidup Bersih & Sehat
            </h2>
            <p className="text-xs text-slate-500">
              PAI Kelas {grade} • Bab {lesson} ({SLIDES_KELAS2_P3.length} Slide Lengkap)
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-48">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* Download PDF Button */}
          <button
            onClick={handlePrintMateri}
            className="px-3 py-2 text-xs font-semibold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all flex items-center gap-1.5 shadow-sm"
            title="Download PDF Materi"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Cetak / PDF</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl border border-slate-200 transition-all"
            title={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative overflow-hidden">
        {/* Slide Header Info */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
              Slide {currentSlide.id} dari {SLIDES_KELAS2_P3.length}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
              {currentSlide.badge}
            </span>
          </div>

          <button
            onClick={() => toggleBookmark(currentSlide.id)}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
              bookmarkedSlides.includes(currentSlide.id)
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {bookmarkedSlides.includes(currentSlide.id) ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-amber-600" />
                <span>Tersimpan</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4 text-slate-400" />
                <span>Tandai Slide</span>
              </>
            )}
          </button>
        </div>

        {/* Slide Title */}
        <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-4 leading-snug">
          {currentSlide.title}
        </h3>

        {/* Main Content Paragraph */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-medium">
          {currentSlide.content}
        </p>

        {/* Bullet Points Section */}
        {currentSlide.bulletPoints && (
          <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100">
            <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ListCheck className="w-4 h-4 text-emerald-600" />
              Poin Penting Pembelajaran:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {currentSlide.bulletPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Terms Cards */}
        {currentSlide.keyTerms && (
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentSlide.keyTerms.map((kt, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-emerald-700 mb-1">{kt.term}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{kt.definition}</div>
              </div>
            ))}
          </div>
        )}

        {/* Table Data Render */}
        {currentSlide.tableData && (
          <div className="mb-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Kategori</th>
                  <th className="p-3">Keterangan / Contoh</th>
                  {currentSlide.tableData[0]?.col3 && <th className="p-3">Catatan</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {currentSlide.tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80">
                    <td className="p-3 font-semibold text-slate-800">{row.col1}</td>
                    <td className="p-3 leading-relaxed">{row.col2}</td>
                    {row.col3 && <td className="p-3">{row.col3}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Interactive Mini Quiz per Slide */}
        {currentSlide.quiz && (
          <div className="mt-8 p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
                Kuis Cepat Pemahaman Slide {currentSlide.id}:
              </span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-800 mb-3">
              {currentSlide.quiz.question}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              {currentSlide.quiz.options.map((opt, oIdx) => {
                const isSelected = selectedQuizAnswers[currentSlide.id] === oIdx;
                const isCorrect = currentSlide.quiz?.correct === oIdx;

                let btnStyle = 'bg-white text-slate-700 border-slate-200 hover:bg-indigo-50';
                if (isSelected) {
                  btnStyle = isCorrect
                    ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                    : 'bg-rose-600 text-white border-rose-600 font-bold';
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleQuizAnswer(currentSlide.id, oIdx)}
                    className={`p-3 text-left text-xs rounded-xl border transition-all ${btnStyle}`}
                  >
                    <span className="font-bold mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {selectedQuizAnswers[currentSlide.id] !== undefined && (
              <div className={`p-3 rounded-xl text-xs font-medium flex items-start gap-2 ${
                selectedQuizAnswers[currentSlide.id] === currentSlide.quiz.correct
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                  : 'bg-rose-100 text-rose-900 border border-rose-200'
              }`}>
                {selectedQuizAnswers[currentSlide.id] === currentSlide.quiz.correct ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <span className="font-bold block">
                    {selectedQuizAnswers[currentSlide.id] === currentSlide.quiz.correct ? 'Benar Sekali!' : 'Belum Tepat!'}
                  </span>
                  {currentSlide.quiz.explanation}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Slide Navigation Buttons */}
        <div className="mt-8 flex items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <button
            onClick={handlePrevSlide}
            disabled={currentSlideIndex === 0}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              currentSlideIndex === 0
                ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          <div className="text-xs font-semibold text-slate-400 hidden sm:block">
            Gunakan tombol panah untuk navigasi slide
          </div>

          <button
            onClick={handleNextSlide}
            disabled={currentSlideIndex === SLIDES_KELAS2_P3.length - 1}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              currentSlideIndex === SLIDES_KELAS2_P3.length - 1
                ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
            }`}
          >
            <span>Selanjutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Slide Thumbnails Scrollbar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
        <div className="text-xs font-bold text-slate-700 mb-3 flex items-center justify-between">
          <span>Daftar Slide Pembelajaran ({SLIDES_KELAS2_P3.length})</span>
          {bookmarkedSlides.length > 0 && (
            <span className="text-[11px] text-amber-600 font-semibold">
              ⭐ {bookmarkedSlides.length} Slide Ditandai
            </span>
          )}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {filteredSlides.map((slide) => {
            const isCurrent = slide.id - 1 === currentSlideIndex;
            const isBookmarked = bookmarkedSlides.includes(slide.id);

            return (
              <button
                key={slide.id}
                onClick={() => {
                  soundFX.playClick();
                  setCurrentSlideIndex(slide.id - 1);
                }}
                className={`flex-none w-28 p-2.5 rounded-xl text-left border text-xs transition-all relative ${
                  isCurrent
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm font-bold'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {isBookmarked && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
                )}
                <div className="text-[10px] opacity-80 mb-0.5">Slide {slide.id}</div>
                <div className="line-clamp-2 leading-tight font-medium">{slide.title}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
