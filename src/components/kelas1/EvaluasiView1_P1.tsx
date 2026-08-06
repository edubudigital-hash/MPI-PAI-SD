import React, { useState } from 'react';
import { 
  EVALUASI_PG_KELAS1_P1, 
  EVALUASI_PGK_KELAS1_P1, 
  EVALUASI_MENJODOHKAN_KELAS1_P1, 
  ALL_MATCH_OPTIONS_P1,
  EVALUASI_BENAR_SALAH_KELAS1_P1, 
  EVALUASI_URAIAN_KELAS1_P1 
} from '../../data/kelas1Pembelajaran1Data';
import { soundFX } from '../../utils/audio';
import { 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  Award, 
  Download, 
  RefreshCw, 
  Check, 
  X, 
  HelpCircle 
} from 'lucide-react';

interface EvaluasiView1_P1Props {
  grade?: number;
  lesson?: number;
}

export const EvaluasiView1_P1: React.FC<EvaluasiView1_P1Props> = ({
  grade = 1,
  lesson = 1,
}) => {
  // State for user answers
  const [pgAnswers, setPgAnswers] = useState<Record<number, number>>({});
  const [pgkAnswers, setPgkAnswers] = useState<Record<number, number[]>>({});
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const [bsAnswers, setBsAnswers] = useState<Record<number, boolean>>({});
  const [uraianAnswers, setUraianAnswers] = useState<Record<number, string>>({});

  // UI state
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  // PG Answer selection
  const handleSelectPG = (qId: number, optIdx: number) => {
    soundFX.playClick();
    setPgAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  // PGK Answer toggle
  const handleTogglePGK = (qId: number, optIdx: number) => {
    soundFX.playClick();
    setPgkAnswers((prev) => {
      const current = prev[qId] || [];
      if (current.includes(optIdx)) {
        return { ...prev, [qId]: current.filter((i) => i !== optIdx) };
      } else {
        return { ...prev, [qId]: [...current, optIdx] };
      }
    });
  };

  // Match Answer selection
  const handleSelectMatch = (qId: number, option: string) => {
    soundFX.playClick();
    setMatchAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  // Benar/Salah Selection
  const handleSelectBS = (qId: number, val: boolean) => {
    soundFX.playClick();
    setBsAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  // Score Calculation
  const calculateScore = () => {
    let totalScore = 0;

    // 1. PG (10 Soal @ 5 Point = 50 Points)
    EVALUASI_PG_KELAS1_P1.forEach((q) => {
      if (pgAnswers[q.id] === q.correctAnswer) {
        totalScore += 5;
      }
    });

    // 2. PGK (2 Soal @ 10 Point = 20 Points)
    EVALUASI_PGK_KELAS1_P1.forEach((q) => {
      const userAns = pgkAnswers[q.id] || [];
      const isCorrect = 
        userAns.length === q.correctAnswers.length &&
        q.correctAnswers.every((a) => userAns.includes(a));
      if (isCorrect) totalScore += 10;
    });

    // 3. Menjodohkan (1 Soal @ 10 Point = 10 Points)
    EVALUASI_MENJODOHKAN_KELAS1_P1.forEach((q) => {
      if (matchAnswers[q.id] === q.matchOption) {
        totalScore += 10;
      }
    });

    // 4. Benar Salah (3 Soal @ 5 Point = 15 Points)
    EVALUASI_BENAR_SALAH_KELAS1_P1.forEach((q) => {
      if (bsAnswers[q.id] === q.isCorrect) {
        totalScore += 5;
      }
    });

    return totalScore; // Max automatic score = 95 Points + Uraian evaluated by teacher
  };

  const handleReset = () => {
    soundFX.playClick();
    setPgAnswers({});
    setPgkAnswers({});
    setMatchAnswers({});
    setBsAnswers({});
    setUraianAnswers({});
    setShowScoreModal(false);
  };

  const handleDownloadPDF = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Evaluasi Pembelajaran PAI Kelas ${grade} - Pembelajaran ${lesson}</title>
          <style>
            @page {
              size: A4;
              margin: 15mm;
            }
            body {
              font-family: 'Helvetica Neue', Arial, sans-serif;
              color: #1e293b;
              line-height: 1.5;
              margin: 0;
              padding: 0;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #059669;
              padding-bottom: 10px;
              margin-bottom: 20px;
            }
            .header h1 {
              margin: 0;
              font-size: 18px;
              color: #065f46;
              text-transform: uppercase;
            }
            .header p {
              margin: 4px 0 0 0;
              font-size: 12px;
              color: #64748b;
            }
            .student-info {
              display: flex;
              justify-content: space-between;
              border: 1px solid #cbd5e1;
              padding: 10px 15px;
              border-radius: 6px;
              margin-bottom: 20px;
              font-size: 12px;
            }
            .section-title {
              font-size: 14px;
              font-weight: bold;
              color: #047857;
              background-color: #ecfdf5;
              padding: 6px 10px;
              border-left: 4px solid #10b981;
              margin-top: 15px;
              margin-bottom: 12px;
            }
            .question-item {
              margin-bottom: 12px;
              font-size: 12px;
              page-break-inside: avoid;
            }
            .question-text {
              font-weight: bold;
              margin-bottom: 4px;
            }
            .options {
              margin-left: 15px;
            }
            .option-item {
              margin-bottom: 2px;
            }
            .answer-box {
              border: 1px solid #cbd5e1;
              height: 40px;
              border-radius: 4px;
              margin-top: 4px;
            }
            .footer {
              text-align: center;
              font-size: 10px;
              color: #94a3b8;
              margin-top: 30px;
              border-top: 1px solid #e2e8f0;
              padding-top: 8px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Lembar Evaluasi Pembelajaran (HOTS & CT)</h1>
            <p>PAI & Budi Pekerti SD Kelas ${grade} • Bab 1: Membaca & Menulis Huruf Hijaiyah</p>
          </div>

          <div class="student-info">
            <div><strong>Nama Murid:</strong> ______________________</div>
            <div><strong>Kelas / No:</strong> ______________________</div>
            <div><strong>Tanggal:</strong> ______________________</div>
          </div>

          <!-- BAGIAN A -->
          <div class="section-title">A. Pilihan Ganda (10 Soal)</div>
          ${EVALUASI_PG_KELAS1_P1.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.question}</div>
              <div class="options">
                ${q.options.map((opt) => `<div class="option-item">${opt}</div>`).join('')}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN B -->
          <div class="section-title">B. Pilihan Ganda Kompleks (2 Soal)</div>
          ${EVALUASI_PGK_KELAS1_P1.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.question}</div>
              <div class="options">
                ${q.options.map((opt) => `<div class="option-item">[  ] ${opt}</div>`).join('')}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN C -->
          <div class="section-title">C. Menjodohkan (1 Soal)</div>
          ${EVALUASI_MENJODOHKAN_KELAS1_P1.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. Jodohkanlah pernyataan berikut:</div>
              <p style="margin-left: 10px;">"${q.statement}" ----&gt; ( Jawaban: ___________ )</p>
              <div style="font-size: 11px; color: #64748b; margin-left: 10px;">Pilihan Jawaban: ${ALL_MATCH_OPTIONS_P1.join(', ')}</div>
            </div>
          `).join('')}

          <!-- BAGIAN D -->
          <div class="section-title">D. Memilih Benar atau Salah (3 Soal)</div>
          ${EVALUASI_BENAR_SALAH_KELAS1_P1.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. Pernyataan: "${q.statement}"</div>
              <div style="margin-left: 10px;">Pilihan: [  ] Benar   /   [  ] Salah</div>
            </div>
          `).join('')}

          <!-- BAGIAN E -->
          <div class="section-title">E. Uraian HOTS & CT (4 Soal)</div>
          ${EVALUASI_URAIAN_KELAS1_P1.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.question}</div>
              <div class="answer-box"></div>
            </div>
          `).join('')}

          <div class="footer">
            <p>Lembar Evaluasi Resmi PAI Kelas ${grade} Pembelajaran ${lesson} | Dicetak Otomatis</p>
          </div>

          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
  };

  return (
    <div className="space-y-8">
      {/* HEADER BAR */}
      <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
              Evaluasi Pembelajaran Kelas 1
            </span>
            <h3 className="text-xl font-black text-slate-800 mt-1">
              Soal Evaluasi HOTS & Computational Thinking
            </h3>
            <p className="text-xs text-slate-500">
              10 PG, 2 PGK, 1 Menjodohkan, 3 Benar/Salah, dan 4 Uraian
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKey(!showAnswerKey);
            }}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
              showAnswerKey
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {showAnswerKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showAnswerKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setShowScoreModal(true);
            }}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-md"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Cetak PDF</span>
          </button>
        </div>
      </div>

      {/* SECTION A: PG (10 SOAL) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center">A</span>
            Pilihan Ganda (10 Soal)
          </h4>
          <span className="text-xs text-slate-500">Bobot: 50 Poin</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_PG_KELAS1_P1.map((q, idx) => (
            <div key={q.id} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 space-y-3">
              <p className="text-sm font-bold text-slate-800">
                {idx + 1}. {q.question}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = pgAnswers[q.id] === optIdx;
                  const isCorrect = optIdx === q.correctAnswer;

                  let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-emerald-400';
                  if (isSelected) btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                  if (showAnswerKey && isCorrect) btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectPG(q.id, optIdx)}
                      className={`p-3 text-left text-xs rounded-xl border transition ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-emerald-100/60 rounded-xl text-xs text-emerald-900 font-medium">
                  <strong>Kunci:</strong> {q.options[q.correctAnswer]} — <em>{q.explanation}</em>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION B: PGK (2 SOAL) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center">B</span>
            Pilihan Ganda Kompleks (2 Soal)
          </h4>
          <span className="text-xs text-slate-500">Pilih 2 Jawaban • Bobot: 20 Poin</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_PGK_KELAS1_P1.map((q, idx) => (
            <div key={q.id} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 space-y-3">
              <p className="text-sm font-bold text-slate-800">
                {idx + 1}. {q.question}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => {
                  const selectedArr = pgkAnswers[q.id] || [];
                  const isChecked = selectedArr.includes(optIdx);
                  const isCorrect = q.correctAnswers.includes(optIdx);

                  let btnStyle = 'bg-white border-slate-200 text-slate-700';
                  if (isChecked) btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                  if (showAnswerKey && isCorrect) btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleTogglePGK(q.id, optIdx)}
                      className={`p-3 text-left text-xs rounded-xl border transition flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? 'bg-white text-emerald-600' : 'border-slate-300'}`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-emerald-100/60 rounded-xl text-xs text-emerald-900 font-medium">
                  <strong>Kunci:</strong> {q.correctAnswers.map((ca) => q.options[ca]).join(', ')} — <em>{q.explanation}</em>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION C: MENJODOHKAN (1 SOAL) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center">C</span>
            Menjodohkan (1 Soal)
          </h4>
          <span className="text-xs text-slate-500">Bobot: 10 Poin</span>
        </div>

        <div className="space-y-4">
          {EVALUASI_MENJODOHKAN_KELAS1_P1.map((q, idx) => (
            <div key={q.id} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 space-y-3">
              <p className="text-sm font-bold text-slate-800">
                {idx + 1}. {q.statement}
              </p>
              <div className="flex flex-wrap gap-2">
                {ALL_MATCH_OPTIONS_P1.map((opt, optIdx) => {
                  const isSelected = matchAnswers[q.id] === opt;
                  const isCorrect = opt === q.matchOption;

                  let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-emerald-400';
                  if (isSelected) btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                  if (showAnswerKey && isCorrect) btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectMatch(q.id, opt)}
                      className={`px-4 py-2.5 text-xs rounded-xl border transition ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-emerald-100/60 rounded-xl text-xs text-emerald-900 font-medium">
                  <strong>Kunci Pasangan:</strong> {q.matchOption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION D: BENAR / SALAH (3 SOAL) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center">D</span>
            Memilih Benar / Salah (3 Soal)
          </h4>
          <span className="text-xs text-slate-500">Bobot: 15 Poin</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_BENAR_SALAH_KELAS1_P1.map((q, idx) => (
            <div key={q.id} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 space-y-3">
              <p className="text-sm font-bold text-slate-800">
                {idx + 1}. Pernyataan: "{q.statement}"
              </p>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleSelectBS(q.id, true)}
                  className={`px-5 py-2 text-xs rounded-xl font-bold border transition flex items-center gap-1.5 ${
                    bsAnswers[q.id] === true 
                      ? 'bg-emerald-600 text-white border-emerald-600' 
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" /> Benar
                </button>
                <button
                  onClick={() => handleSelectBS(q.id, false)}
                  className={`px-5 py-2 text-xs rounded-xl font-bold border transition flex items-center gap-1.5 ${
                    bsAnswers[q.id] === false 
                      ? 'bg-rose-600 text-white border-rose-600' 
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <X className="w-3.5 h-3.5" /> Salah
                </button>
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-emerald-100/60 rounded-xl text-xs text-emerald-900 font-medium">
                  <div><strong>Kunci:</strong> {q.isCorrect ? 'Benar' : 'Salah'}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION E: URAIAN HOTS & CT (4 SOAL) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center">E</span>
            Soal Uraian HOTS & Computational Thinking (4 Soal)
          </h4>
          <span className="text-xs text-slate-500">Penilaian Oleh Guru</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_URAIAN_KELAS1_P1.map((q, idx) => (
            <div key={q.id} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 space-y-3">
              <p className="text-sm font-bold text-slate-800 whitespace-pre-line">
                {idx + 1}. {q.question}
              </p>
              
              <textarea
                rows={3}
                placeholder="Tuliskan jawaban uraianmu di sini..."
                value={uraianAnswers[q.id] || ''}
                onChange={(e) => setUraianAnswers({ ...uraianAnswers, [q.id]: e.target.value })}
                className="w-full p-3 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />

              {showAnswerKey && (
                <div className="p-3 bg-emerald-100/60 rounded-xl text-xs text-emerald-900 font-medium">
                  <strong>Contoh Jawaban Ideal:</strong>
                  <p className="whitespace-pre-line mt-1">{q.sampleAnswer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SCORE MODAL */}
      {showScoreModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 md:p-8 max-w-md w-full text-center space-y-6 animate-scale-up">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-800">
                Hasil Skor Otomatis Evaluasi
              </h3>
              <p className="text-xs text-slate-500">
                Skor otomatis dihitung dari pilihan ganda, PGK, menjodohkan, dan benar/salah.
              </p>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <div className="text-3xl font-black text-emerald-700">
                {calculateScore()} / 95 PTS
              </div>
              <p className="text-[11px] text-emerald-800 mt-1 italic">
                *Belum termasuk 4 soal uraian yang akan dinilai langsung oleh guru.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-4 h-4" /> Ulangi
              </button>
              <button
                onClick={() => setShowScoreModal(false)}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
