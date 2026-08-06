// DATA KELAS 1 PEMBELAJARAN 4: Mengenal dan Menerapkan Lima Rukun Islam serta Memahami Makna Syahadatain
// Berdasarkan Buku Teks PAI Kelas 1 BAB IV

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

export const SLIDES_KELAS1_P4: SlideItem[] = [
  {
    id: 1,
    badge: 'Tujuan Pembelajaran',
    title: 'BAB IV: Mengenal dan Menerapkan Lima Rukun Islam',
    content: 'Selamat datang di Pembelajaran 4! Pada bab ini kita akan belajar mengenal lima rukun Islam secara urut, memahami makna syahadatain, serta membiasakan diri mengamalkannya sejak dini.',
    bulletPoints: [
      '1. Menyebutkan lima rukun Islam secara urut.',
      '2. Menjelaskan pengertian rukun Islam dengan bahasa sederhana.',
      '3. Memahami makna dua kalimat syahadat (Syahadatain).',
      '4. Menunjukkan sikap yang mencerminkan pelaksanaan rukun Islam dalam kehidupan sehari-hari.',
      '5. Membiasakan diri melaksanakan ajaran Islam sesuai kemampuan sebagai peserta didik.'
    ]
  },
  {
    id: 2,
    badge: 'A. Pengertian Rukun Islam',
    title: 'Apa Itu Rukun Islam?',
    content: 'Rukun Islam adalah lima dasar utama yang harus dijalankan oleh setiap muslim. Rukun Islam menjadi pedoman bagi umat Islam dalam beribadah kepada Allah Swt.',
    bulletPoints: [
      '• Pondasi Agama: Rasulullah saw. bersabda bahwa Islam dibangun di atas lima perkara utama.',
      '• Belajar Sejak Dini: Sebagai murid SD, kita belajar dan membiasakan diri melaksanakan ajaran Islam setiap hari.',
      '• Pembentukan Akhlak: Mengamalkan rukun Islam membuat kita menjadi anak yang saleh, taat, dan disiplin.'
    ],
    keyTerms: [
      { term: 'Rukun Islam', definition: 'Lima pondasi atau dasar utama ajaran agama Islam.' },
      { term: 'Muslim', definition: 'Orang yang beragama Islam dan taat kepada Allah Swt.' }
    ]
  },
  {
    id: 3,
    badge: 'B. 5 Rukun Islam',
    title: 'Urutan Lima Rukun Islam',
    content: 'Rukun Islam ada lima dan harus dihafal serta dipahami secara berurutan:',
    bulletPoints: [
      '1. Mengucapkan dua kalimat syahadat (Syahadatain)',
      '2. Mendirikan salat lima waktu',
      '3. Menunaikan zakat',
      '4. Berpuasa di bulan Ramadan',
      '5. Menunaikan ibadah haji bagi yang mampu'
    ],
    quiz: {
      question: 'Berapakah jumlah rukun Islam?',
      options: ['A. Tiga', 'B. Lima', 'C. Enam'],
      correctIndex: 1,
      explanation: 'Rukun Islam berjumlah 5 perkara.'
    }
  },
  {
    id: 4,
    badge: '1. Syahadat Tauhid',
    title: 'Rukun 1: Syahadat Tauhid',
    content: 'Syahadat adalah pintu masuk agama Islam. Syahadat Tauhid adalah persaksian bahwa Allah Swt. adalah satu-satunya Tuhan yang wajib disembah.',
    arabic: 'أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ',
    transliteration: 'Asyhadu allā ilāha illallāh',
    meaning: 'Aku bersaksi bahwa tidak ada Tuhan selain Allah.',
    bulletPoints: [
      '• Mengakui bahwa tidak ada sesembahan yang berhak disembah selain Allah Swt.',
      '• Menolak segala bentuk kemusyrikan.'
    ]
  },
  {
    id: 5,
    badge: '1. Syahadat Rasul',
    title: 'Rukun 1: Syahadat Rasul',
    content: 'Syahadat Rasul adalah persaksian bahwa Nabi Muhammad saw. adalah utusan Allah Swt. yang menjadi teladan hidup kita.',
    arabic: 'وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ',
    transliteration: 'Wa asyhadu anna Muḥammadar Rasūlullāh',
    meaning: 'Dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah.',
    bulletPoints: [
      '• Mengakui Nabi Muhammad saw. sebagai nabi dan rasul terakhir.',
      '• Meneladani sifat jujur, amanah, dan kebaikan Rasulullah saw.'
    ],
    quiz: {
      question: 'Pengakuan bahwa Nabi Muhammad adalah utusan Allah disebut...',
      options: ['A. Syahadat Tauhid', 'B. Syahadat Rasul', 'C. Zakat Fitrah'],
      correctIndex: 1,
      explanation: 'Syahadat Rasul adalah persaksian bahwa Nabi Muhammad saw. adalah utusan Allah.'
    }
  },
  {
    id: 6,
    badge: 'Makna Syahadatain',
    title: 'Makna Dua Kalimat Syahadat (Syahadatain)',
    content: 'Syahadatain artinya dua kalimat syahadat (Syahadat Tauhid dan Syahadat Rasul).',
    bulletPoints: [
      '1. Allah Swt. adalah satu-satunya Tuhan yang wajib disembah.',
      '2. Nabi Muhammad saw. adalah rasul terakhir yang harus kita ikuti petunjuknya.',
      '3. Kita harus mencintai Allah Swt. dan Rasul-Nya di atas segalanya.',
      '4. Kita bersedia menjalankan seluruh ajaran Islam dengan ikhlas.'
    ]
  },
  {
    id: 7,
    badge: '2. Mendirikan Salat',
    title: 'Rukun 2: Mendirikan Salat',
    content: 'Salat merupakan tiang agama Islam. Salat lima waktu hukumnya wajib bagi orang Islam yang sudah memenuhi syarat.',
    bulletPoints: [
      '• Salat Mengajarkan: Mengingat Allah Swt., disiplin waktu, menjaga kebersihan/kesucian wudu, dan tertib.',
      '• Sebagai Murid SD: Kita belajar gerakan salat, hafalan bacaan salat, dan membiasakan salat berjamaah bersama orang tua & guru.'
    ],
    keyTerms: [
      { term: 'Tiang Agama', definition: 'Umpama bangunan, salat adalah tiang penopang keimanan seorang muslim.' }
    ]
  },
  {
    id: 8,
    badge: '3. Menunaikan Zakat',
    title: 'Rukun 3: Menunaikan Zakat',
    content: 'Zakat adalah memberikan sebagian harta kepada orang yang berhak menerimanya (seperti fakir dan miskin) sesuai ketentuan Allah Swt.',
    bulletPoints: [
      '• Belajar Berbagi: Anak-anak belajar arti kepedulian melalui bersedekah, membantu teman, berbagi makanan, dan menolong sesama.',
      '• Menghilangkan Pelit: Zakat membersihkan harta dan jiwa dari sifat kikir.'
    ]
  },
  {
    id: 9,
    badge: '4. Berpuasa Ramadan',
    title: 'Rukun 4: Berpuasa di Bulan Ramadan',
    content: 'Puasa adalah menahan diri dari makan, minum, dan hal yang membatalkan mulai terbit fajar hingga terbenam matahari.',
    bulletPoints: [
      '• Belajar Bertahap: Anak-anak yang belum balig dianjurkan belajar berpuasa sedikit demi sedikit (seperti puasa setengah hari).',
      '• Nilai Karakter: Puasa melatih rasa sabar, disiplin, syukur, dan kemampuan mengendalikan diri.'
    ]
  },
  {
    id: 10,
    badge: '5. Ibadah Haji',
    title: 'Rukun 5: Menunaikan Ibadah Haji',
    content: 'Haji adalah ibadah ke Baitullah di Kota Makkah pada waktu tertentu bagi orang Islam yang mampu secara fisik dan finansial.',
    bulletPoints: [
      '• Tempat Suci: Ka\'bah dan Masjidil Haram di Kota Makkah.',
      '• Sejarah Islam: Mengenang perjuangan Nabi Ibrahim a.s. dan Nabi Ismail a.s. yang taat kepada Allah Swt.'
    ]
  },
  {
    id: 11,
    badge: 'C. Penerapan Sehari-hari',
    title: 'Menerapkan Rukun Islam di Rumah & Sekolah',
    content: 'Kita dapat membiasakan amalan rukun Islam dalam kehidupan sehari-hari:',
    bulletPoints: [
      '• Di Rumah: Mengucapkan syahadat dengan benar, belajar salat bersama orang tua, berdoa setiap hari, bersedekah kotak amal, belajar puasa.',
      '• Di Sekolah: Berdoa sebelum belajar, ikuti salat berjamaah dhuha/dzuhur, berbagi bekal dengan teman, bersikap jujur dan sopan kepada guru.',
      '• Di Masyarakat: Mengucapkan salam, membantu tetangga, menjaga kebersihan masjid.'
    ]
  },
  {
    id: 12,
    badge: 'D. Kisah Teladan',
    title: 'Kisah Teladan: "Belajar Salat Bersama Ayah"',
    content: 'Suatu sore, Hasan melihat Ayah bersiap salat Magrib.',
    bulletPoints: [
      '• Hasan bertanya: "Ayah, bolehkah Hasan ikut salat?"',
      '• Ayah tersenyum: "Tentu boleh! Salat adalah salah satu rukun Islam."',
      '• Ayah mengajari Hasan wudu, berdiri tegak, rukuk, sujud, dan duduk dengan sabar.',
      '• Selesai salat, Hasan merasa gembira dan bertekad rajin belajar salat setiap hari.'
    ],
    quote: {
      text: 'Salat adalah tiang agama. Barangsiapa mendirikannya, berarti ia menegakkan agamanya.',
      source: 'Kisah Teladan PAI Kelas 1 Bab IV'
    }
  },
  {
    id: 13,
    badge: 'E. Hikmah Utama',
    title: 'Hikmah Menerapkan Rukun Islam',
    content: 'Anak yang membiasakan diri menjalankan rukun Islam akan mendapatkan hikmah besar:',
    bulletPoints: [
      '1. Menjadi anak yang taat dan dicintai Allah Swt.',
      '2. Rajin beribadah dan disiplin terhadap waktu.',
      '3. Memiliki sifat jujur, sabar, dan suka berbagi.',
      '4. Menghormati orang tua, guru, dan menyayangi sesama.',
      '5. Hati menjadi tenang dan berakhlak mulia.'
    ]
  },
  {
    id: 14,
    badge: 'Ringkasan Bab IV',
    title: 'Rangkuman Rukun Islam',
    content: 'Mari ingat kembali 5 Rukun Islam:',
    bulletPoints: [
      '1. Syahadatain (Syahadat Tauhid + Syahadat Rasul)',
      '2. Salat 5 waktu',
      '3. Zakat',
      '4. Puasa Ramadan',
      '5. Haji bagi yang mampu'
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

export const PROYEK_KELAS1_P4: ProyekItem[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 1',
    title: 'Poster Diorama "Pohon 5 Rukun Islam"',
    objective: 'Murid membuat poster pohon kreatif yang memiliki 5 buah/daun utama bertuliskan 5 rukun Islam secara berurutan untuk ditempel di mading kelas.',
    scenarioOrSteps: [
      '1. Menggambar batang pohon utama di atas kertas gambar A3/F4.',
      '2. Menggunting 5 buah/daun dari kertas lipat warna-warni.',
      '3. Menuliskan angka 1-5 beserta nama Rukun Islam (1. Syahadat, 2. Salat, 3. Zakat, 4. Puasa, 5. Haji) secara rapi.',
      '4. Menempelkan buah Rukun Islam di cabang pohon secara berurutan dari bawah ke atas.',
      '5. Menceritakan isi poster pohon Rukun Islam di hadapan teman-teman.'
    ],
    output: 'Poster Pohon 5 Rukun Islam Kreatif',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Alat, bahan kertas lipat, dan panduan menggunting disesuaikan oleh guru kelas.'
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning 2',
    title: 'Kartu Saku "Dua Kalimat Syahadat & Artinya"',
    objective: 'Murid menghias kartu saku lipat berisi tulisan Arab Syahadat Tauhid dan Syahadat Rasul beserta artinya untuk dihafal bersama keluarga.',
    scenarioOrSteps: [
      '1. Guru menyediakan pola kartu lipat bertuliskan teks Arab Syahadatain.',
      '2. Murid mewarnai kaligrafi Syahadat Tauhid dan Syahadat Rasul.',
      '3. Menuliskan arti bahasa Indonesia di lembar sebaliknya dengan bimbingan.',
      '4. Melipat kartu menjadi bentuk saku mini dan mempraktikkan pelafalannya.'
    ],
    output: 'Kartu Saku Syahadatain Hias',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Penggunaan warna dan hiasan kartu diatur oleh guru.'
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 1',
    title: 'Studi Kasus: Mengajak Teman Belajar Salat dan Wudu',
    objective: 'Murid menyelesaikan masalah ketika ada teman yang malu belum bisa gerakan salat agar mau belajar bersama dengan gembira.',
    scenarioOrSteps: [
      'Kasus: "Dono merasa bingung dan malu saat diajak salat berjamaah di mushola sekolah karena belum hafal gerakan rukuk dan sujud dengan benar. Dono memilih duduk di luar mushola."',
      'Diskusi Pemecahan Masalah:',
      'a. Mengapa Dono tidak boleh malu belajar salat?',
      'b. Bagaimana cara Hasan dan teman-teman mengajak Dono dengan santun seperti dalam cerita teladan?',
      'c. Peragakan cara membimbing teman belajar wudu dan salat secara sabar di depan kelas.'
    ],
    output: 'Lembar Solusi & Roleplay Sikap Saling Membantu',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Skenario peran dan kelompok dipandu langsung oleh guru PAI.'
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning 2',
    title: 'Analisis Sikap: Berbagi Bekal dan Sedekah di Sekolah',
    objective: 'Murid memecahkan masalah kepedulian sosial ketika ada teman yang lupa membawa bekal makan siang saat jam istirahat.',
    scenarioOrSteps: [
      'Kasus: "Saat jam istirahat, Ali melihat Umar duduk sendirian di sudut kelas karena lupa membawa bekal makanan dari rumah. Ali memiliki dua roti di dalam tasnya."',
      'Diskusi Pemecahan Masalah:',
      'a. Tindakan apa yang mencerminkan amalan zakat/sedekah yang harus Ali lakukan?',
      'b. Kalimat tayyibah atau ucapan apa yang diucapkan Umar saat menerima bantuan bekal?',
      'c. Mengapa sifat suka berbagi dapat menyenangkan hati Allah Swt. dan mempererat pertemanan?'
    ],
    output: 'Bagan Keputusan Anak Saleh & Refleksi Berbagi',
    kebijakanGuruNote: 'Sesuai kebijakan guru: Pendampingan tanya jawab disesuaikan dengan kondisi murid.'
  }
];

// GAMIFIKASI INTERAKTIF: Urutkan & Susun Rukun Islam
export interface RukunIslamPuzzleGame {
  id: number;
  title: string;
  scrambledItems: { id: number; text: string; correctOrder: number }[];
  hint: string;
  badge: string;
}

export const PUZZLE_GAMES_KELAS1_P4: RukunIslamPuzzleGame[] = [
  {
    id: 1,
    title: 'Urutkan 5 Rukun Islam dari ke-1 sampai ke-5',
    scrambledItems: [
      { id: 101, text: 'Mendirikan Salat', correctOrder: 2 },
      { id: 102, text: 'Berpuasa Ramadan', correctOrder: 4 },
      { id: 103, text: 'Mengucapkan Syahadatain', correctOrder: 1 },
      { id: 104, text: 'Menunaikan Ibadah Haji', correctOrder: 5 },
      { id: 105, text: 'Menunaikan Zakat', correctOrder: 3 }
    ],
    hint: 'Rukun Islam pertama adalah mengucapkan Syahadatain, dan rukun kedua adalah tiang agama (Salat).',
    badge: 'Bintang Utama Rukun Islam'
  },
  {
    id: 2,
    title: 'Pasangkan Arti Syahadat Tauhid & Rasul',
    scrambledItems: [
      { id: 201, text: 'Tiang Agama Islam', correctOrder: 3 },
      { id: 202, text: 'Aku bersaksi tidak ada Tuhan selain Allah', correctOrder: 1 },
      { id: 203, text: 'Nabi Muhammad adalah utusan Allah', correctOrder: 2 },
      { id: 204, text: 'Menahan diri dari terbit fajar hingga terbenam', correctOrder: 4 }
    ],
    hint: 'Syahadat Tauhid menyatakan kesaksian kepada Allah, disusul Syahadat Rasul kepada Nabi Muhammad.',
    badge: 'Pencinta Syahadatain'
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

export const EVALUASI_PG_KELAS1_P4: SoalPG[] = [
  {
    id: 1,
    question: 'Jumlah Rukun Islam ada...',
    options: ['A. Tiga', 'B. Lima', 'C. Enam'],
    correctAnswer: 1,
    explanation: 'Rukun Islam berjumlah lima.'
  },
  {
    id: 2,
    question: 'Rukun Islam yang pertama adalah...',
    options: ['A. Mendirikan salat', 'B. Mengucapkan dua kalimat syahadat', 'C. Berpuasa Ramadan'],
    correctAnswer: 1,
    explanation: 'Rukun Islam pertama adalah mengucapkan dua kalimat syahadat (Syahadatain).'
  },
  {
    id: 3,
    question: 'Syahadat Tauhid berisi persaksian bahwa...',
    options: [
      'A. Tidak ada Tuhan selain Allah',
      'B. Nabi Muhammad adalah utusan Allah',
      'C. Malaikat diciptakan dari cahaya'
    ],
    correctAnswer: 0,
    explanation: 'Syahadat Tauhid menegaskan bahwa tiada Tuhan selain Allah Swt.'
  },
  {
    id: 4,
    question: 'Salat disebut sebagai ... agama Islam.',
    options: ['A. Hiasan', 'B. Tiang', 'C. Atap'],
    correctAnswer: 1,
    explanation: 'Salat merupakan tiang agama.'
  },
  {
    id: 5,
    question: 'Memberikan sebagian harta kepada orang yang berhak menerimanya disebut...',
    options: ['A. Zakat', 'B. Puasa', 'C. Syahadat'],
    correctAnswer: 0,
    explanation: 'Zakat adalah memberikan sebagian harta kepada orang yang berhak.'
  },
  {
    id: 6,
    question: 'Berpuasa Ramadan dilakukan mulai terbit fajar hingga...',
    options: ['A. Tengah malam', 'B. Terbenam matahari', 'C. Siang hari'],
    correctAnswer: 1,
    explanation: 'Puasa dilakukan sejak terbit fajar hingga terbenam matahari (waktu Magrib).'
  },
  {
    id: 7,
    question: 'Ibadah Haji dilaksanakan di kota suci...',
    options: ['A. Makkah', 'B. Jakarta', 'C. Madinah'],
    correctAnswer: 0,
    explanation: 'Ibadah haji dilakukan di Baitullah Kota Makkah.'
  },
  {
    id: 8,
    question: 'Meneladani kisah Hasan yang belajar salat bersama Ayah mengajarkan kita untuk...',
    options: ['A. Malu belajar salat', 'B. Rajin belajar ibadah sejak kecil', 'C. Menolak ajakan berwudu'],
    correctAnswer: 1,
    explanation: 'Kita harus rajin dan gembira belajar beribadah sejak usia dini.'
  },
  {
    id: 9,
    question: 'Berbagi bekal makanan dengan teman yang tidak membawa bekal merupakan bentuk pengamalan rukun...',
    options: ['A. Zakat / Sedekah', 'B. Haji', 'C. Puasa'],
    correctAnswer: 0,
    explanation: 'Berbagi makanan melatih sikap peduli dan dermawan sesuai ajaran zakat dan sedekah.'
  },
  {
    id: 10,
    question: 'Anak yang rajin mengamalkan rukun Islam akan tumbuh menjadi anak yang...',
    options: ['A. Sombong', 'B. Taat dan berakhlak mulia', 'C. Pemalas'],
    correctAnswer: 1,
    explanation: 'Mengamalkan rukun Islam membentuk pribadi taat dan berakhlak terpuji.'
  }
];

export const EVALUASI_PGK_KELAS1_P4: SoalPGK[] = [
  {
    id: 1,
    question: 'Pilihlah DUA kalimat yang termasuk ke dalam Syahadatain! (Pilih 2 jawaban)',
    options: [
      'A. Asyhadu allā ilāha illallāh',
      'B. Subḥānallāhi walḥamdulillāh',
      'C. Wa asyhadu anna Muḥammadar Rasūlullāh',
      'D. Astaghfirullāhal \'Aẓīm'
    ],
    correctAnswers: [0, 2],
    explanation: 'Syahadatain terdiri dari Syahadat Tauhid (Asyhadu allā ilāha illallāh) dan Syahadat Rasul (Wa asyhadu anna Muḥammadar Rasūlullāh).'
  },
  {
    id: 2,
    question: 'Pilihlah DUA nilai karakter terpuji yang dilatih melalui ibadah Puasa Ramadan! (Pilih 2 jawaban)',
    options: [
      'A. Melatih kesabaran',
      'B. Melatih sifat pemarah',
      'C. Melatih kemampuan mengendalikan diri',
      'D. Melatih sikap boros'
    ],
    correctAnswers: [0, 2],
    explanation: 'Puasa melatih rasa sabar, disiplin, dan mengendalikan diri dari hawa nafsu.'
  }
];

export const EVALUASI_MENJODOHKAN_KELAS1_P4: SoalMenjodohkan[] = [
  {
    id: 1,
    statement: 'Rukun Islam ke-2 yang merupakan tiang agama',
    matchOption: 'Mendirikan Salat'
  },
  {
    id: 2,
    statement: 'Rukun Islam ke-3 yang mengajarkan berbagi sebagian harta',
    matchOption: 'Menunaikan Zakat'
  }
];

export const ALL_MATCH_OPTIONS_P4 = [
  'Mendirikan Salat',
  'Menunaikan Zakat',
  'Berpuasa Ramadan',
  'Mengucapkan Syahadatain'
];

export const EVALUASI_BENAR_SALAH_KELAS1_P4: SoalBenarSalah[] = [
  {
    id: 1,
    statement: 'Syahadat Rasul adalah persaksian bahwa Nabi Muhammad saw. adalah utusan Allah Swt.',
    isCorrect: true,
    sampleReason: 'Benar, Syahadat Rasul mengakui Nabi Muhammad sebagai utusan Allah.'
  },
  {
    id: 2,
    statement: 'Ibadah Haji wajib dilaksanakan oleh semua anak kecil walaupun belum mampu.',
    isCorrect: false,
    sampleReason: 'Salah, ibadah haji hanya wajib bagi orang Islam yang mampu.'
  }
];

export const EVALUASI_URAIAN_KELAS1_P4: SoalUraian[] = [
  {
    id: 1,
    question: 'Sebutkan 5 rukun Islam secara berurutan dari yang pertama sampai kelima!',
    sampleAnswer: '1. Mengucapkan dua kalimat syahadat (Syahadatain)\n2. Mendirikan salat\n3. Menunaikan zakat\n4. Berpuasa pada bulan Ramadan\n5. Menunaikan ibadah haji bagi yang mampu'
  },
  {
    id: 2,
    question: 'Apa arti dari bacaan Syahadat Tauhid "Asyhadu allā ilāha illallāh"?',
    sampleAnswer: 'Artinya: "Aku bersaksi bahwa tidak ada Tuhan selain Allah."'
  },
  {
    id: 3,
    question: '(Computational Thinking - Pengurutan Logis): Ahmad sedang bersiap melaksanakan salat Magrib di rumah. Urutkanlah langkah kegiatan berikut agar sesuai dengan aturan Islam:\n[ Mencecap wudu - Takbiratul ihram - Berdiri menghadap kiblat - Niat salat ]',
    sampleAnswer: 'Urutan yang benar:\n1. Berwudu hingga bersih\n2. Berdiri tegak menghadap kiblat\n3. Niat salat Magrib\n4. Takbiratul ihram'
  },
  {
    id: 4,
    question: '(HOTS - Analisis Perilaku): Mengapa salat disebut sebagai "tiang agama"? Apa yang akan terjadi pada sebuah rumah jika tiangnya roboh?',
    sampleAnswer: 'Salat disebut tiang agama karena menjadi penopang utama keimanan seorang muslim. Seperti rumah tanpa tiang yang akan roboh, tanpa salat agama seseorang akan menjadi lemah.'
  }
];
