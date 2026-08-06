export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  content: {
    heading?: string;
    description?: string;
    arabicText?: string;
    translation?: string;
    points?: string[];
    tableData?: {
      headers: string[];
      rows: string[][];
    };
    formulaBox?: {
      title: string;
      formula: string;
      example: string;
      note?: string;
    };
    interactiveCards?: {
      title: string;
      desc: string;
      tag?: string;
      color?: string;
    }[];
  };
  explanation?: string;
}

export interface ProyekItem {
  id: string;
  type: 'PjBL' | 'PBL';
  title: string;
  subtitle: string;
  duration: string;
  objective: string;
  scenario: string;
  steps: string[];
  output: string;
  rubric: { criteria: string; weight: string }[];
  note: string; // "Sesuai kebijakan guru"
}

export interface EvaluasiPG {
  id: number;
  question: string;
  options: string[];
  answer: number; // 0-based index
  explanation: string;
}

export interface EvaluasiPGK {
  id: number;
  question: string;
  options: string[];
  correctAnswers: number[]; // array of 0-based indices
  explanation: string;
}

export interface EvaluasiMenjodohkan {
  id: number;
  premise: string; // Pernyataan A
  matchTarget: string; // Jawaban B yang benar
  options: string[]; // Pilihan pasangan
  explanation: string;
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
  keyPoints: string[];
  sampleAnswer: string;
}

