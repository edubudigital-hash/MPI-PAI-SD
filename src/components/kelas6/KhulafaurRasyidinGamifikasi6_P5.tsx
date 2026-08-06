import React, { useState } from 'react';
import { GAMIFIKASI_MISSION_KELAS6_P5, GamifikasiMission } from '../../data/kelas6Pembelajaran5Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Heart, 
  Award, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ShieldAlert, 
  Compass, 
  Volume2, 
  VolumeX,
  Cpu
} from 'lucide-react';

export const KhulafaurRasyidinGamifikasi6_P5: React.FC = () => {
  const [currentMissionIdx, setCurrentMissionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const currentMission: GamifikasiMission = GAMIFIKASI_MISSION_KELAS6_P5[currentMissionIdx];

  const handleSelectOption = (idx: number) => {
    if (showFeedback) return;
    if (soundEnabled) soundFX.playClick();
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || showFeedback) return;
    setShowFeedback(true);

    const isCorrect = currentMission.options[selectedOption].isCorrect;
    if (isCorrect) {
      if (soundEnabled) soundFX.playCorrect();
      setScore(prev => prev + 20);
    } else {
      if (soundEnabled) soundFX.playWrong();
      setEnergy(prev => Math.max(0, prev - 25));
    }
  };

  const handleNextMission = () => {
    if (soundEnabled) soundFX.playClick();
    setShowFeedback(false);
    setSelectedOption(null);

    if (currentMissionIdx < GAMIFIKASI_MISSION_KELAS6_P5.length - 1) {
      setCurrentMissionIdx(prev => prev + 1);
    } else {
      if (soundEnabled) soundFX.playFanfare();
      setIsCompleted(true);
    }
  };

  const handleRestartGame = () => {
    if (soundEnabled) soundFX.playClick();
    setCurrentMissionIdx(0);
    setScore(0);
    setEnergy(100);
    setSelectedOption(null);
    setShowFeedback(false);
    setIsCompleted(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Game Banner */}
      <div className="bg-gradient-to-r from-teal-800 via-emerald-700 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-teal-100 font-bold text-xs uppercase tracking-wider mb-2">
              <Gamepad2 className="w-4 h-4 text-amber-300" />
              <span>Gamifikasi Pembelajaran • Kelas 6 Bab 5</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Petualangan Khulafaur Rasyidin
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 mt-1">
              Jelajahi Misi Sejarah Abu Bakar Ash-Shiddiq r.a. & Umar bin Al-Khattab r.a.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white transition-all"
              title={soundEnabled ? 'Matikan Suara' : 'Aktifkan Suara'}
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button
              onClick={handleRestartGame}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulang Misi</span>
            </button>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md">
            <span className="text-[10px] uppercase font-extrabold text-teal-200 block">Kemajuan Misi</span>
            <span className="text-sm sm:text-lg font-black text-white">
              Misi {currentMissionIdx + 1} / {GAMIFIKASI_MISSION_KELAS6_P5.length}
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md">
            <span className="text-[10px] uppercase font-extrabold text-teal-200 block">Skor Kebijaksanaan</span>
            <span className="text-sm sm:text-lg font-black text-amber-300">
              {score} Pts
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md">
            <span className="text-[10px] uppercase font-extrabold text-teal-200 block">Energi Keteguhan</span>
            <div className="flex items-center justify-center gap-1 mt-0.5">
              <Heart className={`w-4 h-4 ${energy > 20 ? 'text-rose-400 fill-rose-400' : 'text-rose-500 animate-pulse'}`} />
              <span className="text-sm sm:text-lg font-black text-white">{energy}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* GAME OVER OR VICTORY SCREEN */}
      {isCompleted ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 text-center space-y-6 shadow-xl animate-fadeIn">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center shadow-lg">
            <Award className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              Selamat! Misi Petualangan Selesai! 🎉
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Kamu telah menyelesaikan seluruh misi sejarah Khulafaur Rasyidin dan membuktikan pemahamanmu mengenai kejujuran Abu Bakar r.a. dan keadilan Umar r.a.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 max-w-sm mx-auto space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase">Total Skor Kebijaksanaan</div>
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400">{score} / 100 Pts</div>
            <div className="text-xs text-amber-600 dark:text-amber-400 font-extrabold">
              {score >= 80 ? '🌟 Sangat Teladan & Berjiwa Pemimpin!' : '👍 Bagus! Tingkatkan Lagi Pemahaman Sejarahmu!'}
            </div>
          </div>

          <button
            onClick={handleRestartGame}
            className="px-8 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-lg transition-all active:scale-95"
          >
            Mainkan Kembali Petualangan
          </button>
        </div>
      ) : energy <= 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 text-center space-y-6 shadow-xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 flex items-center justify-center">
            <ShieldAlert className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              Energi Keteguhan Habis!
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Jangan berkecil hati. Pelajari kembali materi Bab 5 tentang sifat Abu Bakar r.a. dan Umar r.a. lalu coba lagi!
            </p>
          </div>
          <button
            onClick={handleRestartGame}
            className="px-8 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-lg transition-all"
          >
            Coba Ulang Petualangan
          </button>
        </div>
      ) : (
        /* ACTIVE MISSION STAGE */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
          {/* Mission Header */}
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-extrabold text-xs">
                Tokoh: Khalifah {currentMission.khalifah}
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100">
                {currentMission.title}
              </h2>
            </div>
          </div>

          {/* Scenario Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed space-y-2">
            <div className="font-bold text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-teal-600" />
              <span>Skenario Sejarah:</span>
            </div>
            <p>{currentMission.scenario}</p>
          </div>

          {/* Question Prompt */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100">
              {currentMission.question}
            </h3>

            {/* Options List */}
            <div className="space-y-2.5">
              {currentMission.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                let btnStyle = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-teal-50';

                if (isSelected) {
                  btnStyle = 'bg-teal-600 text-white border-teal-600 font-bold';
                }

                if (showFeedback) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = 'bg-rose-600 text-white border-rose-600 font-bold';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={showFeedback}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-2xl border text-xs sm:text-sm text-left transition-all flex items-start gap-3 ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug">{opt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback & Computational Concept Box */}
          {showFeedback && selectedOption !== null && (
            <div className="space-y-4 animate-fadeIn">
              <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                currentMission.options[selectedOption].isCorrect
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
              }`}>
                <div className="font-bold flex items-center gap-1.5 mb-1">
                  {currentMission.options[selectedOption].isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Jawaban Tepat! +20 Pts</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Jawaban Kurang Tepat (-25 Energi)</span>
                    </>
                  )}
                </div>
                <p>{currentMission.options[selectedOption].feedback}</p>
              </div>

              {/* Computational Thinking Concept */}
              <div className="p-3.5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-200 flex items-start gap-2">
                <Cpu className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Prinsip Berpikir Komputasional (CT):</span>
                  <span>{currentMission.computationalConcept}</span>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextMission}
                  className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  {currentMissionIdx < GAMIFIKASI_MISSION_KELAS6_P5.length - 1 ? 'Lanjut Misi Berikutnya' : 'Selesaikan Misi & Lihat Hasil'}
                </button>
              </div>
            </div>
          )}

          {/* Submit Button if not answered */}
          {!showFeedback && (
            <div className="flex justify-end pt-2">
              <button
                disabled={selectedOption === null}
                onClick={handleSubmitAnswer}
                className={`px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm shadow-md transition-all ${
                  selectedOption === null
                    ? 'opacity-40 cursor-not-allowed bg-slate-300 text-slate-500'
                    : 'bg-teal-600 hover:bg-teal-700 text-white active:scale-95'
                }`}
              >
                Konfirmasi Keputusan Misi
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
