import React, { useState } from 'react';
import { 
  EVALUASI_PG_KELAS6_P2, 
  EVALUASI_PGK_KELAS6_P2, 
  EVALUASI_MENJODOHKAN_KELAS6_P2, 
  EVALUASI_BENAR_SALAH_KELAS6_P2, 
  EVALUASI_URAIAN_KELAS6_P2 
} from '../../data/kelas6Pembelajaran2Data';
import { soundFX } from '../../utils/audio';
import { 
  ClipboardCheck, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  EyeOff, 
  Trophy, 
  Printer, 
  HelpCircle, 
  Sparkles, 
  RotateCcw,
  BookOpen
} from 'lucide-react';

interface EvaluasiView6_P2Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView6_P2: React.FC<EvaluasiView6_P2Props> = ({ grade, lesson }) => {
  // State for user answers
  const [pgAnswers, setPgAnswers] = useState<Record<number, number>>({});
  const [pgkAnswers, setPgkAnswers] = useState<Record<number, number[]>>({});
  const [menjodohkanAnswers, setMenjodohkanAnswers] = useState<Record<number, string>>({});
  const [bsAnswers, setBsAnswers] = useState<Record<number, boolean>>({});
  const [bsReasons, setBsReasons] = useState<Record<number, string>>({});
  const [uraianAnswers, setUraianAnswers] = useState<Record<number, string>>({});

