// Data Lengkap Kelas 3 Pembelajaran 3 berdasarkan PDF Resmi BAB III
// Menerapkan Akhlak Terpuji kepada Allah Swt. melalui Husnuzan (Berbaik Sangka) dan Menghindari Suuzan (Berburuk Sangka)

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
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 3 PEMBELAJARAN 3 / BAB III)
// =========================================================================
export const KELAS3_P3_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Tujuan Pembelajaran & Ayo Mengamati',
    subtitle: 'Menerapkan Husnuzan dan Menghindari Suuzan kepada Allah Swt.',
    iconName: 'Target',
    points: [
      '1. Menjelaskan pengertian husnuzan kepada Allah Swt.',
      '2. Menjelaskan pengertian suuzan kepada Allah Swt.',
      '3. Menyebutkan manfaat berbaik sangka kepada Allah Swt.',
      '4. Mengidentifikasi contoh perilaku husnuzan dan suuzan dalam kehidupan sehari-hari.',
      '5. Membiasakan diri berbaik sangka kepada Allah Swt. dalam setiap keadaan.',
      '6. Menghindari perilaku berburuk sangka kepada Allah Swt. dan sesama manusia.'
    ],
    highlightBox: {
      title: '👀 Ayo Mengamati Kehidupan',
      content: 'Dalam kehidupan, setiap orang pernah mengalami kebahagiaan maupun kesulitan. Ada saatnya berhasil, ada pula saat gagal. Muslim yang beriman selalu yakin bahwa semua pemberian Allah Swt. mengandung hikmah dan kebaikan.',
      type: 'info'
    }
  },
  {
    id: 2,
    title: '2. Pengertian Husnuzan kepada Allah Swt.',
    subtitle: 'Mengenal Makna Prasangka Baik Kepada Sang Pencipta',
    iconName: 'Sparkles',
    points: [
      '1. Asal Kata: Husnuzan berasal dari bahasa Arab "Husnu adz-Dzanni" (حُسْنُ الظَّنِّ) yang berarti berbaik sangka.',
      '2. Pengertian: Meyakini bahwa segala ketentuan dan takdir Allah Swt. mengandung kebaikan, kasih sayang, dan hikmah bagi hamba-Nya.',
      '3. Sikap Orang Berhusnuzan: Percaya bahwa Allah Maha Pengasih, Maha Penyayang, Maha Mengetahui, dan Maha Bijaksana. Menerima takdir dengan sabar, syukur, dan tawakal.',
      '4. Ketetapan Allah Swt.: Allah tidak pernah menzalimi hamba-Nya. Semua ketetapan-Nya selalu membawa manfaat meskipun kadang manusia belum memahami hikmahnya.'
    ],
    arabicExamples: [
      {
        arabic: 'حُسْنُ الظَّنِّ',
        latin: 'Husnu adz-Dzanni',
        meaning: '"Berbaik Sangka kepada Allah Swt."'
      }
    ],
    highlightBox: {
      title: '📌 Poin Penting Akidah',
      content: 'Husnuzan adalah kunci ketenangan hati. Dengan husnuzan, kita yakin Allah selalu memberikan yang terbaik bagi kehidupan kita.',
      type: 'tip'
    }
  },
  {
    id: 3,
    title: '3. Pengertian Suuzan kepada Allah Swt.',
    subtitle: 'Mengenal Prasangka Buruk yang Harus Dihindari',
    iconName: 'Layers',
    points: [
      '1. Arti Suuzan: Suuzan berasal dari bahasa Arab yang berarti "berburuk sangka".',
      '2. Pengertian Suuzan kepada Allah Swt.: Memiliki prasangka buruk atau tuduhan tidak baik terhadap ketentuan dan takdir Allah Swt.',
      '3. Bentuk-bentuk Suuzan kepada Allah Swt.:',
      '   • Merasa Allah Swt. tidak adil.',
      '   • Putus asa dari rahmat Allah Swt.',
      '   • Menyalahkan Allah Swt. ketika mendapat musibah.',
      '   • Tidak percaya bahwa Allah Swt. akan memberikan pertolongan.',
      '4. Hukum & Dampak: Suuzan bertentangan dengan keimanan seorang Muslim dan HARUS dijauhi karena dapat melemahkan iman.'
    ],
    highlightBox: {
      title: '⚠️ Peringatan Penting',
      content: 'Suuzan menyebabkan hati menjadi gelisah, mudah marah, putus asa, dan menjauhkan kita dari kasih sayang Allah Swt.',
      type: 'warning'
    }
  },
  {
    id: 4,
    title: '4. Pentingnya Husnuzan kepada Allah Swt.',
    subtitle: 'Manfaat Jiwa dan Dorongan Beramal Saleh',
    iconName: 'BookOpen',
    points: [
      '1. Allah Swt. mengajarkan hamba-Nya agar selalu berharap kepada rahmat dan kasih sayang-Nya.',
      '2. Ketenangan Hati: Orang yang selalu berbaik sangka akan memiliki hati yang tenang karena yakin Allah tidak pernah meninggalkan hamba-Nya.',
      '3. Pendorong Kebaikan: Husnuzan mendorong seseorang untuk:',
      '   • Rajin berdoa kepada Allah Swt.',
      '   • Tidak mudah menyerah dan putus asa.',
      '   • Tetap giat berusaha (ikhtiar).',
      '   • Selalu bersyukur atas nikmat.',
      '   • Bersabar saat menghadapi ujian hidup.'
    ]
  },
  {
    id: 5,
    title: '5. Contoh Perilaku Husnuzan dalam Kehidupan',
    subtitle: 'Teladan Sikap Berbaik Sangka di Berbagai Situasi',
    iconName: 'CheckCircle',
    points: [
      '1. Bersyukur atas Nikmat Allah: Seorang anak dapat nilai baik, ia mengucapkan "Alhamdulillah" dan makin rajin belajar.',
      '2. Sabar Ketika Mengalami Kesulitan: Saat sakit, tetap berobat dan berdoa sambil yakin Allah akan memberikan kesembuhan.',
      '3. Tidak Putus Asa: Gagal dalam perlombaan, terus berlatih karena percaya Allah menyiapkan kesempatan yang lebih baik.',
      '4. Rajin Berdoa: Menunjukkan keyakinan bahwa Allah Maha Mendengar dan mengabulkan doa pada waktu terbaik.',
      '5. Bertawakal: Setelah belajar sungguh-sungguh, menyerahkan hasil keputusan sepenuhnya kepada Allah Swt.'
    ]
  },
  {
    id: 6,
    title: '6. Contoh Perilaku Suuzan yang Harus Dihindari',
    subtitle: 'Menjauhi Sikap Tercela yang Merusak Keimanan',
    iconName: 'Layers',
    points: [
      'Beberapa contoh suuzan kepada Allah Swt. dan sesama yang wajib kita hindari:',
      '• Menyalahkan Allah Swt. ketika mengalami musibah atau ujian.',
      '• Merasa doa yang diucapkan tidak akan dikabulkan oleh Allah.',
      '• Putus asa dari rahmat dan pertolongan Allah Swt.',
      '• Mengeluh terus-menerus tanpa mau berusaha (ikhtiar).',
      '• Iri hati dan dengki terhadap nikmat yang diterima orang lain.',
      '• Merasa Allah Swt. tidak menyayangi dirinya.',
      '📌 Semua sikap di atas mengurangi keimanan dan harus dibuang jauh-jauh.'
    ]
  },
  {
    id: 7,
    title: '7. Hikmah Berbaik Sangka kepada Allah Swt.',
    subtitle: '10 Manfaat Utama Berbaik Sangka dalam Hidup',
    iconName: 'Award',
    points: [
      'Orang yang memiliki sikap husnuzan akan memperoleh 10 manfaat utama:',
      '1. Hati menjadi tenang dan tenteram.',
      '2. Semakin dekat kepada Allah Swt.',
      '3. Rajin dan khusyuk beribadah.',
      '4. Optimis menghadapi masa depan dan kehidupan.',
      '5. Mudah bersyukur atas segala rezeki.',
      '6. Tidak mudah putus asa saat menemui kesulitan.',
      '7. Memiliki semangat tinggi untuk belajar dan bekerja.',
      '8. Menjadi pribadi yang sabar dan pemaaf.',
      '9. Disukai teman dan sesama karena selalu berpikiran positif.',
      '10. Mendapat pahala dan rida dari Allah Swt.'
    ]
  },
  {
    id: 8,
    title: '8. Cara Membiasakan Husnuzan kepada Allah Swt.',
    subtitle: 'Langkah Praktis Menjaga Prasangka Baik',
    iconName: 'Volume2',
    points: [
      'Agar terbiasa berbaik sangka kepada Allah Swt., lakukanlah kebiasaan berikut:',
      '• Rajin melaksanakan salat lima waktu dengan tertib.',
      '• Membaca dan merenungkan isi Al-Qur\'an setiap hari.',
      '• Memperbanyak doa dan memohon ampunan kepada Allah.',
      '• Berdzikir mengingat keagungan Allah Swt.',
      '• Bersyukur atas nikmat sekecil apa pun yang diterima.',
      '• Bersabar ketika menghadapi ujian atau hal yang tidak disukai.',
      '• Tidak mudah mengeluh dan selalu berpikir positif.',
      '• Bergaul dengan teman-teman yang saleh dan membawa kebaikan.'
    ]
  },
  {
    id: 9,
    title: '9. Penerapan Husnuzan dalam Kehidupan Sehari-hari',
    subtitle: 'Pengamalan di Rumah, Sekolah, dan Masyarakat',
    iconName: 'CheckCircle',
    points: [
      '🏠 Di Rumah:',
      '   • Bersyukur atas makanan yang disediakan orang tua.',
      '   • Tidak mengeluh ketika diminta membantu pekerjaan rumah.',
      '   • Berdoa sebelum dan sesudah beraktivitas.',
      '🏫 Di Sekolah:',
      '   • Belajar dengan tekun sebelum menghadapi ujian.',
      '   • Tidak putus asa jika hasil nilai belum memuaskan.',
      '   • Tetap menghormati guru dan menyayangi teman.',
      '🌐 Di Lingkungan Masyarakat:',
      '   • Membantu tetangga yang sedang mengalami kesulitan.',
      '   • Tidak mudah menuduh atau mencurigai orang lain.',
      '   • Selalu berpikir positif terhadap sesama manusia.'
    ]
  },
  {
    id: 10,
    title: '10. Kisah Teladan: Hasan & Lomba Cerdas Cermat',
    subtitle: 'Inspirasi Berpikir Positif dan Tetap Semangat',
    iconName: 'Sparkles',
    points: [
      '📖 Cerita Teladan Hasan:',
      'Suatu hari, Hasan mengikuti lomba cerdas cermat tingkat kecamatan. Ia telah belajar dengan sungguh-sungguh. Namun, hasil lomba belum sesuai harapan karena ia belum berhasil menjadi juara.',
      'Hasan tidak kecewa berlebihan. Ia berkata: "Mungkin Allah sedang menyiapkan sesuatu yang lebih baik untukku. Aku akan belajar lebih giat lagi."',
      'Beberapa bulan kemudian, Hasan mengikuti lomba yang lain dan berhasil meraih juara pertama!',
      '🌟 Pelajaran: Sikap Hasan menunjukkan husnuzan kepada Allah Swt. Ia tetap berusaha, bersabar, dan percaya bahwa Allah selalu memberikan yang terbaik bagi hamba-Nya.'
    ]
  },
  {
    id: 11,
    title: '11. Hikmah Mempelajari Bab Ini',
    subtitle: 'Rangkuman Pelajaran Penting dari Bab III',
    iconName: 'Award',
    points: [
      'Setelah mempelajari materi ini, kita memperoleh pelajaran bahwa:',
      '• Allah Swt. selalu memberikan yang terbaik bagi hamba-Nya.',
      '• Husnuzan memperkuat iman dan ketakwaan seorang Muslim.',
      '• Suuzan dapat melemahkan keimanan dan merusak pahala.',
      '• Seorang Muslim harus selalu bersabar, bersyukur, berdoa, dan bertawakal.',
      '• Berbaik sangka kepada Allah melahirkan semangat, optimisme, dan ketenangan hati.',
      '• Allah mencintai hamba yang selalu berharap kepada rahmat-Nya.',
      '• Husnuzan juga mendorong kita untuk berbaik sangka kepada sesama manusia.'
    ],
    highlightBox: {
      title: '💡 Kesimpulan Utama Bab III',
      content: 'Membiasakan husnuzan menjadikan seorang Muslim lebih tenang, optimis, pantang menyerah, dan berakhlak mulia kepada Allah Swt. dan sesama.',
      type: 'info'
    }
  },
  {
    id: 12,
    title: '12. Rangkuman & Refleksi Diri Bab III',
    subtitle: 'Rangkuman Inti & Pertanyaan Perenungan Diri',
    iconName: 'Target',
    points: [
      '📝 RANGKUMAN INTI:',
      '• Husnuzan adalah berbaik sangka kepada Allah Swt. dengan meyakini semua ketetapan-Nya mengandung hikmah.',
      '• Suuzan adalah berburuk sangka kepada Allah Swt. dan harus dihindari.',
      '• Husnuzan diwujudkan melalui sikap sabar, syukur, doa, ikhtiar, dan tawakal.',
      '• Membiasakan husnuzan menjadikan Muslim tenang, optimis, dan berakhlak mulia.',
      '',
      '🤔 PERTANYAAN REFLEKSI DIRI:',
      '1. Apakah saya selalu bersyukur atas nikmat yang diberikan Allah Swt.?',
      '2. Bagaimana sikap saya ketika mengalami kegagalan atau kesulitan?',
      '3. Apakah saya yakin bahwa Allah selalu memberikan yang terbaik bagi hamba-Nya?',
      '4. Perilaku suuzan apa yang harus saya hindari mulai hari ini?',
      '5. Apa yang akan saya lakukan agar semakin terbiasa berbaik sangka kepada Allah Swt. dalam kehidupan sehari-hari?'
    ]
  }
];

