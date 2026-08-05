import React, { useState } from 'react';
import { 
  EVALUASI_PG as EVALUASI_P1_PG, 
  EVALUASI_PGK as EVALUASI_P1_PGK, 
  EVALUASI_MATCHING as EVALUASI_P1_MATCHING, 
  EVALUASI_BS as EVALUASI_P1_BS, 
  EVALUASI_ESSAY as EVALUASI_P1_ESSAY 
} from '../../data/kelas3Pembelajaran1Data';
import { 
  EVALUASI_P2_PG, 
  EVALUASI_P2_PGK, 
  EVALUASI_P2_MATCHING, 
  EVALUASI_P2_BS, 
  EVALUASI_P2_ESSAY 
} from '../../data/kelas3Pembelajaran2Data';
import { 
  EVALUASI_P3_PG, 
  EVALUASI_P3_PGK, 
  EVALUASI_P3_MATCHING, 
  EVALUASI_P3_BS, 
  EVALUASI_P3_ESSAY 
} from '../../data/kelas3Pembelajaran3Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  Award, 
  Download, 
  CheckCircle2, 
  Key, 
  Eye, 
  EyeOff,
  Check
} from 'lucide-react';

interface EvaluasiViewProps {
  grade: number;
  lesson: number;
}

export const EvaluasiView: React.FC<EvaluasiViewProps> = ({ grade, lesson }) => {
  // Select data according to lesson
  const dataPG = lesson === 3 ? EVALUASI_P3_PG : (lesson === 2 ? EVALUASI_P2_PG : EVALUASI_P1_PG);
  const dataPGK = lesson === 3 ? EVALUASI_P3_PGK : (lesson === 2 ? EVALUASI_P2_PGK : EVALUASI_P1_PGK);
  const dataMatching = lesson === 3 ? EVALUASI_P3_MATCHING : (lesson === 2 ? EVALUASI_P2_MATCHING : EVALUASI_P1_MATCHING);
  const dataBS = lesson === 3 ? EVALUASI_P3_BS : (lesson === 2 ? EVALUASI_P2_BS : EVALUASI_P1_BS);
  const dataEssay = lesson === 3 ? EVALUASI_P3_ESSAY : (lesson === 2 ? EVALUASI_P2_ESSAY : EVALUASI_P1_ESSAY);

  // State for user answers
  const [userPG, setUserPG] = useState<{ [qId: number]: number }>({});
  const [userPGK, setUserPGK] = useState<{ [qId: number]: number[] }>({});
  const [userMatching, setUserMatching] = useState<{ [qId: number]: string }>({});
  const [userBS, setUserBS] = useState<{ [qId: number]: boolean }>({});
  const [userEssay, setUserEssay] = useState<{ [qId: number]: string }>({});

  // UI state toggles
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);
  const [showScoreModal, setShowScoreModal] = useState<boolean>(false);

  // Toggle PGK options
  const handleTogglePGK = (qId: number, optIndex: number) => {
    soundFX.playClick();
    setUserPGK((prev) => {
      const current = prev[qId] || [];
      if (current.includes(optIndex)) {
        return { ...prev, [qId]: current.filter((idx) => idx !== optIndex) };
      } else {
        return { ...prev, [qId]: [...current, optIndex] };
      }
    });
  };

  // Score Calculation Logic
  const calculateScore = () => {
    let scorePG = 0; // 10 Qs -> 10 pts each = 100 max
    dataPG.forEach((q) => {
      if (userPG[q.id] === q.correctAnswerIndex) scorePG += 10;
    });

    let scorePGK = 0; // 5 Qs -> 20 pts each = 100 max
    dataPGK.forEach((q) => {
      const userSelected = (userPGK[q.id] || []).sort().join(',');
      const correctSelected = [...q.correctAnswerIndices].sort().join(',');
      if (userSelected === correctSelected && userSelected !== '') scorePGK += 20;
    });

    let scoreBS = 0; // 5 Qs -> 20 pts each = 100 max
    dataBS.forEach((q) => {
      if (userBS[q.id] === q.isTrue) scoreBS += 20;
    });

    let scoreMatching = 0; // 5 Qs -> 20 pts each = 100 max
    dataMatching.forEach((q) => {
      if (userMatching[q.id] === q.rightText) scoreMatching += 20;
    });

    // Weighted average score out of 100
    const totalObjectiveScore = Math.round(
      (scorePG * 0.4) + (scorePGK * 0.25) + (scoreBS * 0.15) + (scoreMatching * 0.2)
    );

    return {
      scorePG,
      scorePGK,
      scoreBS,
      scoreMatching,
      totalObjectiveScore
    };
  };

  const handleDownloadEvaluasi = () => {
    soundFX.playClick();

    let contentHtml = `
      <div style="margin-bottom: 20px;">
        <p style="font-size: 10pt; color: #475569;">
          <strong>Petunjuk Pengerjaan:</strong> Bacalah setiap soal dengan teliti. Jawablah soal Pilihan Ganda, Pilihan Ganda Kompleks, Menjodohkan, Benar/Salah, serta Uraian dengan jujur dan tepat.
        </p>
      </div>

      <!-- BAGIAN A: PILIHAN GANDA -->
      <div class="section-title">BAGIAN A: PILIHAN GANDA (10 Soal)</div>
    `;

    dataPG.forEach((q) => {
      contentHtml += `
        <div class="card">
          <div style="font-size: 10pt; font-weight: bold; color: #0f172a; margin-bottom: 4px;">
            ${q.id}. ${q.question}
          </div>
          ${q.arabic ? `<div class="arabic" style="font-size: 16pt; margin: 4px 0;">${q.arabic}</div>` : ''}
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 9.5pt; color: #334155; margin-top: 6px;">
            ${q.options.map(opt => `<div>${opt}</div>`).join('')}
          </div>
        </div>
      `;
    });

    // BAGIAN B: PG KOMPLEKS
    contentHtml += `<div class="section-title">BAGIAN B: PILIHAN GANDA KOMPLEKS (5 Soal - Pilihlah Lebih dari Satu Jawaban Benar)</div>`;
    dataPGK.forEach((q) => {
      contentHtml += `
        <div class="card">
          <div style="font-size: 10pt; font-weight: bold; color: #0f172a; margin-bottom: 4px;">
            ${q.id}. ${q.question}
          </div>
          ${q.arabic ? `<div class="arabic" style="font-size: 16pt; margin: 4px 0;">${q.arabic}</div>` : ''}
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 9.5pt; color: #334155; margin-top: 6px;">
            ${q.options.map(opt => `<div>[ &nbsp; ] ${opt}</div>`).join('')}
          </div>
        </div>
      `;
    });

    // BAGIAN C: MENJODOHKAN
    contentHtml += `<div class="section-title">BAGIAN C: MENJODOHKAN (5 Soal)</div>`;
    contentHtml += `<div class="card"><table style="width:100%; border-collapse:collapse; font-size:9.5pt;">`;
    contentHtml += `<tr style="background:#f1f5f9; font-weight:bold;"><th style="border:1px solid #cbd5e1; padding:6px;">No</th><th style="border:1px solid #cbd5e1; padding:6px;">Pernyataan / Soal (Kiri)</th><th style="border:1px solid #cbd5e1; padding:6px;">Pasangan Jawaban (Kanan)</th></tr>`;
    dataMatching.forEach((q) => {
      contentHtml += `
        <tr>
          <td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">${q.id}</td>
          <td style="border:1px solid #cbd5e1; padding:6px;">${q.leftText}</td>
          <td style="border:1px solid #cbd5e1; padding:6px; color:#047857; font-weight:bold;">............................................................</td>
        </tr>
      `;
    });
    contentHtml += `</table></div>`;

    // BAGIAN D: BENAR ATAU SALAH
    contentHtml += `<div class="section-title">BAGIAN D: MEMILIH BENAR ATAU SALAH (5 Soal)</div>`;
    dataBS.forEach((q) => {
      contentHtml += `
        <div class="card" style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <strong style="font-size: 10pt;">${q.id}. ${q.statement}</strong>
            ${q.arabic ? `<div class="arabic" style="font-size:15pt;">${q.arabic}</div>` : ''}
          </div>
          <div style="font-weight:bold; font-size:9.5pt; color:#475569; shrink-0;">
            [ &nbsp; ] BENAR &nbsp;&nbsp;&nbsp; [ &nbsp; ] SALAH
          </div>
        </div>
      `;
    });

    // BAGIAN E: URAIAN
    contentHtml += `<div class="section-title">BAGIAN E: SOAL URAIAN (5 Soal)</div>`;
    dataEssay.forEach((q) => {
      contentHtml += `
        <div class="card">
          <div style="font-size: 10pt; font-weight: bold; color: #0f172a;">${q.id}. ${q.question}</div>
          ${q.arabic ? `<div class="arabic" style="font-size:16pt;">${q.arabic}</div>` : ''}
          <div style="margin-top:20px; border-bottom:1px dotted #94a3b8; height:40px;"></div>
          <div style="border-bottom:1px dotted #94a3b8; height:40px;"></div>
        </div>
      `;
    });

    const docSub = lesson === 3
      ? 'PEMBELAJARAN 3: MENERAPKAN HUSNUZAN DAN MENGHINDARI SUUZAN KEPADA ALLAH SWT. (HOTS & CT)'
      : lesson === 2
      ? 'PEMBELAJARAN 2: 20 SIFAT WAJIB & 20 SIFAT MUSTAHIL ALLAH SWT. (HOTS & CT)'
      : 'PEMBELAJARAN 1: MEMBACA, MENULIS & MAD ṬABĪ‘Ī DAN SURAH AL-KAUTSAR (HOTS & CT)';

    printOrDownloadDocument(
      `LEMBAR EVALUASI PEMBELAJARAN - KELAS ${grade}`,
      docSub,
      contentHtml
    );
  };

  const scores = calculateScore();

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Action Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border-2 border-blue-300 dark:border-blue-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 font-extrabold text-xs uppercase border border-blue-300">
            EVALUASI PEMBELAJARAN (HOTS & CT)
          </span>
          <h3 className="text-lg font-black text-slate-900 dark:text-white pt-1">
            Uji Pemahaman & Evaluasi Kelas {grade} Pembelajaran {lesson}
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            10 PG + 5 PG Kompleks + 5 Menjodohkan + 5 B/S + 5 Uraian
          </p>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              soundFX.playClick();
              setShowScoreModal(true);
            }}
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-1.5 shadow-md active:scale-95 cursor-pointer border border-emerald-500"
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>Lihat Skor Saya</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKey(!showAnswerKey);
            }}
            className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-1.5 shadow-md active:scale-95 cursor-pointer border border-purple-500"
          >
            {showAnswerKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showAnswerKey ? 'Sembunyikan Kunci' : 'Kunci Jawaban'}</span>
          </button>

          <button
            onClick={handleDownloadEvaluasi}
            className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-extrabold text-xs sm:text-sm flex items-center space-x-1.5 shadow-md active:scale-95 cursor-pointer border border-amber-300"
          >
            <Download className="w-4 h-4" />
            <span>Download Evaluasi</span>
          </button>
        </div>
      </div>

      {/* SCORE BREAKDOWN MODAL */}
      {showScoreModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-emerald-300 dark:border-emerald-800 shadow-2xl max-w-md w-full space-y-5">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border-2 border-emerald-400">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Hasil Nilai Objektif Kamu
              </h3>
              <p className="text-xs text-slate-500">
                Poin terhitung otomatis dari jawaban Pilihan Ganda, PG Kompleks, B/S, & Menjodohkan
              </p>
            </div>

            <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
              <div className="flex justify-between">
                <span>Pilihan Ganda (10 Soal):</span>
                <span className="font-extrabold text-emerald-600">{scores.scorePG} / 100</span>
              </div>
              <div className="flex justify-between">
                <span>PG Kompleks (5 Soal):</span>
                <span className="font-extrabold text-emerald-600">{scores.scorePGK} / 100</span>
              </div>
              <div className="flex justify-between">
                <span>Benar / Salah (5 Soal):</span>
                <span className="font-extrabold text-emerald-600">{scores.scoreBS} / 100</span>
              </div>
              <div className="flex justify-between">
                <span>Menjodohkan (5 Soal):</span>
                <span className="font-extrabold text-emerald-600">{scores.scoreMatching} / 100</span>
              </div>
              <div className="border-t border-slate-300 dark:border-slate-700 pt-2 flex justify-between text-base font-black text-slate-900 dark:text-white">
                <span>Total Estimasi Skor:</span>
                <span className="text-amber-600 dark:text-amber-400 text-xl">{scores.totalObjectiveScore} PTS</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 text-center italic">
              *Soal Uraian dinilai secara terpisah oleh guru.
            </p>

            <button
              onClick={() => {
                soundFX.playClick();
                setShowScoreModal(false);
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* ANSWER KEY ALERT BANNER */}
      {showAnswerKey && (
        <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border-2 border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200 flex items-center justify-between gap-3 animate-in fade-in duration-200">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold">
            <Key className="w-5 h-5 text-purple-600 shrink-0" />
            <span>Mode Kunci Jawaban & Pembahasan AKTIF. Semua jawaban benar ditampilkan berwarna hijau.</span>
          </div>
        </div>
      )}

      {/* =========================================
          BAGIAN A: PILIHAN GANDA (10 SOAL)
      ========================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-emerald-300 dark:border-emerald-800 shadow-md space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
          <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            BAGIAN A: PILIHAN GANDA (10 Soal)
          </h4>
          <span className="text-xs text-slate-500 font-semibold">10 Soal HOTS</span>
        </div>

        <div className="space-y-6">
          {dataPG.map((q) => {
            const userAns = userPG[q.id];
            return (
              <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug">
                  {q.id}. {q.question}
                </div>

                {q.arabic && (
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
                    <span className="font-arabic text-2xl text-emerald-900 dark:text-emerald-200 font-bold">
                      {q.arabic}
                    </span>
                  </div>
                )}

                {/* 4 Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = userAns === oIdx;
                    const isCorrect = q.correctAnswerIndex === oIdx;

                    let style = 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-emerald-400';

                    if (isSelected) {
                      style = 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-950 dark:text-emerald-200 border-emerald-500 font-bold';
                    }

                    if (showAnswerKey && isCorrect) {
                      style = 'bg-emerald-200 dark:bg-emerald-900 text-emerald-950 dark:text-white border-emerald-600 font-black ring-2 ring-emerald-400';
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => {
                          soundFX.playClick();
                          setUserPG((prev) => ({ ...prev, [q.id]: oIdx }));
                        }}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition cursor-pointer flex items-center justify-between gap-2 ${style}`}
                      >
                        <span>{opt}</span>
                        {showAnswerKey && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {showAnswerKey && (
                  <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 text-xs text-purple-900 dark:text-purple-200 font-medium">
                    💡 <strong>Pembahasan:</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================
          BAGIAN B: PILIHAN GANDA KOMPLEKS (5 SOAL)
      ========================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-amber-300 dark:border-amber-800 shadow-md space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
          <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            BAGIAN B: PILIHAN GANDA KOMPLEKS (5 Soal - Pilihlah Lebih dari Satu)
          </h4>
          <span className="text-xs text-slate-500 font-semibold">5 Soal CT</span>
        </div>

        <div className="space-y-6">
          {dataPGK.map((q) => {
            const currentSelected = userPGK[q.id] || [];
            return (
              <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug">
                  {q.id}. {q.question}
                </div>

                {/* Options with Checkbox */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {q.options.map((opt, oIdx) => {
                    const isChecked = currentSelected.includes(oIdx);
                    const isCorrectOpt = q.correctAnswerIndices.includes(oIdx);

                    let style = 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700';

                    if (isChecked) {
                      style = 'bg-amber-100 dark:bg-amber-950/80 text-amber-950 dark:text-amber-200 border-amber-500 font-bold';
                    }

                    if (showAnswerKey && isCorrectOpt) {
                      style = 'bg-emerald-200 dark:bg-emerald-900 text-emerald-950 dark:text-white border-emerald-600 font-black';
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleTogglePGK(q.id, oIdx)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition cursor-pointer flex items-center space-x-2.5 ${style}`}
                      >
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${isChecked ? 'bg-amber-500 border-amber-600 text-slate-950' : 'border-slate-300'}`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="leading-tight">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {showAnswerKey && (
                  <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 text-xs text-purple-900 dark:text-purple-200 font-medium">
                    💡 <strong>Pembahasan:</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================
          BAGIAN C: MENJODOHKAN (5 SOAL)
      ========================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-purple-300 dark:border-purple-800 shadow-md space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
          <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            BAGIAN C: MENJODOHKAN (5 Soal)
          </h4>
          <span className="text-xs text-slate-500 font-semibold">5 Soal Pasangan</span>
        </div>

        <div className="space-y-3">
          {dataMatching.map((q) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                {q.id}. {q.leftText}
              </div>

              <div className="w-full sm:w-auto">
                <select
                  value={userMatching[q.id] || ''}
                  onChange={(e) => {
                    soundFX.playClick();
                    setUserMatching((prev) => ({ ...prev, [q.id]: e.target.value }));
                  }}
                  className="w-full sm:w-64 p-2 rounded-xl bg-white dark:bg-slate-900 border border-purple-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">-- Pilih Pasangan --</option>
                  {dataMatching.map((m) => (
                    <option key={m.id} value={m.rightText}>
                      {m.rightText}
                    </option>
                  ))}
                </select>
              </div>

              {showAnswerKey && (
                <div className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-lg shrink-0">
                  Kunci: {q.rightText}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          BAGIAN D: MEMILIH BENAR ATAU SALAH (5 SOAL)
      ========================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-blue-300 dark:border-blue-800 shadow-md space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
          <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            BAGIAN D: MEMILIH BENAR ATAU SALAH (5 Soal)
          </h4>
          <span className="text-xs text-slate-500 font-semibold">5 Soal B/S</span>
        </div>

        <div className="space-y-4">
          {dataBS.map((q) => {
            const userChoice = userBS[q.id];
            return (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    {q.id}. {q.statement}
                  </div>
                  {q.arabic && (
                    <div className="font-arabic text-xl text-emerald-800 dark:text-emerald-300 font-bold">
                      {q.arabic}
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setUserBS((prev) => ({ ...prev, [q.id]: true }));
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-black border transition cursor-pointer ${
                      userChoice === true
                        ? 'bg-emerald-600 text-white border-emerald-500'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    BENAR
                  </button>

                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setUserBS((prev) => ({ ...prev, [q.id]: false }));
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-black border transition cursor-pointer ${
                      userChoice === false
                        ? 'bg-rose-600 text-white border-rose-500'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    SALAH
                  </button>
                </div>

                {showAnswerKey && (
                  <div className="text-xs font-extrabold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-3 py-1.5 rounded-lg w-full sm:w-auto">
                    Kunci: {q.isTrue ? 'BENAR' : 'SALAH'} — {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================
          BAGIAN E: SOAL URAIAN (5 SOAL)
      ========================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-amber-300 dark:border-amber-800 shadow-md space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
          <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            BAGIAN E: SOAL URAIAN (5 Soal HOTS)
          </h4>
          <span className="text-xs text-slate-500 font-semibold">5 Soal Uraian</span>
        </div>

        <div className="space-y-6">
          {dataEssay.map((q) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug">
                {q.id}. {q.question}
              </div>

              {q.arabic && (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-center">
                  <span className="font-arabic text-2xl text-emerald-900 dark:text-emerald-200 font-bold">
                    {q.arabic}
                  </span>
                </div>
              )}

              <textarea
                rows={3}
                placeholder="Tuliskan jawaban kamu secara lengkap dan santun di sini..."
                value={userEssay[q.id] || ''}
                onChange={(e) => setUserEssay((prev) => ({ ...prev, [q.id]: e.target.value }))}
                className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-400 font-medium"
              ></textarea>

              {showAnswerKey && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 text-xs text-emerald-950 dark:text-emerald-200 space-y-1">
                  <div className="font-extrabold text-emerald-800 dark:text-emerald-300">
                    📋 Pedoman Rubrik & Contoh Jawaban:
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 italic">{q.rubric}</div>
                  <div className="font-bold pt-1 whitespace-pre-line text-emerald-900 dark:text-emerald-200">
                    "{q.sampleAnswer}"
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

