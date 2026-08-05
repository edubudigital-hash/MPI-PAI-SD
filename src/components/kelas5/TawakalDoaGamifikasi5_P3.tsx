import React, { useState } from 'react';
import { KELAS5_P3_QUEST_STEPS, QuestStep } from '../../data/kelas5Pembelajaran3Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Trophy, 
  Star, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Compass,
  Award
} from 'lucide-react';

interface TawakalDoaGamifikasi5P3Props {
  grade: number;
  lesson: number;
}

export const TawakalDoaGamifikasi5_P3: React.FC<TawakalDoaGamifikasi5P3Props> = ({ grade, lesson }) => {
  const steps = KELAS5_P3_QUEST_STEPS;
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentStep: QuestStep = steps[currentStepIdx];

  const handleSelectOption = (optId: string) => {
    if (isAnswered) return;
    soundFX.playClick();
    setSelectedOptionId(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isAnswered) return;
    setIsAnswered(true);

    const chosenOption = currentStep.options.find((o) => o.id === selectedOptionId);
    if (chosenOption?.isCorrect) {
      soundFX.playCorrect();
      setScore((prev) => prev + 20);
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
      setIsFinished(true);
      soundFX.playFanfare();
    }
  };

  const handleResetGame = () => {
    soundFX.playClick();
    setCurrentStepIdx(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const chosenOpt = currentStep.options.find((o) => o.id === selectedOptionId);

  return (
    <div id="gamifikasi-5-3" className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide mb-2">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Gamifikasi Interaktif • Petualangan Misi</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Petualangan Akhlak: Misi Doa & Tawakal
          </h1>
          <p className="text-teal-100 text-sm mt-1">
            Uji Pemahaman HOTS melalui Skenario Keputusan Interaktif (Kelas 5 Pembelajaran 3)
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3 shrink-0">
          <Trophy className="w-8 h-8 text-amber-300" />
          <div>
            <p className="text-xs text-teal-100 font-medium">Skor Petualangan</p>
            <p className="text-2xl font-black text-white">{score} <span className="text-xs font-normal text-teal-200">/ 100</span></p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-center justify-between gap-4">
        <span className="text-xs font-bold text-slate-600">
          Tahap {currentStepIdx + 1} dari {steps.length}
        </span>
        <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden max-w-md">
          <div 
            className="bg-emerald-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentStepIdx + (isAnswered ? 1 : 0)) / steps.length) * 100}%` }}
          />
        </div>
        <span className="text-xs font-black text-emerald-700">
          {Math.round(((currentStepIdx + (isAnswered ? 1 : 0)) / steps.length) * 100)}%
        </span>
      </div>

      {/* Game Step View or Finished View */}
      {!isFinished ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8 space-y-6">
          {/* Step Title & Scenario */}
          <div className="space-y-3 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-full text-xs font-bold">
                {currentStep.title}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                {currentStep.scenarioTitle}
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-slate-800 text-sm md:text-base leading-relaxed italic">
              "{currentStep.scenarioStory}"
            </div>

            <h3 className="text-base md:text-lg font-bold text-slate-900 pt-2">
              {currentStep.questionPrompt}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentStep.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              let btnClass = 'bg-white border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 text-slate-800';

              if (isAnswered) {
                if (opt.isCorrect) {
                  btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-medium ring-2 ring-emerald-400/30';
                } else if (isSelected && !opt.isCorrect) {
                  btnClass = 'bg-rose-50 border-rose-400 text-rose-900 font-medium';
                } else {
                  btnClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                btnClass = 'bg-teal-50 border-teal-600 text-teal-900 font-semibold ring-2 ring-teal-500/20';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 text-sm md:text-base ${btnClass}`}
                >
                  <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {opt.id}
                  </span>
                  <span className="leading-snug pt-0.5">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {/* Answer Feedback Explanation */}
          {isAnswered && chosenOpt && (
            <div className={`p-4 rounded-xl border space-y-1 animate-fade-in ${
              chosenOpt.isCorrect
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-rose-50 border-rose-200 text-rose-900'
            }`}>
              <div className="flex items-center gap-2 font-bold text-sm">
                {chosenOpt.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Keputusan Sangat Tepat! (+20 Poin)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>Keputusan Kurang Tepat</span>
                  </>
                )}
              </div>
              <p className="text-xs md:text-sm leading-relaxed pl-7">
                {chosenOpt.explanation}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
            {!isAnswered ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedOptionId}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow ${
                  selectedOptionId
                    ? 'bg-teal-600 hover:bg-teal-700 text-white active:scale-95'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Kunci Jawaban Saya
              </button>
            ) : (
              <button
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow active:scale-95"
              >
                <span>{currentStepIdx < steps.length - 1 ? 'Lanjut Misi Berikutnya' : 'Lihat Hasil Akhir'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Victory Finished Card */
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-500 shadow-inner">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800">
              Misi Selesai! Selamat! 🎉
            </h2>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Kamu telah menyelesaikan seluruh petualangan misi Akhlak kepada Allah Swt. melalui Doa dan Tawakal.
            </p>
          </div>

          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 inline-block max-w-sm w-full space-y-1">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Total Skor Kamu</span>
            <p className="text-4xl font-black text-teal-800">{score} <span className="text-lg font-bold text-teal-600">/ 100</span></p>
            <p className="text-xs text-teal-700 font-medium pt-1">
              {score === 100
                ? '🌟 Luar biasa! Pemahamanmu sempurna tentang Doa dan Tawakal!'
                : score >= 60
                ? '👍 Sangat Bagus! Kamu sudah memahami konsep dasar dengan baik!'
                : '💪 Tetap semangat! Mari baca materi kembali dan ulang petualangan!'}
            </p>
          </div>

          <div>
            <button
              onClick={handleResetGame}
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Mainkan Ulang Petualangan</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
