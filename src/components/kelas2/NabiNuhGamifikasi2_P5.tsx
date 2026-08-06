import React, { useState } from 'react';
import { GAME_QUESTIONS_KELAS2_P5 } from '../../data/kelas2Pembelajaran5Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Trophy, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Award, 
  Ship, 
  Sparkles,
  ArrowRight,
  Heart
} from 'lucide-react';

interface NabiNuhGamifikasi2_P5Props {
  grade?: number;
  lesson?: number;
}

export const NabiNuhGamifikasi2_P5: React.FC<NabiNuhGamifikasi2_P5Props> = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const activeQuestion = GAME_QUESTIONS_KELAS2_P5[currentStep];

  const handleSelectOption = (optIdx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optIdx);

    const isCorrect = activeQuestion.options[optIdx].isCorrect;
    if (isCorrect) {
      soundFX.playCorrect();
      setScore((prev) => prev + 25);
      setEarnedBadges((prev) => [...prev, activeQuestion.badgeEarned]);
    } else {
      soundFX.playWrong();
    }
  };

  const handleNextQuestion = () => {
    soundFX.playClick();
    setSelectedOption(null);
    if (currentStep < GAME_QUESTIONS_KELAS2_P5.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestartGame = () => {
    soundFX.playClick();
    setCurrentStep(0);
    setSelectedOption(null);
    setScore(0);
    setEarnedBadges([]);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-6">
      {/* HEADER CARD */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-600">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-black uppercase px-3 py-1 bg-amber-400 text-emerald-950 rounded-full border border-amber-300">
            Gamifikasi Interaktif Kelas 2
          </span>
          <h2 className="text-2xl md:text-3xl font-black pt-1 flex items-center justify-center md:justify-start gap-2">
            <Ship className="w-8 h-8 text-amber-300" /> Petualangan Kapal Nabi Nuh a.s.
          </h2>
          <p className="text-xs md:text-sm text-emerald-100 max-w-xl font-medium">
            Bantu perjalanan dakwah dan pembuatan kapal Nabi Nuh a.s. dengan menjawab tantangan kebaikan dan keteladanan!
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/20 backdrop-blur-xs shrink-0">
          <div className="text-center">
            <div className="text-[10px] font-extrabold uppercase text-emerald-200">
              Skor Kamu
            </div>
            <div className="text-2xl font-black text-amber-300">{score}</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-[10px] font-extrabold uppercase text-emerald-200">
              Lencana
            </div>
            <div className="text-2xl font-black text-white">{earnedBadges.length}</div>
          </div>
        </div>
      </div>

      {/* GAME CONTENT */}
      {!isCompleted ? (
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-emerald-100 shadow-lg space-y-6">
          {/* PROGRESS BAR */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-black text-slate-500">
              <span>Misi Ke-{currentStep + 1} dari {GAME_QUESTIONS_KELAS2_P5.length}</span>
              <span>{Math.round(((currentStep + 1) / GAME_QUESTIONS_KELAS2_P5.length) * 100)}% Selesai</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / GAME_QUESTIONS_KELAS2_P5.length) * 100}%` }}
              />
            </div>
          </div>

          {/* SCENARIO CARD */}
          <div className="p-6 bg-emerald-50/80 rounded-2xl border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-black text-emerald-800 uppercase">
              <Sparkles className="w-4 h-4 text-emerald-600" /> Tantangan Misi
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
              {activeQuestion.scenario}
            </h3>
          </div>

          {/* OPTIONS */}
          <div className="space-y-3">
            {activeQuestion.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const hasSelected = selectedOption !== null;

              let style = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700';
              if (hasSelected) {
                if (isSelected && opt.isCorrect) {
                  style = 'bg-emerald-500 text-white border-emerald-600 shadow-md font-bold';
                } else if (isSelected && !opt.isCorrect) {
                  style = 'bg-rose-500 text-white border-rose-600 shadow-md';
                } else if (opt.isCorrect) {
                  style = 'bg-emerald-500/20 text-emerald-900 border-emerald-300 font-bold';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasSelected}
                  className={`w-full p-4 rounded-2xl text-xs md:text-sm border transition text-left flex items-center justify-between ${style}`}
                >
                  <span className="leading-relaxed">{opt.text}</span>
                  {hasSelected && isSelected && opt.isCorrect && <CheckCircle2 className="w-5 h-5 text-white shrink-0" />}
                  {hasSelected && isSelected && !opt.isCorrect && <XCircle className="w-5 h-5 text-white shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* FEEDBACK BOX */}
          {selectedOption !== null && (
            <div className={`p-4 rounded-2xl border text-xs md:text-sm font-medium space-y-2 animate-in fade-in duration-200 ${
              activeQuestion.options[selectedOption].isCorrect
                ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                : 'bg-rose-50 text-rose-900 border-rose-200'
            }`}>
              <div className="font-extrabold flex items-center gap-1.5">
                {activeQuestion.options[selectedOption].isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Jawaban Tepat! Lencana Diterima: {activeQuestion.badgeEarned}
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" /> Kurang Tepat! Belajar lagi yuk.
                  </>
                )}
              </div>
              <p>{activeQuestion.options[selectedOption].feedback}</p>

              <button
                onClick={handleNextQuestion}
                className="mt-3 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 ml-auto shadow-md"
              >
                <span>Lanjut Misi Berikutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* GAME OVER CELEBRATION CARD */
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-lg border-2 border-amber-300">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-extrabold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
              Misi Selesai Dengan Sukses!
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800">
              Selamat! Kamu Berhasil Meneladani Nabi Nuh a.s.!
            </h3>
            <p className="text-xs md:text-sm text-slate-600 max-w-lg mx-auto">
              Kamu telah menyelesaikan seluruh petualangan dengan nilai sempurna dan mengumpulkan lencana kebaikan!
            </p>
          </div>

          {/* BADGES GALLERY */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 max-w-xl mx-auto">
            <h4 className="text-xs font-black text-slate-700 uppercase flex items-center justify-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" /> Koleksi Lencana Kebajikan:
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {earnedBadges.map((badge, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-amber-400 text-amber-950 text-xs font-extrabold rounded-xl shadow-xs border border-amber-300">
                  🏅 {badge}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={handleRestartGame}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-extrabold text-sm transition shadow-lg active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Mainkan Lagi Petualangan</span>
          </button>
        </div>
      )}
    </div>
  );
};
