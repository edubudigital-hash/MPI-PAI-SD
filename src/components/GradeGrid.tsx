import React from 'react';
import { GradeLevel, IFPSettings } from '../types';
import { soundFX } from '../utils/audio';

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
    soundFX.playClick();
    onSelectGrade(grade);
  };

  return (
    <div className="space-y-4 pb-8">
      {/* Compact Mini Banner */}
      <div className="rounded-xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white px-3 py-2.5 sm:px-4 sm:py-3 shadow-md border border-emerald-700 text-center">
        <h2 className="text-sm sm:text-base md:text-lg font-bold text-amber-300 tracking-tight leading-tight">
          Multimedia Pembelajaran Interaktif PAI-SD
        </h2>
        <p className="text-[11px] sm:text-xs text-emerald-200 mt-0.5 font-medium">
          Khusus untuk Guru, tidak diperkenankan untuk share kepada murid
        </p>
      </div>

      {/* 6 Color-Coded Class Buttons (Name Only) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
        {gradesList.map(({ grade, colorClass, shadowClass }) => (
          <button
            key={grade}
            onClick={() => handleGradeClick(grade)}
            className={`w-full py-6 sm:py-8 md:py-10 px-4 rounded-2xl font-black text-xl sm:text-2xl md:text-3xl tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 border border-white/20 flex items-center justify-center cursor-pointer ${colorClass} ${shadowClass} ${
              settings.isTouchMode ? 'py-10 sm:py-12 text-3xl' : ''
            }`}
          >
            <span>Kelas {grade}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
