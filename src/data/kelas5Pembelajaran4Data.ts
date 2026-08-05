export interface SlideContent {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  points: string[];
  arabicText?: string;
  latinText?: string;
  translation?: string;
  explanation: string;
  examples?: string[];
  color: string;
}

export interface ProjectTask {
  id: string;
  title: string;
  category: 'PjBL' | 'PBL';
  badge: string;
  description: string;
  objective: string;
  steps: string[];
  output: string;
  rubrik: string[];
  note: string; // "Sesuai kebijakan guru"
}

export interface QuestionPG {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index
  explanation: string;
}

export interface QuestionPGK {
  id: number;
  question: string;
  options: string[];
  correctAnswers: number[]; // Array of correct indices
  explanation: string;
}

export interface MatchPair {
  id: number;
  premise: string;
  answer: string;
}

export interface QuestionBS {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface QuestionEssay {
  id: number;
  question: string;
  rubric: string;
  sampleAnswer: string;
}

export const KELAS5_P4_SLIDES: SlideContent[] = [
  {
    id: 1,
    title: 'Pengertian Puasa & Dalil Al-Qur\'an',
    subtitle: 'Menahan Diri Mewujudkan Pribadi yang Bertakwa',
    icon: 'BookOpen',
    color: 'from-emerald-600 to-teal-700',
    arabicText: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
    latinText: 'Yā ayyuhallażīna āmanū kutiba \'alaikumuṣ-ṣiyāmu kamā kutiba \'alallażīna min qablikum la\'allakum tattaqūn',
    translation: '"Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa." (QS. Al-Baqarah: 183)',
    points: [
      'Puasa secara bahasa (etimologi) berarti al-imsak, yaitu menahan diri dari sesuatu.',
      'Puasa secara istilah syariat (fiqih): Menahan diri dari makan, minum, dan segala sesuatu yang membatalkan puasa sejak terbit fajar (Subuh) hingga terbenam matahari (Magrib) dengan niat yang ikhlas karena Allah Swt.',
      'Puasa merupakan salah satu rukun Islam yang ketiga yang wajib dilaksanakan oleh setiap Muslim yang memenuhi syarat.',
      'Kewajiban puasa berlaku untuk seluruh umat beriman sebagaimana juga diwajibkan kepada umat-umat terdahulu.'
    ],
    explanation: 'Puasa bukan sekadar latihan menahan lapar dan haus secara fisik, melainkan penjelmaan latihan rohani untuk mengendalikan hawa nafsu dan mendidik jiwa agar taat kepada Allah Swt.'
  },
  {
    id: 2,
    title: 'Tujuan Utama Puasa: Meraih Takwa',
    subtitle: 'Membentuk Karakter Utama Seorang Muslim',
    icon: 'Heart',
    color: 'from-teal-600 to-emerald-700',
    points: [
      'Mencapai derajat takwa (la\'allakum tattaqun) sebagaimana ditegaskan dalam Al-Qur\'an.',
      'Bertakwaku artinya melaksanakan seluruh perintah Allah Swt. dan menjauhi segala bentuk larangan-Nya.',
      'Melatih kemampuan diri dalam mengendalikan dorongan nafsu makan, minum, syahwat, serta hawa amarah.',
      'Menanamkan kesadaran bahwa Allah Swt. selalu mengawasi (muraqabah) setiap perbuatan kita baik saat sendiri maupun di depan orang banyak.'
    ],
    explanation: 'Orang yang bertakwa akan menjadi pribadi yang jujur, disiplin, berakhlak mulia, serta memiliki kepedulian sosial yang tinggi terhadap sesama.'
  },
  {
    id: 3,
    title: 'Pembagian Jenis Puasa dalam Islam',
    subtitle: 'Memahami Perbedaan Hukum Puasa Wajib dan Puasa Sunah',
    icon: 'CheckCircle2',
    color: 'from-blue-600 to-cyan-700',
    points: [
      'Puasa Wajib: Puasa yang harus dilaksanakan oleh setiap Muslim yang memenuhi syarat. Jika dilaksanakan mendapat pahala besar, jika ditinggalkan tanpa uzur syar\'i ber dosa.',
      'Puasa Sunah: Puasa yang sangat dianjurkan oleh Rasulullah saw. Jika dikerjakan mendapat pahala melimpah, jika ditinggalkan tidak mendapat dosa.',
      'Kelompok Puasa Wajib meliputi: Puasa Ramadan, Puasa Nazar, dan Puasa Kafarat.',
      'Kelompok Puasa Sunah meliputi: Puasa Senin-Kamis, Puasa Arafah, Puasa Asyura, Puasa Ayyamul Bidh, dan Puasa Daud.'
    ],
    explanation: 'Memahami jenis puasa membantu seorang Muslim menjalankan ibadah sesuai ketentuan fiqih sehingga dapat menunaikan puasa wajib dengan sempurna dan menambah pahala dengan puasa sunah.'
  },
  {
    id: 4,
    title: 'Puasa Ramadan secara Detail (Hukum & Kewajiban)',
    subtitle: 'Rukun Islam Ketiga yang Wajib Bagi Setiap Muslim',
    icon: 'ShieldCheck',
    color: 'from-emerald-700 to-indigo-800',
    arabicText: 'شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَىٰ وَالْفُرْقَانِ ۚ فَمَنْ شَهِدَ مِنْكُمُ الشَّهْرَ فَلْيَصُمْهُ',
    translation: '"Bulan Ramadan adalah (bulan) yang di dalamnya diturunkan Al-Qur\'an sebagai petunjuk bagi manusia... Barangsiapa di antara kamu hadir di bulan itu, maka hendaklah dia berpuasa." (QS. Al-Baqarah: 185)',
    points: [
      'Puasa Ramadan hukumnya fardhu \'ain (wajib bagi setiap individu Muslim/Muslimah) selama satu bulan penuh di bulan Ramadan.',
      'Merupakan salah satu pilar utama rukun Islam setelah syahadat dan shalat.',
      'Puasa Ramadan diwajibkan pada tahun kedua Hijriah kepada Nabi Muhammad saw. dan umat Islam.',
      'Jika seseorang tidak berpuasa Ramadan tanpa alasan yang dibolehkan agama, ia telah melakukan dosa besar dan wajib mengqadanya.'
    ],
    explanation: 'Bulan Ramadan adalah bulan suci penuh berkah di mana Al-Qur\'an pertama kali diturunkan (Nuzulul Qur\'an) dan pintu ampunan Allah dibuka seluas-luasnya.'
  },
  {
    id: 5,
    title: 'Keutamaan & Kemuliaan Bulan Ramadan',
    subtitle: 'Bulan Penuh Ampunan, Rahmat, dan Keberkahan',
    icon: 'Sparkles',
    color: 'from-amber-500 to-orange-600',
    points: [
      'Bulan Diturunkannya Al-Qur\'an (Nuzulul Qur\'an) sebagai petunjuk hidup manusia.',
      'Pintu surga dibuka, pintu neraka ditutup, dan setan-setan dibelenggu.',
      'Setiap amalan kebaikan dan ibadah dilipatgandakan pahalanya oleh Allah Swt.',
      'Terdapat satu malam yang lebih baik dari seribu bulan, yaitu Malam Lailatul Qadar.',
      'Pengampunan Dosa: Barangsiapa berpuasa Ramadan dengan iman dan mengharap pahala Allah, diampuni dosa-dosanya yang telah lalu.'
    ],
    explanation: 'Kemuliaan bulan Ramadan membuat Rasulullah saw. dan para sahabat menyambut kedatangannya dengan penuh sukacita dan peningkatan kualitas ibadah.'
  },
  {
    id: 6,
    title: 'Ketentuan Pelaksanaan Puasa Ramadan',
    subtitle: 'Waktu Niat, Sahur, dan Menyegerakan Berbuka',
    icon: 'Clock',
    color: 'from-indigo-600 to-purple-700',
    points: [
      'Niat Puasa Wajib: Harus dilakukan di dalam hati pada malam hari (sebelum terbit fajar Subuh) untuk setiap hari puasa Ramadan.',
      'Disunahkan Makan Sahur: Makan sahur mengandung keberkahan dan membantu memberi tenaga tubuh saat berpuasa seharian.',
      'Mengakhirkan Makan Sahur: Dianjurkan mendekati waktu Subuh selama belum terbit fajar.',
      'Menyegerakan Berbuka Puasa: Begitu mendengar azan Magrib atau dipastikan matahari telah terbenam, disunahkan segera berbuka dengan yang manis seperti kurma atau air putih.',
      'Membaca Doa Berbuka Puasa sebagai wujud rasa syukur atas nikmat Allah Swt.'
    ],
    explanation: 'Melaksanakan sunah sahur dan berbuka sesuai petunjuk Rasulullah saw. akan menambah kesempurnaan dan keberkahan pahala puasa Ramadan kita.'
  },
  {
    id: 7,
    title: 'Amalan-Amalan Sunah Utama di Bulan Ramadan',
    subtitle: 'Memperbanyak Pahala Selama Bulan Suci',
    icon: 'BookOpen',
    color: 'from-teal-600 to-cyan-700',
    points: [
      'Shalat Tarawih dan Witir: Shalat sunah malam yang khusus dilaksanakan secara berjamaah atau munfarid pada malam-malam bulan Ramadan.',
      'Tadarus Al-Qur\'an: Membaca, mengkaji, dan mendalami isi Al-Qur\'an secara rutin bersama keluarga atau jamaah masjid.',
      'Memperbanyak Sedekah & Memberikan Makanan Berbuka (Iftar): Memberi makan orang yang berpuasa pahalanya setara dengan pahala orang yang berpuasa tersebut.',
      'Menjaga Lisan dan Anggota Badan: Mengontrol lidah dari perkataan bohong, celaan, fitnah, dan perbuatan sia-sia.',
      'Menunaikan Zakat Fitrah: Kewajiban mensucikan diri dan membantu kaum duafa menjelang hari raya Idulfitri.'
    ],
    explanation: 'Bulan Ramadan adalah momen keemasan untuk memanen pahala melalui berbagai amalan sunah ibadah ritual maupun sosial.'
  },
  {
    id: 8,
    title: 'Keistimewaan Lailatul Qadar & I\'tikaf',
    subtitle: 'Malam Kemuliaan yang Lebih Baik dari 1.000 Bulan',
    icon: 'Sparkles',
    color: 'from-violet-600 to-fuchsia-700',
    points: [
      'Lailatul Qadar adalah malam sangat mulia yang nilainya lebih baik daripada ibadah selama seribu bulan (sekitar 83 tahun 4 bulan).',
      'Malam Lailatul Qadar terjadi pada 10 malam terakhir bulan Ramadan, terutama pada malam-malam ganjil (21, 23, 25, 27, 29 Ramadan).',
      'Disunahkan melakukan I\'tikaf, yaitu berdiam diri di masjid dengan niat beribadah, zikir, shalat malam, dan berdoa.',
      'Doa khusus Lailatul Qadar: "Allahumma innaka \'afuwwun tuhibbul \'afwa fa\'fu \'anni" (Ya Allah, Engkau Maha Pemaaf menyukai maaf, maka maafkanlah aku).'
    ],
    explanation: 'Memburu Lailatul Qadar melatih ketekunan ibadah seorang Muslim di akhir bulan Ramadan agar tidak kendur sampai akhir.'
  },
  {
    id: 9,
    title: 'Puasa Wajib Lainnya: Puasa Nazar & Kafarat',
    subtitle: 'Tanggung Jawab Janji dan Tebusan Hukum Fiqih',
    icon: 'ShieldCheck',
    color: 'from-slate-700 to-slate-900',
    points: [
      'Puasa Nazar: Puasa yang diwajibkan oleh seseorang atas dirinya sendiri karena adanya janji jika hajat baiknya dikabulkan Allah Swt.',
      'Contoh Nazar: Seseorang berjanji, "Jika saya sembuh dari sakit ini, saya akan berpuasa 3 hari." Jika sembuh, puasa 3 hari tersebut wajib dilaksanakan.',
      'Puasa Kafarat: Puasa wajib yang dilakukan sebagai denda atau tebusan atas pelanggaran syariat Islam.',
      'Penyebab Kafarat: Melanggar sumpah atas nama Allah, melanggar larangan ibadah haji, atau bersetubuh di siang hari Ramadan bagi suami istri.'
    ],
    explanation: 'Puasa Nazar dan Kafarat mengajarkan kedisiplinan menepati janji serta tanggung jawab moral atas kesalahan yang pernah diperbuat.'
  },
  {
    id: 10,
    title: 'Puasa Sunah I: Puasa Senin-Kamis & Puasa Daud',
    subtitle: 'Ibadah Rutin Meneladani Kebiasaan Mulia Rasulullah SAW',
    icon: 'Sparkles',
    color: 'from-amber-600 to-yellow-600',
    points: [
      'Puasa Senin dan Kamis: Puasa sunah yang dilaksanakan secara rutin pada hari Senin dan Kamis.',
      'Keutamaan Senin-Kamis: Hari Senin adalah hari kelahiran Rasulullah saw. dan hari Kamis adalah saat amalan manusia dilaporkan kepada Allah Swt.',
      'Puasa Daud: Puasa sunah yang paling disukai dan paling utama di sisi Allah Swt.',
      'Cara Puasa Daud: Dilaksanakan secara berselang-seling, yaitu sehari berpuasa dan sehari tidak berpuasa.',
      'Puasa Daud melatih konsistensi dan keseimbangan daya tahan fisik serta spiritual.'
    ],
    explanation: 'Merutinkan puasa sunah menjadikan hati lebih lembut, doa makin terkabul, serta menjaga kesehatan organ tubuh secara alami.'
  },
  {
    id: 11,
    title: 'Puasa Sunah II: Puasa Arafah, Asyura, & Ayyamul Bidh',
    subtitle: 'Puasa pada Hari-Hari Istimewa Kalender Hijriah',
    icon: 'BookOpen',
    color: 'from-emerald-600 to-teal-800',
    points: [
      'Puasa Arafah: Dilaksanakan pada tanggal 9 Zulhijah khusus bagi umat Islam yang tidak sedang menunaikan ibadah haji.',
      'Keutamaan Puasa Arafah: Menghapuskan dosa-dosa kecil selama dua tahun (tahun lalu dan tahun yang akan datang).',
      'Puasa Asyura: Dilaksanakan pada tanggal 10 Muharam.',
      'Keutamaan Puasa Asyura: Menghapuskan dosa-dosa kecil selama satu tahun yang lalu.',
      'Puasa Ayyamul Bidh: Dilaksanakan pada hari-hari putih (saat bulan purnama), yaitu tanggal 13, 14, dan 15 setiap bulan Hijriah.'
    ],
    explanation: 'Hari-hari besar Hijriah menyimpan kesempatan emas untuk menggugurkan dosa dan meraih ganjaran istimewa dari Allah Swt.'
  },
  {
    id: 12,
    title: 'Ketentuan Puasa: Syarat Wajib & Syarat Sah',
    subtitle: 'Kriteria Kelayakan dan Keabsahan Ibadah Puasa',
    icon: 'CheckCircle2',
    color: 'from-purple-600 to-indigo-700',
    points: [
      'Syarat Wajib Puasa (Siapa yang diwajibkan berpuasa?):',
      '• Beragama Islam (Muslim / Muslimah).',
      '• Balig (Telah mencapai usia dewasa secara syar\'i).',
      '• Berakal Sehat (Tidak gila atau hilang ingatan).',
      '• Mampu Melaksanakan Puasa (Kuat fisik, tidak sakit parah, tua renta, atau dalam perjalanan berat).',
      'Syarat Sah Puasa (Kriteria agar puasanya sah diterima):',
      '• Islam dan Mumayyiz (dapat membedakan baik dan buruk).',
      '• Suci dari haid dan nifas bagi wanita.',
      '• Dilaksanakan pada waktu yang diperbolehkan berpuasa (bukan pada hari haram puasa).'
    ],
    explanation: 'Bila syarat wajib tidak terpenuhi (seperti anak kecil atau orang tua renta), kewajiban puasa gugur atau digantikan dengan fidyah.'
  },
  {
    id: 13,
    title: 'Ketentuan Puasa: Rukun Puasa',
    subtitle: 'Dua Pilar Utama Keabsahan Ibadah Puasa',
    icon: 'CheckCircle2',
    color: 'from-blue-700 to-indigo-800',
    points: [
      'Rukun Puasa adalah unsur pokok yang harus ada dan dilakukan saat berpuasa agar puasa tersebut sah.',
      'Rukun Pertama: Berniat di dalam hati karena Allah Swt. Untuk puasa wajib (Ramadan), niat dilakukan malam hari sebelum fajar Subuh.',
      'Rukun Kedua: Menahan diri (al-imsak) dari segala hal yang membatalkan puasa sejak terbit fajar (Subuh) hingga terbenam matahari (Magrib).',
      'Tanpa adanya niat dan penahanan diri pada rentang waktu tersebut, puasa dianggap tidak sah secara fiqih.'
    ],
    explanation: 'Rukun puasa menjadi pondasi utama. Niat meluruskan tujuan ibadah hanya untuk Allah, dan penahanan diri melatih kedisiplinan lahir batin.'
  },
  {
    id: 14,
    title: 'Hal-Hal yang Membatalkan & Mengurangi Pahala',
    subtitle: 'Menjaga Kesucian Puasa Lahir dan Batin',
    icon: 'AlertTriangle',
    color: 'from-rose-600 to-red-700',
    points: [
      'Hal-Hal yang Membatalkan Puasa (Puasa gugur/batal & wajib diqada/diganti):',
      '• Makan dan minum dengan sengaja.',
      '• Muntah dengan sengaja.',
      '• Keluar darah haid atau nifas bagi perempuan.',
      '• Melakukan hubungan suami istri di siang hari Ramadan.',
      '• Keluar dari agama Islam (murtad).',
      'Hal-Hal yang Mengurangi / Menghilangkan Pahala Puasa (Puasa tetap sah tapi pahalanya sirna):',
      '• Berkata kasar, kotor, atau mencela orang lain.',
      '• Berbohong, berdusta, atau memfitnah.',
      '• Marah-marah, bertengkar, dan berbuat zalim.'
    ],
    explanation: 'Rasulullah saw. mengingatkan bahwa betapa banyak orang yang berpuasa tetapi tidak mendapatkan pahala apa-apa selain rasa lapar dan dahaga karena tidak menjaga lisan dan akhlaknya.'
  },
  {
    id: 15,
    title: 'Hikmah Pelaksanaan Puasa Wajib & Sunah',
    subtitle: 'Manfaat Spiritual, Pembentukan Karakter, Empati, dan Kesehatan',
    icon: 'Heart',
    color: 'from-green-600 to-teal-700',
    points: [
      'Meningkatkan Ketakwaan: Mendidik keikhlasan dan mendekatkan diri kepada Allah melalui zikir, doa, dan ibadah.',
      'Melatih Kesabaran: Mendidik jiwa menahan amarah, nafsu, serta sabar menghadapi cobaan hidup.',
      'Menumbuhkan Disiplin: Membiasakan Keteraturan waktu sahur, shalat tepat waktu, dan berbuka tepat waktunya.',
      'Menumbuhkan Empati Sosial: Merasakan lapar mendidik kepedulian untuk gemar berbagi dan menyantuni fakir miskin.',
      'Menjaga Kesehatan Tubuh: Memberi waktu istirahat bagi organ pencernaan serta meremajakan sel-sel tubuh secara alami.'
    ],
    explanation: 'Puasa menempa manusia secara utuh—lahiriah dan batiniah. Menjadikan murid pribadi beriman, berakhlak mulia, disiplin, dan sehat sejahtera.'
  }
];

export const KELAS5_P4_PROJECTS: ProjectTask[] = [
  {
    id: 'pjbl-1',
    title: 'Poster Infografis "Klasifikasi Puasa Wajib & Sunah" & Tracker Ibadah',
    category: 'PjBL',
    badge: 'Project Based Learning',
    description: 'Murid secara berkelompok merancang poster infografis edukatif mengenai pembagian puasa wajib (Ramadan, Nazar, Kafarat) dan puasa sunah (Senin-Kamis, Arafah, Asyura, Ayyamul Bidh, Daud), serta menyusun tracker ibadah mingguan.',
    objective: 'Murid mampu mengklasifikasikan jenis-jenis puasa dalam syariat Islam, memahami syarat & rukunnya, serta membiasakan diri meneladani puasa sunah Rasulullah saw.',
    steps: [
      '1. Bentuk kelompok belajar yang terdiri dari 3-4 murid.',
      '2. Pelajari dan petakan perbedaan puasa wajib (Ramadan, Nazar, Kafarat) dan puasa sunah (Senin-Kamis, Arafah, Asyura, Ayyamul Bidh, Daud).',
      '3. Buat poster infografis menarik yang memuat tabel perbedaan, syarat & rukun puasa, serta dalil QS. Al-Baqarah: 183.',
      '4. Rancang "Jurnal / Tracker Pembiasaan Puasa Sunah" untuk mencatat pelaksanaan puasa sunah murid.',
      '5. Presentasikan hasil karya poster di depan kelas dan pajang di mading sekolah.'
    ],
    output: 'Poster Infografis Peta Konsep Puasa Wajib & Sunah serta Jurnal Tracker Ibadah.',
    rubrik: [
      'Kelengkapan materi puasa wajib (Ramadan, Nazar, Kafarat) & sunah (30%)',
      'Ketepatan penjelasan syarat wajib, syarat sah, dan rukun puasa (30%)',
      'Kreativitas visual, kerapian, & desain Jurnal Tracker (20%)',
      'Kerjasama kelompok & kemampuan presentasi (20%)'
    ],
    note: 'Sesuai kebijakan guru'
  },
  {
    id: 'pjbl-2',
    title: 'Panduan Amalan Ramadan & Mini-Drama "Meraih Lailatul Qadar & Menjaga Lisan"',
    category: 'PjBL',
    badge: 'Project Based Learning',
    description: 'Murid menyusun buklet panduan amalan bulan Ramadan (sahur, berbuka, tarawih, tadarus, i\'tikaf, zakat fitrah) dan menampilkan drama singkat yang menggambarkan cara memelihara pahala puasa dari amarah dan perbuatan tercela.',
    objective: 'Murid dapat merancang panduan amalan Ramadan yang lengkap serta mensimulasikan penerapan hikmah puasa dalam mengendalikan hawa nafsu dan menjaga lisan.',
    steps: [
      '1. Susun buklet saku "Panduan Sukses Ramadan" yang memuat niat puasa, adab sahur & berbuka, keutamaan Lailatul Qadar, dan i\'tikaf 10 malam terakhir.',
      '2. Buat skenario drama pendek (3-5 menit) tentang murid berpuasa yang digoda teman untuk berbohong atau marah, namun ia berhasil menahan diri dan mendoakan kebaikan.',
      '3. Lakukan latihan peran dan tampilkan drama di depan kelas.',
      '4. Refleksikan pesan moral drama mengenai perbedaan hal yang membatalkan puasa dan hal yang mengurangi pahala puasa.'
    ],
    output: 'Buklet "Panduan Sukses Ramadan" dan Penampilan Drama Singkat Hikmah Puasa.',
    rubrik: [
      'Kedalaman isi Buklet Amalan Ramadan & Lailatul Qadar (30%)',
      'Kesesuaian adegan drama dengan prinsip menahan lisan & amarah (30%)',
      'Penghayatan peran & penyampaian pesan moral (20%)',
      'Kekompakan tim dan kreativitas pementasan (20%)'
    ],
    note: 'Sesuai kebijakan guru'
  },
  {
    id: 'pbl-1',
    title: 'Studi Kasus Fiqih: "Membatalkan Puasa vs Mengurangi Pahala Puasa"',
    category: 'PBL',
    badge: 'Problem Based Learning',
    description: 'Murid disajikan 5 studi kasus perilaku dan peristiwa di bulan puasa, lalu menganalisis secara kritis status hukum fiqihnya (Batal Wajib Qada, Sah Tapi Berkurang Pahala, atau Tetap Sah Sempurna).',
    objective: 'Murid mampu membedakan dengan tepat dan kritis antara tindakan yang membatalkan puasa secara syar\'i dan perbuatan tercela yang merusak pahala puasa.',
    steps: [
      '1. Analisis 5 skenario kasus berikut:',
      '   - Kasus A: Ahmad lupa sedang berpuasa lalu makan dan minum 1 gelas air.',
      '   - Kasus B: Budi sengaja muntah dengan colok tenggorokan karena merasa kekenyangan.',
      '   - Kasus C: Cici marah-marah, berbohong, dan mengejek temannya di sekolah.',
      '   - Kasus D: Dedi berkumur saat wudu lalu tanpa sengaja tertelan sedikit air.',
      '   - Kasus E: Sarah berpuasa dari subuh, tetapi pada jam 3 sore keluar darah haid.',
      '2. Diskusikan hukum fiqih untuk tiap kasus berdasarkan syarat sah, rukun, dan hal yang membatalkan puasa.',
      '3. Buat Matriks Analisis Fiqih Puasa lengkap dengan dalil atau penjelasan ulama serta solusi perbaikannya.'
    ],
    output: 'Laporan Matriks Analisis Fiqih "Batal Puasa vs Mengurangi Pahala".',
    rubrik: [
      'Ketepatan mengidentifikasi hukum fiqih kelima kasus (40%)',
      'Kekuatan alasan berdasarkan syarat, rukun, dan ketentuan puasa (30%)',
      'Kerapian matriks pembanding dan kejelasan rekomendasi solusi (30%)'
    ],
    note: 'Sesuai kebijakan guru'
  },
  {
    id: 'pbl-2',
    title: 'Solusi Masalah "Strategi Berpuasa Sehat & Menjaga Empati di Sekolah"',
    category: 'PBL',
    badge: 'Problem Based Learning',
    description: 'Murid mengidentifikasi masalah lemas, kurang fokus, atau emosi yang dialami murid SD saat berpuasa, lalu merumuskan solusi manajemen waktu, nutrisi sahur/berbuka, dan penanaman kepedulian sosial.',
    objective: 'Murid mampu merancang ide solusi praktis berlandaskan hikmah puasa untuk meningkatkan stamina fisik, kedisiplinan belajar, dan rasa empati berbagi selama bulan berpuasa.',
    steps: [
      '1. Identifikasi tantangan fisik dan emosional yang sering dihadapi murid SD saat berpuasa (misal: lemas jam siang, emosional saat geram, malas shalat).',
      '2. Hubungkan tantangan tersebut dengan hikmah puasa (kesehatan pencernaan, kesabaran, dan kedisiplinan).',
      '3. Formulatsikan solusi konkret: menu sahur bergizi seimbang, teknik mendinginkan emosi, dan program "Bagi Takjil Empati".',
      '4. Susunlah flyer / brosur edukasi "Tips Puasa Sehat & Berakhlak Mulia Murid SD".',
      '5. Sosialisasikan flyer kepada teman-teman kelas lain di sekolah.'
    ],
    output: 'Flyer Edukasi "Tips Puasa Sehat & Berakhlak Mulia Murid SD".',
    rubrik: [
      'Ketajaman analisis masalah fisik & emosi anak saat berpuasa (30%)',
      'Kepraktisan dan keefektifan solusi yang dirumuskan (40%)',
      'Daya tarik tampilan visual flyer & kejelasan informasi (30%)'
    ],
    note: 'Sesuai kebijakan guru'
  }
];

export const KELAS5_P4_QUEST_STEPS = [
  {
    id: 1,
    title: 'Pos 1: Memahami Pengertian Puasa & Dalil Al-Qur\'an',
    story: 'Kamu tiba di Gerbang Ramadan. Penjaga gerbang bertanya: "Apakah makna puasa secara istilah fiqih dan apa tujuan utamanya sesuai QS. Al-Baqarah ayat 183?"',
    question: 'Manakah pernyataan yang PALING TEPAT mengenai pengertian puasa dan tujuannya?',
    options: [
      'Menahan lapar dan haus dari pagi sampai sore agar menjadi kaya raya.',
      'Menahan diri dari makan, minum, dan hal membatalkan puasa sejak terbit fajar (Subuh) hingga terbenam matahari (Magrib) dengan niat karena Allah Swt. untuk meraih ketakwaan.',
      'Tidak makan seharian penuh sampai malam hari agar berat badan berkurang secara drastis.',
      'Menahan diri hanya dari makanan berlemak dari Subuh sampai Isya.'
    ],
    correct: 1,
    hint: 'Perhatikan batas waktu (terbit fajar hingga terbenam matahari) dan niat ikhlas karena Allah untuk membentuk pribadi bertakwa.'
  },
  {
    id: 2,
    title: 'Pos 2: Keutamaan Ramadan & Nuzulul Qur\'an',
    story: 'Di Taman Keagungan Ramadan, kamu menemukan catatan tentang bulan suci di mana Al-Qur\'an pertama kali diturunkan dan amalan dilipatgandakan.',
    question: 'Keutamaan manakah yang TIDAK TERMASUK dalam keistimewaan bulan suci Ramadan?',
    options: [
      'Dituruankannya Al-Qur\'an (Nuzulul Qur\'an) sebagai petunjuk hidup manusia.',
      'Terdapat malam Lailatul Qadar yang lebih baik dari seribu bulan.',
      'Setan-setan dibelenggu, pintu surga dibuka, dan pintu neraka ditutup.',
      'Umat Islam diperbolehkan meninggalkan shalat fardhu selama berpuasa.'
    ],
    correct: 3,
    hint: 'Ramadan melipatgandakan amalan, bukan membebaskan dari shalat fardhu.'
  },
  {
    id: 3,
    title: 'Pos 3: Niat, Sahur, Berbuka & Amalan Sunah Ramadan',
    story: 'Di Rumah Fiqih Ibadah, seorang murid bertanya tentang waktu niat puasa Ramadan serta amalan yang disunahkan Rasulullah saw.',
    question: 'Manakah tata cara niat dan amalan sunah Ramadan yang benar menurut syariat?',
    options: [
      'Niat puasa wajib boleh dilakukan siang hari jam 12 siang saat sudah merasa lapar.',
      'Disunahkan mengakhirkan sahur dekat waktu Subuh dan menyegerakan berbuka begitu terbenam matahari.',
      'Tidak perlu makan sahur karena sahur hukumnya haram.',
      'Shalat Tarawih wajib dikerjakan 100 rakaat tanpa salam.'
    ],
    correct: 1,
    hint: 'Sunah Rasulullah saw. adalah mengakhirkan sahur sebelum subuh dan menyegerakan berbuka saat magrib.'
  },
  {
    id: 4,
    title: 'Pos 4: Puasa Wajib Lainnya (Nazar & Kafarat)',
    story: 'Di Lembaga Hukum Syariat, kamu menjumpai seseorang yang berjanji: "Jika adikku sembuh dari sakit, aku akan berpuasa 3 hari." Ada pula orang yang melanggar sumpah atas nama Allah.',
    question: 'Termasuk ke dalam jenis puasa wajib manakah kedua contoh tersebut secara berturut-turut?',
    options: [
      'Puasa Sunah Senin-Kamis dan Puasa Ramadan',
      'Puasa Nazar (karena janji) dan Puasa Kafarat (sebagai denda tebusan)',
      'Puasa Arafah dan Puasa Daud',
      'Puasa Ayyamul Bidh dan Puasa Asyura'
    ],
    correct: 1,
    hint: 'Puasa karena janji adalah Nazar, sedangkan puasa sebagai denda atas pelanggaran hukum adalah Kafarat.'
  },
  {
    id: 5,
    title: 'Pos 5: Mengenal Macam-Macam Puasa Sunah',
    story: 'Di Pos Sunah Nabi, kamu diajak mengenal puasa Arafah (9 Zulhijah), puasa Asyura (10 Muharam), puasa Ayyamul Bidh, dan puasa Daud.',
    question: 'Manakah pasangan nama puasa sunah dan penjelasannya yang PALING TEPAT?',
    options: [
      'Puasa Arafah: Dilaksanakan tanggal 9 Zulhijah bagi yang tidak berhaji dan menghapus dosa 2 tahun.',
      'Puasa Daud: Dilaksanakan setiap hari Jumat dan Sabtu saja.',
      'Puasa Asyura: Dilaksanakan pada tanggal 1 Ramadan.',
      'Puasa Ayyamul Bidh: Dilaksanakan hanya pada malam tahun baru masehi.'
    ],
    correct: 0,
    hint: 'Puasa Arafah dilaksanakan pada 9 Zulhijah saat jamaah haji wukuf di Arafah dan menghapuskan dosa tahun lalu & mendatang.'
  },
  {
    id: 6,
    title: 'Pos 6: Membedakan Syarat Wajib, Syarat Sah, & Rukun Puasa',
    story: 'Di Anjungan Syarat & Rukun, Ali yang berusia 11 tahun (Muslim, berakal, sehat) berniat berpuasa dan menahan diri dari hal membatalkan puasa dari subuh hingga magrib.',
    question: 'Manakah di bawah ini yang merupakan RUKUN PUASA?',
    options: [
      'Beragama Islam, Balig, dan Berakal sehat',
      'Niat di dalam hati karena Allah Swt. dan Menahan diri (al-imsak) dari hal yang membatalkan puasa sejak fajar hingga magrib',
      'Mampu melaksanakan puasa dan tidak sedang dalam perjalanan',
      'Makan sahur sebelum fajar dan memakai pakaian serba putih'
    ],
    correct: 1,
    hint: 'Rukun puasa hanya ada 2: Niat di malam hari dan Menahan diri (al-imsak) dari yang membatalkan puasa.'
  },
  {
    id: 7,
    title: 'Pos 7: Membedakan Hal yang Membatalkan vs Mengurangi Pahala',
    story: 'Saat berpuasa, Budi lupa lalu minum air putih. Sementara Cici tidak makan apapun, tetapi ia marah-marah dan memfitnah temannya.',
    question: 'Bagaimana status puasa Budi dan Cici menurut ketentuan fiqih?',
    options: [
      'Puasa Budi batal, sedangkan puasa Cici dapat pahala berlipat.',
      'Puasa Budi tetap SAH (karena lupa), sedangkan puasa Cici tetap SAH secara fiqih tetapi PAHLA-nya hilang/berkurang karena akhlak tercela.',
      'Kedua puasa mereka batal dan wajib membayar fidyah.',
      'Puasa Budi dan Cici menjadi puasa sunah.'
    ],
    correct: 1,
    hint: 'Lupa makan/minum tidak membatalkan puasa. Berkata dusta/marah tidak membatalkan puasa tetapi menghancurkan pahalanya.'
  },
  {
    id: 8,
    title: 'Pos 8: Hikmah Pelaksanaan Puasa',
    story: 'Kamu berhasil mencapai Puncak Ketakwaan. Di sini kamu merenungkan manfaat spiritual, karakter, empati sosial, dan kesehatan dari ibadah puasa.',
    question: 'Manfaat manakah yang menggambarkan hikmah puasa dalam menumbuhkan empati sosial?',
    options: [
      'Merasakan rasa lapar mendidik murid untuk peka, peduli, dan gemar berbagi kepada sesama yang kurang mampu.',
      'Membuat murid menjadi sombong karena sanggup menahan lapar lebih lama dari temannya.',
      'Menghemat uang saku agar bisa membeli barang mewah.',
      'Menghindari tugas sekolah di siang hari.'
    ],
    correct: 0,
    hint: 'Empati sosial tumbuh ketika kita merasakan lapar sehingga terdorong peduli dan membantu fakir miskin.'
  }
];

export const KELAS5_P4_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Perhatikan firman Allah Swt. dalam QS. Al-Baqarah ayat 183! Tujuan utama diwajibkannya ibadah puasa bagi orang-orang yang beriman adalah...',
    options: [
      'Agar dipuji oleh teman dan guru di sekolah',
      'Membentuk pribadi yang bertakwa kepada Allah Swt. (la\'allakum tattaqūn)',
      'Menghemat anggaran belanja harian keluarga',
      'Menjaga bentuk tubuh agar terlihat kurus'
    ],
    correctAnswer: 1,
    explanation: 'Sesuai QS. Al-Baqarah ayat 183, penutup ayat menegaskan "la\'allakum tattaqūn" (agar kamu bertakwa kepada Allah Swt.).'
  },
  {
    id: 2,
    question: 'Puasa Ramadan hukumnya fardhu \'ain bagi setiap Muslim yang memenuhi syarat. Bulan Ramadan memiliki keistimewaan istimewa yaitu...',
    options: [
      'Merupakan bulan diturunkannya Al-Qur\'an (Nuzulul Qur\'an) dan terdapat malam Lailatul Qadar',
      'Bulan di mana seluruh umat Islam diwajibkan pergi haji',
      'Bulan yang diperbolehkan tidak shalat fardhu',
      'Bulan di mana puasa sunah diubah menjadi haram'
    ],
    correctAnswer: 0,
    explanation: 'Bulan Ramadan adalah bulan suci diturunkannya Al-Qur\'an (QS. Al-Baqarah: 185) dan terdapat malam Lailatul Qadar yang lebih baik dari 1.000 bulan.'
  },
  {
    id: 3,
    question: 'Untuk puasa wajib seperti Ramadan, niat harus dilakukan pada malam hari sebelum terbit fajar Subuh. Sunah Rasulullah saw. dalam melaksanakan sahur dan berbuka adalah...',
    options: [
      'Menyegerakan sahur jam 12 malam dan mengakhirkan berbuka sampai Isya',
      'Mengakhirkan makan sahur mendekati Subuh dan menyegerakan berbuka begitu terbenam matahari (Magrib)',
      'Tidak makan sahur sama sekali agar pahala berlipat',
      'Berbuka puasa dengan makanan berat tanpa membaca doa'
    ],
    correctAnswer: 1,
    explanation: 'Sunah Nabi saw.: mengakhirkan sahur sebelum subuh (ada keberkahan) dan menyegerakan berbuka begitu masuk waktu Magrib.'
  },
  {
    id: 4,
    question: 'Ahmad berjanji: "Jika saya berhasil mendapatkan nilai 100 pada ujian PAI, saya akan berpuasa selama 2 hari." Hukum melaksanakan puasa yang dijanjikan Ahmad tersebut adalah...',
    options: [
      'Wajib (Puasa Nazar)',
      'Sunah muakkad',
      'Makruh dilaksanakan',
      'Haram karena berniat janji'
    ],
    correctAnswer: 0,
    explanation: 'Puasa Nazar adalah puasa yang dijanjikan oleh seseorang jika hajat baiknya dikabulkan Allah, hukumnya menjadi wajib dilaksanakan.'
  },
  {
    id: 5,
    question: 'Pak Hasan melanggar sumpah atas nama Allah Swt. Untuk menebus dosa pelanggaran hukum tersebut, syariat Islam mewajibkan ia melaksanakan...',
    options: [
      'Puasa Arafah',
      'Puasa Kafarat',
      'Puasa Daud',
      'Puasa Ayyamul Bidh'
    ],
    correctAnswer: 1,
    explanation: 'Puasa Kafarat adalah puasa wajib sebagai denda atau tebusan atas pelanggaran hukum syariat seperti melanggar sumpah.'
  },
  {
    id: 6,
    question: 'Umat Islam yang tidak sedang melaksanakan ibadah haji disunahkan berpuasa pada tanggal 9 Zulhijah. Puasa sunah ini dinamakan...',
    options: [
      'Puasa Asyura',
      'Puasa Arafah',
      'Puasa Ayyamul Bidh',
      'Puasa Daud'
    ],
    correctAnswer: 1,
    explanation: 'Puasa Arafah dilaksanakan pada 9 Zulhijah (saat jamaah haji wukuf di Arafah) dan keutamaannya menghapuskan dosa 2 tahun.'
  },
  {
    id: 7,
    question: 'Puasa sunah yang dilaksanakan pada tanggal 13, 14, dan 15 setiap bulan Hijriah saat bulan purnama dinamakan...',
    options: [
      'Puasa Ayyamul Bidh',
      'Puasa Asyura',
      'Puasa Senin-Kamis',
      'Puasa Kafarat'
    ],
    correctAnswer: 0,
    explanation: 'Puasa Ayyamul Bidh adalah puasa sunah pada hari-hari putih (pertengahan bulan Hijriah) tanggal 13, 14, dan 15.'
  },
  {
    id: 8,
    question: 'Pak Hasan sudah tua renta dan fisiknya sangat lemah sehingga tidak sanggup berpuasa Ramadan. Dalam fiqih, Pak Hasan tidak memenuhi...',
    options: [
      'Rukun puasa',
      'Syarat wajib puasa (mampu melaksanakan puasa)',
      'Syarat sah puasa',
      'Sunah puasa'
    ],
    correctAnswer: 1,
    explanation: 'Salah satu syarat wajib puasa adalah "mampu melaksanakan puasa". Orang tua renta tidak wajib berpuasa dan digantikan dengan membayar fidyah.'
  },
  {
    id: 9,
    question: 'Di antara perbuatan berikut, manakah perbuatan yang TIDAK MEMBATALKAN puasa secara fiqih, tetapi MENGURANGI/MENGHILANGKAN pahala puasa?',
    options: [
      'Makan dan minum dengan sengaja',
      'Muntah dengan sengaja',
      'Berbohong, memaki, dan bertengkar saat berpuasa',
      'Keluar dari agama Islam (murtad)'
    ],
    correctAnswer: 2,
    explanation: 'Berbohong dan memaki tidak membatalkan puasa secara sah/batal fiqih, namun merusak dan menghapus pahala puasa di sisi Allah Swt.'
  },
  {
    id: 10,
    question: 'Dengan merasakan lapar dan haus saat berpuasa, seorang murid belajar memahami penderitaan kaum duafa sehingga gemar berbagi. Hal ini merupakan hikmah puasa dalam...',
    options: [
      'Meningkatkan metabolisme fisik',
      'Menumbuhkan rasa empati dan kepedulian sosial',
      'Menghindari ujian sekolah',
      'Menguji kekuatan fisik tubuh'
    ],
    correctAnswer: 1,
    explanation: 'Merasakan lapar menumbuhkan kepedulian sosial dan empati mendalam terhadap penderitaan sesama yang kekurangan.'
  }
];

