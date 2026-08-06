export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  icon: string;
  color: string;
  points: string[];
  explanation?: string;
  arabicText?: string;
  latinText?: string;
  translationText?: string;
}

export interface ProyekTask {
  id: string;
  type: 'PjBL' | 'PBL';
  title: string;
  subtitle: string;
  duration: string;
  goal: string;
  steps: string[];
  output: string;
  rubrik: string[];
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
  rubricKey: string;
}

export const SLIDES_KELAS6_P2: SlideData[] = [
  {
    id: 1,
    title: 'Bab 2: Mengenal & Meneladani Asmaul Husna: Al-Waliy, Al-Hamid, Al-\'Adl, dan As-Sabur',
    subtitle: 'Tujuan Pembelajaran & Pengantar Bab 2 Kelas 6',
    category: 'Tujuan Pembelajaran',
    icon: 'Target',
    color: 'from-teal-600 to-emerald-700',
    points: [
      'Menjelaskan pengertian Asmaul Husna secara bahasa dan istilah.',
      'Menyebutkan makna Asmaul Husna Al-Waliy, Al-Hamid, Al-\'Adl, dan As-Sabur.',
      'Menemukan dalil tentang Asmaul Husna dalam Al-Qur\'an (QS. Al-A\'raf: 180, QS. Al-Baqarah: 257).',
      'Meneladani sifat-sifat mulia Asmaul Husna dalam kehidupan sehari-hari di rumah, sekolah, dan masyarakat.',
      'Membiasakan perilaku peduli, bersyukur, adil, dan sabar sebagai wujud pengamalan ajaran Islam.'
    ],
    explanation: 'Bab kedua mendidik murid kelas 6 untuk mengenal kesempurnaan Allah Swt. melalui empat nama indah-Nya serta membentuk akhlak karimah dalam berinteraksi sesama manusia.'
  },
  {
    id: 2,
    title: 'Pengertian Asmaul Husna',
    subtitle: 'Nama-Nama Indah Allah Swt. Bukti Kesempurnaan-Nya',
    category: 'Akidah Islam',
    icon: 'BookOpen',
    color: 'from-emerald-600 to-teal-700',
    points: [
      'Secara bahasa: "Asma\'" berarti nama-nama, dan "Al-Husna" berarti yang paling indah atau terbaik.',
      'Secara istilah: Asmaul Husna adalah nama-nama Allah Swt. yang indah dan menunjukkan kesempurnaan sifat-Nya.',
      'Allah Swt. memiliki 99 Asmaul Husna yang mengandung makna yang sangat agung.',
      'Setiap Muslim dianjurkan untuk mengenal, memahami, menghafal, serta meneladani nilai-nilainya.',
      'Bermohonlah kepada Allah Swt. dengan menyebut nama-nama-Nya sesuai dengan kebutuhan dan harapan kita.'
    ],
    arabicText: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا',
    translationText: 'Dan Allah memiliki Asmaul Husna (nama-nama yang terbaik), maka bermohonlah kepada-Nya dengan menyebut nama-nama itu. (QS. Al-A\'raf: 180)',
    explanation: 'Mengenal Asmaul Husna membuka pintu makrifatullah (mengenal Allah) sehingga doa yang kita panjatkan menjadi lebih khusyuk dan penuh keyakinan.'
  },
  {
    id: 3,
    title: 'Mengapa Kita Harus Mengenal Asmaul Husna?',
    subtitle: '6 Manfaat Utama Mempelajari Asmaul Husna',
    category: 'Keutamaan',
    icon: 'Sparkles',
    color: 'from-indigo-600 to-teal-600',
    points: [
      '1. Memperkuat keimanan dan ketakwaan kepada Allah Swt.',
      '2. Mengenal kebesaran, keagungan, dan kesempurnaan Allah Swt.',
      '3. Meningkatkan rasa cinta dan kerinduan beribadah kepada Allah Swt.',
      '4. Membentuk akhlak mulia dalam perilaku sehari-hari.',
      '5. Membiasakan diri berdoa kepada Allah Swt. dengan penuh keyakinan.',
      '6. Menumbuhkan sikap rendah hati (tawaduk) karena menyadari kebesaran Allah Swt.'
    ],
    explanation: 'Semakin kita mengenal Allah Swt., semakin besar dorongan di dalam hati kita untuk menaati semua perintah-Nya dan menjauhi segala larangan-Nya.'
  },
  {
    id: 4,
    title: 'Asmaul Husna Al-Waliy (الولِيُّ)',
    subtitle: 'Maha Pelindung, Maha Penolong, & Maha Pemelihara',
    category: 'Al-Waliy',
    icon: 'ShieldCheck',
    color: 'from-teal-600 to-cyan-700',
    points: [
      'Al-Waliy berarti Allah Swt. Maha Pelindung, Maha Penolong, atau Maha Pemelihara.',
      'Allah Swt. senantiasa melindungi, membimbing, dan menjaga seluruh makhluk-Nya di alam semesta.',
      'Tidak ada satu pun kejadian di langit dan di bumi yang luput dari pengawasan dan pemeliharaan Allah Swt.',
      'Orang beriman merasa tenang dan aman karena yakin selalu berada dalam perlindungan Allah Swt.'
    ],
    arabicText: 'اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا',
    translationText: 'Allah adalah Pelindung orang-orang yang beriman. (QS. Al-Baqarah: 257)',
    explanation: 'Sebagai Pelindung Utama, Allah membimbing hamba-Nya dari kegelapan kebodohan menuju cahaya petunjuk kebenaran.'
  },
  {
    id: 5,
    title: 'Meneladani Sifat Al-Waliy',
    subtitle: 'Menjadi Pribadi Pelindung & Penolong Sesama',
    category: 'Keteladanan',
    icon: 'HeartHandshake',
    color: 'from-cyan-600 to-teal-700',
    points: [
      'Melindungi adik dan anggota keluarga dari bahaya.',
      'Menjaga teman sekolah agar tidak mengalami perundungan (bullying) atau bahaya fisik.',
      'Membantu teman yang mengalami kesulitan belajar atau musibah.',
      'Menjaga kebersihan dan kelestarian lingkungan sekitar.',
      'Menjadi teman yang jujur, setia, dan dapat dipercaya.'
    ],
    explanation: 'Meskipun manusia tidak bisa menandingi perlindungan Allah, kita dapat meneladani nilai Al-Waliy dengan menjadi pelindung bagi orang-orang di sekitar kita.'
  },
  {
    id: 6,
    title: 'Asmaul Husna Al-Hamid (الْحَمِيدُ)',
    subtitle: 'Maha Terpuji & Pemilik Segala Pujian',
    category: 'Al-Hamid',
    icon: 'Award',
    color: 'from-emerald-600 to-indigo-700',
    points: [
      'Al-Hamid berarti Allah Swt. Maha Terpuji.',
      'Segala pujian di alam semesta hanya layak diberikan kepada Allah Swt. karena seluruh nikmat berasal dari-Nya.',
      'Allah Swt. dipuji oleh seluruh makhluk di langit dan di bumi atas keagungan dan kebaikan-Nya.',
      'Kalimat Thayyibah Utama: "Alhamdulillah" (segala puji bagi Allah) wajib diucapkan sebagai wujud syukur.'
    ],
    arabicText: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    translationText: 'Segala puji bagi Allah, Tuhan semesta alam. (QS. Al-Fatihah: 2)',
    explanation: 'Memahami Al-Hamid menjauhkan manusia dari sifat sombong dan ujub (bangga diri) karena menyadari semua kelebihan adalah pemberian Allah Swt.'
  },
  {
    id: 7,
    title: 'Bentuk Nikmat & Meneladani Al-Hamid',
    subtitle: 'Mengenali Karunia Allah & Membiasakan Bersyukur',
    category: 'Keteladanan',
    icon: 'Gift',
    color: 'from-teal-600 to-emerald-600',
    points: [
      'Bentuk Nikmat Allah Swt.: Kesehatan tubuh, keluarga penyayang, ilmu pengetahuan, makanan berzizi, udara segar, teman baik, & kesempatan belajar.',
      'Sifat Meneladani Al-Hamid:',
      '• Selalu mengucapkan "Alhamdulillah" ketika memperoleh nikmat atau menyelesaikan pekerjaan.',
      '• Tidak sombong atas prestasi, nilai bagus, atau kepandai di sekolah.',
      '• Menghargai jasa orang tua, guru, dan teman.',
      '• Membiasakan mengucapkan terima kasih kepada siapapun yang membantu kita.',
      '• Menggunakan nikmat dan rezeki Allah Swt. untuk berbuat kebaikan.'
    ],
    explanation: 'Orang yang meneladani Al-Hamid akan senantiasa memiliki rasa syukur, rendah hati, dan dipenuhi energi positif dalam kehidupannya.'
  },
  {
    id: 8,
    title: 'Asmaul Husna Al-\'Adl (الْعَدْلُ)',
    subtitle: 'Maha Adil & Menempatkan Sesuatu pada Tempatnya',
    category: 'Al-\'Adl',
    icon: 'Scale',
    color: 'from-amber-600 to-teal-700',
    points: [
      'Al-\'Adl berarti Allah Swt. Maha Adil.',
      'Allah Swt. memberikan keputusan dan hukum dengan penuh keadilan yang sempurna.',
      'Allah tidak pernah berbuat zalim atau merugikan hamba-Nya sekecil apa pun.',
      'Setiap manusia akan menerima balasan yang sesuai dengan perbuatannya:',
      '• Orang yang berbuat baik akan memperoleh pahala dan kenikmatan surga.',
      '• Orang yang berbuat buruk akan mempertanggungjawabkan perbuatannya.'
    ],
    explanation: 'Keadilan Allah Swt. berlaku bagi seluruh makhluk tanpa terkecuali, baik di dunia maupun di akhirat kelak.'
  },
  {
    id: 9,
    title: 'Contoh Keadilan Allah & Meneladani Al-\'Adl',
    subtitle: 'Menerapkan Sikap Adil di Sekolah & Masyarakat',
    category: 'Keteladanan',
    icon: 'Users',
    color: 'from-indigo-600 to-cyan-600',
    points: [
      'Contoh Keadilan Allah Swt.: Setiap manusia memperoleh rezeki sesuai ketentuan-Nya; amal baik sekecil zarrah dibalas pahala.',
      'Cara Murid Meneladani Al-\'Adl:',
      '• Tidak membeda-bedakan teman berdasarkan suku, latar belakang, atau kekayaan.',
      '• Berbagi makanan atau barang secara merata saat bersama teman.',
      '• Menjadi ketua kelompok atau pemimpin yang adil dan tidak pilih kasih.',
      '• Tidak memihak ketika menjadi wasit dalam permainan atau olahraga.',
      '• Menghargai hak orang lain dan melaksanakan kewajiban diri sendiri.'
    ],
    explanation: 'Sikap adil menciptakan kedamaian, kerukunan, dan rasa saling percaya di lingkungan sekolah maupun masyarakat.'
  },
  {
    id: 10,
    title: 'Asmaul Husna As-Sabur (الصَّبُورُ)',
    subtitle: 'Maha Sabar & Tidak Tergesa-gesa Memberi Hukuman',
    category: 'As-Sabur',
    icon: 'Clock',
    color: 'from-cyan-600 to-indigo-700',
    points: [
      'As-Sabur berarti Allah Swt. Maha Sabar.',
      'Allah Swt. tidak tergesa-gesa memberikan balasan atau hukuman kepada orang yang berbuat dosa.',
      'Allah memberi kesempatan yang luas kepada hamba-Nya untuk bertobat dan memperbaiki diri.',
      'Sifat As-Sabur menunjukkan kasih sayang Allah yang melimpah kepada seluruh makhluk-Nya.'
    ],
    explanation: 'Kesabaran Allah Swt. mengajarkan kita untuk tidak mudah emosi, tidak terburu-buru mengambil keputusan, dan memberi kesempatan perbaikan pada sesama.'
  },
  {
    id: 11,
    title: 'Mengapa Kita Harus Bersabar & Meneladani As-Sabur?',
    subtitle: 'Menghadapi Ujian Hidup dengan Keteguhan Jiwa',
    category: 'Keteladanan',
    icon: 'Smile',
    color: 'from-teal-600 to-amber-600',
    points: [
      'Bentuk Ujian Sehari-hari: Mendapat nilai kurang baik, kalah perlombaan, sakit, atau dimarahi karena melakukan kesalahan.',
      'Mengapa Harus Sabar? Islam mengajarkan agar kita menghadapi ujian dengan tenang dan tetap berusaha memperbaikinya.',
      'Contoh Meneladani As-Sabur:',
      '• Sabar ketika belajar dan mengulang materi yang sulit.',
      '• Sabar saat mengantre di kantin atau tempat umum.',
      '• Sabar menghadapi sikap atau perkataan teman yang kurang menyenangkan.',
      '• Tidak mudah marah atau melampiaskan emosi saat terjadi masalah.',
      '• Tetap semangat dan bangkit walaupun mengalami kegagalan.'
    ],
    explanation: 'Kesabaran adalah kunci kesuksesan belajar dan benteng utama dalam menjaga kesehatan mental serta kedewasaan diri.'
  },
  {
    id: 12,
    title: 'Hikmah Mempelajari 4 Asmaul Husna',
    subtitle: 'Pelajaran Berharga untuk Pembentukan Karakter',
    category: 'Hikmah',
    icon: 'CheckCircle2',
    color: 'from-emerald-600 to-teal-700',
    points: [
      'Dari Al-Waliy: Belajar menjadi pribadi yang suka menolong, peduli, dan menjaga keselamatan orang lain.',
      'Dari Al-Hamid: Belajar bersyukur atas semua nikmat Allah Swt. dan rendah hati atas segala prestasi.',
      'Dari Al-\'Adl: Belajar berlaku jujur, tidak pilih kasih, dan menghargai hak siapa pun.',
      'Dari As-Sabur: Belajar mengendalikan emosi, tekun belajar, dan tidak mudah putus asa menghadapi kesulitan.'
    ],
    explanation: 'Keempat Asmaul Husna ini membentuk fondasi karakter murid muslim yang tangguh, santun, adil, dan senantiasa bersyukur.'
  },
  {
    id: 13,
    title: 'Penerapan Asmaul Husna dalam Kehidupan',
    subtitle: 'Pengamalan Praktis di Rumah, Sekolah, & Masyarakat',
    category: 'Penerapan',
    icon: 'Home',
    color: 'from-teal-700 to-indigo-700',
    points: [
      'Di Rumah: Membantu orang tua tanpa diminta, menjaga adik, bersyukur atas makanan yang disediakan, bersikap adil kepada saudara, dan sabar ketika dinasihati.',
      'Di Sekolah: Membantu teman yang kesulitan belajar, menghormati guru, tidak memilih-milih teman, menerima hasil ulangan dengan lapang dada, dan belajar dengan tekun.',
      'Di Masyarakat: Ikut menjaga kebersihan lingkungan, membantu tetangga, menghormati perbedaan, bersikap ramah, dan sabar saat mengikuti kegiatan bersama.'
    ],
    explanation: 'Menerapkan Asmaul Husna menjadikan kita sosok murid yang dicintai Allah Swt., disayangi orang tua, dan disukai teman-teman.'
  },
  {
    id: 14,
    title: 'Kisah Teladan Kerja Kelompok',
    subtitle: 'Cerminan Pengamalan 4 Asmaul Husna dalam Satu Kisah',
    category: 'Kisah Teladan',
    icon: 'BookOpenCheck',
    color: 'from-indigo-600 to-emerald-700',
    points: [
      'Kisah: Guru meminta seluruh siswa bekerja dalam kelompok. Ketua kelompok membagi tugas secara adil sehingga semua anggota mendapat porsi seimbang.',
      'Ketika salah seorang teman belum memahami tugasnya, anggota lain dengan sabar membantu menjelaskan.',
      'Setelah tugas selesai dengan baik, mereka bersama-sama mengucapkan "Alhamdulillah".',
      'Nilai Pengamalan:',
      '• Al-Waliy: Saling melindungi dan membantu anggota kelompok.',
      '• Al-Hamid: Bersyukur kepada Allah atas selesainya tugas.',
      '• Al-\'Adl: Membagi tugas secara adil tanpa pilih kasih.',
      '• As-Sabur: Sabar membimbing teman sampai paham.'
    ],
    explanation: 'Kisah ini membuktikan bahwa Asmaul Husna dapat kita wujudkan secara nyata dalam interaksi belajar sehari-hari.'
  },
  {
    id: 15,
    title: 'Rangkuman & Refleksi Bab 2',
    subtitle: 'Kesimpulan & Perenungan Diri Murid Kelas 6',
    category: 'Rangkuman',
    icon: 'FileCheck',
    color: 'from-teal-600 to-emerald-700',
    points: [
      'Asmaul Husna adalah nama-nama Allah Swt. yang indah dan menunjukkan kesempurnaan sifat-Nya.',
      'Al-Waliy (Maha Pelindung/Penolong): Mengajarkan kita untuk saling melindungi dan membantu.',
      'Al-Hamid (Maha Terpuji): Mengajarkan kita untuk selalu bersyukur dan rendah hati.',
      'Al-\'Adl (Maha Adil): Mengajarkan kita untuk berlaku adil, tidak membeda-bedakan, dan menghargai hak orang lain.',
      'As-Sabur (Maha Sabar): Mengajarkan kita untuk mengendalikan emosi, tekun, dan tidak mudah putus asa.',
      'Mengamalkan keempatnya membentuk pribadi beriman, berakhlak mulia, peduli, dan bertanggung jawab.'
    ],
    explanation: 'Mari kita renungkan: Sudahkah kita bersyukur hari ini? Sudahkah kita adil kepada teman? Sudahkah kita sabar menghadapi kesulitan?'
  }
];

