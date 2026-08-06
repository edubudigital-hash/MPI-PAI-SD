import React, { useState } from 'react';
import { GAMIFIKASI_MISSION_KELAS2_P2 } from '../../data/kelas2Pembelajaran2Data';
import { soundFX } from '../../utils/audio';
import { 
  Gamepad2, 
  Trophy, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Cpu, 
  ArrowRight,
  ShieldAlert,
  HeartHandshake
} from 'lucide-react';

interface AsmaulHusnaGamifikasi2_P2Props {
  grade: number;
  lesson: number;
}

export const AsmaulHusnaGamifikasi2_P2: React.FC<AsmaulHusnaGamifikasi2_P2Props> = ({ grade, lesson }) => {
  const [currentMissionIdx, setCurrentMissionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, boolean>>({});

  const currentMission = GAMIFIKASI_MISSION_KELAS2_P2[currentMissionIdx];

  const handleSelectOption = (optIdx: number) => {
    if (selectedOption !== null) return; // Prevent double clicking
    setSelectedOption(optIdx);

    const isCorrect = currentMission.options[optIdx].isCorrect;
    if (isCorrect) {
      soundFX.playCorrect();
      setScore(prev => prev + 20);
      setUserAnswers(prev => ({ ...prev, [currentMissionIdx]: true }));
    } else {
      soundFX.playWrong();
      setUserAnswers(prev => ({ ...prev, [currentMissionIdx]: false }));
    }
  };

  const handleNextMission = () => {
    soundFX.playClick();
    setSelectedOption(null);
    if (currentMissionIdx < GAMIFIKASI_MISSION_KELAS2_P2.length - 1) {
      setCurrentMissionIdx(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleResetGame = () => {
    soundFX.playClick();
    setCurrentMissionIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
    setUserAnswers({});
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Header */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/80 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 font-bold shrink-0">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800 leading-tight">
              Petualangan Interaktif Asmaul Husna
            </h2>
            <p className="text-xs text-slate-500">
              Kelas {grade} • Pembelajaran {lesson} (Detektif Kebaikkan 4 Asmaul Husna)
            </p>
          </div>
        </div>

        {/* Score & Mission Counter */}
        <div className="flex items-center gap-4 bg-purple-50 px-4 py-2 rounded-xl border border-purple-100">
          <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Skor: {score} Poin</span>
          </div>
          <div className="h-4 w-px bg-purple-200" />
          <span className="text-xs font-semibold text-purple-700">
            Misi {currentMissionIdx + 1} / {GAMIFIKASI_MISSION_KELAS2_P2.length}
          </span>
        </div>
      </div>

      {/* Main Game Arena */}
      {!isFinished ? (
        <div className="bg-gradient-to-b from-purple-50/60 via-white to-purple-50/40 rounded-3xl p-6 sm:p-8 border border-purple-200/80 shadow-md relative overflow-hidden">
          {/* Mission Progress Bar */}
          <div className="w-full bg-purple-100 h-2 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-purple-600 h-full transition-all duration-500"
              style={{ width: `${((currentMissionIdx + 1) / GAMIFIKASI_MISSION_KELAS2_P2.length) * 100}%` }}
            />
          </div>

          {/* Mission Header */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-purple-600 text-white shadow-xs flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              {currentMission.title}
            </span>
            <span className="text-xs font-semibold text-purple-700 bg-purple-100/80 px-2.5 py-1 rounded-md">
              Topik: {currentMission.khalifahOrTopic}
            </span>
          </div>

          {/* Scenario Box */}
          <div className="bg-white rounded-2xl p-5 border border-purple-100 shadow-xs mb-6">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Skenario Cerita:</h4>
            <p className="text-slate-800 font-medium text-sm sm:text-base leading-relaxed">
              {currentMission.scenario}
            </p>
          </div>

          {/* Question */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
            {currentMission.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentMission.options.map((opt, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const hasAnswered = selectedOption !== null;

              let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-purple-50 hover:border-purple-300';
              if (hasAnswered) {
                if (opt.isCorrect) {
                  btnStyle = 'bg-emerald-500 text-white border-emerald-500 font-bold shadow-sm';
                } else if (isSelected && !opt.isCorrect) {
                  btnStyle = 'bg-rose-500 text-white border-rose-500 font-bold shadow-sm';
                } else {
                  btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={hasAnswered}
                  className={`w-full p-4 text-left text-xs sm:text-sm rounded-2xl border transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span className="font-medium leading-normal">{opt.text}</span>
                  {hasAnswered && opt.isCorrect && <CheckCircle2 className="w-5 h-5 text-white shrink-0" />}
                  {hasAnswered && isSelected && !opt.isCorrect && <XCircle className="w-5 h-5 text-white shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Option Feedback & Computational Concept */}
          {selectedOption !== null && (
            <div className="space-y-3 my-6 animate-fade-in">
              <div className={`p-4 rounded-2xl border ${
                currentMission.options[selectedOption].isCorrect
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border-rose-200 text-rose-900'
              }`}>
                <span className="font-bold block mb-1">
                  {currentMission.options[selectedOption].isCorrect ? '🎉 Benar Sekali!' : '❌ Jawaban Kurang Tepat!'}
                </span>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {currentMission.options[selectedOption].feedback}
                </p>
              </div>

              {/* Computational Thinking Concept */}
              <div className="p-3.5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 text-xs flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-purple-300 block mb-0.5">Computational Thinking Concept:</span>
                  <p className="text-slate-300 leading-snug">{currentMission.computationalConcept}</p>
                </div>
              </div>
            </div>
          )}

          {/* Next Button */}
          {selectedOption !== null && (
            <div className="flex justify-end pt-4 border-t border-purple-100">
              <button
                onClick={handleNextMission}
                className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all"
              >
                <span>{currentMissionIdx < GAMIFIKASI_MISSION_KELAS2_P2.length - 1 ? 'Lanjut Misi Berikutnya' : 'Selesaikan Petualangan'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Game Over / Completed Screen */
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-purple-200 text-center shadow-md">
          <div className="w-20 h-20 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Trophy className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-black text-slate-800 mb-2">
            Selamat! Kamu Telah Menyelesaikan Misi Asmaul Husna!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
            Kamu telah berhasil membuktikan pemahaman dan penerapan 4 Asmaul Husna (Ar-Raḥmān, Ar-Raḥīm, As-Salām, dan Al-Mu'min) dalam kehidupan sehari-hari!
          </p>

          <div className="inline-flex items-center justify-center gap-3 bg-purple-50 border border-purple-200 px-6 py-3 rounded-2xl mb-8">
            <span className="text-sm font-semibold text-purple-800">Total Skor Akhir Kamu:</span>
            <span className="text-2xl font-black text-purple-600">{score} / 100</span>
          </div>

          <div>
            <button
              onClick={handleResetGame}
              className="px-6 py-3 rounded-2xl bg-purple-600 text-white font-bold text-xs sm:text-sm hover:bg-purple-700 transition-all inline-flex items-center gap-2 shadow-md"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Mainkan Lagi Misi Ini</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
