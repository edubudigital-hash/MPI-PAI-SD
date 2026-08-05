import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Tv, 
  Volume2, 
  VolumeX,
  Type, 
  HelpCircle, 
  Sun, 
  Moon,
  Heart,
  Maximize,
  Minimize
} from 'lucide-react';
import { IFPSettings } from '../types';
import { soundFX } from '../utils/audio';

interface HeaderProps {
  settings: IFPSettings;
  onUpdateSettings: (newSettings: Partial<IFPSettings>) => void;
  onOpenAIAssistant: () => void;
  onOpenGuide: () => void;
  onOpenAsmaulHusna?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  settings,
  onUpdateSettings,
  onOpenAIAssistant,
  onOpenGuide,
  onOpenAsmaulHusna,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleSound = () => {
    const nextSoundState = !settings.soundEnabled;
    soundFX.soundEnabled = nextSoundState;
    if (nextSoundState) {
      soundFX.playClick();
    }
    onUpdateSettings({ soundEnabled: nextSoundState });
  };

  const toggleFullscreen = () => {
    if (settings.soundEnabled) soundFX.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log('Fullscreen error:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.log('Exit fullscreen error:', err);
        });
      }
    }
  };

  return (
    <header className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white shadow-md border-b-2 border-amber-400 sticky top-0 z-40">
      {/* Top Compatibility Sub-bar - Ultra Compact */}
      <div className="bg-emerald-950/70 py-0.5 px-3 border-b border-emerald-700/30 flex justify-between items-center text-[10px] leading-tight">
        <div className="flex items-center space-x-1.5 text-emerald-200 mx-auto md:mx-0">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Laptop • Smartphone • IFP Smart Board</span>
        </div>
        <div className="hidden md:flex items-center space-x-1 text-amber-300 font-medium">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>SIMPAD • Kurikulum Merdeka</span>
        </div>
      </div>

      {/* Main Compact Header Content */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 py-1.5 sm:py-2 flex flex-row items-center justify-between gap-2">
        {/* App Title & Small Logo */}
        <div className="flex items-center space-x-2 shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-emerald-950 flex items-center justify-center shadow-sm border border-amber-200 shrink-0">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg md:text-xl font-extrabold tracking-widest text-white leading-tight">
              S I M P A D
            </h1>
            <p className="text-[10px] sm:text-xs text-emerald-100 font-medium leading-none mt-0.5">
              Sistem Media Pembelajaran Digital PAI-SD
            </p>
          </div>
        </div>

        {/* Compact Action Controls */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 justify-end">
          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            className={`px-2 py-1 rounded-lg border text-xs font-medium transition shadow-2xs active:scale-95 flex items-center gap-1 ${
              settings.soundEnabled
                ? 'bg-emerald-700/80 hover:bg-emerald-600 border-emerald-500 text-amber-300'
                : 'bg-rose-900/60 hover:bg-rose-900/80 border-rose-500/60 text-slate-300'
            }`}
            title={settings.soundEnabled ? 'Efek Suara Aktif' : 'Efek Suara Mati'}
          >
            {settings.soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden md:inline text-[11px]">Suara</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-rose-300" />
                <span className="hidden md:inline text-[11px]">Mute</span>
              </>
            )}
          </button>

          {/* Asmaul Husna Button */}
          <button
            onClick={() => {
              if (settings.soundEnabled) soundFX.playClick();
              if (onOpenAsmaulHusna) onOpenAsmaulHusna();
            }}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs transition shadow-2xs active:scale-95 border border-amber-200 cursor-pointer"
            title="Buka 99 Asmaul Husna"
          >
            <Heart className="w-3.5 h-3.5 fill-emerald-950 text-emerald-950" />
            <span className="text-xs">Asmaul Husna</span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className={`flex items-center space-x-1 px-2 py-1 rounded-lg border text-xs font-medium transition shadow-2xs active:scale-95 ${
              isFullscreen
                ? 'bg-amber-400 text-emerald-950 border-amber-200 font-bold'
                : 'bg-emerald-700/80 hover:bg-emerald-600 text-emerald-100 border-emerald-500'
            }`}
            title={isFullscreen ? 'Keluar Layar Penuh (Fullscreen)' : 'Layar Penuh (Fullscreen)'}
          >
            {isFullscreen ? (
              <>
                <Minimize className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Exit Full</span>
              </>
            ) : (
              <>
                <Maximize className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Layar Penuh</span>
              </>
            )}
          </button>

          {/* IFP Mode Toggle */}
          <button
            onClick={() => {
              if (settings.soundEnabled) soundFX.playClick();
              onUpdateSettings({ isTouchMode: !settings.isTouchMode });
            }}
            className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-xs font-medium transition border shadow-2xs active:scale-95 ${
              settings.isTouchMode
                ? 'bg-amber-400 text-emerald-950 border-amber-200 font-bold'
                : 'bg-emerald-700/80 hover:bg-emerald-600 text-white border-emerald-500'
            }`}
            title="Mode Papan Pintar IFP"
          >
            <Tv className="w-3.5 h-3.5" />
            <span className="hidden lg:inline text-[11px]">IFP</span>
          </button>

          {/* Font Size Scaling */}
          <button
            onClick={() => {
              if (settings.soundEnabled) soundFX.playClick();
              const nextSize = settings.fontSize === 'normal' ? 'large' : settings.fontSize === 'large' ? 'xlarge' : 'normal';
              onUpdateSettings({ fontSize: nextSize });
            }}
            className="flex items-center space-x-0.5 px-2 py-1 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-500 text-white text-xs font-medium transition active:scale-95"
            title="Ukuran Teks"
          >
            <Type className="w-3.5 h-3.5 text-emerald-200" />
            <span className="uppercase text-[10px] font-bold text-amber-300">{settings.fontSize.substring(0, 1)}</span>
          </button>

          {/* High Contrast Mode Toggle */}
          <button
            onClick={() => {
              if (settings.soundEnabled) soundFX.playClick();
              onUpdateSettings({ isHighContrast: !settings.isHighContrast });
            }}
            className="p-1.5 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-500 text-white transition active:scale-95"
            title="Toggle Kontras Tinggi"
          >
            {settings.isHighContrast ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-emerald-200" />}
          </button>

          {/* AI Teacher Assistant */}
          <button
            onClick={() => {
              if (settings.soundEnabled) soundFX.playClick();
              onOpenAIAssistant();
            }}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 font-bold text-xs shadow-sm transition active:scale-95 border border-amber-200 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-900 fill-emerald-900" />
            <span className="text-xs">Guru AI</span>
          </button>

          {/* Guide Modal Trigger */}
          <button
            onClick={() => {
              if (settings.soundEnabled) soundFX.playClick();
              onOpenGuide();
            }}
            className="p-1.5 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 border border-amber-400/40 text-amber-300 transition active:scale-95 cursor-pointer"
            title="Panduan Guru & IFP"
          >
            <HelpCircle className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
