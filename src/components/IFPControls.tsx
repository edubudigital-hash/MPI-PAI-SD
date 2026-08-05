import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  UserCheck, 
  Timer, 
  X, 
  Play, 
  Pause, 
  RotateCcw
} from 'lucide-react';
import { IFPSettings } from '../types';
import { soundFX } from '../utils/audio';
import confetti from 'canvas-confetti';

interface IFPControlsProps {
  settings: IFPSettings;
  onUpdateSettings: (newSettings: Partial<IFPSettings>) => void;
}

export const IFPControls: React.FC<IFPControlsProps> = ({
  settings,
  onUpdateSettings,
}) => {
  const [showToolbar, setShowToolbar] = useState(false);
  const [showStudentPicker, setShowStudentPicker] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  // Student Picker state
  const [studentInput, setStudentInput] = useState('Ahmad, Fatimah, Yusuf, Aisha, Muhammad, Khadijah, Umar, Ali, Zaid, Maryam');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [isPicking, setIsPicking] = useState(false);

  // Timer state
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      soundFX.playBell();
      confetti({ particleCount: 80, spread: 70 });
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeLeft]);

  const handlePickRandomStudent = () => {
    soundFX.playClick();
    const students = studentInput.split(',').map((s) => s.trim()).filter(Boolean);
    if (students.length === 0) return;

    setIsPicking(true);
    setSelectedStudent(null);

    let counter = 0;
    const interval = setInterval(() => {
      const tempIndex = Math.floor(Math.random() * students.length);
      setSelectedStudent(students[tempIndex]);
      counter++;
      if (counter > 15) {
        clearInterval(interval);
        setIsPicking(false);
        soundFX.playCorrect();
        confetti({ particleCount: 60, spread: 50 });
      }
    }, 100);
  };

  return (
    <>
      {/* Compact Floating Toggle Button on bottom right */}
      <div className="fixed bottom-3 right-3 z-50 flex flex-col items-end gap-1.5">
        {showToolbar && (
          <div className="bg-emerald-950/95 border border-amber-400 p-2 rounded-xl shadow-xl backdrop-blur-xs text-white space-y-1.5 text-[11px] w-52 animate-in fade-in slide-in-from-bottom-3">
            <div className="flex items-center justify-between border-b border-emerald-800 pb-1">
              <span className="font-bold text-amber-300 flex items-center gap-1 text-[11px]">
                <Tv className="w-3.5 h-3.5" />
                <span>Papan Pintar IFP</span>
              </span>
              <button
                onClick={() => setShowToolbar(false)}
                className="p-0.5 hover:bg-emerald-800 rounded text-emerald-300 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                setShowStudentPicker(true);
              }}
              className="w-full text-left p-1.5 rounded-lg bg-emerald-900 hover:bg-emerald-800 flex items-center space-x-1.5 border border-emerald-700 transition cursor-pointer text-[10px]"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Acak Nama Siswa</span>
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                setShowTimer(true);
              }}
              className="w-full text-left p-1.5 rounded-lg bg-emerald-900 hover:bg-emerald-800 flex items-center space-x-1.5 border border-emerald-700 transition cursor-pointer text-[10px]"
            >
              <Timer className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Timer ({Math.floor(timeLeft / 60)}m {timeLeft % 60}s)</span>
            </button>

            <div className="pt-1 border-t border-emerald-800 flex items-center justify-between text-[10px] text-emerald-300">
              <span>Mode Touch:</span>
              <button
                onClick={() => onUpdateSettings({ isTouchMode: !settings.isTouchMode })}
                className={`px-1.5 py-0.2 rounded font-bold text-[9px] cursor-pointer ${settings.isTouchMode ? 'bg-amber-400 text-emerald-950' : 'bg-emerald-800 text-white'}`}
              >
                {settings.isTouchMode ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => {
            soundFX.playClick();
            setShowToolbar(!showToolbar);
          }}
          className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-bold shadow-lg hover:scale-105 active:scale-95 transition border border-amber-200 flex items-center justify-center space-x-1 cursor-pointer text-[11px]"
          title="Buka Peralatan IFP"
        >
          <Tv className="w-3.5 h-3.5 stroke-[2.5]" />
          <span className="font-bold">Papan Pintar</span>
        </button>
      </div>

      {/* Student Picker Modal */}
      {showStudentPicker && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-3">
          <div className="bg-white dark:bg-slate-900 max-w-sm w-full rounded-2xl border border-emerald-600 p-4 shadow-xl space-y-3 relative">
            <button
              onClick={() => setShowStudentPicker(false)}
              className="absolute top-3 right-3 p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
              <UserCheck className="w-4 h-4" />
              <h3>Acak Nama Siswa</h3>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                Daftar Siswa (pisahkan dengan koma):
              </label>
              <textarea
                value={studentInput}
                onChange={(e) => setStudentInput(e.target.value)}
                rows={2}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-400 text-center space-y-1">
              <span className="text-[10px] font-bold uppercase text-amber-800 dark:text-amber-300">
                Siswa Terpilih:
              </span>
              <div className="text-xl font-black text-emerald-900 dark:text-emerald-200 min-h-[32px] flex items-center justify-center">
                {selectedStudent || (isPicking ? 'Mengacak...' : 'Klik Acak!')}
              </div>
            </div>

            <button
              onClick={handlePickRandomStudent}
              disabled={isPicking}
              className="w-full py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs transition shadow-xs active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              🎲 ACAK SISWA
            </button>
          </div>
        </div>
      )}

      {/* Timer Modal */}
      {showTimer && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-3">
          <div className="bg-white dark:bg-slate-900 max-w-xs w-full rounded-2xl border border-amber-400 p-4 shadow-xl space-y-3 text-center relative">
            <button
              onClick={() => setShowTimer(false)}
              className="absolute top-3 right-3 p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center space-x-1.5 text-amber-600 font-bold text-sm">
              <Timer className="w-4 h-4" />
              <h3>Timer Belajar</h3>
            </div>

            <div className="text-3xl font-black text-emerald-800 dark:text-emerald-300 font-mono tracking-wider py-2 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-300">
              {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:{String(timeLeft % 60).padStart(2, '0')}
            </div>

            <div className="flex justify-center gap-1.5">
              <button
                onClick={() => { setTimeLeft(60); setIsTimerRunning(false); }}
                className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold cursor-pointer"
              >
                1m
              </button>
              <button
                onClick={() => { setTimeLeft(180); setIsTimerRunning(false); }}
                className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold cursor-pointer"
              >
                3m
              </button>
              <button
                onClick={() => { setTimeLeft(300); setIsTimerRunning(false); }}
                className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold cursor-pointer"
              >
                5m
              </button>
            </div>

            <div className="flex justify-center gap-2">
              <button
                onClick={() => {
                  soundFX.playClick();
                  setIsTimerRunning(!isTimerRunning);
                }}
                className="flex items-center space-x-1 px-4 py-1.5 rounded-lg bg-emerald-700 text-white font-bold text-xs cursor-pointer"
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isTimerRunning ? 'Jeda' : 'Mulai'}</span>
              </button>
              <button
                onClick={() => {
                  soundFX.playClick();
                  setIsTimerRunning(false);
                  setTimeLeft(60);
                }}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold text-xs cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