export const KELAS5_P4_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Manakah di antara puasa berikut yang termasuk dalam kelompok PUASA WAJIB? (Pilih lebih dari satu jawaban benar)',
    options: [
      'Puasa Ramadan',
      'Puasa Senin dan Kamis',
      'Puasa Nazar',
      'Puasa Kafarat'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Puasa Ramadan, Puasa Nazar (karena janji), dan Puasa Kafarat (denda tebusan) adalah jenis puasa wajib dalam syariat Islam.'
  },
  {
    id: 2,
    question: 'Pilihlah jenis-jenis PUASA SUNAH yang dianjurkan oleh Rasulullah saw.! (Pilih lebih dari satu jawaban benar)',
    options: [
      'Puasa Arafah (9 Zulhijah)',
      'Puasa Asyura (10 Muharam)',
      'Puasa Kafarat',
      'Puasa Ayyamul Bidh (13, 14, 15 Hijriah)'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Puasa Arafah, Puasa Asyura, dan Puasa Ayyamul Bidh adalah puasa sunah. Sedangkan Puasa Kafarat adalah puasa wajib.'
  },
  {
    id: 3,
    question: 'Manakah keutamaan dan keistimewaan bulan suci Ramadan? (Pilih lebih dari satu jawaban benar)',
    options: [
      'Bulan diturunkannya Al-Qur\'an (Nuzulul Qur\'an)',
      'Terdapat malam Lailatul Qadar yang lebih baik dari 1.000 bulan',
      'Pintu surga dibuka, pintu neraka ditutup, dan setan dibelenggu',
      'Pahala amal kebaikan dilipatgandakan oleh Allah Swt.'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'Semua pilihan di atas merupakan keutamaan agung bulan suci Ramadan yang ditegaskan dalam Al-Qur\'an dan Hadis.'
  },
  {
    id: 4,
    question: 'Yang termasuk dalam kriteria SYARAT WAJIB PUASA adalah... (Pilih lebih dari satu jawaban benar)',
    options: [
      'Beragama Islam (Muslim/Muslimah)',
      'Balig (cukup umur secara syar\'i)',
      'Berakal sehat (tidak gila/hilang akal)',
      'Mampu melaksanakan puasa (sehat & tidak tua renta)'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'Syarat wajib puasa ada 4: Islam, Balig, Berakal sehat, dan Mampu melaksanakan puasa.'
  },
  {
    id: 5,
    question: 'Manakah yang merupakan RUKUN PUASA yang wajib dipenuhi agar ibadah puasa sah? (Pilih dua jawaban benar)',
    options: [
      'Berniat di dalam hati karena Allah Swt.',
      'Makan sahur sebelum fajar Subuh',
      'Menahan diri (al-imsak) dari hal-hal yang membatalkan puasa sejak terbit fajar hingga terbenam matahari',
      'Mengakhirkan sahur dan menyegerakan berbuka'
    ],
    correctAnswers: [0, 2],
    explanation: 'Rukun puasa hanya ada dua: (1) Berniat di dalam hati dan (2) Menahan diri (al-imsak) dari segala hal yang membatalkan puasa dari fajar hingga magrib.'
  },
  {
    id: 6,
    question: 'Perbuatan berikut ini yang SANGAT MEMBATALKAN PUASA secara syar\'i adalah... (Pilih lebih dari satu jawaban benar)',
    options: [
      'Makan dan minum dengan sengaja di siang hari',
      'Muntah dengan sengaja',
      'Haid atau nifas bagi perempuan',
      'Keluar dari agama Islam (murtad)'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'Makan/minum sengaja, muntah sengaja, haid/nifas, dan murtad membatalkan puasa secara fiqih.'
  },
  {
    id: 7,
    question: 'Perilaku tercela berikut TIDAK MEMBATALKAN puasa secara fiqih, tetapi MENGURANGI/MENGHILANGKAN PAHILA puasa di sisi Allah Swt., yaitu... (Pilih lebih dari satu jawaban benar)',
    options: [
      'Berbohong atau berdusta',
      'Berkata kasar, kotor, dan memaki orang lain',
      'Bertengkar dan menzalimi teman',
      'Tidur siang selama 1 jam saat berpuasa'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Berdusta, memaki, dan bertengkar merusak pahala puasa. Tidur siang tidak mengurangi pahala asal tidak meninggalkan shalat.'
  },
  {
    id: 8,
    question: 'Pernyataan yang BENAR mengenai tata cara dan sunah puasa adalah... (Pilih lebih dari satu jawaban benar)',
    options: [
      'Niat puasa Ramadan dilakukan pada malam hari sebelum fajar Subuh',
      'Disunahkan mengakhirkan sahur mendekati waktu Subuh',
      'Disunahkan menyegerakan berbuka begitu terbenam matahari (Magrib)',
      'Makan dan minum karena benar-benar lupa tidak membatalkan puasa'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'Semua pernyataan tersebut benar sesuai dengan tuntunan sunah Rasulullah saw. dan hukum fiqih puasa.'
  },
  {
    id: 9,
    question: 'Manakah keutamaan dari Puasa Sunah Arafah (9 Zulhijah) dan Puasa Sunah Asyura (10 Muharam)? (Pilih dua jawaban benar)',
    options: [
      'Puasa Arafah menghapuskan dosa-dosa kecil selama 2 tahun (tahun lalu dan tahun mendatang)',
      'Puasa Asyura menghapuskan dosa-dosa kecil selama 1 tahun yang lalu',
      'Puasa Arafah wajib dikerjakan oleh jamaah haji di Padang Arafah',
      'Puasa Asyura membebaskan seseorang dari kewajiban zakat fitrah'
    ],
    correctAnswers: [0, 1],
    explanation: 'Puasa Arafah menghapus dosa 2 tahun (khusus non-haji), dan Puasa Asyura menghapus dosa 1 tahun yang lalu.'
  },
  {
    id: 10,
    question: 'Hikmah-hikmah mulia yang diperoleh seorang Muslim dari ibadah puasa adalah... (Pilih lebih dari satu jawaban benar)',
    options: [
      'Meningkatkan derajat ketakwaan kepada Allah Swt.',
      'Melatih kesabaran dalam mengendalikan hawa nafsu dan amarah',
      'Menumbuhkan empati sosial dan kepedulian membantu sesama',
      'Memberi waktu istirahat bagi organ pencernaan tubuh (kesehatan)'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'Puasa memberikan manfaat holistik: spiritual (takwa), emosional (sabar), sosial (empati), dan fisik (kesehatan).'
  }
];

export const KELAS5_P4_MATCHING: MatchPair[] = [
  {
    id: 1,
    premise: 'QS. Al-Baqarah ayat 183',
    answer: 'Dalil Kewajiban Berpuasa & Tujuan Meraih Derajat Takwa'
  },
  {
    id: 2,
    premise: 'Malam Lailatul Qadar',
    answer: 'Malam Kemuliaan Lebih Baik dari 1.000 Bulan di 10 Malam Terakhir Ramadan'
  },
  {
    id: 3,
    premise: 'Puasa Nazar & Puasa Kafarat',
    answer: 'Jenis Puasa Wajib Selain Ramadan (Karena Janji Dikabulkan & Denda Tebusan)'
  },
  {
    id: 4,
    premise: 'Puasa Sunah Arafah (9 Zulhijah)',
    answer: 'Puasa Sunah Menghapuskan Dosa 2 Tahun (Tahun Lalu & Mendatang)'
  },
  {
    id: 5,
    premise: 'Niat di Malam Hari & Menahan Diri (Al-Imsak)',
    answer: 'Dua Rukun Utama Syarat Keabsahan Ibadah Puasa'
  }
];

export const KELAS5_P4_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Secara bahasa (etimologi), puasa berasal dari kata al-imsak yang berarti menahan diri dari sesuatu.',
    isTrue: true,
    explanation: 'Benar. Secara bahasa, puasa (al-shaum / al-siyam) berarti al-imsak yaitu menahan diri.'
  },
  {
    id: 2,
    statement: 'Niat untuk puasa wajib Ramadan sah dilakukan pada siang hari jam 12 siang saat teringat.',
    isTrue: false,
    explanation: 'Salah. Untuk puasa wajib (Ramadan), niat WAJIB dilakukan pada malam hari sebelum terbit fajar Subuh.'
  },
  {
    id: 3,
    statement: 'Lailatul Qadar adalah malam sangat mulia pada 10 malam terakhir Ramadan yang nilainya lebih baik daripada ibadah 1.000 bulan.',
    isTrue: true,
    explanation: 'Benar. Sebagaimana dijelaskan dalam Surah Al-Qadr, Lailatul Qadar lebih baik dari seribu bulan.'
  },
  {
    id: 4,
    statement: 'Puasa Kafarat adalah jenis puasa sunah yang dianjurkan dikerjakan setiap hari raya Idulfitri.',
    isTrue: false,
    explanation: 'Salah. Puasa Kafarat adalah puasa WAJIB sebagai denda/tebusan atas pelanggaran hukum agama, dan berpuasa pada hari raya Idulfitri hukumnya haram.'
  },
  {
    id: 5,
    statement: 'Puasa Daud dilakukan dengan cara berselang-seling, yaitu sehari berpuasa dan sehari tidak berpuasa.',
    isTrue: true,
    explanation: 'Benar. Puasa Daud adalah puasa sunah yang paling disukai Allah Swt. dengan pola sehari puasa dan sehari tidak.'
  },
  {
    id: 6,
    statement: 'Marah-marah, memaki, dan berbohong saat berpuasa membatalkan puasa secara fiqih sehingga puasanya wajib diqada.',
    isTrue: false,
    explanation: 'Salah. Akhlak tercela tidak membatalkan puasa secara sah fiqih, tetapi merusak dan menghapus pahala puasa di sisi Allah Swt.'
  },
  {
    id: 7,
    statement: 'Puasa Arafah disunahkan bagi jamaah haji yang sedang melaksanakan wukuf di Padang Arafah.',
    isTrue: false,
    explanation: 'Salah. Puasa Arafah disunahkan khusus bagi umat Islam yang TIDAK sedang menunaikan ibadah haji.'
  },
  {
    id: 8,
    statement: 'Ahmad lupa bahwa ia sedang berpuasa lalu makan dan minum. Puasa Ahmad tetap sah dan wajib dilanjutkan.',
    isTrue: true,
    explanation: 'Benar. Makan dan minum karena benar-benar tidak sengaja/lupa merupakan rezeki dari Allah Swt. dan tidak membatalkan puasa.'
  },
  {
    id: 9,
    statement: 'Balig dan berakal sehat merupakan bagian dari Rukun Puasa.',
    isTrue: false,
    explanation: 'Salah. Balig dan berakal sehat adalah SYARAT WAJIB PUASA. Rukun puasa hanya 2: Niat & Menahan Diri (al-imsak).'
  },
  {
    id: 10,
    statement: 'Salah satu hikmah puasa secara medis adalah memberikan waktu istirahat bagi organ pencernaan tubuh.',
    isTrue: true,
    explanation: 'Benar. Secara kesehatan, puasa membantu rehat sistem pencernaan dan detoksifikasi tubuh.'
  }
];

export const KELAS5_P4_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan pengertian puasa menurut istilah syariat (fiqih), sebutkan dalil perintahnya dalam Al-Qur\'an (QS. Al-Baqarah: 183), serta jelaskan tujuan utamanya!',
    rubric: 'Skor Maksimal 20: Menyebutkan pengertian istilah fiqih secara lengkap (menahan diri dari makan, minum, dan hal membatalkan puasa dari terbit fajar hingga terbenam matahari dengan niat) (8 pt), mengutip QS. Al-Baqarah ayat 183 (6 pt), dan menjelaskan tujuan utamanya yaitu meraih derajat ketakwaan (6 pt).',
    sampleAnswer: 'Puasa secara istilah syariat fiqih adalah menahan diri dari makan, minum, dan segala sesuatu yang membatalkan puasa sejak terbit fajar (Subuh) hingga terbenam matahari (Magrib) dengan niat ikhlas karena Allah Swt. Perintah berpuasa terdapat dalam QS. Al-Baqarah ayat 183. Tujuan utamanya adalah membentuk pribadi Muslim yang bertakwa (la\'allakum tattaqūn), yaitu taat menjalankan perintah Allah Swt. dan menjauhi seluruh larangan-Nya.'
  },
  {
    id: 2,
    question: 'Bandingkan antara Puasa Wajib dan Puasa Sunah! Uraikan masing-masing 3 contohnya beserta penjelasannya!',
    rubric: 'Skor Maksimal 20: Menganalisis perbedaan konsekuensi hukum keduanya (10 pt), menyebutkan 3 contoh puasa wajib (Ramadan, Nazar, Kafarat) dengan benar (5 pt), dan 3 contoh puasa sunah (Senin-Kamis, Arafah, Asyura, Ayyamul Bidh, Daud) dengan benar (5 pt).',
    sampleAnswer: 'Perbedaan Hukum: Puasa Wajib adalah puasa yang harus dilaksanakan oleh setiap Muslim yang memenuhi syarat, jika dikerjakan mendapat pahala dan jika ditinggalkan tanpa uzur berdosa. Puasa Sunah adalah puasa yang dianjurkan oleh Rasulullah saw., jika dikerjakan mendapat pahala melimpah dan jika ditinggalkan tidak berdosa.\nContoh Puasa Wajib: (1) Puasa Ramadan (wajib 1 bulan di bulan Ramadan), (2) Puasa Nazar (wajib karena janji jika hajat dikabulkan), (3) Puasa Kafarat (wajib sebagai denda tebusan pelanggaran hukum).\nContoh Puasa Sunah: (1) Puasa Senin-Kamis (rutin tiap pekan), (2) Puasa Arafah (9 Zulhijah bagi non-haji), (3) Puasa Daud / Asyura / Ayyamul Bidh.'
  },
  {
    id: 3,
    question: 'Uraikan keutamaan bulan suci Ramadan mengenai peristiwa Nuzulul Qur\'an, malam Lailatul Qadar, pentingnya niat di malam hari, serta 3 amalan sunah utamanya!',
    rubric: 'Skor Maksimal 20: Menjelaskan Nuzulul Qur\'an & keutamaan Lailatul Qadar (6 pt), menjelaskan ketentuan niat puasa wajib malam hari (6 pt), dan menguraikan 3 amalan sunah utama (Tarawih, Tadarus, Sedekah/Iftikaf) (8 pt).',
    sampleAnswer: 'Bulan Ramadan adalah bulan paling mulia karena di dalamnya diturunkan Al-Qur\'an (Nuzulul Qur\'an) dan terdapat malam Lailatul Qadar yang nilainya lebih baik dari ibadah 1.000 bulan.\nDalam puasa Ramadan, niat harus dilakukan di dalam hati pada malam hari sebelum fajar Subuh.\nAmalan sunah utamanya meliputi: (1) Shalat Tarawih & Witir berjamaah, (2) Tadarus Al-Qur\'an, (3) Memperbanyak sedekah & memberi makan orang berbuka (iftar), serta I\'tikaf di masjid pada 10 malam terakhir.'
  },
  {
    id: 4,
    question: 'Analisislah perbedaan mendasar antara Syarat Wajib Puasa, Syarat Sah Puasa, dan Rukun Puasa! Sebutkan contoh rincinya masing-masing!',
    rubric: 'Skor Maksimal 20: Membedakan konsep Syarat Wajib, Syarat Sah, dan Rukun secara konseptual (8 pt), rincian Syarat Wajib (4 pt), rincian Syarat Sah (4 pt), dan rincian Rukun Puasa (4 pt).',
    sampleAnswer: 'Perbedaan Kategori:\n1. Syarat Wajib Puasa: Syarat yang menyebabkan seseorang diwajibkan berpuasa. Rinciannya: Islam, Balig, Berakal sehat, dan Mampu berpuasa.\n2. Syarat Sah Puasa: Kriteria agar puasa yang dikerjakan sah dan diterima agama. Rinciannya: Islam & Mumayyiz, Suci dari haid/nifas bagi wanita, dan Dilakukan pada waktu yang diperbolehkan.\n3. Rukun Puasa: Unsur pokok yang harus ada saat puasa berlangsung. Rinciannya ada 2: (a) Berniat di dalam hati karena Allah Swt., dan (b) Menahan diri (al-imsak) dari hal membatalkan puasa sejak fajar hingga magrib.'
  },
  {
    id: 5,
    question: 'Jelaskan perbedaan antara "Hal yang Membatalkan Puasa" dan "Hal yang Mengurangi Pahala Puasa"! Hubungkan dengan 4 hikmah puasa bagi kehidupan murid SD!',
    rubric: 'Skor Maksimal 20: Menjelaskan perbedaan konsekuensi fiqih hal membatalkan vs mengurangi pahala beserta contohnya (10 pt), serta menghubungkannya dengan 4 hikmah puasa (Takwa, Kesabaran, Empati, Disiplin/Kesehatan) pada murid SD (10 pt).',
    sampleAnswer: 'Perbedaan: Hal yang membatalkan puasa (seperti makan/minum sengaja, muntah sengaja, murtad) menyebabkan puasa gugur/batal sehingga wajib diqada. Sedangkan hal yang mengurangi pahala puasa (seperti berbohong, memaki, marah, bertengkar) membuat puasa tetap sah secara fiqih tetapi pahala kebaikannya hilang di sisi Allah Swt.\nHikmah Puasa bagi Murid SD:\n1. Meningkatkan Ketakwaan: Melatih murid jujur dan taat ibadah meskipun tanpa pengawasan orang tua.\n2. Melatih Kesabaran & Kontrol Diri: Murid belajar menahan amarah, menjaga lisan dari ucapan kotor, dan sabar berjuang.\n3. Menumbuhkan Empati Sosial: Merasakan lapar mendidik murid peka dan suka berbagi rezeki dengan teman/fakir miskin.\n4. Menumbuhkan Disiplin & Kesehatan: Membiasakan sahur tepat waktu, disiplin shalat, serta memberikan waktu rehat bagi organ pencernaan.'
  }
];

