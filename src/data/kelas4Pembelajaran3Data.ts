// Data Lengkap Kelas 4 Pembelajaran 3 berdasarkan PDF Resmi BAB 3:
// Menerapkan Akhlak Terpuji kepada Anggota Keluarga Inti dan Anggota Keluarga Lainnya

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

export interface CrosswordClue {
  num: number;
  direction: 'across' | 'down';
  answer: string;
  clue: string;
  row: number; // 0-indexed position in grid
  col: number; // 0-indexed position in grid
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
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 4 PEMBELAJARAN 3)
// =========================================================================
export const KELAS4_P3_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Pengertian Akhlak Terpuji (Akhlakul Karimah)',
    subtitle: 'Budi Pekerti Mulia Teladan Nabi Muhammad saw.',
    iconName: 'Heart',
    points: [
      '• Akhlak merupakan perilaku atau budi pekerti yang tertanam dalam diri seseorang dan tercermin dalam sikap serta perbuatannya sehari-hari.',
      '• Akhlak terpuji (akhlakul karimah) adalah perilaku baik yang sesuai dengan ajaran Allah Swt. dan dicontohkan oleh Nabi Muhammad saw.',
      '• Rasulullah saw. diutus untuk menyempurnakan akhlak mulia manusia.'
    ],
    arabicExamples: [
      {
        arabic: 'إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ',
        latin: 'Innamā bu\'ithtu li-utammima ṣāliḥal-akhlāq',
        meaning: 'Sesungguhnya aku diutus untuk menyempurnakan akhlak yang mulia.',
        note: 'H.R. Ahmad — Menegaskan tujuan utama risalah Nabi Muhammad saw.'
      }
    ],
    highlightBox: {
      title: '🌟 Inti Pembelajaran',
      content: 'Akhlak mulia dimulai dari lingkungan terkecil yaitu keluarga inti di rumah baru kemudian meluas ke sekolah dan masyarakat.',
      type: 'tip'
    }
  },
  {
    id: 2,
    title: '2. Pentingnya Berakhlak Mulia dalam Keluarga',
    subtitle: 'Keluarga Sebagai Sekolah Pertama Karakter Anak',
    iconName: 'Home',
    points: [
      '• Keluarga merupakan lingkungan pendidikan pertama dan utama bagi setiap anak.',
      '• Di dalam keluargalah anak belajar tentang kasih sayang, sopan santun, tanggung jawab, dan kepedulian.',
      '• Jika setiap anggota keluarga berakhlak baik, rumah menjadi damai, harmonis, saling menghargai, penuh kasih sayang, serta nyaman untuk belajar dan beribadah.',
      '• Sebaliknya, akhlak yang buruk menimbulkan pertengkaran, permusuhan, dan hilangnya rasa saling percaya.'
    ]
  },
  {
    id: 3,
    title: '3. Akhlak Terpuji kepada Orang Tua (Ayah dan Ibu)',
    subtitle: 'Anggota Keluarga Inti Utama dan Perintah Berbakti',
    iconName: 'Users',
    points: [
      '• Keluarga inti terdiri atas: Ayah, Ibu, dan Anak.',
      '• Ayah dan ibu berkewajiban mendidik, membimbing, melindungi, serta memenuhi kebutuhan anak.',
      '• Anak wajib menghormati, menaati, dan membantu kedua orang tua.',
      '• Berbakti kepada orang tua (birrul walidain) adalah perintah langsung dari Allah Swt.'
    ],
    arabicExamples: [
      {
        arabic: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا',
        latin: 'Wa qaḍā rabbuka allā ta\'budū illā iyyāhu wa bil-wālidayni iḥsānā',
        meaning: 'Dan Tuhanmu telah memerintahkan agar kamu jangan menyembah selain Dia dan hendaklah berbuat baik kepada kedua orang tua.',
        note: 'Q.S. Al-Isra\': 23 — Berbakti kepada orang tua berdampingan dengan tauhid.'
      }
    ]
  },
  {
    id: 4,
    title: '4. Bentuk-Bentuk Berbakti kepada Ayah dan Ibu',
    subtitle: 'Sopan Santun, Taat Nasihat, Membantu & Mendoakan',
    iconName: 'CheckSquare',
    points: [
      '1. Berbicara dengan Sopan: Gunakan bahasa santun dan lembut, hindari berkata kasar, membentak, atau memotong pembicaraan.',
      '2. Menaati Nasihat Orang Tua: Selama nasihat tidak bertentangan dengan agama Islam.',
      '3. Membantu Pekerjaan Rumah: Menyapu lantai, mencuci piring, merapikan tempat tidur, menyiram tanaman, dan menjaga adik.',
      '4. Mendoakan Orang Tua: Senantiasa mendoakan kasih sayang Allah untuk mereka.',
      '5. Bersikap Jujur: Menjaga kepercayaan orang tua.'
    ],
    arabicExamples: [
      {
        arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
        latin: 'Rabbi irḥamhumā kamā rabbayānī ṣaghīrā',
        meaning: 'Ya Tuhanku, sayangilah keduanya sebagaimana mereka telah menyayangiku sejak kecil.',
        note: 'Doa untuk kedua orang tua yang wajib diamalkan setiap hari.'
      }
    ]
  },
  {
    id: 5,
    title: '5. Akhlak Terpuji kepada Saudara Kandung',
    subtitle: 'Hidup Rukun Bersama Kakak dan Adik',
    iconName: 'HeartHandshake',
    points: [
      '• Saudara kandung adalah teman terdekat dalam rumah tangga.',
      '• Islam mengajarkan agar kita hidup rukun dan saling menyayangi.',
      '• Perilaku baik kepada saudara:',
      '  - Saling menyayangi & tidak bertengkar.',
      '  - Berbagi makanan & bermain bersama.',
      '  - Saling membantu belajar.',
      '  - Menjaga barang milik saudara.',
      '  - Meminta maaf jika berbuat salah.',
      '• Apabila ada perbedaan pendapat, selesaikan dengan musyawarah dan saling memaafkan.'
    ]
  },
  {
    id: 6,
    title: '6. Akhlak Terpuji kepada Kakek dan Nenek',
    subtitle: 'Menghormati Orang Tua Dari Ayah atau Ibu',
    iconName: 'Smile',
    points: [
      '• Kakek dan nenek merupakan orang tua dari ayah atau ibu kita.',
      '• Kewajiban cucu yang saleh/salehah:',
      '  - Menghormati dan berbicara dengan sopan.',
      '  - Membantu ketika mereka memerlukan bantuan.',
      '  - Mendengarkan nasihat dan cerita mereka dengan penuh hormat.',
      '  - Menjenguk ketika sakit dan mendoakan kesehatan serta kebahagiaan mereka.',
      '• Kasih sayang kepada kakek dan nenek adalah bagian penting dari akhlak mulia.'
    ]
  },
  {
    id: 7,
    title: '7. Akhlak kepada Paman, Bibi & Kerabat (Keluarga Besar)',
    subtitle: 'Menjaga Tali Silaturahmi dengan Kerabat',
    iconName: 'Users',
    points: [
      '• Keluarga besar terdiri atas: Paman, Bibi, Sepupu, Keponakan, dan kerabat lainnya.',
      '• Hubungan baik dengan keluarga besar harus dijaga melalui silaturahmi.',
      '• Bentuk akhlak terpuji:',
      '  - Mengucapkan salam ketika bertemu.',
      '  - Berbicara santun & menghormati yang lebih tua.',
      '  - Menyayangi yang lebih muda.',
      '  - Membantu ketika saudara mengalami kesulitan.'
    ]
  },
  {
    id: 8,
    title: '8. Keutamaan dan Cara Menjaga Silaturahmi',
    subtitle: 'Dilapangkan Rezeki dan Dipanjangkan Umur',
    iconName: 'Sparkles',
    points: [
      '• Silaturahmi berarti menyambung tali hubungan persaudaraan.',
      '• Rasulullah saw. bersabda:',
      '  "Barang siapa yang ingin dilapangkan rezekinya dan dipanjangkan umurnya, maka hendaklah ia menyambung tali silaturahmi." (H.R. Bukhari dan Muslim)',
      '• Cara silaturahmi: Berkunjung ke rumah saudara, saling menghubungi, mendoakan, membantu, dan menghadiri acara keluarga.'
    ]
  },
  {
    id: 9,
    title: '9. Hikmah Berakhlak Mulia dalam Keluarga',
    subtitle: 'Keberkahan Hidup Dunia dan Akhirat',
    iconName: 'Award',
    points: [
      '1. Memperoleh ridha Allah Swt.',
      '2. Mendapatkan kasih sayang orang tua.',
      '3. Mempererat hubungan persaudaraan dan menciptakan rumah yang harmonis.',
      '4. Melatih sikap tanggung jawab, peduli, dan santun.',
      '5. Menjadi bekal penting untuk hubungan baik di sekolah dan masyarakat.'
    ]
  },
  {
    id: 10,
    title: '10. Kisah Inspiratif: Rafi Anak yang Tanggung Jawab',
    subtitle: 'Teladan Membantu Orang Tua dan Menghormati Kakek Nenek',
    iconName: 'Heart',
    points: [
      '📖 Kisah Rafi di Rumah:',
      'Suatu sore, Rafi melihat ibunya sibuk membersihkan rumah sendirian. Tanpa diminta, Rafi mengambil sapu dan menyapu halaman, membantu mencuci piring, serta merapikan ruang tamu. Ibu merasa bahagia dan ayah memuji tanggung jawab Rafi.',
      '',
      'Pada hari Minggu, Rafi berkunjung ke rumah kakek dan nenek. Rafi mencium tangan mereka, membawakan barang bawaan, dan mendengarkan cerita kakek nenek dengan santun.',
      '',
      'Perilaku Rafi membuktikan bahwa anak yang terbiasa menghormati keluarga akan lebih mudah menghormati guru, teman, dan masyarakat.'
    ]
  }
];

