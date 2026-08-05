import React, { useState } from 'react';
import { KELAS4_P2_GAMIFICATION_QUEST, AsmaulHusnaQuestStep } from '../../data/kelas4Pembelajaran2Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Sparkles, 
  Award, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ShieldCheck, 
  Heart, 
  Gift, 
  Key, 
  Smile, 
  Trophy,
  Star
} from 'lucide-react';

interface GamifikasiProps {
  grade: number;
  lesson: number;
}

export const PetualanganAsmaulHusnaGamifikasi: React.FC<GamifikasiProps> = ({ grade, lesson }) => {
  const steps = KELAS4_P2_GAMIFICATION_QUEST;
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);

  const currentStep = steps[currentStepIdx];

  const handleSelectOption = (optId: string) => {
    if (isAnswered) return;
    setSelectedOptionId(optId);
    setIsAnswered(true);

    const chosen = currentStep.options.find((o) => o.id === optId);
    if (chosen?.isCorrect) {
      soundFX.playCorrect();
      setScore((prev) => prev + 20);
      setEarnedBadges((prev) => [...prev, currentStep.asmaName]);
    } else {
      soundFX.playWrong();
    }
  };

  const handleNextStep = () => {
    soundFX.playClick();
    if (currentStepIdx < steps.length - 1) {
      setCurrentStepIdx((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      soundFX.playFanfare();
    }
  };

  const handleResetGame = () => {
    soundFX.playClick();
    setCurrentStepIdx(0);
    setSelectedOptionId(null);
    setScore(0);
    setIsAnswered(false);
    setIsCompleted(false);
    setEarnedBadges([]);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <Gamepad2 className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-purple-200 uppercase tracking-wider block">
              Gamifikasi Edukasi Interaktif • BAB 3
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Petualangan Interaktif 4 Sifat Asmaul Husna
            </h3>
            <p className="text-xs text-purple-100 font-medium">
              Jelajahi 5 Pos Akhlak Terpuji: Al-Ghaffār, Al-Wahhāb, Al-Fattāḥ, dan Al-Laṭīf
            </p>
          </div>
        </div>

        {/* Score Display */}
        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 shrink-0">
          <Trophy className="w-6 h-6 text-amber-300 animate-bounce" />
          <div>
            <span className="text-[10px] font-bold text-purple-200 block uppercase">Skor Kamu</span>
            <span className="text-xl font-black text-white">{score} / 100 Poin</span>
          </div>
        </div>
      </div>

      {/* GAME STAGE CONTAINER */}
      {!isCompleted ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-purple-200 dark:border-purple-800 shadow-xl space-y-6">
          {/* Progress Bar & Badges Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-black text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Pos {currentStepIdx + 1} Dari 5 Pos Petualangan
              </span>
              <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <span>{currentStep.scenarioTitle}</span>
                <span className="font-arabic text-xl text-emerald-600 font-bold">({currentStep.arabicName})</span>
              </h4>
            </div>

            {/* Step Badges Progress */}
            <div className="flex items-center space-x-1">
              {steps.map((s, idx) => (
                <div
                  key={s.id}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs transition ${
                    idx === currentStepIdx
                      ? 'bg-purple-600 text-white scale-110 shadow-md ring-2 ring-purple-300'
                      : idx < currentStepIdx
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  }`}
                >
                  {idx < currentStepIdx ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Story Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/80 border border-purple-200 dark:border-slate-700 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-black text-purple-700 dark:text-purple-300 uppercase">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Skenario Tantangan:</span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
              "{currentStep.scenarioStory}"
            </p>
          </div>

          {/* Question Prompt */}
          <div className="space-y-3">
            <h5 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              {currentStep.questionPrompt}
            </h5>

            {/* Options List */}
            <div className="grid grid-cols-1 gap-3">
              {currentStep.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                let btnStyle = 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-purple-300 hover:bg-purple-50/50';

                if (isAnswered) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-600 text-white border-emerald-500 font-extrabold shadow-md';
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = 'bg-rose-600 text-white border-rose-500 font-extrabold shadow-md';
                  } else {
                    btnStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={isAnswered}
                    className={`p-4 rounded-2xl border text-left text-xs sm:text-sm transition flex items-start space-x-3 cursor-pointer ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {opt.id.slice(-1).toUpperCase()}
                    </span>
                    <span className="flex-1 font-semibold">{opt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Answer Feedback Card */}
          {isAnswered && (
            <div className="space-y-4 animate-in fade-in">
              {(() => {
                const chosen = currentStep.options.find((o) => o.id === selectedOptionId);
                const isCorrect = chosen?.isCorrect;
                return (
                  <div
                    className={`p-4 rounded-2xl border flex items-start space-x-3 ${
                      isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 text-emerald-900 dark:text-emerald-200'
                        : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 text-rose-900 dark:text-rose-200'
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <span className="font-extrabold text-xs uppercase tracking-wider block">
                        {isCorrect ? 'Jawaban Benar! (+20 Poin)' : 'Jawaban Kurang Tepat!'}
                      </span>
                      <p className="text-xs sm:text-sm">{chosen?.explanation}</p>
                    </div>
                  </div>
                );
              })()}

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow-lg transition active:scale-95 cursor-pointer"
                >
                  <span>{currentStepIdx < steps.length - 1 ? 'Lanjut Ke Pos Berikutnya' : 'Lihat Hasil Akhir'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* GAME COMPLETED RESULT MODAL CARD */
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center animate-bounce shadow-inner">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-black text-purple-600 uppercase tracking-widest block">
              Petualangan Selesai!
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Pahlawan Akhlak Asmaul Husna
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Kamu telah berhasil meneladani sifat Al-Ghaffār, Al-Wahhāb, Al-Fattāḥ, dan Al-Laṭīf!
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-50 via-indigo-50 to-amber-50 dark:from-slate-800 dark:to-slate-800/80 border border-amber-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase">Total Skor Akhir</span>
            <div className="text-5xl font-black text-purple-600 dark:text-purple-400">
              {score} <span className="text-lg text-slate-400">/ 100</span>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-2">
              {earnedBadges.map((badge, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold border border-emerald-300 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                  <span>Lencana {badge}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 justify-center pt-2">
            <button
              onClick={handleResetGame}
              className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs sm:text-sm flex items-center space-x-2 shadow-lg transition active:scale-95 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Main Ulang Petualangan</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
