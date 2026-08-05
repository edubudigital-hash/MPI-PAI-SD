import React, { useState } from 'react';
import { KELAS5_P5_SLIDES } from '../../data/kelas5Pembelajaran5Data';
import { soundFX } from '../../utils/audio';
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  Download, 
  Target, 
  Compass, 
  MapPin, 
  Users, 
  Building2, 
  HeartHandshake, 
  FileText, 
  CheckSquare, 
  Scale, 
  ShieldCheck, 
  Award, 
  Megaphone, 
  Brain, 
  Smile, 
  Sparkles,
  BookOpen,
  Printer
} from 'lucide-react';

interface MateriSlideView5_P5Props {
  grade?: number;
  lesson?: number;
}

const iconMap: Record<string, React.ElementType> = {
  Target,
  Compass,
  MapPin,
  Users,
  Building2,
  HeartHandshake,
  FileText,
  CheckSquare,
  Scale,
  ShieldCheck,
  Award,
  Megaphone,
  Brain,
  Smile,
  Sparkles
};

export const MateriSlideView5_P5: React.FC<MateriSlideView5_P5Props> = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const slide = KELAS5_P5_SLIDES[currentSlideIndex];
  const IconComponent = iconMap[slide.icon] || BookOpen;

  const handleNext = () => {
    if (currentSlideIndex < KELAS5_P5_SLIDES.length - 1) {
      soundFX.playClick();
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      soundFX.playClick();
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
    } else {
      soundFX.playBasmalah();
      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 3000);
    }
  };

  const handleDownloadMateri = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Materi PAI Kelas 5 Pembelajaran 5 - Kepemimpinan Nabi Muhammad saw. di Madinah</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              color: #0f172a;
              line-height: 1.6;
              padding: 40px;
              max-width: 900px;
              margin: 0 auto;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #059669;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              color: #047857;
              margin: 0 0 8px 0;
              font-size: 24px;
            }
            .header p {
              margin: 0;
              color: #475569;
              font-size: 14px;
            }
            .slide-box {
              border: 1px solid #cbd5e1;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 24px;
              page-break-inside: avoid;
              background-color: #f8fafc;
            }
            .slide-num {
              display: inline-block;
              background-color: #047857;
              color: #ffffff;
              font-weight: 700;
              font-size: 12px;
              padding: 4px 10px;
              border-radius: 6px;
              margin-bottom: 10px;
            }
            .slide-title {
              font-size: 18px;
              font-weight: 700;
              color: #0f172a;
              margin: 4px 0;
            }
            .slide-subtitle {
              font-size: 14px;
              font-weight: 600;
              color: #059669;
              margin-bottom: 12px;
            }
            ul {
              margin: 0 0 12px 0;
              padding-left: 20px;
            }
            li {
              margin-bottom: 6px;
              font-size: 14px;
            }
            .explanation {
              background-color: #ecfdf5;
              border-left: 4px solid #10b981;
              padding: 10px 14px;
              border-radius: 4px;
              font-size: 13px;
              color: #065f46;
              margin-top: 10px;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              padding-top: 16px;
              border-top: 1px solid #e2e8f0;
              font-size: 12px;
              color: #64748b;
            }
            @media print {
              body { padding: 20px; }
              .slide-box { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>MATERI PEMBELAJARAN PAI & BUDI PEKERTI KELAS 5</h1>
            <p>BAB V: KEPEMIMPINAN NABI MUHAMMAD SAW. DI MADINAH DAN KETELADANANNYA</p>
          </div>
          
          ${KELAS5_P5_SLIDES.map((s) => `
            <div class="slide-box">
              <span class="slide-num">Slide ${s.id} / ${KELAS5_P5_SLIDES.length}</span>
              <div class="slide-title">${s.title}</div>
              <div class="slide-subtitle">${s.subtitle}</div>
              <ul>
                ${s.points.map((p) => `<li>${p}</li>`).join('')}
              </ul>
              <div class="explanation">
                <strong>Penjelasan Lengkap:</strong> ${s.explanation}
              </div>
            </div>
          `).join('')}

          <div class="footer">
            <p>PAICODE-MPI • Dokumen Resmi Materi Pembelajaran PAI & Budi Pekerti Kelas 5</p>
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
    <div className="space-y-6">
      {/* Header & Download Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-5 rounded-2xl border border-slate-200 shadow-sm gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Kelas 5 • Pembelajaran 5
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
            Kepemimpinan Nabi Muhammad saw. di Madinah
          </h2>
          <p className="text-xs md:text-sm text-slate-500">
            Materi Pembelajaran Teks, Visual & Teladan Akhlak Rasulullah saw.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleAudio}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
              isPlayingAudio 
                ? 'bg-amber-100 text-amber-800 border border-amber-300 animate-pulse' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4 text-amber-600" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
            <span>{isPlayingAudio ? 'Hentikan Suara' : 'Putar Audio'}</span>
          </button>

          <button
            onClick={handleDownloadMateri}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>Download Materi</span>
          </button>
        </div>
      </div>

      {/* Main Slide Presentation Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300">
        {/* Slide Banner Header */}
        <div className={`bg-gradient-to-r ${slide.color} p-6 md:p-8 text-white relative`}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full text-white backdrop-blur-sm">
                  Slide {slide.id} dari {KELAS5_P5_SLIDES.length}
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-white mt-1">
                  {slide.title}
                </h3>
                <p className="text-xs md:text-sm text-white/90 font-medium">
                  {slide.subtitle}
                </p>
              </div>
            </div>

            <Printer 
              onClick={handleDownloadMateri}
              className="w-6 h-6 text-white/70 hover:text-white cursor-pointer transition-colors hidden sm:block" 
              title="Cetak/Download Slide"
            />
          </div>
        </div>

        {/* Slide Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Key Bullet Points */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Poin Penting Pembelajaran:
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {slide.points.map((pt, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Explanation Box */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 space-y-2">
            <h5 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              Penjelasan & Pendalaman Materi:
            </h5>
            <p className="text-xs md:text-sm text-emerald-950 font-medium leading-relaxed">
              {slide.explanation}
            </p>
          </div>
        </div>

        {/* Slide Navigation Controls */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
              currentSlideIndex === 0
                ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-200'
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 shadow-sm'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          <div className="text-xs font-bold text-slate-500">
            {currentSlideIndex + 1} / {KELAS5_P5_SLIDES.length}
          </div>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === KELAS5_P5_SLIDES.length - 1}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
              currentSlideIndex === KELAS5_P5_SLIDES.length - 1
                ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-200'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20'
            }`}
          >
            <span>Selanjutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Number-Only Slide Navigation Bar (As Requested: cukup nomor saja, hilangkan teks tombol) */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
          <span>Navigasi Cepat Slide:</span>
          <span className="text-emerald-600">{Math.round(((currentSlideIndex + 1) / KELAS5_P5_SLIDES.length) * 100)}% Selesai</span>
        </div>
        
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-emerald-600 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentSlideIndex + 1) / KELAS5_P5_SLIDES.length) * 100}%` }}
          />
        </div>

        {/* Number-Only Buttons Grid */}
        <div className="flex flex-wrap gap-2 pt-1 justify-center">
          {KELAS5_P5_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                soundFX.playClick();
                setCurrentSlideIndex(idx);
              }}
              className={`w-9 h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                idx === currentSlideIndex 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200 scale-105' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
              }`}
              title={`Slide ${idx + 1}: ${s.title}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
