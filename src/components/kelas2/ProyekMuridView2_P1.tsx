import React, { useState } from 'react';
import { PROYEK_KELAS2_P1, ProyekData } from '../../data/kelas2Pembelajaran1Data';
import { soundFX } from '../../utils/audio';
import { 
  Briefcase, 
  Layers, 
  CheckCircle2, 
  Printer, 
  Sparkles, 
  FileText, 
  Award, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface ProyekMuridView2_P1Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView2_P1: React.FC<ProyekMuridView2_P1Props> = ({ grade, lesson }) => {
  const [selectedType, setSelectedType] = useState<'ALL' | 'PjBL' | 'PBL'>('ALL');
  const [activeProject, setActiveProject] = useState<ProyekData>(PROYEK_KELAS2_P1[0]);

  const filteredProjects = PROYEK_KELAS2_P1.filter(p => 
    selectedType === 'ALL' || p.type === selectedType
  );

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
              padding: 30px;
              color: #0f172a;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #d97706;
              padding-bottom: 15px;
              margin-bottom: 25px;
            }
            .header h1 {
              margin: 0;
              color: #d97706;
              font-size: 22px;
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
            .badge-type {
              display: inline-block;
              background-color: #d97706;
              color: #ffffff;
              font-weight: 700;
              font-size: 11px;
              padding: 4px 12px;
              border-radius: 20px;
              margin-bottom: 10px;
              text-transform: uppercase;
            }
            .policy-note {
              float: right;
              background-color: #fef3c7;
              color: #92400e;
              font-size: 11px;
              font-weight: 700;
              padding: 4px 10px;
              border-radius: 6px;
              border: 1px solid #fde68a;
            }
            .title {
              font-size: 16px;
              font-weight: 800;
              color: #1e293b;
              margin-bottom: 8px;
            }
            .desc {
              font-size: 13px;
              color: #334155;
              margin-bottom: 12px;
            }
            .section-title {
              font-size: 12px;
              font-weight: 800;
              color: #b45309;
              margin-top: 10px;
              margin-bottom: 6px;
              text-transform: uppercase;
            }
            ol, ul {
              margin: 0;
              padding-left: 20px;
              font-size: 12px;
            }
            li { margin-bottom: 4px; }
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
            <h1>PENUGASAN PROYEK MURID PAI SD KELAS ${grade}</h1>
            <p>BAB ${lesson}: Project Based Learning (PjBL) & Problem Based Learning (PBL)</p>
          </div>

          ${PROYEK_KELAS2_P1.map((p, idx) => `
            <div class="project-card">
              <span class="policy-note">${p.policyNote}</span>
              <span class="badge-type">${p.type} • ${p.category}</span>
              <div class="title">${idx + 1}. ${p.title}</div>
              <div class="desc">${p.description}</div>

              <div class="section-title">Langkah-Langkah Kegiatan:</div>
              <ol>
                ${p.steps.map(s => `<li>${s}</li>`).join('')}
              </ol>

              <div class="section-title">Hasil Akhir (Output):</div>
              <p style="font-size:12px; font-weight:bold; color:#047857; margin:0;">${p.output}</p>

              <div class="section-title">Kriteria Penilaian:</div>
              <ul>
                ${p.assessmentCriteria.map(c => `<li>${c}</li>`).join('')}
              </ul>
            </div>
          `).join('')}

          <div class="footer">
            Lembar Kerja Penugasan Proyek Murid Kelas 2 SD • Dicetak Otomatis
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 font-bold text-xs uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5 text-yellow-300" />
              <span>Proyek Murid • Kelas {grade} Bab {lesson}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Tugas PjBL (Project) & PBL (Problem Solving)
            </h1>
            <p className="text-xs sm:text-sm text-amber-100 mt-1">
              2 Penugasan berbasis Project Based Learning & 2 Penugasan berbasis Problem Based Learning sesuai materi Al-Qur'an & Hijaiyah.
            </p>
          </div>

          <button
            onClick={handlePrintProyek}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>Download PDF Proyek</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => {
            soundFX.playClick();
            setSelectedType('ALL');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedType === 'ALL'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
          }`}
        >
          Semua Proyek (4)
        </button>
        <button
          onClick={() => {
            soundFX.playClick();
            setSelectedType('PjBL');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedType === 'PjBL'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
          }`}
        >
          Project Based Learning (2 PjBL)
        </button>
        <button
          onClick={() => {
            soundFX.playClick();
            setSelectedType('PBL');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedType === 'PBL'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
          }`}
        >
          Problem Based Learning (2 PBL)
        </button>
      </div>

      {/* Layout Grid: Left Task List, Right Task Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Task Cards List */}
        <div className="lg:col-span-5 space-y-3">
          {filteredProjects.map((proj) => {
            const isSelected = activeProject.id === proj.id;
            return (
              <div
                key={proj.id}
                onClick={() => {
                  soundFX.playClick();
                  setActiveProject(proj);
                }}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 shadow-md ring-2 ring-amber-400'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-amber-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                    proj.type === 'PjBL'
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-orange-100 text-orange-800 border border-orange-300'
                  }`}>
                    {proj.type} • {proj.category}
                  </span>

                  {/* Mandatory Text Policy Note */}
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 dark:bg-amber-950/80 px-2 py-0.5 rounded-md border border-amber-300">
                    {proj.policyNote}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 line-clamp-1">
                  {proj.title}
                </h3>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                  {proj.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed View Card */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-extrabold text-xs uppercase tracking-wider">
                {activeProject.type} ({activeProject.category})
              </span>
              <h2 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">
                {activeProject.title}
              </h2>
            </div>

            {/* Mandatory Tag Banner */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>{activeProject.policyNote}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {activeProject.description}
          </p>

          {/* Step By Step Instructions */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Langkah-Langkah Pelaksanaan Proyek:</span>
            </h4>
            <div className="space-y-2">
              {activeProject.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200">
                  <span className="w-5 h-5 rounded-full bg-amber-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="mt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Output */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-1">
            <span className="text-xs font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Hasil Akhir (Output Proyek):</span>
            </span>
            <p className="text-xs font-extrabold text-amber-950 dark:text-amber-200">
              {activeProject.output}
            </p>
          </div>

          {/* Assessment Criteria */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Kriteria Penilaian Guru:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeProject.assessmentCriteria.map((crit, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{crit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
