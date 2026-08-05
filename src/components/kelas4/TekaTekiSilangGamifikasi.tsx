import React, { useState } from 'react';
import { KELAS4_P3_CROSSWORD_CLUES, CrosswordClue } from '../../data/kelas4Pembelajaran3Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Sparkles, 
  Trophy, 
  RefreshCw, 
  CheckCircle2, 
  HelpCircle, 
  Star, 
  Award,
  ChevronRight,
  Flame
} from 'lucide-react';

interface ComponentProps {
  grade: number;
  lesson: number;
}

export const TekaTekiSilangGamifikasi: React.FC<ComponentProps> = ({ grade, lesson }) => {
  const clues = KELAS4_P3_CROSSWORD_CLUES;
  
  // Grid Dimensions (7 rows, 12 cols)
  const ROWS = 7;
  const COLS = 12;

  // Initialize empty grid state
  // We map each cell to either empty space OR { clueNum: number, correctLetter: string, userLetter: string }
  const [userAnswers, setUserAnswers] = useState<{ [clueNum: number]: string }>({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: ''
  });

  const [activeClueNum, setActiveClueNum] = useState<number>(1);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [checkedResults, setCheckedResults] = useState<{ [clueNum: number]: boolean }>({});
  const [score, setScore] = useState<number>(0);

  const activeClue = clues.find((c) => c.num === activeClueNum) || clues[0];

  const handleInputChange = (clueNum: number, value: string) => {
    const valUpper = value.toUpperCase().slice(0, clues.find(c => c.num === clueNum)?.answer.length || 15);
    setUserAnswers((prev) => ({ ...prev, [clueNum]: valUpper }));
  };

  const handleCheckClue = (clueNum: number) => {
    soundFX.playClick();
    const clueObj = clues.find((c) => c.num === clueNum);
    if (!clueObj) return;

    const userVal = (userAnswers[clueNum] || '').trim().toUpperCase();
    const isCorrect = userVal === clueObj.answer.toUpperCase();

    if (isCorrect) {
      soundFX.playCorrect();
      setCheckedResults((prev) => ({ ...prev, [clueNum]: true }));
    } else {
      soundFX.playWrong();
      setCheckedResults((prev) => ({ ...prev, [clueNum]: false }));
    }

    // Check if all clues are answered correctly
    const newResults = { ...checkedResults, [clueNum]: isCorrect };
    const allDone = clues.every((c) => newResults[c.num] === true);
    if (allDone) {
      setIsCompleted(true);
      setScore(100);
      soundFX.playFanfare();
    }
  };

  const handleCheckAll = () => {
    soundFX.playClick();
    let correctCount = 0;
    const newResults: { [clueNum: number]: boolean } = {};

    clues.forEach((clueObj) => {
      const userVal = (userAnswers[clueObj.num] || '').trim().toUpperCase();
      if (userVal === clueObj.answer.toUpperCase()) {
        newResults[clueObj.num] = true;
        correctCount += 1;
      } else {
        newResults[clueObj.num] = false;
      }
    });

    setCheckedResults(newResults);
    const calculatedScore = Math.round((correctCount / clues.length) * 100);
    setScore(calculatedScore);

    if (correctCount === clues.length) {
      setIsCompleted(true);
      soundFX.playFanfare();
    } else if (correctCount > 0) {
      soundFX.playCorrect();
    } else {
      soundFX.playWrong();
    }
  };

  const handleReset = () => {
    soundFX.playClick();
    setUserAnswers({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
    setActiveClueNum(1);
    setIsCompleted(false);
    setCheckedResults({});
    setScore(0);
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <Gamepad2 className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-purple-200 uppercase tracking-wider block">
              Gamifikasi Edukasi Interaktif • BAB 3
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Teka-Teki Silang Interaktif: Akhlak Keluarga
            </h3>
            <p className="text-xs text-purple-100 font-medium">
              Isilah Kata Kunci Akhlak Terpuji kepada Ayah, Ibu, Saudara & Silaturahmi!
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 shrink-0">
          <Trophy className="w-6 h-6 text-amber-300 animate-bounce" />
          <div>
            <span className="text-[10px] font-bold text-purple-200 block uppercase">Skor TTS</span>
            <span className="text-xl font-black text-white">{score} Poin</span>
          </div>
        </div>
      </div>

      {!isCompleted ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-purple-200 dark:border-purple-800 shadow-xl space-y-6">
          {/* Top Instruction */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-black text-purple-600 dark:text-purple-400 uppercase tracking-wider block">
                Petunjuk Teka-Teki Silang
              </span>
              <h4 className="text-lg font-black text-slate-900 dark:text-white">
                Pilih Pertanyaan Pertanyaan dan Isikan Jawabannya!
              </h4>
            </div>

            <button
              onClick={handleCheckAll}
              className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center space-x-2 shadow-md transition active:scale-95 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Periksa Semua Jawaban</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clues List */}
            <div className="space-y-3">
              <h5 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                Daftar Pertanyaan TTS:
              </h5>

              <div className="space-y-2">
                {clues.map((c) => {
                  const isActive = c.num === activeClueNum;
                  const result = checkedResults[c.num];
                  return (
                    <div
                      key={c.num}
                      onClick={() => {
                        soundFX.playClick();
                        setActiveClueNum(c.num);
                      }}
                      className={`p-3.5 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'bg-purple-50 dark:bg-purple-950/60 border-purple-500 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-purple-50/40'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs ${
                            result === true
                              ? 'bg-emerald-500 text-white'
                              : result === false
                              ? 'bg-rose-500 text-white'
                              : isActive
                              ? 'bg-purple-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {c.num}
                        </span>
                        <div>
                          <span className="text-[10px] font-bold text-purple-600 uppercase block">
                            {c.direction === 'across' ? 'Mendatar' : 'Menurun'} ({c.answer.length} Huruf)
                          </span>
                          <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            {c.clue}
                          </p>
                        </div>
                      </div>

                      {result === true && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Clue Input Stage */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/80 border-2 border-purple-200 dark:border-slate-700 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-xs font-black text-purple-700 dark:text-purple-300 uppercase">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>Sedang Menjawab Soal #{activeClue.num} ({activeClue.direction === 'across' ? 'Mendatar' : 'Menurun'}):</span>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-slate-700 shadow-xs">
                  <p className="text-sm font-black text-slate-900 dark:text-white">
                    "{activeClue.clue}"
                  </p>
                  <span className="text-xs font-bold text-slate-400 block pt-1">
                    Panjang kata: {activeClue.answer.length} Huruf
                  </span>
                </div>

                {/* Individual Letter Input Cells */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block">
                    Ketik Jawabanmu di sini:
                  </label>
                  <input
                    type="text"
                    value={userAnswers[activeClue.num] || ''}
                    onChange={(e) => handleInputChange(activeClue.num, e.target.value)}
                    placeholder={`Ketik ${activeClue.answer.length} huruf...`}
                    className="w-full p-3.5 rounded-2xl border border-purple-300 dark:border-purple-700 bg-white dark:bg-slate-900 text-base font-black tracking-widest text-slate-900 dark:text-white uppercase focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Letter Box Visualizer */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {Array.from({ length: activeClue.answer.length }).map((_, idx) => {
                    const char = (userAnswers[activeClue.num] || '')[idx] || '';
                    return (
                      <div
                        key={idx}
                        className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 flex items-center justify-center text-lg font-black text-purple-700 dark:text-purple-300 shadow-xs uppercase"
                      >
                        {char}
                      </div>
                    );
                  })}
                </div>

                {/* Feedback status for active clue */}
                {checkedResults[activeClue.num] !== undefined && (
                  <div
                    className={`p-3 rounded-xl text-xs font-bold ${
                      checkedResults[activeClue.num]
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}
                  >
                    {checkedResults[activeClue.num]
                      ? '✨ Jawaban Benar! Selamat!'
                      : '❌ Jawaban Belum Tepat. Coba periksa kembali!'}
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => handleCheckClue(activeClue.num)}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs cursor-pointer shadow-md transition active:scale-95"
                >
                  Cek Jawaban Soal #{activeClue.num}
                </button>

                {activeClueNum < clues.length && (
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setActiveClueNum((prev) => prev + 1);
                    }}
                    className="text-xs font-bold text-purple-700 dark:text-purple-300 flex items-center space-x-1 cursor-pointer hover:underline"
                  >
                    <span>Soal Berikutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* GAME COMPLETED RESULT MODAL */
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-2xl text-center space-y-6 animate-in fade-in">
          <div className="w-20 h-20 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center animate-bounce shadow-inner">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-black text-purple-600 uppercase tracking-widest block">
              Teka-Teki Silang Selesai!
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Bintang Akhlak Keluarga
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Kamu telah berhasil menjawab seluruh teka-teki silang akhlak terpuji kepada keluarga!
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-50 via-indigo-50 to-amber-50 dark:from-slate-800 dark:to-slate-800/80 border border-amber-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase">Total Skor TTS</span>
            <div className="text-5xl font-black text-purple-600 dark:text-purple-400">
              {score} <span className="text-lg text-slate-400">/ 100 Poin</span>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold border border-emerald-300 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                <span>Lencana Juara Akhlakul Karimah</span>
              </span>
            </div>
          </div>

          <div className="flex gap-4 justify-center pt-2">
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs sm:text-sm flex items-center space-x-2 shadow-lg transition active:scale-95 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Main Ulang TTS</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
