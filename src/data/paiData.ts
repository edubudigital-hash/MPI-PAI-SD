import { GradeInfo, LearningTopic, GradeLevel } from '../types';

export const GRADES_INFO: Record<GradeLevel, GradeInfo> = {
  1: {
    level: 1,
    phase: 'Fase A',
    title: 'KELAS 1 SD',
    subtitle: 'Aku Cinta Al-Qur\'an & Kasih Sayang',
    colorTheme: {
      bgGradient: 'from-emerald-500 via-teal-600 to-emerald-700',
      cardBg: 'bg-emerald-50 hover:bg-emerald-100/80 border-emerald-300 text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-100',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200',
      iconBg: 'bg-emerald-500 text-white dark:bg-emerald-600',
    },
    topicsCount: 5,
    mainFocus: ['Huruf Hijaiyah & Harakat', 'Rukun Iman', 'Perilaku Kasih Sayang', 'Basmalah & Hamdalah'],
    description: 'Pembentukan karakter dasar, pengenalan huruf Al-Qur\'an, serta sikap kasih sayang kepada sesama ciptaan Allah SWT.',
    elements: ['Al-Qur\'an Hadis', 'Akidah', 'Akhlak', 'Fiqih'],
  },
  2: {
    level: 2,
    phase: 'Fase A',
    title: 'KELAS 2 SD',
    subtitle: 'Asmaul Husna & Kebersihan',
    colorTheme: {
      bgGradient: 'from-amber-500 via-orange-600 to-amber-700',
      cardBg: 'bg-amber-50 hover:bg-amber-100/80 border-amber-300 text-amber-950 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-100',
      borderColor: 'border-amber-500',
      textColor: 'text-amber-700 dark:text-amber-300',
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200',
      iconBg: 'bg-amber-500 text-white dark:bg-amber-600',
    },
    topicsCount: 5,
    mainFocus: ['Surah An-Nas & Al-Falaq', 'Mengenal Asmaul Husna', 'Hidup Bersih & Suci', 'Tata Cara Shalat'],
    description: 'Penguatan hafalan surah pendek, membiasakan hidup bersih (thaharah), dan pembiasaan shalat 5 waktu.',
    elements: ['Al-Qur\'an Hadis', 'Akidah', 'Akhlak', 'Fiqih'],
  },
  3: {
    level: 3,
    phase: 'Fase B',
    title: 'KELAS 3 SD',
    subtitle: 'Surah Pendek & Akhlak Terpuji',
    colorTheme: {
      bgGradient: 'from-blue-500 via-indigo-600 to-blue-700',
      cardBg: 'bg-blue-50 hover:bg-blue-100/80 border-blue-300 text-blue-950 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-100',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-700 dark:text-blue-300',
      badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200',
      iconBg: 'bg-blue-500 text-white dark:bg-blue-600',
    },
    topicsCount: 5,
    mainFocus: ['Surah Al-Fatihah & Al-Ikhlas', 'Mengenal Kitab Allah', 'Sikap Mandiri & Tanggung Jawab', 'Kisah Nabi Ibrahim AS'],
    description: 'Mengenal keagungan Al-Qur\'an, meneladani kisah para nabi, serta memupuk sifat mandiri dan jujur.',
    elements: ['Al-Qur\'an Hadis', 'Akidah', 'Akhlak', 'Fiqih', 'Sejarah Peradaban Islam (SPI)'],
  },
  4: {
    level: 4,
    phase: 'Fase B',
    title: 'KELAS 4 SD',
    subtitle: 'Keberagaman & Ibadah Shalat',
    colorTheme: {
      bgGradient: 'from-teal-500 via-cyan-600 to-teal-700',
      cardBg: 'bg-teal-50 hover:bg-teal-100/80 border-teal-300 text-teal-950 dark:bg-teal-950/40 dark:border-teal-800 dark:text-teal-100',
      borderColor: 'border-teal-500',
      textColor: 'text-teal-700 dark:text-teal-300',
      badgeBg: 'bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200',
      iconBg: 'bg-teal-500 text-white dark:bg-teal-600',
    },
    topicsCount: 5,
    mainFocus: ['Surah At-Tin & Hadith Niat', 'Asmaul Husna (Al-Malik, Al-Aziz)', 'Kerukunan & Toleransi', 'Syarat & Rukun Shalat'],
    description: 'Mengerti makna keberagaman ciptaan Allah, tata cara ibadah secara rinci, dan akhlak bermasyarakat.',
    elements: ['Al-Qur\'an Hadis', 'Akidah', 'Akhlak', 'Fiqih', 'Sejarah Peradaban Islam (SPI)'],
  },
  5: {
    level: 5,
    phase: 'Fase C',
    title: 'KELAS 5 SD',
    subtitle: 'Saling Menghormati & Hari Akhir',
    colorTheme: {
      bgGradient: 'from-purple-500 via-violet-600 to-purple-700',
      cardBg: 'bg-purple-50 hover:bg-purple-100/80 border-purple-300 text-purple-950 dark:bg-purple-950/40 dark:border-purple-800 dark:text-purple-100',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-700 dark:text-purple-300',
      badgeBg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200',
      iconBg: 'bg-purple-500 text-white dark:bg-purple-600',
    },
    topicsCount: 5,
    mainFocus: ['Surah Al-Ma\'un', 'Iman Kepada Hari Akhir', 'Sikap Menghargai Perbedaan', 'Zakat, Infak & Sedekah'],
    description: 'Memahami konsep kepedulian sosial melalui zakat/infak, iman kepada hari akhir, dan meneladani keteladanan Nabi Muhammad SAW.',
    elements: ['Al-Qur\'an Hadis', 'Akidah', 'Akhlak', 'Fiqih', 'Sejarah Peradaban Islam (SPI)'],
  },
  6: {
    level: 6,
    phase: 'Fase C',
    title: 'KELAS 6 SD',
    subtitle: 'Hukum Tajwid & Khulafaur Rasyidin',
    colorTheme: {
      bgGradient: 'from-rose-500 via-pink-600 to-rose-700',
      cardBg: 'bg-rose-50 hover:bg-rose-100/80 border-rose-300 text-rose-950 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-100',
      borderColor: 'border-rose-500',
      textColor: 'text-rose-700 dark:text-rose-300',
      badgeBg: 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200',
      iconBg: 'bg-rose-500 text-white dark:bg-rose-600',
    },
    topicsCount: 5,
    mainFocus: ['Hukum Bacaan Mad & Izhar', 'Qada & Qadar', 'Akhlak Terpuji Kepada Lingkungan', 'Kisah Khulafaur Rasyidin'],
    description: 'Penyempurnaan hukum tajwid membaca Al-Qur\'an, pemahaman takdir Allah, serta kepemimpinan Islam teladan.',
    elements: ['Al-Qur\'an Hadis', 'Akidah', 'Akhlak', 'Fiqih', 'Sejarah Peradaban Islam (SPI)'],
  },
};

