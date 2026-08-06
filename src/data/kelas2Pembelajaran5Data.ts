// DATA KELAS 2 PEMBELAJARAN 5: Kisah Nabi Nuh a.s. dan Keteladanannya
// Berdasarkan Buku Teks PAI Kelas 2 BAB V

export interface SlideItem {
  id: number;
  badge: string;
  title: string;
  content: string;
  imageUrl?: string;
  imageCaption?: string;
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

export const SLIDES_KELAS2_P5: SlideItem[] = [
  {
    id: 1,
    badge: 'Tujuan Pembelajaran',
    title: 'BAB V: Kisah Nabi Nuh a.s. dan Keteladanannya',
    content: 'Selamat datang di Bab 5! Hari ini kita akan belajar tentang salah satu nabi dan rasul pilihan Allah Swt. yang terkenal dengan kesabarannya yang luar biasa, yaitu Nabi Nuh a.s.',
    bulletPoints: [
      '1. Mengenal kisah Nabi Nuh a.s. secara sederhana.',
      '2. Menceritakan perjalanan dakwah Nabi Nuh a.s.',
      '3. Menjelaskan peristiwa pembuatan kapal Nabi Nuh a.s.',
      '4. Menjelaskan peristiwa banjir besar pada masa Nabi Nuh a.s.',
      '5. Meneladani sifat-sifat mulia Nabi Nuh a.s. dalam kehidupan sehari-hari.',
      '6. Membiasakan perilaku sabar, taat, jujur, dan rajin beribadah.'
    ],
    quote: {
      text: 'Sesungguhnya Kami telah mengutus Nuh kepada kaumnya...',
      source: 'Q.S. Nuh : 1'
    }
  },
  {
    id: 2,
    badge: 'Ayo Mengamati',
    title: 'Mengenal Utusan Allah Swt.',
    content: 'Tahukah kamu bahwa Allah Swt. mengutus banyak nabi untuk mengajak manusia menyembah hanya kepada-Nya?',
    bulletPoints: [
      'Nabi dan Rasul adalah manusia pilihan Allah Swt.',
      'Tugas utama para nabi adalah mengajak manusia beriman kepada Allah Swt.',
      'Salah satu nabi yang sangat terkenal karena kesabarannya adalah Nabi Nuh a.s.',
      'Beliau berdakwah kepada kaumnya selama ratusan tahun dengan penuh kesabaran.',
      'Meskipun banyak orang menolak ajakannya, Nabi Nuh a.s. tetap sabar dan tidak pernah menyerah.'
    ],
    keyTerms: [
      { term: 'Nabi & Rasul', definition: 'Utusan Allah Swt. yang membawa ajaran kebaikan bagi manusia.' },
      { term: 'Sabar', definition: 'Tahan menghadapi kesulitan tanpa mengeluh dan pantang menyerah.' }
    ]
  },
  {
    id: 3,
    badge: 'A. Mengenal Nabi Nuh a.s.',
    title: 'Siapakah Nabi Nuh a.s.?',
    content: 'Nabi Nuh a.s. adalah salah satu nabi dan rasul yang diutus oleh Allah Swt. untuk mengajak manusia beriman kepada Allah Swt. dan meninggalkan penyembahan kepada berhala.',
    bulletPoints: [
      'Utusan Allah Swt.: Menyeru kaumnya agar hanya menyembah Allah Swt.',
      'Penyembahan Berhala: Pada masa itu banyak manusia yang menyembah patung/berhala buatan sendiri.',
      'Sifat Mulia: Nabi Nuh a.s. adalah seorang nabi yang sangat sabar, jujur, dan taat kepada Allah Swt.',
      'Penuh Kasih Sayang: Nabi Nuh a.s. selalu menyampaikan ajaran Allah Swt. dengan penuh kedamaian dan kasih sayang.'
    ],
    quiz: {
      question: 'Nabi Nuh a.s. diutus oleh Allah Swt. untuk mengajak manusia agar...',
      options: [
        'A. Menyembah berhala dan patung',
        'B. Beriman kepada Allah Swt. dan meninggalkan berhala',
        'C. Berbuat sombong kepada sesama'
      ],
      correctIndex: 1,
      explanation: 'Nabi Nuh a.s. mengajak manusia beriman kepada Allah Swt. dan meninggalkan penyembahan berhala.'
    }
  },
  {
    id: 4,
    badge: 'B. Dakwah Nabi Nuh a.s.',
    title: 'Ajaran Kebaikkan Nabi Nuh a.s.',
    content: 'Nabi Nuh a.s. bekerja keras menyampaikan wahyu Allah Swt. kepada kaumnya siang dan malam tanpa kenal lelah.',
    bulletPoints: [
      '• Menyembah Allah Swt. saja (Tawhid).',
      '• Meninggalkan penyembahan berhala.',
      '• Berbuat baik kepada sesama manusia.',
      '• Berkata jujur dan tidak berbohong.',
      '• Menaati perintah Allah Swt. dan menjauhi larangan-Nya.'
    ],
    keyTerms: [
      { term: 'Dakwah', definition: 'Mengajak atau menyeru orang lain ke jalan kebaikan yang diridhai Allah.' },
      { term: 'Lembut', definition: 'Cara berbicara Nabi Nuh a.s. yang santun dan berakhlak mulia.' }
    ]
  },
  {
    id: 5,
    badge: 'B. Dakwah Nabi Nuh a.s.',
    title: 'Tantangan dan Kesabaran Nabi Nuh a.s.',
    content: 'Beliau berdakwah dengan lembut dan penuh kesabaran. Namun, sebagian besar kaumnya tetap tidak mau beriman.',
    bulletPoints: [
      'Sikap Kaum Nuh: Mereka bahkan mengejek Nabi Nuh a.s. dan tidak mau mendengarkan nasihat beliau.',
      'Pantang Putus Asa: Walaupun demikian, Nabi Nuh a.s. tidak pernah putus asa.',
      'Selalu Berdoa: Beliau terus berdoa dan memohon pertolongan serta petunjuk kepada Allah Swt.',
      'Pelajaran: Kita harus mencontoh kesabaran Nabi Nuh a.s. saat mengajak teman melakukan kebaikan.'
    ]
  },
  {
    id: 6,
    badge: 'C. Kapal Nabi Nuh a.s.',
    title: 'Perintah Membuat Kapal Besar',
    content: 'Karena kaumnya terus berbuat ingkar dan kesombongan mereka makin menjadi, Allah Swt. memerintahkan Nabi Nuh a.s. membuat sebuah kapal yang sangat besar.',
    bulletPoints: [
      'Petunjuk Allah Swt.: Nabi Nuh a.s. mulai membangun kapal sesuai petunjuk dan wahyu Allah Swt.',
      'Ejekan Orang Ingkar: Orang-orang yang tidak beriman menertawakan beliau.',
      'Kata Mereka: "Mengapa membuat kapal di tempat yang jauh dari laut?"',
      'Keteguhan Hati: Nabi Nuh a.s. tidak marah. Beliau tetap melaksanakan perintah Allah Swt. dengan penuh keyakinan.'
    ],
    quiz: {
      question: 'Mengapa orang-orang yang tidak beriman menertawakan Nabi Nuh a.s. saat membuat kapal?',
      options: [
        'A. Karena kapalnya terbuat dari emas',
        'B. Karena kapal dibuat di daratan yang jauh dari laut',
        'C. Karena kapalnya sangat kecil'
      ],
      correctIndex: 1,
      explanation: 'Kaumnya menertawakan Nabi Nuh a.s. karena beliau membuat kapal besar di daratan tinggi yang jauh dari laut.'
    }
  },
  {
    id: 7,
    badge: 'D. Peristiwa Banjir Besar',
    title: 'Kapal Selamat & Hujan Deras',
    content: 'Setelah kapal selesai dibuat, Allah Swt. memerintahkan Nabi Nuh a.s. membawa orang-orang yang beriman serta sepasang hewan (jantan dan betina) ke dalam kapal.',
    bulletPoints: [
      'Naik ke Kapal: Orang-orang beriman dan pasang-pasangan hewan masuk ke dalam kapal dengan tertib.',
      'Hujan Sangat Deras: Kemudian turunlah hujan yang sangat deras tanpa henti.',
      'Air Memancar: Air memancar dari dalam bumi dan turun dengan lebat dari langit.',
      'Banjir Dahsyat: Terjadilah banjir yang sangat besar menenggelamkan daratan dan gunung-gunung.'
    ]
  },
  {
    id: 8,
    badge: 'D. Peristiwa Banjir Besar',
    title: 'Pertolongan dan Keselamatan dari Allah Swt.',
    content: 'Kapal Nabi Nuh a.s. berlayar dengan aman di atas air banjir yang tinggi dengan izin dan perlindungan Allah Swt.',
    bulletPoints: [
      'Orang Beriman Selamat: Orang-orang yang beriman selamat karena menaati perintah Allah Swt.',
      'Orang Ingkar Tenggelam: Sedangkan orang-orang yang tetap ingkar tidak mau naik ke kapal sehingga mereka tidak selamat (termasuk putra beliau yang ingkar, Kan\'an).',
      'Pelajaran Utama: Peristiwa ini mengajarkan bahwa setiap manusia harus taat kepada perintah Allah Swt. jika ingin selamat di dunia dan akhirat.'
    ]
  },
  {
    id: 9,
    badge: 'E. Keteladanan Nabi Nuh a.s.',
    title: 'Keteladanan 1 & 2: Sabar dan Taat',
    content: 'Ada banyak sifat mulia Nabi Nuh a.s. yang dapat kita teladani dalam kehidupan sehari-hari:',
    bulletPoints: [
      '1. Sabar:',
      '   • Nabi Nuh a.s. tetap sabar walaupun banyak orang menolak dakwahnya.',
      '   • Sebagai anak muslim, kita juga harus sabar ketika belajar, membantu orang tua, dan menghadapi kesulitan.',
      '2. Taat kepada Allah Swt.:',
      '   • Nabi Nuh a.s. selalu melaksanakan perintah Allah Swt. tanpa ragu.',
      '   • Kita juga harus taat dengan: salat lima waktu, membaca Al-Qur\'an, berdoa, serta menghormati orang tua dan guru.'
    ]
  },
  {
    id: 10,
    badge: 'E. Keteladanan Nabi Nuh a.s.',
    title: 'Keteladanan 3, 4, & 5: Jujur, Pantang Menyerah, Rajin Berdoa',
    content: 'Mari melanjutkan meneladani sifat mulia Nabi Nuh a.s.:',
    bulletPoints: [
      '3. Jujur:',
      '   • Nabi Nuh a.s. selalu berkata benar. Anak yang jujur akan dipercaya oleh guru, orang tua, dan teman.',
      '4. Pantang Menyerah:',
      '   • Walaupun banyak yang menolak dakwahnya, Nabi Nuh a.s. tidak berhenti mengajak kepada kebaikan. Sebagai pelajar, kita harus rajin belajar.',
      '5. Rajin Berdoa:',
      '   • Beliau selalu memohon pertolongan hanya kepada Allah Swt. Kita juga harus membiasakan diri berdoa setiap hari.'
    ]
  },
  {
    id: 11,
    badge: 'F. Kisah Inspiratif',
    title: 'Belajar dari Kesabaran Nabi Nuh a.s.',
    content: 'Simak cerita inspiratif sahabat kecil kita bernama Dika berikut ini:',
    bulletPoints: [
      'Suatu hari, Dika belajar membaca Al-Qur\'an. Ia masih sering salah membaca huruf hijaiyah.',
      'Kadang-kadang Dika merasa sedih dan ingin menyerah.',
      'Ibunya menasihati: "Ingatlah kisah Nabi Nuh a.s. Beliau sangat sabar dan tidak pernah putus asa."',
      'Dika pun kembali bersemangat dan terus belajar setiap hari.',
      'Beberapa minggu kemudian, bacaan Al-Qur\'annya menjadi semakin lancar dan bagus!',
      'Pesan Moral: Kesabaran dan ketekunan akan membawa keberhasilan.'
    ]
  },
  {
    id: 12,
    badge: 'G. Hikmah Kisah',
    title: 'Hikmah Penting Kisah Nabi Nuh a.s.',
    content: 'Kisah Nabi Nuh a.s. memberikan pelajaran berharga bagi kehidupan kita:',
    bulletPoints: [
      '• Selalu taat kepada perintah Allah Swt.',
      '• Sabar dan tenang menghadapi kesulitan.',
      '• Rajin dan khusyuk dalam beribadah.',
      '• Tidak mudah menyerah saat belajar atau bekerja.',
      '• Berkata jujur dalam setiap keadaan.',
      '• Percaya penuh kepada pertolongan Allah Swt.',
      '• Berani mengajak teman berbuat kebaikan.'
    ]
  },
  {
    id: 13,
    badge: 'H. Penerapan Sehari-hari',
    title: 'Penerapan Sifat Nabi Nuh a.s. di Kehidupan',
    content: 'Bagaimana kita menerapkan sifat mulia Nabi Nuh a.s. dalam keseharian?',
    bulletPoints: [
      'Di Rumah: Membantu orang tua, berkata jujur, rajin salat, dan membaca doa sebelum tidur.',
      'Di Sekolah: Mendengarkan penjelasan guru, belajar dengan sungguh-sungguh, tidak mengejek teman, dan saling menolong.',
      'Di Lingkungan: Menjaga kebersihan, menghormati tetangga, bermain dengan rukun, dan berkata sopan.'
    ]
  },
  {
    id: 14,
    badge: 'J. Tahukah Kamu?',
    title: 'Keteguhan Hati Nabi Nuh a.s. (Ulul Azmi)',
    content: 'Nabi Nuh a.s. termasuk salah satu nabi yang memiliki keteguhan hati dan kesabaran luar biasa (Gelar Ulul Azmi). Beliau tetap berdakwah dalam waktu yang sangat lama (950 tahun) meskipun hanya sedikit orang yang mengikuti ajarannya.',
    bulletPoints: [
      'Nabi Nuh a.s. menjadi teladan bagi umat Islam sepanjang masa.',
      'Mengajarkan kita untuk selalu sabar, teguh, dan tidak pernah putus asa dalam melakukan kebaikan.'
    ]
  },
  {
    id: 15,
    badge: 'K. Rangkuman & Refleksi',
    title: 'Rangkuman & Refleksi Diri',
    content: 'Mari kita ingat kembali poin penting Bab V ini:',
    bulletPoints: [
      '• Nabi Nuh a.s. adalah utusan Allah Swt. yang mengajak manusia menyembah Allah semata.',
      '• Beliau berdakwah dengan penuh kesabaran dan kasih sayang.',
      '• Allah Swt. memerintahkan Nabi Nuh a.s. membuat kapal sebagai persiapan menghadapi banjir besar.',
      '• Orang-orang yang beriman dan taat kepada Allah Swt. diselamatkan di dalam kapal.',
      '• Sifat teladan: Sabar, taat, jujur, pantang menyerah, dan rajin berdoa.'
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

export const PROYEK_KELAS2_P5: ProyekItem[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 1',
    title: 'Diorama Mini Kapal Nabi Nuh a.s. & Hewan Berpasangan',
    objective: 'Murid membuat diorama atau maket mini kapal Nabi Nuh a.s. dari bahan daur ulang (kardus/stik es krim) dilengkapi gambar pasangan hewan.',
    scenarioOrSteps: [
      '1. Siapkan bahan sederhana: kardus bekas, kertas warna, gunting aman, lem, dan pensil warna.',
      '2. Bentuk kardus menjadi lambung kapal besar khas Nabi Nuh a.s.',
      '3. Gambarlah 3 pasang hewan sederhana (misal: sepasang burung, sepasang kucing, sepasang domba) lalu tempelkan di atas kapal.',
      '4. Tuliskan kalimat hikmah di kapal: "Taat kepada Allah Swt. Membawa Keselamatan".',
      '5. Menceritakan hasil karya diorama di depan kelas.'
    ],
    output: 'Karya Diorama Mini Kapal Nabi Nuh a.s.',
    kebijakanGuruNote: 'Sesuai Kebijakan Guru: Kelompok / Individu & Jenis bahan daur ulang disesuaikan dengan ketersediaan di sekolah atau rumah.'
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 2',
    title: 'Buku Saku Poster "Aku Anak Sabar & Taat Seperti Nabi Nuh a.s."',
    objective: 'Murid menyusun buku saku atau poster lipat bergambar yang berisi 5 janji perilaku sabar, taat, dan jujur sehari-hari.',
    scenarioOrSteps: [
      '1. Lipat selembar kertas karton menjadi 4 bagian buku saku.',
      '2. Tuliskan 5 Janji Anak Muslim pada tiap lembar: (a) Sabar saat belajar, (b) Taat salat 5 waktu, (c) Berkata jujur, (d) Tidak mudah menyerah, (e) Rajin berdoa.',
      '3. Hiasi dengan gambar atau stiker bintang kebaikan.',
      '4. Praktikkan janji tersebut selama 1 minggu dan mintalah paraf orang tua/guru.'
    ],
    output: 'Buku Saku Lipat Perilaku Mulia',
    kebijakanGuruNote: 'Sesuai Kebijakan Guru: Penilaian buku saku dan durasi pemantauan kebiasaan disesuaikan oleh guru pembimbing.'
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 1',
    title: 'Studi Kasus: Dika yang Ingin Menyerah Belajar Hijaiyah',
    objective: 'Murid memecahkan masalah kesulitan belajar teman seperti tokoh Dika dalam kisah inspiratif menggunakan keteladanan Nabi Nuh a.s.',
    scenarioOrSteps: [
      'Studi Kasus: "Andi merasa sedih dan putus asa karena kesulitan menghafal surah pendek. Ia ingin berhenti belajar."',
      'Pertanyaan Diskusi Pemecahan Masalah:',
      'a. Mengapa Andi tidak boleh langsung menyerah?',
      'b. Sifat mulia Nabi Nuh a.s. apakah yang harus diingat oleh Andi?',
      'c. Tuliskan 2 kata penyemangat yang bisa kamu ucapkan untuk Andi agar ia mau bangkit kembali!',
      'd. Presentasikan solusi terbaik kelompokmu.'
    ],
    output: 'Lembar Solusi Penyemangat Teman',
    kebijakanGuruNote: 'Sesuai Kebijakan Guru: Diskusi dapat dilakukan berpasangan atau kelompok kecil sesuai instruksi guru.'
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 2',
    title: 'Analisis Situasi Kejujuran & Ejekan Teman di Sekolah',
    objective: 'Murid menganalisis situasi ketika diejek teman saat berbuat kebaikan atau ketika tergoda untuk berbohong.',
    scenarioOrSteps: [
      'Studi Kasus: "Siti diajak teman untuk bermain saat jam salat. Ketika Siti ingin pergi salat, ada teman yang mengejeknya. Siti bingung harus bagaimana."',
      'Pertanyaan Pemecahan Masalah:',
      'a. Jika kamu menjadi Siti, bagaimana sikapmu menghadapi ejekan tersebut seperti Nabi Nuh a.s.?',
      'b. Mengapa kita tidak boleh marah saat diejek ketika melakukan perintah Allah Swt.?',
      'c. Buatlah rencana tindakan jujur dan taat yang harus dilakukan Siti.'
    ],
    output: 'Peta Keputusan Anak Taat',
    kebijakanGuruNote: 'Sesuai Kebijakan Guru: Format laporan dan kriteria penilaian pemecahan masalah disesuaikan oleh guru.'
  }
];

// GAMIFIKASI: Petualangan Kapal Nabi Nuh a.s.
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

export const GAME_QUESTIONS_KELAS2_P5: GameQuestion[] = [
  {
    id: 1,
    scenario: 'Nabi Nuh a.s. mengajak kaumnya menyembah Allah Swt. dengan sabar, namun kaumnya mengejeknya. Apa tindakan terbaik Nabi Nuh a.s.?',
    options: [
      { text: 'Mengejek balik kaumnya', isCorrect: false, feedback: 'Kurang tepat! Nabi Nuh a.s. tidak pernah membalas keburukan dengan ejekan.' },
      { text: 'Sabar, tetap lembut, dan tidak pernah putus asa berdoa', isCorrect: true, feedback: 'Luar biasa! Nabi Nuh a.s. sangat sabar dan terus berdoa kepada Allah Swt.' },
      { text: 'Langsung berhenti berdakwah', isCorrect: false, feedback: 'Kurang tepat! Nabi Nuh a.s. pantang menyerah dalam kebaikan.' }
    ],
    badgeEarned: 'Lencana Kesabaran Emas'
  },
  {
    id: 2,
    scenario: 'Allah Swt. memerintahkan Nabi Nuh a.s. membuat kapal besar di daratan. Kaum yang ingkar tertawa. Apa yang dilakukan Nabi Nuh a.s.?',
    options: [
      { text: 'Tetap taat membuat kapal dengan yakin akan perintah Allah Swt.', isCorrect: true, feedback: 'Hebat! Nabi Nuh a.s. taat tanpa ragu sedikit pun.' },
      { text: 'Membatalkan pembuatan kapal karena malu', isCorrect: false, feedback: 'Kurang tepat! Beliau tidak pernah malu menjalankan perintah Allah.' },
      { text: 'Marah-marah kepada orang yang menertawakannya', isCorrect: false, feedback: 'Kurang tepat! Nabi Nuh a.s. tidak pemarah.' }
    ],
    badgeEarned: 'Lencana Ketaatan Sejati'
  },
  {
    id: 3,
    scenario: 'Sebelum banjir besar tiba, siapa saja yang diperintahkan naik ke dalam kapal Nabi Nuh a.s.?',
    options: [
      { text: 'Orang-orang beriman dan sepasang hewan', isCorrect: true, feedback: 'Tepat sekali! Orang beriman dan sepasang hewan diselamatkan Allah.' },
      { text: 'Hanya orang kaya dan pejabat', isCorrect: false, feedback: 'Salah. Allah menyelamatkan orang yang beriman dan taat.' },
      { text: 'Orang yang menyembah berhala', isCorrect: false, feedback: 'Kurang tepat. Orang ingkar menolak naik ke kapal.' }
    ],
    badgeEarned: 'Lencana Penyelamat Beriman'
  },
  {
    id: 4,
    scenario: 'Dika kesulitan membaca huruf hijaiyah Al-Qur\'an. Sikap manakah yang meneladani kisah Nabi Nuh a.s.?',
    options: [
      { text: 'Menangis dan tidak mau mengaji lagi', isCorrect: false, feedback: 'Itu sikap mudah menyerah, bukan teladan Nabi Nuh a.s.' },
      { text: 'Sabar, pantang menyerah, dan rajin berlatih tiap hari', isCorrect: true, feedback: 'Bagus sekali! Sabar dan tekun membuat Dika makin lancar mengaji.' },
      { text: 'Sembunyi saat jam mengaji', isCorrect: false, feedback: 'Tidak boleh ya! Kita harus rajin mengaji.' }
    ],
    badgeEarned: 'Lencana Bintang Al-Qur\'an'
  }
];

// EVALUASI PEMBELAJARAN (10 PG, 3 PGK, 3 Menjodohkan, 4 Benar/Salah + Alasan, 5 Uraian)
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
  correctAnswers: number[]; // Index correct
  explanation: string;
}

export interface SoalMenjodohkan {
  id: number;
  statement: string;
  matchOption: string; // The correct target string
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

export const EVALUASI_PG_KELAS2_P5: SoalPG[] = [
  {
    id: 1,
    question: 'Nabi Nuh a.s. adalah utusan Allah Swt. yang diutus untuk mengajak manusia...',
    options: ['A. Menyembah berhala', 'B. Beriman hanya kepada Allah Swt.', 'C. Berbuat sombong'],
    correctAnswer: 1,
    explanation: 'Nabi Nuh a.s. diutus mengajak manusia beriman kepada Allah Swt. dan meninggalkan berhala.'
  },
  {
    id: 2,
    question: 'Sifat mulia Nabi Nuh a.s. yang paling terkenal saat menghadapi ejekan kaumnya adalah...',
    options: ['A. Pemarah', 'B. Sabar dan tidak putus asa', 'C. Penakut'],
    correctAnswer: 1,
    explanation: 'Nabi Nuh a.s. sangat terkenal dengan kesabarannya yang luar biasa.'
  },
  {
    id: 3,
    question: 'Nabi Nuh a.s. diperintahkan oleh Allah Swt. untuk membuat...',
    options: ['A. Istana yang tinggi', 'B. Kapal yang sangat besar', 'C. Rumah dari batu'],
    correctAnswer: 1,
    explanation: 'Allah Swt. memerintahkan Nabi Nuh a.s. membuat kapal besar sebagai persiapan banjir besar.'
  },
  {
    id: 4,
    question: 'Mengapa orang-orang yang tidak beriman menertawakan Nabi Nuh a.s. saat membuat kapal?',
    options: ['A. Karena kapal dibuat jauh dari laut di atas daratan', 'B. Karena warna kapal hitam', 'C. Karena kapal dibuat malam hari'],
    correctAnswer: 0,
    explanation: 'Orang ingkar heran dan menertawakan kapal yang dibangun di daratan tinggi.'
  },
  {
    id: 5,
    question: 'Bencana besar yang diturunkan Allah Swt. kepada kaum Nabi Nuh a.s. yang ingkar adalah...',
    options: ['A. Gempa bumi', 'B. Banjir besar', 'C. Angin kencang'],
    correctAnswer: 1,
    explanation: 'Allah Swt. menurunkan hujan deras dan memancarkan air bumi sehingga terjadi banjir besar.'
  },
  {
    id: 6,
    question: 'Siapakah yang selamat dari musibah banjir besar pada masa Nabi Nuh a.s.?',
    options: ['A. Orang-orang yang kaya', 'B. Orang-orang yang beriman dan taat', 'C. Orang-orang yang menyembah berhala'],
    correctAnswer: 1,
    explanation: 'Orang yang beriman dan taat naik ke kapal dan diselamatkan Allah Swt.'
  },
  {
    id: 7,
    question: 'Selain manusia yang beriman, makhluk lain yang dibawa ke dalam kapal Nabi Nuh a.s. adalah...',
    options: ['A. Sepasang hewan', 'B. Tumbuhan yang layu', 'C. Patung berhala'],
    correctAnswer: 0,
    explanation: 'Nabi Nuh a.s. membawa sepasang hewan (jantan dan betina) dari tiap jenis.'
  },
  {
    id: 8,
    question: 'Contoh perilaku taat kepada Allah Swt. yang dapat kita lakukan setiap hari adalah...',
    options: ['A. Menunda salat fardu', 'B. Melaksanakan salat 5 waktu tepat waktu', 'C. Berbohong kepada orang tua'],
    correctAnswer: 1,
    explanation: 'Salat 5 waktu adalah bentuk ketaatan kita kepada perintah Allah Swt.'
  },
  {
    id: 9,
    question: 'Anak yang selalu berkata jujur akan...',
    options: ['A. Dijauhi teman', 'B. Dipercaya oleh orang tua, guru, dan teman', 'C. Dimarahi guru'],
    correctAnswer: 1,
    explanation: 'Kejujuran mendatangkan kepercayaan dan kebaikan.'
  },
  {
    id: 10,
    question: 'Pelajaran yang bisa kita ambil dari tokoh Dika pada kisah inspiratif adalah...',
    options: ['A. Jika tidak bisa mengaji langsung berhenti', 'B. Kesabaran dan latihan terus-menerus akan membawa keberhasilan', 'C. Boleh marah jika merasa kesulitan'],
    correctAnswer: 1,
    explanation: 'Kesabaran Dika saat belajar membaca Al-Qur\'an membuatnya berhasil.'
  }
];

export const EVALUASI_PGK_KELAS2_P5: SoalPGK[] = [
  {
    id: 1,
    question: 'Pilihlah DUA perintah Allah Swt. yang disampaikan oleh Nabi Nuh a.s. kepada kaumnya! (Pilih 2 jawaban benar)',
    options: [
      'A. Menyembah Allah Swt. saja',
      'B. Menyembah berhala buatan manusia',
      'C. Berbuat baik kepada sesama dan berkata jujur',
      'D. Bermalas-malasan dan tidak mau bekerja'
    ],
    correctAnswers: [0, 2],
    explanation: 'Nabi Nuh a.s. mengajak menyembah Allah Swt. dan berbuat baik serta berkata jujur.'
  },
  {
    id: 2,
    question: 'Pilihlah DUA sifat mulia Nabi Nuh a.s. yang harus kita teladani! (Pilih 2 jawaban benar)',
    options: [
      'A. Sangat sabar dan tidak pernah putus asa',
      'B. Mudah marah bila diejek',
      'C. Taat kepada perintah Allah Swt.',
      'D. Suka berbohong demi kebaikan'
    ],
    correctAnswers: [0, 2],
    explanation: 'Nabi Nuh a.s. memiliki sifat sabar, pantang menyerah, dan taat kepada Allah Swt.'
  },
  {
    id: 3,
    question: 'Pilihlah DUA contoh perilaku sabar murid di sekolah! (Pilih 2 jawaban benar)',
    options: [
      'A. Tetap tenang dan tidak menangis saat mengalami kesulitan belajar',
      'B. Rebutan mainan secara paksa dengan teman',
      'C. Antre dengan tertib saat mencuci tangan atau membeli makanan',
      'D. Marah-marah saat pensil dipinjam teman'
    ],
    correctAnswers: [0, 2],
    explanation: 'Sabar di sekolah ditunjukkan dengan tidak mudah menyerah saat belajar dan mau antre tertib.'
  }
];

export const EVALUASI_MENJODOHKAN_KELAS2_P5: SoalMenjodohkan[] = [
  {
    id: 1,
    statement: 'Sikap tahan menghadapi kesulitan tanpa mengeluh dan pantang menyerah',
    matchOption: 'Sabar'
  },
  {
    id: 2,
    statement: 'Kendaraan besar yang dibuat Nabi Nuh a.s. atas perintah Allah Swt.',
    matchOption: 'Kapal / Bahtera'
  },
  {
    id: 3,
    statement: 'Golongan yang selamat dari bencana banjir besar',
    matchOption: 'Orang Beriman & Taat'
  }
];

export const ALL_MATCH_OPTIONS_P5 = [
  'Sabar',
  'Kapal / Bahtera',
  'Orang Beriman & Taat',
  'Orang Ingkar',
  'Menyembah Berhala'
];

export const EVALUASI_BENAR_SALAH_KELAS2_P5: SoalBenarSalah[] = [
  {
    id: 1,
    statement: 'Nabi Nuh a.s. langsung menyerah dan marah ketika kaumnya mengejek dakwahnya.',
    isCorrect: false,
    sampleReason: 'Salah, karena Nabi Nuh a.s. sangat sabar, tidak marah, dan tidak pernah putus asa berdoa untuk kaumnya.'
  },
  {
    id: 2,
    statement: 'Kapal Nabi Nuh a.s. dibuat berdasarkan petunjuk dan wahyu dari Allah Swt.',
    isCorrect: true,
    sampleReason: 'Benar, karena Allah Swt. yang memerintahkan dan memberi petunjuk pembuatan kapal besar tersebut.'
  },
  {
    id: 3,
    statement: 'Orang-orang yang ingkar dan menolak naik ke kapal tetap selamat dari banjir besar.',
    isCorrect: false,
    sampleReason: 'Salah, karena orang-orang yang ingkar tenggelam dalam banjir besar karena tidak taat kepada Allah Swt.'
  },
  {
    id: 4,
    statement: 'Anak yang rajin berdoa hanya meminta pertolongan kepada Allah Swt.',
    isCorrect: true,
    sampleReason: 'Benar, karena orang beriman selalu memohon pertolongan dan berdoa hanya kepada Allah Swt.'
  }
];

export const EVALUASI_URAIAN_KELAS2_P5: SoalUraian[] = [
  {
    id: 1,
    question: 'Mengapa Nabi Nuh a.s. dijuluki sebagai nabi yang sangat sabar? Jelaskan secara sederhana!',
    sampleAnswer: 'Karena Nabi Nuh a.s. berdakwah dalam waktu yang sangat lama dan tetap bersikap sabar, lembut, serta tidak pernah putus asa meskipun banyak kaumnya yang mengejek dan menolak ajakannya.'
  },
  {
    id: 2,
    question: 'Tuliskan 3 contoh sikap taat kepada Allah Swt. yang bisa kamu lakukan di rumah dan di sekolah!',
    sampleAnswer: '1. Melaksanakan salat 5 waktu tepat waktu.\n2. Membaca Al-Qur\'an dan berdoa sebelum belajar.\n3. Menghormati dan mendengarkan nasihat orang tua serta guru.'
  },
  {
    id: 3,
    question: 'Bagaimana perasaanmu jika ada teman yang mengejekmu saat kamu berbuat kebaikan? Apa tindakanmu meneladani Nabi Nuh a.s.?',
    sampleAnswer: 'Saya akan tetap tenang, tidak marah, dan tidak membalas ejekan tersebut. Saya akan tetap sabar dan mendoakan teman agar menyadari kebaikan.'
  },
  {
    id: 4,
    question: '(Computational Thinking - Pengenalan Pola): Susunlah urutan peristiwa kisah Nabi Nuh a.s. berikut menjadi urutan cerita yang benar!\n(A) Banjir besar turun menenggelamkan bumi.\n(B) Nabi Nuh a.s. mengajak kaumnya menyembah Allah Swt.\n(C) Kapal berlayar selamat membawa orang beriman.\n(D) Allah Swt. memerintahkan Nabi Nuh a.s. membuat kapal besar.',
    sampleAnswer: 'Urutan yang benar adalah: (B) -> (D) -> (A) -> (C).\nPenjelasan: Nabi Nuh berdakwah (B), lalu membuat kapal atas perintah Allah (D), kemudian terjadi banjir besar (A), dan kapal berlayar selamat membawa orang beriman (C).'
  },
  {
    id: 5,
    question: '(HOTS - Penerapan Nilai): Jika kamu merasa kesulitan saat mengerjakan soal ujian, apa yang harus kamu lakukan sesuai teladan kejujuran dan ketekunan Nabi Nuh a.s.?',
    sampleAnswer: 'Saya akan berdoa memohon kemudahan kepada Allah Swt., berusaha mengerjakan dengan jujur tanpa mencontek teman, serta tidak mudah menyerah.'
  }
];
