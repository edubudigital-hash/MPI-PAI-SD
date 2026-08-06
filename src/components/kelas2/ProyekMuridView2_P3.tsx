import React, { useState } from 'react';
import { PROYEK_KELAS2_P3 } from '../../data/kelas2Pembelajaran3Data';
import { soundFX } from '../../utils/audio';
import { 
  FolderKanban, 
  Printer, 
  CheckCircle, 
  Lightbulb, 
  FileText, 
  HelpCircle,
  Sparkles,
  ClipboardList
} from 'lucide-react';

interface ProyekMuridView2_P3Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView2_P3: React.FC<ProyekMuridView2_P3Props> = ({ grade, lesson }) => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'PjBL' | 'PBL'>('ALL');

  const filteredProjects = PROYEK_KELAS2_P3.filter(p => {
    if (activeTab === 'ALL') return true;
    return p.type === activeTab;
  });

  // Download PDF handler for Proyek Murid
  const handlePrintProyek = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Penugasan Proyek Murid PAI SD Kelas ${grade} Bab ${lesson}: Pola Hidup Bersih & Sehat</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 40px;
              color: #0f172a;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #0284c7;
              padding-bottom: 16px;
              margin-bottom: 24px;
            }
            .header h1 {
              margin: 0;
              color: #0369a1;
              font-size: 22px;
              font-weight: 800;
            }
            .header p {
              margin: 6px 0 0;
              color: #475569;
              font-size: 13px;
            }
            .project-card {
              page-break-inside: avoid;
              border: 1px solid #cbd5e1;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 24px;
              background-color: #ffffff;
            }
            .type-badge {
              display: inline-block;
              padding: 4px 12px;
              border-radius: 6px;
              font-size: 11px;
              font-weight: 800;
              margin-bottom: 10px;
            }
            .pjbl-bg {
              background-color: #e0f2fe;
              color: #0369a1;
            }
            .pbl-bg {
              background-color: #f0fdf4;
              color: #15803d;
            }
            .policy-tag {
              float: right;
              font-size: 11px;
              font-weight: 700;
              color: #0f766e;
              background-color: #ccfbf1;
              padding: 4px 10px;
              border-radius: 6px;
            }
            .project-title {
              font-size: 16px;
              font-weight: 800;
              color: #0f172a;
              margin-bottom: 8px;
            }
            .project-desc {
              font-size: 12px;
              color: #334155;
              margin-bottom: 14px;
            }
            .section-subtitle {
              font-size: 12px;
              font-weight: 700;
              color: #1e293b;
              margin-top: 12px;
              margin-bottom: 6px;
            }
            ol, ul {
              margin: 4px 0;
              padding-left: 20px;
              font-size: 12px;
            }
            li {
              margin-bottom: 4px;
            }
            .output-box {
              background-color: #f8fafc;
              border-left: 4px solid #0284c7;
              padding: 10px;
              font-size: 12px;
              margin-top: 12px;
              border-radius: 0 8px 8px 0;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              font-size: 11px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>LEMBAR PENUGASAN PROYEK MURID PAI SD KELAS ${grade} BAB ${lesson}</h1>
            <p>Berbasis Project-Based Learning (PjBL) & Problem-Based Learning (PBL)</p>
          </div>

          ${PROYEK_KELAS2_P3.map((p, idx) => `
            <div class="project-card">
              <span class="policy-tag">${p.policyNote}</span>
              <span class="type-badge ${p.type === 'PjBL' ? 'pjbl-bg' : 'pbl-bg'}">
                Penugasan ${idx + 1}: ${p.type} (${p.category})
              </span>

              <div class="project-title">${p.title}</div>
              <div class="project-desc">${p.description}</div>

              <div class="section-subtitle">Langkah-Langkah Kegiatan:</div>
              <ol>
                ${p.steps.map(step => `<li>${step}</li>`).join('')}
              </ol>

              <div class="output-box">
                <strong>Produk / Luaran Akhir:</strong> ${p.output}
              </div>

              <div class="section-subtitle">Kriteria Penilaian Guru:</div>
              <ul>
                ${p.assessmentCriteria.map(c => `<li>${c}</li>`).join('')}
              </ul>
            </div>
          `).join('')}

          <div class="footer">
            Dokumen Resmi Lembar Kerja Proyek Murid PAI & BP SD Kelas ${grade} Bab ${lesson}
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
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/80 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 font-bold shrink-0">
            <FolderKanban className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800 leading-tight">
              Proyek Murid: Pola Hidup Bersih & Sehat
            </h2>
            <p className="text-xs text-slate-500">
              2 Penugasan PjBL & 2 Penugasan PBL (Berbasis HOTS & Karakter Terpuji)
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          {/* Download PDF Button */}
          <button
            onClick={handlePrintProyek}
            className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-all flex items-center gap-2 shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Download Proyek PDF</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl w-fit">
        <button
          onClick={() => {
            soundFX.playClick();
            setActiveTab('ALL');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'ALL'
              ? 'bg-white text-slate-800 shadow-xs'
              : 'text-slate-600 hover:text-slate-800'
          }`}
        >
          Semua Proyek (4)
        </button>
        <button
          onClick={() => {
            soundFX.playClick();
            setActiveTab('PjBL');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'PjBL'
              ? 'bg-sky-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-800'
          }`}
        >
          Project Based Learning (2 PjBL)
        </button>
        <button
          onClick={() => {
            soundFX.playClick();
            setActiveTab('PBL');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'PBL'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-800'
          }`}
        >
          Problem Based Learning (2 PBL)
        </button>
      </div>

      {/* Projects List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              {/* Header Badge & Policy Tag */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  p.type === 'PjBL'
                    ? 'bg-sky-100 text-sky-800 border border-sky-200'
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                }`}>
                  {p.type} • {p.category}
                </span>

                {/* Sesuai Kebijakan Guru Tag */}
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  {p.policyNote}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {p.description}
              </p>

              {/* Steps List */}
              <div className="mb-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ClipboardList className="w-4 h-4 text-sky-600" />
                  Langkah-Langkah Kegiatan:
                </h4>
                <ol className="space-y-1.5 text-xs text-slate-600 list-decimal list-inside">
                  {p.steps.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>

              {/* Output Box */}
              <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-sky-900 mb-4">
                <span className="font-bold">Luaran Produk:</span> {p.output}
              </div>
            </div>

            {/* Assessment Criteria */}
            <div className="pt-3 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Kriteria Penilaian Guru:
              </span>
              <ul className="space-y-1 text-xs text-slate-600">
                {p.assessmentCriteria.map((criterion, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
