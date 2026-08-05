// Data Lengkap Kelas 4 Pembelajaran 4 berdasarkan PDF Resmi BAB 4:
// Memahami dan Menerapkan Ketentuan Shalat Sunah Rawatib, Shalat Dhuha, dan Shalat Tahajud

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

export interface QuestStep {
  id: number;
  title: string;
  scenarioTitle: string;
  scenarioStory: string;
  questionPrompt: string;
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
  correctAnswerIndices: number[];
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
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 4 PEMBELAJARAN 4)
// =========================================================================
export const KELAS4_P4_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Pengertian dan Keutamaan Shalat Sunah',
    subtitle: 'Penyempurna Shalat Fardu dan Penambah Pahala',
    iconName: 'Sun',
    points: [
      '• Shalat merupakan ibadah utama setelah dua kalimat syahadat.',
      '• Shalat sunah adalah shalat yang apabila dikerjakan memperoleh pahala, sedangkan apabila ditinggalkan tidak berdosa.',
      '• Meskipun hukumnya sunah, shalat ini memiliki keutamaan besar sebagai penyempurna kekurangan dalam pelaksanaan shalat wajib (fardu).',
      '• Rasulullah saw. sangat menjaga pelaksanaan shalat sunah sebagai teladan bagi umat Islam.'
    ],
    highlightBox: {
      title: '🌟 Keutamaan Utama',
      content: 'Shalat sunah menutupi kekurangan pada shalat fardu kita di hari kiamat dan mendekatkan diri kepada Allah Swt.',
      type: 'tip'
    }
  },
  {
    id: 2,
    title: '2. Hikmah Melaksanakan Shalat Sunah',
    subtitle: 'Manfaat Spiritual dan Pembentukan Karakter',
    iconName: 'Heart',
    points: [
      '1. Mendekatkan diri kepada Allah Swt.',
      '2. Menyempurnakan kekurangan shalat wajib.',
      '3. Menambah pahala dan melatih kedisiplinan waktu.',
      '4. Menenangkan hati dan pikiran.',
      '5. Membentuk akhlak mulia, memperkuat keimanan dan ketakwaan.'
    ],
    arabicExamples: [
      {
        arabic: 'إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ',
        latin: 'Innaṣ-ṣalāta tanhā \'anil-faḥshā\'i wal-munkar',
        meaning: 'Sesungguhnya salat itu mencegah dari (perbuatan) keji dan mungkar.',
        note: 'Q.S. Al-\'Ankabut: 45'
      }
    ]
  },
  {
    id: 3,
    title: '3. Shalat Sunah Rawatib (Qabliyah & Ba\'diyah)',
    subtitle: 'Shalat Pendamping Sebelum dan Sesudah Shalat Fardu',
    iconName: 'Clock',
    points: [
      '• Shalat Rawatib adalah shalat sunah yang dikerjakan sebelum (qabliyah) atau sesudah (ba\'diyah) shalat fardu.',
      '• Rawatib Qabliyah (Sebelum Shalat Fardu):',
      '  - Subuh: 2 rakaat',
      '  - Zuhur: 2 atau 4 rakaat',
      '  - Asar: 2 atau 4 rakaat',
      '  - Magrib: 2 rakaat',
      '  - Isya: 2 rakaat',
      '• Rawatib Ba\'diyah (Sesudah Shalat Fardu):',
      '  - Zuhur: 2 rakaat',
      '  - Magrib: 2 rakaat',
      '  - Isya: 2 rakaat',
      '• Catatan Penting: Shalat Subuh dan Asar TIDAK memiliki shalat sunah Ba\'diyah.'
    ]
  },
  {
    id: 4,
    title: '4. Keutamaan Istiqamah Shalat Rawatib 12 Rakaat',
    subtitle: 'Dijanjikan Istana megah di Dalam Surga Allah',
    iconName: 'Award',
    points: [
      '• Rasulullah saw. sangat menganjurkan menjaga 12 rakaat shalat sunah Rawatib muakkad setiap hari.',
      '• Hadits Shahih HR. Muslim:',
      '  "Barang siapa menjaga dua belas rakaat shalat sunah setiap hari, Allah akan membangunkan baginya sebuah rumah di surga."'
    ],
    arabicExamples: [
      {
        arabic: 'مَنْ صَلَّى ثِنْتَيْ عَشْرَةَ رَكْعَةً فِي يَوْمٍ وَلَيْلَةٍ بُنِيَ لَهُ بِهِنَّ بَيْتٌ فِي الْجَنَّةِ',
        latin: 'Man ṣallā thintay \'ashrata rak\'atan fī yawmin wa laylatin buniya lahū bihinna baytun fil-jannah',
        meaning: 'Barang siapa menjaga 12 rakaat shalat sunah sehari semalam, akan dibangunkan baginya rumah di surga.',
        note: 'H.R. Muslim'
      }
    ]
  },
  {
    id: 5,
    title: '5. Shalat Sunah Dhuha',
    subtitle: 'Shalat Keberkahan Pagi Hari dan Pembawa Rezeki Halal',
    iconName: 'SunMedium',
    points: [
      '• Shalat Dhuha adalah shalat sunah yang dikerjakan pada waktu pagi hari setelah matahari terbit (sekitar 15–20 menit setelah terbit) hingga menjelang waktu Zuhur.',
      '• Jumlah Rakaat: Dikerjakan minimal 2 rakaat, dapat ditambah menjadi 4, 6, 8 rakaat atau lebih (salam setiap 2 rakaat).',
      '• Keutamaan Shalat Dhuha:',
      '  - Memperoleh pahala sedekah untuk seluruh persendian tubuh.',
      '  - Dimudahkan urusan dan dilapangkan rezeki halal oleh Allah Swt.',
      '  - Menenangkan hati dan wujud rasa syukur atas nikmat kesehatan.'
    ]
  },
  {
    id: 6,
    title: '6. Shalat Sunah Tahajud',
    subtitle: 'Ibadah Kemuliaan Malam Hari Setelah Bangun Tidur',
    iconName: 'Moon',
    points: [
      '• Shalat Tahajud adalah shalat sunah yang dikerjakan pada malam hari setelah tidur.',
      '• Waktu Pelaksanaan: Setelah bangun tidur pada malam hari hingga sebelum masuk waktu Subuh.',
      '• Waktu Paling Utama: Sepertiga malam terakhir (sekitar pukul 02.00 - 04.00), karena saat itu doa-doa sangat ijabah (mudah dikabulkan).',
      '• Jumlah Rakaat: Minimal 2 rakaat, dapat ditambah 4, 6, 8 rakaat atau lebih, dan biasanya ditutup dengan shalat Witir.'
    ],
    arabicExamples: [
      {
        arabic: 'وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَكَ عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا',
        latin: 'Wa minal-layli fa-tahajjad bihī nāfilatan laka \'asā an yab\'athaka rabbuka maqāman maḥmūdā',
        meaning: 'Dan pada sebagian malam lakukanlah shalat Tahajud sebagai ibadah tambahan bagimu; mudah-mudahan Tuhanmu mengangkatmu ke tempat yang terpuji.',
        note: 'Q.S. Al-Isra\': 79'
      }
    ]
  },
  {
    id: 7,
    title: '7. Matriks Perbedaan Rawatib, Dhuha, dan Tahajud',
    subtitle: 'Tabel Pembanding Waktu dan Ketentuan Pelaksanaan',
    iconName: 'Table',
    points: [
      'Meskipun berbeda waktu dan pelaksanaannya, ketiga shalat sunah tersebut sama-sama mendatangkan pahala dan mendekatkan hamba kepada Allah Swt.'
    ],
    tableData: {
      headers: ['Jenis Shalat Sunah', 'Waktu Pelaksanaan', 'Jumlah Rakaat', 'Ketentuan Khusus'],
      rows: [
        ['Shalat Rawatib', 'Sebelum (Qabliyah) / Sesudah (Ba\'diyah) Shalat Wajib', '2 atau 4 rakaat', 'Penyempurna shalat fardu'],
        ['Shalat Dhuha', 'Pagi hari setelah terbit matahari s.d. sebelum Zuhur', 'Minimal 2 rakaat (4, 6, 8)', 'Pahala sedekah & rezeki'],
        ['Shalat Tahajud', 'Malam hari setelah bangun tidur s.d. sebelum Subuh', 'Minimal 2 rakaat (4, 6, 8+)', 'Utama sepertiga malam terakhir']
      ]
    }
  },
  {
    id: 8,
    title: '8. Tata Cara Pelaksanaan Shalat Sunah',
    subtitle: 'Urutan Rukun Shalat Sunah yang Benar',
    iconName: 'CheckSquare',
    points: [
      'Pelaksanaan shalat sunah sama seperti shalat pada umumnya, urutannya meliputi:',
      '1. Niat shalat sunah (Rawatib / Dhuha / Tahajud).',
      '2. Takbiratul Ihram.',
      '3. Membaca Surah Al-Fatihah dan surah pendek Al-Qur\'an.',
      '4. Rukuk dengan tuma\'ninah.',
      '5. I\'tidal dengan tuma\'ninah.',
      '6. Sujud pertama, duduk di antara dua sujud, dan sujud kedua.',
      '7. Tasyahud akhir dan Salam.',
      '8. Berdoa dan berzikir setelah shalat.'
    ]
  },
  {
    id: 9,
    title: '9. Hikmah Membiasakan Shalat Sunah Sehari-hari',
    subtitle: 'Manfaat Nyata Bagi Kehidupan Seorang Pelajar',
    iconName: 'Sparkles',
    points: [
      '• Semakin disiplin dalam menjalankan ibadah tepat waktu.',
      '• Hati menjadi damai, tidak mudah cemas, dan lebih mudah konsentrasi belajar.',
      '• Terbiasa bangun pagi dan terbiasa bangun malam untuk beribadah.',
      '• Memperoleh tambahan pahala limpahan dari Allah Swt.',
      '• Membentuk pribadi yang sabar, bersyukur, dan bertanggung jawab.'
    ]
  },
  {
    id: 10,
    title: '10. Kisah Inspiratif: Perjuangan Rizki Kelas IV',
    subtitle: 'Dahsyatnya Shalat Dhuha dan Tahajud Bagi Prestasi Belajar',
    iconName: 'BookOpen',
    points: [
      '📖 Kisah Rizki Siswa Kelas IV:',
      'Rizki adalah siswa kelas IV yang selalu berusaha memperbaiki ibadahnya. Setiap pagi pada hari libur, ia mengerjakan shalat Dhuha 2 rakaat. Ayahnya juga mengajaknya bangun lebih awal di akhir pekan untuk shalat Tahajud.',
      '',
      'Awalnya Rizki merasa berat harus bangun malam. Namun setelah beberapa minggu, ia terbiasa. Rizki merasa hatinya lebih tenang, semangat belajar meningkat, dan lebih mudah berkonsentrasi di kelas.',
      '',
      'Nilai pelajarannya pun meningkat pesat! Rizki menyadari bahwa keberhasilan tidak hanya diperoleh dengan belajar keras, tetapi juga dengan mendekatkan diri kepada Allah melalui shalat wajib dan sunah.'
    ]
  }
];

