// Helper to trigger printable formatted documents for Materi, Proyek, and Evaluasi

export const printOrDownloadDocument = (title: string, subtitle: string, htmlContent: string) => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Pop-up terblokir! Izinkan pop-up browser untuk mengunduh/mencetak dokumen.');
    return;
  }

  const doc = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Amiri:wght@400;700&display=swap');
        
        @page {
          size: A4;
          margin: 20mm;
        }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #1e293b;
          line-height: 1.6;
          margin: 0;
          padding: 20px;
          background-color: #ffffff;
        }

        .header {
          text-align: center;
          border-bottom: 3px double #059669;
          padding-bottom: 12px;
          margin-bottom: 24px;
        }

        .header h1 {
          font-size: 20pt;
          font-weight: 800;
          color: #065f46;
          margin: 0 0 6px 0;
          text-transform: uppercase;
        }

        .header h2 {
          font-size: 13pt;
          font-weight: 700;
          color: #d97706;
          margin: 0 0 4px 0;
        }

        .header p {
          font-size: 10pt;
          color: #64748b;
          margin: 0;
        }

        .arabic {
          font-family: 'Amiri', serif;
          font-size: 20pt;
          line-height: 2.2;
          direction: rtl;
          color: #047857;
        }

        .section-title {
          font-size: 13pt;
          font-weight: 800;
          background-color: #ecfdf5;
          color: #065f46;
          padding: 8px 12px;
          border-left: 5px solid #059669;
          margin-top: 20px;
          margin-bottom: 12px;
        }

        .card {
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 12px 16px;
          margin-bottom: 14px;
          background-color: #f8fafc;
          page-break-inside: avoid;
        }

        .badge {
          display: inline-block;
          font-size: 8pt;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          background-color: #fef3c7;
          color: #92400e;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .policy-tag {
          font-size: 9pt;
          font-style: italic;
          color: #047857;
          background-color: #d1fae5;
          padding: 4px 10px;
          border-radius: 6px;
          display: inline-block;
          margin-top: 8px;
          font-weight: 600;
        }

        ol, ul {
          margin-top: 6px;
          margin-bottom: 6px;
          padding-left: 24px;
        }

        li {
          margin-bottom: 6px;
        }

        .footer {
          margin-top: 40px;
          padding-top: 12px;
          border-top: 1px solid #e2e8f0;
          text-align: center;
          font-size: 9pt;
          color: #94a3b8;
        }

        @media print {
          body {
            padding: 0;
          }
          .no-print {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="no-print" style="text-align: right; margin-bottom: 16px;">
        <button onclick="window.print()" style="background-color: #059669; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer;">
          🖨️ Cetak / Simpan PDF
        </button>
      </div>

      <div class="header">
        <h1>${title}</h1>
        <h2>${subtitle}</h2>
        <p>Multimedia Pembelajaran Interaktif PAI & BP - Sekolah Dasar</p>
      </div>

      <div class="content">
        ${htmlContent}
      </div>

      <div class="footer">
        <p>Dokumen ini diunduh secara resmi dari Aplikasi Interactive IFP PAI-SD | Berbasis Kurikulum Merdeka</p>
      </div>

      <script>
        // Auto print prompt after render
        window.onload = function() {
          setTimeout(() => {
            window.print();
          }, 400);
        };
      </script>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(doc);
  printWindow.document.close();
};
