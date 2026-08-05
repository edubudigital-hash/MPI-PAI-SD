import React, { useState } from 'react';
import { 
  KELAS5_P4_PG, 
  KELAS5_P4_PGK, 
  KELAS5_P4_MATCHING, 
  KELAS5_P4_BS, 
  KELAS5_P4_ESSAY 
} from '../../data/kelas5Pembelajaran4Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { 
  ClipboardCheck, 
  Download, 
  Key, 
  Award, 
  RefreshCw, 
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle
} from 'lucide-react';

interface Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView5_P4: React.FC<Props> = ({ grade, lesson }) => {
  const dataPG = KELAS5_P4_PG;
  const dataPGK = KELAS5_P4_PGK;
  const dataMatching = KELAS5_P4_MATCHING;
  const dataBS = KELAS5_P4_BS;
  const dataEssay = KELAS5_P4_ESSAY;

  // State
  const [userPG, setUserPG] = useState<{ [qId: number]: number }>({});
  const [userPGK, setUserPGK] = useState<{ [qId: number]: number[] }>({});
  const [userMatching, setUserMatching] = useState<{ [qId: number]: string }>({});
  const [userBS, setUserBS] = useState<{ [qId: number]: boolean }>({});
  const [userBSReason, setUserBSReason] = useState<{ [qId: number]: string }>({});
  const [userEssay, setUserEssay] = useState<{ [qId: number]: string }>({});

  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);
  const [showScoreModal, setShowScoreModal] = useState<boolean>(false);
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);

  const handleTogglePGKOption = (qId: number, optionIdx: number) => {
    setUserPGK((prev) => {
      const currentArr = prev[qId] || [];
      if (currentArr.includes(optionIdx)) {
        return { ...prev, [qId]: currentArr.filter((i) => i !== optionIdx) };
      } else {
        return { ...prev, [qId]: [...currentArr, optionIdx].sort() };
      }
    });
  };

  const handleCalculateScore = () => {
    let totalScore = 0;

    // PG: 10 soal @ 3 poin = 30 poin
    dataPG.forEach((q) => {
      if (userPG[q.id] === q.correctAnswer) {
        totalScore += 3;
      }
    });

    // PGK: 10 soal @ 3 poin = 30 poin
    dataPGK.forEach((q) => {
      const userSelected = userPGK[q.id] || [];
      const correctArr = q.correctAnswers;
      if (
        userSelected.length === correctArr.length &&
        userSelected.every((val, index) => val === correctArr[index])
      ) {
        totalScore += 3;
      }
    });

    // Matching: 5 soal @ 2 poin = 10 poin
    dataMatching.forEach((q) => {
      if (userMatching[q.id] === q.answer) {
        totalScore += 2;
      }
    });

    // B/S: 10 soal @ 1.5 poin = 15 poin
    dataBS.forEach((q) => {
      const bsAns = userBS[q.id];
      const reason = userBSReason[q.id] || '';
      if (bsAns === q.isTrue && reason.trim().length > 3) {
        totalScore += 1.5;
      }
    });

    // Essay: 5 soal @ 3 poin = 15 poin (jika diisi)
    dataEssay.forEach((q) => {
      const essayText = userEssay[q.id] || '';
      if (essayText.trim().length > 10) {
        totalScore += 3;
      }
    });

    setCalculatedScore(Math.round(totalScore));
    setShowScoreModal(true);
  };

  const handleResetForm = () => {
    setUserPG({});
    setUserPGK({});
    setUserMatching({});
    setUserBS({});
    setUserBSReason({});
    setUserEssay({});
    setShowScoreModal(false);
    setCalculatedScore(null);
  };

  const handleDownload = () => {
    let bodyHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.5;">
        <h1 style="text-align: center; color: #0d9488; margin-bottom: 2px; font-size: 16pt;">LEMBAR EVALUASI PEMBELAJARAN PAI</h1>
        <h2 style="text-align: center; color: #334155; margin-top: 0; font-size: 13pt; font-weight: normal;">
          KELAS ${grade} PEMBELAJARAN ${lesson}: PUASA WAJIB DAN SUNAH, SERTA HIKMAHNYA
        </h2>
        <div style="border: 1px solid #cbd5e1; padding: 10px 16px; border-radius: 6px; margin: 16px 0; background-color: #f8fafc; font-size: 9.5pt;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="width: 50%;"><strong>Nama Murid:</strong> ........................................</td>
              <td style="width: 50%;"><strong>Kelas / No. Absen:</strong> 5 / ......</td>
            </tr>
            <tr>
              <td style="width: 50%; padding-top: 4px;"><strong>Hari / Tanggal:</strong> ........................................</td>
              <td style="width: 50%; padding-top: 4px;"><strong>Skor / Nilai:</strong> .......... / 100</td>
            </tr>
          </table>
        </div>
        <hr style="border: none; border-top: 2px solid #0d9488; margin-bottom: 16px;" />
    `;

    // Bagian A: PG (10 Soal)
    bodyHtml += `
      <h3 style="color: #0f766e; font-size: 11pt; border-bottom: 1px solid #0f766e; padding-bottom: 4px; margin-top: 16px;">
        BAGIAN A: PILIHAN GANDA (10 SOAL)
      </h3>
      <p style="font-size: 9pt; color: #475569; font-style: italic; margin-bottom: 12px;">Pilihlah satu jawaban yang paling tepat dengan memberikan tanda silang (X) pada opsi A, B, C, atau D!</p>
    `;

    dataPG.forEach((q, idx) => {
      bodyHtml += `
        <div style="margin-bottom: 10px; page-break-inside: avoid; font-size: 9.5pt;">
          <p style="margin: 0 0 4px 0; font-weight: bold; color: #0f172a;">${idx + 1}. ${q.question}</p>
          <div style="padding-left: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
            ${q.options.map((opt, oIdx) => `
              <div>${String.fromCharCode(65 + oIdx)}. ${opt}</div>
            `).join('')}
          </div>
        </div>
      `;
    });

    // Bagian B: PGK (10 Soal)
    bodyHtml += `
      <h3 style="color: #0f766e; font-size: 11pt; border-bottom: 1px solid #0f766e; padding-bottom: 4px; margin-top: 20px; page-break-before: auto;">
        BAGIAN B: PILIHAN GANDA KOMPLEKS (10 SOAL)
      </h3>
      <p style="font-size: 9pt; color: #475569; font-style: italic; margin-bottom: 12px;">Pilihlah LEBIH DARI SATU jawaban yang benar dengan memberi tanda centang (✓)!</p>
    `;

    dataPGK.forEach((q, idx) => {
      bodyHtml += `
        <div style="margin-bottom: 10px; page-break-inside: avoid; font-size: 9.5pt;">
          <p style="margin: 0 0 4px 0; font-weight: bold; color: #0f172a;">${idx + 1}. ${q.question}</p>
          <div style="padding-left: 16px;">
            ${q.options.map((opt, oIdx) => `
              <div style="margin-bottom: 2px;">[ &nbsp; ] ${String.fromCharCode(65 + oIdx)}. ${opt}</div>
            `).join('')}
          </div>
        </div>
      `;
    });

    // Bagian C: Menjodohkan (5 Soal)
    bodyHtml += `
      <h3 style="color: #0f766e; font-size: 11pt; border-bottom: 1px solid #0f766e; padding-bottom: 4px; margin-top: 20px;">
        BAGIAN C: MENJODOHKAN (5 SOAL)
      </h3>
      <p style="font-size: 9pt; color: #475569; font-style: italic; margin-bottom: 12px;">Pasangkanlah pernyataan di sebelah kiri dengan jawaban yang tepat di sebelah kanan!</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 9.5pt;" border="1" cellpadding="6">
        <thead>
          <tr style="background-color: #f1f5f9; color: #0f766e;">
            <th style="width: 50%; text-align: left;">Pernyataan / Soal</th>
            <th style="width: 50%; text-align: left;">Pilihan Pasangan Jawaban</th>
          </tr>
        </thead>
        <tbody>
          ${dataMatching.map((m, idx) => `
            <tr>
              <td><strong>${idx + 1}.</strong> ${m.premise}</td>
              <td>[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ] ${m.answer}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    // Bagian D: Benar/Salah + Alasan (10 Soal)
    bodyHtml += `
      <h3 style="color: #0f766e; font-size: 11pt; border-bottom: 1px solid #0f766e; padding-bottom: 4px; margin-top: 20px;">
        BAGIAN D: BENAR ATAU SALAH BERASALAN (10 SOAL)
      </h3>
      <p style="font-size: 9pt; color: #475569; font-style: italic; margin-bottom: 12px;">Tentukan apakah pernyataan berikut BENAR (B) atau SALAH (S) serta tuliskan alasannya!</p>
    `;

    dataBS.forEach((q, idx) => {
      bodyHtml += `
        <div style="margin-bottom: 12px; page-break-inside: avoid; font-size: 9.5pt;">
          <p style="margin: 0 0 2px 0; font-weight: bold;">${idx + 1}. ${q.statement}</p>
          <div style="padding-left: 16px; font-size: 9pt; color: #334155;">
            Pilihan: ( &nbsp; ) BENAR &nbsp;&nbsp;&nbsp; ( &nbsp; ) SALAH<br/>
            <span>Alasan: .......................................................................................................................................</span>
          </div>
        </div>
      `;
    });

    // Bagian E: Uraian (5 Soal)
    bodyHtml += `
      <h3 style="color: #0f766e; font-size: 11pt; border-bottom: 1px solid #0f766e; padding-bottom: 4px; margin-top: 20px;">
        BAGIAN E: URAIAN / ESSAY (5 SOAL)
      </h3>
      <p style="font-size: 9pt; color: #475569; font-style: italic; margin-bottom: 12px;">Jawablah pertanyaan-pertanyaan berikut dengan analisis yang jelas dan tepat!</p>
    `;

    dataEssay.forEach((q, idx) => {
      bodyHtml += `
        <div style="margin-bottom: 16px; page-break-inside: avoid; font-size: 9.5pt;">
          <p style="margin: 0 0 4px 0; font-weight: bold; color: #0f172a;">${idx + 1}. ${q.question}</p>
          <div style="border-bottom: 1px dashed #cbd5e1; height: 32px; margin-bottom: 4px;"></div>
          <div style="border-bottom: 1px dashed #cbd5e1; height: 32px;"></div>
        </div>
      `;
    });

    bodyHtml += `</div>`;

    printOrDownloadDocument(
      `Evaluasi PAI Kelas ${grade} Pembelajaran ${lesson}`,
      `Puasa Wajib dan Sunah, Serta Hikmahnya`,
      bodyHtml
    );
  };

  return (
    <div className="space-y-8">
      {/* Top Bar Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-5 rounded-2xl border border-slate-200 shadow-sm gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-1">
            <ClipboardCheck className="w-3.5 h-3.5" />
            Evaluasi Berbasis HOTS & Computational Thinking
          </div>
          <h2 className="text-xl font-bold text-slate-800">Evaluasi Pembelajaran: Puasa Wajib & Sunah</h2>
          <p className="text-sm text-slate-500">10 PG • 10 PGK • 5 Menjodohkan • 10 Benar/Salah + Alasan • 5 Uraian</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 font-semibold text-xs transition-all shadow-sm"
          >
            <Key className="w-4 h-4 text-amber-600" />
            <span>{showAnswerKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            onClick={handleCalculateScore}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-sm active:scale-95"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-sm active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Soal (PDF)</span>
          </button>
        </div>
      </div>

      {/* Score Modal / Result Banner */}
      {showScoreModal && calculatedScore !== null && (
        <div className="p-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-200">Hasil Evaluasi Mandiri</span>
              <h3 className="text-2xl font-bold">Skor Kamu: {calculatedScore} / 100</h3>
              <p className="text-xs text-white/90">
                {calculatedScore >= 80 ? '🌟 Luar biasa! Pemahaman fiqih puasa kamu sangat matang.' : '💪 Tetap semangat! Pelajari kembali slide materi untuk memperdalam pengetahuan.'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleResetForm}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-bold text-xs rounded-xl border border-white/30 transition-all flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Jawaban
              </button>
              <button
                onClick={() => setShowScoreModal(false)}
                className="px-4 py-2 bg-white text-blue-900 font-bold text-xs rounded-xl shadow-md transition-all hover:bg-slate-100"
              >
                Tutup Banner
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bagian A: Pilihan Ganda */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-extrabold text-sm flex items-center justify-center">A</span>
            Bagian A: Pilihan Ganda (10 Soal)
          </h3>
          <p className="text-xs text-slate-500 mt-1">Pilihlah satu jawaban yang paling benar!</p>
        </div>

        <div className="space-y-6">
          {dataPG.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <p className="text-sm font-bold text-slate-800">{idx + 1}. {q.question}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, oIdx) => {
                  const isSelected = userPG[q.id] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => setUserPG(prev => ({ ...prev, [q.id]: oIdx }))}
                      className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center gap-2 ${
                        isSelected 
                          ? 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold ring-1 ring-emerald-400' 
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 font-bold text-[10px] flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                  <span className="font-bold text-amber-950">🔑 Kunci Jawaban: {String.fromCharCode(65 + q.correctAnswer)}. {q.options[q.correctAnswer]}</span>
                  <p className="text-[11px] text-amber-800">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bagian B: Pilihan Ganda Kompleks */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 font-extrabold text-sm flex items-center justify-center">B</span>
            Bagian B: Pilihan Ganda Kompleks (10 Soal)
          </h3>
          <p className="text-xs text-slate-500 mt-1">Pilihlah LEBIH DARI SATU jawaban yang benar!</p>
        </div>

        <div className="space-y-6">
          {dataPGK.map((q, idx) => {
            const selectedArr = userPGK[q.id] || [];
            return (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <p className="text-sm font-bold text-slate-800">{idx + 1}. {q.question}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, oIdx) => {
                    const isChecked = selectedArr.includes(oIdx);
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleTogglePGKOption(q.id, oIdx)}
                        className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center gap-2 ${
                          isChecked 
                            ? 'bg-teal-100 border-teal-400 text-teal-950 font-bold ring-1 ring-teal-400' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 shrink-0"
                        />
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {showAnswerKey && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                    <span className="font-bold text-amber-950">
                      🔑 Kunci Jawaban: Opsi {q.correctAnswers.map(ca => String.fromCharCode(65 + ca)).join(', ')}
                    </span>
                    <p className="text-[11px] text-amber-800">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bagian C: Menjodohkan */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-extrabold text-sm flex items-center justify-center">C</span>
            Bagian C: Menjodohkan (5 Soal)
          </h3>
          <p className="text-xs text-slate-500 mt-1">Pilih pasangan jawaban yang paling sesuai untuk setiap pernyataan!</p>
        </div>

        <div className="space-y-4">
          {dataMatching.map((m, idx) => (
            <div key={m.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="text-sm font-bold text-slate-800 md:w-1/2">
                {idx + 1}. {m.premise}
              </div>

              <div className="md:w-1/2">
                <select
                  value={userMatching[m.id] || ''}
                  onChange={(e) => setUserMatching(prev => ({ ...prev, [m.id]: e.target.value }))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-700 focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">-- Pilih Pasangan Jawaban --</option>
                  {dataMatching.map((item) => (
                    <option key={item.id} value={item.answer}>
                      {item.answer}
                    </option>
                  ))}
                </select>

                {showAnswerKey && (
                  <div className="mt-2 text-xs font-bold text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    🔑 Jawaban Tepat: {m.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bagian D: Benar/Salah + Alasan */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 font-extrabold text-sm flex items-center justify-center">D</span>
            Bagian D: Benar atau Salah Beralasan (10 Soal)
          </h3>
          <p className="text-xs text-slate-500 mt-1">Pilih BENAR atau SALAH dan tuliskan alasan ilmiah / fiqihnya!</p>
        </div>

        <div className="space-y-6">
          {dataBS.map((q, idx) => {
            const currentBS = userBS[q.id];
            return (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <p className="text-sm font-bold text-slate-800">{idx + 1}. {q.statement}</p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setUserBS(prev => ({ ...prev, [q.id]: true }))}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      currentBS === true
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    BENAR (B)
                  </button>

                  <button
                    onClick={() => setUserBS(prev => ({ ...prev, [q.id]: false }))}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      currentBS === false
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    SALAH (S)
                  </button>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Tuliskan alasan / penjelasan kamu di sini..."
                    value={userBSReason[q.id] || ''}
                    onChange={(e) => setUserBSReason(prev => ({ ...prev, [q.id]: e.target.value }))}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {showAnswerKey && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                    <span className="font-bold text-amber-950">🔑 Jawaban Tepat: {q.isTrue ? 'BENAR' : 'SALAH'}</span>
                    <p className="text-[11px] text-amber-800">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bagian E: Uraian / Essay */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-800 font-extrabold text-sm flex items-center justify-center">E</span>
            Bagian E: Uraian HOTS (5 Soal)
          </h3>
          <p className="text-xs text-slate-500 mt-1">Jawablah pertanyaan-pertanyaan berikut dengan analisis yang runtut dan jelas!</p>
        </div>

        <div className="space-y-6">
          {dataEssay.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <p className="text-sm font-bold text-slate-800">{idx + 1}. {q.question}</p>

              <textarea
                rows={3}
                placeholder="Tuliskan jawaban uraian lengkap kamu..."
                value={userEssay[q.id] || ''}
                onChange={(e) => setUserEssay(prev => ({ ...prev, [q.id]: e.target.value }))}
                className="w-full p-3.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500"
              />

              {showAnswerKey && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-2">
                  <div>
                    <span className="font-bold text-amber-950">Rubrik Penilaian:</span>
                    <p className="text-[11px] text-amber-800">{q.rubric}</p>
                  </div>
                  <div>
                    <span className="font-bold text-amber-950">Contoh Jawaban Ideal:</span>
                    <p className="text-[11px] text-amber-900 font-mono bg-white/80 p-2 rounded-lg border border-amber-200 mt-1 whitespace-pre-line">{q.sampleAnswer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
