// Data Lengkap Kelas 4 Pembelajaran 5 berdasarkan PDF Resmi BAB 5:
// Kisah Nabi Muhammad saw. Diangkat Menjadi Rasul dan Dakwah Periode Makkah

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
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 4 PEMBELAJARAN 5)
// =========================================================================
export const KELAS4_P5_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Kondisi Masyarakat Arab Sebelum Islam (Masa Jahiliah)',
    subtitle: 'Kebodohan Akidah, Akhlak, dan Tata Kehidupan',
    iconName: 'AlertTriangle',
    points: [
      '• Sebelum Nabi Muhammad saw. diangkat menjadi rasul, masyarakat Arab berada pada masa Jahiliah.',
      '• Kata "Jahiliah" berarti kebodohan, yaitu kebodohan dalam akidah, akhlak, dan tata kehidupan.',
      '• Kebiasaan buruk masyarakat Jahiliah:',
      '  - Menyembah berhala patung buatan manusia.',
      '  - Berjudi dan meminum minuman keras (khamr).',
      '  - Saling bermusuhan dan berperang antarsuku.',
      '  - Menindas kaum lemah dan tidak menghargai kaum perempuan.',
      '• Walaupun demikian, masih ada sebagian kecil masyarakat yang menjaga akhlak baik dan nilai kemanusiaan.'
    ],
    highlightBox: {
      title: '💡 Makna Utusan Rahmat',
      content: 'Allah Swt. mengutus Nabi Muhammad saw. sebagai rahmat bagi seluruh alam (Rahmatan lil \'Alamin) untuk mengubah kehidupan manusia menuju jalan kebenaran.',
      type: 'info'
    }
  },
  {
    id: 2,
    title: '2. Nabi Muhammad saw. Sebelum Menjadi Rasul',
    subtitle: 'Kelahiran, Sifat Mulia, dan Gelar Al-Amin',
    iconName: 'Heart',
    points: [
      '• Nabi Muhammad saw. lahir di Kota Makkah pada 12 Rabiulawal Tahun Gajah.',
      '• Sejak kecil beliau dikenal sebagai anak yang jujur, santun, penyayang, dan bertanggung jawab.',
      '• Karena kejujurannya yang luar biasa, masyarakat Makkah memberikan gelar Al-Amin, yang berarti "Orang yang Dapat Dipercaya".',
      '• Perilaku Terpuji Beliau:',
      '  - Selalu berkata jujur dan menepati janji.',
      '  - Menghormati orang tua dan menyayangi anak-anak serta fakir miskin.',
      '  - Tidak pernah menyembah berhala sama sekali.',
      '• Menjelang usia 40 tahun, beliau sering menyendiri (bertaḥannuth) di Gua Hira untuk beribadah dan merenungkan kebesaran Allah Swt.'
    ]
  },
  {
    id: 3,
    title: '3. Peristiwa Turunnya Wahyu Pertama di Gua Hira',
    subtitle: 'Awal Diangkatnya Nabi Muhammad saw. Sebagai Rasulullah',
    iconName: 'BookOpen',
    points: [
      '• Waktu Peristiwa: Pada usia 40 tahun, tepatnya malam 17 Ramadan di Gua Hira.',
      '• Allah Swt. mengutus Malaikat Jibril membawa wahyu pertama, yaitu lima ayat pertama Surah Al-\'Alaq.',
      '• Perintah Pertama: Malaikat Jibril mendekap Nabi dan berkata "اقْرَأْ" (Iqra\' / Bacalah!).',
      '• Nabi Muhammad saw. menjawab bahwa beliau tidak dapat membaca. Perintah tersebut diulang sebanyak 3 kali.',
      '• Peristiwa ini menandai diangkatnya Nabi Muhammad saw. secara resmi sebagai rasul terakhir penutup para nabi.'
    ],
    arabicExamples: [
      {
        arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
        latin: 'Iqra\' bismi rabbikallażī khalaq',
        meaning: 'Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan.',
        note: 'Q.S. Al-\'Alaq: 1'
      }
    ]
  },
  {
    id: 4,
    title: '4. Dukungan Khadijah dan Penjelasan Waraqah bin Naufal',
    subtitle: 'Ketenangan Rumah Tangga dan Ketaatan Istri Salehah',
    iconName: 'ShieldCheck',
    points: [
      '• Setelah menerima wahyu pertama, Nabi Muhammad saw. pulang ke rumah dengan perasaan terharu dan gemetar.',
      '• Istri beliau, Khadijah binti Khuwailid, menenangkan Nabi dan meyakinkan bahwa Allah Swt. tidak akan membiarkan orang yang selalu berbuat baik.',
      '• Khadijah mengajak Nabi menemui Waraqah bin Naufal, seorang ulama yang memahami kitab-kitab terdahulu (Taurat dan Injil).',
      '• Waraqah menegaskan bahwa malaikat yang datang adalah An-Namus (Malaikat Jibril) yang pernah datang kepada Nabi Musa a.s.'
    ]
  },
  {
    id: 5,
    title: '5. Dakwah Secara Sembunyi-Sembunyi (3 Tahun)',
    subtitle: 'As-Sabiqunal Awwalun dan Pembinaan di Rumah Al-Arqam',
    iconName: 'Users',
    points: [
      '• Pada tahap awal, Rasulullah saw. berdakwah secara sembunyi-sembunyi selama kurang lebih 3 tahun.',
      '• Orang-orang pertama yang memeluk agama Islam (As-Sabiqunal Awwalun):',
      '  1. Khadijah binti Khuwailid (Istri Nabi - Wanita pertama masuk Islam).',
      '  2. Ali bin Abi Thalib (Sepupu Nabi - Anak-anak pertama masuk Islam).',
      '  3. Zaid bin Haritsah (Pelayan/Bekas budak Nabi).',
      '  4. Abu Bakar Ash-Shiddiq (Sahabat karib Nabi - Pria dewasa pertama).',
      '• Tempat Pembinaan: Rumah Al-Arqam bin Abil Arqam menjadi pusat dakwah dan pengajaran Islam pertama.'
    ]
  },
  {
    id: 6,
    title: '6. Dakwah Secara Terang-Terangan di Kota Makkah',
    subtitle: 'Seruan Tauhid dan Penolakan Pemimpin Quraisy',
    iconName: 'Megaphone',
    points: [
      '• Setelah turun perintah Allah Swt., Rasulullah saw. mulai berdakwah secara terbuka di Bukit Shafa kepada masyarakat Makkah.',
      '• Ajaran Utama Dakwah Rasulullah saw.:',
      '  - Menyembah Allah Swt. semata dan meninggalkan berhala.',
      '  - Berlaku jujur, menghormati sesama, dan menolong fakir miskin.',
      '  - Menjaga tali persaudaraan dan kesetaraan derajat manusia.',
      '• Penolakan Kaum Quraisy: Pemimpin Quraisy menolak keras karena takut kehilangan kekuasaan, pengaruh, dan tradisi nenek moyang.'
    ]
  },
  {
    id: 7,
    title: '7. Ujian dan Tantangan Berat Dakwah Periode Makkah',
    subtitle: 'Kesabaran Tinggi Rasulullah saw. dan Para Sahabat',
    iconName: 'ShieldAlert',
    points: [
      '• Cobaan dan Ujian dari Kaum Kafir Quraisy:',
      '  - Diejek, dihina, dan dituduh sebagai penyihir/orang gila.',
      '  - Dilempari kotoran saat sedang shalat.',
      '  - Diancam akan dibunuh dan diboikot secara ekonomi selama 3 tahun.',
      '  - Para sahabat disiksa dengan kejam (seperti Bilal bin Rabah dan keluarga Yasir).',
      '• Sikap Rasulullah saw.: Tetap bersabar, tidak membalas keburukan dengan keburukan, dan berdakwah dengan kasih sayang serta hikmah.'
    ]
  },
  {
    id: 8,
    title: '8. Empat Sifat Mulia / Wajib Nabi Muhammad saw.',
    subtitle: 'Teladan Utama Akhlak Karakter Anak Saleh',
    iconName: 'Award',
    points: [
      '1. Ṣiddiq (صِدْق) = Jujur. Beliau selalu berkata benar dan tidak pernah berdusta.',
      '2. Amanah (أَمَانَة) = Dapat Dipercaya. Beliau menjaga kepercayaan dan menunaikan janji dengan baik.',
      '3. Tabligh (تَبْلِيْغ) = Menyampaikan. Beliau menyampaikan seluruh wahyu Allah tanpa ada yang disembunyikan.',
      '4. Faṭanah (فَطَانَة) = Cerdas. Beliau memiliki kecerdasan luar biasa dalam memimpin dan menyelesaikan masalah.'
    ],
    tableData: {
      headers: ['Sifat Wajib', 'Makna / Bahasa', 'Perilaku Penerapan Murid SD'],
      rows: [
        ['Ṣiddiq', 'Jujur / Benar', 'Berkata jujur kepada guru dan orang tua'],
        ['Amanah', 'Dapat Dipercaya', 'Menjaga barang titipan & mengerjakan piket'],
        ['Tabligh', 'Menyampaikan', 'Menyampaikan pesan guru/orang tua dengan tepat'],
        ['Faṭanah', 'Cerdas / Bijak', 'Rajin belajar dan bijak membagi waktu']
      ]
    }
  },
  {
    id: 9,
    title: '9. Hikmah Diangkatnya Nabi Muhammad saw. Menjadi Rasul',
    subtitle: 'Pelajaran Berharga Bagi Kehidupan Sehari-hari',
    iconName: 'Sparkles',
    points: [
      '• Allah Swt. selalu memberikan petunjuk kepada manusia melalui para rasul-Nya.',
      '• Kejujuran dan akhlak mulia akan mengangkat derajat seseorang di dunia dan akhirat.',
      '• Kesabaran merupakan kunci utama keberhasilan dalam perjuangan.',
      '• Setiap Muslim harus berani menyampaikan kebenaran dengan cara yang santun.',
      '• Setiap kesulitan pasti akan diikuti kemudahan bagi orang yang beriman dan bertakwa.'
    ]
  },
  {
    id: 10,
    title: '10. Kisah Inspiratif: Menjenguk Tetangga Pelempar Sampah',
    subtitle: 'Dakwah Terkuat Adalah Melalui Akhlak Mulia',
    iconName: 'Smile',
    points: [
      '📖 Kisah Inspiratif Rasulullah saw.:',
      'Suatu hari, seorang tetangga yang membenci Rasulullah saw. sering melemparkan sampah ke jalan yang biasa dilalui beliau. Rasulullah saw. tidak pernah marah ataupun membalas perlakuan tersebut.',
      '',
      'Pada suatu hari, sampah itu tidak ada lagi. Rasulullah saw. justru bertanya tentang keadaan tetangga tersebut. Setelah mengetahui bahwa ia sedang sakit, Rasulullah saw. langsung datang menjenguknya.',
      '',
      'Melihat akhlak mulia dan kasih sayang Rasulullah saw., tetangga itu sangat terharu dan akhirnya memeluk agama Islam. Kisah ini membuktikan bahwa dakwah yang paling kuat adalah melalui akhlak yang baik.'
    ]
  }
];

