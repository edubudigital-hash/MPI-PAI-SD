// Data Lengkap Kelas 3 Pembelajaran 2 berdasarkan PDF Resmi BAB II
// Mengenal, Menjelaskan, dan Meyakini 20 Sifat Wajib serta 20 Sifat Mustahil bagi Allah Swt.

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

// // =========================================================================
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 3 PEMBELAJARAN 2 / BAB II)
// =========================================================================
export const KELAS3_P2_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Tujuan Pembelajaran & Ayo Mengamati',
    subtitle: 'Mengenal, Menjelaskan, dan Meyakini Sifat-Sifat Allah Swt.',
    iconName: 'Target',
    points: [
      '1. Menjelaskan pengertian sifat wajib, sifat mustahil, dan sifat jaiz bagi Allah Swt.',
      '2. Menyebutkan 20 sifat wajib bagi Allah Swt.',
      '3. Menyebutkan 20 sifat mustahil bagi Allah Swt.',
      '4. Menyebutkan 1 sifat jaiz bagi Allah Swt. beserta contohnya.',
      '5. Meyakini bahwa Allah memiliki sifat-sifat yang sempurna dan Mahabebas.',
      '6. Menunjukkan perilaku yang mencerminkan keimanan kepada sifat-sifat Allah Swt.'
    ],
    highlightBox: {
      title: '💡 Ayo Mengamati Alam Semesta',
      content: 'Matahari terbit setiap pagi, hujan menyuburkan tanaman, dan tubuh kita bernapas dengan baik menunjukkan kekuasaan Allah Swt. Allah Maha Sempurna dan tidak ada satu pun makhluk yang menyerupai-Nya. Mengenal sifat-sifat Allah menguatkan iman, menambah cinta, dan menjauhkan dosa.',
      type: 'tip'
    }
  },
  {
    id: 2,
    title: '2. Pengertian Sifat Wajib, Mustahil & Jaiz',
    subtitle: 'Konsep Dasar Sifat-Sifat Allah Swt.',
    iconName: 'Layers',
    points: [
      '1. Sifat Wajib bagi Allah (20 Sifat): Sifat yang pasti dimiliki oleh Allah Swt. sebagai Tuhan Yang Maha Sempurna.',
      '2. Sifat Mustahil bagi Allah (20 Sifat): Sifat yang tidak mungkin dimiliki oleh Allah Swt. karena bertentangan dengan kesempurnaan-Nya.',
      '3. Sifat Jaiz bagi Allah (1 Sifat): Sifat kebebasan mutlak Allah Swt. untuk berbuat sesuatu yang mungkin (jaiz/mumkin) terjadi atau meninggalkannya (tidak berbuat).',
      '• Allah Swt. memiliki segala kesempurnaan, terbebas dari kekurangan, dan Mahabebas dalam berkehendak.'
    ],
    highlightBox: {
      title: '📌 Poin Penting Akidah Sifat-Sifat Allah',
      content: 'Sifat wajib = pasti ada pada Allah (20 Sifat). Sifat mustahil = tidak mungkin ada pada Allah (20 Sifat). Sifat jaiz = kebebasan mutlak Allah Swt. untuk menciptakan atau tidak menciptakan sesuatu (1 Sifat).',
      type: 'info'
    }
  },
  {
    id: 3,
    title: '3. Dua Puluh Sifat Wajib bagi Allah Swt. (Bagian 1: 1–10)',
    subtitle: 'Daftar Sifat Wajib Nomor 1 Sampai 10 Beserta Artinya',
    iconName: 'BookOpen',
    points: [
      'Peserta didik dianjurkan menghafalkan 20 sifat wajib secara bertahap:'
    ],
    tableData: {
      headers: ['No', 'Sifat Wajib', 'Arti'],
      rows: [
        ['1', 'Wujud', 'Ada'],
        ['2', 'Qidam', 'Terdahulu (tidak berawal)'],
        ['3', 'Baqa\'', 'Kekal'],
        ['4', 'Mukhalafatu lil Hawadits', 'Berbeda dengan makhluk'],
        ['5', 'Qiyamuhu Binafsih', 'Berdiri sendiri, tidak membutuhkan makhluk'],
        ['6', 'Wahdaniyah', 'Maha Esa'],
        ['7', 'Qudrah', 'Maha Kuasa'],
        ['8', 'Iradah', 'Maha Berkehendak'],
        ['9', 'Ilmu', 'Maha Mengetahui'],
        ['10', 'Hayat', 'Maha Hidup']
      ]
    }
  },
  {
    id: 4,
    title: '4. Dua Puluh Sifat Wajib bagi Allah Swt. (Bagian 2: 11–20)',
    subtitle: 'Daftar Sifat Wajib Nomor 11 Sampai 20 Beserta Artinya',
    iconName: 'BookOpen',
    points: [
      'Lanjutan 20 sifat wajib yang menunjukkan kesempurnaan Allah:'
    ],
    tableData: {
      headers: ['No', 'Sifat Wajib', 'Arti'],
      rows: [
        ['11', 'Sama\'', 'Maha Mendengar'],
        ['12', 'Basar', 'Maha Melihat'],
        ['13', 'Kalam', 'Maha Berfirman'],
        ['14', 'Qadiran', 'Maha Kuasa'],
        ['15', 'Muridan', 'Maha Berkehendak'],
        ['16', '\'Aliman', 'Maha Mengetahui'],
        ['17', 'Hayyan', 'Maha Hidup'],
        ['18', 'Sami\'an', 'Maha Mendengar'],
        ['19', 'Basiran', 'Maha Melihat'],
        ['20', 'Mutakalliman', 'Maha Berfirman']
      ]
    }
  },
  {
    id: 5,
    title: '5. Dua Puluh Sifat Mustahil bagi Allah Swt. (Bagian 1: 1–10)',
    subtitle: 'Lawan dari Sifat Wajib Nomor 1 Sampai 10',
    iconName: 'CheckCircle',
    points: [
      'Sifat mustahil merupakan lawan dari sifat wajib (Sifat yang tidak mungkin pada Allah):'
    ],
    tableData: {
      headers: ['No', 'Sifat Mustahil', 'Arti (Lawan dari Sifat Wajib)'],
      rows: [
        ['1', '\'Adam', 'Tidak ada (Lawan Wujud)'],
        ['2', 'Huduts', 'Baru (Lawan Qidam)'],
        ['3', 'Fana\'', 'Binasa (Lawan Baqa\')'],
        ['4', 'Mumatsalatu lil Hawadits', 'Menyerupai makhluk (Lawan Mukhalafatu lil Hawadits)'],
        ['5', 'Qiyamuhu Bighairih', 'Membutuhkan bantuan makhluk (Lawan Qiyamuhu Binafsih)'],
        ['6', 'Ta\'addud', 'Berbilang / lebih dari satu (Lawan Wahdaniyah)'],
        ['7', '\'Ajzun', 'Lemah (Lawan Qudrah)'],
        ['8', 'Karahah', 'Terpaksa (Lawan Iradah)'],
        ['9', 'Jahlun', 'Bodoh (Lawan Ilmu)'],
        ['10', 'Maut', 'Mati (Lawan Hayat)']
      ]
    }
  },
  {
    id: 6,
    title: '6. Dua Puluh Sifat Mustahil bagi Allah Swt. (Bagian 2: 11–20)',
    subtitle: 'Lawan dari Sifat Wajib Nomor 11 Sampai 20',
    iconName: 'CheckCircle',
    points: [
      'Lanjutan 20 sifat mustahil bagi Allah Swt.:'
    ],
    tableData: {
      headers: ['No', 'Sifat Mustahil', 'Arti'],
      rows: [
        ['11', 'Shamam', 'Tuli (Lawan Sama\')'],
        ['12', '\'Umyun', 'Buta (Lawan Basar)'],
        ['13', 'Bukmun', 'Bisu (Lawan Kalam)'],
        ['14', '\'Ajizan', 'Lemah (Lawan Qadiran)'],
        ['15', 'Karihan', 'Terpaksa (Lawan Muridan)'],
        ['16', 'Jahilan', 'Bodoh (Lawan \'Aliman)'],
        ['17', 'Mayyitan', 'Mati (Lawan Hayyan)'],
        ['18', 'Ashamma', 'Tuli (Lawan Sami\'an)'],
        ['19', 'A\'ma', 'Buta (Lawan Basiran)'],
        ['20', 'Abkam', 'Bisu (Lawan Mutakalliman)']
      ]
    }
  },
  {
    id: 7,
    title: '7. Sifat Jaiz bagi Allah Swt.',
    subtitle: 'Kebebasan dan Kehendak Mutlak Allah Swt. Tanpa Paksaan',
    iconName: 'Sparkles',
    points: [
      '1. Pengertian Sifat Jaiz bagi Allah: Sifat kebebasan mutlak yang boleh (mungkin) ada atau tidak dilakukan oleh Allah Swt.',
      '2. Jumlah Sifat Jaiz Allah: Hanya ada 1 (satu) sifat jaiz bagi Allah Swt., yaitu "Fi\'lu kulli mumkinin au tarkuhu".',
      '3. Arti Sifat Jaiz Allah: "Berbuat sesuatu yang mungkin (murni kehendak-Nya) atau meninggalkannya (tidak berbuat)."',
      '4. Contoh Sifat Jaiz dalam Kehidupan Sehari-hari:',
      '   • Allah Swt. boleh menciptakan bumi, langit, manusia, hewan, dan tumbuhan, atau tidak menciptakannya.',
      '   • Allah Swt. boleh menurunkan hujan, memberi rezeki, keturunan, dan kesehatan kepada manusia, atau meninggalkannya sesuai kehendak-Nya.',
      '   • Allah Swt. tidak dipaksa dan tidak terpaksa oleh siapa pun dalam menciptakan atau menentukan nasib makhluk.'
    ],
    arabicExamples: [
      {
        arabic: 'فِعْلُ كُلِّ مُمْكِنٍ أَوْ تَرْكُهُ',
        latin: 'Fi‘lu kulli mumkinin au tarkuhu',
        meaning: '"Berbuat sesuatu yang mungkin terjadi atau meninggalkannya (tidak berbuat)."'
      }
    ],
    highlightBox: {
      title: '💡 Catatan Akidah Penting',
      content: 'Allah Swt. Mahabebas dan Mahakuasa. Tidak ada satu pun makhluk yang dapat memaksa Allah Swt. untuk melakukan sesuatu atau melarang-Nya dari melakukan sesuatu.',
      type: 'info'
    }
  },
  {
    id: 8,
    title: '8. Penjelasan 8 Sifat Wajib Utama',
    subtitle: 'Pendalaman Makna Sifat Wajib Allah Swt.',
    iconName: 'Volume2',
    points: [
      '1. Wujud (Ada): Bukti adanya Allah dilihat melalui penciptaan alam semesta.',
      '2. Qidam (Terdahulu): Allah sudah ada sebelum semua makhluk diciptakan.',
      '3. Baqa\' (Kekal): Makhluk akan mati, sedangkan Allah kekal selama-lamanya.',
      '4. Wahdaniyah (Maha Esa): Allah hanya satu, tidak ada Tuhan selain Allah.',
      '5. Qudrah (Maha Kuasa): Allah mampu menciptakan langit, bumi, manusia, hewan, dan tumbuhan.',
      '6. Ilmu (Maha Mengetahui): Allah mengetahui isi hati, perkataan, amal, masa lalu, sekarang, dan masa depan.',
      '7. Sama\' (Maha Mendengar): Allah mendengar seluruh doa hamba-Nya sekecil apa pun.',
      '8. Basar (Maha Melihat): Allah melihat semua perbuatan manusia walaupun tidak ada orang lain yang melihat.'
    ],
    arabicExamples: [
      {
        arabic: 'قُلْ هُوَ اللهُ أَحَدٌ',
        latin: 'Qul huwallāhu aḥad',
        meaning: '"Katakanlah, Dialah Allah Yang Maha Esa." (Q.S. Al-Ikhlas: 1)'
      }
    ]
  },
  {
    id: 9,
    title: '9. Penerapan dalam Kehidupan Sehari-hari',
    subtitle: 'Penerapan Keimanan di Rumah, Sekolah, dan Masyarakat',
    iconName: 'CheckCircle',
    points: [
      '🏠 Di Rumah: Salat tepat waktu, berdoa sebelum belajar, menghormati orang tua, bersyukur atas rezeki dan nikmat Allah.',
      '🏫 Di Sekolah: Jujur saat mengerjakan tugas, TIDAK menyontek, menghormati guru, rajin belajar.',
      '🌐 Di Masyarakat: Menolong tetangga, berkata jujur, menjaga kebersihan lingkungan, berserah diri kepada kehendak Allah (Sifat Jaiz).'
    ]
  },
  {
    id: 10,
    title: '10. Kisah Teladan Menemukan Dompet & Pengamalan Basar & Ilmu',
    subtitle: 'Kisah Teladan Karakter Jujur Karena Yakin Allah Maha Melihat',
    iconName: 'Sparkles',
    points: [
      'Suatu hari seorang anak menemukan dompet di halaman sekolah. Tidak ada seorang pun yang melihat kejadian tersebut.',
      'Anak itu tetap menyerahkan dompet kepada guru.',
      'Ketika ditanya mengapa ia mengembalikannya, ia menjawab:',
      '"Saya yakin Allah Maha Melihat (Basar) dan Maha Mengetahui (Ilmu). Walaupun tidak ada manusia yang melihat, Allah tetap mengetahui semua perbuatan saya."'
    ],
    highlightBox: {
      title: '✨ Mutiara Teladan',
      content: 'Keimanan kepada Sifat Basar (Maha Melihat) dan Ilmu (Maha Mengetahui) melahirkan karakter jujur dan bertanggung jawab di mana saja berada.',
      type: 'tip'
    }
  },
  {
    id: 11,
    title: '11. Hikmah Mempelajari Bab Ini',
    subtitle: '10 Hikmah Mempelajari Sifat-Sifat Allah Swt. (Bab II)',
    iconName: 'Award',
    points: [
      'Dengan mengenal sifat wajib, sifat mustahil, dan sifat jaiz Allah Swt., kita memperoleh banyak pelajaran, yaitu:',
      '1. Menambah keimanan kepada Allah Swt.',
      '2. Menumbuhkan rasa cinta kepada Allah.',
      '3. Mendorong untuk selalu berbuat jujur.',
      '4. Membiasakan diri beribadah dengan ikhlas.',
      '5. Meyakini bahwa Allah Maha Kuasa atas segala sesuatu.',
      '6. Menghindari sifat sombong.',
      '7. Menumbuhkan rasa syukur.',
      '8. Menjadikan Allah sebagai tempat bergantung.',
      '9. Meningkatkan ketakwaan.',
      '10. Membentuk akhlak mulia dalam kehidupan sehari-hari.'
    ],
    highlightBox: {
      title: '💡 Kesimpulan Hikmah Bab II',
      content: 'Mempelajari sifat-sifat Allah Swt. membentuk akhlak mulia, meningkatkan ketakwaan, dan memperkuat keimanan seorang Muslim dalam kehidupan sehari-hari.',
      type: 'info'
    }
  },
  {
    id: 12,
    title: '12. Rangkuman & Refleksi Diri Bab II',
    subtitle: 'Rangkuman Materi & Pertanyaan Perenungan Diri',
    iconName: 'Target',
    points: [
      '📌 RANGKUMAN BAB II:',
      '• Allah Swt. memiliki 20 sifat wajib (kesempurnaan), 20 sifat mustahil (kekurangan), dan 1 sifat jaiz (kebebasan berkehendak).',
      '• Sifat jaiz Allah yaitu "Fi\'lu kulli mumkinin au tarkuhu" (berbuat sesuatu yang mungkin atau meninggalkannya).',
      '• Keimanan diwujudkan dalam perilaku jujur, disiplin, bertanggung jawab, rajin beribadah, dan bersyukur.',
      '• Semakin mengenal Allah, semakin kuat keimanan dan ketakwaan seorang Muslim.',
      '🤔 PERTANYAAN REFLEKSI DIRI:',
      '1. Apakah saya sudah hafal 20 sifat wajib, 20 sifat mustahil, dan 1 sifat jaiz bagi Allah?',
      '2. Mengapa Allah Swt. memiliki sifat jaiz dan bagaimana kaitannya dengan kebebasan Allah menciptakan alam semesta?',
      '3. Apa saja hikmah meyakini dan mempelajari sifat-sifat Allah Swt. dalam kehidupan saya sehari-hari?',
      '4. Apakah saya sudah bersikap jujur karena yakin Allah selalu mengawasi?',
      '5. Perubahan apa yang akan saya lakukan setelah mempelajari bab ini agar menjadi hamba Allah yang lebih bertakwa?'
    ]
  }
];

