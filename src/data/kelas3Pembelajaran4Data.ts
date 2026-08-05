// Data Lengkap Kelas 3 Pembelajaran 4 berdasarkan PDF Resmi BAB IV
// Mengenal dan Mempraktikkan Azan dan Iqamah Secara Sederhana

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
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 3 PEMBELAJARAN 4 / BAB IV)
// =========================================================================
export const KELAS3_P4_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Tujuan Pembelajaran & Ayo Mengamati',
    subtitle: 'Mengenal dan Mempraktikkan Azan dan Iqamah Secara Sederhana',
    iconName: 'Target',
    points: [
      '1. Menjelaskan pengertian azan dan iqamah.',
      '2. Menjelaskan hukum azan dan iqamah.',
      '3. Menyebutkan lafaz azan dan iqamah dengan benar.',
      '4. Mempraktikkan azan dan iqamah secara sederhana sesuai tuntunan syariat.',
      '5. Menjelaskan adab ketika mendengar azan.',
      '6. Menumbuhkan kecintaan terhadap ibadah salat berjamaah.'
    ],
    highlightBox: {
      title: '🔊 Ayo Mengamati Syiar Islam',
      content: 'Setiap hari 5 kali dalam sehari semalam, umat Islam mendengar suara azan dari masjid/musala mengajak salat berjamaah. Setelah azan selesai, muazin mengumandangkan iqamah sebagai tanda salat berjamaah akan segera dimulai.',
      type: 'info'
    }
  },
  {
    id: 2,
    title: '2. Pengertian Azan & Iqamah',
    subtitle: 'Panggilan Salat & Tanda Dimulainya Salat Berjamaah',
    iconName: 'Volume2',
    points: [
      '1. Pengertian Azan (Bahasa): Berasal dari bahasa Arab "al-Ażān" (الأَذَانُ) yang berarti pemberitahuan atau panggilan.',
      '2. Pengertian Azan (Istilah): Seruan untuk mengajak umat Islam melaksanakan salat wajib dengan lafaz-lafaz tertentu yang diajarkan Rasulullah saw. sebelum salat wajib 5 waktu (Subuh, Zuhur, Asar, Magrib, Isya).',
      '3. Pengertian Iqamah: Seruan yang dikumandangkan sesudah azan sebagai tanda bahwa salat berjamaah akan segera dimulai.',
      '4. Ciri Iqamah: Lafaz iqamah hampir sama dengan azan, tetapi lebih ringkas. Setelah iqamah, makmum segera berdiri merapatkan saf.'
    ],
    arabicExamples: [
      {
        arabic: 'الأَذَانُ',
        latin: 'Al-Ażān',
        meaning: '"Pemberitahuan atau Panggilan"'
      }
    ],
    highlightBox: {
      title: '📌 Poin Penting Syiar Islam',
      content: 'Azan adalah panggilan pemberitahuan masuk waktu salat, sedangkan Iqamah adalah seruan tanda salat berjamaah segera didirikan.',
      type: 'tip'
    }
  },
  {
    id: 3,
    title: '3. Hukum Azan dan Iqamah',
    subtitle: 'Tuntunan Nabi Muhammad saw. dalam Salat Berjamaah',
    iconName: 'Layers',
    points: [
      '1. Hukum Azan dan Iqamah: Sunah Muakkadah (sunah yang sangat dianjurkan), terutama ketika melaksanakan salat berjamaah.',
      '2. Sunah Rasulullah saw.: Walaupun hukumnya sunah, Rasulullah saw. selalu melaksanakan azan dan iqamah sebelum salat berjamaah.',
      '3. Keutamaan: Umat Islam dianjurkan membiasakan diri mengumandangkan azan dan iqamah sesuai tuntunan Nabi Muhammad saw.'
    ],
    highlightBox: {
      title: '💡 Catatan Fikih',
      content: 'Sunah muakkadah artinya ibadah sunah yang selalu dilakukan oleh Rasulullah saw. dan sangat ditekankan untuk dikerjakan.',
      type: 'info'
    }
  },
  {
    id: 4,
    title: '4. Lafaz-Lafaz Azan Lengkap',
    subtitle: 'Urutan Lafaz Azan dan Kekhususan Azan Subuh',
    iconName: 'BookOpen',
    points: [
      '1. Takbir Awal (4x): Allāhu Akbar Allāhu Akbar (اللهُ أَكْبَرُ اللهُ أَكْبَرُ)',
      '2. Syahadat Tauhid (2x): Asyhadu allā ilāha illallāh (أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ)',
      '3. Syahadat Rasul (2x): Asyhadu anna Muḥammadar rasūlullāh (أَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهِ)',
      '4. Panggilan Salat (2x): Ḥayya ‘alaṣ-ṣalāh (حَيَّ عَلَى الصَّلَاةِ)',
      '5. Panggilan Kemenangan (2x): Ḥayya ‘alal-falāḥ (حَيَّ عَلَى الْفَلَاحِ)',
      '6. Khusus Azan Subuh Ditambah (2x): Aṣ-ṣalātu khairum minan-naūm (الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ - "Salat itu lebih baik daripada tidur")',
      '7. Takbir Penutup (2x): Allāhu Akbar Allāhu Akbar (اللهُ أَكْبَرُ اللهُ أَكْبَرُ)',
      '8. Kalimat Tauhid Penutup (1x): Lā ilāha illallāh (لَا إِلٰهَ إِلَّا اللهُ)'
    ]
  },
  {
    id: 5,
    title: '5. Lafaz Iqamah & Perbedaannya dengan Azan',
    subtitle: 'Seruan Ringkas Tanda Salat Segera Didirikan',
    iconName: 'Volume2',
    points: [
      '1. Lafaz iqamah hampir sama dengan azan, tetapi dibaca lebih ringkas.',
      '2. Perbedaan Utama: Terletak pada adanya kalimat "Qad qāmatiṣ-ṣalāh" (قَدْ قَامَتِ الصَّلَاةُ) dibaca 2 kali sebelum takbir penutup.',
      '3. Arti Kalimat Iqamah: "Salat akan segera didirikan."',
      '4. Penutup Iqamah: Dibaca Takbir Allāhu Akbar Allāhu Akbar (1x), lalu ditutup Lā ilāha illallāh (1x).'
    ],
    arabicExamples: [
      {
        arabic: 'قَدْ قَامَتِ الصَّلَاةُ',
        latin: 'Qad qāmatiṣ-ṣalāh',
        meaning: '"Sungguh salat akan segera didirikan."'
      }
    ]
  },
  {
    id: 6,
    title: '6. Tata Cara & Adab Mengumandangkan Azan',
    subtitle: 'Syarat dan Etika Muazin yang Santun dan Khusyuk',
    iconName: 'Sparkles',
    points: [
      'Ketika mengumandangkan azan, seorang muazin hendaknya memperhatikan adab berikut:',
      '1. Suci dari hadas (sudah berwudu).',
      '2. Menghadap ke arah kiblat.',
      '3. Berdiri dengan sopan dan tenang.',
      '4. Mengucapkan lafaz azan dengan jelas dan tartil.',
      '5. Suara terdengar dengan baik, nyaring, dan indah.',
      '6. Tidak tergesa-gesa saat mengumandangkan.',
      '7. Mengucapkan dengan penuh kekhusyukan dan keikhlasan.'
    ]
  },
  {
    id: 7,
    title: '7. Adab Ketika Mendengar Azan Berkumandang',
    subtitle: 'Sikap Seorang Muslim Saat Suara Azan Terdengar',
    iconName: 'CheckCircle',
    points: [
      'Ketika mendengar azan, seorang Muslim dianjurkan untuk:',
      '• Menghentikan pembicaraan yang tidak penting.',
      '• Menjawab lafaz azan sebagaimana yang diucapkan muazin.',
      '• Membaca doa setelah azan selesai.',
      '• Mempersiapkan diri untuk salat (berwudu).',
      '• Segera menuju masjid atau musala jika memungkinkan.',
      '• Menjaga ketenangan dan menghormati syiar Islam.',
      '🌟 Sikap ini menunjukkan kecintaan kepada Allah Swt. dan Rasul-Nya.'
    ]
  },
  {
    id: 8,
    title: '8. 10 Hikmah Utama Azan dan Iqamah',
    subtitle: 'Manfaat Agung Panggilan Azan bagi Individu dan Umat',
    iconName: 'Award',
    points: [
      '1. Mengingatkan masuknya waktu salat.',
      '2. Mengajak manusia untuk selalu mengingat Allah Swt.',
      '3. Menghidupkan syiar Islam di tengah masyarakat.',
      '4. Mengajak umat Islam untuk salat berjamaah.',
      '5. Menumbuhkan kedisiplinan waktu.',
      '6. Menumbuhkan persatuan dan kebersamaan umat Islam.',
      '7. Membiasakan hidup tertib dan teratur.',
      '8. Menumbuhkan semangat beribadah.',
      '9. Menguatkan keimanan dan ketakwaan.',
      '10. Menumbuhkan rasa cinta kepada masjid dan musala.'
    ]
  },
  {
    id: 9,
    title: '9. Panduan Praktik Azan dan Iqamah',
    subtitle: 'Langkah Praktis Menjadi Muazin Cilik di Sekolah / Masjid',
    iconName: 'Sparkles',
    points: [
      '🎙️ Praktik Azan:',
      '• Berdiri menghadap kiblat.',
      '• Berniat mengumandangkan azan karena Allah.',
      '• Membaca seluruh lafaz azan dengan suara jelas, merdu, dan tartil.',
      '• Menjaga urutan lafaz tanpa terbalik.',
      '',
      '📢 Praktik Iqamah:',
      '• Berdiri menghadap kiblat.',
      '• Membaca lafaz iqamah dengan benar dan ringkas.',
      '• Mengucapkan kalimat "Qad qāmatiṣ-ṣalāh" 2 kali.',
      '• Menutup iqamah dengan kalimat "Lā ilāha illallāh".'
    ]
  },
  {
    id: 10,
    title: '10. Kisah Teladan: Farhan Muazin Cilik Sekolah',
    subtitle: 'Teladan Keberanian dan Semangat Menghidupkan Syiar Islam',
    iconName: 'Sparkles',
    points: [
      '📖 Cerita Teladan Farhan:',
      'Di sebuah sekolah dasar, setiap masuk waktu Zuhur, seorang siswa bernama Farhan selalu bersedia menjadi muazin. Ia mengumandangkan azan dengan suara yang merdu dan penuh semangat.',
      'Setelah azan selesai, Farhan juga mengumandangkan iqamah sebelum imam memimpin salat berjamaah.',
      'Teman-temannya merasa senang karena suara azan Farhan mengingatkan mereka untuk segera berwudu dan salat. Guru pun memberikan apresiasi tinggi.',
      '🌟 Pelajaran: Menjadi muazin merupakan amal ibadah yang mulia dan dapat menjadi teladan bagi teman-teman yang lain.'
    ]
  },
  {
    id: 11,
    title: '11. Hikmah Mempelajari Bab Ini',
    subtitle: 'Rangkuman Pelajaran Penting dari Bab IV',
    iconName: 'Award',
    points: [
      'Setelah mempelajari bab ini, kita memperoleh pelajaran bahwa:',
      '• Azan dan iqamah merupakan syiar Islam yang harus dihormati.',
      '• Seorang Muslim hendaknya disiplin melaksanakan salat tepat waktu.',
      '• Menjadi muazin adalah amal ibadah yang sangat mulia.',
      '• Salat berjamaah mempererat persaudaraan sesama Muslim.',
      '• Azan mengingatkan manusia agar selalu mengingat Allah Swt.',
      '• Iqamah menandai dimulainya salat berjamaah dengan tertib.',
      '• Membiasakan azan dan iqamah sejak kecil menumbuhkan cinta masjid.'
    ],
    highlightBox: {
      title: '💡 Kesimpulan Utama Bab IV',
      content: 'Mengenal dan mempraktikkan azan serta iqamah mengajarkan kedisiplinan, ketertiban, persatuan, dan cinta kepada ibadah salat berjamaah.',
      type: 'info'
    }
  },
  {
    id: 12,
    title: '12. Rangkuman & Refleksi Diri Bab IV',
    subtitle: 'Rangkuman Inti & Pertanyaan Perenungan Diri',
    iconName: 'Target',
    points: [
      '📝 RANGKUMAN INTI:',
      '• Azan adalah seruan untuk mengajak umat Islam melaksanakan salat wajib.',
      '• Iqamah adalah seruan penanda salat berjamaah akan segera dimulai.',
      '• Hukum azan dan iqamah adalah sunah muakkadah.',
      '• Muslim dianjurkan menjawab azan dan berdoa setelahnya.',
      '',
      '🤔 PERTANYAAN REFLEKSI DIRI:',
      '1. Apakah saya sudah hafal lafaz azan dan iqamah?',
      '2. Apakah saya segera bersiap untuk salat ketika mendengar azan?',
      '3. Sudahkah saya berani mencoba menjadi muazin di sekolah atau di masjid?',
      '4. Apa manfaat yang saya rasakan setelah membiasakan salat berjamaah?',
      '5. Sikap apa yang akan saya perbaiki agar lebih mencintai azan, iqamah, dan salat berjamaah?'
    ]
  }
];

