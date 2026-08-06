import React, { useState } from 'react';
import { PROYEK_KELAS6_P4, ProyekItem } from '../../data/kelas6Pembelajaran4Data';
import { soundFX } from '../../utils/audio';
import { 
  FolderGit2, 
  Clock, 
  CheckCircle2, 
  Target, 
  Sparkles, 
  Printer, 
  FileCheck,
  AlertCircle,
  Award
} from 'lucide-react';

interface ProyekMuridView6_P4Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView6_P4: React.FC<ProyekMuridView6_P4Props> = ({ grade, lesson }) => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'PjBL' | 'PBL'>('ALL');
  const [completedSteps, setCompletedSteps] = useState<Record<string, number[]>>({});

  const filteredProyek = PROYEK_KELAS6_P4.filter(p => {
    if (activeTab === 'ALL') return true;
    return p.type === activeTab;
  });

  const toggleStep = (proyekId: string, stepIdx: number) => {
    soundFX.playClick();
    setCompletedSteps(prev => {
      const current = prev[proyekId] || [];
      if (current.includes(stepIdx)) {
        return { ...prev, [proyekId]: current.filter(i => i !== stepIdx) };
      } else {
        return { ...prev, [proyekId]: [...current, stepIdx] };
      }
    });
  };

  const handlePrintPDF = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Penugasan Proyek Murid PAI Kelas ${grade} Bab ${lesson} - Zakat, Infak, & Sedekah</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              padding: 40px;
              color: #0f172a;
              line-height: 1.6;
              background-color: #ffffff;
            }
            .header-banner {
              text-align: center;
              border-bottom: 3px double #0d9488;
              padding-bottom: 15px;
              margin-bottom: 25px;
            }
            .header-banner h1 {
              margin: 0;
              color: #0d9488;
              font-size: 20px;
              font-weight: 800;
            }
            .header-banner p {
              margin: 4px 0 0;
              color: #64748b;
              font-size: 13px;
            }
            .badge-guru {
              display: inline-block;
              background-color: #fef3c7;
              color: #92400e;
              border: 1px solid #fcd34d;
              font-size: 11px;
              font-weight: 700;
              padding: 4px 12px;
              border-radius: 20px;
              margin-bottom: 15px;
            }
            .proyek-card {
              page-break-inside: avoid;
              border: 1px solid #cbd5e1;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
              background-color: #f8fafc;
            }
            .type-badge {
              display: inline-block;
              padding: 3px 10px;
              border-radius: 6px;
              font-size: 11px;
              font-weight: 800;
              text-transform: uppercase;
              margin-bottom: 8px;
            }
            .pjbl { background-color: #0f766e; color: white; }
            .pbl { background-color: #0284c7; color: white; }
            
            .proyek-title {
              font-size: 16px;
              font-weight: 800;
              color: #0f172a;
              margin: 0 0 5px 0;
            }
            .meta-info {
              font-size: 12px;
              color: #64748b;
              margin-bottom: 12px;
              font-weight: 600;
            }
            .scenario-box {
              background-color: #f1f5f9;
              border-left: 4px solid #0d9488;
              padding: 10px 14px;
              font-size: 12px;
              margin-bottom: 12px;
              border-radius: 4px;
            }
            .section-title {
              font-size: 13px;
              font-weight: 700;
              color: #0f766e;
              margin-top: 10px;
              margin-bottom: 6px;
            }
            .steps-list {
              margin: 0;
              padding-left: 20px;
              font-size: 12px;
            }
            .steps-list li { margin-bottom: 4px; }
            .rubric-table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 8px;
              font-size: 11px;
            }
            .rubric-table th, .rubric-table td {
              border: 1px solid #cbd5e1;
              padding: 6px 10px;
              text-align: left;
            }
            .rubric-table th { background-color: #e2e8f0; color: #334155; }
            .footer {
              text-align: center;
              margin-top: 30px;
              font-size: 11px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
            }
            @media print {
              body { padding: 0; }
              .proyek-card { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header-banner">
            <h1>PENUGASAN PROYEK MURID PAI KELAS ${grade} BAB ${lesson}</h1>
            <p>2 Penugasan Project Based Learning (PjBL) & 2 Penugasan Problem Based Learning (PBL)</p>
          </div>

          <div style="text-align: center;">
            <span class="badge-guru">⚠️ Catatan: Penugasan proyek ini dilaksanakan sesuai kebijakan guru.</span>
          </div>

          ${PROYEK_KELAS6_P4.map(p => `
            <div class="proyek-card">
              <span class="type-badge ${p.type.toLowerCase()}">${p.type} • ${p.duration}</span>
              <h2 class="proyek-title">${p.title}</h2>
              <div class="meta-info">${p.subtitle}</div>

              <div class="scenario-box">
                <strong>Skenario / Permasalahan:</strong><br/>
                ${p.scenario}
              </div>

              <div class="section-title">Tujuan Pembelajaran:</div>
              <p style="font-size: 12px; margin-top: 0;">${p.objective}</p>

              <div class="section-title">Langkah-Langkah Kerja:</div>
              <ol class="steps-list">
                ${p.steps.map(s => `<li>${s}</li>`).join('')}
              </ol>

              <div class="section-title">Hasil Akhir (Output):</div>
              <p style="font-size: 12px; margin-top: 0; font-weight: 600; color: #0d9488;">${p.output}</p>

              <div class="section-title">Rubrik Penilaian (${p.note}):</div>
              <table class="rubric-table">
                <thead>
                  <tr>
                    <th>Kriteria Penilaian</th>
                    <th style="width: 20%;">Bobot Nilai</th>
                  </tr>
                </thead>
                <tbody>
                  ${p.rubric.map(r => `
                    <tr>
                      <td>${r.criteria}</td>
                      <td><strong>${r.weight}</strong></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `).join('')}

          <div class="footer">
            Lembar Kerja Proyek PAI SD Kelas 6 - Bab 4 Zakat, Infak, & Sedekah • Sesuai Kebijakan Guru
          </div>
          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-900 font-extrabold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-slate-900" />
              <span>Sesuai Kebijakan Guru</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Proyek & Studi Kasus Pembelajaran Murid
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 mt-1">
              2 Penugasan Project Based Learning (PjBL) & 2 Penugasan Problem Based Learning (PBL)
            </p>
          </div>

          <button
            onClick={handlePrintPDF}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 shrink-0 self-start md:self-auto"
          >
            <Printer className="w-4 h-4" />
            <span>Download PDF Proyek</span>
          </button>
        </div>
      </div>

      {/* Policy Disclaimer Banner */}
      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 flex items-center gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
        <p className="text-xs sm:text-sm font-semibold text-amber-900 dark:text-amber-200">
          Semua penugasan proyek dan studi kasus dapat disesuaikan dengan situasi, sarana sekolah, serta <span className="underline font-bold">kebijakan guru</span> masing-masing.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => { soundFX.playClick(); setActiveTab('ALL'); }}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'ALL'
              ? 'bg-teal-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          Semua Penugasan (4)
        </button>
        <button
          onClick={() => { soundFX.playClick(); setActiveTab('PjBL'); }}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'PjBL'
              ? 'bg-teal-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          Project Based Learning (2 PjBL)
        </button>
        <button
          onClick={() => { soundFX.playClick(); setActiveTab('PBL'); }}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'PBL'
              ? 'bg-teal-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          Problem Based Learning (2 PBL)
        </button>
      </div>

      {/* Proyek List */}
      <div className="space-y-6">
        {filteredProyek.map((proyek) => {
          const currentCompleted = completedSteps[proyek.id] || [];
          const progressPct = Math.round((currentCompleted.length / proyek.steps.length) * 100);

          return (
            <div 
              key={proyek.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8 space-y-5"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full font-black text-xs uppercase tracking-wider ${
                    proyek.type === 'PjBL' 
                      ? 'bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200' 
                      : 'bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-200'
                  }`}>
                    {proyek.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>{proyek.duration}</span>
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-extrabold text-xs">
                  {proyek.note}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100">
                  {proyek.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {proyek.subtitle}
                </p>
              </div>

              {/* Objective & Scenario */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-300">
                    <Target className="w-4 h-4" />
                    <span>Tujuan Penugasan</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {proyek.objective}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/60 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-800 dark:text-teal-300">
                    <FolderGit2 className="w-4 h-4 text-teal-600" />
                    <span>Skenario / Kasus Nyata</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {proyek.scenario}
                  </p>
                </div>
              </div>

              {/* Steps Progress Checklist */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-teal-600" />
                    <span>Langkah-Langkah Kerja Murid</span>
                  </span>
                  <span>Kemajuan: {progressPct}% ({currentCompleted.length}/{proyek.steps.length})</span>
                </div>

                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-teal-600 transition-all duration-300"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>

                <div className="space-y-2">
                  {proyek.steps.map((stepText, sIdx) => {
                    const isChecked = currentCompleted.includes(sIdx);
                    return (
                      <button
                        key={sIdx}
                        onClick={() => toggleStep(proyek.id, sIdx)}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 ${
                          isChecked
                            ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-300 dark:border-teal-700 text-teal-900 dark:text-teal-200'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked ? 'bg-teal-600 text-white' : 'border border-slate-300 dark:border-slate-600'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className={`text-xs font-medium leading-relaxed ${isChecked ? 'line-through opacity-80' : ''}`}>
                          {stepText}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Output & Rubric */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Hasil Akhir (Output):</div>
                  <div className="text-xs font-bold text-teal-700 dark:text-teal-300 mt-0.5">{proyek.output}</div>
                </div>

                {/* Rubric Preview */}
                <div className="w-full md:w-auto flex flex-wrap items-center gap-2">
                  {proyek.rubric.map((r, rIdx) => (
                    <span key={rIdx} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {r.criteria}: <strong className="text-teal-600">{r.weight}</strong>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