// =========================================================================
// 2. PENUGASAN PROYEK MURID (2 PjBL + 2 PBL) - Sesuai Kebijakan Guru
// =========================================================================
export const KELAS4_P3_PROJECTS: ProjectTask[] = [
  {
    id: 'p3_pjbl_1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Pohon Silsilah Keluarga & Kartu Doa Orang Tua',
    subtitle: 'Proyek Membuat Bagan Silsilah Keluarga Besar dan Kaligrafi Doa',
    objective: 'Peserta didik mampu mengkreasikan bagan silsilah keluarga (ayah, ibu, saudara, kakek, nenek, paman, bibi) serta menuliskan doa kedua orang tua.',
    steps: [
      '1. Siapkan kertas manila / gambar A3, foto atau gambar anggota keluarga, dan alat mewarnai.',
      '2. Buatlah gambar bagan pohon silsilah keluarga inti (Ayah, Ibu, Anak) dan keluarga besar (Kakek, Nenek, Paman, Bibi, Sepupu).',
      '3. Di bagian bawah pohon, buatlah "Kartu Doa Kedua Orang Tua" bertuliskan bahasa Arab, latin, dan artinya.',
      '4. Tuliskan 3 bentuk janji perbuatan membantu orang tua di rumah.',
      '5. Presentasikan karya pohon silsilah keluarga di depan kelas.'
    ],
    output: 'Poster Bagan Pohon Silsilah Keluarga & Kartu Doa A3.',
    teacherNote: 'Kerapian bagan, kelengkapan nama kerabat, dan kebenaran harakat tulisan doa disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p3_pjbl_2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Jurnal Pekan Akhlak Mulia di Rumah (7 Hari)',
    subtitle: 'Proyek Catatan Pembiasaan Membantu Orang Tua & Rukun Saudara',
    objective: 'Peserta didik mampu membiasakan sikap membantu pekerjaan rumah dan menjaga kerukunan dengan saudara selama satu minggu.',
    steps: [
      '1. Buatlah tabel Jurnal Harian 7 Hari pada buku saku/kertas HVS.',
      '2. Isilah kegiatan harian: (a) Pekerjaan rumah yang dibantu (menyapu, merapikan kamar, cuci piring), (b) Kebaikan kepada saudara/adik, (c) Pengucapan doa orang tua.',
      '3. Mintalah tanda tangan apresiasi dari Ayah/Ibu setiap malam.',
      '4. Dokumentasikan dengan 1 foto kegiatan membantu orang tua.',
      '5. Kumpulkan jurnal beserta foto kepada guru PAI.'
    ],
    output: 'Jurnal Pekan Akhlak Mulia 7 Hari berespons tanda tangan orang tua.',
    teacherNote: 'Kriteria kelengkapan laporan harian dan keabsahan tanda tangan disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p3_pbl_1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Analisis Kasus: "Mengapa Doni dan Adiknya Sering Bertengkar Merekutkan Mainan?"',
    subtitle: 'Solusi Pemecahan Masalah Konflik Saudara Kandung',
    objective: 'Peserta didik mampu menganalisis penyebab pertengkaran antar saudara dan merumuskan langkah damai berlandaskan akhlak terpuji.',
    steps: [
      '1. Bacalah studi kasus: "Doni (kelas 4) sering berebut konsol game dan mainan dengan adiknya (kelas 2). Doni sering membentak adiknya hingga adiknya menangis dan suasana rumah menjadi bising dan tidak harmonis."',
      '2. Identifikasi masalah: Mengapa perilaku Doni bertentangan dengan ajaran Islam? Dampak apa yang terjadi pada suasana rumah?',
      '3. Diskusikan solusi kelompok: Bagaimana cara Doni dan adiknya berbagi mainan dan menyelesaikan perbedaan pendapat secara musyawarah?',
      '4. Buatlah "5 Aturan Rumah Damai dan Rukun".',
      '5. Simulasikan dialog musyawarah kakak-adik di depan kelas.'
    ],
    output: 'Laporan Solusi Studi Kasus & Poster "5 Aturan Rumah Damai".',
    teacherNote: 'Rubrik penilaian keaktifan diskusi kelompok dan kedalaman analisis disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p3_pbl_2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Studi Kasus Kesopanan: "Menghadapi Nasihat Orang Tua Tanpa Membantah"',
    subtitle: 'Strategi Berkomunikasi Santun Saat Diingatkan Belajar',
    objective: 'Peserta didik mampu memecahkan masalah sikap menggerutu atau membentak saat diingatkan orang tua untuk belajar.',
    steps: [
      '1. Amati kasus: "Rani sering menggerutu dan mematikan TV dengan kasar saat ibunya menyuruhnya berhenti menonton dan mulai belajar PAI."',
      '2. Analisis kesalahan Rani berdasarkan Q.S. Al-Isra\': 23 (larangan berkata kasar/membentak orang tua).',
      '3. Jawab pertanyaan: Mengapa mendengarkan nasihat orang tua membawa keberkahan?',
      '4. Susunlah "Panduan Berbicara Santun Kepada Orang Tua saat Diingatkan Belajar".',
      '5. Presentasikan panduan tersebut kepada teman-teman.'
    ],
    output: 'Lembar Panduan Berbicara Santun & Komitmen Akhlak Anak Saleh.',
    teacherNote: 'Format pengisian panduan dan teknik evaluasi sikap disesuaikan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI INTERAKTIF: TEKA-TEKI SILANG (TTS) AKHLAK KELUARGA
// =========================================================================
export const KELAS4_P3_CROSSWORD_CLUES: CrosswordClue[] = [
  {
    num: 1,
    direction: 'across',
    answer: 'KARIMAH',
    clue: 'Akhlak terpuji dalam bahasa Arab disebut akhlakul...',
    row: 0,
    col: 0
  },
  {
    num: 2,
    direction: 'down',
    answer: 'KAPAK',
    clue: 'Bukan barang, tetapi doa orang tua harus dibaca dengan rasa...',
    row: 0,
    col: 0
  },
  {
    num: 3,
    direction: 'across',
    answer: 'SILATURAHMI',
    clue: 'Menyambung tali persaudaraan dengan kerabat disebut...',
    row: 2,
    col: 0
  },
  {
    num: 4,
    direction: 'down',
    answer: 'NENEK',
    clue: 'Ibu dari ayah atau ibu kita dinamakan...',
    row: 2,
    col: 7
  },
  {
    num: 5,
    direction: 'across',
    answer: 'SOPAN',
    clue: 'Berbicara dengan orang tua harus dengan bahasa yang...',
    row: 4,
    col: 2
  },
  {
    num: 6,
    direction: 'down',
    answer: 'RUKUN',
    clue: 'Hidup bersama saudara kandung hendaknya selalu...',
    row: 4,
    col: 4
  }
];

// =========================================================================
// 4. EVALUASI PEMBELAJARAN (HOTS & COMPUTATIONAL THINKING)
// =========================================================================

// A. PILIHAN GANDA (10 Soal)
export const EVALUASI_P3_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Secara istilah, ajaran Islam menyebut perilaku atau budi pekerti baik yang dicontohkan oleh Nabi Muhammad saw. sebagai...',
    options: [
      'A. Akhlak Mazmumah',
      'B. Akhlak Karimah (Terpuji)',
      'C. Akhlak Sayyiah',
      'D. Akhlak Madhmumah'
    ],
    correctAnswerIndex: 1,
    explanation: 'Akhlak karimah adalah perilaku mulia/terpuji yang sesuai dengan ajaran Allah dan contoh Rasulullah saw.'
  },
  {
    id: 2,
    question: 'Perhatikan hadits Nabi Muhammad saw. berikut:\n"إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ"\n(HR. Ahmad). Hadits tersebut menjelaskan bahwa tujuan utama diutusnya Nabi Muhammad saw. adalah untuk...',
    arabic: 'إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ',
    options: [
      'A. Menjadi raja terbesar di Arab',
      'B. Menyempurnakan akhlak yang mulia',
      'C. Mengumpulkan harta kekayaan',
      'D. Menguasai perdagangan internasional'
    ],
    correctAnswerIndex: 1,
    explanation: 'Rasulullah saw. bersabda bahwa beliau diutus untuk menyempurnakan akhlak mulia manusia.'
  },
  {
    id: 3,
    question: 'Anggota keluarga inti dalam sebuah rumah tangga terdiri dari...',
    options: [
      'A. Ayah, Ibu, Kakek, dan Nenek',
      'B. Ayah, Ibu, Paman, dan Bibi',
      'C. Ayah, Ibu, dan Anak',
      'D. Kakek, Nenek, Sepupu, dan Keponakan'
    ],
    correctAnswerIndex: 2,
    explanation: 'Keluarga inti terdiri atas ayah, ibu, dan anak.'
  },
  {
    id: 4,
    question: 'Perhatikan potongan ayat Q.S. Al-Isra\': 23 berikut:\n"وقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا"\nAyat tersebut memerintahkan umat Islam untuk berbuat baik kepada...',
    arabic: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا',
    options: [
      'A. Kedua orang tua (Ayah dan Ibu)',
      'B. Tetangga sebelah rumah',
      'C. Orang kaya dan berkuasa',
      'D. Musuh-musuh Islam'
    ],
    correctAnswerIndex: 0,
    explanation: 'Q.S. Al-Isra\': 23 menegaskan perintah berbakti dan berbuat baik kepada kedua orang tua.'
  },
  {
    id: 5,
    question: 'Di bawah ini yang merupakan contoh perilaku membantu orang tua di rumah bernilai ibadah adalah...',
    options: [
      'A. Bermain game seharian sampai lupa waktu',
      'B. Menyapu lantai, mencuci piring, dan merapikan tempat tidur',
      'C. Menuntut uang jajan berlebihan kepada ibu',
      'D. Membiarkan adik menangis sendirian'
    ],
    correctAnswerIndex: 1,
    explanation: 'Membantu pekerjaan rumah seperti menyapu, mencuci piring, dan merapikan kamar adalah amal saleh bernilai ibadah.'
  },
  {
    id: 6,
    question: 'Doa untuk kedua orang tua yang diajarkan dalam Al-Qur\'an berbunyi: "Rabbi irḥamhumā kamā rabbayānī..." Lanjutan doa tersebut yang benar adalah...',
    arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    options: [
      'A. Kabīrā',
      'B. Ṣaghīrā',
      'C. \'Alīmā',
      'D. Karīmā'
    ],
    correctAnswerIndex: 1,
    explanation: 'Doa lengkapnya adalah: "Rabbi irḥamhumā kamā rabbayānī ṣaghīrā" (Ya Tuhanku, sayangilah keduanya sebagaimana mereka menyayangiku sejak kecil).'
  },
  {
    id: 7,
    question: 'Apabila terjadi perbedaan pendapat atau salah paham dengan saudara kandung di rumah, cara terbaik untuk menyelesaikannya adalah...',
    options: [
      'A. Berkelahi dan saling membentak',
      'B. Musyawarah dengan tenang dan saling memaafkan',
      'C. Menyimpan dendam dan tidak mau menyapa',
      'D. Merusak barang-barang milik saudara'
    ],
    correctAnswerIndex: 1,
    explanation: 'Perbedaan pendapat antar saudara harus diselesaikan dengan musyawarah santun dan saling memaafkan.'
  },
  {
    id: 8,
    question: 'Kakek dan nenek merupakan orang tua dari ayah atau ibu kita. Bentuk akhlak terpuji saat mengunjungi kakek dan nenek adalah...',
    options: [
      'A. Berbicara kasar karena kakek pendengarannya berkurang',
      'B. Mencium tangan, berbicara sopan, dan membantu saat diperlukan',
      'C. Acuh tak acuh dan asyik main HP sendiri',
      'D. Meminta uang jajan secara paksa'
    ],
    correctAnswerIndex: 1,
    explanation: 'Menghormati kakek nenek dilakukan dengan mencium tangan, berbicara santun, dan mendengarkan nasihat mereka.'
  },
  {
    id: 9,
    question: 'Rasulullah saw. bersabda bahwa orang yang ingin dilapangkan rezekinya dan dipanjangkan umurnya hendaklah...',
    options: [
      'A. Bekerja tanpa istirahat',
      'B. Menyambung tali silaturahmi',
      'C. Tidur sepanjang hari',
      'D. Membeli barang-barang mewah'
    ],
    correctAnswerIndex: 1,
    explanation: 'H.R. Bukhari dan Muslim menjelaskan keutamaan silaturahmi yaitu melapangkan rezeki dan memanjangkan umur.'
  },
  {
    id: 10,
    question: 'Berdasarkan kisah inspiratif Rafi, ketika Rafi melihat ibunya sibuk menyapu dan merapikan rumah, tindakan yang dilakukan Rafi adalah...',
    options: [
      'A. Tanpa diminta segera mengambil sapu dan membantu pekerjaan ibu',
      'B. Pura-pura tidur agar tidak disuruh menyapu',
      'C. Pergi bermain sepak bola dengan teman-teman',
      'D. Meminta upah uang jajan jika disuruh membantu'
    ],
    correctAnswerIndex: 0,
    explanation: 'Rafi dengan kesadaran dan keikhlasan membantu ibunya menyapu dan merapikan rumah tanpa diminta.'
  }
];

