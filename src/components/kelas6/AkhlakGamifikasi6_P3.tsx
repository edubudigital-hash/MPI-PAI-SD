import React, { useState } from 'react';
import { CROSSWORD_PUZZLE_KELAS6_P3 } from '../../data/kelas6Pembelajaran3Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Sparkles, 
  CheckCircle2, 
  Trophy, 
  RotateCcw, 
  Zap, 
  HelpCircle,
  Check,
  RefreshCw
} from 'lucide-react';

export const AkhlakGamifikasi6_P3: React.FC = () => {
  const { gridSize, clues } = CROSSWORD_PUZZLE_KELAS6_P3;

  // State for cell values (row-col -> letter)
  const [userGrid, setUserGrid] = useState<Record<string, string>>({});
  const [selectedClueId, setSelectedClueId] = useState<number>(clues[0].id);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Build grid cell mapping (row,col -> clue numbers starting at this cell)
  const numberGrid: Record<string, number> = {};
  const solutionGrid: Record<string, string> = {};

  clues.forEach(c => {
    const key = `${c.row}-${c.col}`;
    if (!numberGrid[key]) {
      numberGrid[key] = c.number;
    }

    for (let i = 0; i < c.answer.length; i++) {
      const r = c.direction === 'across' ? c.row : c.row + i;
      const col = c.direction === 'across' ? c.col + i : c.col;
      const cellKey = `${r}-${col}`;
      solutionGrid[cellKey] = c.answer[i];
    }
  });

  const handleCellChange = (r: number, c: number, val: string) => {
    if (isSubmitted) return;
    const letter = val.toUpperCase().slice(-1);
    const key = `${r}-${c}`;
    setUserGrid(prev => ({ ...prev, [key]: letter }));
    soundFX.playClick();
  };

  const handleCheckAnswers = () => {
    soundFX.playClick();
    setIsSubmitted(true);

    let totalCorrectCells = 0;
    let totalActiveCells = Object.keys(solutionGrid).length;

    Object.keys(solutionGrid).forEach(key => {
      if (userGrid[key] === solutionGrid[key]) {
        totalCorrectCells++;
      }
    });

    const calculatedScore = Math.round((totalCorrectCells / totalActiveCells) * 100);
    setScore(calculatedScore);

    if (calculatedScore >= 80) {
      soundFX.playFanfare();
    } else {
      soundFX.playCorrect();
    }
    setIsFinished(true);
  };

  const handleReset = () => {
    soundFX.playClick();
    setUserGrid({});
    setIsSubmitted(false);
    setScore(0);
    setIsFinished(false);
    setSelectedClueId(clues[0].id);
  };

  const activeClue = clues.find(c => c.id === selectedClueId) || clues[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-wider">
              Gamifikasi Interaktif • Teka-Teki Silang Akhlak Mulia
            </span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              Kelas 6 Pembelajaran 3
            </h2>
          </div>
        </div>

        {/* Stats Pills */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800 font-extrabold text-xs">
            <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Skor: {score}</span>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 text-xs font-extrabold"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset TTS</span>
          </button>
        </div>
      </div>

      {!isFinished ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Grid Section */}
          <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-900/60 p-5 sm:p-6 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-teal-600 uppercase tracking-wider">
                Papan Teka-Teki Silang (10x10)
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Isi kotak putih dengan huruf kapital
              </span>
            </div>

            {/* Grid Render */}
            <div className="grid grid-cols-10 gap-1 bg-slate-200 dark:bg-slate-800 p-2 rounded-2xl max-w-md mx-auto aspect-square">
              {Array.from({ length: gridSize }).map((_, r) =>
                Array.from({ length: gridSize }).map((_, c) => {
                  const cellKey = `${r}-${c}`;
                  const isCellActive = Boolean(solutionGrid[cellKey]);
                  const numberLabel = numberGrid[cellKey];
                  const userVal = userGrid[cellKey] || '';
                  const correctVal = solutionGrid[cellKey];

                  if (!isCellActive) {
                    return (
                      <div 
                        key={cellKey} 
                        className="bg-slate-800 dark:bg-slate-950 rounded-lg aspect-square"
                      />
                    );
                  }

                  let cellStyle = 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 focus-within:ring-2 focus-within:ring-teal-500';

                  if (isSubmitted) {
                    if (userVal === correctVal) {
                      cellStyle = 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-100 font-extrabold border-emerald-500';
                    } else {
                      cellStyle = 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-100 font-extrabold border-amber-500';
                    }
                  }

                  return (
                    <div 
                      key={cellKey}
                      className={`relative rounded-lg border flex items-center justify-center aspect-square transition-all ${cellStyle}`}
                    >
                      {numberLabel && (
                        <span className="absolute top-0.5 left-1 text-[9px] font-black text-teal-700 dark:text-teal-300 pointer-events-none">
                          {numberLabel}
                        </span>
                      )}
                      <input
                        type="text"
                        maxLength={1}
                        value={userVal}
                        onChange={(e) => handleCellChange(r, c, e.target.value)}
                        disabled={isSubmitted}
                        className="w-full h-full text-center text-sm sm:text-base font-black bg-transparent uppercase focus:outline-hidden"
                      />
                    </div>
                  );
                })
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={handleCheckAnswers}
                className="w-full py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Check className="w-5 h-5" />
                <span>Periksa Jawaban TTS</span>
              </button>
            </div>
          </div>

          {/* Right Clues Section */}
          <div className="lg:col-span-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-lg space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 text-xs font-black uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Petunjuk Soal TTS</span>
              </div>

              {/* Mendatar Clues */}
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase text-teal-600 tracking-wider">
                  Pertanyaan Mendatar (Across):
                </h4>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {clues.filter(c => c.direction === 'across').map(c => (
                    <button
                      key={c.id}
                      onClick={() => {
                        soundFX.playClick();
                        setSelectedClueId(c.id);
                      }}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-start gap-2 ${
                        selectedClueId === c.id
                          ? 'bg-teal-100 dark:bg-teal-950/80 border-teal-500 font-bold text-teal-950 dark:text-teal-100'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-teal-300'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md bg-teal-200 dark:bg-teal-900 text-teal-800 dark:text-teal-200 font-extrabold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                        {c.number}
                      </span>
                      <span>{c.clue}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Menurun Clues */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-black uppercase text-indigo-600 tracking-wider">
                  Pertanyaan Menurun (Down):
                </h4>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {clues.filter(c => c.direction === 'down').map(c => (
                    <button
                      key={c.id}
                      onClick={() => {
                        soundFX.playClick();
                        setSelectedClueId(c.id);
                      }}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-start gap-2 ${
                        selectedClueId === c.id
                          ? 'bg-indigo-100 dark:bg-indigo-950/80 border-indigo-500 font-bold text-indigo-950 dark:text-indigo-100'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 font-extrabold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                        {c.number}
                      </span>
                      <span>{c.clue}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Clue Highlight Box */}
            <div className="p-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-teal-700 dark:text-teal-300 tracking-wider">
                Fokus Soal #{activeClue.number} ({activeClue.direction === 'across' ? 'Mendatar' : 'Menurun'} - {activeClue.answer.length} Huruf)
              </span>
              <p className="text-xs font-bold text-slate-900 dark:text-white leading-relaxed">
                {activeClue.clue}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Finish Result Card */
        <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-900/60 p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 dark:bg-amber-950/80 border-4 border-amber-300 flex items-center justify-center text-amber-600 shadow-inner">
            <Trophy className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
              Teka-Teki Silang Selesai!
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Subhanallah! Hasil yang Hebat!
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Kamu telah menyelesaikan tantangan Teka-Teki Silang Akhlak Terpuji kepada Tetangga dan Non-Muslim!
            </p>
          </div>

          <div className="inline-block p-6 rounded-3xl bg-teal-50 dark:bg-teal-950/40 border-2 border-teal-200 dark:border-teal-800 space-y-1">
            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-widest">Skor TTS Kamu</span>
            <div className="text-4xl sm:text-5xl font-black text-teal-700 dark:text-teal-300">
              {score} / 100
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 max-w-md mx-auto text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
            {score >= 80 
              ? 'Masha Allah! Pemahamanmu tentang adab bertetangga dan toleransi sangat baik. Teruslah menjadi teladan kebaikan!'
              : 'Bagus sekali! Coba pelajari lagi poin-poin materi dan ulangi permainan untuk meraih nilai sempurna!'}
          </div>

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black text-sm transition-all shadow-md inline-flex items-center gap-2 active:scale-95 cursor-pointer"
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