// =========================================================================
// 2. PENUGASAN PROYEK MURID (2 PjBL + 2 PBL) - Sesuai Kebijakan Guru
// =========================================================================
export const KELAS3_P4_PROJECTS: ProjectTask[] = [
  {
    id: 'p4_pjbl_1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Kartu Saku Kreatif "Lafaz Azan & Iqamah Lengkap"',
    subtitle: 'Membuat Kartu Hafalan Visual Mengumandangkan Azan & Iqamah',
    objective: 'Peserta didik mampu menyusun dan merancang kartu saku berisi lafaz azan, lafaz iqamah, dan doa setelah azan dengan tulisan yang rapi dan indah.',
    steps: [
      '1. Siapkan 2 lembar kertas karton warna berukuran saku (10 x 15 cm), spidol, dan stiker hiasan.',
      '2. Pada Kartu 1: Tuliskan lafaz azan lengkap beserta artinya dan lafaz khusus azan Subuh (Aṣ-ṣalātu khairum minan-naūm).',
      '3. Pada Kartu 2: Tuliskan lafaz iqamah lengkap beserta penjelas kalimat "Qad qāmatiṣ-ṣalāh" dan doa setelah azan.',
      '4. Lapisi kartu saku dengan plastik mika transparan agar awet dan bisa dibawa ke sekolah/masjid.',
      '5. Praktikkan membaca kartu saku di depan teman sekelompok.'
    ],
    output: 'Kartu Saku Hafalan "Lafaz Azan & Iqamah" siap pakai.',
    teacherNote: 'Rubrik penilaian kerapian tulisan Arab/Latin, kreasi desain, dan jadwal kumpul disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p4_pjbl_2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Rekaman Audio / Video Praktik "Muazin Cilik Sekolah"',
    subtitle: 'Proyek Unjuk Kerja Praktik Azan & Iqamah Nyaring & Tartil',
    objective: 'Peserta didik mampu mempraktikkan pengumandangan azan atau iqamah dengan suara yang merdu, tartil, dan memenuhi adab muazin.',
    steps: [
      '1. Pelajari tata cara mengumandangkan azan: Berwudu, menghadap kiblat, dan berdiri dengan sopan.',
      '2. Berlatihlah melafalkan azan dengan tartil dan suara yang nyaring bersama pendamping di rumah/sekolah.',
      '3. Rekam video/audio singkat saat kamu mempraktikkan azan atau iqamah (durasi 1-3 menit).',
      '4. Periksa kembali urutan lafaz agar tidak ada yang terlewat.',
      '5. Kirimkan hasil rekaman kepada guru agama untuk mendapatkan umpan balik.'
    ],
    output: 'File Video/Audio Rekaman Praktik "Muazin Cilik Sekolah".',
    teacherNote: 'Mekanisme pengumpulan media (WhatsApp/Drive/Langsung di kelas) disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p4_pbl_1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Analisis Kasus: "Adab Mendengar Azan Saat Asyik Bermain / Bicara"',
    subtitle: 'Pemecahan Masalah Sikap Menghormati Panggilan Salat di Sekolah',
    objective: 'Peserta didik mampu menganalisis masalah sikap kurang tertib saat mendengar azan dan menemukan solusi penerapan adab yang benar.',
    steps: [
      '1. Amati situasi di lingkungan sekolah saat suara azan berkumandang dari musala/masjid.',
      '2. Identifikasi masalah: "Mengapa sebagian anak masih mengobrol atau terus bercanda ketika azan sedang berkumandang?"',
      '3. Diskusikan dalam kelompok: Apa dampak jika tidak menghentikan pembicaraan saat azan?',
      '4. Rumuskan 4 langkah adab yang harus dilakukan anak saat mendengar azan (hentikan bicara, jawab azan, baca doa, bersiap wudu).',
      '5. Buatlah Poster Mini Kampanye "Hormati Azan, Yuk Segera Salat!" untuk diletakkan di mading sekolah.'
    ],
    output: 'Lembar Laporan Analisis Adab Mendengar Azan & Poster Mini Kampanye.',
    teacherNote: 'Pembagian kelompok dan lokasi pemasangan poster mini ditentukan sesuai kebijakan guru.'
  },
  {
    id: 'p4_pbl_2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Studi Kasus: Menghadapi Rasa Malu & Takut Menjadi Muazin',
    subtitle: 'Solusi Membangun Keberanian Seperti Farhan Muazin Cilik',
    objective: 'Peserta didik mampu mengidentifikasi pemicu rasa malu menjadi muazin dan merancang strategi latihan percaya diri.',
    steps: [
      '1. Bacalah kembali kisah teladan Farhan murid SD yang berani menjadi muazin di sekolah pada materi Bab IV.',
      '2. Identifikasi masalah: "Mengapa banyak siswa merasa malu, takut salah, atau gerak ragu ketika diminta menjadi muazin?"',
      '3. Diskusikan solusi: Bagaimana cara mengatasi rasa malu tersebut? (seperti latihan di kamar, hafal lafaz, berani tampil).',
      '4. Susunlah Jadwal Piket Muazin Cilik Bergiliran untuk Musholla Sekolah selama 1 minggu.',
      '5. Presentasikan usulan jadwal piket muazin di hadapan wali kelas.'
    ],
    output: 'Rancangan Jadwal Piket "Muazin Cilik Bergiliran" & Lembar Strategi Percaya Diri.',
    teacherNote: 'Penerapan jadwal piket muazin musholla sekolah ditentukan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI INTERAKTIF: PETUALANGAN MUAZIN CILIK MASJID
// =========================================================================
export const KELAS3_P4_GAME: GameQuestion[] = [
  {
    id: 1,
    stage: 'Tingkat 1: Masuk Waktu Salat Zuhur',
    prompt: 'Saat jam istirahat sekolah, suara azan Zuhur terdengar dari musala. Tindakan pertama yang tepat sesuai adab mendengar azan adalah...',
    options: [
      {
        id: '1a',
        text: 'Menghentikan pembicaraan/permainan, mendengarkan dengan tenang, dan menjawab lafaz azan.',
        isCorrect: true,
        explanation: 'Tepat sekali! Adab mendengar azan adalah menghentikan pembicaraan yang tidak penting dan menjawab azan.'
      },
      {
        id: '1b',
        text: 'Lanjut berteriak-teriak bermain bola sampai azan selesai.',
        isCorrect: false,
        explanation: 'Salah! Mengabaikan azan adalah sikap tidak menghormati syiar Islam.'
      },
      {
        id: '1c',
        text: 'Tidur di dalam kelas karena merasa azan terlalu keras.',
        isCorrect: false,
        explanation: 'Salah! Ketika azan berkumandang, kita dianjurkan bersiap untuk salat.'
      }
    ]
  },
  {
    id: 2,
    stage: 'Tingkat 2: Syarat & Persiapan Muazin',
    prompt: 'Farhan hendak mengumandangkan azan di musala sekolah. Syarat utama adab sebelum mengumandangkan azan adalah...',
    options: [
      {
        id: '2a',
        text: 'Sudah berwudu (suci dari hadas), berdiri sopan, dan menghadap ke arah kiblat.',
        isCorrect: true,
        explanation: 'Luar biasa! Muazin dianjurkan suci dari hadas, berdiri sopan, dan menghadap kiblat.'
      },
      {
        id: '2b',
        text: 'Memakai kacamata hitam dan sambil berlari-lari.',
        isCorrect: false,
        explanation: 'Salah! Azan dikumandangkan dengan berdiri sopan dan khusyuk.'
      },
      {
        id: '2c',
        text: 'Membawa mainan di kantong agar tidak bosan.',
        isCorrect: false,
        explanation: 'Salah! Azan adalah ibadah mulia yang harus dilakukan dengan khusyuk.'
      }
    ]
  },
  {
    id: 3,
    stage: 'Tingkat 3: Lafaz Khusus Azan Subuh',
    prompt: 'Ketika waktu Subuh tiba, ada lafaz khusus yang ditambahkan dalam azan sebanyak 2 kali. Lafaz khusus tersebut adalah...',
    arabicSnippet: 'الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ',
    options: [
      {
        id: '3a',
        text: 'Qad qāmatiṣ-ṣalāh (قَدْ قَامَتِ الصَّلَاةُ)',
        isCorrect: false,
        explanation: 'Salah! Qad qamatis-shalah adalah lafaz pada Iqamah.'
      },
      {
        id: '3b',
        text: 'Aṣ-ṣalātu khairum minan-naūm (الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ - "Salat itu lebih baik daripada tidur")',
        isCorrect: true,
        explanation: 'Sempurna! Lafaz ini khusus dibaca saat azan Subuh.'
      },
      {
        id: '3c',
        text: 'Subḥānallāh wal-ḥamdulillāh',
        isCorrect: false,
        explanation: 'Salah! Itu adalah lafaz tasbih.'
      }
    ]
  },
  {
    id: 4,
    stage: 'Tingkat 4: Mengumandangkan Iqamah',
    prompt: 'Setelah jamaah berkumpul di musala, muazin mengumandangkan iqamah. Apa kalimat khusus dalam iqamah yang berarti "Salat akan segera didirikan"?',
    arabicSnippet: 'قَدْ قَامَتِ الصَّلَاةُ',
    options: [
      {
        id: '4a',
        text: 'Ḥayya ‘alaṣ-ṣalāh',
        isCorrect: false,
        explanation: 'Salah! Hayya \'alas-shalah artinya marilah melaksanakan salat.'
      },
      {
        id: '4b',
        text: 'Qad qāmatiṣ-ṣalāh (قَدْ قَامَتِ الصَّلَاةُ)',
        isCorrect: true,
        explanation: 'Hebat! Qad qāmatiṣ-ṣalāh dibaca 2 kali dalam iqamah sebagai penanda salat segera dimulai.'
      },
      {
        id: '4c',
        text: 'Allāhu Akbar Allāhu Akbar',
        isCorrect: false,
        explanation: 'Salah! Itu adalah lafaz takbir.'
      }
    ]
  },
  {
    id: 5,
    stage: 'Tingkat 5: Sikap Setelah Iqamah Selesai',
    prompt: 'Begitu iqamah selesai dikumandangkan oleh muazin, apa yang harus dilakukan oleh seluruh makmum di musala?',
    options: [
      {
        id: '5a',
        text: 'Segera berdiri, merapatkan dan meluruskan saf untuk melaksanakan salat berjamaah.',
        isCorrect: true,
        explanation: 'Sempurna! Makmum segera berdiri dan meluruskan saf salat berjamaah.'
      },
      {
        id: '5b',
        text: 'Masih mengobrol dengan teman di belakang.',
        isCorrect: false,
        explanation: 'Salah! Saat salat akan dimulai, tidak boleh mengobrol.'
      },
      {
        id: '5c',
        text: 'Keluar musala untuk jajan ke kantin.',
        isCorrect: false,
        explanation: 'Salah! Iqamah menandakan salat berjamaah segera dimulai.'
      }
    ]
  }
];

// =========================================================================
// 4. EVALUASI PEMBELAJARAN (HOTS & COMPUTATIONAL THINKING)
// =========================================================================

// A. PILIHAN GANDA (10 Soal)
export const EVALUASI_P4_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Kata "Azan" berasal dari bahasa Arab "al-Ażān" (الأَذَانُ). Secara bahasa, arti kata azan adalah...',
    options: ['A. Perintah dan Larangan', 'B. Pemberitahuan atau Panggilan', 'C. Pujian dan Doa', 'D. Bimbingan Belajar'],
    correctAnswerIndex: 1,
    explanation: 'Secara bahasa, azan berarti pemberitahuan atau panggilan.'
  },
  {
    id: 2,
    question: 'Menurut istilah fikih, azan adalah seruan untuk mengajak umat Islam melaksanakan salat wajib lima waktu dengan lafaz-lafaz tertentu yang diajarkan oleh...',
    options: ['A. Malaikat Jibril as.', 'B. Nabi Ibrahim as.', 'C. Rasulullah Nabi Muhammad saw.', 'D. Para Sahabat saja'],
    correctAnswerIndex: 2,
    explanation: 'Azan merupakan tuntunan yang diajarkan oleh Rasulullah saw.'
  },
  {
    id: 3,
    question: 'Seruan yang dikumandangkan sesudah azan sebagai penanda bahwa salat berjamaah akan segera dimulai disebut...',
    options: ['A. Takbiran', 'B. Iqamah', 'C. Khotbah', 'D. Dzikir'],
    correctAnswerIndex: 1,
    explanation: 'Iqamah adalah seruan penanda salat berjamaah segera dimulai.'
  },
  {
    id: 4,
    question: 'Hukum mengumandangkan azan dan iqamah untuk salat berjamaah menurut ajaran Islam adalah Sunah Muakkadah. Arti Sunah Muakkadah adalah...',
    options: [
      'A. Sunah yang biasa-biasa saja',
      'B. Sunah yang sangat ditekankan dan dianjurkan',
      'C. Wajib bagi setiap individu anak',
      'D. Boleh ditinggalkan tanpa alasan'
    ],
    correctAnswerIndex: 1,
    explanation: 'Sunah muakkadah artinya sunah yang sangat ditekankan dan dianjurkan.'
  },
  {
    id: 5,
    question: 'Pada azan Subuh, muazin menambahkan lafaz "Aṣ-ṣalātu khairum minan-naūm" (الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ) sebanyak 2 kali. Arti lafaz tersebut adalah...',
    options: [
      'A. Marilah kita menuju kemenangan',
      'B. Salat itu lebih baik daripada tidur',
      'C. Sungguh salat akan segera didirikan',
      'D. Allah Maha Besar lagi Maha Penyayang'
    ],
    correctAnswerIndex: 1,
    explanation: 'Aṣ-ṣalātu khairum minan-naūm artinya "Salat itu lebih baik daripada tidur".'
  },
  {
    id: 6,
    question: 'Di bawah ini yang merupakan perbedaan utama antara lafaz azan dan lafaz iqamah adalah keberadaan kalimat...',
    options: [
      'A. Ḥayya ‘alaṣ-ṣalāh',
      'B. Allāhu Akbar Allāhu Akbar',
      'C. Qad qāmatiṣ-ṣalāh (قَدْ قَامَتِ الصَّلَاةُ)',
      'D. Lā ilāha illallāh'
    ],
    correctAnswerIndex: 2,
    explanation: 'Kalimat "Qad qāmatiṣ-ṣalāh" hanya ada di dalam iqamah.'
  },
  {
    id: 7,
    question: 'Ketika mendengar azan berkumandang dari masjid, adab yang benar bagi seorang murid sekolah adalah...',
    options: [
      'A. Berteriak lebih keras mengalahkan suara azan',
      'B. Menghentikan pembicaraan, mendengarkan, dan menjawab lafaz azan',
      'C. Tetap mengobrol dan bercanda dengan kencang',
      'D. Pura-pura tidak mendengar panggilan azan'
    ],
    correctAnswerIndex: 1,
    explanation: 'Adab mendengar azan adalah diam, menghentikan pembicaraan, dan menjawab azan.'
  },
  {
    id: 8,
    question: 'Farhan menjadi muazin di sekolah. Saat mengumandangkan azan, Farhan berdiri menghadap kiblat dan bersuara merdu. Sikap Farhan mencerminkan...',
    options: [
      'A. Menghidupkan syiar Islam dan adab muazin yang baik',
      'B. Ingin dipuji teman-temannya',
      'C. Sikap sombong dan pamer suara',
      'D. Perilaku terpaksa'
    ],
    correctAnswerIndex: 0,
    explanation: 'Farhan menunjukkan adab muazin yang baik dan menghidupkan syiar Islam.'
  },
  {
    id: 9,
    question: 'Perhatikan algoritma Computational Thinking (Urutan Sintaks Azan):\n(1) Syahadat Tauhid & Rasul\n(2) Takbir Awal (Allahu Akbar 4x)\n(3) Hayya \'alas-salah & Hayya \'alal-falah\nUrutan lafaz awal azan yang tepat adalah...',
    options: ['A. (2) lalu (1) lalu (3)', 'B. (1) lalu (2) lalu (3)', 'C. (3) lalu (2) lalu (1)', 'D. (2) lalu (3) lalu (1)'],
    correctAnswerIndex: 0,
    explanation: 'Urutan azan diawali Takbir (2), dilanjutkan Syahadatain (1), lalu panggilan salat & falah (3).'
  },
  {
    id: 10,
    question: 'Salah satu hikmah penting dari adanya pengumandangan azan dan iqamah di tengah masyarakat adalah...',
    options: [
      'A. Membuat suasana menjadi bising',
      'B. Mengingatkan waktu salat dan menumbuhkan disiplin serta persatuan umat',
      'C. Menakut-nakuti anak kecil',
      'D. Membedakan kaya dan miskin'
    ],
    correctAnswerIndex: 1,
    explanation: 'Azan mengingatkan waktu salat dan menyatukan umat Islam.'
  }
];

