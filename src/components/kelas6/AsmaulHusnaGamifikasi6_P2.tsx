import React, { useState } from 'react';
import { GAME_QUESTIONS_KELAS6_P2 } from '../../data/kelas6Pembelajaran2Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  RotateCcw, 
  ShieldCheck, 
  Award, 
  Scale, 
  Clock,
  Zap,
  HelpCircle
} from 'lucide-react';

export const AsmaulHusnaGamifikasi6_P2: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [streak, setStreak] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = GAME_QUESTIONS_KELAS6_P2[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    if (isAnswered) return;

    setSelectedOption(optIdx);
    setIsAnswered(true);

    if (optIdx === currentQ.correctAnswer) {
      soundFX.playCorrect();
      setScore(prev => prev + 10);
      setStreak(prev => prev + 1);
    } else {
      soundFX.playWrong();
      setStreak(0);
    }
  };

  const handleNext = () => {
    soundFX.playClick();
    if (currentIdx < GAME_QUESTIONS_KELAS6_P2.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      soundFX.playFanfare();
    }
  };

  const handleReset = () => {
    soundFX.playClick();
    setCurrentIdx(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setStreak(0);
    setIsFinished(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-wider">
              Gamifikasi Interaktif • Petualangan Asmaul Husna
            </span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              Kelas 6 Pembelajaran 2
            </h2>
          </div>
        </div>

        {/* Stats Pills */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800 font-extrabold text-xs">
            <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Skor: {score}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-900 dark:text-teal-200 border border-teal-300 dark:border-teal-800 font-extrabold text-xs">
            <Zap className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Streak: {streak}x</span>
          </div>
        </div>
      </div>

      {!isFinished ? (
        <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-900/60 p-6 sm:p-8 shadow-lg space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-black text-slate-600 dark:text-slate-400">
              <span>Pertanyaan {currentIdx + 1} dari {GAME_QUESTIONS_KELAS6_P2.length}</span>
              <span>{Math.round(((currentIdx + 1) / GAME_QUESTIONS_KELAS6_P2.length) * 100)}% Selesai</span>
            </div>
            <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-teal-500 to-emerald-600 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIdx + 1) / GAME_QUESTIONS_KELAS6_P2.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 space-y-3">
            <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 text-xs font-black uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Tantangan Asmaul Husna #{currentIdx + 1}</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentQ.options.map((opt, idx) => {
              let btnStyle = 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-teal-50 hover:border-teal-300';
              
              if (isAnswered) {
                if (idx === currentQ.correctAnswer) {
                  btnStyle = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold';
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
                  className={`p-4 rounded-2xl border-2 text-left text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-900 border border-current flex items-center justify-center text-xs font-black shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </span>

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

          {/* Explanation Box on Answered */}
          {isAnswered && (
            <div className="p-4 sm:p-5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-xs font-extrabold text-teal-800 dark:text-teal-300 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Penjelasan Jawaban:</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {currentQ.explanation}
              </p>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                >
                  <span>{currentIdx < GAME_QUESTIONS_KELAS6_P2.length - 1 ? 'Tantangan Berikutnya' : 'Lihat Hasil Akhir'}</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Finish Modal Card */
        <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-900/60 p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 dark:bg-amber-950/80 border-4 border-amber-300 flex items-center justify-center text-amber-600 shadow-inner">
            <Trophy className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
              Petualangan Selesai!
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Subhanallah! Kamu Luar Biasa!
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Kamu telah menyelesaikan seluruh tantangan interaktif Asmaul Husna Al-Waliy, Al-Hamid, Al-'Adl, dan As-Sabur!
            </p>
          </div>

          <div className="inline-block p-6 rounded-3xl bg-teal-50 dark:bg-teal-950/40 border-2 border-teal-200 dark:border-teal-800 space-y-1">
            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-widest">Skor Akhir Kamu</span>
            <div className="text-4xl sm:text-5xl font-black text-teal-700 dark:text-teal-300">
              {score} / 120
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 max-w-md mx-auto text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
            {score >= 100 
              ? 'Masha Allah! Pemahamanmu tentang 4 Asmaul Husna sangat sempurna. Teruslah meneladaninya dalam kehidupan sehari-hari!'
              : 'Bagus sekali! Terus tingkatkan pemahamanmu dan coba mainkan lagi untuk mendapatkan nilai sempurna!'}
          </div>

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black text-sm transition-all shadow-md inline-flex items-center gap-2 active:scale-95 cursor-pointer"
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
