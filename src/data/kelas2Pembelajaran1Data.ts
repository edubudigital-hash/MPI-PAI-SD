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
// 1. SLIDES DATA MATERI (19 SLIDES)
// ==========================================
export const SLIDES_KELAS2_P1: SlideData[] = [
  {
    id: 1,
    badge: 'Tujuan & Pengenalan Bab 1',
    title: 'Mengenal Al-Qur\'an, Huruf Hijaiyah & Surah Al-Mu\'awwidzatain',
    content: 'Al-Qur\'an adalah kitab suci umat Islam yang menjadi petunjuk hidup. Agar dapat membaca Al-Qur\'an dengan lancar, kita perlu belajar membaca dan menulis huruf hijaiyah bersambung tiga huruf, serta memahami Surah An-Nas dan Surah Al-Falaq.',
    bulletPoints: [
      'Membaca dan menulis huruf hijaiyah bersambung 3 huruf.',
      'Membaca Surah An-Nas (6 ayat) dan Surah Al-Falaq (5 ayat) dengan tartil.',
      'Mengartikan dan memahami pesan pokok Surah An-Nas & Al-Falaq.',
      'Menerapkan amalan harian dan mengambil hikmah dari Surah An-Nas & Al-Falaq.'
    ],
    quiz: {
      question: 'Kitab suci yang menjadi petunjuk hidup seluruh umat Islam adalah...',
      options: ['Al-Qur\'an', 'Taurat', 'Zabur', 'Injil'],
      correct: 0,
      explanation: 'Al-Qur\'an adalah kitab suci umat Islam yang dibaca setiap hari sebagai petunjuk hidup.'
    }
  },
  {
    id: 2,
    badge: 'Membaca Hijaiyah 3 Huruf',
    title: 'Mengenal Huruf Hijaiyah Bersambung 3 Huruf',
    content: 'Huruf hijaiyah berjumlah 29 huruf. Dalam bahasa Arab, sebagian besar huruf akan bersambung dengan huruf berikutnya. Oleh karena itu, bentuk huruf dapat berubah saat berada di awal, tengah, atau akhir kata.',
    keyTerms: [
      { term: 'Awal Kata', definition: 'Bentuk huruf di bagian depan kata, menyambung ke huruf berikutnya.' },
      { term: 'Tengah Kata', definition: 'Bentuk huruf di tengah, menyambung ke huruf sebelum dan sesudahnya.' },
      { term: 'Akhir Kata', definition: 'Bentuk huruf di akhir, menyambung hanya dari huruf sebelumnya.' },
      { term: 'Tiga Huruf', definition: 'Kata pendek yang tersusun dari 3 huruf hijaiyah dasar.' }
    ],
    quiz: {
      question: 'Berapakah jumlah huruf hijaiyah utama yang digunakan dalam Al-Qur\'an?',
      options: ['20 huruf', '25 huruf', '29 huruf', '99 huruf'],
      correct: 2,
      explanation: 'Huruf hijaiyah dasar berjumlah 29 huruf.'
    }
  },
  {
    id: 3,
    badge: 'Contoh Kata 3 Huruf',
    title: 'Membaca Kata Bersambung Tiga Huruf',
    content: 'Perhatikan dan bacalah contoh kata 3 huruf berikut secara perlahan dan tepat sesuai harakatnya:',
    tableData: [
      { col1: 'قَلَمٌ (qalamun)', col2: 'Huruf: Qaf + Lam + Mim', col3: 'Artinya: Pena' },
      { col1: 'كَتَبَ (kataba)', col2: 'Huruf: Kaf + Ta + Ba', col3: 'Artinya: Menulis' },
      { col1: 'ذَهَبَ (dzahaba)', col2: 'Huruf: Dzal + Ha + Ba', col3: 'Artinya: Pergi' },
      { col1: 'خَرَجَ (kharaja)', col2: 'Huruf: Kha + Ra + Jim', col3: 'Artinya: Keluar' },
      { col1: 'نُوْرٌ (nuurun)', col2: 'Huruf: Nun + Wau + Ra', col3: 'Artinya: Cahaya' },
      { col1: 'عَلَمٌ (\'alamun)', col2: 'Huruf: \'Ain + Lam + Mim', col3: 'Artinya: Bendera' }
    ],
    quiz: {
      question: 'Kata "كَتَبَ" dibaca...',
      options: ['Qalamun', 'Kataba', 'Dzahaba', 'Kharaja'],
      correct: 1,
      explanation: 'Kata كَتَبَ dibaca Kataba yang artinya menulis.'
    }
  },
  {
    id: 4,
    badge: 'Menulis Hijaiyah 3 Huruf',
    title: 'Langkah-Langkah Menulis Huruf Hijaiyah Bersambung',
    content: 'Menulis huruf Arab memerlukan ketelitian. Agar tulisan rapi dan benar, perhatikan 4 aturan utama menulis berikut:',
    bulletPoints: [
      '1. Mulailah menulis dari arah KANAN ke KIRI.',
      '2. Perhatikan perubahan bentuk huruf di awal, tengah, dan akhir kata.',
      '3. Berikan harakat (Fathah, Kasrah, Dammah, Tanwin) dengan tepat.',
      '4. Tulislah secara rapi dan lakukan latihan berulang-ulang.'
    ],
    quiz: {
      question: 'Arah penulisan huruf Arab dan Al-Qur\'an dimulai dari...',
      options: ['Kiri ke Kanan', 'Kanan ke Kiri', 'Atas ke Bawah', 'Bawah ke Atas'],
      correct: 1,
      explanation: 'Penulisan huruf Arab selalu dimulai dari kanan menuju ke kiri.'
    }
  },
  {
    id: 5,
    badge: 'Manfaat Belajar',
    title: 'Manfaat Mempelajari Huruf Hijaiyah',
    content: 'Belajar membaca dan menulis huruf hijaiyah mempunyai banyak manfaat besar bagi kehidupan anak muslim sejak usia dini:',
    bulletPoints: [
      'Dapat membaca Al-Qur\'an dengan baik dan benar.',
      'Mudah menghafalkan surah-surah pendek Al-Qur\'an.',
      'Menambah rasa cinta dan kebanggaan kepada Al-Qur\'an.',
      'Memperoleh pahala berlipat ganda dari Allah Swt.',
      'Menjadi bekal utama dalam mempelajari ilmu agama Islam.'
    ],
    quiz: {
      question: 'Anjuran Rasulullah SAW tentang membaca Al-Qur\'an adalah dipelajari sejak...',
      options: ['Usia tua saja', 'Usia dini / kecil', 'Saat dewasa saja', 'Hanya di sekolah'],
      correct: 1,
      explanation: 'Rasulullah SAW menganjurkan umatnya belajar membaca Al-Qur\'an sejak usia dini.'
    }
  },
  {
    id: 6,
    badge: 'Mengenal Surah An-Nas',
    title: 'Identitas Surah An-Nas',
    content: 'Surah An-Nas adalah surah ke-114 (surah terakhir) dalam Al-Qur\'an. Surah ini terdiri atas 6 ayat dan tergolong surah Makkiyah karena diturunkan di kota Makkah.',
    keyTerms: [
      { term: 'An-Nas', definition: 'Artinya "Manusia".' },
      { term: 'Urutan Surah', definition: 'Surah ke-114 dalam Al-Qur\'an.' },
      { term: 'Jumlah Ayat', definition: 'Terdiri atas 6 ayat.' },
      { term: 'Golongan Surah', definition: 'Makkiyah (diturunkan sebelum Nabi hijrah).' }
    ],
    quiz: {
      question: 'Surah An-Nas terdiri dari ... ayat.',
      options: ['3 ayat', '5 ayat', '6 ayat', '7 ayat'],
      correct: 2,
      explanation: 'Surah An-Nas terdiri dari 6 ayat.'
    }
  },
  {
    id: 7,
    badge: 'Teks & Terjemahan An-Nas',
    title: 'Membaca dan Mengartikan Surah An-Nas',
    content: 'Bacalah Surah An-Nas ayat 1 sampai 6 berikut secara tartil:',
    arabicText: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾',
    translation: '1. Katakanlah, "Aku berlindung kepada Tuhan manusia." 2. Raja manusia. 3. Sembahan manusia. 4. Dari kejahatan (setan) yang biasa bersembunyi. 5. Yang membisikkan (kejahatan) ke dalam dada manusia. 6. Dari golongan jin dan manusia.',
    quiz: {
      question: 'Arti dari ayat "مَلِكِ النَّاسِ" (Ayat 2) adalah...',
      options: ['Sembahan manusia', 'Raja manusia', 'Tuhan manusia', 'Kejahatan bisikan'],
      correct: 1,
      explanation: 'Malikin-Naas artinya Raja manusia.'
    }
  },
  {
    id: 8,
    badge: 'Pesan Pokok An-Nas',
    title: 'Pesan Pokok Surah An-Nas',
    content: 'Surah An-Nas mengajarkan bahwa Allah Swt. adalah Pencipta, Pemilik, dan Penguasa seluruh manusia. Kita hanya boleh menyembah dan memohon perlindungan kepada Allah Swt. dari godaan setan yang membisikkan kejahatan.',
    bulletPoints: [
      'Allah adalah Tuhan, Raja, dan Sembahan seluruh manusia.',
      'Allah adalah satu-satunya tempat berlindung saat merasa takut, sedih, atau khawatir.',
      'Setan selalu berusaha menggoda manusia agar malas beribadah, berbohong, dan bertengkar.',
      'Selalu mengingat Allah dengan salat, berdoa, zikir, dan membaca Al-Qur\'an.'
    ],
    quiz: {
      question: 'Godaan setan bertujuan membuat manusia...',
      options: ['Rajin belajar', 'Malas beribadah & suka berbohong', 'Hormat pada orang tua', 'Suka bersedekah'],
      correct: 1,
      explanation: 'Godaan setan membisikkan kejahatan agar manusia malas ibadah, berbohong, dan berbuat buruk.'
    }
  },
  {
    id: 9,
    badge: 'Penerapan Surah An-Nas',
    title: 'Penerapan Surah An-Nas dalam Kehidupan Sehari-hari',
    content: 'Anak yang mengamalkan Surah An-Nas akan membiasakan perilaku-perilaku terpuji berikut dalam kehidupan sehari-hari:',
    bulletPoints: [
      'Rajin berdoa sebelum belajar.',
      'Membaca Surah An-Nas sebelum tidur.',
      'Tidak takut karena yakin Allah selalu melindungi.',
      'Rajin salat lima waktu.',
      'Membaca Al-Qur\'an setiap hari.',
      'Menjauhi perbuatan buruk.',
      'Berkata jujur dalam setiap tindakan.',
      'Menghormati orang tua dan guru.'
    ],
    quiz: {
      question: 'Berikut ini manakah yang MERUPAKAN penerapan amalan Surah An-Nas sebelum tidur?',
      options: ['Membaca Surah An-Nas', 'Bermain game sampai larut', 'Menonton TV hingga tertidur', 'Tidur tanpa berdoa'],
      correct: 0,
      explanation: 'Salah satu pengamalan Surah An-Nas adalah rutin membacanya sebelum tidur.'
    }
  },
  {
    id: 10,
    badge: 'Hikmah Surah An-Nas',
    title: 'Hikmah Mempelajari Surah An-Nas',
    content: 'Setelah mempelajari Surah An-Nas dan huruf hijaiyah, kita memperoleh hikmah dan pelajaran berharga, di antaranya:',
    bulletPoints: [
      'Membaca Al-Qur\'an adalah ibadah yang mulia dan berpahala.',
      'Huruf hijaiyah harus dipelajari dan dilatih sejak kecil.',
      'Surah An-Nas mengajarkan kita agar selalu memohon perlindungan kepada Allah Swt.',
      'Allah Swt. adalah Tuhan, Raja, dan Pelindung seluruh manusia.',
      'Membaca Al-Qur\'an menjadikan hati tenang dan menambah keimanan kita.'
    ],
    quiz: {
      question: 'Membaca Al-Qur\'an setiap hari akan membuat hati menjadi...',
      options: ['Gelisah', 'Tenang & menambah keimanan', 'Sombong', 'Penakut'],
      correct: 1,
      explanation: 'Membaca Al-Qur\'an menjadikan hati tenang, damai, dan semakin menambah keimanan.'
    }
  },
  {
    id: 11,
    badge: 'Kisah Teladan An-Nas',
    title: 'Kisah Teladan Aisyah & Keberanian Berdoa',
    content: 'Aisyah siswa kelas II SD biasa membaca Surah An-Nas sebelum tidur. Suatu malam listrik padam dan suasana menjadi gelap. Adiknya merasa takut. Aisyah menenangkan adiknya: "Jangan takut, mari kita membaca Surah An-Nas dan berdoa kepada Allah." Setelah membaca Surah An-Nas, hati mereka menjadi tenang karena yakin Allah selalu melindungi.',
    quiz: {
      question: 'Sikap Aisyah saat adiknya takut di kegelapan adalah...',
      options: ['Ikut menangis keras', 'Mengajak membaca Surah An-Nas & berdoa', 'Lari keluar rumah', 'Dimarahin adiknya'],
      correct: 1,
      explanation: 'Aisyah menenangkan adiknya dengan mengajak membaca Surah An-Nas dan berdoa memohon perlindungan Allah.'
    }
  },
  {
    id: 12,
    badge: 'Mengenal Surah Al-Falaq',
    title: 'Identitas Surah Al-Falaq & Al-Mu\'awwidzatain',
    content: 'Surah Al-Falaq adalah surah ke-113 dalam Al-Qur\'an yang terdiri atas 5 ayat dan termasuk surah Makkiyah. Al-Falaq artinya "waktu subuh" atau fajar yang menyingsing. Surah An-Nas dan Surah Al-Falaq disebut "Al-Mu\'awwidzatain" (dua surah pemohon perlindungan).',
    keyTerms: [
      { term: 'Al-Falaq', definition: 'Artinya "Waktu Subuh / Fajar".' },
      { term: 'Urutan Surah', definition: 'Surah ke-113 dalam Al-Qur\'an.' },
      { term: 'Jumlah Ayat', definition: 'Terdiri atas 5 ayat.' },
      { term: 'Al-Mu\'awwidzatain', definition: 'Dua surah (An-Nas & Al-Falaq) yang berisi doa perlindungan kepada Allah.' }
    ],
    quiz: {
      question: 'Nama Al-Falaq memiliki arti...',
      options: ['Manusia', 'Waktu Subuh / Fajar', 'Malam hari', 'Pertolongan'],
      correct: 1,
      explanation: 'Al-Falaq berarti waktu subuh atau fajar yang menyingsing.'
    }
  },
  {
    id: 13,
    badge: 'Teks & Terjemahan Al-Falaq',
    title: 'Membaca dan Mengartikan Surah Al-Falaq',
    content: 'Bacalah Surah Al-Falaq ayat 1 sampai 5 berikut secara perlahan dan jelas sesuai tajwid:',
    arabicText: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِنْ شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾',
    translation: '1. Katakanlah, "Aku berlindung kepada Tuhan yang menguasai subuh." 2. Dari kejahatan makhluk yang Dia ciptakan. 3. Dan dari kejahatan malam apabila telah gelap gulita. 4. Dan dari kejahatan perempuan-perempuan penyihir yang meniup pada buhul-buhul tali. 5. Dan dari kejahatan orang yang dengki apabila ia dengki.',
    quiz: {
      question: 'Surah Al-Falaq terdiri atas ... ayat.',
      options: ['4 ayat', '5 ayat', '6 ayat', '7 ayat'],
      correct: 1,
      explanation: 'Surah Al-Falaq terdiri atas 5 ayat.'
    }
  },
  {
    id: 14,
    badge: 'Pesan Pokok Al-Falaq',
    title: 'Pesan Pokok Surah Al-Falaq',
    content: 'Surah Al-Falaq mengajarkan kita agar selalu memohon perlindungan hanya kepada Allah Swt. dari berbagai kejahatan makhluk, kegelapan malam, dan kejahatan orang yang dengki (iri hati).',
    bulletPoints: [
      'Allah Swt. adalah Pelindung terbaik dari segala bahaya makhluk.',
      'Berlindung dari kegelapan malam dengan membaca doa sebelum tidur.',
      'Menjauhi sifat dengki (iri hati) dan bersyukur atas nikmat Allah.',
      'Ikut bergembira atas keberhasilan dan prestasi orang lain.'
    ],
    quiz: {
      question: 'Sifat dengki (iri hati) artinya...',
      options: ['Senang melihat teman gembira', 'Tidak senang melihat orang lain dapat nikmat', 'Suka menolong sesama', 'Rajin bersedekah'],
      correct: 1,
      explanation: 'Dengki adalah perasaan tidak senang melihat orang lain memperoleh nikmat.'
    }
  },
  {
    id: 15,
    badge: 'Penerapan Surah Al-Falaq',
    title: 'Penerapan Surah Al-Falaq dalam Kehidupan Sehari-hari',
    content: 'Nilai-nilai Surah Al-Falaq dapat kita terapkan dalam perilaku harian dengan cara-cara berikut:',
    bulletPoints: [
      'Membaca Surah Al-Falaq sebelum tidur.',
      'Membaca Surah Al-Falaq setelah salat.',
      'Berdoa kepada Allah ketika merasa takut.',
      'Tidak iri hati / tidak dengki kepada teman.',
      'Mengucapkan selamat ketika teman memperoleh prestasi atau kebahagiaan.',
      'Bersyukur atas segala nikmat yang diberikan Allah Swt.',
      'Menjaga diri dari perbuatan buruk dan membahayakan.'
    ],
    quiz: {
      question: 'Ketika teman sekelas memperoleh prestasi juara, sikap yang SESUAI dengan Surah Al-Falaq adalah...',
      options: ['Ejek dan acuhkan', 'Iri hati dan cemberut', 'Mengucapkan selamat dan bersyukur', 'Memusuhi teman tersebut'],
      correct: 2,
      explanation: 'Pengamalan Surah Al-Falaq mengajarkan kita ikut gembira dan mengucapkan selamat atas keberhasilan orang lain.'
    }
  },
  {
    id: 16,
    badge: 'Hikmah Surah Al-Falaq',
    title: 'Hikmah Mempelajari Surah Al-Falaq',
    content: 'Setelah mempelajari Surah Al-Falaq, kita memperoleh banyak hikmah dan manfaat berharga bagi kehidupan seorang muslim:',
    bulletPoints: [
      'Semakin yakin bahwa Allah Swt. adalah Pelindung terbaik dari segala bahaya.',
      'Rajin berdoa memohon perlindungan dalam setiap keadaan.',
      'Terhindar dari sifat penyakit hati seperti iri dan dengki (hasad).',
      'Merasa tenang dan aman karena selalu mengingat Allah Swt.',
      'Mencintai Al-Qur\'an dan membiasakan membacanya setiap hari.'
    ],
    quiz: {
      question: 'Salah satu hikmah utama mempelajari Surah Al-Falaq adalah menjaga diri agar terhindar dari sifat...',
      options: ['Iri dan dengki', 'Jujur dan sabar', 'Dermawan', 'Rendah hati'],
      correct: 0,
      explanation: 'Surah Al-Falaq membentengi hati dari kejahatan orang yang dengki dan menjauhkan kita dari sifat iri hati.'
    }
  },
  {
    id: 17,
    badge: 'Kisah Teladan Al-Falaq',
    title: 'Kisah Teladan Rina & Dinda (Menjauhi Sifat Dengki)',
    content: 'Rina dan Dinda mengikuti lomba menggambar di sekolah. Dinda menjadi juara pertama, sedangkan Rina belum menang. Rina tidak iri hati. Ia memberikan ucapan selamat kepada Dinda dan berjanji belajar lebih giat. Malam harinya, Rina membaca Surah Al-Falaq & An-Nas memohon agar selalu diberi hati yang bersih dari sifat dengki.',
    quiz: {
      question: 'Sikap Rina ketika Dinda menang lomba menggambar adalah...',
      options: ['Marah dan memusuhi Dinda', 'Iri dan merobek gambar Dinda', 'Mengucapkan selamat dan tidak iri hati', 'Pindah sekolah'],
      correct: 2,
      explanation: 'Rina mengucapkan selamat kepada Dinda, bersikap sportif, dan menjauhi iri hati.'
    }
  },
  {
    id: 18,
    badge: 'Tahukah Kamu?',
    title: 'Kebiasaan Mulia Rasulullah SAW Sebelum Tidur',
    content: 'Rasulullah SAW sangat sering membaca Surah Al-Falaq dan Surah An-Nas sebelum tidur. Setelah membacanya, beliau meniup kedua telapak tangan, lalu mengusapkannya ke wajah dan seluruh anggota tubuh sebagai doa memohon perlindungan Allah Swt.',
    bulletPoints: [
      'Membaca Surah An-Nas dan Surah Al-Falaq.',
      'Meniup lembut kedua telapak tangan.',
      'Mengusap seluruh tubuh yang dapat dijangkau.',
      'Meneladani sunnah Rasulullah SAW agar tidur tenang dan dijaga Allah.'
    ],
    quiz: {
      question: 'Setelah membaca Surah Al-Falaq dan An-Nas sebelum tidur, Rasulullah SAW...',
      options: ['Meniup telapak tangan & mengusap ke tubuh', 'Mencuci tangan dengan air panas', 'Berteriak keras', 'Tidur terlentang tanpa berdoa'],
      correct: 0,
      explanation: 'Rasulullah SAW meniup kedua telapak tangan lalu mengusapkannya ke wajah dan seluruh tubuh.'
    }
  },
  {
    id: 19,
    badge: 'Rangkuman & Refleksi',
    title: 'Rangkuman & Kebiasaan Sehari-hari',
    content: 'Mempelajari membaca dan menulis huruf hijaiyah bersambung serta Surah An-Nas dan Al-Falaq melatih ketelitian, menambah kecintaan kepada Al-Qur\'an, dan menjaga kita selalu berada dalam perlindungan Allah Swt.',
    tableData: [
      { col1: 'Membaca Hijaiyah 3 Huruf', col2: 'Mulai dari kanan, perhatikan bentuk awal-tengah-akhir', col3: 'Penerapan: Latihan rutin' },
      { col1: 'Surah An-Nas (6 Ayat)', col2: 'Surah ke-114, memohon perlindungan dari bisikan setan', col3: 'Penerapan: Dibaca sebelum tidur & berdoa' },
      { col1: 'Surah Al-Falaq (5 Ayat)', col2: 'Surah ke-113, perlindungan dari kejahatan & sifat dengki', col3: 'Penerapan: Dibaca setelah salat & tidak iri' }
    ],
    quiz: {
      question: 'Surah An-Nas dan Surah Al-Falaq bersama-sama disebut...',
      options: ['Al-Mu\'awwidzatain', 'Asmaul Husna', 'Wal-\'Ashri', 'Rukun Islam'],
      correct: 0,
      explanation: 'An-Nas dan Al-Falaq disebut Al-Mu\'awwidzatain (dua surah pemohon perlindungan).'
    }
  }
];

