import React from 'react';
import { KELAS3_P1_PROJECTS } from '../../data/kelas3Pembelajaran1Data';
import { KELAS3_P2_PROJECTS } from '../../data/kelas3Pembelajaran2Data';
import { KELAS3_P3_PROJECTS } from '../../data/kelas3Pembelajaran3Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { Download, FolderKanban, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProyekMuridViewProps {
  grade: number;
  lesson: number;
}

export const ProyekMuridView: React.FC<ProyekMuridViewProps> = ({ grade, lesson }) => {
  const projectsData = lesson === 3 ? KELAS3_P3_PROJECTS : (lesson === 2 ? KELAS3_P2_PROJECTS : KELAS3_P1_PROJECTS);

  const handleDownloadProyek = () => {
    soundFX.playClick();

    let contentHtml = `
      <div style="background-color: #fef3c7; border-left: 5px solid #d97706; padding: 12px; margin-bottom: 20px; border-radius: 6px;">
        <strong style="color: #92400e; font-size: 11pt;">📌 Petunjuk Guru & Kurikulum Merdeka:</strong>
        <p style="margin: 4px 0 0 0; font-size: 10pt; color: #78350f;">
          Lembar kerja penugasan proyek murid ini mencakup 2 tugas berbasis Project Based Learning (PjBL) dan 2 tugas berbasis Problem Based Learning (PBL). Penilaian, alokasi waktu, serta penyesuaian media dapat ditentukan <strong>sesuai kebijakan guru</strong>.
        </p>
      </div>
    `;

    projectsData.forEach((proj, idx) => {
      contentHtml += `
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="badge" style="background-color: ${proj.type === 'PjBL' ? '#d1fae5' : '#fef3c7'}; color: ${proj.type === 'PjBL' ? '#065f46' : '#92400e'};">
              ${proj.badge}
            </span>
            <span style="font-size: 9pt; font-weight: bold; color: #64748b;">Tugas ${idx + 1} dari 4</span>
          </div>

          <h3 style="margin: 4px 0; color: #0f172a; font-size: 13pt;">${proj.title}</h3>
          <p style="margin: 0 0 10px 0; font-size: 10pt; color: #047857; font-weight: 600;">${proj.subtitle}</p>

          <div style="margin-bottom: 10px; font-size: 10pt; background-color: #ffffff; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <strong style="color: #1e293b;">Tujuan / Indikator:</strong> ${proj.objective}
          </div>

          <strong style="font-size: 10pt; color: #1e293b;">Langkah-Langkah Kegiatan:</strong>
          <ol style="margin-top: 4px; margin-bottom: 10px; font-size: 10pt;">
            ${proj.steps.map(s => `<li>${s}</li>`).join('')}
          </ol>

          <div style="font-size: 10pt; font-weight: bold; color: #065f46; margin-bottom: 8px;">
            🎯 Produk / Hasil Akhir: ${proj.output}
          </div>

          <div class="policy-tag">
            ℹ️ ${proj.teacherNote}
          </div>
        </div>
      `;
    });

    const docSub = lesson === 3
      ? 'PEMBELAJARAN 3: MENERAPKAN HUSNUZAN DAN MENGHINDARI SUUZAN KEPADA ALLAH SWT. (2 PjBL & 2 PBL)'
      : lesson === 2
      ? 'PEMBELAJARAN 2: 20 SIFAT WAJIB & 20 SIFAT MUSTAHIL ALLAH SWT. (2 PjBL & 2 PBL)'
      : 'PEMBELAJARAN 1: MEMBACA, MENULIS & MAD ṬABĪ‘Ī DAN SURAH AL-KAUTSAR (2 PjBL & 2 PBL)';

    printOrDownloadDocument(
      `PENUGASAN PROYEK MURID - KELAS ${grade}`,
      docSub,
      contentHtml
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Action Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border-2 border-amber-300 dark:border-amber-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-950 dark:text-amber-300 font-extrabold text-xs uppercase border border-amber-300">
            PROYEK MURID (PjBL & PBL)
          </span>
          <h3 className="text-lg font-black text-slate-900 dark:text-white pt-1">
            Penugasan Berbasis Proyek & Pemecahan Masalah
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            2 Tugas PjBL + 2 Tugas PBL untuk Kelas {grade} Pembelajaran {lesson}
          </p>
        </div>

        <button
          onClick={handleDownloadProyek}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center space-x-2 border border-amber-400 shadow-md active:scale-95 cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download Proyek Murid</span>
        </button>
      </div>

      {/* Global Teacher Policy Notice Banner */}
      <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 flex items-start space-x-3 shadow-xs">
        <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed">
          <strong>Ketentuan Fleksibilitas Guru:</strong> Seluruh penugasan proyek di bawah ini bersifat fleksibel. Bobot penilaian, media pembuatan, pembagian kelompok, serta waktu pengerjaan disesuaikan <strong>sesuai kebijakan guru</strong> masing-masing kelas.
        </div>
      </div>

      {/* 4 Task Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`rounded-3xl p-6 border-2 shadow-md space-y-4 flex flex-col justify-between transition-all duration-200 ${
              project.type === 'PjBL'
                ? 'bg-white dark:bg-slate-900 border-emerald-300 dark:border-emerald-800 hover:border-emerald-400'
                : 'bg-white dark:bg-slate-900 border-amber-300 dark:border-amber-800 hover:border-amber-400'
            }`}
          >
            <div className="space-y-3">
              {/* Card Header & Badge */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <span
                  className={`text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                    project.type === 'PjBL'
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 border border-emerald-300'
                      : 'bg-amber-100 dark:bg-amber-950/80 text-amber-950 dark:text-amber-300 border border-amber-300'
                  }`}
                >
                  {project.badge}
                </span>
                <FolderKanban className="w-5 h-5 text-slate-400" />
              </div>

              {/* Title */}
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
                  {project.title}
                </h4>
                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  {project.subtitle}
                </p>
              </div>

              {/* Objective */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Tujuan:</strong> {project.objective}
              </div>

              {/* Steps */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block">
                  Langkah Kegiatan:
                </span>
                <div className="space-y-1 pl-1">
                  {project.steps.map((step, idx) => (
                    <div key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <div className="p-2.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-900 dark:text-emerald-200 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hasil: {project.output}</span>
              </div>

              <div className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 italic bg-amber-50 dark:bg-amber-950/40 p-2 rounded-lg border border-amber-200/60 dark:border-amber-800/60">
                {project.teacherNote}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
