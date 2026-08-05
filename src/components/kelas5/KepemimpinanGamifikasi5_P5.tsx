import React, { useState } from 'react';
import { KELAS5_P5_QUEST_STEPS } from '../../data/kelas5Pembelajaran5Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Trophy, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users
} from 'lucide-react';

interface Props {
  grade?: number;
  lesson?: number;
}

export const KepemimpinanGamifikasi5_P5: React.FC<Props> = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentStep = KELAS5_P5_QUEST_STEPS[currentStepIndex];

  const handleSelectOption = (index: number) => {
    if (isSubmitted) return;
    soundFX.playClick();
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isSubmitted) return;
    
    setIsSubmitted(true);
    if (selectedOption === currentStep.correct) {
      soundFX.playCorrect();
      setScore((prev) => prev + 100);
    } else {
      soundFX.playWrong();
    }
  };

  const handleNextStep = () => {
    soundFX.playClick();
    if (currentStepIndex < KELAS5_P5_QUEST_STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
      setShowHint(false);
    } else {
      setIsCompleted(true);
      soundFX.playFanfare();
    }
  };

  const handleRestart = () => {
    soundFX.playClick();
    setCurrentStepIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowHint(false);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-2xl border border-slate-200 shadow-sm gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold mb-1">
            <Gamepad2 className="w-3.5 h-3.5" />
            Gamifikasi Edukasi Interaktif
          </div>
          <h2 className="text-xl font-bold text-slate-900">Petualangan Kepemimpinan Rasulullah di Madinah</h2>
          <p className="text-xs md:text-sm text-slate-500">Jelajahi Pos Perjuangan, Pecahkan Masalah, dan Teladani Sifat Rasulullah saw.!</p>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
          <div className="flex items-center gap-1.5">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-extrabold text-slate-800">{score} Poin</span>
          </div>
          <div className="h-4 w-px bg-slate-300" />
          <span className="text-xs font-semibold text-purple-700">
            Pos {currentStepIndex + 1} / {KELAS5_P5_QUEST_STEPS.length}
          </span>
        </div>
      </div>

      {!isCompleted ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2">
            <div 
              className="bg-purple-600 h-full transition-all duration-300 ease-out"
              style={{ width: `${((currentStepIndex + 1) / KELAS5_P5_QUEST_STEPS.length) * 100}%` }}
            />
          </div>

          {/* Pos Banner Header */}
          <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-emerald-700 p-6 md:p-8 text-white relative">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-white">
                  {currentStep.title}
                </span>
                <p className="text-xs md:text-sm text-white/90 font-medium mt-2 leading-relaxed">
                  {currentStep.story}
                </p>
              </div>
            </div>
          </div>

          {/* Question & Options Area */}
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                {currentStep.question}
              </h3>
            </div>

            {/* Hint Button */}
            {!isSubmitted && (
              <div>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-800 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200 transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{showHint ? 'Sembunyikan Petunjuk' : 'Lihat Petunjuk'}</span>
                </button>
                {showHint && (
                  <p className="mt-2 text-xs text-purple-900 bg-purple-50/80 p-3 rounded-xl border border-purple-200 font-medium italic">
                    💡 Petunjuk: {currentStep.hint}
                  </p>
                )}
              </div>
            )}

            {/* Options List */}
            <div className="grid grid-cols-1 gap-3">
              {currentStep.options.map((option, idx) => {
                let btnStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-purple-50 hover:border-purple-300';

                if (selectedOption === idx) {
                  btnStyle = 'bg-purple-50 border-purple-500 text-purple-900 font-semibold ring-2 ring-purple-400';
                }

                if (isSubmitted) {
                  if (idx === currentStep.correct) {
                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-400';
                  } else if (selectedOption === idx) {
                    btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-semibold ring-2 ring-rose-300';
                  } else {
                    btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-xl bg-white border border-slate-300 flex items-center justify-center font-bold text-xs text-slate-700 shrink-0 shadow-xs">
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="leading-snug">{option}</span>
                    </div>

                    {isSubmitted && idx === currentStep.correct && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isSubmitted && selectedOption === idx && idx !== currentStep.correct && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback & Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              {isSubmitted ? (
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {selectedOption === currentStep.correct ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Jawaban Tepat! (+100 Poin)</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-100 text-rose-800 font-bold text-xs">
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Kurang Tepat. Pelajari kembali materi Pos ini!</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleNextStep}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{currentStepIndex < KELAS5_P5_QUEST_STEPS.length - 1 ? 'Lanjut ke Pos Berikutnya' : 'Selesaikan Petualangan'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="w-full flex justify-end">
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md ${
                      selectedOption !== null
                        ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/20'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Konfirmasi Jawaban Pos
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Completion Victory Card */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Petualangan Selesai!
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Selamat! Kamu Telah Menyelesaikan Petualangan Madinah
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Kamu telah berhasil menjelajahi sejarah perjuangan Rasulullah saw. dan meneladani sifat-sifat kepemimpinan beliau!
            </p>
          </div>

          {/* Stats Badge */}
          <div className="inline-flex items-center gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div>
              <div className="text-xs text-slate-500 font-medium">Skor Akhir</div>
              <div className="text-2xl font-extrabold text-purple-700">{score} Poin</div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <div className="text-xs text-slate-500 font-medium">Gelar Teladan</div>
              <div className="text-sm font-bold text-emerald-700 flex items-center gap-1">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Pemimpin Muda Amanah</span>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-600/20 transition-all hover:scale-105"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Mainkan Petualangan Lagi</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