// ==========================================
// 15 MATERI SLIDES (LENGKAP & INTERAKTIF BAB 4)
// ==========================================
export const SLIDES_KELAS6_P4: SlideData[] = [
  {
    id: 1,
    title: 'Bab 4: Mengenal Zakat Fitrah, Zakat Mal, Infak, dan Sedekah',
    subtitle: 'Pendahuluan & Tujuan Pembelajaran',
    iconName: 'BookOpen',
    badge: 'Tujuan & Peta Konsep',
    content: {
      heading: 'Selamat Datang di Pembelajaran PAI Kelas 6 Bab 4',
      description: 'Pada bab ini, kita akan mempelajari ibadah sosial dalam Islam yang dapat menyucikan jiwa, membersihkan harta, dan menumbuhkan sikap kepedulian sosial di lingkungan masyarakat.',
      interactiveCards: [
        { title: '1. Pengertian Zakat Fitrah & Mal', desc: 'Memahami makna zakat penyuci jiwa dan zakat atas harta kekayaan.', tag: 'Akidah & Fiqih', color: 'emerald' },
        { title: '2. Ketentuan & Waktu Membayar', desc: 'Mengetahui syarat wajib, batas nisab, haul, dan waktu pelaksanaan.', tag: 'Ketentuan Syariat', color: 'teal' },
        { title: '3. Perhitungan Sederhana', desc: 'Melatih kemampuan berhitung zakat fitrah (2,5 kg) & zakat mal (2,5%).', tag: 'Computational Thinking', color: 'cyan' },
        { title: '4. Infak & Sedekah', desc: 'Membedakan zakat wajib dengan amalan sunah infak dan sedekah.', tag: 'Kepedulian Sosial', color: 'amber' }
      ]
    },
    explanation: 'Siswa diajak memahami bahwa Islam tidak hanya mengatur ibadah ritual dengan Allah (Hablum minallah), tetapi juga ibadah sosial dengan sesama manusia (Hablum minannas) melalui ZIS (Zakat, Infak, Sedekah).'
  },
  {
    id: 2,
    title: 'A. Pengertian & Keutamaan Zakat',
    subtitle: 'Makna Bahasa, Istilah, & Dalil Al-Qur\'an',
    iconName: 'Sparkles',
    badge: 'Landasan Syariat',
    content: {
      heading: 'Hakikat Zakat Dalam Islam',
      description: 'Kata "Zakat" berasal dari bahasa Arab yang mengandung makna luar biasa bagi kehidupan seorang Muslim.',
      arabicText: 'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ',
      translation: '"Dan laksanakanlah salat, tunaikanlah zakat, dan rukuklah beserta orang-orang yang rukuk." (QS. Al-Baqarah: 43)',
      points: [
        'Arti Bahasa: Bersih, suci, berkembang, dan berkah (الزَّكَاةُ).',
        'Arti Istilah: Mengeluarkan sebagian harta tertentu yang diberikan kepada golongan yang berhak menerima (mustahik) sesuai syarat syariat.',
        'Hukum: Zakat merupakan Rukun Islam ke-3 yang wajib dilaksanakan oleh setiap Muslim yang memenuhi syarat.',
        'Keterkaitan Salat & Zakat: Dalam Al-Qur\'an, perintah zakat sangat sering disandingkan langsung setelah perintah salat.'
      ]
    },
    explanation: 'Zakat tidak akan mengurangi harta seseorang. Justru secara spiritual dan sosial, harta yang dizakati menjadi bersih dari hak orang lain, bertambah berkah, dan berkembang.'
  },
  {
    id: 3,
    title: 'B. Zakat Fitrah (1): Pengertian, Hukum, & Tujuan',
    subtitle: 'Zakat Penyuci Diri Menjelang Idulfitri',
    iconName: 'HeartHandshake',
    badge: 'Zakat Fitrah',
    content: {
      heading: 'Penyuci Jiwa Setelah Ramadan',
      description: 'Zakat fitrah adalah zakat wajib yang dikeluarkan oleh setiap Muslim menjelang Hari Raya Idulfitri.',
      interactiveCards: [
        { title: 'Penyuci Diri', desc: 'Membersihkan diri dari dosa kecil dan kekurangan selama berpuasa Ramadan.', tag: 'Fungsi Utama', color: 'emerald' },
        { title: 'Kebahagiaan Bersama', desc: 'Membantu fakir miskin agar mereka juga dapat merayakan Idulfitri dengan gembira.', tag: 'Sosial', color: 'amber' },
        { title: 'Hukum Wajib', desc: 'Wajib bagi setiap Muslim (bayi, anak-anak, dewasa, laki-laki, maupun perempuan) yang memiliki kelebihan makanan.', tag: 'Syariat', color: 'indigo' }
      ],
      points: [
        'Anak-anak yang belum bekerja, pembayaran zakat fitrahnya ditanggung oleh orang tua atau wali.',
        'Seseorang wajib membayar zakat fitrah jika ia masih hidup hingga tenggelamnya matahari pada akhir bulan Ramadan.'
      ]
    },
    explanation: 'Zakat fitrah menjamin bahwa pada hari Idulfitri tidak ada kaum dhuafa yang kelaparan atau mengemis, sehingga seluruh umat Islam merasakan kegembiraan bersama.'
  },
  {
    id: 4,
    title: 'B. Zakat Fitrah (2): Waktu Membayar & Kadar Zakat',
    subtitle: 'Ketentuan Takaran Makanan Pokok',
    iconName: 'Scale',
    badge: 'Ketentuan Ukuran',
    content: {
      heading: 'Ukuran Besaran & Waktu Pembayaran Zakat Fitrah',
      description: 'Zakat fitrah dibayarkan berupa makanan pokok yang mengenyangkan di daerah setempat (seperti beras di Indonesia).',
      formulaBox: {
        title: 'Takaran Standar Zakat Fitrah Per Jiwa',
        formula: '1 Sha\' = ± 2,5 kg atau 3,5 Liter Beras / Makanan Pokok',
        example: 'Di Indonesia, zakat fitrah juga dapat dibayarkan dalam bentuk uang tunai yang setara dengan harga 2,5 kg beras berkualitas baik sesuai penetapan Badan Amil Zakat Nasional (BAZNAS) setempat.',
        note: 'Waktu Paling Utama (Afdhal): Malam terakhir bulan Ramadan sampai sebelum pelaksanaan salat Idulfitri.'
      },
      points: [
        'Waktu Mubah (Boleh): Sejak awal bulan Ramadan.',
        'Waktu Wajib: Terbenamnya matahari pada malam Idulfitri.',
        'Waktu Sunah/Afdhal: Sesudah salat Subuh sebelum salat Idulfitri.',
        'Waktu Makruh: Setelah salat Idulfitri sampai sebelum terbenam matahari 1 Syawal.',
        'Waktu Haram: Setelah terbenam matahari 1 Syawal (dianggap sedekah biasa, tidak mendapat pahala zakat fitrah).'
      ]
    },
    explanation: 'Mengetahui waktu pembayaran sangat penting agar ibadah zakat fitrah sah dan bernilai pahala zakat wajib.'
  },
  {
    id: 5,
    title: 'B. Zakat Fitrah (3): Simulasi Perhitungan Sederhana',
    subtitle: 'Latihan Menghitung Zakat Fitrah Keluarga',
    iconName: 'Calculator',
    badge: 'Simulasi Berhitung',
    content: {
      heading: 'Contoh Kasus Perhitungan Zakat Fitrah',
      description: 'Mari kita pelajari cara menghitung kebutuhan zakat fitrah sebuah keluarga menggunakan metode matematika sederhana.',
      formulaBox: {
        title: 'Kasus Keluarga Pak Ahmad',
        formula: 'Jumlah Anggota Keluarga = 4 Orang (Ayah, Ibu, Anak 1, Anak 2)',
        example: 'Total Beras = 4 orang × 2,5 kg = 10 kg beras.\nJika dalam bentuk uang (asumsi Rp14.000/kg):\n4 orang × (2,5 kg × Rp14.000) = 4 × Rp35.000 = Rp140.000.',
        note: 'Jadi, Pak Ahmad harus menyiapkan 10 kg beras atau uang sebesar Rp140.000.'
      },
      interactiveCards: [
        { title: 'Soal Latihan 1', desc: 'Keluarga Pak Budi terdiri dari Ayah, Ibu, dan 3 anak. Berapa kg beras zakat fitrah yang harus dikeluarkan?', tag: 'Jawaban: 5 × 2,5 = 12,5 kg', color: 'emerald' },
        { title: 'Soal Latihan 2', desc: 'Bu Fatimah menanggung zakat fitrah untuk dirinya dan 1 orang nenek. Berapa kg beras yang dibutuhkan?', tag: 'Jawaban: 2 × 2,5 = 5 kg', color: 'teal' }
      ]
    },
    explanation: 'Penghitungan zakat fitrah mengajarkan pemikiran komputasional (Computational Thinking) berupa dekomposisi dan formulasi matematis dasar.'
  },
  {
    id: 6,
    title: 'C. Zakat Mal (1): Pengertian, Syarat Nisab & Haul',
    subtitle: 'Zakat Atas Harta Kekayaan',
    iconName: 'Coins',
    badge: 'Zakat Mal',
    content: {
      heading: 'Memahami Zakat Mal (Harta)',
      description: 'Zakat mal adalah zakat yang wajib dikeluarkan atas harta tertentu yang dimiliki seseorang apabila telah memenuhi syarat syariat.',
      interactiveCards: [
        { title: 'Nisab (Batas Minimal)', desc: 'Batas jumlah minimal harta yang dimiliki sehingga harta tersebut wajib dikeluarkan zakatnya.', tag: 'Syarat Syariat', color: 'amber' },
        { title: 'Haul (Masa Kepemilikan)', desc: 'Harta tersebut telah disimpan/dimiliki secara penuh selama 1 tahun hijriah (kecuali hasil pertanian yang dikeluarkan saat panen).', tag: 'Syarat Waktu', color: 'indigo' },
        { title: 'Milik Penuh & Halal', desc: 'Harta berada dalam kekuasaan penuh pemiliknya dan diperoleh dari jalan yang halal.', tag: 'Status Harta', color: 'emerald' }
      ],
      points: [
        'Jenis Harta yang Wajib Dizakati: Emas, perak, uang tabungan, hasil perdagangan, hasil pertanian, hasil peternakan, dan hasil usaha tertentu.',
        'Kadar Zakat Mal Umum: Pada umumnya sebesar 2,5% dari total harta simpanan.'
      ]
    },
    explanation: 'Zakat mal berfungsi menyeimbangkan sistem ekonomi umat agar harta tidak hanya berputar di kalangan orang kaya saja.'
  },
  {
    id: 7,
    title: 'C. Zakat Mal (2): Simulasi Perhitungan Zakat Mal',
    subtitle: 'Perhitungan 2,5% Tabungan & Emas',
    iconName: 'PieChart',
    badge: 'Simulasi Zakat Mal',
    content: {
      heading: 'Contoh Perhitungan Sederhana Zakat Mal',
      description: 'Berikut contoh kasus perhitungan zakat mal untuk uang tabungan dan emas simpanan yang sudah memenuhi nisab dan haul.',
      formulaBox: {
        title: 'Kasus 1: Tabungan Pak Hasan',
        formula: 'Harta Tabungan = Rp100.000.000 (disimpan 1 tahun & mencapai nisab)',
        example: 'Besar Zakat = Rp100.000.000 × 2,5% = Rp2.500.000.\nJadi, Pak Hasan wajib membayar zakat mal sebesar Rp2.500.000.',
        note: 'Pencek Rumus Cepat: (Total Harta ÷ 40) = Rp100.000.000 ÷ 40 = Rp2.500.000.'
      },
      interactiveCards: [
        { title: 'Kasus 2: Emas Bu Fatimah', desc: 'Bu Fatimah memiliki simpanan emas murni 100 gram selama 1 tahun (Nisab emas = 85 gram).\nZakat = 100 gram × 2,5% = 2,5 gram emas (atau setara nilai uangnya).', tag: 'Zakat Emas', color: 'amber' },
        { title: 'Kasus 3: Dagangan Pak Ridwan', desc: 'Pak Ridwan memiliki aset usaha bersih Rp80.000.000 (sudah capai nisab & 1 tahun).\nZakat = Rp80.000.000 × 2,5% = Rp2.000.000.', tag: 'Zakat Perdagangan', color: 'cyan' }
      ]
    },
    explanation: 'Siswa dilatih menghitung 2,5% (atau membagi dengan 40) untuk menentukan kadar zakat mal dengan cepat dan akurat.'
  },
  {
    id: 8,
    title: 'D. Orang yang Berhak Menerima Zakat (Mustahik)',
    subtitle: '8 Golongan Penerima Zakat Berdasarkan Al-Qur\'an',
    iconName: 'Users',
    badge: '8 Mustahik',
    content: {
      heading: 'Golongan Penerima Zakat (QS. At-Taubah: 60)',
      description: 'Allah Swt. menetapkan secara tegas 8 golongan (mustahik) yang berhak menerima penyaluran zakat.',
      tableData: {
        headers: ['No', 'Golongan Mustahik', 'Penjelasan / Pengertian'],
        rows: [
          ['1', 'Fakir', 'Orang yang tidak memiliki harta dan tidak mempunyai pekerjaan untuk memenuhi kebutuhan pokok.'],
          ['2', 'Miskin', 'Orang yang memiliki pekerjaan tetapi penghasilannya tidak mencukupi kebutuhan hidup harian.'],
          ['3', 'Amil Zakat', 'Petugas yang diangkat resmi untuk mengumpulkan, mengelola, dan membagikan zakat.'],
          ['4', 'Mualaf', 'Orang yang baru masuk Islam dan hatinya masih lembut perlu dikuatkan imannya.'],
          ['5', 'Riqab', 'Hamba sahaya atau budak yang ingin memerdekakan dirinya.'],
          ['6', 'Gharim', 'Orang yang memiliki utang demi memenuhi kebutuhan hidup yang dibenarkan syariat.'],
          ['7', 'Fi Sabilillah', 'Orang yang berjuang di jalan Allah Swt. (pendidikan, dakwah, kebaikan umat).'],
          ['8', 'Ibnu Sabil', 'Musafir (orang dalam perjalanan jauh yang baik) yang kehabisan bekal.']
        ]
      }
    },
    explanation: 'Orang yang memberi zakat disebut Muzakki, sedangkan orang yang berhak menerima zakat disebut Mustahik.'
  },
  {
    id: 9,
    title: 'E. Hikmah Zakat Bagi Diri & Masyarakat',
    subtitle: 'Manfaat Keberkahan Dunia & Akhirat',
    iconName: 'Award',
    badge: 'Hikmah Utama',
    content: {
      heading: 'Keutamaan & Hikmah Zakat',
      description: 'Zakat membawa dampak positif yang sangat besar baik bagi individu pembayar zakat maupun bagi kesejahteraan masyarakat.',
      points: [
        'Membersihkan harta dari hak orang lain yang terselip di dalamnya.',
        'Menyucikan jiwa dari sifat kikir, sombong, dan tamak.',
        'Membantu dan meringankan beban hidup fakir miskin.',
        'Mengurangi tingkat kesenjangan sosial antara kelompok kaya dan miskin.',
        'Mempererat tali persaudaraan dan rasa kasih sayang antar sesama umat.',
        'Menumbuhkan rasa syukur yang mendalam atas nikmat rezeki dari Allah Swt.',
        'Melatih kepedulian dan rasa empati sosial.',
        'Mendorong keberkahan dan ketenangan dalam hidup.'
      ]
    },
    explanation: 'Penyaluran zakat yang tepat dan dikelola dengan jujur akan meningkatkan daya beli masyarakat dan menciptakan keadilan sosial.'
  },
  {
    id: 10,
    title: 'F. Infak: Pengertian, Contoh, & Hikmah',
    subtitle: 'Mengeluarkan Harta Untuk Kebaikan',
    iconName: 'HandHeart',
    badge: 'Amalan Infak',
    content: {
      heading: 'Hakikat Amalan Infak',
      description: 'Infak berasal dari kata anfaqa yang berarti mengeluarkan harta untuk kepentingan kebaikan sesuai ajaran Islam.',
      interactiveCards: [
        { title: 'Bebas Jumlah & Waktu', desc: 'Infak tidak memiliki batas minimal jumlah ataupun waktu tertentu. Seseorang dapat berinfak kapan saja sesuai kemampuan.', tag: 'Ketentuan', color: 'emerald' },
        { title: 'Contoh Infak', desc: '1. Menyumbang pembangunan masjid/mushala\n2. Membantu korban bencana alam\n3. Membeli Al-Qur\'an untuk TPQ\n4. Membantu panti asuhan', tag: 'Penerapan', color: 'amber' },
        { title: 'Hikmah Infak', desc: 'Melatih diri agar tidak kikir, memupuk kebiasaan gemar berbagi, serta meraih pahala dan keridaan Allah Swt.', tag: 'Keutamaan', color: 'teal' }
      ]
    },
    explanation: 'Berinfak dapat dilakukan oleh siapa saja, baik saat dalam keadaan lapang maupun sempit.'
  },
  {
    id: 11,
    title: 'G. Sedekah: Pengertian & Cakupan Kebaikan',
    subtitle: 'Kebaikan Harta Maupun Nonharta',
    iconName: 'Smile',
    badge: 'Amalan Sedekah',
    content: {
      heading: 'Sedekah: Pemberian Ikhlas Karena Allah Swt.',
      description: 'Sedekah memiliki arti yang sangat luas. Sedekah tidak terbatas pada materi/uang saja, melainkan mencakup setiap kebaikan yang dilakukan dengan ikhlas.',
      arabicText: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
      translation: '"Senyummu kepada saudaramu adalah sedekah." (HR. Tirmidzi)',
      interactiveCards: [
        { title: 'Sedekah Harta', desc: 'Memberikan makanan kepada tetangga, pakaian layak pakai, atau uang saku.', tag: 'Materi', color: 'emerald' },
        { title: 'Sedekah Nonharta', desc: 'Tenaga, mengajarkan ilmu/Al-Qur\'an, membantu orang tua, memberikan tempat duduk, tersenyum, dan berkata sopan.', tag: 'Nonmateri', color: 'cyan' }
      ]
    },
    explanation: 'Bahkan orang yang tidak memiliki uang sekalipun tetap bisa bersedekah melalui tenaga, fikiran, kata-kata yang baik, dan senyuman yang ramah.'
  },
  {
    id: 12,
    title: 'H. Perbandingan Zakat, Infak, dan Sedekah',
    subtitle: 'Tabel Perbedaan Berdasarkan 5 Aspek Syariat',
    iconName: 'CheckSquare',
    badge: 'Tabel Perbandingan',
    content: {
      heading: 'Analisis Perbedaan Zakat, Infak, dan Sedekah',
      description: 'Mari kita cermati tabel komparatif kelima aspek untuk membedakan ketiga amalan mulia ini secara akurat.',
      tableData: {
        headers: ['Aspek', 'Zakat', 'Infak', 'Sedekah'],
        rows: [
          ['Hukum', 'Wajib (jika memenuhi syarat)', 'Sunah', 'Sunah'],
          ['Waktu', 'Sesuai ketentuan syariat (Idulfitri / Haul)', 'Kapan saja', 'Kapan saja'],
          ['Jumlah', 'Ditentukan syariat (2,5 kg / 2,5%)', 'Bebas sesuai kemampuan', 'Bebas'],
          ['Penerima', '8 Golongan Khusus (Mustahik)', 'Siapa saja yang membutuhkan', 'Siapa saja yang membutuhkan'],
          ['Bentuk', 'Harta tertentu (beras, uang, emas)', 'Harta / Materi', 'Harta maupun Nonharta (senyum, ilmu, tenaga)']
        ]
      }
    },
    explanation: 'Zakat bersifat wajib dengan aturan ketat, sedangkan infak terbatas pada harta sunah, dan sedekah sangat luas meliputi harta maupun tindakan kebaikan nonharta.'
  },
  {
    id: 13,
    title: 'I. Penerapan Dalam Kehidupan Sehari-hari',
    subtitle: 'Praktik Pembiasaan Berbagi di Rumah, Sekolah, & Masyarakat',
    iconName: 'Home',
    badge: 'Pembiasaan Diri',
    content: {
      heading: 'Mewujudkan Sikap Gemar Berbagi',
      description: 'Amalan ZIS harus dibiasakan dalam tindakan nyata sehari-hari di berbagai lingkungan:',
      points: [
        'Di Rumah: Menyisihkan sebagian uang saku ke kotak amal keluarga, membantu orang tua membagikan makanan ke tetangga, hidup sederhana, dan tidak boros.',
        'Di Sekolah: Mengisi kotak infak Jumat kelas, membantu teman yang kesulitan belajar, meminjamkan alat tulis, dan berbagi bekal makanan saat istirahat.',
        'Di Masyarakat: Ikut panitia remaja masjid dalam pengumpulan zakat fitrah, membantu korban bencana alam, mengikuti bakti sosial, dan menyantuni anak yatim.'
      ]
    },
    explanation: 'Pembiasaan sejak dini membentuk karakter anak yang dermawan, berempati tinggi, dan peduli terhadap penderitaan sesama.'
  },
  {
    id: 14,
    title: 'J. Kisah Teladan: Kepedulian Untuk Korban Banjir',
    subtitle: 'Pelajaran Dari Aksi Nyata Berbagi',
    iconName: 'BookOpenCheck',
    badge: 'Kisah Inspiratif',
    content: {
      heading: 'Indahnya Berbagi Tanpa Membeda-bedakan',
      description: 'Suatu hari, Pak Guru mengumumkan penggalangan infak dan bantuan untuk warga desa tetangga yang tertimpa musibah banjir bandang.',
      points: [
        'Para siswa dengan antusias mengumpulkan bantuan sesuai kemampuan masing-masing.',
        'Ada yang menyisihkan uang tabungannya, membawa beras dari rumah, hingga menyumbangkan pakaian sekolah yang masih sangat layak pakai.',
        'Saat bantuan disalurkan, senyum bahagia terpancar dari raut wajah para korban banjir.',
        'Siswa belajar langsung bahwa sekecil apapun bantuan yang diberikan dengan niat ikhlas akan menjadi amalan bernilai tinggi di sisi Allah Swt.'
      ]
    },
    explanation: 'Kisah ini membuktikan bahwa persaudaraan sosial yang dilandasi nilai zakat, infak, dan sedekah mampu meringankan beban musibah berat.'
  },
  {
    id: 15,
    title: 'Rangkuman & Refleksi Diri',
    subtitle: 'Rangkuman Inti & Pertanyaan Perenungan',
    iconName: 'Target',
    badge: 'Refleksi Akhir',
    content: {
      heading: 'Ringkasan Inti Materi Bab 4',
      description: 'Zakat (fitrah & mal) adalah ibadah wajib penyuci jiwa dan harta. Infak dan sedekah adalah amalan sunah pemancar kepedulian sosial.',
      interactiveCards: [
        { title: 'Refleksi 1', desc: 'Apakah saya sudah memiliki kebiasaan menyisihkan uang untuk berbagi kepada sesama?', tag: 'Pertanyaan Diri', color: 'emerald' },
        { title: 'Refleksi 2', desc: 'Bagaimana cara terbaik saya membantu teman yang sedang mengalami kesulitan?', tag: 'Tindakan Nyata', color: 'amber' },
        { title: 'Refleksi 3', desc: 'Mengapa keikhlasan menjadi syarat mutlak agar amalan zakat, infak, dan sedekah diterima Allah Swt.?', tag: 'Niat Suci', color: 'teal' }
      ]
    },
    explanation: 'Semoga kita senantiasa dibimbing menjadi pribadi yang dermawan, bersih hatinya, serta berkah hartanya. Aamiin.'
  }
];

