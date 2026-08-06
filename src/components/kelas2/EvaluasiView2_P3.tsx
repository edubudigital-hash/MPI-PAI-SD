import React, { useState } from 'react';
import { 
  EVALUASI_PG_KELAS2_P3, 
  EVALUASI_PGK_KELAS2_P3, 
  EVALUASI_MENJODOHKAN_KELAS2_P3, 
  EVALUASI_BENAR_SALAH_KELAS2_P3, 
  EVALUASI_URAIAN_KELAS2_P3 
} from '../../data/kelas2Pembelajaran3Data';
import { soundFX } from '../../utils/audio';
import { 
  FileCheck2, 
  Printer, 
  Eye, 
  EyeOff, 
  Calculator, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  X,
  Award
} from 'lucide-react';

interface EvaluasiView2_P3Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView2_P3: React.FC<EvaluasiView2_P3Props> = ({ grade, lesson }) => {
  // State for user answers
  const [pgAnswers, setPgAnswers] = useState<Record<number, number>>({});
  const [pgkAnswers, setPgkAnswers] = useState<Record<number, number[]>>({});
  const [menjodohkanAnswers, setMenjodohkanAnswers] = useState<Record<number, string>>({});
  const [bsAnswers, setBsAnswers] = useState<Record<number, boolean>>({});
  const [bsReasons, setBsReasons] = useState<Record<number, string>>({});
  const [uraianAnswers, setUraianAnswers] = useState<Record<number, string>>({});

