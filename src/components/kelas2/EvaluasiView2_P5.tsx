import React, { useState } from 'react';
import { 
  EVALUASI_PG_KELAS2_P5, 
  EVALUASI_PGK_KELAS2_P5, 
  EVALUASI_MENJODOHKAN_KELAS2_P5, 
  ALL_MATCH_OPTIONS_P5,
  EVALUASI_BENAR_SALAH_KELAS2_P5, 
  EVALUASI_URAIAN_KELAS2_P5 
} from '../../data/kelas2Pembelajaran5Data';
import { soundFX } from '../../utils/audio';
import { 
  ClipboardCheck, 
  Eye, 
  EyeOff, 
  Trophy, 
  Download, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw,
  Sparkles,
  Award
} from 'lucide-react';

interface EvaluasiView2_P5Props {
  grade?: number;
  lesson?: number;
}

export const EvaluasiView2_P5: React.FC<EvaluasiView2_P5Props> = ({
  grade = 2,
  lesson = 5,
}) => {
  // USER ANSWERS STATE
  const [userPG, setUserPG] = useState<Record<number, number>>({});
  const [userPGK, setUserPGK] = useState<Record<number, number[]>>({});
  const [userMatch, setUserMatch] = useState<Record<number, string>>({});
  const [userBSChoice, setUserBSChoice] = useState<Record<number, boolean>>({});
  const [userBSReason, setUserBSReason] = useState<Record<number, string>>({});
  const [userUraian, setUserUraian] = useState<Record<number, string>>({});

  // UI CONTROL STATE
  const [showKey, setShowKey] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(0);

  // PG HANDLER
  const handleSelectPG = (qId: number, optionIdx: number) => {
    soundFX.playClick();
    setUserPG((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  // PGK HANDLER
  const handleTogglePGK = (qId: number, optionIdx: number) => {
    soundFX.playClick();
    setUserPGK((prev) => {
      const current = prev[qId] || [];
      if (current.includes(optionIdx)) {
        return { ...prev, [qId]: current.filter((idx) => idx !== optionIdx) };
      } else {
        return { ...prev, [qId]: [...current, optionIdx] };
      }
    });
  };

  // MATCHING HANDLER
  const handleSelectMatch = (qId: number, val: string) => {
    soundFX.playClick();
    setUserMatch((prev) => ({ ...prev, [qId]: val }));
  };

  // BENAR SALAH HANDLER
  const handleSelectBS = (qId: number, choice: boolean) => {
    soundFX.playClick();
    setUserBSChoice((prev) => ({ ...prev, [qId]: choice }));
  };

  // CALCULATE SCORE
  const handleCalculateScore = () => {
    soundFX.playClick();
    let totalPoints = 0;
    const maxPoints = 100;

    // PG: 10 soal x 4 poynt = 40
    EVALUASI_PG_KELAS2_P5.forEach((q) => {
      if (userPG[q.id] === q.correctAnswer) {
        totalPoints += 4;
      }
    });

    // PGK: 3 soal x 5 point = 15
    EVALUASI_PGK_KELAS2_P5.forEach((q) => {
      const userAns = userPGK[q.id] || [];
      const isMatch =
        userAns.length === q.correctAnswers.length &&
        q.correctAnswers.every((val) => userAns.includes(val));
      if (isMatch) totalPoints += 5;
    });

    // Menjodohkan: 3 soal x 5 point = 15
    EVALUASI_MENJODOHKAN_KELAS2_P5.forEach((q) => {
      if (userMatch[q.id] === q.matchOption) {
        totalPoints += 5;
      }
    });

    // Benar Salah: 4 soal x 2.5 point = 10
    EVALUASI_BENAR_SALAH_KELAS2_P5.forEach((q) => {
      if (userBSChoice[q.id] === q.isCorrect) {
        totalPoints += 2.5;
      }
    });

    // Uraian: 5 soal x 4 point = 20 (Self assessment check if answered)
    EVALUASI_URAIAN_KELAS2_P5.forEach((q) => {
      if (userUraian[q.id] && userUraian[q.id].trim().length > 3) {
        totalPoints += 4;
      }
    });

    setCalculatedScore(Math.round(totalPoints));
    setShowScoreModal(true);
  };

  // DOWNLOAD EVALUASI PDF
  const handleDownloadPDF = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Soal Evaluasi PAI SD Kelas ${grade} - Pembelajaran ${lesson}</title>
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
            .section-title {
              font-size: 14px;
              font-weight: bold;
              color: #047857;
              background-color: #ecfdf5;
              padding: 6px 12px;
              border-left: 4px solid #10b981;
              margin-top: 15px;
              margin-bottom: 12px;
            }
            .question-box {
              margin-bottom: 12px;
              page-break-inside: avoid;
            }
            .q-text {
              font-size: 12px;
              font-weight: bold;
              color: #0f172a;
              margin-bottom: 4px;
            }
            .options {
              font-size: 11px;
              color: #334155;
              margin-left: 15px;
            }
            .reason-box {
              border: 1px dashed #cbd5e1;
              height: 40px;
              border-radius: 4px;
              margin-top: 4px;
            }
            .essay-box {
              border: 1px solid #cbd5e1;
              height: 60px;
              border-radius: 4px;
              margin-top: 4px;
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
            <h1>Lembar Evaluasi Pembelajaran PAI & Budi Pekerti</h1>
            <p>Kelas ${grade} • Pembelajaran ${lesson}: Kisah Nabi Nuh a.s. dan Keteladanannya</p>
          </div>

          <!-- BAGIAN A: PG -->
          <div class="section-title">A. Pilihan Ganda (10 Soal)</div>
          ${EVALUASI_PG_KELAS2_P5.map(
            (q) => `
            <div class="question-box">
              <div class="q-text">${q.id}. ${q.question}</div>
              <div class="options">
                ${q.options.map((opt) => `<div>${opt}</div>`).join('')}
              </div>
            </div>
          `
          ).join('')}

          <!-- BAGIAN B: PGK -->
          <div class="section-title">B. Pilihan Ganda Kompleks (3 Soal)</div>
          ${EVALUASI_PGK_KELAS2_P5.map(
            (q) => `
            <div class="question-box">
              <div class="q-text">${q.id}. ${q.question}</div>
              <div class="options">
                ${q.options.map((opt) => `<div>[  ] ${opt}</div>`).join('')}
              </div>
            </div>
          `
          ).join('')}

          <!-- BAGIAN C: MENJODOHKAN -->
          <div class="section-title">C. Menjodohkan (3 Soal)</div>
          ${EVALUASI_MENJODOHKAN_KELAS2_P5.map(
            (q) => `
            <div class="question-box">
              <div class="q-text">${q.id}. ${q.statement}</div>
              <div style="font-size: 11px; color: #475569; margin-left: 15px;">
                Jawaban: _____________________________________
              </div>
            </div>
          `
          ).join('')}

          <!-- BAGIAN D: BENAR / SALAH + ALASAN -->
          <div class="section-title">D. Memilih Benar / Salah & Alasan (4 Soal)</div>
          ${EVALUASI_BENAR_SALAH_KELAS2_P5.map(
            (q) => `
            <div class="question-box">
              <div class="q-text">${q.id}. Pernyataan: "${q.statement}"</div>
              <div style="font-size: 11px; margin-left: 15px;">
                Pilihan: [  ] BENAR   [  ] SALAH
                <div style="margin-top: 4px; font-weight: bold; color: #475569;">Alasan Kamu:</div>
                <div class="reason-box"></div>
              </div>
            </div>
          `
          ).join('')}

          <!-- BAGIAN E: URAIAN (HOTS) -->
          <div class="section-title">E. Soal Uraian (5 Soal - HOTS & CT)</div>
          ${EVALUASI_URAIAN_KELAS2_P5.map(
            (q) => `
            <div class="question-box">
              <div class="q-text">${q.id}. ${q.question}</div>
              <div class="essay-box"></div>
            </div>
          `
          ).join('')}

          <div class="footer">
            <p>Lembar Evaluasi PAI SD Kelas ${grade} Pembelajaran ${lesson} | Hak Cipta Dilindungi</p>
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
      {/* HEADER CONTROL BAR */}
      <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
            <ClipboardCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
              Evaluasi HOTS & Computational Thinking
            </span>
            <h3 className="text-xl font-black text-slate-800 mt-1">
              Evaluasi Pembelajaran Bab V
            </h3>
            <p className="text-xs text-slate-500">
              Uji pemahamanmu mengenai kisah dan keteladan Nabi Nuh a.s.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => {
              soundFX.playClick();
              setShowKey(!showKey);
            }}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-xs ${
              showKey
                ? 'bg-amber-500 text-white hover:bg-amber-600'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            onClick={handleCalculateScore}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-md active:scale-95"
          >
            <Trophy className="w-4 h-4" />
            <span>Lihat Skor Saya</span>
          </button>

          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition shadow-md active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Evaluasi PDF</span>
          </button>
        </div>
      </div>

      {/* A. PILIHAN GANDA (10 SOAL) */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h4 className="text-base font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-black">
              A
            </span>
            <span>Soal Pilihan Ganda (10 Soal)</span>
          </h4>
          <span className="text-xs font-bold text-slate-400">Pilih 1 Jawaban Tepat</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_PG_KELAS2_P5.map((q) => (
            <div key={q.id} className="p-4 md:p-5 bg-slate-50/70 rounded-2xl border border-slate-200/60 space-y-3">
              <h5 className="text-xs md:text-sm font-bold text-slate-800">
                {q.id}. {q.question}
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = userPG[q.id] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectPG(q.id, optIdx)}
                      className={`p-3 text-left rounded-xl text-xs font-medium border transition ${
                        isSelected
                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showKey && (
                <div className="p-3 bg-amber-50 rounded-xl text-xs text-amber-900 border border-amber-200">
                  <span className="font-extrabold text-amber-950">Kunci Jawaban:</span> {q.options[q.correctAnswer]}
                  <p className="mt-1 text-amber-800">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* B. PILIHAN GANDA KOMPLEKS (3 SOAL) */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h4 className="text-base font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-black">
              B
            </span>
            <span>Soal Pilihan Ganda Kompleks (3 Soal)</span>
          </h4>
          <span className="text-xs font-bold text-slate-400">Pilih Lebih Dari 1 Jawaban Benar</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_PGK_KELAS2_P5.map((q) => {
            const selectedAns = userPGK[q.id] || [];
            return (
              <div key={q.id} className="p-4 md:p-5 bg-slate-50/70 rounded-2xl border border-slate-200/60 space-y-3">
                <h5 className="text-xs md:text-sm font-bold text-slate-800">
                  {q.id}. {q.question}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, optIdx) => {
                    const isChecked = selectedAns.includes(optIdx);
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleTogglePGK(q.id, optIdx)}
                        className={`p-3 text-left rounded-xl text-xs font-medium border transition flex items-center justify-between ${
                          isChecked
                            ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <span>{opt}</span>
                        <span className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] font-bold ${
                          isChecked ? 'bg-white text-amber-800 border-white' : 'border-slate-300'
                        }`}>
                          {isChecked ? '✓' : ''}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {showKey && (
                  <div className="p-3 bg-amber-50 rounded-xl text-xs text-amber-900 border border-amber-200">
                    <span className="font-extrabold text-amber-950">Kunci Jawaban:</span>{' '}
                    {q.correctAnswers.map((idx) => q.options[idx]).join(' DAN ')}
                    <p className="mt-1 text-amber-800">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* C. MENJODOHKAN (3 SOAL) */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h4 className="text-base font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-xl bg-teal-100 text-teal-800 text-xs flex items-center justify-center font-black">
              C
            </span>
            <span>Soal Menjodohkan (3 Soal)</span>
          </h4>
          <span className="text-xs font-bold text-slate-400">Pasangkan Pernyataan Dengan Istilah Tepat</span>
        </div>

        <div className="space-y-4">
          {EVALUASI_MENJODOHKAN_KELAS2_P5.map((q) => (
            <div key={q.id} className="p-4 bg-slate-50/70 rounded-2xl border border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="text-xs md:text-sm font-semibold text-slate-800 max-w-lg">
                {q.id}. {q.statement}
              </div>
              <select
                value={userMatch[q.id] || ''}
                onChange={(e) => handleSelectMatch(q.id, e.target.value)}
                className="p-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 font-bold text-emerald-800"
              >
                <option value="">-- Pilih Pasangan --</option>
                {ALL_MATCH_OPTIONS_P5.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              {showKey && (
                <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  Kunci: {q.matchOption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* D. BENAR ATAU SALAH + ALASAN (4 SOAL) */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h4 className="text-base font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-xl bg-sky-100 text-sky-800 text-xs flex items-center justify-center font-black">
              D
            </span>
            <span>Soal Memilih Benar / Salah & Isian Alasan (4 Soal)</span>
          </h4>
          <span className="text-xs font-bold text-slate-400">Pilih Benar/Salah dan Tulis Alasanmu</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_BENAR_SALAH_KELAS2_P5.map((q) => (
            <div key={q.id} className="p-4 md:p-5 bg-slate-50/70 rounded-2xl border border-slate-200/60 space-y-3">
              <h5 className="text-xs md:text-sm font-bold text-slate-800">
                {q.id}. Pernyataan: "{q.statement}"
              </h5>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleSelectBS(q.id, true)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold border transition ${
                    userBSChoice[q.id] === true
                      ? 'bg-emerald-600 text-white border-emerald-700'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  ✓ BENAR
                </button>
                <button
                  onClick={() => handleSelectBS(q.id, false)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold border transition ${
                    userBSChoice[q.id] === false
                      ? 'bg-rose-600 text-white border-rose-700'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  ✗ SALAH
                </button>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-600">Alasan Kamu:</label>
                <input
                  type="text"
                  placeholder="Tuliskan alasan singkat pilihanmu..."
                  value={userBSReason[q.id] || ''}
                  onChange={(e) => setUserBSReason({ ...userBSReason, [q.id]: e.target.value })}
                  className="w-full p-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {showKey && (
                <div className="p-3 bg-amber-50 rounded-xl text-xs text-amber-900 border border-amber-200 space-y-1">
                  <div>
                    <span className="font-extrabold text-amber-950">Jawaban Kunci:</span>{' '}
                    <strong className="uppercase">{q.isCorrect ? 'BENAR' : 'SALAH'}</strong>
                  </div>
                  <p className="text-amber-800">Contoh Alasan: {q.sampleReason}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* E. SOAL URAIAN (5 SOAL - HOTS & CT) */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h4 className="text-base font-black text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-800 text-xs flex items-center justify-center font-black">
              E
            </span>
            <span>Soal Uraian (5 Soal - HOTS & Computational Thinking)</span>
          </h4>
          <span className="text-xs font-bold text-slate-400">Jawab Dengan Kalimatmu Sendiri</span>
        </div>

        <div className="space-y-6">
          {EVALUASI_URAIAN_KELAS2_P5.map((q) => (
            <div key={q.id} className="p-4 md:p-5 bg-slate-50/70 rounded-2xl border border-slate-200/60 space-y-3">
              <h5 className="text-xs md:text-sm font-bold text-slate-800 whitespace-pre-line leading-relaxed">
                {q.id}. {q.question}
              </h5>

              <textarea
                rows={3}
                placeholder="Ketikkan jawaban lengkapmu di sini..."
                value={userUraian[q.id] || ''}
                onChange={(e) => setUserUraian({ ...userUraian, [q.id]: e.target.value })}
                className="w-full p-3 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
              />

              {showKey && (
                <div className="p-3 bg-amber-50 rounded-xl text-xs text-amber-900 border border-amber-200 space-y-1">
                  <span className="font-extrabold text-amber-950">Contoh Jawaban Ideal:</span>
                  <p className="text-amber-800 whitespace-pre-line">{q.sampleAnswer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL LIHAT SKOR */}
      {showScoreModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 space-y-6 text-center border border-emerald-100 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-lg border-2 border-amber-300">
              <Trophy className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black uppercase px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                Hasil Evaluasi Murid
              </span>
              <h3 className="text-2xl font-black text-slate-800">
                Skor Evaluasi Kamu
              </h3>
              <div className="text-5xl font-black text-emerald-600 my-2">
                {calculatedScore} <span className="text-sm font-bold text-slate-400">/ 100</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                {calculatedScore >= 80
                  ? 'Luar biasa! Kamu sangat meneladani sifat mulia Nabi Nuh a.s.!'
                  : calculatedScore >= 60
                  ? 'Bagus sekali! Tingkatkan terus membaca materi dan berlatih ya.'
                  : 'Tetap semangat! Yuk baca kembali slide materi dan coba lagi.'}
              </p>
            </div>

            <button
              onClick={() => setShowScoreModal(false)}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-md"
            >
              Tutup & Review Jawaban
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
