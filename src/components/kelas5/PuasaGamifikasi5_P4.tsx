import React, { useState } from 'react';
import { KELAS5_P4_QUEST_STEPS } from '../../data/kelas5Pembelajaran4Data';
import { 
  Gamepad2, 
  Trophy, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  HelpCircle,
  Award,
  ChevronRight,
  Flame,
  ShieldAlert
} from 'lucide-react';

export const PuasaGamifikasi5_P4: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const quest = KELAS5_P4_QUEST_STEPS[currentStep];

  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return; // Prevent changing after answered
    setSelectedOption(index);
    setShowExplanation(true);

    if (index === quest.correct) {
      setScore((prev) => prev + 100);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setShowHint(false);

    if (currentStep < KELAS5_P4_QUEST_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setScore(0);
    setShowExplanation(false);
    setIsFinished(false);
    setShowHint(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-6 rounded-3xl text-white shadow-lg gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-2">
            <Gamepad2 className="w-4 h-4" />
            Gamifikasi PAI Kelas 5
          </div>
          <h2 className="text-2xl font-bold">Petualangan Detektif Puasa</h2>
          <p className="text-sm text-white/90">Selesaikan setiap pos tantangan fiqih puasa wajib & sunah untuk meraih Gelar Detektif Takwa!</p>
        </div>

        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
          <Trophy className="w-8 h-8 text-amber-300 animate-bounce" />
          <div>
            <span className="text-xs uppercase tracking-wider text-white/80 font-bold">Skor Petualang</span>
            <div className="text-2xl font-black text-amber-300">{score} PTS</div>
          </div>
        </div>
      </div>

      {!isFinished ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <Flame className="w-5 h-5 text-amber-500" />
              <span>Pos {currentStep + 1} dari {KELAS5_P4_QUEST_STEPS.length}: {quest.title}</span>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-extrabold">
              {Math.round(((currentStep + 1) / KELAS5_P4_QUEST_STEPS.length) * 100)}%
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Story & Scene */}
            <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">Cerita Misi:</span>
              <p className="text-sm sm:text-base leading-relaxed font-medium">{quest.story}</p>
            </div>

            {/* Question */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                {quest.question}
              </h3>

              {/* Hint Toggle */}
              <div>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-xs text-amber-700 font-semibold hover:underline inline-flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  {showHint ? 'Sembunyikan Petunjuk' : 'Lihat Petunjuk Kunci'}
                </button>
                {showHint && (
                  <p className="mt-2 text-xs text-amber-900 bg-amber-100/70 p-3 rounded-xl border border-amber-200 italic">
                    💡 Petunjuk: {quest.hint}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                {quest.options.map((opt, idx) => {
                  let btnStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300';
                  let icon = <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 font-bold text-xs flex items-center justify-center">{String.fromCharCode(65 + idx)}</span>;

                  if (selectedOption !== null) {
                    if (idx === quest.correct) {
                      btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-semibold ring-2 ring-emerald-400';
                      icon = <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />;
                    } else if (idx === selectedOption) {
                      btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 font-semibold ring-2 ring-rose-400';
                      icon = <XCircle className="w-6 h-6 text-rose-600 shrink-0" />;
                    } else {
                      btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={selectedOption !== null}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center gap-3 transition-all duration-200 ${btnStyle}`}
                    >
                      {icon}
                      <span className="text-sm sm:text-base leading-snug">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Answer Feedback */}
            {showExplanation && (
              <div className={`p-5 rounded-2xl border ${selectedOption === quest.correct ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'} space-y-2`}>
                <div className="flex items-center gap-2 font-bold text-base">
                  {selectedOption === quest.correct ? (
                    <>
                      <Sparkles className="w-5 h-5 text-emerald-600" />
                      <span>Jawaban Kamu Tepat Sekali! (+100 PTS)</span>
                    </>
                  ) : (
                    <>
                      <ShieldAlert className="w-5 h-5 text-rose-600" />
                      <span>Kurang Tepat! Jawaban yang benar adalah opsi {String.fromCharCode(65 + quest.correct)}.</span>
                    </>
                  )}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">{quest.hint}</p>
              </div>
            )}
          </div>

          {/* Next Button */}
          {selectedOption !== null && (
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <span>{currentStep < KELAS5_P4_QUEST_STEPS.length - 1 ? 'Lanjut ke Pos Berikutnya' : 'Selesaikan Petualangan'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Finished Screen */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 text-center space-y-6">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
            <Award className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800">Petualangan Selesai! 🎉</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Selamat! Kamu telah menyelesaikan seluruh Tantangan Pos Fiqih Puasa Wajib dan Sunah.
            </p>
          </div>

          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 max-w-sm mx-auto space-y-1">
            <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Total Skor Kamu</span>
            <div className="text-4xl font-black text-emerald-600">{score} / {KELAS5_P4_QUEST_STEPS.length * 100} PTS</div>
            <p className="text-xs text-emerald-800 font-medium pt-1">
              {score >= 500 ? '🏆 Gelar: "Master Fiqih Puasa Takwa"' : '🌟 Gelar: "Pejuang Puasa Berbakat"'}
            </p>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
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
