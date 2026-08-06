import React, { useState } from 'react';
import { 
  EVALUASI_PG_KELAS6_P1, 
  EVALUASI_PGK_KELAS6_P1, 
  EVALUASI_MENJODOHKAN_KELAS6_P1, 
  EVALUASI_BENAR_SALAH_KELAS6_P1, 
  EVALUASI_URAIAN_KELAS6_P1 
} from '../../data/kelas6Pembelajaran1Data';
import { soundFX } from '../../utils/audio';
import { 
  ClipboardCheck, 
  Key, 
  Award, 
  Printer, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  HelpCircle, 
  X, 
  RotateCcw,
  BookOpen
} from 'lucide-react';

interface EvaluasiView6_P1Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView6_P1: React.FC<EvaluasiView6_P1Props> = ({ grade, lesson }) => {
  // Student Answers State
  const [pgAnswers, setPgAnswers] = useState<Record<number, number>>({});
  const [pgkAnswers, setPgkAnswers] = useState<Record<number, number[]>>({});
  const [menjodohkanAnswers, setMenjodohkanAnswers] = useState<Record<number, string>>({});
  const [bsAnswers, setBsAnswers] = useState<Record<number, boolean>>({});
  const [bsReasons, setBsReasons] = useState<Record<number, string>>({});
  const [uraianAnswers, setUraianAnswers] = useState<Record<number, string>>({});

  // UI Control States
  const [showAnswerKeys, setShowAnswerKeys] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [scoreData, setScoreData] = useState<{ totalScore: number; pgScore: number; pgkScore: number; bsScore: number; menjodohkanScore: number }>({
    totalScore: 0,
    pgScore: 0,
    pgkScore: 0,
    bsScore: 0,
    menjodohkanScore: 0
  });

