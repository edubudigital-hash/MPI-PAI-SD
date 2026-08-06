import React, { useState } from 'react';
import { SLIDES_KELAS2_P4, GERAKAN_SHOLAT_GALLERY, GerakanSholatItem } from '../../data/kelas2Pembelajaran4Data';
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
  Clock,
  HeartHandshake,
  Image as ImageIcon,
  Layers,
  X,
  Volume2
} from 'lucide-react';

interface MateriSlideView2_P4Props {
  grade: number;
  lesson: number;
}

export const MateriSlideView2_P4: React.FC<MateriSlideView2_P4Props> = ({ grade, lesson }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedSlides, setBookmarkedSlides] = useState<number[]>([]);
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGerakanGallery, setShowGerakanGallery] = useState(false);
  const [activeGerakanStep, setActiveGerakanStep] = useState(0);
  const [previewImageModal, setPreviewImageModal] = useState<string | null>(null);

  const currentSlide = SLIDES_KELAS2_P4[currentSlideIndex];

  // Filtering slides based on search
  const filteredSlides = SLIDES_KELAS2_P4.filter(slide => 
    slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    slide.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    slide.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNextSlide = () => {
    if (currentSlideIndex < SLIDES_KELAS2_P4.length - 1) {
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
          <title>Materi PAI SD Kelas ${grade} Bab ${lesson}: Ketentuan & Praktik Shalat Fardu</title>
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
              margin: 4px 0 0;
              color: #64748b;
              font-size: 14px;
            }
            .slide-card {
              page-break-inside: avoid;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
              background-color: #f8fafc;
            }
            .badge {
              display: inline-block;
              background-color: #d1fae5;
              color: #047857;
              font-size: 11px;
              font-weight: 700;
              padding: 4px 10px;
              border-radius: 20px;
              margin-bottom: 8px;
            }
            .slide-title {
              font-size: 16px;
              font-weight: 700;
              color: #065f46;
              margin-top: 4px;
              margin-bottom: 10px;
            }
            .slide-content {
              font-size: 13px;
              color: #334155;
              margin-bottom: 12px;
              text-align: justify;
            }
            .slide-img {
              max-width: 100%;
              max-height: 250px;
              object-fit: cover;
              border-radius: 10px;
              border: 1px solid #cbd5e1;
              margin: 10px 0;
            }
            .img-caption {
              font-size: 11px;
              color: #047857;
              font-style: italic;
              text-align: center;
              margin-bottom: 10px;
            }
            ul {
              margin: 8px 0;
              padding-left: 20px;
            }
            li {
              font-size: 12px;
              color: #1e293b;
              margin-bottom: 4px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 10px;
              font-size: 12px;
            }
            th, td {
              border: 1px solid #cbd5e1;
              padding: 8px 10px;
              text-align: left;
            }
            th {
              background-color: #e2e8f0;
              color: #0f172a;
              font-weight: 700;
            }
            .key-term {
              background-color: #ffffff;
              border-left: 3px solid #10b981;
              padding: 8px 12px;
              margin-bottom: 6px;
              border-radius: 0 6px 6px 0;
            }
            .gallery-section {
              page-break-before: always;
              margin-top: 30px;
            }
            .gallery-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 15px;
            }
            .gallery-card {
              border: 1px solid #e2e8f0;
              padding: 12px;
              border-radius: 10px;
              background: #fff;
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
            <h1>MODUL MATERI PEMBELAJARAN PAI & BP</h1>
            <p>Kelas ${grade} - Pembelajaran ${lesson}: Menerapkan Ketentuan-Ketentuan Shalat Fardu serta Mempraktikkan Bacaan dan Gerakan Shalat</p>
          </div>

          ${SLIDES_KELAS2_P4.map(slide => `
            <div class="slide-card">
              <span class="badge">Slide ${slide.id}: ${slide.badge}</span>
              <div class="slide-title">${slide.title}</div>
              <div class="slide-content">${slide.content}</div>

              ${slide.imageUrl ? `
                <div style="text-align: center;">
                  <img src="${slide.imageUrl}" class="slide-img" alt="${slide.imageCaption || 'Gambar Gerakan Sholat'}" />
                  <div class="img-caption">${slide.imageCaption || ''}</div>
                </div>
              ` : ''}

              ${slide.bulletPoints ? `
                <ul>
                  ${slide.bulletPoints.map(bp => `<li>${bp}</li>`).join('')}
                </ul>
              ` : ''}

              ${slide.keyTerms ? `
                <div style="margin-top: 10px;">
                  ${slide.keyTerms.map(kt => `
                    <div class="key-term">
                      <strong>${kt.term}:</strong> ${kt.definition}
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              ${slide.tableData ? `
                <table>
                  <thead>
                    <tr>
                      <th>Nama / Pokok</th>
                      <th>Detail / Jumlah Rakaat</th>
                      ${slide.tableData[0]?.col3 ? '<th>Waktu / Keterangan</th>' : ''}
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

          <div class="gallery-section">
            <h2 style="color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 6px;">
              Panduan Visual 10 Urutan Gerakan Shalat Fardu
            </h2>
            <div class="gallery-grid">
              ${GERAKAN_SHOLAT_GALLERY.map(item => `
                <div class="gallery-card">
                  <div style="font-weight: 800; color: #059669;">Step ${item.step}: ${item.title} (${item.arabicName})</div>
                  <img src="${item.imageUrl}" style="width: 100%; height: 140px; object-fit: cover; border-radius: 8px; margin: 8px 0;" />
                  <p style="font-size: 11px; margin: 0; color: #334155;">${item.description}</p>
                  ${item.arabicReading ? `<div style="font-size: 14px; font-weight: bold; text-align: right; color: #065f46; margin-top: 4px;">${item.arabicReading}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>

          <div class="footer">
            <p>Dokumen Pembelajaran Digital PAI SD Kelas ${grade} - Pembelajaran ${lesson} | Dicetak Otomatis</p>
          </div>

          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className={`space-y-6 ${isFullscreen ? 'fixed inset-0 z-50 bg-slate-900 p-6 overflow-y-auto text-white' : ''}`}>
      {/* HEADER CONTROLS */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-emerald-100">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-100 text-emerald-700 rounded-full">
                Kelas {grade} • Bab {lesson}
              </span>
              <span className="text-xs text-slate-500 font-medium">15 Slide Interaktif</span>
            </div>
            <h2 className="text-lg font-extrabold text-slate-800">
              Ketentuan & Praktik Shalat Fardu
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* GERAKAN SHOLAT GALLERY TOGGLE */}
          <button
            onClick={() => {
              soundFX.playClick();
              setShowGerakanGallery(!showGerakanGallery);
            }}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-sm border ${
              showGerakanGallery
                ? 'bg-amber-500 text-white border-amber-600'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{showGerakanGallery ? 'Kembali ke Slide' : 'Panduan Visual Gerakan Sholat'}</span>
          </button>

          {/* SEARCH BAR */}
          <div className="relative flex-1 sm:w-56">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari materi / gerakan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          {/* DOWNLOAD / PRINT BUTTON */}
          <button
            onClick={handlePrintMateri}
            className="flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
            title="Download / Cetak Modul Materi PDF"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Download Materi PDF</span>
          </button>

          {/* FULLSCREEN TOGGLE */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs transition"
            title={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* SHOW VISUAL GALLERY OF PRAYER MOVEMENTS */}
      {showGerakanGallery ? (
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-emerald-100 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                Panduan Praktik Kelas 2
              </span>
              <h3 className="text-xl font-black text-slate-800 mt-1">
                Panduan Visual & Urutan Gerakan Shalat Fardu
              </h3>
              <p className="text-xs text-slate-500">
                Klik urutan gerakan di bawah ini untuk mempelajari gambar, bacaan, dan tata cara pelaksanaannya!
              </p>
            </div>
            <button
              onClick={() => setShowGerakanGallery(false)}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* STEP SELECTOR CAROUSEL */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {GERAKAN_SHOLAT_GALLERY.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  soundFX.playClick();
                  setActiveGerakanStep(idx);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition flex items-center gap-2 shrink-0 ${
                  activeGerakanStep === idx
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center ${
                  activeGerakanStep === idx ? 'bg-white text-emerald-700' : 'bg-slate-200 text-slate-700'
                }`}>
                  {item.step}
                </span>
                <span>{item.title}</span>
              </button>
            ))}
          </div>

          {/* ACTIVE STEP CARD */}
          {(() => {
            const activeItem: GerakanSholatItem = GERAKAN_SHOLAT_GALLERY[activeGerakanStep];
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80">
                {/* IMAGE COL */}
                <div className="space-y-3">
                  <div className="relative group overflow-hidden rounded-2xl border-2 border-emerald-200 bg-white shadow-xs">
                    <img
                      src={activeItem.imageUrl}
                      alt={activeItem.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-emerald-300" /> Gerakan Ke-{activeItem.step}
                    </div>
                    <button
                      onClick={() => setPreviewImageModal(activeItem.imageUrl)}
                      className="absolute bottom-3 right-3 p-2 bg-black/60 hover:bg-black/80 text-white rounded-xl backdrop-blur-xs transition"
                      title="Perbesar Gambar"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-100 text-xs text-emerald-900 font-medium">
                    <span className="font-extrabold">Tips Praktik:</span> {activeItem.tips}
                  </div>
                </div>

                {/* DETAILS COL */}
                <div className="space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-black text-slate-800">
                        {activeItem.step}. {activeItem.title}
                      </h4>
                      <span className="text-xl font-bold text-emerald-700 font-serif">
                        {activeItem.arabicName}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                      {activeItem.description}
                    </p>

                    {activeItem.arabicReading && (
                      <div className="p-4 bg-emerald-900 text-emerald-50 rounded-2xl space-y-2 border border-emerald-700 shadow-inner">
                        <div className="flex items-center justify-between text-xs font-bold text-emerald-300">
                          <span className="flex items-center gap-1">
                            <Volume2 className="w-4 h-4" /> Bacaan Gerakan
                          </span>
                          <span>Lafal Arab</span>
                        </div>
                        <div className="text-xl font-bold text-right font-serif tracking-wide leading-loose text-amber-200">
                          {activeItem.arabicReading}
                        </div>
                        {activeItem.latinReading && (
                          <div className="text-xs italic text-emerald-200 border-t border-emerald-800/80 pt-2">
                            "{activeItem.latinReading}"
                          </div>
                        )}
                        {activeItem.meaning && (
                          <div className="text-[11px] text-emerald-300 font-sans">
                            <span className="font-bold text-white">Artinya:</span> {activeItem.meaning}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        setActiveGerakanStep(prev => Math.max(0, prev - 1));
                      }}
                      disabled={activeGerakanStep === 0}
                      className="px-4 py-2 bg-slate-200 text-slate-700 rounded-xl text-xs font-bold disabled:opacity-40"
                    >
                      ← Gerakan Sebelumnya
                    </button>
                    <span className="text-xs font-bold text-slate-400">
                      {activeGerakanStep + 1} dari {GERAKAN_SHOLAT_GALLERY.length}
                    </span>
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        setActiveGerakanStep(prev => Math.min(GERAKAN_SHOLAT_GALLERY.length - 1, prev + 1));
                      }}
                      disabled={activeGerakanStep === GERAKAN_SHOLAT_GALLERY.length - 1}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold disabled:opacity-40"
                    >
                      Gerakan Selanjutnya →
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      ) : searchQuery ? (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-slate-500">
            Ditemukan {filteredSlides.length} slide matching "{searchQuery}":
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSlides.map((slide) => (
              <div 
                key={slide.id}
                onClick={() => {
                  setCurrentSlideIndex(slide.id - 1);
                  setSearchQuery('');
                }}
                className="p-4 bg-white border border-emerald-100 hover:border-emerald-400 rounded-2xl cursor-pointer transition shadow-xs hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md">
                    Slide {slide.id}: {slide.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">{slide.title}</h4>
                <p className="text-xs text-slate-600 line-clamp-2">{slide.content}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* MAIN INTERACTIVE SLIDE STAGE */
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden flex flex-col min-h-[500px]">
          {/* SLIDE BAR INDICATOR */}
          <div className="bg-slate-50 border-b border-slate-100 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                {currentSlide.badge}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleBookmark(currentSlide.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition ${
                  bookmarkedSlides.includes(currentSlide.id)
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-slate-200/70 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {bookmarkedSlides.includes(currentSlide.id) ? (
                  <>
                    <BookmarkCheck className="w-3.5 h-3.5" /> Tandai Terpasang
                  </>
                ) : (
                  <>
                    <Bookmark className="w-3.5 h-3.5" /> Tandai Slide
                  </>
                )}
              </button>

              <span className="text-xs font-bold text-slate-400">
                {currentSlideIndex + 1} / {SLIDES_KELAS2_P4.length}
              </span>
            </div>
          </div>

          {/* SLIDE CONTENT AREA */}
          <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-black text-slate-800 leading-snug">
                {currentSlide.title}
              </h3>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">
                {currentSlide.content}
              </p>

              {/* RENDER SLIDE IMAGE IF AVAILABLE */}
              {currentSlide.imageUrl && (
                <div className="my-4 p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-2">
                  <div className="relative group overflow-hidden rounded-xl border border-emerald-200">
                    <img 
                      src={currentSlide.imageUrl} 
                      alt={currentSlide.imageCaption || 'Gambar Ilustrasi Gerakan Salat'}
                      className="w-full max-h-[300px] object-cover group-hover:scale-102 transition duration-300 cursor-pointer"
                      onClick={() => setPreviewImageModal(currentSlide.imageUrl || null)}
                    />
                    <button 
                      onClick={() => setPreviewImageModal(currentSlide.imageUrl || null)}
                      className="absolute bottom-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-xs transition text-xs flex items-center gap-1"
                    >
                      <Maximize2 className="w-3.5 h-3.5" /> Perbesar
                    </button>
                  </div>
                  {currentSlide.imageCaption && (
                    <div className="text-xs text-center font-semibold text-emerald-800 flex items-center justify-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{currentSlide.imageCaption}</span>
                    </div>
                  )}
                </div>
              )}

              {/* BULLET POINTS */}
              {currentSlide.bulletPoints && (
                <div className="bg-emerald-50/60 p-4 md:p-5 rounded-2xl border border-emerald-100/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4 text-emerald-600" /> Poin Penting Materi:
                  </div>
                  <ul className="space-y-2">
                    {currentSlide.bulletPoints.map((bp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* KEY TERMS */}
              {currentSlide.keyTerms && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentSlide.keyTerms.map((kt, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-1">
                      <div className="text-xs font-extrabold text-emerald-700 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {kt.term}
                      </div>
                      <div className="text-xs text-slate-600">{kt.definition}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* TABLE DATA */}
              {currentSlide.tableData && (
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-emerald-600 text-white font-bold">
                      <tr>
                        <th className="p-3">Nama Shalat / Pokok</th>
                        <th className="p-3">Rakaat / Detail</th>
                        {currentSlide.tableData[0]?.col3 && <th className="p-3">Waktu Pelaksanaan / Keterangan</th>}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {currentSlide.tableData.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                          <td className="p-3 font-bold text-slate-800">{row.col1}</td>
                          <td className="p-3 text-emerald-700 font-semibold">{row.col2}</td>
                          {row.col3 && <td className="p-3 text-slate-600">{row.col3}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* MINI QUIZ INTERAKTIF PER SLIDE */}
              {currentSlide.quiz && (
                <div className="mt-6 p-4 md:p-5 bg-amber-50/70 border border-amber-200/80 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                      <HeartHandshake className="w-4 h-4 text-amber-600" /> Kuis Pemahaman Cepat Slide
                    </span>
                    <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-md font-bold">
                      Interactive Quiz
                    </span>
                  </div>

                  <p className="text-xs md:text-sm font-semibold text-slate-800">
                    {currentSlide.quiz.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentSlide.quiz.options.map((opt, optionIdx) => {
                      const isSelected = selectedQuizAnswers[currentSlide.id] === optionIdx;
                      const isCorrect = optionIdx === currentSlide.quiz?.correct;
                      const hasAnswered = selectedQuizAnswers[currentSlide.id] !== undefined;

                      return (
                        <button
                          key={optionIdx}
                          onClick={() => handleQuizAnswer(currentSlide.id, optionIdx)}
                          className={`p-2.5 rounded-xl text-xs text-left font-medium transition flex items-center justify-between border ${
                            hasAnswered
                              ? isCorrect
                                ? 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold'
                                : isSelected
                                ? 'bg-rose-100 border-rose-300 text-rose-800'
                                : 'bg-white border-slate-200 opacity-60'
                              : 'bg-white border-slate-200 hover:border-amber-400 hover:bg-amber-100/30 text-slate-700'
                          }`}
                        >
                          <span>{opt}</span>
                          {hasAnswered && (
                            <span>
                              {isCorrect ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              ) : isSelected ? (
                                <XCircle className="w-4 h-4 text-rose-500" />
                              ) : null}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {selectedQuizAnswers[currentSlide.id] !== undefined && (
                    <div className="p-3 bg-white/80 rounded-xl border border-amber-200 text-xs text-slate-700">
                      <span className="font-bold text-amber-900">Penjelasan:</span> {currentSlide.quiz.explanation}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* SLIDE NAVIGATION BUTTONS */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={handlePrevSlide}
                disabled={currentSlideIndex === 0}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition ${
                  currentSlideIndex === 0
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <ChevronLeft className="w-4 h-4" /> Slide Sebelumnya
              </button>

              {/* SLIDE DOTS */}
              <div className="hidden md:flex items-center gap-1.5 overflow-x-auto max-w-[200px] py-1">
                {SLIDES_KELAS2_P4.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      soundFX.playClick();
                      setCurrentSlideIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentSlideIndex 
                        ? 'bg-emerald-600 w-6' 
                        : 'bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextSlide}
                disabled={currentSlideIndex === SLIDES_KELAS2_P4.length - 1}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition ${
                  currentSlideIndex === SLIDES_KELAS2_P4.length - 1
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                }`}
              >
                Slide Selanjutnya <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN PREVIEW IMAGE MODAL */}
      {previewImageModal && (
        <div 
          onClick={() => setPreviewImageModal(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs p-4 flex items-center justify-center cursor-pointer"
        >
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden p-2">
            <button
              onClick={() => setPreviewImageModal(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={previewImageModal} 
              alt="Gambar Gerakan Sholat"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

