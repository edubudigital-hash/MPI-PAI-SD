export interface SlideData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  icon: string;
  points: string[];
  arabicText?: string;
  translationText?: string;
  explanation?: string;
}

export interface ProyekTask {
  id: string;
  type: 'PjBL' | 'PBL';
  title: string;
  subtitle: string;
  duration: string;
  goal: string;
  steps: string[];
  output: string;
  rubrik: string[];
}

export interface EvaluasiPG {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface EvaluasiPGK {
  id: number;
  question: string;
  options: string[];
  correctAnswers: number[];
  explanation: string;
}

export interface EvaluasiMenjodohkan {
  id: number;
  premise: string;
  matchTarget: string;
}

export interface EvaluasiBenarSalah {
  id: number;
  statement: string;
  isCorrect: boolean;
  explanation: string;
}

export interface EvaluasiUraian {
  id: number;
  question: string;
  rubricKey: string;
}

// ==========================================
// MATERI SLIDES (13 SLIDES)
// ==========================================
export const SLIDES_KELAS6_P3: SlideData[] = [
  {
    id: 's3-1',
    category: 'Pendahuluan & Tujuan',
    title: 'Bab 3: Akhlak Terpuji kepada Tetangga dan Non-Muslim',
    subtitle: 'Tujuan Pembelajaran & Gambaran Umum Modul PAI Kelas 6',
    icon: 'Target',
    points: [
      'Menjelaskan pengertian akhlak terpuji (akhlakul karimah) dan pentingnya berakhlak mulia.',
      'Memahami kedudukan tetangga serta kewajiban memuliakan tetangga dalam ajaran Islam.',
      'Menjelaskan pentingnya menghormati dan berbuat baik kepada non-Muslim sesuai ajaran Islam (QS. Al-Mumtahanah: 8).',
      'Menerapkan perilaku sopan santun, toleransi, kepedulian, dan kerukunan dalam kehidupan sehari-hari.',
      'Meneladani sikap kelembutan, kesabaran, dan kasih sayang Rasulullah saw. terhadap tetangga.'
    ],
    explanation: 'Modul ini membimbing murid kelas 6 untuk menjadi pribadi bermartabat yang mampu membangun kerukunan hidup bermasyarakat, saling menghargai perbedaan, serta menjadi teladan kebaikan.'
  },
  {
    id: 's3-2',
    category: 'Konsep Dasar',
    title: 'A. Pengertian Akhlak Terpuji (Akhlakul Karimah)',
    subtitle: 'Makna Kata Akhlak, Sumber Ajaran, dan Tujuan Diutusnya Rasulullah saw.',
    icon: 'BookOpen',
    points: [
      'Kata "akhlak" berasal dari bahasa Arab al-akhlaq (الْأَخْلَاقُ), yang berarti perangai, budi pekerti, tabiat, atau tingkah laku.',
      'Akhlak terpuji (akhlakul karimah) adalah perilaku baik yang sesuai dengan ajaran Allah Swt. dan dicontohkan oleh Nabi Muhammad saw.',
      'Akhlak mulia menjadi cermin kesempurnaan iman seorang Muslim.',
      'Rasulullah saw. diutus oleh Allah Swt. untuk membimbing dan menyempurnakan budi pekerti manusia.'
    ],
    arabicText: 'إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ',
    translationText: 'Sesungguhnya aku diutus hanyalah untuk menyempurnakan akhlak yang mulia. (HR. Ahmad)',
    explanation: 'Memiliki iman yang kuat harus diwujudkan melalui tingkah laku yang santun, jujur, dan penuh kasih sayang kepada sesama makhluk.'
  },
  {
    id: 's3-3',
    category: 'Keutamaan',
    title: 'B. Pentingnya Memiliki Akhlak Terpuji',
    subtitle: 'Manfaat di Dunia dan Akhirat bagi Pribadi Berakhlak Mulia',
    icon: 'Sparkles',
    points: [
      'Disayangi oleh Allah Swt. dan dicintai oleh Rasulullah saw.',
      'Disenangi dan dihormati oleh teman, guru, dan tetangga di lingkungan sekitar.',
      'Menciptakan kehidupan bermasyarakat yang rukun, aman, tenteram, dan damai.',
      'Menjadi pribadi yang dipercaya orang lain (al-amin) dan menjadi teladan (uswah).',
      'Penting: Akhlak buruk dapat memicu pertengkaran, permusuhan, dan hilangnya kepercayaan.'
    ],
    explanation: 'Orang yang berakhlak mulia senantiasa memancarkan energi positif sehingga kehadirannya selalu dinantikan dan memberikan kemanfaatan bagi lingkungan.'
  },
  {
    id: 's3-4',
    category: 'Adab Bertetangga',
    title: 'C. Akhlak Terpuji kepada Tetangga',
    subtitle: 'Pengertian Tetangga, Kedudukan, dan Anjuran Memuliakannya',
    icon: 'Home',
    points: [
      'Tetangga adalah orang atau keluarga yang rumahnya tinggal berdekatan dengan tempat tinggal kita.',
      'Dalam Islam, tetangga memiliki kedudukan yang sangat penting dan istimewa.',
      'Rasulullah saw. memerintahkan agar memperlakukan tetangga dengan baik tanpa membeda-bedakan agama, suku, atau latar belakang sosial.',
      'Memuliakan tetangga merupakan salah satu indikator dan bukti keimanan seseorang kepada Allah Swt. dan Hari Akhir.'
    ],
    arabicText: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ',
    translationText: 'Barang siapa beriman kepada Allah dan hari akhir, hendaklah ia memuliakan tetangganya. (HR. Bukhari dan Muslim)',
    explanation: 'Hubungan yang harmonis dengan tetangga sangat vital karena tetangga adalah orang termurah dan terdekat yang pertama kali membantu saat kita mendapat musibah.'
  },
  {
    id: 's3-5',
    category: 'Bentuk Perilaku',
    title: 'Bentuk Akhlak Terpuji kepada Tetangga',
    subtitle: 'Sikap Sehari-hari dalam Membangun Keharmonisan Bertetangga',
    icon: 'Users',
    points: [
      'a. Mengucapkan Salam: Mendoakan keselamatan saat bertemu tetangga sesama Muslim.',
      'b. Bersikap Ramah: Senyum, sapa, dan menunjukkan wajah ceria (senyum adalah sedekah).',
      'c. Membantu Tetangga: Ikut gotong royong, kerja bakti, dan menolong saat musibah.',
      'd. Menjaga Ketenangan: Tidak membuat keributan (suara musik keras/bermain larut malam).',
      'e. Menjaga Kebersihan: Tidak membuang sampah sembarangan di depan rumah tetangga.',
      'f. Menghormati Hak Tetangga: Menjaga privasi, sopan santun berbicara, dan tidak mengambil barang tanpa izin.'
    ],
    explanation: 'Menjaga kenyamanan dan privasi tetangga merupakan bagian dari adab Islam yang sangat dijunjung tinggi.'
  },
  {
    id: 's3-6',
    category: 'Aksi Nyata',
    title: 'D. Contoh Perilaku Terpuji kepada Tetangga',
    subtitle: 'Tindakan Konkret Murid di Lingkungan Tempat Tinggal',
    icon: 'CheckCircle2',
    points: [
      'Membantu tetangga membersihkan halaman atau selokan rumah.',
      'Menjenguk tetangga yang sedang sakit dan membawakan buah tangan/doa.',
      'Aktif mengikuti kegiatan kerja bakti kebersihan lingkungan RT/RW.',
      'Meminjam barang tetangga dengan sopan dan mengembalikannya tepat waktu dalam kondisi baik.',
      'Ikut menjaga keamanan lingkungan dan berbicara santun kepada orang yang lebih tua.',
      'Dampak positif: Mempererat tali persaudaraan dan menciptakan lingkungan yang aman dan nyaman.'
    ],
    explanation: 'Tindakan kecil seperti menyapa dan menjaga kebersihan lorong rumah memberikan ketenangan luar biasa bagi tetangga sekitar.'
  },
  {
    id: 's3-7',
    category: 'Hikmah & Keberkahan',
    title: 'E. Hikmah Berbuat Baik kepada Tetangga',
    subtitle: 'Keuntungan Spiritual dan Sosial bagi Kehidupan',
    icon: 'Award',
    points: [
      'Memperoleh pahala yang berlimpah dan ridha dari Allah Swt.',
      'Mempererat tali silaturahmi dan ikatan rasa kekeluargaan.',
      'Menciptakan lingkungan tempat tinggal yang damai, tenteram, dan kondusif.',
      'Menumbuhkan rasa kepedulian sosial, kepekaan, dan empati tinggi.',
      'Memperkuat rasa persaudaraan serta kemudahan saling membantu di saat sulit.'
    ],
    explanation: 'Masyarakat yang saling menghormati antar-tetangga akan terhindar dari konflik perselisihan dan tindak kejahatan.'
  },
  {
    id: 's3-8',
    category: 'Indahnya Toleransi',
    title: 'F. Akhlak Terpuji kepada Non-Muslim',
    subtitle: 'Prinsip Islam dalam Keberagaman Bangsa Indonesia',
    icon: 'ShieldCheck',
    points: [
      'Indonesia adalah bangsa yang kaya akan keberagaman agama, suku, budaya, dan bahasa.',
      'Islam adalah agama Rahmatan lil \'Alamin yang mengajarkan kedamaian dan kasih sayang kepada seluruh umat manusia.',
      'Allah Swt. memerintahkan umat Islam untuk tetap berbuat baik dan berlaku adil kepada non-Muslim yang tidak memusuhi atau memerangi.',
      'Islam melarang keras tindakan zalim, diskriminatif, dan permusuhan tanpa alasan.'
    ],
    arabicText: 'لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ أَنْ تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ',
    translationText: 'Allah tidak melarang kamu berbuat baik dan berlaku adil kepada orang-orang yang tidak memerangimu karena agama. (QS. Al-Mumtahanah: 8)',
    explanation: 'Toleransi dalam Islam berarti menghormati hak beragama orang lain tanpa mencampuradukkan aqidah atau ritual ibadah.'
  },
  {
    id: 's3-9',
    category: 'Implementasi Toleransi',
    title: 'G. Bentuk Akhlak Terpuji kepada Non-Muslim',
    subtitle: '5 Pilar Perilaku Mulia dalam Kehidupan Berbangsa',
    icon: 'HeartHandshake',
    points: [
      '1. Menghormati Perbedaan Agama: Menghargai hak setiap warga untuk memeluk agama dan beribadah.',
      '2. Bersikap Ramah & Santun: Menyapa dengan sopan, tersenyum, dan tidak menghina keyakinan orang lain.',
      '3. Tolong-Menolong dalam Kebaikan: Bekerja sama dalam menjaga kebersihan, bencana alam, dan keamanan kampung.',
      '4. Berlaku Adil: Menegakkan keadilan kepada siapa saja tanpa memandang suku, agama, atau status sosial.',
      '5. Menjaga Kerukunan: Mencegah perselisihan untuk menciptakan iklim hidup yang aman dan tenteram.'
    ],
    explanation: 'Kerjasama sosial kemasyarakatan (muamalah) dengan non-Muslim sangat dianjurkan selama dalam bingkai kebaikan dan kemanusiaan.'
  },
  {
    id: 's3-10',
    category: 'Larangan Larangan',
    title: 'H. Sikap yang Harus Dihindari',
    subtitle: 'Perilaku Buruk yang Merusak Persaudaraan & Kedamaian',
    icon: 'AlertTriangle',
    points: [
      'Mengejek, mengecilkan, atau mencela ajaran agama lain.',
      'Menghina, merusak, atau mengotori tempat ibadah agama lain.',
      'Mengganggu atau membuat kebisingan saat pemeluk agama lain sedang beribadah.',
      'Berkata kasar, mencaci maki, atau memfitnah tetangga.',
      'Menyebarkan ujaran kebencian, berita hoaks, dan adu domba.',
      'Prinsip Islam: Mengajarkan kasih sayang dan kedamaian, bukan permusuhan!'
    ],
    explanation: 'Mencaci maki sesembahan atau keyakinan orang lain dilarang keras dalam Al-Qur\'an karena akan memicu balasan permusuhan yang lebih tajam.'
  },
  {
    id: 's3-11',
    category: 'Kisah Inspiratif',
    title: 'I. Kisah Teladan Rasulullah saw.',
    subtitle: 'Kelebutan Hati Menghadapi Tetangga yang Mengganggu',
    icon: 'BookOpenCheck',
    points: [
      'Rasulullah saw. memiliki seorang tetangga yang setiap hari sering melempari kotoran dan mengganggu beliau.',
      'Meskipun disakiti, Rasulullah saw. tidak pernah membalas dengan keburukan ataupun dendam.',
      'Suatu hari, tetangga tersebut tidak tampak mengganggu. Rasulullah saw. bertanya dan mendapat kabar bahwa tetangga itu sedang sakit keras.',
      'Rasulullah saw. justru menjadi orang pertama yang datang menjenguknya dengan penuh rasa iba dan membawakan makanan.',
      'Pelajaran: Kelembutan, kesabaran, dan kasih sayang mampu meluluhkan kejahatan dan mengubah permusuhan menjadi persaudaraan.'
    ],
    explanation: 'Aksi nyata akhlakul karimah Nabi Muhammad saw. membuat tetangga tersebut merasa tersentuh, malu, dan akhirnya memeluk Islam.'
  },
  {
    id: 's3-12',
    category: 'Aplikasi Pembiasaan',
    title: 'J. Penerapan dalam Kehidupan Sehari-hari',
    subtitle: 'Panduan Pembiasaan di Rumah, Sekolah, dan Masyarakat',
    icon: 'Smile',
    points: [
      'Di Rumah: Menghormati tetangga kanan-kiri, ikut kerja bakti, menjaga kebersihan, & tidak bising.',
      'Di Sekolah: Berteman tanpa membedakan agama/suku, menghormati teman beribadah, & santun kepada guru.',
      'Di Masyarakat: Aktif gotong royong, menjaga keamanan poskamling, membantu korban musibah, & merawat kerukunan.',
      'Aktivitas Kelompok: Mendiskusikan pengalaman membantu tetangga dan merumuskan langkah menjaga kerukunan.'
    ],
    explanation: 'Karakter akhlak terpuji dibentuk dari kebiasaan-kebiasaan kecil yang konsisten dijalankan dari lingkungan rumah hingga masyarakat luas.'
  },
  {
    id: 's3-13',
    category: 'Rangkuman & Refleksi',
    title: 'Rangkuman & Refleksi Diri',
    subtitle: 'Intisari Pembelajaran & Pertanyaan Perenungan Diri',
    icon: 'Scale',
    points: [
      'Akhlak terpuji adalah fondasi utama kesempurnaan iman seorang Muslim.',
      'Islam memerintahkan memuliakan tetangga dan berbuat adil kepada non-Muslim (QS. Al-Mumtahanah: 8).',
      'Kerukunan dan toleransi menciptakan masyarakat yang aman, tenteram, dan harmonis.',
      'Refleksi Diri: 1) Apakah saya sudah bersikap ramah kepada tetangga? 2) Apakah saya sudah menghormati teman berbeda agama? 3) Apa tindakan nyata saya jika melihat tetangga kesulitan?'
    ],
    explanation: 'Marilah kita berkomitmen menjadi pelopor kebaikan dan agen kedamaian di mana pun kita berada.'
  }
];

// ==========================================
// PROYEK TASKS (2 PjBL + 2 PBL)
// ==========================================
export const PROYEK_TASKS_KELAS6_P3: ProyekTask[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    title: 'Proyek 1: Pembuatan Poster Digital Kampanye "Tetangga Rukun, Kita Damai"',
    subtitle: 'Project-Based Learning • Kreasi Visual Pesan Moral & Toleransi',
    duration: '1 Minggu (Tugas Kelompok)',
    goal: 'Peserta didik mampu merancang dan menyajikan poster ajakan kebaikan bertetangga dan toleransi antarumat beragama yang dilengkapi dalil atau slogan positif.',
    steps: [
      'Bentuk kelompok beranggotakan 3-4 murid.',
      'Pilih satu tema utama: "Memuliakan Tetangga" atau "Toleransi & Indahnya Keberagaman".',
      'Cari dalil pendukung (HR. Bukhari-Muslim / QS. Al-Mumtahanah: 8) dan buat kata-kata ajakan yang menarik.',
      'Gambar poster di kertas karton A3 atau desain secara digital menggunakan aplikasi.',
      'Presentasikan hasil karya poster di depan kelas dan tempelkan di mading sekolah.'
    ],
    output: 'Poster Kreatif (Cetak/Digital) Kampanye Kerukunan Bertetangga & Toleransi',
    rubrik: [
      'Kesesuaian Tema & Dalil (Sesuai kebijakan guru)',
      'Kreativitas Desain & Kerapian (Sesuai kebijakan guru)',
      'Kejelasan Pesan Moral (Sesuai kebijakan guru)',
      'Kerjasama & Keaktifan Presentasi (Sesuai kebijakan guru)'
    ]
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    title: 'Proyek 2: Jurnal Aksi Nyata "7 Hari Berbuat Baik kepada Tetangga"',
    subtitle: 'Project-Based Learning • Pembiasaan Character Building & Laporan Catatan Lapangan',
    duration: '7 Hari Mandiri (Laporan Individu)',
    goal: 'Peserta didik melakukan dan mencatat secara rinci aksi nyata kebaikan kepada tetangga di sekitar rumah selama satu minggu berturut-turut.',
    steps: [
      'Buat tabel Jurnal Kebaikan 7 Hari dengan kolom: Hari/Tanggal, Nama Tetangga, Bentuk Kebaikan, Respon Tetangga, dan Paraf Orang Tua.',
      'Lakukan tindakan nyata seperti menyapa ramah, membantu membersihkan halaman, membagikan kue/makanan, atau menjaga ketenangan.',
      'Dokumentasikan dengan foto kegiatan (jika memungkinkan).',
      'Tuliskan kesan dan hikmah perasaan setelah melakukan kebaikan tersebut.',
      'Kumpulkan tabel jurnal dan refleksikan pengalamanmu kepada Guru PAI.'
    ],
    output: 'Buku Laporan Jurnal Pembiasaan Aksi Nyata Bertetangga selama 7 Hari',
    rubrik: [
      'Kedisiplinan & Kejujuran Pengisian Jurnal (Sesuai kebijakan guru)',
      'Variasi Bentuk Kebaikan yang Dilakukan (Sesuai kebijakan guru)',
      'Kedalaman Refleksi Diri (Sesuai kebijakan guru)',
      'Kelengkapan Paraf Orang Tua & Foto (Sesuai kebijakan guru)'
    ]
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    title: 'Proyek 3: Analisis Studi Kasus "Menyelesaikan Perselisihan Sampah & Kebisingan Tetangga"',
    subtitle: 'Problem-Based Learning • Pemecahan Masalah Sosial Lingkungan Tempat Tinggal',
    duration: '2 Jam Pelajaran (Diskusi Kelompok)',
    goal: 'Peserta didik mampu menganalisis akar masalah pertengkaran antar-tetangga akibat sampah/kebisingan dan merumuskan solusi damai berlandaskan akhlakul karimah.',
    steps: [
      'Bacalah skenario kasus: "Pak Budi sering membuang sampah daun di depan pagar rumah Pak Rudi dan memutar radio dengan volume keras di malam hari, sehingga terjadi adu mulut."',
      'Identifikasi kesalahan perilaku yang melanggar hak-hak tetangga.',
      'Diskusikan bagaimana cara menegur dan menyelesaikan konflik tersebut secara santun sesuai teladan Rasulullah saw.',
      'Rumuskan 4 langkah konkret musyawarah tingkat RT untuk mencegah masalah serupa.',
      'Simulasikan (role-play) dialog pemecahan masalah secara damai di depan kelas.'
    ],
    output: 'Lembar Solusi Kasus & Bermain Peran (Role-Play) Musyawarah Damai',
    rubrik: [
      'Ketepatan Analisis Penyebab Konflik (Sesuai kebijakan guru)',
      'Kesesuaian Solusi dengan Ajaran Islam (Sesuai kebijakan guru)',
      'Keahlian Pengambilan Keputusan Musyawarah (Sesuai kebijakan guru)',
      'Penghayatan Peran Role-Play (Sesuai kebijakan guru)'
    ]
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    title: 'Proyek 4: Solusi Kebijakan "Menjaga Kenyamanan Beribadah di Lingkungan Heterogen"',
    subtitle: 'Problem-Based Learning • Penalaran Toleransi & Musyawarah Kebangsaan',
    duration: '2 Jam Pelajaran (Studi Kritis Kelompok)',
    goal: 'Peserta didik mampu merumuskan kesepakatan bersama untuk menjaga kerukunan beragama ketika ada perayaan hari besar agama yang berbeda di perkampungan.',
    steps: [
      'Amati situasi masyarakat heterogen yang terdiri dari pemeluk agama yang beragam.',
      'Diskusikan potensi kesalahpahaman saat ada perayaan keagamaan atau pelaksanaan ibadah.',
      'Rancangkan "Piagam Kesepakatan Rukun Tetangga" yang menjamin kebebasan beribadah, saling menjaga keamanan parkir, dan ketenangan lingkungan.',
      'Hubungkan solusi kalian dengan perintah firman Allah Swt. dalam QS. Al-Mumtahanah ayat 8.',
      'Presentasikan Piagam Rukun Tetangga buatan kelompokmu.'
    ],
    output: 'Draft Piagam Kesepakatan Kerukunan Beragama Tingkat Lingkungan',
    rubrik: [
      'Kedalaman Penalaran Kritis & Pemahaman Toleransi (Sesuai kebijakan guru)',
      'Kesesuaian dengan QS. Al-Mumtahanah: 8 (Sesuai kebijakan guru)',
      'Kerealistisan Aturan yang Dirumuskan (Sesuai kebijakan guru)',
      'Kekompakan & Kejelasan Penyampaian (Sesuai kebijakan guru)'
    ]
  }
];

