import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  BookOpen, 
  Copy, 
  Check, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';
import { GradeLevel } from '../types';
import { soundFX } from '../utils/audio';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGrade?: GradeLevel;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  defaultGrade = 1,
}) => {
  const [grade, setGrade] = useState<GradeLevel>(defaultGrade);
  const [prompt, setPrompt] = useState('');
  const [topic, setTopic] = useState('Al-Qur\'an Hadis');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    soundFX.playClick();
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('/api/gemini/pai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, grade, topic }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Terjadi kesalahan pada sistem Gemini AI.');
      }

      setResponse(data.result);
      soundFX.playCorrect();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Gagal menghubungi Guru AI.';
      setError(msg);
      soundFX.playWrong();
    } finally {
      setIsLoading(false);
    }
  };

  const handlePresetClick = (presetPrompt: string) => {
    soundFX.playClick();
    setPrompt(presetPrompt);
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
    soundFX.playClick();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 max-w-2xl w-full rounded-3xl border-2 border-amber-400 p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 text-emerald-800 dark:text-emerald-300">
          <div className="p-3 rounded-2xl bg-amber-400 text-emerald-950 font-black shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              GURU AI PAI (Kreator Materi & Soal)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Buat soal kuis, rangkuman cerita nabi, atau materi Kurikulum Merdeka secara otomatis.
            </p>
          </div>
        </div>

        {/* Configuration Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Pilih Tingkat Kelas:
            </label>
            <select
              value={grade}
              onChange={(e) => setGrade(Number(e.target.value) as GradeLevel)}
              className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            >
              {[1, 2, 3, 4, 5, 6].map((g) => (
                <option key={g} value={g}>
                  KELAS {g} SD
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Elemen PAI:
            </label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            >
              <option value="Al-Qur'an Hadis">Al-Qur'an Hadis</option>
              <option value="Akidah">Akidah</option>
              <option value="Akhlak">Akhlak</option>
              <option value="Fiqih">Fiqih</option>
              <option value="Sejarah Peradaban Islam (SPI)">Sejarah Peradaban Islam (SPI)</option>
            </select>
          </div>
        </div>

        {/* Preset Prompt Buttons */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Contoh Permintaan Cepat Guru:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handlePresetClick(`Buatkan 3 Soal Kuis Pilihan Ganda beserta kunci jawaban untuk Kelas ${grade}`)}
              className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-semibold text-xs transition border border-amber-300"
            >
              📝 3 Soal Kuis + Kunci Jawaban
            </button>
            <button
              onClick={() => handlePresetClick(`Buat cerita singkat dan menarik tentang Asmaul Husna untuk anak Kelas ${grade}`)}
              className="px-3 py-1.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-semibold text-xs transition border border-emerald-300"
            >
              📖 Cerita Hikmah PAI
            </button>
            <button
              onClick={() => handlePresetClick(`Buat 5 poin penting penjelasan materi Fiqih/Shalat untuk Kelas ${grade}`)}
              className="px-3 py-1.5 rounded-xl bg-teal-100 hover:bg-teal-200 text-teal-950 font-semibold text-xs transition border border-teal-300"
            >
              💡 Ringkasan Materi RPP
            </button>
          </div>
        </div>

        {/* Prompt Input Area */}
        <div className="space-y-2">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ketik instruksi materi PAI yang ingin dibuatkan oleh AI..."
            rows={3}
            className="w-full text-xs sm:text-sm p-3.5 rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />

          <button
            onClick={handleGenerate}
            disabled={isLoading || !prompt.trim()}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg hover:from-emerald-600 hover:to-teal-600 transition disabled:opacity-50 active:scale-95"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Memproses dengan Gemini AI...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Buat Content Pembelajaran Sekarang</span>
              </>
            )}
          </button>
        </div>

        {/* Error State */}
        {error && (
          <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 text-rose-800 dark:text-rose-200 text-xs flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* AI Output Card */}
        {response && (
          <div className="p-5 rounded-2xl bg-amber-50 dark:bg-slate-800 border-2 border-amber-300 dark:border-amber-500/50 space-y-3 relative">
            <div className="flex items-center justify-between border-b border-amber-200 dark:border-slate-700 pb-2">
              <span className="text-xs font-extrabold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Hasil dari Guru AI PAI:</span>
              </span>

              <button
                onClick={handleCopy}
                className="px-2.5 py-1 rounded-lg bg-amber-200 dark:bg-slate-700 hover:bg-amber-300 text-amber-950 dark:text-amber-100 font-bold text-xs flex items-center gap-1 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin' : 'Salin Teks'}</span>
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto pr-2">
              {response}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
