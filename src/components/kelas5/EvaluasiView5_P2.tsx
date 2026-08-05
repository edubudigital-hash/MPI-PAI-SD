import React, { useState } from 'react';
import { 
  EVALUASI_P2_PG, 
  EVALUASI_P2_PGK, 
  EVALUASI_P2_MATCHING, 
  EVALUASI_P2_BS, 
  EVALUASI_P2_ESSAY 
} from '../../data/kelas5Pembelajaran2Data';
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

interface EvaluasiView5P2Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView5_P2: React.FC<EvaluasiView5P2Props> = ({ grade, lesson }) => {
  const dataPG = EVALUASI_P2_PG;
  const dataPGK = EVALUASI_P2_PGK;
  const dataMatching = EVALUASI_P2_MATCHING;
  const dataBS = EVALUASI_P2_BS;
  const dataEssay = EVALUASI_P2_ESSAY;

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
      const userSelected = userPGK[q.id] || [];
      const correctArr = q.correctAnswerIndices;
      if (
        userSelected.length === correctArr.length &&
        userSelected.every((val, index) => val === correctArr[index])
      ) {
        totalScore += 3;
      }
    });

    // Matching: 5 soal @ 2 poin = 10 poin
    dataMatching.forEach((q) => {
      if (userMatching[q.id] === q.rightText) {
        totalScore += 2;
      }
    });

    // B/S: 10 soal @ 1.5 poin = 15 poin (jika B/S tepat & alasan diisi)
    dataBS.forEach((q) => {
      const bsAns = userBS[q.id];
      const reason = userBSReason[q.id] || '';
      if (bsAns === q.isTrue && reason.trim().length > 3) {
        totalScore += 1.5;
      }
    });

    // Essay: 5 soal @ 3 poin = 15 poin (jika diisi)
    dataEssay.forEach((q) => {
      const essayAns = userEssay[q.id] || '';
      if (essayAns.trim().length > 10) {
        totalScore += 3;
      }
    });

    const roundedScore = Math.min(100, Math.round(totalScore));
    setCalculatedScore(roundedScore);
    setShowScoreModal(true);
  };

  const handleResetAnswers = () => {
    soundFX.playClick();
    if (window.confirm('Apakah Anda yakin ingin mengosongkan seluruh jawaban?')) {
      setUserPG({});
      setUserPGK({});
      setUserMatching({});
      setUserBS({});
      setUserBSReason({});
      setUserEssay({});
      setCalculatedScore(null);
      setShowScoreModal(false);
      setShowAnswerKey(false);
    }
  };

  const handleDownloadEvaluasi = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>NASKAH EVALUASI PEMBELAJARAN PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Mengenal dan Meneladani Asmaul Husna (Al-Halīm, Asy-Syakūr, Al-Hakīm, Al-Wadūd)</h2>
        <p>Soal Berbasis HOTS & Computational Thinking • SD Kelas V</p>
      </div>

      <div class="section-title">BAGIAN A. SOAL PILIHAN GANDA (10 SOAL)</div>
    `;

    dataPG.forEach((q, idx) => {
      bodyHtml += `
        <div class="card">
          <strong>${idx + 1}. ${q.question}</strong>
          ${q.arabic ? `<div class="arabic" style="font-size: 14pt; margin: 4px 0;">${q.arabic}</div>` : ''}
          <div style="margin-top: 6px; font-size: 9pt;">
            ${q.options.map((opt) => `<div style="margin-bottom: 2px;">${opt}</div>`).join('')}
          </div>
        </div>
      `;
    });

    bodyHtml += `<div class="section-title">BAGIAN B. SOAL PILIHAN GANDA KOMPLEKS (10 SOAL)</div>`;
    dataPGK.forEach((q, idx) => {
      bodyHtml += `
        <div class="card">
          <strong>${idx + 1}. ${q.question}</strong>
          ${q.arabic ? `<div class="arabic" style="font-size: 14pt; margin: 4px 0;">${q.arabic}</div>` : ''}
          <div style="margin-top: 6px; font-size: 9pt;">
            ${q.options.map((opt) => `<div style="margin-bottom: 2px;">[ ] ${opt}</div>`).join('')}
          </div>
        </div>
      `;
    });

    bodyHtml += `<div class="section-title">BAGIAN C. SOAL MENJODOHKAN (5 SOAL)</div>`;
    bodyHtml += `<table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 16px;">
      <thead>
        <tr style="background-color: #065f46; color: white;">
          <th style="padding: 6px; border: 1px solid #cbd5e1;">Pernyataan / Istilah (Kiri)</th>
          <th style="padding: 6px; border: 1px solid #cbd5e1;">Pasangan Jawaban (Kanan)</th>
        </tr>
      </thead>
      <tbody>`;
    dataMatching.forEach((q) => {
      bodyHtml += `
        <tr>
          <td style="padding: 6px; border: 1px solid #cbd5e1; font-weight: bold;">
            ${q.leftText} ${q.leftArabic ? `<span class="arabic" style="font-size: 12pt;">(${q.leftArabic})</span>` : ''}
          </td>
          <td style="padding: 6px; border: 1px solid #cbd5e1;">${q.rightText}</td>
        </tr>
      `;
    });
    bodyHtml += `</tbody></table>`;

    bodyHtml += `<div class="section-title">BAGIAN D. BENAR / SALAH DISERTAI ALASAN (10 SOAL)</div>`;
    dataBS.forEach((q, idx) => {
      bodyHtml += `
        <div class="card">
          <strong>${idx + 1}. Pernyataan:</strong> "${q.statement}"
          <div style="margin-top: 6px; font-size: 9pt;">
            Pilihan: (  ) BENAR   (  ) SALAH<br/>
            <strong>Alasan Murid:</strong> __________________________________________________________________
          </div>
        </div>
      `;
    });

    bodyHtml += `<div class="section-title">BAGIAN E. SOAL URAIAN (5 SOAL)</div>`;
    dataEssay.forEach((q, idx) => {
      bodyHtml += `
        <div class="card">
          <strong>${idx + 1}. ${q.question}</strong>
          <div style="margin-top: 10px; border-bottom: 1px dashed #cbd5e1; min-height: 40px;"></div>
        </div>
      `;
    });

    printOrDownloadDocument(
      `Evaluasi_PAI_Kelas_${grade}_Pembelajaran_${lesson}`,
      `Soal Evaluasi Asmaul Husna (Al-Halīm, Asy-Syakūr, Al-Hakīm, Al-Wadūd)`,
      bodyHtml
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-indigo-900 rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
            <ClipboardCheck className="w-5 h-5" />
            <span>Evaluasi Pembelajaran Interaktif • Kelas {grade} Pembelajaran {lesson}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-amber-200">
            Evaluasi Asmaul Husna (HOTS & CT)
          </h2>
          <p className="text-emerald-100 text-sm mt-1">
            10 PG • 10 PGK • 5 Menjodohkan • 10 Benar/Salah + Alasan • 5 Uraian
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKey(!showAnswerKey);
            }}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition ${
              showAnswerKey
                ? 'bg-amber-400 text-slate-900 hover:bg-amber-300'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>{showAnswerKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            onClick={handleCalculateScore}
            className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 rounded-xl font-extrabold text-xs shadow-md transition-transform hover:scale-105"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          <button
            onClick={handleDownloadEvaluasi}
            className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition-transform hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>

          <button
            onClick={handleResetAnswers}
            className="p-2.5 rounded-xl bg-slate-700/50 hover:bg-slate-700 text-slate-200 transition"
            title="Reset Perolehan"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Score Modal Banner */}
      {showScoreModal && calculatedScore !== null && (
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 p-6 rounded-2xl shadow-lg flex items-center justify-between border border-amber-300 animate-fade-in">
          <div className="flex items-center gap-4">
            <Award className="w-12 h-12 text-slate-950 shrink-0" />
            <div>
              <span className="text-xs font-black uppercase tracking-wider block opacity-80">
                Hasil Nilai Evaluasi Pembelajaran
              </span>
              <h3 className="text-3xl font-black">
                {calculatedScore} / 100 Poin
              </h3>
              <p className="text-xs font-semibold opacity-90 mt-0.5">
                {calculatedScore >= 80
                  ? 'Sangat Luar Biasa! Kamu sangat menguasai Asmaul Husna!'
                  : calculatedScore >= 70
                  ? 'Bagus! Tingkatkan latihan untuk nilai sempurna!'
                  : 'Tetap Semangat! Pelajari materi slide Asmaul Husna kembali.'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowScoreModal(false)}
            className="bg-slate-950 text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-slate-800"
          >
            Tutup
          </button>
        </div>
      )}

      {/* BAGIAN A: PILIHAN GANDA (10 SOAL) */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-emerald-100 space-y-6">
        <div className="border-b border-emerald-100 pb-3 flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-emerald-900 flex items-center gap-2">
            <span className="w-7 h-7 bg-emerald-700 text-white rounded-lg flex items-center justify-center text-xs">A</span>
            Bagian A: Soal Pilihan Ganda (10 Soal)
          </h3>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Bobot: 30 Poin
          </span>
        </div>

        <div className="space-y-6">
          {dataPG.map((q, idx) => (
            <div key={q.id} className="space-y-3 p-4 bg-slate-50/60 rounded-xl border border-slate-200/80">
              <div className="flex items-start justify-between gap-3">
                <p className="font-bold text-slate-800 text-sm md:text-base leading-relaxed">
                  {idx + 1}. {q.question}
                </p>
              </div>

              {q.arabic && (
                <p className="text-2xl font-bold text-emerald-800 text-right font-serif leading-loose my-2">
                  {q.arabic}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                {q.options.map((opt, oIdx) => {
                  const isSelected = userPG[q.id] === oIdx;
                  const isCorrectOpt = q.correctAnswerIndex === oIdx;

                  let optClass = 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-50';
                  if (isSelected) {
                    optClass = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                  }
                  if (showAnswerKey && isCorrectOpt) {
                    optClass = 'bg-amber-100 border-amber-500 text-amber-900 font-bold';
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => {
                        soundFX.playClick();
                        setUserPG({ ...userPG, [q.id]: oIdx });
                      }}
                      className={`text-left p-3 rounded-xl border text-xs md:text-sm font-medium transition flex items-center justify-between ${optClass}`}
                    >
                      <span>{opt}</span>
                      {showAnswerKey && isCorrectOpt && (
                        <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 ml-1" />
                      )}
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 font-medium mt-2">
                  <strong className="block font-bold">Kunci & Pembahasan:</strong> {q.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* BAGIAN B: PILIHAN GANDA KOMPLEKS (10 SOAL) */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-emerald-100 space-y-6">
        <div className="border-b border-emerald-100 pb-3 flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-emerald-900 flex items-center gap-2">
            <span className="w-7 h-7 bg-emerald-700 text-white rounded-lg flex items-center justify-center text-xs">B</span>
            Bagian B: Pilihan Ganda Kompleks (10 Soal • Centang Lebih dari Satu)
          </h3>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Bobot: 30 Poin
          </span>
        </div>

        <div className="space-y-6">
          {dataPGK.map((q, idx) => {
            const selectedOpts = userPGK[q.id] || [];
            return (
              <div key={q.id} className="space-y-3 p-4 bg-slate-50/60 rounded-xl border border-slate-200/80">
                <p className="font-bold text-slate-800 text-sm md:text-base leading-relaxed">
                  {idx + 1}. {q.question}
                </p>

                {q.arabic && (
                  <p className="text-2xl font-bold text-emerald-800 text-right font-serif leading-loose my-2">
                    {q.arabic}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, oIdx) => {
                    const isChecked = selectedOpts.includes(oIdx);
                    const isCorrectOpt = q.correctAnswerIndices.includes(oIdx);

                    let itemClass = 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-50';
                    if (isChecked) {
                      itemClass = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                    }
                    if (showAnswerKey && isCorrectOpt) {
                      itemClass = 'bg-amber-100 border-amber-400 text-amber-900 font-bold';
                    }

                    return (
                      <label
                        key={oIdx}
                        className={`cursor-pointer p-3 rounded-xl border text-xs md:text-sm font-medium transition flex items-center gap-3 ${itemClass}`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleTogglePGKOption(q.id, oIdx)}
                          className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                        />
                        <span className="flex-1">{opt}</span>
                      </label>
                    );
                  })}
                </div>

                {showAnswerKey && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 font-medium mt-2">
                    <strong className="block font-bold">Kunci & Pembahasan:</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* BAGIAN C: SOAL MENJODOHKAN (5 SOAL) */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-emerald-100 space-y-6">
        <div className="border-b border-emerald-100 pb-3 flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-emerald-900 flex items-center gap-2">
            <span className="w-7 h-7 bg-emerald-700 text-white rounded-lg flex items-center justify-center text-xs">C</span>
            Bagian C: Soal Menjodohkan (5 Soal)
          </h3>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Bobot: 10 Poin
          </span>
        </div>

        <div className="space-y-4">
          {dataMatching.map((item, idx) => (
            <div
              key={item.id}
              className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="md:w-1/2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Pernyataan {idx + 1}
                </span>
                <p className="font-bold text-slate-800 text-sm mt-1">
                  {item.leftText} {item.leftArabic && <span className="font-serif text-emerald-800 font-bold ml-1">({item.leftArabic})</span>}
                </p>
              </div>

              <div className="md:w-1/2">
                <select
                  value={userMatching[item.id] || ''}
                  onChange={(e) => {
                    soundFX.playClick();
                    setUserMatching({ ...userMatching, [item.id]: e.target.value });
                  }}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs md:text-sm font-medium focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="">-- Pilih Pasangan Jawaban Yang Tepat --</option>
                  {dataMatching.map((rOpt) => (
                    <option key={rOpt.id} value={rOpt.rightText}>
                      {rOpt.rightText}
                    </option>
                  ))}
                </select>

                {showAnswerKey && (
                  <p className="text-xs text-emerald-700 font-bold mt-1">
                    ✓ Kunci Pasangan: {item.rightText}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BAGIAN D: BENAR / SALAH + ISIAN ALASAN (10 SOAL) */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-emerald-100 space-y-6">
        <div className="border-b border-emerald-100 pb-3 flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-emerald-900 flex items-center gap-2">
            <span className="w-7 h-7 bg-emerald-700 text-white rounded-lg flex items-center justify-center text-xs">D</span>
            Bagian D: Soal Benar / Salah Disertai Isian Kolom Alasan (10 Soal)
          </h3>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Bobot: 15 Poin
          </span>
        </div>

        <div className="space-y-6">
          {dataBS.map((q, idx) => (
            <div key={q.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <p className="font-bold text-slate-800 text-sm md:text-base">
                {idx + 1}. Pernyataan: "{q.statement}"
              </p>

              {q.arabic && (
                <p className="text-xl font-bold text-emerald-800 text-right font-serif">
                  {q.arabic}
                </p>
              )}

              {/* Radio True/False */}
              <div className="flex items-center gap-4 pt-1">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-sm text-slate-700">
                  <input
                    type="radio"
                    name={`bs_${q.id}`}
                    checked={userBS[q.id] === true}
                    onChange={() => {
                      soundFX.playClick();
                      setUserBS({ ...userBS, [q.id]: true });
                    }}
                    className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                  />
                  BENAR
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-bold text-sm text-slate-700">
                  <input
                    type="radio"
                    name={`bs_${q.id}`}
                    checked={userBS[q.id] === false}
                    onChange={() => {
                      soundFX.playClick();
                      setUserBS({ ...userBS, [q.id]: false });
                    }}
                    className="w-4 h-4 text-rose-600 focus:ring-rose-500"
                  />
                  SALAH
                </label>
              </div>

              {/* Input Kolom Alasan */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600">
                  Isikan Alasan/Penjelasan Jawabanmu:
                </label>
                <textarea
                  rows={2}
                  value={userBSReason[q.id] || ''}
                  onChange={(e) => setUserBSReason({ ...userBSReason, [q.id]: e.target.value })}
                  placeholder="Ketikkan alasan mengapa pernyataan di atas Benar atau Salah..."
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs md:text-sm focus:ring-2 focus:ring-emerald-500 bg-white"
                />
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 font-medium">
                  <strong className="block font-bold">Kunci Pernyataan: {q.isTrue ? 'BENAR' : 'SALAH'}</strong>
                  <span>Penjelasan Alasan: {q.explanation}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* BAGIAN E: SOAL URAIAN (5 SOAL) */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-emerald-100 space-y-6">
        <div className="border-b border-emerald-100 pb-3 flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-emerald-900 flex items-center gap-2">
            <span className="w-7 h-7 bg-emerald-700 text-white rounded-lg flex items-center justify-center text-xs">E</span>
            Bagian E: Soal Uraian HOTS (5 Soal)
          </h3>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Bobot: 15 Poin
          </span>
        </div>

        <div className="space-y-6">
          {dataEssay.map((q, idx) => (
            <div key={q.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <p className="font-bold text-slate-800 text-sm md:text-base leading-relaxed">
                {idx + 1}. {q.question}
              </p>

              {q.arabic && (
                <p className="text-2xl font-bold text-emerald-800 text-right font-serif my-1">
                  {q.arabic}
                </p>
              )}

              <textarea
                rows={3}
                value={userEssay[q.id] || ''}
                onChange={(e) => setUserEssay({ ...userEssay, [q.id]: e.target.value })}
                placeholder="Tuliskan jawaban uraian lengkapmu di sini..."
                className="w-full p-3 rounded-xl border border-slate-300 text-xs md:text-sm focus:ring-2 focus:ring-emerald-500 bg-white"
              />

              {showAnswerKey && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                  <strong className="block font-bold text-amber-950">Rubrik Penilaian:</strong>
                  <p className="text-amber-800">{q.rubric}</p>
                  <strong className="block font-bold text-amber-950 mt-2">Contoh Jawaban Ideal:</strong>
                  <p className="whitespace-pre-line text-slate-800 font-medium bg-white p-2.5 rounded border border-amber-200">{q.sampleAnswer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
