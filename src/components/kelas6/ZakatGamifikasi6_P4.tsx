import React, { useState } from 'react';
import { soundFX } from '../../utils/audio';
import { 
  Rocket, 
  Sparkles, 
  Award, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Star,
  Compass
} from 'lucide-react';

interface SpaceQuestion {
  id: number;
  planetName: string;
  station: string;
  missionPrompt: string;
  codeSnippet?: string;
  options: {
    label: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

const SPACE_MISSIONS: SpaceQuestion[] = [
  {
    id: 1,
    planetName: 'Planet Zakat Fitrah',
    station: 'Stasiun Peluncuran Qamar-1',
    missionPrompt: 'Roket penjelajahmu hendak mendarat di Planet Zakat Fitrah. Sistem navigasi memerlukan perhitungan takaran zakat fitrah untuk 4 anggota keluarga Pak Ahmad (Ayah, Ibu, 2 Anak). Berapa kg beras yang harus disiapkan?',
    options: [
      {
        label: '8,0 kg Beras',
        isCorrect: false,
        explanation: 'Kurang tepat! Setiap jiwa membutuhkan 2,5 kg beras. Untuk 4 orang = 4 × 2,5 kg = 10,0 kg beras.'
      },
      {
        label: '10,0 kg Beras',
        isCorrect: true,
        explanation: 'Luar biasa! 4 jiwa × 2,5 kg beras = 10,0 kg beras. Misi peluncuran roket sukses!'
      },
      {
        label: '12,5 kg Beras',
        isCorrect: false,
        explanation: 'Terlalu banyak! 12,5 kg beras adalah takaran untuk 5 orang anggota keluarga.'
      },
      {
        label: '15,0 kg Beras',
        isCorrect: false,
        explanation: 'Hampir benar, tapi 15,0 kg beras adalah untuk 6 orang jiwa.'
      }
    ]
  },
  {
    id: 2,
    planetName: 'Stasiun Nisab Zakat Mal',
    station: 'Pusat Komando Emas & Tabungan',
    missionPrompt: 'Kapten Astronot mendeteksi tabungan senilai Rp100.000.000 yang telah disimpan selama 1 tahun penuh (telah mencapai nisab). Berapa kadar zakat mal yang harus dikeluarkan roketmu?',
    options: [
      {
        label: 'Rp1.000.000 (1%)',
        isCorrect: false,
        explanation: 'Terlalu kecil! Kadar zakat mal standar simpanan adalah 2,5%.'
      },
      {
        label: 'Rp2.500.000 (2,5%)',
        isCorrect: true,
        explanation: 'Tepat sekali! Rp100.000.000 × 2,5% = Rp2.500.000. Perhitungan sistem navigasi roket sangat akurat!'
      },
      {
        label: 'Rp5.000.000 (5%)',
        isCorrect: false,
        explanation: 'Salah! 5% adalah kadar zakat pertanian dengan irigasi berbiaya.'
      },
      {
        label: 'Rp10.000.000 (10%)',
        isCorrect: false,
        explanation: 'Salah! 10% adalah kadar zakat pertanian dengan air hujan alami.'
      }
    ]
  },
  {
    id: 3,
    planetName: 'Sektor 8 Mustahik Zakat',
    station: 'Radar Penerima Zakat Galaksi',
    missionPrompt: 'Radar roket menemukan seorang musafir yang kehabisan bekal di perjalanan jauh untuk menuntut ilmu. Termasuk golongan manakah musafir tersebut?',
    options: [
      {
        label: 'Gharim',
        isCorrect: false,
        explanation: 'Gharim adalah orang yang memiliki utang demi memenuhi kebutuhan hidup yang dibenarkan syariat.'
      },
      {
        label: 'Ibnu Sabil',
        isCorrect: true,
        explanation: 'Benar! Ibnu Sabil adalah musafir (orang dalam perjalanan jauh yang baik) yang kehabisan bekal.'
      },
      {
        label: 'Mualaf',
        isCorrect: false,
        explanation: 'Mualaf adalah orang yang baru masuk Islam dan dihibur hatinya.'
      },
      {
        label: 'Amil Zakat',
        isCorrect: false,
        explanation: 'Amil adalah pengurus/petugas yang mengumpulkan dan membagikan zakat.'
      }
    ]
  },
  {
    id: 4,
    planetName: 'Galaksi Infak & Sedekah',
    station: 'Orbit Kebaikan Nonharta',
    missionPrompt: 'Seorang astronot tidak memiliki uang materi di luar angkasa, tetapi ia selalu tersenyum, menyapa dengan ramah, dan mengajari adiknya membaca Al-Qur\'an. Amalan ini tergolong...',
    options: [
      {
        label: 'Zakat Mal Wajib',
        isCorrect: false,
        explanation: 'Zakat mal memerlukan harta simpanan yang mencapai nisab dan haul.'
      },
      {
        label: 'Sedekah Nonharta (Nonmateri)',
        isCorrect: true,
        explanation: 'Tepat! Rasulullah saw. bersabda: "Senyummu kepada saudaramu adalah sedekah." (HR. Tirmidzi).'
      },
      {
        label: 'Zakat Fitrah Beras',
        isCorrect: false,
        explanation: 'Zakat fitrah menggunakan makanan pokok 2,5 kg beras.'
      },
      {
        label: 'Pajak Negara',
        isCorrect: false,
        explanation: 'Pajak adalah iuran wajib negara, bukan ibadah keagamaan ikhlas.'
      }
    ]
  },
  {
    id: 5,
    planetName: 'Sabuk Asteroid Pembiasaan',
    station: 'Posko Aksi Nyata Berbagi',
    missionPrompt: 'Di lingkungan sekolah, kamu melihat kawanmu lupa membawa pensil saat ujian. Tindakan mana yang mencerminkan penerapan nilai sedekah yang paling utama?',
    options: [
      {
        label: 'Acuh tak acuh dan membiarkannya menangis',
        isCorrect: false,
        explanation: 'Sikap ini bertentangan dengan semangat persaudaraan Islam.'
      },
      {
        label: 'Meminjamkan pensil cadangan dengan ikhlas dan senyuman',
        isCorrect: true,
        explanation: 'Hebat! Meminjamkan pensil cadangan adalah contoh nyata sedekah bantuan di sekolah.'
      },
      {
        label: 'Menjual pensil dengan harga 10 kali lipat lebih mahal',
        isCorrect: false,
        explanation: 'Tindakan ini memanfaatkan kesusahan teman untuk keuntungan sepihak.'
      },
      {
        label: 'Menyuruh teman pulang ke rumah mengambil pensil',
        isCorrect: false,
        explanation: 'Ini membuat teman terlambat mengikuti ujian.'
      }
    ]
  }
];

export const ZakatGamifikasi6_P4: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const currentMission = SPACE_MISSIONS[currentLevel];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    if (soundEnabled) soundFX.playClick();
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    setIsAnswered(true);

    const isCorrect = currentMission.options[selectedOption].isCorrect;
    if (isCorrect) {
      if (soundEnabled) soundFX.playCorrect();
      setScore(prev => prev + 20);
    } else {
      if (soundEnabled) soundFX.playWrong();
      setEnergy(prev => Math.max(0, prev - 20));
    }
  };

