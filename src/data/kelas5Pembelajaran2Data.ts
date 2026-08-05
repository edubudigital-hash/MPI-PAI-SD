// Data Lengkap & Detail Kelas 5 Pembelajaran 2 Berdasarkan PDF Resmi BAB III
// Mengenal dan Meneladani Asmaul Husna: Al-Halīm, Asy-Syakūr, Al-Hakīm, dan Al-Wadūd

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
// 1. MATERI PEMBELAJARAN SLIDE INTERAKTIF (KELAS 5 PEMBELAJARAN 2) - 16 SLIDE DETAIL
// =========================================================================
export const KELAS5_P2_SLIDES: SlideData[] = [
  {
    id: 1,
    title: '1. Bab III & Tujuan Pembelajaran Asmaul Husna',
    subtitle: 'Mengenal dan Meneladani Al-Halīm, Asy-Syakūr, Al-Hakīm, dan Al-Wadūd',
    iconName: 'BookOpen',
    points: [
      '• Setelah mempelajari bab ini, peserta didik diharapkan mampu:',
      '  1. Menjelaskan pengertian Asmaul Husna.',
      '  2. Menjelaskan makna Asmaul Husna Al-Halīm, Asy-Syakūr, Al-Hakīm, dan Al-Wadūd.',
      '  3. Menyebutkan dalil yang berkaitan dengan Asmaul Husna tersebut (QS. Al-A\'raf: 180).',
      '  4. Menjelaskan contoh perilaku yang mencerminkan keteladanan Asmaul Husna dalam kehidupan sehari-hari.',
      '  5. Membiasakan perilaku santun, sabar, bijaksana, penyayang, dan bersyukur sebagai bentuk pengamalan nilai-nilai Asmaul Husna.'
    ],
    highlightBox: {
      title: '🌟 Visi Pembelajaran',
      content: 'Membentuk pribadi peserta didik yang beriman, berakhlak mulia, peduli terhadap sesama, serta selalu berusaha mendekatkan diri kepada Allah Swt. melalui perilaku yang baik.',
      type: 'info'
    }
  },
  {
    id: 2,
    title: '2. Pengertian Asmaul Husna Menurut Bahasa & Istilah',
    subtitle: 'Nama-Nama Allah Swt. yang Indah dan Maha Sempurna',
    iconName: 'Sparkles',
    points: [
      '• Asmaul Husna berasal dari bahasa Arab:',
      '  - "Asmā\'" (أَسْمَاءٌ) berarti nama-nama.',
      '  - "Al-Husnā" (الْحُسْنَى) berarti yang paling indah atau yang paling baik.',
      '• Dengan demikian, Asmaul Husna adalah nama-nama Allah Swt. yang indah dan mulia, yang menunjukkan kesempurnaan sifat-sifat-Nya.',
      '• Allah Swt. memiliki 99 nama yang indah, sebagaimana disebutkan dalam hadis Rasulullah saw.',
      '• Setiap nama mengandung makna yang agung dan mengajarkan manusia untuk semakin mengenal kebesaran Allah Swt.',
      '• Semakin seseorang mengenal Asmaul Husna, semakin kuat pula keimanan dan kecintaannya kepada Allah Swt.'
    ]
  },
  {
    id: 3,
    title: '3. Dalil Asmaul Husna & Berdoa Menyebut Nama-Nya',
    subtitle: 'Perintah Berdoa dengan Asmaul Husna (QS. Al-A\'raf: 180)',
    iconName: 'BookOpen',
    points: [
      '• Allah Swt. berfirman dalam Al-Qur\'an:',
      '  "Dan Allah memiliki Asmaul Husna (nama-nama yang terbaik), maka bermohonlah kepada-Nya dengan menyebut nama-nama itu." (QS. Al-A\'raf: 180).',
      '• Ayat tersebut mengajarkan bahwa ketika berdoa, seorang Muslim dianjurkan menyebut nama-nama Allah yang sesuai dengan harapannya:',
      '  - Memohon ampunan ➔ Menyebut Al-Ghafūr (Maha Pengampun).',
      '  - Memohon kasih sayang ➔ Menyebut Al-Wadūd (Maha Mencintai).',
      '  - Memohon ketenangan & kesabaran ➔ Menyebut Al-Halīm (Maha Penyantun).',
      '  - Memohon kelapangan rezeki & rasa syukur ➔ Menyebut Asy-Syakūr (Maha Mensyukuri).'
    ],
    arabicExamples: [
      {
        arabic: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا',
        latin: 'Wa lillāhil-asmā\'ul-ḥusnā fad\'ūhu bihā',
        meaning: 'Dan Allah memiliki Asmaul Husna, maka bermohonlah kepada-Nya dengan menyebut nama-nama itu.',
        note: 'QS. Al-A\'raf: 180'
      }
    ]
  },
  {
    id: 4,
    title: '4. Mengapa Kita Harus Mengenal Asmaul Husna?',
    subtitle: '6 Manfaat Utama Mengenal Nama-Nama Allah Swt.',
    iconName: 'Heart',
    points: [
      'Mengenal Asmaul Husna memiliki banyak manfaat bagi kehidupan seorang Muslim, di antaranya:',
      '1. Menambah keimanan kepada Allah Swt.',
      '2. Menumbuhkan rasa cinta kepada Allah Swt.',
      '3. Membiasakan diri berdoa dengan menyebut nama-nama Allah.',
      '4. Menjadi teladan dalam berakhlak mulia di kehidupan sehari-hari.',
      '5. Menumbuhkan sikap rendah hati dan bersyukur atas segala nikmat.',
      '6. Menjadikan hati lebih tenang karena yakin kepada kebesaran Allah Swt.',
      '• Semakin mengenal Allah Swt., semakin mudah pula seseorang menjalankan perintah-Nya dan menjauhi larangan-Nya.'
    ]
  },
  {
    id: 5,
    title: '5. Makna Asmaul Husna Al-Halīm (ٱلْحَلِيمُ)',
    subtitle: 'Maha Penyantun atau Maha Penyabar',
    iconName: 'ShieldCheck',
    points: [
      '• Al-Halīm berarti Maha Penyantun atau Maha Penyabar.',
      '• Allah Swt. tidak tergesa-gesa memberikan hukuman kepada hamba-Nya yang berbuat salah.',
      '• Sebaliknya, Allah memberikan kesempatan kepada mereka untuk bertobat dan memperbaiki diri.',
      '• Kasih sayang Allah Swt. sangat luas. Walaupun manusia sering melakukan kesalahan, Allah tetap memberikan rezeki, kesehatan, dan kesempatan hidup.',
      '• Hal ini menunjukkan bahwa Allah Maha Penyantun terhadap seluruh makhluk-Nya.'
    ],
    arabicExamples: [
      {
        arabic: 'ٱلْحَلِيمُ',
        latin: 'Al-Halīm',
        meaning: 'Maha Penyantun / Maha Penyabar (Tidak tergesa-gesa menghukum hamba-Nya)'
      }
    ]
  },
  {
    id: 6,
    title: '6. Hikmah & Contoh Keteladanan Al-Halīm',
    subtitle: 'Meneladani Sifat Santun dan Penyabar dalam Kehidupan',
    iconName: 'Award',
    points: [
      '• Hikmah Mengetahui Al-Halīm:',
      '  - Tidak mudah marah.',
      '  - Sabar menghadapi masalah.',
      '  - Mau memaafkan kesalahan teman.',
      '  - Tidak membalas keburukan dengan keburukan.',
      '  - Berusaha memperbaiki diri ketika melakukan kesalahan.',
      '• Contoh Keteladanan Al-Halīm Sehari-hari:',
      '  - Tidak marah ketika diejek teman.',
      '  - Bersabar menunggu giliran saat mengantre.',
      '  - Memaafkan teman yang meminta maaf.',
      '  - Berbicara dengan lembut kepada adik.',
      '  - Tidak mudah tersinggung.'
    ],
    highlightBox: {
      title: '💡 Kunci Sukses Pergaulan',
      content: 'Peserta didik yang mampu mengendalikan emosinya dan bersikap Al-Halīm akan lebih mudah disukai teman dan dihormati oleh guru.',
      type: 'tip'
    }
  },
  {
    id: 7,
    title: '7. Makna Asmaul Husna Asy-Syakūr (ٱلشَّكُورُ)',
    subtitle: 'Maha Mensyukuri atau Maha Memberi Balasan Atas Amal Kebaikan',
    iconName: 'Gift',
    points: [
      '• Asy-Syakūr berarti Maha Mensyukuri atau Maha Memberi Balasan atas setiap amal kebaikan.',
      '• Allah Swt. menghargai setiap amal baik yang dilakukan hamba-Nya, walaupun amal tersebut sangat kecil.',
      '• Bahkan, Allah melipatgandakan pahala bagi orang yang ikhlas berbuat kebaikan.',
      '• Tidak ada satu pun amal baik yang sia-sia di sisi Allah Swt.'
    ],
    arabicExamples: [
      {
        arabic: 'ٱلشَّكُورُ',
        latin: 'Asy-Syakūr',
        meaning: 'Maha Mensyukuri / Memberi Balasan Berlipat Atas Kebaikan Hamba-Nya'
      }
    ]
  },
  {
    id: 8,
    title: '8. Hikmah & Contoh Keteladanan Asy-Syakūr',
    subtitle: 'Meneladani Sifat Bersyukur & Menghargai Jasa Orang Lain',
    iconName: 'CheckCircle2',
    points: [
      '• Hikmah Mengetahui Asy-Syakūr:',
      '  - Rajin berbuat baik tanpa ragu.',
      '  - Tidak meremehkan amal kecil (senyum, membuang sampah).',
      '  - Selalu bersyukur atas nikmat Allah Swt.',
      '  - Menghargai jasa orang lain.',
      '  - Membiasakan mengucapkan "Alhamdulillāh".',
      '• Contoh Keteladanan Asy-Syakūr Sehari-hari:',
      '  - Mengucapkan terima kasih kepada guru dan orang tua.',
      '  - Bersyukur atas makanan yang tersedia.',
      '  - Menjaga buku dan perlengkapan sekolah.',
      '  - Tidak mengeluh ketika mendapat tugas.',
      '  - Menggunakan nikmat kesehatan untuk belajar dan beribadah.'
    ]
  },
  {
    id: 9,
    title: '9. Makna Asmaul Husna Al-Hakīm (ٱلْحَكِيمُ)',
    subtitle: 'Maha Bijaksana Dalam Segala Ciptaan dan Ketentuan',
    iconName: 'Compass',
    points: [
      '• Al-Hakīm berarti Maha Bijaksana.',
      '• Segala ketentuan Allah Swt. mengandung hikmah dan kebaikan, walaupun terkadang manusia belum memahaminya.',
      '• Allah menciptakan siang dan malam, panas dan hujan, sehat dan sakit, semuanya memiliki tujuan yang baik bagi kehidupan manusia.',
      '• Keputusan Allah Swt. selalu tepat dan tidak pernah keliru.'
    ],
    arabicExamples: [
      {
        arabic: 'ٱلْحَكِيمُ',
        latin: 'Al-Hakīm',
        meaning: 'Maha Bijaksana (Segala takdir dan aturan-Nya penuh hikmah)'
      }
    ]
  },
  {
    id: 10,
    title: '10. Hikmah & Contoh Keteladanan Al-Hakīm',
    subtitle: 'Meneladani Kebijaksanaan dan Kepemimpinan yang Adil',
    iconName: 'Users',
    points: [
      '• Hikmah Mengetahui Al-Hakīm:',
      '  - Berpikir sebelum bertindak.',
      '  - Tidak tergesa-gesa mengambil keputusan.',
      '  - Menghargai pendapat orang lain.',
      '  - Bersikap adil kepada teman.',
      '  - Menerima ketentuan Allah dengan lapang dada.',
      '• Contoh Keteladanan Al-Hakīm Sehari-hari:',
      '  - Menyelesaikan masalah melalui MUSYAWARAH.',
      '  - Tidak memihak ketika menjadi ketua kelompok.',
      '  - Mendengarkan pendapat teman sebelum mengambil keputusan.',
      '  - Menggunakan waktu belajar secara teratur.',
      '  - Memilih tindakan yang membawa manfaat bagi banyak orang.'
    ],
    highlightBox: {
      title: '👑 Ciri Pemimpin Baik',
      content: 'Kebijaksanaan (Al-Hakīm) merupakan salah satu ciri utama pemimpin yang sukses dan dicintai anggotanya.',
      type: 'info'
    }
  },
  {
    id: 11,
    title: '11. Makna Asmaul Husna Al-Wadūd (ٱلْوَدُودُ)',
    subtitle: 'Maha Mencintai atau Maha Pengasih kepada Hamba-Nya yang Beriman',
    iconName: 'Heart',
    points: [
      '• Al-Wadūd berarti Maha Mencintai atau Maha Pengasih kepada hamba-Nya yang beriman.',
      '• Kasih sayang Allah Swt. diberikan kepada seluruh makhluk-Nya: Allah memberikan udara, air, makanan, kesehatan, serta berbagai nikmat.',
      '• Allah secara khusus MENCINTAI orang-orang yang beriman, bertobat, berbuat baik, dan menjaga kebersihan.'
    ],
    arabicExamples: [
      {
        arabic: 'ٱلْوَدُودُ',
        latin: 'Al-Wadūd',
        meaning: 'Maha Mencintai / Maha Pengasih kepada Hamba-Nya yang Beriman'
      }
    ]
  },
  {
    id: 12,
    title: '12. Hikmah & Contoh Keteladanan Al-Wadūd',
    subtitle: 'Meneladani Kasih Sayang, Kerukunan, dan Persahabatan',
    iconName: 'Smile',
    points: [
      '• Hikmah Mengetahui Al-Wadūd:',
      '  - Menyayangi sesama manusia.',
      '  - Menolong teman yang membutuhkan.',
      '  - Menjaga persahabatan dengan erat.',
      '  - Menghormati orang tua dan guru.',
      '  - Tidak membenci atau menyimpan dendam kepada teman.',
      '• Contoh Keteladanan Al-Wadūd Sehari-hari:',
      '  - Membantu teman yang sedang sakit.',
      '  - Menyayangi adik di rumah.',
      '  - Berbicara sopan kepada orang tua.',
      '  - Berbagi makanan dengan teman.',
      '  - Menjaga kerukunan di sekolah.'
    ]
  },
  {
    id: 13,
    title: '13. Hubungan Keempat Asmaul Husna dalam Kehidupan',
    subtitle: 'Saling Melengkapi Membentuk Akhlak Karimah Musim',
    iconName: 'Layers',
    points: [
      'Keempat Asmaul Husna ini saling melengkapi dalam membentuk akhlak seorang Muslim:',
      '• Al-Halīm ➔ Mengajarkan KESABARAN dan KELEMBUTAN.',
      '• Asy-Syakūr ➔ Mengajarkan RASA SYUKUR dan PENGHARGAAN terhadap kebaikan.',
      '• Al-Hakīm ➔ Mengajarkan KEBIJAKSANAAN dalam berpikir dan bertindak.',
      '• Al-Wadūd ➔ Mengajarkan KASIH SAYANG kepada sesama.',
      '• Apabila nilai-nilai tersebut diamalkan, peserta didik akan tumbuh menjadi pribadi yang berakhlak mulia, santun, bertanggung jawab, serta mampu hidup rukun dengan keluarga, teman, dan masyarakat.'
    ]
  },
  {
    id: 14,
    title: '14. Penerapan Asmaul Husna di Lingkungan Sekolah',
    subtitle: 'Aksi Nyata Murid SD di Dalam dan Luar Kelas',
    iconName: 'Building',
    points: [
      'Sekolah merupakan tempat yang sangat tepat untuk membiasakan pengamalan Asmaul Husna:',
      '1. Bersabar ketika mengikuti pembelajaran (Al-Halīm).',
      '2. Bersyukur atas ilmu yang diperoleh dari guru (Asy-Syakūr).',
      '3. Bijaksana saat bekerja dalam kelompok (Al-Hakīm).',
      '4. Menyayangi dan membantu teman tanpa membeda-bedakan suku/latar belakang (Al-Wadūd).',
      '5. Menghormati guru dan seluruh warga sekolah.',
      '6. Menjaga kebersihan kelas sebagai bentuk rasa syukur atas lingkungan belajar yang nyaman.',
      '7. Tidak mengejek atau merundung (bullying) teman karena setiap orang berhak dihormati.'
    ]
  },
  {
    id: 15,
    title: '15. Penerapan Asmaul Husna dalam Kehidupan Sehari-hari',
    subtitle: 'Praktik Nyata di Rumah dan Lingkungan Masyarakat',
    iconName: 'Home',
    points: [
      '• Dengan membiasakan sikap-sikap terpuji setiap hari, peserta didik tidak hanya memahami makna Asmaul Husna secara teori, tetapi juga mampu mengamalkannya dalam kehidupan nyata.',
      '• Di Rumah: Membantu pekerjaan orang tua dengan ikhlas (Asy-Syakūr), mengalah dan lembut kepada adik (Al-Halīm & Al-Wadūd), membagi waktu belajar dan bermain secara seimbang (Al-Hakīm).',
      '• Di Masyarakat: Menjaga kerukunan antar tetangga, menyapa warga dengan ramah, dan ikut menjaga kebersihan fasilitas umum.',
      '• Inilah tujuan utama mempelajari Asmaul Husna: membentuk pribadi beriman, berakhlak mulia, dan dekat dengan Allah Swt.'
    ]
  },
  {
    id: 16,
    title: '16. Rangkuman & Peta Pikiran 4 Asmaul Husna',
    subtitle: 'Ringkasan Cepat 4 Sifat Mulia Allah Swt. & Akhlak Murid',
    iconName: 'Grid',
    points: [
      'Peta Pembelajaran Asmaul Husna Kelas 5:'
    ],
    tableData: {
      headers: ['Asmaul Husna', 'Arti Kata', 'Nilai Karakter Murid', 'Contoh Aksi Nyata'],
      rows: [
        ['Al-Halīm (ٱلْحَلِيمُ)', 'Maha Penyantun / Penyabar', 'Kesabaran & Kelembutan', 'Memaafkan kesalahan teman & menahan marah'],
        ['Asy-Syakūr (ٱلشَّكُورُ)', 'Maha Mensyukuri', 'Rasa Syukur & Penghargaan', 'Ucap terima kasih & gunakan nikmat untuk belajar'],
        ['Al-Hakīm (ٱلْحَكِيمُ)', 'Maha Bijaksana', 'Kebijaksanaan & Keadilan', 'Musyawarah kelompok & berpikir sebelum bertindak'],
        ['Al-Wadūd (ٱلْوَدُودُ)', 'Maha Mencintai', 'Kasih Sayang & Kerukunan', 'Menolong teman sakit & berbagi kepada sesama']
      ]
    }
  }
];

