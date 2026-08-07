import React from 'react';
import { GradeLevel, IFPSettings } from '../types';
import { soundFX } from '../utils/audio';
import { ExternalLink, Sparkles, BookOpenCheck } from 'lucide-react';

interface GradeGridProps {
  settings: IFPSettings;
  onSelectGrade: (grade: GradeLevel) => void;
  onOpenGuide: () => void;
}

export const GradeGrid: React.FC<GradeGridProps> = ({
  settings,
  onSelectGrade,
}) => {
  const gradesList: { grade: GradeLevel; colorClass: string; shadowClass: string }[] = [
    {
      grade: 1,
      colorClass: 'bg-gradient-to-br from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white',
      shadowClass: 'shadow-red-500/25',
    },
    {
      grade: 2,
      colorClass: 'bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white',
      shadowClass: 'shadow-orange-500/25',
    },
    {
      grade: 3,
      colorClass: 'bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white',
      shadowClass: 'shadow-emerald-500/25',
    },
    {
      grade: 4,
      colorClass: 'bg-gradient-to-br from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white',
      shadowClass: 'shadow-blue-500/25',
    },
    {
      grade: 5,
      colorClass: 'bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white',
      shadowClass: 'shadow-indigo-500/25',
    },
    {
      grade: 6,
      colorClass: 'bg-gradient-to-br from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white',
      shadowClass: 'shadow-fuchsia-500/25',
    },
  ];

  const handleGradeClick = (grade: GradeLevel) => {
    if (settings.soundEnabled) soundFX.playClick();
    onSelectGrade(grade);
  };

  return (
    <div className="space-y-4 pb-8">
      {/* Compact Mini Banner */}
      <div className="rounded-xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white px-3 py-2 sm:px-4 sm:py-2.5 shadow-md border border-emerald-700 text-center">
        <h2 className="text-sm sm:text-base md:text-lg font-bold text-amber-300 tracking-tight leading-tight">
          Multimedia Pembelajaran Interaktif PAI-SD
        </h2>
        <p className="text-[11px] sm:text-xs text-emerald-200 mt-0.5 font-medium">
          Khusus untuk Guru, tidak diperkenankan untuk share kepada murid
        </p>
      </div>

      {/* 6 Color-Coded Class Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 pt-1">
        {gradesList.map(({ grade, colorClass, shadowClass }) => (
          <button
            key={grade}
            onClick={() => handleGradeClick(grade)}
            className={`w-full py-5 sm:py-7 md:py-8 px-3 rounded-2xl font-black text-lg sm:text-xl md:text-2xl tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 border border-white/20 flex items-center justify-center cursor-pointer ${colorClass} ${shadowClass} ${
              settings.isTouchMode ? 'py-8 sm:py-10 text-2xl' : ''
            }`}
          >
            <span>Kelas {grade}</span>
          </button>
        ))}
      </div>

      {/* Garis Pembatas (Divider Line) */}
      <div className="relative my-4 sm:my-6 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-dashed border-emerald-300 dark:border-emerald-800/80" />
        </div>
        <div className="relative bg-amber-50 dark:bg-slate-900 px-3.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-700 shadow-2xs text-[11px] font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
          <BookOpenCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Perangkat & Lembar Kerja Guru</span>
        </div>
      </div>

      {/* Action Button: Generate Perangkat Ajar Lengkap */}
      <div className="grid grid-cols-1 gap-3">
        <a
          href="https://sigemar-sigapai.ai.studio"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (settings.soundEnabled) soundFX.playClick();
          }}
          className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-98 transition-all duration-200 border border-emerald-500/40 cursor-pointer overflow-hidden"
        >
          <div className="flex items-center gap-3 relative z-10 min-w-0">
            <div className="p-2 bg-amber-400/20 text-amber-300 rounded-lg border border-amber-300/30 shrink-0 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-extrabold text-amber-200 group-hover:text-amber-100 transition-colors truncate">
                Generate Perangkat Ajar Lengkap
              </h3>
              <p className="text-[11px] text-emerald-100/90 truncate font-medium">
                Modul Ajar, RPP, Prota, Promes via AI SiGEMAR
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-400 text-emerald-950 px-2.5 py-1 rounded-lg shrink-0 ml-2 shadow-2xs">
            Buka Web <ExternalLink className="w-3 h-3" />
          </span>
        </a>
      </div>
    </div>
  );
};
