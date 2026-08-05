import React from 'react';
import { KELAS5_P1_PROJECTS } from '../../data/kelas5Pembelajaran1Data';
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

interface ProyekMuridView5P1Props {
  grade: number;
  lesson: number;
}

export const ProyekMuridView5_P1: React.FC<ProyekMuridView5P1Props> = ({ grade, lesson }) => {
  const projects = KELAS5_P1_PROJECTS;

  const handleDownloadProyek = () => {
    soundFX.playClick();
    let bodyHtml = `
      <div class="header">
        <h1>LEMBAR PENUGASAN PROYEK MURID PAI & BP KELAS ${grade}</h1>
        <h2>PEMBELAJARAN ${lesson}: Membaca, Menulis, dan Membedakan Huruf Hijaiyah Bersambung Tiga Kata atau Lebih dengan Praktik Membaca Mim Sukun & Surat Al-'Asr</h2>
        <p>Pendekatan PjBL (Project Based Learning) & PBL (Problem Based Learning) • Kurikulum Merdeka BAB 1</p>
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
            <strong>Catatan:</strong> ${proj.teacherNote} (sesuai kebijakan guru)
          </div>
        </div>
      `;
    });

    printOrDownloadDocument(
      `Proyek_Murid_PAI_Kelas_${grade}_P${lesson}_Hijaiyah_MimSukun_AlAsr.pdf`,
      `Penugasan Proyek Murid PAI Kelas ${grade} Bab ${lesson} - Hijaiyah Bersambung, Mim Sukun & Surat Al-'Asr`,
      bodyHtml
    );
  };

  return (
    <div id="proyek-murid-v5-p1" className="space-y-6 max-w-5xl mx-auto">
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
              Kelas {grade} • Pembelajaran {lesson} (BAB 1)
            </h3>
            <p className="text-xs text-emerald-100 font-medium mt-0.5">
              4 Tugas Aktif: 2 Project Based Learning (PjBL) & 2 Problem Based Learning (PBL)
            </p>
          </div>
        </div>

        <button
          id="btn-download-proyek-p1"
          onClick={handleDownloadProyek}
          className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center space-x-2 border border-amber-200 shadow-md transition active:scale-95 cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Proyek</span>
        </button>
      </div>

      {/* LIST PROYEK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div className="p-6 space-y-4">
              {/* Badge & Number */}
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
                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                  Tugas {idx + 1}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 leading-snug">
                  {proj.title}
                </h4>
                <p className="text-xs text-emerald-700 font-medium mt-0.5">
                  {proj.subtitle}
                </p>
              </div>

              {/* Objective */}
              <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-100 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-emerald-900 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tujuan Kegiatan:</span>
                </div>
                <p className="leading-relaxed">{proj.objective}</p>
              </div>

              {/* Steps */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                  Langkah-Langkah Kerja:
                </span>
                <div className="space-y-2">
                  {proj.steps.map((st, stepIdx) => (
                    <div key={stepIdx} className="flex items-start space-x-2 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs text-slate-700">
                <span className="font-bold text-slate-800">Produk Akhir: </span>
                <span>{proj.output}</span>
              </div>
            </div>

            {/* Footer Teacher Note */}
            <div className="bg-slate-100/80 px-6 py-3 border-t border-slate-200 text-[11px] text-slate-500 font-medium italic flex justify-between items-center">
              <span>{proj.teacherNote}</span>
              <span className="font-bold text-emerald-700 not-italic bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                sesuai kebijakan guru
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
