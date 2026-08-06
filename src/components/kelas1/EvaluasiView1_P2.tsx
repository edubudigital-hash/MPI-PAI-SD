import React, { useState } from 'react';
import { 
  EVALUASI_PG_KELAS1_P2, 
  EVALUASI_PGK_KELAS1_P2, 
  EVALUASI_MENJODOHKAN_KELAS1_P2, 
  ALL_MATCH_OPTIONS_P2,
  EVALUASI_BENAR_SALAH_KELAS1_P2, 
  EVALUASI_URAIAN_KELAS1_P2 
} from '../../data/kelas1Pembelajaran2Data';
import { soundFX } from '../../utils/audio';
import { 
  CheckCircle2, 
  Eye, 
  Download, 
  Award, 
  X, 
  RotateCcw, 
  CheckSquare, 
  HelpCircle,
  FileCheck2
} from 'lucide-react';

interface EvaluasiView1_P2Props {
  grade?: number;
  lesson?: number;
}

export const EvaluasiView1_P2: React.FC<EvaluasiView1_P2Props> = ({
  grade = 1,
  lesson = 2,
}) => {
  // Answers state
  const [pgAnswers, setPgAnswers] = useState<Record<number, number>>({});
  const [pgkAnswers, setPgkAnswers] = useState<Record<number, number[]>>({});
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const [bsAnswers, setBsAnswers] = useState<Record<number, boolean>>({});
  const [uraianAnswers, setUraianAnswers] = useState<Record<number, string>>({});

  // UI state
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  // PG
  const handleSelectPG = (qId: number, optionIdx: number) => {
    soundFX.playClick();
    setPgAnswers({ ...pgAnswers, [qId]: optionIdx });
  };

  // PGK
  const handleTogglePGK = (qId: number, optionIdx: number) => {
    soundFX.playClick();
    const current = pgkAnswers[qId] || [];
    if (current.includes(optionIdx)) {
      setPgkAnswers({ ...pgkAnswers, [qId]: current.filter((idx) => idx !== optionIdx) });
    } else {
      setPgkAnswers({ ...pgkAnswers, [qId]: [...current, optionIdx] });
    }
  };

  // Menjodohkan
  const handleSelectMatch = (qId: number, value: string) => {
    soundFX.playClick();
    setMatchAnswers({ ...matchAnswers, [qId]: value });
  };

  // Benar / Salah
  const handleSelectBS = (qId: number, value: boolean) => {
    soundFX.playClick();
    setBsAnswers({ ...bsAnswers, [qId]: value });
  };

  // Calculate Score
  const calculateScore = () => {
    let pgScore = 0;
    EVALUASI_PG_KELAS1_P2.forEach((q) => {
      if (pgAnswers[q.id] === q.correctAnswer) {
        pgScore += 4; // 10 * 4 = 40
      }
    });

    let pgkScore = 0;
    EVALUASI_PGK_KELAS1_P2.forEach((q) => {
      const userAns = pgkAnswers[q.id] || [];
      const isMatch =
        userAns.length === q.correctAnswers.length &&
        userAns.every((val) => q.correctAnswers.includes(val));
      if (isMatch) pgkScore += 10; // 2 * 10 = 20
    });

    let matchScore = 0;
    EVALUASI_MENJODOHKAN_KELAS1_P2.forEach((q) => {
      if (matchAnswers[q.id] === q.matchOption) matchScore += 7.5; // 2 * 7.5 = 15
    });

    let bsScore = 0;
    EVALUASI_BENAR_SALAH_KELAS1_P2.forEach((q) => {
      if (bsAnswers[q.id] === q.isCorrect) bsScore += 7.5; // 2 * 7.5 = 15
    });

    // Total Auto Score from Objective Questions
    const totalObjectiveScore = Math.round(pgScore + pgkScore + matchScore + bsScore);
    return {
      pgScore,
      pgkScore,
      matchScore,
      bsScore,
      totalObjectiveScore,
    };
  };

  const handleShowScore = () => {
    soundFX.playClick();
    setShowScoreModal(true);
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

    const scores = calculateScore();

    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Evaluasi Pembelajaran PAI SD Kelas ${grade} - Pembelajaran ${lesson}</title>
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
              border-bottom: 3px double #059669;
              padding-bottom: 12px;
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
            .identity-box {
              border: 1px solid #cbd5e1;
              padding: 10px 14px;
              border-radius: 6px;
              margin-bottom: 20px;
              font-size: 12px;
              display: flex;
              justify-content: space-between;
            }
            .section-title {
              font-size: 14px;
              font-weight: bold;
              color: #0f172a;
              background-color: #f1f5f9;
              padding: 6px 10px;
              border-left: 4px solid #10b981;
              margin-top: 18px;
              margin-bottom: 10px;
              page-break-after: avoid;
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
              margin-left: 14px;
            }
            .uraian-box {
              border: 1px dashed #cbd5e1;
              height: 40px;
              border-radius: 4px;
              margin-top: 6px;
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
            <h1>Evaluasi Pembelajaran (HOTS & Computational Thinking)</h1>
            <p>PAI & Budi Pekerti SD Kelas ${grade} • Pembelajaran ${lesson}: Meyakini Enam Rukun Iman</p>
          </div>

          <div class="identity-box">
            <div><strong>Nama Murid:</strong> ________________________</div>
            <div><strong>Kelas:</strong> I (Satu)</div>
            <div><strong>Nilai Objektif:</strong> ${scores.totalObjectiveScore} / 90</div>
          </div>

          <!-- BAGIAN A -->
          <div class="section-title">A. Pilihan Ganda (10 Soal)</div>
          ${EVALUASI_PG_KELAS1_P2.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.question}</div>
              <div class="options">
                ${q.options.map((opt) => `<div>${opt}</div>`).join('')}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN B -->
          <div class="section-title">B. Pilihan Ganda Kompleks (2 Soal)</div>
          ${EVALUASI_PGK_KELAS1_P2.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.question}</div>
              <div class="options">
                ${q.options.map((opt) => `<div>[  ] ${opt}</div>`).join('')}
              </div>
            </div>
          `).join('')}

          <!-- BAGIAN C -->
          <div class="section-title">C. Menjodohkan (2 Soal)</div>
          ${EVALUASI_MENJODOHKAN_KELAS1_P2.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.statement}</div>
              <div style="margin-left: 14px;">Jawaban: [ ____________________ ]</div>
            </div>
          `).join('')}

          <!-- BAGIAN D -->
          <div class="section-title">D. Memilih Benar atau Salah (2 Soal)</div>
          ${EVALUASI_BENAR_SALAH_KELAS1_P2.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. Pernyataan: "${q.statement}"</div>
              <div style="margin-left: 14px;">Pilihan: (  ) BENAR    (  ) SALAH</div>
            </div>
          `).join('')}

          <!-- BAGIAN E -->
          <div class="section-title">E. Uraian HOTS / Computational Thinking (4 Soal)</div>
          ${EVALUASI_URAIAN_KELAS1_P2.map((q, idx) => `
            <div class="question-item">
              <div class="question-text">${idx + 1}. ${q.question.replace(/\n/g, '<br/>')}</div>
              <div class="uraian-box"></div>
            </div>
          `).join('')}

          <div class="footer">
            <p>Lembar Evaluasi Pembelajaran PAI SD Kelas ${grade} - Pembelajaran ${lesson} | Dicetak Otomatis</p>
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

  const scores = calculateScore();

  return (
    <div className="space-y-8">
      {/* TOP CONTROL HEADER */}
      <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
              Evaluasi Pembelajaran Kelas 1 Pembelajaran 2
            </span>
            <h3 className="text-xl font-black text-slate-800 mt-1">
              Lembar Evaluasi Mandiri (HOTS & CT)
            </h3>
            <p className="text-xs text-slate-500">
              Uji pemahamanmu tentang Enam Rukun Iman dengan soal berkualitas tinggi
            </p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKey(!showAnswerKey);
            }}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
              showAnswerKey
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>{showAnswerKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            onClick={handleShowScore}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-md active:scale-95"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition shadow-md active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* SECTION A: PILIHAN GANDA (10 SOAL) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
              A
            </span>
            Pilihan Ganda (10 Soal)
          </h4>
          <span className="text-xs text-slate-500">Bobot: 40 Poin</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_PG_KELAS1_P2.map((q, idx) => (
            <div key={q.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-sm font-bold text-slate-800">
                {idx + 1}. {q.question}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = pgAnswers[q.id] === optIdx;
                  const isCorrect = optIdx === q.correctAnswer;

                  let style = 'bg-white border-slate-200 hover:border-emerald-500 text-slate-700';
                  if (isSelected) {
                    style = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectPG(q.id, optIdx)}
                      className={`p-3 text-left rounded-xl text-xs border transition ${style}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-emerald-100/60 rounded-xl text-xs text-emerald-900 font-medium space-y-1">
                  <div><strong>Kunci:</strong> {q.options[q.correctAnswer]}</div>
                  <div><strong>Penjelasan:</strong> {q.explanation}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION B: PILIHAN GANDA KOMPLEKS (2 SOAL) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
              B
            </span>
            Pilihan Ganda Kompleks (2 Soal)
          </h4>
          <span className="text-xs text-slate-500">Bobot: 20 Poin</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_PGK_KELAS1_P2.map((q, idx) => {
            const userSelections = pgkAnswers[q.id] || [];

            return (
              <div key={q.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="text-sm font-bold text-slate-800">
                  {idx + 1}. {q.question}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {q.options.map((opt, optIdx) => {
                    const isChecked = userSelections.includes(optIdx);

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleTogglePGK(q.id, optIdx)}
                        className={`p-3 text-left rounded-xl text-xs border transition flex items-center justify-between ${
                          isChecked
                            ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-500'
                        }`}
                      >
                        <span>{opt}</span>
                        {isChecked && <CheckSquare className="w-4 h-4 text-white shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {showAnswerKey && (
                  <div className="p-3 bg-emerald-100/60 rounded-xl text-xs text-emerald-900 font-medium space-y-1">
                    <div>
                      <strong>Kunci:</strong>{' '}
                      {q.correctAnswers.map((aIdx) => q.options[aIdx]).join(' & ')}
                    </div>
                    <div><strong>Penjelasan:</strong> {q.explanation}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION C: MENJODOHKAN (2 SOAL) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
              C
            </span>
            Menjodohkan (2 Soal)
          </h4>
          <span className="text-xs text-slate-500">Bobot: 15 Poin</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_MENJODOHKAN_KELAS1_P2.map((q, idx) => (
            <div key={q.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-sm font-bold text-slate-800">
                {idx + 1}. Pernyataan: "{q.statement}"
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-600">Pasangan Jawaban:</span>
                <select
                  value={matchAnswers[q.id] || ''}
                  onChange={(e) => handleSelectMatch(q.id, e.target.value)}
                  className="px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 font-bold text-emerald-700"
                >
                  <option value="">-- Pilih Pasangan --</option>
                  {ALL_MATCH_OPTIONS_P2.map((opt, optIdx) => (
                    <option key={optIdx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-emerald-100/60 rounded-xl text-xs text-emerald-900 font-medium">
                  <strong>Kunci:</strong> {q.matchOption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION D: BENAR / SALAH (2 SOAL) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
              D
            </span>
            Memilih Benar / Salah (2 Soal)
          </h4>
          <span className="text-xs text-slate-500">Bobot: 15 Poin</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_BENAR_SALAH_KELAS1_P2.map((q, idx) => (
            <div key={q.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-sm font-bold text-slate-800">
                {idx + 1}. Pernyataan: "{q.statement}"
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleSelectBS(q.id, true)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold border transition ${
                    bsAnswers[q.id] === true
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500'
                  }`}
                >
                  BENAR
                </button>

                <button
                  onClick={() => handleSelectBS(q.id, false)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold border transition ${
                    bsAnswers[q.id] === false
                      ? 'bg-rose-600 text-white border-rose-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-rose-500'
                  }`}
                >
                  SALAH
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
            <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
              E
            </span>
            Uraian HOTS & Computational Thinking (4 Soal)
          </h4>
          <span className="text-xs text-slate-500">Penilaian Kualitatif Guru</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_URAIAN_KELAS1_P2.map((q, idx) => (
            <div key={q.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-sm font-bold text-slate-800 whitespace-pre-line">
                {idx + 1}. {q.question}
              </div>

              <textarea
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                value={uraianAnswers[q.id] || ''}
                onChange={(e) => setUraianAnswers({ ...uraianAnswers, [q.id]: e.target.value })}
                className="w-full p-3 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />

              {showAnswerKey && (
                <div className="p-3 bg-emerald-100/60 rounded-xl text-xs text-emerald-900 font-medium space-y-1">
                  <strong>Contoh Jawaban Ideal:</strong>
                  <p className="whitespace-pre-line pt-1">{q.sampleAnswer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SCORE MODAL */}
      {showScoreModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 md:p-8 max-w-md w-full space-y-6 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowScoreModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-800">
                Hasil Nilai Sementara
              </h3>
              <p className="text-xs text-slate-500">
                Rincian nilai otomatis untuk soal Objektif (Bagian A, B, C, D)
              </p>
            </div>

            <div className="space-y-3 text-xs font-semibold text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex justify-between">
                <span>Soal PG (10 Soal):</span>
                <span className="font-bold">{scores.pgScore} / 40</span>
              </div>
              <div className="flex justify-between">
                <span>Soal PG Kompleks (2 Soal):</span>
                <span className="font-bold">{scores.pgkScore} / 20</span>
              </div>
              <div className="flex justify-between">
                <span>Soal Menjodohkan (2 Soal):</span>
                <span className="font-bold">{scores.matchScore} / 15</span>
              </div>
              <div className="flex justify-between">
                <span>Soal Benar / Salah (2 Soal):</span>
                <span className="font-bold">{scores.bsScore} / 15</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-black text-emerald-700">
                <span>Total Nilai Objektif:</span>
                <span>{scores.totalObjectiveScore} / 90</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 italic text-center">
              * Bagian E (Uraian HOTS/CT) diperiksa secara manual oleh Guru.
            </p>

            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Evaluasi</span>
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