// ==========================================
// GAMIFIKASI INTERAKTIF (CROSSWORD & WORD PUZZLE)
// ==========================================
export interface CrosswordClue {
  id: number;
  number: number;
  direction: 'across' | 'down';
  clue: string;
  answer: string; // Uppercase
  row: number; // 0-indexed position in grid
  col: number; // 0-indexed position in grid
}

export const CROSSWORD_PUZZLE_KELAS6_P3 = {
  title: 'Teka-Teki Silang Interaktif: Akhlak Terpuji kepada Tetangga & Non-Muslim',
  subtitle: 'Uji pemahamanmu dengan menjawab teka-teki silang bernilai karakter islami!',
  gridSize: 10,
  clues: [
    {
      id: 1,
      number: 1,
      direction: 'across' as const,
      clue: 'Perilaku atau budi pekerti baik yang sesuai ajaran Allah Swt. dinamakan akhlak ...',
      answer: 'TERPUJI',
      row: 1,
      col: 1
    },
    {
      id: 2,
      number: 2,
      direction: 'across' as const,
      clue: 'Orang yang rumahnya tinggal berdekatan dengan tempat tinggal kita disebut ...',
      answer: 'TETANGGA',
      row: 3,
      col: 1
    },
    {
      id: 3,
      number: 3,
      direction: 'across' as const,
      clue: 'Memberikan wajah manis dan ceria saat bertemu tetangga, senyum adalah ...',
      answer: 'SEDEKAH',
      row: 5,
      col: 2
    },
    {
      id: 4,
      number: 4,
      direction: 'across' as const,
      clue: 'Surat Al-Qur\'an yang menegaskan kebolehan berbuat baik kepada non-Muslim yang damai (QS. Al-...)',
      answer: 'MUMTAHANAH',
      row: 7,
      col: 0
    },
    {
      id: 5,
      number: 5,
      direction: 'across' as const,
      clue: 'Sikap saling menghargai perbedaan agama, suku, dan budaya disebut ...',
      answer: 'TOLERANSI',
      row: 9,
      col: 1
    },
    {
      id: 6,
      number: 6,
      direction: 'down' as const,
      clue: 'Nabi yang diutus Allah untuk menyempurnakan akhlak yang mulia (Nabi ... saw.)',
      answer: 'MUHAMMAD',
      row: 0,
      col: 4
    },
    {
      id: 7,
      number: 7,
      direction: 'down' as const,
      clue: 'Ucapan doa keselamatan yang hendaknya diucapkan saat bertemu tetangga sesama Muslim',
      answer: 'SALAM',
      row: 1,
      col: 7
    },
    {
      id: 8,
      number: 8,
      direction: 'down' as const,
      clue: 'Sikap melarang perbuatan sewenang-wenang atau tidak adil kepada siapa pun',
      answer: 'ZALIM',
      row: 4,
      col: 9
    }
  ]
};