// B. PILIHAN GANDA KOMPLEKS (5 Soal)
export const EVALUASI_P4_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Manakah di antara pilihan berikut yang merupakan TATA CARA & ADAB MENGUMANDANGKAN AZAN yang benar? (Pilih lebih dari satu)',
    options: [
      'A. Suci dari hadas (sudah berwudu)',
      'B. Menghadap ke arah kiblat',
      'C. Berlari-lari sambil berteriak tergesa-gesa',
      'D. Mengucapkan lafaz azan dengan jelas dan khusyuk'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Suci dari hadas, menghadap kiblat, dan suara jelas/khusyuk adalah adab muazin. Tergesa-gesa dilarang.'
  },
  {
    id: 2,
    question: 'Pilihlah ADAB KETIKA MENDENGAR AZAN berkumandang! (Pilih lebih dari satu)',
    options: [
      'A. Menghentikan pembicaraan yang tidak penting',
      'B. Menjawab lafaz azan sesuai yang diucapkan muazin',
      'C. Terus mengobrol dengan suara keras',
      'D. Membaca doa setelah azan selesai'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Menghentikan bicara, menjawab azan, dan membaca doa setelah azan adalah adab yang benar.'
  },
  {
    id: 3,
    question: 'Manakah lafaz-lafaz yang ADA dalam azan wajib lima waktu? (Pilih lebih dari satu)',
    options: [
      'A. Allāhu Akbar Allāhu Akbar',
      'B. Ḥayya ‘alaṣ-ṣalāh',
      'C. Qad qāmatiṣ-ṣalāh',
      'D. Lā ilāha illallāh'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Takbir, Hayya \'alas-salah, dan Tauhid ada dalam azan. Qad qamatis-shalah hanya ada di iqamah.'
  },
  {
    id: 4,
    question: 'Pilihlah HIKMAH MENGUMANDANGKAN AZAN DAN IQAMAH! (Pilih lebih dari satu)',
    options: [
      'A. Mengingatkan masuknya waktu salat',
      'B. Menumbuhkan kedisiplinan waktu',
      'C. Menumbuhkan rasa cinta kepada masjid dan musala',
      'D. Membuat murid tidak mau salat'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Azan mengingatkan waktu salat, melatih disiplin, dan menumbuhkan cinta masjid.'
  },
  {
    id: 5,
    question: 'Manakah penerataan materi Bab IV dalam KEHIDUPAN SEHARI-HARI murid sekolah? (Pilih lebih dari satu)',
    options: [
      'A. Segera menjawab azan ketika mendengarnya',
      'B. Ikut melaksanakan salat berjamaah di sekolah/masjid',
      'C. Mendorong kawan untuk tidak pernah ke masjid',
      'D. Belajar berani menjadi muazin di musala sekolah'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Menjawab azan, salat berjamaah, dan berani menjadi muazin adalah penerapan terpuji.'
  }
];

// C. MENJODOHKAN (5 Soal)
export const EVALUASI_P4_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Azan (al-Ażān)',
    rightText: 'Panggilan pemberitahuan masuk waktu salat'
  },
  {
    id: 2,
    leftText: 'Iqamah',
    rightText: 'Seruan tanda salat berjamaah segera dimulai'
  },
  {
    id: 3,
    leftText: 'Hukum Azan & Iqamah',
    rightText: 'Sunah Muakkadah (sangat dianjurkan)'
  },
  {
    id: 4,
    leftText: 'Aṣ-ṣalātu khairum minan-naūm',
    rightText: 'Lafaz khusus azan Subuh (Salat lebih baik dari tidur)'
  },
  {
    id: 5,
    leftText: 'Qad qāmatiṣ-ṣalāh',
    rightText: 'Lafaz khusus iqamah (Salat akan segera didirikan)'
  }
];

// D. BENAR ATAU SALAH DISERTAI ALASANNYA (5 Soal)
export const EVALUASI_P4_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Hukum mengumandangkan azan sebelum salat berjamaah adalah Sunah Muakkadah.',
    isTrue: true,
    explanation: 'BENAR. Karena azan adalah sunah yang sangat ditekankan dan selalu dilaksanakan oleh Rasulullah saw. sebelum salat berjamaah.'
  },
  {
    id: 2,
    statement: 'Lafaz "Aṣ-ṣalātu khairum minan-naūm" dibaca pada seluruh azan lima waktu, termasuk Zuhur dan Asar.',
    isTrue: false,
    explanation: 'SALAH. Karena lafaz Aṣ-ṣalātu khairum minan-naūm khusus ditambahkan pada azan Subuh saja untuk membangunkan orang tidur.'
  },
  {
    id: 3,
    statement: 'Kalimat "Qad qāmatiṣ-ṣalāh" dibaca sebanyak 2 kali di dalam iqamah sebelum takbir penutup.',
    isTrue: true,
    explanation: 'BENAR. Karena kalimat tersebut merupakan penanda khusus iqamah yang berarti "Salat akan segera didirikan".'
  },
  {
    id: 4,
    statement: 'Ketika azan berkumandang, kita dibolehkan terus bercanda dan berteriak-teriak bersama teman.',
    isTrue: false,
    explanation: 'SALAH. Karena adab mendengar azan adalah menghentikan pembicaraan/permainan, mendengarkan khusyuk, dan menjawab lafaz azan.'
  },
  {
    id: 5,
    statement: 'Seorang muazin disunahkan berwudu (suci dari hadas) dan berdiri menghadap kiblat saat azan.',
    isTrue: true,
    explanation: 'BENAR. Karena suci dari hadas dan menghadap kiblat merupakan adab resmi mengumandangkan azan sesuai tuntunan syariat.'
  }
];

