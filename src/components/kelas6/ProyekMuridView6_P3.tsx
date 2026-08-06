import React from 'react';
import { PROYEK_TASKS_KELAS6_P3 } from '../../data/kelas6Pembelajaran3Data';
import { soundFX } from '../../utils/audio';
import { 
  FolderKanban, 
  Sparkles, 
  Clock, 
  Target, 
  CheckCircle2, 
  Printer, 
  Award,
  AlertCircle
} from 'lucide-react';

interface ProyekMuridView6_P3Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView6_P3: React.FC<ProyekMuridView6_P3Props> = ({ grade, lesson }) => {
  const handlePrint = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Penugasan Proyek Murid - Kelas ${grade} Bab ${lesson}: Akhlak Terpuji kepada Tetangga & Non-Muslim</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 40px;
              color: #0f172a;
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
            .notice-box {
              background-color: #f0fdf4;
              border: 1px dashed #0d9488;
              border-radius: 8px;
              padding: 12px;
              font-size: 12px;
              color: #115e59;
              margin-bottom: 24px;
            }
            .task-card {
              page-break-inside: avoid;
              border: 1px solid #cbd5e1;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 24px;
              background-color: #ffffff;
            }
            .badge {
              display: inline-block;
              padding: 4px 10px;
              border-radius: 6px;
              font-size: 11px;
              font-weight: bold;
              text-transform: uppercase;
              margin-bottom: 8px;
            }
            .pjbl-badge { background-color: #ccfbf1; color: #0f766e; }
            .pbl-badge { background-color: #e0e7ff; color: #3730a3; }
            .task-title {
              font-size: 16px;
              font-weight: 800;
              color: #0f172a;
              margin-top: 0;
            }
            .section-title {
              font-size: 13px;
              font-weight: 700;
              color: #0f766e;
              margin-top: 12px;
              margin-bottom: 6px;
            }
            ul, ol {
              margin: 0;
              padding-left: 20px;
              font-size: 13px;
            }
            li { margin-bottom: 6px; }
            .rubrik-box {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 12px;
              margin-top: 12px;
              font-size: 12px;
            }
            .footer-info {
              text-align: center;
              font-size: 11px;
              color: #94a3b8;
              margin-top: 40px;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>PENUGASAN PROYEK MURID PAI-SD KELAS ${grade}</h1>
            <p>BAB ${lesson}: Akhlak Terpuji kepada Tetangga dan Non-Muslim</p>
          </div>

          <div class="notice-box">
            <strong>Catatan Penting:</strong> Pelaksanaan dan bobot penilaian proyek di bawah ini disesuaikan dengan <strong>kebijakan guru</strong> dan kondisi peserta didik di masing-masing satuan pendidikan.
          </div>

          ${PROYEK_TASKS_KELAS6_P3.map((t, idx) => `
            <div class="task-card">
              <span class="badge ${t.type === 'PjBL' ? 'pjbl-badge' : 'pbl-badge'}">
                TUGAS ${idx + 1}: ${t.type} (${t.duration})
              </span>
              <h2 class="task-title">${t.title}</h2>
              <p style="font-size: 12px; color: #64748b; font-style: italic;">${t.subtitle}</p>

              <div class="section-title">Tujuan Penugasan:</div>
              <p style="font-size: 13px; margin: 0;">${t.goal}</p>

              <div class="section-title">Langkah-Langkah Kegiatan:</div>
              <ol>
                ${t.steps.map(s => `<li>${s}</li>`).join('')}
              </ol>

              <div class="section-title">Hasil Akhir (Output):</div>
              <p style="font-size: 13px; margin: 0; font-weight: bold; color: #0f766e;">${t.output}</p>

              <div class="rubrik-box">
                <strong>Rubrik Penilaian (Sesuai Kebijakan Guru):</strong>
                <ul>
                  ${t.rubrik.map(r => `<li>${r}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}

          <div class="footer-info">
            Dicetak dari Lembar Kerja Proyek PAI-SD Kelas 6 • Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
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
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
            <FolderKanban className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-wider">
              Penugasan Proyek Murid • Kelas {grade} Bab {lesson}
            </span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              2 Task PjBL & 2 Task PBL
            </h2>
          </div>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Download Proyek PDF</span>
        </button>
      </div>

      {/* Policy Notice Box */}
      <div className="p-4 rounded-2xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/80 flex items-start gap-3 text-teal-900 dark:text-teal-200">
        <AlertCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm font-semibold leading-relaxed">
          <strong>Kebijakan Pembelajaran:</strong> Seluruh bentuk penugasan berbasis proyek (PjBL) dan berbasis masalah (PBL) di bawah ini dapat disesuaikan, dimodifikasi, serta dinilai <strong>sesuai kebijakan guru</strong> dan kebutuhan kelas masing-masing.
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROYEK_TASKS_KELAS6_P3.map((task, idx) => (
          <div 
            key={task.id}
            className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              {/* Type Badge & Duration */}
              <div className="flex items-center justify-between gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                  task.type === 'PjBL' 
                    ? 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' 
                    : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                }`}>
                  TUGAS {idx + 1}: {task.type}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-500 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span>{task.duration}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug">
                  {task.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {task.subtitle}
                </p>
              </div>

              {/* Goal */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5" />
                  <span>Tujuan Penugasan:</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {task.goal}
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Langkah-Langkah Kegiatan:
                </h4>
                <div className="space-y-1.5">
                  {task.steps.map((step, sIdx) => (
                    <div key={sIdx} className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-2" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output */}
              <div className="p-3.5 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/60 space-y-1">
                <span className="text-[11px] font-extrabold text-teal-800 dark:text-teal-300 uppercase tracking-wider">
                  Hasil Akhir (Output Karya):
                </span>
                <p className="text-xs sm:text-sm font-bold text-teal-950 dark:text-teal-100">
                  {task.output}
                </p>
              </div>
            </div>

            {/* Rubrik */}
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex items-center justify-between text-xs font-extrabold text-slate-800 dark:text-slate-200">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  Rubrik Penilaian
                </span>
                <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold bg-white dark:bg-slate-900 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                  Sesuai Kebijakan Guru
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                {task.rubrik.map((r, rIdx) => (
                  <li key={rIdx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
