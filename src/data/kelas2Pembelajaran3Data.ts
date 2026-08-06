export interface SlideData {
  id: number;
  badge: string;
  title: string;
  content: string;
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

export interface WordScrambleQuestion {
  id: number;
  clue: string;
  scrambledWord: string;
  correctWord: string;
  category: string;
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
export const SLIDES_KELAS2_P3: SlideData[] = [
  {
    id: 1,
    badge: 'Tujuan & Pengenalan Bab 3',
    title: 'Akhlak kepada Diri: Hidup Bersih & Sehat',
    content: 'Menjaga kebersihan dan kesehatan tubuh merupakan salah satu bentuk akhlak terpuji kepada diri sendiri serta merupakan bagian utama dari ajaran agama Islam. Anak yang bersih dan sehat akan lebih mudah belajar, beribadah, dan bermain dengan gembira!',
    bulletPoints: [
      'Menjelaskan pengertian akhlak kepada diri sendiri.',
      'Memahami pentingnya menjaga kebersihan sebagai ajaran Islam.',
      'Menerapkan pola hidup bersih di rumah, sekolah, dan lingkungan.',
      'Menerapkan pola hidup sehat dalam kehidupan sehari-hari.',
      'Membiasakan perilaku hidup bersih, sehat, disiplin, dan bertanggung jawab.'
    ],
    quiz: {
      question: 'Menjaga kebersihan dan kesehatan tubuh merupakan bentuk akhlak terpuji kepada...',
      options: ['Diri sendiri', 'Orang lain', 'Hewan peliharaan', 'Lingkungan saja'],
      correct: 0,
      explanation: 'Menjaga kebersihan dan kesehatan tubuh adalah bentuk akhlak terpuji kepada diri sendiri.'
    }
  },
  {
    id: 2,
    badge: 'Kisah Pengamatan Rafi',
    title: 'Ayo Mengamati Kebiasaan Pagi Rafi',
    content: 'Setiap pagi sebelum berangkat sekolah, Rafi mandi, menggosok gigi, memakai seragam bersih, dan sarapan bersama keluarga. Di sekolah, Rafi membuang sampah pada tempatnya, mencuci tangan sebelum makan, dan piket kelas. Kebiasaan ini membuat tubuhnya sehat dan semangat belajar.',
    keyTerms: [
      { term: 'Mandi & Sikat Gigi', definition: 'Membersihkan tubuh dan gigi dari kuman setiap pagi dan sore.' },
      { term: 'Sarapan Sehat', definition: 'Memberi energi pada tubuh sebelum beraktivitas di sekolah.' },
      { term: 'Cuci Tangan', definition: 'Mencuci tangan dengan sabun sebelum dan sesudah makan.' },
      { term: 'Piket Kelas', definition: 'Gotong royong menjaga kebersihan dan kenyamanan kelas.' }
    ],
    quiz: {
      question: 'Mengapa Rafi selalu mencuci tangan sebelum makan dan menjaga kebersihan kelas?',
      options: ['Karena dipaksa teman', 'Karena kebersihan adalah ajaran Islam & akhlak kepada diri', 'Agar dipuji dan diberi uang', 'Agar seragamnya cepat basah'],
      correct: 1,
      explanation: 'Kebersihan adalah bagian dari ajaran Islam dan wujud kasih sayang terhadap diri sendiri.'
    }
  },
  {
    id: 3,
    badge: 'Akhlak kepada Diri Sendiri',
    title: 'Pengertian Akhlak kepada Diri Sendiri',
    content: 'Akhlak kepada diri sendiri adalah sikap yang baik terhadap diri sendiri sesuai ajaran Allah Swt. dan Rasulullah SAW. Salah satu bentuk utamanya adalah menjaga kebersihan dan kesehatan tubuh secara disiplin dan teratur.',
    bulletPoints: [
      'Menjaga kebersihan tubuh, pakaian, dan makanan.',
      'Rasulullah SAW mengajarkan umat Islam agar selalu bersih, rapi, sehat, dan disiplin.',
      'Tubuh yang bersih dan sehat memudahkan kita beribadah, belajar, dan beraktivitas.'
    ],
    quiz: {
      question: 'Sikap baik terhadap diri sendiri sesuai perintah Allah dan Rasulullah dinamakan...',
      options: ['Akhlak kepada sesama', 'Akhlak kepada diri sendiri', 'Akhlak kepada alam', 'Sifat tercela'],
      correct: 1,
      explanation: 'Sikap baik kepada diri sendiri sesuai ajaran Islam disebut akhlak kepada diri sendiri.'
    }
  },
  {
    id: 4,
    badge: 'Pola Hidup Bersih',
    title: 'Pengertian & Cakupan Pola Hidup Bersih',
    content: 'Pola hidup bersih adalah kebiasaan menjaga kebersihan tubuh, pakaian, makanan, rumah, sekolah, dan lingkungan sekitar secara berkelanjutan. Allah Swt. sangat mencintai hamba-Nya yang mensucikan diri dan menjaga kebersihan.',
    bulletPoints: [
      'Kebersihan Tubuh (Mandi, keramas, sikat gigi, potong kuku).',
      'Kebersihan Pakaian (Pakaian bersih, seragam rapi, tidak jorok).',
      'Kebersihan Tempat (Rumah, kamar, ruang kelas, lingkungan taman).'
    ],
    quiz: {
      question: 'Allah Swt. sangat mencintai hamba yang selalu...',
      options: ['Menjaga kebersihan dan mensucikan diri', 'Membiarkan kuku panjang kotor', 'Membuang sampah di sungai', 'Malas ganti baju'],
      correct: 0,
      explanation: 'Allah Swt. mencintai orang-orang yang bertaubat dan menyukai orang-orang yang mensucikan diri (bersih).'
    }
  },
  {
    id: 5,
    badge: 'Kebersihan Tubuh & Pakaian',
    title: 'Menjaga Kebersihan Tubuh & Pakaian',
    content: 'Tubuh dan pakaian harus selalu bersih agar kita terhindar dari penyakit dan merasa nyaman saat beraktivitas:',
    tableData: [
      { col1: 'Kebersihan Tubuh', col2: 'Mandi 2x sehari, cuci tangan sebelum/sesudah makan, menggosok gigi pagi & sebelum tidur, memotong kuku teratur, keramas sampo.' },
      { col1: 'Kebersihan Pakaian', col2: 'Memakai pakaian bersih & rapi, mengganti pakaian kotor, melipat pakaian, memakai seragam sekolah yang bersih.' }
    ],
    quiz: {
      question: 'Berapa kali kita dianjurkan mandi dan kapan waktu menggosok gigi yang benar?',
      options: ['Mandi 1x seminggu & gosok gigi saat tidur', 'Mandi 2x sehari & menggosok gigi pagi serta malam sebelum tidur', 'Mandi saat hujan & tidak usah gosok gigi', 'Mandi 5x sehari & gosok gigi seminggu sekali'],
      correct: 1,
      explanation: 'Mandi 2 kali sehari dan menggosok gigi pagi serta malam menjaga tubuh tetap segar dan terhindar dari kuman.'
    }
  },
  {
    id: 6,
    badge: 'Kebersihan Rumah & Sekolah',
    title: 'Menjaga Kebersihan Rumah & Sekolah',
    content: 'Rumah yang bersih membuat keluarga sehat. Sekolah yang bersih membuat suasana belajar menjadi nyaman dan menyenangkan.',
    bulletPoints: [
      'Rumah: Menyapu dan mengepel lantai, membersihkan tempat tidur, buang sampah di tempatnya, membuka jendela agar udara segar masuk.',
      'Sekolah: Mengikuti piket kelas, menyapu ruang kelas, membersihkan meja belajar, merapikan kursi, dan menjaga taman sekolah.'
    ],
    quiz: {
      question: 'Membuka jendela kamar di pagi hari bermanfaat untuk...',
      options: ['Agar nyamuk masuk', 'Agar udara segar masuk dan pertukaran udara lancar', 'Membuat kamar gelap', 'Membuat kasur kotor'],
      correct: 1,
      explanation: 'Membuka jendela kamar membiarkan sinar matahari dan udara segar masuk sehingga kamar menjadi sehat.'
    }
  },
  {
    id: 7,
    badge: 'Kebersihan Lingkungan',
    title: 'Menjaga Kebersihan Lingkungan Sekitar',
    content: 'Lingkungan yang bersih membuat udara menjadi segar dan sehat bagi semua orang di sekitarnya. Kita wajib menjaga kelestarian alam dan kebersihan lingkungan.',
    bulletPoints: [
      'Tidak membuang sampah sembarangan di jalan atau selokan.',
      'Menanam pohon dan merawat tanaman di sekitar rumah.',
      'Membersihkan halaman dan ikut kegiatan kerja bakti RT/RW.',
      'Menjaga saluran air agar tetap lancar dan tidak tersumbat.'
    ],
    quiz: {
      question: 'Akibat buruk jika kita membuang sampah sembarangan ke dalam saluran air / selokan adalah...',
      options: ['Air menjadi makin jernih', 'Menyebabkan selokan tersumbat dan banjir saat hujan', 'Pohon tumbuh subur', 'Mendapat pujian'],
      correct: 1,
      explanation: 'Sampah yang dibuang ke selokan akan menyumbat aliran air dan dapat mengakibatkan banjir serta penyakit.'
    }
  },
  {
    id: 8,
    badge: 'Pola Hidup Sehat',
    title: 'Komponen Utama Pola Hidup Sehat',
    content: 'Selain bersih, seorang muslim harus hidup sehat agar memiliki tubuh yang kuat untuk mudah belajar, bekerja, dan khusyuk beribadah kepada Allah Swt.',
    keyTerms: [
      { term: '1. Makanan Bergizi', definition: 'Nasi, sayur, buah, ikan, telur, dan susu (4 sehat 5 sempurna).' },
      { term: '2. Air Putih Cukup', definition: 'Minum air putih setiap hari untuk memenuhi kebutuhan cairan tubuh.' },
      { term: '3. Berolahraga', definition: 'Berjalan kaki, berlari, senam pagi, bermain bola, atau bersepeda.' },
      { term: '4. Istirahat Cukup', definition: 'Tidur tepat waktu dan cukup agar tubuh segar saat bangun pagi.' },
      { term: '5. Rajin Beribadah', definition: 'Salat, berdoa, baca Al-Qur\'an, dan berzikir menenangkan hati.' }
    ],
    quiz: {
      question: 'Berikut ini manakah yang MERUPAKAN contoh makanan sehat bergizi?',
      options: ['Nasi, sayur, buah, ikan, telur, dan susu', 'Permen, chiki, dan es krim berlebihan', 'Makanan basi dan terbuka', 'Mie instan setiap hari tanpa sayur'],
      correct: 0,
      explanation: 'Makanan bergizi seimbang mengandung karbohidrat, protein, vitamin, dan mineral seperti nasi, sayur, buah, ikan, dan susu.'
    }
  },
  {
    id: 9,
    badge: 'Olahraga & Istirahat',
    title: 'Olahraga, Istirahat & Ibadah yang Teratur',
    content: 'Tubuh memerlukan olahraga rutin agar otot dan tulang kuat. Selain itu, istirahat dan ibadah menjaga keseimbangan fisik dan rohani.',
    bulletPoints: [
      'Olahraga Ceria: Bersepeda, senam pagi, berjalan kaki, dan bermain bola.',
      'Istirahat Cukup: Tidur malam tidak terlalu larut agar tidak mengantuk saat pelajaran di sekolah.',
      'Rajin Beribadah: Salat lima waktu, berdoa sebelum makan/tidur, membaca Al-Qur\'an menenangkan jiwa.'
    ],
    quiz: {
      question: 'Apa akibatnya jika seorang anak sering tidur terlalu larut malam?',
      options: ['Tubuh menjadi sangat segar', 'Badan terasa lelah, lesu, dan mengantuk saat belajar di kelas', 'Mata menjadi makin terang', 'Nilai pelajaran otomatis naik'],
      correct: 1,
      explanation: 'Tidur terlalu malam membuat kualitas tidur terganggu sehingga tubuh lelah dan sulit berkonsentrasi di sekolah.'
    }
  },
  {
    id: 10,
    badge: 'Manfaat Hidup Bersih & Sehat',
    title: 'Manfaat Besar Membiasakan Hidup Bersih & Sehat',
    content: 'Jika kita disiplin menjaga kebersihan dan kesehatan, kita akan memperoleh banyak manfaat berharga:',
    bulletPoints: [
      'Tubuh menjadi kuat dan terhindar dari kuman penyakit.',
      'Semangat belajar dan mudah konsentrasi menerima pelajaran.',
      'Nyaman bermain bersama teman-teman.',
      'Disukai oleh guru, orang tua, dan teman sekelas.',
      'Tumbuh menjadi anak yang disiplin dan bertanggung jawab.'
    ],
    quiz: {
      question: 'Manakah salah satu manfaat utama dari membiasakan hidup bersih dan sehat?',
      options: ['Mudah terserang flu', 'Tubuh sehat, terhindar penyakit, dan semangat belajar', 'Kelas menjadi kotor', 'Sering dimarahi guru'],
      correct: 1,
      explanation: 'Hidup bersih dan sehat menjaga tubuh tetap fit, terhindar dari penyakit, serta meningkatkan konsentrasi belajar.'
    }
  },
  {
    id: 11,
    badge: 'Kebiasaan Buruk Dihindari',
    title: 'Perilaku Buruk yang Harus Dihindari',
    content: 'Sebagai anak muslim terpuji, kita harus menjauhi kebiasaan-kebiasaan buruk yang dapat merusak kesehatan dan kebersihan:',
    bulletPoints: [
      'Tidak mandi dan malas mencuci tangan.',
      'Membuang sampah sembarangan di mana saja.',
      'Makan dan minum tanpa membaca doa terlebih dahulu.',
      'Terlalu banyak makan makanan/minuman manis dan permen.',
      'Tidur terlalu malam dan malas berolahraga.'
    ],
    quiz: {
      question: 'Mengapa kita harus menghentikan kebiasaan terlalu banyak makan makanan manis dan es permen?',
      options: ['Karena membuat gigi berlubang dan merusak kesehatan', 'Karena makanan manis membuat gembira', 'Karena dilarang membeli', 'Karena harganya mahal'],
      correct: 0,
      explanation: 'Makanan manis berlebihan dapat merusak gigi (gigi berlubang) dan memicu penyakit jika tidak diimbangi sikat gigi.'
    }
  },
  {
    id: 12,
    badge: 'Kisah Teladan Piket Jumat',
    title: 'Kisah Teladan: Kelas yang Bersih dan Sehat',
    content: 'Hari Jumat adalah jadwal piket kelas II. Beni, Siti, Hasan, dan Aisyah bekerja sama membersihkan ruang kelas sebelum pelajaran dimulai. Mereka menyapu lantai, menghapus papan tulis, merapikan meja, dan membuang sampah. Guru memuji mereka: "Anak-anak yang menjaga kebersihan berarti telah mengamalkan ajaran Islam!"',
    tableData: [
      { col1: 'Beni & Hasan', col2: 'Menyapu lantai & membuang sampah', col3: 'Tugas piket kerja sama' },
      { col1: 'Siti & Aisyah', col2: 'Menghapus papan tulis & merapikan meja', col3: 'Ruang kelas rapi & nyaman' },
      { col1: 'Pesan Guru', col2: '"Menjaga kebersihan = amalan ajaran Islam"', col3: 'Teladan akhlak terpuji' }
    ],
    quiz: {
      question: 'Pesan penting dari guru kepada siswa piket kelas II adalah...',
      options: ['Menjaga kebersihan adalah buang waktu', 'Menjaga kebersihan berarti telah mengamalkan ajaran Islam', 'Piket hanya tugas anak perempuan', 'Papan tulis tak perlu dihapus'],
      correct: 1,
      explanation: 'Guru menegaskan bahwa menjaga kebersihan merupakan pengamalan nyata dari ajaran agama Islam.'
    }
  },
  {
    id: 13,
    badge: 'Penerapan Praktis Harian',
    title: 'Penerapan Pola Bersih & Sehat di Rumah, Sekolah & Lingkungan',
    content: 'Sikap hidup bersih dan sehat dapat kita praktikkan setiap hari:',
    tableData: [
      { col1: 'Di Rumah', col2: 'Mandi pagi & sore, membantu orang tua, cuci tangan sebelum makan, gosok gigi sebelum tidur.' },
      { col1: 'Di Sekolah', col2: 'Mengikuti piket kelas, buang sampah di tempatnya, menjaga kebersihan toilet, cuci tangan.' },
      { col1: 'Di Lingkungan', col2: 'Ikut kerja bakti, menjaga taman, tidak mencoret dinding, merawat tanaman.' }
    ],
    quiz: {
      question: 'Manakah contoh penerapan hidup bersih di lingkungan sekolah?',
      options: ['Mencoret-coret dinding toilet', 'Membuang bungkus jajanan di kolam ikan', 'Mengikuti piket kelas dan membuang sampah pada tempatnya', 'Meninggalkan meja belajar berantakan'],
      correct: 2,
      explanation: 'Piket kelas dan membuang sampah di tempatnya adalah penerapan hidup bersih di sekolah.'
    }
  },
  {
    id: 14,
    badge: 'Hikmah & Tahukah Kamu?',
    title: 'Hikmah & Teladan Kebersihan Rasulullah SAW',
    content: 'Rasulullah SAW adalah teladan utama dalam kebersihan. Beliau selalu menjaga kebersihan tubuh, pakaian, rumah, dan lingkungan, serta mengajarkan agar makan makanan baik tanpa berlebihan.',
    bulletPoints: [
      'Dicintai oleh Allah Swt. dan memiliki tubuh yang kuat.',
      'Semangat belajar dan rajin dalam beribadah.',
      'Memiliki banyak teman dan disukai semua orang.',
      'Menjadi pribadi yang disiplin dan teladan bagi sesama.'
    ],
    quiz: {
      question: 'Bagaimanakah sikap Rasulullah SAW terhadap kebersihan dan pola makan?',
      options: ['Suka tempat kotor & makan berlebihan', 'Selalu bersih, rapi, dan makan makanan baik tanpa berlebihan', 'Tidak pernah mandi', 'Jarang cuci tangan'],
      correct: 1,
      explanation: 'Rasulullah SAW senantiasa menjaga kebersihan dan menganjurkan makan makanan bergizi dengan tidak berlebihan.'
    }
  },
  {
    id: 15,
    badge: 'Rangkuman & Refleksi',
    title: 'Rangkuman & Refleksi Bab 3',
    content: 'Akhlak kepada diri sendiri diwujudkan dengan menjaga kebersihan dan kesehatan tubuh, pakaian, rumah, sekolah, dan lingkungan. Hidup sehat dilakukan dengan makan bergizi, olahraga, tidur cukup, dan rajin beribadah!',
    tableData: [
      { col1: 'Kebersihan Tubuh & Baju', col2: 'Mandi 2x, gosok gigi, cuci tangan, baju bersih', col3: 'Tujuan: Terhindar kuman' },
      { col1: 'Kebersihan Tempat', col2: 'Sapu rumah, piket kelas, tidak buang sampah sembarangan', col3: 'Tujuan: Nyaman & sehat' },
      { col1: 'Pola Hidup Sehat', col2: 'Makan bergizi, minum air, olahraga, tidur cukup, ibadah', col3: 'Tujuan: Tubuh kuat & bertenaga' }
    ],
    quiz: {
      question: 'Anak yang menerapkan pola hidup bersih dan sehat akan tumbuh menjadi anak yang...',
      options: ['Sehat, disiplin, dan mudah belajar', 'Pemalas dan sering sakit', 'Penakut dan penyesal', 'Pemarah'],
      correct: 0,
      explanation: 'Kebiasaan bersih dan sehat membentuk karakter disiplin, tubuh bugar, dan semangat belajar.'
    }
  }
];

// ==========================================
// 2. PROYEK MURID (2 PjBL + 2 PBL)
// ==========================================
export const PROYEK_KELAS2_P3: ProyekData[] = [
  {
    id: 'pjbl-2-3-1',
    type: 'PjBL',
    category: 'Media Visual & Poster Kebersihan',
    title: 'Poster Mini & Jurnal Kebersihan Diri 7 Hari',
    description: 'Murid merancang poster gambar bertema "Kebersihan Sebagian Dari Iman" serta melengkapi tabel jurnal centang kebiasaan mandi, sikat gigi, dan cuci tangan selama 7 hari berturut-turut.',
    steps: [
      'Siapkan kertas HVS/karton A4, pensil warna, dan penggaris.',
      'Buat poster ajakan kebersihan dengan gambar tempat sampah dan tangan bersih.',
      'Buat tabel 7 kolom (Senin-Minggu) berisi centang 4 amalan: Mandi 2x, Sikat Gigi, Cuci Tangan, Ganti Pakaian.',
      'Lakukan centang harian bersama pembimbingan orang tua di rumah.',
      'Kumpulkan poster dan jurnal pada hari Senin berikutnya untuk dinilai guru.'
    ],
    output: 'Poster Himbauan Kebersihan & Jurnal Centang Amalan 7 Hari.',
    assessmentCriteria: [
      'Kreativitas gambar dan kerapian tulisan poster',
      'Kedisiplinan pengisian jurnal centang kebersihan 7 hari',
      'Kesesuaian isi amalan dengan pola hidup bersih',
      'Kerapian dan kebersihan lembar tugas'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pjbl-2-3-2',
    type: 'PjBL',
    category: 'Kreativitas Makanan Sehat',
    title: 'Piringku Sehat & Bergizi (Menu 4 Sehat 5 Sempurna)',
    description: 'Murid membuat kolase atau kliping gambar piring makanan sehat bergizi (nasi, sayur, buah, lauk pauk, susu) dari majalah/koran bekas atau gambar buatan sendiri.',
    steps: [
      'Siapkan piring plastik/kertas dan majalah/gambar makanan bergizi.',
      'Gunting gambar nasi, sayuran hijau, buah-buahan, ikan/telur, dan gelas susu.',
      'Tempelkan gambar pada piring sesuai kelompok gizi yang seimbang.',
      'Tuliskan nama-nama makanan dan manfaatnya bagi kesehatan tubuh.',
      'Presentasikan menu piring sehatmu di depan teman-teman kelas.'
    ],
    output: 'Piring Kolase Menu Makanan Bergizi Seimbang.',
    assessmentCriteria: [
      'Kelengkapan komponen makanan seimbang (karbohidrat, protein, vitamin, mineral)',
      'Kerapian guntingan dan tempelan',
      'Kelancaran menceritakan manfaat makanan di depan kelas',
      'Sikap menghargai makanan sehat'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pbl-2-3-3',
    type: 'PBL',
    category: 'Studi Kasus Lingkungan Kelas Kotor',
    title: 'Menangani Masalah Ruang Kelas Kotor & Meja Berantakan',
    description: 'Murid mendiskusikan studi kasus ruang kelas yang berantakan setelah jam istirahat (banyak bungkus makanan dan meja berdebu), lalu merumuskan solusi dan pembagian kerja piket secara adil.',
    steps: [
      'Simak skenario: Setelah jam istirahat, lantai kelas berserakan bungkus jajanan dan papan tulis penuh coretan.',
      'Diskusi kelompok: Mengapa kondisi kelas kotor membuat suasana belajar menjadi tidak nyaman?',
      'Identifikasi penyebab utama dan buat alur aturan "Zero Waste Kelas II".',
      'Simulasikan aksi cepat piket 3 menit (menyapu, menghapus papan, merapikan meja).',
      'Tuliskan kesepakatan komitmen bersama "Kelas Bersih, Belajar Jadi Asyik".'
    ],
    output: 'Peta Solusi Kebersihan Kelas & Poster Kesepakatan Bersama.',
    assessmentCriteria: [
      'Kemampuan menganalisis dampak lingkungan kotor terhadap kesehatan',
      'Kejelian merumuskan solusi praktis dan pembagian tugas piket',
      'Semangat gotong royong dan kerja sama tim',
      'Sikap tanggung jawab terhadap kebersihan kelas'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pbl-2-3-4',
    type: 'PBL',
    category: 'Studi Kasus Kesehatan & Makanan',
    title: 'Mencegah Sakit Perut & Gigi Berlubang pada Anak',
    description: 'Murid menganalisis masalah Budi yang sering mengalami sakit perut karena tidak cuci tangan sebelum makan dan sakit gigi karena sering makan permen tanpa sikat gigi malam.',
    steps: [
      'Baca kasus: Budi suka beli es dan permen manis, jarang sikat gigi sebelum tidur, serta lupa cuci tangan saat makan bakso.',
      'Analisis masalah: Mengapa Budi bisa mengalami sakit perut dan sakit gigi?',
      'Rumuskan langkah pencegahan berbasis pola hidup bersih dan sehat (Langkah Cuci Tangan 6 Tahap & Sikat Gigi).',
      'Peragakan gerakan cuci tangan pakai sabun dengan benar bersama kelompok.',
      'Buat pesan nasihat sahabat untuk Budi agar rajin menjaga kebersihan.'
    ],
    output: 'Laporan Solusi Pencegahan Sakit & Kartu Nasihat Hidup Sehat.',
    assessmentCriteria: [
      'Pemahaman hubungan antara kuman, makanan kotor, dan penyakit',
      'Penguasaan tata cara mencuci tangan pakai sabun yang benar',
      'Kejelasan penyampaian nasihat persahabatan',
      'Kepedulian terhadap kesehatan kawan'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  }
];

// ==========================================
// 3. GAMIFIKASI (TEKA TEKI SILANG / ACAK KATA HYBRID)
// ==========================================
export const WORD_SCRAMBLE_KELAS2_P3: WordScrambleQuestion[] = [
  {
    id: 1,
    clue: 'Kebiasaan membersihkan tubuh dengan air dan sabun sebanyak dua kali sehari',
    scrambledWord: 'M A I D N',
    correctWord: 'MANDI',
    category: 'Kebersihan Tubuh'
  },
  {
    id: 2,
    clue: 'Kegiatan membersihkan gigi menggunakan sikat dan pasta gigi pagi dan malam',
    scrambledWord: 'G O S K O   G G I I',
    correctWord: 'GOSOK GIGI',
    category: 'Kebersihan Mulut'
  },
  {
    id: 3,
    clue: 'Tindakan membersihkan jemari pakai sabun sebelum dan sesudah makan',
    scrambledWord: 'C U I C   T A N A G N',
    correctWord: 'CUCI TANGAN',
    category: 'Pencegahan Kuman'
  },
  {
    id: 4,
    clue: 'Tugas bersama murid di sekolah untuk menyapu dan membersihkan ruang kelas',
    scrambledWord: 'P I T E K',
    correctWord: 'PIKET',
    category: 'Kebersihan Sekolah'
  },
  {
    id: 5,
    clue: 'Minuman alami dan sehat yang sangat dibutuhkan tubuh setiap hari',
    scrambledWord: 'A I R   P U T I H',
    correctWord: 'AIR PUTIH',
    category: 'Pola Hidup Sehat'
  }
];

// ==========================================
// 4. EVALUASI PEMBELAJARAN (HOTS & CT FOR KELAS 2)
// ==========================================

// A. 10 PILIHAN GANDA
export const EVALUASI_PG_KELAS2_P3: EvaluasiPG[] = [
  {
    id: 1,
    question: 'Sikap yang baik terhadap diri sendiri sesuai ajaran Allah Swt. dan Rasulullah SAW dinamakan...',
    options: ['Akhlak kepada diri sendiri', 'Akhlak kepada hewan', 'Akhlak kepada tumbuhan', 'Akhlak kepada tetangga'],
    answer: 0,
    explanation: 'Akhlak kepada diri sendiri adalah sikap yang baik menjaga diri sesuai ajaran Islam.'
  },
  {
    id: 2,
    question: 'Berapa kalikah kita dianjurkan untuk mandi setiap hari agar tubuh segar dan bersih dari kuman?',
    options: ['1 kali seminggu', '2 kali sehari (pagi dan sore)', '5 kali seminggu', 'Hanya saat hari libur'],
    answer: 1,
    explanation: 'Mandi dianjurkan 2 kali sehari yaitu pagi sebelum sekolah dan sore hari.'
  },
  {
    id: 3,
    question: 'Waktu yang tepat untuk menggosok gigi sehari-hari adalah...',
    options: ['Saat tidur nyenyak', 'Pagi hari dan malam hari sebelum tidur', 'Hanya saat hari Minggu', 'Saat mandi sore saja'],
    answer: 1,
    explanation: 'Menggosok gigi dilakukan pagi hari setelah sarapan dan malam hari sebelum tidur.'
  },
  {
    id: 4,
    question: 'Tindakan yang harus dilakukan sebelum memegang dan memakan makanan adalah...',
    options: ['Mencuci tangan dengan air bersih dan sabun', 'Mengusap tangan ke celana', 'Langsung makan tanpa cuci tangan', 'Meniup makanan dengan keras'],
    answer: 0,
    explanation: 'Mencuci tangan pakai sabun mematikan kuman agar tidak masuk ke perut.'
  },
  {
    id: 5,
    question: 'Rumah yang bersih dan sehat ditandai dengan kebiasaan rutin yaitu...',
    options: ['Menumpuk sampah di bawah kasur', 'Menyapu, mengepel, dan membuka jendela agar udara segar masuk', 'Membiarkan pakaian kotor berserakan', 'Menutup jendela selamanya'],
    answer: 1,
    explanation: 'Menyapu, mengepel, dan membuka jendela kamar membuat sirkulasi udara rumah menjadi sehat.'
  },
  {
    id: 6,
    question: 'Kegiatan gotong royong murid di sekolah untuk menjaga ruang kelas tetap bersih dinamakan...',
    options: ['Kerja kelompok', 'Piket kelas', 'Upacara bendera', 'Pramuka'],
    answer: 1,
    explanation: 'Piket kelas adalah pembagian tugas menjaga kebersihan dan kerapian ruang kelas.'
  },
  {
    id: 7,
    question: 'Berikut ini kelompok makanan sehat dan bergizi seimbang adalah...',
    options: ['Permen, es krim, chiki, soda', 'Nasi, sayuran, buah-buahan, ikan, telur, dan susu', 'Makanan basi dan terbuka', 'Gorengan minyak hitam setiap hari'],
    answer: 1,
    explanation: 'Makanan sehat mengandung zat gizi seimbang seperti karbohidrat, protein, vitamin, dan susu.'
  },
  {
    id: 8,
    question: 'Akibat yang akan terjadi jika seorang anak malas mandi dan sering membiarkan kuku panjang kotor adalah...',
    options: ['Tubuhnya menjadi harum', 'Mudah terserang penyakit gatal dan gatal-gatal pada kulit', 'Disukai teman-teman', 'Gigi menjadi putih'],
    answer: 1,
    explanation: 'Badan kotor dan kuku hitam menjadi sarang kuman yang memicu penyakit kulit dan gatal.'
  },
  {
    id: 9,
    question: 'Dalam kisah piket Jumat kelas II, pesan penting dari guru tentang kebersihan adalah...',
    options: ['Menjaga kebersihan berarti mengamalkan ajaran Islam', 'Kebersihan hanya tanggung jawab guru', 'Papan tulis tak perlu dibersihkan', 'Sampah boleh dibuang di bawah meja'],
    answer: 0,
    explanation: 'Guru menegaskan menjaga kebersihan adalah wujud nyata pengamalan ajaran agama Islam.'
  },
  {
    id: 10,
    question: 'Manusia mulia yang menjadi teladan terbaik dalam pola hidup bersih, sehat, dan disiplin adalah...',
    options: ['Nabi Muhammad SAW', 'Firaun', 'Qarun', 'Abu Lahab'],
    answer: 0,
    explanation: 'Rasulullah SAW senantiasa menjaga kebersihan tubuh, pakaian, dan lingkungan.'
  }
];

// B. 3 PILIHAN GANDA KOMPLEKS (MULTI SELECT)
export const EVALUASI_PGK_KELAS2_P3: EvaluasiPGK[] = [
  {
    id: 1,
    question: 'Manakah dari perilaku berikut yang MERUPAKAN contoh pengamalan kebersihan tubuh dan pakaian? (Pilih lebih dari satu)',
    options: [
      'Mandi dua kali sehari dan mencuci rambut pakai sampo',
      'Memakai seragam sekolah yang bersih dan rapi',
      'Membiarkan kuku panjang kotor dan kusam',
      'Menggosok gigi pagi dan malam sebelum tidur'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Mandi, keramas, seragam rapi, dan menggosok gigi adalah contoh menjaga kebersihan tubuh dan pakaian.'
  },
  {
    id: 2,
    question: 'Manakah kegiatan yang MERUPAKAN penerapan hidup sehat dalam kehidupan sehari-hari? (Pilih lebih dari satu)',
    options: [
      'Makan makanan bergizi dan minum air putih yang cukup',
      'Tidur terlalu larut malam sambil bermain game',
      'Berolahraga secara teratur seperti bersepeda dan senam',
      'Tidur tepat waktu dan tidak tidur terlalu larut'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Makan bergizi, minum air cukup, olahraga teratur, dan tidur cukup adalah bagian pola hidup sehat.'
  },
  {
    id: 3,
    question: 'Manakah kebiasaan buruk yang HARUS DIHINDARI karena dapat merusak kesehatan tubuh? (Pilih lebih dari satu)',
    options: [
      'Membuang sampah sembarangan di jalan/selokan',
      'Mencuci tangan pakai sabun sebelum makan',
      'Terlalu banyak makan makanan manis dan es permen',
      'Malas berolahraga dan jarang bergerak'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Buang sampah sembarangan, jajan manis berlebihan, dan malas olahraga adalah kebiasaan buruk merusak kesehatan.'
  }
];

// C. 3 MENJODOHKAN
export const EVALUASI_MENJODOHKAN_KELAS2_P3: EvaluasiMenjodohkan[] = [
  {
    id: 1,
    premise: 'Mandi 2x sehari & Sikat Gigi',
    matchTarget: 'Menjaga Kebersihan Tubuh',
    options: ['Menjaga Kebersihan Tubuh', 'Menjaga Kebersihan Sekolah', 'Pola Hidup Sehat', 'Pola Hidup Bersih Lingkungan']
  },
  {
    id: 2,
    premise: 'Piket Kelas & Menyerat Papan Tulis',
    matchTarget: 'Menjaga Kebersihan Sekolah',
    options: ['Menjaga Kebersihan Tubuh', 'Menjaga Kebersihan Sekolah', 'Pola Hidup Sehat', 'Pola Hidup Bersih Lingkungan']
  },
  {
    id: 3,
    premise: 'Makan Bergizi & Olahraga Teratur',
    matchTarget: 'Pola Hidup Sehat',
    options: ['Menjaga Kebersihan Tubuh', 'Menjaga Kebersihan Sekolah', 'Pola Hidup Sehat', 'Pola Hidup Bersih Lingkungan']
  }
];

// D. 4 BENAR / SALAH (+ ALASAN ISIAN)
export const EVALUASI_BENAR_SALAH_KELAS2_P3: EvaluasiBenarSalah[] = [
  {
    id: 1,
    statement: 'Menjaga kebersihan dan kesehatan tubuh merupakan bentuk ibadah dan akhlak terpuji kepada diri sendiri.',
    isCorrect: true,
    explanation: 'BENAR. Agama Islam sangat mencintai kebersihan dan memerintahkan umatnya menjaga tubuh tetap sehat.'
  },
  {
    id: 2,
    statement: 'Membuang sampah ke dalam selokan sekolah diperbolehkan asal tidak ada guru yang melihat.',
    isCorrect: false,
    explanation: 'SALAH. Membuang sampah di selokan menyumbat saluran air dan merupakan perbuatan tidak jujur serta merusak lingkungan.'
  },
  {
    id: 3,
    statement: 'Membuka jendela kamar pada pagi hari membuat kuman berkembang biak dengan cepat.',
    isCorrect: false,
    explanation: 'SALAH. Membuka jendela kamar justru memasukkan udara segar dan sinar matahari yang membunuh kuman.'
  },
  {
    id: 4,
    statement: 'Dalam kisah piket Jumat, Beni, Siti, Hasan, dan Aisyah bekerja sama sehingga kelas menjadi bersih dan nyaman.',
    isCorrect: true,
    explanation: 'BENAR. Bekerja sama piket membuat tugas ringan dan menciptakan suasana kelas yang menyenangkan untuk belajar.'
  }
];

// E. 5 SOAL URAIAN (HOTS & COMPUTATIONAL THINKING)
export const EVALUASI_URAIAN_KELAS2_P3: EvaluasiUraian[] = [
  {
    id: 1,
    question: 'Jelaskan mengapa agama Islam sangat menekankan pentingnya menjaga kebersihan dan kesehatan tubuh sebagai akhlak kepada diri sendiri!',
    context: 'Analisis Ajaran Kebersihan (HOTS - Analysis)',
    sampleAnswer: 'Karena kebersihan adalah bagian dari iman dan bentuk rasa syukur atas nikmat tubuh pemberian Allah Swt. Tubuh yang bersih dan sehat membuat kita lebih khusyuk beribadah, mudah belajar, dan terhindar dari penyakit.'
  },
  {
    id: 2,
    question: 'Jika kamu melihat teman sekelasmu membuang bungkus plastik makanan di bawah meja belajar, bagaimana sikap terpuji dan kalimat nasihat yang akan kamu sampaikan kepadanya?',
    context: 'Pemecahan Masalah Lingkungan Kelas (HOTS - Problem Solving)',
    sampleAnswer: 'Sikap terpuji: Mengingatkannya dengan sopan dan lembut tanpa memarahinya.\nKalimat nasihat: "Teman, mari kita buang sampah ini ke tempat sampah agar kelas kita tetap bersih, sehat, dan nyaman untuk belajar bersama."'
  },
  {
    id: 3,
    question: 'Tuliskan alur urutan langkah-langkah mencuci tangan pakai sabun yang benar sebelum makan agar kuman tidak masuk ke dalam tubuh!',
    context: 'Alur Langkah Cuci Tangan (Computational Thinking - Algorithm)',
    sampleAnswer: '1. Basahi tangan dengan air mengalir.\n2. Tuangkan sabun secukupnya.\n3. Gosok telapak tangan, punggung tangan, dan sela-sela jari.\n4. Bersihkan sela kuku dan ibu jari.\n5. Bilas dengan air bersih mengalir hingga busa hilang.\n6. Keringkan tangan dengan lap bersih.'
  },
  {
    id: 4,
    question: 'Mengapa seorang anak yang sering tidur terlalu larut malam akan merasa kesulitan dan tidak fokus saat mengikuti pelajaran di sekolah pada pagi hari?',
    context: 'Sebab Akibat Pola Tidur (HOTS - Evaluation)',
    sampleAnswer: 'Karena tidur terlalu larut malam membuat durasi istirahat otak dan tubuh berkurang. Tubuh menjadi lelah, mata mengantuk, dan otak kurang energi sehingga konsentrasi belajar menjadi terganggu.'
  },
  {
    id: 5,
    question: 'Tuliskan 3 contoh kegiatan pola hidup bersih dan 3 contoh kegiatan pola hidup sehat yang dapat kamu lakukan setiap hari di rumah bersama keluarga!',
    context: 'Penerapan Sehari-hari (HOTS - Application)',
    sampleAnswer: 'Contoh Pola Hidup Bersih:\n1. Mandi 2x sehari & menggosok gigi.\n2. Menyapu lantai kamar dan merapikan tempat tidur.\n3. Membuang sampah di tong sampah rumah.\n\nContoh Pola Hidup Sehat:\n1. Makan nasi, sayur, buah, dan minum susu.\n2. Minum air putih yang cukup.\n3. Berolahraga senam pagi/bersepeda & tidur tepat waktu.'
  }
];
