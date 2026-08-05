import React, { useState } from 'react';
import { KELAS5_P2_PROJECTS } from '../../data/kelas5Pembelajaran2Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  FolderGit2, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  BookOpen, 
  AlertCircle 
} from 'lucide-react';

interface ProyekMuridView5P2Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView5_P2: React.FC<ProyekMuridView5P2Props> = ({ grade, lesson }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(KELAS5_P2_PROJECTS[0].id);
  const projects = KELAS5_P2_PROJECTS;
  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const handleDownloadProjects = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>LEMUNAN PENUGASAN PROYEK MURID PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Penugasan Berbasis PjBL & PBL - Asmaul Husna</h2>
        <p>Berdasarkan Kurikulum Merdeka • Penilaian Disesuaikan Sesuai Kebijakan Guru</p>
      </div>
    `;

    projects.forEach((proj, idx) => {
      bodyHtml += `
        <div class="card" style="margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #059669; padding-bottom: 6px; margin-bottom: 10px;">
            <h3 style="color: #065f46; margin: 0; font-size: 13pt;">${idx + 1}. ${proj.title}</h3>
            <span class="badge">${proj.type}</span>
          </div>
          <p style="color: #64748b; font-size: 9.5pt; font-weight: bold; margin: 0 0 8px 0;">${proj.subtitle}</p>
          
          <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 8px 12px; margin-bottom: 10px; font-size: 9pt;">
            <strong style="color: #047857;">Tujuan Pembelajaran / Tujuan Proyek:</strong><br/>
            ${proj.objective}
          </div>

          <strong style="color: #1e293b; font-size: 9.5pt;">Langkah-Langkah Kegiatan Murid:</strong>
          <ol style="margin-top: 4px; padding-left: 20px; font-size: 9pt; line-height: 1.5;">
            ${proj.steps.map((s) => `<li style="margin-bottom: 4px;">${s}</li>`).join('')}
          </ol>

          <div style="margin-top: 10px; font-size: 9pt;">
            <strong style="color: #d97706;">Output / Hasil Produk Proyek:</strong> ${proj.output}
          </div>

          <div class="policy-tag" style="margin-top: 10px;">
            📌 Catatan Penilaian: ${proj.teacherNote} (Sesuai kebijakan guru).
          </div>
        </div>
      `;
    });

    printOrDownloadDocument(
      `Proyek_Murid_PAI_Kelas_${grade}_Pembelajaran_${lesson}`,
      `Penugasan PjBL & PBL Asmaul Husna (Al-Halīm, Asy-Syakūr, Al-Hakīm, Al-Wadūd)`,
      bodyHtml
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm mb-1">
            <FolderGit2 className="w-4 h-4" />
            <span>Penugasan Proyek Murid • Kelas {grade} Pembelajaran {lesson}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-amber-200">
            Proyek PjBL & PBL Asmaul Husna
          </h2>
          <p className="text-emerald-100 text-sm mt-1">
            2 Penugasan Project Based Learning & 2 Penugasan Problem Based Learning
          </p>
        </div>

        <button
          onClick={handleDownloadProjects}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-xl font-bold shadow-md transition-transform hover:scale-105"
        >
          <Download className="w-5 h-5" />
          <span>Download Lembar Proyek PDF</span>
        </button>
      </div>

      {/* Tabs Selection for 4 Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {projects.map((proj) => {
          const isActive = proj.id === activeProject.id;
          return (
            <button
              key={proj.id}
              onClick={() => {
                soundFX.playClick();
                setSelectedProjectId(proj.id);
              }}
              className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                isActive
                  ? 'bg-emerald-700 text-white border-emerald-600 shadow-md scale-102'
                  : 'bg-white text-slate-700 border-emerald-100 hover:bg-emerald-50/50'
              }`}
            >
              <div>
                <span
                  className={`text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider ${
                    isActive
                      ? 'bg-amber-400 text-slate-900'
                      : proj.type === 'PjBL'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {proj.type}
                </span>
                <h4 className="font-bold text-sm mt-2 line-clamp-2 leading-snug">
                  {proj.title}
                </h4>
              </div>
              <p className={`text-xs mt-2 font-medium line-clamp-1 ${isActive ? 'text-emerald-100' : 'text-slate-400'}`}>
                {proj.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detailed Selected Project View Card */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-emerald-100 space-y-6">
        {/* Project Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4">
          <div>
            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {activeProject.badge}
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 mt-2">
              {activeProject.title}
            </h3>
            <p className="text-sm font-semibold text-emerald-700 mt-0.5">
              {activeProject.subtitle}
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-amber-500 shrink-0" />
            <div className="text-xs">
              <p className="font-bold text-emerald-900">Kurikulum Merdeka</p>
              <p className="text-emerald-700">Disesuaikan Sesuai Kebijakan Guru</p>
            </div>
          </div>
        </div>

        {/* Objective Box */}
        <div className="bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-xl p-4 space-y-1">
          <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-600" />
            Tujuan Pembelajaran & Sasaran Proyek
          </h4>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
            {activeProject.objective}
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-800 text-base flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            Langkah-Langkah Pelaksanaan Proyek Murid:
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {activeProject.steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:bg-emerald-50/40 transition"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Output & Teacher Note Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-emerald-100">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-1">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
              📦 Output / Hasil Produk Proyek:
            </span>
            <p className="text-xs md:text-sm font-bold text-slate-800">
              {activeProject.output}
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-1">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-emerald-600" />
              Catatan & Penilaian Guru:
            </span>
            <p className="text-xs md:text-sm font-semibold text-emerald-900">
              {activeProject.teacherNote} <span className="underline italic">(sesuai kebijakan guru)</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
