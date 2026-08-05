import React from 'react';
import { KELAS4_P1_PROJECTS } from '../../data/kelas4Pembelajaran1Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { Download, FolderKanban, Sparkles, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

interface ProyekMuridView4Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView4: React.FC<ProyekMuridView4Props> = ({ grade, lesson }) => {
  const projectsData = KELAS4_P1_PROJECTS;

  const handleDownloadProyek = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>PENUGASAN PROYEK MURID PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Tajwid Idgham Bi Ghunnah & Bila Ghunnah serta Surah An-Nasr</h2>
        <p>2 Penugasan Project Based Learning (PjBL) & 2 Penugasan Problem Based Learning (PBL)</p>
      </div>
    `;

    projectsData.forEach((p, index) => {
      bodyHtml += `
        <div class="card">
          <div class="badge">${p.badge}</div>
          <h3 style="margin: 4px 0; color: #0d9488; font-size: 13pt;">${index + 1}. ${p.title}</h3>
          <p style="margin: 0 0 6px 0; font-size: 9.5pt; color: #475569; font-weight: bold;">${p.subtitle}</p>
          
          <p style="font-size: 9.5pt; margin-bottom: 6px;"><strong>Tujuan Pembelajaran:</strong> ${p.objective}</p>
          
          <p style="font-size: 9.5pt; margin-bottom: 4px; font-weight: bold;">Langkah-Langkah Kegiatan:</p>
          <ul style="margin: 0 0 8px 0; padding-left: 20px;">
            ${p.steps.map((step) => `<li style="margin-bottom: 3px; font-size: 9pt;">${step}</li>`).join('')}
          </ul>

          <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 6px 10px; border-radius: 6px; font-size: 9pt; margin-bottom: 6px;">
            <strong>Produk/Hasil Akhir:</strong> ${p.output}
          </div>

          <div style="background-color: #fffbeb; border-left: 3px solid #f59e0b; padding: 6px; font-size: 8.5pt; color: #92400e;">
            📌 <strong>Catatan Guru (Sesuai Kebijakan Guru):</strong> ${p.teacherNote}
          </div>
        </div>
      `;
    });

    printOrDownloadDocument(`Proyek_Murid_PAI_Kelas_${grade}_P${lesson}`, `Proyek Murid PAI Kelas ${grade}`, bodyHtml);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 rounded-3xl p-6 shadow-xl border-2 border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 shrink-0">
            <FolderKanban className="w-8 h-8 text-slate-950" />
          </div>
          <div>
            <span className="text-xs font-black text-amber-950 uppercase tracking-wider block">
              Lembar Kerja & Penugasan Berbasis Proyek
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Proyek Murid Kelas {grade} • Pembelajaran {lesson}
            </h3>
            <p className="text-xs text-amber-950 font-bold">
              2 PjBL (Project-Based) & 2 PBL (Problem-Based) Tajwid & Surah An-Nasr
            </p>
          </div>
        </div>

        <button
          onClick={handleDownloadProyek}
          className="px-5 py-2.5 rounded-2xl bg-slate-950 hover:bg-slate-800 text-amber-300 font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow-lg border border-amber-400/40 transition active:scale-95 cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Proyek</span>
        </button>
      </div>

      {/* Grid Proyek */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, idx) => {
          const isPjBL = project.type === 'PjBL';
          return (
            <div
              key={project.id}
              className={`rounded-3xl p-6 border-2 shadow-lg space-y-4 flex flex-col justify-between transition-all duration-200 ${
                isPjBL
                  ? 'bg-amber-50/50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800'
                  : 'bg-teal-50/50 dark:bg-teal-950/30 border-teal-300 dark:border-teal-800'
              }`}
            >
              <div className="space-y-3">
                {/* Badge & Type */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-black uppercase px-3 py-1 rounded-full border ${
                      isPjBL
                        ? 'bg-amber-200 text-amber-950 border-amber-400'
                        : 'bg-teal-200 text-teal-950 border-teal-400'
                    }`}
                  >
                    {project.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Proyek #{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                    {project.subtitle}
                  </p>
                </div>

                {/* Objective */}
                <div className="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-900 dark:text-white block mb-1">🎯 Tujuan Kegiatan:</strong>
                  {project.objective}
                </div>

                {/* Steps */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider block">
                    📋 Langkah Kerja Murid:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {project.steps.map((st, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-amber-600 font-bold shrink-0">•</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Output */}
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 font-bold">
                  📦 Hasil Akhir: {project.output}
                </div>
              </div>

              {/* Teacher Note with strict requirement text "sesuai kebijakan guru" */}
              <div className="p-3 rounded-2xl bg-amber-100/70 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 text-[11px] text-amber-950 dark:text-amber-200 flex items-start gap-2 pt-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Catatan Pelaksanaan Guru:</strong> {project.teacherNote}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
