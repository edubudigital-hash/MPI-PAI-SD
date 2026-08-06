import React, { useState } from 'react';
import { GAMIFIKASI_MISSION_KELAS2_P1, GamifikasiMission } from '../../data/kelas2Pembelajaran1Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Heart, 
  Trophy, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  BrainCircuit, 
  ShieldCheck,
  Star
} from 'lucide-react';

interface AnNasAlFalaqGamifikasi2_P1Props {
  grade: number;
  lesson: number;
}

export const AnNasAlFalaqGamifikasi2_P1: React.FC<AnNasAlFalaqGamifikasi2_P1Props> = () => {
  const [currentMissionIdx, setCurrentMissionIdx] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const activeMission: GamifikasiMission = GAMIFIKASI_MISSION_KELAS2_P1[currentMissionIdx];

  const handleSelectOption = (idx: number) => {
    if (hasSubmitted) return;
    soundFX.playClick();
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || hasSubmitted) return;

    setHasSubmitted(true);
    const chosen = activeMission.options[selectedOption];

    if (chosen.isCorrect) {
      soundFX.playCorrect();
      setScore(prev => prev + 20);
    } else {
      soundFX.playWrong();
      setHearts(prev => Math.max(0, prev - 1));
    }
  };

  const handleNextMission = () => {
    if (currentMissionIdx < GAMIFIKASI_MISSION_KELAS2_P1.length - 1 && hearts > 0) {
      soundFX.playClick();
      setCurrentMissionIdx(prev => prev + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
    } else {
      soundFX.playFanfare();
      setIsGameFinished(true);
    }
  };

  const handleRestartGame = () => {
    soundFX.playClick();
    setCurrentMissionIdx(0);
    setHearts(3);
    setScore(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setIsGameFinished(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 font-bold text-xs uppercase tracking-wider mb-2">
              <Gamepad2 className="w-3.5 h-3.5 text-yellow-300" />
              <span>Gamifikasi Edukasi • Kelas 2 Bab 1</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Petualangan Detektif Hijaiyah & Benteng Al-Mu'awwidzatain
            </h1>
            <p className="text-xs sm:text-sm text-amber-100 mt-1">
              Selesaikan 5 Misi tantangan membaca hijaiyah 3 huruf, urutan ayat Surah An-Nas, dan pengamalan Surah Al-Falaq!
            </p>
          </div>

          {/* Status HUD (Score & Hearts) */}
          <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 shrink-0">
            <div className="flex items-center gap-1 text-rose-300">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  className={`w-5 h-5 ${i < hearts ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`}
                />
              ))}
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex items-center gap-1.5 text-yellow-300 font-extrabold text-sm">
              <Trophy className="w-4 h-4" />
              <span>{score} Pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* GAME PLAY STAGE */}
      {!isGameFinished && hearts > 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
          {/* Mission Progress Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-amber-600 text-white font-extrabold text-xs flex items-center justify-center">
                {currentMissionIdx + 1}
              </span>
              <div>
                <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  Misi {currentMissionIdx + 1} dari {GAMIFIKASI_MISSION_KELAS2_P1.length}
                </span>
                <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100">
                  {activeMission.title}
                </h2>
              </div>
            </div>

            {/* CT Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-[11px] font-bold">
              <BrainCircuit className="w-3.5 h-3.5 text-teal-600" />
              <span>Computational Thinking</span>
            </div>
          </div>

          {/* Scenario Box */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2">
            <span className="text-xs font-extrabold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Skenario Tantangan:</span>
            </span>
            <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 leading-relaxed">
              {activeMission.scenario}
            </p>
          </div>

          {/* Question Prompt */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100">
              ❓ {activeMission.question}
            </h3>

            {/* Options list */}
            <div className="space-y-2.5">
              {activeMission.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                let optStyle = 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-amber-50 hover:border-amber-300';

                if (hasSubmitted) {
                  if (opt.isCorrect) {
                    optStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                  } else if (isSelected && !opt.isCorrect) {
                    optStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 font-bold';
                  }
                } else if (isSelected) {
                  optStyle = 'bg-amber-100 dark:bg-amber-950/80 border-amber-500 text-amber-950 dark:text-amber-100 font-bold ring-2 ring-amber-400';
                }

                return (
                  <button
                    key={idx}
                    disabled={hasSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-2xl border text-xs sm:text-sm text-left transition-all flex items-start gap-3 ${optStyle}`}
                  >
                    <div className="w-6 h-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="grow leading-relaxed">{opt.text}</span>
                    {hasSubmitted && opt.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {hasSubmitted && isSelected && !opt.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback Box & Actions */}
          {hasSubmitted && (
            <div className={`p-4 rounded-2xl border space-y-2 ${
              activeMission.options[selectedOption!].isCorrect
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
            }`}>
              <div className="font-extrabold text-xs flex items-center gap-1.5">
                {activeMission.options[selectedOption!].isCorrect ? '✅ Jawaban Tepat (+20 Pts)!' : '❌ Jawaban Kurang Tepat (-1 Nyawa)'}
              </div>
              <p className="text-xs leading-relaxed">
                {activeMission.options[selectedOption!].feedback}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-4">
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              💡 CT Concept: <span className="font-semibold">{activeMission.computationalConcept}</span>
            </div>

            {!hasSubmitted ? (
              <button
                disabled={selectedOption === null}
                onClick={handleSubmitAnswer}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  selectedOption !== null
                    ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-md active:scale-95'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                Kirim Jawaban Misi
              </button>
            ) : (
              <button
                onClick={handleNextMission}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
              >
                {currentMissionIdx < GAMIFIKASI_MISSION_KELAS2_P1.length - 1 ? 'Lanjut ke Misi Berikutnya' : 'Lihat Hasil Petualangan'}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* GAME OVER / COMPLETED STAGE */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 text-center space-y-6 shadow-xl">
          <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-950/60 mx-auto flex items-center justify-center text-amber-600">
            {hearts > 0 ? (
              <Trophy className="w-10 h-10 text-yellow-500 animate-bounce" />
            ) : (
              <XCircle className="w-10 h-10 text-rose-500" />
            )}
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              {hearts > 0 ? '🎉 Selamat! Misi Petualangan Selesai!' : '💔 Nyawa Habis, Coba Lagi!'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              {hearts > 0
                ? 'Kamu telah membuktikan kecerdasan dalam menyambung huruf hijaiyah dan kebaikan dalam mengamalkan Surah An-Nas & Al-Falaq.'
                : 'Jangan berkecil hati, pelajari kembali materi pada slide dan coba misi ini sekali lagi!'}
            </p>
          </div>

          <div className="max-w-md mx-auto p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-center justify-around">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Skor Akhir</span>
              <span className="text-2xl font-black text-amber-600">{score} Pts</span>
            </div>
            <div className="h-8 w-px bg-slate-300 dark:bg-slate-700" />
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Sisa Nyawa</span>
              <span className="text-2xl font-black text-rose-600">{hearts} / 3</span>
            </div>
          </div>

          <button
            onClick={handleRestartGame}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-lg transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Mainkan Lagi Misi Petualangan</span>
          </button>
        </div>
      )}
    </div>
  );
};