// =========================================================================
// 2. PENUGASAN PROYEK MURID (2 PjBL + 2 PBL) - Sesuai Kebijakan Guru
// =========================================================================
export const KELAS4_P4_PROJECTS: ProjectTask[] = [
  {
    id: 'p4_pjbl_1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Jadwal & Kartu Target Shalat Sunah Rawatib 12 Rakaat',
    subtitle: 'Proyek Desain Poster Jadwal Shalat Sunah dan Catatan Pelaksanaan',
    objective: 'Peserta didik mampu merancang poster jadwal shalat sunah Rawatib (Qabliyah dan Ba\'diyah) serta mempraktikkannya secara konsisten.',
    steps: [
      '1. Siapkan kertas karton/A3, spidol warna, dan penggaris.',
      '2. Buatlah tabel jadwal 5 waktu shalat fardu lengkap dengan kolom Rawatib Qabliyah dan Ba\'diyah.',
      '3. Berikan penanda khusus untuk 12 rakaat muakkad yang menjanjikan rumah di surga.',
      '4. Hias poster dengan tulisan kaligrafi niat shalat Rawatib dan hadits keutamaannya.',
      '5. Pajang poster di kamar dan centang setiap selesai melaksanakannya.'
    ],
    output: 'Poster Kartu Target Shalat Rawatib A3 Berwarna.',
    teacherNote: 'Kerapian tabel, kejelasan jadwal, dan pembiasaan siswa disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p4_pjbl_2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Jurnal Dhuha & Tahajud Berkemajuan (7 Hari)',
    subtitle: 'Proyek Pembiasaan Bangun Pagi Dhuha dan Bangun Malam Tahajud',
    objective: 'Peserta didik mampu membiasakan diri melaksanakan shalat Dhuha di hari libur/pagi dan shalat Tahajud di akhir pekan.',
    steps: [
      '1. Buatlah buku saku Jurnal Shalat Sunah 7 Hari.',
      '2. Isilah catatan waktu shalat Dhuha (jumlah rakaat & doa rezeki) serta catatan shalat Tahajud bersama orang tua.',
      '3. Tuliskan refleksi perasaan hati setelah melaksanakan shalat sunah.',
      '4. Mintalah tanda tangan pendampingan dari Ayah/Ibu.',
      '5. Presentasikan pengalaman spiritual di hadapan teman sekelas.'
    ],
    output: 'Buku Saku Jurnal Shalat Sunah 7 Hari dengan tanda tangan orang tua.',
    teacherNote: 'Format pengisian jurnal dan aspek verifikasi orang tua disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p4_pbl_1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Analisis Kasus: "Mengapa Budi Lupa Membedakan Qabliyah dan Ba\'diyah?"',
    subtitle: 'Pemecahan Masalah Kekeliruan Waktu Shalat Sunah Rawatib',
    objective: 'Peserta didik mampu menganalisis kekeliruan waktu pelaksanaan shalat Rawatib (seperti mengerjakan ba\'diyah Subuh/Asar) dan memberikan solusi sesuai syariat.',
    steps: [
      '1. Bacalah studi kasus: "Budi hendak melaksanakan shalat sunah ba\'diyah Subuh dan ba\'diyah Asar karena merasa ingin menambah pahala."',
      '2. Analisis masalah: Mengapa shalat ba\'diyah Subuh dan Asar dilarang dalam ajaran Islam?',
      '3. Temukan solusi: Kapankah waktu shalat Rawatib yang benar untuk Subuh dan Asar?',
      '4. Buatlah "Peta Jalur Waktu Shalat Rawatib" agar teman-teman tidak keliru.',
      '5. Simulasikan penjelasan hukum shalat Rawatib kepada kelompok lain.'
    ],
    output: 'Laporan Solusi Kasus & Peta Visual Waktu Shalat Rawatib.',
    teacherNote: 'Kejelasan ketepatan hukum Fiqih dan kerapian peta jalur disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p4_pbl_2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Studi Kasus Kesulitan Bangun Malam Tahajud Seperti Kisah Rizki',
    subtitle: 'Strategi Mengatasi Rasa Malas dan Mengantuk Saat Bangun Tahajud',
    objective: 'Peserta didik mampu merumuskan tips dan strategi praktis agar mudah bangun malam melaksanakan shalat Tahajud.',
    steps: [
      '1. Bacalah kisah Rizki yang awalnya merasa sangat berat dan mengantuk saat diajak ayahnya bangun Tahajud.',
      '2. Diskusikan penyebab anak sering malas atau susah bangun di sepertiga malam terakhir.',
      '3. Rumuskan 5 Tips Sukses Bangun Tahajud (misal: tidur lebih awal, wudhu sebelum tidur, tidak makan kekenyangan, memasang alarm, niat karena Allah).',
      '4. Susunlah "Kartu Tips Bangun Malam Anak Saleh".',
      '5. Bagikan tips tersebut kepada teman-teman di kelas.'
    ],
    output: 'Kartu Tips Bangun Tahajud & Lembar Solusi Pembiasaan Ibadah Malam.',
    teacherNote: 'Kreativitas tips dan relevansi solusi untuk anak usia SD disesuaikan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI INTERAKTIF: PETUALANGAN DETEKTIF SHALAT SUNAH
// =========================================================================
export const KELAS4_P4_QUEST_STEPS: QuestStep[] = [
  {
    id: 1,
    title: 'Pos 1: Rahasia Shalat Rawatib Subuh',
    scenarioTitle: 'Tantangan Sebelum Shalat Fardu',
    scenarioStory: 'Subuh telah berkumandang. Ahmad berwudhu dan hendak melaksanakan shalat di masjid. Sebelum shalat Subuh berjamaah dimulai, Ahmad ingin mengerjakan shalat sunah Rawatib.',
    questionPrompt: 'Manakah jenis shalat sunah Rawatib yang BENAR dikerjakan oleh Ahmad sebelum shalat Subuh?',
    options: [
      {
        id: '1a',
        text: 'Ahmad mengerjakan 2 rakaat Rawatib Qabliyah Subuh yang keutamaannya lebih baik dari dunia dan isinya.',
        isCorrect: true,
        explanation: 'Benar! Shalat Rawatib Qabliyah Subuh (2 rakaat) sangat dianjurkan (muakkad) dan tidak ada ba\'diyah Subuh.'
      },
      {
        id: '1b',
        text: 'Ahmad mengerjakan 2 rakaat Rawatib Ba\'diyah Subuh setelah salam shalat Subuh.',
        isCorrect: false,
        explanation: 'Kurang tepat! Setelah shalat Subuh TIDAK ada shalat sunah Ba\'diyah.'
      },
      {
        id: '1c',
        text: 'Ahmad mengerjakan 4 rakaat shalat Dhuha langsung di waktu Subuh.',
        isCorrect: false,
        explanation: 'Salah! Shalat Dhuha hanya dikerjakan setelah matahari terbit, bukan saat Subuh.'
      }
    ]
  },
  {
    id: 2,
    title: 'Pos 2: Istana Surga 12 Rakaat',
    scenarioTitle: 'Tantangan Menghitung Rakaat Rawatib Muakkad',
    scenarioStory: 'Rasulullah saw. berjanji bahwa siapa saja yang menjaga 12 rakaat shalat sunah Rawatib sehari semalam, Allah membangunkan rumah di surga.',
    questionPrompt: 'Manakah susunan 12 rakaat Rawatib muakkad sehari semalam yang tepat?',
    options: [
      {
        id: '2a',
        text: '2 rakaat Qabliyah Subuh, 4 rakaat Qabliyah Zuhur, 2 rakaat Ba\'diyah Zuhur, 2 rakaat Ba\'diyah Magrib, dan 2 rakaat Ba\'diyah Isya.',
        isCorrect: true,
        explanation: 'Sempurna! 2 + 4 + 2 + 2 + 2 = 12 rakaat Rawatib muakkad yang dijanjikan istana surga.'
      },
      {
        id: '2b',
        text: '2 rakaat Ba\'diyah Subuh, 2 rakaat Ba\'diyah Asar, dan 8 rakaat Dhuha.',
        isCorrect: false,
        explanation: 'Salah! Subuh dan Asar tidak memiliki ba\'diyah.'
      },
      {
        id: '2c',
        text: '12 rakaat sekaligus dikerjakan pada malam hari.',
        isCorrect: false,
        explanation: 'Kurang tepat! Rawatib terbagi sebelum dan sesudah 5 waktu shalat fardu.'
      }
    ]
  },
  {
    id: 3,
    title: 'Pos 3: Cahaya Pagi Shalat Dhuha',
    scenarioTitle: 'Tantangan Waktu & Keutamaan Dhuha',
    scenarioStory: 'Pada hari Minggu pukul 08.00 pagi, Fatimah telah merapikan kamarnya dan mandi. Ia ingin mengisi waktu pagi dengan ibadah sunah memohon keberkahan rezeki dan kelancaran belajar.',
    questionPrompt: 'Bagaimanakah ketentuan pelaksanaan shalat Dhuha yang benar dilakukan Fatimah?',
    options: [
      {
        id: '3a',
        text: 'Mengerjakan 2 atau 4 rakaat shalat Dhuha (salam setiap 2 rakaat) lalu membaca doa rezeki halal.',
        isCorrect: true,
        explanation: 'Hebat! Shalat Dhuha dikerjakan di waktu pagi (pukul 07.00 - 11.00) minimal 2 rakaat.'
      },
      {
        id: '3b',
        text: 'Menunggu sampai matahari tepat di atas kepala (pukul 12.00 siang).',
        isCorrect: false,
        explanation: 'Salah! Saat matahari tepat di tengah langit (sebelum Zuhur) dilarang shalat.'
      },
      {
        id: '3c',
        text: 'Tidur kembali sampai waktu Zuhur tiba.',
        isCorrect: false,
        explanation: 'Kurang tepat! Menyia-nyiakan waktu Dhuha yang penuh keberkahan.'
      }
    ]
  },
  {
    id: 4,
    title: 'Pos 4: Keheningan Malam Shalat Tahajud',
    scenarioTitle: 'Tantangan Sepertiga Malam Terakhir',
    scenarioStory: 'Pukul 03.00 dini hari sebelum Subuh, suasana sangat tenang. Rizki terbangun dari tidurnya, berwudhu, dan berniat mendekatkan diri kepada Allah Swt.',
    questionPrompt: 'Manakah cara melaksanakan shalat Tahajud yang paling utama dilakukan Rizki?',
    options: [
      {
        id: '4a',
        text: 'Mengerjakan shalat Tahajud minimal 2 rakaat setelah bangun tidur, membaca doa, dan menutupnya dengan shalat Witir.',
        isCorrect: true,
        explanation: 'Luar biasa! Tahajud dikerjakan setelah tidur di sepertiga malam terakhir, dianjurkan ditutup Witir.'
      },
      {
        id: '4b',
        text: 'Langsung shalat Tahajud tanpa tidur terlebih dahulu sejak sore hari.',
        isCorrect: false,
        explanation: 'Kurang tepat! Syarat utama shalat Tahajud adalah dikerjakan setelah tidur malam.'
      },
      {
        id: '4c',
        text: 'Shalat Tahajud dilakukan saat matahari sudah terbit.',
        isCorrect: false,
        explanation: 'Salah! Batas waktu Tahajud berakhir begitu masuk waktu Subuh.'
      }
    ]
  },
  {
    id: 5,
    title: 'Pos 5: Puncak Hikmah Shalat Sunah',
    scenarioTitle: 'Tantangan Meneladani Akhlak Ibadah',
    scenarioStory: 'Seseorang yang terbiasa menjaga shalat wajib, shalat Rawatib, Dhuha, dan Tahajud akan merasakan dampak luar biasa dalam kehidupan sehari-hari.',
    questionPrompt: 'Manakah hikmah utama membiasakan shalat sunah bagi seorang murid kelas 4?',
    options: [
      {
        id: '5a',
        text: 'Hati menjadi tenang, lebih fokus belajar, terbiasa disiplin bangun pagi/malam, dan mendapat ridha Allah.',
        isCorrect: true,
        explanation: 'Benar sekali! Shalat sunah membentuk pribadi disiplin, tenang, cerdas, dan bertaqwa.'
      },
      {
        id: '5b',
        text: 'Menjadi sombong dan memamerkan ibadahnya di media sosial.',
        isCorrect: false,
        explanation: 'Salah! Sombong (riya) merusak pahala ibadah.'
      },
      {
        id: '5c',
        text: 'Merasa lelah dan malas mengikuti pelajaran di sekolah.',
        isCorrect: false,
        explanation: 'Salah! Ibadah yang benar justru memberikan ketenangan dan energi positif.'
      }
    ]
  }
];

// =========================================================================
// 4. EVALUASI PEMBELAJARAN (HOTS & COMPUTATIONAL THINKING)
// =========================================================================

// A. PILIHAN GANDA (10 Soal)
export const EVALUASI_P4_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Hukum melaksanakan shalat sunah dalam ajaran Islam adalah...',
    options: [
      'A. Apabila dikerjakan mendapat pahala, ditinggalkan mendapat dosa besar',
      'B. Apabila dikerjakan mendapat pahala, ditinggalkan tidak berdosa',
      'C. Wajib dikerjakan oleh setiap muslim dewasa',
      'D. Dilarang dikerjakan jika tidak diawasi guru'
    ],
    correctAnswerIndex: 1,
    explanation: 'Shalat sunah jika dikerjakan berpahala, ditinggalkan tidak berdosa, tetapi menjadi penyempurna shalat fardu.'
  },
  {
    id: 2,
    question: 'Perhatikan firman Allah Swt. berikut:\n"إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ"\n(QS. Al-\'Ankabut: 45). Ayat tersebut menegaskan bahwa ibadah shalat berfungsi untuk...',
    arabic: 'إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ',
    options: [
      'A. Mencegah dari perbuatan keji dan mungkar',
      'B. Menambah kekayaan harta benda di dunia',
      'C. Memamerkan kesalehan kepada tetangga',
      'D. Menghilangkan rasa lapar dan dahaga'
    ],
    correctAnswerIndex: 0,
    explanation: 'QS. Al-\'Ankabut: 45 menegaskan shalat mencegah perbuatan keji dan mungkar.'
  },
  {
    id: 3,
    question: 'Shalat sunah yang pelaksanaannya menyertai shalat fardu, baik dikerjakan sebelum (qabliyah) maupun sesudah (ba\'diyah), dinamakan...',
    options: [
      'A. Shalat Sunah Dhuha',
      'B. Shalat Sunah Tahajud',
      'C. Shalat Sunah Rawatib',
      'D. Shalat Sunah Istikharah'
    ],
    correctAnswerIndex: 2,
    explanation: 'Shalat Rawatib adalah shalat sunah pendamping shalat fardu (qabliyah & ba\'diyah).'
  },
  {
    id: 4,
    question: 'Di antara shalat fardu berikut, shalat yang TIDAK MEMILIKI shalat sunah Ba\'diyah (sesudah shalat fardu) adalah...',
    options: [
      'A. Zuhur dan Isya',
      'B. Subuh dan Asar',
      'C. Magrib dan Isya',
      'D. Zuhur dan Magrib'
    ],
    correctAnswerIndex: 1,
    explanation: 'Shalat Subuh dan Asar tidak memiliki shalat sunah Ba\'diyah.'
  },
  {
    id: 5,
    question: 'Rasulullah saw. bersabda: "Barang siapa menjaga 12 rakaat shalat sunah setiap hari, Allah akan membangunkan baginya sebuah..." (HR. Muslim)',
    options: [
      'A. Kebun buah yang luas di dunia',
      'B. Rumah / Istana di surga',
      'C. Mahkota emas permata',
      'D. Kapal laut yang megah'
    ],
    correctAnswerIndex: 1,
    explanation: 'H.R. Muslim menyebutkan balasan menjaga 12 rakaat Rawatib adalah dibangunkan rumah di surga.'
  },
  {
    id: 6,
    question: 'Waktu pelaksanaan shalat sunah Dhuha yang paling tepat adalah...',
    options: [
      'A. Pagi hari setelah matahari terbit (sekitar 15-20 menit terbit) hingga menjelang masuk waktu Zuhur',
      'B. Tepat jam 12.00 siang saat matahari di tengah langit',
      'C. Setelah shalat Asar sampai matahari terbenam',
      'D. Tengah malam setelah bangun tidur'
    ],
    correctAnswerIndex: 0,
    explanation: 'Shalat Dhuha dikerjakan pagi hari setelah terbit matahari s.d. sebelum masuk waktu Zuhur.'
  },
  {
    id: 7,
    question: 'Syarat utama pelaksanaan shalat sunah Tahajud yang membedakannya dengan shalat malam lainnya adalah...',
    options: [
      'A. Dikerjakan berjamaah di lapangan terbuka',
      'B. Dikerjakan pada malam hari setelah tidur terlebih dahulu',
      'C. Dikerjakan sambil membaca doa Al-Fatihah 100 kali',
      'D. Dikerjakan tanpa menggunakan wudhu'
    ],
    correctAnswerIndex: 1,
    explanation: 'Shalat Tahajud wajib dilakukan setelah bangun tidur pada malam hari.'
  },
  {
    id: 8,
    question: 'Waktu yang paling utama (ijabah) untuk melaksanakan shalat Tahajud dan memanjatkan doa adalah pada...',
    options: [
      'A. Awal malam sebelum tidur jam 20.00',
      'B. Tengah hari saat jam istirahat sekolah',
      'C. Sepertiga malam terakhir (sekitar pukul 02.00 - 04.00)',
      'D. Sore hari menjelang Magrib'
    ],
    correctAnswerIndex: 2,
    explanation: 'Sepertiga malam terakhir adalah waktu paling utama dan ijabah untuk Tahajud.'
  },
  {
    id: 9,
    question: 'Perhatikan firman Allah Swt. dalam Q.S. Al-Isra\': 79 tentang Tahajud:\n"عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا"\nPotongan ayat tersebut menjanjikan bahwa orang yang rajin Tahajud akan diangkat ke...',
    arabic: 'عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا',
    options: [
      'A. Kedudukan / Tempat yang terpuji (Maqaman Mahmudah)',
      'B. Jabatan pemimpin dunia',
      'C. Kekayaan melimpah ruah',
      'D. Kebun bunga di lereng gunung'
    ],
    correctAnswerIndex: 0,
    explanation: 'Q.S. Al-Isra\': 79 menjanjikan kedudukan/tempat yang terpuji (maqaman mahmuda).'
  },
  {
    id: 10,
    question: 'Berdasarkan kisah inspiratif Rizki kelas IV, setelah terbiasa merutinkan shalat Dhuha dan Tahajud, dampak positif yang dirasakannya adalah...',
    options: [
      'A. Merasa mengantuk dan malas sekolah',
      'B. Hati menjadi tenang, lebih konsentrasi belajar, dan nilai pelajaran meningkat',
      'C. Sering terlambat datang ke sekolah',
      'D. Lupa mengerjakan tugas dari guru'
    ],
    correctAnswerIndex: 1,
    explanation: 'Rizki merasakan hatinya lebih tenang, konsentrasi meningkat, dan nilai prestasinya naik.'
  }
];

