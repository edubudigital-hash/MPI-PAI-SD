import React, { useState } from 'react';
import { 
  EVALUASI_PG_KELAS6_P4, 
  EVALUASI_PGK_KELAS6_P4, 
  EVALUASI_MENJODOHKAN_KELAS6_P4, 
  EVALUASI_BENAR_SALAH_KELAS6_P4, 
  EVALUASI_URAIAN_KELAS6_P4 
} from '../../data/kelas6Pembelajaran4Data';
import { soundFX } from '../../utils/audio';
import { 
  ClipboardCheck, 
  CheckCircle2, 
  Eye, 
  Printer, 
  Award, 
  RotateCcw, 
  AlertCircle, 
  HelpCircle, 
  Sparkles,
  FileText
} from 'lucide-react';

interface EvaluasiView6_P4Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView6_P4: React.FC<EvaluasiView6_P4Props> = ({ grade, lesson }) => {
  // Answers state
  const [pgAnswers, setPgAnswers] = useState<Record<number, number>>({});
  const [pgkAnswers, setPgkAnswers] = useState<Record<number, number[]>>({});
  const [menjodohkanAnswers, setMenjodohkanAnswers] = useState<Record<number, string>>({});
  const [bsAnswers, setBsAnswers] = useState<Record<number, boolean>>({});
  const [bsReasons, setBsReasons] = useState<Record<number, string>>({});
  const [uraianAnswers, setUraianAnswers] = useState<Record<number, string>>({});

