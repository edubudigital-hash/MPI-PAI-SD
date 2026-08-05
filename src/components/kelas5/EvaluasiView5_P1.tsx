import React, { useState } from 'react';
import { 
  EVALUASI_P1_PG, 
  EVALUASI_P1_PGK, 
  EVALUASI_P1_MATCHING, 
  EVALUASI_P1_BS, 
  EVALUASI_P1_ESSAY 
} from '../../data/kelas5Pembelajaran1Data';
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

interface EvaluasiView5P1Props {
  grade: number;
  lesson: number;
}

export const EvaluasiView5_P1: React.FC<EvaluasiView5P1Props> = ({ grade, lesson }) => {
  const dataPG = EVALUASI_P1_PG;
  const dataPGK = EVALUASI_P1_PGK;
  const dataMatching = EVALUASI_P1_MATCHING;
  const dataBS = EVALUASI_P1_BS;
  const dataEssay = EVALUASI_P1_ESSAY;

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

    setCalculatedScore(totalScore);
    setShowScoreModal(true);
    if (totalScore >= 75) {
      soundFX.playFanfare();
    } else {
      soundFX.playCorrect();
    }
  };

  // Download PDF Evaluasi Pembelajaran
  const handleDownloadEvaluasi = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>NASKAH EVALUASI PEMBELAJARAN PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Membaca, Menulis, dan Membedakan Huruf Hijaiyah Bersambung Tiga Kata atau Lebih dengan Praktik Membaca Mim Sukun & Surat Al-'Asr</h2>
        <p>Soal Berbasis HOTS (Higher Order Thinking Skills) & Computational Thinking • SD Kelas V</p>
      </div>
    `;

    // A. PG
    bodyHtml += `
      <div class="card">
        <h3 style="color: #0d9488; margin-top: 0;">BAGIAN A: PILIHAN GANDA (10 SOAL)</h3>
        <p style="font-size: 9pt; color: #64748b; margin-bottom: 12px;">Pilihlah satu jawaban yang paling tepat!</p>
    `;
    dataPG.forEach((q, idx) => {
      bodyHtml += `
        <div style="margin-bottom: 12px; font-size: 9.5pt; page-break-inside: avoid;">
          <strong>${idx + 1}. ${q.question}</strong>
          ${q.arabic ? `<div class="arabic" style="font-size: 16pt; margin: 4px 0;">${q.arabic}</div>` : ''}
          <div style="margin-left: 14px; margin-top: 4px;">
            ${q.options.map((opt) => `<div style="margin-bottom: 2px;">${opt}</div>`).join('')}
          </div>
          ${showAnswerKey ? `<div style="background-color: #f0fdf4; color: #166534; padding: 4px 8px; margin-top: 4px; border-radius: 4px; font-size: 8.5pt;"><strong>Kunci & Pembahasan:</strong> ${q.options[q.correctAnswerIndex]} - ${q.explanation}</div>` : ''}
        </div>
      `;
    });
    bodyHtml += `</div>`;

    // B. PGK
    bodyHtml += `
      <div class="card">
        <h3 style="color: #0d9488; margin-top: 0;">BAGIAN B: PILIHAN GANDA KOMPLEKS (10 SOAL)</h3>
        <p style="font-size: 9pt; color: #64748b; margin-bottom: 12px;">Pilihlah lebih dari satu jawaban yang benar!</p>
    `;
    dataPGK.forEach((q, idx) => {
      bodyHtml += `
        <div style="margin-bottom: 12px; font-size: 9.5pt; page-break-inside: avoid;">
          <strong>${idx + 1}. ${q.question}</strong>
          ${q.arabic ? `<div class="arabic" style="font-size: 16pt; margin: 4px 0;">${q.arabic}</div>` : ''}
          <div style="margin-left: 14px; margin-top: 4px;">
            ${q.options.map((opt) => `<div style="margin-bottom: 2px;">[  ] ${opt}</div>`).join('')}
          </div>
          ${showAnswerKey ? `<div style="background-color: #f0fdf4; color: #166534; padding: 4px 8px; margin-top: 4px; border-radius: 4px; font-size: 8.5pt;"><strong>Kunci & Pembahasan:</strong> Opsi [${q.correctAnswerIndices.map((i) => String.fromCharCode(65 + i)).join(', ')}] - ${q.explanation}</div>` : ''}
        </div>
      `;
    });
    bodyHtml += `</div>`;

    // C. MATCHING
    bodyHtml += `
      <div class="card">
        <h3 style="color: #0d9488; margin-top: 0;">BAGIAN C: MENJODOHKAN (5 SOAL)</h3>
        <p style="font-size: 9pt; color: #64748b; margin-bottom: 12px;">Pasangkanlah pernyataan di sebelah kiri dengan jawaban di sebelah kanan secara tepat!</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 9pt;">
          <thead>
            <tr style="background-color: #0d9488; color: white;">
              <th style="padding: 6px; border: 1px solid #cbd5e1; width: 45%;">Pernyataan / Istilah</th>
              <th style="padding: 6px; border: 1px solid #cbd5e1; width: 55%;">Pasangan Pas yang Sesuai</th>
            </tr>
          </thead>
          <tbody>
    `;
    dataMatching.forEach((q) => {
      bodyHtml += `
        <tr>
          <td style="padding: 8px; border: 1px solid #cbd5e1;">
            <strong>${q.leftText}</strong>
            ${q.leftArabic ? `<div class="arabic" style="font-size: 14pt;">${q.leftArabic}</div>` : ''}
          </td>
          <td style="padding: 8px; border: 1px solid #cbd5e1; background-color: #f8fafc;">
            ${showAnswerKey ? `<span style="color: #059669; font-weight: bold;">✔ ${q.rightText}</span>` : `<span style="color: #94a3b8; font-style: italic;">...............................................................</span>`}
          </td>
        </tr>
      `;
    });
    bodyHtml += `</tbody></table></div>`;

    // D. BENAR ATAU SALAH
    bodyHtml += `
      <div class="card">
        <h3 style="color: #0d9488; margin-top: 0;">BAGIAN D: BENAR ATAU SALAH DISERTAI ALASAN (10 SOAL)</h3>
        <p style="font-size: 9pt; color: #64748b; margin-bottom: 12px;">Tentukan apakah pernyataan berikut BENAR (B) atau SALAH (S) serta tuliskan alasannya!</p>
    `;
    dataBS.forEach((q, idx) => {
      bodyHtml += `
        <div style="margin-bottom: 12px; font-size: 9.5pt; page-break-inside: avoid;">
          <strong>${idx + 1}. ${q.statement}</strong>
          ${q.arabic ? `<div class="arabic" style="font-size: 16pt; margin: 4px 0;">${q.arabic}</div>` : ''}
          <div style="margin: 4px 0 4px 14px; font-weight: bold;">[  ] BENAR   [  ] SALAH</div>
          <div style="margin-left: 14px; font-size: 8.5pt; color: #475569;">Alasan: ............................................................................................................</div>
          ${showAnswerKey ? `<div style="background-color: #f0fdf4; color: #166534; padding: 4px 8px; margin-top: 4px; border-radius: 4px; font-size: 8.5pt;"><strong>Kunci & Alasan:</strong> Jawaban yang benar adalah <strong>${q.isTrue ? 'BENAR' : 'SALAH'}</strong>. ${q.explanation}</div>` : ''}
        </div>
      `;
    });
    bodyHtml += `</div>`;

    // E. ESSAY
    bodyHtml += `
      <div class="card">
        <h3 style="color: #0d9488; margin-top: 0;">BAGIAN E: SOAL URAIAN / ESSAY (5 SOAL)</h3>
        <p style="font-size: 9pt; color: #64748b; margin-bottom: 12px;">Jawablah pertanyaan berikut secara lengkap dan jelas!</p>
    `;
    dataEssay.forEach((q, idx) => {
      bodyHtml += `
        <div style="margin-bottom: 14px; font-size: 9.5pt; page-break-inside: avoid;">
          <strong>${idx + 1}. ${q.question}</strong>
          ${q.arabic ? `<div class="arabic" style="font-size: 16pt; margin: 4px 0;">${q.arabic}</div>` : ''}
          <div style="margin-top: 6px; border-bottom: 1px dashed #cbd5e1; height: 40px;"></div>
          ${showAnswerKey ? `<div style="background-color: #f0fdf4; color: #166534; padding: 6px 8px; margin-top: 4px; border-radius: 4px; font-size: 8.5pt;"><strong>Rubrik & Contoh Jawaban:</strong> ${q.sampleAnswer}</div>` : ''}
        </div>
      `;
    });
    bodyHtml += `</div>`;

    printOrDownloadDocument(
      `Evaluasi_PAI_Kelas_${grade}_P${lesson}_Hijaiyah_MimSukun_AlAsr.pdf`,
      `Lembar Evaluasi PAI Kelas ${grade} Bab ${lesson} - Hijaiyah Bersambung, Mim Sukun & Surat Al-'Asr`,
      bodyHtml
    );
  };

  return (
    <div id="evaluasi-view-v5-p1" className="space-y-6 max-w-5xl mx-auto">
      {/* HEADER BANNER EVALUASI */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-700 to-indigo-900 text-white rounded-3xl p-6 shadow-xl border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <ClipboardCheck className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider block">
              Evaluasi Pembelajaran Terpadu (HOTS & Computational Thinking)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold pt-0.5">
              Kelas {grade} • Pembelajaran {lesson} (BAB 1)
            </h3>
            <p className="text-xs text-emerald-100 font-medium">
              40 Soal: 10 PG • 10 PGK • 5 Menjodohkan • 10 Benar/Salah + Alasan • 5 Uraian
            </p>
          </div>
        </div>

        {/* Action Buttons Header */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            id="btn-show-key-p1"
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKey(!showAnswerKey);
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center space-x-2 border transition cursor-pointer ${
              showAnswerKey
                ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/30'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>{showAnswerKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            id="btn-calculate-score-p1"
            onClick={handleCalculateScore}
            className="px-4 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs flex items-center space-x-2 border border-emerald-300 shadow-md transition cursor-pointer"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          <button
            id="btn-download-evaluasi-p1"
            onClick={handleDownloadEvaluasi}
            className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center space-x-2 border border-amber-200 shadow-md transition cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* SCORE MODAL */}
      {showScoreModal && calculatedScore !== null && (
        <div className="bg-slate-900 text-white p-6 rounded-3xl border-2 border-emerald-500 shadow-2xl space-y-4 animate-fade-in relative">
          <div className="flex justify-between items-center border-b border-slate-700 pb-3">
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-amber-400" />
              <h4 className="text-lg font-bold text-amber-300">Hasil Skor Evaluasi Murid</h4>
            </div>
            <button
              onClick={() => setShowScoreModal(false)}
              className="text-slate-400 hover:text-white font-bold text-sm bg-slate-800 px-3 py-1 rounded-xl"
            >
              Tutup [X]
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
              <span className="text-xs text-slate-400 font-bold block">Total Skor Perolehan</span>
              <span className="text-3xl font-black text-emerald-400">{calculatedScore} / 100</span>
            </div>

            <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
              <span className="text-xs text-slate-400 font-bold block">Predikat Capaian</span>
              <span className="text-xl font-bold text-amber-300 mt-1 block">
                {calculatedScore >= 85 ? 'Sangat Memuaskan (A)' : calculatedScore >= 70 ? 'Baik / Tuntas (B)' : 'Perlu Bimbingan (C)'}
              </span>
            </div>

            <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
              <span className="text-xs text-slate-400 font-bold block">Status Ketuntasan</span>
              <span className={`text-base font-bold mt-1.5 inline-block px-3 py-0.5 rounded-full ${calculatedScore >= 70 ? 'bg-emerald-900 text-emerald-300' : 'bg-rose-900 text-rose-300'}`}>
                {calculatedScore >= 70 ? 'LULUS KKTP' : 'REMEDIAL TAJWID'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SECTION A: PILIHAN GANDA */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 uppercase">
            BAGIAN A (10 SOAL)
          </span>
          <h4 className="text-xl font-bold text-slate-900 mt-2">
            Pilihan Ganda (Pilihlah Satu Jawaban yang Tepat)
          </h4>
        </div>

        <div className="space-y-6">
          {dataPG.map((q, qIdx) => (
            <div key={q.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="font-semibold text-slate-900 text-sm sm:text-base leading-relaxed">
                <span className="text-emerald-700 font-bold mr-1">{qIdx + 1}.</span> {q.question}
              </div>

              {q.arabic && (
                <div className="text-2xl font-serif text-emerald-900 dir-rtl my-2 bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-center">
                  {q.arabic}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {q.options.map((opt, optIdx) => {
                  const isSelected = userPG[q.id] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => {
                        soundFX.playClick();
                        setUserPG((prev) => ({ ...prev, [q.id]: optIdx }));
                      }}
                      className={`p-3 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-sm'
                          : 'bg-white hover:bg-emerald-50/60 text-slate-700 border-slate-200'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                  <div className="font-bold flex items-center space-x-1">
                    <Key className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Kunci Jawaban: {q.options[q.correctAnswerIndex]}</span>
                  </div>
                  <p className="text-emerald-800 leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION B: PILIHAN GANDA KOMPLEKS */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-300 uppercase">
            BAGIAN B (10 SOAL)
          </span>
          <h4 className="text-xl font-bold text-slate-900 mt-2">
            Pilihan Ganda Kompleks (Centang Lebih Dari Satu Jawaban Benar)
          </h4>
        </div>

        <div className="space-y-6">
          {dataPGK.map((q, qIdx) => (
            <div key={q.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="font-semibold text-slate-900 text-sm sm:text-base leading-relaxed">
                <span className="text-indigo-700 font-bold mr-1">{qIdx + 1}.</span> {q.question}
              </div>

              {q.arabic && (
                <div className="text-2xl font-serif text-indigo-900 dir-rtl my-2 bg-indigo-50 p-3 rounded-xl border border-indigo-200 text-center">
                  {q.arabic}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {q.options.map((opt, optIdx) => {
                  const isChecked = (userPGK[q.id] || []).includes(optIdx);
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleTogglePGKOption(q.id, optIdx)}
                      className={`p-3 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer flex items-start space-x-2 ${
                        isChecked
                          ? 'bg-indigo-600 text-white border-indigo-600 font-bold shadow-sm'
                          : 'bg-white hover:bg-indigo-50/60 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold ${isChecked ? 'bg-white text-indigo-600 border-white' : 'border-slate-400 bg-white'}`}>
                        {isChecked ? '✓' : ''}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="mt-3 p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 space-y-1">
                  <div className="font-bold flex items-center space-x-1">
                    <Key className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Kunci Jawaban: Opsi [{q.correctAnswerIndices.map((i) => String.fromCharCode(65 + i)).join(', ')}]</span>
                  </div>
                  <p className="text-indigo-800 leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION C: MENJODOHKAN */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 uppercase">
            BAGIAN C (5 SOAL)
          </span>
          <h4 className="text-xl font-bold text-slate-900 mt-2">
            Menjodohkan Istilah & Pengertian Tajwid / Al-'Asr
          </h4>
        </div>

        <div className="space-y-4">
          {dataMatching.map((m) => (
            <div key={m.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1 md:w-1/2">
                <span className="text-xs font-bold text-amber-700 uppercase">Pernyataan #{m.id}</span>
                <h5 className="text-base font-bold text-slate-900">{m.leftText}</h5>
                {m.leftArabic && <div className="text-xl font-serif text-amber-900 dir-rtl">{m.leftArabic}</div>}
              </div>

              <div className="w-full md:w-1/2">
                <label className="text-xs font-bold text-slate-500 block mb-1">Pilih Pasangan Pas:</label>
                <select
                  value={userMatching[m.id] || ''}
                  onChange={(e) => {
                    soundFX.playClick();
                    setUserMatching({ ...userMatching, [m.id]: e.target.value });
                  }}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-white text-slate-800 focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">-- Pilih Pasangan yang Tepat --</option>
                  {dataMatching.map((opt) => (
                    <option key={opt.id} value={opt.rightText}>
                      {opt.rightText}
                    </option>
                  ))}
                </select>

                {showAnswerKey && (
                  <div className="mt-2 text-xs font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                    Kunci: {m.rightText}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION D: BENAR ATAU SALAH DISERTAI ALASAN */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-900 border border-teal-300 uppercase">
            BAGIAN D (10 SOAL)
          </span>
          <h4 className="text-xl font-bold text-slate-900 mt-2">
            Memilih Benar / Salah Disertai Isian Alasan
          </h4>
        </div>

        <div className="space-y-6">
          {dataBS.map((bs, bsIdx) => (
            <div key={bs.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="font-semibold text-slate-900 text-sm sm:text-base leading-relaxed">
                <span className="text-teal-700 font-bold mr-1">{bsIdx + 1}.</span> {bs.statement}
              </div>

              {bs.arabic && (
                <div className="text-2xl font-serif text-teal-900 dir-rtl my-2 bg-teal-50 p-3 rounded-xl border border-teal-200 text-center">
                  {bs.arabic}
                </div>
              )}

              {/* Benar/Salah Buttons */}
              <div className="flex items-center space-x-3 pt-1">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setUserBS({ ...userBS, [bs.id]: true });
                  }}
                  className={`px-5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    userBS[bs.id] === true
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-white hover:bg-emerald-50 text-slate-700 border-slate-300'
                  }`}
                >
                  [ BENAR ]
                </button>

                <button
                  onClick={() => {
                    soundFX.playClick();
                    setUserBS({ ...userBS, [bs.id]: false });
                  }}
                  className={`px-5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    userBS[bs.id] === false
                      ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                      : 'bg-white hover:bg-rose-50 text-slate-700 border-slate-300'
                  }`}
                >
                  [ SALAH ]
                </button>
              </div>

              {/* Isian Alasan */}
              <div className="space-y-1 pt-2">
                <label className="text-xs font-bold text-slate-600 block">
                  Tuliskan Alasan / Penjelasan Jawabanmu:
                </label>
                <input
                  type="text"
                  placeholder="Ketik alasanmu di sini..."
                  value={userBSReason[bs.id] || ''}
                  onChange={(e) => setUserBSReason({ ...userBSReason, [bs.id]: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs bg-white text-slate-800 focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {showAnswerKey && (
                <div className="mt-3 p-3 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 space-y-1">
                  <div className="font-bold">
                    Kunci Jawaban: <span className={bs.isTrue ? 'text-emerald-700' : 'text-rose-700'}>{bs.isTrue ? 'BENAR' : 'SALAH'}</span>
                  </div>
                  <p className="text-teal-800 leading-relaxed">{bs.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION E: URAIAN / ESSAY */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900 border border-rose-300 uppercase">
            BAGIAN E (5 SOAL)
          </span>
          <h4 className="text-xl font-bold text-slate-900 mt-2">
            Soal Uraian / Essay High Order Thinking Skills
          </h4>
        </div>

        <div className="space-y-6">
          {dataEssay.map((q, qIdx) => (
            <div key={q.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="font-semibold text-slate-900 text-sm sm:text-base leading-relaxed">
                <span className="text-rose-700 font-bold mr-1">{qIdx + 1}.</span> {q.question}
              </div>

              {q.arabic && (
                <div className="text-2xl font-serif text-rose-900 dir-rtl my-2 bg-rose-50 p-3 rounded-xl border border-rose-200 text-center">
                  {q.arabic}
                </div>
              )}

              <div className="space-y-1 pt-1">
                <label className="text-xs font-bold text-slate-600 block">Jawaban Lengkap Murid:</label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan jawaban analisis lengkapmu di sini..."
                  value={userEssay[q.id] || ''}
                  onChange={(e) => setUserEssay({ ...userEssay, [q.id]: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs bg-white text-slate-800 focus:ring-2 focus:ring-rose-500"
                />
              </div>

              {showAnswerKey && (
                <div className="mt-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 space-y-2">
                  <div className="font-bold text-rose-800">{q.rubric}</div>
                  <div className="bg-white p-3 rounded-lg border border-rose-100 text-slate-800 leading-relaxed whitespace-pre-line">
                    <strong>Contoh Jawaban Ideal:</strong>
                    {'\n'}{q.sampleAnswer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