// =========================================================================
// 2. PENUGASAN PROYEK MURID (2 PjBL + 2 PBL) - Sesuai Kebijakan Guru
// =========================================================================
export const KELAS3_P3_PROJECTS: ProjectTask[] = [
  {
    id: 'p3_pjbl_1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Poster Kreatif "Pohon Husnuzan & Berpikir Positif"',
    subtitle: 'Membuat Karya Seni Visual Contoh Sikap Berbaik Sangka kepada Allah Swt.',
    objective: 'Peserta didik mampu mengidentifikasi dan mengkreasikan contoh perilaku husnuzan kepada Allah Swt. dalam bentuk poster visual yang menarik.',
    steps: [
      '1. Siapkan kertas gambar/karton, pensil warna, krayon, atau spidol.',
      '2. Gambarlah pohon rimbun dengan batang kokoh (Melambangkan Iman yang Kuat).',
      '3. Pada setiap buah/daun pohon, tuliskan 5 contoh perilaku husnuzan (misal: Rajin Berdoa, Bersyukur Saat Nilai Bagus, Sabar Saat Sakit, Tidak Mudah Putus Asa, Bertawakal).',
      '4. Hiasi poster dengan kalimat indah seperti "Aku Selalu Berbaik Sangka kepada Allah Swt." dan lafal حُسْنُ الظَّنِّ.',
      '5. Presentasikan poster di depan kelas atau pajang di mading sekolah.'
    ],
    output: 'Poster Pohon Husnuzan berisi 5 contoh sikap berbaik sangka beserta warnanya.',
    teacherNote: 'Rubrik penilaian poster, pengelompokan murid, dan batas waktu pengerjaan disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p3_pjbl_2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Buku Harian Jurnal Syukur & Husnuzan 7 Hari',
    subtitle: 'Proyek Pembiasaan Menuliskan Nikmat dan Tanggapan Positif Harian',
    objective: 'Peserta didik mampu membiasakan diri mencatat nikmat harian dan merespons setiap kesulitan dengan pikiran husnuzan.',
    steps: [
      '1. Buatlah buku harian kecil berisi 7 halaman (Hari Ke-1 sampai Hari Ke-7).',
      '2. Setiap hari sebelum tidur, catat 2 nikmat Allah yang kamu terima hari ini (misal: Makanan lezat, teman yang ramah).',
      '3. Catat 1 kesulitan atau hal tidak menyenangkan yang dialami, lalu tuliskan tanggapan husnuzanmu (misal: "Hari ini hujan deras, tapi aku husnuzan Allah menyuburkan tanaman").',
      '4. Akhiri tulisan harian dengan bacaan "Alhamdulillah" dan doa husnuzan.',
      '5. Minta tanda tangan orang tua pada akhir pekan dan kumpulkan kepada guru.'
    ],
    output: 'Buku Jurnal Husnuzan 7 Hari lengkap dengan catatan nikmat dan respons prasangka baik.',
    teacherNote: 'Pendampingan orang tua di rumah serta bentuk fisik/digital jurnal ditentukan sesuai kebijakan guru.'
  },
  {
    id: 'p3_pbl_1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Analisis Kasus: "Sikap Menghadapi Kekecewaan & Kegagalan Lomba"',
    subtitle: 'Pemecahan Masalah Emosi dan Prasangka Buruk Melalui Cerita Hasan',
    objective: 'Peserta didik mampu menganalisis masalah kekecewaan emosional saat gagal dan merumuskan solusi berbasis husnuzan.',
    steps: [
      '1. Bacalah kisah teladan Hasan yang gagal juara cerdas cermat pada materi Bab III.',
      '2. Identifikasi masalah: "Mengapa orang sering marah atau suuzan kepada Allah ketika keinginannya belum tercapai?"',
      '3. Diskusikan dalam kelompok kecil: Apa perbedaan dampak antara bersikap suuzan (mengeluh/putus asa) dan bersikap husnuzan (seperti Hasan)?',
      '4. Susunlah 3 langkah konkret yang harus dilakukan murid kelas 3 jika mengalami kegagalan ujian atau lomba.',
      '5. Tuliskan hasil analisis kelompok pada lembar kerja pemecahan masalah.'
    ],
    output: 'Lembar Solusi Analisis Kasus "Mengubah Kekecewaan Menjadi Semangat Husnuzan".',
    teacherNote: 'Proses diskusi kelompok, pembagian peran, dan rubrik analisis disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p3_pbl_2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Studi Kasus: Mengatasi Kebiasaan Mengeluh dan Suuzan di Sekolah',
    subtitle: 'Kampanye Teman Sebaik Sangka untuk Menciptakan Suasana Kelas Positif',
    objective: 'Peserta didik mampu menemukan pemicu sikap mengeluh di lingkungan sekolah dan merancang solusi kampanye ajakan husnuzan.',
    steps: [
      '1. Amati kejadian di sekitar kelas: Apakah masih ada teman yang suka mengeluh saat dapat tugas, atau menyalahkan keadaan?',
      '2. Analisis sebab: Mengapa kebiasaan mengeluh dan berburuk sangka bisa muncul?',
      '3. Rumuskan solusi: Buatlah 3 "Kalimat Pengingat Husnuzan" yang singkat dan memotivasi.',
      '4. Buatlah Kartu Saku "Stop Suuzan, Yuk Husnuzan!" untuk dibagikan atau ditempel di kelas.',
      '5. Simulasikan cara menegur teman yang sedang mengeluh dengan kalimat husnuzan yang santun.'
    ],
    output: 'Kartu Saku Pengingat "Stop Suuzan, Yuk Husnuzan!" & Laporan Solusi Kelompok.',
    teacherNote: 'Kriteria penilaian kampanye dan alokasi waktu luar kelas ditentukan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI INTERAKTIF: PETUALANGAN JELAJAH HATI HUSNUZAN VS SUUZAN
// =========================================================================
export const KELAS3_P3_GAME: GameQuestion[] = [
  {
    id: 1,
    stage: 'Level 1: Nilai Ujian Belum Memuaskan',
    prompt: 'Budi baru saja menerima hasil ujian Matematika dan nilainya di bawah target. Apa tindakan berakhlak terpuji (husnuzan) yang sebaiknya Budi lakukan?',
    options: [
      {
        id: '1a',
        text: 'Menangis, merobek kertas ujian, dan menyalahkan Allah Swt. karena merasa tidak adil.',
        isCorrect: false,
        explanation: 'Salah! Menyalahkan Allah dan merobek kertas adalah contoh sikap suuzan dan tidak bersyukur.'
      },
      {
        id: '1b',
        text: 'Mengucapkan Alhamdulillah, tetap bersyukur, dan berniat belajar lebih giat lagi dengan husnuzan Allah menyiapkan kemudahan.',
        isCorrect: true,
        explanation: 'Tepat sekali! Husnuzan membuat kita tetap tenang, bersyukur, dan semakin semangat belajar.'
      },
      {
        id: '1c',
        text: 'Mogok makan dan tidak mau sekolah lagi karena merasa tidak beruntung.',
        isCorrect: false,
        explanation: 'Salah! Mogok sekolah adalah contoh sikap putus asa yang dilarang.'
      }
    ]
  },
  {
    id: 2,
    stage: 'Level 2: Saat Tubuh Terbaring Sakit',
    prompt: 'Aisyah sedang sakit demam dan tidak bisa bermain bersama teman-temannya. Bagaimana pikiran husnuzan Aisyah kepada Allah Swt.?',
    options: [
      {
        id: '2a',
        text: 'Yakin bahwa sakit ini adalah penggugur dosa, tetap minum obat & berdoa yakin Allah akan menyembuhkan.',
        isCorrect: true,
        explanation: 'Luar biasa! Orang yang husnuzan yakin Allah Maha Penyayang dan obat serta doa akan mendatangkan kesembuhan.'
      },
      {
        id: '2b',
        text: 'Marah-marah kepada orang tua dan menganggap Allah Swt. tidak sayang padanya.',
        isCorrect: false,
        explanation: 'Salah! Merasa Allah tidak sayang adalah bentuk prasangka buruk (suuzan).'
      },
      {
        id: '2c',
        text: 'Menolak minum obat karena merasa doa orang sakit tidak didengar Allah.',
        isCorrect: false,
        explanation: 'Salah! Menolak berobat dan tidak percaya doa adalah sikap yang salah.'
      }
    ]
  },
  {
    id: 3,
    stage: 'Level 3: Belum Berhasil Menjadi Juara Lomba',
    prompt: 'Hasan mengikuti lomba cerdas cermat, tetapi belum meraih juara 1. Bagaimana Hasan menerapkan sikap husnuzan seperti dalam cerita Bab III?',
    options: [
      {
        id: '3a',
        text: 'Iri hati pada pemenang dan menuduh juri tidak jujur.',
        isCorrect: false,
        explanation: 'Salah! Menuduh tanpa bukti dan iri hati adalah contoh suuzan.'
      },
      {
        id: '3b',
        text: 'Berkata "Mungkin Allah menyiapkan yang lebih baik untukku" dan belajar lebih giat lagi.',
        isCorrect: true,
        explanation: 'Hebat! Hasan tetap optimis dan percaya ada hikmah di balik setiap takdir Allah.'
      },
      {
        id: '3c',
        text: 'Berhenti mengikuti lomba selamanya karena merasa tidak punya bakat.',
        isCorrect: false,
        explanation: 'Salah! Putus asa bertentangan dengan ajaran Islam.'
      }
    ]
  },
  {
    id: 4,
    stage: 'Level 4: Keinginan Doa Belum Langsung Terkabul',
    prompt: 'Rizki sudah berdoa setiap hari memohon kelerengnya yang hilang agar ketemu, tetapi belum ketemu. Apa yang harus Rizki yakini?',
    options: [
      {
        id: '4a',
        text: 'Yakin Allah Maha Mendengar, doa pasti dijawab di waktu yang paling tepat atau diganti dengan yang lebih baik.',
        isCorrect: true,
        explanation: 'Benar! Allah Swt. mengabulkan doa hamba-Nya pada waktu terbaik menurut ilmu-Nya.'
      },
      {
        id: '4b',
        text: 'Berhenti berdoa dan merasa Allah tidak mau mendengar doanya.',
        isCorrect: false,
        explanation: 'Salah! Merasa doa tidak didengar adalah contoh sikap suuzan.'
      },
      {
        id: '4c',
        text: 'Mengeluh terus-menerus dan menyalahkan teman kelasnya.',
        isCorrect: false,
        explanation: 'Salah! Mengeluh dan menuduh tanpa bukti adalah perilaku buruk.'
      }
    ]
  },
  {
    id: 5,
    stage: 'Level 5: Melihat Teman Mendapat Nikmat Hadiah',
    prompt: 'Fatimah melihat temannya membawa sepeda baru ke sekolah. Sikap husnuzan Fatimah kepada Allah Swt. dan temannya adalah...',
    options: [
      {
        id: '5a',
        text: 'Ikut senang, mendoakan keberkahan temannya, dan yakin rezeki dari Allah untuk dirinya juga sudah diatur dengan adil.',
        isCorrect: true,
        explanation: 'Sempurna! Husnuzan menghilangkan iri hati dan membawa kebahagiaan di hati.'
      },
      {
        id: '5b',
        text: 'Pura-pura tidak tahu dan merasa Allah tidak adil karena tidak memberinya sepeda baru.',
        isCorrect: false,
        explanation: 'Salah! Merasa Allah tidak adil adalah sikap suuzan.'
      },
      {
        id: '5c',
        text: 'Mengejek sepeda teman dan berharap sepedanya cepat rusak.',
        isCorrect: false,
        explanation: 'Salah! Dengki dan mendoakan keburukan dilarang agama.'
      }
    ]
  }
];

// =========================================================================
// 4. EVALUASI PEMBELAJARAN (HOTS & COMPUTATIONAL THINKING)
// =========================================================================

// A. PILIHAN GANDA (10 Soal)
export const EVALUASI_P3_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Kata "Husnuzan" berasal dari bahasa Arab "Husnu adz-Dzanni" (حُسْنُ الظَّنِّ). Menurut materi Bab III, arti kata husnuzan adalah...',
    options: ['A. Berburuk sangka', 'B. Berbaik sangka', 'C. Berhati-hati', 'D. Bekerja keras'],
    correctAnswerIndex: 1,
    explanation: 'Husnuzan berasal dari bahasa Arab yang berarti berbaik sangka.'
  },
  {
    id: 2,
    question: 'Husnuzan kepada Allah Swt. artinya meyakini bahwa segala ketentuan dan takdir Allah Swt. pasti mengandung...',
    options: [
      'A. Kesulitan dan kerugian bagi manusia',
      'B. Keburukan yang tersembunyi',
      'C. Kebaikan, kasih sayang, dan hikmah bagi hamba-Nya',
      'D. Paksaan tanpa ada pilihan'
    ],
    correctAnswerIndex: 2,
    explanation: 'Husnuzan artinya percaya bahwa semua takdir Allah mengandung kebaikan dan hikmah.'
  },
  {
    id: 3,
    question: 'Ahmad selalu bersyukur saat mendapat nilai bagus dan tetap tersenyum serta belajar lagi saat nilainya turun. Ahmad meyakini Allah Maha Bijaksana. Sikap Ahmad mencerminkan...',
    options: ['A. Suuzan kepada Allah', 'B. Husnuzan kepada Allah', 'C. Sifat Takabur', 'D. Sikap Pesimis'],
    correctAnswerIndex: 1,
    explanation: 'Sikap tenang, bersyukur, dan tetap berusaha menunjukkan sikap husnuzan.'
  },
  {
    id: 4,
    question: 'Sebaliknya, lawan dari sikap husnuzan adalah "Suuzan". Arti dari kata suuzan adalah...',
    options: ['A. Berburuk sangka', 'B. Berbaik sangka', 'C. Rendah hati', 'D. Suka menolong'],
    correctAnswerIndex: 0,
    explanation: 'Suuzan berarti berburuk sangka.'
  },
  {
    id: 5,
    question: 'Manakah di antara pilihan berikut yang merupakan contoh sikap suuzan kepada Allah Swt. yang HARUS DIHINDARI?',
    options: [
      'A. Berdoa dengan tekun setiap selesai salat',
      'B. Bersabar dan berobat saat mengalami sakit',
      'C. Menyalahkan Allah Swt. dan merasa Allah tidak adil ketika mendapat musibah',
      'D. Belajar sungguh-sungguh lalu bertawakal'
    ],
    correctAnswerIndex: 2,
    explanation: 'Menyalahkan Allah dan merasa tidak adil adalah contoh suuzan yang merusak iman.'
  },
  {
    id: 6,
    question: 'Dalam cerita teladan di Bab III, Hasan tidak menjadi juara lomba cerdas cermat. Ucapan husnuzan yang dikatakan Hasan adalah...',
    options: [
      'A. "Aku tidak mau belajar lagi karena Allah tidak menolongku."',
      'B. "Mungkin Allah sedang menyiapkan sesuatu yang lebih baik untukku."',
      'C. "Lomba ini curang dan saya membencinya."',
      'D. "Saya menyesal sudah belajar malam-malam."'
    ],
    correctAnswerIndex: 1,
    explanation: 'Hasan berkata: "Mungkin Allah sedang menyiapkan sesuatu yang lebih baik untukku."'
  },
  {
    id: 7,
    question: 'Salah satu manfaat dan hikmah utama memiliki sikap husnuzan kepada Allah Swt. adalah...',
    options: [
      'A. Hati menjadi gelisah dan mudah marah',
      'B. Hati menjadi tenang dan tenteram',
      'C. Menjadi sombong di depan teman',
      'D. Malas untuk beribadah'
    ],
    correctAnswerIndex: 1,
    explanation: 'Husnuzan membuat hati menjadi tenang dan tentram.'
  },
  {
    id: 8,
    question: 'Siti ingin membiasakan husnuzan di rumah. Contoh perilaku husnuzan Siti di rumah sesuai buku teks adalah...',
    options: [
      'A. Mengeluh ketika diminta membantu ibu membersihkan rumah',
      'B. Menolak makanan yang dimasak orang tua',
      'C. Bersyukur atas makanan yang disediakan orang tua dan berdoa sebelum beraktivitas',
      'D. Marah jika uang saku tidak ditambah'
    ],
    correctAnswerIndex: 2,
    explanation: 'Bersyukur atas makanan dan berdoa adalah wujud husnuzan di rumah.'
  },
  {
    id: 9,
    question: 'Perhatikan pola Computational Thinking (Abstraksi): Menghubungkan sebab dan akibat.\nJika seseorang memiliki sikap Suuzan kepada Allah, akibat yang akan dirasakannya dalam jiwa adalah...',
    options: [
      'A. Hati menjadi tenang dan bahagia',
      'B. Hati menjadi gelisah, mudah marah, dan putus asa',
      'C. Semakin disukai oleh teman-teman',
      'D. Mendapat banyak pahala'
    ],
    correctAnswerIndex: 1,
    explanation: 'Suuzan menyebabkan hati gelisah, mudah marah, dan putus asa.'
  },
  {
    id: 10,
    question: 'Manakah cara yang tepat untuk membiasakan diri berhusnuzan kepada Allah Swt. sehari-hari?',
    options: [
      'A. Rajin salat lima waktu, membaca Al-Qur\'an, dan selalu berpikir positif',
      'B. Sering mengeluh saat menemui kesulitan',
      'C. Bergaul dengan teman yang suka berburuk sangka',
      'D. Jarang berdoa karena merasa tidak berguna'
    ],
    correctAnswerIndex: 0,
    explanation: 'Rajin salat, membaca Al-Qur\'an, dan selalu berpikir positif membantu membiasakan husnuzan.'
  }
];

