// Data Lengkap Kelas 4 Pembelajaran 2 berdasarkan PDF Resmi BAB 3:
// Mengenal dan Meneladani Asmaul Husna: Al-Ghaffār, Al-Wahhāb, Al-Fattāḥ, dan Al-Laṭīf

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

export interface AsmaulHusnaQuestStep {
  id: number;
  asmaName: string;
  arabicName: string;
  meaning: string;
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
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 4 PEMBELAJARAN 2)
// =========================================================================
export const KELAS4_P2_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Pengertian Asmaul Husna & Dalil Al-Qur\'an',
    subtitle: 'Mengenal Nama-Nama Allah Swt. Yang Indah dan Sempurna',
    iconName: 'Target',
    points: [
      '• Kata Asmaul Husna berasal dari bahasa Arab:',
      '  - Asma\' (أَسْمَاءُ) berarti: nama-nama.',
      '  - Al-Husna (الْحُسْنَى) berarti: yang paling indah atau paling baik.',
      '• Jadi, Asmaul Husna adalah nama-nama Allah Swt. yang indah dan sempurna yang menunjukkan sifat-sifat kesempurnaan-Nya.',
      '• Seorang Muslim hendaknya mengenal, mengimani, menghafal, memahami maknanya, serta meneladani nilainya dalam kehidupan.'
    ],
    highlightBox: {
      title: '📖 Firman Allah Swt. (Q.S. Al-A\'raf: 180)',
      content: '"وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا" — Dan Allah memiliki Asmaul Husna (nama-nama yang terbaik), maka bermohonlah kepada-Nya dengan menyebut nama-nama itu.',
      type: 'info'
    }
  },
  {
    id: 2,
    title: '2. Hadits Keutamaan Menghafal Asmaul Husna',
    subtitle: 'Jaminan Surga Bagi yang Menghafal dan Mengamalkannya',
    iconName: 'Sparkles',
    points: [
      '• Rasulullah saw. bersabda:',
      '  "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, seratus kurang satu. Barang siapa menghafal dan mengamalkannya, maka ia akan masuk surga."',
      '  (H.R. Bukhari dan Muslim)',
      '• Mengamalkan Asmaul Husna berarti menjadikan sifat-sifat terpuji tersebut sebagai teladan dalam sikap dan perilaku sehari-hari.'
    ],
    highlightBox: {
      title: '🌟 Janji Rasulullah saw.',
      content: 'Menghafal bukan sekadar mengucapkan di lisan, tetapi meresapi arti dan meneladani sifat-sifat Allah Swt. dalam akhlak kita.',
      type: 'tip'
    }
  },
  {
    id: 3,
    title: '3. Asmaul Husna Al-Ghaffār (الْغَفَّارُ)',
    subtitle: 'Allah Maha Pengampun Segala Dosa Hamba-Nya',
    iconName: 'Heart',
    points: [
      '• Pengertian: Al-Ghaffār (الْغَفَّارُ) berarti Allah Maha Pengampun.',
      '• Allah Swt. senantiasa membuka pintu ampunan bagi hamba-Nya yang bertobat dengan sungguh-sungguh.',
      '• Walaupun manusia sering berbuat salah, Allah Swt. tetap memberikan kesempatan untuk memperbaiki diri.',
      '• Dalil (Q.S. Taha: 82): "Dan sungguh Aku Maha Pengampun bagi orang yang bertobat, beriman, beramal saleh, kemudian tetap dalam petunjuk."'
    ],
    arabicExamples: [
      { arabic: 'الْغَفَّارُ', latin: 'Al-Ghaffār', meaning: 'Allah Maha Pengampun', note: 'Meneladani: Mudah memaafkan teman, meminta maaf jika salah, tidak menyimpan dendam, memperbanyak istigfar.' }
    ],
    highlightBox: {
      title: '💡 Contoh Teladan Al-Ghaffār',
      content: 'Ali tanpa sengaja merusak pensil temannya. Ia segera meminta maaf dan mengganti pensil tersebut. Temannya memaafkan dengan ikhlas.',
      type: 'info'
    }
  },
  {
    id: 4,
    title: '4. Asmaul Husna Al-Wahhāb (الْوَهَّابُ)',
    subtitle: 'Allah Maha Pemberi Karunia Tanpa Mengharap Imbalan',
    iconName: 'Gift',
    points: [
      '• Pengertian: Al-Wahhāb (الْوَهَّابُ) berarti Allah Maha Pemberi Karunia.',
      '• Segala nikmat manusia berasal dari Allah Swt.: kesehatan, ilmu, keluarga, rezeki, udara, air, makanan, dan kehidupan.',
      '• Dalil (Q.S. Ali \'Imran: 8): "...Sesungguhnya Engkaulah Yang Maha Pemberi (Al-Wahhāb)."',
      '• Keteladanan: Gemar berbagi, suka bersedekah, membantu teman, meminjamkan barang kepada yang membutuhkan, dan tidak pelit.'
    ],
    arabicExamples: [
      { arabic: 'الْوَهَّابُ', latin: 'Al-Wahhāb', meaning: 'Allah Maha Pemberi Karunia', note: 'Meneladani: Suka berbagi makanan, dermawan, meminjamkan alat tulis secara ikhlas.' }
    ],
    highlightBox: {
      title: '💡 Contoh Teladan Al-Wahhāb',
      content: 'Fatimah memiliki dua kotak pensil. Ketika melihat temannya belum memiliki tempat pensil, ia memberikan salah satunya dengan ikhlas.',
      type: 'info'
    }
  },
  {
    id: 5,
    title: '5. Asmaul Husna Al-Fattāḥ (الْفَتَّاحُ)',
    subtitle: 'Allah Maha Membuka Pintu Rahmat, Ilmu, dan Keberhasilan',
    iconName: 'Key',
    points: [
      '• Pengertian: Al-Fattāḥ (الْفَتَّاحُ) berarti Allah Maha Membuka.',
      '• Allah membuka: pintu rezeki, pintu ilmu, pintu rahmat, pintu pertolongan, pintu keberhasilan, dan pintu ampunan.',
      '• Dalil (Q.S. Saba\': 26): "Dan Dialah Pemberi keputusan yang terbaik."',
      '• Keteladanan: Tidak mudah putus asa, rajin belajar, gemar membantu teman memecahkan masalah, optimis, dan terus berusaha.'
    ],
    arabicExamples: [
      { arabic: 'الْفَتَّاحُ', latin: 'Al-Fattāḥ', meaning: 'Allah Maha Membuka', note: 'Meneladani: Pantang menyerah saat pelajaran sulit, optimis, aktif membantu teman memecahkan masalah.' }
    ],
    highlightBox: {
      title: '💡 Contoh Teladan Al-Fattāḥ',
      content: 'Seorang siswa mengalami kesulitan memahami pelajaran. Ia tidak menyerah, terus belajar dan berdoa. Akhirnya Allah memberikan kemudahan sehingga mendapat nilai baik.',
      type: 'info'
    }
  },
  {
    id: 6,
    title: '6. Asmaul Husna Al-Laṭīf (اللَّطِيفُ)',
    subtitle: 'Allah Maha Lembut dan Maha Halus Kepada Seluruh Makhluk',
    iconName: 'Smile',
    points: [
      '• Pengertian: Al-Laṭīf (اللَّطِيفُ) berarti Allah Maha Lembut atau Maha Halus.',
      '• Allah mengetahui segala sesuatu, bahkan yang paling tersembunyi sekalipun.',
      '• Kasih sayang Allah diberikan kepada seluruh makhluk-Nya dengan penuh kelembutan.',
      '• Dalil (Q.S. Al-Mulk: 14): "Sesungguhnya Allah Maha Lembut lagi Maha Mengetahui."',
      '• Keteladanan: Berbicara sopan, bersikap lembut, tidak membentak teman, menghormati orang tua/guru, menolong dengan penuh kasih.'
    ],
    arabicExamples: [
      { arabic: 'اللَّطِيفُ', latin: 'Al-Laṭīf', meaning: 'Allah Maha Lembut', note: 'Meneladani: Berbicara santun, menenangkan adik yang jatuh tanpa memarahinya.' }
    ]
  },
  {
    id: 7,
    title: '7. Matriks Hubungan Asmaul Husna & Keteladanan',
    subtitle: 'Rangkuman Sifat dan Perilaku Sehari-hari',
    iconName: 'Layers',
    points: [
      'Mengenal Asmaul Husna bukan hanya untuk dihafal, tetapi wajib diamalkan dalam perilaku nyata:'
    ],
    tableData: {
      headers: ['Asmaul Husna', 'Lafazh Arab', 'Arti Makna', 'Bentuk Keteladanan Utama'],
      rows: [
        ['Al-Ghaffār', 'الْغَفَّارُ', 'Maha Pengampun', 'Pemaaf, meminta maaf jika salah, suka memohon ampun, tidak dendam'],
        ['Al-Wahhāb', 'الْوَهَّابُ', 'Maha Pemberi Karunia', 'Gemar berbagi, suka bersedekah, dermawan, membantu yang butuh'],
        ['Al-Fattāḥ', 'الْفَتَّاحُ', 'Maha Membuka', 'Optimis, rajin berusaha, pantang menyerah, membantu solusi masalah'],
        ['Al-Laṭīf', 'اللَّطِيفُ', 'Maha Lembut', 'Lemah lembut, berbicara santun, penyayang, tidak membentak']
      ]
    }
  },
  {
    id: 8,
    title: '8. Hikmah Mengimani 4 Asmaul Husna',
    subtitle: 'Manfaat Keimanan Bagi Pembentukan Akhlak Mulia',
    iconName: 'ShieldCheck',
    points: [
      '1. Menambah keimanan dan kecintaan kepada Allah Swt.',
      '2. Rajin berdoa dan senantiasa berbuat kebaikan.',
      '3. Menjadi pribadi yang santun, ramah, dan lekas memaafkan.',
      '4. Suka berbagi rezeki dan ilmu kepada sesama.',
      '5. Memiliki semangat belajar tinggi dan pantang menyerah dalam menghadapi ujian.'
    ]
  },
  {
    id: 9,
    title: '9. Penerapan Asmaul Husna di Rumah, Sekolah & Masyarakat',
    subtitle: 'Aksi Nyata Murid Kelas 4',
    iconName: 'Compass',
    points: [
      '🏠 Di Rumah:',
      '  - Meminta maaf kepada orang tua jika berbuat salah (Al-Ghaffār).',
      '  - Membantu pekerjaan rumah & menyayangi adik (Al-Wahhāb & Al-Laṭīf).',
      '  - Berbicara dengan kata-kata yang sopan (Al-Laṭīf).',
      '🏫 Di Sekolah:',
      '  - Memaafkan kesalahan teman & berbagi alat tulis (Al-Ghaffār & Al-Wahhāb).',
      '  - Membantu teman yang kesulitan belajar (Al-Fattāḥ).',
      '  - Menghormati bapak/ibu guru dengan santun.',
      '🌍 Di Masyarakat:',
      '  - Membantu tetangga, ikut kegiatan sosial, dan menjaga kerukunan.'
    ]
  },
  {
    id: 10,
    title: '10. Kisah Inspiratif: Aisyah Teladan Asmaul Husna',
    subtitle: 'Meneladani Al-Wahhāb, Al-Ghaffār, Al-Laṭīf, dan Al-Fattāḥ',
    iconName: 'Heart',
    points: [
      '📖 Kisah Aisyah di Sekolah:',
      'Suatu hari, Aisyah melihat temannya tidak membawa bekal. Tanpa diminta, Aisyah membagi makan siangnya menjadi dua bagian. Saat temannya berterima kasih, Aisyah berkata: "Semua rezeki berasal dari Allah, kita harus saling berbagi" (Meneladani Al-Wahhāb).',
      '',
      'Di lain waktu, seorang teman tidak sengaja menghilangkan penghapus Aisyah. Aisyah memaafkannya dengan senyuman (Meneladani Al-Ghaffār).',
      '',
      'Ia juga selalu berbicara dengan suara lembut dan santun (Meneladani Al-Laṭīf) serta terus semangat belajar dan berdoa saat mendapat tugas sulit (Meneladani Al-Fattāḥ).'
    ]
  }
];

