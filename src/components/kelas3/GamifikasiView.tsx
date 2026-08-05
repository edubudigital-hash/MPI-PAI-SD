import React, { useState } from 'react';
import { KELAS3_P1_GAME } from '../../data/kelas3Pembelajaran1Data';
import { KELAS3_P2_GAME } from '../../data/kelas3Pembelajaran2Data';
import { KELAS3_P3_GAME } from '../../data/kelas3Pembelajaran3Data';
import { soundFX } from '../../utils/audio';
import { Gamepad2, Award, RefreshCw, CheckCircle, XCircle, ArrowRight, Sparkles } from 'lucide-react';

interface GamifikasiViewProps {
  grade: number;
  lesson: number;
}

export const GamifikasiView: React.FC<GamifikasiViewProps> = ({ grade, lesson }) => {
  const gameData = lesson === 3 ? KELAS3_P3_GAME : (lesson === 2 ? KELAS3_P2_GAME : KELAS3_P1_GAME);
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const level = gameData[currentLevelIndex] || gameData[0];
  const totalLevels = gameData.length;

  const handleSelectOption = (optionId: string, isCorrect: boolean) => {
    if (selectedOptionId !== null) return; // Prevent double select

    setSelectedOptionId(optionId);
    if (isCorrect) {
      soundFX.playCorrect();
      setScore((prev) => prev + 20);
    } else {
      soundFX.playWrong();
    }
  };

  const handleNextLevel = () => {
    soundFX.playClick();
    setSelectedOptionId(null);

    if (currentLevelIndex < totalLevels - 1) {
      setCurrentLevelIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      soundFX.playFanfare();
    }
  };

  const handleResetGame = () => {
    soundFX.playClick();
    setCurrentLevelIndex(0);
    setSelectedOptionId(null);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200 max-w-3xl mx-auto">
      {/* Game Header Card */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-3xl p-6 text-white shadow-xl border-2 border-purple-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30 shrink-0">
            <Gamepad2 className="w-7 h-7 text-amber-300" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold bg-amber-400 text-purple-950 px-2.5 py-0.5 rounded-full uppercase">
              Gamifikasi Interaktif PAI
            </span>
            <h3 className="text-xl font-black pt-0.5">
              Petualangan Detektif Tajwid
            </h3>
            <p className="text-xs text-purple-200 font-medium">
              Kelas {grade} Pembelajaran {lesson} • Misi Berburu Mad Ṭabī‘ī
            </p>
          </div>
        </div>

        {/* Live Score Counter Badge */}
        <div className="bg-black/30 px-4 py-2 rounded-2xl border border-white/20 text-center shrink-0">
          <span className="text-[10px] text-purple-200 font-bold uppercase block">Skor Detektif</span>
          <span className="text-2xl font-black text-amber-300">{score} PTS</span>
        </div>
      </div>

      {/* COMPLETED STATE / TROPHY SCREEN */}
      {isCompleted ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border-2 border-purple-300 dark:border-purple-800 shadow-xl text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-lg border-2 border-amber-400">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full uppercase">
              Petualangan Selesai!
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white pt-1">
              Selamat! Kamu Berhasil Menamatkan Misi!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Kamu telah menyelesaikan seluruh tantangan detektif Mad Ṭabī‘ī dengan luar biasa!
            </p>
          </div>

          {/* Score Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 border-2 border-purple-200 dark:border-purple-800 max-w-xs mx-auto space-y-1">
            <span className="text-xs font-bold text-slate-500 uppercase">Total Skor Akhir</span>
            <div className="text-4xl font-black text-purple-700 dark:text-purple-300">{score} / 100</div>
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-1">
              {score >= 80 ? '🌟 Detektif Tajwid Handal!' : '👍 Bagus! Terus Berlatih!'}
            </p>
          </div>

          <button
            onClick={handleResetGame}
            className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-sm flex items-center space-x-2 mx-auto shadow-lg active:scale-95 cursor-pointer border border-purple-500"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Mainkan Lagi</span>
          </button>
        </div>
      ) : (
        /* ACTIVE GAME LEVEL CARD */
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-purple-300 dark:border-purple-800 shadow-lg space-y-6">
          {/* Level Progress Indicator */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="text-xs font-extrabold text-purple-700 dark:text-purple-300 uppercase bg-purple-100 dark:bg-purple-950/80 px-3 py-1 rounded-full">
              {level.stage}
            </span>
            <span className="text-xs font-bold text-slate-500">
              Tantangan {currentLevelIndex + 1} dari {totalLevels}
            </span>
          </div>

          {/* Question Prompt */}
          <div className="space-y-3">
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
              {level.prompt}
            </h4>

            {level.arabicSnippet && (
              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border-2 border-purple-200 dark:border-purple-800 text-center my-3">
                <span className="font-arabic text-3xl sm:text-4xl text-purple-900 dark:text-purple-200 font-bold">
                  {level.arabicSnippet}
                </span>
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="space-y-3">
            {level.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              const hasAnswered = selectedOptionId !== null;

              let btnStyle = 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-purple-400 hover:bg-purple-50/50';

              if (hasAnswered) {
                if (option.isCorrect) {
                  btnStyle = 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 border-emerald-500 ring-2 ring-emerald-400';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-100 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200 border-rose-500';
                } else {
                  btnStyle = 'bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-800 opacity-60';
                }
              }

              return (
                <button
                  key={option.id}
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(option.id, option.isCorrect)}
                  className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                >
                  <span className="leading-snug">{option.text}</span>
                  {hasAnswered && option.isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer Explanation & Next Level Action */}
          {selectedOptionId !== null && (
            <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border-2 border-purple-200 dark:border-purple-800 space-y-3 animate-in fade-in duration-200">
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                💡 {level.options.find((o) => o.id === selectedOptionId)?.explanation}
              </div>

              <button
                onClick={handleNextLevel}
                className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md active:scale-95 cursor-pointer border border-purple-500"
              >
                <span>{currentLevelIndex < totalLevels - 1 ? 'Lanjut Level Berikutnya' : 'Lihat Hasil Akhir'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