// =========================================================================
// 2. PENUGASAN PROYEK MURID (2 PjBL + 2 PBL) - Sesuai Kebijakan Guru
// =========================================================================
export const KELAS5_P2_PROJECTS: ProjectTask[] = [
  {
    id: 'p2_pjbl_1',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Proyek Pohon Kebaikan Asmaul Husna 4 Sifat Mulia',
    subtitle: 'Media Dinding Visual 4 Cabang Utama Asmaul Husna',
    objective: 'Peserta didik secara berkelompok mampu merancang "Pohon Kebaikan Asmaul Husna" yang menampilkan skema, contoh sikap, dan cerita pengalaman meneladani Al-Halīm, Asy-Syakūr, Al-Hakīm, dan Al-Wadūd.',
    steps: [
      '1. Siapkan kertas karton tebal, kertas lipat warna-warni, gunting, dan lem.',
      '2. Gambar batang pohon besar dengan 4 cabang utama bertuliskan Al-Halīm, Asy-Syakūr, Al-Hakīm, dan Al-Wadūd.',
      '3. Pada setiap daun/buah kertas, tuliskan 1 contoh pengamalan nyata di rumah atau sekolah.',
      '4. Hias poster dengan kalimat thayyibah dan warna menarik.',
      '5. Presentasikan di depan kelas dan pajang di sudut sumber belajar.'
    ],
    output: 'Poster Karton A3 "Pohon Kebaikan Asmaul Husna" berhias daun pengamalan.',
    teacherNote: 'Kerapian poster, variasi contoh pengamalan, dan kekompakan kelompok disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p2_pjbl_2',
    type: 'PjBL',
    badge: 'PjBL - Project Based Learning',
    title: 'Proyek Jurnal "Buku Harian 7 Hari Meneladani Asmaul Husna"',
    subtitle: 'Catatan Aksi Nyata Murid Penyabar, Bersyukur, Bijak, & Penyayang',
    objective: 'Peserta didik mampu mempraktikkan dan mencatat tindakan nyata meneladani 4 Asmaul Husna selama 7 hari berturut-turut.',
    steps: [
      '1. Buat buku harian kecil berjudul "Jurnal Aksi Asmaul Husna 7 Hari".',
      '2. Setiap hari catat minimal 1 tindakan meneladani Al-Halīm (menahan marah), Asy-Syakūr (mengucapkan terima kasih/syukur), Al-Hakīm (musyawarah/bijak), dan Al-Wadūd (membantu teman).',
      '3. Refleksikan bagaimana perasaan setelah melakukan kebaikan tersebut.',
      '4. Minta tanda tangan/paraf apresiasi dari Orang Tua setiap malam.',
      '5. Kumpulkan buku harian kepada guru PAI.'
    ],
    output: 'Buku Jurnal Harian 7 Hari Aksi Asmaul Husna berparaf Orang Tua.',
    teacherNote: 'Kedisiplinan pencatatan jurnal dan kejujuran refleksi diri disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p2_pbl_1',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Studi Kasus: "Solusi Menghadapi Pertengkaran dan Perundungan di Sekolah"',
    subtitle: 'Penerapan Sifat Al-Halīm dan Al-Wadūd dalam Mengatasi Konflik',
    objective: 'Peserta didik mampu mendeteksi penyebab konflik antar teman dan merumuskan rencana aksi perdamaian berdasarkan nilai Al-Halīm dan Al-Wadūd.',
    steps: [
      '1. Simak studi kasus: "Reno ketumpahan minuman oleh Doni saat jam istirahat. Reno sangat marah dan berniat membalas mengejek Doni di depan teman-teman kelas."',
      '2. Analisis masalah: Mengapa tindakan emosional Reno justru akan memperbesar pertengkaran?',
      '3. Tentukan bagaimana sifat Al-Halīm (Maha Penyabar) dan Al-Wadūd (Maha Mencintai) dapat mengubah respon Reno.',
      '4. Rancang 3 langkah penyelesaian damai tanpa kekerasan (memaafkan, berbicara lembut, dan berteman kembali).',
      '5. Simulasikan dialog perdamaian Reno dan Doni di depan kelompok.'
    ],
    output: 'Lembar Solusi Kasus Konflik & Naskah Simulasi Perilaku Al-Halīm & Al-Wadūd.',
    teacherNote: 'Kedalaman analisis konflik dan nilai kesantunan penyelesaian disesuaikan sesuai kebijakan guru.'
  },
  {
    id: 'p2_pbl_2',
    type: 'PBL',
    badge: 'PBL - Problem Based Learning',
    title: 'Studi Kasus: "Musyawarah Kelompok yang Ulet dan Adil (Meneladani Al-Hakīm)"',
    subtitle: 'Pemecahan Masalah Perbedaan Pendapat dan Pemilihan Keputusan',
    objective: 'Peserta didik mampu menerapkan prinsip Al-Hakīm (Maha Bijaksana) dalam mengelola perbedaan pendapat saat kerja kelompok.',
    steps: [
      '1. Simak kasus: "Kelompok 3 sedang berdiskusi menentukan judul drama. Ketua kelompok langsung menetapkan idenya sendiri tanpa mau mendengarkan masukan 4 anggota lainnya sehingga tim menjadi mogok."',
      '2. Identifikasi kesalahan ketua kelompok berdasarkan prinsip keteladanan Al-Hakīm.',
      '3. Rancang aturan "Diskusi Bijak 5 Menit" (musyawarah, mendengarkan, voting adil, dan menghargai keputusan bersama).',
      '4. Buatlah daftar periksa (checklist) kepemimpinan bijaksana di kelas.',
      '5. Presentasikan hasil rumusan kelompok.'
    ],
    output: 'Panduan Musyawarah Bijak Kelompok berbasis Al-Hakīm.',
    teacherNote: 'Kematangan pemikiran bijaksana dan relevansi aturan diskusi disesuaikan sesuai kebijakan guru.'
  }
];

