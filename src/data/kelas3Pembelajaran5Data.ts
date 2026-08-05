// Data Lengkap Kelas 3 Pembelajaran 5 berdasarkan PDF Resmi BAB VI
// Kisah Kelahiran Nabi Muhammad saw. dan Masa Kanak-Kanak Beliau

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

export interface TTSClue {
  id: number;
  number: number;
  direction: 'across' | 'down';
  clue: string;
  answer: string;
  row: number; // 0-based index
  col: number; // 0-based index
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
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 3 PEMBELAJARAN 5 / BAB VI)
// =========================================================================
export const KELAS3_P5_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Tujuan Pembelajaran & Ayo Mengamati',
    subtitle: 'Kisah Kelahiran Nabi Muhammad saw. dan Masa Kanak-Kanak Beliau',
    iconName: 'Target',
    points: [
      '1. Menceritakan kisah kelahiran Nabi Muhammad saw.',
      '2. Menjelaskan silsilah keluarga Nabi Muhammad saw.',
      '3. Menceritakan masa kanak-kanak Nabi Muhammad saw.',
      '4. Meneladani akhlak mulia Nabi Muhammad saw. sejak kecil.',
      '5. Menerapkan nilai-nilai keteladanan Rasulullah saw. dalam kehidupan sehari-hari.'
    ],
    highlightBox: {
      title: '📖 Firman Allah Swt. (Q.S. Al-Ahzab: 21)',
      content: '"Sungguh, pada diri Rasulullah terdapat suri teladan yang baik bagimu." (Q.S. Al-Ahzab: 21)',
      type: 'info'
    }
  },
  {
    id: 2,
    title: '2. Silsilah Nabi Muhammad saw.',
    subtitle: 'Keluarga Mulia Bangsawan Quraisy Kota Makkah',
    iconName: 'UserCheck',
    points: [
      '• Nama Lengkap: Muhammad bin Abdullah bin Abdul Muthalib bin Hasyim bin Abdi Manaf bin Qushay bin Kilab.',
      '• Suku: Quraisy (suku yang sangat dihormati oleh masyarakat Arab pada masa itu).',
      '• Ayah Beliau: Abdullah bin Abdul Muthalib.',
      '• Ibu Beliau: Aminah binti Wahab.',
      '• Kakek Beliau: Abdul Muthalib (seorang pemimpin Quraisy yang sangat disegani).',
      '• Paman Beliau: Abu Thalib (sangat menyayangi dan melindungi Nabi Muhammad saw. hingga dewasa).'
    ],
    highlightBox: {
      title: '📌 Poin Penting Silsilah',
      content: 'Nabi Muhammad saw. lahir dari garis keturunan bangsawan Quraisy yang mulia, jujur, dan dihormati seluruh penduduk Makkah.',
      type: 'tip'
    }
  },
  {
    id: 3,
    title: '3. Kisah Kelahiran Nabi Muhammad saw.',
    subtitle: 'Peristiwa Bersejarah Lahirnya Nabi Terakhir di Kota Makkah',
    iconName: 'Sparkles',
    points: [
      '1. Tempat & Waktu Lahir: Lahir di Kota Makkah pada 12 Rabiulawal, bertepatan dengan Tahun Gajah (sekitar tahun 570 Masehi).',
      '2. Peristiwa Tahun Gajah: Pasukan bergajah dipimpin Abrahah dari Yaman datang hendak menghancurkan Ka’bah.',
      '3. Pertolongan Allah Swt.: Allah Swt. melindungi Ka’bah dengan mengirimkan burung Ababil yang melemparkan batu api dari neraka (diabadikan dalam Surah Al-Fil). Pasukan Abrahah hancur.',
      '4. Lahir Sebagai Yatim: Sebelum Nabi lahir, ayah beliau (Abdullah) telah wafat saat perjalanan dagang. Namun Allah memelihara beliau dengan kasih sayang.'
    ]
  },
  {
    id: 4,
    title: '4. Masa Bayi & Asuhan Halimah As-Sa’diyah',
    subtitle: 'Kebiasaan Masyarakat Arab & Keberkahan Keluarga Bani Sa’ad',
    iconName: 'Heart',
    points: [
      '1. Kebiasaan Ibu Susu: Masyarakat Makkah biasa menitipkan bayi baru lahir kepada ibu susu di pedalaman agar tumbuh sehat dan pandai berbahasa Arab fasih.',
      '2. Ibu Susu Beliau: Diasuh oleh Halimah As-Sa’diyah dari Bani Sa’ad.',
      '3. Keberkahan di Rumah Halimah: Selama mengasuh Nabi Muhammad saw., hewan ternak Halimah menjadi sehat, hasil susu bertambah melimpah, dan kehidupan keluarganya menjadi penuh berkah.',
      '4. Kembali ke Ibu Kandung: Setelah beberapa tahun di pedalaman, beliau kembali ke pelukan ibunya, Aminah.'
    ]
  },
  {
    id: 5,
    title: '5. Perjalanan Hidup: Menjadi Yatim Piatu',
    subtitle: 'Ketabahan Nabi Menghadapi Ujian Berat Sejak Usia Dini',
    iconName: 'AlertCircle',
    points: [
      '1. Ibu Wafat (Usia 6 Tahun): Ibunda Aminah wafat di daerah Abwa dalam perjalanan pulang dari Madinah. Beliau menjadi anak yatim piatu.',
      '2. Diasuh Kakek Abdul Muthalib: Setelah ibunya wafat, kakeknya merawat dengan penuh rasa kasih sayang.',
      '3. Kakek Wafat (Usia 8 Tahun): Dua tahun kemudian, kakeknya Abdul Muthalib wafat.',
      '4. Diasuh Paman Abu Thalib: Selanjutnya, pamannya Abu Thalib merawat dan melindungi beliau dengan ikhlas hingga dewasa.',
      '🌟 Hasil Keteladanan: Walau menjadi yatim piatu sejak kecil, Nabi Muhammad saw. tumbuh menjadi pribadi yang sangat kuat, sabar, dan penyayang.'
    ]
  },
  {
    id: 6,
    title: '6. Akhlak Mulia Masa Kanak-Kanak',
    subtitle: 'Sifat-Sifat Terpuji Nabi Muhammad saw. Sejak Kecil',
    iconName: 'Award',
    points: [
      'Sejak kecil Nabi Muhammad saw. sangat terkenal dengan sifat-sifat mulia berikut:',
      '• Jujur dalam perkataan dan perbuatan',
      '• Sopan santun dan rendah hati',
      '• Penyayang kepada sesama dan hewan',
      '• Rajin membantu pekerjaan keluarga',
      '• Bertanggung jawab terhadap tugas',
      '• Tidak pernah berkata kasar dan tidak pernah berbohong'
    ]
  },
  {
    id: 7,
    title: '7. Bekerja Menggembalakan Kambing & Berdagang',
    subtitle: 'Melatih Kesabaran, Kepemimpinan, dan Kerja Keras',
    iconName: 'Briefcase',
    points: [
      '1. Menggembalakan Kambing: Untuk membantu meringankan beban pamannya, Nabi menggembalakan kambing milik penduduk Makkah. Pekerjaan ini melatih kesabaran, tanggung jawab, dan keberanian.',
      '2. Berdagang ke Negeri Syam (Usia 12 Tahun): Nabi ikut berdagang bersama pamannya Abu Thalib ke Negeri Syam.',
      '3. Pelajaran Berdagang: Dari perjalanan dagang tersebut, beliau memperoleh banyak pengalaman tentang kejujuran, kerja keras, dan cara berinteraksi dengan masyarakat.'
    ]
  },
  {
    id: 8,
    title: '8. Gelar Al-Amin (Orang yang Dapat Dipercaya)',
    subtitle: 'Gelar Kehormatan dari Masyarakat Makkah',
    iconName: 'ShieldCheck',
    points: [
      '1. Arti Al-Amin: Orang yang dapat dipercaya (dapat memegang amanah).',
      '2. Alasan Pemberian Gelar: Masyarakat Makkah memberikan gelar Al-Amin karena Nabi selalu berkata jujur, menepati janji, menjaga barang titipan, dan tidak pernah menipu.',
      '3. Pelajaran Bagi Kita: Gelar Al-Amin menjadi bukti nyata bahwa akhlak mulia dan kejujuran harus dibiasakan sejak usia anak-anak.'
    ]
  },
  {
    id: 9,
    title: '9. 10 Hikmah Kisah Masa Kecil Rasulullah saw.',
    subtitle: 'Pelajaran Berharga untuk Kehidupan Murid Sekolah',
    iconName: 'CheckCircle2',
    points: [
      '1. Tetap sabar saat menghadapi ujian hidup.',
      '2. Menjadi anak yang jujur dalam perkataan dan perbuatan.',
      '3. Menyayangi orang tua, keluarga, dan sesama.',
      '4. Rajin membantu pekerjaan di rumah.',
      '5. Bertanggung jawab terhadap tugas yang diberikan.',
      '6. Tidak mudah mengeluh ketika mengalami kesulitan.',
      '7. Menjaga amanah dan kepercayaan orang lain.',
      '8. Gemar bekerja keras dan tidak malas.',
      '9. Menumbuhkan rasa cinta kepada Rasulullah saw.',
      '10. Meneladani akhlak beliau dalam kehidupan sehari-hari.'
    ]
  },
  {
    id: 10,
    title: '10. Penerapan Keteladanan dalam Kehidupan',
    subtitle: 'Langkah Nyata di Rumah, Sekolah, dan Masyarakat',
    iconName: 'Compass',
    points: [
      '🏠 Di Rumah: Menghormati orang tua, membantu pekerjaan rumah, jujur, menyayangi saudara.',
      '🏫 Di Sekolah: Menghormati guru, disiplin hadir, tidak menyontek, menjaga kebersihan kelas, berteman baik.',
      '🌍 Di Masyarakat: Menolong tetangga, mengucapkan salam, menjaga kebersihan lingkungan, tidak mengejek teman, bersikap sopan kepada yang tua.'
    ]
  },
  {
    id: 11,
    title: '11. Kisah Inspiratif: Kejujuran Rizki di Sekolah',
    subtitle: 'Meneladani Sifat Al-Amin dalam Kejadian Sehari-Hari',
    iconName: 'BookOpen',
    points: [
      '📖 Cerita Rizki:',
      'Suatu hari, Rizki menemukan uang di halaman sekolah tanpa ada orang yang tahu. Rizki teringat gelar Al-Amin Nabi Muhammad saw. yang selalu menjaga amanah.',
      'Rizki segera menyerahkan uang itu kepada gurunya agar dikembalikan kepada pemiliknya.',
      'Guru memuji kejujuran Rizki di depan teman-teman kelas.',
      '🌟 Hikmah: Menjadi anak yang jujur akan membawa keberkahan dan mendatangkan kepercayaan dari orang lain.'
    ]
  },
  {
    id: 12,
    title: '12. Rangkuman Inti & Refleksi Diri Bab VI',
    subtitle: 'Rangkuman Materi & Pertanyaan Perenungan Diri',
    iconName: 'HelpCircle',
    points: [
      '📝 RANGKUMAN INTI:',
      '• Nabi Muhammad saw. lahir di Makkah pada 12 Rabiulawal Tahun Gajah dalam keadaan yatim.',
      '• Ayah: Abdullah, Ibu: Aminah, Kakek: Abdul Muthalib, Paman: Abu Thalib, Ibu Susu: Halimah As-Sa’diyah.',
      '• Gelar beliau adalah Al-Amin (dapat dipercaya) karena kejujuran dan sifat amanahnya.',
      '',
      '🤔 PERTANYAAN REFLEKSI DIRI:',
      '1. Apa keteladanan Nabi Muhammad saw. yang paling ingin saya terapkan?',
      '2. Apakah saya sudah bersikap jujur seperti Rasulullah saw.?',
      '3. Bagaimana cara saya menunjukkan rasa cinta kepada Nabi Muhammad saw.?',
      '4. Sudahkah saya membantu orang tua dan guru dengan ikhlas?',
      '5. Perubahan baik apa yang akan saya lakukan setelah mempelajari kisah masa kecil Rasulullah saw.?'
    ]
  }
];