  // Handlers for student inputs
  const handleSelectPG = (qId: number, optionIdx: number) => {
    soundFX.playClick();
    setPgAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const handleTogglePGK = (qId: number, optionIdx: number) => {
    soundFX.playClick();
    setPgkAnswers(prev => {
      const current = prev[qId] || [];
      if (current.includes(optionIdx)) {
        return { ...prev, [qId]: current.filter(i => i !== optionIdx) };
      } else {
        return { ...prev, [qId]: [...current, optionIdx] };
      }
    });
  };

  const handleSelectMenjodohkan = (qId: number, target: string) => {
    soundFX.playClick();
    setMenjodohkanAnswers(prev => ({ ...prev, [qId]: target }));
  };

  const handleSelectBS = (qId: number, val: boolean) => {
    soundFX.playClick();
    setBsAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleBsReasonChange = (qId: number, reason: string) => {
    setBsReasons(prev => ({ ...prev, [qId]: reason }));
  };

  const handleUraianChange = (qId: number, text: string) => {
    setUraianAnswers(prev => ({ ...prev, [qId]: text }));
  };

  const handleToggleAnswerKeys = () => {
    soundFX.playClick();
    setShowAnswerKeys(prev => !prev);
  };

  // Calculate Score Modal
  const handleCalculateScore = () => {
    soundFX.playClick();

    // 1. PG Score (10 questions, 3 points each = max 30)
    let pgCorrect = 0;
    EVALUASI_PG_KELAS6_P1.forEach(q => {
      if (pgAnswers[q.id] === q.answer) pgCorrect++;
    });
    const pgScore = pgCorrect * 3;

    // 2. PGK Score (10 questions, 3 points each = max 30)
    let pgkCorrect = 0;
    EVALUASI_PGK_KELAS6_P1.forEach(q => {
      const userSelected = (pgkAnswers[q.id] || []).sort();
      const actualCorrect = [...q.correctAnswers].sort();
      if (JSON.stringify(userSelected) === JSON.stringify(actualCorrect)) {
        pgkCorrect++;
      }
    });
    const pgkScore = pgkCorrect * 3;

    // 3. Menjodohkan Score (5 questions, 2 points each = max 10)
    let menjodohkanCorrect = 0;
    EVALUASI_MENJODOHKAN_KELAS6_P1.forEach(q => {
      if (menjodohkanAnswers[q.id] === q.matchTarget) menjodohkanCorrect++;
    });
    const menjodohkanScore = menjodohkanCorrect * 2;

    // 4. Benar/Salah Score (10 questions, 2 points each = max 20)
    let bsCorrect = 0;
    EVALUASI_BENAR_SALAH_KELAS6_P1.forEach(q => {
      if (bsAnswers[q.id] === q.isCorrect) bsCorrect++;
    });
    const bsScore = bsCorrect * 2;

    // Total Score from objective sections (max 90, +10 bonus/essay review = max 100)
    const totalScore = pgScore + pgkScore + menjodohkanScore + bsScore + 10;

    setScoreData({
      totalScore,
      pgScore,
      pgkScore,
      bsScore,
      menjodohkanScore
    });

    setShowScoreModal(true);

    if (totalScore >= 75) {
      soundFX.playFanfare();
    } else {
      soundFX.playCorrect();
    }
  };

  // Print Evaluasi
  const handlePrint = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Evaluasi Pembelajaran - Kelas ${grade} Bab ${lesson}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 40px;
              color: #0f172a;
              line-height: 1.5;
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
              font-size: 12px;
            }
            .identity-box {
              border: 1px solid #cbd5e1;
              border-radius: 8px;
              padding: 12px;
              margin-bottom: 24px;
              font-size: 12px;
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
              margin-bottom: 14px;
              font-size: 12px;
            }
            .q-text {
              font-weight: 700;
              margin-bottom: 6px;
            }
            .options-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 6px;
              margin-left: 16px;
            }
            .option-item {
              border: 1px solid #e2e8f0;
              padding: 6px 10px;
              border-radius: 6px;
              background-color: #f8fafc;
            }
            .reason-box {
              margin-top: 6px;
              margin-left: 16px;
              border: 1px dashed #cbd5e1;
              height: 32px;
              border-radius: 4px;
              background-color: #fafafa;
            }
            .essay-box {
              margin-top: 6px;
              border: 1px solid #cbd5e1;
              height: 60px;
              border-radius: 6px;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              font-size: 11px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>LEMBAR EVALUASI PEMBELAJARAN PAIBP KELAS ${grade}</h1>
            <p>Bab ${lesson}: Membaca, Menulis, & Membedakan Huruf Hijaiyah Bersambung serta Surat Al-Insyirah</p>
          </div>

          <div class="identity-box">
            <div><strong>Nama Murid:</strong> ___________________________</div>
            <div><strong>Kelas / No:</strong> VI / ________</div>
            <div><strong>Hari / Tanggal:</strong> ___________________________</div>
            <div><strong>Nilai / Paraf:</strong> _________ / _________</div>
          </div>

          <!-- BAGIAN A -->
          <div class="section-title">BAGIAN A: PILIHAN GANDA (10 Soal)</div>
          ${EVALUASI_PG_KELAS6_P1.map((q, idx) => `
            <div class="q-card">
              <div class="q-text">${idx + 1}. ${q.question}</div>
              <div class="options-grid">
                ${q.options.map((opt, i) => `<div class="option-item">${String.fromCharCode(65 + i)}. ${opt}</div>`).join('')}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN B -->
          <div class="section-title">BAGIAN B: PILIHAN GANDA KOMPLEKS (10 Soal - Pilih Lebih Dari Satu)</div>
          ${EVALUASI_PGK_KELAS6_P1.map((q, idx) => `
            <div class="q-card">
              <div class="q-text">${idx + 1}. ${q.question}</div>
              <div class="options-grid">
                ${q.options.map(opt => `<div class="option-item">[  ] ${opt}</div>`).join('')}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN C -->
          <div class="section-title">BAGIAN C: MENJODOHKAN (5 Soal)</div>
          <table style="width:100%; border-collapse:collapse; font-size:12px; margin-bottom:16px;" border="1" cellpadding="6">
            <thead>
              <tr style="background-color:#f1f5f9;">
                <th style="width:40%;">Pernyataan / Istilah</th>
                <th style="width:20%;">Pasangan</th>
                <th style="width:40%;">Pilihan Jawaban</th>
              </tr>
            </thead>
            <tbody>
              ${EVALUASI_MENJODOHKAN_KELAS6_P1.map((q, idx) => `
                <tr>
                  <td>${idx + 1}. ${q.premise}</td>
                  <td style="text-align:center;">[ ....... ]</td>
                  <td>${String.fromCharCode(65 + idx)}. ${q.matchTarget}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <!-- BAGIAN D -->
          <div class="section-title">BAGIAN D: BENAR / SALAH + ISIAN ALASAN (10 Soal)</div>
          ${EVALUASI_BENAR_SALAH_KELAS6_P1.map((q, idx) => `
            <div class="q-card">
              <div class="q-text">${idx + 1}. ${q.statement}</div>
              <div style="margin-left:16px;">
                Pilihan: [  ] BENAR  &nbsp;&nbsp;&nbsp;&nbsp; [  ] SALAH
              </div>
              <div style="margin-left:16px; margin-top:4px; font-size:11px; color:#475569;">Alasan Murid:</div>
              <div class="reason-box"></div>
            </div>
          `).join('')}

          <!-- BAGIAN E -->
          <div class="section-title">BAGIAN E: URAIAN HOTS (5 Soal)</div>
          ${EVALUASI_URAIAN_KELAS6_P1.map((q, idx) => `
            <div class="q-card">
              <div class="q-text">${idx + 1}. ${q.question}</div>
              <div class="essay-box"></div>
            </div>
          `).join('')}

          <div class="footer">
            SIMPAD PAI-SD • Lembar Evaluasi Resmi Kelas VI • Didesain untuk Boleh Digunakan oleh Semua Guru
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
              Huruf Hijaiyah Bersambung, Ghunnah & Surat Al-Insyirah
            </h2>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleToggleAnswerKeys}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
              showAnswerKeys
                ? 'bg-amber-500 text-white border-amber-500 shadow-md'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>{showAnswerKeys ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            onClick={handleCalculateScore}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-md"
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
          <p className="text-xs text-slate-500">Pilihlah satu jawaban yang paling tepat!</p>
        </div>

        <div className="space-y-6">
          {EVALUASI_PG_KELAS6_P1.map((q, idx) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-start gap-2">
                <span className="text-teal-600 shrink-0">{idx + 1}.</span>
                <span>{q.question}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-5">
                {q.options.map((opt, optIdx) => {
                  const isSelected = pgAnswers[q.id] === optIdx;
                  const isCorrect = q.answer === optIdx;

                  let optStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-300';
                  
                  if (isSelected) {
                    optStyle = 'bg-teal-100 dark:bg-teal-950/80 border-teal-500 text-teal-950 dark:text-teal-100 font-bold';
                  }

                  if (showAnswerKeys && isCorrect) {
                    optStyle = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold ring-2 ring-emerald-400';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectPG(q.id, optIdx)}
                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${optStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold shrink-0">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {showAnswerKeys && (
                <div className="mt-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 font-medium">
                  <strong>Kunci & Penjelasan:</strong> Jawaban {String.fromCharCode(65 + q.answer)} — {q.explanation}
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
          <p className="text-xs text-slate-500">Pilihlah beberapa opsi jawaban yang benar!</p>
        </div>

        <div className="space-y-6">
          {EVALUASI_PGK_KELAS6_P1.map((q, idx) => {
            const userSelections = pgkAnswers[q.id] || [];

            return (
              <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-start gap-2">
                  <span className="text-teal-600 shrink-0">{idx + 1}.</span>
                  <span>{q.question}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-5">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userSelections.includes(optIdx);
                    const isCorrectOption = q.correctAnswers.includes(optIdx);

                    let optStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-300';

                    if (isSelected) {
                      optStyle = 'bg-indigo-100 dark:bg-indigo-950/80 border-indigo-500 text-indigo-950 dark:text-indigo-100 font-bold';
                    }

                    if (showAnswerKeys && isCorrectOption) {
                      optStyle = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold ring-2 ring-emerald-400';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleTogglePGK(q.id, optIdx)}
                        className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${optStyle}`}
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-400'}`}>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="flex-1">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {showAnswerKeys && (
                  <div className="mt-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 font-medium">
                    <strong>Kunci Jawaban:</strong> {q.correctAnswers.map(a => q.options[a]).join(' | ')} <br />
                    <strong>Penjelasan:</strong> {q.explanation}
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
          <p className="text-xs text-slate-500">Pasangkan pernyataan di sebelah kiri dengan pilihan yang tepat di sebelah kanan!</p>
        </div>

        <div className="space-y-4">
          {EVALUASI_MENJODOHKAN_KELAS6_P1.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
              <div className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2 max-w-md">
                <span className="text-teal-600 shrink-0">{idx + 1}.</span>
                <span>{q.premise}</span>
              </div>

              <div className="flex-1 min-w-[240px]">
                <select
                  value={menjodohkanAnswers[q.id] || ''}
                  onChange={(e) => handleSelectMenjodohkan(q.id, e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">-- Pilih Pasangan Jawaban --</option>
                  {EVALUASI_MENJODOHKAN_KELAS6_P1.map((opt) => (
                    <option key={opt.id} value={opt.matchTarget}>
                      {opt.matchTarget}
                    </option>
                  ))}
                </select>
              </div>

              {showAnswerKeys && (
                <div className="w-full p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 text-xs text-amber-900 dark:text-amber-200 font-bold">
                  Kunci: {q.matchTarget}
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
          <p className="text-xs text-slate-500">Tentukan apakah pernyataan berikut BENAR atau SALAH, lalu tuliskan alasannya!</p>
        </div>

        <div className="space-y-6">
          {EVALUASI_BENAR_SALAH_KELAS6_P1.map((q, idx) => {
            const userChoice = bsAnswers[q.id];

            return (
              <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="font-extrabold text-sm text-slate-900 dark:text-white flex items-start gap-2">
                  <span className="text-teal-600 shrink-0">{idx + 1}.</span>
                  <span>{q.statement}</span>
                </div>

                {/* True / False Buttons */}
                <div className="flex items-center gap-3 pl-5">
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

                {/* Student Reason Text Input Column */}
                <div className="pl-5 space-y-1">
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400">
                    Kolom Isian Alasan Murid:
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
                  <div className="mt-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 font-medium">
                    <strong>Kunci Jawaban:</strong> {q.isCorrect ? 'BENAR' : 'SALAH'} <br />
                    <strong>Penjelasan Kunci:</strong> {q.explanation}
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
          <p className="text-xs text-slate-500">Jawablah pertanyaan uraian berikut dengan analisis yang runtut dan jelas!</p>
        </div>

        <div className="space-y-6">
          {EVALUASI_URAIAN_KELAS6_P1.map((q, idx) => (
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
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 font-medium">
                  <strong>Rubrik Kunci Jawaban:</strong> {q.rubricKey}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL LIHAT SKOR ================= */}
      {showScoreModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-6 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-emerald-600" />
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  Hasil Evaluasi Pembelajaran
                </h3>
              </div>
              <button
                onClick={() => setShowScoreModal(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Skor Total Objektif</span>
              <div className="text-5xl font-black text-emerald-600 dark:text-emerald-400">
                {scoreData.totalScore} <span className="text-lg text-slate-400">/ 100</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {scoreData.totalScore >= 75 
                  ? 'Luar biasa! Kamu telah menguasai materi Ghunnah dan Surat Al-Insyirah dengan sangat baik.' 
                  : 'Tetap semangat! Pelajari kembali materi slide untuk menyempurnakan pemahamanmu.'}
              </p>
            </div>

            {/* Score Breakdown Table */}
            <div className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex justify-between">
                <span>Skor Pilihan Ganda (10 Soal):</span>
                <span className="font-bold text-slate-900 dark:text-white">{scoreData.pgScore} / 30</span>
              </div>
              <div className="flex justify-between">
                <span>Skor PG Kompleks (10 Soal):</span>
                <span className="font-bold text-slate-900 dark:text-white">{scoreData.pgkScore} / 30</span>
              </div>
              <div className="flex justify-between">
                <span>Skor Menjodohkan (5 Soal):</span>
                <span className="font-bold text-slate-900 dark:text-white">{scoreData.menjodohkanScore} / 10</span>
              </div>
              <div className="flex justify-between">
                <span>Skor Benar/Salah (10 Soal):</span>
                <span className="font-bold text-slate-900 dark:text-white">{scoreData.bsScore} / 20</span>
              </div>
              <div className="flex justify-between text-emerald-600 font-extrabold border-t border-slate-200 dark:border-slate-700 pt-1.5">
                <span>Poin Partisipasi Uraian:</span>
                <span>+10</span>
              </div>
            </div>

            <button
              onClick={() => setShowScoreModal(false)}
              className="w-full py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-md transition-all"
            >
              Tutup Ringkasan Skor
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
