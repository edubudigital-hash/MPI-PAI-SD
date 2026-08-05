import React, { useState } from 'react';
import { KELAS5_P2_QUEST_STEPS } from '../../data/kelas5Pembelajaran2Data';
import { soundFX } from '../../utils/audio';
import { 
  Trophy, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Heart, 
  Compass, 
  Gift, 
  Award 
} from 'lucide-react';

interface PetualanganGamifikasiProps {
  grade: number;
  lesson: number;
}

export const PetualanganAsmaulHusnaGamifikasi5_P2: React.FC<PetualanganGamifikasiProps> = ({ grade, lesson }) => {
  const steps = KELAS5_P2_QUEST_STEPS;
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentStep = steps[currentStepIdx];

  const handleSelectOption = (optId: string, isCorrect: boolean) => {
    if (isAnswered) return;
    setSelectedOptionId(optId);
    setIsAnswered(true);

    if (isCorrect) {
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

  const handleRestart = () => {
    soundFX.playClick();
    setCurrentStepIdx(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 1: return <ShieldCheck className="w-5 h-5 text-blue-500" />;
      case 2: return <Gift className="w-5 h-5 text-emerald-500" />;
      case 3: return <Compass className="w-5 h-5 text-cyan-500" />;
      case 4: return <Heart className="w-5 h-5 text-rose-500" />;
      default: return <Award className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-indigo-900 rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
            <Trophy className="w-5 h-5" />
            <span>Gamifikasi Interaktif • Kelas {grade} Pembelajaran {lesson}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-amber-200">
            Petualangan 4 Sifat Mulia Asmaul Husna
          </h2>
          <p className="text-emerald-100 text-sm mt-1">
            Meneladani Al-Halīm, Asy-Syakūr, Al-Hakīm, & Al-Wadūd
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/20 flex items-center gap-3">
          <Award className="w-6 h-6 text-amber-300" />
          <div>
            <span className="text-xs text-emerald-200 block uppercase font-semibold">Skor Petualangan</span>
            <span className="text-2xl font-black text-amber-300">{score} / 100</span>
          </div>
        </div>
      </div>

      {!isFinished ? (
        /* Active Game Step Card */
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-emerald-100 space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200">
                {getStepIcon(currentStepIdx)}
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md uppercase">
                  Babak {currentStepIdx + 1} dari {steps.length}
                </span>
                <h3 className="text-lg font-bold text-slate-800 mt-1">
                  {currentStep.title}
                </h3>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-semibold text-slate-400 block">Kemajuan</span>
              <span className="text-sm font-bold text-emerald-700">
                {Math.round(((currentStepIdx + 1) / steps.length) * 100)}%
              </span>
            </div>
          </div>

          {/* Scenario Story Box */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5 space-y-2">
            <h4 className="font-extrabold text-emerald-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              {currentStep.scenarioTitle}
            </h4>
            <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed italic">
              "{currentStep.scenarioStory}"
            </p>
          </div>

          {/* Question Prompt */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-slate-800 text-base md:text-lg">
              {currentStep.questionPrompt}
            </h4>

            {/* Options List */}
            <div className="space-y-3">
              {currentStep.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                let btnStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-emerald-50/60 hover:border-emerald-300';

                if (isAnswered) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = 'bg-rose-100 border-rose-400 text-rose-900';
                  } else {
                    btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id, opt.isCorrect)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border text-sm md:text-base font-medium transition flex items-start justify-between gap-3 ${btnStyle}`}
                  >
                    <span>{opt.text}</span>
                    {isAnswered && (
                      <span className="shrink-0 mt-0.5">
                        {opt.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-rose-500" />
                        ) : null}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation Banner after Selection */}
          {isAnswered && (
            <div
              className={`p-4 rounded-xl border text-sm font-medium leading-relaxed flex items-start gap-3 animate-fade-in ${
                currentStep.options.find((o) => o.id === selectedOptionId)?.isCorrect
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}
            >
              <Sparkles className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
              <div>
                <strong className="block font-bold mb-0.5">Penjelasan Hikmah:</strong>
                {currentStep.options.find((o) => o.id === selectedOptionId)?.explanation}
              </div>
            </div>
          )}

          {/* Action Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextStep}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-transform hover:scale-105 flex items-center gap-2"
              >
                <span>{currentStepIdx < steps.length - 1 ? 'Lanjut Babak Berikutnya' : 'Selesaikan Petualangan'}</span>
                <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Finish Victory Card */
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 text-center space-y-6">
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Trophy className="w-10 h-10 animate-bounce" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Petualangan Selesai!
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mt-2">
              Selamat! Kamu Pahlawan Akhlak Asmaul Husna!
            </h3>
            <p className="text-slate-600 text-sm mt-1 max-w-lg mx-auto">
              Kamu telah menyelesaikan seluruh tantangan meneladani sifat Al-Halīm, Asy-Syakūr, Al-Hakīm, dan Al-Wadūd.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 max-w-xs mx-auto space-y-1 shadow-sm">
            <span className="text-xs font-bold text-emerald-800 uppercase block">Total Nilai Petualangan</span>
            <span className="text-4xl font-black text-emerald-700">{score} / 100</span>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold shadow-md transition-transform hover:scale-105"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Mainkan Lagi Petualangan</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
