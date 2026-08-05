import React from 'react';
import { 
  X, 
  Tv, 
  Laptop, 
  Smartphone, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Volume2 
} from 'lucide-react';
import { soundFX } from '../utils/audio';

interface TeacherGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherGuideModal: React.FC<TeacherGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 max-w-2xl w-full rounded-3xl border-2 border-emerald-600 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center space-x-3 text-emerald-800 dark:text-emerald-300">
          <div className="p-3 rounded-2xl bg-emerald-700 text-white font-black shadow-md">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              PANDUAN GURU PAI & INTEGRASI MULTIDEVICE
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Media Pembelajaran Interaktif PAI SD Kurikulum Merdeka
            </p>
          </div>
        </div>

        {/* Guide Sections */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {/* Section 1: Multidevice Features */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm flex items-center gap-1.5">
              <Tv className="w-4 h-4 text-amber-500" />
              <span>1. Penggunaan di Papan Pintar IFP / Smart Board:</span>
            </h4>
            <ul className="space-y-1.5 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Tekan tombol <strong>"Mode IFP/Touch"</strong> di bagian atas untuk memperbesar tombol sentuh agar nyaman ditekan oleh siswa di depan kelas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Gunakan fitur <strong>"Acak Nama Siswa"</strong> pada floating menu Papan Pintar di sudut kanan bawah untuk arisan kuis interaktif.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Laptop & HP */}
          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 space-y-2">
            <h4 className="font-bold text-blue-900 dark:text-blue-200 text-sm flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-blue-500" />
              <Smartphone className="w-4 h-4 text-blue-500" />
              <span>2. Penggunaan di Laptop & HP Siswa:</span>
            </h4>
            <ul className="space-y-1.5 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Aplikasi ini sepenuhnya responsif. Di HP, layout otomatis menyesuaikan dengan tampilan vertikal yang ringan dan mudah diusap (scroll).</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Audio & Gamification */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 space-y-2">
            <h4 className="font-bold text-amber-900 dark:text-amber-200 text-sm flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-amber-500" />
              <span>3. Efek Suara (Audio) Kelas:</span>
            </h4>
            <p className="leading-relaxed">
              Tersedia suara sintetis tanpa perlu internet: Suara Basmalah, Tepuk Anak Sholeh, Bel Masuk Kelas, dan Suara Apresiasi Bintang saat siswa menjawab kuis dengan benar.
            </p>
          </div>

          {/* Section 4: Tahap 1 vs Tahap 2 */}
          <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-300 dark:border-teal-800 space-y-2">
            <h4 className="font-bold text-teal-900 dark:text-teal-200 text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-500" />
              <span>4. Alur Pengembangan Tahap 1 & Tahap 2:</span>
            </h4>
            <p className="leading-relaxed">
              <strong>Tahap 1 (Saat Ini):</strong> Fokus pada desain antarmuka, 6 tombol utama (Kelas 1 s.d Kelas 6), serta fitur interaktif awal (Kuis, Flashcard, Hafalan Surah, dan Guru AI).
              <br />
              <strong>Tahap 2 (Berikutnya):</strong> Anda cukup menyampaikan daftar materi, indikator pembelajaran, atau berkas PDF/soal yang ingin dimasukkan ke masing-masing tombol kelas.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="w-full py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-sm transition shadow-lg active:scale-95"
        >
          Paham, Siap Mengajar! 🚀
        </button>
      </div>
    </div>
  );
};