  // View state
  const [showAnswerKeys, setShowAnswerKeys] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  // PG selection
  const handleSelectPG = (qId: number, optIdx: number) => {
    soundFX.playClick();
    setPgAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  // PGK selection (toggle array of numbers)
  const handleSelectPGK = (qId: number, optIdx: number) => {
    soundFX.playClick();
    setPgkAnswers(prev => {
      const currentArr = prev[qId] || [];
      if (currentArr.includes(optIdx)) {
        return { ...prev, [qId]: currentArr.filter(i => i !== optIdx) };
      } else {
        return { ...prev, [qId]: [...currentArr, optIdx] };
      }
    });
  };

  // Menjodohkan selection
  const handleSelectMenjodohkan = (qId: number, matchVal: string) => {
    soundFX.playClick();
    setMenjodohkanAnswers(prev => ({ ...prev, [qId]: matchVal }));
  };

  // Benar Salah selection
  const handleSelectBS = (qId: number, val: boolean) => {
    soundFX.playClick();
    setBsAnswers(prev => ({ ...prev, [qId]: val }));
  };

  // Benar Salah reason change
  const handleBsReasonChange = (qId: number, text: string) => {
    setBsReasons(prev => ({ ...prev, [qId]: text }));
  };

  // Uraian change
  const handleUraianChange = (qId: number, text: string) => {
    setUraianAnswers(prev => ({ ...prev, [qId]: text }));
  };

  // Calculate score
  const calculateScore = () => {
    let pgCorrect = 0;
    EVALUASI_PG_KELAS6_P2.forEach(q => {
      if (pgAnswers[q.id] === q.answer) pgCorrect++;
    });
    const pgScore = pgCorrect * 10;

    let pgkCorrect = 0;
    EVALUASI_PGK_KELAS6_P2.forEach(q => {
      const userAns = (pgkAnswers[q.id] || []).sort().join(',');
      const correctAns = [...q.correctAnswers].sort().join(',');
      if (userAns === correctAns) pgkCorrect++;
    });
    const pgkScore = pgkCorrect * 10;

    let menjodohkanCorrect = 0;
    EVALUASI_MENJODOHKAN_KELAS6_P2.forEach(q => {
      if (menjodohkanAnswers[q.id] === q.matchTarget) menjodohkanCorrect++;
    });
    const menjodohkanScore = menjodohkanCorrect * 20;

    let bsCorrect = 0;
    EVALUASI_BENAR_SALAH_KELAS6_P2.forEach(q => {
      if (bsAnswers[q.id] === q.isCorrect) bsCorrect++;
    });
    const bsScore = bsCorrect * 10;

    let totalAnsweredUraian = Object.keys(uraianAnswers).length;

    return {
      pgScore,
      pgkScore,
      menjodohkanScore,
      bsScore,
      uraianCount: totalAnsweredUraian,
      totalObjScore: pgScore + pgkScore + menjodohkanScore + bsScore
    };
  };

  const handlePrint = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Naskah Evaluasi Pembelajaran - Kelas ${grade} Bab ${lesson}: Asmaul Husna</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 40px;
              color: #0f172a;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #cbd5e1;
              padding-bottom: 16px;
              margin-bottom: 24px;
            }
            .header h1 {
              margin: 0;
              color: #0f766e;
              font-size: 20px;
              font-weight: 800;
            }
            .header p {
              margin: 4px 0 0;
              color: #64748b;
              font-size: 13px;
            }
            .identity-box {
              border: 1px solid #cbd5e1;
              border-radius: 8px;
              padding: 12px;
              margin-bottom: 24px;
              font-size: 13px;
            }
            .identity-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 8px;
            }
            .section-title {
              font-size: 14px;
              font-weight: 800;
              color: #0f766e;
              border-bottom: 2px solid #99f6e4;
              padding-bottom: 4px;
              margin-top: 24px;
              margin-bottom: 12px;
            }
            .q-card {
              page-break-inside: avoid;
              margin-bottom: 16px;
              font-size: 13px;
            }
            .q-text {
              font-weight: 700;
              color: #0f172a;
              margin-bottom: 6px;
            }
            .opt-list {
              padding-left: 20px;
              margin: 4px 0;
            }
            .opt-item {
              margin-bottom: 3px;
            }
            .reason-box {
              border: 1px dashed #cbd5e1;
              height: 40px;
              border-radius: 6px;
              margin-top: 6px;
            }
            .essay-box {
              border: 1px dashed #cbd5e1;
              height: 70px;
              border-radius: 6px;
              margin-top: 6px;
            }
            .footer-info {
              text-align: center;
              font-size: 11px;
              color: #94a3b8;
              margin-top: 40px;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>EVALUASI PEMBELAJARAN HOTS & COMPUTATIONAL THINKING</h1>
            <p>PAI-SD KELAS ${grade} • BAB ${lesson}: Mengenal dan Meneladani Asmaul Husna</p>
          </div>

          <div class="identity-box">
            <div class="identity-grid">
              <div><strong>Nama Murid:</strong> ...........................................................</div>
              <div><strong>Kelas / Absen:</strong> 6 ........ / ........</div>
              <div><strong>Hari / Tanggal:</strong> ...........................................................</div>
              <div><strong>Nilai Akhir:</strong> .............. / 100</div>
            </div>
          </div>

          <!-- BAGIAN A -->
          <div class="section-title">BAGIAN A: PILIHAN GANDA (10 SOAL)</div>
          ${EVALUASI_PG_KELAS6_P2.map((q, idx) => `
            <div class="q-card">
              <div class="q-text">${idx + 1}. ${q.question}</div>
              <div class="opt-list">
                ${q.options.map((opt, oIdx) => `
                  <div class="opt-item">${String.fromCharCode(65 + oIdx)}. ${opt}</div>
                `).join('')}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN B -->
          <div class="section-title">BAGIAN B: PILIHAN GANDA KOMPLEKS (10 SOAL)</div>
          ${EVALUASI_PGK_KELAS6_P2.map((q, idx) => `
            <div class="q-card">
              <div class="q-text">${idx + 1}. ${q.question}</div>
              <div class="opt-list">
                ${q.options.map((opt, oIdx) => `
                  <div class="opt-item">[ &nbsp; ] ${String.fromCharCode(65 + oIdx)}. ${opt}</div>
                `).join('')}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN C -->
          <div class="section-title">BAGIAN C: MENJODOHKAN (5 SOAL)</div>
          ${EVALUASI_MENJODOHKAN_KELAS6_P2.map((q, idx) => `
            <div class="q-card">
              <div class="q-text">${idx + 1}. Premis: ${q.premise}</div>
              <div style="padding-left: 20px; font-style: italic; color: #475569;">
                Pasangan Jawaban: ( ..................................................................................................... )
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN D -->
          <div class="section-title">BAGIAN D: BENAR / SALAH + ISIAN ALASAN (10 SOAL)</div>
          ${EVALUASI_BENAR_SALAH_KELAS6_P2.map((q, idx) => `
            <div class="q-card">
              <div class="q-text">${idx + 1}. Pernyataan: ${q.statement}</div>
              <div style="padding-left: 20px; margin-top: 4px;">
                Pilihan: [ &nbsp; ] BENAR &nbsp;&nbsp;&nbsp;&nbsp; [ &nbsp; ] SALAH
              </div>
              <div style="padding-left: 20px; margin-top: 4px; font-size: 11px; font-weight: bold; color: #0f766e;">
                Alasan Pilihan Jawabanmu:
              </div>
              <div class="reason-box"></div>
            </div>
          `).join('')}

          <!-- BAGIAN E -->
          <div class="section-title">BAGIAN E: URAIAN HOTS (5 SOAL)</div>
          ${EVALUASI_URAIAN_KELAS6_P2.map((q, idx) => `
            <div class="q-card">
              <div class="q-text">${idx + 1}. ${q.question}</div>
              <div class="essay-box"></div>
            </div>
          `).join('')}

          <div class="footer-info">
            Dicetak dari Naskah Evaluasi PAI-SD Kelas 6 • Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
          </div>

          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const scores = calculateScore();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
            <ClipboardCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-wider">
              Evaluasi Pembelajaran HOTS & CT • Kelas {grade} Bab {lesson}
            </span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              Latihan Soal Lengkap (PG, PGK, Menjodohkan, B/S, Uraian)
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Toggle Answer Key */}
          <button
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKeys(!showAnswerKeys);
            }}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all border ${
              showAnswerKeys
                ? 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-200'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
            }`}
          >
            {showAnswerKeys ? <EyeOff className="w-4 h-4 text-amber-600" /> : <Eye className="w-4 h-4 text-teal-600" />}
            <span>{showAnswerKeys ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          {/* Show Score Modal */}
          <button
            onClick={() => {
              soundFX.playClick();
              setShowScoreModal(true);
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Trophy className="w-4 h-4" />
            <span>Lihat Skor Saya</span>
          </button>

          {/* Download PDF */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Download Evaluasi PDF</span>
          </button>
        </div>
      </div>

      {/* ================= BAGIAN A: PILIHAN GANDA ================= */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-lg space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-black uppercase text-teal-600 tracking-wider">Bagian A</span>
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            Pilihan Ganda (10 Soal)
          </h3>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Pilihlah satu jawaban yang paling tepat!
          </p>
        </div>

        <div className="space-y-6">
          {EVALUASI_PG_KELAS6_P2.map((q, idx) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-start gap-2">
                <span className="text-teal-600 shrink-0">{idx + 1}.</span>
                <span>{q.question}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {q.options.map((opt, optIdx) => {
                  const isSelected = pgAnswers[q.id] === optIdx;
                  const isCorrect = q.answer === optIdx;

                  let optStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-300';
                  
                  if (isSelected) {
                    optStyle = 'bg-teal-100 dark:bg-teal-950/80 border-teal-500 text-teal-950 dark:text-teal-100 font-bold';
                  }

                  if (showAnswerKeys && isCorrect) {
                    optStyle = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectPG(q.id, optIdx)}
                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-2 ${optStyle}`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 border border-current flex items-center justify-center text-[10px] font-black shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </span>

                      {showAnswerKeys && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {showAnswerKeys && (
                <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs font-semibold text-teal-900 dark:text-teal-200">
                  <strong>Pembahasan:</strong> {q.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= BAGIAN B: PILIHAN GANDA KOMPLEKS ================= */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-lg space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-black uppercase text-teal-600 tracking-wider">Bagian B</span>
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            Pilihan Ganda Kompleks (10 Soal - Pilih Lebih Dari Satu Jawaban)
          </h3>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Pilihlah semua jawaban yang benar untuk setiap nomor!
          </p>
        </div>

        <div className="space-y-6">
          {EVALUASI_PGK_KELAS6_P2.map((q, idx) => {
            const userSelections = pgkAnswers[q.id] || [];

            return (
              <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-start gap-2">
                  <span className="text-teal-600 shrink-0">{idx + 1}.</span>
                  <span>{q.question}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userSelections.includes(optIdx);
                    const isCorrectOption = q.correctAnswers.includes(optIdx);

                    let optStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-300';

                    if (isSelected) {
                      optStyle = 'bg-indigo-100 dark:bg-indigo-950/80 border-indigo-500 text-indigo-950 dark:text-indigo-100 font-bold';
                    }

                    if (showAnswerKeys && isCorrectOption) {
                      optStyle = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectPGK(q.id, optIdx)}
                        className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-2 ${optStyle}`}
                      >
                        <span className="flex items-center gap-2">
                          <input 
                            type="checkbox" 
                            checked={isSelected} 
                            readOnly 
                            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span>{opt}</span>
                        </span>

                        {showAnswerKeys && isCorrectOption && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {showAnswerKeys && (
                  <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs font-semibold text-teal-900 dark:text-teal-200">
                    <strong>Pembahasan:</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= BAGIAN C: MENJODOHKAN ================= */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-lg space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-black uppercase text-teal-600 tracking-wider">Bagian C</span>
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            Soal Menjodohkan (5 Soal)
          </h3>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Jodohkanlah premis di sebelah kiri dengan jawaban pasangan yang tepat!
          </p>
        </div>

        <div className="space-y-4">
          {EVALUASI_MENJODOHKAN_KELAS6_P2.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
              <div className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2 max-w-md">
                <span className="text-teal-600 shrink-0">{idx + 1}.</span>
                <span>{q.premise}</span>
              </div>

              <div className="w-full sm:w-auto min-w-[280px]">
                <select
                  value={menjodohkanAnswers[q.id] || ''}
                  onChange={(e) => handleSelectMenjodohkan(q.id, e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">-- Pilih Pasangan Jawaban --</option>
                  {EVALUASI_MENJODOHKAN_KELAS6_P2.map((opt) => (
                    <option key={opt.id} value={opt.matchTarget}>
                      {opt.matchTarget}
                    </option>
                  ))}
                </select>
              </div>

              {showAnswerKeys && (
                <div className="w-full p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-xs font-bold text-emerald-800 dark:text-emerald-200">
                  Jawaban Benar: {q.matchTarget}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= BAGIAN D: BENAR / SALAH + ISIAN ALASAN ================= */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-lg space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-black uppercase text-teal-600 tracking-wider">Bagian D</span>
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            Memilih Benar / Salah + Isian Alasan Murid (10 Soal)
          </h3>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Tentukan apakah pernyataan berikut BENAR atau SALAH, dan tuliskan alasan singkat pilihanmu!
          </p>
        </div>

        <div className="space-y-6">
          {EVALUASI_BENAR_SALAH_KELAS6_P2.map((q, idx) => {
            const userChoice = bsAnswers[q.id];

            return (
              <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="font-extrabold text-sm text-slate-900 dark:text-white flex items-start gap-2">
                  <span className="text-teal-600 shrink-0">{idx + 1}.</span>
                  <span>{q.statement}</span>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <button
                    onClick={() => handleSelectBS(q.id, true)}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all border ${
                      userChoice === true
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                        : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-400'
                    }`}
                  >
                    [ BENAR ]
                  </button>

                  <button
                    onClick={() => handleSelectBS(q.id, false)}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all border ${
                      userChoice === false
                        ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                        : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-amber-400'
                    }`}
                  >
                    [ SALAH ]
                  </button>
                </div>

                {/* Reason Text Input */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400">
                    Alasan Pilihan Jawabanmu:
                  </label>
                  <input
                    type="text"
                    placeholder="Tuliskan alasan pilihanmu di sini..."
                    value={bsReasons[q.id] || ''}
                    onChange={(e) => handleBsReasonChange(q.id, e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {showAnswerKeys && (
                  <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs font-semibold text-teal-900 dark:text-teal-200">
                    <strong>Kunci & Pembahasan:</strong> {q.isCorrect ? 'BENAR' : 'SALAH'} — {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= BAGIAN E: URAIAN HOTS ================= */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-lg space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-black uppercase text-teal-600 tracking-wider">Bagian E</span>
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            Soal Uraian HOTS (5 Soal)
          </h3>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Jawablah soal-soal bernalar tinggi berikut secara lengkap dan jelas!
          </p>
        </div>

        <div className="space-y-6">
          {EVALUASI_URAIAN_KELAS6_P2.map((q, idx) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <div className="font-extrabold text-sm text-slate-900 dark:text-white flex items-start gap-2">
                <span className="text-teal-600 shrink-0">{idx + 1}.</span>
                <span>{q.question}</span>
              </div>

              <textarea
                rows={3}
                placeholder="Tuliskan jawaban uraian lengkapmu di sini..."
                value={uraianAnswers[q.id] || ''}
                onChange={(e) => handleUraianChange(q.id, e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              />

              {showAnswerKeys && (
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs font-semibold text-amber-900 dark:text-amber-200">
                  <strong>Rubrik Jawaban Ideal Guru:</strong> {q.rubricKey}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Score Modal */}
      {showScoreModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Ringkasan Skor Evaluasi
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Hasil pengerjaan mandiri murid Kelas 6 Pembelajaran 2
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 space-y-2 text-xs font-bold text-slate-700 dark:text-slate-300 text-left">
              <div className="flex justify-between">
                <span>Pilihan Ganda (PG):</span>
                <span className="text-teal-600">{scores.pgScore} / 100</span>
              </div>
              <div className="flex justify-between">
                <span>PG Kompleks (PGK):</span>
                <span className="text-teal-600">{scores.pgkScore} / 100</span>
              </div>
              <div className="flex justify-between">
                <span>Menjodohkan:</span>
                <span className="text-teal-600">{scores.menjodohkanScore} / 100</span>
              </div>
              <div className="flex justify-between">
                <span>Benar / Salah:</span>
                <span className="text-teal-600">{scores.bsScore} / 100</span>
              </div>
              <div className="flex justify-between border-t pt-2 border-slate-200 dark:border-slate-700">
                <span>Soal Uraian Terisi:</span>
                <span className="text-indigo-600">{scores.uraianCount} / 5 Soal</span>
              </div>
            </div>

            <button
              onClick={() => setShowScoreModal(false)}
              className="w-full py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Tutup Ringkasan Skor
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
