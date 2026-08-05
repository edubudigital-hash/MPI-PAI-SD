import React, { useState } from 'react';
import { 
  EVALUASI_P5_PG, 
  EVALUASI_P5_PGK, 
  EVALUASI_P5_MATCHING, 
  EVALUASI_P5_BS, 
  EVALUASI_P5_ESSAY 
} from '../../data/kelas4Pembelajaran5Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
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

interface EvaluasiView4P5Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView4_P5: React.FC<EvaluasiView4P5Props> = ({ grade, lesson }) => {
  const dataPG = EVALUASI_P5_PG;
  const dataPGK = EVALUASI_P5_PGK;
  const dataMatching = EVALUASI_P5_MATCHING;
  const dataBS = EVALUASI_P5_BS;
  const dataEssay = EVALUASI_P5_ESSAY;

  // User Answers state
  const [userPG, setUserPG] = useState<{ [qId: number]: number }>({});
  const [userPGK, setUserPGK] = useState<{ [qId: number]: number[] }>({});
  const [userMatching, setUserMatching] = useState<{ [qId: number]: string }>({});
  const [userBS, setUserBS] = useState<{ [qId: number]: boolean }>({});
  const [userBSReason, setUserBSReason] = useState<{ [qId: number]: string }>({});
  const [userEssay, setUserEssay] = useState<{ [qId: number]: string }>({});