// ==========================================
// 2. PROYEK MURID (2 PjBL + 2 PBL)
// ==========================================
export const PROYEK_KELAS2_P1: ProyekData[] = [
  {
    id: 'pjbl-2-1-1',
    type: 'PjBL',
    category: 'Media Kreatif Hijaiyah',
    title: 'Pohon Hijaiyah Bersambung 3 Huruf',
    description: 'Murid merancang dan membuat hiasan "Pohon Hijaiyah 3 Huruf" dari kertas karton warna-warni yang memuat 5 kata hijaiyah 3 huruf (contoh: كَتَبَ, قَلَمٌ, ذَهَبَ, خَرَجَ, نُوْرٌ) beserta bentuk huruf awal, tengah, dan akhirnya.',
    steps: [
      'Siapkan karton, gunting, spidol warna, dan lem kertas.',
      'Gambar pola batang pohon di karton dan gunting dengan rapi.',
      'Tuliskan 5 kata hijaiyah 3 huruf pada daun-daun kertas warna.',
      'Tandai warna berbeda untuk huruf awal, tengah, dan akhir kata.',
      'Tempelkan daun-daun kata pada ranting pohon dan hias secara kreatif.'
    ],
    output: 'Hiasan Dinding "Pohon Hijaiyah Bersambung 3 Huruf" Kreatif.',
    assessmentCriteria: [
      'Kerapian penulisan huruf bersambung dari kanan ke kiri',
      'Ketepatan harakat dan perubahan bentuk huruf awal-tengah-akhir',
      'Kreativitas estetika hiasan pohon',
      'Kerjasama dan kerapian penggunaan alat'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pjbl-2-1-2',
    type: 'PjBL',
    category: 'Kalender Amalan & Kartu Surah',
    title: 'Kartu Kaligrafi & Kalender Amalan Surah Al-Mu\'awwidzatain',
    description: 'Murid membuat kartu kaligrafi indah berisi Surah An-Nas atau Al-Falaq yang dilengkapi dengan "Tabel Centang Amalan Membaca Surah Sebelum Tidur" selama 7 hari.',
    steps: [
      'Siapkan kertas tebal A4 atau kertas bergaris hias.',
      'Tuliskan kaligrafi sederhana Surah An-Nas atau Al-Falaq secara rapi.',
      'Buat tabel centang amalan 7 hari (Senin s.d. Minggu) di bagian bawah kartu.',
      'Hias pinggiran kartu dengan ornamen bunga atau bintang islami.',
      'Gantungkan kartu di dekat tempat tidur dan isi centang setiap sebelum tidur.'
    ],
    output: 'Kartu Kaligrafi Surah & Kalender Amalan Rutin Sebelum Tidur.',
    assessmentCriteria: [
      'Kejelasan penulisan teks Arab Surah An-Nas / Al-Falaq',
      'Kerapian tabel amalan 7 hari',
      'Keindahan hiasan kaligrafi',
      'Kedisiplinan pengisian amalan harian'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pbl-2-1-3',
    type: 'PBL',
    category: 'Studi Kasus Keberanian (An-Nas)',
    title: 'Mengatasi Rasa Takut Saat Gelap (Studi Kasus Aisyah)',
    description: 'Murid mendiskusikan masalah ketika mengalami suasana gelap / lampu padam seperti kisah Aisyah dan adiknya, lalu menyusun langkah penanganan rasa takut sesuai ajaran Surah An-Nas.',
    steps: [
      'Simak skenario kisah Aisyah saat listrik padam dan adiknya ketakutan.',
      'Diskusi kelompok: Mengapa seseorang bisa merasa takut saat kegelapan?',
      'Temukan solusi islami berdasarkan pesan pokok Surah An-Nas.',
      'Peragakan simulasi cara menenangkan adik yang takut dengan membaca Surah An-Nas dan berdoa.',
      'Tuliskan kesimpulan cara memohon perlindungan kepada Allah Swt.'
    ],
    output: 'Lembar Bermain Peran (Roleplay) & Solusi Mengatasi Rasa Takut.',
    assessmentCriteria: [
      'Kemampuan mengidentifikasi akar masalah rasa takut',
      'Ketetapan mengaitkan solusi dengan Surah An-Nas',
      'Keberanian menyampaikan pendapat dan peragaan',
      'Penghayatan keyakinan perlindungan Allah'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  },
  {
    id: 'pbl-2-1-4',
    type: 'PBL',
    category: 'Studi Kasus Sifat Dengki (Al-Falaq)',
    title: 'Menjauhi Sifat Iri/Dengki Ketika Teman Berprestasi',
    description: 'Murid menganalisis masalah ketika perasaan cemburu atau iri timbul saat teman sekelas memenangkan perlombaan menggambar (kasus Rina & Dinda), serta merumuskan sikap terpuji sesuai Surah Al-Falaq.',
    steps: [
      'Baca kisah Rina yang sedih karena Dinda meraih juara 1 menggambar.',
      'Analisis: Apa bedanya perasaan sedih biasa dengan sifat iri dengki?',
      'Rumuskan 3 tindakan baik yang harus dilakukan Rina (mengucapkan selamat, berdoa, belajar giat).',
      'Diskusikan bagaimana membaca Surah Al-Falaq membantu membersihkan hati dari iri hati.',
      'Presentasikan "Komitmen Hati Bersih Bebas Dengki" di depan kelas.'
    ],
    output: 'Poster Poster Komitmen "Selamat Atas Prestasimu, Teman!".',
    assessmentCriteria: [
      'Pemahaman mengenai bahaya sifat iri dengki',
      'Kesesuaian tindakan pemecahan masalah dengan Surah Al-Falaq',
      'Kemampuan berempati dan bersikap sportif',
      'Kerapian dan kejelasan poster komitmen'
    ],
    policyNote: 'Sesuai Kebijakan Guru'
  }
];

// ==========================================
// 3. GAMIFIKASI (PETUALANGAN INTERAKTIF HIJAIYAH & AL-MUAWWIDZATAIN)
// ==========================================
export const GAMIFIKASI_MISSION_KELAS2_P1: GamifikasiMission[] = [
  {
    id: 1,
    title: 'Misi 1: Menyambung Kata Hijaiyah',
    khalifahOrTopic: 'Detektif Hijaiyah 3 Huruf',
    scenario: 'Kamu menemukan 3 huruf terpisah: Kaf (ك), Ta (ت), dan Ba (ب). Kamu perlu menyambungkannya dari kanan ke kiri menjadi satu kata yang utuh dan rapi.',
    question: 'Manakah bentuk huruf bersambung 3 huruf yang tepat?',
    options: [
      {
        text: 'كَتَبَ (kataba)',
        isCorrect: true,
        feedback: 'Tepat sekali! Kaf di awal, Ta di tengah, dan Ba di akhir menyambung dengan sempurna dari kanan ke kiri menjadi كَتَبَ.'
      },
      {
        text: 'بَتَك (bataka)',
        isCorrect: false,
        feedback: 'Kurang tepat. Urutan penulisan dari kanan harus dimulai dari huruf Kaf, lalu Ta, lalu Ba.'
      },
      {
        text: 'ك ت ب (terpisah)',
        isCorrect: false,
        feedback: 'Huruf Arab dalam kata harus disambungkan, tidak boleh dibiarkan terpisah.'
      }
    ],
    computationalConcept: 'Decomposition & Pattern Recognition: Memecah kata menjadi huruf penyusunnya dan mengenali pola bentuk huruf di awal, tengah, serta akhir.'
  },
  {
    id: 2,
    title: 'Misi 2: Susunan Ayat Surah An-Nas',
    khalifahOrTopic: 'Surah An-Nas (Ayat 1-3)',
    scenario: 'Urutan ayat Surah An-Nas acak-acakan. Kamu diminta mengurutkan dari ayat pertama sampai ayat ketiga.',
    question: 'Manakah urutan ayat 1, 2, dan 3 Surah An-Nas yang benar?',
    options: [
      {
        text: '1. قُلْ أَعُوذُ بِرَبِّ النَّاسِ  2. مَلِكِ النَّاسِ  3. إِلَٰهِ النَّاسِ',
        isCorrect: true,
        feedback: 'Hebat! Kamu berhasil mengurutkan ayat 1 (Qul a\'uudzu birabbin-naas), ayat 2 (Malikin-naas), dan ayat 3 (Ilaahin-naas) dengan tepat.'
      },
      {
        text: '1. مَلِكِ النَّاسِ  2. إِلَٰهِ النَّاسِ  3. قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        isCorrect: false,
        feedback: 'Kurang tepat. Qul a\'uudzu birabbin-naas adalah ayat pertama, bukan ayat ketiga.'
      },
      {
        text: '1. إِلَٰهِ النَّاسِ  2. قُلْ أَعُوذُ بِرَبِّ النَّاسِ  3. مَلِكِ النَّاسِ',
        isCorrect: false,
        feedback: 'Masih keliru. Perhatikan nomor urut ayat Surah An-Nas dari ayat 1.'
      }
    ],
    computationalConcept: 'Algorithm: Menyusun instruksi dan barisan ayat secara runtut sesuai urutan Al-Qur\'an.'
  },
  {
    id: 3,
    title: 'Misi 3: Pencari Makna Surah Al-Falaq',
    khalifahOrTopic: 'Surah Al-Falaq',
    scenario: 'Kamu ditanya arti nama "Al-Falaq" dan berapa jumlah ayat dalam Surah Al-Falaq.',
    question: 'Apa arti kata "Al-Falaq" dan berapakah jumlah ayatnya?',
    options: [
      {
        text: 'Manusia, terdiri dari 6 ayat',
        isCorrect: false,
        feedback: 'Itu adalah keterangan untuk Surah An-Nas, bukan Surah Al-Falaq.'
      },
      {
        text: 'Waktu Subuh / Fajar, terdiri dari 5 ayat',
        isCorrect: true,
        feedback: 'Benar sekali! Al-Falaq artinya waktu subuh atau fajar yang menyingsing, terdiri dari 5 ayat.'
      },
      {
        text: 'Malam yang gelap, terdiri dari 3 ayat',
        isCorrect: false,
        feedback: 'Kurang tepat. Al-Falaq artinya waktu subuh, bukan malam hari.'
      }
    ],
    computationalConcept: 'Abstraction: Mengambil fakta kunci dan definisi penting dari materi Surah Al-Falaq.'
  },
  {
    id: 4,
    title: 'Misi 4: Menolong Adik di Suasana Gelap',
    khalifahOrTopic: 'Penerapan Surah An-Nas',
    scenario: 'Malam hari tiba-tiba listrik di rumah padam. Adikmu merasa ketakutan karena suasana sangat gelap.',
    question: 'Tindakan terpuji manakah yang sesuai dengan kisah Aisyah dan ajaran Surah An-Nas?',
    options: [
      {
        text: 'Menakut-nakuti adik dengan cerita hantu',
        isCorrect: false,
        feedback: 'Tindakan ini buruk dan menambah ketakutan adik.'
      },
      {
        text: 'Mengajak adik membaca Surah An-Nas & berdoa memohon perlindungan Allah',
        isCorrect: true,
        feedback: 'Luar biasa! Allah adalah tempat berlindung dari segala rasa takut dan godaan.'
      },
      {
        text: 'Berteriak-teriak dan menangis di dalam kamar',
        isCorrect: false,
        feedback: 'Menangis tidak menyelesaikan masalah. Ingatlah membaca Surah An-Nas.'
      }
    ],
    computationalConcept: 'Problem Solving: Menentukan tindakan penyelesaian masalah berdasarkan ajaran agama.'
  },
  {
    id: 5,
    title: 'Misi 5: Menghalau Sifat Dengki Seperti Rina',
    khalifahOrTopic: 'Penerapan Surah Al-Falaq',
    scenario: 'Teman sekelasmu berhasil menjadi juara pertama lomba membaca Al-Qur\'an, sedangkan kamu belum mendapatkan juara.',
    question: 'Sikap manakah yang mencerminkan pengamalan Surah Al-Falaq (menjauhi sifat dengki)?',
    options: [
      {
        text: 'Mengucapkan selamat dengan ikhlas dan berniat belajar lebih giat',
        isCorrect: true,
        feedback: 'Masya Allah! Kamu memiliki hati yang bersih seperti Rina, bebas dari iri dan dengki.'
      },
      {
        text: 'Cemberut dan memusuhi teman yang menjadi juara',
        isCorrect: false,
        feedback: 'Sikap ini mencerminkan sifat dengki yang dilarang dalam Surah Al-Falaq.'
      },
      {
        text: 'Mengejek piala yang didapatkan oleh teman',
        isCorrect: false,
        feedback: 'Perbuatan mengejek dilarang agama dan merusak tali persaudaraan.'
      }
    ],
    computationalConcept: 'Evaluation & Decision Making: Menilai pilihan sikap dan memilih keputusan yang paling berakhlak mulia.'
  }
];

// ==========================================
// 4. EVALUASI PEMBELAJARAN (HOTS & CT FOR KELAS 2)
// ==========================================

// A. 10 PILIHAN GANDA
export const EVALUASI_PG_KELAS2_P1: EvaluasiPG[] = [
  {
    id: 1,
    question: 'Jumlah huruf hijaiyah dasar yang digunakan dalam penulisan Al-Qur\'an adalah...',
    options: ['20 huruf', '25 huruf', '29 huruf', '30 huruf'],
    answer: 2,
    explanation: 'Huruf hijaiyah dasar berjumlah 29 huruf dari Alif hingga Ya.'
  },
  {
    id: 2,
    question: 'Penulisan kata dalam bahasa Arab dan Al-Qur\'an selalu dimulai dari arah...',
    options: ['Kiri ke Kanan', 'Kanan ke Kiri', 'Atas ke Bawah', 'Tengah ke Luar'],
    answer: 1,
    explanation: 'Bahasa Arab dan Al-Qur\'an ditulis dari arah kanan menuju ke kiri.'
  },
  {
    id: 3,
    question: 'Kata "قَلَمٌ" tersusun dari tiga huruf hijaiyah bersambung, yaitu...',
    options: ['Qaf, Lam, Mim', 'Kaf, Ta, Ba', 'Nun, Wau, Ra', 'Dzal, Ha, Ba'],
    answer: 0,
    explanation: 'Qalamun (قَلَمٌ) tersusun dari huruf Qaf, Lam, dan Mim.'
  },
  {
    id: 4,
    question: 'Surah An-Nas adalah surah terakhir dalam Al-Qur\'an yang menempati urutan ke-...',
    options: ['112', '113', '114', '115'],
    answer: 2,
    explanation: 'Surah An-Nas adalah surah ke-114 dalam Al-Qur\'an.'
  },
  {
    id: 5,
    question: 'Surah An-Nas terdiri dari ... ayat.',
    options: ['4 ayat', '5 ayat', '6 ayat', '7 ayat'],
    answer: 2,
    explanation: 'Surah An-Nas terdiri dari 6 ayat.'
  },
  {
    id: 6,
    question: 'Nama Surah An-Nas memiliki arti...',
    options: ['Waktu Subuh', 'Manusia', 'Pertolongan', 'Gejolak Api'],
    answer: 1,
    explanation: 'An-Nas artinya Manusia.'
  },
  {
    id: 7,
    question: 'Surah Al-Falaq merupakan surah ke-113 yang artinya...',
    options: ['Manusia', 'Waktu Subuh / Fajar', 'Malam hari', 'Maha Esa'],
    answer: 1,
    explanation: 'Al-Falaq berarti Waktu Subuh atau Fajar yang menyingsing.'
  },
  {
    id: 8,
    question: 'Surah An-Nas dan Surah Al-Falaq bersama-sama dinamakan...',
    options: ['Asmaul Husna', 'Al-Mu\'awwidzatain', 'Rukun Islam', 'Ummul Qur\'an'],
    answer: 1,
    explanation: 'Dua surah pemohon perlindungan dinamakan Al-Mu\'awwidzatain.'
  },
  {
    id: 9,
    question: 'Sifat tidak senang melihat orang lain memperoleh nikmat atau keberhasilan disebut...',
    options: ['Jujur', 'Dengki / Iri hati', 'Penyabar', 'Rendah hati'],
    answer: 1,
    explanation: 'Dengki (hasad) adalah perasaan tidak senang melihat orang lain mendapat kebaikan.'
  },
  {
    id: 10,
    question: 'Kebiasaan mulia Rasulullah SAW sebelum tidur adalah membaca Surah An-Nas & Al-Falaq, kemudian...',
    options: ['Meniup kedua telapak tangan & mengusapkan ke tubuh', 'Langsung tertidur tanpa berdoa', 'Makan makanan yang berat', 'Bermain sampai larut malam'],
    answer: 0,
    explanation: 'Rasulullah SAW meniup kedua telapak tangan lalu mengusapkannya ke wajah dan seluruh anggota tubuh.'
  }
];

// B. 3 PILIHAN GANDA KOMPLEKS (MULTI SELECT)
export const EVALUASI_PGK_KELAS2_P1: EvaluasiPGK[] = [
  {
    id: 1,
    question: 'Manakah dari pernyataan berikut yang MERUPAKAN contoh kata bersambung 3 huruf hijaiyah dengan benar? (Pilih lebih dari satu)',
    options: [
      'كَتَبَ (kataba)',
      'ذَهَبَ (dzahaba)',
      'سُبْحَانَ اللَّهِ (subhanallah)',
      'خَرَجَ (kharaja)'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Kataba, Dzahaba, dan Kharaja masing-masing terdiri dari 3 huruf hijaiyah bersambung.'
  },
  {
    id: 2,
    question: 'Manakah di antara pernyataan berikut yang MERUPAKAN kebenaran tentang Surah An-Nas? (Pilih lebih dari satu)',
    options: [
      'Terdiri atas 6 ayat',
      'Artinya adalah "Waktu Subuh"',
      'Termasuk surah Makkiyah',
      'Mengajarkan berlindung kepada Allah dari godaan setan'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'An-Nas terdiri atas 6 ayat, golongan Makkiyah, dan mengajarkan berlindung dari godaan setan. Artimya adalah "Manusia".'
  },
  {
    id: 3,
    question: 'Manakah perilaku sehari-hari yang SESUAI dengan pengamalan Surah Al-Falaq? (Pilih lebih dari satu)',
    options: [
      'Membaca Al-Falaq sebelum tidur dan setelah salat',
      'Mengucapkan selamat saat teman menjadi juara',
      'Iri hati melihat teman membeli mainan baru',
      'Berdoa memohon perlindungan Allah saat merasa takut'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Membaca doa, selamat atas keberhasilan teman, dan memohon perlindungan Allah adalah amalan Surah Al-Falaq.'
  }
];

// C. 3 MENJODOHKAN
export const EVALUASI_MENJODOHKAN_KELAS2_P1: EvaluasiMenjodohkan[] = [
  {
    id: 1,
    premise: 'Arti dari nama Surah An-Nas',
    matchTarget: 'Manusia',
    options: ['Manusia', 'Waktu Subuh', '29 Huruf', 'Dua Surah Perlindungan']
  },
  {
    id: 2,
    premise: 'Arti dari nama Surah Al-Falaq',
    matchTarget: 'Waktu Subuh',
    options: ['Manusia', 'Waktu Subuh', '29 Huruf', 'Dua Surah Perlindungan']
  },
  {
    id: 3,
    premise: 'Sebutan gabungan Surah An-Nas & Al-Falaq',
    matchTarget: 'Al-Mu\'awwidzatain',
    options: ['Al-Mu\'awwidzatain', '29 Huruf', 'Waktu Subuh', 'Manusia']
  }
];

// D. 4 BENAR / SALAH (+ ALASAN ISIAN)
export const EVALUASI_BENAR_SALAH_KELAS2_P1: EvaluasiBenarSalah[] = [
  {
    id: 1,
    statement: 'Arah penulisan huruf hijaiyah bersambung dimulai dari KIRI ke KANAN.',
    isCorrect: false,
    explanation: 'SALAH. Penulisan huruf hijaiyah bersambung selalu dimulai dari KANAN ke KIRI.'
  },
  {
    id: 2,
    statement: 'Surah An-Nas dan Surah Al-Falaq keduanya tergolong surah Makkiyah.',
    isCorrect: true,
    explanation: 'BENAR. Kedua surah tersebut diturunkan di Makkah sebelum Nabi Muhammad SAW hijrah.'
  },
  {
    id: 3,
    statement: 'Bentuk huruf hijaiyah di awal, tengah, dan akhir kata tidak pernah berubah.',
    isCorrect: false,
    explanation: 'SALAH. Sebagian besar huruf hijaiyah mengalami perubahan bentuk saat disambungkan di awal, tengah, atau akhir.'
  },
  {
    id: 4,
    statement: 'Rina menunjukkan pengamalan Surah Al-Falaq dengan mengucapkan selamat kepada Dinda yang menang lomba menggambar.',
    isCorrect: true,
    explanation: 'BENAR. Rina menjauhi sifat iri dengki dan ikut bergembira atas keberhasilan temannya.'
  }
];

// E. 5 SOAL URAIAN (HOTS & COMPUTATIONAL THINKING)
export const EVALUASI_URAIAN_KELAS2_P1: EvaluasiUraian[] = [
  {
    id: 1,
    question: 'Tuliskan langkah-langkah menyambung 3 huruf hijaiyah (Kaf, Ta, Ba) menjadi kata "كَتَبَ" beserta aturan arah penulisannya!',
    context: 'Aturan Menulis Hijaiyah (Computational Thinking - Algorithm)',
    sampleAnswer: '1. Mulai dari sebelah KANAN.\n2. Tulis huruf Kaf (ك) dalam bentuk awal kata.\n3. Sambungkan huruf Ta (ت) di tengah kata.\n4. Sambungkan huruf Ba (ب) di akhir kata.\n5. Berikan harakat fathah di atas ketiga huruf sehingga dibaca "Kataba" (كَتَبَ).'
  },
  {
    id: 2,
    question: 'Mengapa Surah An-Nas dan Surah Al-Falaq disebut "Al-Mu\'awwidzatain"? Jelaskan manfaat membacanya bagi anak sekolah!',
    context: 'Makna Surah & Manfaat (HOTS - Analysis)',
    sampleAnswer: 'Disebut Al-Mu\'awwidzatain karena keduanya berarti "dua surah pemohon perlindungan". Manfaatnya bagi anak sekolah adalah memberikan rasa tenang, menghilangkan rasa takut, melindungi dari godaan jahat/setan, dan membuat tidur nyenyak dalam penjagaan Allah Swt.'
  },
  {
    id: 3,
    question: 'Suatu malam lampu di rumah mati dan kamu merasa takut. Berdasarkan cerita Aisyah, tindakan apa yang harus kamu lakukan untuk mengatasi rasa takut tersebut?',
    context: 'Penerapan Kebiasaan Baik (HOTS - Problem Solving)',
    sampleAnswer: 'Tindakan yang dilakukan adalah:\n1. Berdoa memohon perlindungan kepada Allah Swt.\n2. Membaca Surah An-Nas dan Surah Al-Falaq.\n3. Menenangkan diri karena yakin Allah Maha Pengasih dan selalu melindungi hamba-Nya.'
  },
  {
    id: 4,
    question: 'Jelaskan apa yang dimaksud dengan sifat dengki (hasad), dan bagaimana cara kita menghindarinya sesuai cerita Rina dan Surah Al-Falaq!',
    context: 'Akhlak Terpuji Menjauhi Dengki (HOTS - Evaluation)',
    sampleAnswer: 'Sifat dengki adalah perasaan tidak senang melihat orang lain mendapat kebaikan atau keberhasilan. Cara menghindarinya sesuai cerita Rina adalah:\n1. Mengucapkan selamat secara ikhlas saat teman meraih prestasi.\n2. Membaca Surah Al-Falaq agar hati bersih.\n3. Bersyukur atas rezeki sendiri dan berniat belajar lebih giat tanpa iri.'
  },
  {
    id: 5,
    question: 'Jelaskan kebiasaan Rasulullah SAW sebelum tidur yang dapat kamu teladani setiap hari di rumah!',
    context: 'Peneladanan Sunnah Rasulullah (HOTS - Application)',
    sampleAnswer: 'Kebiasaan Rasulullah SAW sebelum tidur adalah:\n1. Membaca Surah An-Nas dan Surah Al-Falaq.\n2. Meniup kedua telapak tangan dengan lembut.\n3. Mengusapkan kedua telapak tangan ke wajah dan seluruh anggota tubuh.\n4. Berdoa sebelum tidur.'
  }
];