// ==========================================
// PROYEK MURID (2 PjBL + 2 PBL)
// ==========================================
export const PROYEK_KELAS6_P4: ProyekItem[] = [
  {
    id: 'pjbl-1',
    type: 'PjBL',
    title: 'Proyek 1 (PjBL): Simulasi Baznas Cilik & Posko Panitia Zakat Fitrah Sekolah',
    subtitle: 'Project Based Learning - Pengelolaan & Pembagian Zakat Fitrah',
    duration: '2 Minggu (Kelompok 4-5 Orang)',
    objective: 'Peserta didik mampu merancang, mensimulasikan, dan mengelola alur pengumpulan serta penyaluran zakat fitrah secara tertib, teliti, dan adil.',
    scenario: 'Menjelang akhir bulan Ramadan, sekolah mengadakan kegiatan tahunan Pengumpulan Zakat Fitrah. Kelompokmu ditunjuk sebagai tim Amil Zakat Cilik yang bertugas mencatat muzakki, menimbang beras, dan menyalurkannya kepada mustahik.',
    steps: [
      'Membuat struktur panitia Amil Zakat Cilik (Ketua, Pencatat Muzakki, Penimbang Beras, Pengelompok Mustahik).',
      'Membuat formulir bukti penerimaan zakat fitrah dan kupon pembagian untuk fakir miskin.',
      'Melakukan simulasi penimbangan beras 2,5 kg per jiwa untuk 10 sampel keluarga.',
      'Menyusun laporan rekapitulasi penerimaan beras dan pembagian kepada 8 golongan mustahik.',
      'Mempresentasikan hasil simulasi posko zakat fitrah di depan kelas.'
    ],
    output: 'Buku rekapitulasi Amil Zakat Cilik, sampel kupon zakat, dan maket/posko simulasi panitia zakat.',
    rubric: [
      { criteria: 'Perencanaan & Administrasi Form', weight: '25%' },
      { criteria: 'Akurasi Penimbangan & Perhitungan', weight: '35%' },
      { criteria: 'Pemahaman 8 Mustahik', weight: '25%' },
      { criteria: 'Kerjasama & Presentasi', weight: '15%' }
    ],
    note: 'Sesuai kebijakan guru'
  },
  {
    id: 'pjbl-2',
    type: 'PjBL',
    title: 'Proyek 2 (PjBL): Pembuatan Poster Infografis & Video Kampanye "Gerakan Celengan Sedekah Subuh"',
    subtitle: 'Project Based Learning - Edukasi & Aksi Nyata Berbagi',
    duration: '1 Minggu (Kelompok 3-4 Orang)',
    objective: 'Peserta didik mampu mengkreasi media edukasi visual/digital mengenai keutamaan infak dan sedekah serta mempraktikkan gerakan celengan kebaikan.',
    scenario: 'Masih banyak teman-teman di sekolah yang menganggap sedekah harus dalam jumlah besar dan berupa uang saja. Kelompokmu ditantang membuat poster infografis edukatif dan mendesain "Celengan Sedekah Subuh" kreasi sendiri dari bahan daur ulang.',
    steps: [
      'Mendesain poster visual menarik tentang Perbedaan Zakat, Infak, dan Sedekah.',
      'Membuat Celengan Kebaikan dari botol/kaleng daur ulang yang dihias dengan kaligrafi kata-kata motivasi berbagi.',
      'Merekam video ajakan (durasi 1-2 menit) tentang "Senyum dan Kebaikan Kecil Adalah Sedekah".',
      'Mempraktikkan pengisian celengan selama 5 hari lalu mengumpulkan hasilnya untuk kotak infak kelas.'
    ],
    output: 'Poster edukasi A3, Celengan Kebaikan Daur Ulang, dan Video Kampanye Edukatif.',
    rubric: [
      { criteria: 'Kreativitas Media & Kebersihan', weight: '30%' },
      { criteria: 'Kebenaran Materi ZIS', weight: '30%' },
      { criteria: 'Pesan Kampanye & Kelancaran Bicara', weight: '25%' },
      { criteria: 'Penerapan Aksi Berbagi', weight: '15%' }
    ],
    note: 'Sesuai kebijakan guru'
  },
  {
    id: 'pbl-1',
    type: 'PBL',
    title: 'Studi Kasus 1 (PBL): Dilema Penyaluran Zakat Fitrah Pak RT di Desa Suka Maju',
    subtitle: 'Problem Based Learning - Pembagian Hak Mustahik Secara Adil',
    duration: '2 Jam Pelajaran (Diskusi Kelompok)',
    objective: 'Peserta didik mampu menganalisis masalah ketidaktepatan penyaluran zakat fitrah dan merumuskan solusi berbasis aturan 8 mustahik.',
    scenario: 'Di Desa Suka Maju, Pak RT menerima 100 kantong beras zakat fitrah (masing-masing 2,5 kg). Ada usulan dari sebagian warga agar beras tersebut dibagi rata kepada seluruh warga desa tanpa membedakan apakah warga tersebut kaya atau miskin, agar tidak ada rasa cemburu. Namun, ada kelompok warga fakir miskin yang sangat membutuhkan beras tersebut untuk makan sehari-hari.',
    steps: [
      'Identifikasi masalah utama dalam usulan pembagian beras zakat fitrah di Desa Suka Maju.',
      'Analisis sesuai hukum Islam: Bolehkah zakat fitrah dibagikan rata kepada warga kaya?',
      'Diskusikan siapa saja dari 8 golongan mustahik yang wajib diprioritaskan mendapat zakat.',
      'Rumuskan langkah solutif dan bahasa yang santun bagi Pak RT untuk menjelaskan aturan syariat kepada warga kaya.'
    ],
    output: 'Lembar Solusi Analisis Kasus & Naskah Dialog penjelasan Pak RT kepada warga.',
    rubric: [
      { criteria: 'Ketajaman Analisis Masalah Syariat', weight: '35%' },
      { criteria: 'Kesesuaian Penggunaan Data Mustahik', weight: '35%' },
      { criteria: 'Kelogisan & Etika Solusi', weight: '30%' }
    ],
    note: 'Sesuai kebijakan guru'
  },
  {
    id: 'pbl-2',
    type: 'PBL',
    title: 'Studi Kasus 2 (PBL): Analisis Audit Perhitungan Zakat Mal Pengusaha Muda',
    subtitle: 'Problem Based Learning - Computational Thinking & Pemecahan Masalah Nisab',
    duration: '2 Jam Pelajaran (Studi Komputasi)',
    objective: 'Peserta didik mampu mengidentifikasi kesalahan perhitungan zakat mal dan mengoreksi besaran zakat yang wajib dikeluarkan.',
    scenario: 'Mas Budi seorang pengusaha kuliner sukses yang memiliki tabungan sebesar Rp120.000.000 selama 1 tahun penuh. Ia berniat mengeluarkan zakat mal. Namun, Mas Budi keliru menghitung, ia mengira zakat mal sama dengan pajak usaha sebesar 10% (Rp12.000.000), dan ia ragu apakah hasil panen kebun sawit pamannya yang baru dipanen juga dihitung 2,5% atau 5%/10%. Kelompokmu diminta menjadi konsultan zakat untuk membantu Mas Budi.',
    steps: [
      'Periksa apakah tabungan Mas Budi sebesar Rp120.000.000 sudah mencapai nisab dan haul.',
      'Koreksi rumus perhitungan zakat mal Mas Budi yang benar (2,5%). Hitung berapa nominal tepatnya!',
      'Jelaskan perbedaan ketentuan persentase zakat mal tabungan (2,5%) dengan zakat pertanian (5% / 10%).',
      'Buat tabel panduan ringkas perhitungan zakat mal untuk Mas Budi.'
    ],
    output: 'Laporan Audit Perhitungan Zakat Mal Mas Budi & Tabel Panduan Kadar Zakat.',
    rubric: [
      { criteria: 'Keketatan Perhitungan Matematis (2,5%)', weight: '40%' },
      { criteria: 'Pemahaman Syarat Nisab & Haul', weight: '35%' },
      { criteria: 'Kejelasan Penyampaian Laporan', weight: '25%' }
    ],
    note: 'Sesuai kebijakan guru'
  }
];

