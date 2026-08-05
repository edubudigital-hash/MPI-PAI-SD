import React from 'react';
import { KELAS5_P5_PROJECTS } from '../../data/kelas5Pembelajaran5Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { soundFX } from '../../utils/audio';
import { 
  FolderKanban, 
  Download, 
  CheckCircle2, 
  Target, 
  Info, 
  FileCheck,
  Sparkles
} from 'lucide-react';

interface Props {
  grade?: number;
  lesson?: number;
}

export const ProyekMuridView5_P5: React.FC<Props> = ({ grade = 5, lesson = 5 }) => {
  const handleDownload = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
        <h1 style="text-align: center; color: #047857; margin-bottom: 4px; font-size: 18pt;">PENUGASAN PROYEK MURID PAI KELAS ${grade}</h1>
        <h2 style="text-align: center; color: #334155; margin-top: 0; font-size: 14pt; font-weight: normal;">PEMBELAJARAN ${lesson}: KEPEMIMPINAN NABI MUHAMMAD SAW. DI MADINAH DAN KETELADANANNYA</h2>
        <p style="text-align: center; font-size: 10pt; color: #059669; font-style: italic; margin-bottom: 20px;">
          (2 Penugasan Project Based Learning & 2 Penugasan Problem Based Learning)
        </p>
        <hr style="border: none; border-top: 2px solid #047857; margin: 16px 0 24px 0;" />
    `;

    KELAS5_P5_PROJECTS.forEach((proj, idx) => {
      bodyHtml += `
        <div style="margin-bottom: 24px; padding: 18px; border: 1px solid #cbd5e1; border-radius: 8px; background-color: #ffffff; page-break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 12px;">
            <h3 style="color: #047857; margin: 0; font-size: 13pt;">
              ${idx + 1}. ${proj.title}
            </h3>
            <span style="background-color: ${proj.category === 'PjBL' ? '#dcfce7' : '#dbeafe'}; color: ${proj.category === 'PjBL' ? '#15803d' : '#1e40af'}; padding: 4px 10px; border-radius: 12px; font-size: 9pt; font-weight: bold;">
              ${proj.badge}
            </span>
          </div>

          <p style="font-size: 10pt; color: #334155; margin-bottom: 10px;"><strong>Deskripsi:</strong> ${proj.description}</p>
          <p style="font-size: 10pt; color: #334155; margin-bottom: 10px;"><strong>Tujuan Pembelajaran:</strong> ${proj.objective}</p>

          <h4 style="color: #1e293b; font-size: 10.5pt; margin: 12px 0 6px 0;">Langkah-Langkah Kegiatan:</h4>
          <ul style="padding-left: 20px; margin: 0 0 12px 0; font-size: 9.5pt; color: #334155;">
            ${proj.steps.map(step => `<li style="margin-bottom: 4px;">${step}</li>`).join('')}
          </ul>

          <p style="font-size: 9.5pt; color: #047857; margin-bottom: 8px;"><strong>Output / Hasil Karya:</strong> ${proj.output}</p>

          <h4 style="color: #1e293b; font-size: 10.5pt; margin: 12px 0 6px 0;">Rubrik Penilaian:</h4>
          <ul style="padding-left: 20px; margin: 0 0 12px 0; font-size: 9pt; color: #475569;">
            ${proj.rubrik.map(r => `<li style="margin-bottom: 2px;">${r}</li>`).join('')}
          </ul>

          <div style="background-color: #f8fafc; border: 1px dashed #94a3b8; padding: 6px 12px; border-radius: 4px; font-size: 9pt; color: #64748b; font-style: italic; margin-top: 10px;">
            Catatan Pelaksanaan: <strong>${proj.note}</strong>
          </div>
        </div>
      `;
    });

    bodyHtml += `</div>`;

    printOrDownloadDocument(
      `Proyek Murid PAI Kelas ${grade} Pembelajaran ${lesson}`,
      `Kepemimpinan Nabi Muhammad saw. di Madinah dan Keteladanannya`,
      bodyHtml
    );
  };

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-2xl border border-slate-200 shadow-sm gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-1">
            <FolderKanban className="w-3.5 h-3.5" />
            Penugasan Berbasis Proyek (PjBL) & Masalah (PBL)
          </div>
          <h2 className="text-xl font-bold text-slate-900">Proyek Murid: Kepemimpinan Nabi Muhammad saw. di Madinah</h2>
          <p className="text-xs md:text-sm text-slate-500">2 Penugasan PjBL (Project Based Learning) & 2 Penugasan PBL (Problem Based Learning)</p>
        </div>

        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/20 active:scale-95"
        >
          <Download className="w-4 h-4" />
          <span>Download Proyek Murid</span>
        </button>
      </div>

      {/* Notice Banner */}
      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
        <Info className="w-5 h-5 text-amber-600 shrink-0" />
        <p className="text-xs sm:text-sm text-amber-900">
          <strong>Petunjuk Guru:</strong> Setiap tugas dirancang untuk mengasah keteladanan akhlak, kerjasama, musyawarah, dan pemecahan masalah. Pelaksanaan tugas <span className="underline font-bold">sesuai kebijakan guru</span>.
        </p>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-6">
        {KELAS5_P5_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Project Header */}
            <div className={`p-5 border-b border-slate-100 flex flex-wrap justify-between items-center gap-3 ${
              project.category === 'PjBL' ? 'bg-gradient-to-r from-emerald-50 to-teal-50/40' : 'bg-gradient-to-r from-blue-50 to-indigo-50/40'
            }`}>
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                  project.category === 'PjBL' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-blue-100 text-blue-800 border border-blue-200'
                }`}>
                  {project.badge}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-5">
              {/* Description & Objective */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                    Deskripsi Tugas
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-emerald-500" />
                    Tujuan Pembelajaran
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                    {project.objective}
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  Langkah-Langkah Kegiatan:
                </h4>
                <div className="space-y-2 pl-1">
                  {project.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output */}
              <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-teal-600 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-teal-900">Output / Hasil Karya: </span>
                  <span className="text-teal-800 font-medium">{project.output}</span>
                </div>
              </div>

              {/* Rubrik */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Rubrik Penilaian:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.rubrik.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="pt-2 text-right">
                <span className="text-xs text-slate-500 italic bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 inline-block">
                  Catatan: <strong className="text-slate-700">{project.note}</strong>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