// =========================================================================
// 2. PROYEK MURID (2 PjBL + 2 PBL UNTUK KELAS 3 PEMBELAJARAN 2)
// =========================================================================
export const KELAS3_P2_PROJECTS: ProjectTask[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    title: 'Proyek 1 (PjBL): Poster "Kartu Pasangan Sifat Wajib & Mustahil Allah"',
    subtitle: 'Project Based Learning - Desain Kartu Edukatif Akidah',
    badge: 'Project Based Learning (PjBL)',
    objective: 'Siswa secara berkelompok membuat set kartu edukatif berpasangan antara 20 Sifat Wajib dan 20 Sifat Mustahil beserta artinya menggunakan kertas warna.',
    steps: [
      '1. Siapkan kertas karton warna (misal: Hijau untuk Sifat Wajib dan Merah/Kuning untuk Sifat Mustahil).',
      '2. Tuliskan nama Sifat Wajib beserta artinya pada kartu Hijau, dan Sifat Mustahil pasangannya pada kartu Merah.',
      '3. Buat 20 pasang kartu (total 40 kartu) dengan tulisan yang rapi dan dapat dibaca jelas.',
      '4. Simulasi permainan mencocokkan kartu bersama teman kelompok di depan kelas.'
    ],
    output: 'Set Kartu Edukatif 20 Sifat Wajib & 20 Sifat Mustahil.',
    teacherNote: 'Catatan: Penilaian, kriteria kelompok, dan pameran karya disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    title: 'Proyek 2 (PjBL): Mading "Pohon Kejujuran: Allah Maha Melihat (Basar)"',
    subtitle: 'Project Based Learning - Kreasi Visual Karakter Jujur',
    badge: 'Project Based Learning (PjBL)',
    objective: 'Siswa mendesain mading berbentuk pohon kejujuran yang berisi komitmen perilaku jujur di sekolah, rumah, dan masyarakat karena meyakini sifat Basar dan Ilmu Allah.',
    steps: [
      '1. Buat gambar pohon besar pada kertas karton manila.',
      '2. Tuliskan 8 Sifat Wajib Utama pada batang dan dahan pohon.',
      '3. Pada daun-daun pohon, tuliskan contoh perbuatan jujur dan disiplin yang telah dilakukan siswa (seperti tidak menyontek, mengembalikan barang hilang).',
      '4. Pajang mading di dinding kelas sebagai pengingat bersama.'
    ],
    output: 'Mading Visual "Pohon Kejujuran Akidah".',
    teacherNote: 'Catatan: Penilaian, kreasi hiasan, dan jadwal pameran disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    title: 'Proyek 3 (PBL): Studi Kasus Kejujuran Saat Ujian Tanpa Pengawasan',
    subtitle: 'Problem Based Learning - Menganalisis Dilema Menyontek',
    badge: 'Problem Based Learning (PBL)',
    objective: 'Siswa menganalisis masalah ketika guru keluar kelas saat ulangan dan beberapa siswa tergoda untuk menyontek, dikaitkan dengan Sifat Basar dan Ilmu Allah.',
    steps: [
      '1. Amati kasus: Ketika guru sedang ada keperluan keluar kelas saat ujian, beberapa murid saling berbisik dan melihat catatan.',
      '2. Analisis dilema: Mengapa menyontek adalah tindakan yang salah meskipun tidak ada manusia yang melihat?',
      '3. Hubungkan dengan Sifat Wajib Allah: Sifat Basar (Maha Melihat) dan Ilmu (Maha Mengetahui).',
      '4. Susun usulan solusi dan komitmen bersama agar seluruh siswa jujur saat ujian.'
    ],
    output: 'Laporan Analisis Pemecahan Masalah Kejujuran Ujian.',
    teacherNote: 'Catatan: Format diskusi kelompok dan indikator kelulusan disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    title: 'Proyek 4 (PBL): Pemecahan Masalah Rasa Takut & Putus Asa',
    subtitle: 'Problem Based Learning - Menganalisis Keyakinan Sifat Qudrah & Sama\' Allah',
    badge: 'Problem Based Learning (PBL)',
    objective: 'Siswa menganalisis kisah seorang anak yang merasa takut dan merasa doanya tidak didengar, lalu menemukan solusi akidah yang benar.',
    steps: [
      '1. Amati kasus: Rina merasa sangat takut saat listrik padam di malam hari dan merasa sendirian.',
      '2. Identifikasi Sifat Wajib Allah yang relevan: Qudrah (Maha Kuasa), Sama\' (Maha Mendengar), dan Baqa\' (Kekal).',
      '3. Jelaskan mengapa seorang Muslim yang meyakini Sifat Wajib Allah tidak boleh mudah takut atau putus asa.',
      '4. Tuliskan langkah-langkah praktis bagi Rina agar merasa tenang dan selalu berdoa kepada Allah.'
    ],
    output: 'Lembar Solusi Analisis Karakter Berkelanjutan.',
    teacherNote: 'Catatan: Format penulisan dan bentuk presentasi disesuaikan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI (PETUALANGAN INTERAKTIF 20 SIFAT ALLAH)
// =========================================================================
export const KELAS3_P2_GAME: GameQuestion[] = [
  {
    id: 1,
    stage: 'Level 1: Konsep Sifat Wajib',
    prompt: 'Apakah yang dimaksud dengan Sifat Wajib bagi Allah Swt.?',
    options: [
      { id: 'a', text: 'Sifat yang pasti dimiliki oleh Allah Swt. sebagai Tuhan Yang Maha Sempurna', isCorrect: true, explanation: 'Benar sekali! Sifat wajib adalah sifat yang pasti dimiliki Allah.' },
      { id: 'b', text: 'Sifat yang boleh ada dan boleh tidak ada pada Allah Swt.', isCorrect: false, explanation: 'Salah, itu pengertian sifat jaiz.' },
      { id: 'c', text: 'Sifat yang tidak mungkin dimiliki oleh Allah Swt.', isCorrect: false, explanation: 'Salah, sifat yang tidak mungkin dimiliki Allah adalah sifat mustahil.' }
    ]
  },
  {
    id: 2,
    stage: 'Level 2: Pasangan Sifat Wajib & Mustahil',
    prompt: 'Sifat wajib Allah "Wujud" artinya Ada. Apakah lawan dari sifat Wujud (Sifat Mustahilnya)?',
    options: [
      { id: 'a', text: 'Fana\' (Binasa)', isCorrect: false, explanation: 'Salah, Fana adalah lawan dari Baqa\'.' },
      { id: 'b', text: '\'Adam (Tidak ada)', isCorrect: true, explanation: 'Tepat sekali! Lawan dari Wujud (Ada) adalah \'Adam (Tidak ada).' },
      { id: 'c', text: 'Huduts (Baru)', isCorrect: false, explanation: 'Salah, Huduts adalah lawan dari Qidam.' }
    ]
  },
  {
    id: 3,
    stage: 'Level 3: Sifat Basar (Maha Melihat)',
    prompt: 'Seorang murid menemukan uang di kelas dan mengembalikannya meskipun tidak ada yang melihat, karena meyakini sifat Allah...',
    options: [
      { id: 'a', text: 'Basar (Maha Melihat)', isCorrect: true, explanation: 'Hebat! Allah Maha Melihat semua perbuatan manusia.' },
      { id: 'b', text: 'Bukmun (Bisu)', isCorrect: false, explanation: 'Salah, Bukmun adalah sifat mustahil (Bisu).' },
      { id: 'c', text: 'Ta\'addud (Berbilang)', isCorrect: false, explanation: 'Salah, Ta\'addud adalah sifat mustahil (Berbilang).' }
    ]
  },
  {
    id: 4,
    stage: 'Level 4: Dalil Al-Qur\'an Sifat Wahdaniyah',
    prompt: 'Ayat "Qul huwallāhu aḥad" dalam Surah Al-Ikhlas ayat 1 merupakan dalil untuk sifat wajib Allah...',
    arabicSnippet: 'قُلْ هُوَ اللهُ أَحَدٌ',
    options: [
      { id: 'a', text: 'Wahdaniyah (Maha Esa)', isCorrect: true, explanation: 'Luar biasa! Wahdaniyah artinya Allah Maha Esa (Satu).' },
      { id: 'b', text: 'Qudrah (Maha Kuasa)', isCorrect: false, explanation: 'Salah, Qudrah artinya Maha Kuasa.' },
      { id: 'c', text: 'Baqa\' (Kekal)', isCorrect: false, explanation: 'Salah, Baqa\' artinya Kekal.' }
    ]
  },
  {
    id: 5,
    stage: 'Level 5: Jumlah Sifat Wajib & Mustahil',
    prompt: 'Berapakah jumlah Sifat Wajib dan Sifat Mustahil bagi Allah Swt. yang wajib kita pelajari?',
    options: [
      { id: 'a', text: 'Masing-masing 20 Sifat', isCorrect: true, explanation: 'Sempurna! Terdapat 20 Sifat Wajib dan 20 Sifat Mustahil bagi Allah Swt.' },
      { id: 'b', text: 'Masing-masing 10 Sifat', isCorrect: false, explanation: 'Salah, ada 20 sifat wajib dan 20 sifat mustahil.' },
      { id: 'c', text: 'Masing-masing 99 Sifat', isCorrect: false, explanation: 'Salah, 99 adalah Asmaul Husna.' }
    ]
  }
];

// =========================================================================
// 4. EVALUASI PEMBELAJARAN (SOAL HOTS & CT KELAS 3 PEMBELAJARAN 2)
// =========================================================================

// 10 PILIHAN GANDA (PG)
export const EVALUASI_P2_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Berdasarkan materi Bab II, sifat yang menunjukkan kebebasan mutlak Allah Swt. untuk melakukan sesuatu yang mungkin terjadi atau meninggalkannya disebut...',
    options: ['A. Sifat Mustahil', 'B. Sifat Wajib', 'C. Sifat Jaiz', 'D. Sifat Makruh'],
    correctAnswerIndex: 2,
    explanation: 'Sifat Jaiz adalah sifat kebebasan mutlak Allah Swt. untuk berbuat sesuatu yang mungkin atau meninggalkannya.'
  },
  {
    id: 2,
    question: 'Jumlah sifat wajib, sifat mustahil, dan sifat jaiz bagi Allah Swt. yang wajib kita pelajari berturut-turut adalah...',
    options: ['A. 20 sifat wajib, 20 sifat mustahil, dan 1 sifat jaiz', 'B. 10 sifat wajib, 10 sifat mustahil, dan 5 sifat jaiz', 'C. 25 sifat wajib, 25 sifat mustahil, dan 99 sifat jaiz', 'D. 99 sifat wajib, 20 sifat mustahil, dan 1 sifat jaiz'],
    correctAnswerIndex: 0,
    explanation: 'Allah Swt. memiliki 20 sifat wajib, 20 sifat mustahil, dan 1 sifat jaiz.'
  },
  {
    id: 3,
    question: 'Sifat wajib "Qidam" memiliki arti...',
    options: ['A. Ada', 'B. Terdahulu (tidak berawal)', 'C. Kekal', 'D. Maha Berkehendak'],
    correctAnswerIndex: 1,
    explanation: 'Qidam artinya Terdahulu (tidak berawal).'
  },
  {
    id: 4,
    question: 'Lawan dari sifat wajib "Wujud" (Ada) adalah sifat mustahil...',
    options: ['A. Huduts', 'B. \'Adam', 'C. Fana\'', 'D. Jahlun'],
    correctAnswerIndex: 1,
    explanation: 'Lawan dari Wujud (Ada) adalah \'Adam (Tidak ada).'
  },
  {
    id: 5,
    question: 'Perhatikan firman Allah berikut: قُلْ هُوَ اللهُ أَحَدٌ. Ayat tersebut menegaskan sifat wajib Allah...',
    arabic: 'قُلْ هُوَ اللهُ أَحَدٌ',
    options: ['A. Qudrah', 'B. Wahdaniyah', 'C. Ilmu', 'D. Sama\''],
    correctAnswerIndex: 1,
    explanation: 'Qul huwallāhu aḥad menegaskan sifat Wahdaniyah (Maha Esa).'
  },
  {
    id: 6,
    question: 'Sifat jaiz bagi Allah Swt. berbunyi "Fi\'lu kulli mumkinin au tarkuhu", yang artinya adalah...',
    arabic: 'فِعْلُ كُلِّ مُمْكِنٍ أَوْ تَرْكُهُ',
    options: [
      'A. Berbuat sesuatu yang mungkin terjadi atau meninggalkannya',
      'B. Maha Mendengar segala doa hamba-Nya',
      'C. Berbeda dengan seluruh makhluk di dunia',
      'D. Berdiri sendiri tanpa bantuan makhluk'
    ],
    correctAnswerIndex: 0,
    explanation: 'Sifat jaiz artinya berbuat sesuatu yang mungkin (murni kehendak Allah) atau meninggalkannya.'
  },
  {
    id: 7,
    question: 'Seorang anak menemukan uang di kantin sekolah dan menyerahkannya kepada guru meskipun tidak ada teman yang melihat. Perilaku tersebut merupakan pengamalan keyakinan terhadap sifat...',
    options: ['A. Basar dan Ilmu', 'B. Shamam dan Bukmun', 'C. Karahah dan Jahlun', 'D. Huduts dan Fana\''],
    correctAnswerIndex: 0,
    explanation: 'Meyakini Allah Basar (Maha Melihat) dan Ilmu (Maha Mengetahui) mendorong kejujuran.'
  },
  {
    id: 8,
    question: 'Sifat mustahil "Mumatsalatu lil Hawadits" artinya adalah...',
    options: ['A. Binasa', 'B. Menyerupai makhluk', 'C. Lemah', 'D. Bisu'],
    correctAnswerIndex: 1,
    explanation: 'Mumatsalatu lil Hawadits artinya menyerupai makhluk (lawan Mukhalafatu lil Hawadits).'
  },
  {
    id: 9,
    question: 'Contoh penerapan keimanan kepada sifat-sifat Allah di lingkungan sekolah adalah...',
    options: [
      'A. Menyontek saat ujian',
      'B. Jujur mengerjakan tugas dan tidak menyontek',
      'C. Berbuat gaduh di kelas',
      'D. Acuh tak acuh kepada guru'
    ],
    correctAnswerIndex: 1,
    explanation: 'Jujur mengerjakan tugas dan tidak menyontek adalah pengamalan di sekolah.'
  },
  {
    id: 10,
    question: 'Contoh dari pengamalan Sifat Jaiz bagi Allah Swt. dalam kehidupan alam semesta adalah...',
    options: [
      'A. Allah berkuasa menciptakan hujan atau tidak menurunkan hujan sesuai kehendak-Nya',
      'B. Manusia dapat memaksa Allah untuk meluluskan semua keinginannya',
      'C. Allah terpaksa memberikan harta benda kepada semua makhluk',
      'D. Alam semesta tercipta secara kebetulan tanpa kehendak Allah'
    ],
    correctAnswerIndex: 0,
    explanation: 'Allah Swt. Mahabebas (Sifat Jaiz) menciptakan hujan atau tidak menciptakannya.'
  }
];

