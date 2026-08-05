// Data Lengkap & Detail Kelas 5 Pembelajaran 3 Berdasarkan PDF Resmi BAB III
// Akhlak Kepada Allah SWT: Berdoa dan Bertawakal

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
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 5 PEMBELAJARAN 3) - 15 SLIDE DETAIL
// =========================================================================
export const KELAS5_P3_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Bab III & Tujuan Pembelajaran Akhlak Kepada Allah SWT',
    subtitle: 'Menerapkan Akhlak Terpuji Kepada Sang Pencipta Melalui Doa dan Tawakal',
    iconName: 'BookOpen',
    points: [
      '• Setelah mempelajari bab ini, peserta didik diharapkan mampu:',
      '  1. Menjelaskan pengertian akhlak kepada Allah Swt. dengan tepat.',
      '  2. Menjelaskan pengertian doa, dalil perintah berdoa (QS. Ghafir: 60), serta 7 adab dan manfaat berdoa.',
      '  3. Menjelaskan pengertian tawakal, dalil perintah bertawakal (QS. Ali \'Imran: 159), contoh sikap tawakal, serta hikmahnya.',
      '  4. Menerapkan akhlak kepada Allah melalui pembiasaan doa dan sikap tawakal setelah berikhtiar dalam kehidupan sehari-hari.'
    ],
    highlightBox: {
      title: '🌟 Visi Pembelajaran',
      content: 'Membentuk Muslim cilik yang taat, bersyukur, selalu memohon petunjuk Allah melalui doa khusyuk, dan berjiwa tangguh dengan bersikap tawakal setelah berikhtiar maksimal.',
      type: 'info'
    }
  },
  {
    id: 2,
    title: '2. Pengertian Akhlak kepada Allah Swt.',
    subtitle: 'Landasan Utama Kepribadian Muslim yang Beriman dan Bertakwa',
    iconName: 'Heart',
    points: [
      '• Akhlak adalah perilaku atau budi pekerti yang tercermin dalam sikap dan perbuatan seseorang.',
      '• Dalam Islam, akhlak tidak hanya ditujukan kepada sesama manusia, tetapi terutama kepada Allah Swt. sebagai Tuhan Yang Maha Esa.',
      '• Akhlak kepada Allah Swt. berarti sikap hormat, taat, cinta, dan patuh kepada seluruh perintah-Nya serta menjauhi larangan-Nya.',
      '• Akhlak kepada Allah menjadi dasar dan pondasi bagi terbentuknya kepribadian seorang Muslim yang beriman dan bertakwa.'
    ],
    highlightBox: {
      title: '💡 Hakekat Akhlak Kepada Allah',
      content: 'Bentuk penghambaan diri secara utuh kepada Allah Swt. dengan menyadari bahwa segala nikmat berasal dari-Nya dan seluruh hidup kita dipersembahkan untuk-Nya.',
      type: 'tip'
    }
  },
  {
    id: 3,
    title: '3. Ciri Murid yang Berakhlak Baik kepada Allah Swt.',
    subtitle: 'Wujud Perilaku Sehari-hari dan Ibadah yang Istiqamah',
    iconName: 'UserCheck',
    points: [
      '• Akhlak kepada Allah tidak hanya diwujudkan dalam ibadah ritual, tetapi juga dalam perilaku sehari-hari.',
      '• Ciri-ciri utama peserta didik yang berakhlak baik kepada Allah:',
      '  1. Melaksanakan salat tepat waktu tanpa ditunda-tunda.',
      '  2. Gemar membaca dan mempelajari Al-Qur\'an setiap hari.',
      '  3. Rajin berdoa dalam setiap mengawali dan mengakhiri kegiatan.',
      '  4. Bersyukur atas segala nikmat yang diberikan Allah Swt.',
      '  5. Bertawakal (menyerahkan hasil) setelah berusaha maksimal.',
      '  6. Menjauhi perbuatan dosa dan maksiat.',
      '  7. Menjaga amanah serta membiasakan sikap kejujuran.'
    ],
    tableData: {
      headers: ['Wujud Akhlak', 'Bentuk Penerapan Sehari-hari'],
      rows: [
        ['Ibadah Salat', 'Mendirikan salat 5 waktu tepat pada waktunya'],
        ['Interaksi Al-Qur\'an', 'Rutinkan tadarus Al-Qur\'an setelah maghrib/subuh'],
        ['Sikap Hati', 'Bersyukur saat senang, bertawakal & sabar saat diuji'],
        ['Perilaku Sosial', 'Jujur saat ujian, menjaga amanah teman & guru']
      ]
    }
  },
  {
    id: 4,
    title: '4. Menerapkan Akhlak Kepada Allah dengan Berdoa',
    subtitle: 'Pengertian Doa Sebagai Senjata dan Wujud Penghambaan Diri',
    iconName: 'MessageSquare',
    points: [
      '• Doa adalah permohonan seorang hamba kepada Allah Swt.',
      '• Doa merupakan bentuk ibadah yang menunjukkan bahwa manusia adalah makhluk yang lemah.',
      '• Manusia senantiasa membutuhkan pertolongan, petunjuk, dan kasih sayang Allah dalam setiap aspek kehidupannya.',
      '• Berdoa menjadi sarana komunikasi langsung antara hamba dengan Penciptanya tanpa perantara.'
    ],
    highlightBox: {
      title: '📌 Poin Kunci',
      content: 'Makin sering seseorang berdoa dengan ikhlas, makin dekat hubungannya dengan Allah Swt. Berdoa adalah bukti pengakuan bahwa manusia tidak memiliki daya dan upaya tanpa pertolongan Allah.',
      type: 'info'
    }
  },
  {
    id: 5,
    title: '5. Dalil Perintah Berdoa (QS. Ghafir: 60)',
    subtitle: 'Jaminan Allah Swt. Menjawab Doa Hamba-Nya yang Beriman',
    iconName: 'BookOpenCheck',
    points: [
      '• Allah Swt. menegaskan perintah berdoa dalam Al-Qur\'an Surah Ghafir ayat 60.'
    ],
    arabicExamples: [
      {
        arabic: 'وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ',
        latin: 'Wa qāla rabbukumud‘ūnī astajib lakum',
        meaning: 'Dan Tuhanmu berfirman: "Berdoalah kepada-Ku, niscaya akan Aku perkenankan bagimu."',
        note: 'QS. Ghafir: 60'
      }
    ],
    highlightBox: {
      title: '📖 Kandungan Ayat',
      content: 'Ayat ini menunjukkan bahwa Allah sangat mencintai hamba-Nya yang senantiasa berdoa. Seorang Muslim tidak hanya berdoa ketika menghadapi kesulitan, tetapi juga ketika memperoleh nikmat sebagai wujud rasa syukur.',
      type: 'tip'
    }
  },
  {
    id: 6,
    title: '6. 7 Adab Berdoa Sesuai Ajaran Islam',
    subtitle: 'Ketentuan Tata Cara Berdoa Agar Doa Lebih Sempurna dan S مستجاب',
    iconName: 'ListOrdered',
    points: [
      '• Agar doa lebih sempurna dan dikabulkan Allah Swt., Islam mengajarkan 7 adab berdoa:',
      '  1. Memulai doa dengan memuji Allah Swt. (membaca Alhamdulillah / Asmaul Husna).',
      '  2. Membaca selawat kepada Nabi Muhammad saw. (Allahumma sholli \'ala Sayyidina Muhammad).',
      '  3. Berdoa dengan penuh keyakinan bahwa Allah pasti mengabulkan.',
      '  4. Mengangkat kedua tangan sejajar dada jika memungkinkan.',
      '  5. Menghadap kiblat apabila memungkinkan.',
      '  6. Berdoa dengan suara yang lembut, tenang, dan khusyuk.',
      '  7. Mengakhiri doa dengan ucapan "Aamiin".'
    ]
  },
  {
    id: 7,
    title: '7. Keikhlasan dan Penghayatan Hati dalam Berdoa',
    subtitle: 'Bukan Sekadar Kata di Lisan, Melainkan Bisikan Hati yang Tulus',
    iconName: 'Sparkles',
    points: [
      '• Selain 7 adab lahiriah, doa hendaknya disertai dengan hati yang ikhlas dan niat yang baik.',
      '• Allah Swt. lebih menyukai hamba yang berdoa dengan sungguh-sungguh dan khusyuk daripada sekadar mengucapkan kata-kata tanpa penghayatan.',
      '• Berdoa dengan rasa butuh dan tunduk di hadapan Allah akan membuat jiwa menjadi tenang dan lapang.'
    ],
    highlightBox: {
      title: '💡 Kunci Doa Dikabulkan',
      content: 'Keikhlasan, makanan/pakaian yang halal, serta meresapi makna doa yang dipanjatkan merupakan kunci utama dikabulkannya doa oleh Allah Swt.',
      type: 'warning'
    }
  },
  {
    id: 8,
    title: '8. Manfaat Berdoa bagi Seorang Muslim',
    subtitle: 'Dampak Positif Spiritual dan Mental dalam Kehidupan Sehari-hari',
    iconName: 'Smile',
    points: [
      '• Berdoa memberikan banyak manfaat luar biasa bagi kehidupan seorang hamba, antara lain:',
      '  • Mendekatkan diri kepada Allah Swt.',
      '  • Menenangkan hati dan pikiran dari rasa cemas.',
      '  • Menumbuhkan rasa syukur atas segala nikmat.',
      '  • Menguatkan keimanan dan ketakwaan.',
      '  • Menumbuhkan sikap rendah hati (tidak sombong).',
      '  • Memberikan semangat dan kekuatan dalam menghadapi kesulitan.',
      '  • Menjadi pengingat bahwa hanya Allah Swt. satu-satunya tempat bergantung.'
    ]
  },
  {
    id: 9,
    title: '9. Pembiasaan Berdoa dalam Aktivitas Sehari-hari',
    subtitle: 'Membawa Nilai Ketauhidan dalam Setiap Detik Kehidupan Murid',
    iconName: 'CalendarCheck',
    points: [
      '• Peserta didik hendaknya membiasakan berdoa dalam setiap aktivitas:',
      '  • Doa sebelum dan sesudah belajar.',
      '  • Doa sebelum dan sesudah makan/minum.',
      '  • Doa sebelum dan bangun tidur.',
      '  • Doa ketika masuk dan keluar rumah / bepergian.',
      '  • Doa memohon ilmu yang bermanfaat dan keselamatan dunia akhirat.',
      '• Pembiasaan ini melatih murid untuk selalu mengingat Allah (dzikrullah) di mana pun berada.'
    ]
  },
  {
    id: 10,
    title: '10. Menerapkan Akhlak Kepada Allah dengan Bertawakal',
    subtitle: 'Pengertian Ikhtiar dan Tawakal Sebagai Pasangan Tak Terpisahkan',
    iconName: 'ShieldCheck',
    points: [
      '• Tawakal berarti menyerahkan hasil usaha kepada Allah Swt. setelah melakukan ikhtiar secara maksimal.',
      '• Poin Penting tentang Tawakal:',
      '  • Tawakal bukan berarti pasrah atau menyerah tanpa berusaha.',
      '  • Tawakal merupakan perpaduan harmonis antara kerja keras (ikhtiar), doa yang khusyuk, dan kepercayaan penuh kepada ketentuan Allah.',
      '  • Usaha tanpa doa dan tawakal adalah kesombongan; Doa tanpa usaha adalah kebohongan.'
    ],
    highlightBox: {
      title: '🎯 Formula Sukses Muslim',
      content: 'IKHTIAR MAKSIMAL (Kerja Keras) + DOA KHUSYUK + TAWAKAL (Berserah Diri) = HASIL TERBAIK DARI ALLAH SWT.',
      type: 'info'
    }
  },
  {
    id: 11,
    title: '11. Dalil Perintah Bertawakal (QS. Ali \'Imran: 159)',
    subtitle: 'Jaminan Cinta Allah Bagi Orang-Orang yang Bertawakal',
    iconName: 'BookOpenCheck',
    points: [
      '• Allah Swt. berfirman mengenai kewajiban bertawakal setelah bertekad dan berusaha:'
    ],
    arabicExamples: [
      {
        arabic: 'فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ',
        latin: 'Fa idzā ‘azamta fa tawakkal ‘alallāh, innallāha yuḥibbul-mutawakkilīn',
        meaning: ' "...Kemudian apabila engkau telah bertekad, maka bertawakallah kepada Allah. Sesungguhnya Allah mencintai orang-orang yang bertawakal."',
        note: 'QS. Ali \'Imran: 159'
      }
    ],
    highlightBox: {
      title: '📖 Pelajaran Utama',
      content: 'Seorang Muslim yang bertawakal akan tetap berusaha dengan sungguh-sungguh, kemudian menerima apapun hasilnya dengan lapang dada (ridha) karena yakin bahwa ketentuan Allah selalu mengandung kebaikan terbaik.',
      type: 'tip'
    }
  },
  {
    id: 12,
    title: '12. Contoh Sikap Tawakal dalam Kehidupan Murid',
    subtitle: 'Penerapan Praktis Sikap Bertawakal di Sekolah dan di Rumah',
    iconName: 'CheckCircle2',
    points: [
      '• Dalam kehidupan sehari-hari, sikap tawakal dapat diwujudkan melalui:',
      '  1. Belajar dengan tekun sebelum ujian, kemudian berdoa dan bertawakal memohon hasil terbaik.',
      '  2. Berlatih dengan sungguh-sungguh sebelum mengikuti perlombaan, lalu menyerahkan hasilnya kepada Allah.',
      '  3. Membantu orang tua dengan ikhlas tanpa mengharapkan pujian manusia.',
      '  4. Tetap bersabar dan bersikap positif ketika hasil yang diperoleh belum sesuai harapan.',
      '  5. Bersyukur dan tidak sombong ketika memperoleh keberhasilan.'
    ],
    highlightBox: {
      title: '💡 Ingat!',
      content: 'Manusia wajib berusaha dan berdoa, sedangkan hasil akhir berada sepenuhnya dalam kekuasaan dan takdir Allah Swt.',
      type: 'info'
    }
  },
  {
    id: 13,
    title: '13. Hikmah Bertawakal Kepada Allah Swt.',
    subtitle: 'Keutamaan Spiritual dan Ketenangan Jiwa Bagi Mukmin',
    iconName: 'Award',
    points: [
      '• Orang yang senantiasa bertawakal akan memperoleh banyak hikmah dan keutamaan, di antaranya:',
      '  • Hati menjadi tenang dan tidak gelisah.',
      '  • Tidak mudah putus asa ketika menghadapi kegagalan.',
      '  • Memiliki rasa percaya diri yang tinggi dan mental yang kuat.',
      '  • Lebih sabar dan ikhlas dalam menghadapi setiap ujian hidup.',
      '  • Semakin yakin kepada kekuasaan dan kasih sayang Allah Swt.',
      '  • Memiliki semangat pantang menyerah untuk terus memperbaiki diri.'
    ]
  },
  {
    id: 14,
    title: '14. Pandangan Terhadap Kegagalan dan Keberhasilan',
    subtitle: 'Sikap Mental Pemenang yang Beriman dan Bertawakal',
    iconName: 'Compass',
    points: [
      '• Dengan bertawakal, seseorang tidak akan mudah menyerah ketika menghadapi kegagalan.',
      '• Ia yakin bahwa setiap peristiwa pasti mengandung hikmah terbaik dari Allah Swt.',
      '• Bila sukses: Tidak sombong karena sadar semua atas izin Allah (Bersyukur).',
      '• Bila gagal: Tidak putus asa karena yakin Allah menyiapkan rencana yang lebih baik (Bersabar & Evaluasi).'
    ],
    tableData: {
      headers: ['Kondisi', 'Respon Orang Bertawakal', 'Respon Orang Sombong/Kufur'],
      rows: [
        ['Mencapai Keberhasilan', 'Rendah hati, bersyukur, menambah ibadah', 'Sombong, merasa hebat karena diri sendiri'],
        ['Menghadapi Kegagalan', 'Sabar, introspeksi diri, tetap berdoa', 'Kecewa berat, menyalahkan keadaan, putus asa']
      ]
    }
  },
  {
    id: 15,
    title: '15. Rangkuman & Refleksi Akhlak Kepada Allah Swt.',
    subtitle: 'Menjadi Murid Berakhlak Mulia melalui Doa Khusyuk & Tawakal Tangguh',
    iconName: 'Star',
    points: [
      '• Akhlak kepada Allah Swt. adalah wujud taat, hormat, dan cinta kepada Sang Pencipta.',
      '• Doa adalah permohonan hamba yang membutuhkan pertolongan Allah (QS. Ghafir: 60).',
      '• Amalkan 7 adab berdoa agar doa lebih khusyuk dan dikabulkan Allah.',
      '• Tawakal adalah menyerahkan hasil usaha kepada Allah setelah ikhtiar maksimal (QS. Ali \'Imran: 159).',
      '• Mari kita biasakan berdoa dalam setiap aktivitas dan bertawakal dalam setiap perjuangan!'
    ],
    highlightBox: {
      title: '🎓 Pesan Akhir',
      content: 'Mari amalkan doa dan sikap tawakal dalam kehidupan sehari-hari agar hati kita senantiasa tenang, dekat dengan Allah, dan sukses di dunia serta akhirat!',
      type: 'tip'
    }
  }
];

