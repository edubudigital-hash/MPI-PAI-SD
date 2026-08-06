// DATA KELAS 1 PEMBELAJARAN 3: Menerapkan Akhlak kepada Allah Swt. dengan Mengucapkan Kalimat Subḥānallāh dan Māsyā Allāh
// Berdasarkan Buku Teks PAI Kelas 1 BAB 3

export interface SlideItem {
  id: number;
  badge: string;
  title: string;
  content: string;
  arabic?: string;
  transliteration?: string;
  meaning?: string;
  bulletPoints?: string[];
  keyTerms?: { term: string; definition: string }[];
  quote?: { text: string; source: string };
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const SLIDES_KELAS1_P3: SlideItem[] = [
  {
    id: 1,
    badge: 'Tujuan Pembelajaran',
    title: 'BAB 3: Kalimat Tayyibah Subḥānallāh & Māsyā Allāh',
    content: 'Selamat datang di Pembelajaran 3! Hari ini kita akan belajar mengucapkan kalimat tayyibah Subḥānallāh dan Māsyā Allāh sebagai bentuk akhlak mulia kepada Allah Swt.',
    bulletPoints: [
      '1. Menjelaskan arti kalimat Subḥānallāh dan Māsyā Allāh.',
      '2. Menyebutkan waktu yang tepat mengucapkan Subḥānallāh dan Māsyā Allāh.',
      '3. Membiasakan mengucapkan Subḥānallāh dan Māsyā Allāh dalam kehidupan sehari-hari.',
      '4. Menunjukkan akhlak yang baik kepada Allah Swt. melalui rasa kagum, syukur, dan menjaga ciptaan-Nya.',
      '5. Meneladani perilaku santun dan selalu mengingat Allah Swt. dalam setiap aktivitas.'
    ]
  },
  {
    id: 2,
    badge: 'A. Akhlak Kepada Allah',
    title: 'Apa itu Akhlak Kepada Allah Swt.?',
    content: 'Akhlak adalah perilaku atau sikap yang baik. Seorang anak muslim harus memiliki akhlak yang baik kepada Allah Swt., orang tua, guru, teman, dan lingkungan.',
    bulletPoints: [
      '• Arti Akhlak kepada Allah Swt.: Mencintai, menaati, mengagungkan, bersyukur, dan selalu mengingat Allah dalam setiap keadaan.',
      '• Mengucapkan Kalimat Ṭayyibah: Salah satu cara menunjukkan akhlak yang baik adalah membiasakan kata-kata terpuji yang dicintai Allah Swt.',
      '• Kalimat Ṭayyibah adalah kalimat-kalimat yang baik dan mulia.'
    ],
    keyTerms: [
      { term: 'Akhlak', definition: 'Perilaku, perangai, atau sikap terpuji dalam kehidupan sehari-hari.' },
      { term: 'Kalimat Ṭayyibah', definition: 'Kalimat yang baik, suci, dan sangat dicintai oleh Allah Swt.' }
    ]
  },
  {
    id: 3,
    badge: 'B. Kalimat Subḥānallāh',
    title: 'Mengenal Kalimat Subḥānallāh',
    content: 'Kalimat Subḥānallāh diucapkan untuk mengagungkan Allah Swt. dan menyatakan bahwa Allah Mahasuci dari segala kekurangan.',
    arabic: 'سُبْحَانَ اللَّهِ',
    transliteration: 'Subḥānallāh',
    meaning: 'Mahasuci Allah',
    bulletPoints: [
      '• Kapan Diucapkan? Ketika melihat keindahan alam, melihat gunung/laut/pelangi, atau mendengar kebesaran ciptaan Allah Swt.',
      '• Contoh Kejadian: Aisyah melihat pelangi yang sangat indah di langit, lalu berkata: "Subḥānallāh, indah sekali ciptaan Allah!"'
    ],
    quiz: {
      question: 'Apa arti dari kalimat tayyibah Subḥānallāh?',
      options: ['A. Atas kehendak Allah', 'B. Mahasuci Allah', 'C. Segala puji bagi Allah'],
      correctIndex: 1,
      explanation: 'Subḥānallāh artinya Mahasuci Allah.'
    }
  },
  {
    id: 4,
    badge: 'C. Kalimat Māsyā Allāh',
    title: 'Mengenal Kalimat Māsyā Allāh',
    content: 'Kalimat Māsyā Allāh diucapkan ketika melihat nikmat, keindahan, atau keberhasilan sebagai pengakuan bahwa semua terjadi atas kehendak Allah Swt.',
    arabic: 'مَا شَاءَ اللَّهُ',
    transliteration: 'Māsyā Allāh',
    meaning: 'Atas Kehendak Allah',
    bulletPoints: [
      '• Kapan Diucapkan? Ketika melihat teman mendapat prestasi/nilai bagus, melihat rumah indah, bayi lucu, taman yang asri, atau tanaman yang tumbuh subur.',
      '• Contoh Kejadian: Hasan mendapat nilai 100 saat ulangan. Temannya memuji: "Māsyā Allāh, selamat ya Hasan!"'
    ],
    quiz: {
      question: 'Kalimat Māsyā Allāh diucapkan saat melihat...',
      options: ['A. Keberhasilan atau nikmat teman', 'B. Musibah jalanan', 'C. Kesalahan sendiri'],
      correctIndex: 0,
      explanation: 'Māsyā Allāh diucapkan ketika melihat keindahan, prestasi, atau nikmat atas kehendak Allah.'
    }
  },
  {
    id: 5,
    badge: 'D. Perbedaan Penggunaan',
    title: 'Perbedaan Subḥānallāh dan Māsyā Allāh',
    content: 'Meskipun sama-sama memuji Allah Swt., kedua kalimat tayyibah ini memiliki fokus penggunaan yang sedikit berbeda:',
    bulletPoints: [
      '• Subḥānallāh (Mahasuci Allah): Diucapkan saat mengagumi kebesaran, kesucian, dan keajaiban ciptaan Allah Swt. (seperti alam, pelangi, gunung).',
      '• Māsyā Allāh (Atas Kehendak Allah): Diucapkan saat melihat nikmat, keberhasilan manusia, keindahan karya, atau karunia Allah Swt.',
      '• Kesamaan: Kedua kalimat ini sama-sama mengingatkan kita agar selalu memuji Allah Swt. dan tidak sombong.'
    ]
  },
  {
    id: 6,
    badge: 'E. Membiasakan Diri',
    title: 'Membiasakan Kalimat Ṭayyibah Sehari-hari',
    content: 'Anak yang baik selalu mengingat Allah Swt. dalam setiap momen kehidupan:',
    bulletPoints: [
      '• Bismillāh: Sebelum memulai setiap pekerjaan baik.',
      '• Alḥamdulillāh: Setelah memperoleh nikmat atau selesai bekerja.',
      '• Subḥānallāh: Ketika melihat kebesaran dan keindahan ciptaan Allah.',
      '• Māsyā Allāh: Ketika melihat nikmat, karunia, atau keberhasilan orang lain.',
      '• Astaghfirullāh: Ketika tidak sengaja melakukan kesalahan.',
      '• Insyā Allāh: Ketika berjanji melakukan sesuatu di masa depan.'
    ]
  },
  {
    id: 7,
    badge: 'F. Kisah Teladan',
    title: 'Kisah Teladan: "Kagum Kepada Ciptaan Allah"',
    content: 'Pada hari Minggu, guru mengajak murid-murid berjalan-jalan ke taman sekolah yang sangat asri.',
    bulletPoints: [
      '• Bunga bermekaran, kupu-kupu berwarna-warni, dan burung berkicau merdu.',
      '• Guru bertanya: "Siapa yang menciptakan semua ini?" Murid menjawab: "Allah Swt.!"',
      '• Guru mengingatkan: "Saat melihat ciptaan Allah yang indah, ucapkanlah Subḥānallāh!"',
      '• Ketika melihat taman sekolah bersih dan rapi karena kerja keras bersama, guru berkata: "Ini terjadi atas kehendak Allah, ucapkanlah Māsyā Allāh!"'
    ],
    quote: {
      text: 'Semua keindahan dan kebaikan yang ada di alam raya terjadi atas kehendak Allah Swt.',
      source: 'Pelajaran PAI Bab 3 Kelas 1'
    }
  },
  {
    id: 8,
    badge: 'G. Hikmah Utam',
    title: 'Hikmah Mengucapkan Kalimat Ṭayyibah',
    content: 'Membiaskan lisan dengan kalimat ṭayyibah memberikan manfaat luar biasa bagi jiwa kita:',
    bulletPoints: [
      '1. Selalu teringat dan dekat kepada Allah Swt.',
      '2. Hati menjadi tenang, tenteram, dan bahagia.',
      '3. Menambah rasa syukur atas karunia Allah.',
      '4. Menumbuhkan rasa kagum terhadap keagungan ciptaan Allah.',
      '5. Dijauhkan dari sifat sombong dan iri hati.',
      '6. Menjadi anak yang santun dan dicintai Allah Swt. serta sesama.'
    ]
  },
  {
    id: 9,
    badge: 'Ringkasan Bab 3',
    title: 'Rangkuman Pembelajaran 3',
    content: 'Mari kita ingat poin penting dalam Bab 3 ini:',
    bulletPoints: [
      '• Subḥānallāh = Mahasuci Allah (Ucapkan saat kagum pada kebesaran ciptaan Allah).',
      '• Māsyā Allāh = Atas kehendak Allah (Ucapkan saat melihat nikmat & keberhasilan).',
      '• Anak muslim bersikap santun, rendah hati, dan gemar memuji Allah Swt.'
    ]
  }
];

// PROYEK MURID (2 PjBL + 2 PBL)
export interface ProyekItem {
  id: string;
  type: 'PjBL' | 'PBL';
  title: string;
  badge: string;
  objective: string;
  scenarioOrSteps: string[];
  output: string;
  kebijakanGuruNote: string;
}

export const PROYEK_KELAS1_P3: ProyekItem[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 1',
    title: 'Kartu Kaligrafi Hias "Subḥānallāh & Māsyā Allāh"',
    objective: 'Murid mewarnai dan menghias kartu kaligrafi berisi tulisan Arab Subḥānallāh dan Māsyā Allāh untuk dipajang di dinding kamar atau sudut belajar.',
    scenarioOrSteps: [
      '1. Guru membagikan lembar kaligrafi bertuliskan Arab "سُبْحَانَ اللَّهِ" dan "مَا شَاءَ اللَّهُ".',
      '2. Mewarnai kaligrafi menggunakan krayon/pensil warna dengan kombinasi warna yang cerah.',
      '3. Menambahkan hiasan gambar alam (bunga, pelangi, bintang) di sekeliling kalimat Subḥānallāh.',
      '4. Menuliskan arti bahasa Indonesia di bawah kaligrafi secara rapi.'
    ],
    output: 'Kartu Kaligrafi Hias Dinding Kelas / Kamar',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Media kertas dan alat mewarnai disesuaikan oleh guru kelas.'
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 2',
    title: 'Mini Album "Kagum Ciptaan Allah di Sekitarku"',
    objective: 'Murid membuat buku lipat mini berisi gambar-gambar pemandangan alam dan foto prestasi teman lalu menempelkan stiker kalimat tayyibah yang sesuai.',
    scenarioOrSteps: [
      '1. Siapkan 3 lembar kertas lipat berwarna yang disambung menjadi album zig-zag.',
      '2. Pada halaman pemandangan alam (gunung/pelangi), tempelkan tulisan "Subḥānallāh".',
      '3. Pada halaman foto teman berprestasi / rumah indah, tempelkan tulisan "Māsyā Allāh".',
      '4. Tunjukkan dan tunjukkan cara membacanya kepada teman sekelompok.'
    ],
    output: 'Buku Lipat Mini Kalimat Tayyibah',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Gambar dapat digunting dari majalah bekas atau digambar sendiri.'
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 1',
    title: 'Studi Kasus: Menonton Pemandangan Indah di Televisi',
    objective: 'Murid berlatih memberikan respons yang tepat ketika terpukau melihat peristiwa alam yang luar biasa.',
    scenarioOrSteps: [
      'Kasus: "Budi dan adiknya menonton siaran televisi tentang indahnya aurora dan gunung meletus yang megah. Adik Budi hanya diam terpana tanpa berkata apa-apa. Budi ingin mengajari adiknya mengucapkan kalimat yang baik kepada Allah."',
      'Diskusi Pemecahan Masalah:',
      'a. Kalimat tayyibah apakah yang seharusnya diucapkan Budi dan adiknya?',
      'b. Mengapa kita harus mengucapkan "Subḥānallāh" saat melihat keajaiban alam ciptaan Allah?',
      'c. Peragakan percakapan santun Budi mengajari adiknya di depan kelas.'
    ],
    output: 'Lembar Solusi & Roleplay Respons Santun',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Pengelompokan simulasi dipandu oleh guru.'
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 2',
    title: 'Analisis Sikap: Teman Mendapatkan Piala Lomba Mewarnai',
    objective: 'Murid menyelesaikan masalah sikap saat teman sekelas berhasil meraih juara lomba agar tidak merasa iri dan tetap memuji Allah.',
    scenarioOrSteps: [
      'Kasus: "Lani menangis karena ia tidak mendapat juara mewarnai, sedangkan Siti menjadi Juara 1 dengan piala yang sangat besar. Lani merasa sedikit iri."',
      'Diskusi Pemecahan Masalah:',
      'a. Bagaimana cara membantu Lani agar hatinya menjadi tenang?',
      'b. Kalimat tayyibah apa yang harus diucapkan saat melihat piala dan prestasi indah milik Siti (Subḥānallāh atau Māsyā Allāh)?',
      'c. Mengapa mengucapkan "Māsyā Allāh" dapat menghilangkan rasa iri di dalam hati kita?'
    ],
    output: 'Bagan Langkah Pemecahan Masalah & Sikap Selamat',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Skenario peran dan bimbingan guru diatur di kelas.'
  }
];