// 5 PILIHAN GANDA KOMPLEKS (PGK)
export const EVALUASI_P2_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Manakah di antara sifat berikut yang TERGOLONG Sifat Wajib bagi Allah Swt.? (Pilih lebih dari satu)',
    options: [
      'A. Wujud (Ada)',
      'B. Qidam (Terdahulu)',
      'C. Huduts (Baru)',
      'D. Wahdaniyah (Maha Esa)'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Wujud, Qidam, dan Wahdaniyah adalah Sifat Wajib. Huduts adalah Sifat Mustahil.'
  },
  {
    id: 2,
    question: 'Manakah di antara pernyataan berikut yang BENAR mengenai Sifat Jaiz bagi Allah Swt.? (Pilih lebih dari satu)',
    options: [
      'A. Sifat Jaiz bagi Allah berjumlah 1 sifat',
      'B. Bunyi Sifat Jaiz yaitu "Fi\'lu kulli mumkinin au tarkuhu"',
      'C. Allah dipaksa oleh makhluk untuk mengabulkan seluruh permintaan',
      'D. Allah Mahabebas menciptakan atau tidak menciptakan sesuatu di alam semesta'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Sifat Jaiz berjumlah 1, berbunyi Fi\'lu kulli mumkinin au tarkuhu, dan menunjukkan kebebasan mutlak Allah.'
  },
  {
    id: 3,
    question: 'Pilihlah contoh sikap jujur dan bertanggung jawab karena meyakini sifat Basar dan Ilmu Allah! (Pilih lebih dari satu)',
    options: [
      'A. Mengembalikan barang temuan kepada pemiliknya',
      'B. Mengerjakan ujian sendiri tanpa menyontek',
      'C. Berbohong agar tidak dimarahi orang tua',
      'D. Berkata jujur walaupun tidak ada yang mengawasi'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Mengembalikan barang, mengerjakan ujian jujur, dan berkata jujur adalah pengamalan iman.'
  },
  {
    id: 4,
    question: 'Manakah pernyataan yang BENAR mengenai Sifat Wajib Allah? (Pilih lebih dari satu)',
    options: [
      'A. Qudrah artinya Maha Kuasa',
      'B. Sama\' artinya Maha Mendengar',
      'C. Basar artinya Maha Bisu',
      'D. Ilmu artinya Maha Mengetahui'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Qudrah (Maha Kuasa), Sama\' (Maha Mendengar), dan Ilmu (Maha Mengetahui) adalah benar. Basar artinya Maha Melihat.'
  },
  {
    id: 5,
    question: 'Pilihlah hikmah mempelajari Sifat Wajib, Mustahil, dan Jaiz bagi Allah! (Pilih lebih dari satu)',
    options: [
      'A. Menambah keimanan dan rasa cinta kepada Allah',
      'B. Mendorong untuk selalu berbuat jujur',
      'C. Menjadikan manusia menjadi sombong',
      'D. Membentuk akhlak mulia dalam kehidupan sehari-hari'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Hikmahnya meliputi menambah iman, mendorong kejujuran, dan membentuk akhlak mulia.'
  }
];

// 5 SOAL MENJODOHKAN (MATCHING)
export const EVALUASI_P2_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Sifat Wajib Wujud',
    rightText: 'Artinya: Ada (Lawan: \'Adam)'
  },
  {
    id: 2,
    leftText: 'Sifat Wajib Qudrah',
    rightText: 'Artinya: Maha Kuasa (Lawan: \'Ajzun)'
  },
  {
    id: 3,
    leftText: 'Sifat Jaiz Allah',
    rightText: 'Fi\'lu kulli mumkinin au tarkuhu (Berbuat/tidak berbuat hal yang mungkin)'
  },
  {
    id: 4,
    leftText: 'Sifat Wajib Wahdaniyah',
    rightText: 'Artinya: Maha Esa (Lawan: Ta\'addud)'
  },
  {
    id: 5,
    leftText: 'Sifat Mustahil Fana\'',
    rightText: 'Artinya: Binasa (Lawan: Baqa\')'
  }
];

// 5 SOAL MEMILIH BENAR ATAU SALAH (B/S)
export const EVALUASI_P2_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Allah Swt. memiliki 20 Sifat Wajib, 20 Sifat Mustahil, dan 1 Sifat Jaiz.',
    isTrue: true,
    explanation: 'Benar. Jumlah Sifat Wajib 20, Sifat Mustahil 20, dan Sifat Jaiz 1.'
  },
  {
    id: 2,
    statement: 'Sifat Jaiz bagi Allah Swt. artinya Allah wajib menciptakan manusia dan tidak boleh membiarkan manusia.',
    isTrue: false,
    explanation: 'Salah. Sifat Jaiz berarti Allah boleh (bebas) berbuat sesuatu yang mungkin terjadi atau meninggalkannya.'
  },
  {
    id: 3,
    statement: 'Sifat Basar berarti Allah Maha Bisu dan tidak dapat mendengar suara doa hamba-Nya.',
    isTrue: false,
    explanation: 'Salah. Basar artinya Maha Melihat. Sama\' artinya Maha Mendengar.'
  },
  {
    id: 4,
    statement: 'Menyontek saat ujian diperbolehkan jika tidak ada guru yang mengawasi di dalam kelas.',
    isTrue: false,
    explanation: 'Salah. Menyontek adalah perbuatan dosa dan dilarang karena Allah Maha Melihat (Basar).'
  },
  {
    id: 5,
    statement: 'Anak yang meyakini Sifat Ilmu Allah akan selalu jujur karena yakin Allah tahu segala perbuatannya.',
    isTrue: true,
    explanation: 'Benar. Meyakini Allah Maha Mengetahui menumbuhkan sifat jujur dan takut berbuat dosa.'
  }
];