export const PROYEK_TASKS_KELAS6_P2: ProyekTask[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    title: 'Poster Digital / Majalah Dinding "Pengamalan 4 Asmaul Husna"',
    subtitle: 'Project Based Learning • Kreasi Media Edukasi Visual',
    duration: '1 Minggu (Kelompok 3-4 Murid)',
    goal: 'Murid mampu mendesain poster visual atau karya mading interaktif yang menyajikan makna Al-Waliy, Al-Hamid, Al-\'Adl, dan As-Sabur beserta contoh penerapannya di sekolah.',
    steps: [
      '1. Pembagian kelompok dan pemilihan salah satu dari 4 Asmaul Husna atau gabungan keempatnya.',
      '2. Pengumpulan materi: Arti nama, dalil ringkas, dan 3 contoh perilaku nyata di lingkungan sekolah.',
      '3. Pembuatan desain visual menarik (menggunakan kertas karton berhias atau aplikasi digital).',
      '4. Presentasi di depan kelas dan penempelan karya pada papan mading sekolah.'
    ],
    output: 'Poster Kreatif / Mading Edukasi 4 Asmaul Husna lengkap dengan kaligrafi dan contoh penerapan.',
    rubrik: [
      'Kesesuaian Makna & Dalil (Skor 30)',
      'Kreativitas & Kerapian Visual (Skor 30)',
      'Relevansi Contoh Perilaku Sehari-hari (Skor 25)',
      'Kerjasama Kelompok & Presentasi (Skor 15)'
    ]
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    title: 'Jurnal Harian "Aksi Nyata Meneladani Asmaul Husna"',
    subtitle: 'Project Based Learning • Catatan Refleksi Karakter 7 Hari',
    duration: '7 Hari Mandiri',
    goal: 'Murid dapat membiasakan dan mencatat 4 tindakan nyata meneladani Al-Waliy, Al-Hamid, Al-\'Adl, dan As-Sabur dalam aktivitas harian di rumah dan sekolah.',
    steps: [
      '1. Membuat buku saku / tabel jurnal harian sederhana.',
      '2. Mencatat 1 tindakan meneladani Al-Waliy (menolong), Al-Hamid (bersyukur), Al-\'Adl (bersikap adil), dan As-Sabur (sabar) setiap hari.',
      '3. Meminta paraf dari orang tua dan wali kelas sebagai bukti pendampingan.',
      '4. Menuliskan refleksi perasaan setelah melakukan kebaikan selama 7 hari.'
    ],
    output: 'Buku Jurnal Harian Pengamalan Asmaul Husna bermaterikan catatan autentik dan paraf orang tua.',
    rubrik: [
      'Kelengkapan Catatan 7 Hari (Skor 35)',
      'Keautentikan Contoh Tindakan (Skor 30)',
      'Refleksi Diri & Kesimpulan (Skor 20)',
      'Kerapian & Validasi Paraf Orang Tua (Skor 15)'
    ]
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    title: 'Analisis Studi Kasus "Ketidakadilan dalam Permainan Kelompok"',
    subtitle: 'Problem Based Learning • Pemecahan Masalah Sikap Adil (Al-\'Adl)',
    duration: '1 Pertemuan Pembelajaran',
    goal: 'Murid mampu menganalisis masalah ketidakadilan saat bermain di sekolah dan merumuskan solusi berlandaskan sifat Al-\'Adl dan As-Sabur.',
    steps: [
      '1. Mengamati studi kasus: "Saat bermain bola, seorang anak tidak pernah diberi kesempatan menendang karena dinilai kurang mahir oleh kapten tim."',
      '2. Diskusi kelompok: Mengapa tindakan kapten tim tersebut bertentangan dengan Asmaul Husna Al-\'Adl?',
      '3. Merumuskan 3 solusi konkret agar permainan menjadi adil dan semua teman merasa dihargai.',
      '4. Menyampaikan hasil analisis dan bermain peran (role-play) demonstrasi solusi adil.'
    ],
    output: 'Lembar Kerja Analisis Kasus & Peragaan Role-Play Pembagian Peran yang Adil.',
    rubrik: [
      'Kedalaman Analisis Kasus (Skor 35)',
      'Solusi Berbasis Nilai Al-\'Adl & As-Sabur (Skor 35)',
      'Penampilan Role-Play & Kejelasan Penyampaian (Skor 30)'
    ]
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    title: 'Studi Kasus "Mengatasi Keputusasaan dan Emosi saat Gagal Ujian"',
    subtitle: 'Problem Based Learning • Aplikasi Nilai As-Sabur & Al-Hamid',
    duration: '1 Pertemuan Pembelajaran',
    goal: 'Murid dapat merancang langkah-langkah mengatasi rasa kecewa/marah ketika mendapat nilai ujian kurang baik melalui pendekatan As-Sabur dan Al-Hamid.',
    steps: [
      '1. Membaca skenario: "Ahmad mendapat nilai ulangan matematika rendah padahal sudah belajar. Ia merasa putus asa dan ingin berhenti belajar."',
      '2. Mengidentifikasi emosi negatif dan kekeliruan pemikiran dalam skenario.',
      '3. Menyusun rencana aksi "Bangkit Bersama As-Sabur": Mengelola emosi, bersyukur masih diberi kesempatan memperbaiki (Al-Hamid), dan strategi belajar baru.',
      '4. Mempresentasikan saran kelompok kepada kelas.'
    ],
    output: 'Peta Pikiran (Mind Map) "Strategi Sabar & Syukur Menghadapi Kegagalan".',
    rubrik: [
      'Identifikasi Masalah Emosi (Skor 30)',
      'Relevansi Nilai As-Sabur & Al-Hamid (Skor 40)',
      'Kreativitas Peta Pikiran & Kerjasama (Skor 30)'
    ]
  }
];

