import React from 'react';
import { KELAS4_P2_PROJECTS } from '../../data/kelas4Pembelajaran2Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  FolderGit2, 
  Download, 
  CheckCircle2, 
  Target, 
  BookOpen, 
  HelpCircle,
  Sparkles,
  Info
} from 'lucide-react';

interface ProyekMuridView4P2Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView4_P2: React.FC<ProyekMuridView4P2Props> = ({ grade, lesson }) => {
  const projects = KELAS4_P2_PROJECTS;

  const handleDownloadProyek = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>LEMBAR PENUGASAN PROYEK MURID PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Mengenal dan Meneladani Asmaul Husna (BAB 3)</h2>
        <p>2 Penugasan Project-Based Learning (PjBL) & 2 Penugasan Problem-Based Learning (PBL)</p>
      </div>
    `;

    projects.forEach((pj, idx) => {
      bodyHtml += `
        <div class="card">
          <div class="badge">${pj.badge}</div>
          <h3 style="margin: 4px 0; color: #047857; font-size: 13pt;">Tugas ${idx + 1}: ${pj.title}</h3>
          <p style="margin: 0 0 8px 0; font-size: 10pt; color: #475569; font-weight: bold;">${pj.subtitle}</p>
          
          <div style="margin-bottom: 8px; font-size: 9.5pt;">
            <strong>Tujuan Pembelajaran:</strong> ${pj.objective}
          </div>

          <div style="margin-bottom: 8px; font-size: 9.5pt;">
            <strong>Langkah-Langkah Kegiatan:</strong>
            <ul style="margin-top: 4px; padding-left: 20px;">
              ${pj.steps.map((st) => `<li style="margin-bottom: 3px;">${st}</li>`).join('')}
            </ul>
          </div>

          <div style="font-size: 9.5pt; color: #065f46; font-weight: bold;">
            📌 Output Hasil Kerja: ${pj.output}
          </div>

          <div class="policy-tag">
            Catatan Guru: ${pj.teacherNote} (Sesuai kebijakan guru)
          </div>
        </div>
      `;
    });

    printOrDownloadDocument(`Proyek_PAI_Kelas_${grade}_P${lesson}`, `Lembar Penugasan Proyek Kelas ${grade}`, bodyHtml);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <FolderGit2 className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-200 uppercase tracking-wider block">
              Lembar Kerja & Tugas Kelompok Murid
            </span>
            <h3 className="text-xl sm:text-2xl font-black pt-0.5">
              Kelas {grade} • Pembelajaran {lesson}
            </h3>
            <p className="text-xs text-teal-100 font-medium">
              2 Penugasan PjBL (Project Based) & 2 Penugasan PBL (Problem Based)
            </p>
          </div>
        </div>

        <button
          onClick={handleDownloadProyek}
          className="px-5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow-lg border border-amber-200 transition active:scale-95 cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Proyek</span>
        </button>
      </div>

      {/* Grid Display for 4 Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => {
          const isPjBL = proj.type === 'PjBL';
          return (
            <div
              key={proj.id}
              className={`bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 shadow-xl flex flex-col justify-between space-y-4 transition hover:shadow-2xl ${
                isPjBL
                  ? 'border-emerald-200 dark:border-emerald-800'
                  : 'border-indigo-200 dark:border-indigo-800'
              }`}
            >
              <div className="space-y-3">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                      isPjBL
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300'
                        : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-300'
                    }`}
                  >
                    {proj.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-400">Tugas #{idx + 1}</span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
                    {proj.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 pt-0.5">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Objective */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    🎯 Tujuan Penugasan:
                  </span>
                  {proj.objective}
                </div>

                {/* Steps */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    📋 Langkah Kegiatan:
                  </span>
                  <ul className="space-y-1.5 pl-1">
                    {proj.steps.map((st, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start space-x-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isPjBL ? 'text-emerald-500' : 'text-indigo-500'}`} />
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Output & Teacher Note */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <div className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
                  📌 Output Produk: <span className="text-slate-800 dark:text-slate-200 font-bold">{proj.output}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-900 dark:text-amber-200 flex items-start space-x-2">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold">Catatan Guru: </span>
                    <span>{proj.teacherNote}</span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-300 underline ml-1">
                      (Sesuai kebijakan guru)
                    </span>
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