// ==========================================
// EVALUASI PEMBELAJARAN (HOTS & COMPUTATIONAL THINKING)
// ==========================================

// 1. 10 Soal Pilihan Ganda (PG)
export const EVALUASI_PG_KELAS6_P4: EvaluasiPG[] = [
  {
    id: 1,
    question: 'Secara bahasa, kata "zakat" memiliki arti bersih, suci, berkembang, dan berkah. Hubungan antara menunaikan zakat dengan kondisi harta seorang Muslim yang paling tepat adalah...',
    options: [
      'Harta akan berkurang secara nominal sehingga pembayar zakat menjadi miskin',
      'Harta menjadi bersih dari hak orang lain dan mendatangkan keberkahan dari Allah Swt.',
      'Harta tidak dapat dipergunakan lagi untuk keperluan pribadi',
      'Harta wajib diserahkan seluruhnya tanpa tersisa kepada pengurus zakat'
    ],
    answer: 1,
    explanation: 'Zakat menyucikan harta dari hak orang lain (fakir miskin) yang terselip di dalamnya serta menjadikan sisa harta lebih berkah dan berkembang.'
  },
  {
    id: 2,
    question: 'Keluarga Pak Sulaiman terdiri atas seorang ayah, ibu, 3 orang anak, dan 1 orang kakek yang tinggal serumah. Jika besarnya zakat fitrah adalah 2,5 kg beras per jiwa, berapa total beras yang harus dikeluarkan Pak Sulaiman?',
    options: [
      '12,5 kg beras',
      '15,0 kg beras',
      '17,5 kg beras',
      '20,0 kg beras'
    ],
    answer: 1,
    explanation: 'Total anggota keluarga = Ayah (1) + Ibu (1) + Anak (3) + Kakek (1) = 6 orang. Total beras = 6 × 2,5 kg = 15,0 kg beras.'
  },
  {
    id: 3,
    question: 'Pak Usman hendak membayar zakat fitrah untuk keluarganya. Waktu yang paling utama (afdhal) untuk mengeluarkan zakat fitrah sesuai tuntunan Rasulullah saw. adalah...',
    options: [
      'Pada hari pertama bulan Ramadan setelah sahur',
      'Pada pertengahan bulan Ramadan saat iktikaf',
      'Pada malam terakhir Ramadan sampai sebelum pelaksanaan salat Idulfitri',
      'Setelah selesai menunaikan salat Idulfitri di lapangan'
    ],
    answer: 2,
    explanation: 'Waktu paling utama (afdhal) membayar zakat fitrah adalah pada malam terakhir Ramadan atau sesudah salat Subuh sebelum pelaksanaan salat Idulfitri.'
  },
  {
    id: 4,
    question: 'Ibu Rahma memiliki tabungan uang sebesar Rp80.000.000 yang disimpan di bank syariah selama 1 tahun penuh. Jika simpanan tersebut telah mencapai nisab dan syarat zakat mal sebesar 2,5%, berapakah zakat mal yang wajib dikeluarkan Bu Rahma?',
    options: [
      'Rp1.500.000',
      'Rp2.000.000',
      'Rp2.500.000',
      'Rp4.000.000'
    ],
    answer: 1,
    explanation: 'Zakat mal = Rp80.000.000 × 2,5% = Rp2.000.000 (atau Rp80.000.000 ÷ 40 = Rp2.000.000).'
  },
  {
    id: 5,
    question: 'Pak Hasan adalah pengurus masjid yang bertugas mencatat, mengumpulkan, dan membagikan zakat kepada warga yang berhak. Dalam kategori 8 mustahik zakat, posisi Pak Hasan dinamakan...',
    options: [
      'Muzakki',
      'Amil Zakat',
      'Gharim',
      'Ibnu Sabil'
    ],
    answer: 1,
    explanation: 'Amil Zakat adalah orang/petugas yang diangkat resmi untuk mengumpulkan, mengelola, dan mendistribusikan zakat.'
  },
  {
    id: 6,
    question: 'Seorang musafir bernama Ahmad kehabisan bekal dan biaya saat melakukan perjalanan jauh untuk menuntut ilmu ke luar kota. Dalam ketentuan penerima zakat, Ahmad tergolong dalam kelompok...',
    options: [
      'Riqab',
      'Mualaf',
      'Ibnu Sabil',
      'Fi Sabilillah'
    ],
    answer: 2,
    explanation: 'Ibnu Sabil adalah musafir (orang yang sedang dalam perjalanan jauh yang bukan untuk kemaksiatan) yang kehabisan bekal.'
  },
  {
    id: 7,
    question: 'Perhatikan pernyataan berikut:\n(1) Mengeluarkan uang untuk pembangunan musala\n(2) Tersenyum ramah dan menyapa tetangga\n(3) Menyerahkan 2,5 kg beras menjelang Idulfitri\n(4) Membantu menyeberangkan jalan seorang nenek\nManakah yang merupakan contoh amalan Sedekah Nonharta?',
    options: [
      '(1) dan (3)',
      '(2) dan (4)',
      '(1) dan (2)',
      '(3) dan (4)'
    ],
    answer: 1,
    explanation: 'Sedekah nonharta adalah kebaikan berbentuk tindakan, seperti tersenyum (HR. Tirmidzi) dan membantu menyeberangkan jalan (tenaga).'
  },
  {
    id: 8,
    question: 'Manakah pernyataan yang paling tepat menggambarkan perbedaan antara Infak dan Zakat berdasarkan ketentuan hukum dan penerimanya?',
    options: [
      'Zakat hukumnya sunah untuk semua orang, sedangkan infak hukumnya wajib bagi yang kaya',
      'Zakat ditentukan kadar dan penerimanya (8 golongan), sedangkan infak bebaskadarnya dan dapat diberikan kepada siapa saja yang membutuhkan',
      'Zakat hanya boleh dalam bentuk uang, sedangkan infak hanya boleh dalam bentuk makanan',
      'Zakat dikeluarkan saat bencana alam, sedangkan infak dikeluarkan hanya saat Idulfitri'
    ],
    answer: 1,
    explanation: 'Zakat memiliki syarat nisab, kadar pasti (2,5%), dan 8 mustahik khusus, sedangkan infak bersifat sunah, kadarnya bebas, dan penerimanya luas.'
  },
  {
    id: 9,
    question: 'Siti menyisihkan sebagian uang sakunya setiap hari Jumat untuk dimasukkan ke dalam kotak infak kelas tanpa ingin dipuji oleh teman-temannya. Sikap Siti mencerminkan hikmah ibadah sosial yaitu...',
    options: [
      'Melatih sifat sombong dan pamer kekayaan',
      'Menyucikan hati dari sifat kikir dan memupuk keikhlasan',
      'Mengharapkan balasan hadiah dari guru',
      'Menunjukkan bahwa dirinya anak paling kaya di kelas'
    ],
    answer: 1,
    explanation: 'Berinfak secara ikhlas menyucikan jiwa dari sifat kikir, pamer (ria), dan melatih kepedulian sosial.'
  },
  {
    id: 10,
    question: 'Dalam suatu desa terjadi bencana banjir. Kelompok remaja masjid mengumpulkan beras, pakaian layak pakai, dan obat-obatan dari warga untuk disalurkan kepada korban. Kegiatan ini merupakan wujud penerapan...',
    options: [
      'Zakat mal yang bersifat mengikat tahunan',
      'Infak dan sedekah dalam wujud kepedulian sosial kemanusiaan',
      'Hanya kewajiban pemerintah desa semata',
      'Hutang piutang yang wajib dikembalikan oleh korban banjir'
    ],
    answer: 1,
    explanation: 'Membantu korban bencana alam menggunakan bahan makanan, pakaian, dan obat-obatan adalah wujud amalan infak dan sedekah kemanusiaan.'
  }
];

