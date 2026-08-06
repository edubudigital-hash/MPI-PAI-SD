import React, { useState } from 'react';
import { PROYEK_KELAS2_P2, ProyekData } from '../../data/kelas2Pembelajaran2Data';
import { soundFX } from '../../utils/audio';
import { 
  FolderKanban, 
  Printer, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  FileText
} from 'lucide-react';

interface ProyekMuridView2_P2Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView2_P2: React.FC<ProyekMuridView2_P2Props> = ({ grade, lesson }) => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'PjBL' | 'PBL'>('ALL');

  const filteredProjects = PROYEK_KELAS2_P2.filter(p => {
    if (activeFilter === 'ALL') return true;
    return p.type === activeFilter;
  });

  const handlePrintProyek = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Proyek Murid PAI Kelas ${grade} Bab ${lesson}: Asmaul Husna</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 30px;
              color: #0f172a;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #0284c7;
              padding-bottom: 15px;
              margin-bottom: 25px;
            }
            .header h1 {
              margin: 0;
              color: #0284c7;
              font-size: 20px;
              font-weight: 800;
            }
            .header p {
              margin: 4px 0 0;
              color: #475569;
              font-size: 13px;
            }
            .project-card {
              page-break-inside: avoid;
              border: 1px solid #cbd5e1;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 25px;
              background-color: #ffffff;
            }
            .badge-group {
              display: flex;
              gap: 8px;
              margin-bottom: 12px;
            }
            .badge-type {
              background-color: #e0f2fe;
              color: #0369a1;
              font-size: 11px;
              font-weight: 800;
              padding: 4px 10px;
              border-radius: 20px;
            }
            .badge-policy {
              background-color: #fef3c7;
              color: #b45309;
              font-size: 11px;
              font-weight: 700;
              padding: 4px 10px;
              border-radius: 20px;
            }
            .project-title {
              font-size: 16px;
              font-weight: 800;
              color: #0f172a;
              margin-bottom: 8px;
            }
            .project-desc {
              font-size: 13px;
              color: #334155;
              margin-bottom: 14px;
            }
            .section-label {
              font-size: 12px;
              font-weight: 700;
              color: #0369a1;
              text-transform: uppercase;
              margin-top: 10px;
              margin-bottom: 6px;
            }
            ol, ul {
              margin: 4px 0 12px 0;
              padding-left: 20px;
              font-size: 13px;
              color: #334155;
            }
            li {
              margin-bottom: 4px;
            }
            .output-box {
              background-color: #f8fafc;
              border-left: 4px solid #0284c7;
              padding: 10px 14px;
              font-size: 13px;
              font-weight: 600;
              color: #0f172a;
              margin-top: 10px;
              border-radius: 4px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              font-size: 11px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 15px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>PENUGASAN PROYEK MURID PAI SD - KELAS ${grade} BAB ${lesson}</h1>
            <p>Mengenal dan Meneladani Asmaul Husna (Ar-Raḥmān, Ar-Raḥīm, As-Salām, Al-Mu'min)</p>
          </div>
          ${PROYEK_KELAS2_P2.map((p, idx) => `
            <div class="project-card">
              <div class="badge-group">
                <span class="badge-type">${p.type} • ${p.category}</span>
                <span class="badge-policy">📌 ${p.policyNote}</span>
              </div>
              <div class="project-title">${idx + 1}. ${p.title}</div>
              <p class="project-desc">${p.description}</p>
              
              <div class="section-label">Langkah-Langkah Kegiatan:</div>
              <ol>
                ${p.steps.map(s => `<li>${s}</li>`).join('')}
              </ol>

              <div class="section-label">Target Produk / Luaran:</div>
              <div class="output-box">${p.output}</div>

              <div class="section-label">Kriteria Penilaian Guru:</div>
              <ul>
                ${p.assessmentCriteria.map(ac => `<li>${ac}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
          <div class="footer">
            Dokumen Tugas Proyek Pembelajaran PAI SD Kelas ${grade} • Hak Cipta Dilindungi
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  return (
    <div className="space-y-6">
      {/* Top Bar Header */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/80 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 font-bold shrink-0">
            <FolderKanban className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800 leading-tight">
              Proyek Murid: PjBL & PBL
            </h2>
            <p className="text-xs text-slate-500">
              Kelas {grade} • Pembelajaran {lesson} (2 Tugas PjBL & 2 Tugas PBL)
            </p>
          </div>
        </div>

        {/* Filter and Download Controls */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1">
            <button
              onClick={() => {
                soundFX.playClick();
                setActiveFilter('ALL');
              }}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'ALL'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Semua (4)
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                setActiveFilter('PjBL');
              }}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'PjBL'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              PjBL (Project Based)
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                setActiveFilter('PBL');
              }}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'PBL'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              PBL (Problem Based)
            </button>
          </div>

          <button
            onClick={handlePrintProyek}
            className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Download Proyek PDF</span>
          </button>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top Badge Info */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide flex items-center gap-1 ${
                  p.type === 'PjBL'
                    ? 'bg-sky-100 text-sky-800 border border-sky-200'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}>
                  <Layers className="w-3 h-3" />
                  {p.type} • {p.category}
                </span>

                {/* Policy Note Tag Requirement */}
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200/80 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-amber-600" />
                  <span>{p.policyNote}</span>
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug group-hover:text-sky-600 transition-colors">
                {p.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {p.description}
              </p>

              {/* Steps */}
              <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 mb-4">
                <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block mb-2">
                  Langkah Kegiatan:
                </span>
                <ol className="space-y-2">
                  {p.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-sky-200/70 text-sky-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Output */}
              <div className="bg-sky-50/60 rounded-xl p-3 border border-sky-100 mb-4 flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-sky-900 block">Target Luaran:</span>
                  <span className="text-sky-700">{p.output}</span>
                </div>
              </div>

              {/* Assessment Criteria */}
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Kriteria Penilaian:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {p.assessmentCriteria.map((ac, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{ac}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card Footer Tag */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Modul Kurikulum Merdeka PAI
              </span>
              <span className="font-semibold text-amber-600">
                {p.policyNote}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
