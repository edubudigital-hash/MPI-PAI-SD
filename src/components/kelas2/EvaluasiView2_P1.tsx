import React, { useState } from 'react';
import { 
  EVALUASI_PG_KELAS2_P1, 
  EVALUASI_PGK_KELAS2_P1, 
  EVALUASI_MENJODOHKAN_KELAS2_P1, 
  EVALUASI_BENAR_SALAH_KELAS2_P1, 
  EVALUASI_URAIAN_KELAS2_P1 
} from '../../data/kelas2Pembelajaran1Data';
import { soundFX } from '../../utils/audio';
import { 
  ClipboardCheck, 
  Eye, 
  EyeOff, 
  Award, 
  Printer, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  FileText, 
  BrainCircuit,
  X
} from 'lucide-react';

interface EvaluasiView2_P1Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView2_P1: React.FC<EvaluasiView2_P1Props> = ({ grade, lesson }) => {
  // State answers
  const [answersPG, setAnswersPG] = useState<Record<number, number>>({});
  const [answersPGK, setAnswersPGK] = useState<Record<number, number[]>>({});
  const [answersMenjodohkan, setAnswersMenjodohkan] = useState<Record<number, string>>({});
  const [answersBS, setAnswersBS] = useState<Record<number, boolean>>({});
  const [reasonsBS, setReasonsBS] = useState<Record<number, string>>({});
  const [answersUraian, setAnswersUraian] = useState<Record<number, string>>({});

  // UI States
  const [showKeyAnswers, setShowKeyAnswers] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  // PG selection
  const handleSelectPG = (id: number, optIdx: number) => {
    soundFX.playClick();
    setAnswersPG(prev => ({ ...prev, [id]: optIdx }));
  };

  // PGK multi-selection
  const handleTogglePGK = (id: number, optIdx: number) => {
    soundFX.playClick();
    setAnswersPGK(prev => {
      const current = prev[id] || [];
      if (current.includes(optIdx)) {
        return { ...prev, [id]: current.filter(i => i !== optIdx) };
      } else {
        return { ...prev, [id]: [...current, optIdx] };
      }
    });
  };

  // Menjodohkan selection
  const handleSelectMenjodohkan = (id: number, target: string) => {
    soundFX.playClick();
    setAnswersMenjodohkan(prev => ({ ...prev, [id]: target }));
  };

  // Benar/Salah selection
  const handleSelectBS = (id: number, val: boolean) => {
    soundFX.playClick();
    setAnswersBS(prev => ({ ...prev, [id]: val }));
  };

  // Calculate score for objective sections (PG, PGK, Menjodohkan, BS)
  const calculateScore = () => {
    let totalScore = 0;
    const maxScoreObj = 100;

    // 10 PG = 40 points total (4 pts each)
    EVALUASI_PG_KELAS2_P1.forEach(q => {
      if (answersPG[q.id] === q.answer) totalScore += 4;
    });

    // 3 PGK = 21 points total (7 pts each)
    EVALUASI_PGK_KELAS2_P1.forEach(q => {
      const userAns = (answersPGK[q.id] || []).sort();
      const correctAns = [...q.correctAnswers].sort();
      if (JSON.stringify(userAns) === JSON.stringify(correctAns)) totalScore += 7;
    });

    // 3 Menjodohkan = 15 points total (5 pts each)
    EVALUASI_MENJODOHKAN_KELAS2_P1.forEach(q => {
      if (answersMenjodohkan[q.id] === q.matchTarget) totalScore += 5;
    });

    // 4 Benar/Salah = 24 points total (6 pts each)
    EVALUASI_BENAR_SALAH_KELAS2_P1.forEach(q => {
      if (answersBS[q.id] === q.isCorrect) totalScore += 6;
    });

    return Math.min(100, totalScore);
  };

  const handleOpenScoreModal = () => {
    soundFX.playFanfare();
    setShowScoreModal(true);
  };