// GAMIFIKASI INTERAKTIF: Acak & Susun Kata Kalimat Tayyibah
export interface WordPuzzleGame {
  id: number;
  title: string;
  scrambledWords: string[];
  correctSentence: string[];
  hint: string;
  meaning: string;
  badge: string;
}

export const PUZZLE_GAMES_KELAS1_P3: WordPuzzleGame[] = [
  {
    id: 1,
    title: 'Susun Kalimat Subḥānallāh & Artinya',
    scrambledWords: ['Allah', 'Mahasuci', 'Subḥānallāh', 'artinya'],
    correctSentence: ['Subḥānallāh', 'artinya', 'Mahasuci', 'Allah'],
    hint: 'Kalimat ini diucapkan saat melihat pemandangan alam yang sangat indah.',
    meaning: 'Subḥānallāh artinya Mahasuci Allah',
    badge: 'Bintang Lisan Subhanallah'
  },
  {
    id: 2,
    title: 'Susun Kalimat Māsyā Allāh & Artinya',
    scrambledWords: ['Allah', 'kehendak', 'Atas', 'Māsyā Allāh', 'artinya'],
    correctSentence: ['Māsyā Allāh', 'artinya', 'Atas', 'kehendak', 'Allah'],
    hint: 'Kalimat ini diucapkan saat melihat keberhasilan atau nikmat teman.',
    meaning: 'Māsyā Allāh artinya Atas kehendak Allah',
    badge: 'Bintang Lisan Masya Allah'
  },
  {
    id: 3,
    title: 'Susun Penggunaan Kalimat Subḥānallāh',
    scrambledWords: ['melihat', 'ucap', 'keindahan', 'pelangi', 'Subḥānallāh'],
    correctSentence: ['ucap', 'Subḥānallāh', 'melihat', 'keindahan', 'pelangi'],
    hint: 'Contoh: Saat Aisyah melihat pelangi dilangit...',
    meaning: 'Ucap Subḥānallāh melihat keindahan pelangi',
    badge: 'Penjelajah Pelangi Indah'
  },
  {
    id: 4,
    title: 'Susun Penggunaan Kalimat Māsyā Allāh',
    scrambledWords: ['Māsyā Allāh', 'ucap', 'melihat', 'prestasi', 'teman'],
    correctSentence: ['ucap', 'Māsyā Allāh', 'melihat', 'prestasi', 'teman'],
    hint: 'Contoh: Saat Hasan mendapat nilai 100...',
    meaning: 'Ucap Māsyā Allāh melihat prestasi teman',
    badge: 'Sahabat Santun Berprestasi'
  }
];

