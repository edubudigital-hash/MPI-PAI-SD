import React, { useState } from 'react';
import { 
  EVALUASI_PG_KELAS1_P3, 
  EVALUASI_PGK_KELAS1_P3, 
  EVALUASI_MENJODOHKAN_KELAS1_P3, 
  ALL_MATCH_OPTIONS_P3, 
  EVALUASI_BENAR_SALAH_KELAS1_P3, 
  EVALUASI_URAIAN_KELAS1_P3 
} from '../../data/kelas1Pembelajaran3Data';
import { soundFX } from '../../utils/audio';
import { 
  FileCheck, 
  Download, 
  Eye, 
  EyeOff, 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  X
} from 'lucide-react';

interface EvaluasiView1_P3Props {
  grade?: number;
  lesson?: number;
}

export const EvaluasiView1_P3: React.FC<EvaluasiView1_P3Props> = ({
  grade = 1,
  lesson = 3,
}) => {
  // USER ANSWERS STATE
  const [pgAnswers, setPgAnswers] = useState<Record<number, number>>({});
  const [pgkAnswers, setPgkAnswers] = useState<Record<number, number[]>>({});
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const [bsAnswers, setBsAnswers] = useState<Record<number, boolean>>({});
  const [uraianAnswers, setUraianAnswers] = useState<Record<number, string>>({});

  // DISPLAY MODAL & KEYS STATE
  const [showAnswerKeys, setShowAnswerKeys] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(0);

  // HANDLE ANSWERS
  const handleSelectPG = (qId: number, optionIdx: number) => {
    soundFX.playClick();
    setPgAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleTogglePGK = (qId: number, optionIdx: number) => {
    soundFX.playClick();
    setPgkAnswers((prev) => {
      const current = prev[qId] || [];
      if (current.includes(optionIdx)) {
        return { ...prev, [qId]: current.filter((idx) => idx !== optionIdx) };
      } else {
        return { ...prev, [qId]: [...current, optionIdx] };
      }
    });
  };

  const handleMatchSelect = (qId: number, val: string) => {
    soundFX.playClick();
    setMatchAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleSelectBS = (qId: number, isTrue: boolean) => {
    soundFX.playClick();
    setBsAnswers((prev) => ({ ...prev, [qId]: isTrue }));
  };

  const handleUraianChange = (qId: number, text: string) => {
    setUraianAnswers((prev) => ({ ...prev, [qId]: text }));
  };

  // CALCULATE SCORE
  const handleCalculateScore = () => {
    soundFX.playClick();
    let totalPoints = 0;

    // 1. PG: 10 soal x 5pt = 50pt
    EVALUASI_PG_KELAS1_P3.forEach((q) => {
      if (pgAnswers[q.id] === q.correctAnswer) {
        totalPoints += 5;
      }
    });

    // 2. PGK: 2 soal x 10pt = 20pt
    EVALUASI_PGK_KELAS1_P3.forEach((q) => {
      const userAns = pgkAnswers[q.id] || [];
      const isPerfect =
        userAns.length === q.correctAnswers.length &&
        userAns.every((val) => q.correctAnswers.includes(val));
      if (isPerfect) {
        totalPoints += 10;
      }
    });

    // 3. Menjodohkan: 2 soal x 5pt = 10pt
    EVALUASI_MENJODOHKAN_KELAS1_P3.forEach((q) => {
      if (matchAnswers[q.id] === q.matchOption) {
        totalPoints += 5;
      }
    });

    // 4. Benar/Salah: 2 soal x 5pt = 10pt
    EVALUASI_BENAR_SALAH_KELAS1_P3.forEach((q) => {
      if (bsAnswers[q.id] === q.isCorrect) {
        totalPoints += 5;
      }
    });

    // 5. Uraian: 4 soal x 2.5pt (jika diisi) = 10pt
    EVALUASI_URAIAN_KELAS1_P3.forEach((q) => {
      if (uraianAnswers[q.id] && uraianAnswers[q.id].trim().length > 3) {
        totalPoints += 2.5;
      }
    });

    setCalculatedScore(Math.min(100, Math.round(totalPoints)));
    setShowScoreModal(true);
  };

  // DOWNLOAD PDF
  const handleDownloadPDF = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Evaluasi Pembelajaran PAI Kelas ${grade} Pembelajaran ${lesson}</title>
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
              border-bottom: 2px solid #047857;
              padding-bottom: 10px;
              margin-bottom: 20px;
            }
            .header h1 {
              margin: 0;
              font-size: 18px;
              color: #047857;
              text-transform: uppercase;
            }
            .header p {
              margin: 4px 0 0 0;
              font-size: 11px;
              color: #64748b;
            }
            .student-info {
              display: flex;
              justify-content: space-between;
              font-size: 12px;
              margin-bottom: 15px;
              border: 1px solid #cbd5e1;
              padding: 10px;
              border-radius: 6px;
            }
            .section-title {
              font-size: 13px;
              font-weight: bold;
              background-color: #f0fdf4;
              color: #047857;
              padding: 6px 10px;
              border-radius: 4px;
              border-left: 4px solid #059669;
              margin-top: 15px;
              margin-bottom: 10px;
            }
            .question-item {
              margin-bottom: 12px;
              page-break-inside: avoid;
              font-size: 12px;
            }
            .q-num {
              font-weight: bold;
              color: #0f172a;
            }
            .options {
              margin-top: 4px;
              padding-left: 15px;
            }
            .key-box {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              padding: 8px;
              border-radius: 4px;
              font-size: 11px;
              color: #047857;
              margin-top: 4px;
            }
            .footer {
              text-align: center;
              font-size: 10px;
              color: #94a3b8;
              margin-top: 25px;
              border-top: 1px solid #e2e8f0;
              padding-top: 8px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Evaluasi Pembelajaran PAI & Budi Pekerti SD</h1>
            <p>Kelas ${grade} • Pembelajaran ${lesson}: Subḥānallāh dan Māsyā Allāh</p>
          </div>

          <div class="student-info">
            <div><strong>Nama Siswa:</strong> .....................................</div>
            <div><strong>Kelas / No:</strong> I / .......</div>
            <div><strong>Tanggal:</strong> .........................</div>
          </div>

          <!-- A. PILIHAN GANDA -->
          <div class="section-title">Bagian A: Pilihan Ganda (10 Soal)</div>
          ${EVALUASI_PG_KELAS1_P3.map(
            (q, idx) => `
            <div class="question-item">
              <div class="q-num">${idx + 1}. ${q.question}</div>
              <div class="options">
                ${q.options.map((opt) => `<div>${opt}</div>`).join('')}
              </div>
              ${
                showAnswerKeys
                  ? `<div class="key-box"><strong>Kunci Jawaban:</strong> ${q.options[q.correctAnswer]} | <em>${q.explanation}</em></div>`
                  : ''
              }
            </div>
          `
          ).join('')}

          <!-- B. PILIHAN GANDA KOMPLEKS -->
          <div class="section-title">Bagian B: Pilihan Ganda Kompleks (2 Soal)</div>
          ${EVALUASI_PGK_KELAS1_P3.map(
            (q, idx) => `
            <div class="question-item">
              <div class="q-num">${idx + 1}. ${q.question}</div>
              <div class="options">
                ${q.options.map((opt) => `<div>[   ] ${opt}</div>`).join('')}
              </div>
              ${
                showAnswerKeys
                  ? `<div class="key-box"><strong>Kunci Jawaban:</strong> Opsi (${q.correctAnswers.map((ca) => q.options[ca]).join(' & ')}) | <em>${q.explanation}</em></div>`
                  : ''
              }
            </div>
          `
          ).join('')}

          <!-- C. MENJODOHKAN -->
          <div class="section-title">Bagian C: Menjodohkan (2 Soal)</div>
          ${EVALUASI_MENJODOHKAN_KELAS1_P3.map(
            (q, idx) => `
            <div class="question-item">
              <div class="q-num">${idx + 1}. Pernyataan: "${q.statement}"</div>
              <div>Pasangan yang tepat: ( ........................................... )</div>
              ${
                showAnswerKeys
                  ? `<div class="key-box"><strong>Kunci Jawaban:</strong> ${q.matchOption}</div>`
                  : ''
              }
            </div>
          `
          ).join('')}

          <!-- D. BENAR / SALAH -->
          <div class="section-title">Bagian D: Benar atau Salah (2 Soal)</div>
          ${EVALUASI_BENAR_SALAH_KELAS1_P3.map(
            (q, idx) => `
            <div class="question-item">
              <div class="q-num">${idx + 1}. Pernyataan: "${q.statement}"</div>
              <div>Pilihan: [   ] Benar    [   ] Salah</div>
              ${
                showAnswerKeys
                  ? `<div class="key-box"><strong>Kunci Jawaban:</strong> ${q.isCorrect ? 'BENAR' : 'SALAH'} | <em>${q.sampleReason}</em></div>`
                  : ''
              }
            </div>
          `
          ).join('')}

          <!-- E. URAIAN -->
          <div class="section-title">Bagian E: Uraian HOTS (4 Soal)</div>
          ${EVALUASI_URAIAN_KELAS1_P3.map(
            (q, idx) => `
            <div class="question-item">
              <div class="q-num">${idx + 1}. ${q.question}</div>
              <div style="min-height: 40px; border-bottom: 1px dotted #cbd5e1; margin-top: 5px;">Jawab: </div>
              ${
                showAnswerKeys
                  ? `<div class="key-box"><strong>Contoh Jawaban:</strong> ${q.sampleAnswer}</div>`
                  : ''
              }
            </div>
          `
          ).join('')}

          <div class="footer">
            <p>Lembar Evaluasi PAI SD Kelas ${grade} - Pembelajaran ${lesson} | Dicetak Otomatis</p>
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
    <div className="space-y-6">
      {/* HEADER CONTROL BAR */}
      <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
            <FileCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
              Evaluasi Pembelajaran PAI Kelas 1 P3
            </span>
            <h3 className="text-xl font-black text-slate-800 mt-1">
              Lembar Evaluasi Subḥānallāh & Māsyā Allāh
            </h3>
            <p className="text-xs text-slate-500">
              10 Pilihan Ganda • 2 PG Kompleks • 2 Menjodohkan • 2 Benar/Salah • 4 Uraian HOTS
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKeys(!showAnswerKeys);
            }}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition border ${
              showAnswerKeys
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
            }`}
          >
            {showAnswerKeys ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showAnswerKeys ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            onClick={handleCalculateScore}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-amber-950 font-extrabold rounded-xl text-xs transition shadow-sm active:scale-95"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Soal PDF</span>
          </button>
        </div>
      </div>

      {/* SOAL CONTAINER */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 md:p-8 space-y-8">
        {/* BAGIAN A: PG */}
        <div className="space-y-6">
          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
            <h4 className="text-sm font-black text-emerald-900 uppercase tracking-wider">
              Bagian A: Pilihan Ganda (10 Soal)
            </h4>
            <p className="text-xs text-emerald-700">Pilihlah salah satu jawaban A, B, atau C yang paling benar!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EVALUASI_PG_KELAS1_P3.map((q, idx) => (
              <div key={q.id} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200 space-y-3">
                <div className="font-extrabold text-sm text-slate-800 leading-relaxed">
                  {idx + 1}. {q.question}
                </div>

                <div className="space-y-1.5">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = pgAnswers[q.id] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectPG(q.id, optIdx)}
                        className={`w-full p-2.5 text-left rounded-xl text-xs font-medium border transition ${
                          isSelected
                            ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-emerald-50'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {showAnswerKeys && (
                  <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-0.5">
                    <span className="font-bold">Kunci Jawaban: {q.options[q.correctAnswer]}</span>
                    <p className="text-[11px] text-amber-800">{q.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BAGIAN B: PGK */}
        <div className="space-y-6 pt-4 border-t">
          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
            <h4 className="text-sm font-black text-amber-900 uppercase tracking-wider">
              Bagian B: Pilihan Ganda Kompleks (2 Soal)
            </h4>
            <p className="text-xs text-amber-800">Pilihlah DUA jawaban yang tepat!</p>
          </div>

          <div className="space-y-6">
            {EVALUASI_PGK_KELAS1_P3.map((q, idx) => (
              <div key={q.id} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200 space-y-3">
                <div className="font-extrabold text-sm text-slate-800">{idx + 1}. {q.question}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {q.options.map((opt, optIdx) => {
                    const selectedList = pgkAnswers[q.id] || [];
                    const isSelected = selectedList.includes(optIdx);

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleTogglePGK(q.id, optIdx)}
                        className={`p-3 text-left rounded-xl text-xs font-medium border transition ${
                          isSelected
                            ? 'bg-amber-500 text-amber-950 font-bold border-amber-500'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-amber-50'
                        }`}
                      >
                        {isSelected ? '☑ ' : '☐ '} {opt}
                      </button>
                    );
                  })}
                </div>

                {showAnswerKeys && (
                  <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                    <span className="font-bold">Kunci:</span> {q.correctAnswers.map((ca) => q.options[ca]).join(' & ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BAGIAN C: MENJODOHKAN */}
        <div className="space-y-6 pt-4 border-t">
          <div className="p-3 bg-teal-50 rounded-2xl border border-teal-200">
            <h4 className="text-sm font-black text-teal-900 uppercase tracking-wider">
              Bagian C: Menjodohkan (2 Soal)
            </h4>
            <p className="text-xs text-teal-800">Pilihlah kalimat tayyibah yang pas dengan artinya!</p>
          </div>

          <div className="space-y-4">
            {EVALUASI_MENJODOHKAN_KELAS1_P3.map((q, idx) => (
              <div key={q.id} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="font-bold text-sm text-slate-800 flex-1">
                  {idx + 1}. Pernyataan: "{q.statement}"
                </div>

                <div className="w-full md:w-64">
                  <select
                    value={matchAnswers[q.id] || ''}
                    onChange={(e) => handleMatchSelect(q.id, e.target.value)}
                    className="w-full p-2.5 text-xs bg-white border border-slate-300 rounded-xl font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">-- Pilih Jawaban --</option>
                    {ALL_MATCH_OPTIONS_P3.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {showAnswerKeys && (
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                    Kunci: {q.matchOption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BAGIAN D: BENAR / SALAH */}
        <div className="space-y-6 pt-4 border-t">
          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
            <h4 className="text-sm font-black text-emerald-900 uppercase tracking-wider">
              Bagian D: Memilih Benar atau Salah (2 Soal)
            </h4>
            <p className="text-xs text-emerald-700">Tentukan apakah pernyataan berikut Benar atau Salah!</p>
          </div>

          <div className="space-y-4">
            {EVALUASI_BENAR_SALAH_KELAS1_P3.map((q, idx) => (
              <div key={q.id} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200 space-y-3">
                <div className="font-bold text-sm text-slate-800">{idx + 1}. "{q.statement}"</div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleSelectBS(q.id, true)}
                    className={`px-5 py-2 rounded-xl text-xs font-black border transition ${
                      bsAnswers[q.id] === true
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-emerald-50'
                    }`}
                  >
                    BENAR
                  </button>

                  <button
                    onClick={() => handleSelectBS(q.id, false)}
                    className={`px-5 py-2 rounded-xl text-xs font-black border transition ${
                      bsAnswers[q.id] === false
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-rose-50'
                    }`}
                  >
                    SALAH
                  </button>
                </div>

                {showAnswerKeys && (
                  <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                    <span className="font-bold">Kunci:</span> {q.isCorrect ? 'BENAR' : 'SALAH'} — <em>{q.sampleReason}</em>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BAGIAN E: URAIAN */}
        <div className="space-y-6 pt-4 border-t">
          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
            <h4 className="text-sm font-black text-amber-900 uppercase tracking-wider">
              Bagian E: Soal Uraian HOTS & CT (4 Soal)
            </h4>
            <p className="text-xs text-amber-800">Tuliskan jawaban kamu dengan jelas dan lengkap!</p>
          </div>

          <div className="space-y-6">
            {EVALUASI_URAIAN_KELAS1_P3.map((q, idx) => (
              <div key={q.id} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200 space-y-3">
                <div className="font-extrabold text-sm text-slate-800">{idx + 1}. {q.question}</div>
                <textarea
                  rows={3}
                  placeholder="Ketik jawabanmu di sini..."
                  value={uraianAnswers[q.id] || ''}
                  onChange={(e) => handleUraianChange(q.id, e.target.value)}
                  className="w-full p-3 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />

                {showAnswerKeys && (
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                    <span className="font-bold">Contoh Jawaban Ideal:</span>
                    <p className="whitespace-pre-line">{q.sampleAnswer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCORE MODAL */}
      {showScoreModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 md:p-8 max-w-sm w-full text-center space-y-5 animate-in fade-in zoom-in duration-200 relative">
            <button
              onClick={() => setShowScoreModal(false)}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-full absolute top-4 right-4"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-black">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-800">Hasil Evaluasi Pembelajaran</h3>
              <p className="text-xs text-slate-500">Skor otomatis berdasarkan jawaban kamu</p>
            </div>

            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
              <span className="text-xs font-bold text-emerald-800 uppercase">Skor Kamu</span>
              <div className="text-4xl font-black text-emerald-600">{calculatedScore} / 100</div>
            </div>

            <p className="text-xs text-slate-600 italic">
              {calculatedScore >= 80
                ? 'Māsyā Allāh! Nilai kamu sangat istimewa! Pertahankan prestasimu ya!'
                : 'Bagus! Tetap semangat belajar dan ulang kembali materi jika ada yang kurang paham!'}
            </p>

            <button
              onClick={() => setShowScoreModal(false)}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition shadow-md"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