  // Download PDF Evaluasi
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
              padding: 25px;
              color: #0f172a;
              line-height: 1.5;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #d97706;
              padding-bottom: 12px;
              margin-bottom: 20px;
            }
            .header h1 {
              margin: 0;
              color: #d97706;
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
              padding: 10px 15px;
              border-radius: 8px;
              margin-bottom: 20px;
              font-size: 12px;
            }
            .section-header {
              background-color: #fef3c7;
              color: #92400e;
              padding: 8px 12px;
              font-weight: 800;
              font-size: 13px;
              border-radius: 6px;
              margin-top: 20px;
              margin-bottom: 12px;
              border-left: 4px solid #d97706;
            }
            .question-item {
              margin-bottom: 12px;
              page-break-inside: avoid;
              font-size: 12px;
            }
            .question-text {
              font-weight: 700;
              color: #1e293b;
              margin-bottom: 4px;
            }
            .options-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 4px;
              padding-left: 15px;
            }
            .reason-box {
              border: 1px dashed #94a3b8;
              height: 40px;
              margin-top: 6px;
              border-radius: 4px;
            }
            .uraian-box {
              border: 1px solid #cbd5e1;
              height: 70px;
              margin-top: 6px;
              border-radius: 4px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              font-size: 11px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>EVALUASI PEMBELAJARAN PAI SD KELAS ${grade}</h1>
            <p>BAB ${lesson}: Hijaiyah Bersambung 3 Huruf, Surah An-Nas & Surah Al-Falaq (HOTS & CT)</p>
          </div>

          <div class="student-info">
            <div><strong>Nama Murid:</strong> ______________________</div>
            <div><strong>Kelas:</strong> II (Dua)</div>
            <div><strong>Tanggal:</strong> ______________</div>
          </div>

          <!-- BAGIAN A -->
          <div class="section-header">A. PILIHAN GANDA (10 SOAL)</div>
          ${EVALUASI_PG_KELAS2_P1.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.question}</div>
              <div class="options-grid">
                ${q.options.map((opt, oIdx) => `
                  <div>${String.fromCharCode(65 + oIdx)}. ${opt}</div>
                `).join('')}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN B -->
          <div class="section-header">B. PILIHAN GANDA KOMPLEKS (3 SOAL)</div>
          ${EVALUASI_PGK_KELAS2_P1.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.question}</div>
              <div class="options-grid">
                ${q.options.map((opt, oIdx) => `
                  <div>[ &nbsp; ] ${opt}</div>
                `).join('')}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN C -->
          <div class="section-header">C. MENJODOHKAN (3 SOAL)</div>
          ${EVALUASI_MENJODOHKAN_KELAS2_P1.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.premise}</div>
              <div style="font-size:11px; color:#475569; padding-left:15px;">
                Pilihan Jawaban: ${q.options.join(' | ')}
                <br>
                Jawaban: ( _____________________ )
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN D -->
          <div class="section-header">D. BENAR / SALAH DAN ALASANNYA (4 SOAL)</div>
          ${EVALUASI_BENAR_SALAH_KELAS2_P1.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.statement}</div>
              <div style="font-size:11px; margin-top:2px;">
                Pilihan: [ &nbsp; ] BENAR &nbsp;&nbsp;&nbsp;&nbsp; [ &nbsp; ] SALAH
              </div>
              <div style="font-size:11px; font-weight:bold; margin-top:4px;">Tuliskan Alasanmu:</div>
              <div class="reason-box"></div>
            </div>
          `).join('')}

          <!-- BAGIAN E -->
          <div class="section-header">E. SOAL URAIAN (5 SOAL HOTS & CT)</div>
          ${EVALUASI_URAIAN_KELAS2_P1.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.question}</div>
              <div style="font-size:10px; color:#b45309; font-weight:bold;">[ Konteks: ${q.context} ]</div>
              <div class="uraian-box"></div>
            </div>
          `).join('')}

          <div class="footer">
            Lembar Evaluasi Pembelajaran PAI Kelas 2 SD • Kurikulum Merdeka
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const calculatedScore = calculateScore();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 font-bold text-xs uppercase tracking-wider mb-2">
              <ClipboardCheck className="w-3.5 h-3.5 text-yellow-300" />
              <span>Evaluasi Pembelajaran • Kelas {grade} Bab {lesson}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Tes Formatif HOTS & Computational Thinking
            </h1>
            <p className="text-xs sm:text-sm text-amber-100 mt-1">
              10 Pilihan Ganda • 3 Pilihan Ganda Kompleks • 3 Menjodohkan • 4 Benar/Salah (+ Alasan) • 5 Uraian
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => {
                soundFX.playClick();
                setShowKeyAnswers(prev => !prev);
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs sm:text-sm border border-white/30 transition-all active:scale-95"
            >
              {showKeyAnswers ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showKeyAnswers ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
            </button>

            <button
              onClick={handleOpenScoreModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Award className="w-4 h-4" />
              <span>Lihat Skor Saya</span>
            </button>

            <button
              onClick={handlePrintEvaluasi}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-amber-900 hover:bg-amber-50 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION A: PILIHAN GANDA */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-extrabold text-xs uppercase tracking-wider">
            Bagian A
          </span>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100 mt-2">
            Pilihan Ganda (10 Soal)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Pilihlah satu jawaban yang paling tepat!</p>
        </div>

        <div className="space-y-6">
          {EVALUASI_PG_KELAS2_P1.map((q, idx) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-xl bg-amber-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  {q.question}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-10">
                {q.options.map((opt, oIdx) => {
                  const isSelected = answersPG[q.id] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectPG(q.id, oIdx)}
                      className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-amber-100 dark:bg-amber-950/80 border-amber-500 text-amber-950 dark:text-amber-100 font-bold'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-amber-50'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 font-bold text-[11px] flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Show Key Answer when toggled */}
              {showKeyAnswers && (
                <div className="ml-10 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                  <div className="font-bold">🔑 Kunci Jawaban: {String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}</div>
                  <p className="text-[11px] text-amber-800 dark:text-amber-300">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION B: PILIHAN GANDA KOMPLEKS */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-extrabold text-xs uppercase tracking-wider">
            Bagian B
          </span>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100 mt-2">
            Pilihan Ganda Kompleks (3 Soal)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Pilihlah LEBIH DARI SATU jawaban yang benar!</p>
        </div>

        <div className="space-y-6">
          {EVALUASI_PGK_KELAS2_P1.map((q, idx) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-xl bg-amber-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  {q.question}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-10">
                {q.options.map((opt, oIdx) => {
                  const isChecked = (answersPGK[q.id] || []).includes(oIdx);
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleTogglePGK(q.id, oIdx)}
                      className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center gap-2.5 ${
                        isChecked
                          ? 'bg-amber-100 dark:bg-amber-950/80 border-amber-500 text-amber-950 dark:text-amber-100 font-bold'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-amber-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        className="rounded text-amber-600 focus:ring-amber-500"
                      />
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {showKeyAnswers && (
                <div className="ml-10 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                  <div className="font-bold">
                    🔑 Kunci Jawaban Benar: {q.correctAnswers.map(a => q.options[a]).join(', ')}
                  </div>
                  <p className="text-[11px] text-amber-800 dark:text-amber-300">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION C: MENJODOHKAN */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-extrabold text-xs uppercase tracking-wider">
            Bagian C
          </span>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100 mt-2">
            Menjodohkan (3 Soal)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Jodohkanlah pernyataan di kiri dengan pasangan di kanan yang tepat!</p>
        </div>

        <div className="space-y-4">
          {EVALUASI_MENJODOHKAN_KELAS2_P1.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xl bg-amber-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {q.premise}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {q.options.map((opt, oIdx) => {
                  const isSelected = answersMenjodohkan[q.id] === opt;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectMenjodohkan(q.id, opt)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-amber-600 text-white border-amber-600 font-bold shadow-sm'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-amber-100'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION D: BENAR / SALAH (+ ALASAN) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-extrabold text-xs uppercase tracking-wider">
            Bagian D
          </span>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100 mt-2">
            Memilih Benar atau Salah & Isian Alasan (4 Soal)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Tentukan status kebenaran pernyataan dan sertakan alasannya!</p>
        </div>

        <div className="space-y-6">
          {EVALUASI_BENAR_SALAH_KELAS2_P1.map((q, idx) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-xl bg-amber-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  {q.statement}
                </p>
              </div>

              {/* Radio buttons BENAR / SALAH */}
              <div className="flex items-center gap-3 pl-10">
                <button
                  onClick={() => handleSelectBS(q.id, true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    answersBS[q.id] === true
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-emerald-50'
                  }`}
                >
                  BENAR
                </button>
                <button
                  onClick={() => handleSelectBS(q.id, false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    answersBS[q.id] === false
                      ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-rose-50'
                  }`}
                >
                  SALAH
                </button>
              </div>

              {/* Reason Input Field */}
              <div className="pl-10 space-y-1">
                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                  Kolom Isian Alasan Jawabanmu:
                </label>
                <input
                  type="text"
                  placeholder="Tuliskan alasan mengapa kamu memilih Benar / Salah..."
                  value={reasonsBS[q.id] || ''}
                  onChange={(e) => setReasonsBS(prev => ({ ...prev, [q.id]: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {showKeyAnswers && (
                <div className="ml-10 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                  <div className="font-bold">🔑 Jawaban Benar: {q.isCorrect ? 'BENAR' : 'SALAH'}</div>
                  <p className="text-[11px] text-amber-800 dark:text-amber-300">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION E: URAIAN */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-extrabold text-xs uppercase tracking-wider">
            Bagian E
          </span>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100 mt-2">
            Soal Uraian HOTS & Computational Thinking (5 Soal)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Jawablah pertanyaan uraian berikut dengan jelas dan lengkap!</p>
        </div>

        <div className="space-y-6">
          {EVALUASI_URAIAN_KELAS2_P1.map((q, idx) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-xl bg-amber-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="grow space-y-1">
                  <div className="text-[10px] font-extrabold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
                    {q.context}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                    {q.question}
                  </p>
                </div>
              </div>

              <div className="pl-10">
                <textarea
                  rows={3}
                  placeholder="Tuliskan jawaban lengkapmu di sini..."
                  value={answersUraian[q.id] || ''}
                  onChange={(e) => setAnswersUraian(prev => ({ ...prev, [q.id]: e.target.value }))}
                  className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {showKeyAnswers && (
                <div className="ml-10 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                  <div className="font-bold text-amber-800 dark:text-amber-300">💡 Contoh Jawaban Ideal:</div>
                  <p className="whitespace-pre-line text-[11px] leading-relaxed">{q.sampleAnswer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SCORE MODAL */}
      {showScoreModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowScoreModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950/60 mx-auto flex items-center justify-center text-amber-600">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
                Skor Bagian Objektif
              </h3>
              <p className="text-xs text-slate-500">
                Penilaian otomatis untuk PG, PGK, Menjodohkan & Benar/Salah:
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border border-amber-200 dark:border-amber-800 text-center space-y-1">
              <span className="text-4xl font-black text-amber-600">{calculatedScore}</span>
              <span className="text-sm font-bold text-slate-500"> / 100 Pts</span>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 font-medium">
                {calculatedScore >= 80
                  ? '🌟 Luar biasa! Penguasaan materi Bab 1 sangat matang!'
                  : calculatedScore >= 60
                  ? '👍 Baik! Teruskan latihan membaca & menulis huruf hijaiyah bersambung.'
                  : '💪 Ayo tingkatkan lagi membaca slide materi dan latihan soal!'}
              </p>
            </div>

            <button
              onClick={() => setShowScoreModal(false)}
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              Tutup Ringkasan Skor
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
