import React, { useState } from 'react';
import { SHALAT_ADVENTURE_KELAS2_P4 } from '../../data/kelas2Pembelajaran4Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  RotateCcw, 
  Sparkles, 
  Trophy, 
  Star, 
  CheckCircle2, 
  XCircle, 
  HelpCircle,
  Clock,
  Compass
} from 'lucide-react';

interface ShalatFarduGamifikasi2_P4Props {
  grade: number;
  lesson: number;
}

export const ShalatFarduGamifikasi2_P4: React.FC<ShalatFarduGamifikasi2_P4Props> = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const question = SHALAT_ADVENTURE_KELAS2_P4[currentStep];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    const isCorrect = question.options[idx].isCorrect;

    if (isCorrect) {
      soundFX.playCorrect();
      setScore(prev => prev + 20);
    } else {
      soundFX.playWrong();
    }
  };

  const handleNextQuestion = () => {
    soundFX.playClick();
    setSelectedOption(null);
    setShowHint(false);

    if (currentStep < SHALAT_ADVENTURE_KELAS2_P4.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      soundFX.playCorrect();
      setIsCompleted(true);
    }
  };

  const handleResetGame = () => {
    soundFX.playClick();
    setCurrentStep(0);
    setScore(0);
    setSelectedOption(null);
    setShowHint(false);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-6">
      {/* HEADER GAMIFIKASI */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 rounded-3xl shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl">
            <Compass className="w-7 h-7 text-emerald-200" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-black bg-emerald-800/80 text-emerald-100 rounded-full border border-emerald-400/30">
                Gamifikasi Interaktif Bab 4
              </span>
              <span className="text-xs font-medium text-emerald-100">
                Petualangan Shalat Fardu
              </span>
            </div>
            <h2 className="text-xl font-extrabold mt-1">
              Jelajah Waktu & Ketentuan Salat Fardu
            </h2>
          </div>
        </div>

        {/* SCORE & RESTART */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-4 py-2 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20">
            <Trophy className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-bold text-emerald-100">Skor:</span>
            <span className="text-base font-black text-white">{score}</span>
          </div>

          <button
            onClick={handleResetGame}
            className="p-2.5 bg-white/10 hover:bg-white/20 rounded-2xl text-emerald-100 transition"
            title="Ulangi Gamifikasi"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* GAME STAGE */}
      {!isCompleted ? (
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden p-6 md:p-8 space-y-6">
          {/* PROGRESS BAR */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-extrabold text-slate-600">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" /> Tantangan Waktu {currentStep + 1} dari {SHALAT_ADVENTURE_KELAS2_P4.length}
              </span>
              <span>{Math.round(((currentStep + 1) / SHALAT_ADVENTURE_KELAS2_P4.length) * 100)}% Selesai</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${((currentStep + 1) / SHALAT_ADVENTURE_KELAS2_P4.length) * 100}%` }}
              />
            </div>
          </div>

          {/* SCENARIO CARD */}
          <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 rounded-md">
                Kisah & Misi Salat
              </span>
            </div>
            <p className="text-sm md:text-base font-bold text-slate-800 leading-relaxed">
              {question.scenario}
            </p>
          </div>

          {/* OPTIONS */}
          <div className="grid grid-cols-1 gap-3">
            {question.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const hasAnswered = selectedOption !== null;

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`p-4 rounded-2xl text-left text-xs md:text-sm font-semibold transition flex items-center justify-between border ${
                    hasAnswered
                      ? opt.isCorrect
                        ? 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold'
                        : isSelected
                        ? 'bg-rose-100 border-rose-400 text-rose-900 font-bold'
                        : 'bg-slate-50 border-slate-200 opacity-60'
                      : 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 text-slate-700 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt.text}</span>
                  </div>

                  {hasAnswered && (
                    <span>
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

          {/* FEEDBACK AND NEXT BUTTON */}
          {selectedOption !== null && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3 animate-fade-in">
              <p className="text-xs md:text-sm font-semibold text-emerald-900">
                {question.options[selectedOption].feedback}
              </p>

              <div className="text-right">
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md transition"
                >
                  Lanjut Misi Berikutnya →
                </button>
              </div>
            </div>
          )}

          {/* HINT TOGGLE */}
          {selectedOption === null && (
            <div className="pt-2">
              <button
                onClick={() => {
                  soundFX.playClick();
                  setShowHint(!showHint);
                }}
                className="flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition"
              >
                <HelpCircle className="w-4 h-4" /> {showHint ? "Sembunyikan Petunjuk" : "Lihat Petunjuk Misi"}
              </button>

              {showHint && (
                <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                  💡 <strong>Petunjuk:</strong> {question.hint}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* GAME OVER SCREEN */
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-800">
              Misi Petualangan Salat Selesai!
            </h3>
            <p className="text-xs md:text-sm text-slate-600 max-w-md mx-auto">
              Alhamdulillah! Kamu berhasil menyelesaikan seluruh tantangan mengenai ketentuan dan gerakan shalat fardu dengan sangat baik.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 font-extrabold text-lg">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
            <span>Skor Akhir: {score} / 100</span>
          </div>

          <div>
            <button
              onClick={handleResetGame}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-2xl shadow-lg transition"
            >
              Mainkan Lagi Petualangan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
