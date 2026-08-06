export interface SlidePoint {
  title?: string;
  desc?: string;
}

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
  vocabulary?: { arab: string; latin: string; arti: string }[];
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
  correctAnswers: number[]; // array of indices
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

export const SLIDES_KELAS6_P1: SlideData[] = [
  {
    id: 1,
    title: 'Bab 1: Membaca, Menulis, & Membedakan Huruf Hijaiyah Bersambung serta Surat Al-Insyirah',
    subtitle: 'Tujuan Pembelajaran & Pengantar Bab 1 Kelas 6',
    category: 'Tujuan Pembelajaran',
    icon: 'Target',
    color: 'from-teal-600 to-emerald-700',
    points: [
      'Membaca huruf hijaiyah bersambung tiga kata atau lebih dengan lancar.',
      'Menulis huruf hijaiyah bersambung secara benar sesuai kaidah penulisan Arab.',
      'Membedakan bentuk huruf hijaiyah ketika berada di awal, tengah, dan akhir kata.',
      'Menjelaskan pengertian Ghunnah dalam ilmu tajwid dan membacanya dengan benar.',
      'Membaca, menghafal, mengartikan, dan memahami isi kandungan Surat Al-Insyirah.',
      'Meneladani hikmah dan nilai Surat Al-Insyirah seperti optimis, sabar, dan bertawakal dalam kehidupan.'
    ],
    explanation: 'Bab pertama mendidik murid kelas 6 untuk mahir membaca Al-Qur\'an sesuai ilmu tajwid serta menanamkan sikap pantang menyerah dalam menghadapi setiap kesulitan hidup.'
  },
  {
    id: 2,
    title: 'Pentingnya Belajar Membaca Al-Qur\'an',
    subtitle: 'Kitab Suci Umat Islam & Petunjuk Hidup Manusia',
    category: 'Al-Qur\'an Hadis',
    icon: 'BookOpen',
    color: 'from-emerald-600 to-teal-700',
    points: [
      'Al-Qur\'an adalah kitab suci yang diturunkan Allah Swt. kepada Nabi Muhammad saw. melalui Malaikat Jibril.',
      'Al-Qur\'an menjadi petunjuk hidup utama bagi seluruh umat manusia.',
      'Setiap Muslim dianjurkan mempelajari cara membaca Al-Qur\'an secara tartil sesuai kaidah ilmu tajwid.',
      'Firman Allah Swt.: "Dan bacalah Al-Qur\'an itu dengan perlahan-lahan (tartil)." (QS. Al-Muzzammil: 4)',
      'Sabda Rasulullah saw.: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur\'an dan mengajarkannya." (HR. Bukhari)'
    ],
    explanation: 'Membaca Al-Qur\'an tidak boleh terburu-buru. Setiap huruf harus diucapkan sesuai makhraj dan sifatnya agar bacaan menjadi benar, fasih, dan indah.'
  },
  {
    id: 3,
    title: 'Mengenal Huruf Hijaiyah Bersambung',
    subtitle: 'Kaidah Penulisan Arab & Sambungan Huruf',
    category: 'Kaidah Tajwid',
    icon: 'PenTool',
    color: 'from-indigo-600 to-teal-600',
    points: [
      'Huruf hijaiyah utama berjumlah 29 huruf.',
      'Penulisan huruf hijaiyah dimulai dari arah kanan ke kiri.',
      'Bentuk huruf hijaiyah dapat berubah sesuai dengan posisinya dalam kata (awal, tengah, akhir, atau berdiri sendiri).',
      'Sebagian besar huruf hijaiyah dapat disambung dengan huruf sebelum maupun sesudahnya.',
      'Beberapa huruf tertentu hanya dapat disambung dengan huruf sebelumnya dan tidak bisa menyambung ke huruf sesudahnya.'
    ],
    explanation: 'Mengenali perubahan bentuk huruf sangat penting agar murid tidak mengalami kesulitan ketika membaca kalimat Arab maupun ayat-ayat Al-Qur\'an.'
  },
  {
    id: 4,
    title: 'Bentuk Huruf Hijaiyah Bersambung',
    subtitle: 'Perubahan Bentuk Awal, Tengah, Akhir, & Sendiri',
    category: 'Bentuk Huruf',
    icon: 'Layers',
    color: 'from-teal-600 to-amber-600',
    points: [
      'Contoh Huruf \'Ain (ع): Awal (عـ), Tengah (ـعـ), Akhir (ـع), Sendiri (ع).',
      'Contoh Huruf Mim (م): Awal (مـ), Tengah (ـمـ), Akhir (ـم), Sendiri (م).',
      'Contoh Huruf Nun (ن): Awal (نـ), Tengah (ـنـ), Akhir (ـن), Sendiri (ن).',
      'Kunci utama kelancaran membaca adalah mengenali posisi titik dan bentuk kepala huruf saat berada di tengah rangkaian kata.'
    ],
    explanation: 'Dengan sering berlatih menulis dan memperhatikan posisi huruf, kemampuan membaca dan menulis teks Al-Qur\'an murid akan berkembang pesat.'
  },
  {
    id: 5,
    title: 'Latihan Membaca Kata Bersambung',
    subtitle: 'Contoh Bacaan 2 Kata, 3 Kata, & 4 Kata',
    category: 'Praktik Membaca',
    icon: 'CheckSquare',
    color: 'from-amber-600 to-teal-600',
    points: [
      'Contoh 2 Kata: Kataba Allah (كتب الله) • Dzahaba ilal masjid (ذهب إلى المسجد).',
      'Contoh 3 Kata: Alhamdulillah rabb (الحمد لله رب) • Subhanallahil \'adzim (سبحان الله العظيم).',
      'Contoh 4 Kata: Bismillahir rahmanir rahim (بسم الله الرحمن الرحيم) • Alhamdulillah rabbil \'alamin (الحمد لله رب العالمين).',
      'Pengulangan membaca secara bertahap melatih ketelitian mata dan kelancaran lisan.'
    ],
    explanation: 'Membaca secara teratur dari tingkatan dua kata hingga empat kata melatih reflek murid dalam mengenali kalimat bersambung.'
  },
  {
    id: 6,
    title: 'Pengertian Hukum Bacaan Ghunnah',
    subtitle: 'Suara Dengung Nyaring dari Rongga Hidung',
    category: 'Ilmu Tajwid',
    icon: 'Volume2',
    color: 'from-cyan-600 to-indigo-600',
    points: [
      'Secara bahasa, Ghunnah (غُنَّة) berarti dengung.',
      'Menurut ilmu tajwid, Ghunnah adalah suara dengung yang keluar dari rongga hidung (khaisyum) ketika membaca huruf Nun atau Mim dalam keadaan tertentu.',
      'Lama atau durasi bacaan Ghunnah disepakati sekitar dua harakat (2 ketukan).',
      'Membaca Ghunnah membuat irama Al-Qur\'an terdengar indah serta menjaga ketepatan pelafalan sesuai sunnah Rasulullah saw.'
    ],
    explanation: 'Ghunnah merupakan salah satu hukum tajwid paling mendasar yang wajib dikuasai saat membaca Al-Qur\'an.'
  },
  {
    id: 7,
    title: 'Huruf-Huruf Ghunnah & Cara Membacanya',
    subtitle: 'Nun Bertasydid (نّ) & Mim Bertasydid (مّ)',
    category: 'Ilmu Tajwid',
    icon: 'Sparkles',
    color: 'from-indigo-600 to-purple-600',
    points: [
      'Huruf Ghunnah terdiri dari 2 huruf utama jika diberi tanda tasydid ( ّ ): Nun Bertasydid (نّ) dan Mim Bertasydid (مّ).',
      'Cara Membaca Nun Bertasydid (نّ): Menahan bacaan pada huruf Nun disertai dengung nyaring dari hidung selama 2 harakat (Contoh: Inna / إِنَّ, Anna / أَنَّ).',
      'Cara Membaca Mim Bertasydid (مّ): Menahan rapat kedua bibir disertai dengung dari hidung selama 2 harakat (Contoh: Tsumma / ثُمَّ, Amma / أَمَّ).',
      'Langkah Membaca: Bacalah sesuai makhraj, keluarkan dengung lewat hidung, tahan 2 harakat, jangan terlalu pendek atau panjang.'
    ],
    explanation: 'Pastikan dengung keluar murni dari rongga hidung, bukan hanya suara tenggorokan.'
  },
  {
    id: 8,
    title: 'Contoh Bacaan Ghunnah dalam Al-Qur\'an',
    subtitle: 'Penerapan Ayat-Ayat Al-Qur\'an',
    category: 'Praktik Tajwid',
    icon: 'FileText',
    color: 'from-emerald-600 to-teal-600',
    points: [
      'Contoh 1: Innaa a\'thainaakal kautsar (إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ) -> Ghunnah pada kata "إِنَّا".',
      'Contoh 2: Tsumma kalla saufa ta\'lamun (ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ) -> Ghunnah pada kata "ثُمَّ".',
      'Contoh 3: Innahuu kaana tawwaabaa (إِنَّهُ كَانَ تَوَّابًا) -> Ghunnah pada kata "إِنَّهُ".',
      'Contoh 4: Amma yatasaa-alun (عَمَّ يَتَسَاءَلُونَ) -> Ghunnah pada kata "عَمَّ".'
    ],
    explanation: 'Murid dilatih menemukan tanda tasydid pada huruf Nun dan Mim di dalam Al-Qur\'an.'
  },
  {
    id: 9,
    title: 'Kesalahan Membaca Ghunnah & Hikmahnya',
    subtitle: 'Evaluasi Pelafalan & Manfaat Belajar Tajwid',
    category: 'Hikmah & Tajwid',
    icon: 'AlertTriangle',
    color: 'from-teal-600 to-cyan-600',
    points: [
      'Kesalahan yang Sering Terjadi: Tidak mendengungkan suara, dengungan terlalu panjang (>2 harakat), dengungan terlalu pendek (<2 harakat), atau membaca terlalu cepat.',
      'Hikmah Mempelajari Ghunnah: Membaca Al-Qur\'an sesuai tuntunan Nabi Muhammad saw., menjaga kemurnian Al-Qur\'an, dan menambah keindahan bacaan.',
      'Manfaat Karakter: Melatih kesabaran, ketelitian, serta meningkatkan kecintaan dan pahala di sisi Allah Swt.',
      'Penerapan Sehari-hari: Membiasakan membaca Al-Qur\'an setiap hari, memperhatikan hukum tajwid, dan aktif ikut tadarus.'
    ],
    explanation: 'Kesalahan dapat diperbaiki dengan latihan konsisten dan bimbingan guru mengaji.'
  },
  {
    id: 10,
    title: 'Mengenal Surat Al-Insyirah',
    subtitle: 'Surat Ke-94 • 8 Ayat • Golongan Makkiyah',
    category: 'Surat Al-Insyirah',
    icon: 'Book',
    color: 'from-teal-700 to-emerald-800',
    points: [
      'Surat Al-Insyirah merupakan surat ke-94 dalam Al-Qur\'an dan terdiri atas 8 ayat.',
      'Termasuk golongan surat Makkiyah karena diturunkan di Kota Makkah sebelum Nabi Muhammad saw. hijrah ke Madinah.',
      'Kata "Al-Insyirah" (الإنشراح) berarti Kelapangan atau Melapangkan Dada.',
      'Surat ini diturunkan sebagai hiburan dan peneguh jiwa bagi Rasulullah saw. saat menghadapi beratnya kesulitan dakwah.',
      'Pesan Utama: Allah Swt. menegaskan bahwa di balik setiap kesulitan pasti disertai dengan kemudahan.'
    ],
    explanation: 'Surat Al-Insyirah mengajarkan seorang Muslim untuk tidak pernah berputus asa dan selalu optimis menatap masa depan.'
  },
  {
    id: 11,
    title: 'Teks & Arti Surat Al-Insyirah (Ayat 1 - 4)',
    subtitle: 'Ketenangan, Beban Berat, & Kemuliaan Nama Rasulullah',
    category: 'Tafsir Ayat',
    icon: 'Bookmark',
    color: 'from-emerald-700 to-teal-600',
    points: [
      'Ayat 1: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ" (Alam nasyrah laka shadrak) -> Bukankah Kami telah melapangkan dadamu (Muhammad)?',
      'Ayat 2: "وَوَضَعْنَا عَنْكَ وِزْرَكَ" (Wa wadha\'naa \'anka wizrak) -> Dan Kami telah menghilangkan bebanmu,',
      'Ayat 3: "الَّذِي أَنْقَضَ ظَهْرَكَ" (Alladzii anqadha zhahrak) -> Yang memberatkan punggungmu,',
      'Ayat 4: "وَرَفَعْنَا لَكَ ذِكْرَكَ" (Wa rafa\'naa laka dzikrak) -> Dan Kami tinggikan bagimu sebutan (nama)mu.'
    ],
    explanation: 'Allah melapangkan dada Rasulullah saw. dengan ketenangan, meringankan beban dakwahnya, dan memuliakan nama beliau bersandingan dengan nama Allah dalam azan dan syahadat.'
  },
  {
    id: 12,
    title: 'Teks & Arti Surat Al-Insyirah (Ayat 5 - 8)',
    subtitle: 'Janji Kemudahan, Bekerja Keras, & Bertawakal',
    category: 'Tafsir Ayat',
    icon: 'Sun',
    color: 'from-teal-600 to-amber-700',
    points: [
      'Ayat 5: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا" (Fa inna ma\'al \'usri yusraa) -> Maka sesungguhnya bersama kesulitan ada kemudahan,',
      'Ayat 6: "إِنَّ مَعَ الْعُسْرِ يُسْرًا" (Inna ma\'al \'usri yusraa) -> Sesungguhnya bersama kesulitan ada kemudahan.',
      'Ayat 7: "فَإِذَا فَرَغْتَ فَانْصَبْ" (Fa idzaa faraghta fanshab) -> Maka apabila engkau telah selesai dari suatu urusan, tetaplah bekerja keras untuk urusan yang lain,',
      'Ayat 8: "وَإِلَىٰ رَبِّكَ فَارْغَبْ" (Wa ilaa rabbika farghab) -> Dan hanya kepada Tuhanmulah engkau berharap.'
    ],
    explanation: 'Pengulangan ayat 5 dan 6 memberikan keyakinan mutlak bahwa kesulitan tidak bersifat abadi. Setelah selesai suatu tugas, kita dilarang bermalas-malasan dan harus langsung bersiap melakukan kebaikan lainnya.'
  },
  {
    id: 13,
    title: 'Kosakata Penting Surat Al-Insyirah',
    subtitle: 'Memahami Mufrodat Bahasa Arab',
    category: 'Kosakata',
    icon: 'Globe',
    color: 'from-amber-600 to-teal-700',
    points: [
      'Shadra (صَدْر) = Dada',
      'Wizra (وِزْر) = Beban',
      'Zhahr (ظَهْر) = Punggung',
      'Dzikr (ذِكْر) = Nama / Sebutan / Mengingat',
      '\'Usr (عُسْر) = Kesulitan',
      'Yusr (يُسْر) = Kemudahan',
      'Faraghta (فَرَغْتَ) = Selesai',
      'Rabb (رَبّ) = Tuhan'
    ],
    explanation: 'Menghafal kosakata kunci ini mempermudah murid memahami makna ayat secara langsung saat membaca Al-Qur\'an.'
  },
  {
    id: 14,
    title: 'Kandungan Utama Surat Al-Insyirah',
    subtitle: '5 Pilar Karakter Penguat Jiwa',
    category: 'Kandungan Surat',
    icon: 'ShieldCheck',
    color: 'from-teal-700 to-indigo-700',
    points: [
      'Allah Swt. Maha Penolong: Allah tidak pernah meninggalkan hamba-Nya yang beriman dan bersungguh-sungguh.',
      'Setiap Kesulitan Ada Kemudahan: Kesulitan belajar atau ujian hidup akan sirna jika dihadapi dengan ketekunan dan doa.',
      'Pribadi yang Optimis (Husnuzan): Berpikir positif kepada Allah, tidak mudah putus asa, dan yakin ada jalan keluar.',
      'Disiplin & Rajin Bekerja: Memanfaatkan waktu dengan baik, setelah selesai salat segera belajar, selesai belajar membantu orang tua.',
      'Bertawakal kepada Allah Swt.: Berusaha semaksimal mungkin (ikhtiar) lalu menyerahkan hasil akhirnya kepada Allah Swt.'
    ],
    explanation: 'Tawakal bukan berarti menyerah tanpa usaha, melainkan bersandar kepada Allah setelah ikhtiar sungguh-sungguh.'
  },
  {
    id: 15,
    title: 'Hikmah Surat Al-Insyirah',
    subtitle: '10 Hikmah Mulia Meneladani Surat Al-Insyirah',
    category: 'Hikmah Surat',
    icon: 'Sparkles',
    color: 'from-emerald-600 to-teal-700',
    points: [
      '1. Selalu yakin kepada pertolongan Allah Swt.',
      '2. Tidak mudah putus asa dalam menghadapi kesulitan.',
      '3. Menjadi pribadi yang sabar dan teguh menghadapi ujian.',
      '4. Rajin bekerja keras dan bersungguh-sungguh.',
      '5. Menghargai waktu dan menggunakannya untuk hal bermanfaat.',
      '6. Memiliki semangat belajar yang tinggi tanpa rasa lelah.',
      '7. Membiasakan berdoa hanya kepada Allah Swt.',
      '8. Bertawakal dan menyerahkan hasil akhir kepada Allah Swt.',
      '9. Percaya diri dalam menghadapi tantangan dan ujian hidup.',
      '10. Menjadi pribadi yang senantiasa optimis menatap masa depan.'
    ],
    explanation: '10 hikmah mulia ini menjadi pedoman pembentukan karakter mulia murid dalam kehidupan sehari-hari.'
  },
  {
    id: 16,
    title: 'Penerapan Sehari-hari & Kisah Inspiratif',
    subtitle: 'Meneladani Nilai Surat Al-Insyirah',
    category: 'Penerapan',
    icon: 'HeartHandshake',
    color: 'from-indigo-700 to-teal-600',
    points: [
      'Penerapan di Rumah: Membantu orang tua tanpa disuruh, tidak mengeluh saat ada tugas, dan rajin mengaji.',
      'Penerapan di Sekolah: Belajar sungguh-sungguh, tidak mudah menyerah saat soal sulit, dan membantu teman.',
      'Penerapan di Masyarakat: Aktif kegiatan keagamaan, gotong royong, dan menyebarkan semangat kebaikan.',
      'Kisah Inspiratif Ahmad: Ahmad murid yang awalnya kesulitan membaca Al-Qur\'an. Namun berkat ketekunan belajar di TPQ setiap sore tanpa menyerah, akhirnya ia lancar membaca dan terpilih menjadi Qari sekolah.',
      'Pesan Moral Ahmad: Bukti nyata pesan Surat Al-Insyirah bahwa tekun berlatih akan mengubah kesulitan menjadi kemudahan.'
    ],
    explanation: 'Keberhasilan memerlukan proses ketekunan, keikhlasan, dan doa yang konsisten.'
  },
  {
    id: 17,
    title: 'Rangkuman & Refleksi Bab 1',
    subtitle: 'Kesimpulan & Perenungan Diri',
    category: 'Rangkuman',
    icon: 'CheckCircle2',
    color: 'from-teal-600 to-emerald-700',
    points: [
      'Al-Qur\'an adalah petunjuk hidup yang harus dibaca secara tartil dan dipelajari dengan bersungguh-sungguh.',
      'Huruf hijaiyah berubah bentuk di awal, tengah, dan akhir kata; latihan bersambung melatih kejelian membaca.',
      'Ghunnah adalah dengung 2 harakat pada Nun Bertasydid (نّ) dan Mim Bertasydid (مّ) keluar dari rongga hidung.',
      'Surat Al-Insyirah mengajarkan optimisme: di balik setiap kesulitan pasti Allah sediakan kemudahan.',
      'Seorang Muslim wajib rajin bekerja, memanfaatkan waktu dengan baik, dan senantiasa bertawakal kepada Allah Swt.'
    ],
    explanation: 'Semoga pemahaman Bab 1 ini menjadikan kita pribadi yang cinta Al-Qur\'an, pandai bersyukur, tangguh, dan bertawakal.'
  }
];