// E. SOAL URAIAN (5 Soal)
export const EVALUASI_P4_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan perbedaan antara Azan dan Iqamah baik dari segi pengertian maupun fungsinya!',
    rubric: 'Skor 20: Menjelaskan Azan (panggilan pemberitahuan masuk waktu salat) dan Iqamah (seruan penanda salat berjamaah segera dimulai) secara tepat.',
    sampleAnswer: '• Azan adalah seruan panggilan untuk memberitahukan masuknya waktu salat wajib lima waktu.\n• Iqamah adalah seruan yang dikumandangkan sesudah azan sebagai tanda bahwa salat berjamaah akan segera dimulai.'
  },
  {
    id: 2,
    question: 'Tuliskan lafaz khusus yang terdapat dalam azan Subuh beserta artinya!',
    rubric: 'Skor 20: Menyebutkan lafaz "Aṣ-ṣalātu khairum minan-naūm" dan artinya "Salat itu lebih baik daripada tidur".',
    sampleAnswer: 'Lafaz khusus azan Subuh: الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ (Aṣ-ṣalātu khairum minan-naūm).\nArtinya: "Salat itu lebih baik daripada tidur."'
  },
  {
    id: 3,
    question: 'Sebutkan 4 adab yang harus dilakukan oleh seorang muazin ketika mengumandangkan azan!',
    rubric: 'Skor 20: Menyebutkan 4 adab (misal: suci dari hadas, menghadap kiblat, berdiri sopan, suara jelas/tartil, tidak tergesa-gesa).',
    sampleAnswer: '1. Suci dari hadas (sudah berwudu).\n2. Menghadap ke arah kiblat.\n3. Berdiri dengan sopan.\n4. Mengucapkan lafaz azan dengan suara jelas, tartil, dan khusyuk.'
  },
  {
    id: 4,
    question: 'Sebutkan 4 adab seorang Muslim ketika mendengar azan berkumandang dari masjid/musala!',
    rubric: 'Skor 20: Menyebutkan 4 adab (menghentikan bicara, menjawab azan, membaca doa, bersiap wudu/salat).',
    sampleAnswer: '1. Menghentikan pembicaraan atau permainan yang tidak penting.\n2. Menjawab lafaz azan sebagaimana yang diucapkan muazin.\n3. Membaca doa setelah selesai azan.\n4. Segera berwudu dan bersiap menuju tempat salat.'
  },
  {
    id: 5,
    question: 'Sebutkan 5 hikmah dan manfaat mengumandangkan azan dan iqamah bagi umat Islam!',
    rubric: 'Skor 20: Menyebutkan 5 hikmah dari 10 hikmah di buku teks (misal: ingat waktu salat, disiplin waktu, persatuan umat, semarakkan syiar, cinta masjid).',
    sampleAnswer: '1. Mengingatkan masuknya waktu salat.\n2. Mengajak manusia selalu mengingat Allah Swt.\n3. Menumbuhkan kedisiplinan waktu.\n4. Menumbuhkan persatuan umat Islam dalam salat berjamaah.\n5. Menumbuhkan rasa cinta kepada masjid dan musala.'
  }
];