// B. PILIHAN GANDA KOMPLEKS (10 Soal)
export const EVALUASI_P4_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Pilihlah SHALAT FARDU YANG MEMILIKI SHALAT SUNAH BA\'DIYAH (SESUDAHNYA)! (Pilih lebih dari satu)',
    options: ['A. Zuhur', 'B. Magrib', 'C. Isya', 'D. Subuh'],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Zuhur, Magrib, dan Isya memiliki shalat sunah Ba\'diyah. Subuh TIDAK ada.'
  },
  {
    id: 2,
    question: 'Manakah KEUTAMAAN MELAKSANAKAN SHALAT SUNAH RAWATIB? (Pilih lebih dari satu)',
    options: [
      'A. Menyempurnakan kekurangan shalat wajib',
      'B. Dibuatkan rumah/istana di surga jika menjaga 12 rakaat',
      'C. Mendapat pahala kebaikan melimpah',
      'D. Menggantikan puasa Ramadhan yang ditinggalkan'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Penyempurna shalat wajib, pahala melimpah, dan balasan rumah di surga.'
  },
  {
    id: 3,
    question: 'Pilihlah KETENTUAN SHALAT SUNAH DHUHA YANG BENAR! (Pilih lebih dari satu)',
    options: [
      'A. Dikerjakan pada pagi hari setelah matahari terbit s.d. sebelum Zuhur',
      'B. Minimal dikerjakan 2 rakaat (salam setiap 2 rakaat)',
      'C. Membawa keberkahan rezeki halal dan pahala sedekah',
      'D. Wajib dikerjakan setelah tidur malam'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Dhuha dikerjakan pagi hari min 2 rakaat, membawa rezeki & sedekah.'
  },
  {
    id: 4,
    question: 'Manakah KETENTUAN SHALAT SUNAH TAHAJUD? (Pilih lebih dari satu)',
    options: [
      'A. Dikerjakan pada malam hari setelah tidur',
      'B. Waktu paling utama pada sepertiga malam terakhir',
      'C. Mengangkat derajat ke tempat yang terpuji (Maqaman Mahmudah)',
      'D. Hanya boleh dikerjakan tepat jam 12 malam pas'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Tahajud dilakukan setelah tidur malam, utama sepertiga malam, diangkat ke tempat terpuji.'
  },
  {
    id: 5,
    question: 'Pilihlah AMALAN ANJURAN SETELAH SELESAI SHALAT TAHAJUD! (Pilih lebih dari satu)',
    options: [
      'A. Memperbanyak doa dan memohon ampunan (istigfar)',
      'B. Membaca Al-Qur\'an dan berzikir',
      'C. Melaksanakan shalat Witir sebagai penutup',
      'D. Langsung bermain HP sampai pagi'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Anjuran setelah Tahajud: doa, istigfar, zikir, baca Al-Qur\'an, dan shalat Witir.'
  },
  {
    id: 6,
    question: 'Manakah HIKMAH MEMBIASAKAN SHALAT SUNAH BAGI MURID SD? (Pilih lebih dari satu)',
    options: [
      'A. Melatih kedisiplinan dan tanggung jawab ibadah',
      'B. Menenangkan hati dan meningkatkan konsentrasi belajar',
      'C. Memperkuat iman dan takwa kepada Allah Swt.',
      'D. Membuat tubuh lemas dan mengantuk terus'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Disiplin, hati tenang, konsentrasi belajar, dan iman kuat.'
  },
  {
    id: 7,
    question: 'Pilihlah SUSUNAN RUKUN SHALAT SUNAH YANG BENAR! (Pilih lebih dari satu)',
    options: [
      'A. Niat dan Takbiratul Ihram',
      'B. Membaca Surah Al-Fatihah, Rukuk, dan Sujud',
      'C. Tasyahud akhir dan Salam',
      'D. Makan dan minum di tengah rakaat'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Rukun shalat meliputi niat, takbir, Al-Fatihah, rukuk, sujud, tasyahud, dan salam.'
  },
  {
    id: 8,
    question: 'Pilihlah WAKTU SHALAT RAWATIB QABLIYAH! (Pilih lebih dari satu)',
    options: [
      'A. Sebelum shalat Subuh (2 rakaat)',
      'B. Sebelum shalat Zuhur (2/4 rakaat)',
      'C. Sebelum shalat Magrib (2 rakaat)',
      'D. Setelah selesai shalat Asar'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Qabliyah dikerjakan SEBELUM shalat fardu Subuh, Zuhur, Asar, Magrib, Isya.'
  },
  {
    id: 9,
    question: 'Manakah HAL YANG DAPAT DITELADANI DARI RIZKI KELAS IV? (Pilih lebih dari satu)',
    options: [
      'A. Rajin shalat Dhuha di hari libur',
      'B. Mau belajar bangun malam Tahajud bersama ayah',
      'C. Berusaha keras belajar sekaligus berdoa',
      'D. Menolak diajak ibadah oleh orang tua'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Rizki rajin Dhuha, mau Tahajud bersama ayah, dan menyeimbangkan ikhtiar & doa.'
  },
  {
    id: 10,
    question: 'Pilihlah JUMLAH RAKAAT SHALAT DHUHA YANG DIBOLEHKAN! (Pilih lebih dari satu)',
    options: ['A. 2 rakaat', 'B. 4 rakaat', 'C. 8 rakaat', 'D. 1 rakaat saja tanpa pasangan'],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Shalat Dhuha dikerjakan genap: 2, 4, 6, 8 rakaat atau lebih.'
  }
];

// C. MENJODOHKAN (5 Soal)
export const EVALUASI_P4_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Shalat Rawatib Qabliyah',
    leftArabic: 'قَبْلِيَّة',
    rightText: 'Shalat sunah yang dikerjakan SEBELUM shalat fardu'
  },
  {
    id: 2,
    leftText: 'Shalat Rawatib Ba\'diyah',
    leftArabic: 'بَعْدِيَّة',
    rightText: 'Shalat sunah yang dikerjakan SESUDAH shalat fardu'
  },
  {
    id: 3,
    leftText: 'Shalat Dhuha',
    leftArabic: 'صَلَاةُ الضُّحَىٰ',
    rightText: 'Shalat sunah pagi hari pembawa keberkahan rezeki'
  },
  {
    id: 4,
    leftText: 'Shalat Tahajud',
    leftArabic: 'صَلَاةُ التَّهَجُّدِ',
    rightText: 'Shalat sunah malam hari setelah tidur di sepertiga malam'
  },
  {
    id: 5,
    leftText: 'Maqaman Mahmudah',
    leftArabic: 'مَقَامًا مَحْمُودًا',
    rightText: 'Kedudukan yang terpuji janji Allah bagi ahli Tahajud'
  }
];

// D. BENAR ATAU SALAH DISERTAI ALASANNYA (10 Soal)
export const EVALUASI_P4_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Orang yang meninggalkan shalat sunah Rawatib akan mendapat dosa besar dan disiksa di neraka.',
    isTrue: false,
    explanation: 'SALAH. Shalat sunah jika ditinggalkan tidak mendapat dosa, tetapi rugi karena kehilangan pahala penyempurna.'
  },
  {
    id: 2,
    statement: 'Shalat sunah Ba\'diyah Subuh dikerjakan sebanyak 2 rakaat setelah salam shalat Subuh.',
    isTrue: false,
    explanation: 'SALAH. Shalat Subuh TIDAK memiliki shalat sunah Ba\'diyah.'
  },
  {
    id: 3,
    statement: 'Keutamaan menjaga 12 rakaat shalat sunah Rawatib muakkad sehari semalam adalah dibangunkan rumah di surga.',
    isTrue: true,
    explanation: 'BENAR. Sesuai hadits shahih HR. Muslim.'
  },
  {
    id: 4,
    statement: 'Shalat sunah Dhuha paling baik dikerjakan pada pagi hari sekitar 15-20 menit setelah matahari terbit hingga sebelum Zuhur.',
    isTrue: true,
    explanation: 'BENAR. Ini adalah rentang waktu utama shalat Dhuha.'
  },
  {
    id: 5,
    statement: 'Syarat utama shalat Tahajud adalah dikerjakan pada malam hari setelah tidur terlebih dahulu.',
    isTrue: true,
    explanation: 'BENAR. Tahajud secara bahasa dan istilah mensyaratkan tidur malam terlebih dahulu.'
  },
  {
    id: 6,
    statement: 'Waktu sepertiga malam terakhir (sekitar jam 02.00 - 04.00) merupakan waktu yang sangat ijabah untuk berdoa dalam shalat Tahajud.',
    isTrue: true,
    explanation: 'BENAR. Pada sepertiga malam terakhir Allah mengabulkan doa hamba-Nya.'
  },
  {
    id: 7,
    statement: 'Shalat Asar memiliki shalat sunah Ba\'diyah sebanyak 2 rakaat.',
    isTrue: false,
    explanation: 'SALAH. Shalat Asar TIDAK memiliki shalat sunah Ba\'diyah.'
  },
  {
    id: 8,
    statement: 'Membiasakan shalat Dhuha dan Tahajud membuat murid menjadi lebih tenang, disiplin, dan mudah konsentrasi belajar.',
    isTrue: true,
    explanation: 'BENAR. Sebagaimana dialami oleh Rizki dalam kisah inspiratif buku PAI.'
  },
  {
    id: 9,
    statement: 'Shalat Dhuha hanya boleh dikerjakan tepat 1 rakaat saja tanpa tasyahud.',
    isTrue: false,
    explanation: 'SALAH. Shalat Dhuha dikerjakan minimal 2 rakaat genap (salam tiap 2 rakaat).'
  },
  {
    id: 10,
    statement: 'Shalat sunah berfungsi menyempurnakan kekurangan-kekurangan yang terjadi pada shalat wajib kita.',
    isTrue: true,
    explanation: 'BENAR. Salah satu hikmah utama shalat sunah adalah penambal kekurangan shalat wajib.'
  }
];

// E. SOAL URAIAN (5 Soal)
export const EVALUASI_P4_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan pengertian shalat sunah dan sebutkan 3 hikmah membiasakan shalat sunah dalam kehidupan sehari-hari!',
    rubric: 'Skor 20: Menjelaskan arti shalat sunah (pahala jika dikerjakan, tidak dosa jika ditinggalkan) dan 3 hikmah tepat.',
    sampleAnswer: 'Shalat sunah adalah shalat yang apabila dikerjakan memperoleh pahala, sedangkan apabila ditinggalkan tidak berdosa.\n3 Hikmah membiasakan shalat sunah:\n1. Menyempurnakan kekurangan shalat wajib.\n2. Mendekatkan diri kepada Allah Swt.\n3. Menenangkan hati dan melatih kedisiplinan beribadah.'
  },
  {
    id: 2,
    question: 'Jelaskan perbedaan antara shalat sunah Rawatib Qabliyah dan Rawatib Ba\'diyah, serta sebutkan 2 shalat fardu yang tidak memiliki ba\'diyah!',
    rubric: 'Skor 20: Menjelaskan qabliyah (sebelum) & ba\'diyah (sesudah) serta menyebutkan Subuh dan Asar tidak ada ba\'diyah.',
    sampleAnswer: '• Rawatib Qabliyah: Shalat sunah yang dikerjakan SEBELUM shalat fardu.\n• Rawatib Ba\'diyah: Shalat sunah yang dikerjakan SESUDAH shalat fardu.\n2 Shalat fardu yang TIDAK memiliki ba\'diyah adalah Shalat Subuh dan Shalat Asar.'
  },
  {
    id: 3,
    question: 'Jelaskan ketentuan waktu, jumlah rakaat, dan keutamaan shalat sunah Dhuha!',
    rubric: 'Skor 20: Menyebutkan waktu pagi (terbit matahari s.d. sebelum Zuhur), rakaat (min 2 rakaat), dan keutamaan (rezeki & sedekah).',
    sampleAnswer: '• Waktu: Pagi hari (15-20 menit setelah terbit matahari) hingga sebelum masuk waktu Zuhur.\n• Jumlah Rakaat: Minimal 2 rakaat, dapat dikerjakan 4, 6, 8 rakaat (salam tiap 2 rakaat).\n• Keutamaan: Memperoleh pahala sedekah persendian, dimudahkan rezeki halal, dan menenangkan hati.'
  },
  {
    id: 4,
    question: 'Mengapa shalat Tahajud dilaksanakan pada sepertiga malam terakhir? Sebutkan keutamaan Tahajud berdasarkan Q.S. Al-Isra\': 79!',
    rubric: 'Skor 20: Menjelaskan keutamaan sepertiga malam (doa dikabulkan) dan arti tempat terpuji (maqaman mahmuda).',
    sampleAnswer: 'Sepertiga malam terakhir adalah waktu paling utama karena suasana sangat tenang dan Allah mengabulkan doa-doa hamba-Nya.\nSesuai Q.S. Al-Isra\': 79, keutamaan Tahajud adalah Allah Swt. akan mengangkat orang yang bertaqwa ke kedudukan/tempat yang terpuji (Maqaman Mahmudah).'
  },
  {
    id: 5,
    question: 'Jelaskan teladan dari kisah Rizki siswa kelas IV dalam membiasakan shalat Dhuha dan Tahajud, serta bagaimana kamu menerapkannya di rumah!',
    rubric: 'Skor 20: Mengambil ikhtibar kisah Rizki dan merumuskan langkah nyata penerapan pribadi di rumah.',
    sampleAnswer: 'Teladan kisah Rizki:\n1. Rizki disiplin shalat Dhuha di hari libur dan mau belajar bangun Tahajud bersama ayahnya.\n2. Hasilnya, hatinya lebih tenang, konsentrasi belajar meningkat, dan nilai sekolahnya naik.\nPenerapan saya di rumah: Memasang alarm pukul 03.30 untuk Tahajud akhir pekan dan shalat Dhuha 2 rakaat setiap hari Minggu.'
  }
];
