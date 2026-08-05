import React from 'react';
import { KELAS4_P3_PROJECTS, ProjectTask } from '../../data/kelas4Pembelajaran3Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { FolderGit2, Download, CheckCircle2, AlertCircle, FileText, Sparkles, Layers } from 'lucide-react';

interface ComponentProps {
  grade: number;
  lesson: number;
}

export const ProyekMuridView4_P3: React.FC<ComponentProps> = ({ grade, lesson }) => {
  const tasks = KELAS4_P3_PROJECTS;

  const handleDownloadProyek = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>PENUGASAN PROYEK MURID PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Menerapkan Akhlak Terpuji kepada Anggota Keluarga Inti dan Anggota Keluarga Lainnya</h2>
        <p>Model Pembelajaran: Project Based Learning (PjBL) & Problem Based Learning (PBL) • BAB 3 Kurikulum Merdeka</p>
      </div>
    `;

    tasks.forEach((t) => {
      bodyHtml += `
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-weight: bold; font-size: 10pt; color: #0369a1; background-color: #e0f2fe; padding: 2px 8px; border-radius: 4px;">${t.badge}</span>
            <span style="font-size: 8.5pt; color: #64748b; font-style: italic;">Catatan: ${t.teacherNote}</span>
          </div>

          <h3 style="margin: 4px 0 2px 0; font-size: 11pt; color: #0f172a;">${t.title}</h3>
          <p style="margin: 0 0 8px 0; font-size: 9pt; color: #475569; font-style: italic;">${t.subtitle}</p>

          <div style="font-size: 9pt; line-height: 1.5; color: #334155;">
            <strong>Tujuan Pembelajaran:</strong> ${t.objective}
          </div>

          <div style="margin-top: 8px; font-size: 9pt;">
            <strong>Langkah-Langkah Pengerjaan:</strong>
            <ul style="margin: 4px 0 8px 0; padding-left: 20px;">
              ${t.steps.map((st) => `<li style="margin-bottom: 3px;">${st}</li>`).join('')}
            </ul>
          </div>

          <div style="font-size: 9pt; background-color: #f8fafc; padding: 8px; border-radius: 4px; border: 1px solid #cbd5e1;">
            <strong>Luaran (Output) Karya:</strong> ${t.output}
            <div style="font-size: 8.5pt; color: #0284c7; margin-top: 4px; font-weight: bold;">
              📌 Format pengerjaan dan penilaian disesuaikan sesuai kebijakan guru.
            </div>
          </div>
        </div>
      `;
    });

    printOrDownloadDocument(
      `Proyek_Murid_PAI_Kelas_${grade}_P${lesson}`,
      `Penugasan Proyek Akhlak Keluarga Kelas ${grade}`,
      bodyHtml
    );
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <FolderGit2 className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-sky-200 uppercase tracking-wider block">
              Penugasan Berbasis Proyek & Masalah • BAB 3
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Proyek Murid: Akhlak Mulia dalam Keluarga
            </h3>
            <p className="text-xs text-sky-100 font-medium">
              2 Penugasan PjBL (Project Based Learning) & 2 Penugasan PBL (Problem Based Learning)
            </p>
          </div>
        </div>

        <button
          onClick={handleDownloadProyek}
          className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center space-x-2 shadow-lg border border-amber-200 transition active:scale-95 cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Proyek</span>
        </button>
      </div>

      {/* TASKS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tasks.map((task) => {
          const isPjbl = task.type === 'PjBL';
          return (
            <div
              key={task.id}
              className={`bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 shadow-xl flex flex-col justify-between space-y-4 ${
                isPjbl
                  ? 'border-sky-200 dark:border-sky-800 hover:border-sky-400'
                  : 'border-purple-200 dark:border-purple-800 hover:border-purple-400'
              }`}
            >
              <div className="space-y-3">
                {/* Badge Header */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                      isPjbl
                        ? 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-300'
                        : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-300'
                    }`}
                  >
                    {task.badge}
                  </span>

                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                    Sesuai Kebijakan Guru
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white leading-snug">
                    {task.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 italic pt-0.5">
                    {task.subtitle}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                    🎯 Tujuan Pembelajaran:
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {task.objective}
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-1.5">
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider block">
                    Langkah-Langkah Pengerjaan:
                  </span>
                  <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {task.steps.map((st, i) => (
                      <div key={i} className="leading-relaxed bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
                        {st}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output & Teacher Note Footer */}
              <div className="pt-2 space-y-2 border-t border-slate-100 dark:border-slate-800">
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-start space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 dark:text-amber-200">
                    <strong>Luaran Karya:</strong> {task.output}
                  </div>
                </div>

                <div className="text-[11px] font-bold text-slate-500 italic text-right">
                  📌 Format penilaian dan kriteria karya <span className="underline">sesuai kebijakan guru</span>.
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
