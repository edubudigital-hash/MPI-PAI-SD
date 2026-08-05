// Data Lengkap Kelas 3 Pembelajaran 1 berdasarkan PDF Resmi
// Menggabungkan Bagian 1 (Membaca, Menulis, dan Membedakan Huruf Hijaiyah Bersambung & Mad Ṭabī‘ī) 
// dan Bagian 2 (Membaca, Menulis, Mengartikan, dan Memahami Pesan Pokok Surah Al-Kautsar)

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  iconName: string;
  points: string[];
  arabicExamples?: { arabic: string; latin: string; meaning: string; note?: string }[];
  highlightBox?: { title: string; content: string; type?: 'info' | 'warning' | 'tip' };
  tableData?: { headers: string[]; rows: string[][] };
}

export interface ProjectTask {
  id: string;
  type: 'PjBL' | 'PBL';
  title: string;
  subtitle: string;
  badge: string;
  objective: string;
  steps: string[];
  output: string;
  teacherNote: string;
}

export interface GameQuestion {
  id: number;
  stage: string;
  prompt: string;
  arabicSnippet?: string;
  options: { id: string; text: string; isCorrect: boolean; explanation: string }[];
}

export interface QuestionPG {
  id: number;
  question: string;
  arabic?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface QuestionPGK {
  id: number;
  question: string;
  arabic?: string;
  options: string[];
  correctAnswerIndices: number[]; // Multiple correct
  explanation: string;
}

export interface MatchingItem {
  id: number;
  leftText: string;
  leftArabic?: string;
  rightText: string;
}

export interface QuestionBS {
  id: number;
  statement: string;
  arabic?: string;
  isTrue: boolean;
  explanation: string;
}

export interface QuestionEssay {
  id: number;
  question: string;
  arabic?: string;
  rubric: string;
  sampleAnswer: string;
}

// =========================================================================
// 1. MATERI PEMBELAJARAN (SLIDE INTERAKTIF COVERING WHOLE PDF: MAD TABI'I & SURAH AL-KAUTSAR)
// =========================================================================
export const KELAS3_P1_SLIDES: SlideData[] = [
  // --- BAGIAN 1: HURUF HIJAIYAH BERSAMBUNG & MAD TABI'I ---
  {
    id: 1,
    title: '1. Tujuan Pembelajaran & Ayo Mengamati (Mad Ṭabī‘ī)',
    subtitle: 'Membaca & Menulis Hijaiyah Bersambung serta Hukum Mad Ṭabī‘ī',
    iconName: 'Target',
    points: [
      '1. Membaca huruf hijaiyah bersambung tiga kata atau lebih dengan lancar.',
      '2. Menulis huruf hijaiyah sesuai kaidah penulisan Arab.',
      '3. Membedakan bentuk huruf hijaiyah pada awal, tengah, dan akhir kata.',
      '4. Menjelaskan pengertian Mad Ṭabī‘ī dan mengidentifikasinya dalam Al-Qur\'an.',
      '5. Membaca ayat Al-Qur\'an yang mengandung Mad Ṭabī‘ī secara benar dan tartil.'
    ],
    highlightBox: {
      title: '💡 Ayo Mengamati',
      content: 'Setiap hari umat Islam membaca Al-Qur\'an. Agar bacaan Al-Qur\'an benar, indah, dan sesuai tuntunan Rasulullah SAW, kita harus mempelajari ilmu tajwid, salah satunya Mad Ṭabī‘ī.',
      type: 'tip'
    }
  },
  {
    id: 2,
    title: '2. Huruf Hijaiyah Bersambung & Perubahan Bentuk',
    subtitle: 'Memahami Perubahan Bentuk Huruf di Awal, Tengah, dan Akhir Kata',
    iconName: 'Layers',
    points: [
      'Huruf hijaiyah terdiri atas 29 huruf.',
      'Dalam penulisan Arab, sebagian besar huruf dapat disambung dengan huruf sebelum dan sesudahnya sehingga membentuk kata.',
      'Bentuk huruf dapat berubah sesuai letaknya: di AWAL kata, TENGAH kata, atau AKHIR kata.'
    ],
    tableData: {
      headers: ['Huruf Tunggal', 'Awal Kata', 'Tengah Kata', 'Akhir Kata'],
      rows: [
        ['ب (Ba)', 'بـ', 'ـبـ', 'ـب'],
        ['ت (Ta)', 'تـ', 'ـتـ', 'ـت'],
        ['ث (Tsa)', 'ثـ', 'ـثـ', 'ـث'],
        ['ن (Nun)', 'نـ', 'ـنـ', 'ـن'],
        ['ي (Ya)', 'يـ', 'ـيـ', 'ـي']
      ]
    },
    arabicExamples: [
      { arabic: 'بَابُ الْمَدْرَسَةِ', latin: 'Bābul-madrasati', meaning: 'Pintu sekolah' },
      { arabic: 'رَحْمَةُ اللهِ', latin: 'Raḥmatullāhi', meaning: 'Rahmat Allah' },
      { arabic: 'فِي الْجَنَّةِ', latin: 'Fil-jannati', meaning: 'Di dalam surga' }
    ]
  },
  {
    id: 3,
    title: '3. Pengertian & Huruf-Huruf Mad Ṭabī‘ī',
    subtitle: 'Hukum Dasar Bacaan Panjang (Mad Asli)',
    iconName: 'BookOpen',
    points: [
      'Mad secara bahasa berarti PANJANG.',
      'Mad Ṭabī‘ī adalah bacaan panjang dua harakat yang terjadi karena terdapat salah satu huruf mad.',
      'Mad Ṭabī‘ī disebut juga MAD ASLI karena merupakan hukum mad paling dasar.',
      'Syarat Huruf Mad Ṭabī‘ī:',
      '• Huruf ALIF (ا) didahului harakat FATHAH ( ـَ )',
      '• Huruf YA SUKUN (ي) didahului harakat KASRAH ( ـِ )',
      '• Huruf WAU SUKUN (و) didahului harakat DAMMAH ( ـُ )'
    ],
    arabicExamples: [
      { arabic: 'قَالَ', latin: 'Qāla', meaning: 'Alif sesudah Fathah (Contoh: قَالَ, مَالِكِ, نَارٌ)' },
      { arabic: 'قِيلَ', latin: 'Qīla', meaning: 'Ya sukun sesudah Kasrah (Contoh: قِيلَ, فِي, الدِّينِ)' },
      { arabic: 'يَقُولُ', latin: 'Yaqūlu', meaning: 'Wau sukun sesudah Dammah (Contoh: يَقُولُ, نُورٌ, الرَّسُولُ)' }
    ]
  },
  {
    id: 4,
    title: '4. Cara Membaca & Latihan Tartil Mad Ṭabī‘ī',
    subtitle: 'Langkah Membaca Tepat 2 Harakat & Latihan Membaca/Menulis',
    iconName: 'Volume2',
    points: [
      'Langkah Membaca: (1) Kenali huruf mad, (2) Perhatikan harakat sebelumnya, (3) Panjangkan tepat 2 harakat (ketukan jari / hitungan satu-dua), (4) Bacalah secara tartil.',
      'Bacalah kalimat Al-Qur\'an berikut dengan tartil 2 harakat:'
    ],
    arabicExamples: [
      { arabic: 'قَالَ اللهُ', latin: 'Qālallāhu', meaning: '1. Allah berfirman' },
      { arabic: 'فِي السَّمَاءِ', latin: 'Fis-samā\'i', meaning: '2. Di langit' },
      { arabic: 'يَقُولُ الْمُؤْمِنُ', latin: 'Yaqūlul-mu\'minu', meaning: '3. Orang beriman berkata' },
      { arabic: 'نُورُ الْإِيمَانِ', latin: 'Nūrul-īmāni', meaning: '4. Cahaya keimanan' },
      { arabic: 'الرَّحْمَنُ الرَّحِيمُ', latin: 'Ar-Raḥmānur-Raḥīmu', meaning: '5. Yang Maha Pengasih lagi Penyayang' }
    ]
  },

  // --- BAGIAN 2: SURAH AL-KAUTSAR ---
  {
    id: 5,
    title: '5. Mengenal Surah Al-Kautsar',
    subtitle: 'Surah ke-108 dalam Al-Qur\'an (Golongan Makkiyah)',
    iconName: 'Sparkles',
    points: [
      'Surah Al-Kautsar merupakan surah ke-108 dalam Al-Qur\'an.',
      'Surah ini terdiri atas 3 ayat dan tergolong surah Makkiyah (diturunkan sebelum Nabi hijrah ke Madinah).',
      'Nama Al-Kautsar berarti NIKMAT YANG SANGAT BANYAK atau karunia yang melimpah.',
      'Makna Al-Kautsar menurut para ulama:',
      '• Sungai di surga yang diberikan kepada Nabi Muhammad SAW.',
      '• Nikmat yang sangat banyak dari Allah SWT.',
      '• Kemuliaan dan keberkahan yang terus mengalir kepada Rasulullah SAW.',
      '• Banyaknya umat Nabi Muhammad SAW hingga akhir zaman.'
    ],
    highlightBox: {
      title: '❤️ Penghibur Hati Rasulullah',
      content: 'Surah Al-Kautsar diturunkan sebagai penghibur hati Rasulullah SAW ketika beliau dihina oleh orang-orang musyrik Quraisy.',
      type: 'info'
    }
  },
  {
    id: 6,
    title: '6. Teks, Bacaan Latin, dan Arti Surah Al-Kautsar',
    subtitle: 'Surah Al-Kautsar Ayat 1 Sampai 3',
    iconName: 'BookOpen',
    points: [
      'Lafalkan Teks Ayat dan Terjemahannya berikut ini:'
    ],
    arabicExamples: [
      {
        arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
        latin: 'Ayat 1: Innā a‘ṭainākal-kautsar.',
        meaning: '"Sesungguhnya Kami telah memberikan kepadamu nikmat yang banyak."'
      },
      {
        arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
        latin: 'Ayat 2: Faṣalli lirabbika wanḥar.',
        meaning: '"Maka laksanakanlah salat karena Tuhanmu dan berkurbanlah."'
      },
      {
        arabic: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
        latin: 'Ayat 3: Inna syāni\'aka huwal-abtar.',
        meaning: '"Sesungguhnya orang yang membencimu, dialah yang terputus."'
      }
    ]
  },
  {
    id: 7,
    title: '7. Kandungan & Pesan Pokok Surah Al-Kautsar',
    subtitle: 'Nilai-Nilai Utama Surah Al-Kautsar',
    iconName: 'CheckCircle',
    points: [
      '1. Allah Maha Pemberi Nikmat: Semua nikmat (kesehatan, keluarga, ilmu, rezeki, iman) berasal dari Allah SWT.',
      '2. Bersyukur dengan Ibadah: Syukur diwujudkan dengan salat tepat waktu, mengaji, berdoa, membantu orang tua, dan bersedekah.',
      '3. Perintah Berkurban: Berkurban (kambing, domba, sapi, kerbau, unta) sebagai ketaatan dan belajar berbagi.',
      '4. Allah Membela Rasul-Nya: Bantahan terhadap kaum Quraisy yang mengejek Nabi dengan sebutan "Abtar" (terputus). Nama Rasulullah SAW tetap harum hingga akhir zaman.'
    ],
    highlightBox: {
      title: '📖 Janji Allah (Q.S. Ibrahim: 7)',
      content: '"Jika kamu bersyukur, pasti Aku akan menambah nikmat kepadamu." (Q.S. Ibrahim: 7)',
      type: 'tip'
    }
  },
  {
    id: 8,
    title: '8. Kisah Teladan Ahmad, Hikmah & Rangkuman',
    subtitle: 'Penerapan Kehidupan Sehari-hari & Refleksi Bab I',
    iconName: 'CheckCircle',
    points: [
      '🌸 Kisah Teladan Ahmad: Ahmad selalu bersyukur, suka berbagi bekal, rajin salat berjamaah. Saat menang lomba mengaji, ia tidak sombong, melainkan bersujud syukur.',
      '📌 RANGKUMAN LENGKAP BAB I:',
      '• Huruf hijaiyah memiliki bentuk berbeda di awal, tengah, dan akhir kata.',
      '• Mad Ṭabī‘ī dibaca panjang 2 harakat (Alif + Fathah, Ya sukun + Kasrah, Wau sukun + Dammah).',
      '• Surah Al-Kautsar surah ke-108 (3 ayat, Makkiyah) mengajarkan rasa syukur melalui salat dan kurban.',
      '• Pesan utama: bersyukur, ikhlas beribadah, gemar berbagi, dan sabar menghadapi ujian.'
    ]
  }
];

// =========================================================================
// 2. PROYEK MURID (2 PjBL + 2 PBL COVERING BOTH SECTIONS)
// =========================================================================
export const KELAS3_P1_PROJECTS: ProjectTask[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    title: 'Proyek 1 (PjBL): Poster "Peta Pohon Mad Ṭabī‘ī"',
    subtitle: 'Project Based Learning - Kreasi Visual Tajwid',
    badge: 'Project Based Learning (PjBL)',
    objective: 'Peserta didik mengidentifikasi dan mengelompokkan kata-kata ber-Mad Ṭabī‘ī dari Surah Al-Kautsar dan Surah pendek lainnya menjadi poster diagram pohon yang menarik.',
    steps: [
      '1. Siapkan kertas gambar, spidol warna, dan kertas warna-warni.',
      '2. Gambar sebuah pohon dengan 3 cabang utama: Cabang Alif (Fathah), Cabang Ya (Kasrah), dan Cabang Wau (Dammah).',
      '3. Cari 3 contoh kata Al-Qur\'an untuk masing-masing cabang dari Surah Al-Kautsar dan Juz 30 (total 9 kata).',
      '4. Tuliskan kata Arab beserta tanda warna pada huruf Mad-nya.',
      '5. Hias poster dan presentasikan di depan kelas bersama kelompok.'
    ],
    output: 'Poster Kreatif Peta Pohon Tajwid Mad Ṭabī‘ī siap pajang.',
    teacherNote: 'Catatan: Penilaian, kriteria kelompok, dan alokasi waktu disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    title: 'Proyek 2 (PjBL): Mading "Pohon Nikmat & Syukur Surah Al-Kautsar"',
    subtitle: 'Project Based Learning - Karya Seni Tematik Surah Al-Kautsar',
    badge: 'Project Based Learning (PjBL)',
    objective: 'Murid mendesain majalah dinding (mading) mini berbentuk pohon nikmat yang berisi tulisan Surah Al-Kautsar, arti, dan contoh bentuk syukur sehari-hari.',
    steps: [
      '1. Salin ayat 1-3 Surah Al-Kautsar beserta terjemahannya secara rapi di atas karton.',
      '2. Buat daun-daun kertas tempat menuliskan nikmat Allah yang diterima (kesehatan, keluarga, ilmu).',
      '3. Tuliskan 3 bentuk amalan syukur yang akan dilakukan minggu ini (seperti salat tepat waktu dan membantu orang tua).',
      '4. Tempelkan karya pada mading kelas dan peragakan membaca Surah Al-Kautsar secara tartil.'
    ],
    output: 'Mading Mini "Pohon Nikmat & Syukur Surah Al-Kautsar".',
    teacherNote: 'Catatan: Penilaian, media bahan, dan pameran mading disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    title: 'Proyek 3 (PBL): Analisis Detektif Kesalahan Membaca Mad Ṭabī‘ī',
    subtitle: 'Problem Based Learning - Pemecahan Masalah Bacaan Tajwid',
    badge: 'Problem Based Learning (PBL)',
    objective: 'Siswa memecahkan masalah perbedaan panjang bacaan yang salah dan menentukan cara perbaikan yang benar sesuai kaidah 2 harakat.',
    steps: [
      '1. Amati kasus: Budi membaca kata قَالَ dengan sangat pendek seperti "Qala" (1 harakat). Sedangkan Siti membacanya terlalu panjang seperti "Qaaaaala" (5 harakat).',
      '2. Analisis masalah: Mengapa bacaan Budi dan Siti belum tepat menurut hukum Mad Ṭabī‘ī?',
      '3. Tentukan aturan tajwid yang benar: Berapa harakat seharusnya kata قَالَ dibaca?',
      '4. Tuliskan solusi dan langkah bimbingan dengan teknik ketukan "satu-dua" agar Budi dan Siti bisa membaca tepat 2 harakat.'
    ],
    output: 'Lembar Laporan Analisis Pemecahan Masalah Bacaan Tajwid.',
    teacherNote: 'Catatan: Format laporan dan cara diskusi kelompok disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    title: 'Proyek 4 (PBL): Studi Kasus Sikap Bersyukur & Meneladani Ahmad',
    subtitle: 'Problem Based Learning - Pemecahan Masalah Karakter Berdasarkan Surah Al-Kautsar',
    badge: 'Problem Based Learning (PBL)',
    objective: 'Siswa menganalisis skenario anak yang tidak bersyukur dan menyusun solusi penerapan pesan pokok Surah Al-Kautsar.',
    steps: [
      '1. Amati studi kasus: Doni sering mengeluh karena bekal makanannya sederhana dan ia mengejek teman yang lupa membawa uang saku.',
      '2. Bandingkan sikap Doni dengan kisah teladan Ahmad dalam buku teks Surah Al-Kautsar.',
      '3. Hubungkan dengan pesan Surah Al-Kautsar ayat 1-2 (Nikmat yang banyak dan perintah berbagi/kurban).',
      '4. Rumuskan 3 nasihat santun dan rencana aksi perbaikan sikap untuk Doni.'
    ],
    output: 'Lembar Studi Kasus Pemecahan Masalah Karakter Syukur.',
    teacherNote: 'Catatan: Penugasan dan indikator keberhasilan disesuaikan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI (PETUALANGAN INTERAKTIF COVERING MAD TABI'I & AL-KAUTSAR)
// =========================================================================
export const KELAS3_P1_GAME: GameQuestion[] = [
  {
    id: 1,
    stage: 'Level 1: Mengenal Panjang Bacaan',
    prompt: 'Berapakah panjang bacaan untuk hukum Mad Ṭabī‘ī (Mad Asli)?',
    options: [
      { id: 'a', text: '1 Harakat (Satu ketukan)', isCorrect: false, explanation: 'Salah, 1 harakat adalah bacaan pendek biasa.' },
      { id: 'b', text: '2 Harakat (Dua ketukan)', isCorrect: true, explanation: 'Benar sekali! Mad Ṭabī‘ī wajib dibaca 2 harakat (2 ketukan).' },
      { id: 'c', text: '6 Harakat (Enam ketukan)', isCorrect: false, explanation: 'Salah, 6 harakat untuk mad lazim, bukan mad thabi\'i.' }
    ]
  },
  {
    id: 2,
    stage: 'Level 2: Deteksi Huruf Mad Alif',
    prompt: 'Manakah syarat terjadinya Mad Ṭabī‘ī pada huruf Alif (ا)?',
    options: [
      { id: 'a', text: 'Huruf Alif didahului harakat Kasrah', isCorrect: false, explanation: 'Salah, jika kasrah pasangannya adalah Ya sukun.' },
      { id: 'b', text: 'Huruf Alif didahului harakat Fathah', isCorrect: true, explanation: 'Tepat! Alif didahului Fathah ( contoh: قَالَ ).' },
      { id: 'c', text: 'Huruf Alif didahului harakat Dammah', isCorrect: false, explanation: 'Salah, dammah pasangannya adalah Wau sukun.' }
    ]
  },
  {
    id: 3,
    stage: 'Level 3: Identitas Surah Al-Kautsar',
    prompt: 'Surah Al-Kautsar merupakan surah ke-108 dalam Al-Qur\'an yang terdiri atas berapa ayat?',
    options: [
      { id: 'a', text: '3 Ayat', isCorrect: true, explanation: 'Hebat! Surah Al-Kautsar terdiri atas 3 ayat dan tergolong surah Makkiyah.' },
      { id: 'b', text: '5 Ayat', isCorrect: false, explanation: 'Salah, yang 5 ayat contohnya Surah Al-Falaq.' },
      { id: 'c', text: '7 Ayat', isCorrect: false, explanation: 'Salah, Al-Fatihah yang terdiri dari 7 ayat.' }
    ]
  },
  {
    id: 4,
    stage: 'Level 4: Arti Nama Al-Kautsar',
    prompt: 'Secara bahasa, apakah arti dari nama "Al-Kautsar"?',
    options: [
      { id: 'a', text: 'Pertolongan Allah', isCorrect: false, explanation: 'Salah, pertolongan adalah arti An-Nasr.' },
      { id: 'b', text: 'Nikmat yang sangat banyak / Karunia melimpah', isCorrect: true, explanation: 'Luar biasa! Al-Kautsar berarti nikmat yang sangat banyak atau karunia melimpah.' },
      { id: 'c', text: 'Waktu Subuh', isCorrect: false, explanation: 'Salah, waktu subuh adalah arti Al-Falaq.' }
    ]
  },
  {
    id: 5,
    stage: 'Level 5: Perintah dalam Surah Al-Kautsar Ayat 2',
    prompt: 'Perhatikan ayat 2 Surah Al-Kautsar: "Faṣalli lirabbika wanḥar". Dua ibadah yang diperintahkan dalam ayat tersebut adalah...',
    arabicSnippet: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
    options: [
      { id: 'a', text: 'Salat dan Berkurban', isCorrect: true, explanation: 'Sempurna! Allah memerintahkan salat karena Tuhanmu dan berkurbanlah.' },
      { id: 'b', text: 'Puasa dan Zakat', isCorrect: false, explanation: 'Salah, ayat ini menegaskan salat dan kurban.' },
      { id: 'c', text: 'Haji dan Umrah', isCorrect: false, explanation: 'Salah, perhatikan kata Salli (salat) dan Wanhar (kurban).' }
    ]
  }
];

// =========================================================================
// 4. EVALUASI PEMBELAJARAN (SOAL HOTS & CT COVERING WHOLE PDF)
// =========================================================================

// 10 PILIHAN GANDA (5 Mad Thabi'i + 5 Surah Al-Kautsar)
export const EVALUASI_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Berdasarkan materi Bab I, jumlah huruf hijaiyah dalam penulisan Arab terdiri atas...',
    options: ['A. 25 huruf', 'B. 28 huruf', 'C. 29 huruf', 'D. 30 huruf'],
    correctAnswerIndex: 2,
    explanation: 'Sesuai buku teks, huruf hijaiyah terdiri atas 29 huruf.'
  },
  {
    id: 2,
    question: 'Berapakah panjang ketukan bacaan untuk Mad Ṭabī‘ī (Mad Asli)?',
    options: ['A. 1 Harakat', 'B. 2 Harakat', 'C. 4 Harakat', 'D. 6 Harakat'],
    correctAnswerIndex: 1,
    explanation: 'Panjang bacaan Mad Ṭabī‘ī adalah dua harakat.'
  },
  {
    id: 3,
    question: 'Perhatikan kata berikut: قَالَ. Syarat Mad Ṭabī‘ī yang terdapat pada kata tersebut adalah...',
    arabic: 'قَالَ',
    options: [
      'A. Huruf Alif sesudah Fathah',
      'B. Huruf Ya sukun sesudah Kasrah',
      'C. Huruf Wau sukun sesudah Dammah',
      'D. Huruf Alif sesudah Kasrah'
    ],
    correctAnswerIndex: 0,
    explanation: 'Pada kata قَالَ terdapat huruf Alif sesudah Fathah (Qā).'
  },
  {
    id: 4,
    question: 'Perhatikan kata berikut: قِيلَ. Huruf mad yang menyebabkan kata tersebut dibaca panjang adalah...',
    arabic: 'قِيلَ',
    options: ['A. Alif (ا)', 'B. Ya sukun (ي)', 'C. Wau sukun (و)', 'D. Nun (ن)'],
    correctAnswerIndex: 1,
    explanation: 'Pada kata قِيلَ huruf madnya adalah Ya sukun sesudah Kasrah.'
  },
  {
    id: 5,
    question: 'Perhatikan kata berikut: يَقُولُ. Pasangan harakat dan huruf mad yang benar pada kata tersebut adalah...',
    arabic: 'يَقُولُ',
    options: [
      'A. Fathah bertemu Alif',
      'B. Kasrah bertemu Ya sukun',
      'C. Dammah bertemu Wau sukun',
      'D. Dammah bertemu Alif'
    ],
    correctAnswerIndex: 2,
    explanation: 'Pada kata يَقُولُ harakat Dammah pada huruf Qaf bertemu Wau sukun (Qū).'
  },
  {
    id: 6,
    question: 'Surah Al-Kautsar merupakan surah ke-108 dalam Al-Qur\'an yang terdiri atas...',
    options: ['A. 3 Ayat', 'B. 4 Ayat', 'C. 5 Ayat', 'D. 6 Ayat'],
    correctAnswerIndex: 0,
    explanation: 'Surah Al-Kautsar terdiri atas 3 ayat.'
  },
  {
    id: 7,
    question: 'Secara bahasa, kata "Al-Kautsar" memiliki arti...',
    options: [
      'A. Pertolongan Allah',
      'B. Nikmat yang sangat banyak',
      'C. Gejolak api',
      'D. Waktu subuh'
    ],
    correctAnswerIndex: 1,
    explanation: 'Al-Kautsar berarti nikmat yang sangat banyak atau karunia yang melimpah.'
  },
  {
    id: 8,
    question: 'Perhatikan ayat berikut: فَصَلِّ لِرَبِّكَ وَانْحَرْ. Terjemahan ayat kedua Surah Al-Kautsar tersebut adalah...',
    arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
    options: [
      'A. Sesungguhnya Kami telah memberikan kepadamu nikmat yang banyak.',
      'B. Maka laksanakanlah salat karena Tuhanmu dan berkurbanlah.',
      'C. Sesungguhnya orang yang membencimu dialah yang terputus.',
      'D. Dan Katakanlah Allah Maha Esa.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Faṣalli lirabbika wanḥar artinya: "Maka laksanakanlah salat karena Tuhanmu dan berkurbanlah."'
  },
  {
    id: 9,
    question: 'Salah satu bentuk hewan yang dapat dijadikan hewan kurban menurut buku teks adalah...',
    options: ['A. Ayam', 'B. Kambing', 'C. Burung', 'D. Kuda'],
    correctAnswerIndex: 1,
    explanation: 'Hewan kurban dapat berupa kambing, domba, sapi, kerbau, atau unta.'
  },
  {
    id: 10,
    question: 'Ahmad memenangkan lomba mengaji, namun ia tidak sombong dan mengucapkan Alhamdulillah. Perilaku Ahmad mencerminkan pengamalan Surah...',
    options: ['A. Al-Ikhlas', 'B. Al-Kautsar', 'C. An-Nas', 'D. Al-Falaq'],
    correctAnswerIndex: 1,
    explanation: 'Perilaku Ahmad mencerminkan pengamalan Surah Al-Kautsar (mensyukuri nikmat Allah).'
  }
];

