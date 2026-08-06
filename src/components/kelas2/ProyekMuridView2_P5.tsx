import React from 'react';
import { PROYEK_KELAS2_P5 } from '../../data/kelas2Pembelajaran5Data';
import { soundFX } from '../../utils/audio';
import { 
  FolderKanban, 
  Download, 
  Lightbulb, 
  CheckCircle2, 
  Info, 
  Target, 
  Sparkles,
  BookOpen
} from 'lucide-react';

interface ProyekMuridView2_P5Props {
  grade?: number;
  lesson?: number;
}

export const ProyekMuridView2_P5: React.FC<ProyekMuridView2_P5Props> = ({
  grade = 2,
  lesson = 5,
}) => {
  const handleDownloadPDF = () => {
    soundFX.playClick();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Penugasan Proyek Murid PAI Kelas ${grade} Pembelajaran ${lesson}</title>
          <style>
            @page {
              size: A4;
              margin: 15mm;
            }
            body {
              font-family: 'Helvetica Neue', Arial, sans-serif;
              color: #1e293b;
              line-height: 1.6;
              margin: 0;
              padding: 0;
            }
            .header {
              text-align: center;
              border-bottom: 3px double #059669;
              padding-bottom: 12px;
              margin-bottom: 20px;
            }
            .header h1 {
              margin: 0;
              font-size: 18px;
              color: #065f46;
              text-transform: uppercase;
            }
            .header p {
              margin: 4px 0 0 0;
              font-size: 12px;
              color: #64748b;
            }
            .card {
              border: 1px solid #cbd5e1;
              border-radius: 8px;
              padding: 16px;
              margin-bottom: 20px;
              background-color: #ffffff;
              page-break-inside: avoid;
            }
            .badge {
              display: inline-block;
              background-color: #ecfdf5;
              color: #047857;
              font-size: 11px;
              font-weight: bold;
              padding: 4px 8px;
              border-radius: 4px;
              border: 1px solid #a7f3d0;
              margin-bottom: 8px;
            }
            .title {
              font-size: 16px;
              font-weight: bold;
              color: #0f172a;
              margin-bottom: 8px;
            }
            .objective {
              font-size: 12px;
              color: #334155;
              background-color: #f8fafc;
              padding: 8px 12px;
              border-radius: 6px;
              margin-bottom: 12px;
              border-left: 3px solid #10b981;
            }
            ul {
              margin: 8px 0;
              padding-left: 20px;
              font-size: 12px;
            }
            li {
              margin-bottom: 6px;
            }
            .note {
              font-size: 11px;
              color: #047857;
              font-style: italic;
              margin-top: 10px;
              padding-top: 8px;
              border-top: 1px dashed #cbd5e1;
            }
            .footer {
              text-align: center;
              font-size: 11px;
              color: #94a3b8;
              margin-top: 30px;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Penugasan Proyek & Problem-Based Learning</h1>
            <p>PAI & Budi Pekerti SD Kelas ${grade} • Pembelajaran ${lesson}: Kisah Nabi Nuh a.s.</p>
          </div>

          ${PROYEK_KELAS2_P5.map(
            (p, idx) => `
            <div class="card">
              <span class="badge">${p.badge}</span>
              <div class="title">${idx + 1}. ${p.title}</div>
              <div class="objective"><strong>Tujuan Penugasan:</strong> ${p.objective}</div>
              
              <strong style="font-size: 12px; color: #0f172a;">Langkah-Langkah Kegiatan:</strong>
              <ul>
                ${p.scenarioOrSteps.map((s) => `<li>${s}</li>`).join('')}
              </ul>

              <div style="font-size: 12px; font-weight: bold; color: #047857; margin-top: 8px;">
                Produk Akhir: ${p.output}
              </div>

              <div class="note">
                <strong>Catatan Guru:</strong> ${p.kebijakanGuruNote}
              </div>
            </div>
          `
          ).join('')}

          <div class="footer">
            <p>Lembar Kerja Proyek Murid Digital PAI Kelas ${grade} - Pembelajaran ${lesson}</p>
          </div>

          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
  };

  return (
    <div className="space-y-6">
      {/* HEADER BAR */}
      <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
            <FolderKanban className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold px-2.5 py-0.5 bg-amber-100 text-amber-800 rounded-full">
              PjBL & PBL Kelas 2 Pembelajaran 5
            </span>
            <h3 className="text-xl font-black text-slate-800 mt-1">
              Proyek Murid & Pemecahan Masalah
            </h3>
            <p className="text-xs text-slate-500">
              4 Penugasan Berbasis Proyek (2 PjBL) dan Masalah (2 PBL) Berdasarkan Kisah Nabi Nuh a.s.
            </p>
          </div>
        </div>

        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-md active:scale-95 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download Lembar Proyek PDF</span>
        </button>
      </div>

      {/* PROYEK LIST GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROYEK_KELAS2_P5.map((item, idx) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-lg transition overflow-hidden flex flex-col justify-between"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-black px-3 py-1 rounded-full border ${
                  item.type === 'PjBL' 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                    : 'bg-amber-50 text-amber-800 border-amber-200'
                }`}>
                  {item.badge}
                </span>
                <span className="text-xs font-extrabold text-slate-400">
                  Tugas #{idx + 1}
                </span>
              </div>

              <h4 className="text-lg font-black text-slate-800 leading-snug">
                {item.title}
              </h4>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 font-medium space-y-1">
                <div className="font-extrabold text-emerald-700 flex items-center gap-1.5">
                  <Target className="w-4 h-4" /> Tujuan Pembelajaran:
                </div>
                <p>{item.objective}</p>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Instruksi & Langkah Kerja:
                </h5>
                <ul className="space-y-2 text-xs text-slate-600 font-medium pl-1">
                  {item.scenarioOrSteps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-5 bg-emerald-50/70 border-t border-emerald-100 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                <span>Output Produk Akhir:</span>
                <span className="px-2.5 py-0.5 bg-emerald-200/80 text-emerald-900 rounded-lg">
                  {item.output}
                </span>
              </div>
              <div className="text-[11px] italic text-emerald-700 flex items-center gap-1 font-medium pt-1 border-t border-emerald-200/60">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>{item.kebijakanGuruNote}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
