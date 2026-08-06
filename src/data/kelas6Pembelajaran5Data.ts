export interface SlideData {
  id: number;
  title: string;
  category: string;
  badge: string;
  content: string;
  arabicText?: string;
  translation?: string;
  bulletPoints?: string[];
  keyTerms?: { term: string; definition: string }[];
  tableData?: { col1: string; col2: string; col3?: string }[];
  quiz?: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  };
}

export interface ProyekData {
  id: number;
  title: string;
  type: 'PjBL' | 'PBL';
  category: string;
  description: string;
  policyNote: string;
  steps: string[];
  output: string;
  assessmentCriteria: string[];
}

export interface GamifikasiMission {
  id: number;
  title: string;
  khalifah: 'Abu Bakar' | 'Umar bin Al-Khattab' | 'Khulafaur Rasyidin';
  scenario: string;
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  computationalConcept: string;
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
  options: string[];
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
  context: string;
  sampleAnswer: string;
}

// ==========================================
// 1. SLIDES PRESENTASI MATERI (15 SLIDES)
// ==========================================
export const SLIDES_KELAS6_P5: SlideData[] = [
  {
    id: 1,
    title: 'Tujuan Pembelajaran Bab 5',
    category: 'Pendakian Ilmu',
    badge: 'Tujuan & Capaian',
    content: 'Selamat datang di Pembelajaran 5 PAI Kelas 6! Pada bab ini, kita akan meneladani kepemimpinan dua sahabat utama Rasulullah saw. yaitu Khalifah Abu Bakar Ash-Shiddiq r.a. dan Khalifah Umar bin Al-Khattab r.a.',
    arabicText: 'وَالسَّابِقُونَ الْأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالْأَنْصَارِ وَالَّذِينَ اتَّبَعُوهُمْ بِإِحْسَانٍ رَضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ',
    translation: 'Dan orang-orang yang terdahulu lagi yang pertama-tama (masuk Islam) di antara orang-orang Muhajirin dan Ansar... Allah rida kepada mereka. (QS. At-Taubah: 100)',
    bulletPoints: [
      'Menjelaskan riwayat singkat Khalifah Abu Bakar Ash-Shiddiq r.a.',
      'Menjelaskan jasa-jasa Abu Bakar Ash-Shiddiq r.a. dalam perkembangan Islam.',
      'Menjelaskan riwayat singkat Khalifah Umar bin Al-Khattab r.a.',
      'Menjelaskan jasa-jasa Umar bin Al-Khattab r.a. dalam pemerintahan Islam.',
      'Meneladani sikap kepemimpinan kedua khalifah dalam kehidupan sehari-hari.'
    ],
    quiz: {
      question: 'Siapakah dua khalifah pertama dari Khulafaur Rasyidin yang dipelajari pada Bab 5 ini?',
      options: [
        'Utsman bin Affan dan Ali bin Abi Thalib',
        'Abu Bakar Ash-Shiddiq dan Umar bin Al-Khattab',
        'Muawiyah dan Umar bin Abdul Aziz',
        'Zaid bin Tsabit dan Usamah bin Zaid'
      ],
      correct: 1,
      explanation: 'Dua khalifah pertama yang dibahas di Bab 5 adalah Abu Bakar Ash-Shiddiq r.a. dan Umar bin Al-Khattab r.a.'
    }
  },
  {
    id: 2,
    title: 'Mengenal Khulafaur Rasyidin',
    category: 'Konsep Dasar',
    badge: 'Khulafaur Rasyidin',
    content: 'Setelah Nabi Muhammad saw. wafat, umat Islam memerlukan seorang pemimpin yang dapat melanjutkan perjuangan beliau dalam membimbing umat. Para pemimpin tersebut dikenal dengan sebutan Khulafaur Rasyidin.',
    bulletPoints: [
      'Khulafaur Rasyidin berarti para khalifah yang mendapat petunjuk dari Allah Swt.',
      'Susunan 4 Khulafaur Rasyidin:',
      '1. Abu Bakar Ash-Shiddiq r.a. (Khalifah Pertama)',
      '2. Umar bin Al-Khattab r.a. (Khalifah Kedua)',
      '3. Utsman bin Affan r.a. (Khalifah Ketiga)',
      '4. Ali bin Abi Thalib r.a. (Khalifah Keempat)',
      'Keempat khalifah terkenal karena keimanan, kejujuran, keadilan, dan pengabdiannya kepada Islam.'
    ],
    keyTerms: [
      { term: 'Khulafaur Rasyidin', definition: 'Pemimpin/pengganti Nabi yang mendapat petunjuk dan bimbingan dari Allah Swt.' },
      { term: 'Khalifah', definition: 'Pemimpin atau kepala negara/umat Islam setelah wafatnya Rasulullah saw.' }
    ],
    quiz: {
      question: 'Secara bahasa, apakah arti dari kata Khulafaur Rasyidin?',
      options: [
        'Para pemimpin yang kaya raya',
        'Para khalifah yang mendapat petunjuk dari Allah Swt.',
        'Para panglima perang yang tak terkalahkan',
        'Para ulama penulis kitab tafsir'
      ],
      correct: 1,
      explanation: 'Khulafaur Rasyidin berarti para khalifah yang mendapat petunjuk dari Allah Swt.'
    }
  },
  {
    id: 3,
    title: 'Riwayat Singkat Khalifah Abu Bakar Ash-Shiddiq',
    category: 'Biografi Khalifah 1',
    badge: 'Abu Bakar Ash-Shiddiq',
    content: 'Abu Bakar Ash-Shiddiq r.a. adalah sahabat paling utama dan paling dekat dengan Rasulullah saw., serta menjadi khalifah pertama dalam sejarah Islam.',
    bulletPoints: [
      'Nama Lengkap: Abdullah bin Abi Quhafah (lebih dikenal Abu Bakar Ash-Shiddiq).',
      'Kelahiran: Lahir di Makkah sekitar dua tahun setelah Tahun Gajah.',
      'As-Sabiqunal Awwalun: Termasuk golongan orang-orang pertama yang memeluk agama Islam dari kalangan laki-laki dewasa.',
      'Gelar Ash-Shiddiq: Berarti "Orang yang sangat membenarkan". Diberikan karena beliau selalu membenarkan perkataan Nabi Muhammad saw., termasuk saat peristiwa Isra Mikraj.',
      'Sahabat Hijrah: Menemani Rasulullah saw. ketika berhijrah dari Makkah ke Madinah dan selalu mendampingi dalam berbagai perjuangan.',
      'Pengangkatan Khalifah: Setelah Rasulullah saw. wafat pada 11 Hijriah, Abu Bakar dipilih menjadi khalifah pertama melalui musyawarah para sahabat.'
    ],
    keyTerms: [
      { term: 'As-Sabiqunal Awwalun', definition: 'Orang-orang yang pertama kali beriman dan masuk Islam.' },
      { term: 'Ash-Shiddiq', definition: 'Gelar bagi Abu Bakar yang bermakna amat sangat membenarkan ucapan Nabi.' }
    ]
  },
  {
    id: 4,
    title: 'Kepribadian Mulia Abu Bakar Ash-Shiddiq',
    category: 'Akhlak & Karakter',
    badge: 'Kepribadian Abu Bakar',
    content: 'Abu Bakar Ash-Shiddiq r.a. memiliki kepribadian yang sangat mulia dan menjadi teladan abadi bagi seluruh kaum Muslimin.',
    bulletPoints: [
      'Sangat Jujur: Tidak pernah berbohong dalam perkataan dan perbuatan.',
      'Rendah Hati (Tawaduk): Tidak sombong meskipun memiliki kedudukan tinggi.',
      'Dermawan: Menyedekahkan seluruh hartanya untuk perjuangan Islam dan membebaskan budak (seperti Bilal bin Rabah).',
      'Penyayang & Lemah Lembut: Memiliki rasa empati yang mendalam kepada kaum lemah.',
      'Pemberani & Bijaksana: Teguh menghadapi krisis pasca wafatnya Nabi saw.',
      'Sederhana & Kuat Imannya: Hidup hemat dan memprioritaskan akhirat.',
      'Mencintai Ilmu & Mengutamakan Kepentingan Umat.'
    ],
    quiz: {
      question: 'Mengapa Abu Bakar r.a. mendapat gelar Ash-Shiddiq?',
      options: [
        'Karena beliau orang paling kaya di Makkah',
        'Karena beliau memenangkan pertempuran besar',
        'Karena beliau selalu membenarkan perkataan Rasulullah saw. termasuk peristiwa Isra Mikraj',
        'Karena beliau pandai meramal masa depan'
      ],
      correct: 2,
      explanation: 'Gelar Ash-Shiddiq bermakna amat membenarkan, diberikan karena kesetiaan beliau membenarkan sabda Nabi saw.'
    }
  },
  {
    id: 5,
    title: 'Jasa-Jasa Abu Bakar Ash-Shiddiq (Bagian 1)',
    category: 'Jasa Khalifah 1',
    badge: 'Jasa Abu Bakar',
    content: 'Meskipun masa kepemimpinan Abu Bakar terhitung singkat (sekitar 2 tahun 3 bulan), beliau menorehkan jasa monumental bagi kelangsungan Islam.',
    bulletPoints: [
      'a. Menyatukan Umat Islam:',
      'Setelah Rasulullah saw. wafat, sebagian umat menjadi bingung dan bersedih mendalam. Abu Bakar menenangkan umat dengan berkata: "Barangsiapa menyembah Muhammad, Muhammad telah wafat. Barangsiapa menyembah Allah, Allah Maha Hidup dan tidak pernah mati."',
      'b. Memerangi Kaum Murtad & Penolak Zakat:',
      'Pasca wafatnya Nabi, muncul kelompok murtad, nabi palsu (Musailamah Al-Kazzab), dan orang yang menolak membayar zakat. Abu Bakar mengambil tindakan tegas demi menjaga persatuan dan keutuhan syariat Islam.'
    ]
  },
  {
    id: 6,
    title: 'Jasa-Jasa Abu Bakar Ash-Shiddiq (Bagian 2)',
    category: 'Jasa Khalifah 1',
    badge: 'Pengumpulan Al-Qur\'an',
    content: 'Salah satu jasa paling monumental Abu Bakar Ash-Shiddiq adalah pengumpulan mushaf Al-Qur\'an.',
    bulletPoints: [
      'c. Mengumpulkan Mushaf Al-Qur\'an:',
      'Banyak penghafal Al-Qur\'an (huffazh) gugur dalam Perang Yamamah. Umar bin Al-Khattab mengusulkan agar ayat Al-Qur\'an dikumpulkan. Abu Bakar kemudian memerintah sahabat Zaid bin Tsabit untuk mengumpulkan seluruh ayat dari pelepah kurma, batu pipih, dan hafalan para sahabat menjadi satu mushaf.',
      'Jasa ini sangat besar untuk menjaga keaslian Al-Qur\'an hingga akhir zaman.',
      'd. Mengirim Pasukan Usamah bin Zaid:',
      'Melanjutkan rencana Rasulullah saw. mengirim pasukan di bawah pimpinan Usamah bin Zaid ke perbatasan Syam, membuktikan keberanian dan keteguhan memegang amanah Nabi.',
      'e. Memimpin dengan Musyawarah:',
      'Selalu bermusyawarah dengan para sahabat dalam setiap kebijakan penting.'
    ],
    quiz: {
      question: 'Siapakah sahabat yang ditugaskan oleh Khalifah Abu Bakar r.a. untuk mengumpulkan ayat-ayat Al-Qur\'an menjadi satu mushaf?',
      options: [
        'Umar bin Al-Khattab',
        'Zaid bin Tsabit',
        'Usamah bin Zaid',
        'Bilal bin Rabah'
      ],
      correct: 1,
      explanation: 'Zaid bin Tsabit ditunjuk sebagai ketua tim pengumpul Al-Qur\'an karena kecerdasan, kejujuran, dan ketelitian beliau.'
    }
  },
  {
    id: 7,
    title: 'Keteladanan Khalifah Abu Bakar Ash-Shiddiq',
    category: 'Nilai Keteladanan',
    badge: 'Keteladanan Abu Bakar',
    content: 'Nilai-nilai luhur dari Khalifah Abu Bakar Ash-Shiddiq yang wajib kita teladani dalam kehidupan sehari-hari:',
    bulletPoints: [
      'Jujur dalam perkataan dan perbuatan.',
      'Berani membela kebenaran.',
      'Gemar bersedekah dan membantu sesama.',
      'Sederhana dalam pola hidup.',
      'Bertanggung jawab terhadap kewajiban.',
      'Menjaga amanah yang diberikan.',
      'Mengutamakan kepentingan bersama di atas kepentingan pribadi.',
      'Taat dan patuh kepada Allah Swt. dan Rasul-Nya.'
    ]
  },
  {
    id: 8,
    title: 'Riwayat Singkat Khalifah Umar bin Al-Khattab',
    category: 'Biografi Khalifah 2',
    badge: 'Umar bin Al-Khattab',
    content: 'Umar bin Al-Khattab r.a. adalah khalifah kedua yang terkenal sangat pemberani, adil, dan tegas dalam membela kebenaran.',
    bulletPoints: [
      'Nama Lengkap: Umar bin Al-Khattab r.a.',
      'Kelahiran: Lahir di Makkah sekitar 13 tahun setelah Tahun Gajah.',
      'Awal Masuk Islam: Pada awalnya Umar termasuk tokoh Quraisy yang menentang keras dakwah Islam. Namun setelah mendapat hidayah (mendengar bacaan QS. Taha), beliau memeluk Islam dan menjadi pembela Islam yang paling kuat dan berani.',
      'Pengangkatan Khalifah: Setelah Abu Bakar r.a. wafat pada 13 H, Umar diangkat menjadi khalifah kedua.',
      'Masa Kepemimpinan: Memimpin selama kurang lebih 10 tahun (13 - 23 H). Periode kepemimpinannya menjadi salah satu masa paling maju dan emas dalam sejarah pemerintahan Islam.'
    ],
    keyTerms: [
      { term: 'Al-Faruq', definition: 'Julukan bagi Umar bin Al-Khattab yang bermakna pembeda antara yang benar dan yang salah.' }
    ]
  },
  {
    id: 9,
    title: 'Kepribadian & Gelar Al-Faruq Umar bin Al-Khattab',
    category: 'Akhlak & Karakter',
    badge: 'Kepribadian Umar',
    content: 'Umar bin Al-Khattab r.a. dikenal sebagai pemimpin yang sangat berwibawa namun sangat dekat dengan rakyatnya.',
    bulletPoints: [
      'Tegas & Berani: Tidak gentar menghadapi musuh dan tidak kompromi terhadap kebatilan.',
      'Sangat Adil: Tidak membeda-bedakan rakyat berdasarkan suku, kekayaan, atau jabatan.',
      'Sederhana & Disiplin: Memakai pakaian berbalut tambalan dan tidur di atas tikar kasar.',
      'Bertanggung Jawab & Peduli Rakyat: Sering ronda malam (blusukan) memastikan kondisi rakyatnya.',
      'Mencintai Keadilan & Bijaksana.',
      'Gelar Al-Faruq: Diberikan oleh Rasulullah saw. karena ketegasannya sehingga mampu membedakan dengan jelas mana yang haq (benar) dan mana yang batil (salah).'
    ],
    quiz: {
      question: 'Apakah arti julukan Al-Faruq yang disandang oleh Khalifah Umar bin Al-Khattab r.a.?',
      options: [
        'Orang yang sangat kaya raya',
        'Orang yang mampu membedakan antara yang benar dan yang salah',
        'Penulis naskah perjanjian',
        'Pemimpin yang memiliki pedang sakti'
      ],
      correct: 1,
      explanation: 'Al-Faruq artinya pembeda, yaitu orang yang tegas membedakan mana yang benar (haq) dan mana yang salah (batil).'
    }
  },
  {
    id: 10,
    title: 'Jasa-Jasa Umar bin Al-Khattab (Pemerintahan & Wilayah)',
    category: 'Jasa Khalifah 2',
    badge: 'Jasa Umar (Bag. 1)',
    content: 'Khalifah Umar bin Al-Khattab r.a. melakukan modernisasi tata kelola pemerintahan Islam secara luar biasa.',
    bulletPoints: [
      'a. Memperluas Wilayah Islam:',
      'Wilayah Islam berkembang pesat meliputi Persia, Syam (Palestina, Suriah, Lebanon), Mesir, dan wilayah perbatasan lainnya untuk menyebarkan syiar Islam dan rasa aman.',
      'b. Membentuk Pemerintahan yang Teratur:',
      '• Membagi wilayah negara menjadi provinsi-provinsi.',
      '• Mengangkat gubernur (wali) yang jujur dan kapabel.',
      '• Membentuk sistem pengawasan pejabat secara ketat.',
      '• Mengelola administrasi negara, kepolisian (Al-Ahdats), dan pengadilan (Al-Qadha).'
    ]
  },
  {
    id: 11,
    title: 'Jasa-Jasa Umar bin Al-Khattab (Baitul Mal & Kalender Hijriah)',
    category: 'Jasa Khalifah 2',
    badge: 'Jasa Umar (Bag. 2)',
    content: 'Dua peninggalan kelembagaan dan peradaban paling bersejarah dari Khalifah Umar bin Al-Khattab:',
    bulletPoints: [
      'c. Membentuk Baitul Mal:',
      'Baitul Mal adalah lembaga kas negara yang mengelola keuangan & perbendaharaan umum. Dana yang terkumpul digunakan untuk membantu fakir miskin, anak yatim, gandum/pangan bencana, penggajian tentara/pegawai, dan pembangunan fasilitas umum.',
      'd. Menetapkan Kalender Hijriah:',
      'Umar menetapkan Penanggalan/Kalender Hijriah yang patokan tahun 1-nya dimulai dari peristiwa Hijrah Nabi Muhammad saw. dari Makkah ke Madinah. Kalender ini digunakan umat Islam hingga sekarang.',
      'e. Menegakkan Keadilan tanpa Pandang Bulu:',
      'Rakyat biasa maupun putra pejabat diperlakukan sama di depan hukum.'
    ],
    quiz: {
      question: 'Peristiwa apakah yang dijadikan patokan permulaan perhitungan Kalender Hijriah oleh Khalifah Umar bin Al-Khattab r.a.?',
      options: [
        'Kelahiran Nabi Muhammad saw.',
        'Peristiwa Isra Mikraj',
        'Peristiwa Hijrah Nabi Muhammad saw. dari Makkah ke Madinah',
        'Wafatnya Nabi Muhammad saw.'
      ],
      correct: 2,
      explanation: 'Kalender Hijriah ditetapkan oleh Umar r.a. berpatokan pada peristiwa Hijrah Nabi saw. ke Madinah.'
    }
  },
  {
    id: 12,
    title: 'Keteladanan Khalifah Umar bin Al-Khattab',
    category: 'Nilai Keteladanan',
    badge: 'Keteladanan Umar',
    content: 'Peserta didik dapat meneladani sikap kepemimpinan Khalifah Umar bin Al-Khattab r.a. melalui kebiasaan sehari-hari:',
    bulletPoints: [
      'Berkata jujur dan terus terang.',
      'Berani mengakui kesalahan jika berbuat salah.',
      'Berlaku adil kepada semua teman tanpa pilih kasih.',
      'Disiplin datang tepat waktu ke sekolah.',
      'Menaati peraturan dan tata tertib sekolah.',
      'Bertanggung jawab terhadap tugas sekolah dan organisasi.',
      'Suka membantu orang lain yang sedang membutuhkan.',
      'Menjaga amanah dan rahasia.'
    ]
  },
  {
    id: 13,
    title: 'Perbandingan Keteladanan Abu Bakar dan Umar',
    category: 'Komparasi Sifat',
    badge: 'Perbandingan Karakter',
    content: 'Kedua khalifah memiliki keunggulan karakter yang saling melengkapi dalam mengokohkan fondasi peradaban Islam.',
    tableData: [
      { col1: 'Abu Bakar Ash-Shiddiq r.a.', col2: 'Umar bin Al-Khattab r.a.', col3: 'Korelasinya Bagi Murid' },
      { col1: 'Sangat jujur & membenarkan kebenaran', col2: 'Sangat adil & membedakan haq/batil', col3: 'Jujur dalam ujian, adil berteman' },
      { col1: 'Dermawan & suka bersedekah', col2: 'Tegas & konsisten pada aturan', col3: 'Gemar berbagi, patuh aturan' },
      { col1: 'Lemah lembut & penuh kasih sayang', col2: 'Berani & tidak takut celaan', col3: 'Ramah berbudi, berani membela benar' },
      { col1: 'Rendah hati (tawaduk)', col2: 'Disiplin & menghargai waktu', col3: 'Tidak sombong, tidak terlambat' },
      { col1: 'Bijaksana & tenang', col2: 'Bertanggung jawab atas tugas', col3: 'Berpikir sebelum bertindak' },
      { col1: 'Gemar bermusyawarah', col2: 'Teguh menegakkan hukum', col3: 'Suka diskusi kelompok' }
    ]
  },
  {
    id: 14,
    title: 'Penerapan Sifat Teladan dalam Kehidupan Sehari-hari',
    category: 'Penerapan Praktis',
    badge: 'Aplikasi Sehari-hari',
    content: 'Bagaimana cara peserta didik kelas 6 menerapkan nilai-nilai teladan Abu Bakar dan Umar di berbagai lingkungan?',
    bulletPoints: [
      '🏠 Di Rumah:',
      '• Berkata jujur kepada orang tua.',
      '• Membantu pekerjaan rumah tanpa diminta.',
      '• Menjaga amanah yang diberikan orang tua.',
      '• Disiplin melaksanakan salat 5 waktu.',
      '🏫 Di Sekolah:',
      '• Datang tepat waktu & mengerjakan tugas sungguh-sungguh.',
      '• Berlaku adil kepada teman & tidak membuli.',
      '• Menjaga kebersihan kelas & menghormati guru.',
      '👥 Di Masyarakat:',
      '• Ikut gotong royong & membantu tetangga yang membutuhkan.',
      '• Menjaga ketertiban lingkungan & hormati hak orang lain.'
    ]
  },
  {
    id: 15,
    title: 'Kisah Inspiratif, Refleksi, & Rangkuman',
    category: 'Inspirasi & Penutup',
    badge: 'Kisah & Rangkuman',
    content: 'Kisah Umar Memikul Gandum: Suatu malam, Umar ronda dan menemukan ibu memasak air batu demi menenangkan anak-anaknya yang kelaparan. Umar langsung ke Baitul Mal, memikul sendiri karung gandum hingga ke rumah ibu tersebut, dan memasakkannya sampai kenyang.',
    bulletPoints: [
      '📌 Rangkuman Penting Bab 5:',
      '1. Khulafaur Rasyidin adalah 4 khalifah pengganti Nabi yang mendapat petunjuk Allah.',
      '2. Abu Bakar r.a.: Menyatukan umat, menumpas murtad, mengumpulkan mushaf Al-Qur\'an (Zaid bin Tsabit), memimpin dengan musyawarah.',
      '3. Umar r.a.: Al-Faruq, memperluas wilayah, membentuk Baitul Mal & administrasi negara, menetapkan Kalender Hijriah.',
      '4. Nilai utama: Jujur, adil, tegas, sederhana, amanah, dan peduli sesama.',
      '5. Terapkan kejujuran dan keadilan di rumah, sekolah, dan masyarakat!'
    ],
    quiz: {
      question: 'Pelajaran berharga apakah yang dapat kita petik dari kisah Umar bin Al-Khattab r.a. yang memikul sendiri karung gandum untuk rakyatnya yang kelaparan?',
      options: [
        'Seorang pemimpin hanya boleh menyuruh bawahannya bekerja',
        'Pemimpin sejati harus peduli, bertanggung jawab, dan mau turun langsung membantu rakyat yang kesulitan',
        'Seorang khalifah tidak perlu memeriksa keadaan rakyatnya',
        'Baitul Mal hanya dikhususkan bagi pejabat negara'
      ],
      correct: 1,
      explanation: 'Pemimpin yang baik adalah yang bertanggung jawab dan memiliki kepedulian nyata membantu masyarakat yang membutuhkan.'
    }
  }
];

