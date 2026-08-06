// DATA KELAS 1 PEMBELAJARAN 1: Mahir Membaca dan Menulis Huruf Hijaiyah dengan Makhraj yang Benar
// Berdasarkan Buku Teks PAI Kelas 1 BAB 1

export interface SlideItem {
  id: number;
  badge: string;
  title: string;
  content: string;
  bulletPoints?: string[];
  arabicText?: string;
  keyTerms?: { term: string; definition: string }[];
  quote?: { text: string; source: string };
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const SLIDES_KELAS1_P1: SlideItem[] = [
  {
    id: 1,
    badge: 'Tujuan Pembelajaran',
    title: 'BAB 1: Mahir Membaca dan Menulis Huruf Hijaiyah',
    content: 'Selamat datang di Kelas 1! Hari ini kita akan belajar membaca dan menulis huruf hijaiyah dengan makhraj (tempat keluar bunyi) yang benar dan rapi.',
    bulletPoints: [
      '1. Mengenal huruf-huruf hijaiyah dengan benar.',
      '2. Membaca huruf hijaiyah sesuai makhraj (tempat keluarnya huruf).',
      '3. Menulis huruf hijaiyah dengan bentuk yang benar.',
      '4. Membedakan bacaan huruf hijaiyah berharakat fathah, kasrah, dammah, tanwin, sukun, tasydid, dan mad.',
      '5. Menunjukkan semangat belajar Al-Qur\'an sebagai pedoman hidup seorang muslim.'
    ],
    quote: {
      text: 'Sebaik-baik kamu adalah orang yang belajar Al-Qur\'an dan mengajarkannya.',
      source: 'H.R. Bukhari'
    }
  },
  {
    id: 2,
    badge: 'A. Mengapa Belajar Hijaiyah?',
    title: 'Al-Qur\'an Kitab Suci Umat Islam',
    content: 'Al-Qur\'an adalah kitab suci umat Islam yang diturunkan oleh Allah Swt. kepada Nabi Muhammad saw. Al-Qur\'an ditulis menggunakan huruf hijaiyah.',
    bulletPoints: [
      '• Mengapa harus belajar? Belajar huruf hijaiyah adalah langkah pertama agar bisa membaca Al-Qur\'an dengan baik.',
      '• Membaca Al-Qur\'an adalah ibadah yang bernilai pahala berlipat ganda dari Allah Swt.',
      '• Semakin rajin kita belajar, semakin bagus dan fasih bacaan Al-Qur\'an kita.'
    ],
    keyTerms: [
      { term: 'Al-Qur\'an', definition: 'Kitab suci umat Islam firman Allah Swt. yang diturunkan kepada Nabi Muhammad saw.' },
      { term: 'Huruf Hijaiyah', definition: 'Huruf-huruf bahasa Arab yang digunakan dalam penulisan Al-Qur\'an.' }
    ]
  },
  {
    id: 3,
    badge: 'B. Mengenal Huruf Hijaiyah',
    title: '29 Huruf Hijaiyah Utama',
    content: 'Huruf hijaiyah berjumlah 29 huruf. Setiap huruf memiliki bentuk, nama, dan bunyi yang berbeda-beda.',
    arabicText: 'ا  ب  ت  ث  ج  ح  خ  د  ذ  ر  ز  س  ش  ص  ض  ط  ظ  ع  غ  ف  ق  ك  ل  م  ن  هـ  و  ي',
    bulletPoints: [
      '• Huruf pertama adalah Alif (ا) dan huruf terakhir adalah Ya (ي).',
      '• Kita harus membaca setiap huruf dengan jelas sesuai nama dan bunyinya.'
    ],
    quiz: {
      question: 'Berapakah jumlah huruf hijaiyah dasar yang ada di dalam Al-Qur\'an?',
      options: ['A. 20 huruf', 'B. 29 huruf', 'C. 35 huruf'],
      correctIndex: 1,
      explanation: 'Huruf hijaiyah berjumlah 29 huruf mulai dari Alif (ا) sampai Ya (ي).'
    }
  },
  {
    id: 4,
    badge: 'C. Mengenal Makhraj Huruf',
    title: 'Apa itu Makhraj Huruf?',
    content: 'Makhraj adalah tempat keluarnya bunyi huruf hijaiyah ketika diucapkan dari organ mulut atau tenggorokan.',
    bulletPoints: [
      '• Mengapa Makhraj Penting? Jika makhrajnya salah, maka bunyi dan arti hurufnya bisa berubah!',
      '• Membaca Al-Qur\'an harus benar makhrajnya agar ibadah kita sempurna.',
      '• Mari kita pelajari dari mana bunyi huruf-huruf hijaiyah keluar.'
    ],
    keyTerms: [
      { term: 'Makhraj', definition: 'Tempat keluarnya bunyi huruf hijaiyah saat diucapkan (bibir, lidah, tenggorokan).' }
    ]
  },
  {
    id: 5,
    badge: 'C. Makhraj: Tenggorokan & Bibir',
    title: 'Makhraj Tenggorokan & Bibir',
    content: 'Beberapa huruf keluar dari tenggorokan dan kedua bibir:',
    bulletPoints: [
      '1. Tenggorokan (Halq):',
      '   • Alif (ا) & Ha (هـ) = Tenggorokan bagian bawah.',
      '   • \'Ain (ع) & Ha (ح) = Tenggorokan bagian tengah.',
      '   • Ghain (غ) & Kha (خ) = Pangkal tenggorokan atas.',
      '2. Kedua Bibir (Syafatai):',
      '   • Ba (ب), Mim (م), Wau (و) = Kedua bibir dikatupkan/dimonyongkan.',
      '   • Fa (ف) = Bibir bawah menempel ujung gigi atas.'
    ]
  },
  {
    id: 6,
    badge: 'C. Makhraj: Lidah',
    title: 'Makhraj Bagian Lidah (Lisan)',
    content: 'Banyak huruf hijaiyah yang keluar menggunakan lidah:',
    bulletPoints: [
      '• Ujung Lidah: Ta (ت), Tsa (ث), Dal (د), Dzal (ذ), Ra (ر), Sin (س), Shad (ص), Tha (ط), Zha (ظ), Nun (ن).',
      '• Tengah Lidah: Jim (ج), Syin (ش), Ya (ي).',
      '• Pangkal Lidah: Qaf (ق), Kaf (ك).',
      '• Sisi Lidah: Dhad (ض).'
    ],
    quiz: {
      question: 'Huruf Ba (ب) dan Mim (م) keluar dari tempat makhraj mana?',
      options: ['A. Tenggorokan', 'B. Kedua Bibir', 'C. Pangkal Lidah'],
      correctIndex: 1,
      explanation: 'Huruf Ba (ب) dan Mim (م) keluar dari makhraj Kedua Bibir.'
    }
  },
  {
    id: 7,
    badge: 'D. Mengenal Harakat',
    title: 'Harakat Dasar: Fathah, Kasrah, Dammah',
    content: 'Harakat adalah tanda baca pada huruf hijaiyah agar huruf dapat dibunyikan.',
    bulletPoints: [
      '1. Fathah ( َ ) : Tanda di atas huruf, dibaca "a". Contoh: بَ = ba, تَ = ta, جَ = ja.',
      '2. Kasrah ( ِ ) : Tanda di bawah huruf, dibaca "i". Contoh: بِ = bi, تِ = ti, جِ = ji.',
      '3. Dammah ( ُ ) : Tanda seperti wau kecil di atas huruf, dibaca "u". Contoh: بُ = bu, تُ = tu, جُ = ju.'
    ],
    arabicText: 'بَ (ba)  -  بِ (bi)  -  بُ (bu)'
  },
  {
    id: 8,
    badge: 'D. Mengenal Tanwin',
    title: 'Tanda Baca Tanwin (An, In, Un)',
    content: 'Tanwin adalah harakat ganda yang menghasilkan bunyi berakhiran huruf "n":',
    bulletPoints: [
      '1. Fathatain ( ً ) : Dibaca "an". Contoh: بً = ban.',
      '2. Kasratain ( ٍ ) : Dibaca "in". Contoh: بٍ = bin.',
      '3. Dammatain ( ٌ ) : Dibaca "un". Contoh: بٌ = bun.'
    ],
    arabicText: 'بً (ban)  -  بٍ (bin)  -  بٌ (bun)'
  },
  {
    id: 9,
    badge: 'D. Sukun, Tasydid, & Mad',
    title: 'Sukun (Mati), Tasydid (Tekan), & Mad (Panjang)',
    content: 'Tanda baca khusus lainnya untuk memperjelas bacaan:',
    bulletPoints: [
      '1. Sukun ( ۡ ) : Tanda bulat mati di atas huruf. Contoh: أَبۡ = ab, مِنۡ = min.',
      '2. Tasydid / Syaddah ( ّ ) : Tanda rangkap, ditekan bunyinya. Contoh: رَبَّ = rabba, إِنَّ = inna.',
      '3. Mad : Bacaan yang dipanjangkan dua harakat (2 ketukan). Contoh: قَالَ = qaala, نُوحُ = nuuhu.'
    ],
    quiz: {
      question: 'Tanda baca apakah yang menyebabkan huruf dibaca mati?',
      options: ['A. Fathah', 'B. Sukun', 'C. Tasydid'],
      correctIndex: 1,
      explanation: 'Sukun adalah tanda baca yang membuat huruf hijaiyah dibaca mati.'
    }
  },
  {
    id: 10,
    badge: 'E. Latihan Membaca',
    title: 'Praktik Membaca Rangkaian Huruf',
    content: 'Mari kita baca huruf-huruf hijaiyah berharakat dengan suara yang jelas dan makhraj yang benar!',
    bulletPoints: [
      '• Kelompok 1: أ  ب  ت  ث  (A - Ba - Ta - Tsa)',
      '• Kelompok 2: ج  ح  خ  (Ja - Ha - Kha)',
      '• Kelompok 3: د  ذ  ر  ز  (Da - Dza - Ra - Za)',
      '• Kelompok 4: س  ش  ص  ض  (Sa - Sya - Sha - Dha)',
      '• Kelompok 5: ط  ظ  ع  غ  (Tha - Zha - \'A - Gha)',
      '• Kelompok 6: ف  ق  ك  ل  (Fa - Qa - Ka - La)',
      '• Kelompok 7: م  ن  هـ  و  ي  (Ma - Na - Ha - Wa - Ya)'
    ]
  },
  {
    id: 11,
    badge: 'F. Latihan Menulis',
    title: 'Menulis Huruf Hijaiyah dengan Rapi',
    content: 'Menulis huruf hijaiyah dimulai dari arah KANAN ke KIRI.',
    bulletPoints: [
      '• Aturan Menulis: Pegang pensil dengan benar, ikuti garis putus-putus atau pola huruf.',
      '• Arah Penulisan: Selalu tarik garis dari atas ke bawah dan kanan ke kiri.',
      '• Keindahan: Menulis dengan rapi melatih ketelitian dan kerapian jemari kita.'
    ]
  },
  {
    id: 12,
    badge: 'H. Hikmah Belajar',
    title: 'Keutamaan Belajar Al-Qur\'an',
    content: 'Membaca Al-Qur\'an adalah ibadah yang sangat dicintai oleh Allah Swt.',
    bulletPoints: [
      '• Setiap satu huruf Al-Qur\'an yang kita baca mendapat 10 kebaikan pahala.',
      '• Anak yang rajin belajar huruf hijaiyah akan lebih cepat dan lancar membaca Al-Qur\'an.',
      '• Menyenangkan hati orang tua dan guru dengan prestasi mengaji Al-Qur\'an.'
    ]
  },
  {
    id: 13,
    badge: 'I. Refleksi & Ringkasan',
    title: 'Ringkasan Materi Bab 1',
    content: 'Mari kita ingat kembali poin penting pembelajaran Bab 1:',
    bulletPoints: [
      '• Huruf hijaiyah berjumlah 29 huruf.',
      '• Makhraj adalah tempat keluarnya bunyi huruf (tenggorokan, bibir, lidah).',
      '• Harakat terdiri atas fathah (a), kasrah (i), dammah (u).',
      '• Tanwin terdiri atas fathatain (an), kasratain (in), dammatain (un).',
      '• Sukun (mati), Tasydid (ditekan), Mad (dipanjangkan 2 harakat).',
      '• Rajin belajar Al-Qur\'an adalah bukti cinta kita kepada Allah Swt. dan Rasul-Nya.'
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

export const PROYEK_KELAS1_P1: ProyekItem[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 1',
    title: 'Kartu Pohon Hijaiyah & Makraj Warna-Warni',
    objective: 'Murid membuat media Pohon Huruf Hijaiyah dari kertas warna berisi huruf Alif-Ya yang dikelompokkan berdasarkan warna makhraj (Bibir, Lidah, Tenggorokan).',
    scenarioOrSteps: [
      '1. Siapkan kertas karton bentuk pohon, guntingan kertas warna-warni bulat, pensil warna, dan lem.',
      '2. Tuliskan 1 huruf hijaiyah di setiap kertas bulat warna (merah untuk bibir, hijau untuk lidah, biru untuk tenggorokan).',
      '3. Tempelkan daun-daun bulat hijaiyah tersebut pada dahan pohon karton.',
      '4. Tunjukkan karya Pohon Hijaiyahmu di depan teman-teman sambil menyebutkan bunyinya.'
    ],
    output: 'Media Pohon Huruf Hijaiyah Warna-Warni',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Bahan, alat, dan pembagian tugas individu/kelompok ditentukan oleh guru.'
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 2',
    title: 'Buku Saku Sederhana "Harakat dan Bacaanku"',
    objective: 'Murid membuat buku lipat mini yang memuat huruf Ba (ب) dengan 7 variasi harakat (bā, bī, bū, ban, bin, bun, ab).',
    scenarioOrSteps: [
      '1. Lipat kertas HVS berwarna menjadi 4 halaman buku saku mini.',
      '2. Tuliskan huruf Ba (ب) besar pada tiap halaman.',
      '3. Beri harakat fathah, kasrah, dammah, tanwin, dan sukun dengan spidol warna.',
      '4. Bacakan bunyi harakat tersebut di depan guru.'
    ],
    output: 'Buku Saku Mini Harakat Hijaiyah',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Jenis kertas dan ornamen hiasan disesuaikan dengan instruksi guru.'
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 1',
    title: 'Studi Kasus: Budi Bingung Membedakan Bunyi Ba (ب) dan Fa (ف)',
    objective: 'Murid memecahkan masalah kekeliruan makhraj bunyi huruf bibir antara Ba (kedua bibir) dan Fa (bibir bawah + gigi atas).',
    scenarioOrSteps: [
      'Kasus: "Budi sering keliru mengucapkan bunyi huruf Fa (ف) menjadi Ba (ب) saat membaca Al-Qur\'an. Temannya Budi ingin membantunya."',
      'Pertanyaan Diskusi Pemecahan Masalah:',
      'a. Di manakah tempat keluar bunyi (makhraj) huruf Ba (ب)?',
      'b. Di manakah tempat keluar bunyi (makhraj) huruf Fa (ف)?',
      'c. Bagaimana cara memeragakan makhraj Fa (ف) yang benar kepada Budi agar ia tidak tertukar lagi?'
    ],
    output: 'Lembar Solusi Praktik Makhraj',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Diskusi dibimbing langsung oleh guru menggunakan alat peraga mulut.'
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 2',
    title: 'Analisis Kartu Hijaiyah Tertukar Tanpa Harakat',
    objective: 'Murid menyusun kembali urutan kartu huruf hijaiyah dan memberi harakat yang tepat setelah kartunya berhamburan.',
    scenarioOrSteps: [
      'Kasus: "Kartu huruf hijaiyah milik Siti terjatuh dan berhamburan di lantai. Siti kebingungan memisahkan mana huruf berharakat fathah (a) dan dammah (u)."',
      'Pertanyaan Pemecahan Masalah:',
      'a. Bantu Siti mengelompokkan kartu yang bertanda garis di atas (fathah) dan garis melengkung (dammah)!',
      'b. Urutkan 3 huruf pertama (Alif, Ba, Ta) dari kanan ke kiri!',
      'c. Demostrasikan cara membaca urutan huruf tersebut.'
    ],
    output: 'Laporan Urutan & Pengelompokan Harakat',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Format lembar kerja dan penilaian aktivitas disesuaikan guru.'
  }
];

// GAMIFIKASI INTERAKTIF: Petualangan Menyamakan Harakat & Makhraj Hijaiyah
export interface GameQuestion {
  id: number;
  scenario: string;
  options: {
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  badgeEarned: string;
}

export const GAME_QUESTIONS_KELAS1_P1: GameQuestion[] = [
  {
    id: 1,
    scenario: 'Huruf Ba (ب) diberi tanda garis di atas ( َ / Fathah). Bagaimanakah bunyi bacaannya?',
    options: [
      { text: 'Bi', isCorrect: false, feedback: 'Kurang tepat! Garis di bawah dibaca i (Kasrah).' },
      { text: 'Ba', isCorrect: true, feedback: 'Hebat! Fathah dibaca "a", jadi بَ dibaca Ba.' },
      { text: 'Bu', isCorrect: false, feedback: 'Kurang tepat! Dammah dibaca u.' }
    ],
    badgeEarned: 'Lencana Bintang Fathah'
  },
  {
    id: 2,
    scenario: 'Makhraj huruf manakah yang keluar dari tempat KEDUA BIBIR?',
    options: [
      { text: 'Huruf Ba (ب) dan Mim (م)', isCorrect: true, feedback: 'Pintar sekali! Ba dan Mim keluar dari kedua bibir.' },
      { text: 'Huruf Alif (ا) dan Ha (هـ)', isCorrect: false, feedback: 'Salah, Alif dan Ha keluar dari tenggorokan.' },
      { text: 'Huruf Qaf (ق) dan Kaf (ك)', isCorrect: false, feedback: 'Salah, Qaf dan Kaf dari pangkal lidah.' }
    ],
    badgeEarned: 'Lencana Makhraj Bibir'
  },
  {
    id: 3,
    scenario: 'Tanda baca apakah yang berada di bawah huruf dan menghasilkan bunyi "i"?',
    options: [
      { text: 'Fathah', isCorrect: false, feedback: 'Fathah berada di atas huruf (a).' },
      { text: 'Kasrah', isCorrect: true, feedback: 'Tepat! Kasrah berada di bawah huruf dan dibaca "i".' },
      { text: 'Dammah', isCorrect: false, feedback: 'Dammah dibaca "u".' }
    ],
    badgeEarned: 'Lencana Juara Kasrah'
  },
  {
    id: 4,
    scenario: 'Jika huruf Jim (ج) diberi tanda Tanwin Dammatain ( ٌ ), dibaca apakah huruf tersebut?',
    options: [
      { text: 'Jan', isCorrect: false, feedback: 'Jan adalah harakat Fathatain.' },
      { text: 'Jin', isCorrect: false, feedback: 'Jin adalah harakat Kasratain.' },
      { text: 'Jun', isCorrect: true, feedback: 'Luar biasa! Dammatain dibaca "un", jadi جٌ dibaca Jun.' }
    ],
    badgeEarned: 'Lencana Ahli Tanwin'
  }
];

// EVALUASI PEMBELAJARAN (10 PG, 2 PGK, 1 Menjodohkan, 3 Benar/Salah + Alasan, 4 Uraian)
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

export const EVALUASI_PG_KELAS1_P1: SoalPG[] = [
  {
    id: 1,
    question: 'Al-Qur\'an ditulis menggunakan huruf...',
    options: ['A. Latin', 'B. Hijaiyah', 'C. Angka'],
    correctAnswer: 1,
    explanation: 'Al-Qur\'an ditulis menggunakan huruf hijaiyah.'
  },
  {
    id: 2,
    question: 'Jumlah huruf hijaiyah dasar adalah...',
    options: ['A. 25 huruf', 'B. 29 huruf', 'C. 30 huruf'],
    correctAnswer: 1,
    explanation: 'Huruf hijaiyah dasar berjumlah 29 huruf.'
  },
  {
    id: 3,
    question: 'Makhraj huruf artinya tempat...',
    options: ['A. Menulis huruf', 'B. Keluarnya bunyi huruf', 'C. Mewarnai huruf'],
    correctAnswer: 1,
    explanation: 'Makhraj adalah tempat keluarnya bunyi huruf hijaiyah saat diucapkan.'
  },
  {
    id: 4,
    question: 'Tanda baca Fathah ( َ ) berada di atas huruf dan dibaca...',
    options: ['A. a', 'B. i', 'C. u'],
    correctAnswer: 0,
    explanation: 'Fathah dibaca "a".'
  },
  {
    id: 5,
    question: 'Huruf Ta (ت) diberi harakat Kasrah ( ِ ), maka dibaca...',
    options: ['A. Ta', 'B. Ti', 'C. Tu'],
    correctAnswer: 1,
    explanation: 'Kasrah dibaca "i", sehingga تِ dibaca Ti.'
  },
  {
    id: 6,
    question: 'Tanda baca Dammah ( ُ ) menghasilkan bunyi...',
    options: ['A. a', 'B. i', 'C. u'],
    correctAnswer: 2,
    explanation: 'Dammah dibaca "u".'
  },
  {
    id: 7,
    question: 'Tanda baca Tanwin Kasratain ( ٍ ) dibaca...',
    options: ['A. an', 'B. in', 'C. un'],
    correctAnswer: 1,
    explanation: 'Kasratain dibaca "in".'
  },
  {
    id: 8,
    question: 'Tanda baca Sukun ( ۡ ) membuat huruf hijaiyah dibaca...',
    options: ['A. Panjang', 'B. Mati', 'C. Rangkap'],
    correctAnswer: 1,
    explanation: 'Sukun adalah tanda huruf mati.'
  },
  {
    id: 9,
    question: 'Arah penulisan huruf hijaiyah dimulai dari arah...',
    options: ['A. Kiri ke kanan', 'B. Kanan ke kiri', 'C. Bawah ke atas'],
    correctAnswer: 1,
    explanation: 'Menulis huruf hijaiyah dimulai dari kanan ke kiri.'
  },
  {
    id: 10,
    question: 'Orang yang rajin belajar Al-Qur\'an akan mendapat...',
    options: ['A. Dosa', 'B. Pahala dari Allah Swt.', 'C. Hukuman'],
    correctAnswer: 1,
    explanation: 'Belajar dan membaca Al-Qur\'an bernilai ibadah dan pahala.'
  }
];

export const EVALUASI_PGK_KELAS1_P1: SoalPGK[] = [
  {
    id: 1,
    question: 'Pilihlah DUA huruf hijaiyah yang keluar dari makhraj KEDUA BIBIR! (Pilih 2 jawaban)',
    options: [
      'A. Huruf Ba (ب)',
      'B. Huruf Mim (م)',
      'C. Huruf Alif (ا)',
      'D. Huruf Qaf (ق)'
    ],
    correctAnswers: [0, 1],
    explanation: 'Huruf Ba (ب) dan Mim (م) keluar dari kedua bibir.'
  },
  {
    id: 2,
    question: 'Pilihlah DUA tanda baca yang termasuk jenis Tanwin! (Pilih 2 jawaban)',
    options: [
      'A. Fathatain ( ً )',
      'B. Dammatain ( ٌ )',
      'C. Sukun ( ۡ )',
      'D. Tasydid ( ّ )'
    ],
    correctAnswers: [0, 1],
    explanation: 'Fathatain dan Dammatain adalah jenis harakat tanwin.'
  }
];

export const EVALUASI_MENJODOHKAN_KELAS1_P1: SoalMenjodohkan[] = [
  {
    id: 1,
    statement: 'Tempat keluarnya bunyi huruf hijaiyah saat diucapkan',
    matchOption: 'Makhraj'
  }
];

export const ALL_MATCH_OPTIONS_P1 = [
  'Makhraj',
  'Harakat',
  'Sukun',
  'Tanwin'
];

export const EVALUASI_BENAR_SALAH_KELAS1_P1: SoalBenarSalah[] = [
  {
    id: 1,
    statement: 'Huruf Alif (ا) dan Ha (هـ) keluar dari makhraj tenggorokan.',
    isCorrect: true,
    sampleReason: 'Benar, karena Alif dan Ha keluar dari tenggorokan bagian bawah.'
  },
  {
    id: 2,
    statement: 'Harakat Kasrah ( ِ ) membuat huruf hijaiyah dibaca "a".',
    isCorrect: false,
    sampleReason: 'Salah, karena Kasrah dibaca "i". Harakat yang dibaca "a" adalah Fathah.'
  },
  {
    id: 3,
    statement: 'Membaca Al-Qur\'an adalah ibadah yang mendapat pahala dari Allah Swt.',
    isCorrect: true,
    sampleReason: 'Benar, setiap huruf Al-Qur\'an yang dibaca mendatangkan kebaikan dan pahala.'
  }
];

export const EVALUASI_URAIAN_KELAS1_P1: SoalUraian[] = [
  {
    id: 1,
    question: 'Mengapa anak muslim harus belajar membaca huruf hijaiyah sejak kecil?',
    sampleAnswer: 'Karena Al-Qur\'an ditulis dengan huruf hijaiyah. Belajar hijaiyah adalah cara agar kita bisa membaca Al-Qur\'an dengan benar.'
  },
  {
    id: 2,
    question: 'Tuliskan bunyi bacaan dari huruf-huruf berharakat berikut ini:\na. بَ\nb. تِ\nc. جُ',
    sampleAnswer: 'a. بَ dibaca Ba\nb. تِ dibaca Ti\nc. جُ dibaca Ju'
  },
  {
    id: 3,
    question: '(Computational Thinking - Pengelompokan): Kelompokkanlah huruf-huruf berikut berdasarkan tempat makhrajnya!\nHuruf: (Ba / ب), (Ha / هـ), (Mim / م), (Alif / ا).\n- Makhraj Tenggorokan: ...\n- Makhraj Kedua Bibir: ...',
    sampleAnswer: '- Makhraj Tenggorokan: Alif (ا) dan Ha (هـ)\n- Makhraj Kedua Bibir: Ba (ب) dan Mim (م)'
  },
  {
    id: 4,
    question: '(HOTS - Penerapan): Jika kamu melihat temanmu kesulitan membaca huruf hijaiyah berharakat dammah, bagaimana caramu membantunya?',
    sampleAnswer: 'Saya akan memberitahunya dengan ramah bahwa dammah bentuknya melengkung di atas huruf dan dibaca "u", lalu mengajaknya berlatih membaca bersama.'
  }
];
