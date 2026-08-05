import React, { useState } from 'react';
import { X, Search, Heart, Sparkles, LayoutGrid, List } from 'lucide-react';
import { ASMAUL_HUSNA_LIST } from '../data/asmaulHusnaData';
import { soundFX } from '../utils/audio';

interface AsmaulHusnaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AsmaulHusnaModal: React.FC<AsmaulHusnaModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  if (!isOpen) return null;

  const filteredList = ASMAUL_HUSNA_LIST.filter(
    (item) =>
      item.latin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.number.toString().includes(searchTerm)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/75 backdrop-blur-xs p-2 sm:p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[94vh] flex flex-col overflow-hidden border border-emerald-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 text-white p-3 sm:p-4 flex items-center justify-between relative shadow-md shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center text-amber-300 shadow-inner shrink-0">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-300/30" />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-bold font-serif text-amber-200 tracking-wide flex items-center gap-2">
                99 Asmaul Husna
                <span className="text-[10px] sm:text-xs bg-amber-400 text-emerald-950 font-sans px-2.5 py-0.5 rounded-full font-bold">
                  Lengkap 1 - 99
                </span>
              </h2>
              <p className="text-[11px] sm:text-xs text-emerald-100">
                Teks Arab Utuh, Nama Latin &amp; Arti Terjemahan
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Layout Toggle Bar */}
        <div className="px-3 py-2 bg-emerald-50/80 border-b border-emerald-100 flex flex-wrap gap-2 items-center justify-between shrink-0">
          <div className="relative w-full sm:w-80">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600" />
            <input
              type="text"
              placeholder="Cari Asmaul Husna (Ar-Rahman, Pengasih, 1)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-emerald-200 rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-emerald-900 placeholder-emerald-400"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-[11px] text-emerald-800 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Menampilkan <strong className="font-bold">{filteredList.length}</strong> / 99</span>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-emerald-200/60 p-0.5 rounded-lg border border-emerald-300/60 text-xs">
              <button
                onClick={() => {
                  soundFX.playClick();
                  setViewMode('grid');
                }}
                className={`flex items-center gap-1 px-2 py-1 rounded-md transition font-medium cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-emerald-900 shadow-xs font-bold'
                    : 'text-emerald-700 hover:text-emerald-900'
                }`}
                title="Tampilan Kartu Grid"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Kartu</span>
              </button>
              <button
                onClick={() => {
                  soundFX.playClick();
                  setViewMode('list');
                }}
                className={`flex items-center gap-1 px-2 py-1 rounded-md transition font-medium cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-white text-emerald-900 shadow-xs font-bold'
                    : 'text-emerald-700 hover:text-emerald-900'
                }`}
                title="Tampilan Daftar Tabel Rapi"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Daftar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 bg-slate-50/60">
          {viewMode === 'grid' ? (
            /* Spacious Grid View: 1 col on mobile, 2 on sm, 3 on md, 4 on lg */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredList.map((item) => (
                <div
                  key={item.number}
                  className="bg-white rounded-xl p-3.5 sm:p-4 border border-emerald-100 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-150 flex flex-col justify-between"
                >
                  {/* Top Header inside card: Number badge & Big Arabic Text with ample line height */}
                  <div className="flex items-start justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center justify-center font-mono shadow-inner shrink-0 mt-0.5">
                      {item.number}
                    </span>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-emerald-950 text-right leading-relaxed tracking-wide min-w-0 break-words py-0.5">
                      {item.arabic}
                    </span>
                  </div>

                  {/* Bottom Text: Latin & Translation - Complete text wrapped without cutting */}
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-emerald-900 leading-normal break-words">
                      {item.latin}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 leading-normal break-words">
                      {item.translation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Table/List View: Ultra clear and row-by-row with no truncation */
            <div className="bg-white rounded-xl border border-emerald-200 overflow-hidden shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-emerald-800 text-amber-200 text-xs font-bold uppercase tracking-wider border-b border-emerald-900">
                    <th className="py-2.5 px-3 w-12 text-center">No</th>
                    <th className="py-2.5 px-3 text-right">Teks Arab</th>
                    <th className="py-2.5 px-3">Nama Latin</th>
                    <th className="py-2.5 px-3">Arti / Terjemahan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-100 text-xs sm:text-sm">
                  {filteredList.map((item) => (
                    <tr
                      key={item.number}
                      className="hover:bg-emerald-50/50 transition-colors"
                    >
                      <td className="py-2.5 px-3 text-center font-bold text-emerald-800 font-mono">
                        {item.number}
                      </td>
                      <td className="py-2.5 px-3 text-right font-serif font-bold text-xl sm:text-2xl text-emerald-950 leading-relaxed min-w-[120px]">
                        {item.arabic}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-900 leading-normal">
                        {item.latin}
                      </td>
                      <td className="py-2.5 px-3 font-semibold text-emerald-700 leading-normal">
                        {item.translation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {filteredList.length === 0 && (
            <div className="py-16 text-center text-slate-500">
              <p className="text-base font-medium text-slate-700">Asmaul Husna tidak ditemukan</p>
              <p className="text-xs text-slate-400 mt-1">Coba gunakan kata kunci pencarian yang berbeda</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-2.5 bg-emerald-900 text-emerald-200 text-[11px] flex items-center justify-between border-t border-emerald-800 shrink-0">
          <span>&copy; PAICODE-MPI PAI SD - 99 Asmaul Husna Lengkap (Teks Arab &amp; Terjemahan)</span>
          <span className="bg-emerald-800/80 px-2 py-0.5 rounded text-amber-300 font-mono">
            Kelas 1 - 6
          </span>
        </div>
      </div>
    </div>
  );
};
