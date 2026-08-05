import React, { useState } from 'react';
import { GradeLevel, IFPSettings } from '../types';
import { GRADES_INFO } from '../data/paiData';
import { soundFX } from '../utils/audio';
import { MateriSlideView } from './kelas3/MateriSlideView';
import { ProyekMuridView } from './kelas3/ProyekMuridView';
import { GamifikasiView } from './kelas3/GamifikasiView';
import { EvaluasiView } from './kelas3/EvaluasiView';
import { 
  ArrowLeft, 
  Home,
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  FolderKanban, 
  Gamepad2, 
  ClipboardCheck,
  Layers
} from 'lucide-react';

interface ClassDetailViewProps {
  grade: GradeLevel;
  settings: IFPSettings;
  onBackToDashboard: () => void;
  onOpenAIAssistant: () => void;
}

type ModuleType = 'materi' | 'proyek' | 'gamifikasi' | 'evaluasi';

export const ClassDetailView: React.FC<ClassDetailViewProps> = ({
  grade,
  settings,
  onBackToDashboard,
  onOpenAIAssistant,
}) => {
  const gradeInfo = GRADES_INFO[grade];
  
  // Navigation State inside class:
  // Level 1: selectedLesson === null (Shows ONLY 5 PEMBELAJARAN buttons)
  // Level 2: selectedLesson !== null && selectedModule === null (Shows ONLY 4 feature buttons)
  // Level 3: selectedLesson !== null && selectedModule !== null (Shows content of the selected feature)
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [selectedModule, setSelectedModule] = useState<ModuleType | null>(null);

  const lessons = [
    { id: 1, label: 'PEMBELAJARAN 1' },
    { id: 2, label: 'PEMBELAJARAN 2' },
    { id: 3, label: 'PEMBELAJARAN 3' },
    { id: 4, label: 'PEMBELAJARAN 4' },
    { id: 5, label: 'PEMBELAJARAN 5' },
  ];

  const modules = [
    {
      id: 'materi' as ModuleType,
      label: 'MATERI',
      desc: 'Materi Pembelajaran Teks & Visual',
      icon: BookOpen,
      color: 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500 shadow-emerald-600/25',
      lightBg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200',
    },
    {
      id: 'proyek' as ModuleType,
      label: 'PROYEK MURID',
      desc: 'Tugas & Proyek Kreatif Siswa',
      icon: FolderKanban,
      color: 'bg-amber-500 hover:bg-amber-600 text-slate-950 border-amber-400 shadow-amber-500/25',
      lightBg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200',
    },
    {
      id: 'gamifikasi' as ModuleType,
      label: 'GAMIFIKASI',
      desc: 'Permainan Edukasi Interaktif',
      icon: Gamepad2,
      color: 'bg-purple-600 hover:bg-purple-700 text-white border-purple-500 shadow-purple-600/25',
      lightBg: 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-200',
    },
    {
      id: 'evaluasi' as ModuleType,
      label: 'EVALUASI',
      desc: 'Soal Latihan & Uji Pemahaman',
      icon: ClipboardCheck,
      color: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-500 shadow-blue-600/25',
      lightBg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200',
    },
  ];

  const activeModuleObj = modules.find((m) => m.id === selectedModule);

  // Helper to render Level 3 content
  const renderModuleContent = () => {
    if (grade === 3 && (selectedLesson === 1 || selectedLesson === 2 || selectedLesson === 3)) {
      if (selectedModule === 'materi') {
        return <MateriSlideView grade={grade} lesson={selectedLesson} />;
      }
      if (selectedModule === 'proyek') {
        return <ProyekMuridView grade={grade} lesson={selectedLesson} />;
      }
      if (selectedModule === 'gamifikasi') {
        return <GamifikasiView grade={grade} lesson={selectedLesson} />;
      }
      if (selectedModule === 'evaluasi') {
        return <EvaluasiView grade={grade} lesson={selectedLesson} />;
      }
    }

    // Default placeholder for other lessons / grades
    if (!activeModuleObj) return null;
    const ModuleIcon = activeModuleObj.icon;

    return (
      <div className={`rounded-2xl p-6 sm:p-10 border-2 shadow-md space-y-6 text-center max-w-3xl mx-auto transition-all duration-200 ${activeModuleObj.lightBg}`}>
        <div className="w-16 h-16 mx-auto rounded-2xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center border border-current">
          <ModuleIcon className="w-8 h-8 text-current" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-extrabold bg-white/80 dark:bg-slate-900/80 px-3 py-1 rounded-full uppercase border border-current/20 shadow-xs">
            KELAS {grade} • PEMBELAJARAN {selectedLesson}
          </span>
          <h3 className="text-xl sm:text-3xl font-black pt-2 text-slate-900 dark:text-white">
            {activeModuleObj.label}
          </h3>
        </div>

        <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-current/20 text-sm sm:text-base font-semibold leading-relaxed shadow-2xs text-slate-800 dark:text-slate-200">
          Isian <strong className="uppercase font-extrabold">{activeModuleObj.label}</strong> untuk{' '}
          <strong>Kelas {grade} - PEMBELAJARAN {selectedLesson}</strong> akan kita lanjutkan pada tahap selanjutnya.
        </div>

        <div className="flex items-center justify-center gap-2 text-xs opacity-80">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Halaman {activeModuleObj.label} sudah siap untuk pengisian konten.</span>
        </div>
      </div>
    );
  };

  // LEVEL 3: FEATURE CONTENT PAGE (MATERI, PROYEK MURID, GAMIFIKASI, EVALUASI)
  if (selectedLesson !== null && selectedModule !== null && activeModuleObj) {
    return (
      <div className="space-y-6 pb-12 animate-in fade-in duration-200">
        {/* Header Level 3 with Full Navigation Buttons strictly in Header */}
        <div className={`rounded-2xl p-4 sm:p-6 text-white shadow-lg bg-gradient-to-r ${gradeInfo.colorTheme.bgGradient} flex flex-col md:flex-row md:items-center justify-between gap-4 border border-amber-300/40`}>
          <div className="space-y-3">
            {/* Header Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onBackToDashboard();
                }}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs sm:text-sm font-bold border border-amber-200 transition active:scale-95 cursor-pointer shadow-xs"
              >
                <Home className="w-4 h-4" />
                <span>Dashboard Utama (Beranda)</span>
              </button>

              <button
                onClick={() => {
                  soundFX.playClick();
                  setSelectedLesson(null);
                  setSelectedModule(null);
                }}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-black/25 hover:bg-black/40 text-white text-xs sm:text-sm font-bold border border-white/20 transition active:scale-95 cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Pembelajaran Kelas {grade}</span>
              </button>

              <button
                onClick={() => {
                  soundFX.playClick();
                  setSelectedModule(null);
                }}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-black/25 hover:bg-black/40 text-white text-xs sm:text-sm font-bold border border-white/20 transition active:scale-95 cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Menu Fitur Pembelajaran {selectedLesson}</span>
              </button>
            </div>

            <div className="flex items-center space-x-3 pt-1">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white text-emerald-950 font-black text-lg sm:text-2xl flex items-center justify-center shadow-md shrink-0">
                {grade}
              </span>
              <div>
                <span className="text-[10px] sm:text-xs font-bold bg-amber-400 text-emerald-950 px-2 py-0.5 rounded-full uppercase">
                  KELAS {grade} • PEMBELAJARAN {selectedLesson}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mt-0.5">
                  {activeModuleObj.label}
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              Multimedia Pembelajaran Interaktif PAI-SD
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenAIAssistant();
              }}
              className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm flex items-center space-x-1.5 border border-white/30 shadow-md active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Tanya Guru AI</span>
            </button>
          </div>
        </div>

        {/* Dynamic Level 3 Content Area */}
        {renderModuleContent()}
      </div>
    );
  }

  // LEVEL 2: LESSON MENU PAGE (ONLY 4 FEATURE BUTTONS)
  if (selectedLesson !== null && selectedModule === null) {
    return (
      <div className="space-y-6 pb-12 animate-in fade-in duration-200">
        {/* Header Level 2 */}
        <div className={`rounded-2xl p-4 sm:p-6 text-white shadow-lg bg-gradient-to-r ${gradeInfo.colorTheme.bgGradient} flex flex-col md:flex-row md:items-center justify-between gap-4 border border-amber-300/40`}>
          <div className="space-y-3">
            {/* Header Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onBackToDashboard();
                }}
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs sm:text-sm font-bold border border-amber-200 transition active:scale-95 cursor-pointer shadow-xs"
              >
                <Home className="w-4 h-4" />
                <span>Dashboard Utama (Beranda)</span>
              </button>

              <button
                onClick={() => {
                  soundFX.playClick();
                  setSelectedLesson(null);
                }}
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-black/25 hover:bg-black/40 text-white text-xs sm:text-sm font-bold border border-white/20 transition active:scale-95 cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Pembelajaran Kelas {grade}</span>
              </button>
            </div>

            <div className="flex items-center space-x-3 pt-1">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white text-emerald-950 font-black text-lg sm:text-2xl flex items-center justify-center shadow-md shrink-0">
                {grade}
              </span>
              <div>
                <span className="text-[10px] sm:text-xs font-bold bg-amber-400 text-emerald-950 px-2 py-0.5 rounded-full uppercase">
                  KELAS {grade}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mt-0.5">
                  PEMBELAJARAN {selectedLesson}
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              Pilih menu fitur pembelajaran di bawah ini
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenAIAssistant();
              }}
              className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm flex items-center space-x-1.5 border border-white/30 shadow-md active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Tanya Guru AI</span>
            </button>
          </div>
        </div>

        {/* 4 Large Feature Buttons ONLY */}
        <div className="space-y-4">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-800 dark:text-slate-100 flex items-center justify-center sm:justify-start gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              <span>Menu Fitur Pembelajaran {selectedLesson}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 text-center sm:text-left">
              Silakan pilih salah satu menu di bawah ini untuk membuka halaman fitur
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
            {modules.map((mod) => {
              const IconComponent = mod.icon;
              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedModule(mod.id); // Navigate to Level 3
                  }}
                  className={`p-6 sm:p-8 rounded-2xl font-black text-lg sm:text-xl tracking-wider transition-all duration-200 border-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center gap-3 cursor-pointer ${mod.color} ${
                    settings.isTouchMode ? 'py-10 text-2xl' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shadow-inner">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div className="text-center">
                    <span className="block font-black">{mod.label}</span>
                    <span className="block text-xs font-normal opacity-90 mt-1">
                      {mod.desc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // LEVEL 1: LESSONS LIST (ONLY 5 PEMBELAJARAN BUTTONS)
  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header Level 1 */}
      <div className={`rounded-2xl p-4 sm:p-6 text-white shadow-lg bg-gradient-to-r ${gradeInfo.colorTheme.bgGradient} flex flex-col md:flex-row md:items-center justify-between gap-4 border border-amber-300/40`}>
        <div className="space-y-3">
          {/* Header Navigation Button */}
          <button
            onClick={() => {
              soundFX.playClick();
              onBackToDashboard(); // Back to main dashboard (beranda)
            }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs sm:text-sm font-bold border border-amber-200 transition active:scale-95 cursor-pointer shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Dashboard Utama (Beranda)</span>
          </button>

          <div className="flex items-center space-x-3 pt-1">
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white text-emerald-950 font-black text-lg sm:text-2xl flex items-center justify-center shadow-md shrink-0">
              {grade}
            </span>
            <div>
              <span className="text-[10px] sm:text-xs font-bold bg-amber-400 text-emerald-950 px-2 py-0.5 rounded-full uppercase">
                {gradeInfo.phase}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mt-0.5">
                KELAS {grade}
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100 font-medium">
            Multimedia Pembelajaran Interaktif PAI-SD
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenAIAssistant();
            }}
            className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm flex items-center space-x-1.5 border border-white/30 shadow-md active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Tanya Guru AI</span>
          </button>
        </div>
      </div>

      {/* 5 Lesson Buttons ONLY */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span>Daftar Pembelajaran Kelas {grade}</span>
          </h3>
          <span className="text-xs text-slate-500 font-medium">5 Pembelajaran</span>
        </div>

        {/* 5 Prominent Lesson Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => {
                soundFX.playClick();
                setSelectedLesson(lesson.id); // Navigate to Level 2
                setSelectedModule(null);
              }}
              className={`py-8 px-4 rounded-2xl font-black text-base sm:text-lg md:text-xl tracking-wide transition-all duration-200 border-2 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center gap-2 cursor-pointer bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-emerald-300 dark:border-slate-700 hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-slate-800/80 ${
                settings.isTouchMode ? 'py-12 text-2xl' : ''
              }`}
            >
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-300 uppercase">
                Bab {lesson.id}
              </span>
              <span>{lesson.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