// =========================================================================
// 2. PENUGASAN PROYEK MURID (2 PjBL + 2 PBL) - Sesuai Kebijakan Guru
// =========================================================================
export const KELAS3_P5_PROJECTS: ProjectTask[] = [
  {
    id: 'p5_pjbl_1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Bagan Silsilah Kreatif "Keluarga Mulia Rasulullah saw."',
    subtitle: 'Proyek Membuat Pohon Silsilah Nabi Muhammad saw. Bergambar & Berwarna',
    objective: 'Peserta didik mampu menyusun dan merancang bagan pohon silsilah keluarga Nabi Muhammad saw. mulai dari kakek, ayah, ibu, hingga paman dengan rapi.',
    steps: [
      '1. Siapkan kertas karton A3, pensil warna/spidol, dan stiker hiasan.',
      '2. Gambar struktur pohon keluarga dengan cabang-cabang silsilah.',
      '3. Tuliskan nama-nama tokoh utama silsilah Nabi: Qushay, Abdi Manaf, Hasyim, Abdul Muthalib (Kakek), Abdullah (Ayah), Aminah (Ibu), Abu Thalib (Paman), dan Nabi Muhammad saw.',
      '4. Berikan keterangan peran singkat di bawah setiap nama (contoh: "Ibu Susu: Halimah As-Sa’diyah").',
      '5. Hias bagan pohon silsilah secara kreatif dan presentasikan di depan kelas.'
    ],
    output: 'Poster Bagan Silsilah Keluarga Nabi Muhammad saw. berukuran A3.',
    teacherNote: 'Rubrik penilaian kerapian tulisan, kebenaran silsilah, dan batas waktu penyerahan disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p5_pjbl_2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Buku Diari Kebaikan "Aku Anak Jujur & Al-Amin"',
    subtitle: 'Proyek Pembiasaan Perilaku Jujur & Amanah Selama 1 Minggu',
    objective: 'Peserta didik mampu mencatat dan membiasakan tindakan jujur, amanah, dan membantu orang tua/guru sebagaimana keteladanan masa kecil Nabi.',
    steps: [
      '1. Buatlah buku harian kecil berjudul "Diari Al-Amin Cilik" berisi tabel 7 hari.',
      '2. Setiap hari catat minimal 1 perbuatan jujur/amanah yang dilakukan (contoh: mengembalikan pulpen teman, tidak menyontek, berbicara jujur).',
      '3. Mintalah tanda tangan atau paraf orang tua/guru sebagai bukti verifikasi.',
      '4. Tuliskan ringkasan kesan: "Bagaimana perasaanku setelah menjadi anak jujur?"',
      '5. Kumpulkan buku diari kebaikan kepada guru agama.'
    ],
    output: 'Buku Diari Kebaikan "Aku Anak Jujur & Al-Amin" terverifikasi.',
    teacherNote: 'Mekanisme verifikasi dan bentuk tindak lanjut diari harian disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p5_pbl_1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Analisis Kasus: "Mengapa Anak Sering Takut Berkata Jujur?"',
    subtitle: 'Pemecahan Masalah Kejujuran Saat Melakukan Kesalahan di Sekolah',
    objective: 'Peserta didik mampu menganalisis penyebab munculnya kebiasaan berbohong saat takut dimarahi dan merumuskan solusi berani berbuat jujur.',
    steps: [
      '1. Bacalah cerita kasus: "Ahmad tidak sengaja menjatuhkan pot bunga kelas saat bermain. Ahmad takut dimarahi guru."',
      '2. Identifikasi masalah: Mengapa Ahmad merasa takut untuk mengaku jujur?',
      '3. Diskusikan dalam kelompok: Mengapa sifat jujur lebih mulia dan disukai Allah daripada berbohong untuk menghindari hukuman?',
      '4. Kaitkan dengan kisah Nabi Muhammad saw. yang mendapat gelar Al-Amin karena selalu berkata jujur.',
      '5. Tuliskan 3 pesan bijak tentang "Keberanian Berkata Jujur" untuk dipajang di sudut baca kelas.'
    ],
    output: 'Lembar Solusi Kasus "Berani Jujur" & Kartu Pesan Kebijakan.',
    teacherNote: 'Pembagian kelompok diskusi dan rubrik presentasi disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p5_pbl_2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Studi Kasus: Sikap Menghadapi Ujian & Barang Teman yang Tertinggal',
    subtitle: 'Solusi Menjaga Amanah Meneladani Gelar Al-Amin Rasulullah saw.',
    objective: 'Peserta didik mampu menemukan solusi terbaik ketika menemukan barang hilang atau ketika menghadapi cobaan hidup/tugas sulit.',
    steps: [
      '1. Bacalah kisah inspiratif Rizki yang menemukan uang di halaman sekolah pada buku materi.',
      '2. Diskusikan kasus 1: Apa yang harus kamu lakukan jika menemukan dompet/pensil teman tertinggal di atas meja?',
      '3. Diskusikan kasus 2: Bagaimana sikapmu jika mengalami kesulitan belajar seperti Nabi yang sabar sejak kecil?',
      '4. Buatlah poster alur penanganan barang temuan "Sentra Barang Hilang Jujur" di lingkungan sekolah.',
      '5. Simulasikan pementasan drama singkat peran anak jujur di depan teman-teman.'
    ],
    output: 'Poster Alur Sentra Barang Hilang & Naskah Drama Pendek Anak Jujur.',
    teacherNote: 'Penilaian peran drama dan tempat pemasangan poster alur disesuaikan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI INTERAKTIF: TEKA-TEKI SILANG (TTS) KISAH NABI MUHAMMAD SAW.
// =========================================================================
export const KELAS3_P5_TTS: TTSClue[] = [
  {
    id: 1,
    number: 1,
    direction: 'across',
    clue: 'Kota tempat kelahiran Nabi Muhammad saw. (6 huruf)',
    answer: 'MAKKAH',
    row: 0,
    col: 0
  },
  {
    id: 2,
    number: 2,
    direction: 'across',
    clue: 'Gelar kejujuran Nabi Muhammad saw. yang artinya dapat dipercaya (6 huruf)',
    answer: 'ALAMIN',
    row: 2,
    col: 0
  },
  {
    id: 3,
    number: 3,
    direction: 'across',
    clue: 'Tempat wafatnya Ibunda Aminah saat Nabi berusia 6 tahun (4 huruf)',
    answer: 'ABWA',
    row: 4,
    col: 2
  },
  {
    id: 4,
    number: 1,
    direction: 'down',
    clue: 'Nama ibunda kandung Nabi Muhammad saw. (6 huruf)',
    answer: 'AMINAH',
    row: 0,
    col: 5
  },
  {
    id: 5,
    number: 4,
    direction: 'down',
    clue: 'Nama pasukan bergajah Abrahah yang hendak menghancurkan Ka’bah (5 huruf)',
    answer: 'GAJAH',
    row: 0,
    col: 1
  },
  {
    id: 6,
    number: 5,
    direction: 'down',
    clue: 'Keadaan Nabi saat lahir karena ayahnya telah wafat (5 huruf)',
    answer: 'YATIM',
    row: 1,
    col: 3
  }
];

// Fallback Game Questions if stage mode is clicked
export const KELAS3_P5_GAME: GameQuestion[] = [
  {
    id: 1,
    stage: 'Tingkat 1: Peristiwa Kelahiran Nabi',
    prompt: 'Nabi Muhammad saw. lahir di Kota Makkah pada 12 Rabiulawal. Tahun kelahiran beliau terkenal dengan sebutan...',
    options: [
      {
        id: '1a',
        text: 'Tahun Gajah (karena peristiwa hancurnya pasukan bergajah Abrahah)',
        isCorrect: true,
        explanation: 'Benar! Disebut Tahun Gajah karena saat itu pasukan bergajah Abrahah hendak menghancurkan Ka’bah.'
      },
      {
        id: '1b',
        text: 'Tahun Bintang',
        isCorrect: false,
        explanation: 'Salah! Kelahiran Nabi terjadi pada Tahun Gajah.'
      },
      {
        id: '1c',
        text: 'Tahun Hijriah',
        isCorrect: false,
        explanation: 'Salah! Kalender Hijriah dihitung kemudian hari saat peristiwa Hijrah.'
      }
    ]
  },
  {
    id: 2,
    stage: 'Tingkat 2: Silsilah Keluarga Nabi',
    prompt: 'Siapakah nama paman yang sangat menyayangi dan merawat Nabi Muhammad saw. hingga beliau dewasa?',
    options: [
      {
        id: '2a',
        text: 'Abu Thalib',
        isCorrect: true,
        explanation: 'Tepat sekali! Abu Thalib mengasuh dan melindungi Nabi Muhammad saw. dengan ikhlas.'
      },
      {
        id: '2b',
        text: 'Abu Lahab',
        isCorrect: false,
        explanation: 'Salah! Abu Lahab adalah paman yang memusuhi dakwah Islam.'
      },
      {
        id: '2c',
        text: 'Abdul Muthalib',
        isCorrect: false,
        explanation: 'Salah! Abdul Muthalib adalah kakek beliau.'
      }
    ]
  },
  {
    id: 3,
    stage: 'Tingkat 3: Gelar Kehormatan Al-Amin',
    prompt: 'Masyarakat Makkah memberikan gelar Al-Amin kepada Nabi Muhammad saw. Gelar Al-Amin memiliki arti...',
    options: [
      {
        id: '3a',
        text: 'Orang yang kaya raya',
        isCorrect: false,
        explanation: 'Salah! Al-Amin bukan berarti kaya.'
      },
      {
        id: '3b',
        text: 'Orang yang dapat dipercaya',
        isCorrect: true,
        explanation: 'Luar biasa! Al-Amin artinya orang yang dapat dipercaya karena kejujurannya.'
      },
      {
        id: '3c',
        text: 'Panglima perang',
        isCorrect: false,
        explanation: 'Salah! Gelar Al-Amin diberikan karena akhlak mulia dan kejujuran beliau.'
      }
    ]
  },
  {
    id: 4,
    stage: 'Tingkat 4: Pekerjaan Masa Kecil Nabi',
    prompt: 'Untuk membantu meringankan beban pamannya, masa kecil Nabi Muhammad saw. diisi dengan pekerjaan...',
    options: [
      {
        id: '4a',
        text: 'Menggembalakan kambing milik penduduk Makkah',
        isCorrect: true,
        explanation: 'Sempurna! Menggembalakan kambing melatih kesabaran, kepemimpinan, dan keberanian.'
      },
      {
        id: '4b',
        text: 'Membuat bangunan istana mewah',
        isCorrect: false,
        explanation: 'Salah! Pekerjaan masa kecil beliau menggembalakan kambing.'
      },
      {
        id: '4c',
        text: 'Berburu singa di pedalaman',
        isCorrect: false,
        explanation: 'Salah! Beliau menggembalakan ternak kambing.'
      }
    ]
  },
  {
    id: 5,
    stage: 'Tingkat 5: Penerapan Kejujuran',
    prompt: 'Rizki menemukan uang di halaman sekolah dan menyerahkannya kepada guru. Perilaku Rizki meneladani sifat Nabi...',
    options: [
      {
        id: '5a',
        text: 'Jujur dan Amanah (Sifat Al-Amin)',
        isCorrect: true,
        explanation: 'Hebat! Menyerahkan barang temuan adalah bukti sifat jujur dan menjaga amanah.'
      },
      {
        id: '5b',
        text: 'Sombong dan ingin dipuji',
        isCorrect: false,
        explanation: 'Salah! Rizki berniat jujur karena meneladani Rasulullah saw.'
      },
      {
        id: '5c',
        text: 'Malas bertanya',
        isCorrect: false,
        explanation: 'Salah! Rizki bertindak cepat menyampaikan kepada guru.'
      }
    ]
  }
];

// =========================================================================
// 4. EVALUASI PEMBELAJARAN (HOTS & COMPUTATIONAL THINKING)
// =========================================================================

// A. PILIHAN GANDA (10 Soal)
export const EVALUASI_P5_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Nabi Muhammad saw. lahir di Kota Makkah pada tanggal 12 Rabiulawal. Peristiwa kelahiran beliau bertepatan dengan terjadinya penyerangan pasukan bergajah yang dinamakan...',
    options: ['A. Tahun Hijriah', 'B. Tahun Gajah', 'C. Tahun Masehi', 'D. Tahun Duka Cita'],
    correctAnswerIndex: 1,
    explanation: 'Tahun kelahiran Nabi dinamakan Tahun Gajah karena bertepatan dengan peristiwa pasukan bergajah Abrahah.'
  },
  {
    id: 2,
    question: 'Siapakah nama ibunda susu Nabi Muhammad saw. yang merawat beliau di pedalaman pedesaan Bani Sa’ad dengan penuh keberkahan?',
    options: ['A. Aminah binti Wahab', 'B. Halimah As-Sa’diyah', 'C. Khadijah binti Khuwailid', 'D. Fatimah az-Zahra'],
    correctAnswerIndex: 1,
    explanation: 'Halimah As-Sa’diyah adalah ibu susu Nabi Muhammad saw.'
  },
  {
    id: 3,
    question: 'Sebelum Nabi Muhammad saw. lahir, ayah beliau telah wafat di Madinah. Oleh karena itu, Nabi Muhammad saw. lahir dalam keadaan...',
    options: ['A. Yatim Piatu', 'B. Yatim (tanpa ayah)', 'C. Piatu (tanpa ibu)', 'D. Anak angkat'],
    correctAnswerIndex: 1,
    explanation: 'Nabi lahir sebagai yatim karena ayahnya (Abdullah) wafat sebelum Nabi lahir.'
  },
  {
    id: 4,
    question: 'Ibunda Nabi Muhammad saw., Aminah binti Wahab, wafat ketika Nabi berusia sekitar 6 tahun di daerah...',
    options: ['A. Makkah', 'B. Abwa', 'C. Syam', 'D. Thaif'],
    correctAnswerIndex: 1,
    explanation: 'Ibunda Aminah wafat di daerah Abwa saat perjalanan pulang dari Madinah.'
  },
  {
    id: 5,
    question: 'Setelah kakeknya Abdul Muthalib wafat, Nabi Muhammad saw. diasuh dan dilindungi oleh pamannya yang bernama...',
    options: ['A. Abu Jahal', 'B. Abu Lahab', 'C. Abu Thalib', 'D. Abu Bakar'],
    correctAnswerIndex: 2,
    explanation: 'Abu Thalib adalah paman yang mengasuh Nabi dengan ikhlas hingga dewasa.'
  },
  {
    id: 6,
    question: 'Karena kejujuran dan akhlaknya yang mulia dalam berbicara maupun berdagang, masyarakat Makkah memberikan gelar kehormatan kepada Nabi Muhammad saw. yaitu...',
    options: ['A. Al-Farooq', 'B. Al-Amin', 'C. As-Siddiq', 'D. Al-Karim'],
    correctAnswerIndex: 1,
    explanation: 'Gelar Al-Amin berarti orang yang dapat dipercaya.'
  },
  {
    id: 7,
    question: 'Pekerjaan menggembalakan kambing milik penduduk Makkah yang dilakukan Nabi pada masa kecil mengajarkan nilai-nilai terpuji, yaitu...',
    options: [
      'A. Kesabaran, tanggung jawab, dan kepedulian',
      'B. Sombong dan ingin menguasai',
      'C. Bermalas-malasan di padang rumput',
      'D. Rasa iri hati'
    ],
    correctAnswerIndex: 0,
    explanation: 'Menggembalakan kambing melatih kesabaran, tanggung jawab, kepemimpinan, dan kepedulian.'
  },
  {
    id: 8,
    question: 'Perhatikan firman Allah Swt. dalam Surah Al-Ahzab ayat 21! "Sungguh, pada diri Rasulullah terdapat suri teladan yang baik bagimu." Istilah suri teladan yang baik disebut...',
    options: ['A. Uswatun Hasanah', 'B. Akhlak Mazmumah', 'C. Hubbul Wathan', 'D. Syiar Islam'],
    correctAnswerIndex: 0,
    explanation: 'Suri teladan yang baik disebut Uswatun Hasanah.'
  },
  {
    id: 9,
    question: 'Perhatikan alur masa pengasuhan Nabi Muhammad saw. (Computational Thinking):\n(1) Diasuh oleh Kakek Abdul Muthalib\n(2) Diasuh oleh Ibu Susu Halimah As-Sa’diyah\n(3) Diasuh oleh Paman Abu Thalib\n(4) Diasuh oleh Ibu Kandung Aminah\nUrutan kronologis pengasuhan Nabi yang tepat sejak bayi adalah...',
    options: ['A. (2) -> (4) -> (1) -> (3)', 'B. (4) -> (2) -> (3) -> (1)', 'C. (1) -> (2) -> (3) -> (4)', 'D. (3) -> (1) -> (2) -> (4)'],
    correctAnswerIndex: 0,
    explanation: 'Nabi diasuh ibu susu Halimah (2), kembali ke ibu Aminah (4), diasuh kakek Abdul Muthalib (1), lalu paman Abu Thalib (3).'
  },
  {
    id: 10,
    question: 'Seorang murid menemukan dompet berisi uang di perpustakaan sekolah. Penerapan keteladanan sifat Al-Amin yang benar adalah...',
    options: [
      'A. Mengambil uangnya lalu membuang dompetnya',
      'B. Menyerahkan dompet beserta isinya kepada petugas perpustakaan/guru',
      'C. Pura-pura tidak melihat barang tersebut',
      'D. Menyembunyikan dompet di tas pribadi'
    ],
    correctAnswerIndex: 1,
    explanation: 'Menyerahkan dompet temuan kepada guru/petugas adalah bukti sifat jujur dan amanah (Al-Amin).'
  }
];

