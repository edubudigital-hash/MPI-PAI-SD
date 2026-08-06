import React from 'react';
import { 
  X, 
  HelpCircle, 
  Volume2, 
  Heart, 
  Maximize, 
  Tv, 
  Type, 
  Sun, 
  Sparkles, 
  BookOpen, 
  FolderKanban, 
  Gamepad2, 
  FileCheck,
  Dices,
  Timer
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
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 text-emerald-800 dark:text-emerald-300">
          <div className="p-3 rounded-2xl bg-emerald-700 text-white font-black shadow-md">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              PETUNJUK PENGGUNAAN FITUR & TOMBOL
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Panduan singkat memanfaatkan seluruh fitur interaktif aplikasi SIMPAD
            </p>
          </div>
        </div>

        {/* Guide Content */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {/* Section 1: Top Navigation Controls */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-300 text-sm flex items-center gap-1.5 border-b pb-2 dark:border-slate-700">
              <span>1. Tombol Bilah Atas (Header Bar):</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Icon Suara:</strong> Mengaktifkan / mematikan efek suara.</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-500 shrink-0" />
                <span><strong>Asmaul Husna:</strong> Menampilkan 99 Asmaul Husna & audio.</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Juz 30:</strong> Al-Qur'an surat-surat pendek Juz 30 (Standar Kemenag RI).</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Icon Layar Penuh:</strong> Buka/keluar dari mode Fullscreen.</span>
              </div>
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>IFP:</strong> Mengaktifkan Mode Sentuh Papan Pintar (tombol lebih besar).</span>
              </div>
              <div className="flex items-center gap-2">
                <Type className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Teks (A/L/XL):</strong> Mengatur ukuran font aplikasi.</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                <span><strong>Kontras:</strong> Mode Terang / Gelap (Kontras Tinggi).</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span><strong>Guru AI:</strong> Asisten kecerdasan buatan untuk merancang RPP, ide kuis, & konsultasi materi PAI.</span>
              </div>
            </div>
          </div>

          {/* Section 2: Interactive Class Modules */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-2.5">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm flex items-center gap-1.5 border-b pb-2 border-emerald-200 dark:border-emerald-800">
              <span>2. Modul Pembelajaran Interaktif:</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div><strong>Materi Slide:</strong> Presentasi slide interaktif lengkap dengan poin penting, glosarium, kuis cepat, & cetak PDF.</div>
              </div>
              <div className="flex items-start gap-2">
                <FolderKanban className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div><strong>Proyek Murid:</strong> Penugasan PjBL/PBL lengkap dengan instruksi, produk akhir, & cetak lembar kerja PDF.</div>
              </div>
              <div className="flex items-start gap-2">
                <Gamepad2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div><strong>Gamifikasi:</strong> Game edukasi interaktif (susun kata/kalimat, kuis cepat) berbasis poin & lencana.</div>
              </div>
              <div className="flex items-start gap-2">
                <FileCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div><strong>Evaluasi:</strong> Kuis interaktif (PG, PGK, Menjodohkan, B/S, Uraian) dengan nilai otomatis & kunci jawaban.</div>
              </div>
            </div>
          </div>

          {/* Section 3: Floating Toolbar */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 space-y-2.5">
            <h4 className="font-bold text-amber-900 dark:text-amber-200 text-sm flex items-center gap-1.5 border-b pb-2 border-amber-200 dark:border-amber-800">
              <span>3. Menu Melayang (Kanan Bawah):</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Dices className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Acak Siswa:</strong> Arisan panggilan nama siswa secara acak di kelas.</span>
              </div>
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Timer Kelas:</strong> Penghitung waktu kuis / pengerjaan tugas.</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="w-full py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-sm transition shadow-lg active:scale-95"
        >
          Mengerti, Tutup Petunjuk
        </button>
      </div>
    </div>
  );
};