// ==========================================
// 2. PROYEK MURID (2 PjBL + 2 PBL)
// ==========================================
export const PROYEK_KELAS6_P5: ProyekData[] = [
  {
    id: 1,
    title: 'Proyek Poster Infografis "Jejak Emas Khulafaur Rasyidin"',
    type: 'PjBL',
    category: 'Project Based Learning',
    description: 'Murid secara berkelompok membuat poster infografis digital atau manual yang membandingkan riwayat, kepribadian, dan jasa-jasa Khalifah Abu Bakar Ash-Shiddiq r.a. serta Umar bin Al-Khattab r.a.',
    policyNote: 'Sesuai Kebijakan Guru',
    steps: [
      'Membentuk kelompok 4-5 murid.',
      'Membagi tugas riset materi: Abu Bakar (sifat, pengumpulan Al-Qur\'an) dan Umar (Al-Faruq, Baitul Mal, Kalender Hijriah).',
      'Mendesain bagan infografis kreatif dengan tabel komparatif dan ikon warna menarik.',
      'Mempresentasikan hasil karya poster di depan kelas dan menempelkannya di mading sekolah.'
    ],
    output: 'Poster Infografis Komparatif Abu Bakar & Umar (Ukuran A3 / Digital Canva)',
    assessmentCriteria: [
      'Kelengkapan data riwayat & jasa khalifah (30%)',
      'Kerapian, estetika layout, dan kreativitas (30%)',
      'Kejelasan tabel komparatif sifat teladan (20%)',
      'Kerjasama tim & kekompakan presentasi (20%)'
    ]
  },
  {
    id: 2,
    title: 'Proyek Drama Singkat / Roleplay "Kisah Umar bin Al-Khattab & Ibu Pemasak Batu"',
    type: 'PjBL',
    category: 'Project Based Learning',
    description: 'Murid merancang dan memanggungkan pementasan drama singkat (5-7 menit) yang mengangkat kisah kepedulian Khalifah Umar r.a. memikul gandum untuk anak-anak yang kelaparan.',
    policyNote: 'Sesuai Kebijakan Guru',
    steps: [
      'Menulis naskah dialog berdasarkan kisah inspiratif Bab 5.',
      'Memilih pemeran (Umar r.a., pengawal Aslam, Ibu, dan anak-anak).',
      'Melakukan latihan ekspresi, penghayatan karakter tegas dan penyayang.',
      'Menyiapkan properti sederhana (karung, kuali, miniatur obor).',
      'Pementasan di depan kelas dilanjutkan dengan diskusi refleksi nilai kepemimpinan.'
    ],
    output: 'Naskah & Pementasan Drama Kepemimpinan Islami',
    assessmentCriteria: [
      'Kesesuaian alur cerita dengan sejarah shahih (30%)',
      'Penghayatan peran & penyampaian pesan moral (30%)',
      'Kreativitas properti & kekompakan tim (20%)',
      'Refleksi nilai keteladanan pasca pementasan (20%)'
    ]
  },
  {
    id: 3,
    title: 'Studi Kasus PBL "Musyawarah Pemilihan Ketua Kelas Berjiwa Ash-Shiddiq & Al-Faruq"',
    type: 'PBL',
    category: 'Problem Based Learning',
    description: 'Menganalisis permasalahan di kelas di mana proses pemilihan pengurus kelas sering diwarnai kubu-kubuan atau ketidakjujuran, lalu merumuskan solusi berbasis prinsip musyawarah Abu Bakar dan keadilan Umar.',
    policyNote: 'Sesuai Kebijakan Guru',
    steps: [
      'Membaca dan menelaah lembar skenario konflik pemilihan di sekolah.',
      'Identifikasi masalah: Mengapa perselisihan terjadi dan nilai apa yang hilang?',
      'Menerapkan prinsip musyawarah Abu Bakar r.a. dan keadilan tegas Umar r.a. untuk menyusun SOP Pemilihan yang adil.',
      'Simulasi musyawarah mufakat di kelas menggunakan kriteria kepemimpinan jujur & amanah.'
    ],
    output: 'Panduan SOP Pemilihan Pengurus Kelas Islami & Laporan Analisis PBL',
    assessmentCriteria: [
      'Ketajaman analisis akar masalah (30%)',
      'Relevansi solusi dengan teladan Abu Bakar & Umar (30%)',
      'Sistematisasi langkah penyelesaian masalah (20%)',
      'Kejelasan pemaparan hasil diskusi kelompok (20%)'
    ]
  },
  {
    id: 4,
    title: 'Studi Kasus PBL "Manajemen Kas Kelas Terbuka dengan Konsep Baitul Mal"',
    type: 'PBL',
    category: 'Problem Based Learning',
    description: 'Memecahkan masalah pengelolaan uang kas kelas yang kurang transparan dan sering habis tidak terarah dengan merancang tata kelola kas kelas terinspirasi dari sistem Baitul Mal Khalifah Umar r.a.',
    policyNote: 'Sesuai Kebijakan Guru',
    steps: [
      'Mengkaji data pemasukan dan pengeluaran kas kelas yang simpang siur.',
      'Menganalisis prinsip Baitul Mal: pencatatan transparan, alokasi tepat sasaran (bantu teman sakit, beli perlengkapan kelas, sosial).',
      'Membuat pembukuan kas kelas digital/tabel sederhana dengan prinsip akuntabilitas.',
      'Membuat kesepakatan bersama kriteria penerima bantuan kas kelas secara adil.'
    ],
    output: 'Buku Model Kas Kelas "Baitul Mal Mini" & Laporan Rekomendasi Solusi',
    assessmentCriteria: [
      'Inovasi desain pembukuan transparan (30%)',
      'Penerapan nilai kepedulian sosial khas Umar r.a. (30%)',
      'Kemampuan memecahkan dilema alokasi dana (20%)',
      'Presentasi laporan solusi di hadapan kelas (20%)'
    ]
  }
];

