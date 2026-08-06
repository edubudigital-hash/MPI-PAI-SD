import React, { useState } from 'react';
import { PUZZLE_GAMES_KELAS1_P3 } from '../../data/kelas1Pembelajaran3Data';
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
  Undo2
} from 'lucide-react';

export const KalimatTayyibahGamifikasi1_P3: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [userArrangedWords, setUserArrangedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>(
    [...PUZZLE_GAMES_KELAS1_P3[0].scrambledWords].sort(() => Math.random() - 0.5)
  );
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [isCurrentSuccess, setIsCurrentSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = PUZZLE_GAMES_KELAS1_P3[currentIdx];

  const handleWordClick = (word: string, indexInAvailable: number) => {
    soundFX.playClick();
    setUserArrangedWords((prev) => [...prev, word]);
    setAvailableWords((prev) => prev.filter((_, idx) => idx !== indexInAvailable));
  };

  const handleRemoveWord = (word: string, indexInUser: number) => {
    soundFX.playClick();
    setUserArrangedWords((prev) => prev.filter((_, idx) => idx !== indexInUser));
    setAvailableWords((prev) => [...prev, word]);
    setIsCurrentSuccess(false);
  };

  const handleCheckAnswer = () => {
    const isCorrect =
      userArrangedWords.length === currentQ.correctSentence.length &&
      userArrangedWords.every((w, idx) => w === currentQ.correctSentence[idx]);

    if (isCorrect) {
      soundFX.playCorrect();
      setIsCurrentSuccess(true);
      if (!earnedBadges.includes(currentQ.badge)) {
        setEarnedBadges((prev) => [...prev, currentQ.badge]);
        setScore((prev) => prev + 25);
      }
    } else {
      soundFX.playWrong();
      alert('Susunan kata belum tepat! Coba atur ulang atau gunakan bantuan petunjuk ya!');
    }
  };

  const handleNextLevel = () => {
    soundFX.playClick();
    setIsCurrentSuccess(false);
    setShowHint(false);
    setUserArrangedWords([]);

    if (currentIdx < PUZZLE_GAMES_KELAS1_P3.length - 1) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setAvailableWords([...PUZZLE_GAMES_KELAS1_P3[nextIdx].scrambledWords].sort(() => Math.random() - 0.5));
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    soundFX.playClick();
    setCurrentIdx(0);
    setScore(0);
    setUserArrangedWords([]);
    setAvailableWords([...PUZZLE_GAMES_KELAS1_P3[0].scrambledWords].sort(() => Math.random() - 0.5));
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
              Gamifikasi Kelas 1 Pembelajaran 3
            </span>
            <h3 className="text-xl md:text-2xl font-black mt-1">
              Game Susun Kata Kalimat Ṭayyibah
            </h3>
            <p className="text-xs text-emerald-100">
              Susun kata-kata acak menjadi kalimat ṭayyibah yang sempurna!
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
              Tingkat #{currentIdx + 1} / {PUZZLE_GAMES_KELAS1_P3.length}: {currentQ.title}
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

          {/* USER DROP / ARRANGED AREA */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block">
              Susunan Kata Kamu (Klik kata untuk meletakkannya atau menghapusnya):
            </label>

            <div className="min-h-[80px] p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-emerald-300 flex flex-wrap items-center gap-2">
              {userArrangedWords.length === 0 ? (
                <span className="text-xs text-slate-400 italic">
                  Klik kata-kata acak di bawah untuk menyusun kalimat...
                </span>
              ) : (
                userArrangedWords.map((word, uIdx) => (
                  <button
                    key={uIdx}
                    onClick={() => handleRemoveWord(word, uIdx)}
                    className="px-4 py-2.5 bg-emerald-600 text-white font-black text-xs md:text-sm rounded-xl shadow-sm hover:bg-rose-600 transition flex items-center gap-1.5 group"
                  >
                    <span>{word}</span>
                    <Undo2 className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </button>
                ))
              )}
            </div>
          </div>

          {/* AVAILABLE WORDS AREA */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block">
              Pilihan Kata Acak:
            </label>

            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex flex-wrap gap-2">
              {availableWords.map((word, aIdx) => (
                <button
                  key={aIdx}
                  onClick={() => handleWordClick(word, aIdx)}
                  className="px-4 py-2.5 bg-white text-emerald-900 font-extrabold text-xs md:text-sm rounded-xl border border-emerald-300 hover:border-emerald-600 hover:bg-emerald-100 hover:shadow-md transition"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          {/* SUCCESS BOX OR CHECK BUTTON */}
          {isCurrentSuccess ? (
            <div className="p-5 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-950 space-y-3 animate-in fade-in zoom-in duration-200">
              <div className="flex items-center gap-2 font-black text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Luar Biasa! Susunan Kata Sangat Tepat!</span>
              </div>
              <p className="text-xs font-medium">
                <strong>Makna:</strong> {currentQ.meaning}
              </p>
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
                onClick={handleCheckAnswer}
                disabled={userArrangedWords.length === 0}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition shadow-md active:scale-95"
              >
                Cek Susunan Kata
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
              Selamat! Kamu Juara Susun Kata!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Kamu telah berhasil menyusun seluruh kalimat tayyibah Subḥānallāh dan Māsyā Allāh dengan sangat mahir!
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
