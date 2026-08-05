import React, { useState } from 'react';
import { 
  EVALUASI_P4_PG, 
  EVALUASI_P4_PGK, 
  EVALUASI_P4_MATCHING, 
  EVALUASI_P4_BS, 
  EVALUASI_P4_ESSAY 
} from '../../data/kelas4Pembelajaran4Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  ClipboardCheck, 
  CheckCircle, 
  XCircle, 
  Download, 
  Key, 
  Award, 
  RefreshCw, 
  Sparkles,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface EvaluasiView4P4Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView4_P4: React.FC<EvaluasiView4P4Props> = ({ grade, lesson }) => {
  const dataPG = EVALUASI_P4_PG;
  const dataPGK = EVALUASI_P4_PGK;
  const dataMatching = EVALUASI_P4_MATCHING;
  const dataBS = EVALUASI_P4_BS;
  const dataEssay = EVALUASI_P4_ESSAY;

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

    // Essay: 5 soal @ 3 poin = 15 poin (if answered)
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
        <h2>PEMBELAJARAN ${lesson}: Memahami dan Menerapkan Ketentuan Shalat Sunah Rawatib, Shalat Dhuha, dan Shalat Tahajud</h2>
        <p>Soal Berbasis HOTS & Computational Thinking • Kurikulum Merdeka BAB 4</p>
      </div>

      <!-- BAGIAN A: PILIHAN GANDA -->
      <div class="section-title">BAGIAN A: PILIHAN GANDA (10 Soal)</div>
    `;

    dataPG.forEach((q) => {
      bodyHtml += `
        <div class="card">
          <p style="margin: 0 0 6px 0; font-weight: bold; font-size: 10pt;">${q.id}. ${q.question}</p>
          ${q.arabic ? `<div class="arabic" style="font-size: 16pt;">${q.arabic}</div>` : ''}
          <div style="padding-left: 12px; font-size: 9.5pt;">
            ${q.options.map((opt) => `<div style="margin-bottom: 3px;">${opt}</div>`).join('')}
          </div>
          <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #cbd5e1; font-size: 8.5pt; color: #0d9488;">
            <strong>Kunci Jawaban:</strong> Pilihan ke-${q.correctAnswerIndex + 1} | <em>${q.explanation}</em>
          </div>
        </div>
      `;
    });

    // BAGIAN B: PGK
    bodyHtml += `<div class="section-title">BAGIAN B: PILIHAN GANDA KOMPLEKS (10 Soal)</div>`;
    dataPGK.forEach((q) => {
      bodyHtml += `
        <div class="card">
          <p style="margin: 0 0 6px 0; font-weight: bold; font-size: 10pt;">${q.id}. ${q.question}</p>
          ${q.arabic ? `<div class="arabic" style="font-size: 16pt;">${q.arabic}</div>` : ''}
          <div style="padding-left: 12px; font-size: 9.5pt;">
            ${q.options.map((opt) => `<div style="margin-bottom: 3px;">[  ] ${opt}</div>`).join('')}
          </div>
          <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #cbd5e1; font-size: 8.5pt; color: #0d9488;">
            <strong>Kunci Jawaban:</strong> Pilihan (${q.correctAnswerIndices.map((i) => i + 1).join(', ')}) | <em>${q.explanation}</em>
          </div>
        </div>
      `;
    });

    // BAGIAN C: MATCHING
    bodyHtml += `<div class="section-title">BAGIAN C: MENJODOHKAN (5 Soal)</div>`;
    dataMatching.forEach((q) => {
      bodyHtml += `
        <div class="card">
          <div style="display: flex; justify-content: space-between; font-size: 9.5pt;">
            <div><strong>${q.id}. ${q.leftText}</strong> ${q.leftArabic ? `(${q.leftArabic})` : ''}</div>
            <div style="color: #0d9488; font-weight: bold;">➡ Pasangan: ${q.rightText}</div>
          </div>
        </div>
      `;
    });

    // BAGIAN D: BENAR / SALAH DENGAN ISIAN ALASAN
    bodyHtml += `<div class="section-title">BAGIAN D: BENAR / SALAH DENGAN ISIAN ALASAN (10 Soal)</div>`;
    dataBS.forEach((q) => {
      bodyHtml += `
        <div class="card">
          <p style="margin: 0 0 4px 0; font-weight: bold; font-size: 10pt;">${q.id}. Pernyataan: "${q.statement}"</p>
          ${q.arabic ? `<div class="arabic" style="font-size: 16pt;">${q.arabic}</div>` : ''}
          <div style="font-size: 9pt; color: #1e293b; margin-top: 4px;">
            [  ] BENAR &nbsp;&nbsp;&nbsp;&nbsp; [  ] SALAH
          </div>
          <div style="margin-top: 6px; font-size: 9pt;">
            <strong>Alasan Murid:</strong> __________________________________________________________________
          </div>
          <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #cbd5e1; font-size: 8.5pt; color: #0d9488;">
            <strong>Kunci Jawaban:</strong> ${q.isTrue ? 'BENAR' : 'SALAH'} | <em>${q.explanation}</em>
          </div>
        </div>
      `;
    });

    // BAGIAN E: ESSAY
    bodyHtml += `<div class="section-title">BAGIAN E: SOAL URAIAN (5 Soal)</div>`;
    dataEssay.forEach((q) => {
      bodyHtml += `
        <div class="card">
          <p style="margin: 0 0 6px 0; font-weight: bold; font-size: 10pt;">${q.id}. ${q.question}</p>
          <div style="min-height: 45px; border: 1px dashed #cbd5e1; border-radius: 4px; padding: 6px; font-size: 9pt; color: #94a3b8;">
            Lembar Jawaban Murid:
          </div>
          <div style="margin-top: 6px; font-size: 8.5pt; color: #0d9488;">
            <strong>Pedoman Penskoran:</strong> ${q.rubric}<br/>
            <strong>Contoh Jawaban Ideal:</strong> <span style="white-space: pre-line;">${q.sampleAnswer}</span>
          </div>
        </div>
      `;
    });

    printOrDownloadDocument(
      `Evaluasi_PAI_Kelas_${grade}_P${lesson}_Shalat_Sunah`,
      `Evaluasi Shalat Sunah Kelas ${grade}`,
      bodyHtml
    );
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <ClipboardCheck className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-200 uppercase tracking-wider block">
              Evaluasi Pembelajaran HOTS & Computational Thinking
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Kelas {grade} • Pembelajaran {lesson} (BAB 4)
            </h3>
            <p className="text-xs text-teal-100 font-medium">
              40 Soal Lengkap: 10 PG, 10 PGK, 5 Menjodohkan, 10 Benar/Salah (Alasan), 5 Uraian
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className={`px-4 py-2.5 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center space-x-2 border transition active:scale-95 cursor-pointer shadow-md ${
              showAnswerKey
                ? 'bg-purple-600 hover:bg-purple-700 text-white border-purple-400'
                : 'bg-white text-slate-900 border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Key className="w-4 h-4 text-amber-400" />
            <span>{showAnswerKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            onClick={handleCalculateScore}
            className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center space-x-2 border border-amber-200 shadow-md transition active:scale-95 cursor-pointer"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          <button
            onClick={handleDownloadEvaluasi}
            className="px-4 py-2.5 rounded-2xl bg-teal-800 hover:bg-teal-900 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow-md border border-teal-600 transition active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: PILIHAN GANDA (10 SOAL) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-teal-200 dark:border-teal-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-teal-600"></span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase">
              Bagian A: Pilihan Ganda (10 Soal HOTS)
            </h4>
          </div>
          <span className="text-xs font-bold text-slate-500">Pilih 1 jawaban yang paling tepat</span>
        </div>

        <div className="space-y-6">
          {dataPG.map((q) => {
            const userChoice = userPG[q.id];
            return (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                  {q.id}. {q.question}
                </div>
                {q.arabic && (
                  <div className="font-arabic text-2xl text-teal-800 dark:text-teal-300 font-bold text-right py-1">
                    {q.arabic}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userChoice === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => {
                          soundFX.playClick();
                          setUserPG((prev) => ({ ...prev, [q.id]: optIdx }));
                        }}
                        className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${
                          isSelected
                            ? 'bg-teal-600 text-white border-teal-500 font-extrabold shadow-xs'
                            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-teal-50/50'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {showAnswerKey && (
                  <div className="text-xs font-extrabold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-3 py-2 rounded-lg w-full">
                    💡 Kunci: <strong>Pilihan Ke-{q.correctAnswerIndex + 1}</strong> — {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: PILIHAN GANDA KOMPLEKS (10 SOAL) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 dark:border-emerald-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase">
              Bagian B: Pilihan Ganda Kompleks (10 Soal - Pilih Lebih dari Satu)
            </h4>
          </div>
          <span className="text-xs font-bold text-slate-500">Centang jawaban yang benar</span>
        </div>

        <div className="space-y-6">
          {dataPGK.map((q) => {
            const selectedIndices = userPGK[q.id] || [];
            return (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {q.id}. {q.question}
                </div>
                {q.arabic && (
                  <div className="font-arabic text-2xl text-teal-800 dark:text-teal-300 font-bold text-right py-1">
                    {q.arabic}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isChecked = selectedIndices.includes(optIdx);
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleTogglePGKOption(q.id, optIdx)}
                        className={`p-3 rounded-xl border text-left text-xs transition flex items-center space-x-2.5 cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-600 text-white border-emerald-500 font-extrabold shadow-xs'
                            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-emerald-50/50'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 ${isChecked ? 'bg-white text-emerald-600' : 'border-slate-400'}`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {showAnswerKey && (
                  <div className="text-xs font-extrabold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-3 py-2 rounded-lg w-full">
                    💡 Kunci: <strong>Pilihan ({q.correctAnswerIndices.map((i) => i + 1).join(', ')})</strong> — {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: MENJODOHKAN (5 SOAL) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-indigo-200 dark:border-indigo-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase">
              Bagian C: Menjodohkan (5 Soal)
            </h4>
          </div>
          <span className="text-xs font-bold text-slate-500">Pilih pasangan yang sesuai</span>
        </div>

        <div className="space-y-4">
          {dataMatching.map((q) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 block">Soal #{q.id}</span>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  {q.leftText} {q.leftArabic && <span className="font-arabic text-xl text-teal-600 font-bold ml-1">({q.leftArabic})</span>}
                </div>
              </div>

              <select
                value={userMatching[q.id] || ''}
                onChange={(e) => setUserMatching({ ...userMatching, [q.id]: e.target.value })}
                className="w-full md:w-80 p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">-- Pilih Pasangan Jawaban --</option>
                {dataMatching.map((opt) => (
                  <option key={opt.id} value={opt.rightText}>
                    {opt.rightText}
                  </option>
                ))}
              </select>

              {showAnswerKey && (
                <div className="text-xs font-extrabold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-3 py-1.5 rounded-lg w-full md:w-auto">
                  💡 Kunci: {q.rightText}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: BENAR / SALAH DENGAN ISIAN ALASAN (10 SOAL) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-purple-200 dark:border-purple-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-purple-600"></span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase">
              Bagian D: Memilih Benar / Salah & Kolom Isian Alasan (10 Soal)
            </h4>
          </div>
          <span className="text-xs font-bold text-slate-500">Pilih Benar/Salah dan tuliskan alasannya</span>
        </div>

        <div className="space-y-6">
          {dataBS.map((q) => {
            const userChoice = userBS[q.id];
            return (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                      {q.id}. Pernyataan: "{q.statement}"
                    </div>
                    {q.arabic && (
                      <div className="font-arabic text-xl text-teal-800 dark:text-teal-300 font-bold py-0.5">
                        {q.arabic}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        setUserBS((prev) => ({ ...prev, [q.id]: true }));
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-black border transition cursor-pointer ${
                        userChoice === true
                          ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      BENAR
                    </button>

                    <button
                      onClick={() => {
                        soundFX.playClick();
                        setUserBS((prev) => ({ ...prev, [q.id]: false }));
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-black border transition cursor-pointer ${
                        userChoice === false
                          ? 'bg-rose-600 text-white border-rose-500 shadow-xs'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      SALAH
                    </button>
                  </div>
                </div>

                {/* Kolom Isian Alasan Jawaban Murid */}
                <div className="pt-1">
                  <input
                    type="text"
                    placeholder="Tuliskan alasan pilihan jawabanmu di sini..."
                    value={userBSReason[q.id] || ''}
                    onChange={(e) => setUserBSReason((prev) => ({ ...prev, [q.id]: e.target.value }))}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {showAnswerKey && (
                  <div className="text-xs font-extrabold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-3 py-2 rounded-lg w-full">
                    💡 Kunci: <strong>{q.isTrue ? 'BENAR' : 'SALAH'}</strong> — {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 5: SOAL URAIAN (5 SOAL) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-amber-200 dark:border-amber-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase">
              Bagian E: Soal Uraian (5 Soal Essay HOTS)
            </h4>
          </div>
          <span className="text-xs font-bold text-slate-500">Jawab dengan penjelasannya</span>
        </div>

        <div className="space-y-6">
          {dataEssay.map((q) => (
            <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                {q.id}. {q.question}
              </div>

              <textarea
                rows={3}
                placeholder="Tuliskan jawaban uraianmu di sini..."
                value={userEssay[q.id] || ''}
                onChange={(e) => setUserEssay({ ...userEssay, [q.id]: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />

              {showAnswerKey && (
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs text-purple-900 dark:text-purple-200 space-y-1">
                  <div><strong>Pedoman Penskoran:</strong> {q.rubric}</div>
                  <div><strong>Contoh Jawaban Ideal:</strong> <span className="whitespace-pre-line">{q.sampleAnswer}</span></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL HASIL SKOR */}
      {showScoreModal && calculatedScore !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border-2 border-amber-300 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-extrabold text-teal-600 uppercase tracking-widest">
                Hasil Evaluasi Murid
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Nilai Akhir Uji Pemahaman
              </h3>
              <p className="text-xs text-slate-500">
                Kelas {grade} Pembelajaran {lesson} (Shalat Sunah BAB 4)
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800/80 border border-amber-200 dark:border-slate-700">
              <div className="text-5xl font-black text-amber-600 dark:text-amber-400">
                {calculatedScore} <span className="text-lg text-slate-400">/ 100</span>
              </div>
              <p className="text-xs font-bold text-teal-600 dark:text-teal-400 pt-2">
                {calculatedScore >= 80
                  ? '🌟 Sangat Baik! Ketentuan Shalat Sunah Terpahami Sempurna!'
                  : calculatedScore >= 60
                  ? '👍 Baik! Rajinlah Merutinkan Shalat Sunah.'
                  : '💪 Perlu Lebih Banyak Mengulang Ketentuan Shalat Sunah.'}
              </p>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowScoreModal(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-extrabold text-xs cursor-pointer hover:bg-slate-300"
              >
                Tutup Modal
              </button>
              <button
                onClick={handleResetAnswers}
                className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs cursor-pointer flex items-center gap-1.5"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Ulangi Ujian</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