export const GAME_QUESTIONS_KELAS6_P2 = [
  {
    id: 1,
    question: 'Kata "Asmaul Husna" berasal dari bahasa Arab. Apakah arti dari kata "Al-Husna"?',
    options: ['Yang Paling Agung', 'Yang Paling Indah / Terbaik', 'Yang Maha Kuasa', 'Yang Maha Pengasih'],
    correctAnswer: 1,
    explanation: 'Secara bahasa, "Asma\'" berarti nama-nama dan "Al-Husna" berarti yang paling indah atau terbaik.'
  },
  {
    id: 2,
    question: 'Berapakah jumlah Asmaul Husna yang dimiliki oleh Allah Swt.?',
    options: ['33', '66', '99', '100'],
    correctAnswer: 2,
    explanation: 'Allah Swt. memiliki 99 Asmaul Husna yang menunjukkan kesempurnaan sifat-Nya.'
  },
  {
    id: 3,
    question: 'Surat Al-Qur\'an manakah yang memerintahkan kita untuk berdoa menyebut Asmaul Husna?',
    options: ['QS. Al-Baqarah: 257', 'QS. Al-A\'raf: 180', 'QS. Al-Fatihah: 2', 'QS. Al-Insyirah: 5'],
    correctAnswer: 1,
    explanation: 'QS. Al-A\'raf: 180 berbunyi: "Dan Allah memiliki Asmaul Husna, maka bermohonlah kepada-Nya dengan menyebut nama-nama itu."'
  },
  {
    id: 4,
    question: 'Asmaul Husna "Al-Waliy" (الولي) mengandung arti...',
    options: ['Maha Terpuji', 'Maha Adil', 'Maha Pelindung / Penolong', 'Maha Sabar'],
    correctAnswer: 2,
    explanation: 'Al-Waliy berarti Allah Swt. Maha Pelindung, Maha Penolong, atau Maha Pemelihara.'
  },
  {
    id: 5,
    question: 'Dalam QS. Al-Baqarah: 257 dijelaskan bahwa "Allah adalah Pelindung bagi..."',
    options: ['Orang-orang yang kaya', 'Orang-orang yang beriman', 'Seluruh penguasa dunia', 'Orang yang kuat'],
    correctAnswer: 1,
    explanation: 'Ayat tersebut berbunyi "Allahu waliyyul-ladzina aamanu" artinya Allah adalah Pelindung orang-orang yang beriman.'
  },
  {
    id: 6,
    question: 'Asmaul Husna "Al-Hamid" (الحميد) berarti Maha Terpuji. Kalimat thayyibah yang senantiasa kita ucapkan adalah...',
    options: ['Subhanallah', 'Alhamdulillah', 'Allahu Akbar', 'Astaghfirullah'],
    correctAnswer: 1,
    explanation: 'Alhamdulillah (Segala puji bagi Allah) adalah kalimat pujian kepada Allah Swt. Sang Maha Terpuji (Al-Hamid).'
  },
  {
    id: 7,
    question: 'Siti mendapat nilai ulangan 100 di kelas. Perilaku Siti yang meneladani sifat Al-Hamid adalah...',
    options: ['Memamerkan nilainya kepada teman', 'Mengucapkan Alhamdulillah & tidak sombong', 'Merasa dirinya paling pintar', 'Menyembunyikan nilainya'],
    correctAnswer: 1,
    explanation: 'Meneladani Al-Hamid berarti bersyukur dengan mengucap Alhamdulillah dan tetap rendah hati tanpa sombong.'
  },
  {
    id: 8,
    question: 'Sifat Allah Swt. "Al-\'Adl" (العدل) menunjukkan bahwa Allah Swt. bersifat...',
    options: ['Maha Pemurah', 'Maha Adil', 'Maha Mengetahui', 'Maha Penyabar'],
    correctAnswer: 1,
    explanation: 'Al-\'Adl artinya Maha Adil. Allah selalu memberi keputusan dengan adil dan tidak pernah berbuat zalim.'
  },
  {
    id: 9,
    question: 'Sebagai ketua kelompok belajar, Budi membagi tugas secara merata kepada semua anggota. Sikap Budi mencerminkan Asmaul Husna...',
    options: ['Al-Waliy', 'Al-Hamid', 'Al-\'Adl', 'As-Sabur'],
    correctAnswer: 2,
    explanation: 'Membagi tugas secara merata tanpa pilih kasih adalah bentuk nyata pengamalan Asmaul Husna Al-\'Adl (Maha Adil).'
  },
  {
    id: 10,
    question: 'Asmaul Husna "As-Sabur" (الصبور) berarti...',
    options: ['Maha Adil', 'Maha Terpuji', 'Maha Sabar', 'Maha Pemelihara'],
    correctAnswer: 2,
    explanation: 'As-Sabur artinya Allah Swt. Maha Sabar, tidak tergesa-gesa memberikan hukuman dan memberi kesempatan bertobat.'
  },
  {
    id: 11,
    question: 'Ketika mengantre makanan di kantin sekolah dengan tertib tanpa menyerobot, murid sedang meneladani sifat...',
    options: ['As-Sabur', 'Al-Hamid', 'Al-Waliy', 'Al-\'Adl'],
    correctAnswer: 0,
    explanation: 'Sabar menunggu giliran dalam antrean tanpa emosi adalah wujud nyata meneladani sifat As-Sabur.'
  },
  {
    id: 12,
    question: 'Dalam kisah kerja kelompok, saat anggota kelompok sabar membantu teman yang belum paham, perilaku ini meneladani...',
    options: ['Al-Waliy & As-Sabur', 'Al-Hamid saja', 'Al-\'Adl saja', 'Tidak berhubungan'],
    correctAnswer: 0,
    explanation: 'Membantu/melindungi teman meneladani Al-Waliy, dan bersabar membimbing meneladani As-Sabur.'
  }
];