// B. PILIHAN GANDA KOMPLEKS (10 Soal)
export const EVALUASI_P3_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Pilihlah ANGGOTA KELUARGA INTI dalam rumah tangga! (Pilih lebih dari satu)',
    options: ['A. Ayah', 'B. Ibu', 'C. Anak', 'D. Tetangga sebelah'],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Keluarga inti terdiri atas ayah, ibu, dan anak.'
  },
  {
    id: 2,
    question: 'Manakah BENTUK BERBAKTI KEPADA AYAH DAN IBU? (Pilih lebih dari satu)',
    options: [
      'A. Berbicara dengan bahasa yang santun dan lembut',
      'B. Menaati nasihat baik orang tua',
      'C. Membantu pekerjaan rumah seperti menyapu dan mencuci piring',
      'D. Membentak jika tidak diberi uang jajan'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Berbicara sopan, taat nasihat, dan membantu pekerjaan rumah adalah bentuk bakti.'
  },
  {
    id: 3,
    question: 'Pilihlah PERILAKU TERPUJI KEPADA SAUDARA KANDUNG! (Pilih lebih dari satu)',
    options: [
      'A. Saling menyayangi dan tidak bertengkar',
      'B. Berbagi makanan dan bermain bersama',
      'C. Saling membantu dalam belajar',
      'D. Suka mengejek dan merusak mainan saudara'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Sayang, berbagi, dan membantu belajar menciptakan kerukunan antar saudara.'
  },
  {
    id: 4,
    question: 'Manakah AKHLAK TERPUJI KEPADA KAKEK DAN NENEK? (Pilih lebih dari satu)',
    options: [
      'A. Berbicara dengan santun dan hormat',
      'B. Membantu ketika mereka memerlukan bantuan',
      'C. Mendengarkan nasihat dan cerita mereka',
      'D. Acuh tak acuh dan mengabaikan mereka'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Menghormati, membantu, dan mendengarkan nasihat kakek nenek adalah akhlak mulia.'
  },
  {
    id: 5,
    question: 'Pilihlah ANGGOTA KELUARGA BESAR (KERABAT)! (Pilih lebih dari satu)',
    options: ['A. Paman', 'B. Bibi', 'C. Sepupu', 'D. Orang yang tidak dikenal'],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Keluarga besar mencakup paman, bibi, sepupu, keponakan, kakek, nenek, dan kerabat.'
  },
  {
    id: 6,
    question: 'Manakah CARA MENJAGA SILATURAHMI DENGAN KERABAT? (Pilih lebih dari satu)',
    options: [
      'A. Berkunjung ke rumah saudara',
      'B. Saling mendoakan dan membantu saat berduka/kesulitan',
      'C. Mengucapkan salam ketika bertemu',
      'D. Memutus komunikasi karena salah paham kecil'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Berkunjung, mendoakan, membantu, dan mengucapkan salam mempererat silaturahmi.'
  },
  {
    id: 7,
    question: 'Pilihlah HIKMAH BERAKHLAK MULIA DALAM KELUARGA! (Pilih lebih dari satu)',
    options: [
      'A. Memperoleh ridha Allah Swt. dan sayang orang tua',
      'B. Mencegah terjadinya pertengkaran dalam rumah',
      'C. Menciptakan rumah yang harmonis dan penuh kedamaian',
      'D. Menjadi dipuji sombong oleh orang lain'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Akhlak mulia mendatangkan ridha Allah, kasih sayang, kedamaian, dan keharmonisan.'
  },
  {
    id: 8,
    question: 'Manakah PEKERJAAN RUMAH YANG DAPAT DIBANTU OLEH MURID KELAS 4? (Pilih lebih dari satu)',
    options: [
      'A. Menyapu dan mengepel lantai',
      'B. Merapikan tempat tidur sendiri',
      'C. Menyiram tanaman di halaman',
      'D. Memperbaiki instalasi listrik tegangan tinggi'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Menyapu, merapikan tempat tidur, dan menyiram tanaman cocok dan aman dibantu murid.'
  },
  {
    id: 9,
    question: 'Pilihlah JANJI ALLAH SWT. DAN RASULULLAH BAGI ORANG YANG SILATURAHMI! (Pilih lebih dari satu)',
    options: [
      'A. Dilapangkan rezekinya',
      'B. Dipanjangkan umurnya dalam kebaikan',
      'C. Mendapat kasih sayang kerabat',
      'D. Diberi kebebasan melanggar aturan agama'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Silaturahmi melapangkan rezeki, memanjangkan umur, dan mempererat tali persaudaraan.'
  },
  {
    id: 10,
    question: 'Pilihlah TELADAN DARI KISAH RAFI DALAM BUKU PAI! (Pilih lebih dari satu)',
    options: [
      'A. Membantu ibu menyapu dan mencuci piring tanpa diminta',
      'B. Mencium tangan kakek dan nenek saat berkunjung',
      'C. Mendengarkan cerita kakek nenek dengan santun',
      'D. Menolak diajak mengunjungi rumah kakek nenek'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Rafi meneladani anak berbakti: rajin membantu orang tua dan sangat santun kepada kakek nenek.'
  }
];

// C. MENJODOHKAN (5 Soal)
export const EVALUASI_P3_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Keluarga Inti',
    leftArabic: 'الأُسْرَةُ الصَّغِيرَةُ',
    rightText: 'Terdiri atas Ayah, Ibu, dan Anak'
  },
  {
    id: 2,
    leftText: 'Akhlakul Karimah',
    leftArabic: 'الأَخْلَاقُ الْكَرِيمَةُ',
    rightText: 'Perilaku terpuji yang dicontohkan Nabi Muhammad saw.'
  },
  {
    id: 3,
    leftText: 'Birrul Walidain',
    leftArabic: 'بِرُّ الْوَالِدَيْنِ',
    rightText: 'Berbakti dan berbuat baik kepada kedua orang tua'
  },
  {
    id: 4,
    leftText: 'Silaturahmi',
    leftArabic: 'صِلَةُ الرَّحِمِ',
    rightText: 'Menyambung tali persaudaraan dengan keluarga besar'
  },
  {
    id: 5,
    leftText: 'Rabbi irhamhuma...',
    leftArabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    rightText: 'Doa memohon kasih sayang Allah untuk Ayah dan Ibu'
  }
];

// D. BENAR ATAU SALAH DISERTAI ALASANNYA (10 Soal)
export const EVALUASI_P3_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Akhlak terpuji hanya perlu diterapkan di sekolah saat dilihat oleh guru saja.',
    isTrue: false,
    explanation: 'SALAH. Akhlak terpuji harus diterapkan di mana saja, terutama dimulai dari rumah dan keluarga.'
  },
  {
    id: 2,
    statement: 'Membantu menyapu lantai dan merapikan tempat tidur merupakan contoh berbakti kepada orang tua yang bernilai ibadah.',
    isTrue: true,
    explanation: 'BENAR. Setiap kebaikan membantu pekerjaan orang tua dengan ikhlas dicatat sebagai pahala ibadah.'
  },
  {
    id: 3,
    statement: 'Ayat Al-Qur\'an Q.S. Al-Isra\': 23 melarang seorang anak membentak atau berkata "ah" kepada kedua orang tua.',
    arabic: 'فَلَا تَقُلْ لَهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا',
    isTrue: true,
    explanation: 'BENAR. Surah Al-Isra\': 23 secara tegas melarang membentak dan perkataan kasar kepada orang tua.'
  },
  {
    id: 4,
    statement: 'Apabila terjadi perbedaan pendapat dengan saudara kandung, kita dibolehkan berkelahi dan merusak mainannya.',
    isTrue: false,
    explanation: 'SALAH. Perbedaan pendapat dengan saudara harus diselesaikan secara damai melalui musyawarah dan saling memaafkan.'
  },
  {
    id: 5,
    statement: 'Rasulullah saw. diutus ke muka bumi salah satu tujuan utamanya adalah untuk menyempurnakan akhlak yang mulia.',
    isTrue: true,
    explanation: 'BENAR. Sesuai H.R. Ahmad: "Innamā bu\'ithtu li-utammima ṣāliḥal-akhlāq".'
  },
  {
    id: 6,
    statement: 'Kakek dan nenek adalah kerabat jauh yang tidak perlu dihormati dan didoakan kesehatan serta kebahagiaannya.',
    isTrue: false,
    explanation: 'SALAH. Kakek dan nenek adalah orang tua dari ayah/ibu kita. Menghormati mereka adalah bagian dari akhlak mulia.'
  },
  {
    id: 7,
    statement: 'Menyambung tali silaturahmi dengan paman, bibi, dan sepupu dapat dilapangkan rezeki dan dipanjangkan umurnya.',
    isTrue: true,
    explanation: 'BENAR. Hadits shahih Bukhari & Muslim menegaskan keutamaan silaturahmi dalam melapangkan rezeki dan memanjangkan umur.'
  },
  {
    id: 8,
    statement: 'Menaati nasihat orang tua hukumnya wajib selama nasihat tersebut tidak bertentangan dengan ajaran agama Islam.',
    isTrue: true,
    explanation: 'BENAR. Selama nasihat orang tua baik dan tidak menyuruh maksiat, anak wajib menaatinya.'
  },
  {
    id: 9,
    statement: 'Dalam kisah Rafi, Rafi baru mau membantu ibunya jika diberikan hadiah atau uang jajan yang banyak.',
    isTrue: false,
    explanation: 'SALAH. Rafi membantu ibunya dengan tulus tanpa diminta dan tanpa mengharapkan balasan uang jajan.'
  },
  {
    id: 10,
    statement: 'Rumah yang anggotanya saling berakhlak mulia akan terasa damai, harmonis, dan nyaman untuk beribadah.',
    isTrue: true,
    explanation: 'BENAR. Akhlak mulia menciptakan kedamaian, keharmonisan, dan suasana rumah yang diberkahi Allah.'
  }
];

// E. SOAL URAIAN (5 Soal)
export const EVALUASI_P3_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan pengertian akhlak terpuji (akhlakul karimah) dan sebutkan 3 contoh akhlak terpuji kepada orang tua di rumah!',
    rubric: 'Skor 20: Menjelaskan arti akhlak terpuji dan menyebutkan 3 contoh tepat di rumah.',
    sampleAnswer: 'Akhlak terpuji (akhlakul karimah) adalah perilaku baik yang sesuai dengan ajaran Allah Swt. dan dicontohkan Nabi Muhammad saw.\n3 Contoh kepada orang tua:\n1. Berbicara dengan santun dan lembut.\n2. Menaati nasihat baik kedua orang tua.\n3. Membantu pekerjaan rumah (menyapu, merapikan tempat tidur).'
  },
  {
    id: 2,
    question: 'Tuliskan lafazh latin dan arti dari doa untuk kedua orang tua yang sering kita baca setelah shalat!',
    rubric: 'Skor 20: Menuliskan lafazh latin "Rabbi irhamhuma..." dan artinya dengan tepat.',
    sampleAnswer: 'Lafazh Latin: "Rabbi irḥamhumā kamā rabbayānī ṣaghīrā"\nArtinya: "Ya Tuhanku, sayangilah keduanya sebagaimana mereka telah menyayangiku sejak kecil."'
  },
  {
    id: 3,
    question: 'Mengapa menjaga kerukunan dengan saudara kandung di rumah sangat penting? Sebutkan 2 cara menjaga kerukunan tersebut!',
    rubric: 'Skor 20: Menjelaskan pentingnya kerukunan rumah tangga dan 2 cara nyata.',
    sampleAnswer: 'Kerukunan saudara penting agar suasana rumah menjadi damai, harmonis, dan tidak ada pertengkaran yang menyedihkan orang tua.\n2 Cara menjaga kerukunan:\n1. Saling berbagi makanan dan mainan secara ikhlas.\n2. Saling membantu dalam belajar dan meminta maaf jika salah.'
  },
  {
    id: 4,
    question: 'Sebutkan 3 keutamaan dan cara menyambung tali silaturahmi dengan keluarga besar (paman, bibi, kakek, nenek)!',
    rubric: 'Skor 20: Menyebutkan keutamaan silaturahmi (rezeki lapang, umur berkah, dicintai Allah) dan cara penerapannya.',
    sampleAnswer: '3 Keutamaan silaturahmi:\n1. Dilapangkan rezekinya oleh Allah Swt.\n2. Dipanjangkan umurnya dalam kebaikan.\n3. Mempererat persaudaraan keluarga besar.\nCara penerapan: Berkunjung ke rumah kerabat, mendoakan kesehatan mereka, dan mengucapkan salam santun.'
  },
  {
    id: 5,
    question: 'Jelaskan hikmah yang dapat dipetik dari kisah kebaikan Rafi dalam membantu ibunya dan menghormati kakek neneknya!',
    rubric: 'Skor 20: Menjelaskan hikmah inisiatif membantu orang tua tanpa diminta dan rasa hormat kepada sesepuh keluarga.',
    sampleAnswer: 'Hikmah kisah Rafi:\n1. Anak yang berakhlak mulia akan peka dan membantu orang tua dengan ikhlas tanpa perlu disuruh.\n2. Menghormati kakek dan nenek membahagiakan hati orang tua dan membawa keberkahan hidup.\n3. Kebiasaan berakhlak baik di rumah akan membentuk kepribadian yang santun di sekolah dan masyarakat.'
  }
];
