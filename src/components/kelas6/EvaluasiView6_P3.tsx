import React, { useState } from 'react';
import { 
  EVALUASI_PG_KELAS6_P3, 
  EVALUASI_PGK_KELAS6_P3, 
  EVALUASI_MENJODOHKAN_KELAS6_P3, 
  EVALUASI_BENAR_SALAH_KELAS6_P3, 
  EVALUASI_URAIAN_KELAS6_P3 
} from '../../data/kelas6Pembelajaran3Data';
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

interface EvaluasiView6_P3Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView6_P3: React.FC<EvaluasiView6_P3Props> = ({ grade, lesson }) => {
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
    EVALUASI_PG_KELAS6_P3.forEach(q => {
      if (pgAnswers[q.id] === q.answer) pgCorrect++;
    });

    let pgkCorrect = 0;
    EVALUASI_PGK_KELAS6_P3.forEach(q => {
      const userAns = [...(pgkAnswers[q.id] || [])].sort().join(',');
      const correctAns = [...q.correctAnswers].sort().join(',');
      if (userAns === correctAns) pgkCorrect++;
    });

    let menjodohkanCorrect = 0;
    EVALUASI_MENJODOHKAN_KELAS6_P3.forEach(q => {
      if (menjodohkanAnswers[q.id] === q.matchTarget) menjodohkanCorrect++;
    });

    let bsCorrect = 0;
    EVALUASI_BENAR_SALAH_KELAS6_P3.forEach(q => {
      if (bsAnswers[q.id] === q.isCorrect) bsCorrect++;
    });

    const pgScore = pgCorrect * 10;
    const pgkScore = pgkCorrect * 10;
    const menjodohkanScore = menjodohkanCorrect * 20;
    const bsScore = bsCorrect * 10;

    const totalAnsweredUraian = Object.keys(uraianAnswers).length;

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

