// Data Lengkap Kelas 4 Pembelajaran 1 berdasarkan PDF Resmi BAB 1 & Surah An-Nasr
// Membaca, Menulis, dan Membedakan Huruf Hijaiyah Bersambung Tiga Kata atau Lebih
// dengan Bacaan Idgham Bi Ghunnah dan Idgham Bila Ghunnah serta Surah An-Nasr

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

export interface TarikTambangQuestion {
  id: number;
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
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 4 PEMBELAJARAN 1)
// =========================================================================
export const KELAS4_P1_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Tujuan Pembelajaran & Keutamaan Al-Qur\'an',
    subtitle: 'Membaca Al-Qur\'an secara Tartil Sesuai Kaidah Tajwid',
    iconName: 'Target',
    points: [
      '1. Membaca huruf hijaiyah bersambung tiga kata atau lebih dengan lancar.',
      '2. Menulis huruf hijaiyah bersambung sesuai kaidah penulisan Arab (kanan ke kiri).',
      '3. Membedakan bentuk huruf hijaiyah di awal, tengah, dan akhir kata.',
      '4. Menjelaskan pengertian hukum bacaan Idgham Bi Ghunnah dan Idgham Bila Ghunnah.',
      '5. Mengidentifikasi bacaan Idgham Bi Ghunnah dan Idgham Bila Ghunnah dalam ayat Al-Qur\'an.',
      '6. Membaca dan memahami kandungan Surah An-Nasr dengan benar.'
    ],
    highlightBox: {
      title: '📖 Firman Allah Swt. (Q.S. Al-Muzzammil: 4)',
      content: '"وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا" — Dan bacalah Al-Qur\'an itu dengan perlahan-lahan (tartil).',
      type: 'info'
    }
  },
  {
    id: 2,
    title: '2. Perubahan Bentuk Huruf Hijaiyah Bersambung',
    subtitle: 'Mengenal Perubahan Bentuk Huruf di Awal, Tengah, dan Akhir Kata',
    iconName: 'Edit3',
    points: [
      '• Huruf hijaiyah terdiri dari 29 huruf.',
      '• Kebanyakan huruf mengalami perubahan bentuk agar dapat disambung dengan indah dan mudah dibaca.',
      '• Penulisan Arab dimulai dari arah KANAN ke KIRI.'
    ],
    tableData: {
      headers: ['Huruf Tunggal', 'Bentuk Awal Kata', 'Bentuk Tengah Kata', 'Bentuk Akhir Kata'],
      rows: [
        ['ب (Ba)', 'بـ', 'ـبـ', 'ـب'],
        ['ت (Ta)', 'تـ', 'ـتـ', 'ـت'],
        ['ج (Jim)', 'جـ', 'ـجـ', 'ـج'],
        ['م (Mim)', 'مـ', 'ـمـ', 'ـم'],
        ['ن (Nun)', 'نـ', 'ـنـ', 'ـن']
      ]
    },
    highlightBox: {
      title: '💡 Tips Menulis Arab',
      content: 'Gunakan pensil dengan benar, mulailah dari sebelah kanan, perhatikan bentuk sambungan huruf, dan jaga kerapian tulisan secara rutin.',
      type: 'tip'
    }
  },
  {
    id: 3,
    title: '3. Membaca Huruf Hijaiyah 3 Kata atau Lebih',
    subtitle: 'Latihan Membaca Kalimat Al-Qur\'an dengan Lancar',
    iconName: 'BookOpen',
    points: [
      'Saat membaca kalimat bersambung tiga kata atau lebih, perhatikan 4 hal penting:',
      '1. Makhraj Huruf (tempat keluarnya huruf).',
      '2. Panjang Pendek Bacaan (Mad).',
      '3. Hukum Bacaan Tajwid.',
      '4. Kelancaran membaca tanpa terputus-putus.'
    ],
    arabicExamples: [
      { arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', latin: 'Alhamdu lillaahi robbil \'aalamiin', meaning: 'Segala puji bagi Allah, Tuhan semesta alam.' },
      { arabic: 'إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ', latin: 'Innallaaha ghofuurur rohiim', meaning: 'Sesungguhnya Allah Maha Pengampun lagi Maha Penyayang.' },
      { arabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', latin: 'Bismillaahir rohmaanir rohiim', meaning: 'Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.' },
      { arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ', latin: 'Robbighfir lii wa liwaalidayya', meaning: 'Ya Tuhanku, ampunilah aku dan kedua orang tuaku.' }
    ]
  },
  {
    id: 4,
    title: '4. Pengertian Ilmu Tajwid & Hukum Idgham',
    subtitle: 'Membaguskan Bacaan Al-Qur\'an Sesuai Ajaran Rasulullah saw.',
    iconName: 'Layers',
    points: [
      '• Tajwid secara bahasa berarti: membaguskan atau memperindah.',
      '• Tajwid secara istilah: ilmu yang mempelajari cara membaca Al-Qur\'an dengan benar sesuai makhraj, sifat huruf, dan hukum bacaannya.',
      '• Pengertian Idgham: memasukkan atau meleburkan satu huruf ke dalam huruf berikutnya sehingga dibaca menyatu.',
      '• Idgham terjadi apabila Nun Sukun (نْ) atau Tanwin (ً ٍ ٌ) bertemu dengan huruf-huruf tertentu.'
    ],
    highlightBox: {
      title: '📌 2 Pembagian Hukum Idgham',
      content: '1. Idgham Bi Ghunnah (dengan dengung)\n2. Idgham Bila Ghunnah (tanpa dengung)',
      type: 'info'
    }
  },
  {
    id: 5,
    title: '5. Hukum Bacaan Idgham Bi Ghunnah',
    subtitle: 'Melebur Disertai Dengung (Ghunnah) 2 Harakat',
    iconName: 'Volume2',
    points: [
      '• Pengertian: Hukum bacaan apabila Nun Sukun (نْ) atau Tanwin (ً ٍ ٌ) bertemu salah satu dari 4 huruf: Ya (ي), Nun (ن), Mim (م), Wau (و).',
      '• Singkatan Mudah Diingat: يَنْمُوْ (Yanmuu).',
      '• Cara Membaca: Nun sukun/tanwin melebur ke huruf berikutnya disertai suara dengung di hidung selama 2 harakat.'
    ],
    arabicExamples: [
      { arabic: 'مِنْ مَالٍ', latin: 'Mim maalin', meaning: 'Dari harta', note: 'Nun sukun bertemu Mim (م)' },
      { arabic: 'مِنْ نُورٍ', latin: 'Min nuurin (dengung)', meaning: 'Dari cahaya', note: 'Nun sukun bertemu Nun (ن)' },
      { arabic: 'غَفُورٌ وَرَحِيمٌ', latin: 'Ghafūruw warahīm', meaning: 'Maha Pengampun lagi Maha Penyayang', note: 'Tanwin bertemu Wau (و)' },
      { arabic: 'مَنْ يَعْمَلْ', latin: 'May ya\'mal', meaning: 'Barangsiapa mengerjakan', note: 'Nun sukun bertemu Ya (ي)' }
    ]
  },
  {
    id: 6,
    title: '6. Hukum Bacaan Idgham Bila Ghunnah',
    subtitle: 'Melebur Tanpa Dengung',
    iconName: 'VolumeX',
    points: [
      '• Pengertian: Hukum bacaan apabila Nun Sukun (نْ) atau Tanwin (ً ٍ ٌ) bertemu huruf Lam (ل) atau Ra (ر).',
      '• Jumlah Huruf: Hanya 2 huruf, yaitu Lam (ل) dan Ra (ر).',
      '• Cara Membaca: Nun sukun/tanwin melebur sepenuhnya ke dalam huruf Lam atau Ra TANPA dibaca berdengung.'
    ],
    arabicExamples: [
      { arabic: 'مِنْ رَبِّهِمْ', latin: 'Mir rabbihim', meaning: 'Dari Tuhan mereka', note: 'Nun sukun bertemu Ra (ر)' },
      { arabic: 'غَفُورٌ رَحِيمٌ', latin: 'Ghafūrur rahīm', meaning: 'Maha Pengampun lagi Maha Penyayang', note: 'Tanwin bertemu Ra (ر)' },
      { arabic: 'مِنْ لَدُنْهُ', latin: 'Mil ladunhu', meaning: 'Dari sisi-Nya', note: 'Nun sukun bertemu Lam (ل)' },
      { arabic: 'هُدًى لِلْمُتَّقِينَ', latin: 'Hudal lil muttaqīn', meaning: 'Petunjuk bagi orang bertakwa', note: 'Tanwin bertemu Lam (ل)' }
    ]
  },
  {
    id: 7,
    title: '7. Tabel Perbedaan Idgham Bi Ghunnah vs Idgham Bila Ghunnah',
    subtitle: 'Perbandingan Lengkap untuk Mengasah Pemahaman',
    iconName: 'CheckSquare',
    points: [
      'Pahami perbedaan mendasar kedua hukum bacaan idgham melalui tabel pembanding berikut:'
    ],
    tableData: {
      headers: ['Pembeda', 'Idgham Bi Ghunnah', 'Idgham Bila Ghunnah'],
      rows: [
        ['Cara Baca', 'Dibaca melebur DENGAN dengung', 'Dibaca melebur TANPA dengung'],
        ['Huruf-Hurufnya', 'ي ، ن ، م ، و (Yanmuu)', 'ل ، ر (Lam & Ra)'],
        ['Durasi Dengung', 'Dengung tahan 2 harakat', 'Tidak ada dengung sama sekali'],
        ['Contoh Al-Qur\'an', 'مِنْ وَالٍ (Minw waalin)', 'مِنْ رَبِّهِمْ (Mir rabbihim)']
      ]
    }
  },
  {
    id: 8,
    title: '8. Mengenal Surah An-Nasr',
    subtitle: 'Surah Ke-110 dalam Al-Qur\'an Tentang Pertolongan Allah',
    iconName: 'Sparkles',
    points: [
      '• Surah An-Nasr adalah surah ke-110 dalam Al-Qur\'an.',
      '• Terdiri dari 3 ayat dan tergolong Surah Madaniyah (diturunkan setelah Nabi hijrah ke Madinah).',
      '• An-Nasr artinya: "Pertolongan".',
      '• Nama An-Nasr diambil dari kata pada ayat pertama yang mengabarkan tentang pertolongan Allah Swt. dan kemenangan Islam.'
    ],
    highlightBox: {
      title: '🌟 Keutamaan Surah An-Nasr',
      content: 'Meskipun surah ini pendek, kandungannya sangat dalam mengajarkan tentang rasa syukur atas pertolongan Allah, rendah hati, dan memperbanyak istigfar.',
      type: 'info'
    }
  },
  {
    id: 9,
    title: '9. Teks dan Arti Surah An-Nasr (Ayat 1-3)',
    subtitle: 'Lafazh Arab, Latin, dan Terjemahan Lengkap',
    iconName: 'FileText',
    points: [
      'Ayat 1:',
      'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ (Izaa jaa-a nasrullaahi wal-fath)',
      'Artinya: "Apabila telah datang pertolongan Allah dan kemenangan."',
      '',
      'Ayat 2:',
      'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا (Wa ro-aitan-naasa yadkhuluuna fii diinillaahi afwaajaa)',
      'Artinya: "Dan engkau melihat manusia berbondong-bondong masuk agama Allah."',
      '',
      'Ayat 3:',
      'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا (Fa sabbih bihamdi robbika wastaghfirhu innahuu kaana tawwaabaa)',
      'Artinya: "Maka bertasbihlah dengan memuji Tuhanmu dan mohonlah ampun kepada-Nya. Sungguh, Dia Maha Penerima tobat."'
    ]
  },
  {
    id: 10,
    title: '10. Asbabun Nuzul & Kandungan Utama Surah An-Nasr',
    subtitle: 'Sebab Turunnya Surah & 5 Pesan Pokok Kehidupan',
    iconName: 'HelpCircle',
    points: [
      '• Asbabun Nuzul: Diturunkan setelah peristiwa Fathu Makkah (Pembebasan Kota Makkah) pada tahun ke-8 Hijriah ketika masyarakat Arab berbondong-bondong masuk Islam.',
      '5 Pesan Pokok Surah An-Nasr:',
      '1. Pertolongan Datang dari Allah Swt. (bukan semata kekuatan manusia).',
      '2. Kemenangan Harus Disyukuri dengan kerendahan hati.',
      '3. Memperbanyak Tasbih (سُبْحَانَ اللَّهِ) untuk mengagungkan Allah.',
      '4. Memperbanyak Istigfar (أَسْتَغْفِرُ اللَّهَ) karena manusia tidak luput dari dosa.',
      '5. Allah Swt. Maha Penerima Tobat bagi hamba-Nya yang ingin memperbaiki diri.'
    ]
  },
  {
    id: 11,
    title: '11. Kisah Inspiratif: Fahri & Ammar',
    subtitle: 'Meneladani Semangat Belajar Tajwid & Rasa Syukur',
    iconName: 'Heart',
    points: [
      '📖 Kisah 1 (Fahri - Tekun Belajar Tajwid):',
      'Fahri sering salah membaca Idgham Bi Ghunnah dan Bila Ghunnah. Namun Fahri tidak menyerah. Setiap selesai salat Magrib, Fahri berlatih 30 menit bersama ayahnya. Hasilnya, Fahri menjadi juara MTQ sekolah!',
      '',
      '📖 Kisah 2 (Ammar - Rendah Hati & Bersyukur):',
      'Setelah menjuarai lomba MTQ, Ammar tidak sombong. Ia berkata bahwa keberhasilannya adalah pertolongan Allah. Sepulang lomba, Ammar shalat sunah 2 rakaat serta memperbanyak tasbih dan istigfar.'
    ]
  },
  {
    id: 12,
    title: '12. Hikmah & Penerapan dalam Kehidupan Sehari-hari',
    subtitle: 'Pengamalan Ilmu Tajwid & Nilai Surah An-Nasr',
    iconName: 'Compass',
    points: [
      '✨ Hikmah Mempelajari Tajwid & Surah An-Nasr:',
      '• Menjaga kemurnian bacaan Al-Qur\'an & memperoleh pahala melimpah.',
      '• Membiasakan bersyukur dan menghindari sifat sombong.',
      '• Memperbanyak zikir tasbih dan istigfar.',
      '',
      '🏠 Di Rumah: Membaca Al-Qur\'an tiap hari, murojaah bersama keluarga, rajin beribadah.',
      '🏫 Di Sekolah: Berdoa sebelum belajar, tidak sombong saat mendapat nilai tinggi, menghargai teman.',
      '🌍 Di Masyarakat: Menjaga kerukunan, mengajak kebaikan, bersikap rendah hati.'
    ]
  }
];

// =========================================================================
// 2. PENUGASAN PROYEK MURID (2 PjBL + 2 PBL) - Sesuai Kebijakan Guru
// =========================================================================
export const KELAS4_P1_PROJECTS: ProjectTask[] = [
  {
    id: 'p1_pjbl_1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Poster Bagan Pohon Hukum Idgham & Kartu Karton Tajwid',
    subtitle: 'Proyek Membuat Poster Visual Perbedaan Idgham Bi Ghunnah dan Bila Ghunnah',
    objective: 'Peserta didik mampu mengklasifikasikan huruf dan cara membaca Idgham Bi Ghunnah serta Idgham Bila Ghunnah ke dalam poster visual yang kreatif dan rapi.',
    steps: [
      '1. Siapkan kertas karton A3, spidol warna, gunting, dan kertas warna-warni.',
      '2. Buatlah bagan pohon utama bercabang dua: Cabang 1 "Idgham Bi Ghunnah" dan Cabang 2 "Idgham Bila Ghunnah".',
      '3. Tempelkan daun-daun huruf: (ي ، ن ، م ، و) pada cabang Bi Ghunnah dan (ل ، ر) pada cabang Bila Ghunnah.',
      '4. Tuliskan 2 contoh potongan ayat Al-Qur\'an beserta cara bacanya pada masing-masing cabang.',
      '5. Hias poster dan kreasikan secara menarik lalu presentasikan di depan kelas.'
    ],
    output: 'Poster Karton A3 "Pohon Hukum Idgham Bi Ghunnah & Bila Ghunnah".',
    teacherNote: 'Rubrik penilaian kerapian poster, kebenaran hukum tajwid, dan batas waktu penyerahan disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p1_pjbl_2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Buku Diari Murojaah & Kaligrafi Surah An-Nasr',
    subtitle: 'Proyek Pembiasaan Membaca Al-Qur\'an & Penulisan Arab Bersambung',
    objective: 'Peserta didik mampu menyalin Surah An-Nasr dengan tulisan hijaiyah bersambung yang rapi serta mencatat jurnal murojaah harian.',
    steps: [
      '1. Buatlah buku saku kreatif berhias kaligrafi sederhana Surah An-Nasr ayat 1-3.',
      '2. Salinlah Surah An-Nasr dengan huruf Arab bersambung dari arah kanan ke kiri beserta artinya.',
      '3. Buat tabel "Jurnal Murojaah 7 Hari" berisi catatan jam membaca Al-Qur\'an dan bacaan tasbih/istigfar.',
      '4. Mintalah tanda tangan orang tua/guru sebagai bukti pelaksanaan murojaah harian.',
      '5. Serahkan buku saku diari kepada guru agama Islam.'
    ],
    output: 'Buku Saku Kaligrafi Surah An-Nasr & Diari Murojaah 7 Hari.',
    teacherNote: 'Mekanisme verifikasi jurnal harian dan kriteria kerapian tulisan Arab disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p1_pbl_1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Analisis Kesalahan Bacaan Tajwid: "Mengapa Fahri Sering Keliru?"',
    subtitle: 'Pemecahan Masalah Membedakan Bacaan Dengung dan Tanpa Dengung',
    objective: 'Peserta didik mampu menganalisis penyebab kekeliruan membaca Nun Sukun bertemu huruf Lam/Ra serta merumuskan cara mengatasinya.',
    steps: [
      '1. Bacalah kasus: "Budi membaca ayat (مِنْ رَبِّهِمْ) dengan suara mendengung lama (Min-nn-rabbihim). Budi bingung membedakan huruf Idgham Bi Ghunnah dan Bila Ghunnah."',
      '2. Identifikasi kesalahan: Jelaskan hukum bacaan yang tepat untuk (مِنْ رَبِّهِمْ) dan mengapa tidak boleh didengungkan!',
      '3. Diskusikan dalam kelompok: Buat rumus singkat cara membedakan kata kunci يَنْمُوْ (Yanmuu) dan (ل ، ر).',
      '4. Rancanglah "Kartu Saku Pengingat Tajwid" yang berisi tips cepat membedakan dengung dan tanpa dengung.',
      '5. Peragakan cara membaca yang benar di hadapan kelompok lain.'
    ],
    output: 'Lembar Analisis Kesalahan Tajwid & Kartu Saku Pengingat Idgham.',
    teacherNote: 'Pembagian kelompok diskusi dan rubrik penilaian pemecahan masalah tajwid disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p1_pbl_2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Studi Kasus Karakter: Sikap Menghadapi Kemenangan & Nilai Tinggi',
    subtitle: 'Solusi Meneladani Surah An-Nasr dan Kisah Ammar dalam Kehidupan Sekolah',
    objective: 'Peserta didik mampu merumuskan solusi atas sikap sombong saat mendapat nilai terbaik dengan meneladani pesan Surah An-Nasr dan kisah Ammar.',
    steps: [
      '1. Amati kasus: "Doni mendapat nilai 100 pada ujian PAI. Doni pamer dan mengejek teman-teman yang nilainya lebih rendah."',
      '2. Bandingkan dengan kisah Ammar yang menjuarai lomba MTQ dan perbuatan bersyukur dalam Surah An-Nasr.',
      '3. Jawab pertanyaan masalah: Mengapa sikap Doni bertentangan dengan pokok kandungan Surah An-Nasr ayat 3?',
      '4. Susunlah 3 langkah nyata bagaimana seharusnya Doni bersikap rendah hati dan bersyukur kepada Allah.',
      '5. Buatlah slogan "Prestasi Tinggi, Hati Tetap Rendah" untuk dipajang di mading sekolah.'
    ],
    output: 'Laporan Solusi Studi Kasus Karakter & Slogan Rendah Hati.',
    teacherNote: 'Tempat pemajangan slogan dan rubrik evaluasi pemikiran kritis murid disesuaikan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI INTERAKTIF: TARIK TAMBANG INTERAKTIF (PERMAINAN TUG-OF-WAR)
// =========================================================================
export const KELAS4_P1_TARIK_TAMBANG: TarikTambangQuestion[] = [
  {
    id: 1,
    prompt: 'Huruf-huruf Idgham Bi Ghunnah dapat dengan mudah dihafal melalui kata...',
    options: [
      { id: '1a', text: 'يَنْمُوْ (Yanmuu: Ya, Nun, Mim, Wau)', isCorrect: true, explanation: 'Benar! Huruf Idgham Bi Ghunnah terdiri dari ي، ن، م، و yang disingkat Yanmuu.' },
      { id: '1b', text: 'لَر (Lam dan Ra)', isCorrect: false, explanation: 'Salah! Lam dan Ra adalah huruf Idgham Bila Ghunnah.' },
      { id: '1c', text: 'قُطْبُ جَدٍّ', isCorrect: false, explanation: 'Salah! Itu adalah huruf qalqalah.' },
      { id: '1d', text: 'أَيُّوبُ', isCorrect: false, explanation: 'Salah! Singkatan yang benar adalah Yanmuu.' }
    ]
  },
  {
    id: 2,
    prompt: 'Bagaimana cara membaca hukum Idgham Bila Ghunnah saat Nun Sukun bertemu huruf Lam (ل) atau Ra (ر)?',
    options: [
      { id: '2a', text: 'Melebur tanpa dengung', isCorrect: true, explanation: 'Tepat sekali! Bila Ghunnah artinya tanpa dengung.' },
      { id: '2b', text: 'Melebur disertai dengung 2 harakat', isCorrect: false, explanation: 'Salah! Dengung 2 harakat adalah untuk Bi Ghunnah.' },
      { id: '2c', text: 'Dibaca samar-samar', isCorrect: false, explanation: 'Salah! Dibaca samar adalah Ikhfa.' },
      { id: '2d', text: 'Dibaca jelas dan tegas', isCorrect: false, explanation: 'Salah! Dibaca jelas adalah Izhar.' }
    ]
  },
  {
    id: 3,
    prompt: 'Pada lafazh (مِنْ رَبِّهِمْ), hukum bacaan tajwid yang terjadi adalah...',
    options: [
      { id: '3a', text: 'Idgham Bila Ghunnah (Nun sukun bertemu Ra)', isCorrect: true, explanation: 'Luar biasa! Nun sukun bertemu Ra dibaca Mir rabbihim tanpa dengung.' },
      { id: '3b', text: 'Idgham Bi Ghunnah', isCorrect: false, explanation: 'Salah! Ra bukan huruf Bi Ghunnah.' },
      { id: '3c', text: 'Izhar Halqi', isCorrect: false, explanation: 'Salah! Nun sukun bertemu Ra melebur.' },
      { id: '3d', text: 'Iqlab', isCorrect: false, explanation: 'Salah! Iqlab terjadi jika bertemu Ba.' }
    ]
  },
  {
    id: 4,
    prompt: 'Surah An-Nasr merupakan surah ke-110 dalam Al-Qur\'an. Nama "An-Nasr" memiliki arti...',
    options: [
      { id: '4a', text: 'Pertolongan', isCorrect: true, explanation: 'Hebat! An-Nasr artinya Pertolongan Allah.' },
      { id: '4b', text: 'Pertolongan Manusia', isCorrect: false, explanation: 'Salah! An-Nasr berarti pertolongan dari Allah Swt.' },
      { id: '4c', text: 'Waktu Subuh', isCorrect: false, explanation: 'Salah! Al-Falaq yang artinya Waktu Subuh.' },
      { id: '4d', text: 'Manusia', isCorrect: false, explanation: 'Salah! An-Nas artinya Manusia.' }
    ]
  },
  {
    id: 5,
    prompt: 'Perhatikan kalimat (مِنْ مَالٍ). Lafazh ini dibaca "Mim maalin" dengan dengung. Hukum bacaannya adalah...',
    options: [
      { id: '5a', text: 'Idgham Bi Ghunnah (Nun sukun bertemu Mim)', isCorrect: true, explanation: 'Benar! Nun sukun bertemu Mim dibaca melebur disertai dengung.' },
      { id: '5b', text: 'Idgham Bila Ghunnah', isCorrect: false, explanation: 'Salah! Mim adalah huruf Bi Ghunnah.' },
      { id: '5c', text: 'Mad Thabi\'i', isCorrect: false, explanation: 'Salah! Ini adalah hukum Nun sukun.' },
      { id: '5d', text: 'Izhar Wajib', isCorrect: false, explanation: 'Salah! Terjadi perleburan dengan dengung.' }
    ]
  },
  {
    id: 6,
    prompt: 'Dalam Surah An-Nasr ayat 3, ketika seseorang memperoleh keberhasilan, Allah Swt. memerintahkan untuk memperbanyak...',
    options: [
      { id: '6a', text: 'Tasbih dan Istigfar', isCorrect: true, explanation: 'Sempurna! Membaca tasbih (Subhanallah) dan istigfar (Astaghfirullah).' },
      { id: '6b', text: 'Pamer dan berpesta', isCorrect: false, explanation: 'Salah! Pamer dilarang agama.' },
      { id: '6c', text: 'Tidur dan bersantai', isCorrect: false, explanation: 'Salah! Harus diperbanyak ibadah dan istigfar.' },
      { id: '6d', text: 'Membeli barang mewah', isCorrect: false, explanation: 'Salah! Keberhasilan harus disyukuri dengan zikir.' }
    ]
  },
  {
    id: 7,
    prompt: 'Perhatikan huruf hijaiyah tunggal (م). Ketika berada di TENGAH KATA, bentuk penulisan bersambungnya yang benar adalah...',
    options: [
      { id: '7a', text: 'ـمـ (memiliki sambungan di kanan dan kiri)', isCorrect: true, explanation: 'Tepat! Bentuk tengah mim adalah ـمـ.' },
      { id: '7b', text: 'مـ (hanya sambungan depan)', isCorrect: false, explanation: 'Salah! Itu bentuk awal.' },
      { id: '7c', text: 'ـم (hanya sambungan belakang)', isCorrect: false, explanation: 'Salah! Itu bentuk akhir.' },
      { id: '7d', text: 'م (bentuk tunggal)', isCorrect: false, explanation: 'Salah! Itu bentuk tunggal terpisah.' }
    ]
  },
  {
    id: 8,
    prompt: 'Firman Allah Swt. dalam Surah Al-Muzzammil ayat 4 memerintahkan kita membaca Al-Qur\'an secara...',
    options: [
      { id: '8a', text: 'Tartil (perlahan-lahan sesuai tajwid)', isCorrect: true, explanation: 'Benar! Tartil artinya membaca perlahan dengan menjaga makhraj & tajwid.' },
      { id: '8b', text: 'Sangat cepat tanpa tajwid', isCorrect: false, explanation: 'Salah! Membaca cepat tanpa tajwid bisa merusak makna.' },
      { id: '8c', text: 'Berteriak keras', isCorrect: false, explanation: 'Salah! Membaca Al-Qur\'an harus dengan adab.' },
      { id: '8d', text: 'Berbisik tanpa suara', isCorrect: false, explanation: 'Salah! Harus dilafalkan dengan tartil.' }
    ]
  },
  {
    id: 9,
    prompt: 'Lafazh (غَفُورٌ رَحِيمٌ) dibaca "Ghafūrur rahīm" tanpa dengung. Hal ini terjadi karena...',
    options: [
      { id: '9a', text: 'Tanwin (ٌ) bertemu huruf Ra (ر)', isCorrect: true, explanation: 'Hebat! Tanwin bertemu Ra termasuk Idgham Bila Ghunnah.' },
      { id: '9b', text: 'Tanwin bertemu huruf Wau (و)', isCorrect: false, explanation: 'Salah! Di lafazh ini tanwin bertemu Ra.' },
      { id: '9c', text: 'Nun sukun bertemu Ya', isCorrect: false, explanation: 'Salah! Tidak ada Nun sukun di contoh ini.' },
      { id: '9d', text: 'Makhraj huruf berada di tenggorokan', isCorrect: false, explanation: 'Salah! Ini adalah hukum tajwid Idgham Bila Ghunnah.' }
    ]
  },
  {
    id: 10,
    prompt: 'Kisah Ammar yang menjuarai MTQ mengajarkan bahwa setelah meraih prestasi kita tidak boleh sombong, karena...',
    options: [
      { id: '10a', text: 'Segala keberhasilan berasal dari pertolongan Allah Swt.', isCorrect: true, explanation: 'Masya Allah! Keberhasilan adalah karunia dan pertolongan Allah Swt.' },
      { id: '10b', text: 'Nilai tinggi tidak ada gunanya', isCorrect: false, explanation: 'Salah! Belajar dan berprestasi sangat berguna.' },
      { id: '10c', text: 'Orang lain akan marah', isCorrect: false, explanation: 'Salah! Alasan utamanya adalah menyadari pertolongan Allah.' },
      { id: '10d', text: 'Kemenangan hanya kebetulan', isCorrect: false, explanation: 'Salah! Kemenangan diperoleh atas usaha dan pertolongan Allah Swt.' }
    ]
  }
];

// =========================================================================
// 4. EVALUASI PEMBELAJARAN (HOTS & COMPUTATIONAL THINKING)
// =========================================================================

// A. PILIHAN GANDA (10 Soal)
export const EVALUASI_P1_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Perhatikan firman Allah Swt. dalam Surah Al-Muzzammil ayat 4! "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا". Ayat ini menegaskan perintah membaca Al-Qur\'an secara tartil, yang bermakna...',
    arabic: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
    options: [
      'A. Membaca dengan sangat cepat agar cepat khatam',
      'B. Membaca secara perlahan-lahan dengan memperhatikan makhraj dan hukum tajwid',
      'C. Membaca hanya dalam hati tanpa menyuarakan huruf',
      'D. Membaca tanpa memperhatikan panjang pendek bacaan'
    ],
    correctAnswerIndex: 1,
    explanation: 'Tartil artinya membaca Al-Qur\'an secara perlahan, tenang, serta menjaga makhraj huruf dan ilmu tajwid.'
  },
  {
    id: 2,
    question: 'Perhatikan perubahan bentuk huruf hijaiyah bersambung! Huruf Nun (ن) ketika berada di TENGAH KATA dituliskannya adalah...',
    options: ['A. نـ', 'B. ـنـ', 'C. ـن', 'D. ن'],
    correctAnswerIndex: 1,
    explanation: 'Bentuk huruf Nun di tengah kata adalah ـنـ yang memiliki sambungan ke huruf sebelum dan sesudahnya.'
  },
  {
    id: 3,
    question: 'Ilmu yang mempelajari tata cara membaca Al-Qur\'an dengan baik dan benar sesuai makhraj serta sifat hurufnya dinamakan...',
    options: ['A. Ilmu Fiqih', 'B. Ilmu Tajwid', 'C. Ilmu Tauhid', 'D. Ilmu Tarikh'],
    correctAnswerIndex: 1,
    explanation: 'Ilmu Tajwid adalah ilmu untuk membaguskan bacaan Al-Qur\'an sesuai makhraj dan hukum-hukumnya.'
  },
  {
    id: 4,
    question: 'Hukum bacaan Idgham Bi Ghunnah terjadi apabila Nun Sukun (نْ) atau Tanwin (ً ٍ ٌ) bertemu dengan salah satu huruf berikut...',
    options: ['A. ل dan ر', 'B. ي ، ن ، م ، و', 'C. أ ، ح ، خ ، ع ، غ ، هـ', 'D. ب dan ت'],
    correctAnswerIndex: 1,
    explanation: 'Huruf Idgham Bi Ghunnah disingkat يَنْمُوْ (Ya, Nun, Mim, Wau).'
  },
  {
    id: 5,
    question: 'Perhatikan lafazh ayat (مِنْ رَبِّهِمْ)! Cara membaca lafazh tersebut yang tepat sesuai kaidah tajwid adalah...',
    arabic: 'مِنْ رَبِّهِمْ',
    options: [
      'A. Min rabbihim (jelas tanpa melebur)',
      'B. Min-nn-rabbihim (dengung 2 harakat)',
      'C. Mir rabbihim (melebur ke huruf Ra tanpa dengung)',
      'D. Mim rabbihim (diganti suara Mim)'
    ],
    correctAnswerIndex: 2,
    explanation: 'Nun sukun bertemu Ra adalah Idgham Bila Ghunnah, dibaca Mir rabbihim tanpa dengung.'
  },
  {
    id: 6,
    question: 'Perhatikan contoh bacaan berikut:\n(1) مِنْ مَالٍ\n(2) مِنْ رَبِّهِمْ\n(3) غَفُورٌ وَرَحِيمٌ\n(4) هُدًى لِلْمُتَّقِينَ\nManakah contoh yang termasuk hukum bacaan IDGHAM BILA GHUNNAH? (Computational Thinking - Pattern Recognition)',
    options: ['A. (1) dan (3)', 'B. (2) dan (4)', 'C. (1) dan (2)', 'D. (3) dan (4)'],
    correctAnswerIndex: 1,
    explanation: '(2) مِنْ رَبِّهِمْ (bertemu Ra) dan (4) هُدًى لِلْمُتَّقِينَ (bertemu Lam) adalah contoh Idgham Bila Ghunnah.'
  },
  {
    id: 7,
    question: 'Surah An-Nasr merupakan surah ke-110 dalam Al-Qur\'an yang terdiri atas 3 ayat. Surah ini tergolong Surah Madaniyah karena...',
    options: [
      'A. Diturunkan sebelum Nabi hijrah',
      'B. Diturunkan setelah Nabi Muhammad saw. hijrah ke Madinah',
      'C. Diturunkan di Kota Mesir',
      'D. Diturunkan khusus untuk penduduk Madinah saja'
    ],
    correctAnswerIndex: 1,
    explanation: 'Surah Madaniyah adalah surah Al-Qur\'an yang diturunkan setelah peristiwa hijrah Nabi Muhammad saw. ke Madinah.'
  },
  {
    id: 8,
    question: 'Perhatikan ayat ke-3 Surah An-Nasr:\n"فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا"\nPesan utama yang dikandung dalam ayat tersebut setelah meraih suatu keberhasilan adalah...',
    arabic: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا',
    options: [
      'A. Mengadakan pesta meriah',
      'B. Menceritakan kehebatan diri sendiri kepada teman',
      'C. Memperbanyak bertasbih memuji Allah dan memohon ampunan (istigfar)',
      'D. Beristirahat dan tidak perlu belajar lagi'
    ],
    correctAnswerIndex: 2,
    explanation: 'Ayat 3 Surah An-Nasr memerintahkan bertasbih, memuji Allah Swt., dan memperbanyak istigfar setelah memperoleh kemenangan.'
  },
  {
    id: 9,
    question: 'Budi sering merasa kesulitan dan keliru membaca hukum Idgham Bi Ghunnah saat latihan di rumah. Berdasarkan kisah inspiratif Fahri, langkah terbaik yang harus dilakukan Budi adalah...',
    options: [
      'A. Menyerah dan tidak mau membaca Al-Qur\'an lagi',
      'B. Pura-pura sudah bisa di depan guru',
      'C. Tekun berlatih rutin setiap hari bersama orang tua atau guru',
      'D. Menyalahkan teman yang lebih pintar'
    ],
    correctAnswerIndex: 2,
    explanation: 'Kisah Fahri mengajarkan bahwa ketekunan berlatih bersama orang tua/guru akan membuahkan keberhasilan.'
  },
  {
    id: 10,
    question: 'Seorang murid berhasil meraih nilai terbanyak di kelasnya pada ujian tajwid. Penerapan akhlak terpuji meneladani Surah An-Nasr dan kisah Ammar adalah...',
    options: [
      'A. Bersikap pamer di media sosial',
      'B. Mengucapkan syukur alhamdulillah, tetap rendah hati, dan rajin beribadah',
      'C. Mengejek teman yang nilainya masih kurang',
      'D. Berhenti belajar karena merasa sudah paling pandai'
    ],
    correctAnswerIndex: 1,
    explanation: 'Meneladani Surah An-Nasr dan kisah Ammar adalah selalu bersyukur, rendah hati, dan makin mendekatkan diri pada Allah Swt.'
  }
];

// B. PILIHAN GANDA KOMPLEKS (10 Soal)
export const EVALUASI_P1_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Pilihlah HURUF-HURUF IDGHAM BI GHUNNAH di bawah ini! (Pilih lebih dari satu)',
    options: ['A. Ya (ي)', 'B. Nun (ن)', 'C. Lam (ل)', 'D. Mim (م)'],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Huruf Idgham Bi Ghunnah adalah Ya (ي), Nun (ن), Mim (م), dan Wau (و).'
  },
  {
    id: 2,
    question: 'Pilihlah HURUF-HURUF IDGHAM BILA GHUNNAH di bawah ini! (Pilih lebih dari satu)',
    options: ['A. Lam (ل)', 'B. Ra (ر)', 'C. Wau (و)', 'D. Alif (أ)'],
    correctAnswerIndices: [0, 1],
    explanation: 'Huruf Idgham Bila Ghunnah hanya ada dua, yaitu Lam (ل) dan Ra (ر).'
  },
  {
    id: 3,
    question: 'Manakah BENTUK CONTOH BACAAN IDGHAM BI GHUNNAH berikut? (Pilih lebih dari satu)',
    options: ['A. مِنْ مَالٍ', 'B. مِنْ رَبِّهِمْ', 'C. غَفُورٌ وَرَحِيمٌ', 'D. مَنْ يَعْمَلْ'],
    correctAnswerIndices: [0, 2, 3],
    explanation: 'مِنْ مَالٍ (Nun+Mim), غَفُورٌ وَرَحِيمٌ (Tanwin+Wau), dan مَنْ يَعْمَلْ (Nun+Ya) adalah contoh Bi Ghunnah.'
  },
  {
    id: 4,
    question: 'Pilihlah HAL-HAL YANG HARUS DIPERHATIKAN saat membaca huruf hijaiyah bersambung 3 kata atau lebih! (Pilih lebih dari satu)',
    options: [
      'A. Makhraj huruf',
      'B. Panjang pendek bacaan (mad)',
      'C. Kecepatan bicara tanpa henti',
      'D. Hukum bacaan tajwid'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Saat membaca Al-Qur\'an harus memperhatikan makhraj, panjang pendek, dan tajwid.'
  },
  {
    id: 5,
    question: 'Manakah LANGKAH-LANGKAH MENULIS HURUF HIJAIYAH BERSAMBUNG yang benar? (Pilih lebih dari satu)',
    options: [
      'A. Mulai menulis dari sebelah kanan ke kiri',
      'B. Mulai menulis dari sebelah kiri ke kanan',
      'C. Perhatikan perubahan bentuk huruf di awal, tengah, dan akhir',
      'D. Memegang pensil dengan benar dan menjaga kerapian tulisan'
    ],
    correctAnswerIndices: [0, 2, 3],
    explanation: 'Penulisan Arab dimulai dari kanan ke kiri, memperhatikan bentuk huruf, serta memegang pensil dengan benar.'
  },
  {
    id: 6,
    question: 'Pilihlah CIRI-CIRI SURAH AN-NASR berikut ini yang benar! (Pilih lebih dari satu)',
    options: [
      'A. Merupakan surah ke-110 dalam Al-Qur\'an',
      'B. Terdiri dari 3 ayat',
      'C. Tergolong Surah Makkiyah',
      'D. Tergolong Surah Madaniyah'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Surah An-Nasr adalah surah ke-110, terdiri dari 3 ayat, dan tergolong Surah Madaniyah.'
  },
  {
    id: 7,
    question: 'Manakah POKOK KANDUNGAN UTAMA SURAH AN-NASR? (Pilih lebih dari satu)',
    options: [
      'A. Pertolongan dan kemenangan berasal dari Allah Swt.',
      'B. Keberhasilan harus disyukuri dengan kerendahan hati',
      'C. Perintah memperbanyak tasbih dan memohon ampunan (istigfar)',
      'D. Boleh sombong jika sudah menang perang'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Kandungan Surah An-Nasr meliputi pertolongan Allah, rasa syukur, rendah hati, tasbih, dan istigfar.'
  },
  {
    id: 8,
    question: 'Pilihlah PENERAPAN SURAH AN-NASR DALAM KEHIDUPAN SEHARI-HARI DI SEKOLAH! (Pilih lebih dari satu)',
    options: [
      'A. Tidak sombong ketika mendapat nilai tertinggi',
      'B. Menghargai dan membantu teman yang mengalami kesulitan',
      'C. Berdoa sebelum dan sesudah belajar dengan tertib',
      'D. Mencontek pekerjaan teman agar mendapat nilai sempurna'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Tidak sombong, menghargai teman, dan berdoa adalah penerapan terpuji di sekolah. Mencontek dilarang.'
  },
  {
    id: 9,
    question: 'Manakah MANFAAT MEMPELAJARI ILMU TAJWID? (Pilih lebih dari satu)',
    options: [
      'A. Menjaga kemurnian dan kebenaran bacaan Al-Qur\'an',
      'B. Memperoleh pahala dari Allah Swt.',
      'C. Menghindari kesalahan makna akibat salah baca',
      'D. Agar dipuji oleh orang lain'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Tajwid menjaga kemurnian bacaan, mendatangkan pahala, dan mencegah kesalahan makna.'
  },
  {
    id: 10,
    question: 'Pilihlah BACAAN ZIKIR YANG DIPERINTAHKAN DALAM SURAH AN-NASR AYAT 3! (Pilih lebih dari satu)',
    options: [
      'A. Kalimat Tasbih (سُبْحَانَ اللَّهِ)',
      'B. Kalimat Istigfar (أَسْتَغْفِرُ اللَّهَ)',
      'C. Kalimat Tahmid (الْحَمْدُ لِلَّهِ)',
      'D. Kalimat Tarji\''
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Surah An-Nasr ayat 3 memerintahkan tasbih, tahmid (bihamdi rabbika), dan istigfar (wastaghfirh).'
  }
];

// C. MENJODOHKAN (5 Soal)
export const EVALUASI_P1_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Idgham Bi Ghunnah',
    leftArabic: 'يَنْمُوْ',
    rightText: 'Nun sukun/tanwin bertemu huruf (ي ، ن ، م ، و) dibaca melebur disertai dengung 2 harakat'
  },
  {
    id: 2,
    leftText: 'Idgham Bila Ghunnah',
    leftArabic: 'ل ، ر',
    rightText: 'Nun sukun/tanwin bertemu huruf (ل atau ر) dibaca melebur tanpa dengung'
  },
  {
    id: 3,
    leftText: 'Surah An-Nasr',
    leftArabic: 'النَّصْرُ',
    rightText: 'Surah ke-110 Al-Qur\'an bermakna "Pertolongan", terdiri dari 3 ayat Madaniyah'
  },
  {
    id: 4,
    leftText: 'Ilmu Tajwid',
    leftArabic: 'تَجْوِيدٌ',
    rightText: 'Ilmu yang mempelajari cara membaca Al-Qur\'an dengan benar sesuai makhraj dan hukumnya'
  },
  {
    id: 5,
    leftText: 'Tartil',
    leftArabic: 'تَرْتِيلًا',
    rightText: 'Membaca Al-Qur\'an secara perlahan, tenang, dan sesuai kaidah tajwid'
  }
];

// D. BENAR ATAU SALAH DISERTAI ALASANNYA (10 Soal)
export const EVALUASI_P1_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Idgham Bi Ghunnah terjadi apabila Nun Sukun (نْ) atau Tanwin bertemu salah satu huruf: Ya (ي), Nun (ن), Mim (م), atau Wau (و).',
    isTrue: true,
    explanation: 'BENAR. Karena huruf Idgham Bi Ghunnah berjumlah 4 huruf yang disingkat Yanmuu (يَنْمُوْ).'
  },
  {
    id: 2,
    statement: 'Lafazh (مِنْ رَبِّهِمْ) harus dibaca mendengung selama dua harakat.',
    arabic: 'مِنْ رَبِّهِمْ',
    isTrue: false,
    explanation: 'SALAH. Karena Nun sukun bertemu Ra adalah Idgham Bila Ghunnah yang dibaca melebur TANPA dengung (Mir rabbihim).'
  },
  {
    id: 3,
    statement: 'Penulisan huruf hijaiyah bersambung dalam bahasa Arab dimulai dari sebelah kiri ke kanan.',
    isTrue: false,
    explanation: 'SALAH. Karena arah penulisan huruf Arab dan Al-Qur\'an dimulai dari sebelah KANAN ke KIRI.'
  },
  {
    id: 4,
    statement: 'Bentuk huruf Mim (م) ketika berada di awal kata dituliskan (مـ).',
    isTrue: true,
    explanation: 'BENAR. Karena bentuk huruf Mim di awal kata adalah مـ yang siap disambung ke huruf berikutnya.'
  },
  {
    id: 5,
    statement: 'Kata "Tajwid" secara bahasa berarti membaguskan atau memperindah.',
    isTrue: true,
    explanation: 'BENAR. Secara bahasa tajwid berarti membaguskan atau memperindah bacaan Al-Qur\'an.'
  },
  {
    id: 6,
    statement: 'Surah An-Nasr tergolong Surah Makkiyah karena diturunkan di Kota Makkah sebelum Nabi hijrah.',
    isTrue: false,
    explanation: 'SALAH. Surah An-Nasr tergolong Surah MADANIYAH karena diturunkan setelah Nabi Muhammad saw. hijrah ke Madinah.'
  },
  {
    id: 7,
    statement: 'Lafazh (غَفُورٌ وَرَحِيمٌ) termasuk contoh hukum bacaan Idgham Bi Ghunnah.',
    arabic: 'غَفُورٌ وَرَحِيمٌ',
    isTrue: true,
    explanation: 'BENAR. Karena Tanwin dammah (ٌ) bertemu dengan huruf Wau (و) yang dibaca mendengung 2 harakat.'
  },
  {
    id: 8,
    statement: 'Setelah meraih juara lomba atau prestasi tinggi di sekolah, seorang Muslim diperbolehkan untuk bersikap sombong.',
    isTrue: false,
    explanation: 'SALAH. Surah An-Nasr mengajarkan bahwa kemenangan berasal dari pertolongan Allah sehingga kita harus bersyukur dan tetap rendah hati.'
  },
  {
    id: 9,
    statement: 'Membaca kalimat (هُدًى لِلْمُتَّقِينَ) dibaca "Hudal lil muttaqīn" tanpa dengung.',
    arabic: 'هُدًى لِلْمُتَّقِينَ',
    isTrue: true,
    explanation: 'BENAR. Karena Tanwin fathah (ً) bertemu huruf Lam (ل) merupakan hukum Idgham Bila Ghunnah.'
  },
  {
    id: 10,
    statement: 'Dalam Surah An-Nasr ayat 3, umat Islam diperintahkan untuk memperbanyak bacaan Tasbih dan Istigfar.',
    isTrue: true,
    explanation: 'BENAR. Lafazh "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ" memerintahkan tasbih, tahmid, dan istigfar.'
  }
];

// E. SOAL URAIAN (5 Soal)
export const EVALUASI_P1_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan perbedaan antara hukum bacaan Idgham Bi Ghunnah dan Idgham Bila Ghunnah beserta huruf-hurufnya!',
    rubric: 'Skor 20: Menjelaskan pengertian cara baca (Bi Ghunnah = dengan dengung 2 harakat, Bila Ghunnah = tanpa dengung) dan huruf-hurufnya (Bi Ghunnah = ي، ن، م، و; Bila Ghunnah = ل، ر) dengan tepat.',
    sampleAnswer: '• Idgham Bi Ghunnah: Nun sukun/tanwin bertemu huruf (ي ، ن ، م ، و), dibaca melebur disertai dengung 2 harakat.\n• Idgham Bila Ghunnah: Nun sukun/tanwin bertemu huruf (ل atau ر), dibaca melebur TANPA dengung.'
  },
  {
    id: 2,
    question: 'Tuliskan bentuk huruf Ba (ب) dan Mim (م) ketika berada di awal, tengah, dan akhir kata!',
    rubric: 'Skor 20: Menuliskan perubahan bentuk huruf Ba (بـ ، ـبـ ، ـب) dan Mim (مـ ، ـمـ ، ـم) secara benar.',
    sampleAnswer: '1. Huruf Ba (ب): Awal (بـ), Tengah (ـبـ), Akhir (ـب).\n2. Huruf Mim (م): Awal (مـ), Tengah (ـمـ), Akhir (ـم).'
  },
  {
    id: 3,
    question: 'Sebutkan 3 pokok kandungan utama Surah An-Nasr yang patut diamalkan oleh peserta didik!',
    rubric: 'Skor 20: Menyebutkan 3 pokok kandungan (misal: pertolongan dari Allah Swt., kemenangan harus disyukuri dengan rendah hati, memperbanyak tasbih dan istigfar).',
    sampleAnswer: '1. Pertolongan dan kemenangan sejati berasal dari Allah Swt.\n2. Kemenangan/keberhasilan harus disyukuri dengan sikap rendah hati (tidak sombong).\n3. Memperbanyak zikir membaca tasbih (Subhanallah) dan istigfar (Astaghfirullah).'
  },
  {
    id: 4,
    question: 'Perhatikan lafazh (مِنْ مَالٍ) dan (مِنْ رَبِّهِمْ)! Tentukan hukum bacaan masing-masing lafazh tersebut beserta alasannya!',
    rubric: 'Skor 20: Menentukan (مِنْ مَالٍ) = Idgham Bi Ghunnah karena Nun sukun bertemu Mim, dan (مِنْ رَبِّهِمْ) = Idgham Bila Ghunnah karena Nun sukun bertemu Ra.',
    sampleAnswer: '• (مِنْ مَالٍ): Idgham Bi Ghunnah, karena Nun sukun (نْ) bertemu huruf Mim (م), dibaca "Mim maalin" dengan dengung.\n• (مِنْ رَبِّهِمْ): Idgham Bila Ghunnah, karena Nun sukun (نْ) bertemu huruf Ra (ر), dibaca "Mir rabbihim" tanpa dengung.'
  },
  {
    id: 5,
    question: 'Bagaimana cara kamu meneladani kisah Ammar dan pesan Surah An-Nasr ketika memperoleh nilai 100 saat ujian di sekolah?',
    rubric: 'Skor 20: Menyebutkan perbuatan bersyukur (mengucapkan alhamdulillah), tetap rendah hati, tidak mengejek teman, dan makin rajin beribadah/belajar.',
    sampleAnswer: 'Saya akan mengucapkan Alhamdulillah dan menyadari nilai tersebut adalah pertolongan Allah Swt. Saya tidak akan sombong atau mengejek teman, melainkan bersikap rendah hati, membantu teman yang belum paham, dan semakin rajin memperbanyak doa serta ibadah.'
  }
];
