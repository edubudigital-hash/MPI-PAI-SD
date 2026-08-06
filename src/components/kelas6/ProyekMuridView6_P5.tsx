import React from 'react';
import { PROYEK_KELAS6_P5, ProyekData } from '../../data/kelas6Pembelajaran5Data';
import { soundFX } from '../../utils/audio';
import { 
  FolderGit2, 
  Printer, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  Users, 
  Lightbulb, 
  Award,
  Layers
} from 'lucide-react';

interface ProyekMuridView6_P5Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView6_P5: React.FC<ProyekMuridView6_P5Props> = ({ grade, lesson }) => {
  // Print PDF for Proyek Murid
  const handlePrintProyek = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Proyek Murid PAI SD Kelas ${grade} Bab ${lesson}: Khulafaur Rasyidin</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 30px;
              color: #0f172a;
              line-height: 1.5;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #0f766e;
              padding-bottom: 15px;
              margin-bottom: 25px;
            }
            .header h1 {
              margin: 0;
              color: #0f766e;
              font-size: 20px;
              font-weight: 800;
            }
            .header p {
              margin: 4px 0 0;
              color: #64748b;
              font-size: 12px;
            }
            .policy-banner {
              background-color: #fef3c7;
              border: 1px solid #fde68a;
              color: #92400e;
              padding: 8px 12px;
              border-radius: 6px;
              font-weight: 700;
              font-size: 12px;
              margin-bottom: 20px;
              text-align: center;
            }
            .proyek-card {
              page-break-inside: avoid;
              border: 1px solid #cbd5e1;
              border-radius: 10px;
              padding: 16px;
              margin-bottom: 20px;
              background-color: #ffffff;
            }
            .type-badge {
              display: inline-block;
              font-size: 10px;
              font-weight: 800;
              padding: 3px 8px;
              border-radius: 12px;
              color: #ffffff;
              background-color: #0f766e;
              margin-bottom: 6px;
              text-transform: uppercase;
            }
            .type-pbl {
              background-color: #0284c7;
            }
            .proyek-title {
              font-size: 15px;
              font-weight: 800;
              color: #1e293b;
              margin-bottom: 6px;
            }
            .proyek-desc {
              font-size: 12px;
              color: #334155;
              margin-bottom: 12px;
            }
            .section-sub {
              font-size: 12px;
              font-weight: 700;
              color: #0f766e;
              margin-top: 10px;
              margin-bottom: 4px;
            }
            .step-list {
              margin: 4px 0;
              padding-left: 18px;
              font-size: 11px;
              color: #334155;
            }
            .step-list li {
              margin-bottom: 3px;
            }
            .output-box {
              background-color: #f8fafc;
              border-left: 3px solid #0f766e;
              padding: 6px 10px;
              font-size: 11px;
              font-weight: 700;
              color: #1e293b;
              margin-top: 8px;
            }
            .criteria-grid {
              margin-top: 8px;
              font-size: 11px;
              color: #475569;
              background-color: #f1f5f9;
              padding: 8px 12px;
              border-radius: 6px;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              font-size: 11px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 12px;
            }
            @media print {
              body { padding: 0; }
              .proyek-card { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>LEMBAR PENUGASAN PROYEK MURID PAI SD KELAS ${grade}</h1>
            <p>BAB ${lesson}: Kisah dan Jasa Khalifah Abu Bakar Ash-Shiddiq & Umar bin Al-Khattab</p>
          </div>

          <div class="policy-banner">
            * Seluruh penugasan proyek ini dilaksanakan SESUAI KEBIJAKAN GURU *
          </div>

          ${PROYEK_KELAS6_P5.map((p, idx) => `
            <div class="proyek-card">
              <span class="type-badge ${p.type === 'PBL' ? 'type-pbl' : ''}">${p.type} • ${p.category}</span>
              <div class="proyek-title">${idx + 1}. ${p.title}</div>
              <div class="proyek-desc">${p.description}</div>

              <div class="section-sub">Langkah-Langkah Kerja:</div>
              <ol class="step-list">
                ${p.steps.map(st => `<li>${st}</li>`).join('')}
              </ol>

              <div class="output-box">
                📌 Produk / Hasil Akhir: ${p.output}
              </div>

              <div class="section-sub">Kriteria Penilaian:</div>
              <div class="criteria-grid">
                ${p.assessmentCriteria.map(c => `• ${c}<br/>`).join('')}
              </div>
            </div>
          `).join('')}

          <div class="footer">
            Dokumen Penugasan Proyek Murid PAI SD Kelas 6 - Bab 5 • Dicetak Otomatis
          </div>
          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Top Banner Card */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-teal-100 font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Penugasan Pembelajaran • Kelas {grade} Bab {lesson}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Proyek Murid PjBL & Problem Based Learning (PBL)
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 mt-1">
              4 Tugas Pembelajaran berbasis Proyek (2 PjBL) dan Masalah (2 PBL) terintegrasi nilai kepemimpinan Khulafaur Rasyidin.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrintProyek}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Download PDF Proyek</span>
            </button>
          </div>
        </div>
      </div>

      {/* Teacher Policy Banner */}
      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-between gap-3 text-amber-900 dark:text-amber-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-bold shrink-0">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold">Ketentuan Pelaksanaan Proyek:</h4>
            <p className="text-[11px] text-amber-800 dark:text-amber-300">
              Pelaksanaan, jenis kelompok, dan batas waktu penyerahan tugas disesuaikan dengan <strong>Sesuai Kebijakan Guru</strong>.
            </p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 text-[10px] font-extrabold uppercase tracking-wider shrink-0">
          Sesuai Kebijakan Guru
        </span>
      </div>

      {/* Grid Proyek Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROYEK_KELAS6_P5.map((p, idx) => {
          const isPjBL = p.type === 'PjBL';

          return (
            <div 
              key={p.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-md flex flex-col justify-between space-y-5 hover:shadow-lg transition-all"
            >
              <div className="space-y-3">
                {/* Header Type & Policy Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    isPjBL 
                      ? 'bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-300 dark:border-teal-800' 
                      : 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-800'
                  }`}>
                    {p.type} • {p.category}
                  </span>

                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 italic">
                    {p.policyNote}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
                  {idx + 1}. {p.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {p.description}
                </p>

                {/* Steps */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 block">
                    📋 Langkah-Langkah Pelaksanaan:
                  </span>
                  <ol className="space-y-1.5 pl-4 list-decimal text-xs text-slate-700 dark:text-slate-300">
                    {p.steps.map((st, sIdx) => (
                      <li key={sIdx}>{st}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                {/* Output */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">
                    🎯 Produk / Hasil Karya:
                  </span>
                  <span className="text-teal-700 dark:text-teal-300 font-semibold">
                    {p.output}
                  </span>
                </div>

                {/* Criteria */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Kriteria Penilaian Guru:
                  </span>
                  <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-600 dark:text-slate-400">
                    {p.assessmentCriteria.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-teal-500 shrink-0" />
                        <span className="truncate">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
