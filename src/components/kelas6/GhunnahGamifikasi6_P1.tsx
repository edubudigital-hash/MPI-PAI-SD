import React, { useState } from 'react';
import { soundFX } from '../../utils/audio';
import { Gamepad2, Award, Sparkles, CheckCircle2, XCircle, RotateCcw, Volume2, ShieldCheck, Trophy, Star } from 'lucide-react';

interface GameQuestion {
  id: number;
  question: string;
  arabic?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const GAME_QUESTIONS: GameQuestion[] = [
  {
    id: 1,
    question: 'Berapakah durasi atau panjang bacaan dengung yang tepat untuk hukum Ghunnah (غُنَّة)?',
    options: ['1 Harakat', '2 Harakat (2 ketukan)', '4 Harakat', '6 Harakat'],
    correctAnswer: 1,
    explanation: 'Durasi bacaan Ghunnah disepakati ditahan selama 2 harakat (2 ketukan) melalui rongga hidung.'
  },
  {
    id: 2,
    question: 'Manakah dua huruf hijaiyah yang dibaca Ghunnah apabila diberi tanda tasydid ( ّ )?',
    arabic: 'نّ  &  مّ',
    options: ['Alif & Lam', 'Nun & Mim', 'Ba & Ta', 'Sin & Syin'],
    correctAnswer: 1,
    explanation: 'Hukum Ghunnah berlaku pada Nun Bertasydid (نّ) dan Mim Bertasydid (مّ).'
  },
  {
    id: 3,
    question: 'Apakah arti dari kata "Al-Insyirah" yang menjadi nama Surat ke-94 dalam Al-Qur\'an?',
    options: ['Pertolongan Allah', 'Kelapangan / Melapangkan Dada', 'Masa Depan Suci', 'Kemudahan Hidup'],
    correctAnswer: 1,
    explanation: 'Al-Insyirah berarti Kelapangan atau Melapangkan Dada.'
  },
  {
    id: 4,
    question: 'Sambunglah ayat kelima Surat Al-Insyirah berikut: "فَإِنَّ مَعَ الْعُسْرِ ..."',
    arabic: 'فَإِنَّ مَعَ الْعُسْرِ ...',
    options: ['يُسْرًا (Yusraa)', 'فَانْصَبْ (Fanshab)', 'وَإِلَىٰ رَبِّكَ (Wa ilaa rabbika)', 'ذِكْرَكَ (Dzikrak)'],
    correctAnswer: 0,
    explanation: 'Ayat 5 berbunyi: "Fa inna ma\'al \'usri yusraa" (Maka sesungguhnya bersama kesulitan ada kemudahan).'
  },
  {
    id: 5,
    question: 'Di manakah tempat keluarnya suara dengung (makhraj) saat membaca hukum Ghunnah?',
    options: ['Rongga Mulut (al-Jauf)', 'Rongga Hidung (al-Khaisyum)', 'Pangkal Tenggorokan (al-Halq)', 'Dua Bibir (asy-Syafatain)'],
    correctAnswer: 1,
    explanation: 'Tempat keluar dengung Ghunnah adalah rongga hidung yang disebut al-Khaisyum.'
  },
  {
    id: 6,
    question: 'Apakah sikap terpuji yang diajarkan dalam Surat Al-Insyirah ayat 7 setelah selesai mengerjakan suatu tugas?',
    options: ['Langsung bersantai dan tidur', 'Tetap bekerja keras untuk urusan produktif yang lain', 'Menunggu perintah guru baru bergerak', 'Menyerah jika merasa lelah'],
    correctAnswer: 1,
    explanation: 'Ayat 7 ("Fa idzaa faraghta fanshab") mengajarkan untuk tetap bekerja keras dan disiplin memanfaatkan waktu.'
  }
];

export const GhunnahGamifikasi6_P1: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = GAME_QUESTIONS[currentIdx];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctAnswer) {
      soundFX.playCorrect();
      setScore(prev => prev + 20);
    } else {
      soundFX.playWrong();
    }
  };

  const handleNext = () => {
    soundFX.playClick();
    if (currentIdx < GAME_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      soundFX.playFanfare();
    }
  };

  const handleReset = () => {
    soundFX.playClick();
    setCurrentIdx(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-wider">
              Gamifikasi Interaktif • Kelas 6 Pembelajaran 1
            </span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              Petualangan Tajwid Ghunnah & Surat Al-Insyirah
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-950/40 px-4 py-2 rounded-xl border border-amber-200 dark:border-amber-800">
          <Trophy className="w-5 h-5 text-amber-500" />
          <span className="text-sm font-black text-amber-900 dark:text-amber-300">Skor: {score}</span>
        </div>
      </div>

      {/* Main Game Card */}
      {!isCompleted ? (
        <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-extrabold text-slate-500">
              <span>Tantangan Pertanyaan {currentIdx + 1} dari {GAME_QUESTIONS.length}</span>
              <span>{Math.round(((currentIdx + 1) / GAME_QUESTIONS.length) * 100)}% Selesai</span>
            </div>
            <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-teal-500 to-emerald-600 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIdx + 1) / GAME_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 space-y-3">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-relaxed">
              {currentQ.question}
            </h3>

            {currentQ.arabic && (
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-800 text-center text-2xl sm:text-3xl font-bold text-teal-800 dark:text-teal-300 font-serif">
                {currentQ.arabic}
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentQ.options.map((opt, idx) => {
              let btnStyle = 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-teal-50 hover:border-teal-300';
              
              if (isAnswered) {
                if (idx === currentQ.correctAnswer) {
                  btnStyle = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold ring-2 ring-emerald-400';
                } else if (idx === selectedOption) {
                  btnStyle = 'bg-amber-100 dark:bg-amber-950/80 border-amber-500 text-amber-950 dark:text-amber-100 font-bold';
                } else {
                  btnStyle = 'opacity-40 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`p-4 rounded-2xl border-2 text-left font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-between gap-3 shadow-2xs ${btnStyle}`}
                >
                  <span className="flex-1">{opt}</span>
                  {isAnswered && idx === currentQ.correctAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQ.correctAnswer && (
                    <XCircle className="w-5 h-5 text-amber-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box after Answered */}
          {isAnswered && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-1 animate-fadeIn">
              <strong className="font-extrabold block text-amber-800 dark:text-amber-300">
                Penjelasan Tajwid / Tafsir:
              </strong>
              <p className="leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>{currentIdx < GAME_QUESTIONS.length - 1 ? 'Pertanyaan Berikutnya' : 'Lihat Hasil Akhir'}</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Victory Screen */
        <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center shadow-xl space-y-6 animate-scaleUp">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-inner">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Selamat! Kamu Menyelesaikan Gamifikasi!
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Kamu telah membuktikan pemahaman hukum Ghunnah dan Surat Al-Insyirah dengan sangat baik.
            </p>
          </div>

          <div className="inline-block p-6 rounded-3xl bg-teal-50 dark:bg-teal-950/40 border-2 border-teal-200 dark:border-teal-800 space-y-1">
            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-widest">Skor Akhir Kamu</span>
            <div className="text-4xl sm:text-5xl font-black text-teal-700 dark:text-teal-300">
              {score} / 120
            </div>
          </div>

          <div className="flex justify-center gap-1 text-amber-400">
            {[1, 2, 3, 4, 5].map((st) => (
              <Star key={st} className="w-7 h-7 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black text-sm transition-all shadow-md inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Mainkan Lagi</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