export const PROYEK_TASKS_KELAS6_P1: ProyekTask[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    title: 'Proyek Poster Kaligrafi & Pemetaan Hukum Ghunnah Surat Al-Insyirah',
    subtitle: 'Project Based Learning • Keterampilan Menulis & Tajwid',
    duration: '1 Minggu (Tugas Kelompok 3-4 Murid)',
    goal: 'Murid mampu mendesain poster kaligrafi indah Surat Al-Insyirah sekaligus menandai dan menganalisis hukum bacaan Ghunnah secara tepat.',
    steps: [
      '1. Pembentukan kelompok yang terdiri dari 3-4 murid.',
      '2. Menuliskan teks Arab Surat Al-Insyirah ayat 1-8 dengan rapi di atas kertas karton A3 / media digital.',
      '3. Mewarnai atau memberikan lingkaran khusus pada setiap hukum bacaan Ghunnah (نّ dan مّ) yang ditemukan.',
      '4. Menambahkan bagian bawah poster berupa tabel penjelasan: Nama Ayat, Kata Ber-Ghunnah, Cara Membaca, dan Arti Ayat.',
      '5. Mempresentasikan hasil poster kaligrafi dan analisis tajwid di depan kelas.'
    ],
    output: 'Poster Kaligrafi dan Pemetaan Tajwid Ghunnah Surat Al-Insyirah (A3 / Cetak Digital).',
    rubrik: [
      'Kerapian dan Keindahan Penulisan Kaligrafi Arab (Skor Maks 30)',
      'Ketepatan Identifikasi Hukum Bacaan Ghunnah (Skor Maks 30)',
      'Kelengkapan Terjemahan & Kosakata (Skor Maks 20)',
      'Kerjasama Kelompok & Presentasi (Skor Maks 20)'
    ]
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    title: 'Proyek Rekaman Digital Tartil & Evaluasi Dengung 2 Harakat',
    subtitle: 'Project Based Learning • Praktik Hafalan & Pelafalan Audio/Video',
    duration: '3 - 5 Hari (Mandiri / Pasangan)',
    goal: 'Murid mampu merekam bacaan tartil Surat Al-Insyirah beserta praktik pelafalan Ghunnah 2 harakat yang benar.',
    steps: [
      '1. Berlatih membaca Surat Al-Insyirah secara berulang dengan memperhatikan makhraj dan dengung Ghunnah 2 harakat.',
      '2. Merekam suara/video menggunakan HP dengan posisi Mikrofon dekat agar dengung hidung terdengar jelas.',
      '3. Meminta kawan pasangan (peer tutor) mendengarkan dan mengevaluasi lama dengungan.',
      '4. Mengunggah file audio/video ke folder drive bersama atau menyerahkan langsung kepada Guru PAI.',
      '5. Mendengarkan masukan dan perbaikan bacaan dari Guru.'
    ],
    output: 'File Video/Audio Rekaman Tartil Surat Al-Insyirah berdurasi 1-2 menit.',
    rubrik: [
      'Fasahat/Kelancaran Bacaan & Makhraj (Skor Maks 35)',
      'Ketepatan Panjang Dengung Ghunnah 2 Harakat (Skor Maks 35)',
      'Penerapan Murattal Tartil & Kebersihan Suara (Skor Maks 30)'
    ]
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    title: 'Studi Kasus: Mengatasi Kesulitan Belajar dengan Optimisme Surat Al-Insyirah',
    subtitle: 'Problem Based Learning • Analisis Perilaku & Nilai Karakter',
    duration: '1 Pertemuan Pembelajaran',
    goal: 'Murid mampu memecahkan masalah teman yang merasa putus asa dalam belajar berdasarkan kandungan Surat Al-Insyirah ayat 5-8.',
    steps: [
      '1. Membaca narasi masalah: "Budi merasa patah semangat karena nilai matematika dan mengajinya belum lancar. Ia ingin berhenti mencoba."',
      '2. Diskusi kelompok: Mengidentifikasi mengapa Budi merasa putus asa dan apa dampaknya.',
      '3. Mengaitkan dengan isi Surat Al-Insyirah: Bagaimana pesan "Maka sesungguhnya bersama kesulitan ada kemudahan" dapat memotivasi Budi?',
      '4. Menyusun 4 langkah solusi konkret (Action Plan) untuk Budi agar menjadi pribadi optimis dan pantang menyerah.',
      '5. Menyampaikan lembar solusi kepada kelas dalam bentuk bermain peran (Role Play) singkat.'
    ],
    output: 'Lembar Analisis Solusi & Naskah Ringkas Role Play Karakter Optimis.',
    rubrik: [
      'Kedalaman Analisis Masalah & Kesesuaian Ayat Al-Insyirah (Skor Maks 40)',
      'Kepraktisan & Realistisnya Langkah Solusi (Skor Maks 30)',
      'Penyampaian Role Play / Presentasi Solusi (Skor Maks 30)'
    ]
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    title: 'Analisis Kesalahan Membaca Ghunnah & Huruf Hijaiyah Bersambung',
    subtitle: 'Problem Based Learning • Computational Thinking & Pemecahan Masalah Tajwid',
    duration: '1 Pertemuan Pembelajaran',
    goal: 'Murid mampu menemukan, mengkategorikan, dan memperbaiki kesalahan umum pelafalan Ghunnah serta penulisan huruf bersambung.',
    steps: [
      '1. Guru menyajikan 5 sampel rekaman audio dan teks tulisan Arab yang mengandung kesalahan (misal: dengung terlalu cepat, huruf tidak menyambung dengan benar).',
      '2. Murid menggunakan pola Computational Thinking (Decomposisi & Pattern Recognition) untuk memilah jenis kesalahan.',
      '3. Menuliskan pada tabel audit: Jenis Kesalahan, Penyebab Kesalahan, dan Cara Pelafalan/Penulisan yang Benar.',
      '4. Merumuskan tips praktis agar teman-teman tidak mengulangi kesalahan tajwid tersebut.'
    ],
    output: 'Laporan Audit Tajwid & Lembar Koreksi Penulisan Arab.',
    rubrik: [
      'Ketepatan Menemukan Kesalahan Tajwid (Skor Maks 40)',
      'Kebenaran Koreksi Pelafalan & Penulisan (Skor Maks 40)',
      'Sistematika Laporan Audit (Skor Maks 20)'
    ]
  }
];