// B. PILIHAN GANDA KOMPLEKS (5 Soal)
export const EVALUASI_P3_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Manakah di antara pernyataan berikut yang merupakan CONTOH PERILAKU HUSNUZAN kepada Allah Swt.? (Pilih lebih dari satu)',
    options: [
      'A. Mengucapkan Alhamdulillah saat mendapat nikmat',
      'B. Sabar dan berobat saat sedang sakit',
      'C. Mengeluh terus-menerus tanpa mau berusaha',
      'D. Bertawakal menyerahkan hasil ujian kepada Allah setelah belajar tekun'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Pilihan A, B, dan D adalah contoh perilaku husnuzan. Mengeluh adalah contoh suuzan.'
  },
  {
    id: 2,
    question: 'Pilihlah bentuk-bentuk sikap SUUZAN kepada Allah Swt. yang HARUS KITA HINDARI! (Pilih lebih dari satu)',
    options: [
      'A. Merasa Allah Swt. tidak adil',
      'B. Putus asa dari rahmat dan pertolongan Allah',
      'C. Yakin bahwa semua ketetapan Allah ada hikmahnya',
      'D. Merasa doa yang diucapkan tidak akan pernah dikabulkan'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'A, B, dan D adalah contoh suuzan. Pilihan C adalah sikap husnuzan.'
  },
  {
    id: 3,
    question: 'Manakah hikmah dan manfaat dari berbaik sangka (husnuzan) kepada Allah Swt.? (Pilih lebih dari satu)',
    options: [
      'A. Hati menjadi tenang dan tenteram',
      'B. Semakin dekat kepada Allah Swt.',
      'C. Menjadi pribadi yang mudah putus asa',
      'D. Disukai oleh teman-teman karena berpikir positif'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Husnuzan membuat hati tenang, dekat dengan Allah, dan disukai teman.'
  },
  {
    id: 4,
    question: 'Pilihlah penerapan sikap husnuzan di lingkungan SEKOLAH! (Pilih lebih dari satu)',
    options: [
      'A. Belajar dengan tekun sebelum menghadapi ujian',
      'B. Tidak putus asa jika hasil nilai belum memuaskan',
      'C. Menyontek jawaban teman karena tidak yakin pada kemampuan diri',
      'D. Tetap menghormati guru dan menyayangi teman'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'A, B, dan D adalah wujud husnuzan di sekolah. Menyontek adalah perilaku tercela.'
  },
  {
    id: 5,
    question: 'Manakah kebiasaan yang dapat MEMBIASAKAN KITA BERHUSNUZAN kepada Allah Swt.? (Pilih lebih dari satu)',
    options: [
      'A. Rajin melaksanakan salat lima waktu',
      'B. Memperbanyak doa dan dzikir kepada Allah',
      'C. Bersyukur atas nikmat sekecil apa pun',
      'D. Selalu mendengarkan gosip dan prasangka buruk'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'A, B, dan C adalah cara membiasakan husnuzan.'
  }
];

// C. MENJODOHKAN (5 Soal)
export const EVALUASI_P3_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Husnuzan (حُسْنُ الظَّنِّ)',
    rightText: 'Berbaik sangka kepada Allah Swt. dan sesama'
  },
  {
    id: 2,
    leftText: 'Suuzan',
    rightText: 'Berburuk sangka dan harus dijauhi'
  },
  {
    id: 3,
    leftText: 'Sikap Hasan saat gagal juara',
    rightText: 'Yakin Allah menyiapkan hal yang lebih baik'
  },
  {
    id: 4,
    leftText: 'Sikap Husnuzan saat sakit',
    rightText: 'Berobat, berdoa, dan yakin Allah memberi kesembuhan'
  },
  {
    id: 5,
    leftText: 'Hikmah utama husnuzan',
    rightText: 'Hati menjadi tenang dan mendapat pahala dari Allah'
  }
];

// D. BENAR ATAU SALAH (5 Soal)
export const EVALUASI_P3_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Husnuzan kepada Allah Swt. artinya meyakini bahwa segala ketentuan Allah mengandung kebaikan dan hikmah.',
    isTrue: true,
    explanation: 'Benar. Husnuzan adalah meyakini kebaikan dan hikmah di balik takdir Allah.'
  },
  {
    id: 2,
    statement: 'Jika doa kita belum dikabulkan, kita boleh bersuuzan dan berhenti berdoa kepada Allah Swt.',
    isTrue: false,
    explanation: 'Salah. Kita tidak boleh suuzan; Allah mengabulkan doa di waktu yang paling tepat.'
  },
  {
    id: 3,
    statement: 'Orang yang selalu berbaik sangka kepada Allah akan memiliki jiwa yang tenang dan tidak mudah putus asa.',
    isTrue: true,
    explanation: 'Benar. Ketenangan jiwa dan optimisme adalah hikmah utama husnuzan.'
  },
  {
    id: 4,
    statement: 'Mengeluh terus-menerus tanpa mau berusaha adalah contoh perilaku husnuzan yang dianjurkan.',
    isTrue: false,
    explanation: 'Salah. Mengeluh tanpa usaha adalah ciri suuzan dan putus asa.'
  },
  {
    id: 5,
    statement: 'Bersyukur atas makanan yang disediakan orang tua di rumah merupakan pengamalan husnuzan kepada Allah Swt.',
    isTrue: true,
    explanation: 'Benar. Bersyukur atas nikmat di rumah adalah wujud husnuzan.'
  }
];