// 5 PILIHAN GANDA KOMPLEKS (PGK)
export const EVALUASI_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Manakah di antara kata berikut yang MENGANDUNG bacaan Mad Ṭabī‘ī? (Pilih lebih dari satu)',
    options: [
      'A. قَالَ (Qāla)',
      'B. كَتَبَ (Kataba)',
      'C. قِيلَ (Qīla)',
      'D. يَقُولُ (Yaqūlu)'
    ],
    correctAnswerIndices: [0, 2, 3],
    explanation: 'قَالَ (Alif), قِيلَ (Ya sukun), dan يَقُولُ (Wau sukun) mengandung Mad Ṭabī‘ī.'
  },
  {
    id: 2,
    question: 'Manakah makna dari kata "Al-Kautsar" yang dijelaskan para ulama dalam buku teks? (Pilih lebih dari satu)',
    options: [
      'A. Sungai di surga yang diberikan kepada Nabi Muhammad SAW',
      'B. Nikmat yang sangat banyak dari Allah SWT',
      'C. Kemuliaan dan keberkahan yang terus mengalir',
      'D. Siksaan di alam kubur'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Makna Al-Kautsar meliputi sungai di surga, nikmat yang sangat banyak, serta kemuliaan dan keberkahan.'
  },
  {
    id: 3,
    question: 'Manakah ibadah yang diperintahkan langsung dalam Surah Al-Kautsar? (Pilih lebih dari satu)',
    options: [
      'A. Laksanakanlah salat karena Tuhanmu',
      'B. Berkurbanlah',
      'C. Berpuasa sebulan penuh',
      'D. Bersyukur atas nikmat Allah'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Surah Al-Kautsar memerintahkan salat, berkurban, dan senantiasa bersyukur.'
  },
  {
    id: 4,
    question: 'Manakah hewan yang sah dan dapat dijadikan sebagai hewan kurban? (Pilih lebih dari satu)',
    options: [
      'A. Sapi',
      'B. Kambing',
      'C. Ayam jantan',
      'D. Unta'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Sesuai materi, hewan kurban adalah kambing, domba, sapi, kerbau, dan unta.'
  },
  {
    id: 5,
    question: 'Pilihlah contoh sikap bersyukur dalam kehidupan sehari-hari! (Pilih lebih dari satu)',
    options: [
      'A. Mengucapkan Alhamdulillah ketika mendapat rizki',
      'B. Rajin melaksanakan salat tepat waktu',
      'C. Membantu orang tua dan berbagi makanan kepada teman',
      'D. Pamer dan menyombongkan kelebihan di depan teman'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Mengucapkan alhamdulillah, salat tepat waktu, dan berbagi adalah bentuk wujud syukur.'
  }
];

// 5 SOAL MENJODOHKAN (MATCHING)
export const EVALUASI_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Fathah bertemu Alif (ا)',
    rightText: 'Contoh: قَالَ (Qāla)'
  },
  {
    id: 2,
    leftText: 'Ayat 1 Surah Al-Kautsar',
    rightText: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ'
  },
  {
    id: 3,
    leftText: 'Ayat 2 Surah Al-Kautsar',
    rightText: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ'
  },
  {
    id: 4,
    leftText: 'Panjang bacaan Mad Ṭabī‘ī',
    rightText: '2 Harakat (2 Ketukan)'
  },
  {
    id: 5,
    leftText: 'Golongan Surah Al-Kautsar',
    rightText: 'Makkiyah (3 Ayat)'
  }
];

// 5 SOAL MEMILIH BENAR ATAU SALAH (B/S)
export const EVALUASI_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Mad Ṭabī‘ī disebut juga dengan istilah Mad Asli.',
    isTrue: true,
    explanation: 'Benar. Mad Ṭabī‘ī dan Mad Asli adalah sebutan untuk hukum mad dasar yang sama.'
  },
  {
    id: 2,
    statement: 'Surah Al-Kautsar adalah surah ke-108 dalam Al-Qur\'an yang terdiri atas 3 ayat.',
    isTrue: true,
    explanation: 'Benar. Surah Al-Kautsar merupakan surah ke-108 dan terdiri dari 3 ayat.'
  },
  {
    id: 3,
    statement: 'Kata "Abtar" dalam Surah Al-Kautsar berarti orang yang terputus dari kebaikan.',
    isTrue: true,
    explanation: 'Benar. Orang musyrik yang membenci Rasulullah disebut abtar (terputus dari kebaikan).'
  },
  {
    id: 4,
    statement: 'Panjang bacaan Mad Ṭabī‘ī adalah empat hingga enam harakat.',
    isTrue: false,
    explanation: 'Salah. Panjang bacaan Mad Ṭabī‘ī adalah dua harakat (2 ketukan).'
  },
  {
    id: 5,
    statement: 'Hewan ayam dan bebek tergolong hewan kurban yang diperintahkan dalam Surah Al-Kautsar.',
    isTrue: false,
    explanation: 'Salah. Hewan kurban harus berupa kambing, domba, sapi, kerbau, atau unta.'
  }
];