// ==========================================
// 3. GAMIFIKASI INTERAKTIF (MISI PETUALANGAN)
// ==========================================
export const GAMIFIKASI_MISSION_KELAS6_P5: GamifikasiMission[] = [
  {
    id: 1,
    title: 'Misi 1: Menenangkan Umat yang Berduka',
    khalifah: 'Abu Bakar',
    scenario: 'Pasca wafatnya Rasulullah saw., suasana Madinah dipenuhi kesedihan dan kebingungan luar biasa. Beberapa orang bahkan belum bisa mempercayai kabar duka tersebut.',
    question: 'Tindakan bijaksana apakah yang dilakukan Abu Bakar Ash-Shiddiq r.a. untuk menenangkan umat?',
    options: [
      {
        text: 'Mengurung diri di rumah dan menolak menemui siapapun',
        isCorrect: false,
        feedback: 'Kurang tepat. Abu Bakar r.a. justru keluar menemui umat dan berpidato menenangkan mereka.'
      },
      {
        text: 'Mengingatkan umat dengan QS. Ali Imran: 144 bahwa Muhammad saw. adalah seorang Rasul, dan mengajak tetap berpegang teguh pada Allah',
        isCorrect: true,
        feedback: 'Tepat sekali! Beliau menegaskan: "Barangsiapa menyembah Allah, Allah Maha Hidup dan tidak pernah mati."'
      },
      {
        text: 'Langsung membagi-bagikan harta kekayaan Madinah',
        isCorrect: false,
        feedback: 'Salah. Fokus utama adalah menguatkan akidah dan jiwa persatuan umat.'
      }
    ],
    computationalConcept: 'Decomposition: Memecah krisis kepemimpinan menjadi penguatan akidah dan pemulihan psikologis umat.'
  },
  {
    id: 2,
    title: 'Misi 2: Penyelamatan Otentisitas Al-Qur\'an',
    khalifah: 'Abu Bakar',
    scenario: 'Banyak huffazh (penghafal Al-Qur\'an) gugur di Perang Yamamah. Umar r.a. khawatir ayat Al-Qur\'an akan sirnah jika tidak segera dibukukan.',
    question: 'Siapakah yang ditunjuk Abu Bakar r.a. untuk memimpin tim pembukuan Mushaf Al-Qur\'an dan apa kriteria utamanya?',
    options: [
      {
        text: 'Usamah bin Zaid, karena beliau panglima perang termuda',
        isCorrect: false,
        feedback: 'Usamah adalah panglima pasukan, bukan ketua pengumpul Al-Qur\'an.'
      },
      {
        text: 'Zaid bin Tsabit, karena beliau muda, cerdas, jujur, dan merupakan sekretaris wahyu Rasulullah saw.',
        isCorrect: true,
        feedback: 'Luar biasa! Zaid bin Tsabit mengumpulkan ayat dari pelepah kurma, batu, dan hafalan para sahabat.'
      },
      {
        text: 'Musailamah Al-Kazzab, karena ia mengaku sebagai nabi',
        isCorrect: false,
        feedback: 'Salah besar! Musailamah adalah nabi palsu yang diperangi oleh kaum Muslimin.'
      }
    ],
    computationalConcept: 'Pattern Recognition: Mengidentifikasi pola ancaman hilangnya ayat dan membuat sistem pengumpulan terverifikasi.'
  },
  {
    id: 3,
    title: 'Misi 3: Strategi Penentuan Awal Penanggalan',
    khalifah: 'Umar bin Al-Khattab',
    scenario: 'Wilayah Islam semakin luas dan surat-menyurat negara membutuhkan sistem kalender yang seragam untuk kepastian tanggal administrasi.',
    question: 'Peristiwa sejarah manakah yang dipilih oleh Umar bin Al-Khattab r.a. sebagai tahun pertama Kalender Hijriah?',
    options: [
      {
        text: 'Tahun kelahiran Nabi Muhammad saw. (Tahun Gajah)',
        isCorrect: false,
        feedback: 'Tahun kelahiran tidak dipilih karena adanya perbedaan pendapat tanggal pastinya.'
      },
      {
        text: 'Peristiwa Hijrah Nabi Muhammad saw. dari Makkah ke Madinah',
        isCorrect: true,
        feedback: 'Benar! Peristiwa Hijrah adalah tonggak berdirinya peradaban dan masyarakat Islam di Madinah.'
      },
      {
        text: 'Tahun terjadinya Kemenangan Kota Makkah (Fathu Makkah)',
        isCorrect: false,
        feedback: 'Kurang tepat. Hijrah-lah yang dijadikan titik awal Penanggalan Hijriah.'
      }
    ],
    computationalConcept: 'Abstraction: Mengabaikan variabel yang kurang relevan dan fokus pada momen paling transformatif (Hijrah).'
  },
  {
    id: 4,
    title: 'Misi 4: Inovasi Lembaga Keuangan Baitul Mal',
    khalifah: 'Umar bin Al-Khattab',
    scenario: 'Harta rampasan perang dan kas negara melimpah. Umar r.a. ingin memastikan seluruh kekayaan negara dikelola secara adil dan tepat sasaran.',
    question: 'Lembaga apakah yang dibentuk Umar r.a. dan siapakah yang paling berhak menerima manfaat utamanya?',
    options: [
      {
        text: 'Baitul Mal, dialokasikan untuk fakir miskin, anak yatim, fasilitas umum, dan kebutuhan masyarakat',
        isCorrect: true,
        feedback: 'Hebat! Baitul Mal menjamin kesejahteraan seluruh lapisan masyarakat tanpa pilih kasih.'
      },
      {
        text: 'Bank Swasta Madinah, khusus dialokasikan untuk keluarga pejabat tinggi',
        isCorrect: false,
        feedback: 'Salah. Umar r.a. sangat menentang penimbunan kekayaan oleh pejabat.'
      },
      {
        text: 'Pasar Kurma, khusus untuk pedagang asing',
        isCorrect: false,
        feedback: 'Salah. Baitul Mal adalah perbendaharaan negara.'
      }
    ],
    computationalConcept: 'Algorithm Design: Merancang alur pembagian kas negara dari penerimaan hingga penyaluran bernilai sosial.'
  },
  {
    id: 5,
    title: 'Misi 5: Misi Rencana Ronda Malam (Blusukan)',
    khalifah: 'Umar bin Al-Khattab',
    scenario: 'Di tengah malam yang dingin, Umar r.a. melihat asap mengepul dari kemah kumuh. Seorang ibu tampak memutar kuali berisi air dan batu untuk menenangkan anaknya yang kelaparan.',
    question: 'Apakah tindakan spontan penuh rasa tanggung jawab yang dilakukan Umar bin Al-Khattab r.a.?',
    options: [
      {
        text: 'Menyuruh pengawalnya untuk mencatat nama ibu tersebut dan berjanji mengirim gandum besok lusa',
        isCorrect: false,
        feedback: 'Kurang tepat. Umar r.a. tidak menunda bantuan saat rakyatnya kelaparan.'
      },
      {
        text: 'Kembali ke Baitul Mal, memikul sendiri karung gandum di punggungnya, dan memasakkannya langsung hingga anak-anak itu kenyang',
        isCorrect: true,
        feedback: 'Sempurna! Umar r.a. berkata: "Apakah kamu mau memikul dosaku di hari kiamat kelak?" saat pengawalnya hendak memikul karung itu.'
      },
      {
        text: 'Marah-marah kepada ibu tersebut karena tidak mau bekerja keras',
        isCorrect: false,
        feedback: 'Salah besar! Umar r.a. justru menangis dan merasa bersalah atas kondisi rakyatnya.'
      }
    ],
    computationalConcept: 'Debugging & Evaluation: Mengevaluasi krisis di lapangan secara langsung dan memberikan perbaikan instan.'
  }
];

