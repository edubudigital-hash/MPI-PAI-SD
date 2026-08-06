import React, { useState } from 'react';
import { GAME_QUESTIONS_KELAS1_P2 } from '../../data/kelas1Pembelajaran2Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Award, 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  Sparkles, 
  Trophy, 
  Heart, 
  ChevronRight 
} from 'lucide-react';

export const RukunImanGamifikasi1_P2: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = GAME_QUESTIONS_KELAS1_P2[currentIdx];

  const handleSelectOption = (optionIndex: number) => {
    if (selectedOption !== null) return; // Prevent double select

    setSelectedOption(optionIndex);
    const selected = currentQ.options[optionIndex];

    if (selected.isCorrect) {
      soundFX.playCorrect();
      setScore((prev) => prev + 25);
      if (!earnedBadges.includes(currentQ.badgeEarned)) {
        setEarnedBadges((prev) => [...prev, currentQ.badgeEarned]);
      }
    } else {
      soundFX.playWrong();
      setLives((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNext = () => {
    soundFX.playClick();
    setSelectedOption(null);
    if (currentIdx < GAME_QUESTIONS_KELAS1_P2.length - 1 && lives > 0) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    soundFX.playClick();
    setCurrentIdx(0);
    setScore(0);
    setLives(3);
    setSelectedOption(null);
    setEarnedBadges([]);
    setIsFinished(false);
  };

  return (
    <div className="space-y-6">
      {/* TOP HEADER */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-6 md:p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-xs flex items-center justify-center font-black">
            <Gamepad2 className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-black uppercase px-3 py-1 bg-amber-400 text-amber-950 rounded-full">
              Gamifikasi Kelas 1 Pembelajaran 2
            </span>
            <h3 className="text-xl md:text-2xl font-black mt-1">
              Petualangan Enam Rukun Iman
            </h3>
            <p className="text-xs text-emerald-100">
              Jelajahi misi keimanan, jawab pertanyaan dengan tepat, dan kumpulkan Lencana Prestasi!
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl border border-white/20">
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={i}
                className={`w-5 h-5 ${
                  i < lives ? 'text-rose-400 fill-rose-400' : 'text-slate-400 opacity-40'
                }`}
              />
            ))}
          </div>

          <div className="h-6 w-px bg-white/20" />

          <div className="text-center">
            <span className="text-[10px] font-bold uppercase text-emerald-200 block">Skor Kamu</span>
            <span className="text-lg font-black text-amber-300">{score} Poin</span>
          </div>
        </div>
      </div>

      {/* GAME BODY */}
      {!isFinished && lives > 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Misi Keimanan #{currentIdx + 1} / {GAME_QUESTIONS_KELAS1_P2.length}
            </span>
            <span className="text-xs font-bold px-2.5 py-1 bg-amber-100 text-amber-900 rounded-lg">
              Hadiah: {currentQ.badgeEarned}
            </span>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-base md:text-lg text-slate-800 font-bold leading-relaxed">
              {currentQ.scenario}
            </p>
          </div>

          <div className="space-y-3">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const hasAnswered = selectedOption !== null;

              let cardStyle = 'bg-white border-slate-200 hover:border-emerald-500 hover:shadow-md text-slate-700';

              if (hasAnswered) {
                if (option.isCorrect) {
                  cardStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                } else if (isSelected && !option.isCorrect) {
                  cardStyle = 'bg-rose-50 border-rose-400 text-rose-900 font-bold';
                } else {
                  cardStyle = 'bg-slate-50 border-slate-200 opacity-50';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={hasAnswered}
                  className={`w-full p-4 md:p-5 rounded-2xl border-2 text-left text-sm transition-all duration-200 flex items-center justify-between ${cardStyle}`}
                >
                  <span>{option.text}</span>

                  {hasAnswered && option.isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}

                  {hasAnswered && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* FEEDBACK & NEXT */}
          {selectedOption !== null && (
            <div className="space-y-4 pt-2">
              <div
                className={`p-4 rounded-2xl text-xs md:text-sm font-semibold border ${
                  currentQ.options[selectedOption].isCorrect
                    ? 'bg-emerald-100/80 border-emerald-300 text-emerald-900'
                    : 'bg-rose-100/80 border-rose-300 text-rose-900'
                }`}
              >
                {currentQ.options[selectedOption].feedback}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-md active:scale-95"
                >
                  <span>Misi Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* GAME OVER / COMPLETED SCREEN */
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-black border-4 border-amber-200 animate-bounce">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-800">
              {lives > 0 ? 'Selamat! Petualangan Selesai!' : 'Misi Terhenti! Jangan Menyerah!'}
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              {lives > 0
                ? 'Kamu telah menyelesaikan petualangan 6 Rukun Iman dengan baik sekali!'
                : 'Jangan berkecil hati, mari pelajari kembali Rukun Iman dan coba lagi!'}
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto space-y-3">
            <div className="text-sm font-bold text-slate-700">Skor Akhir Kamu:</div>
            <div className="text-3xl font-black text-emerald-600">{score} Poin</div>

            {earnedBadges.length > 0 && (
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase flex items-center justify-center gap-1">
                  <Award className="w-4 h-4 text-amber-500" /> Lencana Didapatkan:
                </span>
                <div className="flex flex-wrap justify-center gap-2">
                  {earnedBadges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold"
                    >
                      🏅 {badge}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold transition shadow-md active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Main Lagi</span>
          </button>
        </div>
      )}
    </div>
  );
};
