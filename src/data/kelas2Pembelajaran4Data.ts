export interface SlideData {
  id: number;
  badge: string;
  title: string;
  content: string;
  imageUrl?: string;
  imageCaption?: string;
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
  id: string;
  type: 'PjBL' | 'PBL';
  category: string;
  title: string;
  description: string;
  steps: string[];
  output: string;
  assessmentCriteria: string[];
  policyNote: string;
}

export interface ShalatAdventureQuestion {
  id: number;
  scenario: string;
  options: {
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  hint: string;
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
// 1. SLIDES DATA MATERI (15 SLIDES)
// ==========================================
export const SLIDES_KELAS2_P4: SlideData[] = [
  {
    id: 1,
    badge: 'Tujuan Pembelajaran Bab 4',
    title: 'Menerapkan Ketentuan & Mempraktikkan Shalat Fardu',
    content: 'Shalat fardu merupakan ibadah utama dan tiang agama bagi setiap umat Islam. Melalui bab ini, kita belajar memahami ketentuan shalat fardu, menghafal lima waktu shalat, mempraktikkan gerakan dan bacaannya dengan benar dan tertib, serta membiasakan shalat tepat waktu.',
    bulletPoints: [
      'Menjelaskan pengertian shalat fardu secara tepat.',
      'Menyebutkan lima waktu shalat fardu beserta jumlah rakaatnya.',
      'Menjelaskan syarat dan ketentuan pelaksanaan shalat fardu.',
      'Mempraktikkan bacaan dan urutan gerakan shalat dengan tumakninah.',
      'Membiasakan shalat tepat waktu dan menumbuhkan sikap disiplin & khusyuk.'
    ],
    quiz: {
      question: 'Ibadah wajib utama yang merupakan tiang agama bagi setiap muslim adalah...',
      options: ['Shalat fardu', 'Sedekah', 'Puasa sunah', 'Ziarah'],
      correct: 0,
      explanation: 'Shalat fardu adalah ibadah wajib utama dan tiang agama Islam.'
    }
  },
  {
    id: 2,
    badge: 'Kisah Pengamati Ali',
    title: 'Ayo Mengamati: Ali & Ayah Salat di Masjid',
    content: 'Setiap hari, Ali selalu diajak ayahnya pergi ke masjid untuk melaksanakan salat Magrib berjamaah. Sebelum salat, Ali berwudu terlebih dahulu. Setelah itu, ia berdiri rapi mengikuti imam, membaca bacaan salat dengan pelan dan tertib. Ayah Ali berkata: "Salat adalah kewajiban setiap muslim. Anak yang rajin salat akan dicintai Allah Swt."',
    keyTerms: [
      { term: 'Berwudu', definition: 'Menyucikan diri dari hadas kecil dengan air bersih sebelum salat.' },
      { term: 'Salat Berjamaah', definition: 'Salat bersama-sama dipimpin oleh seorang imam.' },
      { term: 'Dicintai Allah', definition: 'Balasan mulia bagi anak muslim yang rajin dan taat salat.' }
    ],
    quiz: {
      question: 'Mengapa Ali berwudu terlebih dahulu sebelum melaksanakan salat di masjid?',
      options: ['Agar bajunya basah', 'Untuk menyucikan diri dari hadas kecil sebagai syarat sah salat', 'Agar terlambat masuk masjid', 'Karena diperintah teman'],
      correct: 1,
      explanation: 'Wudu dilakukan untuk menyucikan diri sebagai syarat sah sebelum menghadap Allah Swt.'
    }
  },
  {
    id: 3,
    badge: 'Pengertian Shalat Fardu',
    title: 'Shalat Fardu Sebagai Tiang Agama',
    content: 'Shalat fardu adalah ibadah wajib yang dilaksanakan oleh setiap muslim sebagai bentuk ketaatan kepada Allah Swt. Shalat dilakukan dengan serangkaian gerakan dan bacaan tertentu, dimulai dengan takbiratul ihram dan diakhiri dengan salam. Shalat merupakan tiang agama Islam.',
    bulletPoints: [
      'Hukum shalat fardu adalah Wajib bagi setiap muslim.',
      'Dimulai dengan gerakan Takbiratul Ihram dan diakhiri dengan Salam.',
      'Shalat adalah tiang agama; menegakkan salat berarti menegakkan agama Islam.',
      'Orang yang rajin salat menunjukkan rasa syukur dan cinta kepada Allah Swt.'
    ],
    quiz: {
      question: 'Gerakan pertama untuk memulai shalat fardu dinamakan...',
      options: ['Rukuk', 'Takbiratul Ihram', 'Salam', 'Sujud'],
      correct: 1,
      explanation: 'Salat dimulai dengan gerakan dan bacaan Takbiratul Ihram (Allāhu Akbar).'
    }
  },
  {
    id: 4,
    badge: 'Lima Waktu Shalat Fardu',
    title: 'Jadwal & Jumlah Rakaat Shalat Fardu',
    content: 'Setiap muslim wajib melaksanakan lima waktu shalat fardu dalam sehari semalam dengan total 17 rakaat:',
    tableData: [
      { col1: '1. Subuh', col2: '2 Rakaat', col3: 'Saat terbit fajar hingga sebelum matahari terbit' },
      { col1: '2. Zuhur', col2: '4 Rakaat', col3: 'Setelah matahari tergelincir (siang hari)' },
      { col1: '3. Asar', col2: '4 Rakaat', col3: 'Pada sore hari' },
      { col1: '4. Magrib', col2: '3 Rakaat', col3: 'Sesudah matahari terbenam (petang)' },
      { col1: '5. Isya', col2: '4 Rakaat', col3: 'Pada malam hari' }
    ],
    quiz: {
      question: 'Berapakah jumlah rakaat shalat Subuh dan kapan waktu pelaksanaannya?',
      options: ['3 rakaat saat malam', '2 rakaat saat terbit fajar hingga sebelum matahari terbit', '4 rakaat saat siang', '2 rakaat saat sore'],
      correct: 1,
      explanation: 'Shalat Subuh berjumlah 2 rakaat dilaksanakan saat terbit fajar hingga sebelum matahari terbit.'
    }
  },
  {
    id: 5,
    badge: 'Syarat Ketentuan Shalat',
    title: 'Ketentuan Sebelum Melaksanakan Salat',
    content: 'Sebelum melaksanakan ibadah salat fardu, ada 5 ketentuan penting yang wajib dipenuhi agar salat kita sah di sisi Allah Swt.:',
    keyTerms: [
      { term: '1. Berwudu', definition: 'Menyucikan diri menggunakan air bersih mengalir.' },
      { term: '2. Menutup Aurat', definition: 'Memakai pakaian bersih, suci, dan menutup batas aurat.' },
      { term: '3. Menghadap Kiblat', definition: 'Menghadap ke arah Ka\'bah di Kota Makkah.' },
      { term: '4. Masuk Waktu Salat', definition: 'Salat fardu dilakukan setelah azan / masuk waktunya.' },
      { term: '5. Tempat Salat Bersih', definition: 'Sajadah dan tempat salat bebas dari kotoran/najis.' }
    ],
    quiz: {
      question: 'Ke manakah arah kiblat umat Islam saat melaksanakan salat?',
      options: ['Ke timur', 'Ke arah Ka\'bah di Kota Makkah', 'Ke arah gunung', 'Ke mana saja bebas'],
      correct: 1,
      explanation: 'Kiblat seluruh umat Islam di dunia saat salat adalah menghadap Ka\'bah di Makkah.'
    }
  },
  {
    id: 6,
    badge: 'Urutan Gerakan Salat (1-5)',
    title: 'Gerakan Salat Bagian 1 (Awal)',
    content: 'Gerakan salat dilakukan dengan tertib, tenang, dan tidak tergesa-gesa (tumakninah). Urutan awal gerakan salat:',
    imageUrl: '/src/assets/images/gerakan_sholat_takbir_1786033007979.jpg',
    imageCaption: 'Ilustrasi Gerakan Takbiratul Ihram & Standar Berdiri Tegak Saat Shalat',
    bulletPoints: [
      '1. Berdiri Tegak: Menghadap kiblat dengan niat salat.',
      '2. Takbiratul Ihram: Mengangkat kedua tangan sejajar telinga/bahu sambil mengucap Allāhu Akbar.',
      '3. Bersedekap: Meletakkan tangan kanan di atas tangan kiri di dada/perut.',
      '4. Rukuk: Membongkokkan badan hingga punggung lurus dan memegang lutut.',
      '5. I\'tidal: Bangun dari rukuk berdiri tegak kembali.'
    ],
    quiz: {
      question: 'Gerakan membongkokkan badan hingga punggung lurus dan memegang lutut disebut...',
      options: ['I\'tidal', 'Rukuk', 'Sujud', 'Bersedekap'],
      correct: 1,
      explanation: 'Membongkokkan badan dengan punggung lurus dan memegang kedua lutut adalah gerakan Rukuk.'
    }
  },
  {
    id: 7,
    badge: 'Urutan Gerakan Salat (6-11)',
    title: 'Gerakan Salat Bagian 2 (Akhir)',
    content: 'Melanjutkan urutan gerakan salat hingga selesai:',
    imageUrl: '/src/assets/images/gerakan_sholat_sujud_1786033031073.jpg',
    imageCaption: 'Ilustrasi Gerakan Sujud & Posisi Duduk Dalam Shalat Fardu',
    bulletPoints: [
      '6. Sujud Pertama: Meletakkan dahi, hidung, kedua telapak tangan, lutut, dan ujung jari kaki di lantai.',
      '7. Duduk di Antara Dua Sujud: Duduk tenang di antara sujud pertama dan kedua.',
      '8. Sujud Kedua: Melakukan sujud kembali.',
      '9. Berdiri untuk Rakaat Berikutnya / Tasyahud.',
      '10. Tasyahud Akhir: Duduk membaca tasyahud dan salawat Nabi.',
      '11. Salam: Menolehkan wajah ke kanan dan ke kiri.'
    ],
    quiz: {
      question: 'Gerakan penutup salat fardu dengan menolehkan wajah ke kanan dan kiri dinamakan...',
      options: ['Tasyahud', 'Salam', 'Sujud', 'Takbir'],
      correct: 1,
      explanation: 'Salam dilakukan di akhir salat dengan menoleh ke kanan dan ke kiri.'
    }
  },
  {
    id: 8,
    badge: 'Bacaan Salat: Takbir & Al-Fatihah',
    title: 'Bacaan Takbiratul Ihram & Surah Al-Fatihah',
    content: 'Bacaan salat dibaca secara perlahan, fasih, dan khusyuk:',
    tableData: [
      { col1: 'Takbiratul Ihram', col2: 'Allāhu Akbar (اللهُ أَكْبَرُ)', col3: 'Artinya: Allah Maha Besar' },
      { col1: 'Surah Al-Fatihah', col2: 'Wajib dibaca pada setiap rakaat salat', col3: 'Syarat rukun bacaan salat' },
      { col1: 'Surah Pendek', col2: 'Al-Ikhlas, Al-Falaq, An-Nas setelah Al-Fatihah', col3: 'Dibaca pada rakaat 1 dan 2' }
    ],
    quiz: {
      question: 'Apakah hukum membaca Surah Al-Fatihah pada setiap rakaat salat fardu?',
      options: ['Wajib (Rukun salat)', 'Sunah biasa', 'Boleh ditinggalkan', 'Hanya untuk imam'],
      correct: 0,
      explanation: 'Membaca Surah Al-Fatihah adalah rukun wajib dalam setiap rakaat salat.'
    }
  },
  {
    id: 9,
    badge: 'Bacaan Rukuk & I\'tidal',
    title: 'Lafal & Arti Bacaan Rukuk dan I\'tidal',
    content: 'Setiap gerakan salat disertai bacaan dzikir memuji keagungan Allah Swt.:',
    keyTerms: [
      { 
        term: 'Bacaan Rukuk', 
        definition: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ (Subḥāna rabbiyal \'aẓīm) — Artinya: "Mahasuci Tuhanku Yang Maha Agung."' 
      },
      { 
        term: 'Bacaan I\'tidal', 
        definition: 'سَمِعَ اللهُ لِمَنْ حَمِدَهُ (Sami\'allāhu liman ḥamidah) — Artinya: "Allah mendengar orang yang memuji-Nya."' 
      }
    ],
    quiz: {
      question: 'Apakah arti dari bacaan Rukuk "Subḥāna rabbiyal \'aẓīm"?',
      options: ['Mahasuci Tuhanku Yang Maha Tinggi', 'Mahasuci Tuhanku Yang Maha Agung', 'Allah Maha Besar', 'Segala puji bagi Allah'],
      correct: 1,
      explanation: 'Arti bacaan Rukuk adalah "Mahasuci Tuhanku Yang Maha Agung."'
    }
  },
  {
    id: 10,
    badge: 'Bacaan Sujud & Salam',
    title: 'Lafal & Arti Bacaan Sujud dan Salam',
    content: 'Memuji Allah saat sujud dan mendoakan keselamatan saat salam:',
    keyTerms: [
      { 
        term: 'Bacaan Sujud', 
        definition: 'سُبْحَانَ رَبِّيَ الْأَعْلَى (Subḥāna rabbiyal a\'lā) — Artinya: "Mahasuci Tuhanku Yang Maha Tinggi."' 
      },
      { 
        term: 'Bacaan Salam', 
        definition: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ (Assalāmu \'alaikum wa raḥmatullāh) — Artinya: "Semoga keselamatan dan rahmat Allah tercurah kepadamu."' 
      }
    ],
    quiz: {
      question: 'Apakah bacaan dzikir yang diucapkan saat melakukan Sujud?',
      options: ['Subḥāna rabbiyal \'aẓīm', 'Subḥāna rabbiyal a\'lā', 'Allāhu Akbar', 'Sami\'allāhu liman ḥamidah'],
      correct: 1,
      explanation: 'Saat sujud membaca "Subḥāna rabbiyal a\'lā" (Mahasuci Tuhanku Yang Maha Tinggi).'
    }
  },
  {
    id: 11,
    badge: 'Hikmah Melaksanakan Shalat',
    title: 'Keutamaan & Hikmah Rajin Shalat Fardu',
    content: 'Shalat fardu memberikan banyak manfaat mulia bagi rohani dan jasmani seorang muslim:',
    bulletPoints: [
      'Mendekatkan diri dan meningkatkan ketaatan kepada Allah Swt.',
      'Melatih disiplin waktu karena salat ditentukan waktunya.',
      'Menumbuhkan rasa syukur dan membuat hati menjadi tenang & damai.',
      'Menghindarkan diri dari perbuatan keji dan buruk (fahsya & munkar).',
      'Melatih kebersihan melalui wudu dan mempererat persaudaraan saat salat berjamaah.'
    ],
    quiz: {
      question: 'Salah satu hikmah penting dari membiasakan salat fardu tepat waktu adalah...',
      options: ['Melatih disiplin waktu dan menenangkan hati', 'Membuat cepat lapar', 'Membuat malas belajar', 'Menjadikan kita boros'],
      correct: 0,
      explanation: 'Shalat tepat waktu melatih kedisiplinan dan menghadirkan kedamaian dalam hati.'
    }
  },
  {
    id: 12,
    badge: 'Kisah Teladan Rina',
    title: 'Kisah Teladan: Rina Rajin Salat',
    content: 'Rina adalah siswi kelas II SD. Setiap kali azan berkumandang, ia segera berwudu dan salat bersama ibunya. Suatu hari saat asyik bermain, azan Zuhur terdengar. Rina langsung berhenti bermain. Temannya bertanya: "Mengapa kamu berhenti bermain?" Rina menjawab: "Allah memanggil kita untuk salat. Bermain bisa dilanjutkan setelah salat." Guru memuji Rina karena selalu mengutamakan salat.',
    tableData: [
      { col1: 'Sikap Rina', col2: 'Langsung menghentikan permainan saat azan terdengar', col3: 'Mengutamakan panggilan Allah' },
      { col1: 'Nasihat Rina', col2: '"Allah memanggil kita salat, bermain bisa dilanjutkan nanti"', col3: 'Pribadi disiplin & taat' },
      { col1: 'Pujian Guru', col2: 'Guru bangga karena Rina rajin dan menjadi contoh teladan', col3: 'Anak salehah dicintai Allah' }
    ],
    quiz: {
      question: 'Apa yang dilakukan Rina ketika mendengar azan berkumandang saat sedang asyik bermain?',
      options: ['Pura-pura tidak mendengar', 'Segera menghentikan permainan dan berwudu untuk salat', 'Meneruskan bermain sampai sore', 'Marah kepada temannya'],
      correct: 1,
      explanation: 'Rina segera menghentikan permainannya untuk berwudu dan melaksanakan salat.'
    }
  },
  {
    id: 13,
    badge: 'Penerapan Sehari-hari',
    title: 'Penerapan Salat dalam Kehidupan Sehari-hari',
    content: 'Cara membiasakan ibadah salat dalam kehidupan kita sehari-hari:',
    bulletPoints: [
      'Membiasakan salat lima waktu tepat waktu tanpa menunda-nunda.',
      'Berwudu dengan sempurna dan memakai pakaian salat yang bersih dan suci.',
      'Salat berjamaah bersama keluarga di rumah atau di masjid.',
      'Membaca doa dan berzikir dengan tenang setelah selesai salat.',
      'Menjaga kekhusyukan dan menghafalkan bacaan salat sedikit demi sedikit.'
    ],
    quiz: {
      question: 'Bagaimana cara kita menjaga kekhusyukan saat melaksanakan salat?',
      options: ['Tengok kanan kiri dan bercanda dengan teman', 'Fokus, tenang, dan tidak tergesa-gesa membaca bacaan salat', 'Sambil mengobrol', 'Sambil bergerak-gerak mainan'],
      correct: 1,
      explanation: 'Kekhusyukan dijaga dengan fokus, tenang (tumakninah), dan tidak tergesa-gesa.'
    }
  },
  {
    id: 14,
    badge: 'Tahukah Kamu?',
    title: 'Teladan Rasulullah SAW dalam Menjaga Salat',
    content: 'Rasulullah SAW sangat menjaga salat lima waktu. Beliau selalu melaksanakan salat dengan khusyuk dan mengajarkan keluarga serta sahabat agar tidak pernah meninggalkan salat. Sebagai umat Nabi Muhammad SAW, kita harus membiasakan salat sejak kecil agar menjadi anak yang saleh dan salehah.',
    bulletPoints: [
      'Nabi Muhammad SAW menjadikan salat sebagai penyejuk hati.',
      'Beliau tidak pernah meninggalkan salat dalam keadaan apa pun.',
      'Membiasakan salat sejak usia dini melatih ketakwaan sepanjang hayat.'
    ],
    quiz: {
      question: 'Mengapa kita dianjurkan membiasakan salat sejak usia dini?',
      options: ['Agar menjadi kebiasaan baik dan tumbuh menjadi anak saleh/salehah', 'Agar mendapat hadiah uang', 'Karena dipaksa tetangga', 'Agar cepat besar'],
      correct: 0,
      explanation: 'Membiasakan salat sejak kecil membentuk karakter saleh/salehah dan ketakwaan hingga dewasa.'
    }
  },
  {
    id: 15,
    badge: 'Rangkuman & Refleksi',
    title: 'Rangkuman & Refleksi Bab 4',
    content: 'Shalat fardu adalah ibadah wajib 5 kali sehari (Subuh, Zuhur, Asar, Magrib, Isya) yang menjadi tiang agama Islam. Sebelum salat kita wajib berwudu, menutup aurat, menghadap kiblat, dan memastikan tempat serta pakaian bersih dari najis.',
    tableData: [
      { col1: 'Shalat 5 Waktu', col2: 'Subuh (2), Zuhur (4), Asar (4), Magrib (3), Isya (4)', col3: 'Total 17 Rakaat' },
      { col1: 'Ketentuan Sah', col2: 'Wudu, tutup aurat, hadap kiblat, masuk waktu, suci najis', col3: 'Syarat wajib' },
      { col1: 'Gerakan & Bacaan', col2: 'Tertib dari Takbiratul Ihram hingga Salam', col3: 'Dilakukan tumakninah' }
    ],
    quiz: {
      question: 'Berapakah total rakaat dari kelima shalat fardu dalam sehari semalam?',
      options: ['10 rakaat', '17 rakaat', '20 rakaat', '12 rakaat'],
      correct: 1,
      explanation: 'Total rakaat shalat fardu sehari semalam adalah 17 rakaat (2+4+4+3+4).'
    }
  }
];

// ==========================================
// 2. PROYEK MURID (2 PjBL + 2 PBL)
// ==========================================
export const PROYEK_KELAS2_P4: ProyekData[] = [
  {
    id: 'pjbl-2-4-1',
    type: 'PjBL',
    category: 'Jurnal & Ceklis Amalan',
    title: 'Jurnal Ceklis Shalat Fardu 5 Waktu & Wudu 7 Hari',
    description: 'Murid merancang dan mengisi tabel ceklis shalat fardu 5 waktu (Subuh, Zuhur, Asar, Magrib, Isya) serta kerapian wudu selama 7 hari bersama bimbingan orang tua di rumah.',
    steps: [
      'Siapkan lembar kertas karton/HVS A4 dan pensil warna.',
      'Buat tabel 7 kolom (Senin - Minggu) dengan 5 baris nama shalat fardu.',
      'Beri tanda centang (✓) setiap kali selesai melaksanakan salat tepat waktu.',
      'Minta paraf/tanda tangan orang tua di bagian bawah lembar ceklis.',
      'Kumpulkan jurnal amalan salat pada hari Senin depan untuk dinilai guru.'
    ],
    output: 'Lembar Jurnal Ceklis Salat 5 Waktu & Paraf Orang Tua 7 Hari.',
    assessmentCriteria: [
      'Kedisiplinan pengisian ceklis salat harian',
      'Kerapian dan kerapian lembar jurnal',
      'Kejujuran dalam melaporkan ibadah salat',
      'Keterlibatan pendampingan orang tua'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pjbl-2-4-2',
    type: 'PjBL',
    category: 'Media Visual & Poster Salat',
    title: 'Poster Bagian Gerakan & Bacaan Salat Sederhana',
    description: 'Murid membuat poster karya visual berisi gambar/urutan gerakan salat (Takbir, Rukuk, Sujud, Salam) beserta lafal bacaan singkatnya.',
    steps: [
      'Gunakan kertas gambar A4 dan alat mewarnai.',
      'Gambarlah 4 gerakan utama salat: Takbiratul Ihram, Rukuk, Sujud, dan Salam.',
      'Tuliskan lafal bacaan singkat di bawah tiap gambar (misal: "Allāhu Akbar", "Subḥāna rabbiyal \'aẓīm").',
      'Hias poster dengan bingkai warna-warni yang menarik.',
      'Tampilkan dan ceritakan postermu di depan kelas.'
    ],
    output: 'Poster Kreatif Urutan Gerakan & Bacaan Salat.',
    assessmentCriteria: [
      'Kebenaran urutan gerakan dan ketepatan penulisan lafal bacaan',
      'Kreativitas gambar dan kerapian warna',
      'Keberanian menceritakan gerakan di depan teman',
      'Kebersihan hasil karya'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pbl-2-4-3',
    type: 'PBL',
    category: 'Studi Kasus Kedisiplinan Salat',
    title: 'Menangani Masalah Asyik Bermain Saat Azan Berkumandang',
    description: 'Murid menganalisis studi kasus Roni yang enggan menghentikan game di HP saat azan Asar terdengar, lalu merumuskan solusi dan komitmen mengutamakan salat seperti Rina.',
    steps: [
      'Simak kasus: Roni sedang seru bermain game di HP. Ketika azan Asar terdengar, ia menunda salat hingga hampir masuk Magrib.',
      'Diskusi kelompok: Mengapa menunda-nunda salat fardu dapat mengurangi pahala dan melatih sifat pemalas?',
      'Bandingkan sikap Roni dengan sikap Rina dalam kisah teladan.',
      'Rumuskan 3 langkah cara Roni agar bisa langsung berhenti main saat azan.',
      'Tuliskan slogan komitmen: "Dengar Azan, Stop Bermain, Segera Salat!"'
    ],
    output: 'Lembar Solusi Kasus Salat & Kartu Slogan Komitmen.',
    assessmentCriteria: [
      'Kemampuan menganalisis akibat menunda-nunda salat fardu',
      'Kejelian memberikan solusi praktis mengutamakan salat',
      'Sikap menghargai panggilan azan',
      'Kejelasan penyampaian hasil diskusi'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pbl-2-4-4',
    type: 'PBL',
    category: 'Studi Kasus Kesucian Tempat & Pakaian',
    title: 'Menjaga Kesucian Pakaian & Tempat Salat dari Najis',
    description: 'Murid memecahkan masalah ketika sarung/mukenah atau sajadah terkena kotoran/najis kucing sebelum salat berjamaah dimulai.',
    steps: [
      'Baca kasus: Saat hendak salat Magrib di rumah, Doni melihat sajadahnya terkena bekas kotoran kucing.',
      'Analisis masalah: Apakah Doni boleh langsung salat di atas sajadah tersebut? Mengapa?',
      'Tentukan langkah yang benar: Mengganti sajadah bersih/membersihkan najis dengan air mengalir.',
      'Simulasikan pemeriksaan kerapian pakaian dan tempat salat sebelum takbir.',
      'Tuliskan daftar periksa "3 Bersih Sebelum Salat" (Bersih Badan, Baju, Tempat).'
    ],
    output: 'Peta Langkah Pembersihan Najis & Ceklis 3 Bersih Salat.',
    assessmentCriteria: [
      'Pemahaman syarat sah salat terkait kesucian dari najis',
      'Ketepatan menentukan tindakan pembersihan tempat salat',
      'Kerapian susunan alur pemecahan masalah',
      'Kepedulian terhadap kebersihan ibadah'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  }
];

// ==========================================
// 3. GAMIFIKASI (PETUALANGAN SHALAT FARDU INTERAKTIF)
// ==========================================
export const SHALAT_ADVENTURE_KELAS2_P4: ShalatAdventureQuestion[] = [
  {
    id: 1,
    scenario: 'Azan Subuh berkumandang di pagi hari. Langit mulai agak terang fajar. Berapakah jumlah rakaat shalat Subuh yang harus dikerjakan oleh Ali?',
    options: [
      { text: '2 Rakaat', isCorrect: true, feedback: 'Tepat sekali! Shalat Subuh berjumlah 2 rakaat dilaksanakan saat fajar terbit.' },
      { text: '4 Rakaat', isCorrect: false, feedback: 'Kurang tepat. 4 rakaat adalah untuk shalat Zuhur, Asar, dan Isya.' },
      { text: '3 Rakaat', isCorrect: false, feedback: 'Belum tepat. 3 rakaat adalah untuk shalat Magrib.' }
    ],
    hint: 'Shalat Subuh adalah shalat fardu dengan rakaat paling sedikit yaitu 2 rakaat.'
  },
  {
    id: 2,
    scenario: 'Sebelum berdiri untuk takbiratul ihram, apakah hal pertama yang wajib dilakukan Ali untuk menyucikan diri dari hadas kecil?',
    options: [
      { text: 'Langsung memakai sepatu', isCorrect: false, feedback: 'Salah, sepatu tidak menyucikan dari hadas kecil.' },
      { text: 'Berwudu dengan air bersih mengalir', isCorrect: true, feedback: 'Hebat! Wudu adalah syarat sah utama menyucikan diri sebelum salat.' },
      { text: 'Mencuci baju saja', isCorrect: false, feedback: 'Kurang tepat, bersuci dari hadas kecil harus dengan wudu.' }
    ],
    hint: 'Ibadah menyucikan anggota tubuh dengan air sebelum salat dinamakan wudu.'
  },
  {
    id: 3,
    scenario: 'Saat rukuk, badan membongkok lurus dan memegang kedua lutut. Apakah lafal bacaan dzikir yang dibaca saat Rukuk?',
    options: [
      { text: 'Subḥāna rabbiyal \'aẓīm', isCorrect: true, feedback: 'Benar! Artinya "Mahasuci Tuhanku Yang Maha Agung."' },
      { text: 'Subḥāna rabbiyal a\'lā', isCorrect: false, feedback: 'Kurang tepat, "Subḥāna rabbiyal a\'lā" dibaca saat Sujud.' },
      { text: 'Sami\'allāhu liman ḥamidah', isCorrect: false, feedback: 'Salah, bacaan tersebut diucapkan saat I\'tidal.' }
    ],
    hint: 'Rukuk mengagungkan Allah yang Maha Agung (\'Aẓīm).'
  },
  {
    id: 4,
    scenario: 'Matahari telah terbenam di ufuk barat. Suara azan berkumandang menandakan masuk waktu shalat apakah ini?',
    options: [
      { text: 'Shalat Zuhur', isCorrect: false, feedback: 'Salah, Zuhur adalah saat siang hari setelah matahari tergelincir.' },
      { text: 'Shalat Magrib (3 Rakaat)', isCorrect: true, feedback: 'Luar biasa! Shalat Magrib 3 rakaat dikerjakan sesudah matahari terbenam.' },
      { text: 'Shalat Subuh', isCorrect: false, feedback: 'Kurang tepat, Subuh dikerjakan pagi hari saat terbit fajar.' }
    ],
    hint: 'Shalat 3 rakaat sesudah matahari terbenam adalah shalat Magrib.'
  },
  {
    id: 5,
    scenario: 'Di akhir shalat, Ali menolehkan wajahnya ke kanan dan ke kiri sambil mengucap doa keselamatan. Gerakan penutup ini dinamakan...',
    options: [
      { text: 'Takbiratul Ihram', isCorrect: false, feedback: 'Salah, Takbiratul Ihram adalah gerakan pembuka di awal salat.' },
      { text: 'Salam ("Assalāmu \'alaikum wa raḥmatullāh")', isCorrect: true, feedback: 'Sempurna! Salam adalah gerakan dan bacaan penutup salat.' },
      { text: 'Sujud Sahwi', isCorrect: false, feedback: 'Kurang tepat.' }
    ],
    hint: 'Gerakan menoleh ke kanan dan kiri mendoakan keselamatan dinamakan Salam.'
  }
];

// ==========================================
// 4. EVALUASI PEMBELAJARAN (HOTS & CT FOR KELAS 2)
// ==========================================

// A. 10 PILIHAN GANDA
export const EVALUASI_PG_KELAS2_P4: EvaluasiPG[] = [
  {
    id: 1,
    question: 'Shalat fardu merupakan ibadah wajib yang menjadi tiang agama Islam. Ibadah salat diawali dengan gerakan... dan diakhiri dengan...',
    options: [
      'Takbiratul ihram - salam',
      'Rukuk - sujud',
      'Niat - duduk di antara dua sujud',
      'Salam - takbiratul ihram'
    ],
    answer: 0,
    explanation: 'Shalat diawali dengan gerakan Takbiratul Ihram dan diakhiri dengan Salam.'
  },
  {
    id: 2,
    question: 'Berapakah jumlah rakaat shalat fardu yang wajib dilaksanakan pada sore hari (Asar)?',
    options: ['2 rakaat', '3 rakaat', '4 rakaat', '5 rakaat'],
    answer: 2,
    explanation: 'Shalat Asar dilaksanakan pada sore hari sebanyak 4 rakaat.'
  },
  {
    id: 3,
    question: 'Sebelum melaksanakan salat, Ali menyucikan dirinya dari hadas kecil. Ibadah menyucikan diri tersebut dinamakan...',
    options: ['Mandi biasa', 'Berwudu', 'Tayamum tanpa air', 'Cuci tangan saja'],
    answer: 1,
    explanation: 'Menyucikan diri sebelum salat dilakukan dengan berwudu.'
  },
  {
    id: 4,
    question: 'Seluruh umat Islam di dunia ketika melaksanakan salat fardu wajib menghadap ke arah...',
    options: ['Matahari terbit', 'Ka\'bah di Kota Makkah (Kiblat)', 'Kutub utara', 'Arah barat daya'],
    answer: 1,
    explanation: 'Kiblat salat umat Islam adalah menghadap Ka\'bah di Makkah.'
  },
  {
    id: 5,
    question: 'Gerakan membongkokkan badan hingga punggung lurus dan kedua tangan memegang lutut dinamakan...',
    options: ['I\'tidal', 'Rukuk', 'Sujud', 'Bersedekap'],
    answer: 1,
    explanation: 'Membongkokkan badan dengan lurus dan memegang lutut adalah gerakan Rukuk.'
  },
  {
    id: 6,
    question: 'Lafal bacaan dzikir "Subḥāna rabbiyal \'aẓīm" diucapkan saat seorang muslim melakukan gerakan...',
    options: ['Sujud', 'Rukuk', 'Takbiratul Ihram', 'Salam'],
    answer: 1,
    explanation: '"Subḥāna rabbiyal \'aẓīm" adalah bacaan saat Rukuk.'
  },
  {
    id: 7,
    question: 'Apakah bacaan yang wajib dibaca pada setiap rakaat dalam salat fardu?',
    options: ['Surah Al-Ikhlas', 'Surah Al-Fatihah', 'Surah An-Nas', 'Ayat Kursi'],
    answer: 1,
    explanation: 'Surah Al-Fatihah wajib dibaca pada setiap rakaat salat (rukun salat).'
  },
  {
    id: 8,
    question: 'Dalam kisah teladan, apa yang dilakukan Rina ketika mendengar azan berkumandang saat sedang asyik bermain?',
    options: [
      'Meneruskan main sampai malam',
      'Segera menghentikan permainan dan berwudu untuk salat',
      'Pura-pura tidur',
      'Menyuruh temannya salat sendirian'
    ],
    answer: 1,
    explanation: 'Rina segera menghentikan permainannya untuk berwudu dan melaksanakan salat.'
  },
  {
    id: 9,
    question: 'Manakah salah satu hikmah utama dari membiasakan salat fardu tepat waktu?',
    options: [
      'Melatih disiplin waktu dan menenangkan hati',
      'Membuat tubuh menjadi lemas',
      'Membuat kita ketinggalan jajan',
      'Menjadikan kita pemalas'
    ],
    answer: 0,
    explanation: 'Salat tepat waktu melatih kedisiplinan dan membuat hati menjadi tenang.'
  },
  {
    id: 10,
    question: 'Arti dari bacaan Sujud "Subḥāna rabbiyal a\'lā" adalah...',
    options: [
      'Allah Maha Besar',
      'Mahasuci Tuhanku Yang Maha Tinggi',
      'Mahasuci Tuhanku Yang Maha Agung',
      'Semoga keselamatan tercurah kepadamu'
    ],
    answer: 1,
    explanation: 'Arti "Subḥāna rabbiyal a\'lā" adalah "Mahasuci Tuhanku Yang Maha Tinggi."'
  }
];

// B. 3 PILIHAN GANDA KOMPLEKS (MULTI SELECT)
export const EVALUASI_PGK_KELAS2_P4: EvaluasiPGK[] = [
  {
    id: 1,
    question: 'Manakah di antara shalat fardu berikut yang memiliki jumlah rakaat sebanyak 4 RAKAAT? (Pilih lebih dari satu)',
    options: [
      'Shalat Subuh',
      'Shalat Zuhur',
      'Shalat Asar',
      'Shalat Isya'
    ],
    correctAnswers: [1, 2, 3],
    explanation: 'Shalat Zuhur, Asar, dan Isya masing-masing berjumlah 4 rakaat.'
  },
  {
    id: 2,
    question: 'Manakah dari hal berikut yang MERUPAKAN ketentuan/syarat sebelum melaksanakan salat fardu? (Pilih lebih dari satu)',
    options: [
      'Berwudu untuk menyucikan diri',
      'Menutup aurat dengan pakaian bersih dan suci',
      'Menghadap ke arah Ka\'bah (Kiblat)',
      'Salat sambil makan jajanan'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Wudu, menutup aurat, dan menghadap kiblat adalah syarat ketentuan sah salat.'
  },
  {
    id: 3,
    question: 'Manakah yang TERMASUK hikmah dan manfaat melaksanakan salat fardu tepat waktu? (Pilih lebih dari satu)',
    options: [
      'Mendekatkan diri kepada Allah Swt.',
      'Melatih disiplin waktu',
      'Membuat hati menjadi tenang dan damai',
      'Membuat kita menjadi anak pemalas'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Mendekatkan diri kepada Allah, disiplin waktu, dan ketenangan hati adalah hikmah salat.'
  }
];

// C. 3 MENJODOHKAN
export const EVALUASI_MENJODOHKAN_KELAS2_P4: EvaluasiMenjodohkan[] = [
  {
    id: 1,
    premise: 'Shalat Subuh (Terbit Fajar)',
    matchTarget: '2 Rakaat',
    options: ['2 Rakaat', '3 Rakaat', '4 Rakaat', '5 Rakaat']
  },
  {
    id: 2,
    premise: 'Shalat Magrib (Terbenam Matahari)',
    matchTarget: '3 Rakaat',
    options: ['2 Rakaat', '3 Rakaat', '4 Rakaat', '5 Rakaat']
  },
  {
    id: 3,
    premise: 'Shalat Zuhur, Asar, & Isya',
    matchTarget: '4 Rakaat',
    options: ['2 Rakaat', '3 Rakaat', '4 Rakaat', '5 Rakaat']
  }
];

// D. 4 BENAR / SALAH (+ ALASAN ISIAN)
export const EVALUASI_BENAR_SALAH_KELAS2_P4: EvaluasiBenarSalah[] = [
  {
    id: 1,
    statement: 'Shalat fardu adalah ibadah wajib bagi setiap muslim yang merupakan tiang agama Islam.',
    isCorrect: true,
    explanation: 'BENAR. Shalat fardu hukumnya wajib bagi setiap muslim dan menjadi tiang agama.'
  },
  {
    id: 2,
    statement: 'Diperbolehkan melaksanakan salat fardu tanpa berwudu terlebih dahulu jika tubuh merasa bersih.',
    isCorrect: false,
    explanation: 'SALAH. Wudu adalah syarat sah utama salat menyucikan dari hadas kecil, tidak boleh ditinggalkan.'
  },
  {
    id: 3,
    statement: 'Membaca Surah Al-Fatihah wajib dilakukan pada setiap rakaat dalam salat fardu.',
    isCorrect: true,
    explanation: 'BENAR. Surah Al-Fatihah merupakan rukun bacaan wajib pada setiap rakaat salat.'
  },
  {
    id: 4,
    statement: 'Dalam kisah teladan, Rina menunda salat Zuhur karena ingin menghabiskan permainannya terlebih dahulu.',
    isCorrect: false,
    explanation: 'SALAH. Rina langsung menghentikan permainannya saat azan terdengar untuk berwudu dan salat.'
  }
];

// E. 5 SOAL URAIAN (HOTS & COMPUTATIONAL THINKING)
export const EVALUASI_URAIAN_KELAS2_P4: EvaluasiUraian[] = [
  {
    id: 1,
    question: 'Jelaskan mengapa shalat fardu disebut sebagai "tiang agama" Islam dan apa akibatnya jika seorang muslim meninggalkan salat!',
    context: 'Analisis Kedudukan Salat (HOTS - Analysis)',
    sampleAnswer: 'Shalat disebut tiang agama karena shalat adalah penopang utama keislaman seseorang. Jika seorang muslim rajin salat, agamanya kokoh. Sebaliknya jika meninggalkan salat, ibarat bangunan yang roboh karena tiangnya runtuh.'
  },
  {
    id: 2,
    question: 'Jika kamu sedang asyik bermain sepeda bersama teman-teman di lapangan lalu mendengar azan Asar berkumandang, bagaimanakah sikap terpuji yang sebaiknya kamu lakukan?',
    context: 'Penyelesaian Masalah Panggilan Salat (HOTS - Problem Solving)',
    sampleAnswer: 'Sikap terpuji: Segera menghentikan permainan sepeda, mengajak teman-teman berwudu bersama, lalu pergi ke masjid/rumah untuk melaksanakan salat Asar tepat waktu. Bermain dapat dilanjutkan setelah salat selesai.'
  },
  {
    id: 3,
    question: 'Tuliskan alur urutan 6 gerakan salat secara berurutan mulai dari gerakan pertama hingga rukuk!',
    context: 'Alur Urutan Gerakan Salat (Computational Thinking - Algorithm)',
    sampleAnswer: '1. Berdiri tegak menghadap kiblat.\n2. Takbiratul Ihram (mengangkat tangan mengucap Allāhu Akbar).\n3. Bersedekap (tangan kanan di atas tangan kiri).\n4. Membaca Al-Fatihah & surah pendek.\n5. Rukuk (membongkokkan badan lurus).\n6. I\'tidal (bangun berdiri tegak kembali).'
  },
  {
    id: 4,
    question: 'Mengapa sebelum melaksanakan salat fardu kita wajib memastikan pakaian dan tempat salat bersih dari najis?',
    context: 'Syarat Ketentuan Sah Salat (HOTS - Evaluation)',
    sampleAnswer: 'Karena salat adalah ibadah suci menghadap Allah Swt. Kesucian badan, pakaian, dan tempat dari najis merupakan syarat sah salat agar ibadah kita diterima oleh Allah Swt.'
  },
  {
    id: 5,
    question: 'Tuliskan daftar 5 waktu shalat fardu lengkap dengan jumlah rakaatnya masing-masing!',
    context: 'Klasifikasi Waktu Salat (HOTS - Application)',
    sampleAnswer: '1. Shalat Subuh = 2 Rakaat\n2. Shalat Zuhur = 4 Rakaat\n3. Shalat Asar = 4 Rakaat\n4. Shalat Magrib = 3 Rakaat\n5. Shalat Isya = 4 Rakaat\nTotal = 17 Rakaat sehari semalam.'
  }
];

// F. PANDUAN VISUAL GERAKAN SHOLAT INTERAKTIF (11 GERAKAN)
export interface GerakanSholatItem {
  step: number;
  title: string;
  arabicName: string;
  description: string;
  latinReading?: string;
  arabicReading?: string;
  meaning?: string;
  imageUrl: string;
  tips: string;
}

export const GERAKAN_SHOLAT_GALLERY: GerakanSholatItem[] = [
  {
    step: 1,
    title: 'Berdiri Tegak (Kiyam)',
    arabicName: 'قِيَامٌ',
    description: 'Berdiri tegak lurus menghadap Kiblat (Ka\'bah) dengan niat ikhlas di dalam hati karena Allah Swt. Pandangan mata mengarah ke tempat sujud.',
    imageUrl: '/src/assets/images/gerakan_sholat_takbir_1786033007979.jpg',
    tips: 'Posisi kaki sedikit renggang selebar bahu dan tidak terlalu lebar.'
  },
  {
    step: 2,
    title: 'Takbiratul Ihram',
    arabicName: 'تَكْبِيرَةُ الإِحْرَامِ',
    description: 'Mengangkat kedua tangan sejajar dengan daun telinga atau bahu dengan telapak tangan menghadap Kiblat sambil mengucapkan lafal Takbir.',
    arabicReading: 'اللهُ أَكْبَرُ',
    latinReading: 'Allāhu Akbar',
    meaning: 'Allah Maha Besar',
    imageUrl: '/src/assets/images/gerakan_sholat_takbir_1786033007979.jpg',
    tips: 'Jari-jari tangan dibuka santai, tidak terlalu rapat dan tidak terlalu renggang.'
  },
  {
    step: 3,
    title: 'Bersedekap',
    arabicName: 'تَكْتِيفٌ',
    description: 'Meletakkan tangan kanan di atas pergelangan tangan kiri di dada atau di atas pusar. Membaca do\'a Iftitah, Surah Al-Fatihah, dan Surah pendek Al-Qur\'an.',
    arabicReading: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ ...',
    latinReading: 'Membaca Surah Al-Fatihah dan Surah Pilihan',
    meaning: 'Sikap khusyuk dan penuh kepasrahan menghadap Sang Pencipta.',
    imageUrl: '/src/assets/images/gerakan_sholat_takbir_1786033007979.jpg',
    tips: 'Mata tetap tenang menatap tempat sujud.'
  },
  {
    step: 4,
    title: 'Rukuk (Membongkok)',
    arabicName: 'رُكُوعٌ',
    description: 'Membongkokkan badan hingga posisi punggung dan kepala sejajar lurus datar. Kedua telapak tangan memegang lutut dengan jari-jari direnggangkan.',
    arabicReading: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ',
    latinReading: 'Subḥāna rabbiyal \'aẓīmi wa biḥamdih (3x)',
    meaning: 'Mahasuci Tuhanku Yang Maha Agung dan pujian bagi-Nya.',
    imageUrl: '/src/assets/images/gerakan_sholat_takbir_1786033007979.jpg',
    tips: 'Punggung lurus seperti permukaan meja hingga jika ditaruh cangkir air tidak tumpah.'
  },
  {
    step: 5,
    title: 'I\'tidal (Bangun dari Rukuk)',
    arabicName: 'إِعْتِدَالٌ',
    description: 'Bangun berdiri tegak kembali dari rukuk sambil mengangkat kedua tangan sejajar telinga/bahu.',
    arabicReading: 'سَمِعَ اللهُ لِمَنْ حَمِدَهُ - رَبَّنَا وَلَكَ الْحَمْدُ',
    latinReading: 'Sami\'allāhu liman ḥamidah - Rabbanā wa lakal-ḥamd',
    meaning: 'Allah mendengar orang yang memuji-Nya. Ya Tuhan kami, bagi-Mu segala puji.',
    imageUrl: '/src/assets/images/gerakan_sholat_takbir_1786033007979.jpg',
    tips: 'Berdiri tegak tenang sejenak (tumakninah) sebelum bersujud.'
  },
  {
    step: 6,
    title: 'Sujud Pertama',
    arabicName: 'سُجُودٌ',
    description: 'Meneplakkan 7 anggota sujud ke lantai: dahi & hidung, kedua telapak tangan, kedua lutut, dan ujung jari-jari kedua kaki.',
    arabicReading: 'سُبْحَانَ رَبِّيَ الأَعْلَى وَبِحَمْدِهِ',
    latinReading: 'Subḥāna rabbiyal a\'lā wa biḥamdih (3x)',
    meaning: 'Mahasuci Tuhanku Yang Mahatinggi dan pujian bagi-Nya.',
    imageUrl: '/src/assets/images/gerakan_sholat_sujud_1786033031073.jpg',
    tips: 'Dahi dan hidung menempel sempurna di tempat sujud.'
  },
  {
    step: 7,
    title: 'Duduk di Antara Dua Sujud',
    arabicName: 'جَلْسَةٌ بَيْنَ السَّجْدَتَيْنِ',
    description: 'Bangun dari sujud pertama lalu duduk iftirasy (duduk di atas telapak kaki kiri dan kaki kanan ditegakkan). Kedua tangan memegang paha/lutut.',
    arabicReading: 'رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي',
    latinReading: 'Rabbighfir lī warḥamnī wajburnī warfa\'nī warzuqnī wahdinī wa \'āfinī wa\'fu \'annī',
    meaning: 'Ya Allah ampunilah aku, rahmati aku, cukupkanlah aku, tinggikanlah derajatku, berilah aku rezeki, petunjuk, kesehatan, dan ampunan.',
    imageUrl: '/src/assets/images/gerakan_sholat_sujud_1786033031073.jpg',
    tips: 'Membaca doa permohonan ampunan dengan tenang.'
  },
  {
    step: 8,
    title: 'Sujud Kedua',
    arabicName: 'السُّجُودُ الثَّانِي',
    description: 'Kembali bersujud dengan tata cara dan bacaan yang sama persis seperti sujud pertama.',
    arabicReading: 'سُبْحَانَ رَبِّيَ الأَعْلَى وَبِحَمْدِهِ',
    latinReading: 'Subḥāna rabbiyal a\'lā wa biḥamdih (3x)',
    meaning: 'Mahasuci Tuhanku Yang Mahatinggi dan pujian bagi-Nya.',
    imageUrl: '/src/assets/images/gerakan_sholat_sujud_1786033031073.jpg',
    tips: 'Tetap tumakninah dan tidak terburu-buru.'
  },
  {
    step: 9,
    title: 'Duduk Tasyahud Awal / Akhir',
    arabicName: 'التَّشَهُّدُ',
    description: 'Duduk tenang untuk membaca bacaan tasyahud dan salawat Nabi. Pada tasyahud akhir duduk secara tawarruk (kaki kiri dimasukkan di bawah kaki kanan).',
    arabicReading: 'التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ ...',
    latinReading: 'Attaḥiyyātul mubārakātus-ṣalawātut-ṭayyibātu lillāh ...',
    meaning: 'Segala penghormatan, keberkahan, kebahagiaan, dan kebaikan adalah milik Allah.',
    imageUrl: '/src/assets/images/gerakan_sholat_sujud_1786033031073.jpg',
    tips: 'Telunjuk tangan kanan diacungkan saat mengucapkan lafal syahadat.'
  },
  {
    step: 10,
    title: 'Salam Pertama & Kedua',
    arabicName: 'السَّلاَمُ',
    description: 'Menolehkan wajah ke arah kanan hingga pipi kanan terlihat dari belakang, kemudian menoleh ke arah kiri sambil mengucap salam.',
    arabicReading: 'السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ',
    latinReading: 'Assalāmu \'alaikum wa raḥmatullāh',
    meaning: 'Semoga keselamatan dan rahmat Allah tercurah kepada kalian.',
    imageUrl: '/src/assets/images/gerakan_sholat_takbir_1786033007979.jpg',
    tips: 'Menoleh ke kanan adalah rukun wajib penutup salat.'
  }
];

