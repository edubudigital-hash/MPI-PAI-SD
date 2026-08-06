import React, { useState } from 'react';
import { PROYEK_KELAS2_P4, ProyekData } from '../../data/kelas2Pembelajaran4Data';
import { soundFX } from '../../utils/audio';
import { 
  FolderKanban, 
  Printer, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  BrainCircuit, 
  ShieldAlert,
  BookOpenCheck
} from 'lucide-react';

interface ProyekMuridView2_P4Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView2_P4: React.FC<ProyekMuridView2_P4Props> = ({ grade, lesson }) => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'PjBL' | 'PBL'>('ALL');
  const [selectedProyek, setSelectedProyek] = useState<ProyekData | null>(PROYEK_KELAS2_P4[0]);

  const filteredProyek = PROYEK_KELAS2_P4.filter(p => {
    if (activeTab === 'PjBL') return p.type === 'PjBL';
    if (activeTab === 'PBL') return p.type === 'PBL';
    return true;
  });

  const handlePrintProyek = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Penugasan Proyek Murid PAI SD Kelas ${grade} Bab ${lesson}</title>
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
              margin: 4px 0 0;
              color: #64748b;
              font-size: 14px;
            }
            .proyek-card {
              page-break-inside: avoid;
              border: 1px solid #cbd5e1;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 24px;
              background-color: #ffffff;
            }
            .badge-type {
              display: inline-block;
              padding: 4px 12px;
              font-size: 11px;
              font-weight: 800;
              border-radius: 20px;
              margin-bottom: 8px;
            }
            .pjbl { background-color: #e0f2fe; color: #0369a1; }
            .pbl { background-color: #fef3c7; color: #92400e; }
            .title {
              font-size: 16px;
              font-weight: 800;
              color: #0f172a;
              margin-bottom: 6px;
            }
            .policy-tag {
              display: inline-block;
              font-size: 11px;
              font-weight: 700;
              color: #059669;
              background-color: #d1fae5;
              padding: 2px 8px;
              border-radius: 6px;
              margin-bottom: 12px;
            }
            .section-title {
              font-size: 12px;
              font-weight: 800;
              color: #334155;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-top: 12px;
              margin-bottom: 6px;
            }
            ol, ul {
              margin: 4px 0 12px;
              padding-left: 20px;
            }
            li {
              font-size: 12px;
              color: #334155;
              margin-bottom: 4px;
            }
            .footer {
              text-align: center;
              font-size: 11px;
              color: #94a3b8;
              margin-top: 40px;
              border-top: 1px solid #e2e8f0;
              padding-top: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>LEMNA PENUGASAN PROYEK MURID (PjBL & PBL)</h1>
            <p>PAI & BP Kelas ${grade} - Bab ${lesson}: Ketentuan & Mempraktikkan Shalat Fardu</p>
          </div>

          ${PROYEK_KELAS2_P4.map(p => `
            <div class="proyek-card">
              <span class="badge-type ${p.type.toLowerCase()}">${p.type} - ${p.category}</span>
              <div class="title">${p.title}</div>
              <div class="policy-tag">* ${p.policyNote}</div>

              <p style="font-size: 12px; color: #475569; margin-bottom: 12px;">${p.description}</p>

              <div class="section-title">Langkah-Langkah Kegiatan:</div>
              <ol>
                ${p.steps.map(step => `<li>${step}</li>`).join('')}
              </ol>

              <div class="section-title">Hasil Akhir (Output):</div>
              <p style="font-size: 12px; font-weight: 700; color: #0284c7; margin: 0 0 10px;">${p.output}</p>

              <div class="section-title">Kriteria Penilaian:</div>
              <ul>
                ${p.assessmentCriteria.map(c => `<li>${c}</li>`).join('')}
              </ul>
            </div>
          `).join('')}

          <div class="footer">
            <p>Lembar Penugasan Berbasis Proyek (PjBL & PBL) Kelas ${grade} Bab ${lesson} | Dicetak Otomatis</p>
          </div>

          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="space-y-6">
      {/* HEADER SECTION */}
      <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-sky-50 text-sky-600 rounded-2xl">
            <FolderKanban className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-sky-100 text-sky-800 rounded-full">
                Kelas {grade} • Bab {lesson}
              </span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                Sesuai Kebijakan Guru
              </span>
            </div>
            <h2 className="text-lg font-extrabold text-slate-800 mt-1">
              Penugasan Proyek Murid (PjBL & PBL)
            </h2>
          </div>
        </div>

        <button
          onClick={handlePrintProyek}
          className="flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
        >
          <Printer className="w-4 h-4" />
          <span>Download Proyek PDF</span>
        </button>
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center gap-2 bg-slate-100/80 p-1.5 rounded-2xl w-fit">
        <button
          onClick={() => {
            soundFX.playClick();
            setActiveTab('ALL');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === 'ALL'
              ? 'bg-white text-sky-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Semua Penugasan (4)
        </button>
        <button
          onClick={() => {
            soundFX.playClick();
            setActiveTab('PjBL');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
            activeTab === 'PjBL'
              ? 'bg-sky-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileText className="w-3.5 h-3.5" /> Project Based Learning (2 PjBL)
        </button>
        <button
          onClick={() => {
            soundFX.playClick();
            setActiveTab('PBL');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
            activeTab === 'PBL'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <BrainCircuit className="w-3.5 h-3.5" /> Problem Based Learning (2 PBL)
        </button>
      </div>

      {/* MAIN GRID AND DETAIL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LIST PENUGASAN */}
        <div className="lg:col-span-5 space-y-3">
          {filteredProyek.map((proyek) => {
            const isSelected = selectedProyek?.id === proyek.id;

            return (
              <div
                key={proyek.id}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedProyek(proyek);
                }}
                className={`p-4 rounded-2xl border transition cursor-pointer ${
                  isSelected
                    ? proyek.type === 'PjBL'
                      ? 'bg-sky-50/80 border-sky-400 ring-2 ring-sky-500/20 shadow-sm'
                      : 'bg-amber-50/80 border-amber-400 ring-2 ring-amber-500/20 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                      proyek.type === 'PjBL'
                        ? 'bg-sky-100 text-sky-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {proyek.type} • {proyek.category}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    {proyek.policyNote}
                  </span>
                </div>

                <h4 className="text-sm font-extrabold text-slate-800 mb-1">
                  {proyek.title}
                </h4>

                <p className="text-xs text-slate-600 line-clamp-2">
                  {proyek.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* DETAILED VIEW OF SELECTED PROYEK */}
        {selectedProyek && (
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-black ${
                    selectedProyek.type === 'PjBL'
                      ? 'bg-sky-100 text-sky-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  Model {selectedProyek.type}: {selectedProyek.category}
                </span>
                <h3 className="text-lg font-black text-slate-800 mt-2">
                  {selectedProyek.title}
                </h3>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1.5 rounded-xl block">
                  ✓ {selectedProyek.policyNote}
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              {selectedProyek.description}
            </p>

            {/* STEPS */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <BookOpenCheck className="w-4 h-4 text-sky-600" /> Langkah-Langkah Pengerjaan:
              </h4>
              <div className="space-y-2">
                {selectedProyek.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50/70 rounded-xl text-xs text-slate-700 border border-slate-100">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* OUTPUT */}
            <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl space-y-1">
              <span className="text-xs font-extrabold text-emerald-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" /> Hasil Karya Akhir (Output):
              </span>
              <p className="text-xs md:text-sm font-bold text-slate-800">
                {selectedProyek.output}
              </p>
            </div>

            {/* ASSESSMENT CRITERIA */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600" /> Kriteria Penilaian Guru:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProyek.assessmentCriteria.map((crit, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{crit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