// B. PILIHAN GANDA KOMPLEKS (5 Soal)
export const EVALUASI_P5_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Pilihlah TOKOH-TOKOH DALAM SILSILAH KELUARGA NABI MUHAMMAD SAW. berikut ini yang tepat! (Pilih lebih dari satu)',
    options: [
      'A. Abdullah (Ayah)',
      'B. Aminah binti Wahab (Ibu)',
      'C. Abdul Muthalib (Kakek)',
      'D. Abu Jahal (Ibu Susu)'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Abdullah (Ayah), Aminah (Ibu), dan Abdul Muthalib (Kakek) adalah keluarga mulia Nabi.'
  },
  {
    id: 2,
    question: 'Manakah SIFAT-SIFAT TERPUJI MASA KANAK-KANAK NABI MUHAMMAD SAW.? (Pilih lebih dari satu)',
    options: [
      'A. Jujur dan tidak pernah berbohong',
      'B. Sopan, santun, dan rendah hati',
      'C. Suka marah dan berkata kasar',
      'D. Rajin membantu keluarga dan bertanggung jawab'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Sifat masa kecil Nabi antara lain jujur, sopan, rendah hati, rajin membantu, dan bertanggung jawab.'
  },
  {
    id: 3,
    question: 'Pilihlah PENERAPAN KETELADANAN NABI MUHAMMAD SAW. DI SEKOLAH! (Pilih lebih dari satu)',
    options: [
      'A. Menghormati guru dan menyapa dengan santun',
      'B. Menyontek jawaban teman saat ujian berlangsung',
      'C. Disiplin datang tepat waktu ke sekolah',
      'D. Menjaga kebersihan dan ketertiban kelas'
    ],
    correctAnswerIndices: [0, 2, 3],
    explanation: 'Menghormati guru, disiplin hadir, dan menjaga kebersihan adalah penerapan di sekolah. Menyontek dilarang.'
  },
  {
    id: 4,
    question: 'Manakah HIKMAH KISAH KELAHIRAN DAN MASA KECIL RASULULLAH SAW.? (Pilih lebih dari satu)',
    options: [
      'A. Melatih kesabaran dalam menghadapi ujian',
      'B. Menumbuhkan rasa cinta kepada Rasulullah saw.',
      'C. Membiasakan hidup malas dan tergantung pada orang lain',
      'D. Membentuk pribadi yang jujur dan menjaga amanah'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Kisah Nabi melatih kesabaran, kejujuran, amanah, dan rasa cinta kepada Rasulullah saw.'
  },
  {
    id: 5,
    question: 'Pilihlah BUKTI KEBERKAHAN YANG DIRASAKAN KELUARGA HALIMAH AS-SA’DIYAH saat mengasuh Nabi! (Pilih lebih dari satu)',
    options: [
      'A. Hewan ternak menjadi sehat dan gemuk',
      'B. Hasil perasan susu ternak bertambah melimpah',
      'C. Kehidupan keluarga menjadi penuh kedamaian dan kecukupan',
      'D. Rumah Halimah diserang musuh'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Keberkahan mengasuh Nabi membuat ternak sehat, susu melimpah, dan kehidupan keluarga penuh berkah.'
  }
];

// C. MENJODOHKAN (5 Soal)
export const EVALUASI_P5_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Tahun Gajah',
    rightText: 'Tahun peristiwa penyerangan Ka’bah oleh Abrahah & lahirnya Nabi'
  },
  {
    id: 2,
    leftText: 'Halimah As-Sa’diyah',
    rightText: 'Ibu susu Nabi Muhammad saw. dari Bani Sa’ad'
  },
  {
    id: 3,
    leftText: 'Abwa',
    rightText: 'Tempat wafatnya Ibunda Aminah saat Nabi berusia 6 tahun'
  },
  {
    id: 4,
    leftText: 'Al-Amin',
    rightText: 'Gelar kejujuran Nabi yang artinya "orang yang dapat dipercaya"'
  },
  {
    id: 5,
    leftText: 'Uswatun Hasanah',
    rightText: 'Suri teladan yang baik pada diri Rasulullah saw.'
  }
];