// 2. 10 Soal Pilihan Ganda Kompleks (PGK - Multi-Select)
export const EVALUASI_PGK_KELAS6_P4: EvaluasiPGK[] = [
  {
    id: 1,
    question: 'Pilihlah DUA atau LEBIH syarat wajib seseorang mengeluarkan Zakat Fitrah yang tepat!',
    options: [
      'Beragama Islam',
      'Memiliki simpanan emas minimal 100 gram',
      'Masih hidup saat terbenamnya matahari di akhir bulan Ramadan',
      'Memiliki kelebihan makanan/harta untuk diri dan keluarganya pada malam dan hari Raya Idulfitri'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Syarat wajib zakat fitrah: Beragama Islam, hidup pada akhir Ramadan, dan mempunyai kelebihan makanan pokok untuk hari Idulfitri.'
  },
  {
    id: 2,
    question: 'Pilihlah DUA contoh harta kekayaan yang wajib dikeluarkan Zakat Mal apabila telah memenuhi nisab dan haul!',
    options: [
      'Pakaian sehari-hari yang dipakai ke sekolah',
      'Emas dan perak simpanan',
      'Uang tabungan simpanan selama 1 tahun',
      'Sepeda motor yang dipakai untuk transportasi harian'
    ],
    correctAnswers: [1, 2],
    explanation: 'Harta wajib zakat mal antara lain emas, perak, uang tabungan, hasil perdagangan, pertanian, dan peternakan. Barang keperluan harian (kendaraan/pakaian harian) tidak kena zakat mal.'
  },
  {
    id: 3,
    question: 'Siapakah di antara pilihan berikut yang termasuk ke dalam 8 Golongan Mustahik (penerima zakat)? (Pilih lebih dari satu)',
    options: [
      'Fakir dan Miskin',
      'Orang kaya yang dermawan',
      'Gharim (orang berutang untuk kebaikan)',
      'Amil zakat'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Mustahik zakat meliputi Fakir, Miskin, Amil, Mualaf, Riqab, Gharim, Fi Sabilillah, dan Ibnu Sabil. Orang kaya tidak berhak menerima zakat.'
  },
  {
    id: 4,
    question: 'Pilihlah DUA atau LEBIH hikmah dari menunaikan amalan zakat, infak, dan sedekah bagi kehidupan bermasyarakat!',
    options: [
      'Mempererat tali persaudaraan dan kepedulian antar sesama',
      'Menimbulkan rasa iri dengki di kalangan fakir miskin',
      'Mengurangi kesenjangan sosial antara orang kaya dan miskin',
      'Membersihkan jiwa dari sifat kikir dan tamak'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Hikmah ZIS mencakup persaudaraan, pemerataan ekonomi, dan penyucian jiwa dari kikir.'
  },
  {
    id: 5,
    question: 'Manakah yang termasuk ke dalam bentuk Sedekah Nonharta (nonmateri)? (Pilih lebih dari satu)',
    options: [
      'Menyumbangkan uang tunai Rp50.000 ke panti asuhan',
      'Membantu menuntun orang buta menyeberang jalan',
      'Mengajarkan membaca Al-Qur\'an kepada adik kelas',
      'Tersenyum ramah dan menyapa tetangga dengan sopan'
    ],
    correctAnswers: [1, 2, 3],
    explanation: 'Sedekah nonharta berupa bantuan tenaga, pengajaran ilmu, dan tutur kata ramah/senyuman.'
  },
  {
    id: 6,
    question: 'Pilihlah DUA atau LEBIH pernyataan yang benar mengenai ketentuan Zakat Fitrah!',
    options: [
      'Besaran zakat fitrah adalah 1 sha\' atau setara ± 2,5 kg beras',
      'Zakat fitrah wajib dibayar sebanyak 10% dari total penghasilan bulanan',
      'Anak-anak yang belum bekerja zakat fitrahnya ditanggung oleh orang tua/wali',
      'Boleh dikeluarkan dalam bentuk uang tunai yang setara harga beras makanan pokok'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Zakat fitrah besarnya 2,5 kg beras per jiwa (atau uang setara), ditanggung orang tua bagi anak belum mampu.'
  },
  {
    id: 7,
    question: 'Manakah dari situasi berikut yang menyebabkan zakat mal Wajib dikeluarkan oleh seseorang? (Pilih semua yang benar)',
    options: [
      'Harta tabungan telah mencapai nisab (batas minimal)',
      'Harta simpanan telah dimiliki/disimpan selama 1 tahun (haul)',
      'Harta diperoleh dari hasil mencuri atau korupsi',
      'Harta merupakan kepemilikan penuh dan bersumber dari rezeki halal'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Syarat zakat mal: capai nisab, capai haul (1 tahun), milik penuh, dan halal. Harta haram tidak sah dizakati.'
  },
  {
    id: 8,
    question: 'Perhatikan amalan-amalan berikut! Pilihlah DUA amalan yang hukumnya SUNAH!',
    options: [
      'Zakat Fitrah bagi Muslim yang mampu',
      'Memberikan infak untuk pembangunan masjid',
      'Menyumbangkan baju layak pakai ke panti asuhan (Sedekah)',
      'Zakat Mal yang telah memenuhi nisab dan haul'
    ],
    correctAnswers: [1, 2],
    explanation: 'Infak dan sedekah hukumnya sunah, sedangkan zakat fitrah dan zakat mal hukumnya wajib.'
  },
  {
    id: 9,
    question: 'Pilihlah contoh penerapan amalan berbagi di lingkungan sekolah yang tepat! (Pilih lebih dari satu)',
    options: [
      'Mengisi kotak infak kelas secara rutin setiap hari Jumat',
      'Meminjamkan pensil atau penghapus kepada teman yang lupa membawa',
      'Membantu teman yang mengalami kesulitan memahami materi pelajaran',
      'Memaksa teman membagikan bekal makanannya secara tidak ikhlas'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Mengisi kotak infak, meminjamkan alat tulis, dan membantu belajar adalah amalan infak & sedekah di sekolah.'
  },
  {
    id: 10,
    question: 'Manakah di antara pilihan berikut yang termasuk golongan "Gharim" dan "Fi Sabilillah"? (Pilih lebih dari satu)',
    options: [
      'Orang yang berutang karena menanggung biaya pengobatan keluarga yang sakit sakitan',
      'Pengusaha kaya yang meminjam uang untuk membeli mobil mewah baru',
      'Guru ngaji yang berjuang mengajar Al-Qur\'an di pelosok desa tanpa gaji',
      'Orang yang kehabisan ongkos saat pulang kampung'
    ],
    correctAnswers: [0, 2],
    explanation: 'Gharim adalah orang berutang untuk kebaikan pokok (bukan barang mewah), Fi Sabilillah adalah orang berjuang di jalan Allah.'
  }
];

// 3. 5 Soal Menjodohkan
export const EVALUASI_MENJODOHKAN_KELAS6_P4: EvaluasiMenjodohkan[] = [
  {
    id: 1,
    premise: 'Petugas resmi yang diberi amanah untuk mengumpulkan dan membagikan zakat',
    matchTarget: 'Amil Zakat',
    options: ['Amil Zakat', 'Gharim', 'Fi Sabilillah', 'Muzakki', 'Nisab'],
    explanation: 'Amil Zakat adalah pengurus/petugas penerima dan penyalur zakat.'
  },
  {
    id: 2,
    premise: 'Batas minimal jumlah harta kekayaan yang menyebabkan wajib dikeluarkan zakat mal',
    matchTarget: 'Nisab',
    options: ['Nisab', 'Haul', 'Mustahik', '1 Sha\'', 'Amil Zakat'],
    explanation: 'Nisab adalah batas minimal jumlah harta wajib zakat.'
  },
  {
    id: 3,
    premise: 'Ukuran berat makanan pokok zakat fitrah untuk 1 orang jiwa',
    matchTarget: '2,5 kg Beras',
    options: ['2,5 kg Beras', '2,5% Harta', '85 gram', '10 kg Beras', '10% Hasil Panen'],
    explanation: 'Ukuran zakat fitrah per jiwa setara dengan 2,5 kg beras.'
  },
  {
    id: 4,
    premise: 'Sedekah yang tidak menggunakan materi/harta tetapi mendatangkan pahala',
    matchTarget: 'Senyuman Ikhlas & Tutur Kata Sopan',
    options: ['Senyuman Ikhlas & Tutur Kata Sopan', 'Zakat Mal 2,5%', 'Infak Masjid', 'Nisab Emas 85 gram', 'Gharim'],
    explanation: 'Senyuman dan tutur kata sopan adalah contoh sedekah nonharta (HR. Tirmidzi).'
  },
  {
    id: 5,
    premise: 'Masa kepemilikan harta simpanan selama 1 tahun Hijriah dalam Zakat Mal',
    matchTarget: 'Haul',
    options: ['Haul', 'Nisab', 'Muzakki', 'Mustahik', 'Kafir'],
    explanation: 'Haul adalah syarat masa kepemilikan harta selama 1 tahun.'
  }
];

// 4. 10 Soal Benar / Salah + Isian Alasan
export const EVALUASI_BENAR_SALAH_KELAS6_P4: EvaluasiBenarSalah[] = [
  {
    id: 1,
    statement: 'Zakat fitrah wajib dikeluarkan oleh setiap Muslim yang memiliki kemampuan menjelang Hari Raya Idulfitri.',
    isCorrect: true,
    explanation: 'BENAR. Zakat fitrah adalah kewajiban fardu ain bagi setiap Muslim menjelang Idulfitri untuk penyuci diri.'
  },
  {
    id: 2,
    statement: 'Zakat fitrah bagi seorang anak bayi yang baru lahir sebelum matahari terbenam pada malam Idulfitri tidak perlu dibayarkan oleh orang tuanya.',
    isCorrect: false,
    explanation: 'SALAH. Apabila bayi lahir sebelum terbenam matahari akhir Ramadan, maka orang tua wajib mengeluarkan zakat fitrah untuk bayi tersebut.'
  },
  {
    id: 3,
    statement: 'Kadar persentase zakat mal untuk simpanan emas dan uang tabungan pada umumnya adalah 2,5%.',
    isCorrect: true,
    explanation: 'BENAR. Ketentuan kadar zakat mal untuk emas, perak, dan uang simpanan adalah 2,5% jika memenuhi nisab dan haul.'
  },
  {
    id: 4,
    statement: 'Zakat mal dan zakat fitrah boleh dibagikan kepada siapa saja, termasuk kepada orang kaya yang dermawan.',
    isCorrect: false,
    explanation: 'SALAH. Zakat hanya boleh diberikan kepada 8 golongan mustahik yang ditetapkan Al-Qur\'an (QS. At-Taubah: 60). Orang kaya tidak berhak menerima zakat.'
  },
  {
    id: 5,
    statement: 'Infak tidak memiliki batasan jumlah minimum dan batasan waktu tertentu, sehingga dapat dilakukan kapan saja sesuai kemampuan.',
    isCorrect: true,
    explanation: 'BENAR. Infak bersifat sunah, kadarnya bebas, dan dapat dikeluarkan kapan saja.'
  },
  {
    id: 6,
    statement: 'Memberikan bantuan tenaga, membantu teman belajar, dan tersenyum ramah kepada orang lain tidak termasuk nilai sedekah.',
    isCorrect: false,
    explanation: 'SALAH. Rasulullah saw. menegaskan bahwa senyuman, bantuan tenaga, dan ilmu termasuk sedekah nonharta.'
  },
  {
    id: 7,
    statement: 'Apabila sebuah keluarga terdiri dari 5 orang, maka total beras zakat fitrah yang wajib dikeluarkan adalah 12,5 kg beras.',
    isCorrect: true,
    explanation: 'BENAR. Perhitungan: 5 orang × 2,5 kg = 12,5 kg beras.'
  },
  {
    id: 8,
    statement: 'Waktu yang paling utama (afdhal) untuk membayar zakat fitrah adalah setelah selesai menunaikan salat Idulfitri.',
    isCorrect: false,
    explanation: 'SALAH. Pembayaran zakat fitrah setelah salat Idulfitri hukumnya makruh (atau bahkan menjadi sedekah biasa jika lewat 1 Syawal). Waktu afdhal adalah sebelum salat Idulfitri.'
  },
  {
    id: 9,
    statement: 'Salah satu hikmah zakat adalah menyucikan jiwa pembayarnya dari sifat kikir dan sombong.',
    isCorrect: true,
    explanation: 'BENAR. Zakat membersihkan hati dari sifat tamak, bakhil/kikir, serta melatih sikap dermawan.'
  },
  {
    id: 10,
    statement: 'Gharim adalah orang yang diangkat oleh pemerintah untuk mengumpulkan dan membagikan zakat.',
    isCorrect: false,
    explanation: 'SALAH. Gharim adalah orang yang memiliki utang untuk memenuhi kebutuhan hidup yang dibenarkan syariat. Petugas pengumpul zakat disebut Amil.'
  }
];

// 5. 5 Soal Uraian (HOTS & Computational Thinking)
export const EVALUASI_URAIAN_KELAS6_P4: EvaluasiUraian[] = [
  {
    id: 1,
    question: 'Analisislah mengapa perintah membayar zakat di dalam Al-Qur\'an sangat sering disandingkan langsung dengan perintah mendirikan salat! Apa makna hubungan kedua ibadah ini?',
    context: 'QS. Al-Baqarah ayat 43 menyebutkan: "Dan laksanakanlah salat, tunaikanlah zakat...".',
    keyPoints: [
      'Salat melambangkan hubungan vertikal kepada Allah Swt. (Hablum minallah).',
      'Zakat melambangkan hubungan horizontal kepada sesama manusia (Hablum minannas).',
      'Keislaman seseorang tidak sempurna jika hanya rajin salat tetapi acuh terhadap penderitaan sesama.'
    ],
    sampleAnswer: 'Perintah salat dan zakat sering disandingkan karena keduanya merupakan pilar utama keislaman. Salat adalah wujud kepatuhan hamba kepada Allah Swt. (Hablum minallah), sedangkan zakat adalah wujud kepedulian sosial kepada sesama manusia (Hablum minannas). Islam mengajarkan keseimbangan antara ibadah ritual dan ibadah sosial.'
  },
  {
    id: 2,
    question: 'Pak Ridwan memiliki sebuah keluarga yang terdiri dari Pak Ridwan, Istri, 3 Orang Anak, serta Ibu Kandung. Jika harga 1 kg beras di daerah tersebut adalah Rp15.000, hitunglah:\na) Berapa kg total beras zakat fitrah yang harus disiapkan?\nb) Berapa nominal uang jika Pak Ridwan membayar zakat fitrah dalam bentuk uang?',
    context: 'Soal Matematika Komputasi (Computational Thinking) Zakat Fitrah.',
    keyPoints: [
      'Jumlah jiwa = Pak Ridwan (1) + Istri (1) + Anak (3) + Ibu (1) = 6 orang.',
      'Total Beras = 6 × 2,5 kg = 15 kg beras.',
      'Total Uang = 15 kg × Rp15.000 = Rp225.000.'
    ],
    sampleAnswer: 'a) Total beras = 6 orang × 2,5 kg = 15 kg beras.\nb) Total uang = 15 kg × Rp15.000 = Rp225.000. Jadi Pak Ridwan dapat membayar 15 kg beras atau uang sejumlah Rp225.000.'
  },
  {
    id: 3,
    question: 'Pak Hendra memiliki tabungan sebesar Rp120.000.000 yang telah tersimpan selama 1 tahun penuh. Hitunglah berapa zakat mal yang harus dikeluarkan Pak Hendra, dan uraikan ke mana saja zakat mal tersebut boleh disalurkan!',
    context: 'Soal Zakat Mal & 8 Mustahik.',
    keyPoints: [
      'Zakat Mal = Rp120.000.000 × 2,5% = Rp3.000.000.',
      'Disalurkan hanya kepada 8 golongan mustahik (Fakir, Miskin, Amil, Mualaf, Riqab, Gharim, Fi Sabilillah, Ibnu Sabil).'
    ],
    sampleAnswer: 'Zakat mal Pak Hendra = Rp120.000.000 × 2,5% = Rp3.000.000 (atau Rp120.000.000 ÷ 40). Zakat tersebut wajib disalurkan kepada 8 golongan mustahik, seperti fakir, miskin, gharim, atau fi sabilillah.'
  },
  {
    id: 4,
    question: 'Bandingkan perbedaan antara Zakat, Infak, dan Sedekah berdasarkan aspek hukum, waktu, dan bentuk pemberiannya menggunakan analisismu sendiri!',
    context: 'Soal HOTS Komparasi Keagamaan.',
    keyPoints: [
      'Hukum: Zakat (Wajib), Infak (Sunah), Sedekah (Sunah).',
      'Waktu: Zakat (Ditentukan syariat), Infak & Sedekah (Kapan saja).',
      'Bentuk: Zakat (Harta tertentu), Infak (Harta/Materi), Sedekah (Harta maupun Nonharta seperti senyum/tenaga).'
    ],
    sampleAnswer: '1) Hukum: Zakat wajib, sedangkan infak dan sedekah sunah.\n2) Waktu: Zakat memiliki waktu terikat syariat (Idulfitri/haul), infak & sedekah kapan saja.\n3) Bentuk: Zakat berupa harta tertentu (2,5 kg/2,5%), infak berupa materi, sedangkan sedekah sangat luas mencakup materi dan nonmateri (tenaga, senyuman, ilmu).'
  },
  {
    id: 5,
    question: 'Seorang siswa kelas 6 bernama Budi memiliki uang saku yang terbatas. Budi ingin bersedekah tetapi bingung karena tidak punya banyak uang. Berikan 3 contoh tindakan nyata sedekah nonharta yang dapat dilakukan Budi di sekolah!',
    context: 'Soal HOTS Solutif Penerapan Sehari-hari.',
    keyPoints: [
      'Membantu menyapu/membersihkan ruang kelas.',
      'Mengajarkan atau membantu teman yang kesulitan memahami pelajaran.',
      'Tersenyum ramah, meminjamkan alat tulis, dan berkata sopan kepada guru dan teman.'
    ],
    sampleAnswer: 'Tiga contoh sedekah nonharta Budi di sekolah:\n1) Membantu menjelaskan materi pelajaran kepada teman yang belum paham.\n2) Meminjamkan pensil/penghapus kepada teman yang tidak membawa alat tulis.\n3) Menyapa guru dan teman dengan senyuman yang hangat serta tutur kata yang santun.'
  }
];
