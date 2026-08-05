import React, { useState } from 'react';
import { KELAS5_P1_QUEST_STEPS, QuestStep } from '../../data/kelas5Pembelajaran1Data';
import { soundFX } from '../../utils/audio';
import { Gamepad2, Award, RefreshCw, CheckCircle, XCircle, ArrowRight, Trophy, Users, Sparkles } from 'lucide-react';

interface TarikTambangProps {
  grade: number;
  lesson: number;
}

export const TarikTambangTajwidGamifikasi: React.FC<TarikTambangProps> = ({ grade, lesson }) => {
  const [questions] = useState<QuestStep[]>(KELAS5_P1_QUEST_STEPS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [ropePosition, setRopePosition] = useState<number>(0); // -5 (bot win) to +5 (player win)
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQ = questions[currentIndex];
  const totalQ = questions.length;

  const handleSelectOption = (optId: string) => {
    if (selectedOptionId !== null) return; // Prevent multiple clicks
    soundFX.playClick();
    setSelectedOptionId(optId);

    const selectedOpt = currentQ.options.find((o) => o.id === optId);
    if (selectedOpt?.isCorrect) {
      soundFX.playCorrect();
      setRopePosition((prev) => Math.min(prev + 1, 5));
      setScore((prev) => prev + 20);
    } else {
      soundFX.playWrong();
      setRopePosition((prev) => Math.max(prev - 1, -5));
    }
  };

  const handleNextQuestion = () => {
    soundFX.playClick();
    if (currentIndex + 1 < totalQ) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
    } else {
      soundFX.playFanfare();
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    soundFX.playClick();
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setRopePosition(0);
    setScore(0);
    setIsCompleted(false);
  };

  // Compute flag displacement percentage (0% to 100%, 50% is center)
  // ropePosition ranges -5 to +5, mapping to 10% .. 90%
  const flagPercentage = 50 + ropePosition * 8;

  return (
    <div id="gamifikasi-tarik-tambang-5" className="space-y-6 max-w-5xl mx-auto">
      {/* Header Banner Gamifikasi Tarik Tambang */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-700 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <Gamepad2 className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-200 uppercase tracking-wider block">
              Gamifikasi Interaktif Spesial
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Tarik Tambang Tajwid & Surah Al-'Asr
            </h3>
            <p className="text-xs text-teal-100 font-medium">
              Kelas {grade} Pembelajaran {lesson} • Adu Cerdas Mim Sukun & Surat Al-'Asr
            </p>
          </div>
        </div>

        {/* Live Score Counter */}
        <div className="bg-black/30 px-5 py-2.5 rounded-2xl border border-white/20 text-center shrink-0">
          <span className="text-[10px] text-teal-200 font-bold uppercase block">Skor Tim Murid</span>
          <span className="text-2xl font-black text-amber-300">{score} PTS</span>
        </div>
      </div>

      {/* ARENA VISUAL TARIK TAMBANG */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-teal-950 rounded-3xl p-6 sm:p-8 border-2 border-teal-500/50 shadow-2xl space-y-6 text-white overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h4 className="text-sm sm:text-base font-extrabold uppercase text-amber-300">
              Arena Pertandingan Tarik Tambang PAI
            </h4>
          </div>
          <span className="text-xs font-black bg-teal-500/30 border border-teal-400/40 px-3 py-1 rounded-full text-teal-200">
            Babak {currentIndex + 1} / {totalQ}
          </span>
        </div>

        {/* VISUAL ARENA WITH ROPE & PLAYERS */}
        <div className="bg-emerald-950/60 p-6 rounded-2xl border border-emerald-500/30 relative">
          {/* Teams Label */}
          <div className="flex justify-between items-center text-xs font-bold mb-4">
            <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-900/60 px-3 py-1 rounded-lg border border-emerald-500/30">
              <Users className="w-4 h-4 text-emerald-300" />
              <span>TIM MURID (KAMU)</span>
            </div>
            <div className="flex items-center space-x-2 text-rose-400 bg-rose-900/60 px-3 py-1 rounded-lg border border-rose-500/30">
              <span>TIM LAWAN</span>
              <Users className="w-4 h-4 text-rose-300" />
            </div>
          </div>

          {/* Rope & Flag Track */}
          <div className="relative py-8 flex items-center justify-center">
            {/* The Rope Line */}
            <div className="w-full h-3 bg-amber-700/80 rounded-full border border-amber-500 shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 opacity-80" />
            </div>

            {/* Red Middle Boundary Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-red-500/80 border-r border-white/50 -translate-x-1/2" />

            {/* Movable Flag Ribbon */}
            <div
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-out flex flex-col items-center"
              style={{ left: `${flagPercentage}%` }}
            >
              <div className="w-6 h-6 bg-amber-400 border-2 border-white rounded-full shadow-lg flex items-center justify-center text-slate-900 font-bold text-[10px] animate-bounce">
                🚩
              </div>
              <div className="w-1.5 h-8 bg-amber-300 rounded-full shadow-md" />
            </div>

            {/* Left Player Characters */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl flex space-x-1 filter drop-shadow">
              <span>🧑‍🎓</span>
              <span>👩‍🎓</span>
              <span>👨‍🏫</span>
            </div>

            {/* Right Opponent Characters */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl flex space-x-1 filter drop-shadow transform scale-x-[-1]">
              <span>🤼</span>
              <span>🏃</span>
              <span>🤾</span>
            </div>
          </div>

          <div className="text-center text-[11px] text-teal-200/80 italic mt-2">
            Pilihlah jawaban tajwid dan Al-'Asr yang tepat untuk menarik pita bendera ke arah Tim Murid!
          </div>
        </div>

        {/* GAME CONTENT: QUESTION / SUMMARY */}
        {!isCompleted ? (
          <div className="space-y-6">
            {/* Scenario Story Header */}
            <div className="bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-teal-500/30 space-y-2">
              <div className="flex items-center space-x-2 text-amber-300 font-bold text-xs">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{currentQ.scenarioTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {currentQ.scenarioStory}
              </p>
            </div>

            {/* Question Prompt */}
            <div className="bg-teal-900/40 p-4 sm:p-5 rounded-2xl border border-teal-400/40 text-center">
              <h5 className="text-base sm:text-lg font-bold text-teal-100 leading-snug">
                {currentQ.questionPrompt}
              </h5>
            </div>

            {/* Options List */}
            <div className="grid grid-cols-1 gap-3">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                const showResult = selectedOptionId !== null;

                let btnStyle = 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-100';
                if (showResult) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-600/90 border-emerald-400 text-white ring-2 ring-emerald-300';
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = 'bg-rose-600/90 border-rose-400 text-white';
                  } else {
                    btnStyle = 'bg-slate-800/40 border-slate-800 text-slate-400 opacity-50';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={selectedOptionId !== null}
                    className={`p-4 rounded-2xl border-2 text-left font-medium text-xs sm:text-sm transition-all duration-200 flex items-start space-x-3 cursor-pointer ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {opt.id.toUpperCase()}
                    </span>
                    <span className="flex-1 leading-relaxed">{opt.text}</span>
                    {showResult && opt.isCorrect && (
                      <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                    )}
                    {showResult && isSelected && !opt.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-300 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Modal / Next Button */}
            {selectedOptionId !== null && (
              <div className="bg-slate-800 p-5 rounded-2xl border border-teal-400/40 space-y-4 animate-fade-in">
                {(() => {
                  const selOpt = currentQ.options.find((o) => o.id === selectedOptionId);
                  const isCorrect = selOpt?.isCorrect;
                  return (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 font-bold text-sm">
                        {isCorrect ? (
                          <span className="text-emerald-400 flex items-center space-x-1">
                            <CheckCircle className="w-4 h-4" />
                            <span>Tarikan Berhasil! Jawaban Tepat (+20 PTS)</span>
                          </span>
                        ) : (
                          <span className="text-rose-400 flex items-center space-x-1">
                            <XCircle className="w-4 h-4" />
                            <span>Tali Terarik Lawan! Jawaban Kurang Tepat</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-700">
                        {selOpt?.explanation}
                      </p>
                    </div>
                  );
                })()}

                <button
                  onClick={handleNextQuestion}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm flex items-center justify-center space-x-2 shadow-lg transition active:scale-98 cursor-pointer"
                >
                  <span>{currentIndex + 1 < totalQ ? 'Lanjut ke Babak Berikutnya' : 'Lihat Hasil Pertandingan'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* COMPLETED SUMMARY SCREEN */
          <div className="text-center py-8 space-y-6 animate-fade-in">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-400/20 border-2 border-amber-300 flex items-center justify-center text-4xl shadow-xl">
              🏆
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl sm:text-3xl font-black text-amber-300">
                Pertandingan Tarik Tambang Selesai!
              </h4>
              <p className="text-xs sm:text-sm text-teal-100 max-w-md mx-auto">
                Selamat! Kamu telah menyelesaikan seluruh tantangan tajwid Mim Sukun dan pemahaman Surat Al-'Asr.
              </p>
            </div>

            <div className="bg-slate-800/80 max-w-sm mx-auto p-6 rounded-3xl border border-teal-500/40 space-y-3 shadow-inner">
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                Total Skor Kemenangan
              </span>
              <div className="text-4xl font-black text-amber-300">
                {score} / 100 PTS
              </div>
              <div className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 py-1.5 px-3 rounded-xl border border-emerald-500/30">
                {score >= 80 ? '🌟 Sangat Fasih & Paham Tajwid!' : score >= 60 ? '👍 Bagus, Terus Tingkatkan Latihan!' : '📚 Perlu Mengulang Materi Mim Sukun'}
              </div>
            </div>

            <button
              onClick={handleRestart}
              className="px-6 py-3.5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-sm inline-flex items-center space-x-2 shadow-lg transition active:scale-95 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Mainkan Lagi Tarik Tambang</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
