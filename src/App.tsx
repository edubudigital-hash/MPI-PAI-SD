import React, { useState } from 'react';
import { GradeLevel, IFPSettings } from './types';
import { Header } from './components/Header';
import { GradeGrid } from './components/GradeGrid';
import { ClassDetailView } from './components/ClassDetailView';
import { IFPControls } from './components/IFPControls';
import { AIAssistantModal } from './components/AIAssistantModal';
import { TeacherGuideModal } from './components/TeacherGuideModal';
import { AsmaulHusnaModal } from './components/AsmaulHusnaModal';
import { soundFX } from './utils/audio';

export default function App() {
  const [settings, setSettings] = useState<IFPSettings>({
    fontSize: 'normal',
    isHighContrast: false,
    isTouchMode: false,
    soundEnabled: true,
    activeViewMode: 'dashboard',
    selectedGrade: null,
  });

  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [showAsmaulHusna, setShowAsmaulHusna] = useState(false);

  const handleUpdateSettings = (newSettings: Partial<IFPSettings>) => {
    if (newSettings.soundEnabled !== undefined) {
      soundFX.soundEnabled = newSettings.soundEnabled;
    }
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const handleSelectGrade = (grade: GradeLevel) => {
    setSettings((prev) => ({
      ...prev,
      selectedGrade: grade,
      activeViewMode: 'class-detail',
    }));
  };

  const handleBackToDashboard = () => {
    setSettings((prev) => ({
      ...prev,
      selectedGrade: null,
      activeViewMode: 'dashboard',
    }));
  };

  // Font size multiplier classes
  const fontClass =
    settings.fontSize === 'large'
      ? 'text-lg'
      : settings.fontSize === 'xlarge'
      ? 'text-xl'
      : 'text-base';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-amber-300 selection:text-emerald-950 ${
        settings.isHighContrast
          ? 'bg-slate-950 text-white'
          : 'bg-gradient-to-b from-emerald-50/50 via-slate-50 to-amber-50/30 text-slate-900 dark:bg-slate-950 dark:text-slate-100'
      } ${fontClass}`}
    >
      {/* Universal Sticky Header */}
      <Header
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onOpenAIAssistant={() => setShowAIAssistant(true)}
        onOpenGuide={() => setShowGuide(true)}
        onOpenAsmaulHusna={() => setShowAsmaulHusna(true)}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {settings.selectedGrade === null ? (
          /* Dashboard View: Main Title & 6 Grade Buttons (Tahap 1 Primary Objective) */
          <GradeGrid
            settings={settings}
            onSelectGrade={handleSelectGrade}
            onOpenGuide={() => setShowGuide(true)}
          />
        ) : (
          /* Class Interactive Detail View (Kelas 1 to Kelas 6) */
          <ClassDetailView
            grade={settings.selectedGrade}
            settings={settings}
            onBackToDashboard={handleBackToDashboard}
            onOpenAIAssistant={() => setShowAIAssistant(true)}
          />
        )}
      </main>

      {/* Floating IFP Controls Toolbar */}
      <IFPControls
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
      />

      {/* Modals */}
      <AIAssistantModal
        isOpen={showAIAssistant}
        onClose={() => setShowAIAssistant(false)}
        defaultGrade={settings.selectedGrade || 1}
      />

      <TeacherGuideModal
        isOpen={showGuide}
        onClose={() => setShowGuide(false)}
      />

      <AsmaulHusnaModal
        isOpen={showAsmaulHusna}
        onClose={() => setShowAsmaulHusna(false)}
      />

      {/* Footer / Copyright Info */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 py-6 mt-12 text-center text-xs text-slate-500 dark:text-slate-400 space-y-1">
        <p className="font-semibold text-emerald-800 dark:text-emerald-300">
          PAICODE-MPI • Media Pembelajaran Interaktif PAI & Budi Pekerti SD Kelas 1-6
        </p>
        <p>
          Didesain untuk Banyak Guru PAI — Kompatibel dengan Laptop, Smartphone & Papan Pintar IFP.
        </p>
      </footer>
    </div>
  );
}
