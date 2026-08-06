// DATA KELAS 1 PEMBELAJARAN 5: Kisah Nabi Adam a.s. dan Meneladani Akhlaknya
// Berdasarkan Buku Teks PAI Kelas 1 BAB V

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

export const SLIDES_KELAS1_P5: SlideItem[] = [
  {
    id: 1,
    badge: 'Tujuan Pembelajaran',
    title: 'BAB V: Kisah Nabi Adam a.s. & Meneladani Akhlaknya',
    content: 'Selamat datang di Pembelajaran 5! Hari ini kita akan mengenal kisah Nabi Adam a.s. sebagai nabi pertama dan meneladani akhlak terpujinya dalam kehidupan sehari-hari.',
    bulletPoints: [
      '1. Mengenal kisah Nabi Adam a.s. sebagai nabi pertama.',
      '2. Menceritakan secara sederhana kisah Nabi Adam a.s.',
      '3. Menjelaskan keteladanan Nabi Adam a.s.',
      '4. Menunjukkan sikap taat, jujur, rendah hati, dan bertanggung jawab.',
      '5. Meneladani akhlak Nabi Adam a.s. di rumah, sekolah, dan lingkungan sekitar.'
    ]
  },
  {
    id: 2,
    badge: 'A. Mengenal Nabi Adam a.s.',
    title: 'Manusia & Nabi Pertama',
    content: 'Nabi Adam a.s. adalah manusia pertama yang diciptakan oleh Allah Swt. sekaligus nabi pertama yang diutus untuk membimbing manusia agar selalu menyembah Allah Swt.',
    bulletPoints: [
      '• Penuh Kemuliaan: Allah Swt. mengajarkan kepada Nabi Adam berbagai nama benda sebagai tanda bahwa manusia diberi akal dan ilmu pengetahuan.',
      '• Nenek Moyang Manusia: Semua manusia yang hidup di bumi sekarang merupakan keturunan dari Nabi Adam a.s. dan istrinya, Hawa.',
      '• Kewajiban Muslim: Kita wajib menghormati dan mencintai seluruh nabi dan rasul Allah Swt.'
    ],
    keyTerms: [
      { term: 'Nabi Pertama', definition: 'Utusan Allah Swt. yang pertama kali diciptakan di muka bumi.' },
      { term: 'Akal & Ilmu', definition: 'Anugerah dari Allah Swt. yang membedakan manusia dengan makhluk lainnya.' }
    ]
  },
  {
    id: 3,
    badge: 'B. Penciptaan Nabi Adam a.s.',
    title: 'Penciptaan dari Tanah & Pembangkangan Iblis',
    content: 'Allah Swt. menciptakan Nabi Adam a.s. dari tanah, kemudian meniupkan roh ke dalam tubuh beliau sehingga hidup sebagai manusia pertama.',
    bulletPoints: [
      '• Perintah Kepada Malaikat: Allah memerintahkan para malaikat untuk menghormati Nabi Adam a.s. karena keilmuan dan kemuliaannya.',
      '• Malaikat Taat: Semua malaikat menaati perintah Allah Swt. dengan patuh.',
      '• Iblis Sombong & Membangkang: Iblis menolak menghormati Nabi Adam karena merasa dirinya lebih baik (diciptakan dari api). Kesombongan itu membuat Iblis dimurkai Allah Swt.',
      '• Pelajaran: Kesombongan adalah sifat tercela yang sangat dimurkai Allah Swt.'
    ],
    quiz: {
      question: 'Nabi Adam a.s. diciptakan oleh Allah Swt. dari...',
      options: ['A. Cahaya', 'B. Tanah', 'C. Api'],
      correctIndex: 1,
      explanation: 'Nabi Adam a.s. diciptakan dari tanah, sedangkan malaikat dari cahaya dan iblis dari api.'
    }
  },
  {
    id: 4,
    badge: 'C. Tinggal di Surga',
    title: 'Nabi Adam a.s. & Hawa di Surga',
    content: 'Allah Swt. memberikan banyak kenikmatan kepada Nabi Adam a.s. dan Hawa di dalam surga yang indah.',
    bulletPoints: [
      '• Makanan & Buah-buahan: Mereka boleh menikmati segala buah-buahan dan makanan di surga.',
      '• Satu Larangan: Allah Swt. memberikan satu larangan agar Nabi Adam dan Hawa tidak mendekati satu pohon tertentu.',
      '• Bujukan Iblis: Iblis membujuk mereka hingga tergoda dan memakan buah dari pohon yang dilarang tersebut.',
      '• Menyadari Kesalahan: Begitu melanggar, mereka segera menyadari kesalahan yang telah dilakukan.'
    ]
  },
  {
    id: 5,
    badge: 'D. Bertobat Kepada Allah Swt.',
    title: 'Sikap Jujur & Segera Bertobat',
    content: 'Setelah melakukan kesalahan, Nabi Adam a.s. tidak mencari alasan atau menyalahkan orang lain.',
    bulletPoints: [
      '• Mengakui Kesalahan: Beliau secara jujur mengakui kesalahannya dan memohon ampunan kepada Allah Swt. dengan sungguh-sungguh.',
      '• Allah Maha Pengampun: Allah Swt. menerima tobat Nabi Adam a.s. karena beliau benar-benar menyesal dan berjanji tidak mengulangi.',
      '• Pelajaran Berharga: Manusia bisa berbuat salah, tetapi harus segera bertobat, meminta maaf, dan memperbaiki diri.'
    ],
    quiz: {
      question: 'Sikap yang ditunjukkan Nabi Adam a.s. setelah melakukan kesalahan adalah...',
      options: ['A. Menyalahkan orang lain', 'B. Segera bertobat dan memohon ampun', 'C. Pura-pura tidak tahu'],
      correctIndex: 1,
      explanation: 'Nabi Adam a.s. tidak menyalahkan orang lain, melainkan segera mengakui kesalahan dan bertobat.'
    }
  },
  {
    id: 6,
    badge: 'E. Khalifah di Bumi',
    title: 'Nabi Adam a.s. Sebagai Khalifah di Bumi',
    content: 'Setelah bertobat, Allah Swt. mengutus Nabi Adam a.s. dan Hawa untuk hidup di bumi sebagai khalifah.',
    bulletPoints: [
      '• Arti Khalifah: Manusia yang bertugas menjaga, memelihara, dan memakmurkan bumi.',
      '• Tugas Khalifah Anak SD: Menjaga kebersihan lingkungan rumah & sekolah, menyayangi hewan dan tumbuhan, tidak merusak alam, serta saling membantu.',
      '• Taat Kepada Allah: Menjalankan perintah Allah Swt. dan menjauhi larangan-Nya.'
    ],
    keyTerms: [
      { term: 'Khalifah', definition: 'Pemimpin atau pengelola yang bertugas menjaga dan memakmurkan bumi.' }
    ]
  },
  {
    id: 7,
    badge: 'F. Keteladanan Akhlak',
    title: '5 Sifat Terpuji Nabi Adam a.s.',
    content: 'Banyak sifat mulia Nabi Adam a.s. yang wajib kita teladani:',
    bulletPoints: [
      '1. Taat Kepada Allah: Rajin berdoa, belajar salat, dan membaca doa sebelum beraktivitas.',
      '2. Rendah Hati (Tawaduk): Tidak sombong, mau berteman dengan siapa saja, dan menghargai orang lain.',
      '3. Jujur: Berkata apa adanya, tidak berbohong kepada orang tua/guru, dan mengakui kesalahan.',
      '4. Bertanggung Jawab: Merapikan mainan, menjaga kebersihan kelas, dan mengerjakan tugas sekolah.',
      '5. Mau Bertobat: Meminta maaf jika bersalah, berjanji tidak mengulangi, dan berusaha menjadi anak lebih baik.'
    ]
  },
  {
    id: 8,
    badge: 'G. Kisah Inspiratif',
    title: 'Kisah Fajar: "Berani Mengakui Kesalahan"',
    content: 'Suatu hari, Fajar tidak sengaja memecahkan pot bunga di kelas saat bermain bola bersama teman-temannya.',
    bulletPoints: [
      '• Sempat Takut: Awalnya Fajar takut dimarahi Bu Guru.',
      '• Teringat Nabi Adam: Fajar ingat bahwa Nabi Adam a.s. berani mengakui kesalahan tanpa berbohong.',
      '• Jujur Kepada Guru: Fajar mendatangi Bu Guru: "Bu Guru, saya tidak sengaja memecahkan pot bunga. Saya minta maaf dan berjanji akan lebih berhati-hati."',
      '• Dipuji Guru: Bu Guru tersenyum dan memuji kejujuran Fajar: "Anak yang berani mengakui kesalahan adalah anak yang baik dan bertanggung jawab."'
    ],
    quote: {
      text: 'Anak yang berani mengakui kesalahan adalah anak yang baik. Yang penting, kita belajar untuk tidak mengulanginya.',
      source: 'Pesan Moral PAI Kelas 1 Bab V'
    }
  },
  {
    id: 9,
    badge: 'H. Hikmah Utama',
    title: 'Hikmah Meneladani Nabi Adam a.s.',
    content: 'Manfaat yang kita dapatkan dengan meneladani akhlak Nabi Adam a.s.:',
    bulletPoints: [
      '1. Dijauhkan dari sifat sombong dan merasa paling hebat.',
      '2. Dicintai Allah Swt., orang tua, guru, dan teman-teman.',
      '3. Menjadi anak yang jujur, rendah hati, dan berani bertanggung jawab.',
      '4. Menjaga kelestarian lingkungan alam di sekitar kita.'
    ]
  },
  {
    id: 10,
    badge: 'Ringkasan Bab V',
    title: 'Rangkuman Kisah Nabi Adam a.s.',
    content: 'Mari kita ingat poin-poin utama Bab V:',
    bulletPoints: [
      '• Nabi Adam a.s. = Manusia & Nabi pertama diciptakan dari tanah.',
      '• Sifat Iblis = Sombong dan membangkang kepada Allah Swt.',
      '• Sifat Terpuji Nabi Adam = Taat, rendah hati, jujur, bertanggung jawab, dan mau bertobat.',
      '• Tugas Manusia di Bumi = Menjadi khalifah yang menjaga kelestarian alam.'
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

export const PROYEK_KELAS1_P5: ProyekItem[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 1',
    title: 'Pohon Kebaikan "Sifat Terpuji Nabi Adam a.s."',
    objective: 'Murid membuat poster pohon kebaikan berdaun 5 sifat teladan (Taat, Jujur, Rendah Hati, Tanggung Jawab, Mau Bertobat) dan menempelkan contoh perbuatan sehari-hari.',
    scenarioOrSteps: [
      '1. Menggambar pohon utama dengan 5 cabang besar di kertas manila/drawing paper.',
      '2. Menuliskan 5 sifat teladan Nabi Adam a.s. pada tiap daun utama.',
      '3. Menempelkan stiker/gambar kecil contoh perbuatan (seperti merapikan mainan, menyiram tanaman, minta maaf).',
      '4. Menampilkan hasil karya di papan pajangan kelas.'
    ],
    output: 'Poster Pohon Akhlak Terpuji',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Media gambar dan hiasan disesuaikan oleh guru kelas.'
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 2',
    title: 'Jurnal Cilik "Aksi Khalifah Cilik Menjaga Bumi"',
    objective: 'Murid mencatat dan memfoto 3 kegiatan nyata menjaga lingkungan (merawat tanaman, membuang sampah pada tempatnya, menghemat air) selama 3 hari.',
    scenarioOrSteps: [
      '1. Membuat buku lipat sederhana bertajuk "Aku Khalifah Cilik Penjaga Bumi".',
      '2. Melakukan aksi nyata: menyiram tanaman sekolah, membersihkan meja belajar, dan membuang sampah.',
      '3. Memberi tanda centang (✓) dan gambar/foto aksi nyata setiap hari dengan bimbingan orang tua/guru.',
      '4. Menceritakan pengalaman di depan kelas.'
    ],
    output: 'Buku Laporan Aksi Khalifah Cilik',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Pendampingan orang tua dan guru diatur sesuai situasi.'
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 1',
    title: 'Studi Kasus: Pensil Warna Teman Patah Tanpa Sengaja',
    objective: 'Murid memecahkan masalah kejujuran dan tanggung jawab saat merusakkan barang milik teman secara tidak sengaja.',
    scenarioOrSteps: [
      'Kasus: "Budi meminjam pensil warna merah milik Roni. Saat mewarnai gambar, mata pensil warna Roni patah. Budi takut Roni akan marah."',
      'Diskusi Pemecahan Masalah:',
      'a. Mengapa Budi tidak boleh menyembunyikan pensil atau menyalahkan orang lain?',
      'b. Bagaimana tindakan jujur dan berani minta maaf yang diajarkan oleh Nabi Adam a.s.?',
      'c. Simulasikan cara Budi mengembalikan pensil dan meminta maaf kepada Roni di depan kelas.'
    ],
    output: 'Lembar Solusi & Roleplay Kejujuran',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Skenario simulasi diarahkan oleh guru PAI.'
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 2',
    title: 'Analisis Sikap: Menghadapi Teman yang Sombong Memamerkan Mainan',
    objective: 'Murid menganalisis akibat dari sifat sombong seperti Iblis dan pentingnya bersikap rendah hati seperti Nabi Adam a.s.',
    scenarioOrSteps: [
      'Kasus: "Dika membawa mainan robot baru yang mahal ke sekolah. Dika berkata kepada teman-temannya bahwa mainannya paling hebat dan tidak mau mengajak teman yang mainannya biasa."',
      'Diskusi Pemecahan Masalah:',
      'a. Sifat siapa yang ditiru oleh Dika (Iblis atau Nabi Adam a.s.)?',
      'b. Mengapa Allah Swt. sangat membenci sifat sombong?',
      'c. Bagaimana nasihat santun yang dapat kita berikan kepada Dika agar mau berteman dengan semua murid tanpa membeda-bedakan?'
    ],
    output: 'Solusi Sikap Rendah Hati & Peta Sikap Sahabat',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Diskusi kelompok dibimbing guru kelas.'
  }
];

// GAMIFIKASI INTERAKTIF: Susun Kata & Urutkan Kisah Nabi Adam
export interface WordPuzzleGame {
  id: number;
  title: string;
  scrambledWords: string[];
  correctSentence: string[];
  hint: string;
  meaning: string;
  badge: string;
}

export const PUZZLE_GAMES_KELAS1_P5: WordPuzzleGame[] = [
  {
    id: 1,
    title: 'Susun Kalimat Penciptaan Nabi Adam a.s.',
    scrambledWords: ['tanah', 'diciptakan', 'Nabi Adam a.s.', 'dari'],
    correctSentence: ['Nabi Adam a.s.', 'diciptakan', 'dari', 'tanah'],
    hint: 'Nabi Adam adalah manusia pertama yang diciptakan Allah Swt.',
    meaning: 'Nabi Adam a.s. diciptakan dari tanah',
    badge: 'Pencari Ilmu Sejarah Nabi'
  },
  {
    id: 2,
    title: 'Susun Kalimat Sifat Iblis yang Harus Dijauhi',
    scrambledWords: ['dimurkai', 'Iblis', 'sombong', 'karena', 'Allah'],
    correctSentence: ['Iblis', 'sombong', 'karena', 'dimurkai', 'Allah'],
    hint: 'Iblis menolak menghormati Nabi Adam karena merasa lebih baik.',
    meaning: 'Iblis dimurkai Allah karena sombong',
    badge: 'Penjaga Diri Rendah Hati'
  },
  {
    id: 3,
    title: 'Susun Kalimat Sikap Bertobat Nabi Adam a.s.',
    scrambledWords: ['bertobat', 'Nabi Adam a.s.', 'kesalahan', 'mengakui', 'dan'],
    correctSentence: ['Nabi Adam a.s.', 'mengakui', 'kesalahan', 'dan', 'bertobat'],
    hint: 'Ketika berbuat salah, Nabi Adam tidak menyalahkan orang lain.',
    meaning: 'Nabi Adam a.s. mengakui kesalahan dan bertobat',
    badge: 'Bintang Kejujuran Adam'
  },
  {
    id: 4,
    title: 'Susun Kalimat Tugas Manusia Sebagai Khalifah',
    scrambledWords: ['khalifah', 'menjaga', 'bumi', 'tugasnya', 'alam'],
    correctSentence: ['khalifah', 'tugasnya', 'menjaga', 'alam', 'bumi'],
    hint: 'Tugas manusia adalah memelihara kelestarian alam dan lingkungan.',
    meaning: 'Khalifah tugasnya menjaga alam bumi',
    badge: 'Penjaga Kelestarian Alam'
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

export const EVALUASI_PG_KELAS1_P5: SoalPG[] = [
  {
    id: 1,
    question: 'Manusia pertama yang diciptakan oleh Allah Swt. adalah...',
    options: ['A. Nabi Muhammad s.a.w.', 'B. Nabi Adam a.s.', 'C. Nabi Ibrahim a.s.'],
    correctAnswer: 1,
    explanation: 'Nabi Adam a.s. adalah manusia sekaligus nabi pertama.'
  },
  {
    id: 2,
    question: 'Allah Swt. menciptakan Nabi Adam a.s. dari bahan...',
    options: ['A. Tanah', 'B. Api', 'C. Cahaya'],
    correctAnswer: 0,
    explanation: 'Nabi Adam a.s. diciptakan dari tanah.'
  },
  {
    id: 3,
    question: 'Makhluk yang menolak perintah Allah Swt. untuk menghormati Nabi Adam a.s. karena sombong adalah...',
    options: ['A. Malaikat', 'B. Iblis', 'C. Tumbuhan'],
    correctAnswer: 1,
    explanation: 'Iblis menolak karena merasa dirinya diciptakan dari api yang lebih baik dari tanah.'
  },
  {
    id: 4,
    question: 'Istri Nabi Adam a.s. yang tinggal bersama di surga bernama...',
    options: ['A. Siti Khadijah', 'B. Hawa', 'C. Siti Aisyah'],
    correctAnswer: 1,
    explanation: 'Istri Nabi Adam a.s. bernama Hawa.'
  },
  {
    id: 5,
    question: 'Ketika menyadari kesalahannya melanggar larangan di surga, Nabi Adam a.s. segera...',
    options: ['A. Menyalahkan Iblis', 'B. Bertobat dan memohon ampunan Allah', 'C. Lari bersembunyi'],
    correctAnswer: 1,
    explanation: 'Nabi Adam a.s. langsung bertobat dan mengakui kesalahannya.'
  },
  {
    id: 6,
    question: 'Manusia diutus di bumi bertindak sebagai khalifah, yang artinya...',
    options: [
      'A. Penjaga dan pemelihara kelestarian bumi',
      'B. Merusak pepohonan di hutan',
      'C. Pemburu hewan tanpa batas'
    ],
    correctAnswer: 0,
    explanation: 'Khalifah bertugas menjaga, memelihara, dan memakmurkan bumi.'
  },
  {
    id: 7,
    question: 'Contoh perbuatan yang mencerminkan sikap jujur seperti Nabi Adam a.s. adalah...',
    options: [
      'A. Mengakui kesalahan saat memecahkan pot bunga',
      'B. Berbohong agar tidak dimarahi guru',
      'C. Pura-pura tidak tahu saat merusakkan mainan teman'
    ],
    correctAnswer: 0,
    explanation: 'Jujur artinya berani berkata benar dan mengakui kesalahan.'
  },
  {
    id: 8,
    question: 'Anak yang memiliki sifat rendah hati akan...',
    options: ['A. Suka memamerkan barang mahal', 'B. Mau berteman dengan siapa saja', 'C. Mengejek teman'],
    correctAnswer: 1,
    explanation: 'Rendah hati (tawaduk) membuat kita menghargai dan mau berteman dengan siapa saja.'
  },
  {
    id: 9,
    question: 'Menjaga kebersihan kelas dan merapikan mainan setelah digunakan adalah bentuk sikap...',
    options: ['A. Bertanggung jawab', 'B. Sombong', 'C. Pemalas'],
    correctAnswer: 0,
    explanation: 'Merapikan dan membersihkan adalah wujud tanggung jawab.'
  },
  {
    id: 10,
    question: 'Kisah Fajar yang berani meminta maaf kepada guru mengajarkan kita agar tidak takut...',
    options: ['A. Berkata jujur', 'B. Berbohong', 'C. Merusak tanaman'],
    correctAnswer: 0,
    explanation: 'Kejujuran dipuji oleh guru dan dicintai oleh Allah Swt.'
  }
];

export const EVALUASI_PGK_KELAS1_P5: SoalPGK[] = [
  {
    id: 1,
    question: 'Pilihlah DUA sifat terpuji Nabi Adam a.s. yang wajib kita contoh! (Pilih 2 jawaban)',
    options: [
      'A. Suka sombong dan membanggakan diri',
      'B. Jujur dan berani mengakui kesalahan',
      'C. Rendah hati dan suka membantu',
      'D. Suka menyalahkan orang lain'
    ],
    correctAnswers: [1, 2],
    explanation: 'Sifat terpuji Nabi Adam a.s. adalah jujur, berani bertobat, rendah hati, dan taat.'
  },
  {
    id: 2,
    question: 'Pilihlah DUA tindakan nyata sebagai "Khalifah Cilik" dalam menjaga bumi! (Pilih 2 jawaban)',
    options: [
      'A. Menyiram tanaman di halaman sekolah',
      'B. Membuang sampah plastik ke dalam sungai',
      'C. Membuang sampah pada tempatnya',
      'D. Coret-coret tembok fasilitas umum'
    ],
    correctAnswers: [0, 2],
    explanation: 'Menjaga bumi dilakukan dengan merawat tanaman dan membuang sampah pada tempatnya.'
  }
];

export const EVALUASI_MENJODOHKAN_KELAS1_P5: SoalMenjodohkan[] = [
  {
    id: 1,
    statement: 'Sifat Iblis yang dimurkai Allah Swt.',
    matchOption: 'Sombong & Angkuh'
  },
  {
    id: 2,
    statement: 'Sifat Nabi Adam a.s. saat melakukan kesalahan',
    matchOption: 'Jujur & Bertobat'
  }
];

export const ALL_MATCH_OPTIONS_P5 = [
  'Sombong & Angkuh',
  'Jujur & Bertobat',
  'Pengiri & Pemarah',
  'Penakut & Pemalas'
];

export const EVALUASI_BENAR_SALAH_KELAS1_P5: SoalBenarSalah[] = [
  {
    id: 1,
    statement: 'Allah Swt. menciptakan Nabi Adam a.s. dari tanah dan memberinya ilmu pengetahuan.',
    isCorrect: true,
    sampleReason: 'Benar, Nabi Adam diciptakan dari tanah dan diajarkan nama-nama benda.'
  },
  {
    id: 2,
    statement: 'Jika kita tidak sengaja merusakkan mainan teman, sebaiknya kita pura-pura tidak tahu.',
    isCorrect: false,
    sampleReason: 'Salah, kita harus jujur meminta maaf dan mengganti/memperbaiki.'
  }
];

export const EVALUASI_URAIAN_KELAS1_P5: SoalUraian[] = [
  {
    id: 1,
    question: 'Sebutkan 3 sifat mulia Nabi Adam a.s. yang dapat kamu teladani di sekolah!',
    sampleAnswer: '1. Jujur (berkata benar dan mengakui kesalahan)\n2. Rendah hati (mau berteman dengan siapa saja)\n3. Bertanggung jawab (menjaga kebersihan kelas)'
  },
  {
    id: 2,
    question: 'Apa yang dilakukan Nabi Adam a.s. ketika menyadari bahwa beliau telah berbuat kesalahan di surga?',
    sampleAnswer: 'Nabi Adam a.s. tidak menyalahkan orang lain, melainkan segera mengakui kesalahannya dan bertobat memohon ampunan kepada Allah Swt.'
  },
  {
    id: 3,
    question: '(Computational Thinking - Pengelompokan Sikap): Kelompokkanlah perilaku berikut ke dalam sikap [ KHALIFAH BUMI ] atau [ SIFAT IBLIS ]:\na. Menyiram bunga di taman sekolah = [ ......... ]\nb. Mendorong teman dan merasa diri paling pintar = [ ......... ]',
    sampleAnswer: 'a. KHALIFAH BUMI (merawat alam)\nb. SIFAT IBLIS (sombong dan merendahkan teman)'
  },
  {
    id: 4,
    question: '(HOTS - Analisis Perilaku): Mengapa seorang anak yang berani meminta maaf saat bersalah seperti kisah Fajar disebut sebagai anak yang hebat?',
    sampleAnswer: 'Karena dibutuhkan keberanian, kejujuran, dan rasa tanggung jawab yang tinggi untuk mengalahkan rasa takut dan mengakui kesalahan demi menjadi pribadi lebih baik.'
  }
];