  // UI state toggles
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);
  const [showScoreModal, setShowScoreModal] = useState<boolean>(false);
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);

  // Toggle PGK checkbox helper
  const handleTogglePGKOption = (qId: number, optionIdx: number) => {
    soundFX.playClick();
    setUserPGK((prev) => {
      const currentArr = prev[qId] || [];
      if (currentArr.includes(optionIdx)) {
        return { ...prev, [qId]: currentArr.filter((i) => i !== optionIdx) };
      } else {
        return { ...prev, [qId]: [...currentArr, optionIdx].sort() };
      }
    });
  };

  // Calculate score
  const handleCalculateScore = () => {
    soundFX.playClick();
    let totalScore = 0;

    // PG: 10 soal @ 3 poin = 30 poin
    dataPG.forEach((q) => {
      if (userPG[q.id] === q.correctAnswerIndex) {
        totalScore += 3;
      }
    });

    // PGK: 10 soal @ 3 poin = 30 poin
    dataPGK.forEach((q) => {
      const userAns = (userPGK[q.id] || []).sort().join(',');
      const correctAns = (q.correctAnswerIndices || []).sort().join(',');
      if (userAns === correctAns && userAns !== '') {
        totalScore += 3;
      }
    });

    // Matching: 5 soal @ 2 poin = 10 poin
    dataMatching.forEach((q) => {
      if (userMatching[q.id] === q.rightText) {
        totalScore += 2;
      }
    });

    // BS: 10 soal @ 1.5 poin = 15 poin
    dataBS.forEach((q) => {
      if (userBS[q.id] === q.isTrue) {
        totalScore += 1.5;
      }
    });

    // Essay: 5 soal @ 3 poin = 15 poin (jika diisi)
    dataEssay.forEach((q) => {
      if (userEssay[q.id] && userEssay[q.id].trim().length > 5) {
        totalScore += 3;
      }
    });

    const finalScore = Math.round(totalScore);
    setCalculatedScore(finalScore);
    setShowScoreModal(true);
    soundFX.playFanfare();
  };

  const handleResetAnswers = () => {
    soundFX.playClick();
    setUserPG({});
    setUserPGK({});
    setUserMatching({});
    setUserBS({});
    setUserBSReason({});
    setUserEssay({});
    setShowAnswerKey(false);
    setShowScoreModal(false);
    setCalculatedScore(null);
  };

  const handleDownloadEvaluasi = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>NASKAH EVALUASI PEMBELAJARAN PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Kisah Nabi Muhammad saw. Diangkat Menjadi Rasul dan Dakwah Periode Makkah</h2>
        <p>Berdasarkan Standar HOTS & Computational Thinking • SD Kelas IV</p>
      </div>

      <!-- BAGIAN A: PILIHAN GANDA -->
      <div class="card">
        <h3 style="color: #0d9488; margin-top: 0;">BAGIAN A: PILIHAN GANDA (10 Soal)</h3>
        <p style="font-size: 8.5pt; color: #64748b;">Pilihlah satu jawaban yang paling tepat!</p>
        <ol style="padding-left: 18px; margin: 0; font-size: 9pt;">
    `;

    dataPG.forEach((q) => {
      bodyHtml += `
        <li style="margin-bottom: 8px;">
          <div><strong>${q.question}</strong></div>
          ${q.arabic ? `<div class="arabic" style="font-size: 14pt; margin: 4px 0;">${q.arabic}</div>` : ''}
          <div style="margin-top: 4px; display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
            ${q.options.map((opt) => `<div>${opt}</div>`).join('')}
          </div>
          ${showAnswerKey ? `<div style="margin-top: 4px; color: #059669; font-weight: bold; font-size: 8.5pt;">Kunci Jawaban: ${q.options[q.correctAnswerIndex]}</div>` : ''}
        </li>
      `;
    });

    bodyHtml += `
        </ol>
      </div>

      <!-- BAGIAN B: PILIHAN GANDA KOMPLEKS -->
      <div class="card">
        <h3 style="color: #0d9488; margin-top: 0;">BAGIAN B: PILIHAN GANDA KOMPLEKS (10 Soal)</h3>
        <p style="font-size: 8.5pt; color: #64748b;">Pilihlah LEBIH DARI SATU jawaban yang benar!</p>
        <ol style="padding-left: 18px; margin: 0; font-size: 9pt;">
    `;

    dataPGK.forEach((q) => {
      bodyHtml += `
        <li style="margin-bottom: 8px;">
          <div><strong>${q.question}</strong></div>
          <div style="margin-top: 4px; display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
            ${q.options.map((opt) => `<div>[ ] ${opt}</div>`).join('')}
          </div>
          ${showAnswerKey ? `<div style="margin-top: 4px; color: #059669; font-weight: bold; font-size: 8.5pt;">Kunci Jawaban: ${q.correctAnswerIndices.map((i) => q.options[i]).join('; ')}</div>` : ''}
        </li>
      `;
    });

    bodyHtml += `
        </ol>
      </div>

      <!-- BAGIAN C: MENJODOHKAN -->
      <div class="card">
        <h3 style="color: #0d9488; margin-top: 0;">BAGIAN C: MENJODOHKAN (5 Soal)</h3>
        <p style="font-size: 8.5pt; color: #64748b;">Jodohkanlah pernyataan di sebelah kiri dengan jawaban di sebelah kanan!</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 8.5pt;">
          <thead>
            <tr style="background-color: #0d9488; color: white;">
              <th style="padding: 6px; border: 1px solid #cbd5e1; width: 35%;">Pernyataan / Istilah</th>
              <th style="padding: 6px; border: 1px solid #cbd5e1;">Pasangan / Pasangan Jawaban yang Tepat</th>
            </tr>
          </thead>
          <tbody>
    `;

    dataMatching.forEach((q) => {
      bodyHtml += `
        <tr>
          <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>${q.leftText}</strong> ${q.leftArabic ? `<span class="arabic">(${q.leftArabic})</span>` : ''}</td>
          <td style="padding: 6px; border: 1px solid #cbd5e1;">${q.rightText}</td>
        </tr>
      `;
    });

    bodyHtml += `
          </tbody>
        </table>
      </div>

      <!-- BAGIAN D: BENAR / SALAH DISERTAI ALASAN -->
      <div class="card">
        <h3 style="color: #0d9488; margin-top: 0;">BAGIAN D: BENAR ATAU SALAH DISERTAI ALASANNYA (10 Soal)</h3>
        <p style="font-size: 8.5pt; color: #64748b;">Tentukan BENAR atau SALAH dan tuliskan alasanmu pada kolom yang disediakan!</p>
        <ol style="padding-left: 18px; margin: 0; font-size: 9pt;">
    `;

    dataBS.forEach((q) => {
      bodyHtml += `
        <li style="margin-bottom: 10px;">
          <div><strong>${q.statement}</strong></div>
          <div style="margin-top: 4px; font-size: 8.5pt; color: #334155;">
            Pilihan: ( [ ] BENAR / [ ] SALAH )
          </div>
          <div style="margin-top: 4px; border: 1px border-style: dashed; border-color: #cbd5e1; padding: 6px; border-radius: 4px; min-height: 28px; font-size: 8.5pt; color: #64748b;">
            <strong>Alasan Murid:</strong> ____________________________________________________
          </div>
          ${showAnswerKey ? `<div style="margin-top: 4px; color: #059669; font-weight: bold; font-size: 8.5pt;">Kunci: ${q.isTrue ? 'BENAR' : 'SALAH'} — ${q.explanation}</div>` : ''}
        </li>
      `;
    });

    bodyHtml += `
        </ol>
      </div>

      <!-- BAGIAN E: URAIAN / ESSAY -->
      <div class="card">
        <h3 style="color: #0d9488; margin-top: 0;">BAGIAN E: SOAL URAIAN (5 Soal)</h3>
        <p style="font-size: 8.5pt; color: #64748b;">Jawablah pertanyaan berikut dengan jelas dan mendalam!</p>
        <ol style="padding-left: 18px; margin: 0; font-size: 9pt;">
    `;

    dataEssay.forEach((q) => {
      bodyHtml += `
        <li style="margin-bottom: 12px;">
          <div><strong>${q.question}</strong></div>
          <div style="margin-top: 6px; border: 1px border-style: dashed; border-color: #cbd5e1; padding: 8px; border-radius: 4px; min-height: 45px; font-size: 8.5pt; color: #64748b;">
            <strong>Jawaban Murid:</strong>
          </div>
          ${showAnswerKey ? `
            <div style="margin-top: 6px; background-color: #f0fdf4; border-left: 3px solid #10b981; padding: 6px; font-size: 8pt; color: #065f46;">
              <strong>Rubrik:</strong> ${q.rubric}<br/>
              <strong>Contoh Jawaban Ideal:</strong> ${q.sampleAnswer}
            </div>
          ` : ''}
        </li>
      `;
    });

    bodyHtml += `
        </ol>
      </div>
    `;

    printOrDownloadDocument(
      `Evaluasi_Pembelajaran_PAI_Kelas_${grade}_P${lesson}_Kisah_Nabi_Makkah.pdf`,
      `Evaluasi Pembelajaran PAI Kelas ${grade} Bab ${lesson} - Kisah Nabi Muhammad Makkah`,
      bodyHtml
    );
  };

  return (
    <div id="evaluasi-p5-container" className="space-y-6 max-w-5xl mx-auto">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-700 to-indigo-900 text-white rounded-3xl p-6 shadow-xl border border-emerald-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <ClipboardCheck className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider block">
              Evaluasi Pembelajaran Berstandar HOTS & CT
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Kelas {grade} • Pembelajaran {lesson} (BAB 5)
            </h3>
            <p className="text-xs text-emerald-100 font-medium">
              40 Soal Lengkap: PG (10), PGK (10), Menjodohkan (5), B/S + Alasan (10), Uraian (5)
            </p>
          </div>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            id="btn-toggle-answer-key-p5"
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKey(!showAnswerKey);
            }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 border shadow-sm transition-all ${
              showAnswerKey
                ? 'bg-amber-400 text-slate-900 border-amber-300'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/30'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>{showAnswerKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            id="btn-calculate-score-p5"
            onClick={handleCalculateScore}
            className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 border border-amber-200 shadow-md transition-all"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          <button
            id="btn-download-evaluasi-p5"
            onClick={handleDownloadEvaluasi}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 border border-emerald-400 shadow-md transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* SCORE DISPLAY MODAL / CALLOUT */}
      {showScoreModal && calculatedScore !== null && (
        <div className="bg-gradient-to-r from-amber-50 to-emerald-50 border-2 border-amber-300 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center font-black text-2xl shadow-md shrink-0">
              {calculatedScore}
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-800">
                Skor Evaluasi Kamu: <span className="text-emerald-700">{calculatedScore} / 100</span>
              </h4>
              <p className="text-xs text-slate-600">
                {calculatedScore >= 80 
                  ? 'Sangat Luar Biasa! Kamu sudah sangat memahami kisah dan akhlak mulia Rasulullah saw.' 
                  : calculatedScore >= 60 
                  ? 'Bagus! Tingkatkan lagi pemahaman dengan membaca kembali slide materi.' 
                  : 'Tetap semangat! Pelajari kembali materi dan coba kerjakan ulang.'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleResetAnswers}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Jawaban</span>
            </button>
            <button
              onClick={() => setShowScoreModal(false)}
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* SECTION A: PILIHAN GANDA */}
      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-black flex items-center justify-center">A</span>
            BAGIAN A: PILIHAN GANDA (10 Soal)
          </h4>
          <p className="text-xs text-slate-500 mt-1">Pilihlah satu jawaban yang paling tepat!</p>
        </div>

        <div className="space-y-6">
          {dataPG.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-sm font-bold text-slate-800 flex items-start gap-2">
                <span className="text-emerald-700 font-black">{idx + 1}.</span>
                <span className="leading-relaxed">{q.question}</span>
              </div>

              {q.arabic && (
                <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200 text-center font-serif text-2xl text-emerald-900 dir-rtl">
                  {q.arabic}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                {q.options.map((opt, optIdx) => {
                  const isSelected = userPG[q.id] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => {
                        soundFX.playClick();
                        setUserPG((prev) => ({ ...prev, [q.id]: optIdx }));
                      }}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                        isSelected 
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold' 
                          : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-900 space-y-1">
                  <div className="font-bold flex items-center gap-1 text-emerald-800">
                    <Key className="w-3.5 h-3.5" />
                    <span>Kunci Jawaban: {q.options[q.correctAnswerIndex]}</span>
                  </div>
                  <p className="text-slate-600">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION B: PILIHAN GANDA KOMPLEKS */}
      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 text-sm font-black flex items-center justify-center">B</span>
            BAGIAN B: PILIHAN GANDA KOMPLEKS (10 Soal)
          </h4>
          <p className="text-xs text-slate-500 mt-1">Pilihlah LEBIH DARI SATU jawaban yang benar!</p>
        </div>

        <div className="space-y-6">
          {dataPGK.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-sm font-bold text-slate-800 flex items-start gap-2">
                <span className="text-teal-700 font-black">{idx + 1}.</span>
                <span className="leading-relaxed">{q.question}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                {q.options.map((opt, optIdx) => {
                  const isChecked = (userPGK[q.id] || []).includes(optIdx);
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleTogglePGKOption(q.id, optIdx)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center gap-2.5 ${
                        isChecked 
                          ? 'bg-teal-100 border-teal-500 text-teal-900 font-bold' 
                          : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${isChecked ? 'bg-teal-600 text-white border-teal-600' : 'border-slate-400 bg-white'}`}>
                        {isChecked && '✓'}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-teal-50 border border-teal-300 rounded-xl text-xs text-teal-900 space-y-1">
                  <div className="font-bold flex items-center gap-1 text-teal-800">
                    <Key className="w-3.5 h-3.5" />
                    <span>Kunci Jawaban: {q.correctAnswerIndices.map((i) => q.options[i]).join('; ')}</span>
                  </div>
                  <p className="text-slate-600">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION C: MENJODOHKAN */}
      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 text-sm font-black flex items-center justify-center">C</span>
            BAGIAN C: MENJODOHKAN (5 Soal)
          </h4>
          <p className="text-xs text-slate-500 mt-1">Pilihlah pasangan yang tepat untuk setiap istilah di sebelah kiri!</p>
        </div>

        <div className="space-y-4">
          {dataMatching.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="text-sm font-bold text-slate-800 md:w-1/3">
                <span className="text-indigo-700 font-black mr-2">{idx + 1}.</span>
                <span>{q.leftText}</span>
                {q.leftArabic && <span className="text-emerald-700 font-serif text-base ml-2">({q.leftArabic})</span>}
              </div>

              <div className="md:w-2/3">
                <select
                  value={userMatching[q.id] || ''}
                  onChange={(e) => {
                    soundFX.playClick();
                    setUserMatching((prev) => ({ ...prev, [q.id]: e.target.value }));
                  }}
                  className="w-full p-2.5 text-xs font-medium rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="">-- Pilih Pasangan Jawaban --</option>
                  {dataMatching.map((item) => (
                    <option key={item.id} value={item.rightText}>
                      {item.rightText}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          {showAnswerKey && (
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-900 space-y-2">
              <div className="font-bold flex items-center gap-1 text-indigo-800">
                <Key className="w-4 h-4" />
                <span>Kunci Jawaban Pasangan Tepat:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {dataMatching.map((m) => (
                  <li key={m.id}>
                    <strong>{m.leftText}</strong> ➔ {m.rightText}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* SECTION D: BENAR ATAU SALAH DISERTAI ALASAN */}
      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 text-sm font-black flex items-center justify-center">D</span>
            BAGIAN D: BENAR ATAU SALAH DISERTAI ALASANNYA (10 Soal)
          </h4>
          <p className="text-xs text-slate-500 mt-1">Pilih BENAR/SALAH dan tuliskan alasan singkatmu di kolom yang tersedia!</p>
        </div>

        <div className="space-y-6">
          {dataBS.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-sm font-bold text-slate-800 flex items-start gap-2">
                <span className="text-amber-700 font-black">{idx + 1}.</span>
                <span className="leading-relaxed">{q.statement}</span>
              </div>

              {/* True/False Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setUserBS((prev) => ({ ...prev, [q.id]: true }));
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    userBS[q.id] === true 
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' 
                      : 'bg-white text-slate-700 hover:bg-emerald-50 border-slate-300'
                  }`}
                >
                  BENAR
                </button>
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setUserBS((prev) => ({ ...prev, [q.id]: false }));
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    userBS[q.id] === false 
                      ? 'bg-rose-600 text-white border-rose-600 shadow-sm' 
                      : 'bg-white text-slate-700 hover:bg-rose-50 border-slate-300'
                  }`}
                >
                  SALAH
                </button>
              </div>

              {/* Reason Input Box */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Alasan Saya:
                </label>
                <input
                  type="text"
                  placeholder="Tuliskan alasan pilihanmu di sini..."
                  value={userBSReason[q.id] || ''}
                  onChange={(e) => setUserBSReason((prev) => ({ ...prev, [q.id]: e.target.value }))}
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1 text-amber-800">
                    <Key className="w-3.5 h-3.5" />
                    <span>Kunci Jawaban: {q.isTrue ? 'BENAR' : 'SALAH'}</span>
                  </div>
                  <p className="text-slate-600">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION E: URAIAN / ESSAY */}
      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-black flex items-center justify-center">E</span>
            BAGIAN E: SOAL URAIAN (5 Soal)
          </h4>
          <p className="text-xs text-slate-500 mt-1">Jawablah pertanyaan berikut dengan jelas dan mendalam!</p>
        </div>

        <div className="space-y-6">
          {dataEssay.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-sm font-bold text-slate-800 flex items-start gap-2">
                <span className="text-emerald-700 font-black">{idx + 1}.</span>
                <span className="leading-relaxed">{q.question}</span>
              </div>

              <textarea
                rows={3}
                placeholder="Ketikkan jawaban lengkapmu di sini..."
                value={userEssay[q.id] || ''}
                onChange={(e) => setUserEssay((prev) => ({ ...prev, [q.id]: e.target.value }))}
                className="w-full p-3 text-xs rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 leading-relaxed"
              />

              {showAnswerKey && (
                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-900 space-y-2">
                  <div className="font-bold flex items-center gap-1 text-emerald-800">
                    <Key className="w-3.5 h-3.5" />
                    <span>Rubrik Penilaian & Contoh Jawaban Ideal:</span>
                  </div>
                  <p className="text-emerald-800 font-semibold">{q.rubric}</p>
                  <p className="text-slate-700 whitespace-pre-line bg-white p-3 rounded-lg border border-emerald-200">
                    {q.sampleAnswer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