// ==========================================
// EVALUASI PEMBELAJARAN (HOTS & COMPUTATIONAL THINKING)
// ==========================================

// BAGIAN A: 10 PILIHAN GANDA
export const EVALUASI_PG_KELAS6_P3: EvaluasiPG[] = [
  {
    id: 1,
    question: 'Ahmad membiasakan diri menyapa tetangganya dengan senyuman dan wajah ceria setiap pagi. Tindakan Ahmad tersebut sesuai dengan hadis Rasulullah saw. bahwa senyum kepada sesama bernilai...',
    options: ['Infak wajib', 'Sedekah', 'Zakat fitrah', 'Haji sunah'],
    answer: 1,
    explanation: 'Rasulullah saw. bersabda bahwa senyummu di hadapan saudaramu/tetanggamu adalah nilai sedekah.'
  },
  {
    id: 2,
    question: 'Kata akhlak berasal dari bahasa Arab "al-akhlaq" yang merupakan bentuk jamak dari kata "khuluq". Secara bahasa kata tersebut mengandung arti...',
    options: ['Pengetahuan dan wawasan', 'Perangai, budi pekerti, atau tabiat', 'Harta kekayaan dan jabatan', 'Cita-cita dan impian'],
    answer: 1,
    explanation: 'Al-akhlaq berarti perangai, budi pekerti, tabiat, atau tingkah laku seseorang.'
  },
  {
    id: 3,
    question: 'Rasulullah saw. menegaskan hubungan erat antara kualitas keimanan seseorang dengan adab bertetangga melalui hadis riwayat Bukhari dan Muslim, yaitu perintah untuk...',
    options: ['Mendahulukan tetangga kaya', 'Memuliakan tetangga', 'Menjauhi tetangga beda suku', 'Meminta bantuan tetangga tiap hari'],
    answer: 1,
    explanation: 'Rasulullah saw. bersabda: "Barang siapa beriman kepada Allah dan hari akhir, hendaklah ia memuliakan tetangganya." (HR. Bukhari & Muslim)'
  },
  {
    id: 4,
    question: 'Di sebuah lingkungan tempat tinggal terdapat tetangga non-Muslim yang sedang mengalami musibah kebanjiran. Berdasarkan ajaran Islam pada QS. Al-Mumtahanah ayat 8, sikap kita yang benar adalah...',
    options: [
      'Acuh tak acuh karena berbeda agama',
      'Tetap memberikan bantuan dan pertolongan secara adil',
      'Menunggu perintah dari ketua RT setempat saja',
      'Melarang warga lain untuk membantu'
    ],
    answer: 1,
    explanation: 'QS. Al-Mumtahanah: 8 memerintahkan umat Islam untuk berbuat baik dan berlaku adil kepada non-Muslim yang tidak memerangi kita.'
  },
  {
    id: 5,
    question: 'Ketika tetangga sedang beristirahat di malam hari, Budi mematikan suara musik keras di rumahnya. Tindakan Budi merupakan cerminan dari akhlak terpuji yaitu...',
    options: ['Menjaga kebersihan lingkungan', 'Menjaga ketenangan dan ketenteraman tetangga', 'Membantu kerja bakti', 'Mengucapkan salam'],
    answer: 1,
    explanation: 'Tidak membuat keributan yang mengganggu tetangga adalah bentuk menghormati hak ketenangan tetangga.'
  },
  {
    id: 6,
    question: 'Analisis alasan utama Mengapa Rasulullah saw. justru datang menjenguk tetangganya yang sakit padahal tetangga tersebut dulunya sering mengganggu dan melempari kotoran...',
    options: [
      'Ingin membalas dendam saat tetangganya lemah',
      'Menunjukkan kelembutan, kasih sayang, dan akhlak mulia meluluhkan hati',
      'Agar dipuji oleh para sahabat di Madinah',
      'Merasa terpaksa karena aturan adat suku'
    ],
    answer: 1,
    explanation: 'Akhlakul karimah Rasulullah saw. didasari kelembutan dan kasih sayang tanpa dendam, sehingga mampu meluluhkan kejahatan.'
  },
  {
    id: 7,
    question: 'Manakah dari pernyataan berikut yang MERUPAKAN contoh penerapan toleransi beragama yang tepat di lingkungan sekolah?',
    options: [
      'Ikut serta melaksanakan ritual ibadah agama lain',
      'Menghormati dan memberikan ketenangan saat teman beda agama beribadah',
      'Mengejek cara berdoa teman yang berbeda keyakinan',
      'Memaksa teman beda agama mengikuti keyakinan kita'
    ],
    answer: 1,
    explanation: 'Toleransi berarti menghormati dan memberi ruang ibadah bagi pemeluk agama lain tanpa mencampuradukkan aqidah.'
  },
  {
    id: 8,
    question: 'Siti meminjam tangga milik tetangganya untuk mengambil mangga. Setelah selesai, Siti mengembalikan tangga tersebut tepat waktu dan mengucapkan terima kasih. Hikmah perilaku Siti adalah...',
    options: [
      'Memicu rasa iri tetangga',
      'Mempererat silaturahmi dan menumbuhkan rasa saling percaya',
      'Membuat tetangga rugi',
      'Menghilangkan pahala kebaikan'
    ],
    answer: 1,
    explanation: 'Meminjam barang dengan sopan dan mengembalikan tepat waktu menciptakan rasa saling percaya dan mempererat persaudaraan.'
  },
  {
    id: 9,
    question: 'Sikap buruk yang HARUS DIHINDARI seorang Muslim dalam kehidupan masyarakat yang beraneka ragam adalah...',
    options: [
      'Mengikuti kegiatan gotong royong warga',
      'Menyebarkan prasangka buruk dan ujaran kebencian',
      'Menjenguk tetangga yang terkena penyakit',
      'Menjaga kebersihan halaman depan rumah'
    ],
    answer: 1,
    explanation: 'Menyebarkan kebencian, prasangka buruk, dan fitnah merupakan perilaku tercela yang merusak kerukunan.'
  },
  {
    id: 10,
    question: 'Apabila di lingkungan tempat tinggalmu terjadi musyawarah RT untuk kerja bakti, peran terbaik yang dapat dilakukan sebagai murid kelas 6 adalah...',
    options: [
      'Mengunci diri di dalam kamar',
      'Ikut serta membantu pekerjaan ringan sesuai kemampuan secara ikhlas',
      'Meminta upah uang sebelum bekerja',
      'Mengganggu warga yang sedang bekerja'
    ],
    answer: 1,
    explanation: 'Ikut serta gotong royong sesuai kemampuan merupakan wujud kepedulian dan akhlak terpuji dalam masyarakat.'
  }
];