export const EVALUASI_PG_KELAS6_P2: EvaluasiPG[] = [
  {
    id: 1,
    question: 'Secara bahasa, kata "Asmaul Husna" terdiri dari dua kata yaitu Asma\' dan Al-Husna. Makna yang tepat dari gabungan kedua kata tersebut adalah...',
    options: [
      'Nama-nama manusia yang paling mulia',
      'Nama-nama Allah Swt. yang indah dan menunjukkan kesempurnaan sifat-Nya',
      'Nama-nama malaikat yang bertugas menjaga surga',
      'Nama-nama kitab suci yang diturunkan kepada para nabi'
    ],
    answer: 1,
    explanation: 'Asmaul Husna berarti nama-nama Allah Swt. yang paling indah dan sempurna.'
  },
  {
    id: 2,
    question: 'Perhatikan firman Allah Swt. berikut: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا" (QS. Al-A\'raf: 180). Pesan utama dari ayat tersebut bagi kehidupan murid adalah...',
    options: [
      'Wajib menghafalkan seluruh kitab suci tanpa memahami artinya',
      'Dianjurkan berdoa kepada Allah Swt. dengan menyebut Asmaul Husna sesuai harapan dan kebutuhan',
      'Hanya boleh berdoa saat berada di dalam masjid',
      'Tidak perlu berusaha karena Allah sudah menetapkan takdir'
    ],
    answer: 1,
    explanation: 'QS. Al-A\'raf: 180 mengajarkan agar kita berdoa dengan menyebut Asmaul Husna sesuai kebutuhan.'
  },
  {
    id: 3,
    question: 'Ahmad selalu membantu adiknya menyeberang jalan dan menjaga teman deretan bangkunya dari gangguan siswa nakal. Perilaku Ahmad mencerminkan pengamalan Asmaul Husna...',
    options: ['Al-Hamid', 'Al-Waliy', 'Al-\'Adl', 'As-Sabur'],
    answer: 1,
    explanation: 'Al-Waliy berarti Maha Pelindung/Penolong. Menjaga dan melindungi orang lain adalah bentuk pengamalannya.'
  },
  {
    id: 4,
    question: 'Seseorang yang meneladani Asmaul Husna Al-Hamid ketika mendapatkan nikmat berupa kelulusan ujian dengan nilai terbaik akan bersikap...',
    options: [
      'Mengadakan pesta mewah untuk menunjukkan kehebatannya',
      'Mengucapkan Alhamdulillah dan bersujud syukur serta tetap rendah hati',
      'Menganggap kelulusan itu murni hasil kecerdasannya sendiri',
      'Meremehkan teman-teman yang nilainya lebih rendah'
    ],
    answer: 1,
    explanation: 'Al-Hamid mengajarkan untuk selalu memuji Allah (Alhamdulillah) dan menghindari sifat sombong.'
  },
  {
    id: 5,
    question: 'Pak Guru menunjuk dua orang murid menjadi ketua dan wakil piket. Ia memberikan pembagian jadwal tugas piket secara merata tanpa membedakan jenis kelamin maupun latar belakang. Sikap Pak Guru merupakan cerminan dari...',
    options: ['Al-Waliy', 'Al-Hamid', 'Al-\'Adl', 'As-Sabur'],
    answer: 2,
    explanation: 'Al-\'Adl berarti Maha Adil. Membagi tugas secara merata tanpa membeda-bedakan adalah wujud keadilan.'
  },
  {
    id: 6,
    question: 'Ketika nilai ulangan harian Fatimah tidak sesuai target, ia tidak marah atau menyalahkan guru, melainkan menenangkan diri dan mempelajari kembali bab yang belum dikuasai. Sikap Fatimah mencerminkan sifat...',
    options: ['Al-Waliy', 'Al-Hamid', 'Al-\'Adl', 'As-Sabur'],
    answer: 3,
    explanation: 'As-Sabur berarti Maha Sabar. Sabar saat menghadapi kegagalan dan tetap semangat belajar adalah keteladanannya.'
  },
  {
    id: 7,
    question: 'Manakah di bawah ini yang merupakan dalil Al-Qur\'an tentang Asmaul Husna Al-Waliy?',
    options: [
      'اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا (QS. Al-Baqarah: 257)',
      'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (QS. Al-Fatihah: 2)',
      'إِنَّ مَعَ الْعُسْرِ يُسْرًا (QS. Al-Insyirah: 6)',
      'قُلْ هُوَ اللَّهُ أَحَدٌ (QS. Al-Ikhlas: 1)'
    ],
    answer: 0,
    explanation: 'QS. Al-Baqarah: 257 berbunyi "Allahu waliyyul-ladzina aamanu" (Allah adalah Pelindung orang-orang yang beriman).'
  },
  {
    id: 8,
    question: 'Di bawah ini yang BUKAN merupakan bentuk nikmat Allah Swt. yang harus disyukuri berdasarkan pemahaman Asmaul Husna Al-Hamid adalah...',
    options: [
      'Kesehatan badan dan akal pikiran',
      'Keberhasilan menyontek saat ulangan tanpa ketahuan',
      'Teman-teman yang baik dan saling mendukung',
      'Udara bersih untuk bernapas setiap hari'
    ],
    answer: 1,
    explanation: 'Menyontek adalah perbuatan tercela dan dosa, bukan nikmat Allah yang patut disyukuri.'
  },
  {
    id: 9,
    question: 'Dalam sebuah pertandingan sepak bola sekolah, Hasan menjadi wasit. Ketika kawan dekatnya melakukan pelanggaran di kotak penalti, Hasan tetap memberikan hukuman penalti sesuai aturan. Perilaku Hasan menunjukkan...',
    options: ['Sikap tidak setia kawan', 'Keteladanan Asmaul Husna Al-\'Adl', 'Sikap mencari perhatian guru', 'Pengamalan Asmaul Husna Al-Waliy'],
    answer: 1,
    explanation: 'Bertindak objektif dan jujur tanpa memihak teman dekat adalah bentuk nyata keteladanan Al-\'Adl (Maha Adil).'
  },
  {
    id: 10,
    question: 'Mengapa Allah Swt. dinamakan As-Sabur (Maha Sabar)?',
    options: [
      'Karena Allah tidak pernah menghukum orang berdosa',
      'Karena Allah tidak tergesa-gesa menghukum hamba-Nya dan memberi kesempatan bertobat',
      'Karena Allah membutuhkan waktu untuk menciptakan alam semesta',
      'Karena Allah membiarkan kejahatan terjadi tanpa batas'
    ],
    answer: 1,
    explanation: 'As-Sabur menunjukkan kasih sayang Allah yang tidak terburu-buru menurunkan azab agar hamba-Nya sempat bertobat.'
  }
];