// D. BENAR ATAU SALAH DISERTAI ALASANNYA (5 Soal)
export const EVALUASI_P5_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Nabi Muhammad saw. lahir di Kota Madinah pada tanggal 12 Rabiulawal Tahun Gajah.',
    isTrue: false,
    explanation: 'SALAH. Karena Nabi Muhammad saw. lahir di Kota Makkah (bukan Madinah) pada 12 Rabiulawal Tahun Gajah.'
  },
  {
    id: 2,
    statement: 'Gelar Al-Amin diberikan kepada Nabi Muhammad saw. oleh masyarakat Makkah karena beliau selalu berkata jujur dan dapat dipercaya.',
    isTrue: true,
    explanation: 'BENAR. Karena Al-Amin berarti orang yang dapat dipercaya, bukti nyata akhlak mulia dan kejujuran beliau sejak muda.'
  },
  {
    id: 3,
    statement: 'Ketika berusia 6 tahun, ibunda Nabi (Aminah) wafat sehingga Nabi menjadi anak yatim piatu.',
    isTrue: true,
    explanation: 'BENAR. Karena ibunda Aminah wafat di daerah Abwa saat Nabi berusia 6 tahun, setelah sebelumnya ayahnya wafat sebelum Nabi lahir.'
  },
  {
    id: 4,
    statement: 'Pekerjaan menggembalakan kambing pada masa kecil menjadikan Nabi pribadi yang malas dan penakut.',
    isTrue: false,
    explanation: 'SALAH. Karena pekerjaan menggembalakan kambing justru melatih kesabaran, kepemimpinan, keberanian, dan tanggung jawab.'
  },
  {
    id: 5,
    statement: 'Menyontek saat ujian sekolah merupakan perbuatan yang meneladani sifat Al-Amin Nabi Muhammad saw.',
    isTrue: false,
    explanation: 'SALAH. Karena menyontek adalah bentuk ketidakjujuran, sedangkan sifat Al-Amin mengajarkan kita untuk selalu jujur dan tidak curang.'
  }
];