  // Display toggles
  const [showAnswerKeys, setShowAnswerKeys] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  // PG Answer selection
  const handleSelectPG = (qId: number, optIdx: number) => {
    soundFX.playClick();
    setPgAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  // PGK Multi-select toggle
  const handleTogglePGK = (qId: number, optIdx: number) => {
    soundFX.playClick();
    setPgkAnswers(prev => {
      const current = prev[qId] || [];
      if (current.includes(optIdx)) {
        return { ...prev, [qId]: current.filter(i => i !== optIdx) };
      } else {
        return { ...prev, [qId]: [...current, optIdx] };
      }
    });
  };

  // Menjodohkan selection
  const handleSelectMenjodohkan = (qId: number, targetVal: string) => {
    soundFX.playClick();
    setMenjodohkanAnswers(prev => ({ ...prev, [qId]: targetVal }));
  };

  // Benar/Salah selection
  const handleSelectBS = (qId: number, isCorrectVal: boolean) => {
    soundFX.playClick();
    setBsAnswers(prev => ({ ...prev, [qId]: isCorrectVal }));
  };

  // Benar/Salah Reason text change
  const handleReasonChangeBS = (qId: number, text: string) => {
    setBsReasons(prev => ({ ...prev, [qId]: text }));
  };

  // Uraian text change
  const handleUraianChange = (qId: number, text: string) => {
    setUraianAnswers(prev => ({ ...prev, [qId]: text }));
  };

  // Calculate Scores
  const calculateResult = () => {
    let pgCorrect = 0;
    EVALUASI_PG_KELAS6_P4.forEach(q => {
      if (pgAnswers[q.id] === q.answer) pgCorrect++;
    });

    let pgkCorrect = 0;
    EVALUASI_PGK_KELAS6_P4.forEach(q => {
      const userAns = [...(pgkAnswers[q.id] || [])].sort().join(',');
      const correctAns = [...q.correctAnswers].sort().join(',');
      if (userAns === correctAns) pgkCorrect++;
    });

    let menjodohkanCorrect = 0;
    EVALUASI_MENJODOHKAN_KELAS6_P4.forEach(q => {
      if (menjodohkanAnswers[q.id] === q.matchTarget) menjodohkanCorrect++;
    });

    let bsCorrect = 0;
    EVALUASI_BENAR_SALAH_KELAS6_P4.forEach(q => {
      if (bsAnswers[q.id] === q.isCorrect) bsCorrect++;
    });

    // Score weightings out of 100
    // PG: 10 * 3 = 30 pts
    // PGK: 10 * 3 = 30 pts
    // Menjodohkan: 5 * 4 = 20 pts
    // B/S: 10 * 2 = 20 pts
    const pgScore = pgCorrect * 3;
    const pgkScore = pgkCorrect * 3;
    const menjodohkanScore = menjodohkanCorrect * 4;
    const bsScore = bsCorrect * 2;

    const totalAnsweredUraian = Object.keys(uraianAnswers).filter(k => uraianAnswers[Number(k)]?.trim().length > 0).length;

    return {
      pgCorrect,
      pgkCorrect,
      menjodohkanCorrect,
      bsCorrect,
      pgScore,
      pgkScore,
      menjodohkanScore,
      bsScore,
      totalAnsweredUraian,
      totalObjScore: pgScore + pgkScore + menjodohkanScore + bsScore
    };
  };

  const handleShowScore = () => {
    soundFX.playFanfare();
    setShowScoreModal(true);
  };

  const handleResetEvaluasi = () => {
    soundFX.playClick();
    setPgAnswers({});
    setPgkAnswers({});
    setMenjodohkanAnswers({});
    setBsAnswers({});
    setBsReasons({});
    setUraianAnswers({});
    setShowAnswerKeys(false);
    setShowScoreModal(false);
  };

  // Print PDF Function
  const handlePrint = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Evaluasi Pembelajaran PAI - Kelas ${grade} Bab ${lesson}: Zakat, Infak, & Sedekah</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 30px;
              color: #0f172a;
              line-height: 1.5;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #cbd5e1;
              padding-bottom: 15px;
              margin-bottom: 25px;
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
            .section-title {
              font-size: 15px;
              font-weight: 800;
              color: #0f766e;
              border-bottom: 2px solid #99f6e4;
              padding-bottom: 6px;
              margin-top: 25px;
              margin-bottom: 15px;
              page-break-after: avoid;
            }
            .q-card {
              page-break-inside: avoid;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 12px 16px;
              margin-bottom: 12px;
              background-color: #ffffff;
            }
            .q-title {
              font-weight: 700;
              font-size: 13px;
              color: #1e293b;
              margin-bottom: 6px;
            }
            .options-grid {
              margin-left: 15px;
              font-size: 12px;
            }
            .option-item {
              margin-bottom: 3px;
            }
            .reason-box {
              margin-top: 6px;
              border: 1px dashed #cbd5e1;
              padding: 6px 10px;
              font-size: 11px;
              color: #475569;
              background-color: #f8fafc;
              border-radius: 4px;
            }
            .key-box {
              background-color: #f0fdf4;
              border: 1px solid #bbf7d0;
              color: #166534;
              padding: 6px 10px;
              border-radius: 6px;
              font-size: 11px;
              margin-top: 8px;
            }
            .table-match {
              width: 100%;
              border-collapse: collapse;
              font-size: 12px;
              margin-top: 10px;
            }
            .table-match th, .table-match td {
              border: 1px solid #cbd5e1;
              padding: 8px 10px;
              text-align: left;
            }
            .table-match th {
              background-color: #f1f5f9;
              color: #334155;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              font-size: 11px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 12px;
            }
            @media print {
              body { padding: 0; }
              .q-card { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>LEMBAR EVALUASI PEMBELAJARAN PAI SD KELAS ${grade}</h1>
            <p>BAB ${lesson}: Mengenal Zakat Fitrah, Zakat Mal, Infak, dan Sedekah (HOTS & Computational Thinking)</p>
          </div>

          <!-- BAGIAN A -->
          <div class="section-title">Bagian A: 10 Soal Pilihan Ganda (PG)</div>
          ${EVALUASI_PG_KELAS6_P4.map((q, idx) => `
            <div class="q-card">
              <div class="q-title">${idx + 1}. ${q.question}</div>
              <div class="options-grid">
                ${q.options.map((opt, oIdx) => `
                  <div class="option-item">${String.fromCharCode(65 + oIdx)}. ${opt}</div>
                `).join('')}
              </div>
              <div class="key-box">
                <strong>Kunci Jawaban:</strong> ${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}<br/>
                <em>Pembahasan:</em> ${q.explanation}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN B -->
          <div class="section-title">Bagian B: 10 Soal Pilihan Ganda Kompleks (PGK - Multi Select)</div>
          ${EVALUASI_PGK_KELAS6_P4.map((q, idx) => `
            <div class="q-card">
              <div class="q-title">${idx + 1}. ${q.question}</div>
              <div class="options-grid">
                ${q.options.map((opt, oIdx) => `
                  <div class="option-item">[ ${q.correctAnswers.includes(oIdx) ? '✓' : '  '} ] ${String.fromCharCode(65 + oIdx)}. ${opt}</div>
                `).join('')}
              </div>
              <div class="key-box">
                <strong>Kunci Jawaban:</strong> ${q.correctAnswers.map(a => String.fromCharCode(65 + a)).join(', ')}<br/>
                <em>Pembahasan:</em> ${q.explanation}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN C -->
          <div class="section-title">Bagian C: 5 Soal Menjodohkan</div>
          <table class="table-match">
            <thead>
              <tr>
                <th style="width: 50%;">Pernyataan / Soal (Sisi A)</th>
                <th style="width: 50%;">Pasangan Jawaban Yang Tepat (Sisi B)</th>
              </tr>
            </thead>
            <tbody>
              ${EVALUASI_MENJODOHKAN_KELAS6_P4.map((q, idx) => `
                <tr>
                  <td>${idx + 1}. ${q.premise}</td>
                  <td><strong>${q.matchTarget}</strong></td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <!-- BAGIAN D -->
          <div class="section-title">Bagian D: 10 Soal Benar / Salah (+ Alasan Jawaban)</div>
          ${EVALUASI_BENAR_SALAH_KELAS6_P4.map((q, idx) => `
            <div class="q-card">
              <div class="q-title">${idx + 1}. ${q.statement}</div>
              <div style="font-size: 12px; margin-top: 4px;">
                Status: <strong>[ ${q.isCorrect ? 'BENAR' : 'SALAH'} ]</strong>
              </div>
              <div class="reason-box">
                <strong>Alasan / Pembahasan Syariat:</strong> ${q.explanation}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN E -->
          <div class="section-title">Bagian E: 5 Soal Uraian (HOTS & Computational Thinking)</div>
          ${EVALUASI_URAIAN_KELAS6_P4.map((q, idx) => `
            <div class="q-card">
              <div class="q-title">${idx + 1}. ${q.question}</div>
              <div style="font-size: 11px; color: #64748b; margin-bottom: 6px;">
                <em>Konteks: ${q.context}</em>
              </div>
              <div class="key-box">
                <strong>Contoh Jawaban Ideal / Poin Kunci:</strong><br/>
                ${q.sampleAnswer.replace(/\n/g, '<br/>')}
              </div>
            </div>
          `).join('')}

          <div class="footer">
            Dokumen Evaluasi Pembelajaran PAI SD Kelas 6 - Bab 4 Zakat, Infak, & Sedekah • Dicetak Otomatis
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

  const scoreResult = calculateResult();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-teal-100 font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Evaluasi Lengkap • Kelas {grade} Bab {lesson}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Evaluasi Pembelajaran PAI Bab 4
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 mt-1">
              Soal HOTS & Computational Thinking: 10 PG, 10 PGK, 5 Menjodohkan, 10 Benar/Salah + Alasan, & 5 Uraian
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                soundFX.playClick();
                setShowAnswerKeys(!showAnswerKeys);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md ${
                showAnswerKeys
                  ? 'bg-amber-400 text-slate-900 hover:bg-amber-500'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{showAnswerKeys ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
            </button>

            <button
              onClick={handleShowScore}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Award className="w-4 h-4" />
              <span>Lihat Skor Saya</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Score Modal */}
      {showScoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                Hasil & Rekapitulasi Skor
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Skor otomatis dihitung untuk bagian PG, PGK, Menjodohkan, dan Benar/Salah
              </p>
            </div>

            <div className="space-y-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-slate-700 dark:text-slate-300">1. Pilihan Ganda (10 Soal):</span>
                <span className="font-extrabold text-teal-600">{scoreResult.pgCorrect} / 10 ({scoreResult.pgScore} poin)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-slate-700 dark:text-slate-300">2. PG Kompleks Multi Select (10 Soal):</span>
                <span className="font-extrabold text-teal-600">{scoreResult.pgkCorrect} / 10 ({scoreResult.pgkScore} poin)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-slate-700 dark:text-slate-300">3. Menjodohkan (5 Soal):</span>
                <span className="font-extrabold text-teal-600">{scoreResult.menjodohkanCorrect} / 5 ({scoreResult.menjodohkanScore} poin)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-slate-700 dark:text-slate-300">4. Benar / Salah (10 Soal):</span>
                <span className="font-extrabold text-teal-600">{scoreResult.bsCorrect} / 10 ({scoreResult.bsScore} poin)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-slate-700 dark:text-slate-300">5. Jawaban Uraian Terisi:</span>
                <span className="font-extrabold text-amber-600">{scoreResult.totalAnsweredUraian} / 5 Soal</span>
              </div>

              <div className="pt-2 flex justify-between items-center text-base font-black text-slate-900 dark:text-slate-100">
                <span>Total Skor Objektif:</span>
                <span className="text-xl text-teal-600 dark:text-teal-400">{scoreResult.totalObjScore} / 100</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowScoreModal(false)}
                className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                Tutup Modal Skor
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION A: 10 PILIHAN GANDA */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black">
            A
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100">
              Bagian A: 10 Soal Pilihan Ganda (PG)
            </h2>
            <p className="text-xs text-slate-500">Pilihlah satu jawaban yang paling tepat!</p>
          </div>
        </div>

        <div className="space-y-6">
          {EVALUASI_PG_KELAS6_P4.map((q, idx) => {
            const userAns = pgAnswers[q.id];
            const isCorrect = userAns === q.answer;

            return (
              <div key={q.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                  <span className="text-teal-600">{idx + 1}.</span>
                  <span>{q.question}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
                  {q.options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectPG(q.id, oIdx)}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all flex items-center gap-2 ${
                        userAns === oIdx
                          ? 'bg-teal-600 text-white border-teal-600 font-bold'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md bg-black/10 flex items-center justify-center shrink-0 font-bold text-[10px]">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>

                {showAnswerKeys && (
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Kunci Jawaban: {String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION B: 10 PILIHAN GANDA KOMPLEKS */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black">
            B
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100">
              Bagian B: 10 Soal Pilihan Ganda Kompleks (PGK - Multi Select)
            </h2>
            <p className="text-xs text-slate-500">Pilihlah dua atau lebih jawaban yang benar!</p>
          </div>
        </div>

        <div className="space-y-6">
          {EVALUASI_PGK_KELAS6_P4.map((q, idx) => {
            const currentSelected = pgkAnswers[q.id] || [];

            return (
              <div key={q.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                  <span className="text-teal-600">{idx + 1}.</span>
                  <span>{q.question}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
                  {q.options.map((opt, oIdx) => {
                    const isChecked = currentSelected.includes(oIdx);
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleTogglePGK(q.id, oIdx)}
                        className={`text-left p-3 rounded-xl border text-xs font-medium transition-all flex items-center gap-2 ${
                          isChecked
                            ? 'bg-teal-600 text-white border-teal-600 font-bold'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-white text-teal-700 border-white font-bold' : 'border-slate-400'
                        }`}>
                          {isChecked && '✓'}
                        </div>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {showAnswerKeys && (
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Kunci Jawaban: {q.correctAnswers.map(a => String.fromCharCode(65 + a)).join(', ')}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION C: 5 MENJODOHKAN */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black">
            C
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100">
              Bagian C: 5 Soal Menjodohkan
            </h2>
            <p className="text-xs text-slate-500">Jodohkanlah pernyataan di Sisi A dengan pilihan di Sisi B yang paling sesuai!</p>
          </div>
        </div>

        <div className="space-y-4">
          {EVALUASI_MENJODOHKAN_KELAS6_P4.map((q, idx) => {
            const userAns = menjodohkanAnswers[q.id] || '';

            return (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 max-w-lg">
                  <span className="font-bold text-teal-600 mr-2">{idx + 1}.</span>
                  {q.premise}
                </div>

                <div className="w-full md:w-64 shrink-0">
                  <select
                    value={userAns}
                    onChange={(e) => handleSelectMenjodohkan(q.id, e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">-- Pilih Pasangan --</option>
                    {q.options.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>{opt}</option>
                    ))}
                  </select>

                  {showAnswerKeys && (
                    <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                      ✓ Kunci: {q.matchTarget}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION D: 10 BENAR / SALAH + ISIAN ALASAN */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black">
            D
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100">
              Bagian D: 10 Soal Benar / Salah (+ Kolom Isian Alasan)
            </h2>
            <p className="text-xs text-slate-500">Pilihlah Benar/Salah dan tuliskan alasan penjelasan syariatnya pada kolom yang disediakan!</p>
          </div>
        </div>

        <div className="space-y-6">
          {EVALUASI_BENAR_SALAH_KELAS6_P4.map((q, idx) => {
            const userBS = bsAnswers[q.id];
            const userReason = bsReasons[q.id] || '';

            return (
              <div key={q.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                  <span className="text-teal-600 mr-2">{idx + 1}.</span>
                  {q.statement}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleSelectBS(q.id, true)}
                    className={`px-5 py-2 rounded-xl text-xs font-bold transition-all border ${
                      userBS === true
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    BENAR
                  </button>
                  <button
                    onClick={() => handleSelectBS(q.id, false)}
                    className={`px-5 py-2 rounded-xl text-xs font-bold transition-all border ${
                      userBS === false
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    SALAH
                  </button>
                </div>

                {/* Kolom Isian Alasan */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Tuliskan Alasan / Penjelasanmu:
                  </label>
                  <input
                    type="text"
                    value={userReason}
                    onChange={(e) => handleReasonChangeBS(q.id, e.target.value)}
                    placeholder="Contoh: Karena zakat fitrah wajib bagi setiap Muslim..."
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {showAnswerKeys && (
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Kunci Jawaban: {q.isCorrect ? 'BENAR' : 'SALAH'}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION E: 5 SOAL URAIAN */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black">
            E
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100">
              Bagian E: 5 Soal Uraian (HOTS & Computational Thinking)
            </h2>
            <p className="text-xs text-slate-500">Jawablah pertanyaan uraian berikut secara lengkap, kritis, dan logis!</p>
          </div>
        </div>

        <div className="space-y-6">
          {EVALUASI_URAIAN_KELAS6_P4.map((q, idx) => {
            const userAns = uraianAnswers[q.id] || '';

            return (
              <div key={q.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                  <span className="text-teal-600 mr-2">{idx + 1}.</span>
                  {q.question}
                </div>

                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  <em>Konteks Soal: {q.context}</em>
                </div>

                <textarea
                  rows={4}
                  value={userAns}
                  onChange={(e) => handleUraianChange(q.id, e.target.value)}
                  placeholder="Ketikkan lembar jawaban uraian lengkapmu di sini..."
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                />

                {showAnswerKeys && (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 space-y-2">
                    <div className="font-bold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>Contoh Jawaban Ideal Guru / Poin Kunci HOTS:</span>
                    </div>
                    <p className="text-xs leading-relaxed whitespace-pre-line">{q.sampleAnswer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Actions Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
        <button
          onClick={handleResetEvaluasi}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs sm:text-sm transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Lembar Jawaban</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShowScore}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            <Award className="w-4 h-4" />
            <span>Hitung & Lihat Skor</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>Download Evaluasi (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