// ==========================================
// 4. EVALUASI - 10 PILIHAN GANDA (PG)
// ==========================================
export const EVALUASI_PG_KELAS6_P5: EvaluasiPG[] = [
  {
    id: 1,
    question: 'Khulafaur Rasyidin secara bahasa memiliki arti...',
    options: [
      'Para khalifah yang sangat kaya dan dermawan',
      'Para khalifah yang mendapat petunjuk dari Allah Swt.',
      'Para sahabat yang ahli dalam menulis Al-Qur\'an',
      'Para pemimpin perang di zaman Rasulullah saw.'
    ],
    answer: 1,
    explanation: 'Khulafaur Rasyidin berarti para khalifah (pemimpin) yang mendapat petunjuk dan bimbingan dari Allah Swt.'
  },
  {
    id: 2,
    question: 'Nama asli dari Khalifah Abu Bakar Ash-Shiddiq r.a. adalah...',
    options: [
      'Abdullah bin Abi Quhafah',
      'Umar bin Al-Khattab',
      'Zaid bin Tsabit',
      'Usamah bin Zaid'
    ],
    answer: 0,
    explanation: 'Nama asli beliau adalah Abdullah bin Abi Quhafah, namun lebih dikenal dengan gelar Abu Bakar Ash-Shiddiq.'
  },
  {
    id: 3,
    question: 'Gelar "Ash-Shiddiq" diberikan kepada Abu Bakar r.a. karena sifat utamanya yaitu...',
    options: [
      'Selalu membenarkan perkataan dan ajaran Rasulullah saw. dengan sepenuh hati',
      'Selalu menang dalam setiap pertempuran perang',
      'Paling pandai berdagang di Kota Makkah',
      'Memiliki wajah yang tampan dan bersinar'
    ],
    answer: 0,
    explanation: 'Gelar Ash-Shiddiq bermakna amat membenarkan, sebab beliau tanpa ragu sedikitpun membenarkan sabda Nabi saw., termasuk peristiwa Isra Mikraj.'
  },
  {
    id: 4,
    question: 'Sebab utama diprakarsainya pengumpulan ayat-ayat Al-Qur\'an menjadi satu Mushaf pada masa Abu Bakar r.a. adalah...',
    options: [
      'Banyaknya mushaf Al-Qur\'an yang hanyut terbawa banjir',
      'Banyaknya huffazh (penghafal Al-Qur\'an) yang gugur dalam Perang Yamamah',
      'Permintaan dari raja-raja tetangga agar dikirimkan kitab Al-Qur\'an',
      'Perintah langsung dari para pedagang di pasar Madinah'
    ],
    answer: 1,
    explanation: 'Gugurnya puluhan huffazh di Perang Yamamah memicu kekhawatiran Umar r.a. dan Abu Bakar r.a. akan hilangnya Al-Qur\'an sehingga diperintahkanlah pembukuan mushaf.'
  },
  {
    id: 5,
    question: 'Siapakah sahabat muda yang diperintahkan oleh Abu Bakar r.a. untuk memimpin proyek pengumpulan Mushaf Al-Qur\'an?',
    options: [
      'Bilal bin Rabah',
      'Zaid bin Tsabit',
      'Ali bin Abi Thalib',
      'Utsman bin Affan'
    ],
    answer: 1,
    explanation: 'Zaid bin Tsabit r.a. ditunjuk karena beliau adalah sekretaris wahyu yang cerdas, teliti, dan tepercaya.'
  },
  {
    id: 6,
    question: 'Gelar "Al-Faruq" yang disandang oleh Khalifah Umar bin Al-Khattab r.a. mengandung makna...',
    options: [
      'Pemimpin yang lemah lembut dan suka menangis',
      'Orang yang mampu membedakan antara hal yang benar (haq) dan yang salah (batil)',
      'Orang yang gemar menulis buku sejarah',
      'Panglima penakluk lautan'
    ],
    answer: 1,
    explanation: 'Al-Faruq artinya pembeda, yaitu ketegasan Umar r.a. dalam membedakan secara nyata kebenaran dan kebatilan.'
  },
  {
    id: 7,
    question: 'Lembaga kas keuangan negara yang dibentuk oleh Khalifah Umar r.a. untuk mengelola dana bagi fakir miskin dan fasilitas umum bernama...',
    options: [
      'Majelis Syura',
      'Baitul Mal',
      'Diwan Al-Jund',
      'Al-Qadha'
    ],
    answer: 1,
    explanation: 'Baitul Mal adalah lembaga keuangan dan perbendaharaan negara yang dikelola untuk kesejahteraan rakyat.'
  },
  {
    id: 8,
    question: 'Penetapan awal penanggalan Kalender Hijriah oleh Khalifah Umar r.a. didasarkan pada momentum...',
    options: [
      'Kelahiran Rasulullah saw. di Makkah',
      'Peristiwa Isra Mikraj ke Sidratul Muntaha',
      'Peristiwa Hijrah Rasulullah saw. dari Makkah ke Madinah',
      'Wafatnya Khalifah Abu Bakar Ash-Shiddiq r.a.'
    ],
    answer: 2,
    explanation: 'Awal penanggalan Hijriah berpatokan pada peristiwa monumental Hijrah Nabi Muhammad saw. dari Makkah ke Madinah.'
  },
  {
    id: 9,
    question: 'Berikut ini yang merupakan contoh penerapan keteladanan Khalifah Umar r.a. di lingkungan sekolah adalah...',
    options: [
      'Menyontek jawaban teman agar mendapat nilai bagus',
      'Disiplin datang tepat waktu dan berlaku adil kepada semua teman',
      'Mementingkan kelompok sendiri saat kerja kelompok',
      'Terlambat masuk kelas karena asyik bermain game'
    ],
    answer: 1,
    explanation: 'Disiplin dan adil adalah karakter utama Umar bin Al-Khattab r.a. yang patut diterapkan murid di sekolah.'
  },
  {
    id: 10,
    question: 'Kisah Khalifah Umar r.a. memikul sendiri karung gandum untuk keluarga miskin yang kelaparan mengajarkan nilai kepemimpinan...',
    options: [
      'Pencitraan di hadapan rakyat',
      'Tanggung jawab nyata, empati, dan peduli kepada masyarakat yang membutuhkan',
      'Kekuasaan untuk menyuruh orang lain bekerja keras',
      'Ketakutan akan kehilangan jabatan khalifah'
    ],
    answer: 1,
    explanation: 'Aksi memikul gandum secara langsung menunjukkan keagungan jiwa kepemimpinan yang bertanggung jawab dan penuh empati.'
  }
];