// =========================================================================
// 2. PROYEK MURID (2 PjBL + 2 PBL) - KELAS 5 PEMBELAJARAN 3
// =========================================================================
export const KELAS5_P3_PROJECTS: ProjectTask[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    title: 'Poster Infografis 7 Adab Berdoa & Jurnal Pembiasaan Doa Harian',
    subtitle: 'Project Based Learning (PjBL) - Kreativitas & Pembiasaan Karakter',
    badge: 'Project Based Learning (PjBL)',
    objective: 'Peserta didik merancang poster infografis kreatif berisi 7 Adab Berdoa beserta contoh doa harian, dan mengisi jurnal pembiasaan berdoa selama 1 minggu.',
    steps: [
      '1. Siapkan kertas karton / media digital (Canva) dan alat tulis pewarna.',
      '2. Tuliskan judul utama "7 ADAB BERDOA DALAM ISLAM" secara menarik.',
      '3. Gambarkan 7 poin adab berdoa secara runtut beserta ilustrasi visual sederhana.',
      '4. Tambahkan kutipan ayat QS. Ghafir: 60 beserta artinya.',
      '5. Buat lembar "Jurnal Doa Harian" untuk mencatat pembiasaan berdoa sebelum/sesudah belajar, makan, dan tidur selama 7 hari.',
      '6. Presentasikan poster di depan kelas dan pajang di mading sekolah.'
    ],
    output: 'Poster Infografis 7 Adab Berdoa (ukuran A3/karton) dan Jurnal Pembiasaan Doa Harian terisi 1 minggu.',
    teacherNote: 'Sesuai kebijakan guru: Format poster dapat disesuaikan dengan media manual (gambar tangan) atau digital, serta penyesuaian rubrik penilaian jurnal doa harian.'
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    title: 'Diorama Mini & Peta Konsep "Alur Perjuangan Ikhtiar, Doa, dan Tawakal"',
    subtitle: 'Project Based Learning (PjBL) - Visualisasi Konsep & Simulasi',
    badge: 'Project Based Learning (PjBL)',
    objective: 'Peserta didik membuat peta konsep visual atau diorama mini 3D yang menggambarkan hubungan antara Ikhtiar Maksimal, Doa Khusyuk, dan Bertawakal.',
    steps: [
      '1. Bentuk kelompok kecil beranggotakan 3-4 murid.',
      '2. Diskusikan sebuah skenario perjuangan murid (misal: persiapan menghadapi OSN / Lomba Pidato PAI / Ujian Sekolah).',
      '3. Buat skema alur 3 Tahap: Tahap 1 (Ikhtiar: Belajar keras & latihan), Tahap 2 (Doa: Berdoa sesuai 7 adab), Tahap 3 (Tawakal: Menerima hasil dengan lapang dada & ikhlas).',
      '4. Hias peta konsep atau buat diorama kotak bekas berisi miniatur kegiatan ikhtiar, berdoa, dan tawakal.',
      '5. Sertakan dalil QS. Ali \'Imran: 159 dalam tampilan diorama.',
      '6. Lakukan simulasi presentasi drama singkat mengenai penerapan ikhtiar-doa-tawakal.'
    ],
    output: 'Peta Konsep / Diorama Mini 3D "Ikhtiar - Doa - Tawakal" beserta naskah presentasi simulasi.',
    teacherNote: 'Sesuai kebijakan guru: Penilaian menekankan pemahaman konsep, kerapian visual, kerja sama kelompok, serta penyesuaian alat/bahan yang mudah didapat.'
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    title: 'Studi Kasus: Analisis Kegagalan Lomba & Solusi Bermuatan Tawakal',
    subtitle: 'Problem Based Learning (PBL) - Pemecahan Masalah & Berpikir Kritis',
    badge: 'Problem Based Learning (PBL)',
    objective: 'Peserta didik menganalisis cerita masalah seorang siswa yang patah semangat akibat gagal dalam lomba, lalu merumuskan solusi berbasis ajaran bertawakal.',
    steps: [
      '1. Bacalah Studi Kasus: "Robi telah berlatih catur setiap hari selama 1 bulan dan selalu berdoa. Namun pada babak final, ia kalah dan menjadi sangat kecewa hingga enggan belajar lagi."',
      '2. Identifikasi Masalah: Mengapa Robi menjadi sangat kecewa dan merasa usahanya sia-sia?',
      '3. Analisis Pemahaman: Apakah Robi sudah menerapkan sikap tawakal secara benar? Jelaskan kekurangannya!',
      '4. Rumuskan Solusi: Berdasarkan hikmah bertawakal dan QS. Ali \'Imran: 159, nasehat dan langkah apa yang harus dilakukan Robi agar bangkit kembali?',
      '5. Susun laporan analisis dalam bentuk surat motivasi islami untuk Robi.',
      '6. Diskusikan hasil analisis dalam forum diskusi kelas.'
    ],
    output: 'Laporan Analisis Kasus dan Surat Motivasi Islami Berbasis Konsep Tawakal.',
    teacherNote: 'Sesuai kebijakan guru: Kriteria penilaian berfokus pada ketajaman analisis masalah, kesesuaian dengan materi tawakal, dan sifat empati dalam solusi yang ditawarkan.'
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    title: 'Studi Kasus: Evaluasi dan Perbaikan Adab Berdoa di Lingkungan Sekolah',
    subtitle: 'Problem Based Learning (PBL) - Investigasi & Rekomendasi Solutif',
    badge: 'Problem Based Learning (PBL)',
    objective: 'Peserta didik melakukan pengamatan terhadap kebiasaan berdoa teman-teman di kelas/sekolah, mengidentifikasi adab yang belum terpenuhi, dan menyusun panduan perbaikan.',
    steps: [
      '1. Lakukan pengamatan saat doa bersama sebelum pelajaran dimulai di kelas.',
      '2. Catat fakta-fakta yang terjadi (misal: ada yang bercanda, berdoa sambil mengobrol, tidak mengangkat tangan, atau membaca doa terlalu cepat tanpa penghayatan).',
      '3. Bandingkan temuan lapangan dengan 7 Adab Berdoa sesuai ajaran Islam.',
      '4. Analisis dampak negatif jika berdoa tidak memperhatikan adab dan tidak khusyuk.',
      '5. Buat "Kartu Panduan Solutif Adab Berdoa" yang ringkas dan menarik untuk dibagikan kepada teman kelas.',
      '6. Usulkan program pembiasaan doa khusyuk kepada Wali Kelas/Guru PAI.'
    ],
    output: 'Laporan Pengamatan Kebiasaan Berdoa dan Kartu Panduan Solutif Adab Berdoa.',
    teacherNote: 'Sesuai kebijakan guru: Pelaksanaan pengamatan dilakukan secara santun tanpa menghakimi teman, serta bobot tugas disesuaikan dengan alokasi waktu jam PAI.'
  }
];

