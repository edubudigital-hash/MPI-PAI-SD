import React, { useState } from 'react';
import { 
  KELAS5_P3_PG, 
  KELAS5_P3_PGK, 
  KELAS5_P3_MATCHING, 
  KELAS5_P3_BS, 
  KELAS5_P3_ESSAY 
} from '../../data/kelas5Pembelajaran3Data';
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

interface EvaluasiView5P3Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView5_P3: React.FC<EvaluasiView5P3Props> = ({ grade, lesson }) => {
  const dataPG = KELAS5_P3_PG;
  const dataPGK = KELAS5_P3_PGK;
  const dataMatching = KELAS5_P3_MATCHING;
  const dataBS = KELAS5_P3_BS;
  const dataEssay = KELAS5_P3_ESSAY;

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
        <h1>SOAL EVALUASI PEMBELAJARAN PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Akhlak Kepada Allah Swt. Melalui Doa dan Tawakal</h2>
        <p>Paket Soal HOTS & Computational Thinking • SD Kelas V</p>
      </div>

      <!-- Bagian I: PG -->
      <div class="section-title">BAGIAN I: 10 SOAL PILIHAN GANDA (PG)</div>
    `;

    dataPG.forEach((q, idx) => {
      bodyHtml += `
        <div class="card">
          <p style="margin: 0 0 6px 0; font-weight: bold; font-size: 9.5pt;">${idx + 1}. ${q.question.replace(/\n/g, '<br/>')}</p>
          ${q.arabic ? `<p style="font-family: 'Traditional Arabic', serif; font-size: 14pt; font-weight: bold; text-align: right; margin: 4px 0;">${q.arabic}</p>` : ''}
          <div style="margin-left: 10px; font-size: 9pt;">
            ${q.options.map((opt) => `<div style="margin-bottom: 2px;">${opt}</div>`).join('')}
          </div>
          ${showAnswerKey ? `<div style="margin-top: 6px; padding: 4px 8px; background-color: #f0fdf4; border-left: 3px solid #16a34a; font-size: 8.5pt;"><strong>Kunci Jawaban:</strong> Pilihan Index ${q.correctAnswerIndex + 1}<br/><em>Penjelasan:</em> ${q.explanation}</div>` : ''}
        </div>
      `;
    });

    // Bagian II: PGK
    bodyHtml += `<div class="section-title">BAGIAN II: 10 SOAL PILIHAN GANDA KOMPLEKS (PGK - PILIH LEBIH DARI SATU)</div>`;
    dataPGK.forEach((q, idx) => {
      bodyHtml += `
        <div class="card">
          <p style="margin: 0 0 6px 0; font-weight: bold; font-size: 9.5pt;">${idx + 1}. ${q.question.replace(/\n/g, '<br/>')}</p>
          ${q.arabic ? `<p style="font-family: 'Traditional Arabic', serif; font-size: 14pt; font-weight: bold; text-align: right; margin: 4px 0;">${q.arabic}</p>` : ''}
          <div style="margin-left: 10px; font-size: 9pt;">
            ${q.options.map((opt) => `<div style="margin-bottom: 2px;">[ ] ${opt}</div>`).join('')}
          </div>
          ${showAnswerKey ? `<div style="margin-top: 6px; padding: 4px 8px; background-color: #f0fdf4; border-left: 3px solid #16a34a; font-size: 8.5pt;"><strong>Kunci Jawaban:</strong> Opsi [${q.correctAnswerIndices.map((i) => i + 1).join(', ')}]<br/><em>Penjelasan:</em> ${q.explanation}</div>` : ''}
        </div>
      `;
    });

    // Bagian III: Matching
    bodyHtml += `<div class="section-title">BAGIAN III: 5 SOAL MENJODOHKAN</div>`;
    bodyHtml += `
      <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 12px;">
        <thead>
          <tr style="background-color: #0d9488; color: white;">
            <th style="padding: 6px; border: 1px solid #cbd5e1; width: 40%;">Pernyataan / Istilah Kiri</th>
            <th style="padding: 6px; border: 1px solid #cbd5e1; width: 60%;">Jawaban / Pasangan Kanan</th>
          </tr>
        </thead>
        <tbody>
          ${dataMatching.map((m) => `
            <tr>
              <td style="padding: 6px; border: 1px solid #cbd5e1;"><strong>${m.leftText}</strong> ${m.leftArabic ? `<br/><span style="font-family: 'Traditional Arabic', serif; font-size: 12pt;">${m.leftArabic}</span>` : ''}</td>
              <td style="padding: 6px; border: 1px solid #cbd5e1;">${m.rightText}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    // Bagian IV: Benar/Salah + Alasan
    bodyHtml += `<div class="section-title">BAGIAN IV: 10 SOAL BENAR / SALAH (SERTAKAN ALASAN)</div>`;
    dataBS.forEach((q, idx) => {
      bodyHtml += `
        <div class="card">
          <p style="margin: 0 0 4px 0; font-weight: bold; font-size: 9.5pt;">${idx + 1}. Pernyataan: "${q.statement}"</p>
          <p style="font-size: 8.5pt; color: #475569; margin-bottom: 4px;">Pilihan: [ ] BENAR  |  [ ] SALAH</p>
          <div style="border: 1px dashed #cbd5e1; padding: 6px; min-height: 24px; font-size: 8.5pt; color: #94a3b8;">Kolom Isian Alasan Murid: ............................................................................................................</div>
          ${showAnswerKey ? `<div style="margin-top: 6px; padding: 4px 8px; background-color: #f0fdf4; border-left: 3px solid #16a34a; font-size: 8.5pt;"><strong>Kunci Kategori:</strong> ${q.isTrue ? 'BENAR' : 'SALAH'}<br/><em>Kunci Alasan:</em> ${q.explanation}</div>` : ''}
        </div>
      `;
    });

    // Bagian V: Uraian / Essay
    bodyHtml += `<div class="section-title">BAGIAN V: 5 SOAL URAIAN (ESSAY)</div>`;
    dataEssay.forEach((q, idx) => {
      bodyHtml += `
        <div class="card">
          <p style="margin: 0 0 6px 0; font-weight: bold; font-size: 9.5pt;">${idx + 1}. ${q.question}</p>
          ${q.arabic ? `<p style="font-family: 'Traditional Arabic', serif; font-size: 14pt; font-weight: bold; text-align: right; margin: 4px 0;">${q.arabic}</p>` : ''}
          <div style="border: 1px solid #e2e8f0; padding: 8px; min-height: 40px; font-size: 8.5pt; color: #94a3b8;">Lembar Jawaban Murid: ............................................................................................................</div>
          ${showAnswerKey ? `
            <div style="margin-top: 6px; padding: 6px; background-color: #f0fdf4; border: 1px solid #bbf7d0; font-size: 8.5pt;">
              <strong style="color: #166534;">Sampel Jawaban Ideal:</strong>
              <p style="margin: 2px 0; color: #14532d;">${q.sampleAnswer.replace(/\n/g, '<br/>')}</p>
              <strong style="color: #0f766e;">Rubrik Penilaian:</strong>
              <p style="margin: 2px 0; color: #0f766e; white-space: pre-line;">${q.rubric}</p>
            </div>
          ` : ''}
        </div>
      `;
    });

    printOrDownloadDocument(
      `Evaluasi PAI Kelas 5 Pembelajaran 3`,
      `Akhlak Kepada Allah Swt. Melalui Doa dan Tawakal`,
      bodyHtml
    );
  };

  return (
    <div id="evaluasi-5-3" className="max-w-5xl mx-auto p-4 md:p-6 space-y-8">
      {/* Banner Header */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide mb-2">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Evaluasi Pembelajaran PAI • HOTS & Computational Thinking</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Evaluasi Kelas 5 Pembelajaran 3
          </h1>
          <p className="text-teal-100 text-sm mt-1">
            Akhlak Kepada Allah Swt. Melalui Doa dan Tawakal (10 PG, 10 PGK, 5 Menjodohkan, 10 Benar/Salah, 5 Uraian)
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKey(!showAnswerKey);
            }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
              showAnswerKey
                ? 'bg-amber-400 text-amber-950 hover:bg-amber-300'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>{showAnswerKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            onClick={handleCalculateScore}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          <button
            onClick={handleDownloadEvaluasi}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white text-teal-800 hover:bg-teal-50 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Evaluasi</span>
          </button>
        </div>
      </div>

      {/* Score Modal */}
      {showScoreModal && calculatedScore !== null && (
        <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner shrink-0">
              {calculatedScore}
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-950">
                Hasil Nilai Evaluasi Sementara
              </h3>
              <p className="text-xs text-emerald-800">
                Skor dihitung dari Pilihan Ganda (PG), PGK, Menjodohkan, B/S + Alasan, dan Uraian yang telah diisi.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowScoreModal(false)}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors shrink-0"
          >
            Tutup Tampilan Skor
          </button>
        </div>
      )}

      {/* BAGIAN I: 10 SOAL PG */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 bg-teal-100 text-teal-800 rounded-lg flex items-center justify-center text-xs font-black">
              I
            </span>
            10 Soal Pilihan Ganda (PG)
          </h2>
          <span className="text-xs font-semibold text-slate-400">Pilih 1 Jawaban Tepat</span>
        </div>

        <div className="space-y-6">
          {dataPG.map((q, qIdx) => (
            <div key={q.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-3">
              <p className="text-sm md:text-base font-bold text-slate-800 leading-relaxed whitespace-pre-line">
                {qIdx + 1}. {q.question}
              </p>

              {q.arabic && (
                <p className="font-arabic text-xl text-right font-bold text-teal-900 pr-2">
                  {q.arabic}
                </p>
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
                      className={`text-left p-3 rounded-xl border text-xs md:text-sm transition-all ${
                        isSelected
                          ? 'bg-teal-600 border-teal-600 text-white font-semibold shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-teal-50'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                  <p className="font-bold">🔑 Kunci Jawaban: {q.options[q.correctAnswerIndex]}</p>
                  <p className="text-amber-800">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BAGIAN II: 10 SOAL PGK */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 bg-emerald-100 text-emerald-800 rounded-lg flex items-center justify-center text-xs font-black">
              II
            </span>
            10 Soal Pilihan Ganda Kompleks (PGK)
          </h2>
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
            Pilih Lebih dari Satu
          </span>
        </div>

        <div className="space-y-6">
          {dataPGK.map((q, qIdx) => {
            const userSelections = userPGK[q.id] || [];
            return (
              <div key={q.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-3">
                <p className="text-sm md:text-base font-bold text-slate-800 leading-relaxed whitespace-pre-line">
                  {qIdx + 1}. {q.question}
                </p>

                {q.arabic && (
                  <p className="font-arabic text-xl text-right font-bold text-teal-900 pr-2">
                    {q.arabic}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isChecked = userSelections.includes(optIdx);
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleTogglePGKOption(q.id, optIdx)}
                        className={`text-left p-3 rounded-xl border text-xs md:text-sm transition-all flex items-start gap-2.5 ${
                          isChecked
                            ? 'bg-emerald-600 border-emerald-600 text-white font-semibold shadow-sm'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-50'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                          isChecked ? 'bg-white text-emerald-700 font-bold text-xs' : 'border-slate-300'
                        }`}>
                          {isChecked ? '✓' : ''}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {showAnswerKey && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                    <p className="font-bold">
                      🔑 Kunci Jawaban: {q.correctAnswerIndices.map((i) => q.options[i]).join(' | ')}
                    </p>
                    <p className="text-amber-800">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BAGIAN III: 5 SOAL MENJODOHKAN */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center text-xs font-black">
              III
            </span>
            5 Soal Menjodohkan (Matching)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Pasangkan setiap istilah di sebelah kiri dengan deskripsi tepat di sebelah kanan</p>
        </div>

        <div className="space-y-4">
          {dataMatching.map((m, idx) => (
            <div key={m.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="md:w-1/2 space-y-1">
                <span className="text-xs font-bold text-indigo-600 uppercase">Pernyataan {idx + 1}</span>
                <p className="text-sm font-bold text-slate-800">{m.leftText}</p>
                {m.leftArabic && (
                  <p className="font-arabic text-base font-bold text-indigo-900">{m.leftArabic}</p>
                )}
              </div>

              <div className="md:w-1/2 w-full">
                <select
                  value={userMatching[m.id] || ''}
                  onChange={(e) => {
                    soundFX.playClick();
                    setUserMatching({ ...userMatching, [m.id]: e.target.value });
                  }}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs md:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">-- Pilih Pasangan Kanan --</option>
                  {dataMatching.map((opt) => (
                    <option key={opt.id} value={opt.rightText}>
                      {opt.rightText}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        {showAnswerKey && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-2">
            <p className="font-bold">🔑 Kunci Jawaban Menjodohkan:</p>
            <ul className="list-disc pl-5 space-y-1">
              {dataMatching.map((m) => (
                <li key={m.id}>
                  <strong>{m.leftText}</strong> ➔ {m.rightText}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* BAGIAN IV: 10 SOAL BENAR / SALAH + ISIAN ALASAN */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 bg-amber-100 text-amber-800 rounded-lg flex items-center justify-center text-xs font-black">
              IV
            </span>
            10 Soal Benar / Salah (Sertakan Kolom Alasan)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Tentukan status BENAR/SALAH dan tuliskan alasan singkat pembuktiannya</p>
        </div>

        <div className="space-y-6">
          {dataBS.map((q, qIdx) => (
            <div key={q.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-3">
              <p className="text-sm md:text-base font-bold text-slate-800">
                {qIdx + 1}. Pernyataan: "{q.statement}"
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setUserBS({ ...userBS, [q.id]: true });
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    userBS[q.id] === true
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-emerald-50'
                  }`}
                >
                  BENAR
                </button>

                <button
                  onClick={() => {
                    soundFX.playClick();
                    setUserBS({ ...userBS, [q.id]: false });
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    userBS[q.id] === false
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-rose-50'
                  }`}
                >
                  SALAH
                </button>
              </div>

              {/* Kolom Isian Alasan */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600">Alasan Kamu:</label>
                <input
                  type="text"
                  placeholder="Tuliskan alasan mengapa Anda memilih Benar atau Salah..."
                  value={userBSReason[q.id] || ''}
                  onChange={(e) => setUserBSReason({ ...userBSReason, [q.id]: e.target.value })}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs md:text-sm text-slate-800 focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {showAnswerKey && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                  <p className="font-bold">🔑 Kunci Kategori: {q.isTrue ? 'BENAR' : 'SALAH'}</p>
                  <p className="text-amber-800">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BAGIAN V: 5 SOAL URAIAN (ESSAY) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 bg-purple-100 text-purple-800 rounded-lg flex items-center justify-center text-xs font-black">
              V
            </span>
            5 Soal Uraian (Essay HOTS)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Jawablah pertanyaan uraian berikut dengan analisis mendalam dan jelas</p>
        </div>

        <div className="space-y-6">
          {dataEssay.map((q, qIdx) => (
            <div key={q.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-3">
              <p className="text-sm md:text-base font-bold text-slate-800 leading-relaxed">
                {qIdx + 1}. {q.question}
              </p>

              {q.arabic && (
                <p className="font-arabic text-xl text-right font-bold text-teal-900 pr-2">
                  {q.arabic}
                </p>
              )}

              <textarea
                rows={4}
                placeholder="Tuliskan jawaban lengkap Anda di sini..."
                value={userEssay[q.id] || ''}
                onChange={(e) => setUserEssay({ ...userEssay, [q.id]: e.target.value })}
                className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs md:text-sm text-slate-800 focus:ring-2 focus:ring-teal-500"
              />

              {showAnswerKey && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-2">
                  <div>
                    <strong className="text-amber-950 font-bold">💡 Sampel Jawaban Ideal:</strong>
                    <p className="text-amber-800 mt-0.5 leading-relaxed whitespace-pre-line">{q.sampleAnswer}</p>
                  </div>
                  <div className="border-t border-amber-200/60 pt-2">
                    <strong className="text-amber-950 font-bold">📋 Rubrik Penilaian:</strong>
                    <p className="text-amber-800 mt-0.5 whitespace-pre-line">{q.rubric}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Reset Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={handleResetAnswers}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Kosongkan Seluruh Lembar Jawab</span>
        </button>
      </div>
    </div>
  );
};
