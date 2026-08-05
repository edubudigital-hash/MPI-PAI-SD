import React from 'react';
import { KELAS5_P4_PROJECTS } from '../../data/kelas5Pembelajaran4Data';
import { printOrDownloadDocument } from '../../utils/exporter';
import { 
  FolderKanban, 
  Download, 
  CheckCircle2, 
  Clock, 
  Target, 
  Info, 
  FileCheck
} from 'lucide-react';

interface Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView5_P4: React.FC<Props> = ({ grade, lesson }) => {
  const handleDownload = () => {
    let bodyHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
        <h1 style="text-align: center; color: #0d9488; margin-bottom: 4px; font-size: 18pt;">PENUGASAN PROYEK MURID PAI KELAS ${grade}</h1>
        <h2 style="text-align: center; color: #334155; margin-top: 0; font-size: 14pt; font-weight: normal;">PEMBELAJARAN ${lesson}: PUASA WAJIB DAN SUNAH, SERTA HIKMAHNYA</h2>
        <p style="text-align: center; font-size: 10pt; color: #0f766e; font-style: italic; margin-bottom: 20px;">
          (2 Penugasan Project Based Learning & 2 Penugasan Problem Based Learning)
        </p>
        <hr style="border: none; border-top: 2px solid #0d9488; margin: 16px 0 24px 0;" />
    `;

    KELAS5_P4_PROJECTS.forEach((proj, idx) => {
      bodyHtml += `
        <div style="margin-bottom: 24px; padding: 18px; border: 1px solid #cbd5e1; border-radius: 8px; background-color: #ffffff; page-break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 12px;">
            <h3 style="color: #0f766e; margin: 0; font-size: 13pt;">
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

          <p style="font-size: 9.5pt; color: #0f766e; margin-bottom: 8px;"><strong>Output / Hasil Karya:</strong> ${proj.output}</p>

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
      `Puasa Wajib dan Sunah, Serta Hikmahnya`,
      bodyHtml
    );
  };

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-5 rounded-2xl border border-slate-200 shadow-sm gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-1">
            <FolderKanban className="w-3.5 h-3.5" />
            Penugasan Berbasis Proyek & Masalah
          </div>
          <h2 className="text-xl font-bold text-slate-800">Proyek Murid: Puasa Wajib dan Sunah</h2>
          <p className="text-sm text-slate-500">2 Penugasan PjBL (Project Based Learning) & 2 Penugasan PBL (Problem Based Learning)</p>
        </div>

        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all shadow-md hover:shadow-emerald-200 active:scale-95"
        >
          <Download className="w-4 h-4" />
          <span>Download Proyek (PDF)</span>
        </button>
      </div>

      {/* Notice Banner */}
      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
        <Info className="w-5 h-5 text-amber-600 shrink-0" />
        <p className="text-xs sm:text-sm text-amber-900">
          <strong>Petunjuk Guru:</strong> Setiap tugas dilengkapi dengan rubrik penilaian dan alur kerja terstruktur. Waktu dan moda pengerjaan <span className="underline font-semibold">sesuai kebijakan guru</span>.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {KELAS5_P4_PROJECTS.map((proj) => (
          <div 
            key={proj.id} 
            className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Top Bar Header */}
            <div>
              <div className={`p-5 ${proj.category === 'PjBL' ? 'bg-emerald-600' : 'bg-blue-600'} text-white`}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${proj.category === 'PjBL' ? 'bg-emerald-800 text-emerald-100' : 'bg-blue-800 text-blue-100'}`}>
                    {proj.badge}
                  </span>
                  <span className="text-xs font-medium text-white/80 bg-black/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {proj.note}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">{proj.title}</h3>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-emerald-600" /> Deskripsi Tugas:
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{proj.description}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Tujuan Pembelajaran:</h4>
                  <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">{proj.objective}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Langkah Kegiatan:</h4>
                  <ul className="space-y-1.5">
                    {proj.steps.map((st, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl">
                  <span className="text-xs font-bold text-emerald-900 block mb-0.5">Hasil / Output Karya:</span>
                  <span className="text-xs text-emerald-800">{proj.output}</span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5 text-blue-600" /> Rubrik Penilaian:
                  </h4>
                  <ul className="grid grid-cols-1 gap-1 pl-1">
                    {proj.rubrik.map((r, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
              <span className="text-xs text-slate-500 font-medium italic">
                *Penugasan ini dilaksanakan {proj.note.toLowerCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