// =========================================================================
// 2. PENUGASAN PROYEK MURID (2 PjBL + 2 PBL) - Sesuai Kebijakan Guru
// =========================================================================
export const KELAS4_P2_PROJECTS: ProjectTask[] = [
  {
    id: 'p2_pjbl_1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Papan Visual Asmaul Husna 4 Sifat & Pohon Kebaikan',
    subtitle: 'Proyek Membuat Display Edukasi Al-Ghaffār, Al-Wahhāb, Al-Fattāḥ, dan Al-Laṭīf',
    objective: 'Peserta didik mampu mengkreasikan papan visual 4 Asmaul Husna beserta kaligrafi Arab, arti, dan daun-daun aksi nyata perilaku sehari-hari.',
    steps: [
      '1. Siapkan karton manila A3, spidol warna-warni, kertas lipat, dan lem kertas.',
      '2. Buatlah 4 kotak utama untuk: Al-Ghaffār, Al-Wahhāb, Al-Fattāḥ, dan Al-Laṭīf.',
      '3. Tuliskan lafazh Arab, arti bahasa Indonesia, dan 3 contoh perilaku nyata pada masing-masing kotak.',
      '4. Gunting kertas berbentuk daun, lalu tuliskan pengalaman pribadi memaafkan atau berbagi barang dengan teman.',
      '5. Tempelkan daun pengalaman tersebut pada "Pohon Kebaikan Asmaul Husna" dan pajang di dinding kelas.'
    ],
    output: 'Papan Visual A3 "Pohon Kebaikan 4 Asmaul Husna".',
    teacherNote: 'Kriteria kerapian penulisan kaligrafi, kelengkapan contoh perilaku, dan waktu pembuatan disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p2_pjbl_2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Buku Saku Saling Memaafkan & Jurnal Berbagi (Al-Ghaffār & Al-Wahhāb)',
    subtitle: 'Proyek Pembiasaan Akhlak Mulia 7 Hari di Rumah dan Sekolah',
    objective: 'Peserta didik mampu membiasakan sikap pemaaf dan gemar berbagi melalui catatan jurnal harian terpuji.',
    steps: [
      '1. Lipat kertas HVS warna menjadi buku saku berukuran A5 bertema "Jurnal Akhlak Asmaul Husna".',
      '2. Buatlah kolom "Aksi Memaafkan (Al-Ghaffār)" dan "Aksi Berbagi (Al-Wahhāb)".',
      '3. Catatlah setiap hari selama 7 hari tindakan memaafkan teman/adik dan tindakan berbagi barang/makanan.',
      '4. Mintalah tanda tangan apresiasi dari orang tua di rumah atau wali kelas di sekolah.',
      '5. Ceritakan salah satu pengalaman paling berkesan di depan teman-teman kelas.'
    ],
    output: 'Buku Saku Jurnal Akhlak 7 Hari (Al-Ghaffār & Al-Wahhāb).',
    teacherNote: 'Format pengisian jurnal dan verifikasi keterlibatan orang tua disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p2_pbl_1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Analisis Kasus: "Mengapa Budi Menyimpan Dendam dan Pelit Pinjam Pensil?"',
    subtitle: 'Solusi Pemecahan Masalah Perilaku Egois Menggunakan Nilai Asmaul Husna',
    objective: 'Peserta didik mampu menganalisis penyebab perilaku dendam dan pelit serta merumuskan langkah perbaikan berlandaskan Al-Ghaffār dan Al-Wahhāb.',
    steps: [
      '1. Bacalah studi kasus: "Budi marah karena penghapusnya tidak sengaja dipatahkan Andi. Budi menolak permintaan maaf Andi dan tidak mau meminjamkan pensil cadangannya kepada siapapun."',
      '2. Identifikasi masalah: Sifat Asmaul Husna apakah yang dilupakan Budi? Mengapa menyimpan dendam itu merugikan?',
      '3. Diskusikan solusi dalam kelompok: Bagaimana cara Andi dan guru membimbing Budi agar mau meneladani sifat Al-Ghaffār (Pemaaf) dan Al-Wahhāb (Maha Pemberi)?',
      '4. Susunlah 3 saran konkret perbaikan sikap untuk Budi.',
      '5. Simulasikan drama pendek (roleplay) penyelesaian masalah Budi di depan kelas.'
    ],
    output: 'Laporan Solusi Studi Kasus & Naskah Simulasi Roleplay.',
    teacherNote: 'Pembagian kelompok diskusi dan rubrik penilaian simulasi roleplay disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p2_pbl_2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Studi Kasus Kesulitan Belajar Matematika: Sifat Al-Fattāḥ & Al-Laṭīf',
    subtitle: 'Merancang Strategi Belajar Pantang Menyerah dan Tutur Kata Santun',
    objective: 'Peserta didik mampu memecahkan masalah rasa putus asa saat menghadapi soal sulit dengan meneladani sifat Al-Fattāḥ dan Al-Laṭīf.',
    steps: [
      '1. Amati kasus: "Siti sering menangis dan langsung menyerah ketika mendapat nilai kecil di ujian. Ia juga sering berkata kasar karena kesal pada dirinya sendiri."',
      '2. Analisis hubungan kasus dengan sifat Al-Fattāḥ (Allah Maha Membuka Pintu Ilmu) dan Al-Laṭīf (Maha Lembut).',
      '3. Jawab pertanyaan: Mengapa Siti harus optimis dan tidak boleh berkata kasar saat menghadapi ujian sulit?',
      '4. Buatlah "Peta Langkah Solusi Siti" yang berisi: Berdoa mohon dibukakan ilmu, belajar kelompok secara santun, dan tidak gampang putus asa.',
      '5. Presentasikan hasil peta solusi di depan kelas.'
    ],
    output: 'Peta Langkah Solusi Kesulitan Belajar (Al-Fattāḥ & Al-Laṭīf).',
    teacherNote: 'Teknik pendampingan murid dan format laporan evaluasi disesuaikan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI INTERAKTIF: PETUALANGAN INTERAKTIF 4 ASMAUL HUSNA
// =========================================================================
export const KELAS4_P2_GAMIFICATION_QUEST: AsmaulHusnaQuestStep[] = [
  {
    id: 1,
    asmaName: 'Al-Ghaffār',
    arabicName: 'الْغَفَّارُ',
    meaning: 'Allah Maha Pengampun',
    scenarioTitle: 'Pos 1: Lembah Pintu Ampunan (Al-Ghaffār)',
    scenarioStory: 'Di perjalanan menuju Puncak Akhlak, kamu melihat Ali menangis karena tanpa sengaja menyenggol dan memecahkan vas bunga kesayangan ibunya. Ali merasa sangat bersalah.',
    questionPrompt: 'Sebagai murid yang meneladani sifat Al-Ghaffār, apakah tindakan terbaik yang harus dilakukan Ali?',
    options: [
      { id: '1a', text: 'Segera meminta maaf dengan jujur, menyesali kesalahan, dan membantu merapikan pecahan vas', isCorrect: true, explanation: 'Masya Allah! Meneladani Al-Ghaffār artinya berani meminta maaf, menyesali kesalahan, dan berusaha memperbaiki diri.' },
      { id: '1b', text: 'Pura-pura tidak tahu dan menyalahkan kucing yang lewat', isCorrect: false, explanation: 'Salah! Berbohong dan melempar kesalahan bertentangan dengan sifat Al-Ghaffār.' },
      { id: '1c', text: 'Lari bersembunyi di dalam kamar agar tidak dimarahi', isCorrect: false, explanation: 'Salah! Bersembunyi tidak menyelesaikan masalah.' },
      { id: '1d', text: 'Marah-marah karena vas ditaruh sembarangan', isCorrect: false, explanation: 'Salah! Menyalahkan tempat bertentangan dengan sikap jujur.' }
    ]
  },
  {
    id: 2,
    asmaName: 'Al-Wahhāb',
    arabicName: 'الْوَهَّابُ',
    meaning: 'Allah Maha Pemberi Karunia',
    scenarioTitle: 'Pos 2: Taman Karunia Berbagi (Al-Wahhāb)',
    scenarioStory: 'Kamu tiba di Taman Berbagi. Di sana kamu melihat sahabatmu, Hasan, lupa membawa uang jajan dan bekal makanan ke sekolah. Perut Hasan terdengar berbunyi karena lapar.',
    questionPrompt: 'Bagaimanakah sikapmu dalam meneladani sifat Al-Wahhāb (Maha Pemberi)?',
    options: [
      { id: '2a', text: 'Membagi bekal makan siangmu secara ikhlas tanpa meminta imbalan apapun', isCorrect: true, explanation: 'Tepat sekali! Meneladani Al-Wahhāb adalah gemar berbagi dan dermawan kepada sesama.' },
      { id: '2b', text: 'Makan bekal lezatmu di depan Hasan sampai habis', isCorrect: false, explanation: 'Salah! Memamerkan makanan di depan teman yang lapar adalah sikap pelit.' },
      { id: '2c', text: 'Menjual setengah bekalmu kepada Hasan dengan harga mahal', isCorrect: false, explanation: 'Salah! Meneladani Al-Wahhāb harus ikhlas tanpa mencari keuntungan.' },
      { id: '2d', text: 'Menyuruh Hasan meminta makanan kepada guru', isCorrect: false, explanation: 'Salah! Kita harus berinisiatif menolong teman.' }
    ]
  },
  {
    id: 3,
    asmaName: 'Al-Fattāḥ',
    arabicName: 'الْفَتَّاحُ',
    meaning: 'Allah Maha Membuka',
    scenarioTitle: 'Pos 3: Gerbang Pintu Ilmu (Al-Fattāḥ)',
    scenarioStory: 'Kamu menemukan kunci rahasia gerbang ilmu. Namun untuk membukanya, kamu harus menyelesaikan soal matematika yang sangat rumit. Temanmu sudah putus asa dan ingin menyerah.',
    questionPrompt: 'Bagaimanakah sikap teladan Al-Fattāḥ yang harus kamu lakukan?',
    options: [
      { id: '3a', text: 'Tetap optimis, berdoa memohon petunjuk Allah, dan rajin berusaha mencari solusi bersama', isCorrect: true, explanation: 'Luar biasa! Al-Fattāḥ mengajarkan kita optimis dan percaya bahwa Allah membuka jalan kemudahan.' },
      { id: '3b', text: 'Ikut menyerah dan melempar buku pelajaran ke lantai', isCorrect: false, explanation: 'Salah! Putus asa adalah sikap menolak teladan Al-Fattāḥ.' },
      { id: '3c', text: 'Mencontek jawaban milik orang lain secara curang', isCorrect: false, explanation: 'Salah! Mencontek itu dilarang agama.' },
      { id: '3d', text: 'Menunggu orang lain mengerjakan semua soal untukmu', isCorrect: false, explanation: 'Salah! Kita harus berusaha keras lebih dulu.' }
    ]
  },
  {
    id: 4,
    asmaName: 'Al-Laṭīf',
    arabicName: 'اللَّطِيفُ',
    meaning: 'Allah Maha Lembut',
    scenarioTitle: 'Pos 4: Istana Kelembutan Hati (Al-Laṭīf)',
    scenarioStory: 'Di perjalanan akhir, kamu melihat adik kecilmu menangis tersedu-sedu karena mainannya tersangkut di atas lemari. Hati adik terasa sangat sedih.',
    questionPrompt: 'Bagaimanakah tindakan yang mencerminkan keteladanan sifat Al-Laṭīf (Maha Lembut)?',
    options: [
      { id: '4a', text: 'Berbicara sopan, menenangkan adik dengan lembut, dan mengambilkan mainannya dengan kasih sayang', isCorrect: true, explanation: 'Sempurna! Meneladani Al-Laṭīf berarti bersikap lemah lembut, santun, dan penyayang.' },
      { id: '4b', text: 'Membentak adik dan menyuruhnya diam karena bising', isCorrect: false, explanation: 'Salah! Membentak bertentangan dengan sifat Al-Laṭīf.' },
      { id: '4c', text: 'Mengejek adik karena tidak bisa mengambil mainannya sendiri', isCorrect: false, explanation: 'Salah! Mengejek merusak kelembutan hati.' },
      { id: '4d', text: 'Pura-pura tidak mendengar tangisan adik', isCorrect: false, explanation: 'Salah! Acuh tak acuh bukan sikap penyayang.' }
    ]
  },
  {
    id: 5,
    asmaName: 'Integrasi Asmaul Husna',
    arabicName: 'أَسْمَاءُ اللَّهِ الْحُسْنَى',
    meaning: 'Nama-Nama Allah Yang Indah',
    scenarioTitle: 'Pos 5: Puncak Mahkota Asmaul Husna',
    scenarioStory: 'Selamat! Kamu telah mencapai Puncak Mahkota Asmaul Husna. Sekarang, kamu diminta menyimpulkan apakah manfaat utama mengimani keempat Asmaul Husna ini dalam kehidupan sehari-hari.',
    questionPrompt: 'Apakah hikmah utama mengimani Al-Ghaffār, Al-Wahhāb, Al-Fattāḥ, dan Al-Laṭīf?',
    options: [
      { id: '5a', text: 'Membentuk akhlak mulia: pemaaf, dermawan, optimis pantang menyerah, dan bertutur kata santun', isCorrect: true, explanation: 'Masya Allah! Inilah tujuan utama mengimani Asmaul Husna yaitu mengamalkan akhlak terpuji.' },
      { id: '5b', text: 'Agar dipuji oleh banyak orang sebagai anak yang pintar', isCorrect: false, explanation: 'Salah! Mengamalkan Asmaul Husna harus ikhlas karena Allah Swt.' },
      { id: '5c', text: 'Hanya untuk mendapat nilai 100 saat ujian sekolah', isCorrect: false, explanation: 'Salah! Nilai ujian hanya salah satu bonus, yang utama adalah amalan nyata.' },
      { id: '5d', text: 'Agar bisa menguasai dan memerintah teman-teman kelas', isCorrect: false, explanation: 'Salah! Asmaul Husna mengajarkan kerendahan hati.' }
    ]
  }
];

// =========================================================================
// 4. EVALUASI PEMBELAJARAN (HOTS & COMPUTATIONAL THINKING)
// =========================================================================

// A. PILIHAN GANDA (10 Soal)
export const EVALUASI_P2_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Secara bahasa, Asmaul Husna berasal dari kata "Asma\'" dan "Al-Husna". Makna dari "Al-Husna" adalah...',
    options: [
      'A. Yang Maha Perkasa',
      'B. Yang paling indah atau paling baik',
      'C. Yang Maha Pencipta',
      'D. Yang Maha Mengetahui'
    ],
    correctAnswerIndex: 1,
    explanation: 'Asma\' artinya nama-nama, sedangkan Al-Husna artinya yang paling indah atau paling baik.'
  },
  {
    id: 2,
    question: 'Perhatikan dalil Al-Qur\'an berikut:\n"وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا"\n(QS. Al-A\'raf: 180). Potongan ayat tersebut memerintahkan umat Islam untuk...',
    arabic: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا',
    options: [
      'A. Bermohon (berdoa) kepada Allah Swt. dengan menyebut Asmaul Husna',
      'B. Menuliskan Asmaul Husna di buku tulis saja',
      'C. Membaca Asmaul Husna hanya saat shalat Jumat',
      'D. Menghafal tanpa perlu memahami artinya'
    ],
    correctAnswerIndex: 0,
    explanation: 'Ayat tersebut mengajarkan agar kita berdoa kepada Allah Swt. dengan menyebut nama-nama-Nya yang indah.'
  },
  {
    id: 3,
    question: 'Rasulullah saw. menjelaskan bahwa barangsiapa yang menghafal 99 Asmaul Husna dan mengamalkannya dalam kehidupan, jaminan yang dijanjikan Allah Swt. adalah...',
    options: [
      'A. Mendapatkan hadiah uang tunai',
      'B. Masuk ke dalam surga-Nya',
      'C. Diberi umur panjang di dunia',
      'D. Diberi kekuasaan menjadi raja'
    ],
    correctAnswerIndex: 1,
    explanation: 'H.R. Bukhari dan Muslim menyebutkan bahwa orang yang menghafal dan mengamalkan Asmaul Husna akan masuk surga.'
  },
  {
    id: 4,
    question: 'Seorang murid tanpa sengaja menyenggol dan memecahkan penggaris milik temannya. Ia segera meminta maaf dan menggantinya dengan yang baru. Perilaku ini meneladani Asmaul Husna...',
    options: ['A. Al-Wahhāb', 'B. Al-Ghaffār', 'C. Al-Fattāḥ', 'D. Al-Laṭīf'],
    correctAnswerIndex: 1,
    explanation: 'Al-Ghaffār berarti Maha Pengampun. Meminta maaf dan memaafkan adalah bentuk meneladani Al-Ghaffār.'
  },
  {
    id: 5,
    question: 'Fatimah memiliki dua kotak pensil. Ketika melihat temannya tidak punya tempat pensil, Fatimah memberikan salah satunya secara ikhlas. Sifat Asmaul Husna yang diteladani Fatimah adalah...',
    options: ['A. Al-Wahhāb', 'B. Al-Fattāḥ', 'C. Al-Laṭīf', 'D. Al-Ghaffār'],
    correctAnswerIndex: 0,
    explanation: 'Al-Wahhāb berarti Maha Pemberi Karunia. Suka berbagi dan dermawan mencerminkan sifat Al-Wahhāb.'
  },
  {
    id: 6,
    question: 'Perhatikan pasangan Asmaul Husna dan artinya berikut:\n(1) Al-Ghaffār = Maha Pengampun\n(2) Al-Wahhāb = Maha Pemberi Karunia\n(3) Al-Fattāḥ = Maha Membuka\n(4) Al-Laṭīf = Maha Lembut\nJika Ahmad mengalami kesulitan belajar lalu ia berdoa mohon dibukakan pintu ilmu dan tetap pantang menyerah, Ahmad meneladani sifat nomor... (Computational Thinking - Pattern Recognition)',
    options: ['A. (1)', 'B. (2)', 'C. (3)', 'D. (4)'],
    correctAnswerIndex: 2,
    explanation: 'Al-Fattāḥ (Maha Membuka) diteladani dengan rajin belajar, optimis, dan memohon dibukakan pintu ilmu serta keberhasilan.'
  },
  {
    id: 7,
    question: 'Perhatikan firman Allah Swt. (QS. Al-Mulk: 14): "Sesungguhnya Allah Maha Lembut lagi Maha Mengetahui." Nama Asmaul Husna yang sesuai dengan ayat tersebut adalah...',
    options: ['A. Al-Ghaffār', 'B. Al-Wahhāb', 'C. Al-Fattāḥ', 'D. Al-Laṭīf'],
    correctAnswerIndex: 3,
    explanation: 'QS. Al-Mulk: 14 menegaskan sifat Al-Laṭīf (اللَّطِيفُ) yang bermakna Maha Lembut lagi Maha Mengetahui.'
  },
  {
    id: 8,
    question: 'Di bawah ini merupakan bentuk penerapan sifat Al-Laṭīf saat berbicara dengan orang tua, guru, maupun teman, yaitu...',
    options: [
      'A. Membentak dengan suara keras',
      'B. Berbicara sopan, bersikap lembut, dan tidak kasar',
      'C. Acuh tak acuh dan memalingkan muka',
      'D. Memotong pembicaraan orang lain secara tiba-tiba'
    ],
    correctAnswerIndex: 1,
    explanation: 'Meneladani Al-Laṭīf adalah bertutur kata santun, bersikap lemah lembut, dan tidak membentak.'
  },
  {
    id: 9,
    question: 'Budi dimarahi temannya karena salah mengoper bola saat berolahraga. Budi tidak membalas marah dan langsung memaafkan temannya. Hikmah yang diperoleh Budi adalah...',
    options: [
      'A. Hati menjadi tenang dan terhindar dari sifat dendam',
      'B. Dianggap lemah oleh teman-temannya',
      'C. Kehilangan kesempatan membalas dendam',
      'D. Nilai olahraganya langsung berkurang'
    ],
    correctAnswerIndex: 0,
    explanation: 'Memaafkan membuat hati tenang, menciptakan kerununan, dan terhindar dari sifat dendam yang merusak.'
  },
  {
    id: 10,
    question: 'Berdasarkan kisah inspiratif Aisyah, ketika kita membagikan makanan atau rezeki kepada teman yang membutuhkan, kalimat terbaik yang mencerminkan rasa syukur adalah...',
    options: [
      'A. "Ingat ya, besok kamu harus ganti makananku!"',
      'B. "Semua rezeki berasal dari Allah, kita harus saling berbagi."',
      'C. "Lihatlah, saya lebih kaya daripada kamu."',
      'D. "Jangan katakan kepada siapa-siapa kalau saya memberimu makan."'
    ],
    correctAnswerIndex: 1,
    explanation: 'Aisyah mengajarkan bahwa rezeki adalah karunia Allah (Al-Wahhab) sehingga harus disyukuri dengan berbagi.'
  }
];