// =========================================================================
// 3. GAMIFIKASI INTERAKTIF (MISI DOA & TAWAKAL) - KELAS 5 PEMBELAJARAN 3
// =========================================================================
export const KELAS5_P3_QUEST_STEPS: QuestStep[] = [
  {
    id: 1,
    title: 'Tahap 1: Gerbang Akhlak kepada Allah Swt.',
    scenarioTitle: 'Ujian Kejujuran dan Keikhlasan Ibadah',
    scenarioStory: 'Kamu dan Ahmad sedang bersiap mengikuti kegiatan sekolah. Ahmad bertanya padamu: "Mengapa kita harus memiliki akhlak yang baik kepada Allah Swt.? Bukankah ibadah salat saja sudah cukup?"',
    questionPrompt: 'Bagaimana jawaban terbaikmu sesuai dengan hakikat Akhlak kepada Allah Swt.?',
    options: [
      {
        id: 'A',
        text: 'Akhlak kepada Allah berarti sikap hormat, taat, cinta, dan patuh pada seluruh perintah-Nya serta menjauhi larangan-Nya, tidak hanya dalam ibadah ritual tetapi juga perilaku sehari-hari.',
        isCorrect: true,
        explanation: 'Tepat sekali! Akhlak kepada Allah mencakup seluruh aspek kehidupan, baik ibadah khusus maupun perilaku sehari-hari yang didasari rasa taat, hormat, dan cinta.'
      },
      {
        id: 'B',
        text: 'Cukup dengan salat saja, perilaku sehari-hari tidak ada hubungannya dengan akhlak kepada Allah.',
        isCorrect: false,
        explanation: 'Kurang tepat. Akhlak kepada Allah diwujudkan baik dalam ibadah maupun dalam perilaku sehari-hari seperti jujur, amanah, dan bersyukur.'
      },
      {
        id: 'C',
        text: 'Akhlak kepada Allah hanya perlu dilakukan saat berada di masjid atau lingkungan sekolah agama.',
        isCorrect: false,
        explanation: 'Salah. Akhlak kepada Allah harus diterapkan di mana saja dan kapan saja kita berada.'
      },
      {
        id: 'D',
        text: 'Akhlak kepada Allah diukur hanya dari seberapa banyak kita mendapat pujian dari guru.',
        isCorrect: false,
        explanation: 'Salah. Akhlak dilakukan ikhlas karena Allah Swt., bukan untuk mengharapkan pujian manusia.'
      }
    ]
  },
  {
    id: 2,
    title: 'Tahap 2: Misi Memahami Hakikat Doa',
    scenarioTitle: 'Di Hadapan Lembah Kebetuhan Hamba',
    scenarioStory: 'Dian merasa dirinya sangat pintar sehingga merasa tidak perlu lagi berdoa saat akan menghadapi tes matematika. Ia berkata: "Saya sudah belajar semalaman, jadi pasti bisa tanpa perlu berdoa."',
    questionPrompt: 'Sikap Dian tersebut keliru. Mengapa manusia senantiasa membutuhkan doa kepada Allah Swt.?',
    options: [
      {
        id: 'A',
        text: 'Karena kepintaran manusia terbatas dan doa adalah bentuk ibadah yang menunjukkan bahwa manusia adalah makhluk lemah yang selalu butuh pertolongan dan petunjuk Allah.',
        isCorrect: true,
        explanation: 'Benar! Doa menunjukkan kerendahan hati manusia dan pengakuan bahwa keberhasilan hanya bisa terjadi atas izin dan pertolongan Allah Swt.'
      },
      {
        id: 'B',
        text: 'Karena jika tidak berdoa, orang tua Dian akan marah.',
        isCorrect: false,
        explanation: 'Kurang tepat. Alasan utama berdoa adalah hubungan ibadah dan kebutuhan hamba kepada Allah Swt.'
      },
      {
        id: 'C',
        text: 'Karena berdoa hanya formalitas agar terlihat rajin oleh teman-teman.',
        isCorrect: false,
        explanation: 'Salah. Berdoa harus didasari keikhlasan dan kebutuhan spiritual, bukan formalitas.'
      },
      {
        id: 'D',
        text: 'Karena kepintaran Dian akan hilang secara otomatis jika tidak berdoa.',
        isCorrect: false,
        explanation: 'Salah. Berdoa bukan mantra, melainkan permohonan tulus dan ibadah kepada Allah Swt.'
      }
    ]
  },
  {
    id: 3,
    title: 'Tahap 3: Misi Mengamalkan 7 Adab Berdoa',
    scenarioTitle: 'Ujian Kekhusyukan di Majlis Doa',
    scenarioStory: 'Saat doa bersama dipimpin guru, Budi langsung mengucapkan permintaannya dengan terburu-buru, suara keras, dan bersendawa tanpa memuji Allah maupun membaca selawat.',
    questionPrompt: 'Manakah urutan adab berdoa yang tepat agar doa Budi menjadi sempurna sesuai ajaran Islam?',
    options: [
      {
        id: 'A',
        text: 'Memulai memuji Allah, membaca selawat Nabi, berdoa penuh yakin, menghadap kiblat/mengangkat tangan, suara lembut khusyuk, & mengakhiri dengan Aamiin.',
        isCorrect: true,
        explanation: 'Sempurna! Ini adalah 7 adab berdoa sesuai tuntunan Islam agar doa dipanjatkan dengan khusyuk dan beradab.'
      },
      {
        id: 'B',
        text: 'Langsung menyebutkan permintaan, tertawa kecil, dan menutup dengan salam.',
        isCorrect: false,
        explanation: 'Salah. Berdoa harus dilakukan dengan bersungguh-sungguh dan menjaga adab-adabnya.'
      },
      {
        id: 'C',
        text: 'Membaca selawat di akhir saja tanpa perlu memuji Allah Swt.',
        isCorrect: false,
        explanation: 'Kurang tepat. Diawali dengan memuji Allah Swt. dan membaca selawat Nabi Muhammad saw.'
      },
      {
        id: 'D',
        text: 'Berdoa dengan suara seloud mungkin agar didengar oleh orang lain.',
        isCorrect: false,
        explanation: 'Salah. Adab berdoa disunnahkan dengan suara yang lembut, tenang, dan khusyuk.'
      }
    ]
  },
  {
    id: 4,
    title: 'Tahap 4: Misi Menautkan Ikhtiar dan Tawakal',
    scenarioTitle: 'Di Persimpangan Ujian Catur Sekolah',
    scenarioStory: 'Lani ingin menjuarai Lomba Catur. Ia berdoa khusyuk setiap malam, tetapi ia malas berlatih dan tidak pernah mempelajari strategi catur. Saat kalah, ia menyalahkan takdir.',
    questionPrompt: 'Mengapa pemahaman Lani tentang bertawakal itu salah?',
    options: [
      {
        id: 'A',
        text: 'Tawakal bukan pasrah tanpa berusaha; Tawakal adalah menyerahkan hasil kepada Allah SETELAH berikhtiar (belajar & berlatih) secara maksimal.',
        isCorrect: true,
        explanation: 'Luar biasa! Berdoa tanpa usaha (ikhtiar) tidaklah cukup. Tawakal sejati memadukan kerja keras, doa, dan kepercayaan kepada Allah Swt. (QS. Ali \'Imran: 159).'
      },
      {
        id: 'B',
        text: 'Lani seharusnya tidak perlu berdoa sama sekali, cukup belajar saja.',
        isCorrect: false,
        explanation: 'Salah. Seorang Muslim wajib memadukan ikhtiar dan doa, bukan meninggalkan salah satunya.'
      },
      {
        id: 'C',
        text: 'Lani sudah benar, karena doa adalah satu-satunya penentu tanpa perlu latihan.',
        isCorrect: false,
        explanation: 'Salah. Islam mengajarkan umatnya untuk berikhtiar maksimal sebelum bertawakal.'
      },
      {
        id: 'D',
        text: 'Tawakal hanya berlaku untuk orang dewasa yang bekerja, bukan untuk murid.',
        isCorrect: false,
        explanation: 'Salah. Sikap ikhtiar dan tawakal berlaku untuk semua Muslim, termasuk pelajar.'
      }
    ]
  },
  {
    id: 5,
    title: 'Tahap 5: Misi Hikmah & Ketangguhan Jiwa',
    scenarioTitle: 'Puncak Gunung Keikhlasan',
    scenarioStory: 'Fahri telah belajar giat dan berdoa penuh adab. Namun hasil ujiannya berada di peringkat kedua, bukan peringkat pertama seperti pilihannya. Fahri tetap tersenyum, bersyukur, dan mengucapkan "Alhamdulillah".',
    questionPrompt: 'Hikmah tawakal apakah yang terpancar dari sikap Fahri tersebut?',
    options: [
      {
        id: 'A',
        text: 'Hati menjadi tenang, tidak putus asa, tetap bersyukur, dan yakin bahwa ketentuan Allah pasti mengandung hikmah terbaik bagi dirinya.',
        isCorrect: true,
        explanation: 'Hebat sekali! Inilah buah manis tawakal: memiliki ketenangan hati, lapang dada, dan meyakini takdir Allah Swt. adalah yang terbaik.'
      },
      {
        id: 'B',
        text: 'Fahri merasa sedih mendalam dan berjanji tidak akan belajar lagi.',
        isCorrect: false,
        explanation: 'Salah. Sikap tawakal mencegah seseorang dari rasa putus asa dan sedih berlarut-larut.'
      },
      {
        id: 'C',
        text: 'Fahri menyalahkan gurunya karena memberi nilai yang kurang tinggi.',
        isCorrect: false,
        explanation: 'Salah. Orang yang bertawakal tidak menyalahkan orang lain atas hasil yang diterima.'
      },
      {
        id: 'D',
        text: 'Fahri merasa terpaksa tersenyum hanya agar dipuji ramah oleh teman-temannya.',
        isCorrect: false,
        explanation: 'Salah. Ketenangan dan rasa syukur orang yang bertawakal bersumber dari keikhlasan hati.'
      }
    ]
  }
];

