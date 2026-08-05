import React, { useState } from 'react';
import { KELAS4_P1_TARIK_TAMBANG, TarikTambangQuestion } from '../../data/kelas4Pembelajaran1Data';
import { soundFX } from '../../utils/audio';
import { Gamepad2, Award, RefreshCw, CheckCircle, XCircle, ArrowRight, Zap, Trophy, Flag, Users } from 'lucide-react';

interface TarikTambangProps {
  grade: number;
  lesson: number;
}

export const TarikTambangGamifikasi: React.FC<TarikTambangProps> = ({ grade, lesson }) => {
  const [questions] = useState<TarikTambangQuestion[]>(KELAS4_P1_TARIK_TAMBANG);
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
      setScore((prev) => prev + 10);
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
    <div className="space-y-6">
      {/* Header Banner Gamifikasi Tarik Tambang */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <Gamepad2 className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-200 uppercase tracking-wider block">
              Gamifikasi Edisi Spesial
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Tarik Tambang Interaktif Tajwid
            </h3>
            <p className="text-xs text-teal-100 font-medium">
              Kelas {grade} Pembelajaran {lesson} • Adu Cerdas Idgham & Surah An-Nasr
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
            Ronde {currentIndex + 1} / {totalQ}
          </span>
        </div>

        {/* VISUAL ARENA & ROPE ANIMATION */}
        <div className="relative py-8 bg-black/40 rounded-2xl border border-white/10 px-4 overflow-hidden">
          {/* Teams Label & Avatars */}
          <div className="flex justify-between items-center mb-6 px-2 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-black text-white text-lg border-2 border-emerald-300 shadow-md">
                🟢
              </div>
              <div>
                <span className="text-xs font-black uppercase text-emerald-400 block">Tim Murid Cerdas</span>
                <span className="text-[10px] text-emerald-200">Posisi: {ropePosition > 0 ? `+${ropePosition}` : ropePosition}</span>
              </div>
            </div>

            <div className="text-center hidden sm:block">
              <span className="text-xs font-black text-amber-300 uppercase tracking-widest block bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
                {ropePosition > 0 ? '🟢 Tim Murid Unggul!' : ropePosition < 0 ? '🔴 Tim Lawan Unggul!' : '⚖️ Seimbang'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-right">
              <div>
                <span className="text-xs font-black uppercase text-rose-400 block">Tim Lawan Tajwid</span>
                <span className="text-[10px] text-rose-200">Posisi: {ropePosition < 0 ? ropePosition : `+${-ropePosition}`}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center font-black text-white text-lg border-2 border-rose-300 shadow-md">
                🔴
              </div>
            </div>
          </div>

          {/* THE ROPE BAR */}
          <div className="relative w-full h-6 bg-slate-900 rounded-full border-2 border-amber-400/50 flex items-center overflow-visible my-4">
            {/* Texture lines on rope */}
            <div className="w-full h-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 opacity-80 rounded-full"></div>

            {/* Middle Safe Zone Marker */}
            <div className="absolute left-1/2 -translate-x-1/2 h-8 w-1 bg-white/40 z-0"></div>

            {/* MOVING MIDDLE FLAG */}
            <div
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-out z-10 flex flex-col items-center"
              style={{ left: `${flagPercentage}%` }}
            >
              <div className="w-7 h-7 bg-amber-400 text-slate-950 font-black rounded-full flex items-center justify-center shadow-lg border-2 border-white text-xs animate-bounce">
                🚩
              </div>
              <span className="text-[9px] font-black uppercase bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded-md mt-1 shadow-xs whitespace-nowrap">
                Bendera
              </span>
            </div>
          </div>

          {/* Left / Right Pulling Markers */}
          <div className="flex justify-between text-[11px] font-bold text-slate-400 px-2 pt-2">
            <span className="text-emerald-400">← Tarik ke Kiri (Murid)</span>
            <span className="text-rose-400">Tarik ke Kanan (Lawan) →</span>
          </div>
        </div>

        {/* QUESTION & OPTIONS CARD */}
        {isCompleted ? (
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 text-center space-y-6 animate-in zoom-in-95">
            <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
              <Trophy className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full uppercase">
                Pertandingan Selesai!
              </span>
              <h3 className="text-2xl sm:text-3xl font-black pt-1">
                {score >= 70 ? '🎉 KEMENANGAN TELAK UNTUK TIM MURID!' : '👍 BAGUS! TERUS BERLATIH!'}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Kamu telah menyelesaikan 10 ronde tarik tambang interaktif tajwid dengan sangat baik!
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 max-w-xs mx-auto">
              <span className="text-xs font-bold text-slate-500 uppercase">Total Skor Akhir</span>
              <div className="text-4xl font-black text-amber-600">{score} / 100</div>
              <p className="text-xs font-extrabold text-emerald-600 pt-1">
                {ropePosition > 0 ? '🟢 Tim Murid Berhasil Menarik Bendera!' : '⚖️ Pertandingan Sangat Sengit!'}
              </p>
            </div>

            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm inline-flex items-center gap-2 shadow-lg cursor-pointer transition active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Mainkan Lagi</span>
            </button>
          </div>
        ) : (
          <div className="space-y-5 bg-slate-800/90 rounded-2xl p-5 sm:p-6 border border-slate-700">
            {/* Prompt */}
            <div className="space-y-2">
              <span className="text-xs font-black text-teal-400 uppercase tracking-wider block">
                Pertanyaan Ronde {currentIndex + 1}
              </span>
              <h5 className="text-base sm:text-lg font-bold leading-relaxed text-white">
                {currentQ.prompt}
              </h5>
              {currentQ.arabicSnippet && (
                <div className="font-arabic text-2xl text-amber-300 pt-1 font-bold">
                  {currentQ.arabicSnippet}
                </div>
              )}
            </div>

            {/* Options List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                let btnStyle = 'bg-slate-900/80 hover:bg-slate-700 text-slate-100 border-slate-700';

                if (selectedOptionId !== null) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-950 text-emerald-200 border-emerald-500 font-black ring-2 ring-emerald-500';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-950 text-rose-200 border-rose-500 font-bold';
                  } else {
                    btnStyle = 'bg-slate-900/40 text-slate-500 border-slate-800 opacity-50';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={selectedOptionId !== null}
                    className={`p-4 rounded-xl border-2 text-left text-xs sm:text-sm transition-all duration-200 flex items-start gap-3 cursor-pointer ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-black/40 text-amber-300 font-black text-xs flex items-center justify-center shrink-0 border border-amber-400/20">
                      {opt.id.slice(-1).toUpperCase()}
                    </span>
                    <span className="pt-0.5 leading-snug">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next Button */}
            {selectedOptionId !== null && (
              <div className="pt-3 border-t border-slate-700 space-y-4 animate-in fade-in">
                {(() => {
                  const selectedOpt = currentQ.options.find((o) => o.id === selectedOptionId);
                  const isCorrect = selectedOpt?.isCorrect;

                  return (
                    <div className={`p-4 rounded-xl border ${isCorrect ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-rose-950/60 border-rose-500 text-rose-200'}`}>
                      <div className="flex items-center gap-2 font-black text-sm mb-1">
                        {isCorrect ? (
                          <>
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <span>Tarik Kuat! Jawabanmu Benar! (+10 Skor)</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-5 h-5 text-rose-400" />
                            <span>Terseret! Jawaban Kurang Tepat.</span>
                          </>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed opacity-90">
                        {selectedOpt?.explanation}
                      </p>
                    </div>
                  );
                })()}

                <div className="flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md cursor-pointer transition active:scale-95"
                  >
                    <span>Lanjut ke Ronde Berikutnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