// =========================================================================
// 3. GAMIFIKASI INTERAKTIF: PETUALANGAN 4 SIFAT MULIA ASMAUL HUSNA
// =========================================================================
export const KELAS5_P2_QUEST_STEPS: QuestStep[] = [
  {
    id: 1,
    title: 'Gerbang 1: Mengenal Pengertian & Dalil Asmaul Husna',
    scenarioTitle: 'Tantangan Arti Bahasa & Surah Al-A\'raf Ayat 180',
    scenarioStory: 'Kamu memasuki Lembah Cahaya Asmaul Husna! Penjaga gerbang meminta penjelasanmu tentang pengertian Asmaul Husna dan firman Allah Swt.',
    questionPrompt: 'Manakah gabungan arti bahasa Arab "Asmā\'" dan "Al-Husnā" yang benar?',
    options: [
      {
        id: '1a',
        text: 'Asmā\' = Nama-nama, Al-Husnā = Yang paling indah/baik ➔ Nama-nama Allah Swt. yang indah dan mulia.',
        isCorrect: true,
        explanation: 'Tepat sekali! Asmā\' berarti nama-nama, dan Al-Husnā berarti paling indah atau paling baik.'
      },
      {
        id: '1b',
        text: 'Asmā\' = Kitab-kitab, Al-Husnā = Yang paling tua ➔ Kitab-kitab kuno para nabi.',
        isCorrect: false,
        explanation: 'Salah! Asmaul Husna adalah nama-nama indah bagi Allah Swt., bukan kitab.'
      },
      {
        id: '1c',
        text: 'Asmā\' = Malaikat, Al-Husnā = Yang paling cepat ➔ Nama-nama malaikat Allah Swt.',
        isCorrect: false,
        explanation: 'Salah! Asmaul Husna khusus menunjukkan nama-nama dan sifat kesempurnaan Allah Swt.'
      }
    ]
  },
  {
    id: 2,
    title: 'Gerbang 2: Lembah Kesabaran Al-Halīm',
    scenarioTitle: 'Meneladani Sifat Maha Penyantun & Penyabar',
    scenarioStory: 'Seorang teman tidak sengaja menyenggol tempat pensilmu hingga berserakan saat mengantre di kantin.',
    questionPrompt: 'Sikap manakah yang mencerminkan keteladanan Asmaul Husna "Al-Halīm"?',
    options: [
      {
        id: '2a',
        text: 'Menahan marah, tersenyum, memaafkannya, dan bersama-sama merapikan tempat pensil.',
        isCorrect: true,
        explanation: 'Luar biasa! Al-Halīm mengajarkan kita untuk sabar, tidak cepat marah, dan pemaaf.'
      },
      {
        id: '2b',
        text: 'Langsung membalas mendorong tempat pensil teman tersebut agar ikut jatuh.',
        isCorrect: false,
        explanation: 'Salah! Membalas keburukan dengan keburukan bertentangan dengan Al-Halīm.'
      },
      {
        id: '2c',
        text: 'Membentak teman dengan kata-kata kasar di depan umum.',
        isCorrect: false,
        explanation: 'Salah! Al-Halīm menuntun kita berbicara dengan lembut dan santun.'
      }
    ]
  },
  {
    id: 3,
    title: 'Gerbang 3: Taman Rasa Syukur Asy-Syakūr',
    scenarioTitle: 'Meneladani Sifat Maha Mensyukuri Kebaikan',
    scenarioStory: 'Ibu memberimu bekal makanan sederhana di sekolah. Temanmu membawa bekal yang sangat mewah.',
    questionPrompt: 'Bagaimanakah tindakan yang sesuai dengan keteladanan Asmaul Husna "Asy-Syakūr"?',
    options: [
      {
        id: '3a',
        text: 'Mengucapkan Alhamdulillāh, menyantap bekal dengan nikmat, dan tidak mengeluh.',
        isCorrect: true,
        explanation: 'Hebat! Asy-Syakūr mengajarkan kita untuk selalu bersyukur atas setiap nikmat yang diberikan.'
      },
      {
        id: '3b',
        text: 'Menyembunyikan bekal dan marah-marah kepada ibu saat pulang sekolah.',
        isCorrect: false,
        explanation: 'Salah! Mengeluh dan tidak menghargai pemberian adalah sikap kurang bersyukur.'
      },
      {
        id: '3c',
        text: 'Mengejek bekal teman lain agar merasa lebih hebat.',
        isCorrect: false,
        explanation: 'Salah! Meremehkan orang lain bertentangan dengan nilai akhlak karimah.'
      }
    ]
  },
  {
    id: 4,
    title: 'Gerbang 4: Istana Kebijaksanaan Al-Hakīm',
    scenarioTitle: 'Meneladani Sifat Maha Bijaksana & Musyawarah',
    scenarioStory: 'Kelompokmu bingung membagi tugas piket kebersihan kelas karena ada tugas yang berat dan ringan.',
    questionPrompt: 'Bagaimanakah keputusan yang bijaksana sesuai keteladanan "Al-Hakīm"?',
    options: [
      {
        id: '4a',
        text: 'Bermusyawarah bersama secara adil dan mendengarkan pendapat seluruh anggota kelompok.',
        isCorrect: true,
        explanation: 'Sempurna! Al-Hakīm menuntun kita berpikir jernih, adil, dan bermusyawarah.'
      },
      {
        id: '4b',
        text: 'Ketua kelompok memberikan tugas paling berat kepada anggota yang tidak disukai.',
        isCorrect: false,
        explanation: 'Salah! Pilih kasih dan tidak adil bertentangan dengan Al-Hakīm.'
      },
      {
        id: '4c',
        text: 'Meninggalkan tugas piket begitu saja tanpa bermusyawarah.',
        isCorrect: false,
        explanation: 'Salah! Lepas dari tanggung jawab bukanlah sikap bijaksana.'
      }
    ]
  },
  {
    id: 5,
    title: 'Gerbang Final: Puncak Kasih Sayang Al-Wadūd',
    scenarioTitle: 'Meneladani Sifat Maha Mencintai & Pengasih',
    scenarioStory: 'Kamu melihat ada teman sekelas yang sedang sakit dan tidak masuk sekolah selama dua hari.',
    questionPrompt: 'Manakah bentuk amalan terbaik yang mencerminkan nilai Asmaul Husna "Al-Wadūd"?',
    options: [
      {
        id: '5a',
        text: 'Mengajak teman-teman menjenguk, mendoakan kesembuhannya, dan membawakan catatan pelajaran.',
        isCorrect: true,
        explanation: 'Selamat! Kamu telah meneladani Al-Wadūd (Maha Mencintai) dengan menyebarkan kasih sayang kepada sesama!'
      },
      {
        id: '5b',
        text: 'Acuh tak acuh karena merasa bukan urusan pribadi.',
        isCorrect: false,
        explanation: 'Salah! Al-Wadūd mengajarkan kita peduli dan menyayangi sesama.'
      },
      {
        id: '5c',
        text: 'Bersyukur karena saingan di kelas berkurang satu.',
        isCorrect: false,
        explanation: 'Salah! Bersenang-senang atas musibah orang lain adalah akhlak tercela.'
      }
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
    question: 'Secara bahasa, kata "Asmā\'" berarti nama-nama dan "Al-Husnā" berarti paling indah atau baik. Berdasarkan QS. Al-A\'raf ayat 180, perintah utama Allah Swt. berkaitan dengan Asmaul Husna adalah...',
    arabic: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا',
    options: [
      'A. Memajangnya sebagai hiasan tanpa dibaca',
      'B. Bermohon dan berdoa kepada Allah Swt. dengan menyebut nama-nama itu',
      'C. Menghafalkannya hanya saat mengikuti perlombaan',
      'D. Menuliskannya di buku catatan tanpa dipahami artinya'
    ],
    correctAnswerIndex: 1,
    explanation: 'QS. Al-A\'raf: 180 memerintahkan: "Dan Allah memiliki Asmaul Husna, maka bermohonlah kepada-Nya dengan menyebut nama-nama itu."'
  },
  {
    id: 2,
    question: 'Allah Swt. tidak tergesa-gesa memberikan hukuman kepada hamba-Nya yang berbuat dosa, melainkan memberi kesempatan untuk bertobat. Hal ini menunjukkan bahwa Allah memiliki sifat...',
    options: [
      'A. Al-Halīm (Maha Penyantun / Penyabar)',
      'B. Asy-Syakūr (Maha Mensyukuri)',
      'C. Al-Hakīm (Maha Bijaksana)',
      'D. Al-Wadūd (Maha Mencintai)'
    ],
    correctAnswerIndex: 0,
    explanation: 'Al-Halīm berarti Maha Penyantun atau Penyabar yang tidak tergesa-gesa memberikan hukuman.'
  },
  {
    id: 3,
    question: 'Ahmad selalu mengucapkan "Alhamdulillāh" dan rajin memberikan pujian serta terima kasih kepada guru dan orang tuanya. Sikap Ahmad mencerminkan keteladanan Asmaul Husna...',
    options: [
      'A. Al-Halīm',
      'B. Asy-Syakūr',
      'C. Al-Hakīm',
      'D. Al-Wadūd'
    ],
    correctAnswerIndex: 1,
    explanation: 'Asy-Syakūr berarti Maha Mensyukuri dan menghargai setiap kebaikan.'
  },
  {
    id: 4,
    question: 'Allah Swt. menciptakan pergantian siang dan malam serta panas dan hujan dengan tujuan yang sangat teratur bagi kehidupan manusia. Hal ini membuktikan bahwa Allah Swt. bersifat...',
    options: [
      'A. Al-Halīm',
      'B. Asy-Syakūr',
      'C. Al-Hakīm (Maha Bijaksana)',
      'D. Al-Wadūd'
    ],
    correctAnswerIndex: 2,
    explanation: 'Al-Hakīm berarti Maha Bijaksana, segala ciptaan dan ketentuan-Nya penuh hikmah.'
  },
  {
    id: 5,
    question: 'Rani selalu membagi bekal makanannya kepada teman yang tidak membawa bekal serta menjenguk temannya yang sakit. Perilaku Rani meneladani sifat Allah Swt....',
    options: [
      'A. Al-Halīm',
      'B. Asy-Syakūr',
      'C. Al-Hakīm',
      'D. Al-Wadūd (Maha Mencintai)'
    ],
    correctAnswerIndex: 3,
    explanation: 'Al-Wadūd berarti Maha Mencintai / Pengasih, mewujudkan kasih sayang kepada sesama.'
  },
  {
    id: 6,
    question: 'Ketika diejek oleh temannya di kelas, Budi tidak membalas mengejek melainkan tersenyum dan memaafkan. Tindakan Budi merupakan bentuk peneladanan sifat Al-Halīm karena...',
    options: [
      'A. Budi merasa takut kepada temannya',
      'B. Budi mampu mengendalikan emosinya dan bersikap santun penyabar',
      'C. Budi tidak punya kata-kata untuk membalas',
      'D. Budi ingin dipuji oleh guru PAI'
    ],
    correctAnswerIndex: 1,
    explanation: 'Al-Halīm mengajarkan kesabaran, tidak mudah marah, dan memaafkan kesalahan.'
  },
  {
    id: 7,
    question: 'Dalam suatu kerja kelompok PAI, Farhan mendengarkan seluruh pendapat anggotanya sebelum mengambil keputusan bersama. Farhan telah meneladani Asmaul Husna...',
    options: [
      'A. Al-Hakīm',
      'B. Asy-Syakūr',
      'C. Al-Halīm',
      'D. Al-Wadūd'
    ],
    correctAnswerIndex: 0,
    explanation: 'Al-Hakīm mengajarkan kebijaksanaan, berpikir sebelum bertindak, dan bermusyawarah.'
  },
  {
    id: 8,
    question: 'Berikut ini yang BUKAN merupakan contoh pengamalan Asmaul Husna Asy-Syakūr di lingkungan sekolah adalah...',
    options: [
      'A. Mengucapkan terima kasih kepada bapak/ibu guru',
      'B. Menjaga kebersihan dan fasilitas perpustakaan sekolah',
      'C. Mengeluh karena mendapat tugas piket kelas',
      'D. Memanfaatkan waktu istirahat untuk membaca buku bermanfaat'
    ],
    correctAnswerIndex: 2,
    explanation: 'Mengeluh bertentangan dengan rasa syukur (Asy-Syakūr).'
  },
  {
    id: 9,
    question: 'Pernyataan berikut yang paling tepat menggambarkan hubungan antara keempat Asmaul Husna (Al-Halīm, Asy-Syakūr, Al-Hakīm, Al-Wadūd) dalam membentuk akhlak murid adalah...',
    options: [
      'A. Keempatnya saling bertentangan satu sama lain',
      'B. Keempatnya saling melengkapi dalam membentuk pribadi yang sabar, bersyukur, bijaksana, dan penyayang',
      'C. Cukup mengamalkan salah satu nama saja untuk mendapat nilai sempurna',
      'D. Hanya boleh diamalkan oleh guru dan orang dewasa'
    ],
    correctAnswerIndex: 1,
    explanation: 'Keempat nama tersebut saling melengkapi dalam membentuk karakter akhlak karimah.'
  },
  {
    id: 10,
    question: 'Seorang murid yang meneladani sifat Al-Wadūd di rumah akan memperlihatkan perilaku...',
    options: [
      'A. Suka bertengkar dan berebut mainan dengan adik',
      'B. Berbicara sopan kepada orang tua dan menyayangi adik dengan tulus',
      'C. Menyuruh-nyuruh orang tua tanpa rasa hormat',
      'D. Mengurung diri di kamar sepanjang hari'
    ],
    correctAnswerIndex: 1,
    explanation: 'Al-Wadūd di rumah diwujudkan dengan kesopanan kepada orang tua dan kasih sayang kepada adik.'
  }
];

// B. PILIHAN GANDA KOMPLEKS (10 Soal)
export const EVALUASI_P2_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Pilihlah PERNYATAAN YANG BENAR TENTANG HIKMAH MENGETAHUI ASMAUL HUSNA AL-HALĪM! (Pilih lebih dari satu)',
    options: [
      'A. Mendorong seseorang untuk tidak mudah marah saat menghadapi ujian',
      'B. Melatih diri untuk mau memaafkan kesalahan teman',
      'C. Mendorong untuk membalas keburukan teman dengan keburukan yang lebih besar',
      'D. Berusaha memperbaiki diri ketika menyadari telah melakukan kesalahan'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Al-Halīm melatih kesabaran, memaafkan, dan memperbaiki diri. Membalas keburukan adalah hal tercela.'
  },
  {
    id: 2,
    question: 'Manakah CONTOH PERILAKU YANG MENCERMINKAN KETELADANAN ASMAUL HUSNA ASY-SYAKŪR? (Pilih lebih dari satu)',
    options: [
      'A. Mengucapkan "Alhamdulillāh" saat mendapatkan nikmat kesehatan',
      'B. Menjaga buku pelajaran dan alat tulis sekolah agar tidak rusak',
      'C. Mengucapkan terima kasih kepada orang yang telah memberikan bantuan',
      'D. Meremehkan kebaikan kecil yang dilakukan teman'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Mengucapkan alhamdulillah, menjaga fasilitas, dan berterima kasih adalah bentuk syukur.'
  },
  {
    id: 3,
    question: 'Pilihlah KETELADANAN ASMAUL HUSNA AL-HAKĪM DALAM KEHIDUPAN SEHARI-HARI! (Pilih lebih dari satu)',
    options: [
      'A. Menyelesaikan masalah kelas melalui jalan musyawarah',
      'B. Berpikir secara matang sebelum mengambil suatu keputusan',
      'C. Bertindak tergesa-gesa tanpa memikirkan akibatnya',
      'D. Bersikap adil dan tidak memihak saat menjadi ketua kelompok'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Al-Hakīm mengajarkan musyawarah, berpikir matang, dan bersikap adil.'
  },
  {
    id: 4,
    question: 'Manakah CONTOH PERILAKU YANG SESUAI DENGAN PENELADANAN ASMAUL HUSNA AL-WADŪD? (Pilih lebih dari satu)',
    options: [
      'A. Menolong teman yang terjatuh atau membutuhkan bantuan',
      'B. Berbagi makanan dengan teman saat jam istirahat sekolah',
      'C. Membenci teman yang memiliki perbedaan pendapat',
      'D. Menjaga kerukunan dan kedamaian di lingkungan kelas'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Al-Wadūd mendorong menolong sesama, berbagi makanan, dan menjaga kerukunan.'
  },
  {
    id: 5,
    question: 'Pilihlah BENTUK PENERAPAN ASMAUL HUSNA DI LINGKUNGAN SEKOLAH YANG BENAR! (Pilih lebih dari satu)',
    options: [
      'A. Bersabar ketika mengikuti proses pembelajaran yang panjang (Al-Halīm)',
      'B. Bijaksana saat bekerja dan berdiskusi dalam kelompok (Al-Hakīm)',
      'C. Menyayangi teman tanpa membeda-bedakan suku dan agama (Al-Wadūd)',
      'D. Melakukan perundungan (bullying) kepada murid baru'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Penerapan di sekolah meliputi kesabaran belajar, musyawarah bijak, dan kasih sayang sesama.'
  },
  {
    id: 6,
    question: 'Manakah MANFAAT MENGENAL DAN MEMAHAMI ASMAUL HUSNA BAGI SEORANG MUSLIM? (Pilih lebih dari satu)',
    options: [
      'A. Menambah keimanan dan kecintaan kepada Allah Swt.',
      'B. Menjadikan hati lebih tenang karena yakin akan kebesaran Allah Swt.',
      'C. Menumbuhkan sikap sombong karena merasa paling paham agama',
      'D. Menjadi teladan dalam berakhlak mulia di masyarakat'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Mengenal Asmaul Husna menambah iman, menenangkan hati, dan membentuk akhlak mulia.'
  },
  {
    id: 7,
    question: 'Pilihlah AMAL KEBAIKAN KECIL YANG TIDAK BOLEH DIREMEHKAN KARENA ALLAH ASY-SYAKŪR MEMBERI BALASAN BERLIPAT! (Pilih lebih dari satu)',
    options: [
      'A. Senyum ramah ketika menyapa guru dan teman',
      'B. Membuang sampah kecil ke tempat sampah',
      'C. Menyingkirkan ranting pohon yang menghalangi jalan',
      'D. Pamer kebaikan di media sosial agar dipuji'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Senyum, buang sampah, dan menyingkirkan halangan adalah amal kecil bernilai pahala di sisi Allah.'
  },
  {
    id: 8,
    question: 'Manakah SIFAT KEPEMIMPINAN YANG TERBENTUK APABILA SEORANG MURID MENELADANI ASMAUL HUSNA AL-HAKĪM DAN AL-HALĪM? (Pilih lebih dari satu)',
    options: [
      'A. Bijaksana dalam membuat keputusan kelompok',
      'B. Penyabar dan tidak mudah emosi saat dikritik',
      'C. Otoriter dan memaksa kehendak sendiri',
      'D. Mendengarkan aspirasi anggota kelompok secara santun'
    ],
    correctAnswerIndices: [0, 1, 3],
    explanation: 'Al-Hakīm dan Al-Halīm membentuk pemimpin bijaksana, penyabar, dan mendengarkan masukan.'
  },
  {
    id: 9,
    question: 'Pilihlah AYAT ATAU PERISTIWA YANG BERKAITAN DENGAN ASMAUL HUSNA! (Pilih lebih dari satu)',
    options: [
      'A. Perintah berdoa menyebut Asmaul Husna dalam QS. Al-A\'raf: 180',
      'B. Berdoa memohon ampunan dengan menyebut Al-Ghafūr',
      'C. Berdoa memohon kasih sayang dengan menyebut Al-Wadūd',
      'D. Membaca Al-Qur\'an tanpa tajwid agar cepat selesai'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Berdoa menyebut nama yang sesuai (Al-Ghafur, Al-Wadud) diperintahkan dalam QS. Al-A\'raf: 180.'
  },
  {
    id: 10,
    question: 'Manakah PERILAKU YANG MENGGABUNGKAN KETELADANAN AL-WADŪD DAN ASY-SYAKŪR SEKALIGUS? (Pilih lebih dari satu)',
    options: [
      'A. Mengucapkan terima kasih dan mendoakan teman yang memberi bantuan',
      'B. Membantu adik mengerjakan tugas rumah dengan sabar dan penuh rasa kasih sayang',
      'C. Merawat tanaman sekolah sebagai bentuk rasa syukur atas nikmat alam',
      'D. Membiarkan kelas kotor karena malas piket'
    ],
    correctAnswerIndices: [0, 1, 2],
    explanation: 'Berterima kasih, bantu adik, dan merawat tanaman menggabungkan kasih sayang (Al-Wadud) dan rasa syukur (Asy-Syakur).'
  }
];

// C. MENJODOHKAN (5 Soal)
export const EVALUASI_P2_MATCHING: MatchingItem[] = [
  {
    id: 1,
    leftText: 'Al-Halīm',
    leftArabic: 'ٱلْحَلِيمُ',
    rightText: 'Maha Penyantun / Penyabar (Tidak tergesa-gesa menghukum hamba-Nya)'
  },
  {
    id: 2,
    leftText: 'Asy-Syakūr',
    leftArabic: 'ٱلشَّكُورُ',
    rightText: 'Maha Mensyukuri / Memberi balasan pahala berlipat atas kebaikan hamba'
  },
  {
    id: 3,
    leftText: 'Al-Hakīm',
    leftArabic: 'ٱلْحَكِيمُ',
    rightText: 'Maha Bijaksana dalam menetapkan segala ciptaan dan takdir-Nya'
  },
  {
    id: 4,
    leftText: 'Al-Wadūd',
    leftArabic: 'ٱلْوَدُودُ',
    rightText: 'Maha Mencintai / Pengasih kepada hamba-hamba-Nya yang beriman'
  },
  {
    id: 5,
    leftText: 'QS. Al-A\'raf: 180',
    leftArabic: 'الأَعْرَاف: ١٨٠',
    rightText: 'Dalil Al-Qur\'an tentang perintah berdoa menyebut Asmaul Husna'
  }
];

// D. BENAR ATAU SALAH DISERTAI ALASANNYA (10 Soal)
export const EVALUASI_P2_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Asmaul Husna berarti nama-nama Allah Swt. yang indah dan mulia yang berjumlah 99 nama.',
    isTrue: true,
    explanation: 'BENAR. Asmā\' berarti nama-nama, Al-Husnā berarti paling indah/baik, berjumlah 99.'
  },
  {
    id: 2,
    statement: 'Allah Swt. bersifat Al-Halīm, yang artinya Allah akan langsung menghukum hamba-Nya seketika itu juga saat berbuat dosa.',
    isTrue: false,
    explanation: 'SALAH. Al-Halīm artinya Maha Penyantun/Penyabar, Allah TIDAK tergesa-gesa menghukum tetapi memberi kesempatan bertobat.'
  },
  {
    id: 3,
    statement: 'Meneladani sifat Asy-Syakūr membuat seseorang tidak pernah meremehkan amal kebaikan sekecil apa pun.',
    isTrue: true,
    explanation: 'BENAR. Asy-Syakūr menghargai setiap amal baik walau kecil, karena tidak ada kebaikan yang sia-sia.'
  },
  {
    id: 4,
    statement: 'Ketentuan Allah Swt. menciptakan siang dan malam merupakan bukti bahwa Allah bersifat Al-Hakīm (Maha Bijaksana).',
    isTrue: true,
    explanation: 'BENAR. Al-Hakīm berarti segala ciptaan dan takdir Allah Swt. mengandung hikmah yang luar biasa.'
  },
  {
    id: 5,
    statement: 'Seseorang yang meneladani Al-Wadūd akan mudah membenci dan mengusuhi teman yang berbeda pendapat.',
    isTrue: false,
    explanation: 'SALAH. Al-Wadūd mengajarkan kasih sayang, menjaga persahabatan, dan tidak membenci teman.'
  },
  {
    id: 6,
    statement: 'Berdasarkan QS. Al-A\'raf: 180, ketika memohon kasih sayang kita dianjurkan menyebut nama Allah Al-Wadūd.',
    isTrue: true,
    explanation: 'BENAR. Berdoa dianjurkan menyebut nama Allah yang sesuai dengan permohonan kita.'
  },
  {
    id: 7,
    statement: 'Menyelesaikan masalah kelompok melalui musyawarah merupakan contoh keteladanan Asmaul Husna Al-Hakīm.',
    isTrue: true,
    explanation: 'BENAR. Al-Hakīm menuntun manusia bermusyawarah secara bijaksana dan adil.'
  },
  {
    id: 8,
    statement: 'Memaafkan teman yang tidak sengaja merusak alat tulis kita merupakan bentuk pengamalan Al-Halīm.',
    isTrue: true,
    explanation: 'BENAR. Al-Halīm melatih kita menahan marah dan memaafkan kesalahan sesama.'
  },
  {
    id: 9,
    statement: 'Mengeluh saat mendapat tugas sekolah yang banyak merupakan contoh perilaku orang yang bersyukur (Asy-Syakūr).',
    isTrue: false,
    explanation: 'SALAH. Mengeluh adalah bentuk kurang bersyukur. Orang yang bersyukur memanfaatkan tugas untuk belajar.'
  },
  {
    id: 10,
    statement: 'Penerapan Asmaul Husna hanya berlaku di masjid dan tidak perlu dipraktikkan di sekolah maupun rumah.',
    isTrue: false,
    explanation: 'SALAH. Asmaul Husna harus diterapkan di mana saja: sekolah, rumah, dan lingkungan masyarakat.'
  }
];

// E. SOAL URAIAN (5 Soal)
export const EVALUASI_P2_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan pengertian Asmaul Husna menurut bahasa dan istilah, serta sebutkan dalil Al-Qur\'an yang memerintahkan kita berdoa dengannya!',
    rubric: 'Skor 20: Menjelaskan Asmā\' (nama-nama), Al-Husnā (paling indah/baik), istilah (nama-nama Allah yang indah & mulia), dan menyebut QS. Al-A\'raf: 180.',
    sampleAnswer: 'Asmaul Husna berasal dari kata "Asmā\'" (nama-nama) dan "Al-Husnā" (paling indah/baik). Secara istilah, Asmaul Husna adalah nama-nama Allah Swt. yang indah dan mulia yang menunjukkan kesempurnaan sifat-Nya. Dalilnya terdapat dalam QS. Al-A\'raf ayat 180: "Dan Allah memiliki Asmaul Husna, maka bermohonlah kepada-Nya dengan menyebut nama-nama itu."'
  },
  {
    id: 2,
    question: 'Jelaskan makna Asmaul Husna Al-Halīm dan berikan 3 contoh perilaku murid di sekolah yang mencerminkan keteladanan sifat tersebut!',
    rubric: 'Skor 20: Menjelaskan arti Al-Halīm (Maha Penyantun/Penyabar) dan memberikan 3 contoh konkret (misal: tidak marah diejek, sabar antre, memaafkan kesalahan teman).',
    sampleAnswer: 'Al-Halīm artinya Maha Penyantun atau Maha Penyabar. Allah tidak tergesa-gesa menghukum hamba-Nya yang bersalah, melainkan memberi kesempatan bertobat. Contoh di sekolah:\n1. Tidak marah ketika diejek teman dan membalasnya dengan senyuman.\n2. Bersabar menunggu giliran saat mengantre di kantin atau tempat wudhu.\n3. Memaafkan teman yang meminta maaf karena tidak sengaja merusak pensil.'
  },
  {
    id: 3,
    question: 'Mengapa seorang murid tidak boleh meremehkan amal kebaikan yang kecil menurut pemahaman Asmaul Husna Asy-Syakūr? Jelaskan!',
    rubric: 'Skor 20: Menjelaskan Asy-Syakūr (Maha Mensyukuri/Memberi Balasan) dan bahwa tidak ada amal baik yang sia-sia di sisi Allah Swt.',
    sampleAnswer: 'Karena Allah bersifat Asy-Syakūr (Maha Mensyukuri / Memberi Balasan). Allah sangat menghargai setiap amal baik hamba-Nya walaupun sangat kecil, seperti senyum ramah atau membuang sampah kecil. Allah akan melipatgandakan pahala kebaikan yang dilakukan dengan ikhlas, sehingga tidak ada satu pun amal baik yang sia-sia di sisi Allah Swt.'
  },
  {
    id: 4,
    question: 'Jelaskan makna Al-Hakīm dan bagaimanakah cara penerapan sifat bijaksana tersebut saat murid melakukan diskusi kelompok di kelas!',
    rubric: 'Skor 20: Menjelaskan Al-Hakīm (Maha Bijaksana) dan cara penerapannya (musyawarah, mendengarkan pendapat, tidak memihak, berpikir sebelum ambil keputusan).',
    sampleAnswer: 'Al-Hakīm artinya Maha Bijaksana, segala ketentuan Allah mengandung hikmah. Penerapan saat diskusi kelompok:\n1. Menyelesaikan perbedaan pendapat melalui jalan musyawarah.\n2. Berpikir jernih dan tidak tergesa-gesa mengambil keputusan.\n3. Mendengarkan masukan seluruh anggota kelompok dan bersikap adil tanpa memihak.'
  },
  {
    id: 5,
    question: 'Bagaimanakah keempat Asmaul Husna (Al-Halīm, Asy-Syakūr, Al-Hakīm, Al-Wadūd) saling melengkapi dalam membentuk karakter murid yang berakhlak mulia?',
    rubric: 'Skor 20: Menjelaskan peran masing-masing (Al-Halīm = kesabaran, Asy-Syakūr = rasa syukur, Al-Hakīm = bijaksana, Al-Wadūd = kasih sayang) yang membentuk pribadi utuh.',
    sampleAnswer: 'Keempat Asmaul Husna saling melengkapi:\n- Al-Halīm mengajarkan kesabaran dan kelembutan emosi.\n- Asy-Syakūr mengajarkan rasa syukur dan menghargai kebaikan.\n- Al-Hakīm mengajarkan kebijaksanaan dan keadilan dalam bertindak.\n- Al-Wadūd mengajarkan kasih sayang dan kerukunan kepada sesama.\nJika keempat sifat ini diamalkan bersama, murid akan tumbuh menjadi pribadi yang santun, bersyukur, bijak, dan penuh kasih sayang.'
  }
];