// =========================================================================
// 4. EVALUASI PEMBELAJARAN (HOTS & COMPUTATIONAL THINKING) - KELAS 5 P3
// =========================================================================

// A. 10 Soal Pilihan Ganda (PG)
export const KELAS5_P3_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Perhatikan beberapa pernyataan berikut:\n(1) Salat tepat waktu\n(2) Gemar membaca Al-Qur\'an\n(3) Menyalahkan takdir saat gagal\n(4) Rajin berdoa dan bertawakal\nPernyataan yang mencerminkan cerminan akhlak yang baik kepada Allah Swt. ditunjukkan oleh nomor...',
    options: [
      'A. (1), (2), dan (3)',
      'B. (1), (2), dan (4)',
      'C. (2), (3), dan (4)',
      'D. (1), (3), dan (4)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Akhlak baik kepada Allah tercermin pada salat tepat waktu (1), membaca Al-Qur\'an (2), serta rajin berdoa dan bertawakal (4). Menyalahkan takdir (3) adalah sikap yang bertentangan dengan akhlak terpuji.'
  },
  {
    id: 2,
    question: 'Allah Swt. berfirman dalam QS. Ghafir ayat 60: "ادْعُونِي أَسْتَجِبْ لَكُمْ" (Berdoalah kepada-Ku, niscaya akan Aku perkenankan bagimu). Makna utama dan pesan penting dari potongan ayat tersebut adalah...',
    arabic: 'وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ',
    options: [
      'A. Allah hanya mendengar doa orang yang berada di masjid saja',
      'B. Allah sangat mencintai hamba-Nya yang berdoa dan menjamin akan mengabulkannya',
      'C. Berdoa hanya wajib dilakukan ketika seseorang tertimpa musibah berat',
      'D. Manusia dapat memenuhi semua kebutuhannya sendiri tanpa bantuan Allah'
    ],
    correctAnswerIndex: 1,
    explanation: 'QS. Ghafir: 60 menunjukkan jaminan dan kecintaan Allah Swt. kepada hamba-Nya yang senantiasa berdoa memohon pertolongan dan petunjuk.'
  },
  {
    id: 3,
    question: 'Aisyah selalu mengawali doanya dengan mengucapkan "Alhamdulillahirobbil \'alamin" dan membaca selawat kepada Nabi Muhammad saw. Tindakan Aisyah tersebut menunjukkan penerapan...',
    options: [
      'A. Syarat sah ibadah puasa',
      'B. Rukun salat fardhu',
      'C. Adab dalam berdoa',
      'D. Hikmah bertawakal'
    ],
    correctAnswerIndex: 2,
    explanation: 'Memulai doa dengan memuji Allah Swt. dan membaca selawat kepada Nabi Muhammad saw. merupakan adab utama dalam berdoa agar doa lebih sempurna.'
  },
  {
    id: 4,
    question: 'Perhatikan alur kegiatan berikut:\n[1. Belajar tekun] ➔ [2. Berdoa khusyuk] ➔ [3. Menyerahkan hasil kepada Allah]\nAlur Computational Thinking di atas menggambarkan hubungan yang terintegrasi antara...',
    options: [
      'A. Niat, Puasa, dan Kufur',
      'B. Ikhtiar, Doa, dan Tawakal',
      'C. Qada, Qadar, dan Sombong',
      'D. Dosa, Pahala, dan Siksa'
    ],
    correctAnswerIndex: 1,
    explanation: 'Belajar tekun adalah Ikhtiar (usaha), memohon pertolongan adalah Doa, dan menyerahkan hasil akhir dengan lapang dada adalah Tawakal.'
  },
  {
    id: 5,
    question: 'Manakah di bawah ini yang merupakan dalil Al-Qur\'an tentang perintah bertawakal kepada Allah Swt.?',
    arabic: 'فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ',
    options: [
      'A. QS. Al-Baqarah: 183',
      'B. QS. Ali \'Imran: 159',
      'C. QS. Al-Ikhlas: 1-4',
      'D. QS. Al-Ma\'un: 1-7'
    ],
    correctAnswerIndex: 1,
    explanation: 'QS. Ali \'Imran: 159 menegaskan: "...Kemudian apabila engkau telah bertekad, maka bertawakallah kepada Allah. Sesungguhnya Allah mencintai orang-orang yang bertawakal."'
  },
  {
    id: 6,
    question: 'Andi mengikuti ujian sekolah. Ia telah belajar sangat keras dan berdoa khusyuk. Ketika pengumuman, nilai Andi belum mencapai peringkat pertama. Respons Andi yang mencerminkan sikap bertawakal adalah...',
    options: [
      'A. Marah dan menyalahkan teman kelasnya',
      'B. Menerima hasil dengan lapang dada, tetap bersyukur, dan semangat belajar lagi',
      'C. Benci kepada pelajaran PAI dan enggan sekolah',
      'D. Merasa doanya sia-sia dan berhenti berdoa selamanya'
    ],
    correctAnswerIndex: 1,
    explanation: 'Sikap tawakal diwujudkan dengan menerima hasil akhir dengan ikhlas (lapang dada), bersyukur atas pencapaian, serta terus berbenah diri tanpa putus asa.'
  },
  {
    id: 7,
    question: 'Berikut adalah manfaat berdoa dalam kehidupan sehari-hari, KECUALI...',
    options: [
      'A. Menenangkan hati dan pikiran',
      'B. Mendekatkan diri kepada Allah Swt.',
      'C. Menumbuhkan rasa sombong atas kepintaran diri',
      'D. Menguatkan keimanan dan rasa syukur'
    ],
    correctAnswerIndex: 2,
    explanation: 'Berdoa justru menumbuhkan sikap rendah hati (bukan sombong), karena menyadari bahwa manusia adalah makhluk yang lemah di hadapan Allah Swt.'
  },
  {
    id: 8,
    question: 'Mengapa bertawakal tanpa melakukan ikhtiar (usaha) terlebih dahulu dianggap sebagai tindakan yang tidak tepat menurut ajaran Islam?',
    options: [
      'A. Karena Allah menyukai orang yang malas bekerja',
      'B. Karena tawakal adalah perpaduan antara usaha maksimal, doa, dan kepasrahan hasil',
      'C. Karena ikhtiar tidak memiliki pengaruh apapun terhadap hasil',
      'D. Karena orang yang tidak berikhtiar pasti selalu sukses'
    ],
    correctAnswerIndex: 1,
    explanation: 'Tawakal yang benar harus didahului oleh ikhtiar (kerja keras) yang maksimal. Pasrah tanpa usaha bukanlah tawakal, melainkan kelalaian atau kepasrahan buta.'
  },
  {
    id: 9,
    question: 'Di bawah ini yang BUKAN merupakan 7 adab berdoa yang diajarkan dalam Islam adalah...',
    options: [
      'A. Mengangkat kedua tangan jika memungkinkan',
      'B. Berdoa dengan suara yang keras dan berteriak-teriak',
      'C. Mengakhiri doa dengan ucapan "Aamiin"',
      'D. Berdoa dengan suara yang lembut dan khusyuk'
    ],
    correctAnswerIndex: 1,
    explanation: 'Berdoa disunnahkan dengan suara yang lembut, tenang, dan khusyuk (bukan berteriak-teriak) sesuai dengan adab Islam.'
  },
  {
    id: 10,
    question: 'Salma selalu membaca doa sebelum makan, sebelum tidur, dan sebelum belajar. Pembiasaan ini memberikan hikmah utama yaitu...',
    options: [
      'A. Salma akan dipuji sebagai anak paling pandai di kotanya',
      'B. Salma selalu mengingat Allah (dzikrullah) dalam setiap sendi kehidupannya',
      'C. Salma tidak perlu lagi belajar karena sudah dilindungi doa',
      'D. Salma terhindar dari tugas-tugas sekolah'
    ],
    correctAnswerIndex: 1,
    explanation: 'Membiasakan berdoa dalam setiap aktivitas melatih diri untuk selalu mengingat Allah (dzikrullah) dan menggantungkan harapan hanya kepada-Nya.'
  }
];