  const handleNextMission = () => {
    if (soundEnabled) soundFX.playClick();
    if (currentLevel < SPACE_MISSIONS.length - 1) {
      setCurrentLevel(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      if (soundEnabled) soundFX.playFanfare();
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    if (soundEnabled) soundFX.playClick();
    setCurrentLevel(0);
    setSelectedOption(null);
    setScore(0);
    setEnergy(100);
    setIsAnswered(false);
    setIsFinished(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Outer Space Card Header */}
      <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-teal-500/30 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 text-slate-950 flex items-center justify-center shadow-lg shadow-teal-500/20">
              <Rocket className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-900/80 text-teal-300 font-extrabold text-[11px] uppercase tracking-wider border border-teal-700/50">
                <Compass className="w-3 h-3 text-amber-400" />
                <span>Petualangan Luar Angkasa</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white mt-1">
                Penjelajah Zakat, Infak, & Sedekah
              </h1>
            </div>
          </div>

          {/* Sound & Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 transition-colors border border-slate-700"
              title="Toggle Audio"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Misi</span>
            </button>
          </div>
        </div>

        {/* Status Dashboard */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-800">
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <Zap className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-[10px] uppercase font-extrabold text-slate-400">Energi Roket</div>
              <div className="text-sm font-black text-amber-300">{energy}%</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <Star className="w-5 h-5 text-teal-400" />
            <div>
              <div className="text-[10px] uppercase font-extrabold text-slate-400">Skor Galaksi</div>
              <div className="text-sm font-black text-teal-300">{score} Poin</div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <Globe className="w-5 h-5 text-indigo-400" />
            <div>
              <div className="text-[10px] uppercase font-extrabold text-slate-400">Posisi Planet</div>
              <div className="text-sm font-black text-indigo-300">
                {isFinished ? 'Selesai' : `${currentLevel + 1} / ${SPACE_MISSIONS.length}`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Game Screen */}
      {!isFinished ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
          {/* Mission Station Banner */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400">
                {currentMission.station}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                {currentMission.planetName}
              </h2>
            </div>
            <div className="px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200 font-black text-xs">
              Level {currentMission.id}
            </div>
          </div>

          {/* Mission Prompt */}
          <div className="p-5 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/60 space-y-2">
            <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-extrabold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Instruksi Misi Galaksi:</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
              {currentMission.missionPrompt}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentMission.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              let btnStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-teal-400 text-slate-800 dark:text-slate-200';

              if (isAnswered) {
                if (option.isCorrect) {
                  btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 font-bold';
                }
              } else if (isSelected) {
                btnStyle = 'bg-teal-50 dark:bg-teal-950/60 border-teal-500 text-teal-900 dark:text-teal-200 font-bold';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 shadow-xs ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-xs shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-xs sm:text-sm font-medium">{option.label}</span>
                  </div>

                  {isAnswered && (
                    <div>
                      {option.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      ) : null}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box After Answering */}
          {isAnswered && selectedOption !== null && (
            <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed space-y-1 ${
              currentMission.options[selectedOption].isCorrect
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-900 dark:text-emerald-200'
                : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 text-amber-900 dark:text-amber-200'
            }`}>
              <div className="font-extrabold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Ulasan Sistem Komando:</span>
              </div>
              <p>{currentMission.options[selectedOption].explanation}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            {!isAnswered ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md ${
                  selectedOption === null
                    ? 'opacity-40 bg-slate-200 text-slate-500 cursor-not-allowed'
                    : 'bg-teal-600 hover:bg-teal-700 text-white active:scale-95'
                }`}
              >
                Kirim Jawaban
              </button>
            ) : (
              <button
                onClick={handleNextMission}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
              >
                {currentLevel < SPACE_MISSIONS.length - 1 ? 'Lanjut Misi Berikutnya' : 'Lihat Hasil Akhir'}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Victory Screen */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 text-center space-y-6 shadow-xl">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-400/20">
            <Award className="w-10 h-10 animate-pulse" />
          </div>

          <div>
            <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 font-extrabold text-xs uppercase tracking-wider">
              Misi Galaksi Selesai!
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-2">
              Selamat, Kapten Dermawan!
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Kamu berhasil menuntaskan seluruh tantangan ruang angkasa Zakat, Infak, dan Sedekah dengan gemilang.
            </p>
          </div>

          <div className="max-w-md mx-auto p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Total Skor</div>
                <div className="text-2xl font-black text-teal-600 dark:text-teal-400">{score} / 100</div>
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Sisa Energi</div>
                <div className="text-2xl font-black text-amber-500">{energy}%</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-xs font-semibold text-teal-900 dark:text-teal-200">
              Lencana Diberikan: <strong className="underline">Pahlawan Penjelajah ZIS Galaksi Kelas 6</strong>
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="px-8 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm transition-all shadow-lg active:scale-95"
          >
            Mainkan Kembali Misi Galaksi
          </button>
        </div>
      )}
    </div>
  );
};