export const EVALUASI_PG_KELAS6_P1: EvaluasiPG[] = [
  {
    id: 1,
    question: 'Berdasarkan QS. Al-Muzzammil ayat 4, bagaimana permohonan Allah Swt. dalam membaca Al-Qur\'an?',
    options: [
      'Membaca dengan secepat mungkin agar cepat selesai',
      'Membaca secara tartil dan perlahan-lahan sesuai tajwid',
      'Membaca hanya dalam hati tanpa bersuara',
      'Membaca dengan irama keras tanpa memperhatikan makhraj'
    ],
    answer: 1,
    explanation: 'QS. Al-Muzzammil: 4 memerintahkan "Dan bacalah Al-Qur\'an itu dengan perlahan-lahan (tartil)".'
  },
  {
    id: 2,
    question: 'Berapakah jumlah huruf hijaiyah utama dalam kaidah penulisan Al-Qur\'an?',
    options: ['25 huruf', '28 huruf', '29 huruf', '30 huruf'],
    answer: 2,
    explanation: 'Huruf hijaiyah utama berjumlah 29 huruf dari Alif sampai Ya.'
  },
  {
    id: 3,
    question: 'Perhatikan kata "الحمد لله رب". Berapakah jumlah kata bersambung dalam susunan kalimat tersebut?',
    options: ['1 kata', '2 kata', '3 kata', '4 kata'],
    answer: 2,
    explanation: 'Susunan "الحمد (1) لله (2) رب (3)" terdiri dari 3 kata bersambung.'
  },
  {
    id: 4,
    question: 'Menurut ilmu tajwid, apakah yang dimaksud dengan hukum bacaan Ghunnah (غُنَّة)?',
    options: [
      'Suara memantul yang keluar dari tenggorokan',
      'Suara dengung yang keluar dari rongga hidung (khaisyum)',
      'Suara samar yang dibaca panjang 6 harakat',
      'Suara jelas tanpa dengung sedikit pun'
    ],
    answer: 1,
    explanation: 'Ghunnah secara tajwid adalah suara dengung murni yang keluar dari rongga hidung (al-khaisyum).'
  },
  {
    id: 5,
    question: 'Manakah di bawah ini dua huruf hijaiyah yang dibaca Ghunnah jika diberi tanda tasydid ( ّ )?',
    options: [
      'Alif (أ) dan Lam (ل)',
      'Nun (ن) dan Mim (م)',
      'Ba (ب) dan Ta (ت)',
      'Qaf (ق) dan Kaf (ك)'
    ],
    answer: 1,
    explanation: 'Hukum Ghunnah terjadi apabila huruf Nun bertasydid (نّ) atau Mim bertasydid (مّ).'
  },
  {
    id: 6,
    question: 'Berapakah durasi atau panjang bacaan yang tepat ketika membunyikan bacaan Ghunnah?',
    options: ['1 harakat', '2 harakat (2 ketukan)', '4 harakat', '6 harakat'],
    answer: 1,
    explanation: 'Durasi bacaan Ghunnah ditahan selama 2 harakat (2 ketukan).'
  },
  {
    id: 7,
    question: 'Surat Al-Insyirah merupakan surat ke-94 dalam Al-Qur\'an. Apakah arti dari kata "Al-Insyirah"?',
    options: ['Pertolongan Allah', 'Kelapangan / Melapangkan Dada', 'Waktu Subuh', 'Masa Depan'],
    answer: 1,
    explanation: 'Al-Insyirah berarti kelapangan atau melapangkan dada.'
  },
  {
    id: 8,
    question: 'Di manakah Surat Al-Insyirah diturunkan sehingga tergolong ke dalam surat Makkiyah?',
    options: ['Kota Madinah', 'Kota Makkah', 'Kota Thaif', 'Kota Yerusalem'],
    answer: 1,
    explanation: 'Surat Makkiyah diturunkan di Kota Makkah sebelum Nabi Muhammad saw. hijrah ke Madinah.'
  },
  {
    id: 9,
    question: 'Pesan utama dari ayat "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا" (QS. Al-Insyirah: 5) mengajarkan kita untuk...',
    options: [
      'Mudah menyerah jika menghadapi kesulitan',
      'Yakin bahwa di balik setiap kesulitan pasti ada kemudahan',
      'Menunda-nunda pekerjaan sekolah',
      'Menyalahkan orang lain saat mengalami kegagalan'
    ],
    answer: 1,
    explanation: 'Ayat ini menegaskan bahwa setiap kesulitan tidak abadi dan pasti disertai dengan kemudahan dari Allah Swt.'
  },
  {
    id: 10,
    question: 'Berdasarkan QS. Al-Insyirah ayat 7 ("فَإِذَا فَرَغْتَ فَانْصَبْ"), apa yang harus dilakukan seorang Muslim setelah menyelesaikan suatu pekerjaan?',
    options: [
      'Langsung bersantai dan tidur sepanjang hari',
      'Tetap bekerja keras untuk urusan/kebaikan yang lain',
      'Menunggu perintah orang lain tanpa inisiatif',
      'Bermain game tanpa mengingat waktu salat'
    ],
    answer: 1,
    explanation: 'Ayat 7 mengajarkan kedisiplinan dan etos kerja: setelah selesai satu urusan, segeralah bersiap mengerjakan urusan produktif lainnya.'
  }
];

