import React, { useState } from 'react';
import { KELAS5_P3_PROJECTS } from '../../data/kelas5Pembelajaran3Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  FolderKanban, 
  Download, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles,
  Award,
  Layers,
  FileText,
  AlertCircle
} from 'lucide-react';

interface ProyekMuridView5P3Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView5_P3: React.FC<ProyekMuridView5P3Props> = ({ grade, lesson }) => {
  const [filterType, setFilterType] = useState<'ALL' | 'PjBL' | 'PBL'>('ALL');
  const projects = KELAS5_P3_PROJECTS;

  const filteredProjects = projects.filter((p) => {
    if (filterType === 'PjBL') return p.type === 'PjBL';
    if (filterType === 'PBL') return p.type === 'PBL';
    return true;
  });

  const handleDownloadProyek = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>LEMBAR PENUGASAN PROYEK MURID PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Akhlak Kepada Allah Swt. Melalui Doa dan Tawakal</h2>
        <p>Project Based Learning (PjBL) & Problem Based Learning (PBL)</p>
      </div>
    `;

    projects.forEach((prj, idx) => {
      bodyHtml += `
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0d9488; padding-bottom: 6px; margin-bottom: 10px;">
            <h3 style="margin: 0; color: #0f766e; font-size: 11pt;">${idx + 1}. ${prj.title}</h3>
            <span style="background-color: #f0fdf4; color: #166534; font-size: 8pt; font-weight: bold; padding: 2px 8px; border-radius: 4px; border: 1px solid #bbf7d0;">${prj.badge}</span>
          </div>

          <p style="font-size: 9.5pt; color: #334155; margin-bottom: 8px;"><strong>Tujuan Pembelajaran:</strong> ${prj.objective}</p>

          <strong style="font-size: 9.5pt; color: #0d9488;">Langkah-Langkah Kegiatan:</strong>
          <ol style="margin: 4px 0 10px 0; padding-left: 20px; font-size: 9pt; line-height: 1.5; color: #1e293b;">
            ${prj.steps.map((st) => `<li style="margin-bottom: 3px;">${st}</li>`).join('')}
          </ol>

          <p style="font-size: 9pt; color: #0f766e; background-color: #f0fdf4; padding: 6px 10px; border-radius: 4px; margin-bottom: 6px;">
            <strong>Hasil Akhir / Produk:</strong> ${prj.output}
          </p>

          <p style="font-size: 8.5pt; color: #64748b; font-style: italic; margin-top: 4px;">
            📌 <strong>Catatan Guru:</strong> ${prj.teacherNote}
          </p>
        </div>
      `;
    });

    printOrDownloadDocument(
      `Proyek Murid PAI Kelas 5 Pembelajaran 3`,
      `Akhlak Kepada Allah Swt. Melalui Doa dan Tawakal`,
      bodyHtml
    );
  };

  return (
    <div id="proyek-murid-5-3" className="max-w-5xl mx-auto p-4 md:p-6 space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide mb-2">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Penugasan Kontekstual • PjBL & PBL</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Proyek Murid Pembelajaran 3
          </h1>
          <p className="text-teal-100 text-sm mt-1">
            2 Tugas berbasis Project Based Learning (PjBL) & 2 Tugas berbasis Problem Based Learning (PBL)
          </p>
        </div>

        <button
          onClick={handleDownloadProyek}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-teal-800 hover:bg-teal-50 rounded-xl font-semibold text-sm transition-all shadow-md shrink-0 active:scale-95"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Proyek</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl max-w-md">
        <button
          onClick={() => {
            soundFX.playClick();
            setFilterType('ALL');
          }}
          className={`flex-1 py-2 px-3 rounded-lg text-xs md:text-sm font-semibold transition-all ${
            filterType === 'ALL'
              ? 'bg-white text-teal-800 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Semua (4 Tugas)
        </button>
        <button
          onClick={() => {
            soundFX.playClick();
            setFilterType('PjBL');
          }}
          className={`flex-1 py-2 px-3 rounded-lg text-xs md:text-sm font-semibold transition-all ${
            filterType === 'PjBL'
              ? 'bg-white text-teal-800 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Project Based (2)
        </button>
        <button
          onClick={() => {
            soundFX.playClick();
            setFilterType('PBL');
          }}
          className={`flex-1 py-2 px-3 rounded-lg text-xs md:text-sm font-semibold transition-all ${
            filterType === 'PBL'
              ? 'bg-white text-teal-800 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Problem Based (2)
        </button>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((prj) => (
          <div
            key={prj.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
          >
            <div className="p-6 space-y-4">
              {/* Top Badge & Type */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    prj.type === 'PjBL'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                  }`}
                >
                  {prj.type === 'PjBL' ? (
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                  )}
                  {prj.badge}
                </span>

                <span className="text-xs font-bold text-slate-400">
                  Kelas 5 • P3
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 leading-snug">
                  {prj.title}
                </h3>
                <p className="text-xs font-medium text-teal-600 mt-0.5">
                  {prj.subtitle}
                </p>
              </div>

              {/* Objective */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Tujuan: </strong>
                  {prj.objective}
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  Langkah-Langkah Kegiatan:
                </h4>
                <ul className="space-y-1.5 pl-1">
                  {prj.steps.map((st, idx) => (
                    <li key={idx} className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Output & Teacher Note */}
            <div className="bg-slate-50 p-5 border-t border-slate-100 space-y-2">
              <div className="bg-emerald-50/80 border border-emerald-100 rounded-lg p-2.5">
                <p className="text-xs text-emerald-900 font-semibold">
                  📦 <span className="text-emerald-700">Hasil Akhir: </span>
                  {prj.output}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-slate-500 text-xs italic">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{prj.teacherNote}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