export const EVALUASI_PGK_KELAS6_P2: EvaluasiPGK[] = [
  {
    id: 1,
    question: 'Pilihlah pernyataan-pernyataan yang BENAR mengenai pengertian dan keutamaan Asmaul Husna! (Pilih lebih dari satu)',
    options: [
      'Asmaul Husna berjumlah 99 nama indah milik Allah Swt.',
      'Mengenal Asmaul Husna dapat meningkatkan keimanan dan kecintaan kepada Allah Swt.',
      'Asmaul Husna hanya boleh dibaca oleh para ulama dan ustaz.',
      'Berdoa dengan menyebut Asmaul Husna diajarkan dalam QS. Al-A\'raf: 180.'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Asmaul Husna berjumlah 99, meningkatkan iman, dan diperintahkan dibaca saat berdoa dalam QS. Al-A\'raf: 180.'
  },
  {
    id: 2,
    question: 'Manakah tindakan di bawah ini yang mencerminkan keteladanan sifat Al-Waliy (Maha Pelindung/Penolong) di sekolah? (Pilih lebih dari satu)',
    options: [
      'Membantu teman yang terjatuh di halaman sekolah',
      'Membela teman yang melakukan perundungan kepada siswa lain',
      'Menerangkan materi pelajaran kepada kawan yang belum paham',
      'Menjaga kebersihan dan keamanan lingkungan kelas'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Menolong teman jatuh, menerangkan pelajaran, dan menjaga keamanan kelas adalah cerminan Al-Waliy.'
  },
  {
    id: 3,
    question: 'Manakah bentuk pengamalan nilai Al-Hamid (Maha Terpuji) dalam kehidupan sehari-hari? (Pilih lebih dari satu)',
    options: [
      'Membiasakan mengucapkan "Alhamdulillah" saat mendapat kemudahan',
      'Memamerkan harta dan kepintaran di media sosial',
      'Membiasakan mengucap terima kasih atas bantuan orang lain',
      'Tetap rendah hati dan tidak sombong saat meraih juara kelas'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Mengucap Alhamdulillah, berterima kasih, dan rendah hati adalah wujud pengamalan Al-Hamid.'
  },
  {
    id: 4,
    question: 'Pernyataan manakah yang menggambarkan cerminan Asmaul Husna Al-\'Adl (Maha Adil)? (Pilih lebih dari satu)',
    options: [
      'Ketua kelas membagi regu piket secara merata',
      'Orang tua membagi kue kepada semua anak sesuai porsinya',
      'Guru hanya memberi nilai bagus kepada murid yang kaya',
      'Wasit pertandingan menghukum pemain yang melanggar aturan tanpa pandang bulu'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Membagi tugas merata, membagi porsi adil, dan wasit tegas tanpa pandang bulu adalah cerminan Al-\'Adl.'
  },
  {
    id: 5,
    question: 'Sikap manakah yang tergolong meneladani sifat As-Sabur (Maha Sabar) dalam aktivitas belajar? (Pilih lebih dari satu)',
    options: [
      'Tetap tenang dan mengulang hafalan surah walau belum lancar',
      'Langsung putus asa dan menangis saat nilai ulangan jelek',
      'Sabar mengantre giliran membaca Al-Qur\'an di depan guru',
      'Mengendalikan emosi saat kawan tidak sengaja menyenggol meja'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Tekun mengulang hafalan, sabar mengantre, dan menahan emosi adalah bentuk kesabaran.'
  },
  {
    id: 6,
    question: 'Di antara pilihan berikut, manakah nikmat Allah Swt. yang tergolong Nikmat Jasmani/Fisik? (Pilih lebih dari satu)',
    options: [
      'Kesehatan anggota tubuh (mata, telinga, tangan)',
      'Kedamaian hati saat berzikir',
      'Udara bersih untuk bernapas',
      'Kesempatan memiliki akal pikiran yang sehat'
    ],
    correctAnswers: [0, 2],
    explanation: 'Kesehatan fisik dan udara bersih untuk bernapas adalah nikmat jasmani/fisik.'
  },
  {
    id: 7,
    question: 'Perilaku manakah yang BUKAN merupakan wujud meneladani Asmaul Husna? (Pilih lebih dari satu)',
    options: [
      'Memilih-milih teman bermain berdasarkan kekayaan orang tuanya',
      'Marah-marah ketika dinasihati oleh orang tua dan guru',
      'Membantu tetangga yang sedang tertimpa musibah',
      'Menyimpan makanan sendiri tanpa mau berbagi'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Pilih-pilih teman, marah dinasihati, dan pelit tidak mau berbagi adalah perilaku tercela.'
  },
  {
    id: 8,
    question: 'Manakah hikmah utama dari mempelajari empat Asmaul Husna (Al-Waliy, Al-Hamid, Al-\'Adl, As-Sabur)? (Pilih lebih dari satu)',
    options: [
      'Menjadi pribadi yang suka menolong dan peduli sesama',
      'Menjadi orang yang selalu bersyukur dan tidak sombong',
      'Mendapatkan kebebasan untuk berbuat sesuka hati',
      'Memiliki ketahanan mental dan tidak mudah putus asa'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Hikmah mempelajari Asmaul Husna adalah menjadi penolong, bersyukur, adil, dan tangguh pantang menyerah.'
  },
  {
    id: 9,
    question: 'Pernyataan manakah yang tepat terkait QS. Al-Baqarah: 257 ("Allah adalah Pelindung orang-orang yang beriman")? (Pilih lebih dari satu)',
    options: [
      'Allah menuntun orang beriman dari kegelapan menuju cahaya',
      'Orang beriman merasa aman karena senantiasa dilindungi Allah',
      'Perlindungan Allah hanya berlaku bagi orang yang kaya raya',
      'Meneladani ayat ini dengan cara menjadi pelindung bagi sesama'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'QS. Al-Baqarah: 257 menegaskan perlindungan Allah bagi orang beriman tanpa memandang harta.'
  },
  {
    id: 10,
    question: 'Dalam penerapannya di rumah, tindakan manakah yang mencerminkan pengamalan Asmaul Husna? (Pilih lebih dari satu)',
    options: [
      'Membantu orang tua merapikan tempat tidur tanpa diminta (Al-Waliy)',
      'Mengucapkan Alhamdulillah atas hidangan makanan (Al-Hamid)',
      'Membuat kegaduhan saat adik sedang belajar',
      'Sabar dan mendengarkan dengan baik saat dinasihati orang tua (As-Sabur)'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Membantu orang tua, bersyukur atas makanan, dan sabar dinasihati adalah pengamalan Asmaul Husna di rumah.'
  }
];

export const EVALUASI_MENJODOHKAN_KELAS6_P2: EvaluasiMenjodohkan[] = [
  {
    id: 1,
    premise: 'Al-Waliy (الولي)',
    matchTarget: 'Maha Pelindung, Maha Penolong, dan Maha Pemelihara'
  },
  {
    id: 2,
    premise: 'Al-Hamid (الحميد)',
    matchTarget: 'Maha Terpuji, Pemilik segala pujian di alam semesta'
  },
  {
    id: 3,
    premise: 'Al-\'Adl (العدل)',
    matchTarget: 'Maha Adil, memberikan keputusan hukum tanpa zalim'
  },
  {
    id: 4,
    premise: 'As-Sabur (الصبور)',
    matchTarget: 'Maha Sabar, tidak tergesa-gesa memberikan hukuman'
  },
  {
    id: 5,
    premise: 'QS. Al-A\'raf: 180',
    matchTarget: 'Perintah berdoa dengan menyebut nama-nama Asmaul Husna'
  }
];

export const EVALUASI_BENAR_SALAH_KELAS6_P2: EvaluasiBenarSalah[] = [
  {
    id: 1,
    statement: 'Asmaul Husna berjumlah 99 dan merupakan nama-nama Allah Swt. yang indah serta sempurna.',
    isCorrect: true,
    explanation: 'Pernyataan BENAR. Jumlah Asmaul Husna Allah Swt. adalah 99 nama yang menunjukkan kesempurnaan sifat-Nya.'
  },
  {
    id: 2,
    statement: 'Al-Waliy artinya Allah Maha Terpuji sehingga kita harus mengucapkan Alhamdulillah setiap hari.',
    isCorrect: false,
    explanation: 'Pernyataan SALAH. Al-Waliy artinya Maha Pelindung/Penolong. Sifat Maha Terpuji adalah Al-Hamid.'
  },
  {
    id: 3,
    statement: 'Allah Swt. adalah Pelindung bagi orang-orang yang beriman sesuai penegasan QS. Al-Baqarah: 257.',
    isCorrect: true,
    explanation: 'Pernyataan BENAR. Dalam QS. Al-Baqarah: 257 disebutkan "Allahu waliyyul-ladzina aamanu".'
  },
  {
    id: 4,
    statement: 'Seseorang yang meneladani Al-Hamid akan memamerkan piala kejuaraannya di depan teman-teman.',
    isCorrect: false,
    explanation: 'Pernyataan SALAH. Meneladani Al-Hamid justru melatih sikap rendah hati dan tidak sombong.'
  },
  {
    id: 5,
    statement: 'Menjadi ketua kelompok yang membagi tugas secara merata adalah bentuk pengamalan Asmaul Husna Al-\'Adl.',
    isCorrect: true,
    explanation: 'Pernyataan BENAR. Membagi tugas secara merata tanpa pilih kasih mencerminkan sikap adil (Al-\'Adl).'
  },
  {
    id: 6,
    statement: 'Sifat As-Sabur menunjukkan bahwa Allah Swt. tergesa-gesa menghukum hamba-Nya yang berbuat kesalahan.',
    isCorrect: false,
    explanation: 'Pernyataan SALAH. As-Sabur berarti Allah Maha Sabar dan tidak tergesa-gesa memberi hukuman agar hamba sempat bertobat.'
  },
  {
    id: 7,
    statement: 'Sabar ketika mengantre makanan di kantin sekolah merupakan contoh nyata meneladani sifat As-Sabur.',
    isCorrect: true,
    explanation: 'Pernyataan BENAR. Sabar mengantre dan menahan emosi adalah wujud nyata meneladani As-Sabur.'
  },
  {
    id: 8,
    statement: 'Membantu teman yang mengalami kesulitan belajar termasuk wujud meneladani Asmaul Husna Al-Waliy.',
    isCorrect: true,
    explanation: 'Pernyataan BENAR. Membantu dan menolong kesulitan sesama adalah cerminan Al-Waliy (Maha Penolong).'
  },
  {
    id: 9,
    statement: 'Menyontek saat ujian diperbolehkan asal kita mengucapkan "Alhamdulillah" setelah selesai.',
    isCorrect: false,
    explanation: 'Pernyataan SALAH. Menyontek adalah perbuatan tidak jujur/curang yang dilarang agama, bukan nikmat yang disyukuri.'
  },
  {
    id: 10,
    statement: 'Mempelajari Asmaul Husna bermanfaat untuk membentuk akhlak mulia dan memperkuat keimanan murid.',
    isCorrect: true,
    explanation: 'Pernyataan BENAR. Mengenal Asmaul Husna memperkuat iman dan membentuk akhlak karimah.'
  }
];

export const EVALUASI_URAIAN_KELAS6_P2: EvaluasiUraian[] = [
  {
    id: 1,
    question: 'Jelaskan pengertian Asmaul Husna secara bahasa dan istilah, serta sebutkan dalil Al-Qur\'an yang memerintahkan kita berdoa dengannya!',
    rubricKey: 'Jawaban harus mencakup: Secara bahasa (Asma\' = nama-nama, Al-Husna = paling indah/terbaik); Secara istilah (Nama-nama Allah Swt. yang indah dan menunjukkan kesempurnaan sifat-Nya); Dalil: QS. Al-A\'raf: 180.'
  },
  {
    id: 2,
    question: 'Ahmad melihat teman sekelasnya diganggu dan diolok-olok oleh siswa dari kelas lain. Berdasarkan pemahaman Asmaul Husna Al-Waliy, tindakan apa yang sebaiknya dilakukan Ahmad secara bijak?',
    rubricKey: 'Jawaban harus memuat: Tindakan melerai/melindungi teman yang diolok-olok, melaporkan kepada guru piket/wali kelas secara sopan, mendampingi teman agar merasa aman (mencerminkan peran pelindung/Al-Waliy) tanpa menggunakan kekerasan.'
  },
  {
    id: 3,
    question: 'Budi mendapatkan juara 1 lomba LCC PAI tingkat kecamatan. Bagaimana bentuk pengamalan Asmaul Husna Al-Hamid yang harus ditunjukkan Budi agar terhindar dari sifat sombong?',
    rubricKey: 'Jawaban harus memuat: Mengucapkan Alhamdulillah dan sujud syukur, menyadari bahwa kemenangan adalah atas izin dan bantuan Allah Swt., mengucapkan terima kasih kepada guru pembimbing dan orang tua, serta tetap ramah dan bersedia mengajari teman-teman lain.'
  },
  {
    id: 4,
    question: 'Mengapa seorang pemimpin atau ketua kelompok belajar harus meneladani Asmaul Husna Al-\'Adl? Berikan 2 contoh penerapan konkret sikap adil dalam kelompok!',
    rubricKey: 'Jawaban harus memuat: Alasan (karena kepemimpinan membutuhkan keadilan agar tidak ada anggota yang dirugikan/dizalimi); 2 Contoh: Membagi porsi tugas sesuai kemampuan anggota secara seimbang; Memberikan kesempatan berbicara dan berpendapat secara merata kepada semua anggota.'
  },
  {
    id: 5,
    question: 'Siti merasa sangat sedih dan kecewa karena gagal dalam seleksi lomba pidato sekolah. Bagaimana Siti menerapkan nilai As-Sabur dan Al-Hamid untuk bangkit kembali dari kegagalan tersebut?',
    rubricKey: 'Jawaban harus memuat: As-Sabur (Menenangkan emosi, tidak menyalahkan juri/orang lain, sabar dan tetap semangat berlatih lebih giat); Al-Hamid (Bersyukur masih diberi pengalaman berharga dan kesehatan untuk mencoba lagi di kesempatan berikutnya).'
  }
];
