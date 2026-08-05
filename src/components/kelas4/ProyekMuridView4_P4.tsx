import React from 'react';
import { KELAS4_P4_PROJECTS, ProjectTask } from '../../data/kelas4Pembelajaran4Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  FolderKanban, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  FileText,
  Clock,
  Layers
} from 'lucide-react';

interface ProyekMuridView4P4Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView4_P4: React.FC<ProyekMuridView4P4Props> = ({ grade, lesson }) => {
  const projects = KELAS4_P4_PROJECTS;

  const handleDownloadProyek = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>LEMBAR PENUGASAN PROYEK MURID PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Memahami dan Menerapkan Ketentuan Shalat Sunah Rawatib, Shalat Dhuha, dan Shalat Tahajud</h2>
        <p>Pendekatan PjBL (Project Based Learning) & PBL (Problem Based Learning) • Kurikulum Merdeka BAB 4</p>
      </div>
    `;

    projects.forEach((proj, idx) => {
      bodyHtml += `
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="background-color: ${proj.type === 'PjBL' ? '#0d9488' : '#6366f1'}; color: white; padding: 3px 8px; border-radius: 4px; font-size: 8pt; font-weight: bold;">
              ${proj.badge}
            </span>
            <span style="font-size: 8.5pt; color: #64748b;">Tugas ${idx + 1}</span>
          </div>

          <h3 style="margin: 4px 0; color: #0f172a; font-size: 11pt;">${proj.title}</h3>
          <p style="margin: 0 0 8px 0; font-size: 9pt; color: #0d9488;"><em>${proj.subtitle}</em></p>

          <div style="margin-bottom: 8px; font-size: 9pt;">
            <strong>Tujuan Pembelajaran:</strong> ${proj.objective}
          </div>

          <div style="margin-bottom: 8px; font-size: 9pt;">
            <strong>Langkah-Langkah Kegiatan:</strong>
            <ol style="margin: 4px 0 0 0; padding-left: 20px; font-size: 9pt; line-height: 1.4;">
              ${proj.steps.map((st) => `<li>${st}</li>`).join('')}
            </ol>
          </div>

          <div style="background-color: #f8fafc; border: 1px border-style: dashed; border-color: #cbd5e1; padding: 6px; border-radius: 4px; font-size: 8.5pt; margin-bottom: 6px;">
            <strong>Hasil Produk / Luaran:</strong> ${proj.output}
          </div>

          <div style="font-size: 8pt; color: #059669; font-style: italic; border-top: 1px solid #f1f5f9; padding-top: 4px;">
            <strong>Catatan Guru:</strong> ${proj.teacherNote} (sesuai kebijakan guru)
          </div>
        </div>
      `;
    });

    printOrDownloadDocument(
      `Proyek_Murid_PAI_Kelas_${grade}_P${lesson}`,
      `Penugasan Proyek Murid PAI Kelas ${grade} Bab ${lesson}`,
      bodyHtml
    );
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-700 to-indigo-800 text-white rounded-3xl p-6 shadow-xl border-2 border-emerald-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <FolderKanban className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider block">
              Lembar Penugasan Berbasis Proyek & Masalah
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Kelas {grade} • Pembelajaran {lesson} (BAB 4)
            </h3>
            <p className="text-xs text-emerald-100 font-medium">
              4 Tugas Aktif: 2 Project Based Learning (PjBL) & 2 Problem Based Learning (PBL)
            </p>
          </div>
        </div>

        <button
          onClick={handleDownloadProyek}
          className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center space-x-2 border border-amber-200 shadow-md transition active:scale-95 cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Proyek</span>
        </button>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-teal-200 dark:border-teal-800 shadow-xl flex flex-col justify-between space-y-4 hover:border-teal-400 transition"
          >
            <div className="space-y-3">
              {/* Badge & Number */}
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-white shadow-xs ${
                    proj.type === 'PjBL' ? 'bg-teal-600' : 'bg-indigo-600'
                  }`}
                >
                  {proj.badge}
                </span>
                <span className="text-xs font-bold text-slate-400">Tugas #{idx + 1}</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  {proj.title}
                </h4>
                <p className="text-xs font-bold text-teal-600 dark:text-teal-400">
                  {proj.subtitle}
                </p>
              </div>

              {/* Objective */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300 block">
                  🎯 Tujuan Kegiatan:
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {proj.objective}
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-extrabold text-slate-900 dark:text-white block">
                  📝 Langkah-Langkah Pelaksanaan:
                </span>
                <ul className="space-y-1.5 pl-1">
                  {proj.steps.map((st, sIdx) => (
                    <li key={sIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0"></span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Output & Teacher Note */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200">
                <strong>📦 Hasil Luaran:</strong> {proj.output}
              </div>

              <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 italic bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <strong>Catatan Guru:</strong> {proj.teacherNote} <span className="underline decoration-wavy">(sesuai kebijakan guru)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
