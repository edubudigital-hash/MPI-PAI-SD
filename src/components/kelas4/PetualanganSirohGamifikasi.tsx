import React, { useState } from 'react';
import { KELAS4_P5_QUEST_STEPS, QuestStep } from '../../data/kelas4Pembelajaran5Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ChevronRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

interface PetualanganSirohGamifikasiProps {
  grade: number;
  lesson: number;
}

export const PetualanganSirohGamifikasi: React.FC<PetualanganSirohGamifikasiProps> = ({ grade, lesson }) => {
  const steps = KELAS4_P5_QUEST_STEPS;
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [userHistory, setUserHistory] = useState<{ [stepIdx: number]: { isCorrect: boolean; text: string } }>({});

  const currentStep: QuestStep = steps[currentStepIdx];

  const handleSelectOption = (optId: string, isCorrect: boolean, text: string) => {
    if (selectedOptionId !== null) return; // Prevent double click
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
    <div id="gamifikasi-p5-container" className="space-y-6 max-w-5xl mx-auto">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-700 to-indigo-900 text-white rounded-3xl p-6 shadow-xl border border-emerald-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <Gamepad2 className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider block">
              Gamifikasi Interaktif • Kelas {grade} Pembelajaran {lesson}
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Petualangan Angkasa Siroh Nabi Periode Makkah
            </h3>
            <p className="text-xs text-emerald-100 font-medium">
              Selesaikan 5 Stasiun Misi Sejarah dan Raih Bintang Gelar Teladan Rasulullah!
            </p>
          </div>
        </div>

        {/* Score Pill */}
        <div className="bg-amber-400 text-slate-950 px-5 py-2.5 rounded-2xl border border-amber-200 font-black text-sm flex items-center space-x-2 shadow-md shrink-0">
          <Award className="w-5 h-5 text-slate-900" />
          <span>Skor Petualangan: {score} / 100</span>
        </div>
      </div>

      {/* GAME BOARD */}
      {!completed ? (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-xl space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <Compass className="w-4 h-4" />
                Stasiun Misi {currentStepIdx + 1} dari {steps.length}
              </span>
              <span>{Math.round(((currentStepIdx + 1) / steps.length) * 100)}% Selesai</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentStepIdx + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Scenario Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50/60 p-6 rounded-2xl border border-emerald-200/80 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold">
                {currentStep.title}
              </span>
              <span className="text-xs font-bold text-emerald-800">{currentStep.scenarioTitle}</span>
            </div>
            <p className="text-slate-800 text-sm md:text-base leading-relaxed font-medium">
              {currentStep.scenarioStory}
            </p>
          </div>

          {/* Question Prompt */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-slate-900 leading-snug">
              ❓ {currentStep.questionPrompt}
            </h4>

            {/* Options */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {currentStep.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                let btnStyle = 'bg-slate-50 hover:bg-emerald-50/50 border-slate-200 text-slate-800';

                if (selectedOptionId !== null) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold ring-2 ring-emerald-400';
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = 'bg-rose-100 border-rose-400 text-rose-900 font-bold ring-2 ring-rose-300';
                  } else {
                    btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    disabled={selectedOptionId !== null}
                    onClick={() => handleSelectOption(opt.id, opt.isCorrect, opt.text)}
                    className={`p-4 rounded-xl border-2 text-left text-sm md:text-base transition-all flex items-start justify-between gap-3 ${btnStyle}`}
                  >
                    <span className="leading-relaxed">{opt.text}</span>
                    {selectedOptionId !== null && opt.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {selectedOptionId !== null && isSelected && !opt.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation Box when option selected */}
          {selectedOptionId !== null && (
            <div className="space-y-4 pt-2">
              {currentStep.options.find((o) => o.id === selectedOptionId)?.isCorrect ? (
                <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-xl text-emerald-900 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-emerald-800 font-bold">Jawaban Kamu Tepat!</strong>
                    <span>{currentStep.options.find((o) => o.id === selectedOptionId)?.explanation}</span>
                  </div>
                </div>
              ) : (
                <div className="bg-rose-50 border border-rose-300 p-4 rounded-xl text-rose-900 text-sm flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-rose-800 font-bold">Jawaban Belum Tepat!</strong>
                    <span>{currentStep.options.find((o) => o.id === selectedOptionId)?.explanation}</span>
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  id="btn-next-quest-step-p5"
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 shadow-lg transition-all"
                >
                  <span>Lanjut Stasiun Berikutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* VICTORY / COMPLETION CARD */
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-amber-300 shadow-2xl text-center space-y-6 max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full mx-auto flex items-center justify-center border-4 border-amber-300 shadow-lg">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
              Misi Angkasa Siroh Selesai!
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-800">
              Selamat! Kamu Meraih Lencana Bintang Teladan Rasulullah!
            </h3>
            <p className="text-sm text-slate-600">
              Kamu berhasil menyelesaikan 5 Misi Sejarah Perjuangan Rasulullah saw. Periode Makkah dengan luar biasa.
            </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-2xl shadow-md inline-block min-w-[240px]">
            <span className="text-xs uppercase font-bold tracking-wider block text-emerald-100">Total Skor Kamu</span>
            <span className="text-4xl font-black">{score} / 100</span>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              id="btn-reset-game-p5"
              onClick={handleResetGame}
              className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Mainkan Lagi Petualangan</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