// 5 SOAL URAIAN (ESSAY WITH RUBRIC & SAMPLE ANSWER)
export const EVALUASI_P2_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan perbedaan antara Sifat Wajib, Sifat Mustahil, dan Sifat Jaiz bagi Allah Swt.!',
    rubric: 'Skor 20: Menjelaskan Sifat Wajib (pasti ada), Sifat Mustahil (tidak mungkin ada), dan Sifat Jaiz (kebebasan berkehendak Allah) secara lengkap.',
    sampleAnswer: '1. Sifat Wajib: Sifat yang pasti dimiliki oleh Allah Swt. (20 Sifat).\n2. Sifat Mustahil: Sifat yang tidak mungkin dimiliki oleh Allah Swt. (20 Sifat).\n3. Sifat Jaiz: Sifat kebebasan mutlak Allah Swt. untuk berbuat sesuatu yang mungkin atau meninggalkannya (1 Sifat).'
  },
  {
    id: 2,
    question: 'Jelaskan pengertian Sifat Jaiz bagi Allah Swt. beserta lafal Arab dan artinya!',
    rubric: 'Skor 20: Menyebutkan lafal "Fi\'lu kulli mumkinin au tarkuhu" dan artinya "Berbuat sesuatu yang mungkin terjadi atau meninggalkannya".',
    sampleAnswer: 'Sifat Jaiz bagi Allah adalah sifat kebebasan mutlak Allah Swt. untuk berbuat sesuatu yang mungkin atau meninggalkannya.\nLafal Arab: فِعْلُ كُلِّ مُمْكِنٍ أَوْ تَرْكُهُ (Fi\'lu kulli mumkinin au tarkuhu).\nArtinya: Berbuat sesuatu yang mungkin terjadi atau meninggalkannya.'
  },
  {
    id: 3,
    question: 'Mengapa seorang Muslim yang meyakini Sifat Basar (Maha Melihat) dan Sifat Ilmu (Maha Mengetahui) Allah tidak akan berbuat curang atau menyontek saat ujian?',
    rubric: 'Skor 20: Menjelaskan bahwa siswa yakin Allah selalu melihat dan mengetahui semua perbuatan manusia walaupun tidak ada guru/orang lain yang melihat.',
    sampleAnswer: 'Karena ia meyakini bahwa walaupun tidak ada guru atau manusia yang melihat, Allah Swt. Maha Melihat (Basar) dan Maha Mengetahui (Ilmu) semua perbuatan manusia secara nyata maupun tersembunyi.'
  },
  {
    id: 4,
    question: 'Sebutkan 3 contoh perbuatan Allah di alam semesta yang mencerminkan Sifat Jaiz bagi Allah Swt.!',
    rubric: 'Skor 20: Menyebutkan 3 contoh (menciptakan hujan/tidak, menciptakan manusia/tidak, memberi rezeki/kesehatan kepada hamba-Nya).',
    sampleAnswer: '1. Allah Swt. boleh menciptakan alam semesta, bumi, dan langit atau tidak menciptakannya.\n2. Allah Swt. boleh menurunkan hujan di suatu daerah dan tidak menurunkan hujan di daerah lain.\n3. Allah Swt. boleh memberi rezeki dan kesehatan kepada hamba-Nya sesuai kehendak mutlak-Nya.'
  },
  {
    id: 5,
    question: 'Pelajaran dan teladan apa yang dapat kamu ambil dari kisah anak yang menemukan dompet di halaman sekolah dalam materi Bab II?',
    rubric: 'Skor 20: Menyebutkan nilai kejujuran, tidak mengambil hak orang lain, dan keyakinan akan pengawasan Allah.',
    sampleAnswer: 'Pelajaran yang diambil adalah pentingnya bersikap jujur dan tidak mengambil barang milik orang lain. Walaupun tidak ada manusia yang melihat, kita harus yakin Allah Swt. selalu melihat (Basar) dan mengetahui (Ilmu) semua perbuatan kita.'
  }
];
