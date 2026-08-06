import React from 'react';
import { PROYEK_TASKS_KELAS6_P1, ProyekTask } from '../../data/kelas6Pembelajaran1Data';
import { soundFX } from '../../utils/audio';
import { FolderKanban, Clock, Target, CheckCircle2, Award, Printer, AlertCircle } from 'lucide-react';

interface ProyekMuridView6_P1Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView6_P1: React.FC<ProyekMuridView6_P1Props> = ({ grade, lesson }) => {
  const handlePrint = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Penugasan Proyek Murid - Kelas ${grade} Bab ${lesson}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 40px;
              color: #1e293b;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #cbd5e1;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              margin: 0;
              color: #0f766e;
              font-size: 22px;
              font-weight: 800;
            }
            .header p {
              margin: 5px 0 0;
              color: #64748b;
              font-size: 13px;
            }
            .policy-notice {
              background-color: #f0fdfa;
              border: 1px solid #99f6e4;
              color: #0f766e;
              padding: 12px;
              border-radius: 8px;
              font-weight: 700;
              text-align: center;
              margin-bottom: 24px;
              font-size: 13px;
            }
            .task-card {
              page-break-inside: avoid;
              border: 1px solid #cbd5e1;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 24px;
              background-color: #ffffff;
            }
            .task-badge {
              display: inline-block;
              padding: 4px 10px;
              border-radius: 20px;
              font-size: 11px;
              font-weight: 800;
              text-transform: uppercase;
              background-color: #f1f5f9;
              color: #0f172a;
              margin-bottom: 8px;
            }
            .task-title {
              font-size: 16px;
              font-weight: 800;
              color: #0f172a;
              margin-top: 0;
              margin-bottom: 4px;
            }
            .section-label {
              font-weight: 700;
              color: #0f766e;
              font-size: 13px;
              margin-top: 12px;
              margin-bottom: 4px;
            }
            ul, ol {
              margin: 0;
              padding-left: 20px;
              font-size: 13px;
            }
            li {
              margin-bottom: 4px;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              font-size: 12px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 16px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>LEMBAR PENUGASAN PROYEK MURID PAI-SD</h1>
            <p><strong>Kelas ${grade} Pembelajaran ${lesson}:</strong> Huruf Hijaiyah Bersambung, Ghunnah & Surat Al-Insyirah</p>
          </div>

          <div class="policy-notice">
            * Pelaksanaan penugasan berikut disesuaikan dengan kebijakan guru PAI di sekolah. *
          </div>

          ${PROYEK_TASKS_KELAS6_P1.map((t) => `
            <div class="task-card">
              <span class="task-badge">${t.type} • ${t.duration}</span>
              <h2 class="task-title">${t.title}</h2>
              <p style="font-size:12px; color:#64748b; margin-top:0;">${t.subtitle}</p>
              
              <div class="section-label">Tujuan Penugasan:</div>
              <p style="font-size:13px; margin:0;">${t.goal}</p>

              <div class="section-label">Langkah-Langkah Kegiatan:</div>
              <ol>
                ${t.steps.map(s => `<li>${s}</li>`).join('')}
              </ol>

              <div class="section-label">Hasil / Output Penugasan:</div>
              <p style="font-size:13px; margin:0;">${t.output}</p>

              <div class="section-label">Rubrik Penilaian:</div>
              <ul>
                ${t.rubrik.map(r => `<li>${r}</li>`).join('')}
              </ul>
            </div>
          `).join('')}

          <div class="footer">
            Dokumen ini dicetak otomatis dari SIMPAD (Sistem Media Pembelajaran Digital PAI-SD) • Boleh Digunakan oleh Semua Guru
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
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Banner Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
            <FolderKanban className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-wider">
              Proyek Murid • Kelas {grade} Pembelajaran {lesson}
            </span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              Penugasan Berbasis PjBL & PBL
            </h2>
          </div>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-sm"
        >
          <Printer className="w-4 h-4" />
          <span>Download Proyek Murid</span>
        </button>
      </div>

      {/* Prominent Teacher Policy Notice */}
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-bold shadow-xs">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
        <span>
          Catatan: Bentuk penugasan, durasi pengerjaan, dan bobot penilaian disesuaikan dengan kebijakan guru PAI di sekolah.
        </span>
      </div>

      {/* Grid of Task Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROYEK_TASKS_KELAS6_P1.map((task: ProyekTask) => (
          <div 
            key={task.id}
            className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-lg hover:border-teal-300 transition-all space-y-6"
          >
            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                  task.type === 'PjBL' 
                    ? 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border border-teal-300' 
                    : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-300'
                }`}>
                  {task.type === 'PjBL' ? 'Project Based Learning' : 'Problem Based Learning'}
                </span>

                <div className="flex items-center gap-1 text-xs font-bold text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{task.duration}</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
                  {task.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {task.subtitle}
                </p>
              </div>

              {/* Goal */}
              <div className="p-3.5 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 text-xs sm:text-sm text-teal-950 dark:text-teal-200 font-medium leading-relaxed">
                <strong className="font-extrabold flex items-center gap-1.5 text-teal-800 dark:text-teal-300 mb-1">
                  <Target className="w-4 h-4 text-teal-600" />
                  Tujuan Penugasan:
                </strong>
                {task.goal}
              </div>

              {/* Steps */}
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Langkah Kegiatan:
                </span>
                <ul className="space-y-1.5 pl-1">
                  {task.steps.map((st, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Output */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 font-semibold">
                <strong>Hasil / Produk Akhir:</strong> {task.output}
              </div>
            </div>

            {/* Rubrik Penilaian */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-500" />
                Rubrik Penilaian:
              </span>
              <ul className="grid grid-cols-1 gap-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
                {task.rubrik.map((rb, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-amber-500">•</span>
                    <span>{rb}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-[10px] text-teal-600 font-bold italic text-right mt-2">
                * Sesuai kebijakan guru PAI
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
