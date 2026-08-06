import React, { useState } from 'react';
import { GAME_QUESTIONS_KELAS1_P1 } from '../../data/kelas1Pembelajaran1Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Trophy, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Award, 
  Sparkles 
} from 'lucide-react';

export const HurufHijaiyahGamifikasi1_P1: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const question = GAME_QUESTIONS_KELAS1_P1[currentStep];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);

    const isCorrect = question.options[idx].isCorrect;
    if (isCorrect) {
      soundFX.playCorrect();
      setScore((prev) => prev + 25);
      if (!earnedBadges.includes(question.badgeEarned)) {
        setEarnedBadges((prev) => [...prev, question.badgeEarned]);
      }
    } else {
      soundFX.playWrong();
    }
  };

  const handleNextQuestion = () => {
    soundFX.playClick();
    setSelectedOption(null);
    if (currentStep < GAME_QUESTIONS_KELAS1_P1.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    soundFX.playClick();
    setCurrentStep(0);
    setScore(0);
    setSelectedOption(null);
    setEarnedBadges([]);
    setIsCompleted(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden p-6 md:p-8 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center font-black">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 bg-amber-400 text-amber-950 rounded-full">
              Gamifikasi Interaktif Kelas 1
            </span>
            <h3 className="text-xl font-black mt-0.5">Petualangan Makhraj & Harakat</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white/20 rounded-xl border border-white/30 text-center">
            <span className="text-[10px] uppercase font-bold block opacity-80">Skor Kamu</span>
            <span className="text-lg font-black text-amber-300">{score} PTS</span>
          </div>
        </div>
      </div>

      {!isCompleted ? (
        <div className="space-y-6">
          {/* PROGRESS */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Tantangan {currentStep + 1} dari {GAME_QUESTIONS_KELAS1_P1.length}</span>
              <span>Lencana Terkumpul: {earnedBadges.length}</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / GAME_QUESTIONS_KELAS1_P1.length) * 100}%` }}
              />
            </div>
          </div>

          {/* QUESTION BOX */}
          <div className="p-6 bg-emerald-50/80 rounded-2xl border border-emerald-100 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-xs font-black">
              <Sparkles className="w-3.5 h-3.5" /> Pertanyaan Petualangan
            </div>
            <p className="text-base md:text-lg font-bold text-slate-800 leading-snug">
              {question.scenario}
            </p>

            {/* OPTIONS */}
            <div className="space-y-3 pt-2">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                let btnStyle = 'bg-white border-slate-200 hover:border-emerald-500 text-slate-700';

                if (selectedOption !== null) {
                  if (opt.isCorrect) btnStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                  else if (isSelected && !opt.isCorrect) btnStyle = 'bg-rose-500 text-white border-rose-600';
                  else btnStyle = 'bg-white/50 border-slate-200 text-slate-400';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={selectedOption !== null}
                    className={`w-full p-4 text-left rounded-2xl border text-sm transition-all flex items-center justify-between shadow-xs ${btnStyle}`}
                  >
                    <span>{opt.text}</span>
                    {selectedOption !== null && opt.isCorrect && <CheckCircle className="w-5 h-5 text-white" />}
                    {selectedOption !== null && isSelected && !opt.isCorrect && <XCircle className="w-5 h-5 text-white" />}
                  </button>
                );
              })}
            </div>

            {/* FEEDBACK */}
            {selectedOption !== null && (
              <div className="p-4 bg-white rounded-xl border border-emerald-200 text-xs font-semibold text-slate-700 space-y-2 animate-fade-in">
                <p>{question.options[selectedOption].feedback}</p>
                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition shadow-md"
                >
                  {currentStep < GAME_QUESTIONS_KELAS1_P1.length - 1 ? 'Lanjut ke Tantangan Berikutnya' : 'Selesaikan Petualangan'}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* GAME OVER SUMMARY */
        <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-200 text-center space-y-6">
          <div className="w-20 h-20 bg-amber-400 text-amber-950 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <Trophy className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-800">
              Selamat! Petualangan Selesai!
            </h3>
            <p className="text-sm text-slate-600">
              Kamu telah berhasil menyelesaikan seluruh tantangan makhraj dan harakat.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-emerald-200 max-w-sm mx-auto space-y-1">
            <span className="text-xs font-bold text-slate-500 uppercase">Total Skor Akhir</span>
            <div className="text-3xl font-black text-emerald-600">{score} / 100 PTS</div>
          </div>

          {/* BADGES EARNED */}
          {earnedBadges.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center justify-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                Lencana Yang Diraih:
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {earnedBadges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-3.5 py-1.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-black shadow-2xs"
                  >
                    🏆 {badge}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-sm transition shadow-md active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Main Lagi</span>
          </button>
        </div>
      )}
    </div>
  );
};
