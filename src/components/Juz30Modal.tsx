import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Search, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Check, 
  Copy, 
  ChevronLeft,
  ChevronRight,
  ListFilter,
  Eye,
  EyeOff,
  ExternalLink,
  Play,
  Pause,
  ArrowLeft,
  Loader2
} from 'lucide-react';
import { JUZ_30_SURAHS, QuranSurah, QuranVerse } from '../data/juz30Data';
import { soundFX } from '../utils/audio';

interface Juz30ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Juz30Modal: React.FC<Juz30ModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [verseSearch, setVerseSearch] = useState('');
  const [selectedSurah, setSelectedSurah] = useState<QuranSurah | null>(null);
  const [showLatin, setShowLatin] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [copiedVerse, setCopiedVerse] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'popular' | 'makkiyah' | 'madaniyah'>('all');
  const [loadingVerses, setLoadingVerses] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);

  // Stop audio on unmount or surah change
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleSelectSurah = async (surah: QuranSurah) => {
    soundFX.playClick();
    
    // Stop playing audio when changing surah
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
      audioRef.current = null;
    }

    setSelectedSurah(surah);
    setVerseSearch('');

    // Scroll to top of content
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }

    // Check if verses are complete or if we can fetch live update
    if (surah.verses.length < surah.numberOfVerses) {
      setLoadingVerses(true);
      try {
        const res = await fetch(`https://equran.id/api/v2/surat/${surah.number}`);
        if (res.ok) {
          const json = await res.json();
          if (json.data && json.data.ayat) {
            const fullVerses: QuranVerse[] = json.data.ayat.map((a: any) => ({
              number: a.nomorAyat,
              arabic: a.teksArab,
              latin: a.teksLatin,
              translation: a.teksIndonesia
            }));
            setSelectedSurah({
              ...surah,
              verses: fullVerses
            });
          }
        }
      } catch (err) {
        console.warn('Live fetch offline fallback to local dataset:', err);
      } finally {
        setLoadingVerses(false);
      }
    }
  };

  const handleToggleSurahAudio = (surah: QuranSurah) => {
    soundFX.playClick();
    const formattedNum = surah.number.toString().padStart(3, '0');
    const targetAudioUrl = surah.audioUrl || `https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/${formattedNum}.mp3`;

    if (audioRef.current && isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(targetAudioUrl);
      newAudio.onended = () => setIsPlayingAudio(false);
      newAudio.onerror = () => {
        // Fallback audio source
        const fallbackUrl = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${surah.number}.mp3`;
        const fbAudio = new Audio(fallbackUrl);
        fbAudio.onended = () => setIsPlayingAudio(false);
        fbAudio.play();
        audioRef.current = fbAudio;
      };
      newAudio.play();
      audioRef.current = newAudio;
      setIsPlayingAudio(true);
      setAudioUrl(targetAudioUrl);
    }
  };

  if (!isOpen) return null;

  // Filtered surahs for the grid
  const filteredSurahs = JUZ_30_SURAHS.filter((surah) => {
    const matchesSearch = 
      surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surah.translationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surah.number.toString().includes(searchTerm) ||
      surah.arabicName.includes(searchTerm);

    if (!matchesSearch) return false;

    if (filterType === 'popular') {
      return [114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 97, 95, 94, 93, 78].includes(surah.number);
    } else if (filterType === 'makkiyah') {
      return surah.revelationType === 'Makkiyah';
    } else if (filterType === 'madaniyah') {
      return surah.revelationType === 'Madaniyah';
    }
    return true;
  });

  const handleCopyVerse = (text: string, verseNum: number) => {
    navigator.clipboard.writeText(text);
    soundFX.playClick();
    setCopiedVerse(verseNum);
    setTimeout(() => setCopiedVerse(null), 2000);
  };

  // Navigation helpers
  const currentSurahIndex = selectedSurah ? JUZ_30_SURAHS.findIndex(s => s.number === selectedSurah.number) : -1;
  const prevSurah = currentSurahIndex > 0 ? JUZ_30_SURAHS[currentSurahIndex - 1] : null;
  const nextSurah = currentSurahIndex < JUZ_30_SURAHS.length - 1 ? JUZ_30_SURAHS[currentSurahIndex + 1] : null;

  // Filtered verses inside selected surah
  const displayedVerses = selectedSurah ? selectedSurah.verses.filter(v => {
    if (!verseSearch.trim()) return true;
    const term = verseSearch.toLowerCase();
    return (
      v.number.toString() === term ||
      v.latin.toLowerCase().includes(term) ||
      v.translation.toLowerCase().includes(term) ||
      v.arabic.includes(term)
    );
  }) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/80 backdrop-blur-xs p-2 sm:p-4 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-7xl h-[92vh] flex flex-col overflow-hidden border border-emerald-100 dark:border-slate-800">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 text-white p-3 sm:p-4 flex items-center justify-between shadow-md shrink-0">
          <div className="flex items-center gap-2.5">
            {selectedSurah && (
              <button
                onClick={() => {
                  soundFX.playClick();
                  setSelectedSurah(null);
                }}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1 text-xs font-bold mr-1"
                title="Kembali ke Daftar Surah"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Daftar Surah</span>
              </button>
            )}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center text-amber-300 shadow-inner shrink-0">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-bold font-serif text-amber-200 tracking-wide flex items-center gap-2">
                Al-Qur'an Juz 30 (Juz 'Amma)
                <span className="text-[10px] sm:text-xs bg-amber-400 text-emerald-950 font-sans px-2.5 py-0.5 rounded-full font-bold">
                  Standar Kemenag RI
                </span>
              </h2>
              <p className="text-[10px] sm:text-xs text-emerald-100 flex items-center gap-1">
                <span>Surah An-Naba' (78) hingga An-Nas (114)</span>
                <a 
                  href="https://quran.kemenag.go.id/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-amber-300 hover:underline ml-1 font-semibold"
                >
                  quran.kemenag.go.id <ExternalLink className="w-2.5 h-2.5" />
                </a>
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

        {/* Top Control Toolbar (Search, Filter, Display Toggles) */}
        <div className="px-3 py-2 bg-emerald-50/90 dark:bg-slate-800 border-b border-emerald-100 dark:border-slate-700 flex flex-wrap gap-2 items-center justify-between shrink-0">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600 dark:text-emerald-400" />
            <input
              type="text"
              placeholder="Cari Surah (An-Nas, 114, Berita Besar)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-emerald-200 dark:border-slate-700 rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-emerald-950 dark:text-white placeholder-emerald-400"
            />
          </div>

          {/* Quick Filter Categories */}
          <div className="flex items-center gap-1 overflow-x-auto py-0.5 text-xs">
            <button
              onClick={() => { soundFX.playClick(); setFilterType('all'); }}
              className={`px-2.5 py-1 rounded-md transition font-medium cursor-pointer text-xs whitespace-nowrap ${
                filterType === 'all'
                  ? 'bg-emerald-700 text-white font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-emerald-100'
              }`}
            >
              Semua (37)
            </button>
            <button
              onClick={() => { soundFX.playClick(); setFilterType('popular'); }}
              className={`px-2.5 py-1 rounded-md transition font-medium cursor-pointer text-xs whitespace-nowrap flex items-center gap-1 ${
                filterType === 'popular'
                  ? 'bg-amber-500 text-emerald-950 font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-amber-100'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-600" />
              Sering Dipelajari PAI SD
            </button>
            <button
              onClick={() => { soundFX.playClick(); setFilterType('makkiyah'); }}
              className={`px-2.5 py-1 rounded-md transition font-medium cursor-pointer text-xs whitespace-nowrap ${
                filterType === 'makkiyah'
                  ? 'bg-emerald-700 text-white font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-emerald-100'
              }`}
            >
              Makkiyah
            </button>
            <button
              onClick={() => { soundFX.playClick(); setFilterType('madaniyah'); }}
              className={`px-2.5 py-1 rounded-md transition font-medium cursor-pointer text-xs whitespace-nowrap ${
                filterType === 'madaniyah'
                  ? 'bg-emerald-700 text-white font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-emerald-100'
              }`}
            >
              Madaniyah
            </button>
          </div>

          {/* View Toggles for Latin & Translation */}
          <div className="flex items-center gap-2 text-xs border-l border-emerald-200 dark:border-slate-700 pl-2">
            <button
              onClick={() => {
                soundFX.playClick();
                setShowLatin(!showLatin);
              }}
              className={`px-2 py-1 rounded-lg border text-[11px] font-medium flex items-center gap-1 transition ${
                showLatin 
                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold' 
                  : 'bg-white text-slate-500 border-slate-200'
              }`}
              title="Tampilkan / Sembunyikan Teks Latin"
            >
              {showLatin ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              <span>Latin</span>
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                setShowTranslation(!showTranslation);
              }}
              className={`px-2 py-1 rounded-lg border text-[11px] font-medium flex items-center gap-1 transition ${
                showTranslation 
                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold' 
                  : 'bg-white text-slate-500 border-slate-200'
              }`}
              title="Tampilkan / Sembunyikan Terjemahan"
            >
              {showTranslation ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              <span>Terjemahan</span>
            </button>
          </div>
        </div>

        {/* Main Body Area */}
        <div ref={modalContentRef} className="flex-1 overflow-y-auto p-3 sm:p-5 bg-slate-50/80 dark:bg-slate-950">
          
          {/* CASE 1: Detail View of a Selected Surah */}
          {selectedSurah ? (
            <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
              
              {/* Top Navigation & Surah Header Banner */}
              <div className="bg-gradient-to-br from-emerald-800 via-teal-800 to-emerald-900 text-white rounded-2xl p-4 sm:p-6 shadow-md border border-amber-300/40 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] bg-amber-400 text-emerald-950 font-bold px-3 py-1 rounded-full font-mono shadow-xs">
                    Surah Ke-{selectedSurah.number} dari 114
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleSurahAudio(selectedSurah)}
                      className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition shadow-sm cursor-pointer ${
                        isPlayingAudio 
                          ? 'bg-amber-400 text-emerald-950 animate-pulse' 
                          : 'bg-white/15 hover:bg-white/25 text-amber-200 border border-amber-300/30'
                      }`}
                      title="Putar Audio Murottal Surah"
                    >
                      {isPlayingAudio ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-current" />
                          <span>Jeda Murottal</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Putar Audio Murottal</span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] bg-emerald-950/70 border border-emerald-500/60 text-emerald-200 px-2.5 py-1 rounded-full">
                      {selectedSurah.revelationType} • {selectedSurah.numberOfVerses} Ayat Lengkap
                    </span>
                  </div>
                </div>

                <div className="text-center my-3 space-y-1.5">
                  <h3 className="text-4xl sm:text-5xl font-serif font-bold text-amber-200 tracking-wider">
                    {selectedSurah.arabicName}
                  </h3>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                    Surah {selectedSurah.name}
                  </h2>
                  <p className="text-sm text-emerald-200 font-medium">
                    "{selectedSurah.translationName}"
                  </p>
                </div>

                {/* Bismillah Header (except Surah At-Tawbah if applicable) */}
                {selectedSurah.number !== 9 && (
                  <div className="mt-5 pt-4 border-t border-emerald-600/50 text-center">
                    <p className="font-serif text-2xl sm:text-3xl text-amber-300 leading-relaxed">
                      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                    </p>
                    <p className="text-xs text-emerald-200 mt-1 italic font-sans">
                      Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang
                    </p>
                  </div>
                )}

                {/* Quick Prev / Next Surah Bar */}
                <div className="mt-5 pt-3 border-t border-emerald-700/60 flex items-center justify-between text-xs">
                  {prevSurah ? (
                    <button
                      onClick={() => handleSelectSurah(prevSurah)}
                      className="flex items-center gap-1 text-emerald-200 hover:text-white transition cursor-pointer font-semibold bg-white/10 px-2.5 py-1 rounded-lg"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>{prevSurah.name} ({prevSurah.number})</span>
                    </button>
                  ) : <div />}

                  <span className="text-[11px] text-emerald-200 font-mono hidden sm:inline">
                    {selectedSurah.verses.length} Ayat Ditampilkan
                  </span>

                  {nextSurah ? (
                    <button
                      onClick={() => handleSelectSurah(nextSurah)}
                      className="flex items-center gap-1 text-emerald-200 hover:text-white transition cursor-pointer font-semibold bg-white/10 px-2.5 py-1 rounded-lg"
                    >
                      <span>{nextSurah.name} ({nextSurah.number})</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : <div />}
                </div>
              </div>

              {/* In-Surah Verse Search Bar & Info */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-emerald-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                  <span>Menampilkan Seluruh Ayat ({selectedSurah.verses.length} Ayat)</span>
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari kata/ayat dalam surah ini..."
                    value={verseSearch}
                    onChange={(e) => setVerseSearch(e.target.value)}
                    className="w-full pl-8 pr-3 py-1 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium text-slate-800 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Loading Indicator */}
              {loadingVerses && (
                <div className="py-8 text-center text-emerald-700 dark:text-emerald-400 flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="text-xs font-bold">Memuat ayat lengkap dari Server Kemenag RI...</span>
                </div>
              )}

              {/* Verses List */}
              <div className="space-y-4">
                {displayedVerses.map((verse) => (
                  <div
                    key={verse.number}
                    id={`verse-${verse.number}`}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-emerald-100 dark:border-slate-800 shadow-xs hover:border-emerald-300 dark:hover:border-slate-700 transition space-y-3"
                  >
                    {/* Verse Header Bar */}
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 text-xs font-bold flex items-center justify-center font-mono border border-emerald-300 dark:border-emerald-700 shadow-2xs">
                          {verse.number}
                        </span>
                        <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400">
                          Ayat {verse.number}
                        </span>
                      </div>

                      <button
                        onClick={() => handleCopyVerse(`${verse.arabic}\n${verse.latin}\n"${verse.translation}"`, verse.number)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-slate-800 transition flex items-center gap-1 text-xs cursor-pointer"
                        title="Salin Teks Ayat"
                      >
                        {copiedVerse === verse.number ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-[11px] text-emerald-600 font-bold">Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-[11px] hidden sm:inline">Salin</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Big Arabic Text */}
                    <div className="text-right py-2 pl-4">
                      <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-emerald-950 dark:text-amber-200 leading-[2.3] tracking-wide font-semibold">
                        {verse.arabic}
                      </p>
                    </div>

                    {/* Latin Transliteration */}
                    {showLatin && (
                      <div className="bg-amber-50/60 dark:bg-amber-950/20 p-3 rounded-xl border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm font-serif text-amber-950 dark:text-amber-200 font-medium">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-amber-700 dark:text-amber-400 block mb-0.5 font-sans">
                          Latin:
                        </span>
                        {verse.latin}
                      </div>
                    )}

                    {/* Indonesian Translation */}
                    {showTranslation && (
                      <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans pt-1">
                        <span className="font-bold text-emerald-800 dark:text-emerald-400 mr-1">
                          Artinya:
                        </span>
                        "{verse.translation}"
                      </div>
                    )}
                  </div>
                ))}

                {displayedVerses.length === 0 && (
                  <div className="py-12 text-center text-slate-500 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <p className="font-semibold text-sm">Ayat tidak ditemukan untuk pencarian "{verseSearch}"</p>
                    <button
                      onClick={() => setVerseSearch('')}
                      className="mt-2 text-xs font-bold text-emerald-700 hover:underline"
                    >
                      Bersihkan Pencarian
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Navigation Buttons */}
              <div className="pt-6 pb-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                {prevSurah ? (
                  <button
                    onClick={() => handleSelectSurah(prevSurah)}
                    className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-emerald-900 dark:text-emerald-300 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Sebelumnnya: {prevSurah.name}</span>
                  </button>
                ) : <div />}

                <button
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedSurah(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition shadow-md cursor-pointer flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali ke Daftar Semua Surah</span>
                </button>

                {nextSurah ? (
                  <button
                    onClick={() => handleSelectSurah(nextSurah)}
                    className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-emerald-900 dark:text-emerald-300 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Selanjutnya: {nextSurah.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : <div />}
              </div>
            </div>
          ) : (
            
            /* CASE 2: List Grid of All 37 Surahs in Juz 30 */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredSurahs.map((surah) => (
                <div
                  key={surah.number}
                  onClick={() => handleSelectSurah(surah)}
                  className="bg-white dark:bg-slate-900 rounded-xl p-3.5 sm:p-4 border border-emerald-100 dark:border-slate-800 shadow-xs hover:border-emerald-400 dark:hover:border-slate-600 hover:shadow-md transition cursor-pointer flex flex-col justify-between group relative"
                >
                  {/* Top Bar inside Surah Card */}
                  <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-emerald-700 text-amber-300 text-xs font-bold font-mono flex items-center justify-center shadow-xs shrink-0">
                        {surah.number}
                      </span>
                      <div>
                        <h3 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">
                          Surah {surah.name}
                        </h3>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                          {surah.revelationType} • {surah.numberOfVerses} Ayat
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-emerald-900 dark:text-amber-200">
                        {surah.arabicName}
                      </span>
                    </div>
                  </div>

                  {/* Translation Name & Quick Preview */}
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-400">
                      "{surah.translationName}"
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 italic">
                      {surah.verses[0]?.translation ? `Ayat 1: "${surah.verses[0].translation}"` : ''}
                    </p>
                  </div>

                  {/* Read Button */}
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                    <span>Baca Teks & Terjemahan</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              ))}

              {filteredSurahs.length === 0 && (
                <div className="col-span-full py-16 text-center text-slate-500">
                  <p className="text-base font-medium text-slate-700 dark:text-slate-300">Surah tidak ditemukan</p>
                  <p className="text-xs text-slate-400 mt-1">Coba kata kunci pencarian atau ganti kategori filter</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-2.5 bg-emerald-900 text-emerald-200 text-[11px] flex items-center justify-between border-t border-emerald-800 shrink-0">
          <span>&copy; SIMPAD PAI-SD • Al-Qur'an Surat-Surat Pendek Juz 30 (Standar Kemenag RI)</span>
          <span className="bg-emerald-800 px-2 py-0.5 rounded text-amber-300 font-mono">
            37 Surah (78-114)
          </span>
        </div>

      </div>
    </div>
  );
};
