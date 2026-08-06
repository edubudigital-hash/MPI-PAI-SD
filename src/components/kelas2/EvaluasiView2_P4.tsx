import React, { useState } from 'react';
import { 
  EVALUASI_PG_KELAS2_P4, 
  EVALUASI_PGK_KELAS2_P4, 
  EVALUASI_MENJODOHKAN_KELAS2_P4, 
  EVALUASI_BENAR_SALAH_KELAS2_P4, 
  EVALUASI_URAIAN_KELAS2_P4 
} from '../../data/kelas2Pembelajaran4Data';
import { soundFX } from '../../utils/audio';
import { 
  FileCheck2, 
  Printer, 
  Eye, 
  EyeOff, 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  HelpCircle,
  Brain,
  ListOrdered
} from 'lucide-react';

interface EvaluasiView2_P4Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView2_P4: React.FC<EvaluasiView2_P4Props> = ({ grade, lesson }) => {
  // STUDENT ANSWERS STATE
  const [pgAnswers, setPgAnswers] = useState<Record<number, number>>({});
  const [pgkAnswers, setPgkAnswers] = useState<Record<number, number[]>>({});
  const [menjodohkanAnswers, setMenjodohkanAnswers] = useState<Record<number, string>>({});
  const [bsAnswers, setBsAnswers] = useState<Record<number, { choice: boolean | null; reason: string }>>({});
  const [uraianAnswers, setUraianAnswers] = useState<Record<number, string>>({});

  // UI CONTROL STATE
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  // PG HANDLER
  const handlePgSelect = (id: number, idx: number) => {
    soundFX.playClick();
    setPgAnswers(prev => ({ ...prev, [id]: idx }));
  };

  // PGK HANDLER
  const handlePgkToggle = (id: number, idx: number) => {
    soundFX.playClick();
    setPgkAnswers(prev => {
      const current = prev[id] || [];
      const updated = current.includes(idx)
        ? current.filter(item => item !== idx)
        : [...current, idx];
      return { ...prev, [id]: updated };
    });
  };

  // MENJODOHKAN HANDLER
  const handleMenjodohkanSelect = (id: number, val: string) => {
    soundFX.playClick();
    setMenjodohkanAnswers(prev => ({ ...prev, [id]: val }));
  };

  // BENAR SALAH HANDLER
  const handleBsChoice = (id: number, choice: boolean) => {
    soundFX.playClick();
    setBsAnswers(prev => ({
      ...prev,
      [id]: { choice, reason: prev[id]?.reason || '' }
    }));
  };

  const handleBsReasonChange = (id: number, reason: string) => {
    setBsAnswers(prev => ({
      ...prev,
      [id]: { choice: prev[id]?.choice ?? null, reason }
    }));
  };

  // URAIAN HANDLER
  const handleUraianChange = (id: number, val: string) => {
    setUraianAnswers(prev => ({ ...prev, [id]: val }));
  };

  // CALCULATE SCORE
  const calculateScore = () => {
    let pgScore = 0; // 10 x 4 = 40
    EVALUASI_PG_KELAS2_P4.forEach(q => {
      if (pgAnswers[q.id] === q.answer) pgScore += 4;
    });

    let pgkScore = 0; // 3 x 5 = 15
    EVALUASI_PGK_KELAS2_P4.forEach(q => {
      const student = (pgkAnswers[q.id] || []).sort();
      const correct = [...q.correctAnswers].sort();
      if (JSON.stringify(student) === JSON.stringify(correct)) pgkScore += 5;
    });

    let matchScore = 0; // 3 x 5 = 15
    EVALUASI_MENJODOHKAN_KELAS2_P4.forEach(q => {
      if (menjodohkanAnswers[q.id] === q.matchTarget) matchScore += 5;
    });

    let bsScore = 0; // 4 x 5 = 20
    EVALUASI_BENAR_SALAH_KELAS2_P4.forEach(q => {
      const ans = bsAnswers[q.id];
      if (ans && ans.choice === q.isCorrect && ans.reason.trim().length > 3) {
        bsScore += 5;
      } else if (ans && ans.choice === q.isCorrect) {
        bsScore += 3;
      }
    });

    let uraianFilled = 0; // 5 x 2 = 10
    EVALUASI_URAIAN_KELAS2_P4.forEach(q => {
      if ((uraianAnswers[q.id] || '').trim().length > 5) uraianFilled += 2;
    });

    const total = pgScore + pgkScore + matchScore + bsScore + uraianFilled;
    return Math.min(100, total);
  };