// B. PILIHAN GANDA KOMPLEKS (10 Soal)
export const EVALUASI_P2_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Pilihlah EMPAT ASMAUL HUSNA yang dipelajari dalam Bab 3 ini! (Pilih lebih dari satu)',
    options: ['A. Al-Ghaffār', 'B. Al-Wahhāb', 'C. Al-Fattāḥ', 'D. Al-Laṭīf'],
    correctAnswerIndices: [0, 1, 2, 3],
    explanation: 'Keempat nama tersebut adalah fokus materi pembelajaran Bab 3 Kelas 4.'
  },
  {
    id: 2,
    question: 'Manakah BENTUK KETELADANAN SIFAT AL-GHAFFĀR (Maha Pengampun)? (Pilih lebih dari satu)',
    options: [
      'A. Mudah memaafkan kesalahan teman',
      'B. Segera meminta maaf jika berbuat salah',
      'C. Menyimpan dendam sampai waktu yang lama',
      'D. Memperbanyak membaca istigfar'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Mudah memaafkan, meminta maaf, dan beristigfar meneladani Al-Ghaffār. Dendam dilarang.'
  },
  {
    id: 3,
    question: 'Pilihlah BENTUK KETELADANAN SIFAT AL-WAHHĀB (Maha Pemberi Karunia)! (Pilih lebih dari satu)',
    options: [
      'A. Gemar berbagi makanan kepada teman',
      'B. Suka bersedekah kepada orang membutuhkan',
      'C. Meminjamkan alat tulis secara ikhlas',
      'D. Pelit dan menyembunyikan barang milik sendiri'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Gemar berbagi, bersedekah, dan meminjamkan barang mencerminkan sifat Al-Wahhāb.'
  },
  {
    id: 4,
    question: 'Manakah HAL-HAL YANG DIBUKA OLEH ALLAH SWT. sesuai makna Al-Fattāḥ? (Pilih lebih dari satu)',
    options: ['A. Pintu rezeki', 'B. Pintu ilmu', 'C. Pintu rahmat dan pertolongan', 'D. Pintu kejahatan'],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Allah Al-Fattāḥ membuka pintu rezeki, ilmu, rahmat, pertolongan, dan ampunan.'
  },
  {
    id: 5,
    question: 'Pilihlah BENTUK PERILAKU YANG MENELADANI SIFAT AL-LAṬĪF (Maha Lembut)! (Pilih lebih dari satu)',
    options: [
      'A. Berbicara dengan bahasa yang sopan dan santun',
      'B. Bersikap lembut dan penyayang kepada adik',
      'C. Membentak teman saat terjadi perbedaan pendapat',
      'D. Menolong teman yang jatuh tanpa memarahinya'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Berbicara sopan, bersikap lembut, dan menolong tanpa memarahi adalah teladan Al-Laṭīf.'
  },
  {
    id: 6,
    question: 'Manakah NIKMAT DAN KARUNIA ALLAH SWT. (Al-Wahhāb) yang wajib disyukuri? (Pilih lebih dari satu)',
    options: ['A. Kesehatan badan', 'B. Ilmu pengetahuan', 'C. Udara untuk bernapas', 'D. Rasa sombong'],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Kesehatan, ilmu, udara, air, dan keluarga adalah karunia Allah (Al-Wahhāb).'
  },
  {
    id: 7,
    question: 'Pilihlah PENERAPAN ASMAUL HUSNA DI LINGKUNGAN SEKOLAH! (Pilih lebih dari satu)',
    options: [
      'A. Memaafkan teman yang tidak sengaja merusak pensil',
      'B. Berbagi bekal makanan saat jam istirahat',
      'C. Membantu teman yang kesulitan memahami soal matematika',
      'D. Mengejek teman yang nilainya jelek'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Memaafkan, berbagi bekal, dan membantu teman belajar adalah penerapan terpuji di sekolah.'
  },
  {
    id: 8,
    question: 'Manakah HIKMAH MENGIMANI ASMAUL HUSNA bagi seorang murid? (Pilih lebih dari satu)',
    options: [
      'A. Menambah keimanan dan kecintaan kepada Allah Swt.',
      'B. Menjadi pribadi yang santun dan pemaaf',
      'C. Memiliki semangat belajar dan bekerja keras',
      'D. Menjadi sombong karena merasa paling shalih'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Keimanan menambah cinta Allah, membentuk akhlak santun, dan semangat belajar.'
  },
  {
    id: 9,
    question: 'Pilihlah KALIMAT ZIKIR DAN DOA yang erat kaitannya dengan Asmaul Husna Al-Ghaffār! (Pilih lebih dari satu)',
    options: [
      'A. Astaghfirullāhal \'Aẓīm (أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ)',
      'B. Rabbighfirlī wa tub \'alayya',
      'C. Subḥānallāh',
      'D. Alḥamdulillāh'
    ],
    correctAnswerIndices: [0, 1],
    explanation: 'Istigfar dan permohonan ampunan berkaitan erat dengan sifat Al-Ghaffār (Maha Pengampun).'
  },
  {
    id: 10,
    question: 'Pilihlah SIFAT TERPUJI KISAH AISYAH yang mencerminkan Asmaul Husna! (Pilih lebih dari satu)',
    options: [
      'A. Membagi bekal makan siang (Al-Wahhāb)',
      'B. Memaafkan teman yang menghilangkan penghapus (Al-Ghaffār)',
      'C. Berbicara dengan tutur kata lembut (Al-Laṭīf)',
      'D. Marah-marah ketika barangnya hilang'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Aisyah meneladani Al-Wahhāb (berbagi), Al-Ghaffār (memaafkan), dan Al-Laṭīf (berbicara lembut).'
  }
];

// C. MENJODOHKAN (5 Soal)
export const EVALUASI_P2_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Al-Ghaffār',
    leftArabic: 'الْغَفَّارُ',
    rightText: 'Allah Maha Pengampun — Keteladanan: Suka memaafkan & memperbanyak istigfar'
  },
  {
    id: 2,
    leftText: 'Al-Wahhāb',
    leftArabic: 'الْوَهَّابُ',
    rightText: 'Allah Maha Pemberi Karunia — Keteladanan: Gemar berbagi & dermawan'
  },
  {
    id: 3,
    leftText: 'Al-Fattāḥ',
    leftArabic: 'الْفَتَّاحُ',
    rightText: 'Allah Maha Membuka — Keteladanan: Optimis, rajin belajar & pantang menyerah'
  },
  {
    id: 4,
    leftText: 'Al-Laṭīf',
    leftArabic: 'اللَّطِيفُ',
    rightText: 'Allah Maha Lembut — Keteladanan: Berbicara santun & penyayang'
  },
  {
    id: 5,
    leftText: 'Asmaul Husna',
    leftArabic: 'أَسْمَاءُ اللَّهِ الْحُسْنَى',
    rightText: 'Nama-nama Allah Swt. yang indah dan sempurna (jumlahnya 99)'
  }
];

// D. BENAR ATAU SALAH DISERTAI ALASANNYA (10 Soal)
export const EVALUASI_P2_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Asmaul Husna Al-Ghaffār berarti Allah Swt. Maha Pemberi Karunia tanpa mengharap imbalan.',
    isTrue: false,
    explanation: 'SALAH. Al-Ghaffār berarti Allah Maha PENGAMPUN. Sedangkan Maha Pemberi Karunia adalah Al-Wahhāb.'
  },
  {
    id: 2,
    statement: 'Meneladani sifat Al-Wahhāb dapat dilakukan dengan cara meminjamkan pensil kepada teman yang lupa membawa alat tulis.',
    isTrue: true,
    explanation: 'BENAR. Meminjamkan barang secara ikhlas merupakan bentuk berbagi yang meneladani Al-Wahhāb (Maha Pemberi).'
  },
  {
    id: 3,
    statement: 'Surah Ali \'Imran ayat 8 merupakan dalil Al-Qur\'an tentang Asmaul Husna Al-Wahhāb.',
    arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً ۚ إِنَّكَ أَنْتَ الْوَهَّابُ',
    isTrue: true,
    explanation: 'BENAR. Ayat tersebut diakhiri dengan lafazh "إِنَّكَ أَنْتَ الْوَهَّابُ" (Sesungguhnya Engkau Maha Pemberi).'
  },
  {
    id: 4,
    statement: 'Seseorang yang meneladani sifat Al-Fattāḥ akan cepat merasa putus asa ketika mendapat nilai ujian yang rendah.',
    isTrue: false,
    explanation: 'SALAH. Meneladani Al-Fattāḥ (Maha Membuka) justru membuat seseorang optimis, rajin belajar, dan pantang menyerah.'
  },
  {
    id: 5,
    statement: 'Lafazh Asmaul Husna Al-Laṭīf (اللَّطِيفُ) memiliki arti Allah Swt. Maha Lembut atau Maha Halus.',
    isTrue: true,
    explanation: 'BENAR. Al-Laṭīf bermakna Maha Lembut/Halus yang mengetahui segala sesuatu yang tersembunyi.'
  },
  {
    id: 6,
    statement: 'Apabila teman meminta maaf karena tidak sengaja merusak mainan kita, sikap terpuji sesuai Al-Ghaffār adalah menolaknya dan membalas merusak mainannya.',
    isTrue: false,
    explanation: 'SALAH. Meneladani Al-Ghaffār adalah memaafkan kesalahan teman dengan ikhlas dan tidak menyimpan dendam.'
  },
  {
    id: 7,
    statement: 'Dalam H.R. Bukhari dan Muslim disebutkan bahwa Allah Swt. mempunyai 99 nama Asmaul Husna.',
    isTrue: true,
    explanation: 'BENAR. Hadits Nabi menyebutkan 99 nama Allah Swt. (seratus kurang satu).'
  },
  {
    id: 8,
    statement: 'Membentak orang tua dan berbicara kasar kepada teman merupakan bentuk pengamalan sifat Al-Laṭīf.',
    isTrue: false,
    explanation: 'SALAH. Membentak dan berbicara kasar bertentangan dengan Al-Laṭīf. Al-Laṭīf mengajarkan tutur kata santun dan lembut.'
  },
  {
    id: 9,
    statement: 'Contoh perilaku Al-Fattāḥ di sekolah adalah suka membantu teman memecahkan masalah pelajaran yang sulit.',
    isTrue: true,
    explanation: 'BENAR. Membantu menemukan solusi masalah pelajaran mencerminkan semangat Al-Fattāḥ (Maha Membuka pintu jalan keluar).'
  },
  {
    id: 10,
    statement: 'Kisah Aisyah mengajarkan bahwa rezeki yang kita miliki berasal dari Allah Swt. sehingga kita wajib saling berbagi.',
    isTrue: true,
    explanation: 'BENAR. Aisyah membagi bekalnya karena menyadari semua rezeki adalah karunia Allah Swt.'
  }
];

// E. SOAL URAIAN (5 Soal)
export const EVALUASI_P2_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Tuliskan arti dan makna dari 4 Asmaul Husna: Al-Ghaffār, Al-Wahhāb, Al-Fattāḥ, dan Al-Laṭīf!',
    rubric: 'Skor 20: Menyebutkan arti keempat Asmaul Husna secara lengkap dan benar.',
    sampleAnswer: '1. Al-Ghaffār: Allah Maha Pengampun.\n2. Al-Wahhāb: Allah Maha Pemberi Karunia.\n3. Al-Fattāḥ: Allah Maha Membuka (pintu rezeki, ilmu, dan pertolongan).\n4. Al-Laṭīf: Allah Maha Lembut / Maha Halus.'
  },
  {
    id: 2,
    question: 'Bagaimanakah cara kamu meneladani sifat Al-Ghaffār dan Al-Wahhāb dalam kehidupan di sekolah?',
    rubric: 'Skor 20: Menyebutkan contoh nyata meneladani Al-Ghaffār (memaafkan teman, meminta maaf jika salah) dan Al-Wahhāb (berbagi bekal/alat tulis).',
    sampleAnswer: '• Meneladani Al-Ghaffār: Memaafkan teman yang tidak sengaja merusak alat tulisku, tidak menyimpan dendam, dan berani meminta maaf jika bersalah.\n• Meneladani Al-Wahhāb: Meminjamkan pensil/penggaris kepada teman yang lupa membawa, serta berbagi makanan saat istirahat.'
  },
  {
    id: 3,
    question: 'Budi mengalami kesulitan memahami materi PAI. Jelaskan bagaimana Budi dapat meneladani sifat Al-Fattāḥ agar berhasil dalam belajarnya!',
    rubric: 'Skor 20: Menjelaskan sikap pantang menyerah, berdoa mohon dibukakan pintu ilmu, dan rajin berusaha.',
    sampleAnswer: 'Budi dapat meneladani Al-Fattāḥ dengan tidak mudah putus asa. Budi harus rajin belajar, bertanya kepada guru/teman, dan senantiasa berdoa memohon kepada Allah Swt. agar dibukakan pintu ilmu dan kemudahan.'
  },
  {
    id: 4,
    question: 'Mengapa kita harus bertutur kata sopan dan tidak boleh membentak teman saat meneladani sifat Al-Laṭīf?',
    rubric: 'Skor 20: Menjelaskan bahwa Al-Laṭīf bermakna Maha Lembut sehingga hamba-Nya harus bersikap santun, lembut, dan menjaga perasaan orang lain.',
    sampleAnswer: 'Karena Al-Laṭīf artinya Allah Maha Lembut. Sebagai hamba-Nya, kita harus meneladani kelembutan tersebut dengan berbicara santun, ramah, dan tidak membentak agar tidak menyakiti hati teman serta menciptakan suasana damai.'
  },
  {
    id: 5,
    question: 'Sebutkan 3 hikmah utama yang kamu rasakan setelah mengimani dan meneladani Asmaul Husna dalam kehidupan sehari-hari!',
    rubric: 'Skor 20: Menyebutkan 3 hikmah positif (misal: hati tenang, makin dicintai Allah & teman, menjadi anak pemaaf dan optimis).',
    sampleAnswer: '1. Hati menjadi lebih tenang karena terhindar dari sifat dendam dan pelit.\n2. Makin dicintai oleh Allah Swt., orang tua, guru, dan teman-teman.\n3. Menjadi pribadi yang optimis, pantang menyerah, serta gemar berbuat kebaikan.'
  }
];
