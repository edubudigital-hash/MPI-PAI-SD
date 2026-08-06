import React, { useState } from 'react';
import { PUZZLE_GAMES_KELAS1_P5 } from '../../data/kelas1Pembelajaran5Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Award, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  ChevronRight, 
  HelpCircle,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export const KisahNabiAdamGamifikasi1_P5: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const currentQ = PUZZLE_GAMES_KELAS1_P5[currentIdx];

  const [currentWords, setCurrentWords] = useState<string[]>(
    [...currentQ.scrambledWords].sort(() => Math.random() - 0.5)
  );

  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [isCurrentSuccess, setIsCurrentSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const moveWord = (index: number, direction: 'up' | 'down') => {
    soundFX.playClick();
    const newWords = [...currentWords];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;

    if (targetIdx >= 0 && targetIdx < newWords.length) {
      const temp = newWords[index];
      newWords[index] = newWords[targetIdx];
      newWords[targetIdx] = temp;
      setCurrentWords(newWords);
      setIsCurrentSuccess(false);
    }
  };

  const handleCheckOrder = () => {
    const isCorrect = currentWords.every(
      (word, idx) => word === currentQ.correctSentence[idx]
    );

    if (isCorrect) {
      soundFX.playCorrect();
      setIsCurrentSuccess(true);
      if (!earnedBadges.includes(currentQ.badge)) {
        setEarnedBadges((prev) => [...prev, currentQ.badge]);
        setScore((prev) => prev + 50);
      }
    } else {
      soundFX.playWrong();
      alert('Urutan kata belum tepat! Coba geser kata naik atau turun agar membentuk kalimat yang benar ya!');
    }
  };

  const handleNextLevel = () => {
    soundFX.playClick();
    setIsCurrentSuccess(false);
    setShowHint(false);

    if (currentIdx < PUZZLE_GAMES_KELAS1_P5.length - 1) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setCurrentWords(
        [...PUZZLE_GAMES_KELAS1_P5[nextIdx].scrambledWords].sort(() => Math.random() - 0.5)
      );
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    soundFX.playClick();
    setCurrentIdx(0);
    setScore(0);
    setCurrentWords(
      [...PUZZLE_GAMES_KELAS1_P5[0].scrambledWords].sort(() => Math.random() - 0.5)
    );
    setEarnedBadges([]);
    setIsCurrentSuccess(false);
    setShowHint(false);
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
              Gamifikasi Kelas 1 Pembelajaran 5
            </span>
            <h3 className="text-xl md:text-2xl font-black mt-1">
              Game Susun Kata Kisah Nabi Adam a.s.
            </h3>
            <p className="text-xs text-emerald-100">
              Susun kata-kata acak menjadi kalimat yang benar tentang kisah Nabi Adam a.s.
            </p>
          </div>
        </div>

        {/* SCORE BOARD */}
        <div className="bg-white/10 p-3.5 rounded-2xl border border-white/20 text-center shrink-0">
          <span className="text-[10px] font-bold uppercase text-emerald-200 block">Skor Total</span>
          <span className="text-xl font-black text-amber-300">{score} Poin</span>
        </div>
      </div>

      {!isFinished ? (
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Tingkat #{currentIdx + 1} / {PUZZLE_GAMES_KELAS1_P5.length}: {currentQ.title}
            </span>

            <button
              onClick={() => {
                soundFX.playClick();
                setShowHint(!showHint);
              }}
              className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 transition"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Petunjuk</span>
            </button>
          </div>

          {showHint && (
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 font-medium">
              💡 <strong>Petunjuk Guru:</strong> {currentQ.hint}
            </div>
          )}

          {/* ITEM ORDERING AREA */}
          <div className="space-y-3">
            <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block">
              Gunakan tombol panah Naik ↑ / Turun ↓ untuk menyusun kata:
            </label>

            <div className="space-y-2">
              {currentWords.map((word, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-50 hover:bg-emerald-50 rounded-2xl border border-slate-200 hover:border-emerald-300 transition flex items-center justify-between gap-3 shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm md:text-base font-bold text-slate-800">
                      {word}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => moveWord(idx, 'up')}
                      disabled={idx === 0}
                      className="p-2 bg-white hover:bg-emerald-100 disabled:opacity-30 text-slate-700 rounded-xl border border-slate-200 transition"
                      title="Geser Naik"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => moveWord(idx, 'down')}
                      disabled={idx === currentWords.length - 1}
                      className="p-2 bg-white hover:bg-emerald-100 disabled:opacity-30 text-slate-700 rounded-xl border border-slate-200 transition"
                      title="Geser Turun"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800 font-medium">
              <strong>Hasil Susunan:</strong> "{currentWords.join(' ')}"
            </div>
          </div>

          {/* SUCCESS BOX OR CHECK BUTTON */}
          {isCurrentSuccess ? (
            <div className="p-5 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-950 space-y-3 animate-in fade-in zoom-in duration-200">
              <div className="flex items-center gap-2 font-black text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Māsyā Allāh! Susunan Kalimat Kamu 100% Benar!</span>
              </div>
              <div className="text-xs text-emerald-800 font-medium">
                Makna: "{currentQ.meaning}"
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleNextLevel}
                  className="flex items-center gap-1.5 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition shadow-md"
                >
                  <span>Tingkat Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-end">
              <button
                onClick={handleCheckOrder}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-md active:scale-95"
              >
                Cek Susunan Kalimat
              </button>
            </div>
          )}
        </div>
      ) : (
        /* FINISHED SCREEN */
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-black border-4 border-amber-200 animate-bounce">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-800">
              Selamat! Kamu Paham Kisah Nabi Adam a.s.!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Kamu telah berhasil menyusun seluruh kalimat hikmah dan teladan Nabi Adam a.s. dengan sempurna!
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
