import React from 'react';
import { KELAS4_P5_PROJECTS } from '../../data/kelas4Pembelajaran5Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  FolderKanban, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Award,
  BookOpen
} from 'lucide-react';

interface ProyekMuridView4P5Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView4_P5: React.FC<ProyekMuridView4P5Props> = ({ grade, lesson }) => {
  const projects = KELAS4_P5_PROJECTS;

  const handleDownloadProyek = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>LEMBAR PENUGASAN PROYEK MURID PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Kisah Nabi Muhammad saw. Diangkat Menjadi Rasul dan Dakwah Periode Makkah</h2>
        <p>Pendekatan PjBL (Project Based Learning) & PBL (Problem Based Learning) • Kurikulum Merdeka BAB 5</p>
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

          <div style="background-color: #f8fafc; border: 1px dashed #cbd5e1; padding: 6px; border-radius: 4px; font-size: 8.5pt; margin-bottom: 6px;">
            <strong>Hasil Produk / Luaran:</strong> ${proj.output}
          </div>

          <div style="font-size: 8pt; color: #059669; font-style: italic; border-top: 1px solid #f1f5f9; padding-top: 4px;">
            <strong>Catatan Guru:</strong> ${proj.teacherNote} (sesuai kebijakan guru)
          </div>
        </div>
      `;
    });

    printOrDownloadDocument(
      `Proyek_Murid_PAI_Kelas_${grade}_P${lesson}_Kisah_Nabi_Makkah.pdf`,
      `Penugasan Proyek Murid PAI Kelas ${grade} Bab ${lesson} - Kisah Nabi Muhammad Makkah`,
      bodyHtml
    );
  };

  return (
    <div id="proyek-murid-v4-p5" className="space-y-6 max-w-5xl mx-auto">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-800 text-white rounded-3xl p-6 shadow-xl border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
            <FolderKanban className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider block">
              Lembar Penugasan Berbasis Proyek & Masalah
            </span>
            <h3 className="text-xl sm:text-2xl font-bold pt-0.5">
              Kelas {grade} • Pembelajaran {lesson} (BAB 5)
            </h3>
            <p className="text-xs text-emerald-100 font-medium mt-0.5">
              4 Tugas Aktif: 2 Project Based Learning (PjBL) & 2 Problem Based Learning (PBL)
            </p>
          </div>
        </div>

        <button
          id="btn-download-proyek-p5"
          onClick={handleDownloadProyek}
          className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center space-x-2 border border-amber-200 shadow-md transition active:scale-95 cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Proyek Murid</span>
        </button>
      </div>

      {/* PROJECT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div
            key={proj.id}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-emerald-400 transition-all"
          >
            <div className="p-6 space-y-4">
              {/* Badge & Type */}
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    proj.type === 'PjBL'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-indigo-100 text-indigo-800 border border-indigo-300'
                  }`}
                >
                  {proj.badge}
                </span>
                <span className="text-xs font-bold text-slate-400">Tugas #{index + 1}</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h4 className="text-lg font-bold text-slate-800 leading-snug">
                  {proj.title}
                </h4>
                <p className="text-xs font-medium text-emerald-600 mt-1">
                  {proj.subtitle}
                </p>
              </div>

              {/* Objective */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                <strong className="text-slate-900 block mb-0.5">Tujuan Pembelajaran:</strong>
                {proj.objective}
              </div>

              {/* Steps */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Langkah-Langkah Kegiatan:
                </span>
                <ul className="space-y-1 pl-1 text-xs text-slate-600">
                  {proj.steps.map((st, i) => (
                    <li key={i} className="leading-snug">
                      {st}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Output */}
              <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200/80 text-xs text-emerald-900">
                <strong className="text-emerald-800 block mb-0.5">Hasil Produk / Luaran:</strong>
                {proj.output}
              </div>
            </div>

            {/* Footer Teacher Note */}
            <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 italic">
              <span className="flex items-center gap-1 text-emerald-700 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Catatan Guru: {proj.teacherNote}
              </span>
              <span className="font-bold text-emerald-800 shrink-0 bg-emerald-100 px-2 py-0.5 rounded text-[10px] not-italic">
                sesuai kebijakan guru
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