// 5 SOAL URAIAN (ESSAY WITH RUBRIC & SAMPLE ANSWER)
export const EVALUASI_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan pengertian Mad Ṭabī‘ī beserta 3 huruf mad dan pasangan harakatnya masing-masing!',
    rubric: 'Skor 20: Menjelaskan arti Mad Thabi\'i dan menyebutkan 3 pasangan (Alif-Fathah, Ya sukun-Kasrah, Wau sukun-Dammah).',
    sampleAnswer: 'Mad Ṭabī‘ī adalah bacaan panjang dua harakat. Terjadi apabila:\n1. Alif didahului Fathah ( contoh: قَالَ )\n2. Ya sukun didahului Kasrah ( contoh: قِيلَ )\n3. Wau sukun didahului Dammah ( contoh: يَقُولُ )'
  },
  {
    id: 2,
    question: 'Tuliskan teks Arab Surah Al-Kautsar ayat 1 beserta terjemahannya!',
    arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
    rubric: 'Skor 20: Menuliskan/mengidentifikasi ayat 1 dan artinya dengan tepat.',
    sampleAnswer: 'Teks Arab: إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ\nArtinya: "Sesungguhnya Kami telah memberikan kepadamu nikmat yang banyak."'
  },
  {
    id: 3,
    question: 'Sebutkan 2 perintah ibadah utama yang terkandung dalam Surah Al-Kautsar ayat 2!',
    arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
    rubric: 'Skor 20: Menyebutkan perintah salat (karena Allah) dan perintah berkurban.',
    sampleAnswer: 'Dua perintah ibadah utama dalam Surah Al-Kautsar ayat 2 adalah:\n1. Melaksanakan salat dengan penuh keikhlasan karena Allah SWT.\n2. Melaksanakan ibadah berkurban sebagai bentuk ketaatan dan berbagi.'
  },
  {
    id: 4,
    question: 'Bagaimana cara kita menunjukkan rasa syukur kepada Allah SWT dalam kehidupan sehari-hari di sekolah dan di rumah? Berikan 3 contoh!',
    rubric: 'Skor 20: Menyebutkan 3 contoh wujud syukur konkrit.',
    sampleAnswer: '1. Mengucapkan Alhamdulillah saat mendapat nikmat.\n2. Melaksanakan salat 5 waktu secara disiplin.\n3. Membantu orang tua, rajin belajar, dan berbagi makanan kepada teman.'
  },
  {
    id: 5,
    question: 'Teladan apa yang dapat kita petik dari kisah Ahmad saat menjuarai lomba mengaji Al-Qur\'an?',
    rubric: 'Skor 20: Menyebutkan sikap tidak sombong, mengucapkan alhamdulillah, dan bersujud syukur.',
    sampleAnswer: 'Ahmad mengajarkan agar saat berhasil/menang tidak menjadi sombong. Ahmad justru mengucapkan Alhamdulillah dan bersujud syukur serta tetap bersikap ramah dan gemar berbagi kepada sesama.'
  }
];
