import React, { useState } from 'react';
import { KELAS4_P4_QUEST_STEPS, QuestStep } from '../../data/kelas4Pembelajaran4Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sun, 
  Moon, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface PetualanganShalatSunahGamifikasiProps {
  grade: number;
  lesson: number;
}

export const PetualanganShalatSunahGamifikasi: React.FC<PetualanganShalatSunahGamifikasiProps> = ({ grade, lesson }) => {
  const steps = KELAS4_P4_QUEST_STEPS;
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [userHistory, setUserHistory] = useState<{ [stepIdx: number]: { isCorrect: boolean; text: string } }>({});

  const currentStep: QuestStep = steps[currentStepIdx];

  const handleSelectOption = (optId: string, isCorrect: boolean, text: string) => {
    if (selectedOptionId !== null) return; // Prevent double answer
    setSelectedOptionId(optId);

    if (isCorrect) {
      soundFX.playCorrect();
      setScore((prev) => prev + 20);
    } else {
      soundFX.playWrong();
    }

    setUserHistory((prev) => ({
      ...prev,
      [currentStepIdx]: { isCorrect, text }
    }));
  };

  const handleNextStep = () => {
    soundFX.playClick();
    setSelectedOptionId(null);
    if (currentStepIdx < steps.length - 1) {
      setCurrentStepIdx((prev) => prev + 1);
    } else {
      setCompleted(true);
      soundFX.playFanfare();
    }
  };

  const handleResetGame = () => {
    soundFX.playClick();
    setCurrentStepIdx(0);
    setSelectedOptionId(null);
    setScore(0);
    setCompleted(false);
    setUserHistory({});
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-700 to-indigo-800 text-white rounded-3xl p-6 shadow-xl border-2 border-emerald-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <Gamepad2 className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-200 uppercase tracking-wider block">
              Gamifikasi Interaktif Detektif
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Petualangan Shalat Sunah Rawatib, Dhuha, & Tahajud
            </h3>
            <p className="text-xs text-teal-100 font-medium">
              Selesaikan 5 Misi Tantangan dan Raih Gelar "Anak Saleh Ahli Shalat Sunah"!
            </p>
          </div>
        </div>

        {/* Score Display Pill */}
        <div className="bg-amber-400 text-slate-950 px-5 py-2.5 rounded-2xl border border-amber-200 font-black text-sm flex items-center space-x-2 shadow-md shrink-0">
          <Award className="w-5 h-5 text-slate-900" />
          <span>Skor Petualangan: {score} / 100</span>
        </div>
      </div>

      {/* GAME CONTAINER */}
      {!completed ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-teal-200 dark:border-teal-800 shadow-xl space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-extrabold text-slate-600 dark:text-slate-300">
              <span>Misi Ke-{currentStepIdx + 1} dari {steps.length}</span>
              <span>{Math.round(((currentStepIdx + 1) / steps.length) * 100)}% Selesai</span>
            </div>
            <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
              <div
                className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${((currentStepIdx + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Scenario Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800/90 border-2 border-teal-200 dark:border-slate-700 space-y-3">
            <div className="flex items-center space-x-2 text-teal-800 dark:text-teal-300 font-black text-sm uppercase">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{currentStep.title} — {currentStep.scenarioTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {currentStep.scenarioStory}
            </p>
          </div>

          {/* Question Prompt */}
          <div className="space-y-3">
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              ❓ Pertanyaan Misi: {currentStep.questionPrompt}
            </h4>

            {/* Options List */}
            <div className="space-y-3">
              {currentStep.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                const isAnswered = selectedOptionId !== null;

                let btnStyle = 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-teal-50/60';
                if (isAnswered) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-600 text-white border-emerald-500 font-bold';
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = 'bg-rose-600 text-white border-rose-500 font-bold';
                  } else {
                    btnStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(opt.id, opt.isCorrect, opt.text)}
                    className={`w-full p-4 rounded-2xl border-2 text-left text-xs sm:text-sm transition flex items-start space-x-3 cursor-pointer ${btnStyle}`}
                  >
                    <div className="shrink-0 mt-0.5">
                      {isAnswered ? (
                        opt.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-amber-300" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-white" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-slate-300" />
                        )
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center font-bold text-[10px] text-teal-600">
                          ?
                        </div>
                      )}
                    </div>
                    <span className="leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback & Explanation */}
          {selectedOptionId !== null && (
            <div className="space-y-4 pt-2 animate-in fade-in">
              {currentStep.options.find((o) => o.id === selectedOptionId)?.isCorrect ? (
                <div className="p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 text-emerald-900 dark:text-emerald-100 text-xs sm:text-sm font-bold flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <span>Jawaban Tepat! (+20 Poin)</span>
                    <p className="font-normal text-xs pt-0.5">
                      {currentStep.options.find((o) => o.id === selectedOptionId)?.explanation}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-rose-100 dark:bg-rose-950/80 border border-rose-300 text-rose-900 dark:text-rose-100 text-xs sm:text-sm font-bold flex items-center space-x-3">
                  <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                  <div>
                    <span>Jawaban Belum Tepat!</span>
                    <p className="font-normal text-xs pt-0.5">
                      {currentStep.options.find((o) => o.isCorrect)?.explanation}
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={handleNextStep}
                className="w-full py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black text-sm flex items-center justify-center space-x-2 shadow-lg transition active:scale-95 cursor-pointer"
              >
                <span>{currentStepIdx < steps.length - 1 ? 'Lanjut Ke Masi Berikutnya' : 'Lihat Hasil Akhir Petualangan'}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* GAME FINISHED MODAL CARD */
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border-2 border-amber-300 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center border-4 border-amber-300 shadow-inner">
            <Award className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest block">
              Selamat! Petualangan Selesai
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Gelar: {score >= 80 ? '👑 Detektif Ahli Shalat Sunah Utama' : score >= 60 ? '🌟 Bintang Shalat Sunah' : '💪 Pejuang Ibadah Sunah'}
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Kamu telah menyelesaikan 5 misi petualangan ketentuan Shalat Sunah Rawatib, Dhuha, dan Tahajud.
            </p>
          </div>

          {/* Final Score Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800/80 border-2 border-amber-300 max-w-xs mx-auto">
            <div className="text-6xl font-black text-amber-600 dark:text-amber-400">
              {score} <span className="text-xl text-slate-400">/ 100</span>
            </div>
            <p className="text-xs font-bold text-teal-700 dark:text-teal-300 pt-2">
              {score === 100 ? 'Sempurna! Semua Misi Terjawab Tepat!' : 'Kerja Bagus! Terus Tingkatkan Ibadahmu!'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={handleResetGame}
              className="px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow-md transition active:scale-95 cursor-pointer"
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