// B. 10 Soal Pilihan Ganda Kompleks (PGK) - Jawaban > 1
export const KELAS5_P3_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Pilihlah BEBERAPA pernyataan di bawah ini yang merupakan contoh wujud akhlak yang baik kepada Allah Swt.! (Pilih lebih dari satu)',
    options: [
      'A. Melaksanakan salat 5 waktu tepat pada waktunya',
      'B. Gemar membaca dan merenungkan isi Al-Qur\'an',
      'C. Menunda-nunda salat demi bermain game',
      'D. Rajin berdoa dan bersyukur atas nikmat Allah'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Pernyataan A, B, dan D adalah bentuk nyata akhlak mulia kepada Allah. Pernyataan C merupakan contoh perilaku melalaikan kewajiban.'
  },
  {
    id: 2,
    question: 'Di antara hal berikut, manakah yang termasuk dalam 7 Adab Berdoa sesuai ajaran Islam? (Pilih lebih dari satu)',
    options: [
      'A. Memulai doa dengan memuji Allah Swt. dan selawat Nabi',
      'B. Mengangkat kedua tangan dan menghadap kiblat',
      'C. Berdoa sambil bercanda dengan teman di samping',
      'D. Berdoa dengan suara yang lembut, khusyuk, serta mengakhiri dengan "Aamiin"'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Poin A, B, dan D adalah bagian dari 7 adab berdoa dalam Islam. Berdoa sambil bercanda (C) merusak kekhusyukan dan adab berdoa.'
  },
  {
    id: 3,
    question: 'Manakah pernyataan yang BENAR mengenai konsep Tawakal dalam ajaran Islam? (Pilih lebih dari satu)',
    options: [
      'A. Tawakal dilakukan SETELAH kita melakukan ikhtiar (usaha) secara maksimal',
      'B. Tawakal berarti menyerah pasrah tanpa perlu belajar atau bekerja',
      'C. Landasan dalil perintah bertawakal terdapat dalam QS. Ali \'Imran ayat 159',
      'D. Orang yang bertawakal akan menerima hasil keputusan Allah dengan lapang dada'
    ],
    correctAnswerIndices: [0, 2, 3],
    explanation: 'Pernyataan A, C, dan D sangat sesuai dengan konsep tawakal islami. B adalah pemahaman yang salah karena meninggalkan ikhtiar.'
  },
  {
    id: 4,
    question: 'Berikut ini adalah manfaat yang diperoleh seorang Muslim yang rajin berdoa dengan ikhlas: (Pilih lebih dari satu)',
    options: [
      'A. Hati menjadi tenang dan tenteram',
      'B. Menjadi sombong karena merasa doanya selalu dikabulkan',
      'C. Mendekatkan hubungan batin dengan Allah Swt.',
      'D. Menumbuhkan sikap rendah hati dan tidak mudah putus asa'
    ],
    correctAnswerIndices: [0, 2, 3],
    explanation: 'Berdoa mendekatkan diri pada Allah, menenangkan hati, dan menumbuhkan kerendahan hati. Sombong (B) adalah hal yang bertolak belakang.'
  },
  {
    id: 5,
    question: 'Pilihlah bentuk pembiasaan berdoa harian yang sangat dianjurkan bagi peserta didik kelas 5! (Pilih lebih dari satu)',
    options: [
      'A. Berdoa sebelum dan sesudah belajar di sekolah maupun di rumah',
      'B. Berdoa sebelum dan sesudah makan/minum',
      'C. Berdoa hanya saat hendak menghadapi tes kenaikan kelas saja',
      'D. Berdoa sebelum tidur dan saat bangun tidur'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Membiasakan berdoa hendaknya dilakukan setiap hari dalam berbagai aktivitas (A, B, D), bukan hanya saat butuh atau mau ujian saja (C).'
  },
  {
    id: 6,
    question: 'Manakah contoh perilaku murid di bawah ini yang mencerminkan keterpaduan Ikhtiar dan Tawakal? (Pilih lebih dari satu)',
    options: [
      'A. Budi berlatih pidato setiap sore, berdoa khusyuk, dan ikhlas menerima keputusan juri lomba',
      'B. Siti belajar giat untuk ujian, berdoa memohon kemudahan, dan berserah diri pada Allah',
      'C. Doni tidak pernah belajar, tetapi yakin nilainya akan bagus karena berdoa 5 menit',
      'D. Rina mempersiapkan bahan presentasi dengan rapi, berdoa, dan tampil percaya diri'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Pilihan A, B, dan D memadukan latihan/belajar (ikhtiar), doa, dan tawakal. Pilihan C mengabaikan ikhtiar.'
  },
  {
    id: 7,
    question: 'Pilihlah hikmah-hikmah utama dari sikap bertawakal kepada Allah Swt.! (Pilih lebih dari satu)',
    options: [
      'A. Terhindar dari sifat mudah putus asa saat menghadapi kegagalan',
      'B. Memiliki ketenangan jiwa dan tidak gampang cemas',
      'C. Selalu menyalahkan orang lain apabila keinginan belum tercapai',
      'D. Semakin yakin akan keagungan dan kekuasaan Allah Swt.'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Hikmah tawakal meliputi ketenangan hati, tidak mudah putus asa, dan makin yakin pada Allah (A, B, D). Menyalahkan orang lain (C) bukan hikmah tawakal.'
  },
  {
    id: 8,
    question: 'Di antara dalil-dalil berikut, manakah yang secara langsung membahas tentang Akhlak kepada Allah melalui Doa atau Tawakal? (Pilih lebih dari satu)',
    options: [
      'A. QS. Ghafir ayat 60 (Perintah Berdoa)',
      'B. QS. Ali \'Imran ayat 159 (Perintah Bertawakal)',
      'C. QS. Al-Ma\'un ayat 1-3 (Menghardik anak yatim)',
      'D. QS. Al-A\'raf ayat 180 (Anjuran berdoa dengan Asmaul Husna)'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'QS. Ghafir: 60 (doa), QS. Ali \'Imran: 159 (tawakal), dan QS. Al-A\'raf: 180 (doa dengan Asmaul Husna) berkaitan langsung dengan tema ini.'
  },
  {
    id: 9,
    question: 'Pilihlah faktor-faktor yang dapat menyebabkan doa seseorang menjadi lebih khusyuk dan dikabulkan Allah! (Pilih lebih dari satu)',
    options: [
      'A. Berdoa dengan hati yang ikhlas dan niat yang baik',
      'B. Mengonsumsi makanan dan minuman yang halal',
      'C. Berdoa sambil berteriak di depan orang banyak agar terlihat alim',
      'D. Memperhatikan adab berdoa seperti memuji Allah dan selawat'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Ikhlas, makanan halal, dan adab berdoa (A, B, D) adalah penentu dikabulkannya doa. Berteriak pamer (C) merusak pahala.'
  },
  {
    id: 10,
    question: 'Manakah yang merupakan sikap murid yang berakhlak baik kepada Allah ketika menerima nikmat keberhasilan? (Pilih lebih dari satu)',
    options: [
      'A. Mengucapkan "Alhamdulillah" dan bersyukur kepada Allah Swt.',
      'B. Menganggap keberhasilan tersebut murni 100% karena kehebatannya sendiri',
      'C. Membagikan kebahagiaan dengan bersedekah atau membantu teman',
      'D. Tetap rendah hati dan tidak menjadi sombong'
    ],
    correctAnswerIndices: [0, 2, 3],
    explanation: 'Bersyukur, bersedekah, dan tetap rendah hati (A, C, D) adalah cerminan akhlak terpuji saat sukses. Menganggap kehebatan sendiri (B) adalah kesombongan.'
  }
];

// C. 5 Soal Menjodohkan (Matching)
export const KELAS5_P3_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Pengertian Doa',
    leftArabic: 'الدُّعَاءُ',
    rightText: 'Permohonan hamba kepada Allah Swt. sebagai bentuk ibadah dan kebutuhan pertolongan'
  },
  {
    id: 2,
    leftText: 'Pengertian Tawakal',
    leftArabic: 'التَّوَكُّلُ',
    rightText: 'Menyerahkan hasil usaha kepada Allah Swt. setelah berikhtiar secara maksimal'
  },
  {
    id: 3,
    leftText: 'Dalil Perintah Berdoa',
    leftArabic: 'QS. Ghafir: 60',
    rightText: '"Berdoalah kepada-Ku, niscaya akan Aku perkenankan bagimu."'
  },
  {
    id: 4,
    leftText: 'Dalil Perintah Bertawakal',
    leftArabic: 'QS. Ali \'Imran: 159',
    rightText: '"...Apabila engkau telah bertekad, maka bertawakallah kepada Allah..."'
  },
  {
    id: 5,
    leftText: 'Adab Mengakhiri Doa',
    leftArabic: 'آمين',
    rightText: 'Mengucapkan "Aamiin" yang berarti "Kabulkanlah doa kami ya Allah"'
  }
];

// D. 10 Soal Benar / Salah (BS) dengan Isian Alasan
export const KELAS5_P3_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Akhlak kepada Allah Swt. hanya diwujudkan saat kita berada di dalam masjid untuk melaksanakan salat.',
    isTrue: false,
    explanation: 'Alasan: Akhlak kepada Allah diwujudkan tidak hanya dalam ibadah ritual di masjid, tetapi juga dalam seluruh sikap dan perilaku sehari-hari seperti jujur, amanah, bersyukur, dan bertawakal.'
  },
  {
    id: 2,
    statement: 'Allah Swt. berjanji akan memperkenankan doa hamba-Nya yang memohon kepada-Nya sebagaimana tertera dalam QS. Ghafir ayat 60.',
    isTrue: true,
    explanation: 'Alasan: QS. Ghafir: 60 secara tegas menyatakan "Ud‘ūnī astajib lakum" (Berdoalah kepada-Ku, niscaya Aku perkenankan bagimu).'
  },
  {
    id: 3,
    statement: 'Membaca selawat kepada Nabi Muhammad saw. merupakan salah satu adab diawalinya doa.',
    isTrue: true,
    explanation: 'Alasan: Memuji Allah Swt. dan membaca selawat kepada Nabi Muhammad saw. adalah adab diawalinya doa agar doa lebih sempurna.'
  },
  {
    id: 4,
    statement: 'Seseorang yang bertawakal tidak perlu belajar atau berusaha lagi sebelum ujian karena hasilnya sudah ditentukan Allah.',
    isTrue: false,
    explanation: 'Alasan: Tawakal yang benar adalah menyerahkan hasil SETELAH melakukan ikhtiar (belajar/berusaha) secara maksimal. Pasrah tanpa usaha adalah tindakan keliru.'
  },
  {
    id: 5,
    statement: 'Berdoa dengan suara yang keras dan berteriak-teriak adalah adab berdoa yang diajarkan dalam Islam.',
    isTrue: false,
    explanation: 'Adab berdoa disunnahkan dengan suara yang lembut, tenang, dan khusyuk, bukan dengan berteriak-teriak.'
  },
  {
    id: 6,
    statement: 'QS. Ali \'Imran ayat 159 menegaskan bahwa Allah Swt. mencintai orang-orang yang bertawakal kepada-Nya.',
    isTrue: true,
    explanation: 'Alasan: Potongan ayat QS. Ali \'Imran: 159 berbunyi "Innallāha yuḥibbul-mutawakkilīn" (Sesungguhnya Allah mencintai orang-orang yang bertawakal).'
  },
  {
    id: 7,
    statement: 'Orang yang bertawakal akan menjadi sangat stres dan putus asa apabila mengalami kegagalan.',
    isTrue: false,
    explanation: 'Alasan: Hikmah utama tawakal justru membuat hati tenang, tidak mudah putus asa, serta meyakini bahwa ada hikmah terbaik di balik setiap takdir Allah.'
  },
  {
    id: 8,
    statement: 'Berdoa hanya dilakukan ketika kita sedang tertimpa musibah atau kesulitan hidup.',
    isTrue: false,
    explanation: 'Alasan: Berdoa dilakukan baik dalam keadaan sulit maupun saat memperoleh nikmat sebagai wujud syukur dan penghambaan kepada Allah Swt.'
  },
  {
    id: 9,
    statement: 'Sikap rendah hati dan tidak sombong merupakan salah satu manfaat yang diperoleh dari kebiasaan berdoa.',
    isTrue: true,
    explanation: 'Alasan: Berdoa mengingatkan manusia bahwa dirinya lemah dan bergantung penuh pada kekuasaan Allah Swt. sehingga menjauhkan dari sifat sombong.'
  },
  {
    id: 10,
    statement: 'Mengakhiri doa dengan mengucapkan "Aamiin" memiliki arti memohon kepada Allah agar mengabulkan doa yang telah dipanjatkan.',
    isTrue: true,
    explanation: 'Alasan: Kata "Aamiin" secara bahasa berarti "Ya Allah, perkenankanlah/kabulkanlah doa kami".'
  }
];

// E. 5 Soal Uraian / Essay (HOTS & Computational Thinking)
export const KELAS5_P3_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan pengertian akhlak kepada Allah Swt. dan sebutkan 4 contoh perbuatan peserta didik yang mencerminkan akhlak terpuji kepada Allah dalam kehidupan sehari-hari!',
    rubric: 'Skor Maksimal 20:\n- Menjelaskan pengertian akhlak kepada Allah dengan tepat (Skor 8)\n- Menyebutkan 4 contoh perbuatan murid secara spesifik (Skor 12)',
    sampleAnswer: 'Akhlak kepada Allah Swt. adalah sikap hormat, taat, cinta, dan patuh kepada seluruh perintah Allah serta menjauhi larangan-Nya. Contoh perbuatannya:\n1. Melaksanakan salat 5 waktu tepat waktu.\n2. Gemar membaca Al-Qur\'an setiap hari.\n3. Membiasakan berdoa sebelum dan sesudah beraktivitas.\n4. Bersyukur saat mendapat nikmat dan bertawakal saat menghadapi ujian.'
  },
  {
    id: 2,
    question: 'Uraikan 7 adab berdoa dalam Islam secara runtut! Mengapa adab-adab tersebut penting diperhatikan saat kita memohon kepada Allah Swt.?',
    rubric: 'Skor Maksimal 20:\n- Menyebutkan 7 adab berdoa secara runtut (Skor 14)\n- Menjelaskan alasan pentingnya memperhatikan adab berdoa (Skor 6)',
    sampleAnswer: '7 Adab Berdoa:\n1. Memulai dengan memuji Allah Swt.\n2. Membaca selawat kepada Nabi Muhammad saw.\n3. Berdoa dengan penuh keyakinan.\n4. Mengangkat kedua tangan.\n5. Menghadap kiblat.\n6. Berdoa dengan suara lembut dan khusyuk.\n7. Mengakhiri dengan ucapan "Aamiin".\nAdab ini penting diperhatikan sebagai bentuk penghormatan, kerendahan hati hamba di hadapan Sang Pencipta, serta agar doa lebih sempurna dan dikabulkan Allah Swt.'
  },
  {
    id: 3,
    question: 'Nizam bercita-cita menjadi juara Olimpiade Sains. Jelaskan alur penerapan "Ikhtiar - Doa - Tawakal" (secara Computational Thinking) yang harus dilakukan Nizam dari awal persiapan hingga pengumuman hasil!',
    rubric: 'Skor Maksimal 20:\n- Menguraikan tahap Ikhtiar secara mendetail (Skor 6)\n- Menguraikan tahap Doa sesuai adab (Skor 6)\n- Menguraikan tahap Tawakal saat pengumuman hasil (Skor 8)',
    sampleAnswer: 'Alur Computational Thinking Nizam:\n1. TAHAP IKHTIAR (Usaha Maksimal): Belajar materi sains setiap hari, berlatih soal-soal olimpiade, dan menjaga kesehatan fisik.\n2. TAHAP DOA (Permohonan Khusyuk): Memohon kemudahan dan kelancaran kepada Allah Swt. setiap selesai salat dengan memperhatikan adab berdoa.\n3. TAHAP TAWAKAL (Berserah Diri): Menyerahkan hasil akhir kepada Allah Swt. Jika menang, ia bersyukur dan rendah hati. Jika belum menang, ia menerima dengan lapang dada dan menjadikannya pelajaran.'
  },
  {
    id: 4,
    question: 'Tuliskan dan terjemahkan dalil Al-Qur\'an yang memerintahkan kita untuk bertawakal kepada Allah Swt., serta jelaskan pesan utama dari ayat tersebut!',
    arabic: 'فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ',
    rubric: 'Skor Maksimal 20:\n- Menuliskan/menyebutkan QS. Ali \'Imran: 159 (Skor 6)\n- Menguraikan terjemahan ayat dengan benar (Skor 7)\n- Menjelaskan pesan utama ayat (Skor 7)',
    sampleAnswer: 'Dalil: QS. Ali \'Imran: 159.\nArtinya: "...Kemudian apabila engkau telah bertekad, maka bertawakallah kepada Allah. Sesungguhnya Allah mencintai orang-orang yang bertawakal."\nPesan Utama: Ayat ini menegaskan bahwa setelah kita memiliki tekad dan berusaha sungguh-sungguh, kita wajib menyerahkan hasilnya kepada Allah. Allah sangat mencintai hamba-Nya yang bertawakal.'
  },
  {
    id: 5,
    question: 'Analisis Studi Kasus: Mengapa seseorang yang senantiasa bertawakal memiliki jiwa yang tenang dan tidak mudah putus asa meskipun mengalami kegagalan? Sebutkan 4 hikmah bertawakal!',
    rubric: 'Skor Maksimal 20:\n- Menganalisis alasan ketenangan jiwa orang yang bertawakal (Skor 8)\n- Menyebutkan 4 hikmah bertawakal (Skor 12)',
    sampleAnswer: 'Orang yang bertawakal memiliki jiwa tenang karena ia menyadari bahwa kewajibannya adalah berusaha maksimal, sedangkan hasil akhir adalah otoritas Allah Yang Maha Bijaksana. Ia meyakini bahwa takdir Allah pasti terbaik.\n4 Hikmah Bertawakal:\n1. Hati menjadi tenang dan tenteram.\n2. Tidak mudah putus asa saat gagal.\n3. Memiliki rasa percaya diri yang baik.\n4. Semakin yakin akan kekuasaan dan kasih sayang Allah Swt.'
  }
];
