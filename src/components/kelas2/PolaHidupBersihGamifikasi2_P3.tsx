import React, { useState } from 'react';
import { WORD_SCRAMBLE_KELAS2_P3 } from '../../data/kelas2Pembelajaran3Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Sparkles, 
  Trophy, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Lightbulb,
  Award,
  HeartPulse,
  Flame
} from 'lucide-react';

interface PolaHidupBersihGamifikasi2_P3Props {
  grade: number;
  lesson: number;
}

export const PolaHidupBersihGamifikasi2_P3: React.FC<PolaHidupBersihGamifikasi2_P3Props> = ({ grade, lesson }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const currentQ = WORD_SCRAMBLE_KELAS2_P3[currentIndex];

  const handleCheckAnswer = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userGuess.trim() || feedback !== null) return;

    const normalizedGuess = userGuess.trim().toUpperCase().replace(/\s+/g, ' ');
    const normalizedTarget = currentQ.correctWord.toUpperCase();

    if (normalizedGuess === normalizedTarget) {
      soundFX.playCorrect();
      setScore(prev => prev + 20);
      setStreak(prev => prev + 1);
      setFeedback({
        isCorrect: true,
        message: `Hebat! Kata yang benar adalah "${currentQ.correctWord}".`
      });
    } else {
      soundFX.playWrong();
      setStreak(0);
      setFeedback({
        isCorrect: false,
        message: `Masih kurang tepat. Jawaban yang benar adalah "${currentQ.correctWord}".`
      });
    }
  };

  const handleNextQuestion = () => {
    soundFX.playClick();
    setUserGuess('');
    setFeedback(null);
    setShowHint(false);

    if (currentIndex < WORD_SCRAMBLE_KELAS2_P3.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsGameFinished(true);
    }
  };

  const handleRestartGame = () => {
    soundFX.playClick();
    setCurrentIndex(0);
    setUserGuess('');
    setScore(0);
    setStreak(0);
    setShowHint(false);
    setFeedback(null);
    setIsGameFinished(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/80 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 font-bold shrink-0">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800 leading-tight">
              Gamifikasi Interaktif: Acak Kata Kebersihan & Kesehatan
            </h2>
            <p className="text-xs text-slate-500">
              PAI SD Kelas {grade} • Bab {lesson} (Pola Hidup Bersih & Sehat)
            </p>
          </div>
        </div>

        {/* Score & Streak Stats */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-600" />
            <div className="text-xs">
              <span className="font-bold">Skor: </span>
              <span className="font-black text-amber-700">{score}</span>
            </div>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-2">
            <Flame className="w-4 h-4 text-rose-600" />
            <div className="text-xs">
              <span className="font-bold">Streak: </span>
              <span className="font-black text-rose-700">{streak}x</span>
            </div>
          </div>
        </div>
      </div>

      {!isGameFinished ? (
        /* Game Arena Card */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative">
          {/* Question Indicator */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
              Tantangan {currentIndex + 1} dari {WORD_SCRAMBLE_KELAS2_P3.length}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
              {currentQ.category}
            </span>
          </div>

          {/* Scrambled Word Display */}
          <div className="text-center my-6">
            <div className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">
              Susun Kembali Huruf Acak Ini:
            </div>
            <div className="inline-block bg-purple-50/80 border border-purple-200 rounded-2xl px-6 py-4 shadow-inner">
              <span className="text-2xl sm:text-4xl font-black text-purple-900 tracking-widest font-mono">
                {currentQ.scrambledWord}
              </span>
            </div>
          </div>

          {/* Clue / Prompt */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 text-center">
            <span className="text-xs font-bold text-slate-500 block mb-1">PETUNJUK KATA:</span>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              "{currentQ.clue}"
            </p>
          </div>

          {/* Hint Toggle */}
          <div className="text-center mb-6">
            {!showHint ? (
              <button
                onClick={() => {
                  soundFX.playClick();
                  setShowHint(true);
                }}
                className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-bold hover:underline"
              >
                <Lightbulb className="w-4 h-4" />
                <span>Butuh Bantuan Huruf Depan?</span>
              </button>
            ) : (
              <div className="text-xs font-bold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200 inline-block">
                💡 Huruf Depan Kata: "{currentQ.correctWord[0]}" (Panjang Kata: {currentQ.correctWord.length} Huruf)
              </div>
            )}
          </div>

          {/* User Input Form */}
          <form onSubmit={handleCheckAnswer} className="max-w-md mx-auto space-y-4">
            <div>
              <input
                type="text"
                disabled={feedback !== null}
                placeholder="Ketik kata susunan kamu di sini..."
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                className="w-full p-3.5 text-center text-sm font-bold tracking-wider rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 uppercase transition-all"
              />
            </div>

            {feedback === null ? (
              <button
                type="submit"
                disabled={!userGuess.trim()}
                className={`w-full py-3 rounded-xl text-xs font-bold transition-all shadow-md ${
                  userGuess.trim()
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Cek Jawaban Saya
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="w-full py-3 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Tantangan Berikutnya</span>
                <Sparkles className="w-4 h-4" />
              </button>
            )}
          </form>

          {/* Feedback Banner */}
          {feedback && (
            <div className={`mt-6 p-4 rounded-2xl text-xs font-semibold flex items-center gap-3 max-w-md mx-auto ${
              feedback.isCorrect
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                : 'bg-rose-100 text-rose-900 border border-rose-300'
            }`}>
              {feedback.isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
              )}
              <div>{feedback.message}</div>
            </div>
          )}
        </div>
      ) : (
        /* Game Finished / Results Modal Card */
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs text-center max-w-md mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-200">
            <Award className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-2">Permainan Selesai!</h3>
          <p className="text-xs text-slate-500 mb-6">
            Kamu telah menyelesaikan semua tantangan Acak Kata Pola Hidup Bersih & Sehat.
          </p>

          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 mb-6">
            <span className="text-xs font-bold text-purple-800 block uppercase tracking-wider mb-1">
              Total Skor Kamu:
            </span>
            <span className="text-4xl font-black text-purple-600">
              {score} / 100
            </span>
          </div>

          <button
            onClick={handleRestartGame}
            className="w-full py-3 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 transition-all shadow-md flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Main Lagi Dari Awal</span>
          </button>
        </div>
      )}
    </div>
  );
};