// E. SOAL URAIAN (5 Soal)
export const EVALUASI_P5_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Tuliskan silsilah singkat keluarga Nabi Muhammad saw. mulai dari Ayah, Ibu, Kakek, hingga Paman yang mengasuh beliau!',
    rubric: 'Skor 20: Menyebutkan Ayah (Abdullah), Ibu (Aminah binti Wahab), Kakek (Abdul Muthalib), dan Paman (Abu Thalib) dengan tepat.',
    sampleAnswer: '• Ayah: Abdullah bin Abdul Muthalib\n• Ibu: Aminah binti Wahab\n• Kakek: Abdul Muthalib\n• Paman Pengasuh: Abu Thalib'
  },
  {
    id: 2,
    question: 'Mengapa tahun kelahiran Nabi Muhammad saw. dinamakan Tahun Gajah? Jelaskan secara ringkas!',
    rubric: 'Skor 20: Menjelaskan peristiwa kedatangan pasukan bergajah Abrahah untuk menghancurkan Ka’bah dan hancurnya pasukan oleh pertolongan Allah (Burung Ababil).',
    sampleAnswer: 'Karena pada tahun kelahiran beliau, Makkah diserang oleh pasukan bergajah yang dipimpin Abrahah dari Yaman untuk menghancurkan Ka’bah. Namun Allah Swt. menghancurkan pasukan tersebut dengan mengirimkan burung Ababil (seperti dikisahkan dalam Surah Al-Fil).'
  },
  {
    id: 3,
    question: 'Mengapa masyarakat Makkah memberikan gelar Al-Amin kepada Nabi Muhammad saw.? Apa arti gelar tersebut?',
    rubric: 'Skor 20: Menjelaskan arti Al-Amin (orang yang dapat dipercaya) dan alasannya (karena kejujuran, menjaga amanah, menepati janji, dan tidak pernah berbohong).',
    sampleAnswer: 'Al-Amin artinya "Orang yang dapat dipercaya". Masyarakat Makkah memberikan gelar tersebut karena sejak kecil Nabi selalu berkata jujur, menepati janji, menjaga barang amanah, dan tidak pernah berbohong atau menipu.'
  },
  {
    id: 4,
    question: 'Sebutkan 4 sifat terpuji Nabi Muhammad saw. pada masa kanak-kanak yang patut kita contoh!',
    rubric: 'Skor 20: Menyebutkan 4 sifat terpuji (misal: jujur, sopan, rendah hati, penyayang, rajin membantu, bertanggung jawab).',
    sampleAnswer: '1. Jujur dalam berkata dan berbuat.\n2. Sopan santun dan rendah hati.\n3. Penyayang kepada sesama.\n4. Rajin membantu pekerjaan keluarga dan bertanggung jawab.'
  },
  {
    id: 5,
    question: 'Berikan 3 contoh penerapan sifat jujur dan amanah murid dalam kehidupan sehari-hari di sekolah!',
    rubric: 'Skor 20: Menyebutkan 3 contoh konkret (misal: tidak menyontek saat ujian, mengembalikan barang temuan kepada pemiliknya, menjaga barang pinjaman kelas/teman).',
    sampleAnswer: '1. Mengerjakan soal ujian sendiri tanpa menyontek jawaban teman.\n2. Menyerahkan barang atau uang temuan di sekolah kepada guru/pemiliknya.\n3. Mengembalikan buku perpustakaan atau barang pinjaman teman tepat waktu dalam keadaan baik.'
  }
];