// E. SOAL URAIAN (5 Soal)
export const EVALUASI_P3_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan pengertian Husnuzan dan Suuzan kepada Allah Swt. berdasarkan materi Bab III!',
    rubric: 'Skor 20: Menjelaskan Husnuzan (berbaik sangka pada ketentuan Allah) dan Suuzan (berburuk sangka pada Allah) secara tepat.',
    sampleAnswer: '• Husnuzan adalah berbaik sangka kepada Allah Swt. dengan meyakini bahwa segala ketentuan-Nya mengandung kebaikan, kasih sayang, dan hikmah.\n• Suuzan adalah berburuk sangka kepada Allah Swt., seperti merasa Allah tidak adil atau putus asa dari rahmat-Nya.'
  },
  {
    id: 2,
    question: 'Sebutkan 3 contoh perilaku husnuzan kepada Allah Swt. saat seseorang menghadapi kesulitan atau kegagalan!',
    rubric: 'Skor 20: Menyebutkan 3 contoh (misal: tetap berobat saat sakit, tidak putus asa saat gagal lomba, rajin berdoa & bertawakal).',
    sampleAnswer: '1. Berobat dan berdoa dengan yakin saat terbaring sakit.\n2. Tidak putus asa dan terus berlatih saat belum berhasil juara lomba.\n3. Tetap tenang dan bertawakal menyerahkan hasil ujian kepada Allah Swt.'
  },
  {
    id: 3,
    question: 'Ceritakan secara singkat sikap teladan Hasan saat belum menjadi juara lomba cerdas cermat, dan tuliskan hikmah dari cerita tersebut!',
    rubric: 'Skor 20: Menceritakan Hasan yang tidak kecewa berlebihan, yakin Allah menyiapkan hal lebih baik, lalu giat belajar hingga akhirnya juara 1 di lomba berikutnya.',
    sampleAnswer: 'Saat gagal juara cerdas cermat, Hasan tidak kecewa berlebihan. Ia berkata: "Mungkin Allah sedang menyiapkan sesuatu yang lebih baik untukku." Hasan terus belajar giat hingga di lomba berikutnya ia meraih juara 1. Hikmahnya: Husnuzan membuat kita tetap semangat dan Allah memberi hasil terbaik.'
  },
  {
    id: 4,
    question: 'Sebutkan 5 hikmah dan manfaat berbaik sangka (husnuzan) kepada Allah Swt. bagi kehidupan seorang Muslim!',
    rubric: 'Skor 20: Menyebutkan 5 hikmah dari 10 hikmah di buku teks (misal: hati tenang, dekat dengan Allah, rajin beribadah, optimis, disukai teman).',
    sampleAnswer: '1. Hati menjadi tenang dan tenteram.\n2. Semakin dekat kepada Allah Swt.\n3. Optimis dalam menghadapi kehidupan.\n4. Tidak mudah putus asa.\n5. Mendapat pahala dari Allah Swt.'
  },
  {
    id: 5,
    question: 'Bagaimana cara kamu menerapkan sikap husnuzan di rumah dan di sekolah dalam kehidupan sehari-hari?',
    rubric: 'Skor 20: Menyebutkan penerapan di rumah (bersyukur makanan orang tua, berdoa) dan di sekolah (tekun belajar, tidak putus asa jika nilai kurang, hormati guru).',
    sampleAnswer: '• Di Rumah: Bersyukur atas makanan dari orang tua, tidak mengeluh saat diminta membantu rumah, dan selalu berdoa.\n• Di Sekolah: Belajar tekun sebelum ujian, tidak putus asa jika nilai belum memuaskan, serta menghormati guru dan teman.'
  }
];