export const SAMPLE_TOPICS: LearningTopic[] = [
  // Kelas 1
  {
    id: 'k1-1',
    grade: 1,
    element: 'Al-Qur\'an Hadis',
    title: 'Mengenal Huruf Hijaiyah & Harakat',
    subtitle: 'Belajar membaca Al-Qur\'an sejak dini dengan ceria',
    description: 'Huruf Hijaiyah adalah huruf-huruf dalam Al-Qur\'an berjumlah 29 huruf. Harakat adalah tanda baca seperti Fathah (a), Kasrah (i), dan Dammah (u).',
    arabicText: 'اَ - اِ - اُ | بَ - بِ - بُ',
    translation: 'A - I - U | Ba - Bi - Bu',
    keyPoints: [
      'Huruf Hijaiyah berjumlah 29 huruf.',
      'Fathah berada di atas huruf, berbunyi A.',
      'Kasrah berada di bawah huruf, berbunyi I.',
      'Dammah berbentuk seperti wau kecil di atas, berbunyi U.',
    ],
    flashcards: [
      { id: 'fc-1', front: 'اَ', back: 'A (Alif dengan Fathah)', arabic: 'اَ', hint: 'Garis di atas' },
      { id: 'fc-2', front: 'بِ', back: 'Bi (Ba dengan Kasrah)', arabic: 'بِ', hint: 'Garis di bawah' },
      { id: 'fc-3', front: 'تُ', back: 'Tu (Ta dengan Dammah)', arabic: 'تُ', hint: 'Tanda lengkung di atas' },
    ],
    quizzes: [
      {
        id: 'qz-1',
        question: 'Tanda baca garis di atas huruf Al-Qur\'an dinamakan...',
        options: ['Kasrah (I)', 'Fathah (A)', 'Dammah (U)', 'Sukun'],
        correctAnswer: 1,
        explanation: 'Fathah adalah tanda garis di atas huruf yang menghasilkan bunyi vokal "A".',
      },
      {
        id: 'qz-2',
        question: 'Berapakah jumlah huruf Hijaiyah utama?',
        options: ['10 huruf', '20 huruf', '29 huruf', '99 huruf'],
        correctAnswer: 2,
        explanation: 'Huruf Hijaiyah berjumlah 29 huruf dari Alif hingga Ya.',
      }
    ],
    hafalanList: [
      { id: 'haf-1', title: 'Bacaan Basmalah', arabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', latin: 'Bismillaahir-rohmaanir-rohiim', meaning: 'Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.' },
    ]
  },
  {
    id: 'k1-2',
    grade: 1,
    element: 'Akidah',
    title: 'Mengenal Rukun Iman',
    subtitle: 'Pondasi utama kepercayaan umat Islam',
    description: 'Iman artinya percaya. Rukun Iman ada 6 perkara yang wajib diyakini di dalam hati dan diwujudkan dengan perbuatan baik.',
    keyPoints: [
      '1. Iman kepada Allah SWT',
      '2. Iman kepada Malaikat-Malaikat Allah',
      '3. Iman kepada Kitab-Kitab Allah',
      '4. Iman kepada Rasul-Rasul Allah',
      '5. Iman kepada Hari Kiamat',
      '6. Iman kepada Qada dan Qadar (Takdir)',
    ],
    quizzes: [
      {
        id: 'qz-k1-2',
        question: 'Rukun Iman yang pertama adalah percaya kepada...',
        options: ['Malaikat', 'Allah SWT', 'Kitab Suci', 'Hari Kiamat'],
        correctAnswer: 1,
        explanation: 'Rukun Iman ke-1 adalah Iman kepada Allah SWT sebagai Pencipta alam semesta.',
      }
    ]
  },

  // Kelas 2
  {
    id: 'k2-1',
    grade: 2,
    element: 'Al-Qur\'an Hadis',
    title: 'Surah An-Nas & Al-Falaq',
    subtitle: 'Surah perlindungan dari segala kejahatan',
    description: 'Surah An-Nas dan Al-Falaq disebut Al-Mu\'awwidzatain (dua surah yang memohon perlindungan hanya kepada Allah SWT).',
    arabicText: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
    translation: 'Katakanlah: "Aku berlindung kepada Tuhannya manusia"',
    keyPoints: [
      'Surah An-Nas terdiri dari 6 ayat.',
      'Artinya manusia, memohon perlindungan dari godaan setan.',
      'Selalu dibaca sebelum tidur dan setelah shalat.',
    ],
    quizzes: [
      {
        id: 'qz-k2-1',
        question: 'Surah An-Nas diturunkan untuk memohon perlindungan kepada Allah dari godaan...',
        options: ['Manusia yang jujur', 'Setan & Bisikan Jahat', 'Malaikat', 'Hewan'],
        correctAnswer: 1,
        explanation: 'Surah An-Nas berisi doa memohon perlindungan Allah dari bisikan kejahatan setan dan manusia.',
      }
    ]
  },

  // Kelas 3
  {
    id: 'k3-1',
    grade: 3,
    element: 'Akidah',
    title: 'Mengenal Kitab-Kitab Allah',
    subtitle: 'Petunjuk hidup bagi manusia sepanjang zaman',
    description: 'Allah menurunkan 4 kitab suci kepada para nabi-Nya: Taurat, Zabur, Injil, dan Al-Qur\'an sebagai penyempurna.',
    keyPoints: [
      'Kitab Taurat diturunkan kepada Nabi Musa AS.',
      'Kitab Zabur diturunkan kepada Nabi Daud AS.',
      'Kitab Injil diturunkan kepada Nabi Isa AS.',
      'Kitab Al-Qur\'an diturunkan kepada Nabi Muhammad SAW.',
    ],
    flashcards: [
      { id: 'fc-k3-1', front: 'Kitab Taurat', back: 'Nabi Musa AS' },
      { id: 'fc-k3-2', front: 'Kitab Zabur', back: 'Nabi Daud AS' },
      { id: 'fc-k3-3', front: 'Kitab Injil', back: 'Nabi Isa AS' },
      { id: 'fc-k3-4', front: 'Kitab Al-Qur\'an', back: 'Nabi Muhammad SAW' },
    ]
  },

  // Kelas 4
  {
    id: 'k4-1',
    grade: 4,
    element: 'Fiqih',
    title: 'Tata Cara & Syarat Sah Shalat',
    subtitle: 'Tiang agama Islam yang wajib ditegakkan',
    description: 'Shalat adalah ibadah wajib lima waktu sehari semalam. Mengetahui syarat sah dan rukun shalat membuat ibadah kita diterima oleh Allah SWT.',
    keyPoints: [
      'Syarat Sah Shalat: Suci dari hadas, menutup aurat, masuk waktu, menghadap kiblat.',
      'Rukun Shalat: Niat, Takbiratul Ihram, Berdiri, Membaca Al-Fatihah, Ruku\', I\'tidal, Sujud, Tasyahud, Salam.',
    ],
    quizzes: [
      {
        id: 'qz-k4-1',
        question: 'Membaca Surah Al-Fatihah dalam shalat termasuk kedalam...',
        options: ['Syarat Wajib', 'Rukun Shalat (Wajib)', 'Sunnah Shalat', 'Boleh ditinggalkan'],
        correctAnswer: 1,
        explanation: 'Membaca Al-Fatihah adalah rukun shalat, tidak sah shalat jika sengaja ditinggalkan.',
      }
    ]
  },

  // Kelas 5
  {
    id: 'k5-1',
    grade: 5,
    element: 'Al-Qur\'an Hadis',
    title: 'Membaca, Menulis, & Membedakan Huruf Hijaiyah Bersambung serta Surat Al-\'Asr',
    subtitle: 'Materi Lengkap Hukum Mim Sukun, Hijaiyah Bersambung & Surah Al-\'Asr',
    description: 'Mempelajari cara membaca dan menulis huruf hijaiyah bersambung 3 kata atau lebih, 3 hukum bacaan Mim Sukun (Idzhar Syafawi, Ikhfa Syafawi, Idgham Mimi), serta kandungan Surah Al-\'Asr.',
    keyPoints: [
      'Membedakan bentuk huruf hijaiyah di awal, tengah, dan akhir kata.',
      'Praktik membaca Mim Sukun: Idzhar Syafawi, Ikhfa Syafawi, Idgham Mimi.',
      'Memahami pesan Surat Al-\'Asr: 4 syarat selamat dari kerugian.',
    ]
  },
  {
    id: 'k5-2',
    grade: 5,
    element: 'Akidah',
    title: 'Mengenal dan Meneladani Asmaul Husna: Al-Halīm, Asy-Syakūr, Al-Hakīm, & Al-Wadūd',
    subtitle: 'Materi Lengkap Arti, Hikmah, Keteladanan, & Pengamalan 4 Asmaul Husna',
    description: 'Mengenal pengertian Asmaul Husna, dalil (QS. Al-A\'raf: 180), serta mendalami 4 nama indah Allah: Al-Halīm (Maha Penyantun), Asy-Syakūr (Maha Mensyukuri), Al-Hakīm (Maha Bijaksana), dan Al-Wadūd (Maha Mencintai).',
    keyPoints: [
      'Al-Halīm: Maha Penyantun & Penyabar, mengajarkan kesabaran, kedamaian, & pemaaf.',
      'Asy-Syakūr: Maha Mensyukuri / Memberi Balasan, menghargai setiap kebaikan walau kecil.',
      'Al-Hakīm: Maha Bijaksana, selalu berpikir sebelum bertindak & musyawarah.',
      'Al-Wadūd: Maha Mencintai & Pengasih, menyayangi sesama tanpa membeda-bedakan.'
    ]
  },
  {
    id: 'k5-3',
    grade: 5,
    element: 'Akhlak',
    title: 'Akhlak Kepada Allah Swt. Melalui Doa dan Tawakal',
    subtitle: 'Menerapkan Sikap Hormat, Taat, Cinta, 7 Adab Berdoa, & Sikap Tawakal',
    description: 'Mendalami pengertian akhlak kepada Allah Swt., dalil perintah berdoa (QS. Ghafir: 60), 7 adab berdoa dan manfaatnya, serta pengertian ikhtiar dan bertawakal (QS. Ali \'Imran: 159).',
    keyPoints: [
      'Pengertian Akhlak kepada Allah Swt. sebagai pencerminan rasa hormat, taat, dan cinta.',
      'Menerapkan Doa: Pengertian, Dalil (QS. Ghafir: 60), 7 Adab Berdoa, & Manfaat Berdoa.',
      'Menerapkan Tawakal: Pengertian ikhtiar & bertawakal, Dalil (QS. Ali \'Imran: 159), Contoh & Hikmah.'
    ]
  },
  {
    id: 'k5-4',
    grade: 5,
    element: 'Fiqih',
    title: 'Puasa Wajib dan Sunah, Serta Hikmahnya',
    subtitle: 'Memahami Ketentuan Puasa Ramadan, Puasa Sunah, Syarat, Rukun, & Hikmah Kehidupan',
    description: 'Mempelajari pengertian puasa (QS. Al-Baqarah: 183), macam-macam puasa wajib (Ramadan, Nazar, Kafarat) dan sunah (Senin-Kamis, Arafah, Asyura, Ayyamul Bidh, Daud), syarat wajib, rukun, hal membatalkan puasa, serta hikmahnya.',
    keyPoints: [
      'Pengertian & Dalil Puasa (QS. Al-Baqarah: 183) untuk membentuk pribadi bertakwa.',
      'Macam Puasa Wajib (Ramadan, Nazar, Kafarat) & Puasa Sunah (Senin-Kamis, Arafah, Asyura, Ayyamul Bidh, Daud).',
      'Syarat Wajib, Rukun, Hal-Hal Membatalkan Puasa & Hal Pengurang Pahala.',
      'Hikmah Puasa: Meningkatkan Takwa, Melatih Kesabaran, Menumbuhkan Disiplin, Empati, & Menjaga Kesehatan.'
    ]
  },

  // Kelas 6
  {
    id: 'k6-1',
    grade: 6,
    element: 'Al-Qur\'an Hadis',
    title: 'Hukum Bacaan Tajwid: Izhar & Ikhfa',
    subtitle: 'Membaca Al-Qur\'an dengan tartil dan benar',
    description: 'Hukum Nun Mati (نْ) dan Tanwin (ً ٍ ٌ) dibaca Izhar (jelas) apabila bertemu huruf Halqi, dan Ikhfa (samar) jika bertemu 15 huruf ikhfa.',
    arabicText: 'مَنْ آَمَنَ (Izhar) | مِنْ قَبْلُ (Ikhfa)',
    translation: 'Man aamana (Jelas) | Min qablu (Samar)',
    keyPoints: [
      'Izhar Halqi: Dibaca jelas tanpa dengung (Huruf: ء هـ ع ح غ خ).',
      'Ikhfa Haqiqi: Dibaca samar dengan dengung 2 harakat.',
    ],
    quizzes: [
      {
        id: 'qz-k6-1',
        question: 'Apabila Nun Mati (نْ) bertemu huruf Alif (ء), hukum bacaannya adalah...',
        options: ['Iqlab', 'Izhar Halqi (Jelas)', 'Idgham Bighunnah', 'Ikhfa'],
        correctAnswer: 1,
        explanation: 'Izhar Halqi terjadi apabila Nun Sukun bertemu salah satu huruf Halqi termasuk Alif (ء).',
      }
    ]
  }
];