    const result = calculateResult();

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Evaluasi Pembelajaran PAI - Kelas ${grade} Bab ${lesson}: Akhlak Terpuji kepada Tetangga & Non-Muslim</title>
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
              font-size: 13px;
              font-weight: 700;
              color: #0f172a;
              margin-bottom: 8px;
            }
            .opt-list {
              font-size: 12px;
              margin: 0;
              padding-left: 18px;
            }
            .opt-list li { margin-bottom: 4px; }
            .user-ans {
              font-size: 11px;
              font-weight: bold;
              color: #0d9488;
              margin-top: 6px;
              background-color: #f0fdf4;
              padding: 4px 8px;
              border-radius: 4px;
              display: inline-block;
            }
            .ans-key {
              font-size: 11px;
              font-weight: bold;
              color: #3730a3;
              margin-top: 4px;
              background-color: #e0e7ff;
              padding: 4px 8px;
              border-radius: 4px;
              display: inline-block;
            }
            .page-break { page-break-before: always; }
            .score-box {
              border: 2px solid #0f766e;
              border-radius: 12px;
              padding: 16px;
              background-color: #f0fdf4;
              margin-bottom: 25px;
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
            <h1>LEMBAR EVALUASI PEMBELAJARAN PAI-SD KELAS ${grade}</h1>
            <p>BAB ${lesson}: Akhlak Terpuji kepada Tetangga dan Non-Muslim (HOTS & Computational Thinking)</p>
          </div>

          <div class="score-box">
            <strong style="color: #0f766e; font-size: 14px;">Ringkasan Hasil Evaluasi Murid:</strong>
            <ul style="font-size: 12px; margin: 8px 0 0; padding-left: 20px;">
              <li>Skor Pilihan Ganda (PG): ${result.pgScore} / 100</li>
              <li>Skor Pilihan Ganda Kompleks (PGK): ${result.pgkScore} / 100</li>
              <li>Skor Menjodohkan: ${result.menjodohkanScore} / 100</li>
              <li>Skor Benar / Salah: ${result.bsScore} / 100</li>
              <li>Jumlah Soal Uraian Dikerjakan: ${result.totalAnsweredUraian} / 5 Soal</li>
            </ul>
          </div>

          <!-- BAGIAN A -->
          <div class="section-title">Bagian A: 10 Soal Pilihan Ganda (PG)</div>
          ${EVALUASI_PG_KELAS6_P3.map(q => {
            const userChoice = pgAnswers[q.id];
            return `
              <div class="q-card">
                <div class="q-title">${q.id}. ${q.question}</div>
                <ol type="A" class="opt-list">
                  ${q.options.map((opt, oIdx) => `
                    <li style="${userChoice === oIdx ? 'font-weight: bold; color: #0f766e;' : ''}">${opt}</li>
                  `).join('')}
                </ol>
                <div class="user-ans">Jawaban Murid: ${userChoice !== undefined ? String.fromCharCode(65 + userChoice) : 'Belum Dijawab'}</div>
                <div class="ans-key">Kunci Jawaban: ${String.fromCharCode(65 + q.answer)} (${q.options[q.answer]})</div>
              </div>
            `;
          }).join('')}

          <div class="page-break"></div>

          <!-- BAGIAN B -->
          <div class="section-title">Bagian B: 10 Soal Pilihan Ganda Kompleks (PGK)</div>
          ${EVALUASI_PGK_KELAS6_P3.map(q => {
            const userChoices = pgkAnswers[q.id] || [];
            return `
              <div class="q-card">
                <div class="q-title">${q.id}. ${q.question}</div>
                <ol type="A" class="opt-list">
                  ${q.options.map((opt, oIdx) => `
                    <li style="${userChoices.includes(oIdx) ? 'font-weight: bold; color: #0f766e;' : ''}">${opt}</li>
                  `).join('')}
                </ol>
                <div class="user-ans">Jawaban Murid: ${userChoices.length > 0 ? userChoices.map(i => String.fromCharCode(65 + i)).join(', ') : 'Belum Dijawab'}</div>
                <div class="ans-key">Kunci Jawaban: ${q.correctAnswers.map(i => String.fromCharCode(65 + i)).join(', ')}</div>
              </div>
            `;
          }).join('')}

          <!-- BAGIAN C -->
          <div class="section-title">Bagian C: 5 Soal Menjodohkan</div>
          ${EVALUASI_MENJODOHKAN_KELAS6_P3.map(q => `
            <div class="q-card">
              <div class="q-title">${q.id}. Pernyataan: ${q.premise}</div>
              <div class="user-ans">Pasangan Dijawab: ${menjodohkanAnswers[q.id] || 'Belum Dijawab'}</div>
              <div class="ans-key">Pasangan Benar: ${q.matchTarget}</div>
            </div>
          `).join('')}

          <div class="page-break"></div>

          <!-- BAGIAN D -->
          <div class="section-title">Bagian D: 10 Soal Benar / Salah & Isian Alasan</div>
          ${EVALUASI_BENAR_SALAH_KELAS6_P3.map(q => `
            <div class="q-card">
              <div class="q-title">${q.id}. Pernyataan: ${q.statement}</div>
              <div class="user-ans">Pilihan Murid: ${bsAnswers[q.id] !== undefined ? (bsAnswers[q.id] ? 'BENAR' : 'SALAH') : 'Belum Dipilih'}</div>
              <p style="font-size: 11px; margin: 4px 0 0; color: #334155;"><strong>Alasan Murid:</strong> ${bsReasons[q.id] || '(Kosong)'}</p>
              <div class="ans-key">Kunci: ${q.isCorrect ? 'BENAR' : 'SALAH'} — ${q.explanation}</div>
            </div>
          `).join('')}

          <!-- BAGIAN E -->
          <div class="section-title">Bagian E: 5 Soal Uraian HOTS</div>
          ${EVALUASI_URAIAN_KELAS6_P3.map(q => `
            <div class="q-card">
              <div class="q-title">${q.id}. ${q.question}</div>
              <p style="font-size: 12px; margin: 4px 0 0; color: #0f172a; background-color: #f8fafc; padding: 8px; border-radius: 6px;">
                <strong>Jawaban Uraian Murid:</strong><br/>
                ${uraianAnswers[q.id] || '(Belum Dijawab)'}
              </p>
              <div class="ans-key" style="display: block; margin-top: 8px;">
                <strong>Rubrik Jawaban Kunci:</strong> ${q.rubricKey}
              </div>
            </div>
          `).join('')}

          <div class="footer-info">
            Dicetak dari Evaluasi Pembelajaran PAI-SD Kelas 6 • Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
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

  const results = calculateResult();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Bar Controls */}
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
              Pilihan Ganda, Kompleks, Menjodohkan, B/S, & Uraian
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Answer Keys Toggle */}
          <button
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKeys(!showAnswerKeys);
            }}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all border ${
              showAnswerKeys
                ? 'bg-indigo-100 text-indigo-900 border-indigo-300 dark:bg-indigo-950 dark:text-indigo-200'
                : 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 hover:bg-slate-200'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>{showAnswerKeys ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          {/* Show Score Button */}
          <button
            onClick={handleShowScore}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-amber-500 hover:bg-amber-600 text-white transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          {/* Download PDF Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Download Evaluasi PDF</span>
          </button>

          {/* Reset Button */}
          <button
            onClick={handleResetEvaluasi}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 border border-slate-200 dark:border-slate-700"
            title="Reset Seluruh Jawaban"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* BAGIAN A: 10 PILIHAN GANDA */}
      {/* ========================================== */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
              Bagian A
            </span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-2">
              10 Soal Pilihan Ganda (PG)
            </h3>
          </div>
          <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400">
            Skor Maksimal: 100 Point
          </span>
        </div>

        <div className="space-y-6">
          {EVALUASI_PG_KELAS6_P3.map((q) => {
            const selectedOpt = pgAnswers[q.id];
            return (
              <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                  {q.id}. {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = selectedOpt === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectPG(q.id, oIdx)}
                        className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-2.5 ${
                          isSelected
                            ? 'bg-teal-100 dark:bg-teal-950/80 border-teal-500 font-bold text-teal-950 dark:text-teal-100 shadow-sm'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-teal-300'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-md font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {showAnswerKeys && (
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-950 dark:text-indigo-200 space-y-1">
                    <div className="font-extrabold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      Kunci Jawaban: {String.fromCharCode(65 + q.answer)} ({q.options[q.answer]})
                    </div>
                    <p className="font-medium text-slate-600 dark:text-slate-300">
                      Penjelasan: {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================== */}
      {/* BAGIAN B: 10 PILIHAN GANDA KOMPLEKS (PGK) */}
      {/* ========================================== */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
              Bagian B
            </span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-2">
              10 Soal Pilihan Ganda Kompleks (PGK - Multi Select)
            </h3>
          </div>
          <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
            Pilih Lebih dari Satu Jawaban
          </span>
        </div>

        <div className="space-y-6">
          {EVALUASI_PGK_KELAS6_P3.map((q) => {
            const userChoices = pgkAnswers[q.id] || [];
            return (
              <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                  {q.id}. {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, oIdx) => {
                    const isChecked = userChoices.includes(oIdx);
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleTogglePGK(q.id, oIdx)}
                        className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-2.5 ${
                          isChecked
                            ? 'bg-indigo-100 dark:bg-indigo-950/80 border-indigo-500 font-bold text-indigo-950 dark:text-indigo-100 shadow-sm'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-md font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                          isChecked ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {showAnswerKeys && (
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-950 dark:text-indigo-200 space-y-1">
                    <div className="font-extrabold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      Kunci Jawaban: {q.correctAnswers.map(i => String.fromCharCode(65 + i)).join(', ')}
                    </div>
                    <p className="font-medium text-slate-600 dark:text-slate-300">
                      Penjelasan: {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================== */}
      {/* BAGIAN C: 5 SOAL MENJODOHKAN */}
      {/* ========================================== */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              Bagian C
            </span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-2">
              5 Soal Menjodohkan
            </h3>
          </div>
          <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
            Jodohkan Pernyataan dengan Jawaban Tepat
          </span>
        </div>

        <div className="space-y-4">
          {EVALUASI_MENJODOHKAN_KELAS6_P3.map((q) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <div className="md:col-span-6 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {q.id}. {q.premise}
              </div>

              <div className="md:col-span-6">
                <select
                  value={menjodohkanAnswers[q.id] || ''}
                  onChange={(e) => handleSelectMenjodohkan(q.id, e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">-- Pilih Pasangan Jawaban --</option>
                  {EVALUASI_MENJODOHKAN_KELAS6_P3.map((item) => (
                    <option key={item.id} value={item.matchTarget}>
                      {item.matchTarget}
                    </option>
                  ))}
                </select>
              </div>

              {showAnswerKeys && (
                <div className="md:col-span-12 p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-900 dark:text-indigo-200 font-bold">
                  Kunci Pasangan Benar: {q.matchTarget}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* BAGIAN D: 10 BENAR / SALAH + ISIAN ALASAN */}
      {/* ========================================== */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              Bagian D
            </span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-2">
              10 Soal Memilih Benar / Salah & Isian Alasan
            </h3>
          </div>
          <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400">
            Sertakan Alasan Pemikiranmu
          </span>
        </div>

        <div className="space-y-6">
          {EVALUASI_BENAR_SALAH_KELAS6_P3.map((q) => {
            const userChoice = bsAnswers[q.id];
            return (
              <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                  {q.id}. Pernyataan: "{q.statement}"
                </p>

                {/* Benar/Salah Toggle Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleSelectBS(q.id, true)}
                    className={`px-5 py-2 rounded-xl text-xs font-black transition-all border ${
                      userChoice === true
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                        : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-500'
                    }`}
                  >
                    BENAR
                  </button>

                  <button
                    onClick={() => handleSelectBS(q.id, false)}
                    className={`px-5 py-2 rounded-xl text-xs font-black transition-all border ${
                      userChoice === false
                        ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                        : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-rose-500'
                    }`}
                  >
                    SALAH
                  </button>
                </div>

                {/* Reason Input Field */}
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400">
                    Kolom Isian Alasan Murid:
                  </label>
                  <input
                    type="text"
                    placeholder="Tuliskan alasan mengapa kamu memilih Benar/Salah..."
                    value={bsReasons[q.id] || ''}
                    onChange={(e) => handleReasonChangeBS(q.id, e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {showAnswerKeys && (
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-950 dark:text-indigo-200 space-y-1">
                    <div className="font-extrabold">
                      Kunci: {q.isCorrect ? 'BENAR' : 'SALAH'}
                    </div>
                    <p className="font-medium text-slate-600 dark:text-slate-300">
                      Penjelasan: {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================== */}
      {/* BAGIAN E: 5 SOAL URAIAN HOTS */}
      {/* ========================================== */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
              Bagian E
            </span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-2">
              5 Soal Uraian HOTS & Computational Thinking
            </h3>
          </div>
          <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400">
            Penalaran Kritis & Pemecahan Masalah
          </span>
        </div>

        <div className="space-y-6">
          {EVALUASI_URAIAN_KELAS6_P3.map((q) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-3">
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                {q.id}. {q.question}
              </p>

              <textarea
                rows={3}
                placeholder="Tuliskan jawaban uraian lengkapmu di sini..."
                value={uraianAnswers[q.id] || ''}
                onChange={(e) => handleUraianChange(q.id, e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              />

              {showAnswerKeys && (
                <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-950 dark:text-indigo-200 space-y-1">
                  <div className="font-extrabold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Rubrik Jawaban Kunci Guru:
                  </div>
                  <p className="font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                    {q.rubricKey}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SCORE MODAL */}
      {showScoreModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-teal-100 dark:bg-teal-950/80 border-4 border-teal-300 flex items-center justify-center text-teal-600">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Hasil Evaluasi Pembelajaran
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Kelas {grade} Bab {lesson}: Akhlak Terpuji kepada Tetangga & Non-Muslim
              </p>
            </div>

            <div className="space-y-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold">
              <div className="flex justify-between border-b pb-2">
                <span>Skor Pilihan Ganda (PG):</span>
                <span className="font-bold text-teal-600">{results.pgScore} / 100</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Skor PG Kompleks (PGK):</span>
                <span className="font-bold text-indigo-600">{results.pgkScore} / 100</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Skor Menjodohkan:</span>
                <span className="font-bold text-emerald-600">{results.menjodohkanScore} / 100</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Skor Benar / Salah:</span>
                <span className="font-bold text-amber-600">{results.bsScore} / 100</span>
              </div>
              <div className="flex justify-between">
                <span>Uraian Dikerjakan:</span>
                <span className="font-bold text-purple-600">{results.totalAnsweredUraian} / 5 Soal</span>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setShowScoreModal(false)}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Tutup Ringkasan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
