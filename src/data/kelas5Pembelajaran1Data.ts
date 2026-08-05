// Data Lengkap & Detail Kelas 5 Pembelajaran 1 Berdasarkan PDF Resmi BAB 1
// Membaca, Menulis, dan Membedakan Huruf Hijaiyah Bersambung Tiga Kata atau Lebih
// dengan Praktik Membaca Mim Sukun & Surat Al-'Asr

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
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 5 PEMBELAJARAN 1) - 21 SLIDE DETAIL
// =========================================================================
export const KELAS5_P1_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Al-Qur\'an sebagai Pedoman Hidup Utama',
    subtitle: 'Petunjuk Kebahagiaan Dunia dan Akhirat Bagi Umat Manusia',
    iconName: 'BookOpen',
    points: [
      '• Allah Swt. menurunkan Al-Qur\'an sebagai petunjuk (hudan) bagi seluruh umat manusia.',
      '• Al-Qur\'an mengajarkan akidah, ibadah, akhlak, sejarah, dan berbagai pedoman kehidupan agar manusia memperoleh kebahagiaan di dunia dan akhirat.',
      '• Membaca Al-Qur\'an diwajibkan sesuai kaidah ilmu tajwid agar bacaan menjadi benar, jelas, indah, serta tidak mengubah makna ayat.',
      '• Rasulullah saw. bersabda: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur\'an dan mengajarkannya." (HR. Bukhari).'
    ],
    arabicExamples: [
      {
        arabic: 'إِنَّ هٰذَا الْقُرْءَانَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',
        latin: 'Inna hāżal-qur\'āna yahdī lillatī hiya aqwam',
        meaning: 'Sesungguhnya Al-Qur\'an ini memberi petunjuk kepada jalan yang paling lurus...',
        note: 'QS. Al-Isrā\': 9'
      }
    ],
    highlightBox: {
      title: '💡 Makna Membaca Tartil',
      content: 'Membaca Al-Qur\'an bukan hanya sekadar melafalkan huruf-huruf Arab, tetapi juga memperhatikan makhraj, sifat huruf, panjang pendek bacaan, serta hukum tajwid.',
      type: 'info'
    }
  },
  {
    id: 2,
    title: '2. Mengenal Huruf Hijaiyah Bersambung',
    subtitle: 'Perubahan Bentuk Huruf di Awal, Tengah, Akhir, dan Berdiri Sendiri',
    iconName: 'Grid',
    points: [
      '• Huruf hijaiyah berjumlah 29 huruf.',
      '• Dalam Al-Qur\'an, huruf-huruf tersebut tidak selalu berdiri sendiri, tetapi saling bersambung membentuk kata dan kalimat.',
      '• Setiap huruf memiliki perubahan bentuk yang berbeda ketika berada di:',
      '  1. Awal kata (pembuka)',
      '  2. Tengah kata (penghubung)',
      '  3. Akhir kata (penutup)',
      '  4. Berdiri sendiri (tunggal/terpisah)',
      '• Peserta didik perlu berlatih mengenali perubahan bentuk tersebut agar tidak mengalami kesulitan saat membaca Al-Qur\'an.'
    ],
    tableData: {
      headers: ['Huruf Asli', 'Awal Kata', 'Tengah Kata', 'Akhir Kata'],
      rows: [
        ['ب (Ba)', 'بـ', 'ـبـ', 'ـب'],
        ['ت (Ta)', 'تـ', 'ـتـ', 'ـت'],
        ['ث (Tsa)', 'ثـ', 'ـثـ', 'ـث'],
        ['ج (Jim)', 'جـ', 'ـجـ', 'ـج'],
        ['م (Mim)', 'مـ', 'ـمـ', 'ـم']
      ]
    }
  },
  {
    id: 3,
    title: '3. Membaca Huruf Hijaiyah Bersambung Tiga Kata atau Lebih',
    subtitle: 'Rangkaian Kata Al-Qur\'an yang Dibaca Lancar Tanpa Terputus',
    iconName: 'Sparkles',
    points: [
      '• Dalam Al-Qur\'an, sebagian besar ayat terdiri atas beberapa kata yang saling berkaitan.',
      '• Peserta didik harus mampu membaca rangkaian tiga kata atau lebih secara lancar tanpa terputus-putus.',
      '• Latihan membaca dilakukan secara bertahap:',
      '  1. Mengenali setiap huruf.',
      '  2. Mengenali harakat (fathah, kasrah, dhammah, sukun, tanwin).',
      '  3. Membaca setiap kata secara terpisah.',
      '  4. Membaca tiga kata secara berurutan.',
      '  5. Membaca satu ayat secara utuh.'
    ],
    arabicExamples: [
      {
        arabic: 'بِسْمِ اللَّهِ الرَّحْمٰنِ',
        latin: 'Bismillāhir-raḥmān',
        meaning: 'Terdiri atas 3 kata: بِسْمِ + اللَّهِ + الرَّحْمٰنِ'
      },
      {
        arabic: 'إِنَّ اللَّهَ غَفُورٌ',
        latin: 'Innallāha gafūr',
        meaning: 'Terdiri atas 3 kata: إِنَّ + اللَّهَ + غَفُورٌ'
      }
    ]
  },
  {
    id: 4,
    title: '4. Menulis Huruf Hijaiyah Bersambung',
    subtitle: 'Arah Penulisan Kanan ke Kiri dan Langkah-Langkah Belajar Menulis',
    iconName: 'PenTool',
    points: [
      '• Selain membaca, peserta didik juga harus mampu menulis huruf hijaiyah dengan benar.',
      '• Menulis huruf Arab memerlukan ketelitian karena arah penulisannya dimulai dari KANAN KE KIRI.',
      '• Langkah-langkah belajar menulis:',
      '  1. Menulis huruf tunggal.',
      '  2. Menulis dua huruf bersambung.',
      '  3. Menulis satu kata.',
      '  4. Menulis dua kata.',
      '  5. Menulis tiga kata atau lebih.',
      '• Peserta didik diminta menyalin tulisan sebanyak tiga kali agar terbiasa menulis dengan rapi.'
    ],
    arabicExamples: [
      {
        arabic: 'اللَّهُ غَفُورٌ رَحِيمٌ',
        latin: 'Allāhu gafūrur-raḥīm',
        meaning: 'Contoh latihan menyalin 3 kata bersambung secara rapi (disalin 3 kali).'
      }
    ]
  },
  {
    id: 5,
    title: '5. Pentingnya Ilmu Tajwid dalam Membaca Al-Qur\'an',
    subtitle: 'Membaguskan Bacaan Memberikan Hak Setiap Huruf',
    iconName: 'Award',
    points: [
      '• Tajwid secara bahasa berarti "membaguskan bacaan Al-Qur\'an" dengan memberikan hak setiap huruf sesuai tempat keluarnya (makhraj).',
      '• Tujuan mempelajari ilmu tajwid agar bacaan Al-Qur\'an:',
      '  - BENAR (sesuai kaidah)',
      '  - JELAS (makhraj dan harakatnya)',
      '  - INDAH (tartil dan bertajwid)',
      '  - TIDAK MENGUBAH MAKNA AYAT.',
      '• Allah Swt. berfirman: "...dan bacalah Al-Qur\'an itu dengan tartil." (QS. Al-Muzzammil: 4).'
    ]
  },
  {
    id: 6,
    title: '6. Pengertian Mim Sukun (مْ)',
    subtitle: 'Konsep Huruf Mim Tanpa Harakat dan Penentuan Hukumnya',
    iconName: 'ShieldCheck',
    points: [
      '• Salah satu hukum bacaan tajwid yang sering dijumpai adalah Mim Sukun (مْ).',
      '• Mim Sukun adalah huruf Mim yang tidak berharakat atau berharakat sukun.',
      '• Cara membacanya sangat bergantung pada huruf hijaiyah yang berada setelahnya.',
      '• Contoh kata mengandung Mim Sukun: هُمْ (hum), كُمْ (kum), لَهُمْ (lahum), مِنْهُمْ (minhum).',
      '• Setiap kali menemukan Mim Sukun, kita harus memperhatikan huruf berikutnya agar dapat menentukan hukum bacaannya secara tepat.'
    ]
  },
  {
    id: 7,
    title: '7. Hukum Mim Sukun #1: Idzhar Syafawi',
    subtitle: 'Dibaca Jelas Tanpa Dengung Saat Bertemu Selain Mim & Ba',
    iconName: 'Volume2',
    points: [
      '• Idzhar berarti jelas, sedangkan syafawi berarti berkaitan dengan kedua bibir.',
      '• Syarat: Idzhar Syafawi terjadi apabila Mim Sukun (مْ) bertemu semua huruf hijaiyah SELAIN Mim (م) dan Ba (ب).',
      '• Cara membaca:',
      '  1. Mim dibaca jelas dan tegas.',
      '  2. Tidak boleh berdengung (tanpa ghunnah).',
      '  3. Bibir menutup sebentar kemudian dibuka.',
      '• Contoh lafal: هُمْ فِيهَا (hum fīhā), عَلَيْهِمْ قَوْمٌ (\'alaihim qaumun), كَمْ خَلَقْنَا (kam khalaqnā).'
    ],
    arabicExamples: [
      {
        arabic: 'هُمْ فِيهَا',
        latin: 'Hum fīhā',
        meaning: 'Mim Sukun bertemu huruf Fa (ف) ➔ Dibaca jelas tanpa dengung'
      },
      {
        arabic: 'عَلَيْهِمْ قَوْمٌ',
        latin: '\'Alaihim qaumun',
        meaning: 'Mim Sukun bertemu huruf Qaf (ق) ➔ Dibaca jelas tanpa dengung'
      },
      {
        arabic: 'كَمْ خَلَقْنَا',
        latin: 'Kam khalaqnā',
        meaning: 'Mim Sukun bertemu huruf Kha (خ) ➔ Dibaca jelas tanpa dengung'
      }
    ]
  },
  {
    id: 8,
    title: '8. Hukum Mim Sukun #2: Ikhfa Syafawi',
    subtitle: 'Dibaca Samar & Dengung 2 Harakat Saat Bertemu Huruf Ba (ب)',
    iconName: 'Mic',
    points: [
      '• Ikhfa berarti samar.',
      '• Syarat: Ikhfa Syafawi terjadi apabila Mim Sukun (مْ) bertemu huruf Ba (ب).',
      '• Cara membaca:',
      '  1. Dibaca samar-samar.',
      '  2. Bibir tetap rapat dengan lembut.',
      '  3. Dengung (ghunnah) selama dua harakat.',
      '• Contoh lafal: تَرْمِيهِمْ بِحِجَارَةٍ (tarmīhim biḥijāratin), هُمْ بِهَا (hum bihā), أَنْتُمْ بِهِ (antum bihi).',
      '• Kesalahan umum: Membaca Mim terlalu jelas atau menghilangkannya sama sekali.'
    ],
    arabicExamples: [
      {
        arabic: 'تَرْمِيهِمْ بِحِجَارَةٍ',
        latin: 'Tarmīhim biḥijāratin',
        meaning: 'Mim Sukun bertemu Ba (ب) ➔ Dibaca samar + dengung 2 harakat'
      },
      {
        arabic: 'هُمْ بِهَا',
        latin: 'Hum bihā',
        meaning: 'Mim Sukun bertemu Ba (ب) ➔ Ikhfa Syafawi'
      },
      {
        arabic: 'أَنْتُمْ بِهِ',
        latin: 'Antum bihi',
        meaning: 'Mim Sukun bertemu Ba (ب) ➔ Ikhfa Syafawi'
      }
    ]
  },
  {
    id: 9,
    title: '9. Hukum Mim Sukun #3: Idgham Mimi (Mitslain)',
    subtitle: 'Peleburan Mim Pertama ke Mim Kedua dengan Dengung 2 Harakat',
    iconName: 'Layers',
    points: [
      '• Idgham berarti memasukkan.',
      '• Syarat: Idgham Mimi (Mitslain) terjadi apabila Mim Sukun (مْ) bertemu huruf Mim (م).',
      '• Cara membaca:',
      '  1. Mim pertama dileburkan sepenuhnya ke dalam Mim kedua.',
      '  2. Dibaca dengan dengung (ghunnah) selama dua harakat.',
      '• Ketika membaca Idgham Mimi, suara dengung harus terdengar dengan jelas tanpa berlebihan.',
      '• Contoh lafal: لَهُمْ مَا (lahum mā), كَمْ مِنْ (kam min), عَلَيْهِمْ مَا (\'alaihim mā).'
    ],
    arabicExamples: [
      {
        arabic: 'لَهُمْ مَا',
        latin: 'Lahum mā',
        meaning: 'Mim Sukun bertemu Mim (م) ➔ Dileburkan + dengung 2 harakat'
      },
      {
        arabic: 'كَمْ مِنْ',
        latin: 'Kam min',
        meaning: 'Mim Sukun bertemu Mim (م) ➔ Idgham Mimi'
      },
      {
        arabic: 'عَلَيْهِمْ مَا',
        latin: '\'Alaihim mā',
        meaning: 'Mim Sukun bertemu Mim (م) ➔ Idgham Mimi'
      }
    ]
  },
  {
    id: 10,
    title: '10. Cara Melatih Bacaan Mim Sukun Secara Bertahap',
    subtitle: '7 Langkah Praktis Membaca Mim Sukun dengan Fasih',
    iconName: 'CheckCircle2',
    points: [
      'Agar mampu membaca Mim Sukun dengan benar, lakukan langkah-langkah berikut:',
      '1. Membaca perlahan.',
      '2. Mengenali hukum bacaannya.',
      '3. Menentukan apakah termasuk Idzhar, Ikhfa, atau Idgham.',
      '4. Menirukan bacaan guru.',
      '5. Mengulang bacaan minimal lima kali.',
      '6. Membaca dalam satu ayat penuh.',
      '7. Membaca di depan teman atau guru untuk memperoleh masukan.',
      '• Latihan rutin membantu peserta didik membaca Al-Qur\'an lebih fasih dan percaya diri.'
    ]
  },
  {
    id: 11,
    title: '11. Hikmah Mempelajari Ilmu Tajwid & Penerapan Sehari-hari',
    subtitle: 'Menjaga Kemurnian Al-Qur\'an dan Membentuk Karakter Tartil',
    iconName: 'Heart',
    points: [
      '• Manfaat & Hikmah Mempelajari Tajwid:',
      '  - Membaca Al-Qur\'an sesuai tuntunan Rasulullah saw.',
      '  - Menghindari kesalahan dalam pengucapan huruf.',
      '  - Menjaga kemurnian bacaan Al-Qur\'an.',
      '  - Menambah pahala & menumbuhkan rasa cinta kepada Al-Qur\'an.',
      '  - Meningkatkan kepercayaan diri saat membaca di depan orang lain.',
      '  - Mempermudah menghafal & menjadikan bacaan indah dan tartil.',
      '• Penerapan: Membiasakan membaca Al-Qur\'an setiap hari di rumah bersama orang tua dan di sekolah bersama guru.'
    ]
  },
  {
    id: 12,
    title: '12. Mengenal Surat Al-\'Asr (Ciri-Ciri & Karakteristik)',
    subtitle: 'Surat Ke-103 • 3 Ayat • Makkiyah • Pentingnya Waktu',
    iconName: 'Clock',
    points: [
      '• Surat Al-\'Asr merupakan surat ke-103 dalam Al-Qur\'an.',
      '• Surat ini terdiri atas 3 ayat dan termasuk golongan surat Makkiyah (diturunkan sebelum Nabi Muhammad saw. hijrah ke Madinah).',
      '• Nama Al-\'Asr berarti MASA ATAU WAKTU. Allah Swt. membuka surat ini dengan bersumpah demi waktu.',
      '• Waktu adalah nikmat yang sangat berharga dan tidak dapat diulang. Setiap detik yang telah berlalu tidak akan pernah kembali.',
      '• Pendapat Imam Asy-Syafi\'i: Apabila manusia merenungkan kandungan Surat Al-\'Asr saja, maka surat ini sudah cukup menjadi pelajaran hidup karena merangkum prinsip utama keberhasilan seorang mukmin.'
    ]
  },
  {
    id: 13,
    title: '13. Bacaan & Arti Surat Al-\'Asr Ayat 1-3 Lengkap',
    subtitle: 'Teks Arab, Latin, dan Terjemahan Bahasa Indonesia',
    iconName: 'BookOpen',
    points: [
      'Lafadz Teks Surat Al-\'Asr (Ayat 1-3):'
    ],
    arabicExamples: [
      {
        arabic: 'وَالْعَصْرِ',
        latin: 'Wal-\'aṣr',
        meaning: 'Ayat 1: "Demi masa."'
      },
      {
        arabic: 'إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ',
        latin: 'Innal-insāna lafī khusr',
        meaning: 'Ayat 2: "Sesungguhnya manusia benar-benar berada dalam kerugian."'
      },
      {
        arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
        latin: 'Illallażīna āmanū wa \'amiluṣ-ṣāliḥāti wa tawāṣau bil-ḥaqqi wa tawāṣau biṣ-ṣabr',
        meaning: 'Ayat 3: "Kecuali orang-orang yang beriman, mengerjakan kebajikan, saling menasihati dalam kebenaran, dan saling menasihati dalam kesabaran."'
      }
    ]
  },
  {
    id: 14,
    title: '14. Penjelasan Arti & Kandungan Ayat Pertama',
    subtitle: 'وَالْعَصْرِ (Wal-\'aṣr) — "Demi Masa"',
    iconName: 'Clock',
    points: [
      '• Allah Swt. bersumpah demi waktu karena waktu merupakan amanah yang sangat berharga.',
      '• Semua manusia memperoleh alokasi waktu yang sama, yaitu 24 jam setiap hari. Perbedaannya terletak pada cara memanfaatkannya.',
      '• Ada orang yang menggunakan waktunya untuk belajar, beribadah, membantu orang tua, dan berbuat baik.',
      '• Ada pula orang yang menghabiskan waktunya dengan bermalas-malasan atau melakukan hal yang tidak bermanfaat.',
      '• Seorang Muslim harus menghargai waktu karena waktu adalah kesempatan untuk beribadah, menuntut ilmu, dan memperbaiki diri.'
    ]
  },
  {
    id: 15,
    title: '15. Penjelasan Arti & Kandungan Ayat Kedua',
    subtitle: 'إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ (Innal-insāna lafī khusr) — "Kerugian Manusia"',
    iconName: 'ShieldCheck',
    points: [
      '• Allah Swt. mengingatkan bahwa pada dasarnya manusia akan mengalami KERUGIAN apabila hidupnya tidak diisi dengan iman dan amal saleh.',
      '• Kerugian tersebut bukan hanya berupa kehilangan harta benda, tetapi berupa:',
      '  1. Tidak memperoleh ilmu pengetahuan.',
      '  2. Kehilangan kesempatan untuk berbuat baik.',
      '  3. Menyesali waktu yang telah berlalu.',
      '  4. Jauh dari petunjuk dan keridaan Allah Swt.',
      '• Oleh karena itu, setiap hari hendaknya diisi dengan kegiatan yang bermanfaat.'
    ]
  },
  {
    id: 16,
    title: '16. Penjelasan Arti & Kandungan Ayat Ketiga',
    subtitle: 'Empat Syarat Agar Manusia Memperoleh Keberuntungan Selamat dari Kerugian',
    iconName: 'Award',
    points: [
      '• Ayat ketiga menjelaskan empat syarat utama agar manusia tidak mengalami kerugian dalam hidupnya:',
      '  a. Beriman kepada Allah Swt.',
      '  b. Beramal saleh (kebajikan).',
      '  c. Saling menasihati dalam kebenaran.',
      '  d. Saling menasihati dalam kesabaran.',
      '• Empat syarat ini menjadi fondasi karakter seorang mukmin yang sukses di dunia dan akhirat.'
    ]
  },
  {
    id: 17,
    title: '17. Rincian Syarat Selamat: Beriman & Beramal Saleh',
    subtitle: 'a. Beriman kepada Allah Swt. & b. Beramal Saleh Bagi Peserta Didik',
    iconName: 'Heart',
    points: [
      '• a. Beriman kepada Allah Swt.: Iman menjadi dasar seluruh amal (percaya Allah, malaikat, kitab, rasul, hari akhir, qada & qadar). Keimanan diwujudkan melalui ibadah dan akhlak baik.',
      '• b. Beramal Saleh: Segala perbuatan baik yang dilakukan secara ikhlas karena Allah Swt.',
      '  Contoh amal saleh bagi peserta didik:',
      '  - Salat tepat waktu & belajar sungguh-sungguh.',
      '  - Membantu orang tua & menghormati guru.',
      '  - Menolong teman & menjaga kebersihan sekolah & berkata jujur.',
      '  - Perbuatan kecil seperti senyum, menyapa, dan membuang sampah pada tempatnya juga amal saleh jika diniatkan karena Allah Swt.'
    ]
  },
  {
    id: 18,
    title: '18. Rincian Syarat Selamat: Saling Menasihati Kebenaran & Kesabaran',
    subtitle: 'c. Saling Menasihati Kebenaran & d. Saling Menasihati Kesabaran',
    iconName: 'Users',
    points: [
      '• c. Saling Menasihati dalam Kebenaran:',
      '  - Muslim tidak cukup hanya baik untuk diri sendiri, tetapi juga mengajak orang lain kepada kebaikan.',
      '  - Contoh: Mengingatkan teman agar salat, mengajak membaca Al-Qur\'an, mengingatkan agar tidak menyontek, menjaga kebersihan kelas, dan jujur.',
      '  - Menasihati harus dilakukan secara SOPAN, SANTUN, DAN PENUH KASIH SAYANG.',
      '• d. Saling Menasihati dalam Kesabaran:',
      '  - Sabar menjalankan ibadah, sabar menghadapi kesulitan, sabar ketika belajar, sabar menghadapi kegagalan, dan sabar menghadapi perbedaan pendapat.'
    ]
  },
  {
    id: 19,
    title: '19. Empat Pesan Pokok Surat Al-\'Asr',
    subtitle: 'Pedoman Utama yang Harus Diamalkan Setiap Muslim',
    iconName: 'Sparkles',
    points: [
      'Secara keseluruhan, Surat Al-\'Asr mengandung 4 Pesan Pokok Utama:',
      '1. Menghargai Waktu: Datang ke sekolah tepat waktu, belajar sesuai jadwal, kurangi bermain gawai berlebihan, biasakan membaca Al-Qur\'an.',
      '2. Memperkuat Keimanan: Dipelihara melalui ibadah, doa, membaca Al-Qur\'an, dan menjauhi larangan Allah Swt.',
      '3. Rajin Beramal Saleh: Membantu teman yang kesulitan, menghormati orang tua, menyayangi adik, menjaga kebersihan, menepati janji.',
      '4. Menjadi Pribadi yang Peduli: Saling mengingatkan dalam kebaikan dan kesabaran secara jujur, disiplin, dan bertanggung jawab.'
    ]
  },
  {
    id: 20,
    title: '20. Hikmah Mempelajari Surat Al-\'Asr',
    subtitle: '8 Poin Keutamaan dan Manfaat Mengamalkan Surat Al-\'Asr',
    iconName: 'Award',
    points: [
      'Mempelajari Surat Al-\'Asr memberikan banyak hikmah, antara lain:',
      '1. Menumbuhkan rasa syukur atas nikmat waktu.',
      '2. Memotivasi untuk rajin belajar.',
      '3. Membiasakan disiplin dalam kehidupan sehari-hari.',
      '4. Menumbuhkan semangat beramal saleh.',
      '5. Meningkatkan kepedulian terhadap sesama.',
      '6. Membiasakan saling menasihati dalam kebaikan.',
      '7. Melatih kesabaran dalam menghadapi berbagai keadaan.',
      '8. Mengingatkan bahwa hidup harus diisi dengan amal yang bermanfaat.'
    ]
  },
  {
    id: 21,
    title: '21. Penerapan Nilai Surat Al-\'Asr dalam Kehidupan Sehari-hari',
    subtitle: 'Aksi Nyata di Rumah, Sekolah, dan Masyarakat',
    iconName: 'CheckCircle2',
    points: [
      '• Di Rumah: Membuat jadwal harian agar waktu digunakan seimbang untuk belajar, beribadah, membantu orang tua, beristirahat, dan bermain.',
      '• Di Sekolah: Berlatih membaca Al-Qur\'an bersama guru dan teman-teman untuk meningkatkan keberanian, ketelitian, dan semangat belajar.',
      '• Menghadapi Kesulitan: Ketika menghadapi kesulitan belajar, peserta didik hendaknya BERSABAR DAN TERUS BERUSAHA.',
      '• Ketika Melihat Kesalahan: Nasihatilah teman dengan cara yang santun dan penuh kasih sayang.',
      '• Dampak: Tumbuh menjadi pribadi disiplin, bertanggung jawab, beriman, gemar berbuat baik, serta memperoleh keberkahan dunia dan akhirat.'
    ]
  }
];