// ==========================================
// 5. EVALUASI - 10 PG KOMPLEKS (PGK - MULTI SELECT)
// ==========================================
export const EVALUASI_PGK_KELAS6_P5: EvaluasiPGK[] = [
  {
    id: 1,
    question: 'Manakah pernyataan yang BENAR mengenai riwayat singkat dan keutamaan Abu Bakar Ash-Shiddiq r.a.? (Pilih lebih dari satu)',
    options: [
      'Nama aslinya adalah Abdullah bin Abi Quhafah',
      'Termasuk golongan as-sabiqunal awwalun (orang pertama masuk Islam)',
      'Memimpin pemerintahan Islam selama 20 tahun',
      'Menemani Rasulullah saw. saat berhijrah ke Madinah'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Abu Bakar r.a. bernama asli Abdullah bin Abi Quhafah, as-sabiqunal awwalun, menemani hijrah Nabi saw., dan memimpin selama ±2 tahun 3 bulan (bukan 20 tahun).'
  },
  {
    id: 2,
    question: 'Manakah yang termasuk kepribadian mulia dari Khalifah Abu Bakar Ash-Shiddiq r.a.? (Pilih lebih dari satu)',
    options: [
      'Sangat jujur dan rendah hati',
      'Dermawan dan suka membebaskan budak',
      'Sombong dengan kekayaannya',
      'Lemah lembut namun teguh dalam kebenaran'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Sifat Abu Bakar r.a. meliputi jujur, rendah hati, dermawan, lemah lembut, dan teguh dalam kebenaran.'
  },
  {
    id: 3,
    question: 'Tindakan tegas apakah yang diambil oleh Khalifah Abu Bakar r.a. demi menjaga keutuhan Islam? (Pilih lebih dari satu)',
    options: [
      'Memerangi kelompok orang yang murtad',
      'Menumpas orang yang menolak membayar zakat',
      'Membiarkan timbulnya nabi-nabi palsu',
      'Mengirim pasukan Usamah bin Zaid ke perbatasan Syam'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Abu Bakar r.a. tegas memerangi murtad, penolak zakat, nabi palsu, dan melanjutkan pengiriman pasukan Usamah bin Zaid.'
  },
  {
    id: 4,
    question: 'Pernyataan yang BENAR mengenai pengumpulan Mushaf Al-Qur\'an pada masa Abu Bakar r.a. adalah... (Pilih lebih dari satu)',
    options: [
      'Diusulkan oleh Umar bin Al-Khattab r.a.',
      'Dipimpin oleh sahabat Zaid bin Tsabit r.a.',
      'Dikumpulkan karena khawatir ayat Al-Qur\'an hilang akibat gugurnya huffazh',
      'Menggunakan teknologi mesin cetak modern'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Pengumpulan mushaf diusulkan Umar r.a., dipimpin Zaid bin Tsabit r.a., dan dipicu gugurnya huffazh di Perang Yamamah.'
  },
  {
    id: 5,
    question: 'Manakah pernyataan yang BENAR mengenai Khalifah Umar bin Al-Khattab r.a.? (Pilih lebih dari satu)',
    options: [
      'Lahir di Makkah sekitar 13 tahun setelah Tahun Gajah',
      'Mendapat julukan Al-Faruq dari Rasulullah saw.',
      'Merupakan khalifah pertama dari Khulafaur Rasyidin',
      'Terkenal sebagai pemimpin yang tegas, adil, dan pemberani'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Umar r.a. lahir ±13 tahun setelah Tahun Gajah, bergelar Al-Faruq, tegas dan adil. Beliau adalah khalifah kedua (bukan pertama).'
  },
  {
    id: 6,
    question: 'Inovasi dan jasa-jasa Khalifah Umar bin Al-Khattab r.a. dalam tata kelola negara antara lain... (Pilih lebih dari satu)',
    options: [
      'Membentuk lembaga keuangan negara Baitul Mal',
      'Menetapkan Kalender Hijriah berpatokan peristiwa Hijrah',
      'Menghapuskan kewajiban salat berjemaah',
      'Memperluas wilayah Islam hingga Persia, Syam, dan Mesir'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Jasa Umar r.a. mencakup Baitul Mal, Kalender Hijriah, perluasan wilayah, dan kerapian administrasi negara.'
  },
  {
    id: 7,
    question: 'Manakah contoh perilaku yang meneladani sifat adil dan jujur Khalifah Umar r.a. di sekolah? (Pilih lebih dari satu)',
    options: [
      'Membagi piket kelas secara proporsional tanpa membeda-bedakan teman',
      'Berkata jujur jika belum mengerjakan PR dan mau menerima konsekuensi',
      'Membela teman dekat walaupun teman tersebut bersalah',
      'Menaati peraturan sekolah dengan penuh rasa tanggung jawab'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Adil dan jujur di sekolah diwujudkan lewat pembagian piket adil, jujur pada PR, dan taat aturan. Membela yang salah melanggar prinsip keadilan.'
  },
  {
    id: 8,
    question: 'Pernyataan berikut yang membedakan penekanan karakter utama Abu Bakar r.a. dan Umar r.a. adalah... (Pilih lebih dari satu)',
    options: [
      'Abu Bakar r.a. sangat menonjol dalam sifat kejujuran & kelembutan',
      'Umar r.a. sangat menonjol dalam ketegasan & penegakan keadilan',
      'Abu Bakar r.a. tidak pernah bermusyawarah',
      'Keduanya sama-sama memiliki keberanian dan iman yang sangat kuat'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Abu Bakar r.a. menonjol dalam kelembutan & kejujuran, Umar r.a. dalam ketegasan & keadilan. Keduanya sangat berani, beriman teguh, dan suka musyawarah.'
  },
  {
    id: 9,
    question: 'Sikap yang harus kita terapkan di lingkungan masyarakat sesuai teladan Khulafaur Rasyidin adalah... (Pilih lebih dari satu)',
    options: [
      'Ikut serta dalam kegiatan gotong royong membersihkan lingkungan',
      'Menjaga ketertiban dan menghormati hak-hak tetangga',
      'Membuang sampah di pekarangan tetangga',
      'Membantu tetangga yang membutuhkan bantuan'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Di masyarakat, murid meneladani khalifah dengan gotong royong, menjaga ketertiban, menghormati tetangga, dan saling membantu.'
  },
  {
    id: 10,
    question: 'Pelajaran penting yang diperoleh dari masa kepemimpinan Khulafaur Rasyidin adalah... (Pilih lebih dari satu)',
    options: [
      'Pemimpin harus mengutamakan kepentingan rakyat di atas kepentingan pribadi',
      'Musyawarah adalah cara terbaik dalam mengambil keputusan bersama',
      'Kekuasaan digunakan untuk memperkaya diri sendiri',
      'Kejujuran dan keadilan adalah kunci kejayaan suatu bangsa'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Khulafaur Rasyidin mengajarkan keutamaan kepentingan rakyat, pentingnya musyawarah, serta fondasi kejujuran dan keadilan.'
  }
];

// ==========================================
// 6. EVALUASI - 5 MENJODOHKAN
// ==========================================
export const EVALUASI_MENJODOHKAN_KELAS6_P5: EvaluasiMenjodohkan[] = [
  {
    id: 1,
    premise: 'Gelar bagi Abu Bakar r.a. yang bermakna orang yang amat sangat membenarkan sabda Nabi saw.',
    matchTarget: 'Ash-Shiddiq',
    options: ['Ash-Shiddiq', 'Al-Faruq', 'Baitul Mal', 'Zaid bin Tsabit', 'Kalender Hijriah']
  },
  {
    id: 2,
    premise: 'Gelar bagi Umar bin Al-Khattab r.a. yang bermakna pembeda antara yang hak dan yang batil.',
    matchTarget: 'Al-Faruq',
    options: ['Ash-Shiddiq', 'Al-Faruq', 'Baitul Mal', 'Zaid bin Tsabit', 'Kalender Hijriah']
  },
  {
    id: 3,
    premise: 'Sahabat yang diperintahkan Abu Bakar r.a. untuk mengumpulkan seluruh ayat Al-Qur\'an menjadi satu Mushaf.',
    matchTarget: 'Zaid bin Tsabit',
    options: ['Ash-Shiddiq', 'Al-Faruq', 'Baitul Mal', 'Zaid bin Tsabit', 'Kalender Hijriah']
  },
  {
    id: 4,
    premise: 'Lembaga pengelola kas dan perbendaharaan negara yang dibentuk pada masa Khalifah Umar r.a.',
    matchTarget: 'Baitul Mal',
    options: ['Ash-Shiddiq', 'Al-Faruq', 'Baitul Mal', 'Zaid bin Tsabit', 'Kalender Hijriah']
  },
  {
    id: 5,
    premise: 'Sistem penanggalan Islam yang ditetapkan oleh Umar r.a. berpatokan pada peristiwa Hijrah Nabi saw.',
    matchTarget: 'Kalender Hijriah',
    options: ['Ash-Shiddiq', 'Al-Faruq', 'Baitul Mal', 'Zaid bin Tsabit', 'Kalender Hijriah']
  }
];

// ==========================================
// 7. EVALUASI - 10 BENAR / SALAH (+ ALASAN)
// ==========================================
export const EVALUASI_BENAR_SALAH_KELAS6_P5: EvaluasiBenarSalah[] = [
  {
    id: 1,
    statement: 'Khulafaur Rasyidin berjumlah empat orang sahabat utama Nabi Muhammad saw.',
    isCorrect: true,
    explanation: 'BENAR. Keempatnya adalah Abu Bakar r.a., Umar bin Al-Khattab r.a., Utsman bin Affan r.a., dan Ali bin Abi Thalib r.a.'
  },
  {
    id: 2,
    statement: 'Abu Bakar Ash-Shiddiq r.a. lahir di Kota Madinah sepuluh tahun sebelum Tahun Gajah.',
    isCorrect: false,
    explanation: 'SALAH. Abu Bakar r.a. lahir di Kota Makkah sekitar dua tahun setelah Tahun Gajah.'
  },
  {
    id: 3,
    statement: 'Salah satu jasa terbesar Abu Bakar r.a. adalah memerintahkan Zaid bin Tsabit mengumpulkan ayat-ayat Al-Qur\'an menjadi satu Mushaf.',
    isCorrect: true,
    explanation: 'BENAR. Keputusan ini diambil untuk menyelamatkan otentisitas Al-Qur\'an setelah banyaknya huffazh yang gugur di Perang Yamamah.'
  },
  {
    id: 4,
    statement: 'Umar bin Al-Khattab r.a. sejak awal dakwah Islam langsung menjadi sahabat terdekat Rasulullah saw. tanpa pernah menentang Islam.',
    isCorrect: false,
    explanation: 'SALAH. Pada awalnya Umar r.a. adalah tokoh Quraisy yang menentang keras Islam, sebelum akhirnya mendapat hidayah Allah Swt.'
  },
  {
    id: 5,
    statement: 'Gelar Al-Faruq bermakna orang yang pandai membuat garis batas wilayah kekuasaan perang.',
    isCorrect: false,
    explanation: 'SALAH. Gelar Al-Faruq bermakna orang yang tegas membedakan antara hal yang benar (haq) dan yang salah (batil).'
  },
  {
    id: 6,
    statement: 'Baitul Mal yang dibentuk oleh Khalifah Umar r.a. berguna untuk membantu fakir miskin, anak yatim, dan pembangunan fasilitas publik.',
    isCorrect: true,
    explanation: 'BENAR. Baitul Mal adalah perbendaharaan negara untuk menjamin kesejahteraan rakyat secara adil.'
  },
  {
    id: 7,
    statement: 'Kalender Hijriah dihitung berdasarkan peristiwa Isra Mikraj Nabi Muhammad saw.',
    isCorrect: false,
    explanation: 'SALAH. Kalender Hijriah ditetapkan berpatokan pada peristiwa Hijrah Nabi Muhammad saw. dari Makkah ke Madinah.'
  },
  {
    id: 8,
    statement: 'Abu Bakar r.a. selalu bermusyawarah dengan para sahabat sebelum mengambil keputusan-keputusan penting negara.',
    isCorrect: true,
    explanation: 'BENAR. Abu Bakar r.a. mengedepankan musyawarah agar setiap kebijakan mufakat dan diridai bersama.'
  },
  {
    id: 9,
    statement: 'Dalam mengendalikan pemerintahan, Umar r.a. memberikan keistimewaan hukum khusus bagi keluarga dan anak-anak pejabat.',
    isCorrect: false,
    explanation: 'SALAH. Umar r.a. sangat adil dan tidak membeda-bedakan siapapun di hadapan hukum, termasuk keluarganya sendiri.'
  },
  {
    id: 10,
    statement: 'Menjaga amanah, disiplin waktu, dan jujur di sekolah merupakan bentuk nyata meneladani Khulafaur Rasyidin.',
    isCorrect: true,
    explanation: 'BENAR. Karakter jujur, amanah, dan disiplin adalah cerminan langsung dari keteladanan Abu Bakar r.a. dan Umar r.a.'
  }
];

// ==========================================
// 8. EVALUASI - 5 URAIAN (HOTS & COMPUTATIONAL THINKING)
// ==========================================
export const EVALUASI_URAIAN_KELAS6_P5: EvaluasiUraian[] = [
  {
    id: 1,
    question: 'Mengapa keputusan Abu Bakar r.a. untuk membukukan Al-Qur\'an disebut sebagai keputusan yang sangat strategis bagi peradaban Islam? Jelaskan analisis Computational Thinking-mu (Pattern Recognition)!',
    context: 'Gugurnya puluhan huffazh di Perang Yamamah mengancam keberlangsungan catatan Al-Qur\'an.',
    sampleAnswer: 'Keputusan tersebut sangat strategis karena Abu Bakar r.a. menggunakan pengenalan pola (Pattern Recognition): jika para penghafal Al-Qur\'an terus gugur dalam perang, maka dalam beberapa dekade mendatang ayat Al-Qur\'an terancam hilang atau terdistorsi. Dengan mengumpulkan catatan pelepah kurma, batu, dan hafalan terverifikasi melalui tim Zaid bin Tsabit menjadi satu Mushaf baku, otentisitas dan keaslian Al-Qur\'an terjaga utuh hingga akhir zaman.'
  },
  {
    id: 2,
    question: 'Jelaskan perbedaan mendasar antara kepribadian Abu Bakar Ash-Shiddiq r.a. dan Umar bin Al-Khattab r.a., serta bagaimana kedua sifat tersebut justru saling melengkapi dalam mengokohkan pemerintahan Islam!',
    context: 'Abu Bakar terkenal dengan kelembutan dan kejujurannya, sedangkan Umar terkenal dengan ketegasan dan keadilannya.',
    sampleAnswer: 'Abu Bakar r.a. memiliki karakter dominan lemah lembut, jujur, tenang, dan bijaksana (sangat menenangkan krisis pasca wafatnya Nabi). Sementara Umar r.a. memiliki karakter dominan tegas, adil, berani, dan disiplin tinggi (sangat efektif menata administrasi negara dan memperluas wilayah). Keduanya saling melengkapi: Kelembutan Abu Bakar menyatukan hati umat, sedangkan ketegasan Umar melindungi dan menegakkan hukum negara Islam.'
  },
  {
    id: 3,
    question: 'Gunakan alur Berpikir Komputasional (Decomposition & Algorithm Design) untuk merancang langkah-langkah transparan pengalokasian dana kas kelas yang terinspirasi dari sistem Baitul Mal Khalifah Umar r.a.!',
    context: 'Kas kelas sering tidak jelas penggunaannya sehingga menimbulkan prasangka di antara murid.',
    sampleAnswer: 'Langkah Komputasional (Algoritma Baitul Mal Mini Kelas):\n1. Dekomposisi: Membagi kas menjadi 3 kategori (Sosial/Bantu Teman Sakit, Perlengkapan Kelas, dan Dana Darurat).\n2. Pencatatan Input: Setiap uang masuk dicatat dalam tabel transparan yang bisa dilihat semua murid.\n3. Aturan Verifikasi: Pengeluaran uang kas harus disetujui melalui musyawarah ketua kelas, bendahara, dan wali kelas.\n4. Pelaporan Output: Membuat rekap bulanan yang ditempel di mading kelas agar akuntabel.'
  },
  {
    id: 4,
    question: 'Analisislah kisah Khalifah Umar r.a. yang memikul sendiri karung gandum untuk ibu yang memasak batu. Nilai moral apa saja yang harus dimiliki oleh seorang pemimpin masa depan berdasarkan kisah tersebut?',
    context: 'Umar r.a. ronda malam tanpa pengawalan ketat dan langsung bertindak saat menemukan rakyatnya kelaparan.',
    sampleAnswer: 'Nilai moral utama:\n1. Rasa Tanggung Jawab Nyata: Pemimpin tidak melempar kesalahan kepada bawahan tetapi merasa langsung bertanggung jawab atas kesejahteraan rakyatnya.\n2. Empati & Keikhlasan: Mau turun tangan langsung (blusukan) memikul bantuan tanpa gengsi jabatan.\n3. Respons Cepat (Problem Solving): Langsung mengeksekusi bantuan pangan malam itu juga tanpa menunda-nunda.'
  },
  {
    id: 5,
    question: 'Buatlah sebuah rencana aksi nyata (Action Plan) berisi minimal 3 contoh kebiasaan sehari-hari yang akan kamu lakukan di sekolah dan rumah sebagai bentuk komitmen meneladani kepemimpinan Abu Bakar r.a. dan Umar r.a.!',
    context: 'Meneladani kepemimpinan dalam kehidupan sehari-hari murid kelas 6.',
    sampleAnswer: 'Rencana Aksi Nyata Saya:\n1. Meneladani Kejujuran Abu Bakar (Ash-Shiddiq): Berkata jujur kepada orang tua dan guru dalam situasi apapun serta tidak menyontek saat ujian.\n2. Meneladani Kedisiplinan & Keadilan Umar (Al-Faruq): Datang tepat waktu ke sekolah, menaati peraturan, serta bersikap adil tidak membeda-bedakan teman saat bermain atau belajar kelompok.\n3. Meneladani Kepedulian Sosial: Gemar menyisihkan uang saku untuk infak/sedekah dan aktif membantu teman yang kesulitan belajar.'
  }
];