  // UI state
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);

  // Handlers
  const handleSelectPG = (qId: number, optIdx: number) => {
    soundFX.playClick();
    setPgAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleTogglePGK = (qId: number, optIdx: number) => {
    soundFX.playClick();
    setPgkAnswers(prev => {
      const current = prev[qId] || [];
      const updated = current.includes(optIdx)
        ? current.filter(i => i !== optIdx)
        : [...current, optIdx];
      return { ...prev, [qId]: updated };
    });
  };

  const handleSelectMenjodohkan = (qId: number, selectedTarget: string) => {
    soundFX.playClick();
    setMenjodohkanAnswers(prev => ({ ...prev, [qId]: selectedTarget }));
  };

  const handleSelectBS = (qId: number, choice: boolean) => {
    soundFX.playClick();
    setBsAnswers(prev => ({ ...prev, [qId]: choice }));
  };

  const handleCalculateScore = () => {
    soundFX.playClick();
    let totalScore = 0;

    // 1. PG (10 questions x 4 pts = 40 pts)
    EVALUASI_PG_KELAS2_P3.forEach(q => {
      if (pgAnswers[q.id] === q.answer) {
        totalScore += 4;
      }
    });

    // 2. PGK (3 questions x 5 pts = 15 pts)
    EVALUASI_PGK_KELAS2_P3.forEach(q => {
      const userAns = (pgkAnswers[q.id] || []).sort().join(',');
      const correctAns = [...q.correctAnswers].sort().join(',');
      if (userAns === correctAns) {
        totalScore += 5;
      }
    });

    // 3. Menjodohkan (3 questions x 5 pts = 15 pts)
    EVALUASI_MENJODOHKAN_KELAS2_P3.forEach(q => {
      if (menjodohkanAnswers[q.id] === q.matchTarget) {
        totalScore += 5;
      }
    });

    // 4. Benar Salah (4 questions x 3.75 pts = 15 pts)
    EVALUASI_BENAR_SALAH_KELAS2_P3.forEach(q => {
      if (bsAnswers[q.id] === q.isCorrect) {
        totalScore += 3.75;
      }
    });

    // 5. Uraian (5 questions x 3 pts bonus for attempt = 15 pts)
    EVALUASI_URAIAN_KELAS2_P3.forEach(q => {
      if ((uraianAnswers[q.id] || '').trim().length > 5) {
        totalScore += 3;
      }
    });

    const finalCalculated = Math.min(100, Math.round(totalScore));
    setCalculatedScore(finalCalculated);
    setShowScoreModal(true);
  };

  // Download PDF functionality for Evaluasi
  const handlePrintEvaluasi = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Evaluasi Pembelajaran PAI SD Kelas ${grade} Bab ${lesson}: Pola Hidup Bersih & Sehat</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 30px;
              color: #0f172a;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #10b981;
              padding-bottom: 12px;
              margin-bottom: 20px;
            }
            .header h1 {
              margin: 0;
              color: #059669;
              font-size: 20px;
              font-weight: 800;
            }
            .header p {
              margin: 4px 0 0;
              color: #475569;
              font-size: 12px;
            }
            .student-info {
              display: flex;
              justify-content: space-between;
              border: 1px solid #cbd5e1;
              padding: 10px 16px;
              border-radius: 8px;
              margin-bottom: 20px;
              font-size: 12px;
            }
            .section-title {
              font-size: 14px;
              font-weight: 800;
              color: #1e293b;
              border-bottom: 2px solid #e2e8f0;
              padding-bottom: 6px;
              margin-top: 20px;
              margin-bottom: 12px;
            }
            .q-box {
              page-break-inside: avoid;
              margin-bottom: 14px;
              font-size: 12px;
            }
            .q-text {
              font-weight: 700;
              color: #0f172a;
              margin-bottom: 6px;
            }
            .options-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 6px;
              margin-left: 12px;
            }
            .option-item {
              border: 1px solid #e2e8f0;
              padding: 6px 10px;
              border-radius: 6px;
              background-color: #f8fafc;
            }
            .answer-line {
              border-bottom: 1px dashed #cbd5e1;
              height: 24px;
              margin-top: 6px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              font-size: 10px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>EVALUASI PEMBELAJARAN PAI & BP SD - KELAS ${grade} BAB ${lesson}</h1>
            <p>Menerapkan Akhlak kepada Diri melalui Pola Hidup Bersih dan Pola Hidup Sehat</p>
          </div>

          <div class="student-info">
            <div>Nama Murid : _______________________</div>
            <div>Kelas / No : II (Dua) / ____</div>
            <div>Tanggal : ___________________</div>
          </div>

          <!-- A. PILIHAN GANDA -->
          <div class="section-title">A. Pilihan Ganda (10 Soal)</div>
          ${EVALUASI_PG_KELAS2_P3.map((q, idx) => `
            <div class="q-box">
              <div class="q-text">${idx + 1}. ${q.question}</div>
              <div class="options-grid">
                ${q.options.map((opt, oIdx) => `
                  <div class="option-item">${String.fromCharCode(65 + oIdx)}. ${opt}</div>
                `).join('')}
              </div>
            </div>
          `).join('')}

          <!-- B. PILIHAN GANDA KOMPLEKS -->
          <div class="section-title">B. Pilihan Ganda Kompleks (3 Soal - Pilih Jawaban yang Benar)</div>
          ${EVALUASI_PGK_KELAS2_P3.map((q, idx) => `
            <div class="q-box">
              <div class="q-text">${idx + 1}. ${q.question}</div>
              <div class="options-grid">
                ${q.options.map((opt) => `
                  <div class="option-item">[  ] ${opt}</div>
                `).join('')}
              </div>
            </div>
          `).join('')}

          <!-- C. MENJODOHKAN -->
          <div class="section-title">C. Menjodohkan (3 Soal)</div>
          ${EVALUASI_MENJODOHKAN_KELAS2_P3.map((q, idx) => `
            <div class="q-box">
              <div class="q-text">${idx + 1}. Pasangkan kegiatan <b>"${q.premise}"</b> dengan kategori yang tepat:</div>
              <div style="margin-left: 12px; font-style: italic;">Jawaban Pasangan: __________________________________________</div>
            </div>
          `).join('')}

          <!-- D. BENAR / SALAH -->
          <div class="section-title">D. Benar atau Salah & Alasan (4 Soal)</div>
          ${EVALUASI_BENAR_SALAH_KELAS2_P3.map((q, idx) => `
            <div class="q-box">
              <div class="q-text">${idx + 1}. "${q.statement}"</div>
              <div style="margin-left: 12px;">
                Pilihan: [  ] BENAR   [  ] SALAH<br/>
                Alasan Saya: ____________________________________________________________________
              </div>
            </div>
          `).join('')}

          <!-- E. URAIAN -->
          <div class="section-title">E. Soal Uraian HOTS & Computational Thinking (5 Soal)</div>
          ${EVALUASI_URAIAN_KELAS2_P3.map((q, idx) => `
            <div class="q-box">
              <div class="q-text">${idx + 1}. ${q.question}</div>
              <div class="answer-line"></div>
              <div class="answer-line"></div>
            </div>
          `).join('')}

          <div class="footer">
            Dokumen Soal Evaluasi resmi PAI SD Kelas ${grade} Bab ${lesson} • Berbasis HOTS & Computational Thinking
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  return (
    <div className="space-y-8">
      {/* Top Bar Navigation */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/80 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 font-bold shrink-0">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800 leading-tight">
              Evaluasi Pembelajaran: Pola Hidup Bersih & Sehat
            </h2>
            <p className="text-xs text-slate-500">
              Kelas {grade} • Bab {lesson} (HOTS & Computational Thinking)
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          {/* Toggle Answer Key */}
          <button
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKey(!showAnswerKey);
            }}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 ${
              showAnswerKey
                ? 'bg-amber-500 text-white border-amber-500'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {showAnswerKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showAnswerKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          {/* Calculate Score */}
          <button
            onClick={handleCalculateScore}
            className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Calculator className="w-4 h-4" />
            <span>Lihat Skor Saya</span>
          </button>

          {/* Download PDF */}
          <button
            onClick={handlePrintEvaluasi}
            className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Download Evaluasi PDF</span>
          </button>
        </div>
      </div>

      {/* SECTION A: 10 PILIHAN GANDA */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center">A</span>
          <h3 className="text-base font-bold text-slate-800">Soal Pilihan Ganda (10 Soal)</h3>
        </div>

        <div className="space-y-6">
          {EVALUASI_PG_KELAS2_P3.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
              <p className="text-xs sm:text-sm font-bold text-slate-800 mb-3">
                {idx + 1}. {q.question}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, oIdx) => {
                  const isSelected = pgAnswers[q.id] === oIdx;
                  const isCorrect = q.answer === oIdx;

                  let style = 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-50';
                  if (isSelected) {
                    style = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                  }
                  if (showAnswerKey && isCorrect) {
                    style = 'bg-emerald-500 text-white border-emerald-500 font-bold';
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectPG(q.id, oIdx)}
                      className={`p-3 text-left text-xs rounded-xl border transition-all ${style}`}
                    >
                      <span className="font-bold mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200">
                  <span className="font-bold">Kunci & Pembahasan:</span> Jawaban {String.fromCharCode(65 + q.answer)} - {q.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION B: 3 PILIHAN GANDA KOMPLEKS */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-black text-xs flex items-center justify-center">B</span>
          <h3 className="text-base font-bold text-slate-800">Soal Pilihan Ganda Kompleks (3 Soal - Multi Select)</h3>
        </div>

        <div className="space-y-6">
          {EVALUASI_PGK_KELAS2_P3.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
              <p className="text-xs sm:text-sm font-bold text-slate-800 mb-3">
                {idx + 1}. {q.question}
              </p>

              <div className="space-y-2">
                {q.options.map((opt, oIdx) => {
                  const currentSelected = pgkAnswers[q.id] || [];
                  const isChecked = currentSelected.includes(oIdx);
                  const isKeyCorrect = q.correctAnswers.includes(oIdx);

                  let style = 'bg-white border-slate-200 text-slate-700 hover:bg-indigo-50';
                  if (isChecked) {
                    style = 'bg-indigo-600 text-white border-indigo-600 font-bold';
                  }
                  if (showAnswerKey && isKeyCorrect) {
                    style = 'bg-emerald-500 text-white border-emerald-500 font-bold';
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleTogglePGK(q.id, oIdx)}
                      className={`w-full p-3 text-left text-xs rounded-xl border transition-all flex items-center gap-2.5 ${style}`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-white text-indigo-600 border-white' : 'border-slate-300'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200">
                  <span className="font-bold">Kunci:</span> Jawaban yang benar adalah item ke-
                  {q.correctAnswers.map(a => a + 1).join(', ')}. {q.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION C: 3 MENJODOHKAN */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-purple-600 text-white font-black text-xs flex items-center justify-center">C</span>
          <h3 className="text-base font-bold text-slate-800">Soal Menjodohkan (3 Soal)</h3>
        </div>

        <div className="space-y-6">
          {EVALUASI_MENJODOHKAN_KELAS2_P3.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
              <p className="text-xs sm:text-sm font-bold text-slate-800 mb-3">
                {idx + 1}. Pilihlah kategori yang tepat untuk kegiatan: <span className="text-purple-700 font-black">{q.premise}</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((optTarget, oIdx) => {
                  const isSelected = menjodohkanAnswers[q.id] === optTarget;
                  const isCorrect = q.matchTarget === optTarget;

                  let style = 'bg-white border-slate-200 text-slate-700 hover:bg-purple-50';
                  if (isSelected) {
                    style = 'bg-purple-600 text-white border-purple-600 font-bold';
                  }
                  if (showAnswerKey && isCorrect) {
                    style = 'bg-emerald-500 text-white border-emerald-500 font-bold';
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectMenjodohkan(q.id, optTarget)}
                      className={`p-3 text-left text-xs rounded-xl border transition-all ${style}`}
                    >
                      {optTarget}
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200">
                  <span className="font-bold">Kunci:</span> {q.premise} = {q.matchTarget}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION D: 4 BENAR / SALAH + ALASAN */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-sky-600 text-white font-black text-xs flex items-center justify-center">D</span>
          <h3 className="text-base font-bold text-slate-800">Soal Benar atau Salah & Isian Alasan (4 Soal)</h3>
        </div>

        <div className="space-y-6">
          {EVALUASI_BENAR_SALAH_KELAS2_P3.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3">
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                {idx + 1}. "{q.statement}"
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleSelectBS(q.id, true)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${
                    bsAnswers[q.id] === true
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-50'
                  }`}
                >
                  BENAR
                </button>
                <button
                  onClick={() => handleSelectBS(q.id, false)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${
                    bsAnswers[q.id] === false
                      ? 'bg-rose-600 text-white border-rose-600'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-rose-50'
                  }`}
                >
                  SALAH
                </button>
              </div>

              {/* Text Input for Reason */}
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">
                  Tuliskan Alasan Kamu:
                </label>
                <input
                  type="text"
                  placeholder="Ketik alasan mengapa kamu memilih BENAR atau SALAH..."
                  value={bsReasons[q.id] || ''}
                  onChange={(e) => setBsReasons({ ...bsReasons, [q.id]: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              {showAnswerKey && (
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200">
                  <span className="font-bold">Kunci:</span> {q.isCorrect ? 'BENAR' : 'SALAH'} - {q.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION E: 5 SOAL URAIAN HOTS */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center">E</span>
          <h3 className="text-base font-bold text-slate-800">Soal Uraian HOTS & Computational Thinking (5 Soal)</h3>
        </div>

        <div className="space-y-6">
          {EVALUASI_URAIAN_KELAS2_P3.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  {idx + 1}. {q.question}
                </p>
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-100 text-emerald-800 shrink-0">
                  {q.context}
                </span>
              </div>

              <textarea
                rows={3}
                placeholder="Tuliskan jawaban penjelasan lengkap kamu di sini..."
                value={uraianAnswers[q.id] || ''}
                onChange={(e) => setUraianAnswers({ ...uraianAnswers, [q.id]: e.target.value })}
                className="w-full p-3 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 leading-relaxed"
              />

              {showAnswerKey && (
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-medium border border-emerald-200 whitespace-pre-line leading-relaxed">
                  <span className="font-bold block mb-1">Contoh Jawaban Ideal:</span>
                  {q.sampleAnswer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SCORE MODAL POPUP */}
      {showScoreModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center relative border border-slate-100 shadow-2xl">
            <button
              onClick={() => setShowScoreModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-1">Hasil Evaluasi Kamu</h3>
            <p className="text-xs text-slate-500 mb-4">
              SD Kelas {grade} • Bab {lesson} (Pola Hidup Bersih & Sehat)
            </p>

            <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-100 mb-6">
              <span className="text-xs font-bold text-emerald-800 block uppercase tracking-wider mb-1">
                Estimasi Skor Nilai:
              </span>
              <span className="text-4xl font-black text-emerald-600">
                {calculatedScore} / 100
              </span>
            </div>

            <button
              onClick={() => setShowScoreModal(false)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all shadow-md"
            >
              Tutup Ringkasan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