export const EVALUASI_PGK_KELAS6_P1: EvaluasiPGK[] = [
  {
    id: 1,
    question: 'Manakah dari pernyataan berikut yang BENAR mengenai ciri-ciri penulisan dan bentuk huruf hijaiyah? (Pilih lebih dari satu)',
    options: [
      'A. Ditulis dari arah kanan ke kiri',
      'B. Semua huruf hijaiyah tanpa terkecuali bisa menyambung ke huruf sesudahnya',
      'C. Bentuk huruf dapat berubah di awal, tengah, dan akhir kata',
      'D. Huruf hijaiyah utama berjumlah 29 huruf'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Pernyataan A, C, dan D benar. Pernyataan B salah karena ada beberapa huruf (seperti Alif, Dal, Dzal, Ra, Zai, Wau) yang tidak bisa menyambung ke huruf sesudahnya.'
  },
  {
    id: 2,
    question: 'Manakah lafaz di bawah ini yang mengandung hukum bacaan Ghunnah? (Pilih lebih dari satu)',
    options: [
      'A. إِنَّا أَعْطَيْنَاكَ (Innaa a\'thainaaka)',
      'B. ثُمَّ كَلَّا (Tsumma kalla)',
      'C. الحمد لله (Alhamdulillah)',
      'D. عَمَّ يَتَسَاءَلُونَ (Amma yatasaa-alun)'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'A (نّ), B (مّ), dan D (مّ) mengandung tasydid pada Nun dan Mim sehingga wajib dibaca Ghunnah.'
  },
  {
    id: 3,
    question: 'Manakah langkah-langkah yang BENAR dalam membunyikan hukum bacaan Ghunnah? (Pilih lebih dari satu)',
    options: [
      'A. Membaca huruf sesuai makhrajnya',
      'B. Mengeluarkan suara dengung melalui rongga hidung',
      'C. Menahan dengung selama 2 harakat',
      'D. Membaca dengan cepat tanpa menahan ketukan sama sekali'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Langkah A, B, dan C adalah kaidah Ghunnah yang tepat. Membaca cepat tanpa menahan ketukan adalah kesalahan.'
  },
  {
    id: 4,
    question: 'Pernyataan manakah yang BENAR terkait identitas Surat Al-Insyirah? (Pilih lebih dari satu)',
    options: [
      'A. Merupakan surat ke-94 dalam Al-Qur\'an',
      'B. Terdiri atas 8 ayat',
      'C. Diturunkan di Kota Madinah (Madaniyah)',
      'D. Nama Al-Insyirah berarti Kelapangan Dada'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Surat Al-Insyirah adalah surat ke-94, 8 ayat, arti kelapangan dada, dan tergolong Makkiyah (bukan Madaniyah).'
  },
  {
    id: 5,
    question: 'Apa saja karunia Allah Swt. kepada Nabi Muhammad saw. yang disebutkan dalam Surat Al-Insyirah ayat 1-4? (Pilih lebih dari satu)',
    options: [
      'A. Melapangkan dada beliau dengan ketenangan dan hikmah',
      'B. Meringankan beban berat perjuangan dakwah beliau',
      'C. Meninggikan sebutan nama beliau bersama nama Allah',
      'D. Memberikan harta kekayaan melimpah ruah'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Ayat 1-4 menjelaskan kelapangan dada, diangkatnya beban berat, dan ditinggikannya nama Nabi Muhammad saw.'
  },
  {
    id: 6,
    question: 'Manakah pasangan kosakata Surat Al-Insyirah dan artinya yang TEPAT di bawah ini? (Pilih lebih dari satu)',
    options: [
      'A. صَدْرَكَ (Shadrak) = Dadamut',
      'B. وِزْرَكَ (Wizrak) = Bebanmu',
      'C. عُسْرِ (\'Usr) = Kemudahan',
      'D. يُسْرًا (Yusraa) = Kemudahan'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'A, B, dan D benar. C salah karena \'Usr artinya kesulitan, sedangkan Yusr artinya kemudahan.'
  },
  {
    id: 7,
    question: 'Sikap manakah yang mencerminkan pemahaman terhadap firman Allah "إِنَّ مَعَ الْعُسْرِ يُسْرًا"? (Pilih lebih dari satu)',
    options: [
      'A. Selalu berpikir positif (husnuzan) saat menghadapi ujian sulit',
      'B. Patah semangat saat nilai ujian belum memuaskan',
      'C. Yakin bahwa belajar giat akan membuahkan hasil manis',
      'D. Berdoa dan bersabar dalam menghadapi cobaan'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Sikap A, C, dan D mencerminkan keyakinan akan janji Allah di balik kesulitan.'
  },
  {
    id: 8,
    question: 'Berdasarkan ayat 7-8 Surat Al-Insyirah, karakter unggul apa saja yang harus dimiliki murid? (Pilih lebih dari satu)',
    options: [
      'A. Disiplin menggunakan waktu dan rajin bekerja',
      'B. Bermalas-malasan setelah mengerjakan satu tugas',
      'C. Bersikap tawakal menyerahkan hasil kepada Allah',
      'D. Selalu berharap dan menggantungkan cita-cita kepada Allah Swt.'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Ayat 7-8 mengajarkan etos kerja, bersiap untuk urusan lain, dan bertawakal hanya kepada Allah.'
  },
  {
    id: 9,
    question: 'Manakah contoh perilaku penerapan Surat Al-Insyirah di lingkungan sekolah? (Pilih lebih dari satu)',
    options: [
      'A. Mengeluh panjang lebar saat guru memberikan latihan soal',
      'B. Tetap berusaha menjawab soal rumit dengan teliti',
      'C. Membimbing teman yang mengalami kesulitan membaca Al-Qur\'an',
      'D. Pantang menyerah belajar meskipun materi terasa baru'
    ],
    correctAnswers: [1, 2, 3],
    explanation: 'B, C, dan D adalah bentuk penerapan positif di sekolah.'
  },
  {
    id: 10,
    question: 'Manakah di bawah ini yang merupakan hikmah mempelajari ilmu tajwid dan membaca Al-Qur\'an secara tartil? (Pilih lebih dari satu)',
    options: [
      'A. Menjaga kemurnian ayat-ayat Al-Qur\'an',
      'B. Memperoleh pahala melimpah dari Allah Swt.',
      'C. Menumbuhkan rasa percaya diri dan ketelitian',
      'D. Agar bisa dipuji oleh teman-teman di sekolah'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Pilihan A, B, dan C adalah hikmah luhur, sedangkan D (riya/pamer) harus dihindari.'
  }
];

export const EVALUASI_MENJODOHKAN_KELAS6_P1: EvaluasiMenjodohkan[] = [
  {
    id: 1,
    premise: 'Ghunnah (غُنَّة)',
    matchTarget: 'Suara dengung 2 harakat dari rongga hidung pada نّ dan مّ'
  },
  {
    id: 2,
    premise: 'Al-Insyirah (الإنشراح)',
    matchTarget: 'Surat ke-94 yang berarti Kelapangan Dada'
  },
  {
    id: 3,
    premise: 'Fa inna ma\'al \'usri yusraa',
    matchTarget: 'Maka sesungguhnya bersama kesulitan ada kemudahan'
  },
  {
    id: 4,
    premise: 'Fa idzaa faraghta fanshab',
    matchTarget: 'Apabila telah selesai suatu urusan, tetaplah bekerja keras'
  },
  {
    id: 5,
    premise: 'HR. Bukhari tentang Al-Qur\'an',
    matchTarget: 'Sebaik-baik kalian adalah yang mempelajari Al-Qur\'an & mengajarkannya'
  }
];

export const EVALUASI_BENAR_SALAH_KELAS6_P1: EvaluasiBenarSalah[] = [
  {
    id: 1,
    statement: 'Membaca Al-Qur\'an secara tartil berarti membaca secara tergesa-gesa agar cepat khatam.',
    isCorrect: false,
    explanation: 'Salah. Tartil artinya membaca perlahan-lahan, jelas makhrajnya, dan sesuai kaidah tajwid.'
  },
  {
    id: 2,
    statement: 'Semua huruf hijaiyah dapat disambung baik dengan huruf sebelum maupun sesudahnya.',
    isCorrect: false,
    explanation: 'Salah. Beberapa huruf (seperti Alif, Dal, Dzal, Ra, Zai, Wau) hanya bisa disambung dengan huruf sebelumnya.'
  },
  {
    id: 3,
    statement: 'Hukum bacaan Ghunnah terjadi ketika ada huruf Nun bertasydid (نّ) atau Mim bertasydid (مّ).',
    isCorrect: true,
    explanation: 'Benar. Tasydid pada Nun dan Mim adalah syarat utama terjadinya hukum Ghunnah.'
  },
  {
    id: 4,
    statement: 'Durasi dengung Ghunnah yang benar adalah selama 2 harakat (2 ketukan).',
    isCorrect: true,
    explanation: 'Benar. Kesepakatan ulama tajwid menetapkan panjang Ghunnah adalah 2 harakat.'
  },
  {
    id: 5,
    statement: 'Rongga mulut (al-Jauf) adalah tempat keluarnya dengung Ghunnah.',
    isCorrect: false,
    explanation: 'Salah. Tempat keluarnya dengung Ghunnah adalah rongga hidung (al-Khaisyum).'
  },
  {
    id: 6,
    statement: 'Surat Al-Insyirah terdiri dari 8 ayat dan termasuk golongan surat Makkiyah.',
    isCorrect: true,
    explanation: 'Benar. Diturunkan di Makkah sebelum hijrah dan berjumlah 8 ayat.'
  },
  {
    id: 7,
    statement: 'Kata "Al-Insyirah" memiliki arti "Hari Kiamat yang Sangat Dahsyat".',
    isCorrect: false,
    explanation: 'Salah. Al-Insyirah berarti kelapangan atau melapangkan dada.'
  },
  {
    id: 8,
    statement: 'Dalam Surat Al-Insyirah, Allah Swt. menegaskan kalimat "Inna ma\'al \'usri yusraa" sebanyak dua kali sebagai penekanan janji kemudahan.',
    isCorrect: true,
    explanation: 'Benar. Kalimat tersebut diulang pada ayat 5 dan ayat 6 untuk memberikan keyakinan mantap.'
  },
  {
    id: 9,
    statement: 'Tawakal artinya berserah diri kepada Allah Swt. tanpa perlu melakukan ikhtiar atau usaha terlebih dahulu.',
    isCorrect: false,
    explanation: 'Salah. Tawakal yang benar adalah berserah diri setelah melakukan usaha (ikhtiar) secara maksimal.'
  },
  {
    id: 10,
    statement: 'Setelah selesai belajar pelajaran PAI, murid hendaknya langsung bersiap mengerjakan kebaikan/tugas lain sesuai ajaran QS. Al-Insyirah ayat 7.',
    isCorrect: true,
    explanation: 'Benar. Hal ini sesuai firman "Fa idzaa faraghta fanshab" agar senantiasa memanfaatkan waktu dengan baik.'
  }
];

export const EVALUASI_URAIAN_KELAS6_P1: EvaluasiUraian[] = [
  {
    id: 1,
    question: 'Jelaskan pengertian hukum bacaan Ghunnah menurut bahasa dan istilah ilmu tajwid, serta sebutkan 2 huruf yang menjadi syarat terjadinya Ghunnah!',
    rubricKey: 'Ghunnah secara bahasa artinya dengung. Secara tajwid adalah suara dengung murni dari rongga hidung (khaisyum) selama 2 harakat. Syarat hurufnya adalah Nun Bertasydid (نّ) dan Mim Bertasydid (مّ).'
  },
  {
    id: 2,
    question: 'Mengapa huruf hijaiyah mengalami perubahan bentuk saat ditulis bersambung? Berikan contoh bentuk awal, tengah, dan akhir untuk huruf Mim (م)!',
    rubricKey: 'Perubahan bentuk terjadi agar susunan kata Arab terlihat rapi dan efisien. Contoh Mim: Awal (مـ seperti مَسْجِد), Tengah (ـمـ seperti أَمَّ), Akhir (ـم seperti ثُمَّ).'
  },
  {
    id: 3,
    question: 'Jelaskan latar belakang dan tujuan Allah Swt. menurunkan Surat Al-Insyirah kepada Nabi Muhammad saw.!',
    rubricKey: 'Diturunkan sebagai hiburan dan peneguh jiwa saat Rasulullah saw. mengalami kesulitan dan tekanan berat dalam berdakwah di Makkah, mengingatkan bahwa Allah selalu melapangkan dada dan memberi kemudahan.'
  },
  {
    id: 4,
    question: 'Jelaskan isi kandungan QS. Al-Insyirah ayat 5 dan 6 "إِنَّ مَعَ الْعُسْرِ يُسْرًا" serta bagaimana kamu menerapkannya saat menghadapi ujian sekolah yang terasa sulit!',
    rubricKey: 'Kandungan: Janji pasti Allah bahwa bersama setiap kesulitan ada kemudahan. Penerapan: Tetap tenang, rajin berlatih soal, berdoa, dan yakin bahwa kesulitan belajar pasti bisa diatasi dengan ketekunan.'
  },
  {
    id: 5,
    question: 'Bagaimana hubungan antara konsep bekerja keras (ayat 7) dan bertawakal kepada Allah (ayat 8) dalam membentuk karakter murid yang tangguh?',
    rubricKey: 'Ayat 7 memerintahkan ikhtiar maksimal dan pantang malas, sedangkan ayat 8 mengajarkan kepasrahan dan pengharapan hanya kepada Allah Swt. Kombinasi ini membentuk murid yang bekerja keras tanpa sombong dan menerima hasil dengan ridha.'
  }
];