// EVALUASI PEMBELAJARAN (10 PG, 2 PGK, 2 Menjodohkan, 2 Benar/Salah, 4 Uraian)
export interface SoalPG {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SoalPGK {
  id: number;
  question: string;
  options: string[];
  correctAnswers: number[];
  explanation: string;
}

export interface SoalMenjodohkan {
  id: number;
  statement: string;
  matchOption: string;
}

export interface SoalBenarSalah {
  id: number;
  statement: string;
  isCorrect: boolean;
  sampleReason: string;
}

export interface SoalUraian {
  id: number;
  question: string;
  sampleAnswer: string;
}

export const EVALUASI_PG_KELAS1_P3: SoalPG[] = [
  {
    id: 1,
    question: 'Kalimat Subḥānallāh artinya...',
    options: ['A. Mahasuci Allah', 'B. Maha Besar Allah', 'C. Maha Pengasih'],
    correctAnswer: 0,
    explanation: 'Subḥānallāh artinya Mahasuci Allah.'
  },
  {
    id: 2,
    question: 'Kalimat Māsyā Allāh artinya...',
    options: ['A. Atas kehendak Allah', 'B. Dengan nama Allah', 'C. Segala puji bagi Allah'],
    correctAnswer: 0,
    explanation: 'Māsyā Allāh artinya Atas kehendak Allah.'
  },
  {
    id: 3,
    question: 'Ketika melihat pelangi yang indah dilangit, sebaiknya kita mengucapkan...',
    options: ['A. Astaghfirullāh', 'B. Subḥānallāh', 'C. Bismillāh'],
    correctAnswer: 1,
    explanation: 'Melihat keindahan alam dan ciptaan Allah dianjurkan mengucapkan Subḥānallāh.'
  },
  {
    id: 4,
    question: 'Ketika melihat teman mendapat nilai 100 saat ulangan, kita mengucapkan...',
    options: ['A. Subḥānallāh', 'B. Māsyā Allāh', 'C. Innalillahi'],
    correctAnswer: 1,
    explanation: 'Melihat nikmat atau keberhasilan teman dianjurkan mengucapkan Māsyā Allāh.'
  },
  {
    id: 5,
    question: 'Kalimat yang baik dan mulia yang dicintai Allah Swt. disebut kalimat...',
    options: ['A. Ṭayyibah', 'B. Buruk', 'C. Kasar'],
    correctAnswer: 0,
    explanation: 'Kalimat yang baik disebut kalimat ṭayyibah.'
  },
  {
    id: 6,
    question: 'Sikap mencintai, mengagungkan, dan selalu mengingat Allah Swt. disebut...',
    options: ['A. Akhlak terpuji kepada Allah', 'B. Sifat sombong', 'C. Sifat pamer'],
    correctAnswer: 0,
    explanation: 'Selalu mengingat dan memuji Allah adalah bentuk akhlak terpuji kepada Allah Swt.'
  },
  {
    id: 7,
    question: 'Sebelum memulai kegiatan belajar, kita hendaknya membiasakan membaca...',
    options: ['A. Bismillāh', 'B. Alhamdulillah', 'C. Masya Allah'],
    correctAnswer: 0,
    explanation: 'Membaca Bismillāh dilakukan sebelum memulai pekerjaan baik.'
  },
  {
    id: 8,
    question: 'Anak yang suka memuji kebesaran Allah Swt. akan memiliki hati yang...',
    options: ['A. Gelisah', 'B. Tenang dan tenteram', 'C. Marah'],
    correctAnswer: 1,
    explanation: 'Mengingat Allah membuat hati menjadi tenang.'
  },
  {
    id: 9,
    question: 'Ketika melihat gunung tinggi dan lautan yang sangat luas, kita kagum akan...',
    options: ['A. Kehebatan manusia', 'B. Kebesaran ciptaan Allah Swt.', 'C. Kekuatan mesin'],
    correctAnswer: 1,
    explanation: 'Gunung dan laut adalah ciptaan Allah Swt. yang menakjubkan.'
  },
  {
    id: 10,
    question: 'Mengucapkan Māsyā Allāh saat melihat keberhasilan teman dapat menjauhkan kita dari sifat...',
    options: ['A. Jujur', 'B. Iri dan dengki', 'C. Baik hati'],
    correctAnswer: 1,
    explanation: 'Māsyā Allāh menyadarkan kita bahwa semua atas kehendak Allah sehingga kita tidak iri.'
  }
];

export const EVALUASI_PGK_KELAS1_P3: SoalPGK[] = [
  {
    id: 1,
    question: 'Pilihlah DUA momen yang tepat untuk mengucapkan kalimat Subḥānallāh! (Pilih 2 jawaban)',
    options: [
      'A. Melihat pemandangan gunung yang indah',
      'B. Saat tidak sengaja menjatuhkan piring',
      'C. Melihat keindahan bunga yang bermekaran',
      'D. Sebelum mulai makan nasi'
    ],
    correctAnswers: [0, 2],
    explanation: 'Subḥānallāh diucapkan saat melihat keindahan ciptaan Allah seperti gunung dan bunga.'
  },
  {
    id: 2,
    question: 'Pilihlah DUA hikmah dari membiasakan mengucapkan kalimat tayyibah! (Pilih 2 jawaban)',
    options: [
      'A. Hati menjadi tenang',
      'B. Dijauhi oleh teman-teman',
      'C. Dicintai oleh Allah Swt.',
      'D. Menjadi anak yang sombong'
    ],
    correctAnswers: [0, 2],
    explanation: 'Mengucapkan kalimat tayyibah menenangkan hati dan membuat dicintai Allah Swt.'
  }
];

export const EVALUASI_MENJODOHKAN_KELAS1_P3: SoalMenjodohkan[] = [
  {
    id: 1,
    statement: 'Artinya "Mahasuci Allah"',
    matchOption: 'Subḥānallāh'
  },
  {
    id: 2,
    statement: 'Artinya "Atas kehendak Allah"',
    matchOption: 'Māsyā Allāh'
  }
];

export const ALL_MATCH_OPTIONS_P3 = [
  'Subḥānallāh',
  'Māsyā Allāh',
  'Alḥamdulillāh',
  'Astaghfirullāh'
];

export const EVALUASI_BENAR_SALAH_KELAS1_P3: SoalBenarSalah[] = [
  {
    id: 1,
    statement: 'Kalimat Subḥānallāh diucapkan ketika melihat keindahan dan kebesaran ciptaan Allah Swt.',
    isCorrect: true,
    sampleReason: 'Benar, Subhanallah diucapkan saat kagum pada ciptaan Allah.'
  },
  {
    id: 2,
    statement: 'Ketika teman mendapat nilai 100, kita mengucapkan Astaghfirullah.',
    isCorrect: false,
    sampleReason: 'Salah, seharusnya mengucapkan Masya Allah.'
  }
];

export const EVALUASI_URAIAN_KELAS1_P3: SoalUraian[] = [
  {
    id: 1,
    question: 'Apa arti dari kalimat Subḥānallāh dan kapan waktu yang tepat mengucapkannya?',
    sampleAnswer: 'Subḥānallāh artinya Mahasuci Allah. Waktu mengucapkannya adalah ketika melihat keindahan alam dan kebesaran ciptaan Allah Swt. (seperti pelangi, gunung, atau laut).'
  },
  {
    id: 2,
    question: 'Sebutkan 2 contoh peristiwa di sekolah saat kamu harus mengucapkan Māsyā Allāh!',
    sampleAnswer: '1. Saat melihat teman mendapat juara lomba / nilai 100.\n2. Saat melihat keindahan tanaman bunga yang tumbuh subur di taman sekolah.'
  },
  {
    id: 3,
    question: '(Computational Thinking - Pola Mencocokkan): Berilah tindakan ucapan yang tepat untuk peristiwa berikut:\na. Siti melihat burung cenderawasih berwarna-warni = [ ......... ]\nb. Ahmad melihat rumah temannya sangat bagus dan rapi = [ ......... ]',
    sampleAnswer: 'a. Subḥānallāh (keindahan ciptaan Allah)\nb. Māsyā Allāh (nikmat/karunia atas kehendak Allah)'
  },
  {
    id: 4,
    question: '(HOTS - Analisis Perilaku): Mengapa seorang anak muslim yang rajin mengucapkan kalimat Subḥānallāh dan Māsyā Allāh tidak akan mudah menjadi anak yang sombong?',
    sampleAnswer: 'Karena ia selalu sadar bahwa segala keindahan dan kehebatan berasal dari Allah Swt. Manusia tidak punya apa-apa untuk disombongkan di hadapan Allah.'
  }
];
