import React, { useState } from 'react';
import { KELAS3_P1_GAME } from '../../data/kelas3Pembelajaran1Data';
import { KELAS3_P2_GAME } from '../../data/kelas3Pembelajaran2Data';
import { KELAS3_P3_GAME } from '../../data/kelas3Pembelajaran3Data';
import { KELAS3_P4_GAME } from '../../data/kelas3Pembelajaran4Data';
import { KELAS3_P5_GAME, KELAS3_P5_TTS } from '../../data/kelas3Pembelajaran5Data';
import { soundFX } from '../../utils/audio';
import { Gamepad2, Award, RefreshCw, CheckCircle, XCircle, ArrowRight, Sparkles, Grid, Eye, Check } from 'lucide-react';

interface GamifikasiViewProps {
  grade: number;
  lesson: number;
}

export const GamifikasiView: React.FC<GamifikasiViewProps> = ({ grade, lesson }) => {
  const gameData = lesson === 5 ? KELAS3_P5_GAME : (lesson === 4 ? KELAS3_P4_GAME : (lesson === 3 ? KELAS3_P3_GAME : (lesson === 2 ? KELAS3_P2_GAME : KELAS3_P1_GAME)));
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // TTS State for Lesson 5
  const [ttsAnswers, setTtsAnswers] = useState<{ [clueId: number]: string }>({});
  const [ttsChecked, setTtsChecked] = useState<boolean>(false);
  const [showTtsKey, setShowTtsKey] = useState<boolean>(false);

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
    setTtsAnswers({});
    setTtsChecked(false);
    setShowTtsKey(false);
  };

  // TTS Handlers for Lesson 5
  const handleCheckTts = () => {
    soundFX.playClick();
    setTtsChecked(true);

    let correctCount = 0;
    KELAS3_P5_TTS.forEach((clue) => {
      const userVal = (ttsAnswers[clue.id] || '').trim().toUpperCase();
      if (userVal === clue.answer.toUpperCase()) {
        correctCount++;
      }
    });

    const calculatedScore = Math.round((correctCount / KELAS3_P5_TTS.length) * 100);
    setScore(calculatedScore);

    if (correctCount === KELAS3_P5_TTS.length) {
      soundFX.playFanfare();
      setIsCompleted(true);
    } else {
      soundFX.playCorrect();
    }
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
              {lesson === 5 ? 'Teka-Teki Silang (TTS) Kisah Nabi' : 'Petualangan Detektif PAI'}
            </h3>
            <p className="text-xs text-purple-200 font-medium">
              Kelas {grade} Pembelajaran {lesson} • {lesson === 5 ? 'Masa Kecil Rasulullah saw.' : 'Permainan Edukasi Interaktif'}
            </p>
          </div>
        </div>

        {/* Live Score Counter Badge */}
        <div className="bg-black/30 px-4 py-2 rounded-2xl border border-white/20 text-center shrink-0">
          <span className="text-[10px] text-purple-200 font-bold uppercase block">Skor Pemain</span>
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
              Permainan Selesai!
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white pt-1">
              Selamat! Kamu Berhasil Menamatkan Gamifikasi!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Kamu telah menyelesaikan seluruh tantangan gamifikasi dengan luar biasa!
            </p>
          </div>

          {/* Score Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 border-2 border-purple-200 dark:border-purple-800 max-w-xs mx-auto space-y-1">
            <span className="text-xs font-bold text-slate-500 uppercase">Total Skor Akhir</span>
            <div className="text-4xl font-black text-purple-700 dark:text-purple-300">{score} / 100</div>
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-1">
              {score >= 80 ? '🌟 Sangat Hebat & Cerdas!' : '👍 Bagus! Terus Berlatih!'}
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
      ) : lesson === 5 ? (
        /* LESSON 5: TEKA-TEKI SILANG INTERAKTIF */
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-purple-300 dark:border-purple-800 shadow-lg space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <Grid className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                Teka-Teki Silang (TTS) Kisah Nabi Muhammad saw.
              </h4>
            </div>
            <span className="text-xs font-extrabold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950 px-2.5 py-1 rounded-full">
              6 Pertanyaan
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Isilah kotak huruf berikut sesuai dengan pertanyaan Mendatar dan Menurun. Ketik jawabanmu menggunakan huruf kapital!
          </p>

          {/* Clues List with Letter Box Inputs */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h5 className="text-xs font-black uppercase text-purple-700 dark:text-purple-300 border-b pb-1">
                Pertanyaan TTS:
              </h5>

              {KELAS3_P5_TTS.map((clue) => {
                const userVal = (ttsAnswers[clue.id] || '').toUpperCase();
                const isCorrect = userVal === clue.answer.toUpperCase();
                const isWrong = ttsChecked && !isCorrect && userVal.length > 0;

                return (
                  <div key={clue.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        <span className="inline-block bg-purple-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md mr-1.5 uppercase">
                          {clue.number} {clue.direction === 'across' ? 'Mendatar' : 'Menurun'}
                        </span>
                        {clue.clue}
                      </div>

                      {ttsChecked && (
                        <div className="shrink-0">
                          {isCorrect ? (
                            <span className="text-[11px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                              <Check className="w-3 h-3 stroke-[3]" /> Benar
                            </span>
                          ) : (
                            <span className="text-[11px] font-black text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-950 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                              <XCircle className="w-3 h-3" /> Coba Lagi
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Letter Input Row */}
                    <div className="flex items-center gap-1.5 pt-1 overflow-x-auto pb-1">
                      {Array.from({ length: clue.answer.length }).map((_, charIdx) => {
                        const charVal = userVal[charIdx] || '';
                        let boxStyle = 'border-purple-300 dark:border-purple-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white';

                        if (ttsChecked) {
                          if (isCorrect) {
                            boxStyle = 'border-emerald-500 bg-emerald-100 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-200 font-black';
                          } else if (isWrong) {
                            boxStyle = 'border-rose-500 bg-rose-100 dark:bg-rose-950 text-rose-950 dark:text-rose-200 font-bold';
                          }
                        }

                        return (
                          <input
                            key={charIdx}
                            type="text"
                            maxLength={1}
                            value={showTtsKey ? clue.answer[charIdx] : charVal}
                            onChange={(e) => {
                              soundFX.playClick();
                              const newChar = e.target.value.toUpperCase();
                              const prevArr = userVal.split('');
                              prevArr[charIdx] = newChar;
                              const newStr = prevArr.join('');
                              setTtsAnswers((prev) => ({ ...prev, [clue.id]: newStr }));
                            }}
                            className={`w-9 h-10 text-center text-sm font-black rounded-xl border-2 uppercase focus:outline-hidden focus:ring-2 focus:ring-purple-500 transition ${boxStyle}`}
                          />
                        );
                      })}
                    </div>

                    {showTtsKey && (
                      <div className="text-xs font-bold text-purple-700 dark:text-purple-300 pt-1">
                        🔑 Kunci Jawaban: <span className="font-mono uppercase tracking-widest">{clue.answer}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons for TTS */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setShowTtsKey(!showTtsKey)}
              className="px-4 py-2.5 rounded-xl border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 text-purple-900 dark:text-purple-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-purple-600" />
              <span>{showTtsKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
            </button>

            <button
              onClick={handleCheckTts}
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-md cursor-pointer border border-purple-500 active:scale-95"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Cek Jawaban TTS</span>
            </button>
          </div>
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