  // DOWNLOAD / PRINT EVALUASI
  const handlePrintEvaluasi = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Evaluasi Pembelajaran PAI SD Kelas ${grade} Bab ${lesson}</title>
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
              border-bottom: 2px solid #0f172a;
              padding-bottom: 12px;
              margin-bottom: 24px;
            }
            .header h1 {
              margin: 0;
              font-size: 20px;
              font-weight: 800;
            }
            .header p {
              margin: 4px 0 0;
              font-size: 13px;
              color: #475569;
            }
            .identity-box {
              border: 1px solid #cbd5e1;
              padding: 12px;
              margin-bottom: 20px;
              border-radius: 8px;
              font-size: 12px;
              display: flex;
              justify-content: space-between;
            }
            .section-title {
              font-size: 14px;
              font-weight: 800;
              background-color: #f1f5f9;
              padding: 6px 12px;
              border-left: 4px solid #059669;
              margin-top: 20px;
              margin-bottom: 12px;
              page-break-after: avoid;
            }
            .question-block {
              margin-bottom: 14px;
              page-break-inside: avoid;
              font-size: 12px;
            }
            .q-num {
              font-weight: 800;
            }
            .options-grid {
              margin-top: 4px;
              padding-left: 16px;
            }
            .opt-item {
              margin-bottom: 2px;
            }
            .reason-box {
              border: 1px dashed #cbd5e1;
              min-height: 40px;
              margin-top: 6px;
              border-radius: 4px;
              padding: 6px;
            }
            .essay-box {
              border: 1px solid #cbd5e1;
              min-height: 60px;
              margin-top: 6px;
              border-radius: 4px;
            }
            .footer {
              text-align: center;
              font-size: 11px;
              color: #94a3b8;
              margin-top: 30px;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>LEMBAR EVALUASI PEMBELAJARAN PAI & BP</h1>
            <p>Kelas ${grade} - Pembelajaran ${lesson}: Ketentuan & Mempraktikkan Shalat Fardu</p>
          </div>

          <div class="identity-box">
            <div><strong>Nama Siswa:</strong> ________________________</div>
            <div><strong>Kelas:</strong> II (Dua)</div>
            <div><strong>Tanggal:</strong> ______________</div>
          </div>

          <!-- A. PILIHAN GANDA -->
          <div class="section-title">A. Pilihan Ganda (10 Soal)</div>
          ${EVALUASI_PG_KELAS2_P4.map((q, idx) => `
            <div class="question-block">
              <div><span class="q-num">${idx + 1}.</span> ${q.question}</div>
              <div class="options-grid">
                ${q.options.map((opt, oIdx) => `
                  <div class="opt-item">${String.fromCharCode(65 + oIdx)}. ${opt}</div>
                `).join('')}
              </div>
            </div>
          `).join('')}

          <!-- B. PILIHAN GANDA KOMPLEKS -->
          <div class="section-title">B. Pilihan Ganda Kompleks (3 Soal - Pilih Lebih dari Satu)</div>
          ${EVALUASI_PGK_KELAS2_P4.map((q, idx) => `
            <div class="question-block">
              <div><span class="q-num">${idx + 1}.</span> ${q.question}</div>
              <div class="options-grid">
                ${q.options.map((opt, oIdx) => `
                  <div class="opt-item">[ &nbsp; ] ${opt}</div>
                `).join('')}
              </div>
            </div>
          `).join('')}

          <!-- C. MENJODOHKAN -->
          <div class="section-title">C. Menjodohkan (3 Soal)</div>
          ${EVALUASI_MENJODOHKAN_KELAS2_P4.map((q, idx) => `
            <div class="question-block">
              <div><span class="q-num">${idx + 1}.</span> Pasangkan <strong>"${q.premise}"</strong> dengan pilihan jawaban yang tepat:</div>
              <div style="margin-top: 4px; padding-left: 16px;">
                Jawaban: ____________________
              </div>
            </div>
          `).join('')}

          <!-- D. BENAR ATAU SALAH -->
          <div class="section-title">D. Memilih Benar atau Salah & Kolom Alasan (4 Soal)</div>
          ${EVALUASI_BENAR_SALAH_KELAS2_P4.map((q, idx) => `
            <div class="question-block">
              <div><span class="q-num">${idx + 1}.</span> Pernyataan: "${q.statement}"</div>
              <div style="margin-top: 4px;">Pilihan: [ &nbsp; ] BENAR &nbsp;&nbsp;&nbsp;&nbsp; [ &nbsp; ] SALAH</div>
              <div class="reason-box">Alasan Siswa:</div>
            </div>
          `).join('')}

          <!-- E. URAIAN HOTS & CT -->
          <div class="section-title">E. Uraian HOTS & Computational Thinking (5 Soal)</div>
          ${EVALUASI_URAIAN_KELAS2_P4.map((q, idx) => `
            <div class="question-block">
              <div><span class="q-num">${idx + 1}.</span> [${q.context}] ${q.question}</div>
              <div class="essay-box"></div>
            </div>
          `).join('')}

          <div class="footer">
            <p>Lembar Evaluasi Pembelajaran PAI & BP SD Kelas ${grade} Bab ${lesson} | Dicetak Otomatis</p>
          </div>

          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="space-y-8">
      {/* HEADER ACTION BAR */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <div>
            <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full">
              HOTS & Computational Thinking • Kelas {grade}
            </span>
            <h2 className="text-lg font-extrabold text-slate-800 mt-0.5">
              Evaluasi Pembelajaran Bab 4: Shalat Fardu
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* LIHAT SKOR */}
          <button
            onClick={() => {
              soundFX.playClick();
              setShowScoreModal(true);
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-extrabold transition shadow-sm"
          >
            <Trophy className="w-4 h-4" />
            <span>Lihat Skor Saya</span>
          </button>

          {/* KUNCI JAWABAN TOGGLE */}
          <button
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKey(!showAnswerKey);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition border ${
              showAnswerKey
                ? 'bg-rose-50 border-rose-300 text-rose-700'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {showAnswerKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showAnswerKey ? "Sembunyikan Kunci Jawaban" : "Lihat Kunci Jawaban"}</span>
          </button>

          {/* DOWNLOAD EVALUASI PDF */}
          <button
            onClick={handlePrintEvaluasi}
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold transition shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Download Evaluasi PDF</span>
          </button>
        </div>
      </div>

      {/* SECTION A: 10 PILIHAN GANDA */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center">
            A
          </span>
          <h3 className="text-base font-extrabold text-slate-800">
            Pilihan Ganda (10 Soal HOTS)
          </h3>
        </div>

        <div className="space-y-6">
          {EVALUASI_PG_KELAS2_P4.map((q, idx) => {
            const studentAns = pgAnswers[q.id];
            const hasAnswered = studentAns !== undefined;

            return (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3">
                <p className="text-xs md:text-sm font-bold text-slate-800 leading-relaxed">
                  {idx + 1}. {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = studentAns === oIdx;
                    const isCorrect = oIdx === q.answer;

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handlePgSelect(q.id, oIdx)}
                        className={`p-3 rounded-xl text-left text-xs font-medium transition flex items-center justify-between border ${
                          showAnswerKey
                            ? isCorrect
                              ? 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold'
                              : isSelected
                              ? 'bg-rose-100 border-rose-300 text-rose-800'
                              : 'bg-white border-slate-200 opacity-60'
                            : isSelected
                            ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                        {showAnswerKey && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                      </button>
                    );
                  })}
                </div>

                {showAnswerKey && (
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
                    💡 <strong>Kunci Jawaban:</strong> {String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}<br />
                    <span><strong>Penjelasan:</strong> {q.explanation}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION B: 3 PILIHAN GANDA KOMPLEKS */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-800 text-xs font-black flex items-center justify-center">
            B
          </span>
          <h3 className="text-base font-extrabold text-slate-800">
            Pilihan Ganda Kompleks (3 Soal - Pilih Lebih dari Satu)
          </h3>
        </div>

        <div className="space-y-6">
          {EVALUASI_PGK_KELAS2_P4.map((q, idx) => {
            const studentAnswers = pgkAnswers[q.id] || [];

            return (
              <div key={q.id} className="p-4 rounded-2xl bg-sky-50/40 border border-sky-100 space-y-3">
                <p className="text-xs md:text-sm font-bold text-slate-800">
                  {idx + 1}. {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, oIdx) => {
                    const isChecked = studentAnswers.includes(oIdx);
                    const isCorrect = q.correctAnswers.includes(oIdx);

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handlePgkToggle(q.id, oIdx)}
                        className={`p-3 rounded-xl text-left text-xs font-medium transition flex items-center justify-between border ${
                          showAnswerKey
                            ? isCorrect
                              ? 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold'
                              : isChecked
                              ? 'bg-rose-100 border-rose-300 text-rose-800'
                              : 'bg-white border-slate-200 opacity-60'
                            : isChecked
                            ? 'bg-sky-600 text-white border-sky-600 font-bold'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input type="checkbox" checked={isChecked} readOnly className="rounded text-sky-600" />
                          <span>{opt}</span>
                        </div>
                        {showAnswerKey && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                      </button>
                    );
                  })}
                </div>

                {showAnswerKey && (
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
                    💡 <strong>Kunci Jawaban Benar:</strong> {q.correctAnswers.map(ca => q.options[ca]).join(', ')}<br />
                    <span><strong>Penjelasan:</strong> {q.explanation}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION C: 3 MENJODOHKAN */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 text-xs font-black flex items-center justify-center">
            C
          </span>
          <h3 className="text-base font-extrabold text-slate-800">
            Menjodohkan / Pasangan Tepat (3 Soal)
          </h3>
        </div>

        <div className="space-y-4">
          {EVALUASI_MENJODOHKAN_KELAS2_P4.map((q, idx) => {
            const studentVal = menjodohkanAnswers[q.id] || '';

            return (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs md:text-sm font-bold text-slate-800">
                    {idx + 1}. {q.premise}
                  </span>

                  <select
                    value={studentVal}
                    onChange={(e) => handleMenjodohkanSelect(q.id, e.target.value)}
                    className="px-3 py-2 text-xs font-bold bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="">-- Pilih Pasangan --</option>
                    {q.options.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {showAnswerKey && (
                  <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200 text-xs text-indigo-900">
                    💡 <strong>Pasangan Tepat:</strong> {q.matchTarget}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION D: 4 BENAR / SALAH + ALASAN */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 text-xs font-black flex items-center justify-center">
            D
          </span>
          <h3 className="text-base font-extrabold text-slate-800">
            Memilih Benar / Salah & Kolom Isian Alasan (4 Soal)
          </h3>
        </div>

        <div className="space-y-6">
          {EVALUASI_BENAR_SALAH_KELAS2_P4.map((q, idx) => {
            const choice = bsAnswers[q.id]?.choice ?? null;
            const reason = bsAnswers[q.id]?.reason || '';

            return (
              <div key={q.id} className="p-4 rounded-2xl bg-amber-50/40 border border-amber-100 space-y-3">
                <p className="text-xs md:text-sm font-bold text-slate-800">
                  {idx + 1}. Pernyataan: "{q.statement}"
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleBsChoice(q.id, true)}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition border ${
                      choice === true
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-400'
                    }`}
                  >
                    [✓] BENAR
                  </button>

                  <button
                    onClick={() => handleBsChoice(q.id, false)}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition border ${
                      choice === false
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-rose-400'
                    }`}
                  >
                    [✗] SALAH
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-600">
                    Kolom Isian Alasan Jawabanmu:
                  </label>
                  <textarea
                    rows={2}
                    value={reason}
                    onChange={(e) => handleBsReasonChange(q.id, e.target.value)}
                    placeholder="Tuliskan alasan mengapa kamu memilih Benar atau Salah..."
                    className="w-full p-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>

                {showAnswerKey && (
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
                    💡 <strong>Kunci Jawaban:</strong> {q.isCorrect ? 'BENAR' : 'SALAH'}<br />
                    <span><strong>Penjelasan Alasan:</strong> {q.explanation}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION E: 5 SOAL URAIAN (HOTS & CT) */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-800 text-xs font-black flex items-center justify-center">
            E
          </span>
          <h3 className="text-base font-extrabold text-slate-800">
            Soal Uraian HOTS & Computational Thinking (5 Soal)
          </h3>
        </div>

        <div className="space-y-6">
          {EVALUASI_URAIAN_KELAS2_P4.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-2xl bg-purple-50/30 border border-purple-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-[10px] font-black bg-purple-100 text-purple-800 rounded-md">
                  {q.context}
                </span>
              </div>

              <p className="text-xs md:text-sm font-bold text-slate-800">
                {idx + 1}. {q.question}
              </p>

              <textarea
                rows={3}
                value={uraianAnswers[q.id] || ''}
                onChange={(e) => handleUraianChange(q.id, e.target.value)}
                placeholder="Ketikkan jawaban uraianmu secara jelas..."
                className="w-full p-3 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
              />

              {showAnswerKey && (
                <div className="p-3 bg-purple-100/70 rounded-xl border border-purple-200 text-xs text-purple-950">
                  💡 <strong>Contoh Jawaban Ideal:</strong><br />
                  <pre className="whitespace-pre-wrap font-sans text-xs mt-1">{q.sampleAnswer}</pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SCORE MODAL DIALOG */}
      {showScoreModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full space-y-6 text-center border border-slate-200 shadow-2xl animate-scale-up">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-800">
                Hasil & Skor Evaluasi Murid
              </h3>
              <p className="text-xs text-slate-500">
                Skor otomatis dihitung berdasarkan jawaban pilihan ganda, Isian Benar/Salah, dan pengisian Uraian.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Total Skor Perolehan:
              </span>
              <span className="text-4xl font-black text-emerald-600">
                {calculateScore()} / 100
              </span>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                setShowScoreModal(false);
              }}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl transition shadow-md"
            >
              Tutup Ringkasan Skor
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
