// DATA KELAS 1 PEMBELAJARAN 2: Meyakini Enam Rukun Iman dan Menerapkannya dalam Kehidupan Sehari-hari
// Berdasarkan Buku Teks PAI Kelas 1 BAB 2

export interface SlideItem {
  id: number;
  badge: string;
  title: string;
  content: string;
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

export const SLIDES_KELAS1_P2: SlideItem[] = [
  {
    id: 1,
    badge: 'Tujuan Pembelajaran',
    title: 'BAB 2: Meyakini Enam Rukun Iman',
    content: 'Selamat datang di Pembelajaran 2! Hari ini kita akan belajar mengenal Enam Rukun Iman dan cara menerapkannya dalam kehidupan sehari-hari.',
    bulletPoints: [
      '1. Menjelaskan pengertian iman dengan bahasa sederhana.',
      '2. Menyebutkan enam rukun iman secara urut.',
      '3. Meyakini enam rukun iman sebagai dasar keimanan seorang muslim.',
      '4. Menunjukkan sikap yang mencerminkan keimanan dalam kehidupan sehari-hari.',
      '5. Membiasakan perilaku jujur, disiplin, santun, dan taat beribadah.'
    ]
  },
  {
    id: 2,
    badge: 'A. Apa Itu Iman?',
    title: 'Pengertian Iman Bagi Seorang Muslim',
    content: 'Iman adalah percaya dan yakin sepenuh hati kepada Allah Swt. dan semua yang diwajibkan untuk diimani.',
    bulletPoints: [
      '• Tiga Unsur Iman: Diucapkan dengan lisan, diyakini dalam hati, dan dibuktikan dengan perbuatan baik.',
      '• Bukti Orang Beriman: Rajin beribadah, menghormati orang tua, menyayangi teman, dan selalu berkata jujur.',
      '• Iman menjadi cahaya yang membimbing hidup kita agar selalu berada di jalan yang benar.'
    ],
    keyTerms: [
      { term: 'Iman', definition: 'Percaya dan yakin sepenuh hati kepada Allah Swt. dan ajaran-Nya.' }
    ]
  },
  {
    id: 3,
    badge: 'B. Rukun Iman 1',
    title: '1. Iman kepada Allah Swt.',
    content: 'Allah Swt. adalah Tuhan Yang Maha Esa, Pencipta langit, bumi, manusia, hewan, tumbuhan, dan seluruh alam semesta.',
    bulletPoints: [
      '• Kewajiban Kita: Rajin beribadah, selalu berdoa, bersyukur, taat orang tua, dan menjaga ciptaan Allah.',
      '• Contoh Penerapan: Salat tepat waktu, membaca Basmalah (Bismillah) sebelum belajar, dan membaca Hamdalah (Alhamdulillah) setelah selesai.'
    ],
    quiz: {
      question: 'Siapakah Pencipta langit, bumi, dan seluruh alam semesta?',
      options: ['A. Malaikat', 'B. Allah Swt.', 'C. Manusia'],
      correctIndex: 1,
      explanation: 'Allah Swt. adalah Tuhan Yang Maha Esa Pencipta seluruh alam semesta.'
    }
  },
  {
    id: 4,
    badge: 'B. Rukun Iman 2',
    title: '2. Iman kepada Malaikat Allah',
    content: 'Malaikat adalah makhluk ciptaan Allah Swt. yang dibuat dari cahaya (nur). Malaikat selalu taat dan tidak pernah berbuat dosa.',
    bulletPoints: [
      '• Malaikat Jibril: Menyampaikan wahyu.',
      '• Malaikat Mikail: Mengatur rezeki.',
      '• Malaikat Israfil: Meniup sangkakala.',
      '• Malaikat Izrail: Mencabut nyawa.',
      '• Malaikat Raqib: Mencatat amal baik.',
      '• Malaikat Atid: Mencatat amal buruk.'
    ],
    keyTerms: [
      { term: 'Malaikat', definition: 'Makhluk gaib ciptaan Allah dari cahaya yang selalu taat dan tidak pernah berbuat dosa.' }
    ]
  },
  {
    id: 5,
    badge: 'B. Rukun Iman 3',
    title: '3. Iman kepada Kitab-Kitab Allah',
    content: 'Allah Swt. menurunkan kitab-kitab suci sebagai petunjuk dan pedoman hidup bagi manusia.',
    bulletPoints: [
      '• Kitab Taurat diturunkan kepada Nabi Musa a.s.',
      '• Kitab Zabur diturunkan kepada Nabi Daud a.s.',
      '• Kitab Injil diturunkan kepada Nabi Isa a.s.',
      '• Kitab Al-Qur\'an diturunkan kepada Nabi Muhammad saw.',
      '• Pengamalan: Rajin membaca Al-Qur\'an dan mengamalkan reaches ajaran di dalamnya.'
    ],
    quiz: {
      question: 'Kitab suci Al-Qur\'an diturunkan kepada nabi terakhir yaitu...',
      options: ['A. Nabi Musa a.s.', 'B. Nabi Isa a.s.', 'C. Nabi Muhammad saw.'],
      correctIndex: 2,
      explanation: 'Al-Qur\'an diturunkan kepada Nabi Muhammad saw. sebagai pedoman hidup umat Islam.'
    }
  },
  {
    id: 6,
    badge: 'B. Rukun Iman 4',
    title: '4. Iman kepada Nabi dan Rasul',
    content: 'Allah Swt. mengutus para nabi dan rasul untuk mengajarkan manusia agar beribadah hanya kepada Allah Swt.',
    bulletPoints: [
      '• Nabi terakhir dan penutup para nabi adalah Nabi Muhammad saw.',
      '• Nabi Muhammad saw. menjadi teladan bagi seluruh umat manusia (Us watun Hasanah).',
      '• Contoh Penerapan: Mencintai Nabi, meneladani akhlak terpuji, rajin berselawat, dan jujur kepada sesama.'
    ]
  },
  {
    id: 7,
    badge: 'B. Rukun Iman 5',
    title: '5. Iman kepada Hari Akhir (Kiamat)',
    content: 'Hari akhir adalah hari hancurnya dunia dan berakhirnya kehidupan. Semua manusia akan dibangkitkan dan dihitung amal perbuatannya.',
    bulletPoints: [
      '• Mengapa kita harus ingat Hari Akhir? Agar kita selalu takut berbuat jahat dan bersemangat mengumpulkan pahala.',
      '• Contoh Sikap: Tidak berbohong, rajin beribadah, suka menolong teman, dan tidak mengambil barang milik orang lain.'
    ]
  },
  {
    id: 8,
    badge: 'B. Rukun Iman 6',
    title: '6. Iman kepada Qada dan Qadar',
    content: 'Qada dan Qadar adalah takdir dan ketentuan Allah Swt. terhadap semua makhluk-Nya.',
    bulletPoints: [
      '• Kita meyakini Allah Swt. tahu apa yang terbaik untuk kita.',
      '• Kewajiban Kita: Tetap berusaha giat (ikhtiar) dan selalu berdoa.',
      '• Contoh Penerapan: Belajar dengan sungguh-sungguh sebelum ujian, ikhlas dan bersabar menerima hasil, serta tidak mudah menyerah.'
    ],
    quiz: {
      question: 'Sikap kita apabila mendapatkan nilai ujian yang kurang memuaskan adalah...',
      options: ['A. Marah dan menyerah', 'B. Menerima dengan ikhlas dan belajar lebih rajin', 'C. Menyalahkan orang lain'],
      correctIndex: 1,
      explanation: 'Beriman kepada Qada dan Qadar membuat kita lapang dada dan makin giat berusaha.'
    }
  },
  {
    id: 9,
    badge: 'C. Hikmah Beriman',
    title: 'Manfaat & Hikmah Meyakini Rukun Iman',
    content: 'Orang yang beriman akan mendapatkan ketenangan dan disukai oleh Allah Swt. serta sesama manusia.',
    bulletPoints: [
      '1. Hati menjadi tenang dan tenteram.',
      '2. Semakin dekat dan taat kepada Allah Swt.',
      '3. Selalu jujur dalam perkataan dan perbuatan.',
      '4. Disiplin dalam belajar dan taat beribadah.',
      '5. Menyayangi teman dan menghormati orang tua serta guru.'
    ]
  },
  {
    id: 10,
    badge: 'D. Menerapkan Rukun Iman',
    title: 'Penerapan Beriman dalam Kehidupan Sehari-hari',
    content: 'Keimanan harus dibuktikan lewat perilaku nyata di rumah, di sekolah, dan di lingkungan sekitar.',
    bulletPoints: [
      '• Di Rumah: Berdoa sebelum/sesudah makan, bantu orang tua, ucapkan salam saat masuk rumah.',
      '• Di Sekolah: Datang tepat waktu, mendengarkan guru, bermain rukun tanpa mengejek teman.',
      '• Di Masyarakat: Menyapa tetangga dengan ramah, menjaga kebersihan, dan menolong yang membutuhkan.'
    ]
  },
  {
    id: 11,
    badge: 'E. Kisah Teladan',
    title: 'Kisah Teladan: "Anak yang Jujur"',
    content: 'Suatu hari Rafi menemukan sebuah pensil baru yang indah di halaman sekolah. Rafi sangat ingin memilikinya.',
    bulletPoints: [
      '• Namun Rafi teringat: Allah Swt. Maha Melihat dan Malaikat Raqib-Atid selalu mencatat amal perbuatannya.',
      '• Rafi lalu menyerahkan pensil itu kepada guru agar dikembalikan kepada pemiliknya.',
      '• Guru dan teman-temannya memuji kejujuran Rafi, dan Rafi merasa sangat bahagia!'
    ],
    quote: {
      text: 'Jujur membawa kepada kebaikan, dan kebaikan membawa ke surga.',
      source: 'H.R. Bukhari dan Muslim'
    }
  },
  {
    id: 12,
    badge: 'H. Refleksi & Ringkasan',
    title: 'Ringkasan Rukun Iman',
    content: 'Mari kita ingat kembali 6 Rukun Iman yang wajib diyakini setiap muslim:',
    bulletPoints: [
      '1. Iman kepada Allah Swt.',
      '2. Iman kepada Malaikat Allah.',
      '3. Iman kepada Kitab-Kitab Allah.',
      '4. Iman kepada Nabi dan Rasul.',
      '5. Iman kepada Hari Akhir.',
      '6. Iman kepada Qada dan Qadar.'
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

export const PROYEK_KELAS1_P2: ProyekItem[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 1',
    title: 'Poster "Pohon 6 Rukun Iman" Kreasi Tangan',
    objective: 'Murid membuat gambar poster berbentuk Pohon Rukun Iman dengan 6 buah daun berwarna berisi nama-nama Rukun Iman secara berurutan.',
    scenarioOrSteps: [
      '1. Siapkan kertas gambar, pensil warna/krayon, dan guntingan kertas daun.',
      '2. Gambarlah batang pohon yang kokoh sebagai simbol hati seorang muslim.',
      '3. Tuliskan 6 Rukun Iman pada 6 helai daun berwarna dari nomor 1 sampai 6.',
      '4. Tempelkan daun Rukun Iman tersebut pada ranting pohon dan warnai gambar seindah mungkin.'
    ],
    output: 'Poster Kreatif Pohon 6 Rukun Iman',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Ukuran kertas, pembagian tugas, dan penilaian kriteria keindahan disesuaikan oleh guru.'
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 2',
    title: 'Buku Harian "Jurnal Kebiasaanku yang Beriman"',
    objective: 'Murid membuat lembar pemantauan perilaku beriman selama 3 hari di rumah (berdoa sebelum makan, jujur, hormat orang tua).',
    scenarioOrSteps: [
      '1. Lipatlah selembar kertas karton menjadi format jurnal mingguan sederhana.',
      '2. Buatlah tabel dengan centang (✓) untuk kegiatan: Berdoa, Berkata Jujur, Menolong Teman, dan Salat Tepat Waktu.',
      '3. Minta stempel atau tanda tangan dari orang tua setiap malam.',
      '4. Ceritakan pengalamannya di depan kelas di akhir minggu.'
    ],
    output: 'Buku Harian Jurnal Perilaku Beriman',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Format lembar jurnal dan pendampingan orang tua diatur oleh guru kelas.'
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 1',
    title: 'Studi Kasus: Dompet Jatuh di Kantin Sekolah',
    objective: 'Murid menyelesaikan masalah moral saat menemukan uang/dompet milik orang lain di lingkungan sekolah.',
    scenarioOrSteps: [
      'Kasus: "Ahmad menemukan uang Rp5.000 di kantin sekolah saat suasana sepi. Tidak ada orang di dekatnya. Ahmad ingin sekali membeli es krim dengan uang itu, tapi ia teringat pelajaran Rukun Iman."',
      'Diskusi Pemecahan Masalah:',
      'a. Rukun Iman ke berapa yang mengingatkan Ahmad bahwa Allah Swt. Maha Melihat dan Malaikat Raqib/Atid mencatat amalnya?',
      'b. Apa tindakan paling jujur yang harus dilakukan Ahmad dengan uang yang ditemukannya?',
      'c. Mengapa berbuat jujur membuat hati kita merasa tenang?'
    ],
    output: 'Lembar Solusi & Demonstrasi Perilaku Jujur',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Jalurnya diskusi kelompok kecil yang dipandu oleh guru.'
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 2',
    title: 'Analisis Kejadian: Sedih karena Nilai Ulangan Rendah',
    objective: 'Murid memecahkan masalah rasa kecewa akibat gagal/nilai rendah dengan menerapkan Iman kepada Qada dan Qadar.',
    scenarioOrSteps: [
      'Kasus: "Siti menangis di sudut kelas karena nilai ulangan menggambarnya tidak sesuai harapan. Ia merasa putus asa dan tidak mau belajar lagi."',
      'Diskusi Pemecahan Masalah:',
      'a. Nasihat apa yang dapat kamu berikan kepada Siti berdasarkan Rukun Iman ke-6 (Iman kepada Qada dan Qadar)?',
      'b. Langkah ikhtiar (usaha) apa yang seharusnya dilakukan Siti agar hasil ulangan berikutnya lebih baik?',
      'c. Peragakan cara menghibur Siti agar ia bangkit bersemangat kembali.'
    ],
    output: 'Bagan Langkah Pemecahan Masalah & Ikhtiar',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Skenario peran dan panduan diskusi disusun oleh guru.'
  }
];

// GAMIFIKASI INTERAKTIF: Petualangan Menelusuri 6 Rukun Iman
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

export const GAME_QUESTIONS_KELAS1_P2: GameQuestion[] = [
  {
    id: 1,
    scenario: 'Manakah Rukun Iman yang PERTAMA?',
    options: [
      { text: 'Iman kepada Malaikat Allah', isCorrect: false, feedback: 'Iman kepada Malaikat adalah Rukun Iman ke-2.' },
      { text: 'Iman kepada Allah Swt.', isCorrect: true, feedback: 'Hebat! Rukun Iman pertama adalah Iman kepada Allah Swt.' },
      { text: 'Iman kepada Kitab Allah', isCorrect: false, feedback: 'Iman kepada Kitab adalah Rukun Iman ke-3.' }
    ],
    badgeEarned: 'Lencana Bintang Tauhid'
  },
  {
    id: 2,
    scenario: 'Siapakah nama Malaikat Allah yang bertugas menyampaikan wahyu kepada para Nabi?',
    options: [
      { text: 'Malaikat Mikail', isCorrect: false, feedback: 'Malaikat Mikail bertugas mengatur rezeki.' },
      { text: 'Malaikat Jibril', isCorrect: true, feedback: 'Pintar! Malaikat Jibril bertugas menyampaikan wahyu.' },
      { text: 'Malaikat Izrail', isCorrect: false, feedback: 'Malaikat Izrail bertugas mencabut nyawa.' }
    ],
    badgeEarned: 'Lencana Sahabat Malaikat'
  },
  {
    id: 3,
    scenario: 'Al-Qur\'an adalah kitab suci umat Islam yang diturunkan kepada nabi terakhir. Rukun Iman ke berapakah Iman kepada Kitab?',
    options: [
      { text: 'Rukun Iman ke-2', isCorrect: false, feedback: 'Rukun Iman ke-2 adalah Malaikat.' },
      { text: 'Rukun Iman ke-3', isCorrect: true, feedback: 'Tepat sekali! Iman kepada Kitab adalah Rukun Iman ke-3.' },
      { text: 'Rukun Iman ke-5', isCorrect: false, feedback: 'Rukun Iman ke-5 adalah Hari Akhir.' }
    ],
    badgeEarned: 'Lencana Pencinta Al-Qur\'an'
  },
  {
    id: 4,
    scenario: 'Rafi menemukan pensil di halaman sekolah dan mengembalikannya kepada guru. Sikap terpuji apakah yang ditunjukkan Rafi?',
    options: [
      { text: 'Sikap Penakut', isCorrect: false, feedback: 'Bukan, jujur adalah keberanian!' },
      { text: 'Sikap Jujur', isCorrect: true, feedback: 'Luar biasa! Jujur adalah bukti keimanan kepada Allah dan Malaikat.' },
      { text: 'Sikap Sombong', isCorrect: false, feedback: 'Tentu bukan, itu perbuatan tercela.' }
    ],
    badgeEarned: 'Lencana Juara Jujur'
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

export const EVALUASI_PG_KELAS1_P2: SoalPG[] = [
  {
    id: 1,
    question: 'Iman artinya percaya dan yakin sepenuh hati kepada...',
    options: ['A. Allah Swt.', 'B. Manusia', 'C. Patung'],
    correctAnswer: 0,
    explanation: 'Iman adalah percaya dan yakin sepenuh hati kepada Allah Swt.'
  },
  {
    id: 2,
    question: 'Jumlah Rukun Iman ada...',
    options: ['A. 5 perkara', 'B. 6 perkara', 'C. 10 perkara'],
    correctAnswer: 1,
    explanation: 'Rukun Iman berjumlah 6 perkara.'
  },
  {
    id: 3,
    question: 'Rukun Iman yang pertama adalah Iman kepada...',
    options: ['A. Malaikat', 'B. Allah Swt.', 'C. Kitab-kitab'],
    correctAnswer: 1,
    explanation: 'Rukun Iman yang pertama adalah Iman kepada Allah Swt.'
  },
  {
    id: 4,
    question: 'Malaikat diciptakan oleh Allah Swt. dari...',
    options: ['A. Tanah', 'B. Cahaya (Nur)', 'C. Api'],
    correctAnswer: 1,
    explanation: 'Malaikat diciptakan dari cahaya (nur).'
  },
  {
    id: 5,
    question: 'Malaikat yang bertugas mencatat amal baik manusia adalah...',
    options: ['A. Raqib', 'B. Atid', 'C. Izrail'],
    correctAnswer: 0,
    explanation: 'Malaikat Raqib mencatat amal baik.'
  },
  {
    id: 6,
    question: 'Kitab suci Al-Qur\'an diturunkan kepada Nabi...',
    options: ['A. Musa a.s.', 'B. Isa a.s.', 'C. Muhammad saw.'],
    correctAnswer: 2,
    explanation: 'Al-Qur\'an diturunkan kepada Nabi Muhammad saw.'
  },
  {
    id: 7,
    question: 'Nabi dan rasul terakhir pilihan Allah Swt. adalah...',
    options: ['A. Nabi Adam a.s.', 'B. Nabi Ibrahim a.s.', 'C. Nabi Muhammad saw.'],
    correctAnswer: 2,
    explanation: 'Nabi Muhammad saw. adalah nabi dan rasul terakhir.'
  },
  {
    id: 8,
    question: 'Hari berahirnya seluruh kehidupan di alam dunia disebut hari...',
    options: ['A. Raya', 'B. Akhir / Kiamat', 'C. Libur'],
    correctAnswer: 1,
    explanation: 'Hari berahirnya dunia adalah Hari Akhir.'
  },
  {
    id: 9,
    question: 'Sebelum belajar, sebaiknya kita membaca kalimat...',
    options: ['A. Hamdalah', 'B. Basmalah', 'C. Takbir'],
    correctAnswer: 1,
    explanation: 'Sebelum belajar hendaknya membaca Basmalah (Bismillah).'
  },
  {
    id: 10,
    question: 'Anak yang beriman jika menemukan barang milik orang lain akan...',
    options: ['A. Menyembunyikannya', 'B. Mengembalikannya', 'C. Menjualnya'],
    correctAnswer: 1,
    explanation: 'Orang beriman akan bersikap jujur dan mengembalikan barang temuan.'
  }
];

export const EVALUASI_PGK_KELAS1_P2: SoalPGK[] = [
  {
    id: 1,
    question: 'Pilihlah DUA sikap yang menunjukkan ciri anak yang beriman! (Pilih 2 jawaban)',
    options: [
      'A. Berkata jujur kepada orang tua',
      'B. Suka mengejek teman',
      'C. Rajin melaksanakan salat',
      'D. Malas membaca Al-Qur\'an'
    ],
    correctAnswers: [0, 2],
    explanation: 'Berkata jujur dan rajin salat adalah ciri anak yang beriman.'
  },
  {
    id: 2,
    question: 'Pilihlah DUA kitab suci yang diturunkan oleh Allah Swt.! (Pilih 2 jawaban)',
    options: [
      'A. Kitab Taurat',
      'B. Kitab Al-Qur\'an',
      'C. Kamus Bahasa',
      'D. Buku Dongeng'
    ],
    correctAnswers: [0, 1],
    explanation: 'Taurat dan Al-Qur\'an adalah kitab suci yang diturunkan Allah Swt.'
  }
];

export const EVALUASI_MENJODOHKAN_KELAS1_P2: SoalMenjodohkan[] = [
  {
    id: 1,
    statement: 'Malaikat yang bertugas menyampaikan wahyu',
    matchOption: 'Jibril'
  },
  {
    id: 2,
    statement: 'Kitab suci yang diturunkan kepada Nabi Musa a.s.',
    matchOption: 'Taurat'
  }
];

export const ALL_MATCH_OPTIONS_P2 = [
  'Jibril',
  'Mikail',
  'Taurat',
  'Injil',
  'Al-Qur\'an'
];

export const EVALUASI_BENAR_SALAH_KELAS1_P2: SoalBenarSalah[] = [
  {
    id: 1,
    statement: 'Rukun Iman berjumlah 6 perkara dan wajib diyakini setiap muslim.',
    isCorrect: true,
    sampleReason: 'Benar, rukun iman ada 6 perkara.'
  },
  {
    id: 2,
    statement: 'Malaikat Atid bertugas mencatat seluruh amal kebaikan manusia.',
    isCorrect: false,
    sampleReason: 'Salah, yang mencatat amal baik adalah Malaikat Raqib. Atid mencatat amal buruk.'
  }
];

export const EVALUASI_URAIAN_KELAS1_P2: SoalUraian[] = [
  {
    id: 1,
    question: 'Sebutkan 6 Rukun Iman secara berurutan!',
    sampleAnswer: '1. Iman kepada Allah Swt.\n2. Iman kepada Malaikat Allah\n3. Iman kepada Kitab-Kitab Allah\n4. Iman kepada Nabi dan Rasul\n5. Iman kepada Hari Akhir\n6. Iman kepada Qada dan Qadar'
  },
  {
    id: 2,
    question: 'Sebutkan 2 contoh perilaku jujur yang bisa kamu lakukan di sekolah!',
    sampleAnswer: '1. Mengembalikan pensil teman yang tertinggal.\n2. Berkata jujur saat ditanya guru dan tidak menyontek saat ulangan.'
  },
  {
    id: 3,
    question: '(Computational Thinking - Pola Urutan): Susunlah kembali Rukun Iman yang teracak berikut agar menjadi urutan yang benar!\nAcakan: [Iman kepada Kitab], [Iman kepada Allah], [Iman kepada Malaikat]',
    sampleAnswer: 'Urutan yang benar:\n1. Iman kepada Allah Swt.\n2. Iman kepada Malaikat Allah\n3. Iman kepada Kitab-Kitab Allah'
  },
  {
    id: 4,
    question: '(HOTS - Penerapan): Mengapa kita harus tetap rajin belajar sebelum ujian, padahal hasil ujian sudah menjadi takdir (Qada dan Qadar) dari Allah Swt.?',
    sampleAnswer: 'Karena Allah Swt. memerintahkan kita untuk berikhtiar (berusaha sungguh-sungguh) dan berdoa. Hasil yang terbaik akan diberikan Allah kepada hamba yang rajin berusaha.'
  }
];
