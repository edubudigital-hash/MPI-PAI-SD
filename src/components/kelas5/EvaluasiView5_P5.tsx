import React, { useState } from 'react';
import { 
  KELAS5_P5_QUESTIONS_PG, 
  KELAS5_P5_QUESTIONS_PGK, 
  KELAS5_P5_MATCH_PAIRS, 
  KELAS5_P5_QUESTIONS_BS, 
  KELAS5_P5_QUESTIONS_ESSAY 
} from '../../data/kelas5Pembelajaran5Data';
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
  HelpCircle,
  BookOpen
} from 'lucide-react';

interface Props {
  grade?: number;
  lesson?: number;
}

export const EvaluasiView5_P5: React.FC<Props> = ({ grade = 5, lesson = 5 }) => {
  const dataPG = KELAS5_P5_QUESTIONS_PG;
  const dataPGK = KELAS5_P5_QUESTIONS_PGK;
  const dataMatching = KELAS5_P5_MATCH_PAIRS;
  const dataBS = KELAS5_P5_QUESTIONS_BS;
  const dataEssay = KELAS5_P5_QUESTIONS_ESSAY;

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

  const handleCalculateScore = () => {
    soundFX.playClick();
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

    // B/S: 10 soal @ 1.5 poin = 15 poin (harus disertai alasan)
    dataBS.forEach((q) => {
      const bsAns = userBS[q.id];
      const reason = userBSReason[q.id] || '';
      if (bsAns === q.isTrue && reason.trim().length > 3) {
        totalScore += 1.5;
      }
    });

    // Essay: 5 soal @ 3 poin = 15 poin
    dataEssay.forEach((q) => {
      const essayText = userEssay[q.id] || '';
      if (essayText.trim().length > 10) {
        totalScore += 3;
      }
    });

    const finalScore = Math.round(totalScore);
    setCalculatedScore(finalScore);
    setShowScoreModal(true);
    if (finalScore >= 75) {
      soundFX.playFanfare();
    } else {
      soundFX.playCorrect();
    }
  };

  const handleResetForm = () => {
    soundFX.playClick();
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
    soundFX.playClick();
    let bodyHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.5;">
        <h1 style="text-align: center; color: #047857; margin-bottom: 2px; font-size: 16pt;">LEMBAR EVALUASI PEMBELAJARAN PAI</h1>
        <h2 style="text-align: center; color: #334155; margin-top: 0; font-size: 13pt; font-weight: normal;">
          KELAS ${grade} PEMBELAJARAN ${lesson}: KEPEMIMPINAN NABI MUHAMMAD SAW. DI MADINAH DAN KETELADANANNYA
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
        <hr style="border: none; border-top: 2px solid #047857; margin-bottom: 16px;" />
    `;

    // Bagian A: PG (10 Soal)
    bodyHtml += `
      <h3 style="color: #047857; font-size: 11pt; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 16px;">
        BAGIAN A: PILIHAN GANDA (10 Soal)
      </h3>
      <p style="font-size: 9pt; color: #64748b; font-style: italic;">Pilihlah satu jawaban yang paling tepat!</p>
    `;
    dataPG.forEach((q) => {
      bodyHtml += `
        <div style="margin-bottom: 12px; page-break-inside: avoid;">
          <p style="font-size: 9.5pt; font-weight: bold; margin-bottom: 4px;">${q.id}. ${q.question}</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 9pt; padding-left: 14px;">
            ${q.options.map((opt, i) => `<div>${String.fromCharCode(65 + i)}. ${opt}</div>`).join('')}
          </div>
        </div>
      `;
    });

    // Bagian B: PGK (10 Soal)
    bodyHtml += `
      <h3 style="color: #047857; font-size: 11pt; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 20px; page-break-before: always;">
        BAGIAN B: PILIHAN GANDA KOMPLEKS (10 Soal)
      </h3>
      <p style="font-size: 9pt; color: #64748b; font-style: italic;">Pilihlah lebih dari satu jawaban yang benar!</p>
    `;
    dataPGK.forEach((q) => {
      bodyHtml += `
        <div style="margin-bottom: 12px; page-break-inside: avoid;">
          <p style="font-size: 9.5pt; font-weight: bold; margin-bottom: 4px;">${q.id}. ${q.question}</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 9pt; padding-left: 14px;">
            ${q.options.map((opt, i) => `<div>[ &nbsp; ] ${opt}</div>`).join('')}
          </div>
        </div>
      `;
    });

    // Bagian C: Menjodohkan (5 Soal)
    bodyHtml += `
      <h3 style="color: #047857; font-size: 11pt; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 20px;">
        BAGIAN C: MENJODOHKAN (5 Soal)
      </h3>
      <p style="font-size: 9pt; color: #64748b; font-style: italic;">Pasangkanlah pernyataan di sebelah kiri dengan jawaban tepat di sebelah kanan!</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-top: 8px;">
        <thead>
          <tr style="background-color: #f1f5f9; text-align: left;">
            <th style="border: 1px solid #cbd5e1; padding: 6px;">No</th>
            <th style="border: 1px solid #cbd5e1; padding: 6px; width: 45%;">Pernyataan / Istilah</th>
            <th style="border: 1px solid #cbd5e1; padding: 6px; width: 45%;">Pilihan Pasangan Jawaban</th>
          </tr>
        </thead>
        <tbody>
          ${dataMatching.map((m) => `
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">${m.id}</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px;">${m.premise}</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px; color: #475569;">( ............................................................ )</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    // Bagian D: Benar/Salah + Alasan (10 Soal)
    bodyHtml += `
      <h3 style="color: #047857; font-size: 11pt; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 20px; page-break-before: always;">
        BAGIAN D: BENAR ATAU SALAH DENGAN ALASAN (10 Soal)
      </h3>
      <p style="font-size: 9pt; color: #64748b; font-style: italic;">Tentukan Benar (B) atau Salah (S) serta tuliskan alasan jawabanmu pada kolom yang disediakan!</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 9pt; margin-top: 8px;">
        <thead>
          <tr style="background-color: #f1f5f9; text-align: left;">
            <th style="border: 1px solid #cbd5e1; padding: 6px; width: 5%;">No</th>
            <th style="border: 1px solid #cbd5e1; padding: 6px; width: 50%;">Pernyataan Soal</th>
            <th style="border: 1px solid #cbd5e1; padding: 6px; width: 15%; text-align: center;">B / S</th>
            <th style="border: 1px solid #cbd5e1; padding: 6px; width: 30%;">Kolom Alasan Murid</th>
          </tr>
        </thead>
        <tbody>
          ${dataBS.map((bs) => `
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">${bs.id}</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px;">${bs.statement}</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">[ B ] / [ S ]</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px; font-style: italic; color: #94a3b8;">Alasan: </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    // Bagian E: Uraian (5 Soal)
    bodyHtml += `
      <h3 style="color: #047857; font-size: 11pt; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 20px;">
        BAGIAN E: URAIAN HOTS & COMPUTATIONAL THINKING (5 Soal)
      </h3>
      <p style="font-size: 9pt; color: #64748b; font-style: italic;">Jawablah pertanyaan berikut secara jelas, lengkap, dan runtut!</p>
    `;
    dataEssay.forEach((e) => {
      bodyHtml += `
        <div style="margin-bottom: 16px; page-break-inside: avoid;">
          <p style="font-size: 9.5pt; font-weight: bold; margin-bottom: 4px;">${e.id}. ${e.question}</p>
          <div style="border: 1px dashed #cbd5e1; height: 50px; border-radius: 4px; margin-top: 4px;"></div>
        </div>
      `;
    });

    bodyHtml += `</div>`;

    printOrDownloadDocument(
      `Evaluasi PAI Kelas ${grade} Pembelajaran ${lesson}`,
      `Kepemimpinan Nabi Muhammad saw. di Madinah`,
      bodyHtml
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Actions Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-2xl border border-slate-200 shadow-sm gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-1">
            <ClipboardCheck className="w-3.5 h-3.5" />
            Evaluasi HOTS & Computational Thinking
          </div>
          <h2 className="text-xl font-bold text-slate-900">Evaluasi Pembelajaran 5 Kelas 5</h2>
          <p className="text-xs md:text-sm text-slate-500">10 PG, 10 PGK, 5 Menjodohkan, 10 Benar/Salah (dengan Alasan), & 5 Uraian</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleCalculateScore}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-md shadow-blue-600/20 active:scale-95"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Skor</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setShowAnswerKey(!showAnswerKey);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
              showAnswerKey
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'
            }`}
          >
            <Key className="w-4 h-4 text-amber-600" />
            <span>{showAnswerKey ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/20 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Evaluasi</span>
          </button>
        </div>
      </div>

      {/* Answer Key Notice Banner (When Activated) */}
      {showAnswerKey && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-900 font-medium">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            <span><strong>Mode Kunci Jawaban Aktif:</strong> Kunci jawaban dan penjelasan lengkap HOTS ditampilkan di bawah setiap soal!</span>
          </div>
          <button
            onClick={() => setShowAnswerKey(false)}
            className="text-xs text-amber-700 font-bold hover:underline"
          >
            Tutup
          </button>
        </div>
      )}

      {/* Section A: Pilihan Ganda (10 Soal) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Bagian A</span>
            <h3 className="text-base font-bold text-slate-900">10 Soal Pilihan Ganda (PG)</h3>
          </div>
          <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
            @3 Poin (Total 30)
          </span>
        </div>

        <div className="space-y-6">
          {dataPG.map((q) => (
            <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                {q.id}. {q.question}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = userPG[q.id] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => {
                        soundFX.playClick();
                        setUserPG((prev) => ({ ...prev, [q.id]: optIdx }));
                      }}
                      className={`text-left p-3 rounded-xl border text-xs transition-all flex items-center gap-2.5 ${
                        isSelected 
                          ? 'bg-blue-50 border-blue-500 text-blue-900 font-semibold ring-1 ring-blue-400'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {showAnswerKey && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium space-y-1">
                  <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Kunci Jawaban: {String.fromCharCode(65 + q.correctAnswer)} ({q.options[q.correctAnswer]})
                  </div>
                  <p className="text-emerald-900/90 pl-5">Penjelasan: {q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section B: Pilihan Ganda Kompleks (10 Soal) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
          <div>
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Bagian B</span>
            <h3 className="text-base font-bold text-slate-900">10 Soal Pilihan Ganda Kompleks (Multi-Select)</h3>
          </div>
          <span className="text-xs font-semibold bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-200">
            @3 Poin (Total 30)
          </span>
        </div>

        <div className="space-y-6">
          {dataPGK.map((q) => {
            const selectedArr = userPGK[q.id] || [];
            return (
              <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                  {q.id}. {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, optIdx) => {
                    const isChecked = selectedArr.includes(optIdx);
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleTogglePGKOption(q.id, optIdx)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all flex items-center gap-2.5 ${
                          isChecked
                            ? 'bg-purple-50 border-purple-500 text-purple-900 font-semibold ring-1 ring-purple-400'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-purple-600 border-purple-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {showAnswerKey && (
                  <div className="mt-3 p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 font-medium space-y-1">
                    <div className="font-bold text-purple-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" />
                      Kunci Jawaban Benar: {q.correctAnswers.map((idx) => q.options[idx]).join(' | ')}
                    </div>
                    <p className="text-purple-900/90 pl-5">Penjelasan: {q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section C: Menjodohkan (5 Soal) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Bagian C</span>
            <h3 className="text-base font-bold text-slate-900">5 Soal Menjodohkan (Matching)</h3>
          </div>
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-3 py-1 rounded-full border border-teal-200">
            @2 Poin (Total 10)
          </span>
        </div>

        <div className="space-y-4">
          {dataMatching.map((m) => (
            <div key={m.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="text-xs sm:text-sm font-bold text-slate-800 md:w-1/2">
                {m.id}. {m.premise}
              </div>

              <div className="md:w-1/2">
                <select
                  value={userMatching[m.id] || ''}
                  onChange={(e) => {
                    soundFX.playClick();
                    setUserMatching((prev) => ({ ...prev, [m.id]: e.target.value }));
                  }}
                  className="w-full text-xs font-medium bg-white border border-slate-300 rounded-xl p-2.5 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  <option value="">-- Pilih Pasangan Jawaban --</option>
                  {dataMatching.map((pair) => (
                    <option key={pair.id} value={pair.answer}>
                      {pair.answer}
                    </option>
                  ))}
                </select>
              </div>

              {showAnswerKey && (
                <div className="w-full text-xs text-teal-800 font-semibold bg-teal-50 p-2 rounded-lg border border-teal-200 mt-2">
                  Kunci Tepat: {m.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section D: Benar/Salah + Kolom Alasan Murid (10 Soal) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Bagian D</span>
            <h3 className="text-base font-bold text-slate-900">10 Soal Benar / Salah (Dengan Kolom Alasan)</h3>
          </div>
          <span className="text-xs font-semibold bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-200">
            @1.5 Poin (Total 15)
          </span>
        </div>

        <div className="space-y-6">
          {dataBS.map((q) => (
            <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs sm:text-sm font-bold text-slate-900 sm:w-3/4">
                  {q.id}. {q.statement}
                </p>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setUserBS((prev) => ({ ...prev, [q.id]: true }));
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      userBS[q.id] === true
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    BENAR
                  </button>
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setUserBS((prev) => ({ ...prev, [q.id]: false }));
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      userBS[q.id] === false
                        ? 'bg-rose-600 text-white shadow-md'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    SALAH
                  </button>
                </div>
              </div>

              {/* Student Reasoning Text Column */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Kolom Isian Alasan Murid:
                </label>
                <textarea
                  value={userBSReason[q.id] || ''}
                  onChange={(e) => setUserBSReason((prev) => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Tuliskan alasan atau argumentasimu mengapa memilih Benar atau Salah..."
                  rows={2}
                  className="w-full text-xs p-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              {showAnswerKey && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium space-y-1">
                  <div className="font-bold text-amber-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    Kunci Jawaban: Pernyataan ini adalah {q.isTrue ? 'BENAR' : 'SALAH'}
                  </div>
                  <p className="text-amber-900/90 pl-5">Penjelasan: {q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section E: Uraian (5 Soal) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Bagian E</span>
            <h3 className="text-base font-bold text-slate-900">5 Soal Uraian (HOTS & CT)</h3>
          </div>
          <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-200">
            @3 Poin (Total 15)
          </span>
        </div>

        <div className="space-y-6">
          {dataEssay.map((q) => (
            <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                {q.id}. {q.question}
              </p>

              <textarea
                value={userEssay[q.id] || ''}
                onChange={(e) => setUserEssay((prev) => ({ ...prev, [q.id]: e.target.value }))}
                placeholder="Tuliskan jawaban uraian lengkapmu di sini..."
                rows={4}
                className="w-full text-xs sm:text-sm p-3.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />

              {showAnswerKey && (
                <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 space-y-2">
                  <div className="font-bold text-indigo-900 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    Rubrik Penilaian & Contoh Jawaban Ideal:
                  </div>
                  <p className="font-semibold text-indigo-800">{q.rubric}</p>
                  <p className="bg-white p-3 rounded-lg border border-indigo-100 text-slate-700 font-normal">
                    <strong>Jawaban Ideal:</strong> {q.sampleAnswer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={handleResetForm}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reset Jawaban Evaluasi</span>
        </button>

        <button
          onClick={handleCalculateScore}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-all hover:scale-105"
        >
          <Award className="w-4 h-4" />
          <span>Hitung & Lihat Skor Evaluasi</span>
        </button>
      </div>

      {/* Score Result Modal */}
      {showScoreModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 text-center space-y-6 shadow-2xl border border-slate-200">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-inner ${
              (calculatedScore || 0) >= 75 ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
            }`}>
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Hasil Evaluasi Pembelajaran</span>
              <h3 className="text-2xl font-extrabold text-slate-900">Skor Total Anda</h3>
              <div className="text-4xl font-black text-blue-600 my-2">{calculatedScore} / 100</div>
              <p className="text-xs text-slate-600 font-medium">
                {(calculatedScore || 0) >= 85 
                  ? 'Luar biasa! Pemahamanmu tentang Kepemimpinan Rasulullah saw. sangat tajam!'
                  : (calculatedScore || 0) >= 70
                  ? 'Bagus sekali! Kamu telah memahami prinsip-prinsip utama kepemimpinan Nabi di Madinah.'
                  : 'Tetap semangat! Ulangi membaca materi slide dan pelajari kunci jawaban.'}
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  setShowScoreModal(false);
                  setShowAnswerKey(true);
                }}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-all shadow-md"
              >
                Lihat Kunci Jawaban Lengkap
              </button>
              <button
                onClick={() => setShowScoreModal(false)}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all"
              >
                Tutup Modal Skor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