// BAGIAN B: 10 PILIHAN GANDA KOMPLEKS (Multi-select)
export const EVALUASI_PGK_KELAS6_P3: EvaluasiPGK[] = [
  {
    id: 1,
    question: 'Pilihlah pernyataan-pernyataan yang BENAR mengenai hakikat akhlak terpuji (akhlakul karimah)! (Jawaban lebih dari satu)',
    options: [
      'Berasal dari kata al-akhlaq yang berarti budi pekerti atau tabiat',
      'Sesuai dengan ajaran Allah Swt. dan contoh Rasulullah saw.',
      'Hanya ditunjukkan kepada orang yang kaya dan berjabatan',
      'Menjadi cermin dan bukti kesempurnaan iman seorang Muslim'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Akhlakul karimah ditunjukkan kepada semua orang tanpa pandang bulu dan merupakan bukti kesempurnaan iman.'
  },
  {
    id: 2,
    question: 'Manakah bentuk perilaku terpuji yang dapat kita tunjukkan kepada tetangga sesama Muslim? (Jawaban lebih dari satu)',
    options: [
      'Mengucapkan salam ketika saling menyapa di jalan',
      'Menunjukkan wajah ramah dan tersenyum tulus',
      'Menyembunyikan sampah di selokan tetangga',
      'Membantu dan menjenguk ketika tetangga mengalami musibah/sakit'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Mengucapkan salam, bersikap ramah, dan membantu tetangga yang sakit/musibah adalah akhlak mulia.'
  },
  {
    id: 3,
    question: 'Berdasarkan firman Allah Swt. dalam QS. Al-Mumtahanah ayat 8, bagaimana prinsip hubungan umat Islam dengan non-Muslim? (Jawaban lebih dari satu)',
    options: [
      'Boleh berbuat baik kepada non-Muslim yang hidup damai',
      'Harus berlaku adil tanpa membeda-bedakan keyakinan',
      'Dilarang bekerja sama dalam hal kebaikan dan kemanusiaan',
      'Tetap menjaga perdamaian selama tidak diperangi karena agama'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Islam memerintahkan berbuat baik, berlaku adil, dan menjaga perdamaian dengan non-Muslim yang tidak memusuhi.'
  },
  {
    id: 4,
    question: 'Sikap-sikap apa saja yang HARUS DIHINDARI dalam hubungan bertetangga dan bermasyarakat? (Jawaban lebih dari satu)',
    options: [
      'Memutar musik dengan volume sangat keras hingga larut malam',
      'Mengejek dan menghina ajaran agama lain',
      'Meminjamkan alat kebersihan untuk kerja bakti',
      'Membuang sampah sembarangan di pekarangan rumah tetangga'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Bising malam hari, menghina agama lain, dan buang sampah di pekarangan tetangga merupakan perilaku tercela.'
  },
  {
    id: 5,
    question: 'Hikmah dan manfaat positif yang diperoleh apabila kita senantiasa memuliakan tetangga antara lain... (Jawaban lebih dari satu)',
    options: [
      'Memperoleh pahala dan ridha dari Allah Swt.',
      'Menciptakan iklim lingkungan yang aman dan damai',
      'Menyebabkan timbulnya rasa iri dan dendam',
      'Mempererat ikatan silaturahmi dan rasa persaudaraan'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Memuliakan tetangga mendatangkan pahala, kedamaian lingkungan, dan silaturahmi yang erat.'
  },
  {
    id: 6,
    question: 'Contoh kerjasama dalam hal kebaikan sosial (muamalah) yang diperbolehkan antarumat beragama adalah... (Jawaban lebih dari satu)',
    options: [
      'Kerja bakti membersihkan lingkungan tempat tinggal',
      'Mengikuti ritual ibadah di tempat ibadah agama lain',
      'Membantu penggalangan dana korban bencana alam',
      'Menjaga keamanan dan ketertiban jalan kampung'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Kerjasama kebersihan, bantuan bencana, dan keamanan kampung diperbolehkan. Kerjasama ibadah agama tidak diperbolehkan.'
  },
  {
    id: 7,
    question: 'Pelajaran berharga yang dapat dipetik dari kisah keteladanan Nabi Muhammad saw. saat menjenguk tetangganya yang sakit adalah... (Jawaban lebih dari satu)',
    options: [
      'Kelembutan dan kesabaran mampu meluluhkan kejahatan',
      'Dendam harus dibalas dengan kejahatan yang sebanding',
      'Kasih sayang tanpa batas merupakan ciri akhlak mulia Nabi',
      'Membantu orang lain mendatangkan hidayah dan simpati'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Nabi mengajar kelembutan, kasih sayang tanpa dendam, dan membantu sesama.'
  },
  {
    id: 8,
    question: 'Bagaimanakah penerapan akhlak terpuji kepada tetangga di lingkungan sekolah? (Jawaban lebih dari satu)',
    options: [
      'Berteman dengan siapa saja tanpa membeda-bedakan suku/agama',
      'Menghormati teman yang sedang menjalankan ibadah',
      'Berbicara sopan kepada guru dan sesama teman',
      'Hanya mau belajar kelompok dengan teman seagama saja'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Berteman inklusif, menghormati ibadah teman, dan bertutur kata sopan adalah penerapan akhlak terpuji di sekolah.'
  },
  {
    id: 9,
    question: 'Tindakan manakah yang menunjukkan sikap menjaga ketenangan dan hak privasi tetangga? (Jawaban lebih dari satu)',
    options: [
      'Membuka pintu pagar tetangga tanpa izin pemiliknya',
      'Tidak memotong pembicaraan orang tua saat mengobrol',
      'Meminta izin sebelum mengambil barang yang dipinjam',
      'Mengatur volume televisi agar tidak terdengar sampai luar rumah'
    ],
    correctAnswers: [1, 2, 3],
    explanation: 'Tidak memotong pembicaraan, minta izin meminjam barang, dan kontrol volume audio menjaga hak privasi tetangga.'
  },
  {
    id: 10,
    question: 'Karakter murid yang mencerminkan pemahaman Computational Thinking dalam menyelesaikan masalah kerukunan adalah... (Jawaban lebih dari satu)',
    options: [
      'Mengenali pola penyebab utama perselisihan warga',
      'Menguraikan langkah-langkah musyawarah secara terstruktur',
      'Langsung emosi dan mengajak bertengkar saat ada masalah',
      'Fokus pada solusi perdamaian yang adil bagi semua pihak'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Mengenali pola masalah, berpikir terstruktur, dan mencari solusi adil adalah cerminan CT dalam kehidupan sosial.'
  }
];

// BAGIAN C: 5 MENJODOHKAN
export const EVALUASI_MENJODOHKAN_KELAS6_P3: EvaluasiMenjodohkan[] = [
  {
    id: 1,
    premise: 'HR. Ahmad tentang tujuan diutusnya Rasulullah saw.',
    matchTarget: 'Menyempurnakan akhlak yang mulia'
  },
  {
    id: 2,
    premise: 'QS. Al-Mumtahanah ayat 8',
    matchTarget: 'Perintah berbuat baik & adil kepada non-Muslim yang tidak memerangi'
  },
  {
    id: 3,
    premise: 'HR. Bukhari dan Muslim tentang bukti keimanan',
    matchTarget: 'Memuliakan tetangga'
  },
  {
    id: 4,
    premise: 'Senyum yang tulus kepada sesama / tetangga',
    matchTarget: 'Bernilai pahala sedekah'
  },
  {
    id: 5,
    premise: 'Sikap Rasulullah saw. ketika tetangga yang memusuhinya sakit',
    matchTarget: 'Menjenguknya dengan penuh rasa iba dan mendoakan'
  }
];

// BAGIAN D: 10 BENAR / SALAH + ISIAN ALASAN
export const EVALUASI_BENAR_SALAH_KELAS6_P3: EvaluasiBenarSalah[] = [
  {
    id: 1,
    statement: 'Islam mengajarkan kita untuk hanya memuliakan tetangga yang kaya dan berasal dari suku yang sama.',
    isCorrect: false,
    explanation: 'Salah. Islam memerintahkan memuliakan seluruh tetangga tanpa membeda-bedakan agama, suku, maupun latar belakang sosial.'
  },
  {
    id: 2,
    statement: 'Menjaga ketenangan dengan tidak membunyikan musik keras di malam hari termasuk bentuk menghormati hak tetangga.',
    isCorrect: true,
    explanation: 'Benar. Setiap tetangga berhak mendapatkan rasa tenang dan ketenteraman di lingkungan tempat tinggalnya.'
  },
  {
    id: 3,
    statement: 'Umat Islam dilarang keras bekerja sama dengan non-Muslim dalam hal kebersihan lingkungan dan kemanusiaan.',
    isCorrect: false,
    explanation: 'Salah. Bekerja sama dalam hal kebaikan sosial (muamalah) seperti kebersihan dan kemanusiaan sangat dianjurkan.'
  },
  {
    id: 4,
    statement: 'Nabi Muhammad saw. membalas ejekan dan kotoran tetangganya dengan melempar balik kotoran ke rumahnya.',
    isCorrect: false,
    explanation: 'Salah. Nabi Muhammad saw. tidak pernah membalas keburukan dengan keburukan, melainkan dengan kelembutan dan kesabaran.'
  },
  {
    id: 5,
    statement: 'Mengejek tempat ibadah atau keyakinan agama lain dapat memicu permusuhan dan perpecahan bangsa.',
    isCorrect: true,
    explanation: 'Benar. Menghina keyakinan lain dilarang Al-Qur\'an karena merusak kerukunan dan memancing balasan tercela.'
  },
  {
    id: 6,
    statement: 'Menurut HR. Bukhari dan Muslim, memuliakan tetangga merupakan salah satu bukti keimanan kepada Allah dan Hari Akhir.',
    isCorrect: true,
    explanation: 'Benar. Rasulullah saw. menyandingkan keimanan kepada Allah Swt. dan hari akhir dengan kewajiban memuliakan tetangga.'
  },
  {
    id: 7,
    statement: 'Membuang sampah daun gugur ke depan halaman rumah tetangga merupakan hal biasa yang tidak melanggar akhlak.',
    isCorrect: false,
    explanation: 'Salah. Membuang sampah di pekarangan tetangga mengotori lingkungan dan mengganggu hak kebersihan tetangga.'
  },
  {
    id: 8,
    statement: 'Berlaku adil harus ditegakkan kepada siapa saja tanpa memandang latar belakang suku, agama, maupun status sosial.',
    isCorrect: true,
    explanation: 'Benar. Keadilan dalam Islam bersifat universal dan wajib diberikan kepada seluruh manusia.'
  },
  {
    id: 9,
    statement: 'Apabila tetangga berbeda agama merayakan hari besarnya, kita diperbolehkan merusak ketenangan mereka.',
    isCorrect: false,
    explanation: 'Salah. Kita harus tetap menghormati dan tidak mengganggu jalannya ibadah atau perayaan agama lain.'
  },
  {
    id: 10,
    statement: 'Gotong royong membersihkan selokan kampung dapat mempererat rasa persaudaraan dan menciptakan lingkungan damai.',
    isCorrect: true,
    explanation: 'Benar. Kebersamaan dalam kebaikan sosial menumbuhkan rasa kebersamaan dan persaudaraan yang kokoh.'
  }
];

// BAGIAN E: 5 URAIAN HOTS
export const EVALUASI_URAIAN_KELAS6_P3: EvaluasiUraian[] = [
  {
    id: 1,
    question: 'Jelaskan pengertian akhlakul karimah dan mengapa keimanan seseorang belum sempurna apabila ia masih sering menyakiti hati tetangganya!',
    rubricKey: 'Akhlakul karimah adalah perilaku mulia sesuai ajaran Allah Swt. dan teladan Nabi. Keimanan belum sempurna karena Rasulullah saw. menegaskan bahwa memuliakan tetangga adalah cermin dan bukti nyata iman kepada Allah dan Hari Akhir (HR. Bukhari & Muslim).'
  },
  {
    id: 2,
    question: 'Analisislah kandungan isi QS. Al-Mumtahanah ayat 8 mengenai batasan dan aturan berbuat baik serta berlaku adil kepada warga masyarakat yang non-Muslim!',
    rubricKey: 'QS. Al-Mumtahanah: 8 memerintahkan umat Islam untuk berbuat baik dan berlaku adil kepada non-Muslim selama mereka hidup damai dan tidak memerangi umat Islam karena agama. Batasannya adalah dalam urusan kemanusiaan/sosial (muamalah), bukan dalam ibadah/aqidah.'
  },
  {
    id: 3,
    question: 'Sebutkan 5 contoh tindakan konkret yang dapat kamu lakukan di sekolah untuk menunjukkan sikap toleransi dan menghormati teman yang berbeda agama!',
    rubricKey: '1) Tidak mengganggu saat teman beda agama berdoa/beribadah; 2) Berteman dan belajar kelompok tanpa membeda-bedakan; 3) Berbicara dengan bahasa yang santun; 4) Tidak mengejek ajaran agama lain; 5) Saling menolong saat ada teman yang mengalami musibah.'
  },
  {
    id: 4,
    question: 'Bagaimana kisah teladan Rasulullah saw. saat menjenguk tetangganya yang sakit mengajarkan kita cara mengatasi permusuhan di lingkungan sekitar?',
    rubricKey: 'Kisah Nabi mengajarkan bahwa kejahatan dan permusuhan tidak boleh dibalas dengan kejahatan. Sebaliknya, dibalas dengan kelembutan, kesabaran, dan empati. Keikhlasan Nabi menjenguk justru meluluhkan rasa benci tetangganya dan mengubah permusuhan menjadi persaudaraan.'
  },
  {
    id: 5,
    question: 'Gunakan logika pemecahan masalah (Computational Thinking): Jika di lingkungan rumahmu ada tetangga yang sering menyetel radio keras malam hari, susunlah 4 langkah bijak untuk mengatasi masalah tersebut tanpa menimbulkan pertengkaran!',
    rubricKey: '1) Dekomposisi: Memahami bahwa penyebab masalah adalah suara keras di jam istirahat; 2) Pengenalan Pola: Mengetahui bahwa berbicara langsung secara kasar akan memicu emosi; 3) Rencana Langkah: Menemui tetangga secara sopan di siang hari / menyampaikan pesan santun lewat pengurus RT; 4) Algoritma Solusi: Mengusulkan penggunaan earphone atau pembatasan jam volume radio secara musyawarah kekeluargaan.'
  }
];
