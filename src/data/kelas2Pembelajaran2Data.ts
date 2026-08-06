export interface SlideData {
  id: number;
  badge: string;
  title: string;
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

export interface GamifikasiMission {
  id: number;
  title: string;
  khalifahOrTopic: string;
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
// 1. SLIDES DATA MATERI (15 SLIDES)
// ==========================================
export const SLIDES_KELAS2_P2: SlideData[] = [
  {
    id: 1,
    badge: 'Tujuan & Pengenalan Bab 2',
    title: 'Mengenal dan Meneladani Asmaul Husna',
    content: 'Allah Swt. memiliki nama-nama yang sangat indah dan mulia yang disebut Asmaul Husna. Melalui Asmaul Husna, kita mengenal sifat-sifat kesempurnaan Allah Swt. Semakin mengenal Allah Swt., semakin bertambah pula keimanan dan rasa cinta kita kepada-Nya.',
    bulletPoints: [
      'Menjelaskan pengertian Asmaul Husna.',
      'Menyebutkan makna Ar-Raḥmān, Ar-Raḥīm, As-Salām, dan Al-Mu\'min.',
      'Menunjukkan contoh perilaku yang mencerminkan Asmaul Husna.',
      'Meneladani sifat-sifat mulia Allah Swt. sebagai anak muslim.',
      'Membiasakan sikap kasih sayang, cinta damai, jujur, dan saling melindungi.'
    ],
    quiz: {
      question: 'Nama-nama Allah Swt. yang indah dan mulia disebut...',
      options: ['Asmaul Husna', 'Kalimat Thayyi-bah', 'Ayat Kursi', 'Rukun Iman'],
      correct: 0,
      explanation: 'Asmaul Husna adalah nama-nama Allah Swt. yang paling indah dan mulia.'
    }
  },
  {
    id: 2,
    badge: 'Pengertian Asmaul Husna',
    title: 'Pengertian & Jumlah Asmaul Husna',
    content: 'Asmaul Husna berarti nama-nama Allah Swt. yang paling indah dan mulia. Jumlah Asmaul Husna ada 99 nama. Setiap nama menunjukkan sifat kesempurnaan Allah Swt. Sebagai muslim, kita dianjurkan mengenal, menghafal, memahami maknanya, serta meneladaninya.',
    arabicText: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا',
    translation: 'Dan Allah memiliki Asmaul Husna (nama-nama yang terbaik), maka bermohonlah kepada-Nya dengan menyebut Asmaul Husna itu. (Q.S. Al-A\'raf: 180)',
    quiz: {
      question: 'Berapakah jumlah Asmaul Husna yang dimiliki Allah Swt.?',
      options: ['25', '66', '99', '114'],
      correct: 2,
      explanation: 'Allah Swt. mempunyai 99 Asmaul Husna yang menunjukkan sifat kesempurnaan-Nya.'
    }
  },
  {
    id: 3,
    badge: 'Ar-Rahman (Maha Pengasih)',
    title: 'Asmaul Husna Ar-Raḥmān (الرَّحْمَٰنُ)',
    content: 'Ar-Raḥmān berarti Allah Maha Pengasih. Kasih sayang Allah Swt. diberikan kepada seluruh makhluk-Nya di dunia, baik manusia, hewan, maupun tumbuhan tanpa terkecuali.',
    keyTerms: [
      { term: 'Ar-Raḥmān', definition: 'Allah Maha Pengasih kepada seluruh makhluk di alam semesta.' },
      { term: 'Matahari & Hujan', definition: 'Bukti kasih sayang Allah menyinari bumi dan menyuburkan tanaman.' },
      { term: 'Udara & Air', definition: 'Nikmat Allah yang diberikan gratis untuk seluruh makhluk bernapas dan minum.' },
      { term: 'Keluarga', definition: 'Allah menciptakan keluarga yang menyayangi dan merawat kita.' }
    ],
    quiz: {
      question: 'Arti dari Asmaul Husna Ar-Raḥmān adalah...',
      options: ['Allah Maha Penyayang', 'Allah Maha Pengasih', 'Allah Maha Pembalas', 'Allah Maha Raja'],
      correct: 1,
      explanation: 'Ar-Raḥmān berarti Allah Maha Pengasih kepada seluruh makhluk.'
    }
  },
  {
    id: 4,
    badge: 'Meneladani Ar-Rahman',
    title: 'Cara Meneladani Sifat Ar-Raḥmān',
    content: 'Sebagai anak muslim, kita dapat meneladani sifat Ar-Raḥmān (Maha Pengasih) dengan menyebarkan kasih sayang kepada sesama makhluk:',
    bulletPoints: [
      'Menyayangi adik dan saudara di rumah.',
      'Menghormati dan patuh kepada orang tua.',
      'Membantu teman yang sedang memerlukan bantuan.',
      'Menyayangi dan tidak menyiksa hewan.',
      'Merawat dan menjaga tanaman di sekitar kita.'
    ],
    quiz: {
      question: 'Manakah contoh perilaku meneladani sifat Ar-Raḥmān kepada lingkungan?',
      options: ['Memetik bunga sebarangan', 'Menyiram dan merawat tanaman', 'Menyiksa kucing', 'Merobek buku teman'],
      correct: 1,
      explanation: 'Menyiram dan merawat tanaman adalah contoh meneladani kasih sayang (Ar-Raḥmān) kepada lingkungan.'
    }
  },
  {
    id: 5,
    badge: 'Ar-Rahim (Maha Penyayang)',
    title: 'Asmaul Husna Ar-Raḥīm (الرَّحِيمُ)',
    content: 'Ar-Raḥīm berarti Allah Maha Penyayang. Allah Swt. memberikan kasih sayang yang khusus dan istimewa kepada hamba-hamba-Nya yang beriman dan taat. Allah selalu mengampuni hamba yang bertobat dan menyayangi orang yang berbuat baik.',
    keyTerms: [
      { term: 'Ar-Raḥīm', definition: 'Allah Maha Penyayang khusus kepada orang-orang yang beriman & taat.' },
      { term: 'Maha Pengampun', definition: 'Allah menyukai dan mengampuni hamba yang mau bertobat.' },
      { term: 'Orang Berbuat Baik', definition: 'Allah sangat mencintai hamba yang suka menolong dan berakhlak mulia.' }
    ],
    quiz: {
      question: 'Kasih sayang Allah yang istimewa dalam sifat Ar-Raḥīm diberikan kepada...',
      options: ['Semua makhluk tanpa syarat', 'Orang yang beriman dan taat', 'Orang yang malas salat', 'Orang yang suka marah'],
      correct: 1,
      explanation: 'Sifat Ar-Raḥīm berisi kasih sayang khusus untuk orang yang beriman dan taat kepada Allah.'
    }
  },
  {
    id: 6,
    badge: 'Meneladani Ar-Rahim',
    title: 'Cara Meneladani Sifat Ar-Raḥīm',
    content: 'Kita dapat meneladani sifat Ar-Raḥīm (Maha Penyayang) dalam kehidupan sehari-hari melalui sikap lembut dan pemurah:',
    bulletPoints: [
      'Memaafkan kesalahan teman yang meminta maaf.',
      'Sabar dan tidak mudah marah saat bermain.',
      'Berbicara dengan kata-kata yang lembut dan sopan.',
      'Menolong teman yang mengalami kesusahan.',
      'Berbagi makanan atau bekal kepada teman sekelas.'
    ],
    quiz: {
      question: 'Apabila teman tidak sengaja menyenggol tempat pensilmu dan meminta maaf, sikap sesuai Ar-Raḥīm adalah...',
      options: ['Memaafkannya dengan ikhlas', 'Membalas menyenggolnya', 'Dimarahi terus menerus', 'Melaporkan ke polisi'],
      correct: 0,
      explanation: 'Memaafkan kesalahan teman mencerminkan teladan sifat Ar-Raḥīm (Maha Penyayang).'
    }
  },
  {
    id: 7,
    badge: 'As-Salam (Maha Pemberi Salam)',
    title: 'Asmaul Husna As-Salām (السَّلَامُ)',
    content: 'As-Salām berarti Allah Maha Pemberi Keselamatan dan Kedamaian. Allah memberikan keamanan, ketenangan, dan keselamatan kepada hamba-hamba-Nya. Allah juga mengajarkan umat Islam untuk saling mendoakan keselamatan melalui ucapan salam.',
    arabicText: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ',
    translation: 'Semoga keselamatan, rahmat, dan keberkahan Allah tercurah kepadamu.',
    quiz: {
      question: 'Asmaul Husna As-Salām memiliki arti...',
      options: ['Allah Maha Pengasih', 'Allah Maha Penyayang', 'Allah Maha Pemberi Keselamatan & Kedamaian', 'Allah Maha Pemberi Rasa Aman'],
      correct: 2,
      explanation: 'As-Salām berarti Allah Maha Pemberi Keselamatan dan Kedamaian.'
    }
  },
  {
    id: 8,
    badge: 'Meneladani As-Salam',
    title: 'Cara Meneladani Sifat As-Salām',
    content: 'Meneladani sifat As-Salām berarti menjadi penyebar kedamaian dan keselamatan di lingkungan kita:',
    bulletPoints: [
      'Mengucapkan salam "Assalamu\'alaikum" saat bertemu sesama muslim.',
      'Tidak bertengkar dan tidak menyakiti perasaan teman.',
      'Menjaga kerukunan di kelas dan lingkungan rumah.',
      'Menciptakan suasana yang damai dan tenteram di rumah dan sekolah.',
      'Segera meminta maaf jika melakukan kesalahan.'
    ],
    quiz: {
      question: 'Mendoakan keselamatan teman saat berpapasan dilakukan dengan mengucapkan...',
      options: ['Halo', 'Assalamu\'alaikum', 'Selamat tinggal', 'Sampai jumpa'],
      correct: 1,
      explanation: 'Mengucapkan salam Assalamu\'alaikum adalah doa keselamatan sesuai ajaran As-Salām.'
    }
  },
  {
    id: 9,
    badge: 'Al-Mu\'min (Maha Pemberi Aman)',
    title: 'Asmaul Husna Al-Mu\'min (الْمُؤْمِنُ)',
    content: 'Al-Mu\'min berarti Allah Maha Pemberi Rasa Aman dan Keamanan. Allah memberikan rasa aman dan ketenangan jiwa kepada hamba-hamba-Nya. Orang yang selalu mengingat Allah Swt. akan merasa tenang dan tidak gelisah.',
    keyTerms: [
      { term: 'Al-Mu\'min', definition: 'Allah Maha Pemberi Rasa Aman dan Keamanan.' },
      { term: 'Rasa Aman', definition: 'Ketenangan hati yang dianugerahkan Allah kepada hamba yang beriman.' },
      { term: 'Jujur & Amanah', definition: 'Sikap dapat dipercaya yang membuat orang lain merasa aman.' }
    ],
    quiz: {
      question: 'Arti dari Asmaul Husna Al-Mu\'min adalah...',
      options: ['Maha Pengasih', 'Maha Pemberi Rasa Aman', 'Maha Penyayang', 'Maha Pemberi Keselamatan'],
      correct: 1,
      explanation: 'Al-Mu\'min berarti Allah Maha Pemberi Rasa Aman dan Keamanan.'
    }
  },
  {
    id: 10,
    badge: 'Meneladani Al-Mu\'min',
    title: 'Cara Meneladani Sifat Al-Mu\'min',
    content: 'Kita dapat meneladani sifat Al-Mu\'min dengan menjadi pribadi yang memberikan rasa aman bagi orang lain:',
    bulletPoints: [
      'Menjadi anak yang jujur dalam ucapan dan perbuatan.',
      'Menjaga amanah atau titipan orang lain.',
      'Tidak mengambil barang milik orang lain tanpa izin.',
      'Tidak menakut-nakuti atau menjelek-jelekkan teman.',
      'Membuat teman dan keluarga merasa aman di dekat kita.'
    ],
    quiz: {
      question: 'Manakah contoh sikap meneladani Al-Mu\'min di sekolah?',
      options: ['Menakut-nakuti teman dengan cerita hantu', 'Mengembalikan barang yang ditemukan kepada pemiliknya', 'Mengambil pensil teman tanpa izin', 'Mengejek teman yang jatuh'],
      correct: 1,
      explanation: 'Mengembalikan barang temuan menunjukkan sikap jujur dan menjaga amanah sesuai sifat Al-Mu\'min.'
    }
  },
  {
    id: 11,
    badge: 'Kisah Teladan 4 Sahabat',
    title: 'Kisah Teladan Empat Sahabat (Aisyah, Ahmad, Fajar, Fatimah)',
    content: 'Di kelas II SD terdapat empat sahabat: Aisyah, Ahmad, Fajar, dan Fatimah. Suatu hari, Fajar terjatuh saat bermain di halaman sekolah. Aisyah segera membantu Fajar berdiri (Ar-Rahman). Ahmad mengambil kotak P3K (Ar-Rahim). Fatimah menemani Fajar hingga merasa tenang (As-Salam & Al-Mu\'min). Mereka tidak mengejek Fajar, tetapi memberi semangat!',
    tableData: [
      { col1: 'Aisyah membantu berdiri', col2: 'Ar-Raḥmān', col3: 'Saling mengasihi teman yang jatuh' },
      { col1: 'Ahmad mengambil P3K', col2: 'Ar-Raḥīm', col3: 'Menyayangi dan merawat luka teman' },
      { col1: 'Fatimah menemani tenang', col2: 'As-Salām & Al-Mu\'min', col3: 'Memberi rasa damai dan aman' }
    ],
    quiz: {
      question: 'Tindakan Aisyah, Ahmad, dan Fatimah saat Fajar jatuh mencerminkan pengamalan...',
      options: ['Asmaul Husna', 'Rukun Haji', 'Nama-nama Malaikat', 'Pancasila saja'],
      correct: 0,
      explanation: 'Sikap mengasihi, merawat, dan menenangkan teman mencerminkan nilai-nilai Asmaul Husna.'
    }
  },
  {
    id: 12,
    badge: 'Penerapan Sehari-hari',
    title: 'Penerapan Asmaul Husna di Rumah, Sekolah & Masyarakat',
    content: 'Sifat-sifat mulia Asmaul Husna dapat kita terapkan di berbagai tempat kehidupan sehari-hari:',
    tableData: [
      { col1: 'Di Rumah', col2: 'Membantu orang tua, menyayangi saudara, berbicara sopan, menjaga kebersihan rumah.' },
      { col1: 'Di Sekolah', col2: 'Menghormati guru, menyapa teman dengan salam, berbagi alat tulis, tidak bertengkar.' },
      { col1: 'Di Masyarakat', col2: 'Menyayangi tetangga, menjaga kebersihan, membantu orang butuh, hidup rukun.' }
    ],
    quiz: {
      question: 'Contoh penerapan Asmaul Husna di lingkungan sekolah adalah...',
      options: ['Menjaga kebersihan rumah', 'Menyapa teman dengan salam & berbagi alat tulis', 'Menyayangi tetangga', 'Membantu ibu memasak'],
      correct: 1,
      explanation: 'Menyapa teman dengan salam dan berbagi alat tulis adalah penerapan di sekolah.'
    }
  },
  {
    id: 13,
    badge: 'Hikmah Mempelajari',
    title: 'Hikmah Mempelajari Asmaul Husna',
    content: 'Mempelajari dan meneladani Asmaul Husna memberikan banyak manfaat besar bagi kehidupan anak muslim:',
    bulletPoints: [
      'Semakin mengenal dan mencintai Allah Swt.',
      'Rajin beribadah dan taat kepada perintah agama.',
      'Memiliki akhlak terpuji dan budi pekerti yang mulia.',
      'Menjadi anak yang penyayang, jujur, dan pemaaf.',
      'Hidup rukun dengan teman, keluarga, dan tetangga.',
      'Memiliki hati yang tenteram, tenang, dan tidak penakut.'
    ],
    quiz: {
      question: 'Salah satu manfaat utama mempelajari Asmaul Husna adalah...',
      options: ['Menjadi anak yang sombong', 'Makin mengenal dan mencintai Allah Swt.', 'Suka bertengkar', 'Menjadi penakut'],
      correct: 1,
      explanation: 'Mengenal nama-nama Allah membuat kita semakin mencintai dan mendekatkan diri kepada-Nya.'
    }
  },
  {
    id: 14,
    badge: 'Tahukah Kamu?',
    title: 'Rasulullah SAW Manusia Paling Penyayang',
    content: 'Rasulullah SAW adalah manusia yang paling penyayang. Beliau selalu menyayangi anak-anak, menghormati orang tua, membantu orang miskin, menyayangi hewan, dan memaafkan orang yang berbuat salah. Rasulullah SAW adalah teladan terbaik (uswatun hasanah) dalam mengamalkan nilai-nilai Asmaul Husna.',
    bulletPoints: [
      'Menyayangi anak-anak dan sering mengelus kepala mereka.',
      'Sangat menghormati orang tua dan menyambung silaturahmi.',
      'Membantu fakir miskin dan menyayangi hewan.',
      'Mudah memaafkan orang yang pernah berbuat salah kepadanya.'
    ],
    quiz: {
      question: 'Siapakah teladan terbaik (uswatun hasanah) dalam mengamalkan nilai-nilai Asmaul Husna?',
      options: ['Nabi Muhammad SAW', 'Firaun', 'Qarun', 'Abu Jahal'],
      correct: 0,
      explanation: 'Rasulullah SAW adalah teladan terbaik bagi seluruh umat manusia dalam mengamalkan Asmaul Husna.'
    }
  },
  {
    id: 15,
    badge: 'Rangkuman & Refleksi',
    title: 'Rangkuman & Refleksi Bab 2',
    content: 'Asmaul Husna adalah 99 nama Allah Swt. yang indah. Ar-Raḥmān (Maha Pengasih), Ar-Raḥīm (Maha Penyayang), As-Salām (Maha Pemberi Keselamatan), dan Al-Mu\'min (Maha Pemberi Rasa Aman). Marilah kita selalu meneladaninya!',
    tableData: [
      { col1: 'Ar-Raḥmān', col2: 'Maha Pengasih', col3: 'Tindakan: Menyayangi semua makhluk & lingkungan' },
      { col1: 'Ar-Raḥīm', col2: 'Maha Penyayang', col3: 'Tindakan: Memaafkan, memberi bekal, kata-kata lembut' },
      { col1: 'As-Salām', col2: 'Maha Pemberi Keselamatan', col3: 'Tindakan: Mengucapkan salam, tidak bertengkar' },
      { col1: 'Al-Mu\'min', col2: 'Maha Pemberi Rasa Aman', col3: 'Tindakan: Jujur, menjaga amanah, membuat teman aman' }
    ],
    quiz: {
      question: 'Anak yang meneladani Asmaul Husna akan tumbuh menjadi pribadi yang...',
      options: ['Penyayang, jujur, dan mencintai kedamaian', 'Pemarah dan pembohong', 'Suka jahil dan mencuri', 'Sombong dan nakal'],
      correct: 0,
      explanation: 'Meneladani Asmaul Husna membentuk kepribadian yang penyayang, jujur, dan suka menyebarkan kedamaian.'
    }
  }
];

// ==========================================
// 2. PROYEK MURID (2 PjBL + 2 PBL)
// ==========================================
export const PROYEK_KELAS2_P2: ProyekData[] = [
  {
    id: 'pjbl-2-2-1',
    type: 'PjBL',
    category: 'Media Kreatif Asmaul Husna',
    title: 'Pohon Kebaikan 4 Asmaul Husna',
    description: 'Murid merancang dan membuat hiasan "Pohon Kebaikan Asmaul Husna" dari kertas karton yang memuat 4 Asmaul Husna (Ar-Raḥmān, Ar-Raḥīm, As-Salām, Al-Mu\'min) beserta contoh tindakan nyata sehari-hari di rumah dan sekolah.',
    steps: [
      'Siapkan kertas karton, gunting, spidol warna, dan lem kertas.',
      'Gambar pola batang pohon dan 4 cabang utama untuk masing-masing Asmaul Husna.',
      'Tuliskan kaligrafi sederhana Ar-Raḥmān, Ar-Raḥīm, As-Salām, dan Al-Mu\'min beserta artinya.',
      'Tempelkan buah-buah kertas warna berisi tulisan contoh perilaku baik (contoh: memaafkan, mengucap salam, jujur, menyiram bunga).',
      'Pajang Pohon Kebaikan di sudut baca kelas atau dinding kamar.'
    ],
    output: 'Hiasan Dinding "Pohon Kebaikan 4 Asmaul Husna" Kreatif.',
    assessmentCriteria: [
      'Kerapian penulisan nama Arab dan arti 4 Asmaul Husna',
      'Kesesuaian contoh perilaku dengan sifat Asmaul Husna',
      'Kreativitas hiasan dan kombinasi warna',
      'Kerjasama dan kebersihan area kerja'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pjbl-2-2-2',
    type: 'PjBL',
    category: 'Kartu Sapaan & Amanah',
    title: 'Kartu Ucapan Salam & Tabel Kasih Sayang Harian',
    description: 'Murid membuat 3 kartu sapaan bertuliskan ucapan salam "Assalamu\'alaikum wa Rahmatullahi wa Barakatuh" untuk diberikan kepada guru, orang tua, dan teman, dilengkapi tabel centang amalan kasih sayang 7 hari.',
    steps: [
      'Siapkan kertas tebal berwarna dan alat mewarnai.',
      'Tuliskan kalimat salam beserta artinya dengan rapi dan indah.',
      'Hias kartu ucapan dengan motif bunga atau bintang.',
      'Berikan kartu tersebut kepada orang tua, guru, dan teman terdekat.',
      'Isi tabel centang harian selama 7 hari saat melakukan amalan menyapa dan membantu orang lain.'
    ],
    output: 'Set Kartu Sapaan Salam & Tabel Amalan Kasih Sayang 7 Hari.',
    assessmentCriteria: [
      'Kebenaran penulisan kalimat salam bahasa Arab dan artinya',
      'Keindahan dan kebersihan kartu ucapan',
      'Kedisiplinan pengisian tabel amalan 7 hari',
      'Keberanian menyerahkan kartu sapaan kepada penerima'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pbl-2-2-3',
    type: 'PBL',
    category: 'Studi Kasus Tolong Menolong (As-Salam & Ar-Rahman)',
    title: 'Menolong Teman Terjatuh Saat Bermain (Kisah Empat Sahabat)',
    description: 'Murid menganalisis studi kasus Fajar yang terjatuh saat bermain di halaman sekolah seperti dalam kisah teladan empat sahabat, lalu merumuskan langkah respons cepat berbasis nilai Asmaul Husna.',
    steps: [
      'Simak skenario cerita Fajar terjatuh, Aisyah membantu berdiri, Ahmad mengambil P3K, dan Fatimah menenangkan.',
      'Diskusi kelompok: Mengapa kita tidak boleh mengejek atau tertawa saat melihat teman jatuh?',
      'Kaitkan setiap tindakan sahabat dengan sifat Ar-Raḥmān, Ar-Raḥīm, As-Salām, dan Al-Mu\'min.',
      'Peragakan simulasi pertolongan pertama sederhana dan cara menenangkan teman.',
      'Tuliskan komitmen kelas "Kami Saling Mengasihi dan Menjaga Keselamatan Teman".'
    ],
    output: 'Lembar Simulasi Roleplay & Poster Komitmen Pertolongan Teman.',
    assessmentCriteria: [
      'Kemampuan mengidentifikasi nilai Asmaul Husna dalam studi kasus',
      'Keterampilan berempati dan bekerja sama dalam simulasi',
      'Kejelian menghubungkan tindakan dengan sifat Allah',
      'Sikap tidak mengejek penderitaan orang lain'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pbl-2-2-4',
    type: 'PBL',
    category: 'Studi Kasus Kejujuran & Amanah (Al-Mu\'min)',
    title: 'Menemukan Pensil/Uang Teman di Kelas (Penerapan Al-Mu\'min)',
    description: 'Murid mendiskusikan masalah ketika menemukan benda/uang tak bertuan di lantai kelas, serta merumuskan langkah jujur dan amanah sesuai teladan Al-Mu\'min.',
    steps: [
      'Baca skenario: Budi menemukan uang Rp5.000,- di bawah meja kelas tanpa ada nama pemilik.',
      'Analisis masalah: Pilihan tindakan apa saja yang bisa dilakukan Budi dan mana yang paling jujur?',
      'Rumuskan langkah sesuai Al-Mu\'min (menyerahkan ke guru, mengumumkan dengan jujur, tidak mengantongi sendiri).',
      'Diskusikan bagaimana tindakan jujur membuat suasana kelas menjadi aman dan saling percaya.',
      'Presentasikan hasil diskusi di depan kelas.'
    ],
    output: 'Laporan Solusi Kejujuran & Alur Penanganan Barang Temuan Kelas.',
    assessmentCriteria: [
      'Pemahaman terhadap konsep amanah dan rasa aman (Al-Mu\'min)',
      'Ketepatan memilih keputusan bertindak yang jujur',
      'Keberanian mengemukakan pendapat di depan kelas',
      'Penghayatan tanggung jawab moral'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  }
];

// ==========================================
// 3. GAMIFIKASI (PETUALANGAN INTERAKTIF 4 ASMAUL HUSNA)
// ==========================================
export const GAMIFIKASI_MISSION_KELAS2_P2: GamifikasiMission[] = [
  {
    id: 1,
    title: 'Misi 1: Menghubungkan Nama & Arti',
    khalifahOrTopic: 'Detektif Asmaul Husna',
    scenario: 'Kamu menemukan prasasti Asmaul Husna "Ar-Raḥmān". Kamu harus mencocokkan artinya yang tepat agar gerbang istana kebaikan terbuka.',
    question: 'Manakah arti yang tepat dari Asmaul Husna Ar-Raḥmān?',
    options: [
      {
        text: 'Allah Maha Pengasih kepada seluruh makhluk',
        isCorrect: true,
        feedback: 'Hebat! Ar-Raḥmān berarti Allah Maha Pengasih kepada seluruh makhluk di bumi.'
      },
      {
        text: 'Allah Maha Pemberi Keselamatan',
        isCorrect: false,
        feedback: 'Kurang tepat. Pemberi keselamatan adalah arti dari As-Salām.'
      },
      {
        text: 'Allah Maha Pemberi Rasa Aman',
        isCorrect: false,
        feedback: 'Masih keliru. Pemberi rasa aman adalah arti dari Al-Mu\'min.'
      }
    ],
    computationalConcept: 'Pattern Recognition: Mengenali pola hubungan antara nama Asmaul Husna bahasa Arab dan maknanya.'
  },
  {
    id: 2,
    title: 'Misi 2: Aksi Kasih Sayang Lingkungan',
    khalifahOrTopic: 'Penerapan Ar-Raḥmān',
    scenario: 'Di halaman sekolah ada tanaman bunga yang layu karena kekeringan dan seekor anak kucing yang kelaparan.',
    question: 'Tindakan manakah yang mencerminkan teladan sifat Ar-Raḥmān?',
    options: [
      {
        text: 'Menyiram tanaman hingga segar dan memberi makan anak kucing',
        isCorrect: true,
        feedback: 'Masya Allah! Menyayangi tumbuhan dan hewan adalah bukti meneladani Ar-Raḥmān.'
      },
      {
        text: 'Meninggalkan tanaman dan menendang anak kucing',
        isCorrect: false,
        feedback: 'Tindakan ini jahat dan bertentangan dengan kasih sayang Allah.'
      },
      {
        text: 'Memetik daun tanaman sampai habis',
        isCorrect: false,
        feedback: 'Merusak tanaman dilarang agama.'
      }
    ],
    computationalConcept: 'Algorithm & Problem Solving: Menyusun urutan tindakan kebaikan untuk menyelesaikan masalah lingkungan.'
  },
  {
    id: 3,
    title: 'Misi 3: Memaafkan Teman Seperti Ar-Rahim',
    khalifahOrTopic: 'Penerapan Ar-Raḥīm',
    scenario: 'Temanmu tidak sengaja menjatuhkan bekal makananmu. Ia menangis dan meminta maaf dengan tulus.',
    question: 'Sikap apakah yang paling mencerminkan sifat Ar-Raḥīm (Maha Penyayang)?',
    options: [
      {
        text: 'Memaafkannya, menenangkannya, dan mengajak berbagi bekal lain',
        isCorrect: true,
        feedback: 'Luar biasa! Memaafkan dan berbicara lembut adalah wujud meneladani Ar-Raḥīm.'
      },
      {
        text: 'Mendorong teman sampai ikut jatuh',
        isCorrect: false,
        feedback: 'Membalas keburukan dengan keburukan bukan ajaran Islam.'
      },
      {
        text: 'Mengejek dan memusuhinya selama satu bulan',
        isCorrect: false,
        feedback: 'Memusuhi teman merusak tali persaudaraan.'
      }
    ],
    computationalConcept: 'Evaluation & Decision Making: Menilai dampak emosional dan memilih opsi keputusan yang penuh kasih sayang.'
  },
  {
    id: 4,
    title: 'Misi 4: Menyebarkan Salam & Kedamaian',
    khalifahOrTopic: 'Penerapan As-Salām',
    scenario: 'Kamu bertemu dengan guru PAI dan dua temanmu di gerbang sekolah pada pagi hari.',
    question: 'Langkah manakah yang SESUAI dengan teladan As-Salām (Maha Pemberi Keselamatan)?',
    options: [
      {
        text: 'Mengucapkan "Assalamu\'alaikum" sambil tersenyum ramah',
        isCorrect: true,
        feedback: 'Tepat sekali! Salam adalah doa keselamatan dan kedamaian sesuai ajaran As-Salām.'
      },
      {
        text: 'Lari bersembunyi di balik pohon',
        isCorrect: false,
        feedback: 'Bersembunyi tidak mencerminkan sopan santun.'
      },
      {
        text: 'Berteriak kencang hingga membuat orang kaget',
        isCorrect: false,
        feedback: 'Membuat orang kaget mengganggu ketenangan dan kedamaian.'
      }
    ],
    computationalConcept: 'Social Communication Protocol: Menerapkan tata cara tegur sapa islami yang membawa kedamaian.'
  },
  {
    id: 5,
    title: 'Misi 5: Penjaga Keamanan & Kejujuran',
    khalifahOrTopic: 'Penerapan Al-Mu\'min',
    scenario: 'Kamu menemukan jam tangan milik teman yang tertinggal di lapangan olahraga.',
    question: 'Tindakan jujur manakah yang mencerminkan teladan sifat Al-Mu\'min (Maha Pemberi Rasa Aman)?',
    options: [
      {
        text: 'Menyimpan barang temuan lalu menyerahkannya kepada guru agar aman',
        isCorrect: true,
        feedback: 'Sempurna! Menjaga barang temuan dan mengembalikannya membuat teman merasa aman dan percaya.'
      },
      {
        text: 'Memasukkan jam tangan ke tas sendiri untuk dijual',
        isCorrect: false,
        feedback: 'Mengambil milik orang lain adalah perbuatan tidak jujur dan berdosa.'
      },
      {
        text: 'Melempar jam tangan ke semak-semak',
        isCorrect: false,
        feedback: 'Merusak barang milik orang lain dilarang.'
      }
    ],
    computationalConcept: 'Abstraction & Ethics: Mengabstraksi nilai kejujuran sebagai dasar rasa aman dalam masyarakat.'
  }
];

// ==========================================
// 4. EVALUASI PEMBELAJARAN (HOTS & CT FOR KELAS 2)
// ==========================================

// A. 10 PILIHAN GANDA
export const EVALUASI_PG_KELAS2_P2: EvaluasiPG[] = [
  {
    id: 1,
    question: 'Nama-nama Allah Swt. yang paling indah dan mulia dinamakan...',
    options: ['Asmaul Husna', 'Kalimat Tayyibah', 'Rukun Islam', 'Rukun Iman'],
    answer: 0,
    explanation: 'Asmaul Husna adalah nama-nama Allah Swt. yang indah dan mulia.'
  },
  {
    id: 2,
    question: 'Jumlah Asmaul Husna yang dimiliki Allah Swt. ada ... nama.',
    options: ['25', '66', '99', '114'],
    answer: 2,
    explanation: 'Jumlah Asmaul Husna ada 99 nama.'
  },
  {
    id: 3,
    question: 'Asmaul Husna Ar-Raḥmān memiliki arti bahwa Allah Swt. Maha...',
    options: ['Penyayang', 'Pengasih', 'Pemberi Keselamatan', 'Pemberi Rasa Aman'],
    answer: 1,
    explanation: 'Ar-Raḥmān artinya Allah Maha Pengasih.'
  },
  {
    id: 4,
    question: 'Bukti kasih sayang Allah (Ar-Raḥmān) di alam semesta bagi semua makhluk adalah...',
    options: ['Matahari menyinari bumi & tersedianya air', 'Hanya orang kaya yang bisa bernapas', 'Hujan hanya turun di laut', 'Tanaman tidak butuh air'],
    answer: 0,
    explanation: 'Matahari, udara, dan air diberikan Allah kepada seluruh makhluk tanpa kecuali.'
  },
  {
    id: 5,
    question: 'Kasih sayang istimewa Allah dalam sifat Ar-Raḥīm diberikan khusus kepada hamba yang...',
    options: ['Suka marah', 'Beriman dan taat', 'Malas belajar', 'Suka berbohong'],
    answer: 1,
    explanation: 'Ar-Raḥīm adalah kasih sayang istimewa Allah kepada orang beriman dan taat.'
  },
  {
    id: 6,
    question: 'Arti dari Asmaul Husna As-Salām adalah Allah Maha...',
    options: ['Pengasih', 'Penyayang', 'Pemberi Keselamatan dan Kedamaian', 'Pemberi Rasa Aman'],
    answer: 2,
    explanation: 'As-Salām artinya Allah Maha Pemberi Keselamatan dan Kedamaian.'
  },
  {
    id: 7,
    question: 'Kalimat salam yang diajarkan Islam saat berpapasan dengan sesama muslim adalah...',
    options: ['Selamat pagi', 'Assalamu\'alaikum wa Rahmatullahi wa Barakatuh', 'Halo kawan', 'Sampai jumpa lagi'],
    answer: 1,
    explanation: 'Ucapan salam Assalamu\'alaikum... berisi doa keselamatan sesuai As-Salām.'
  },
  {
    id: 8,
    question: 'Asmaul Husna Al-Mu\'min artinya Allah Swt. Maha...',
    options: ['Pemberi Rasa Aman dan Keamanan', 'Pemberi Rezeki', 'Pencipta Alam', 'Pengampun Dosa'],
    answer: 0,
    explanation: 'Al-Mu\'min berarti Allah Maha Pemberi Rasa Aman dan Keamanan.'
  },
  {
    id: 9,
    question: 'Sikap yang mencerminkan teladan sifat Al-Mu\'min di lingkungan sekolah adalah...',
    options: ['Menakut-nakuti teman', 'Berkata jujur dan menjaga barang temuan', 'Suka jahil saat pelajaran', 'Mengejek teman'],
    answer: 1,
    explanation: 'Berkata jujur dan menjaga barang temuan membuat lingkungan terasa aman.'
  },
  {
    id: 10,
    question: 'Manusia yang menjadi teladan terbaik (uswatun hasanah) dalam mengamalkan kasih sayang Asmaul Husna adalah...',
    options: ['Nabi Muhammad SAW', 'Malaikat Jibril', 'Sahabat Abu Bakar', 'Nabi Adam AS'],
    answer: 0,
    explanation: 'Nabi Muhammad SAW adalah teladan terbaik bagi seluruh umat manusia.'
  }
];

// B. 3 PILIHAN GANDA KOMPLEKS (MULTI SELECT)
export const EVALUASI_PGK_KELAS2_P2: EvaluasiPGK[] = [
  {
    id: 1,
    question: 'Manakah dari pernyataan berikut yang MERUPAKAN contoh perilaku meneladani sifat Ar-Raḥmān dan Ar-Raḥīm? (Pilih lebih dari satu)',
    options: [
      'Menyayangi adik dan membantu teman yang kesulitan',
      'Memutus tali silaturahmi dengan tetangga',
      'Memaafkan kesalahan teman dan berbagi makanan',
      'Merawat tanaman dan memberi makan hewan peliharaan'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Menyayangi saudara, memaafkan, berbagi bekal, serta merawat tanaman dan hewan adalah wujud Ar-Rahman & Ar-Rahim.'
  },
  {
    id: 2,
    question: 'Manakah tindakan sehari-hari yang MERUPAKAN pengamalan sifat As-Salām (Maha Pemberi Keselamatan)? (Pilih lebih dari satu)',
    options: [
      'Mengucapkan salam saat bertemu teman dan guru',
      'Suka memicu pertengkaran di lapangan',
      'Menjaga kerukunan dan menciptakan suasana damai',
      'Segera meminta maaf apabila tidak sengaja berbuat salah'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Mengucap salam, menjaga kerukunan, dan meminta maaf menciptakan kedamaian (As-Salām).'
  },
  {
    id: 3,
    question: 'Manakah perilaku murid yang MERUPAKAN penerapan teladan sifat Al-Mu\'min (Maha Pemberi Rasa Aman)? (Pilih lebih dari satu)',
    options: [
      'Menjadi anak yang jujur dalam ucapan',
      'Menjaga barang yang dititipkan teman dengan baik',
      'Menyembunyikan sepatu teman agar bingung',
      'Membuat teman merasa tenang dan aman di kelas'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Jujur, menjaga amanah titipan, dan membuat teman merasa aman adalah contoh teladan Al-Mu\'min.'
  }
];

// C. 3 MENJODOHKAN
export const EVALUASI_MENJODOHKAN_KELAS2_P2: EvaluasiMenjodohkan[] = [
  {
    id: 1,
    premise: 'Ar-Raḥmān',
    matchTarget: 'Allah Maha Pengasih',
    options: ['Allah Maha Pengasih', 'Allah Maha Penyayang', 'Allah Maha Pemberi Keselamatan', 'Allah Maha Pemberi Rasa Aman']
  },
  {
    id: 2,
    premise: 'As-Salām',
    matchTarget: 'Allah Maha Pemberi Keselamatan',
    options: ['Allah Maha Pengasih', 'Allah Maha Penyayang', 'Allah Maha Pemberi Keselamatan', 'Allah Maha Pemberi Rasa Aman']
  },
  {
    id: 3,
    premise: 'Al-Mu\'min',
    matchTarget: 'Allah Maha Pemberi Rasa Aman',
    options: ['Allah Maha Pengasih', 'Allah Maha Penyayang', 'Allah Maha Pemberi Keselamatan', 'Allah Maha Pemberi Rasa Aman']
  }
];

// D. 4 BENAR / SALAH (+ ALASAN ISIAN)
export const EVALUASI_BENAR_SALAH_KELAS2_P2: EvaluasiBenarSalah[] = [
  {
    id: 1,
    statement: 'Kasih sayang Allah dalam sifat Ar-Raḥmān hanya diberikan kepada manusia yang rajin salat saja.',
    isCorrect: false,
    explanation: 'SALAH. Sifat Ar-Raḥmān berarti kasih sayang Allah diberikan kepada SELURUH makhluk (manusia, hewan, tumbuhan) di dunia.'
  },
  {
    id: 2,
    statement: 'Mengucapkan salam "Assalamu\'alaikum" mengandung doa memohon keselamatan dan kedamaian.',
    isCorrect: true,
    explanation: 'BENAR. Ucapan salam adalah doa keselamatan yang mencerminkan Asmaul Husna As-Salām.'
  },
  {
    id: 3,
    statement: 'Menakut-nakuti teman dengan cerita hantu sampai menangis adalah contoh teladan sifat Al-Mu\'min.',
    isCorrect: false,
    explanation: 'SALAH. Al-Mu\'min mengajarkan kita untuk memberikan RASA AMAN, bukan menakut-nakuti teman.'
  },
  {
    id: 4,
    statement: 'Dalam kisah empat sahabat, Aisyah, Ahmad, dan Fatimah membantu Fajar yang jatuh tanpa mengejeknya.',
    isCorrect: true,
    explanation: 'BENAR. Perilaku mereka mencerminkan saling mengasihi, merawat, dan memberikan rasa tenang (Asmaul Husna).'
  }
];

// E. 5 SOAL URAIAN (HOTS & COMPUTATIONAL THINKING)
export const EVALUASI_URAIAN_KELAS2_P2: EvaluasiUraian[] = [
  {
    id: 1,
    question: 'Jelaskan perbedaan antara Asmaul Husna Ar-Raḥmān dan Ar-Raḥīm beserta contoh penerapannya dalam kehidupan sehari-hari!',
    context: 'Analisis Makna Asmaul Husna (HOTS - Analysis)',
    sampleAnswer: '1. Ar-Raḥmān artinya Allah Maha Pengasih kepada seluruh makhluk di dunia (contoh: menyayangi hewan dan menjaga tanaman).\n2. Ar-Raḥīm artinya Allah Maha Penyayang khusus bagi hamba-Nya yang beriman & taat (contoh: memaafkan teman dan rajin beribadah).'
  },
  {
    id: 2,
    question: 'Saat bermain bola di sekolah, temanmu tidak sengaja menyenggolmu hingga terjatuh. Berdasarkan ajaran As-Salām dan Ar-Raḥīm, bagaimana sikap terbaik yang harus kamu lakukan?',
    context: 'Pemecahan Masalah Konflik Bermain (HOTS - Problem Solving)',
    sampleAnswer: 'Sikap terbaik adalah:\n1. Mengontrol emosi dan tidak mudah marah.\n2. Memaafkan teman yang tidak sengaja menyenggol.\n3. Menjaga kedamaian (As-Salām) agar permainan tetap berjalan rukun tanpa pertengkaran.'
  },
  {
    id: 3,
    question: 'Tuliskan alur langkah-langkah jujur yang harus kamu lakukan jika menemukan dompet atau tempat pensil milik teman di lingkungan sekolah sesuai sifat Al-Mu\'min!',
    context: 'Alur Langkah Kejujuran (Computational Thinking - Algorithm)',
    sampleAnswer: '1. Mengambil barang temuan dengan hati-hati.\n2. Tidak membuka atau mengantongi isinya untuk diri sendiri.\n3. Membawa dan menyerahkan barang temuan kepada guru kelas.\n4. Membantu mengumumkan barang temuan agar pemiliknya merasa tenang dan aman (Al-Mu\'min).'
  },
  {
    id: 4,
    question: 'Mengapa kita dianjurkan selalu mengucapkan salam "Assalamu\'alaikum wa Rahmatullahi wa Barakatuh" saat bertemu teman dan guru? Jelaskan hubungannya dengan As-Salām!',
    context: 'Makna Ucapan Salam (HOTS - Evaluation)',
    sampleAnswer: 'Karena ucapan salam adalah doa kebaikan yang memohonkan keselamatan, rahmat, dan keberkahan dari Allah Swt. Mendoakan keselamatan sesama muslim mencerminkan teladan sifat As-Salām (Maha Pemberi Keselamatan).'
  },
  {
    id: 5,
    question: 'Tuliskan 3 contoh kegiatan yang dapat kamu lakukan di rumah bersama keluarga untuk meneladani sifat-sifat Asmaul Husna!',
    context: 'Penerapan di Rumah (HOTS - Application)',
    sampleAnswer: '1. Ar-Raḥmān: Membantu ibu menyiram tanaman dan memberi makan hewan peliharaan.\n2. Ar-Raḥīm: Menyayangi dan mengajari adik membaca.\n3. As-Salām & Al-Mu\'min: Berbicara sopan kepada orang tua, mengucap salam saat masuk rumah, dan tidak mengambil barang saudara tanpa izin.'
  }
];