// =========================================================================
// 2. PENUGASAN PROYEK MURID (2 PjBL + 2 PBL) - Sesuai Kebijakan Guru
// =========================================================================
export const KELAS5_P1_PROJECTS: ProjectTask[] = [
  {
    id: 'p1_pjbl_1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Peta Konsep Visual Tajwid Mim Sukun & Kartu Sambung Hijaiyah',
    subtitle: 'Proyek Kreatif Poster Tajwid 3 Warna & Media Kartu Kata',
    objective: 'Peserta didik mampu merancang poster skema Hukum Mim Sukun (Idzhar Syafawi, Ikhfa Syafawi, Idgham Mimi) disertai contoh potongan ayat bersambung 3 kata.',
    steps: [
      '1. Siapkan kertas karton A3, spidol warna, penggaris, dan potongan kertas lipat.',
      '2. Buat bagan cabang "Hukum Mim Sukun" memuat 3 cabang utama (Idzhar Syafawi, Ikhfa Syafawi, Idgham Mimi).',
      '3. Tuliskan pengertian, cara membaca, dan 3 contoh potongan ayat Al-Qur\'an pada setiap cabang (misal: hum fīhā, tarmīhim biḥijāratin, lahum mā).',
      '4. Tambahkan contoh kaligrafi menyambung 3 kata hijaiyah (misal: Bismillah) dengan kaidah bentuk awal, tengah, dan akhir.',
      '5. Presentasikan poster di depan kelas dan tempel di mading sekolah.'
    ],
    output: 'Poster Karton A3 Peta Konsep Tajwid Mim Sukun & Kaligrafi Sambung berwarna.',
    teacherNote: 'Kerapian skema, ketepatan harakat, dan keindahan tulisan disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p1_pjbl_2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Proyek Jurnal "Manajemen Waktu Al-\'Asr" 7 Hari Murid Saleh',
    subtitle: 'Aksi Nyata Meneladani Surat Al-\'Asr di Rumah dan Sekolah',
    objective: 'Peserta didik mampu membiasakan penggunaan waktu secara efektif untuk belajar, beribadah, dan beramal saleh melalui tabel jurnal harian.',
    steps: [
      '1. Buatlah lembar Jurnal Waktu 24 Jam selama 7 hari berturut-turut.',
      '2. Kelompokkan aktivitas harian ke dalam 4 kategori: Beribadah (salat, ngaji), Belajar, Membantu Orang Tua/Amal Saleh, dan Istirahat/Bermain.',
      '3. Evaluasi apakah ada waktu yang terbuang sia-sia (misal bermain gawai berlebihan).',
      '4. Minta paraf apresiasi dari Orang Tua setiap malam.',
      '5. Susun rencana perbaikan jadwal waktu harian untuk minggu berikutnya.'
    ],
    output: 'Buku Jurnal Al-\'Asr 7 Hari berparaf orang tua & grafik alokasi waktu.',
    teacherNote: 'Kedisiplinan pengisian jurnal dan komitmen perubahan waktu disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p1_pbl_1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Analisis Kasus Kesalahan Membaca Mim Sukun & Pembetulan Tajwid',
    subtitle: 'Pemecahan Masalah Kesalahan Membaca Idzhar, Ikhfa, & Idgham Mimi',
    objective: 'Peserta didik mampu mendeteksi kesalahan bacaan Mim Sukun pada rekaman suara/teks dan merumuskan teknik perbaikan yang tepat.',
    steps: [
      '1. Simak studi kasus: "Fikri membaca ayat تَرْمِيهِمْ بِحِجَارَةٍ dengan suara Mim Sukun dibaca sangat jelas dan ditekan tanpa dengung. Sedangkan saat membaca هُمْ فِيهَا ia membacanya berdengung panjang."',
      '2. Identifikasi masalah: Mengapa bacaan Fikri tertukar antara Idzhar Syafawi dan Ikhfa Syafawi?',
      '3. Analisis hukum tajwid yang benar beserta letak posisi bibir saat membaca kedua hukum tersebut.',
      '4. Buatlah panduan "3 Langkah Mudah Membedakan Mim Sukun" untuk membantu Fikri.',
      '5. Praktikkan perbaikan bacaan di depan kelompok.'
    ],
    output: 'Lembar Analisis Kesalahan Tajwid & Panduan Pembetulan Bacaan Mim Sukun.',
    teacherNote: 'Ketepatan analisis hukum tajwid dan demonstrasi bacaan disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p1_pbl_2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Studi Kasus: "Solusi Menghadapi Teman yang Suka Menunda Waktu"',
    subtitle: 'Penerapan Saling Menasihati dalam Kebenaran dan Kesabaran',
    objective: 'Peserta didik mampu merumuskan cara menasihati teman yang malas dan suka menunda tugas secara santun sesuai pesan Surat Al-\'Asr.',
    steps: [
      '1. Amati fenomena di sekolah: "Budi sering terlambat mengumpulkan tugas kelompok karena lebih memilih bermain game online hingga larut malam."',
      '2. Hubungkan masalah Budi dengan ancaman kerugian dalam Surat Al-\'Asr Ayat 2.',
      '3. Rancang strategi "Nasihat Santun Sahabat": bagaimana cara menegur Budi tanpa membuatnya tersinggung atau marah.',
      '4. Buatlah "Jadwal Belajar Bersama Sahabat" sebagai bentuk saling menasihati dalam kesabaran.',
      '5. Simulasikan dialog saling menasihati dalam kelompok.'
    ],
    output: 'Naskah Dialog Saling Menasihati & Solusi Penjadwalan Belajar Kelompok.',
    teacherNote: 'Kematangan sikap empati dan kesantunan cara menasihati disesuaikan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI INTERAKTIF: TARIK TAMBANG TAJWID & SURAT AL-'ASR
// =========================================================================
export const KELAS5_P1_QUEST_STEPS: QuestStep[] = [
  {
    id: 1,
    title: 'Babak 1: Tarikan Sambung Hijaiyah',
    scenarioTitle: 'Tantangan Membedakan Bentuk Huruf Sambung',
    scenarioStory: 'Dua tim bertanding Tarik Tambang Tajwid! Untuk menarik tali ke area timmu, kamu harus menjawab perubahan bentuk huruf hijaiyah bersambung.',
    questionPrompt: 'Manakah penulisan huruf Mim (م) yang benar ketika berada di TENGAH KATA bersambung?',
    options: [
      {
        id: '1a',
        text: 'ـمـ (memiliki garis penyambung di depan dan belakang)',
        isCorrect: true,
        explanation: 'Benar! Huruf Mim di tengah kata ditulis ـمـ untuk menyambung huruf sebelum dan sesudahnya.'
      },
      {
        id: '1b',
        text: 'مـ (hanya memiliki garis penyambung di belakang)',
        isCorrect: false,
        explanation: 'Salah! Bentuk مـ adalah untuk huruf Mim di AWAL kata.'
      },
      {
        id: '1c',
        text: 'ـم (hanya memiliki garis penyambung di depan)',
        isCorrect: false,
        explanation: 'Kurang tepat! Bentuk ـم adalah untuk huruf Mim di AKHIR kata.'
      }
    ]
  },
  {
    id: 2,
    title: 'Babak 2: Tarikan Idzhar Syafawi',
    scenarioTitle: 'Tantangan Hukum Bacaan Mim Sukun Jelas',
    scenarioStory: 'Tim lawan mencoba menarik tali! Buktikan pemahamanmu tentang Idzhar Syafawi agar timmu berhasil menarik tali kembali.',
    questionPrompt: 'Bagaimanakah syarat dan cara membaca hukum "Idzhar Syafawi"?',
    options: [
      {
        id: '2a',
        text: 'Mim Sukun bertemu selain Mim dan Ba ➔ Dibaca jelas tanpa dengung.',
        isCorrect: true,
        explanation: 'Sempurna! Idzhar Syafawi dibaca jelas tanpa dengung ketika Mim Sukun bertemu huruf selain Mim dan Ba.'
      },
      {
        id: '2b',
        text: 'Mim Sukun bertemu huruf Ba ➔ Dibaca dengung 2 harakat.',
        isCorrect: false,
        explanation: 'Salah! Itu adalah syarat hukum Ikhfa Syafawi.'
      },
      {
        id: '2c',
        text: 'Mim Sukun bertemu huruf Mim ➔ Dileburkan menjadi satu.',
        isCorrect: false,
        explanation: 'Salah! Itu adalah syarat hukum Idgham Mimi.'
      }
    ]
  },
  {
    id: 3,
    title: 'Babak 3: Tarikan Ikhfa Syafawi',
    scenarioTitle: 'Tantangan Deteksi Lafal Samar & Dengung',
    scenarioStory: 'Tali berada di garis tengah! Jawab tantangan lafal Ikhfa Syafawi untuk merebut kemenangan babak ini.',
    questionPrompt: 'Manakah contoh lafal Al-Qur\'an yang mengandung hukum Ikhfa Syafawi?',
    options: [
      {
        id: '3a',
        text: 'تَرْمِيهِمْ بِحِجَارَةٍ (Mim Sukun bertemu huruf Ba)',
        isCorrect: true,
        explanation: 'Luar biasa! Mim Sukun (مْ) bertemu huruf Ba (ب) dibaca samar dengan dengung 2 harakat.'
      },
      {
        id: '3b',
        text: 'هُمْ فِيهَا (Mim Sukun bertemu huruf Fa)',
        isCorrect: false,
        explanation: 'Salah! Mim Sukun bertemu Fa adalah hukum Idzhar Syafawi.'
      },
      {
        id: '3c',
        text: 'لَهُمْ مَا (Mim Sukun bertemu huruf Mim)',
        isCorrect: false,
        explanation: 'Salah! Mim Sukun bertemu Mim adalah hukum Idgham Mimi.'
      }
    ]
  },
  {
    id: 4,
    title: 'Babak 4: Tarikan Idgham Mimi',
    scenarioTitle: 'Tantangan Peleburan Mim Sukun',
    scenarioStory: 'Timmu tinggal satu tarikan lagi menuju garis finis! Selesaikan pertanyaan Idgham Mimi ini.',
    questionPrompt: 'Apakah yang terjadi saat Mim Sukun (مْ) bertemu dengan huruf Mim (م)?',
    options: [
      {
        id: '4a',
        text: 'Terjadi Idgham Mimi ➔ Mim pertama dilebur ke Mim kedua dengan dengung 2 harakat.',
        isCorrect: true,
        explanation: 'Tepat sekali! Idgham Mimi (Mitslain) meleburkan Mim sukun ke Mim berikutnya disertai dengung.'
      },
      {
        id: '4b',
        text: 'Dibaca dipantulkan dengan keras (Qalqalah).',
        isCorrect: false,
        explanation: 'Salah! Mim Sukun tidak pernah dibaca pantul (qalqalah).'
      },
      {
        id: '4c',
        text: 'Dibaca samar tanpa menyentuhkan kedua bibir.',
        isCorrect: false,
        explanation: 'Salah! Idgham Mimi dibaca melebur dengan bibir tetap rapat.'
      }
    ]
  },
  {
    id: 5,
    title: 'Babak Final: Tarikan Juara Surat Al-\'Asr',
    scenarioTitle: 'Tantangan 4 Syarat Keberhasilan Hidup',
    scenarioStory: 'Babak Penentu Kemenangan Tarik Tambang! Tunjukkan pemahamanmu tentang pesan pokok Surat Al-\'Asr.',
    questionPrompt: 'Manakah empat syarat agar manusia TIDAK MENGALAMI KERUGIAN menurut Surah Al-\'Asr Ayat 3?',
    options: [
      {
        id: '5a',
        text: 'Beriman, beramal saleh, saling menasihati dalam kebenaran, dan saling menasihati dalam kesabaran.',
        isCorrect: true,
        explanation: 'Juara! Inilah 4 pilar keselamatan manusia yang terkandung dalam Surah Al-\'Asr Ayat 3.'
      },
      {
        id: '5b',
        text: 'Memiliki banyak harta, menjadi pemimpin kaya, membeli banyak gawai, dan jarang belajar.',
        isCorrect: false,
        explanation: 'Salah! Harta tanpa iman dan amal saleh tidak menyelamatkan manusia.'
      },
      {
        id: '5c',
        text: 'Hanya fokus beribadah sendiri tanpa peduli pada teman lain.',
        isCorrect: false,
        explanation: 'Salah! Surat Al-\'Asr mewajibkan saling menasihati dalam kebenaran dan kesabaran.'
      }
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
    question: 'Al-Qur\'an diturunkan Allah Swt. sebagai pedoman hidup. Berdasarkan Hadits Riwayat Bukhari, predikat "sebaik-baik manusia" diberikan kepada orang yang...',
    options: [
      'A. Memiliki hafalan Al-Qur\'an terbanyak tanpa memahami artinya',
      'B. Mempelajari Al-Qur\'an dan mengajarkannya kepada orang lain',
      'C. Membeli kitab Al-Qur\'an termahal untuk dipajang',
      'D. Membaca Al-Qur\'an hanya saat menjelang ujian sekolah'
    ],
    correctAnswerIndex: 1,
    explanation: 'HR. Bukhari menegaskan: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur\'an dan mengajarkannya."'
  },
  {
    id: 2,
    question: 'Perhatikan kalimat Al-Qur\'an berikut:\n"إِنَّ اللَّهَ غَفُورٌ"\nKalimat di atas terdiri atas susunan kata bersambung sebanyak...',
    arabic: 'إِنَّ اللَّهَ غَفُورٌ',
    options: [
      'A. 2 Kata',
      'B. 3 Kata',
      'C. 4 Kata',
      'D. 5 Kata'
    ],
    correctAnswerIndex: 1,
    explanation: 'Terdiri atas 3 kata: إِنَّ (Inna) + اللَّهَ (Allāha) + غَفُورٌ (Gafūr).'
  },
  {
    id: 3,
    question: 'Ketika menulis huruf hijaiyah bersambung di buku tulis, aturan utama arah penulisan yang benar adalah...',
    options: [
      'A. Dari kiri ke kanan seperti bahasa Indonesia',
      'B. Dari atas ke bawah dari tengah halaman',
      'C. Dari kanan ke kiri dengan memperhatikan bentuk awal, tengah, dan akhir',
      'D. Bebas dari mana saja yang disukai murid'
    ],
    correctAnswerIndex: 2,
    explanation: 'Penulisan huruf Arab/hijaiyah dimulai dari kanan ke kiri.'
  },
  {
    id: 4,
    question: 'Perhatikan potongan ayat berikut:\n"هُمْ فِيهَا"\nHukum bacaan tajwid pada potongan ayat di atas adalah Idzhar Syafawi karena...',
    arabic: 'هُمْ فِيهَا',
    options: [
      'A. Mim Sukun bertemu dengan huruf Ba (ب)',
      'B. Mim Sukun bertemu dengan huruf Mim (م)',
      'C. Mim Sukun bertemu dengan huruf Fa (ف)',
      'D. Nun Sukun bertemu dengan huruf Ya (ي)'
    ],
    correctAnswerIndex: 2,
    explanation: 'Mim Sukun bertemu huruf Fa (ف) tergolong Idzhar Syafawi (dibaca jelas tanpa dengung).'
  },
  {
    id: 5,
    question: 'Cara membaca hukum tajwid "Ikhfa Syafawi" yang paling tepat saat Mim Sukun bertemu huruf Ba (ب) adalah...',
    options: [
      'A. Membaca Mim dengan suara jelas dan dipantulkan keras',
      'B. Membaca Mim dengan samar-samar disertai dengung 2 harakat',
      'C. Menghilangkan bunyi Mim sama sekali tanpa disentuhkan bibir',
      'D. Membaca dengan cepat tanpa menahan suara'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ikhfa Syafawi dibaca samar dengan bibir merapat halus disertai dengung 2 harakat.'
  },
  {
    id: 6,
    question: 'Ahmad sedang membaca Surah Al-Fil ayat 2:\n"تَرْمِيهِمْ بِحِجَارَةٍ"\nHukum bacaan tajwid pada lafal yang bergaris bawah tersebut adalah...',
    arabic: 'تَرْمِيهِمْ بِحِجَارَةٍ',
    options: [
      'A. Idzhar Syafawi',
      'B. Ikhfa Syafawi',
      'C. Idgham Mimi (Mitslain)',
      'D. Idzhar Halqi'
    ],
    correctAnswerIndex: 1,
    explanation: 'Mim Sukun (مْ) pada tarmīhim bertemu huruf Ba (ب) pada biḥijāratin tergolong Ikhfa Syafawi.'
  },
  {
    id: 7,
    question: 'Apabila dalam sebuah ayat Al-Qur\'an ditemukan Mim Sukun (مْ) bertemu dengan huruf Mim (م), maka hukum bacaannya adalah Idgham Mimi. Cara membacanya adalah...',
    options: [
      'A. Mim pertama dibaca jelas lalu berhenti sejenak',
      'B. Mim pertama dileburkan ke Mim kedua disertai dengung 2 harakat',
      'C. Dibaca samar tanpa menempelkan kedua bibir',
      'D. Dibaca panjang hingga 6 harakat'
    ],
    correctAnswerIndex: 1,
    explanation: 'Idgham Mimi membunyikan Mim sukun dilebur ke Mim kedua dengan dengung 2 harakat.'
  },
  {
    id: 8,
    question: 'Surah Al-\'Asr merupakan surat ke-103 dalam Al-Qur\'an yang tergolong surat Makkiyah. Nama "Al-\'Asr" memiliki arti...',
    options: [
      'A. Pertolongan Allah Swt.',
      'B. Masa atau Waktu',
      'C. Pembukaan Kitab',
      'D. Hari Kiamat'
    ],
    correctAnswerIndex: 1,
    explanation: 'Al-\'Asr secara bahasa berarti masa atau waktu.'
  },
  {
    id: 9,
    question: 'Berdasarkan Surah Al-\'Asr Ayat 2, Allah Swt. menegaskan bahwa pada dasarnya seluruh manusia berada dalam "kerugian", KECUALI orang yang...',
    options: [
      'A. Memiliki jabatan tinggi dan harta melimpah',
      'B. Beriman, beramal saleh, serta saling menasihati dalam kebenaran dan kesabaran',
      'C. Selalu sibuk bekerja tanpa sempat beribadah',
      'D. Hanya pintar dalam pelajaran umum di sekolah'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ayat 3 menjelaskan 4 syarat orang yang selamat dari kerugian: beriman, beramal saleh, nasihat kebenaran & kesabaran.'
  },
  {
    id: 10,
    question: 'Nabila melihat temannya hendak menyontek saat ujian PAI. Sikap Nabila yang mencerminkan pengamalan Surah Al-\'Asr Ayat 3 adalah...',
    options: [
      'A. Membiarkannya saja agar temannya mendapat nilai bagus',
      'B. Mengingatkan temannya secara santun agar tidak menyontek karena jujur itu perintah Allah',
      'C. Ikut menyontek bersama temannya',
      'D. Dimusuhi dan diejek di depan umum'
    ],
    correctAnswerIndex: 1,
    explanation: 'Mengingatkan teman agar tidak menyontek secara santun merupakan pengamalan "saling menasihati dalam kebenaran".'
  }
];

// B. PILIHAN GANDA KOMPLEKS (10 Soal)
export const EVALUASI_P1_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Pilihlah PERNYATAAN YANG BENAR TENTANG TATA CARA MEMBACA AL-QUR\'AN DENGAN TARTIL! (Pilih lebih dari satu)',
    options: [
      'A. Membaca dengan perlahan dan tenang',
      'B. Memperhatikan makhraj dan sifat setiap huruf',
      'C. Mematuhi hukum-hukum tajwid seperti panjang pendek dan dengung',
      'D. Membaca secepat mungkin agar cepat khatam'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Tartil berarti membaca perlahan, memperhatikan makhraj, dan mematuhi hukum tajwid.'
  },
  {
    id: 2,
    question: 'Manakah HURUF-HURUF HIJAIYAH YANG BENTUKNYA BERUBAH SAAT DIKETIK/DITULIS DI AWAL KATA? (Pilih lebih dari satu)',
    options: [
      'A. ب (Ba menjadi بـ)',
      'B. ت (Ta menjadi تـ)',
      'C. ج (Jim menjadi جـ)',
      'D. ا (Alif bersambung ke kiri)'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Ba, Ta, dan Jim dapat menyambung ke kiri (bـ, tـ, jـ). Alif tidak dapat menyambung ke kiri.'
  },
  {
    id: 3,
    question: 'Pilihlah CONTOH LAFAL AL-QUR\'AN YANG MENGANDUNG HUKUM IDZHAR SYAFAWI! (Pilih lebih dari satu)',
    options: [
      'A. هُمْ فِيهَا (Mim Sukun bertemu Fa)',
      'B. عَلَيْهِمْ قَوْمٌ (Mim Sukun bertemu Qaf)',
      'C. كَمْ خَلَقْنَا (Mim Sukun bertemu Kha)',
      'D. تَرْمِيهِمْ بِحِجَارَةٍ (Mim Sukun bertemu Ba)'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Mim Sukun bertemu Fa, Qaf, dan Kha adalah Idzhar Syafawi. Bertemu Ba adalah Ikhfa Syafawi.'
  },
  {
    id: 4,
    question: 'Manakah CIRI-CIRI BACAAN HUKUM IKHFA SYAFAWI? (Pilih lebih dari satu)',
    options: [
      'A. Terjadi saat Mim Sukun bertemu huruf Ba (ب)',
      'B. Membaca suara Mim secara samar-samar',
      'C. Membaca dengan dengung (ghunnah) selama 2 harakat',
      'D. Membaca dengan suara jelas dan bibir tidak menempel'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Ikhfa Syafawi: Mim sukun bertemu Ba, dibaca samar + dengung 2 harakat.'
  },
  {
    id: 5,
    question: 'Pilihlah CONTOH LAFAL AL-QUR\'AN YANG MENGANDUNG HUKUM IDGHAM MIMI (MITSLAIN)! (Pilih lebih dari satu)',
    options: [
      'A. لَهُمْ مَا (Mim Sukun bertemu Mim)',
      'B. كَمْ مِنْ (Mim Sukun bertemu Mim)',
      'C. عَلَيْهِمْ مَا (Mim Sukun bertemu Mim)',
      'D. هُمْ بِهَا (Mim Sukun bertemu Ba)'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Idgham Mimi terjadi saat Mim Sukun bertemu huruf Mim (م).'
  },
  {
    id: 6,
    question: 'Manakah EMPAT SYARAT AGAR MANUSIA TIDAK RUGI DALAM SURAT AL-\'ASR? (Pilih lebih dari satu)',
    options: [
      'A. Beriman kepada Allah Swt.',
      'B. Mengerjakan kebajikan / beramal saleh',
      'C. Saling menasihati dalam kebenaran dan kesabaran',
      'D. Mengumpulkan harta kekayaan sebanyak-banyaknya'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Ayat 3 menyebutkan 4 pilar: Beriman, beramal saleh, nasihat kebenaran & kesabaran.'
  },
  {
    id: 7,
    question: 'Pilihlah CONTOH AMAL SALEH BAGI MURID KELAS 5 SD DI SEKOLAH! (Pilih lebih dari satu)',
    options: [
      'A. Melaksanakan tugas piket kebersihan kelas',
      'B. Membantu teman yang kesulitan memahami pelajaran',
      'C. Menghormati dan menyapa guru dengan santun',
      'D. Mencontek jawaban teman saat ulangan'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Piket, membantu teman, dan menghormati guru adalah contoh amal saleh.'
  },
  {
    id: 8,
    question: 'Manakah CONTOH PERILAKU "SALING MENASIHATI DALAM KESABARAN"? (Pilih lebih dari satu)',
    options: [
      'A. Menguatkan teman yang sedang sedih agar sabar menghadapi musibah',
      'B. Mengingatkan sahabat agar sabar dan tekun saat mempelajari materi pelajaran yang sulit',
      'C. Menasihati teman agar tetap bersabar menjalankan salat berjamaah tepat waktu',
      'D. Mengajak teman membalas ejekan dengan kekerasan'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Saling menasihati dalam kesabaran meliputi sabar musibah, belajar, dan ibadah.'
  },
  {
    id: 9,
    question: 'Pilihlah BENTUK KERUGIAN MANUSIA YANG TIDAK MEMANFAATKAN WAKTU SESUAI SURAT AL-\'ASR! (Pilih lebih dari satu)',
    options: [
      'A. Kehilangan kesempatan untuk berbuat baik dan menuntut ilmu',
      'B. Penyesalan di masa depan karena waktu terbuang sia-sia',
      'C. Makin jauh dari petunjuk dan keridaan Allah Swt.',
      'D. Mendapat hadiah dan pujian dari teman'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Kerugian akibat menyia-nyiakan waktu meliputi hilangnya kebaikan, penyesalan, dan jauh dari Allah.'
  },
  {
    id: 10,
    question: 'Manakah HIKMAH MEMPELAJARI TATA CARA MEMBACA MIM SUKUN DAN SURAT AL-\'ASR? (Pilih lebih dari satu)',
    options: [
      'A. Bacaan Al-Qur\'an menjadi fasih, indah, dan sesuai tajwid',
      'B. Mendorong murid menjadi pribadi yang disiplin menghargai waktu',
      'C. Membentuk karakter murid yang gemar beramal saleh dan peduli sesama',
      'D. Menjadi murid yang sombong dengan keahliannya'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Mempelajari tajwid & Al-\'Asr membuat bacaan fasih, waktu disiplin, dan gemar beramal saleh.'
  }
];

// C. MENJODOHKAN (5 Soal)
export const EVALUASI_P1_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Idzhar Syafawi',
    leftArabic: 'إِظْهَار شَفَوِي',
    rightText: 'Mim Sukun bertemu selain Mim & Ba ➔ Dibaca jelas tanpa dengung'
  },
  {
    id: 2,
    leftText: 'Ikhfa Syafawi',
    leftArabic: 'إِخْفَاء شَفَوِي',
    rightText: 'Mim Sukun bertemu huruf Ba (ب) ➔ Dibaca samar dengan dengung 2 harakat'
  },
  {
    id: 3,
    leftText: 'Idgham Mimi (Mitslain)',
    leftArabic: 'إِدْغَام مِيمِي',
    rightText: 'Mim Sukun bertemu huruf Mim (م) ➔ Dileburkan dengan dengung 2 harakat'
  },
  {
    id: 4,
    leftText: 'Al-\'Asr',
    leftArabic: 'العَصْر',
    rightText: 'Surat ke-103 dalam Al-Qur\'an yang artinya Masa atau Waktu'
  },
  {
    id: 5,
    leftText: 'Tartil',
    leftArabic: 'تَرْتِيْل',
    rightText: 'Membaca Al-Qur\'an secara perlahan, jelas makhraj, dan sesuai hukum tajwid'
  }
];

// D. BENAR ATAU SALAH DISERTAI ALASANNYA (10 Soal)
export const EVALUASI_P1_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Semua huruf hijaiyah dapat disambung dengan huruf sesudahnya di sebelah kiri.',
    isTrue: false,
    explanation: 'SALAH. Ada 6 huruf yang tidak bisa menyambung ke kiri, yaitu Alif (ا), Dal (د), Dzal (ذ), Ra (ر), Zai (ز), dan Wau (و).'
  },
  {
    id: 2,
    statement: 'Hukum Idzhar Syafawi terjadi apabila Mim Sukun bertemu dengan huruf Mim dan Ba.',
    isTrue: false,
    explanation: 'SALAH. Idzhar Syafawi terjadi bila Mim Sukun bertemu huruf SELAIN Mim dan Ba.'
  },
  {
    id: 3,
    statement: 'Pada lafal تَرْمِيهِمْ بِحِجَارَةٍ terdapat hukum Ikhfa Syafawi yang dibaca samar disertai dengung 2 harakat.',
    isTrue: true,
    explanation: 'BENAR. Mim Sukun bertemu huruf Ba (ب) tergolong Ikhfa Syafawi.'
  },
  {
    id: 4,
    statement: 'Idgham Mimi terjadi apabila Mim Sukun bertemu dengan huruf Mim.',
    isTrue: true,
    explanation: 'BENAR. Pertemuan Mim Sukun dengan Mim dinamakan Idgham Mimi / Mitslain.'
  },
  {
    id: 5,
    statement: 'Surah Al-\'Asr terdiri dari 5 ayat dan diturunkan di Kota Madinah.',
    isTrue: false,
    explanation: 'SALAH. Surah Al-\'Asr terdiri dari 3 ayat dan tergolong surat Makkiyah (turun di Makkah).'
  },
  {
    id: 6,
    statement: 'Mengamalkan Surah Al-\'Asr Ayat 1 mengajarkan kita agar menghargai setiap detik waktu untuk kegiatan bermanfaat.',
    isTrue: true,
    explanation: 'BENAR. Sumpah demi masa menunjukkan pentingnya menghargai nikmat waktu.'
  },
  {
    id: 7,
    statement: 'Orang yang beriman dan beramal saleh termasuk kelompok manusia yang merugi menurut Surah Al-\'Asr.',
    isTrue: false,
    explanation: 'SALAH. Orang beriman dan beramal saleh adalah kelompok yang SELAMAT dari kerugian.'
  },
  {
    id: 8,
    statement: 'Mengingatkan teman agar melaksanakan salat berjamaah merupakan pengamalan "saling menasihati dalam kebenaran".',
    isTrue: true,
    explanation: 'BENAR. Mengajak pada ibadah dan kebaikan adalah pilar ketiga Surah Al-\'Asr.'
  },
  {
    id: 9,
    statement: 'Menasihati teman harus dilakukan dengan cara marah-marah dan membentak di depan umum.',
    isTrue: false,
    explanation: 'SALAH. Menasihati harus dilakukan secara santun, sopan, dan penuh kasih sayang.'
  },
  {
    id: 10,
    statement: 'Sabar dalam menuntut ilmu berarti pantang menyerah saat menghadapi pelajaran yang sulit.',
    isTrue: true,
    explanation: 'BENAR. Sabar belajar adalah bagian dari pengamalan "saling menasihati dalam kesabaran".'
  }
];

// E. SOAL URAIAN (5 Soal)
export const EVALUASI_P1_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan 3 hukum bacaan Mim Sukun (مْ) beserta syarat huruf dan contoh lafalnya masing-masing!',
    rubric: 'Skor 20: Menjelaskan Idzhar Syafawi (selain mim/ba), Ikhfa Syafawi (ketemu ba), dan Idgham Mimi (ketemu mim) beserta contoh lafalnya secara tepat.',
    sampleAnswer: '3 Hukum Bacaan Mim Sukun:\n1. Idzhar Syafawi: Mim Sukun bertemu selain Mim dan Ba ➔ Dibaca jelas tanpa dengung. Contoh: هُمْ فِيهَا.\n2. Ikhfa Syafawi: Mim Sukun bertemu huruf Ba (ب) ➔ Dibaca samar + dengung 2 harakat. Contoh: تَرْمِيهِمْ بِحِجَارَةٍ.\n3. Idgham Mimi: Mim Sukun bertemu huruf Mim (م) ➔ Dileburkan + dengung 2 harakat. Contoh: لَهُمْ مَا.'
  },
  {
    id: 2,
    question: 'Tuliskan lafal Surah Al-\'Asr Ayat 1-3 beserta artinya secara lengkap!',
    rubric: 'Skor 20: Menuliskan bacaan latin/arab 3 ayat Surah Al-\'Asr beserta artinya secara benar.',
    sampleAnswer: 'Surah Al-\'Asr Ayat 1-3:\n1. وَالْعَصْرِ (Wal-\'aṣr) = "Demi masa."\n2. إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ (Innal-insāna lafī khusr) = "Sesungguhnya manusia benar-benar berada dalam kerugian."\n3. إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ (Illallażīna āmanū wa \'amiluṣ-ṣāliḥāti wa tawāṣau bil-ḥaqqi wa tawāṣau biṣ-ṣabr) = "Kecuali orang-orang yang beriman, mengerjakan kebajikan, serta saling menasihati dalam kebenaran dan saling menasihati dalam kesabaran."'
  },
  {
    id: 3,
    question: 'Jelaskan 4 pilar/syarat agar manusia tidak mengalami kerugian hidup berdasarkan Surah Al-\'Asr Ayat 3!',
    rubric: 'Skor 20: Menyebutkan 4 syarat: Beriman, beramal saleh, saling menasihati dalam kebenaran, dan saling menasihati dalam kesabaran.',
    sampleAnswer: '4 Syarat Selamat dari Kerugian:\n1. Beriman kepada Allah Swt.: Memiliki akidah yang lurus dan yakin pada pilar Rukun Iman.\n2. Mengerjakan Amal Saleh: Melakukan perbuatan baik ikhlas seperti shalat, belajar, dan membantu sesama.\n3. Saling Menasihati dalam Kebenaran: Mengajak orang lain kepada kebaikan dan aturan agama.\n4. Saling Menasihati dalam Kesabaran: Saling menguatkan dalam bersabar menghadapi ujian, belajar, dan ibadah.'
  },
  {
    id: 4,
    question: 'Jelaskan tahapan langkah dalam belajar membaca dan menulis huruf hijaiyah bersambung 3 kata atau lebih!',
    rubric: 'Skor 20: Menyebutkan tahapan kenali huruf, harakat, kata per kata, sambung 3 kata, dan menulis dari kanan ke kiri.',
    sampleAnswer: 'Tahapan Membaca & Menulis Huruf Hijaiyah Bersambung:\n1. Mengenali bentuk huruf tunggal dan perubahan bentuknya (awal, tengah, akhir).\n2. Mengenali tanda baca / harakat.\n3. Membaca/menulis kata demi kata.\n4. Membaca/menulis rangkaian 3 kata berurutan secara lancar dari kanan ke kiri.\n5. Membaca/menulis ayat utuh dengan fasih dan rapi.'
  },
  {
    id: 5,
    question: 'Bagaimanakah cara kamu menerapkan pesan pokok Surah Al-\'Asr dalam mengelola waktu sehari-hari di rumah dan sekolah? Berikan 3 contoh konkritnya!',
    rubric: 'Skor 20: Merumuskan manajemen waktu belajar, ibadah, membantu orang tua, dan membatasi bermain gawai.',
    sampleAnswer: 'Cara Menerapkan Pesan Surah Al-\'Asr:\n1. Mengatur Jadwal Harian: Datang ke sekolah tepat waktu, belajar tekun, dan membatasi waktu bermain gawai.\n2. Disiplin Ibadah: Melaksanakan shalat 5 waktu tepat waktu dan rajin membaca Al-Qur\'an.\n3. Beramal Saleh & Menasihati: Membantu pekerjaan orang tua di rumah serta mengingatkan teman agar tidak menunda tugas sekolah.'
  }
];