// =========================================================================
// 2. PENUGASAN PROYEK MURID (2 PjBL + 2 PBL) - Sesuai Kebijakan Guru
// =========================================================================
export const KELAS4_P5_PROJECTS: ProjectTask[] = [
  {
    id: 'p5_pjbl_1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Pohon Silsilah As-Sabiqunal Awwalun & Peta Konsep Dakwah Makkah',
    subtitle: 'Proyek Poster Kreatif Generasi Pertama Pemeluk Islam',
    objective: 'Peserta didik mampu merancang poster visual pohon silsilah As-Sabiqunal Awwalun beserta kronologi dakwah sembunyi-sembunyi dan terang-terangan.',
    steps: [
      '1. Siapkan kertas karton A3, spidol warna, foto/gambar ilustrasi, dan stiker hiasan.',
      '2. Buatlah gambar "Pohon Keimanan" yang memuat tokoh As-Sabiqunal Awwalun (Khadijah, Ali, Zaid, Abu Bakar).',
      '3. Tambahkan penjelasan fungsi Rumah Al-Arqam bin Abil Arqam sebagai pusat pembinaan.',
      '4. Tuliskan 4 sifat mulia Rasulullah saw. (Siddiq, Amanah, Tabligh, Fathanah) di bagian batang pohon.',
      '5. Hias poster dan presentasikan di depan kelas.'
    ],
    output: 'Poster Pohon Silsilah As-Sabiqunal Awwalun A3 Berwarna.',
    teacherNote: 'Kerapian poster, kejelasan silsilah, dan estetika visual disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p5_pjbl_2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Jurnal Aksi "Gelar Al-Amin" 7 Hari di Rumah dan Sekolah',
    subtitle: 'Proyek Pembiasaan Perilaku Jujur dan Dapat Dipercaya',
    objective: 'Peserta didik mampu menerapkan keteladanan sifat Siddiq dan Amanah dalam kehidupan sehari-hari melalui catatan jurnal 7 hari.',
    steps: [
      '1. Buatlah buku saku Jurnal Kejujuran & Amanah 7 Hari.',
      '2. Catatlah setiap tindakan jujur (misal: mengembalikan uang kembalian, berkata jujur saat bersalah) dan tindakan amanah (menjaga piket, menjaga barang titipan teman).',
      '3. Tuliskan refleksi perasaan hati saat bertindak jujur.',
      '4. Mintalah tanda tangan apresiasi dari Orang Tua dan Guru Kelas.',
      '5. Bagikan kisah paling berkesan saat sesi refleksi kelas.'
    ],
    output: 'Buku Saku Jurnal Aksi Al-Amin 7 Hari berstempel/ditandatangani orang tua & guru.',
    teacherNote: 'Kejujuran pengisian jurnal dan penilaian karakter disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p5_pbl_1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Analisis Kasus: "Sikap Murid Ketika Menghadapi Ejekan Teman"',
    subtitle: 'Pemecahan Masalah Meneladani Kesabaran Rasulullah saw.',
    objective: 'Peserta didik mampu menganalisis kasus perundungan/ejekan di sekolah dan merumuskan solusi meneladani kesabaran Rasulullah saw. saat dilempari sampah.',
    steps: [
      '1. Bacalah studi kasus: "Andi diejek oleh temannya karena lupa membawa buku tugas. Andi merasa sangat marah dan berniat membalas melempar tas temannya."',
      '2. Analisis masalah: Mengapa membalas kejahatan dengan kejahatan bukan sikap yang diajarkan Rasulullah saw.?',
      '3. Bandingkan dengan sikap Rasulullah saw. saat menjenguk tetangga yang biasa melempari sampah.',
      '4. Rumuskan 4 langkah bijak menanggapi ejekan tanpa kekerasan (sabar, menasehati dengan santun, mendoakan kebaikan, melapor ke guru).',
      '5. Simulasikan sosiodrama singkat penanganan kasus tersebut.'
    ],
    output: 'Laporan Solusi Kasus & Naskah Sosiodrama Meneladani Kesabaran Nabi.',
    teacherNote: 'Kedalaman analisis moral dan penghayatan peran disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p5_pbl_2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Studi Kasus Kesulitan Memegang Amanah di Kelas',
    subtitle: 'Strategi Menjaga Kepercayaan Guru dan Teman',
    objective: 'Peserta didik mampu menemukan solusi atas permasalahan tidak menepati janji/amanah piket kelas.',
    steps: [
      '1. Amati fenomena di kelas: "Beberapa petugas piket sering kabur sebelum kelas bersih sehingga merugikan teman sekelompok."',
      '2. Identifikasi penyebab utama mengapa seseorang sulit menjaga amanah.',
      '3. Rumuskan "Deklarasi Janji Amanah Kelas 4" yang memuat kesepakatan tanggung jawab bersama.',
      '4. Buatlah Sistem Pembagian Tugas Piket yang Adil dan Menyenangkan.',
      '5. Uji coba penerapan sistem selama 1 minggu di kelas.'
    ],
    output: 'Lembar Deklarasi Janji Amanah & Sistem Piket Adil Kelas 4.',
    teacherNote: 'Kreativitas solusi dan dampak perbaikan di kelas disesuaikan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI INTERAKTIF: PETUALANGAN ANGKASA SIROH NABI MAKKAH
// =========================================================================
export const KELAS4_P5_QUEST_STEPS: QuestStep[] = [
  {
    id: 1,
    title: 'Stasiun 1: Menembus Masa Jahiliah',
    scenarioTitle: 'Tantangan Mengenal Kondisi Arab Sebelum Islam',
    scenarioStory: 'Kapal antariksa Siroh mendarat di Jazirah Arab abad ke-6 M. Suasana dipenuhi kegelapan Jahiliah di mana orang-orang menyembah berhala dan sering bermusuhan.',
    questionPrompt: 'Manakah arti kata "Jahiliah" dan ciri utama masyarakat Arab pada masa tersebut?',
    options: [
      {
        id: '1a',
        text: 'Jahiliah berarti kebodohan akidah dan akhlak, ditandai menyembah berhala, judi, dan menindas kaum lemah.',
        isCorrect: true,
        explanation: 'Benar! Jahiliah berarti kebodohan dalam akidah, akhlak, dan tata kehidupan.'
      },
      {
        id: '1b',
        text: 'Jahiliah berarti masyarakat yang sangat cerdas membaca dan menulis buku-buku ilmiah.',
        isCorrect: false,
        explanation: 'Salah! Jahiliah merujuk pada kebodohan moral dan tauhid.'
      },
      {
        id: '1c',
        text: 'Jahiliah berarti masa di mana seluruh manusia sudah memeluk agama Islam.',
        isCorrect: false,
        explanation: 'Kurang tepat! Islam belum turun pada masa Jahiliah.'
      }
    ]
  },
  {
    id: 2,
    title: 'Stasiun 2: Rahasia Wahyu Gua Hira',
    scenarioTitle: 'Tantangan Peristiwa Malam 17 Ramadan',
    scenarioStory: 'Di atas Puncak Jabal Nur terdapat Gua Hira. Pada malam 17 Ramadan saat usia 40 tahun, Nabi Muhammad saw. didatangi Malaikat Jibril membawa cahaya wahyu pertama.',
    questionPrompt: 'Apakah wahyu pertama yang diturunkan kepada Nabi Muhammad saw.?',
    options: [
      {
        id: '2a',
        text: 'Surah Al-\'Alaq ayat 1-5 dengan perintah "Iqra\'" (Bacalah!).',
        isCorrect: true,
        explanation: 'Sempurna! Wahyu pertama adalah Surah Al-\'Alaq ayat 1-5 diawali kata Iqra\'.'
      },
      {
        id: '2b',
        text: 'Surah Al-Fatihah ayat 1-7 lengkap dengan bacaan Bismillah.',
        isCorrect: false,
        explanation: 'Salah! Surah Al-Fatihah bukan wahyu pertama di Gua Hira.'
      },
      {
        id: '2c',
        text: 'Surah Al-Ikhlas tentang keesaan Allah Swt.',
        isCorrect: false,
        explanation: 'Kurang tepat! Al-Ikhlas turun di periode Makkah kemudian.'
      }
    ]
  },
  {
    id: 3,
    title: 'Stasiun 3: Generasi Pelopor As-Sabiqunal Awwalun',
    scenarioTitle: 'Tantangan Dakwah Sembunyi-Sembunyi',
    scenarioStory: 'Selama 3 tahun, Rasulullah saw. berdakwah secara sembunyi-sembunyi di Rumah Al-Arqam bin Abil Arqam untuk membina kelompok pertama pemeluk Islam.',
    questionPrompt: 'Siapakah wanita pertama yang memeluk agama Islam (As-Sabiqunal Awwalun)?',
    options: [
      {
        id: '3a',
        text: 'Khadijah binti Khuwailid r.a., istri tercinta Rasulullah saw.',
        isCorrect: true,
        explanation: 'Hebat! Khadijah binti Khuwailid adalah wanita pertama yang masuk Islam.'
      },
      {
        id: '3b',
        text: 'Aisyah binti Abu Bakar r.a.',
        isCorrect: false,
        explanation: 'Salah! Aisyah belum lahir/masih kecil saat awal dakwah.'
      },
      {
        id: '3c',
        text: 'Fatimah az-Zahra r.a.',
        isCorrect: false,
        explanation: 'Kurang tepat! Khadijah adalah pemeluk pertama dari kalangan wanita.'
      }
    ]
  },
  {
    id: 4,
    title: 'Stasiun 4: Ketabahan Menghadapi Pemboikotan Quraisy',
    scenarioTitle: 'Tantangan Dakwah Terang-Terangan & Keteguhan Hati',
    scenarioStory: 'Saat dakwah terbuka dimulai, kaum Kafir Quraisy melakukan boikot ekonomi dan sosial selama 3 tahun, menuduh Nabi sebagai penyihir, dan menyiksa sahabat.',
    questionPrompt: 'Bagaimana sikap Rasulullah saw. dalam menghadapi cobaan berat dari Kafir Quraisy?',
    options: [
      {
        id: '4a',
        text: 'Tetap bersabar, mendoakan kebaikan, dan tidak pernah membalas kejahatan dengan kejahatan.',
        isCorrect: true,
        explanation: 'Luar biasa! Nabi selalu bersabar dan berdakwah dengan penuh kasih sayang.'
      },
      {
        id: '4b',
        text: 'Membalas melempari batu dan merusak rumah para pemimpin Quraisy.',
        isCorrect: false,
        explanation: 'Salah! Rasulullah tidak pernah mengajarkan kekerasan atau dendam.'
      },
      {
        id: '4c',
        text: 'Menyerah dan berhenti menyebarkan ajaran agama Islam.',
        isCorrect: false,
        explanation: 'Salah! Nabi pantang menyerah dalam memperjuangkan tauhid.'
      }
    ]
  },
  {
    id: 5,
    title: 'Stasiun 5: Bintang 4 Sifat Wajib Rasulullah',
    scenarioTitle: 'Tantangan Meneladani Sifat Mulia',
    scenarioStory: 'Rasulullah saw. memiliki 4 sifat wajib yang menjadi kunci keberhasilan dakwah dan teladan bagi seluruh murid sekolah.',
    questionPrompt: 'Manakah pasangan sifat wajib Rasulullah saw. dan artinya yang BENAR?',
    options: [
      {
        id: '5a',
        text: 'Ṣiddiq (Jujur), Amanah (Dapat Dipercaya), Tabligh (Menyampaikan), dan Faṭanah (Cerdas).',
        isCorrect: true,
        explanation: 'Benar sekali! Inilah 4 sifat wajib Rasulullah saw. yang wajib kita teladani.'
      },
      {
        id: '5b',
        text: 'Kazib (Dusta), Khianat (Khianat), Kitman (Menyembunyikan), dan Baladah (Bodoh).',
        isCorrect: false,
        explanation: 'Salah! Itu adalah sifat mustahil (mustahil ada pada nabi).'
      },
      {
        id: '5c',
        text: 'Sombong, Pemarah, Pemalas, dan Pengiri.',
        isCorrect: false,
        explanation: 'Salah! Itu adalah sifat tercela yang dilarang agama.'
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
    question: 'Masyarakat Arab sebelum datangnya agama Islam dikenal berada pada masa "Jahiliah". Pengertian yang paling tepat dari kata Jahiliah adalah...',
    options: [
      'A. Ketidakmampuan dalam berdagang dan berlayar',
      'B. Kebodohan dalam akidah, akhlak, dan tata kehidupan',
      'C. Kurangnya jumlah penduduk di Kota Makkah',
      'D. Kebiasaan bercocok tanam di padang pasir'
    ],
    correctAnswerIndex: 1,
    explanation: 'Masa Jahiliah berarti masa kebodohan dalam hal akidah (menyembah berhala), akhlak, dan aturan hidup.'
  },
  {
    id: 2,
    question: 'Masyarakat Makkah memberikan gelar "Al-Amin" kepada Nabi Muhammad saw. sebelum beliau diangkat menjadi rasul karena...',
    options: [
      'A. Memiliki kekayaan harta yang melimpah ruah',
      'B. Selalu berkata jujur, menepati janji, dan sangat dapat dipercaya',
      'C. Berasal dari suku bangsawan yang paling berkuasa',
      'D. Sering memenangkan perlombaan pacuan kuda'
    ],
    correctAnswerIndex: 1,
    explanation: 'Gelar Al-Amin artinya Orang yang Dapat Dipercaya karena sifat kejujuran beliau.'
  },
  {
    id: 3,
    question: 'Peristiwa turunnya wahyu pertama kepada Nabi Muhammad saw. terjadi pada malam 17 Ramadan di Gua Hira saat beliau berusia...',
    options: [
      'A. 25 Tahun',
      'B. 40 Tahun',
      'C. 50 Tahun',
      'D. 63 Tahun'
    ],
    correctAnswerIndex: 1,
    explanation: 'Nabi Muhammad saw. diangkat menjadi rasul saat berusia 40 tahun di Gua Hira.'
  },
  {
    id: 4,
    question: 'Perhatikan potongan ayat Surah Al-\'Alaq berikut:\n"اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ"\nPerintah pertama yang disampaikan Malaikat Jibril kepada Nabi Muhammad saw. melalui ayat tersebut adalah...',
    arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
    options: [
      'A. Berperanglah!',
      'B. Bacalah!',
      'C. Tuliskanlah!',
      'D. Berbagilah!'
    ],
    correctAnswerIndex: 1,
    explanation: 'Kata Iqra\' artinya Bacalah, merupakan perintah menuntut ilmu dan membaca tanda kebesaran Allah Swt.'
  },
  {
    id: 5,
    question: 'Setelah menerima wahyu pertama, Khadijah binti Khuwailid mengajak Nabi Muhammad saw. menemui seorang ulama yang memahami kitab-kitab terdahulu, yaitu...',
    options: [
      'A. Abu Bakar Ash-Shiddiq',
      'B. Waraqah bin Naufal',
      'C. Al-Arqam bin Abil Arqam',
      'D. Mus\'ab bin Umair'
    ],
    correctAnswerIndex: 1,
    explanation: 'Waraqah bin Naufal adalah ulama yang menjelaskan bahwa malaikat yang datang adalah Malaikat Jibril.'
  },
  {
    id: 6,
    question: 'Tahap awal dakwah Nabi Muhammad saw. dilakukan secara sembunyi-sembunyi selama kurang lebih 3 tahun. Pusat pembinaan dakwah pertama bertempat di rumah...',
    options: [
      'A. Abu Bakar Ash-Shiddiq',
      'B. Al-Arqam bin Abil Arqam',
      'C. Umar bin Khattab',
      'D. Ali bin Abi Thalib'
    ],
    correctAnswerIndex: 1,
    explanation: 'Rumah Al-Arqam bin Abil Arqam (Darul Arqam) menjadi pusat pembinaan dakwah awal Islam.'
  },
  {
    id: 7,
    question: 'Istilah "As-Sabiqunal Awwalun" dalam sejarah perkembangan Islam merujuk kepada...',
    options: [
      'A. Pasukan perang yang memenangkan pertempuran Badar',
      'B. Orang-orang yang pertama kali memeluk agama Islam',
      'C. Para pedagang kaya dari Kota Madinah',
      'D. Penduduk Makkah yang menolak ajaran Nabi'
    ],
    correctAnswerIndex: 1,
    explanation: 'As-Sabiqunal Awwalun artinya orang-orang yang pertama masuk agama Islam.'
  },
  {
    id: 8,
    question: 'Berikut ini yang BUKAN merupakan tantangan atau cobaan yang dihadapi Rasulullah saw. selama berdakwah di Makkah adalah...',
    options: [
      'A. Dituduh sebagai penyihir dan orang gila',
      'B. Diboikot secara ekonomi dan sosial selama 3 tahun',
      'C. Diberi hadiah mahkota emas oleh pemimpin Quraisy',
      'D. Dilempari kotoran saat melaksanakan shalat'
    ],
    correctAnswerIndex: 2,
    explanation: 'Kafir Quraisy tidak memberi hadiah mahkota emas, melainkan menyiksa, mengejek, dan memboikot.'
  },
  {
    id: 9,
    question: 'Sifat wajib Rasulullah saw. "Faṭanah" artinya cerdas. Penerapan sifat Faṭanah oleh seorang murid di sekolah ditunjukkan dengan...',
    options: [
      'A. Sering menyontek saat ujian agar mendapat nilai tinggi',
      'B. Rajin belajar, kritis, dan bijak dalam menyelesaikan masalah pelajaran',
      'C. Menyimpan ilmu sendiri dan tidak mau mengajari teman',
      'D. Malas membaca buku pustaka'
    ],
    correctAnswerIndex: 1,
    explanation: 'Fathanah (cerdas) diterapkan dengan rajin belajar dan bijak memecahkan masalah.'
  },
  {
    id: 10,
    question: 'Berdasarkan kisah inspiratif tetangga yang suka melempari sampah, ketika tetangga tersebut sakit, reaksi Rasulullah saw. adalah...',
    options: [
      'A. Bersyukur karena tetangganya mendapat hukuman',
      'B. Datang menjenguknya dengan penuh kasih sayang dan membawa kebaikan',
      'C. Ganti melempari sampahnya ke rumah tetangga tersebut',
      'D. Acuh tak acuh dan tidak peduli'
    ],
    correctAnswerIndex: 1,
    explanation: 'Nabi saw. justru datang menjenguknya dengan kasih sayang sehingga tetangga itu masuk Islam.'
  }
];

// B. PILIHAN GANDA KOMPLEKS (10 Soal)
export const EVALUASI_P5_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Pilihlah PERILAKU BURUK MASYARAKAT JAHILIAH SEBELUM ISLAM DATANG! (Pilih lebih dari satu)',
    options: [
      'A. Menyembah berhala buatan manusia',
      'B. Meminum minuman keras (khamr) dan berjudi',
      'C. Saling berperang dan menindas kaum lemah',
      'D. Rajin mendirikan shalat berjamaah di masjid'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Masa Jahiliah ditandai berhala, judi, khamr, dan penindasan. Shalat masjid belum ada.'
  },
  {
    id: 2,
    question: 'Manakah TOKOH YANG TERMASUK KELOMPOK AS-SABIQUNAL AWWALUN? (Pilih lebih dari satu)',
    options: [
      'A. Khadijah binti Khuwailid',
      'B. Ali bin Abi Thalib',
      'C. Abu Bakar Ash-Shiddiq',
      'D. Abu Lahab'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Khadijah, Ali, Zaid, dan Abu Bakar termasuk As-Sabiqunal Awwalun. Abu Lahab menolak keras.'
  },
  {
    id: 3,
    question: 'Pilihlah PERISTIWA PENTING YANG TERJADI SAAT TURUNNYA WAHYU PERTAMA! (Pilih lebih dari satu)',
    options: [
      'A. Terjadi pada malam 17 Ramadan di Gua Hira',
      'B. Diturunkan melalui perantara Malaikat Jibril',
      'C. Berupa Surah Al-\'Alaq ayat 1-5',
      'D. Diturunkan saat Nabi berusia 63 tahun di Madinah'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Malam 17 Ramadan, usia 40 tahun, Gua Hira, Malaikat Jibril, Surah Al-\'Alaq 1-5.'
  },
  {
    id: 4,
    question: 'Manakah EMPAT SIFAT WAJIB BAGI RASULULLAH SAW.? (Pilih lebih dari satu)',
    options: [
      'A. Ṣiddiq (Jujur)',
      'B. Amanah (Dapat dipercaya)',
      'C. Tabligh (Menyampaikan) & Faṭanah (Cerdas)',
      'D. Kitman (Menyembunyikan) & Khianat'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: '4 Sifat Wajib Nabi: Siddiq, Amanah, Tabligh, Fathanah.'
  },
  {
    id: 5,
    question: 'Pilihlah BENTUK TANTANGAN DAKWAH KAFIR QURAISY DI MAKKAH! (Pilih lebih dari satu)',
    options: [
      'A. Menuduh Nabi sebagai penyihir dan pendusta',
      'B. Memboikot ekonomi dan sosial kaum muslimin',
      'C. Menyiksa para sahabat yang lemah seperti Bilal bin Rabah',
      'D. Menyambut hangat kedatangan ajaran Islam'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Kafir Quraisy menuduh penyihir, memboikot 3 tahun, dan menyiksa sahabat.'
  },
  {
    id: 6,
    question: 'Manakah PERILAKU MENELADANI SIFAT AMANAH DI SEKOLAH? (Pilih lebih dari satu)',
    options: [
      'A. Menjaga dan merawat buku pinjaman perpustakaan',
      'B. Melaksanakan tugas piket kelas dengan penuh tanggung jawab',
      'C. Menyampaikan pesan dari guru kepada orang tua tanpa dikurangi',
      'D. Merusak fasilitas bangku dan meja belajar'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Amanah berarti dapat dipercaya: jaga buku, tugas piket, dan sampaikan pesan.'
  },
  {
    id: 7,
    question: 'Pilihlah AJARAN UTAMA DAKWAH NABI MUHAMMAD SAW. DI MAKKAH! (Pilih lebih dari satu)',
    options: [
      'A. Mengajak menyembah Allah Swt. Yang Maha Esa (Tauhid)',
      'B. Mengajak berlaku jujur dan menyayangi anak yatim/miskin',
      'C. Mengajak meninggalkan penyembahan patung berhala',
      'D. Mengajak berperang membenci suku lain'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Ajaran Nabi menitikberatkan Tauhid, akhlak mulia, dan meninggalkan berhala.'
  },
  {
    id: 8,
    question: 'Manakah HIKMAH DARI KISAH RASULULLAH SAW. MENJENGUK TETANGGA SAKIT? (Pilih lebih dari satu)',
    options: [
      'A. Dakwah dengan akhlak mulia lebih menyentuh hati daripada kekerasan',
      'B. Tidak membalas kejahatan dengan kejahatan',
      'C. Kasih sayang dan kelembutan dapat melunakkan hati musuh',
      'D. Boleh membalas melempar sampah jika disengaja'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Dakwah akhlak mulia, tidak dendam, kasih sayang melunakkan hati.'
  },
  {
    id: 9,
    question: 'Pilihlah PERISTIWA YANG MENUNJUKKAN SIFAT TABLIGH NABI MUHAMMAD SAW.! (Pilih lebih dari satu)',
    options: [
      'A. Menyampaikan seluruh wahyu Allah Swt. tanpa ada yang disembunyikan',
      'B. Berdakwah terang-terangan di Bukit Shafa',
      'C. Mengajarkan ayat-ayat Al-Qur\'an kepada para sahabat di Rumah Al-Arqam',
      'D. Menyimpan ayat wahyu untuk diri sendiri'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Tabligh artinya menyampaikan wahyu tanpa ada yang disembunyikan.'
  },
  {
    id: 10,
    question: 'Manakah HIKMAH DIANGKATNYA NABI MUHAMMAD SAW. MENJADI RASUL? (Pilih lebih dari satu)',
    options: [
      'A. Menjadi petunjuk dan rahmat bagi seluruh alam',
      'B. Mengangkat derajat manusia melalui akhlak mulia dan kejujuran',
      'C. Mengajarkan kesabaran menghadapi setiap ujian hidup',
      'D. Menjadikan manusia semakin sombong dengan kekuasaan'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Nabi diutus sebagai rahmat, pembawa petunjuk, pengangkat derajat akhlak & contoh kesabaran.'
  }
];

// C. MENJODOHKAN (5 Soal)
export const EVALUASI_P5_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Al-Amin',
    leftArabic: 'الأَمِيْن',
    rightText: 'Gelar bagi Nabi Muhammad saw. yang artinya Orang yang Dapat Dipercaya'
  },
  {
    id: 2,
    leftText: 'Jahiliah',
    leftArabic: 'جَاهِلِيَّة',
    rightText: 'Masa kebodohan masyarakat Arab sebelum datangnya agama Islam'
  },
  {
    id: 3,
    leftText: 'As-Sabiqunal Awwalun',
    leftArabic: 'السَّابِقُونَ الأَوَّلُونَ',
    rightText: 'Kelompok orang-orang yang pertama kali memeluk agama Islam'
  },
  {
    id: 4,
    leftText: 'Darul Arqam',
    leftArabic: 'دَارُ الأَرْقَم',
    rightText: 'Rumah sahabat Al-Arqam tempat pusat pembinaan dakwah awal Islam'
  },
  {
    id: 5,
    leftText: 'Siddiq & Fathanah',
    leftArabic: 'صِدْق وَفَطَانَة',
    rightText: 'Sifat wajib Rasulullah saw. yang berarti Jujur dan Cerdas'
  }
];

// D. BENAR ATAU SALAH DISERTAI ALASANNYA (10 Soal)
export const EVALUASI_P5_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Masyarakat Arab Jahiliah sebelum Islam terkenal sangat menghormati dan mengagungkan hak-hak kaum perempuan.',
    isTrue: false,
    explanation: 'SALAH. Pada masa Jahiliah kaum perempuan merugi dan tidak dihargai, bahkan ada kebiasaan mengubur bayi perempuan.'
  },
  {
    id: 2,
    statement: 'Gelar Al-Amin diberikan kepada Nabi Muhammad saw. oleh masyarakat Makkah karena kejujuran dan sifat dapat dipercaya beliau.',
    isTrue: true,
    explanation: 'BENAR. Kejujuran Nabi membuat masyarakat Makkah memberi gelar Al-Amin sejak sebelum diangkat menjadi nabi.'
  },
  {
    id: 3,
    statement: 'Wahyu pertama yang diterima Nabi Muhammad saw. di Gua Hira adalah Surah Al-Fatihah ayat 1-7.',
    isTrue: false,
    explanation: 'SALAH. Wahyu pertama adalah Surah Al-\'Alaq ayat 1-5.'
  },
  {
    id: 4,
    statement: 'Malaikat Jibril menampakkan diri membawa wahyu pertama pada malam 17 Ramadan di Gua Hira.',
    isTrue: true,
    explanation: 'BENAR. Peristiwa peringatan Nuzulul Qur\'an terjadi malam 17 Ramadan di Gua Hira.'
  },
  {
    id: 5,
    statement: 'Khadijah binti Khuwailid adalah wanita pertama yang beriman dan memeluk agama Islam.',
    isTrue: true,
    explanation: 'BENAR. Khadijah r.a. adalah orang pertama yang mempercayai dan memeluk Islam.'
  },
  {
    id: 6,
    statement: 'Dakwah sembunyi-sembunyi dilakukan Rasulullah saw. selama kurang lebih 10 tahun di Kota Madinah.',
    isTrue: false,
    explanation: 'SALAH. Dakwah sembunyi-sembunyi berlangsung selama kurang lebih 3 tahun di Kota Makkah.'
  },
  {
    id: 7,
    statement: 'Pemimpin Kafir Quraisy menolak ajaran Islam karena takut kehilangan pengaruh, kekuasaan, dan tradisi nenek moyang.',
    isTrue: true,
    explanation: 'BENAR. Faktor kekuasaan dan tradisi berhala membuat Kafir Quraisy menolak dakwah.'
  },
  {
    id: 8,
    statement: 'Nabi Muhammad saw. membalas ejekan dan lemparan kotoran Kafir Quraisy dengan cara memerintahkan sahabat menyerang rumah mereka.',
    isTrue: false,
    explanation: 'SALAH. Nabi saw. tidak pernah membalas kejahatan dengan kejahatan, melainkan bersabar dan mendoakan kebaikan.'
  },
  {
    id: 9,
    statement: 'Sifat wajib Tabligh artinya Rasulullah saw. selalu menyampaikan seluruh wahyu Allah Swt. tanpa ada yang disembunyikan.',
    isTrue: true,
    explanation: 'BENAR. Tabligh secara bahasa dan istilah berarti menyampaikan amanah risalah.'
  },
  {
    id: 10,
    statement: 'Ketika tetangga yang biasa melempari sampah sakit, Rasulullah saw. justru datang menjenguknya dan menunjukkan kasih sayang.',
    isTrue: true,
    explanation: 'BENAR. Akhlak terpuji ini membuat tetangga tersebut tersentuh dan memeluk agama Islam.'
  }
];

// E. SOAL URAIAN (5 Soal)
export const EVALUASI_P5_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan kondisi keagamaan dan sosial masyarakat Arab sebelum datangnya Islam (Masa Jahiliah)!',
    rubric: 'Skor 20: Menjelaskan arti Jahiliah (kebodohan akidah/akhlak) dan menyebutkan minimal 3 kebiasaan buruk (berhala, judi, perang, dll).',
    sampleAnswer: 'Masyarakat Arab sebelum Islam berada pada masa Jahiliah (kebodohan akidah dan akhlak).\nKondisi mereka antara lain:\n1. Menyembah berhala patung buatan manusia.\n2. Sering berjudi, meminum khamr, dan berperang antarsuku.\n3. Menindas kaum lemah dan tidak menghargai kaum perempuan.'
  },
  {
    id: 2,
    question: 'Ceritakan secara singkat peristiwa turunnya wahyu pertama kepada Nabi Muhammad saw. di Gua Hira!',
    rubric: 'Skor 20: Menyebutkan waktu (17 Ramadan, usia 40 thn), tempat (Gua Hira), Malaikat Jibril, perintah Iqra\', dan Surah Al-\'Alaq 1-5.',
    sampleAnswer: 'Pada usia 40 tahun saat malam 17 Ramadan di Gua Hira, Malaikat Jibril datang membawa wahyu pertama. Jibril mendekap Nabi dan berkata "Iqra\'" (Bacalah!). Perintah diulang 3 kali dan Jibril membacakan Surah Al-\'Alaq ayat 1-5. Peristiwa ini menandai diangkatnya Nabi Muhammad saw. menjadi Rasulullah.'
  },
  {
    id: 3,
    question: 'Siapakah kelompok "As-Sabiqunal Awwalun"? Sebutkan 4 tokoh pertama pemeluk agama Islam!',
    rubric: 'Skor 20: Menjelaskan arti As-Sabiqunal Awwalun dan menyebutkan Khadijah, Ali, Zaid, dan Abu Bakar.',
    sampleAnswer: 'As-Sabiqunal Awwalun adalah kelompok orang-orang yang pertama kali memeluk agama Islam pada masa dakwah sembunyi-sembunyi.\n4 Tokoh pertamanya:\n1. Khadijah binti Khuwailid (kalangan wanita/istri Nabi).\n2. Ali bin Abi Thalib (kalangan anak-anak/pemuda).\n3. Zaid bin Haritsah (kalangan pelayan/bekas budak).\n4. Abu Bakar Ash-Shiddiq (kalangan pria dewasa/sahabat).'
  },
  {
    id: 4,
    question: 'Tuliskan 4 sifat wajib bagi Rasulullah saw. beserta artinya masing-masing!',
    rubric: 'Skor 20: Menyebutkan Siddiq (Jujur), Amanah (Terpercaya), Tabligh (Menyampaikan), dan Fathanah (Cerdas) secara tepat.',
    sampleAnswer: '4 Sifat Wajib Rasulullah saw.:\n1. Ṣiddiq = Jujur (selalu berkata benar).\n2. Amanah = Dapat dipercaya (menjaga kepercayaan).\n3. Tabligh = Menyampaikan (menyampaikan wahyu Allah).\n4. Faṭanah = Cerdas (memiliki kecerdasan luar biasa).'
  },
  {
    id: 5,
    question: 'Jelaskan hikmah yang dapat kamu petik dari kisah Rasulullah saw. menjenguk tetangga yang biasa melempari beliau sampah, serta bagaimana kamu menerapkannya di sekolah!',
    rubric: 'Skor 20: Mengambil hikmah dakwah akhlak mulia/tidak dendam dan merumuskan penerapan nyata di sekolah.',
    sampleAnswer: 'Hikmah kisah:\n1. Dakwah dan kebaikan paling efektif ditunjukkan melalui akhlak mulia dan kasih sayang, bukan dendam.\n2. Tidak membalas kejahatan dengan kejahatan.\nPenerapan di sekolah: Jika ada teman yang berbuat kurang menyenangkan atau mengejek, saya tidak akan membalasnya dengan kekerasan. Saya akan bersabar, menasehati dengan sopan, dan mendoakan kebaikan.'
  }
];
