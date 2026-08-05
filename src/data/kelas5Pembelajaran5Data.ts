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

export const KELAS5_P5_SLIDES: SlideContent[] = [
  {
    id: 1,
    title: 'Tujuan Pembelajaran Bab V',
    subtitle: 'Kepemimpinan Nabi Muhammad saw. di Madinah dan Keteladanannya',
    icon: 'Target',
    color: 'from-emerald-600 to-teal-700',
    points: [
      'Menceritakan latar belakang hijrah Nabi Muhammad saw. ke Madinah.',
      'Menjelaskan kepemimpinan Nabi Muhammad saw. setelah hijrah ke Madinah.',
      'Menjelaskan upaya Nabi Muhammad saw. dalam membangun masyarakat Madinah.',
      'Mengidentifikasi sifat-sifat kepemimpinan Rasulullah saw. (Ṣiddīq, Amānah, Tablīġ, Faṭānah).',
      'Meneladani kepemimpinan Nabi Muhammad saw. dalam kehidupan sehari-hari.',
      'Menunjukkan sikap jujur, amanah, adil, bertanggung jawab, dan gemar bermusyawarah.'
    ],
    explanation: 'Bab kelima mendidik kita memahami sejarah perjuangan Rasulullah saw. di Madinah serta menerapkan karakter kepemimpinan berakhlak mulia di rumah, sekolah, dan masyarakat.'
  },
  {
    id: 2,
    title: 'Latar Belakang Hijrah Nabi ke Madinah',
    subtitle: 'Perjuangan Dakwah dan Perintah Allah Swt.',
    icon: 'Compass',
    color: 'from-teal-600 to-emerald-800',
    points: [
      'Nabi Muhammad saw. dan para sahabat berdakwah di Makkah selama kurang lebih 13 tahun.',
      'Menghadapi berbagai tantangan berat dari kaum Quraisy: penolakan, penghinaan, pemboikotan ekonomi, hingga penyiksaan fisik.',
      'Meskipun demikian, Rasulullah saw. tetap menyampaikan ajaran Islam dengan penuh kesabaran, keikhlasan, dan kasih sayang.',
      'Atas perintah Allah Swt., Nabi Muhammad saw. bersama para sahabat melakukan hijrah menuju kota Madinah (Yatsrib).'
    ],
    explanation: 'Peristiwa hijrah bukan karena melarikan diri dari musuh, melainkan strategi dakwah atas petunjuk Allah Swt. untuk menyelamatkan akidah Islam dan membangun tatanan masyarakat baru.'
  },
  {
    id: 3,
    title: 'Makna & Sambutan Peristiwa Hijrah',
    subtitle: 'Awal Berdirinya Peradaban Islam yang Kuat dan Damai',
    icon: 'MapPin',
    color: 'from-blue-600 to-indigo-700',
    points: [
      'Penduduk Madinah menyambut kedatangan Rasulullah saw. dengan penuh kegembiraan dan lagu kebesaran.',
      'Masyarakat Madinah siap memberikan perlindungan tempat tinggal dan keselamatan bagi kaum Muhajirin yang hijrah dari Makkah.',
      'Hijrah bukan sekadar perpindahan tempat tinggal secara fisik dari Makkah ke Madinah.',
      'Hijrah adalah titik awal berdirinya masyarakat Islam yang kuat, damai, serta berlandaskan nilai keimanan dan persaudaraan.'
    ],
    explanation: 'Peristiwa hijrah dijadikan sebagai permulaan penanggalan kalender Hijriah oleh Khalifah Umar bin Khattab r.a. karena menandai kebangkitan kejayaan Islam.'
  },
  {
    id: 4,
    title: 'Kepemimpinan Nabi Muhammad saw. di Madinah',
    subtitle: 'Pemimpin Masyarakat Multikultural dan Beragam Agama',
    icon: 'Users',
    color: 'from-purple-600 to-indigo-800',
    points: [
      'Tiba di Madinah, Rasulullah saw. diangkat menjadi pemimpin umat Islam sekaligus pemimpin seluruh masyarakat Madinah.',
      'Masyarakat Madinah sangat heterogen, terdiri dari berbagai suku (Aus dan Khazraj) serta lintas agama (Islam dan Yahudi).',
      'Beliau memimpin dengan penuh kebijaksanaan, kejujuran, keadilan, dan kasih sayang tanpa membeda-bedakan.',
      'Dalam kepemimpinannya, Rasulullah saw. selalu mengutamakan musyawarah, persatuan, keadilan, dan kesejahteraan bersama.'
    ],
    explanation: 'Keberhasilan Nabi memimpin Madinah membuktikan bahwa pemimpin sejati harus memiliki akhlak mulia, mendengarkan rakyat, dan mengutamakan kepentingan umum di atas kepentingan pribadi.'
  },
  {
    id: 5,
    title: 'Langkah 1: Membangun Masjid Nabawi',
    subtitle: 'Masjid sebagai Pusat Kehidupan dan Pembinaan Umat',
    icon: 'Building2',
    color: 'from-emerald-700 to-teal-800',
    points: [
      'Langkah pertama yang dilakukan Rasulullah saw. begitu tiba di Madinah adalah membangun Masjid Nabawi.',
      'Masjid tidak hanya digunakan sebagai tempat ibadah shalat fardhu.',
      'Fungsi utama Masjid Nabawi di masa Rasulullah saw.:',
      '• Pusat pendidikan & pengajaran ilmu',
      '• Tempat bermusyawarah mengambil keputusan',
      '• Pusat dakwah & penerimaan utusan tamu',
      '• Tempat menyelesaikan persoalan dan perselisihan masyarakat',
      '• Tempat pembinaan akhlak & karakter umat'
    ],
    explanation: 'Masjid Nabawi menjadi jantung penggerak peradaban Islam di Madinah yang menyatukan seluruh aktivitas ibadah, sosial, pendidikan, dan pemerintahan.'
  },
  {
    id: 6,
    title: 'Langkah 2: Mempersaudarakan Muhajirin & Anshar',
    subtitle: 'Membangun Ikatan Persaudaraan Islam (Ukhuwah Islamiyah)',
    icon: 'HeartHandshake',
    color: 'from-rose-600 to-pink-700',
    points: [
      'Kaum Muhajirin: Umat Islam dari Makkah yang rela meninggalkan harta dan rumah demi hijrah membela agama Allah.',
      'Kaum Anshar: Penduduk asli Madinah yang menerima, menyambut, dan menolong kaum Muhajirin dengan penuh keikhlasan.',
      'Rasulullah saw. mempersaudarakan setiap satu orang Muhajirin dengan satu orang Anshar (misal: Abdurrahman bin Auf dipersaudarakan dengan Sa\'ad bin ar-Rabi\').',
      'Tujuan mempersaudarakan: mencegah perpecahan, memupuk semangat saling membantu, berbagi tempat tinggal, bekerja sama, dan menguatkan keimanan.'
    ],
    explanation: 'Persaudaraan Muhajirin dan Anshar menjadi teladan tertinggi indahnya solidaritas dan semangat berbagi dalam kehidupan bermasyarakat.'
  },
  {
    id: 7,
    title: 'Langkah 3: Menyusun Piagam Madinah',
    subtitle: 'Konstitusi Tertulis Pertama di Dunia untuk Kerukunan Bangsa',
    icon: 'FileText',
    color: 'from-amber-600 to-orange-700',
    points: [
      'Untuk menjaga kerukunan masyarakat Madinah yang beragam (berbeda suku dan agama), Rasulullah saw. menyusun Piagam Madinah (Sahifah Madinah).',
      'Piagam Madinah merupakan kesepakatan bersama yang mengatur hak dan kewajiban seluruh penduduk Madinah, baik Muslim maupun non-Muslim.',
      'Piagam ini diakui para sejarawan dunia sebagai undang-undang dasar tertulis pertama yang menjamin hak asasi manusia dan kebebasan beragama.',
      'Menjadi tonggak sejarah kehidupan toleransi dan persatuan di bawah naungan keadilan.'
    ],
    explanation: 'Piagam Madinah membuktikan bahwa Islam mengedepankan perdamaian, musyawarah, dan perlindungan bagi seluruh warga tanpa diskriminasi.'
  },
  {
    id: 8,
    title: 'Isi Pokok Piagam Madinah',
    subtitle: '5 Prinsip Utama Hak dan Kewajiban Warga Madinah',
    icon: 'CheckSquare',
    color: 'from-emerald-600 to-cyan-700',
    points: [
      'Hak Persamaan di Hadapan Hukum: Setiap warga memiliki hak dan kedudukan yang sama di hadapan hukum.',
      'Kewajiban Menjaga Keamanan: Semua kelompok warga wajib bekerja sama mempertahankan dan menjaga keamanan kota Madinah dari ancaman luar.',
      'Kebebasan Beragama: Setiap warga bebas menjalankan ibadah sesuai keyakinan agamanya tanpa paksaan.',
      'Penyelesaian Masalah secara Adil: Setiap perselisihan dan konflik harus diselesaikan secara adil melalui hukum Allah dan keputusan Rasulullah saw.',
      'Menjaga Kedamaian Bersama: Seluruh masyarakat saling membantu menciptakan ketenteraman dan kedamaian.'
    ],
    explanation: 'Prinsip Piagam Madinah sangat relevan dengan nilai Pancasila dan UUD 1945 dalam menjaga NKRI yang majemuk dan berbhineka.'
  },
  {
    id: 9,
    title: 'Langkah 4 & 5: Menegakkan Keadilan & Musyawarah',
    subtitle: 'Dua Pilar Utama Kepemimpinan Rasulullah saw.',
    icon: 'Scale',
    color: 'from-indigo-600 to-purple-700',
    points: [
      'Menegakkan Keadilan:',
      '• Rasulullah saw. selalu berlaku adil kepada siapapun tanpa membedakan suku, kedudukan, atau kekayaan.',
      '• Beliau tidak memihak orang yang salah meskipun memiliki hubungan keluarga dekat.',
      '• Sikap adil menjadikan seluruh warga Madinah hidup aman, tenteram, dan saling percaya.',
      'Mengembangkan Musyawarah:',
      '• Rasulullah saw. selalu mengajak para sahabat bermusyawarah sebelum mengambil keputusan penting (misal: strategi perang Khandaq).',
      '• Mengajarkan cara menyampaikan pendapat dengan santun serta menghargai pendapat orang lain.'
    ],
    explanation: 'Keadilan yang tidak pandang bulu dan budaya musyawarah menjadikan kepemimpinan Rasulullah saw. dicintai oleh kawan maupun lawan.'
  },
  {
    id: 10,
    title: 'Sifat Kepemimpinan 1: Ṣiddīq (Jujur)',
    subtitle: 'Berkata Benar dan Menjaga Kejujuran dalam Setiap Keadaan',
    icon: 'ShieldCheck',
    color: 'from-blue-600 to-teal-600',
    points: [
      'Pengertian: Ṣiddīq artinya jujur atau berkata benar. Rasulullah saw. selalu berkata benar dan tidak pernah berdusta sedikit pun.',
      'Sebelum diangkat menjadi rasul, beliau sudah dijuluki Al-Amīn (orang yang jujur dan dapat dipercaya).',
      'Contoh Penerapan Murid di Rumah & Sekolah:',
      '• Berkata jujur kepada guru, orang tua, dan teman',
      '• Tidak menyontek saat ujian atau mengerjakan ulangan',
      '• Berani mengakui kesalahan dan meminta maaf dengan ikhlas'
    ],
    explanation: 'Kejujuran adalah pondasi utama karakter seorang muslim. Orang yang jujur akan dipercaya orang lain dan mendapatkan ridha Allah Swt.'
  },
  {
    id: 11,
    title: 'Sifat Kepemimpinan 2: Amānah (Dapat Dipercaya)',
    subtitle: 'Menjaga Kepercayaan dan Bertanggung Jawab Sepenuh Hati',
    icon: 'Award',
    color: 'from-emerald-600 to-green-700',
    points: [
      'Pengertian: Amānah artinya dapat dipercaya. Rasulullah saw. selalu menepati janji dan menjalankan setiap tugas/tanggung jawab dengan sebaik-baiknya.',
      'Beliau memegang teguh amanah dakwah dari Allah Swt. dan amanah dari rakyat Madinah.',
      'Contoh Penerapan Murid di Rumah & Sekolah:',
      '• Mengerjakan tugas sekolah dan PR dengan sungguh-sungguh',
      '• Menjaga dan mengembalikan barang pinjaman teman dalam keadaan baik',
      '• Melaksanakan piket kelas dan tanggung jawab pengurus kelas dengan disiplin'
    ],
    explanation: 'Anak yang amanah akan menjadi pribadi yang bertanggung jawab, tidak lalai, dan disukai oleh guru serta teman-temannya.'
  },
  {
    id: 12,
    title: 'Sifat Kepemimpinan 3: Tablīġ (Menyampaikan Kebenaran)',
    subtitle: 'Menyampaikan Kebaikan dengan Jujur dan Santun',
    icon: 'Megaphone',
    color: 'from-amber-600 to-yellow-700',
    points: [
      'Pengertian: Tablīġ artinya menyampaikan. Rasulullah saw. menyampaikan seluruh wahyu Allah Swt. kepada umat manusia tanpa menyembunyikan sedikit pun.',
      'Beliau menyampaikan kebenaran dengan penuh keberanian, kejujuran, dan kelembutan bahasa.',
      'Contoh Penerapan Murid di Rumah & Sekolah:',
      '• Menyampaikan informasi atau berita dengan benar tanpa menambahi/mengurangi (tidak menyebar hoaks)',
      '• Mengingatkan teman untuk berbuat baik dan menjauhi perbuatan tercela',
      '• Berani menyampaikan pendapat atau kebenaran dengan sopan di kelas'
    ],
    explanation: 'Tablig mengajarkan kita untuk menjadi pembawa pesan kebaikan dan berani menyuarakan kebenaran di mana pun kita berada.'
  },
  {
    id: 13,
    title: 'Sifat Kepemimpinan 4: Faṭānah (Cerdas)',
    subtitle: 'Kecerdasan Berpikir dan Cermat Mencari Solusi Terbaik',
    icon: 'Brain',
    color: 'from-purple-600 to-violet-700',
    points: [
      'Pengertian: Faṭānah artinya cerdas. Rasulullah saw. memiliki kecerdasan luar biasa dalam mengatur strategi dan menyelesaikan berbagai masalah umat.',
      'Beliau mampu mengambil keputusan yang tepat demi kemaslahatan dan keselamatan bersama.',
      'Contoh Penerapan Murid di Rumah & Sekolah:',
      '• Rajin belajar dan tekun menuntut ilmu pengetahuan',
      '• Berpikir secara cermat dan matang sebelum bertindak atau berbicara',
      '• Aktif mencari solusi bijak ketika menghadapi masalah belajar/kelompok',
      '• Menggunakan ilmu yang dimiliki untuk membantu orang lain'
    ],
    explanation: 'Kecerdasan (Fatanah) yang dibimbing dengan imtaq akan melahirkan calon pemimpin bangsa yang pintar, kreatif, dan berakhlak mulia.'
  },
  {
    id: 14,
    title: 'Keteladanan Kepemimpinan Rasulullah saw.',
    subtitle: 'Penerapan Nyata di Keluarga, Sekolah, dan Masyarakat',
    icon: 'Smile',
    color: 'from-pink-600 to-rose-700',
    points: [
      'Di Lingkungan Keluarga:',
      '• Membantu orang tua, berkata sopan, menjaga kerukunan dengan saudara',
      'Di Lingkungan Sekolah:',
      '• Datang tepat waktu, menghormati guru, membantu teman yang kesulitan',
      '• Menjaga kebersihan kelas, menaati tata tertib, bekerja sama dalam kelompok',
      '• Bersikap adil kepada semua teman dan menyelesaikan masalah via musyawarah',
      'Di Lingkungan Masyarakat:',
      '• Mengikuti gotong royong, menjaga kebersihan, menghormati tetangga, ikut kegiatan sosial'
    ],
    explanation: 'Keteladanan Rasulullah saw. tidak hanya dipelajari dalam cerita sejarah, melainkan wajib diwujudkan dalam tindakan nyata murid sehari-hari.'
  },
  {
    id: 15,
    title: 'Hikmah Meneladani Kepemimpinan Nabi Muhammad saw.',
    subtitle: '8 Manfaat Utama Pembentukan Karakter Pemimpin Masa Depan',
    icon: 'Sparkles',
    color: 'from-emerald-600 to-amber-600',
    points: [
      'Memiliki kepribadian yang jujur (Ṣiddīq) dalam setiap ucapan.',
      'Menjadi anak yang bertanggung jawab (Amānah) terhadap tugas.',
      'Disukai dan dihormati oleh teman, guru, dan keluarga.',
      'Mampu bekerja sama dengan orang lain dalam kebaikan.',
      'Menghargai perbedaan pendapat dalam musyawarah.',
      'Berani menyampaikan kebenaran (Tablīġ) dengan sopan.',
      'Mampu menyelesaikan masalah dengan bijaksana dan cerdas (Faṭānah).',
      'Menjadi calon pemimpin masa depan yang amanah, adil, dan bertakwa.'
    ],
    explanation: 'Meneladani kepemimpinan Rasulullah saw. menjadikan murid pribadi unggul yang siap menjadi generasi penerus bangsa yang berakhlak karimah.'
  }
];

export const KELAS5_P5_PROJECTS: ProjectTask[] = [
  {
    id: 'pjbl-1',
    title: 'Poster Infografis & Peta Konsep "Langkah Rasulullah Membangun Madinah"',
    category: 'PjBL',
    badge: 'Project Based Learning',
    description: 'Murid secara berkelompok membuat poster infografis kreatif yang mengilustrasikan 5 langkah utama Rasulullah saw. membangun Madinah (Masjid Nabawi, Persaudaraan Muhajirin-Anshar, Piagam Madinah, Keadilan, Musyawarah).',
    objective: 'Murid mampu mengidentifikasi dan memvisualisasikan strategi kepemimpinan Rasulullah saw. dalam membangun masyarakat Madinah yang damai dan toleran.',
    steps: [
      '1. Bentuk kelompok belajar yang terdiri dari 3-4 murid.',
      '2. Pelajari dan kaji 5 langkah utama Nabi Muhammad saw. membangun Madinah dari teks materi.',
      '3. Buatlah poster infografis di karton manila atau media digital yang memuat poin-poin penting Masjid Nabawi, Muhajirin-Anshar, isi Piagam Madinah, Keadilan, dan Musyawarah.',
      '4. Lengkapi poster dengan ilustrasi visual dan bagan persaudaraan Muhajirin-Anshar.',
      '5. Presentasikan poster di depan kelas dan tempel di dinding edukasi kelas/mading sekolah.'
    ],
    output: 'Poster Infografis Peta Konsep "Langkah Rasulullah Membangun Madinah".',
    rubrik: [
      'Kelengkapan isi materi 5 langkah pembangunan Madinah & Piagam Madinah (30%)',
      'Ketepatan struktur penjelasan persaudaraan Muhajirin dan Anshar (30%)',
      'Kreativitas desain visual, kerapian, dan kebersihan poster (20%)',
      'Kerjasama kelompok & kekompakan presentasi (20%)'
    ],
    note: 'Sesuai kebijakan guru'
  },
  {
    id: 'pjbl-2',
    title: 'Simulasi Role-Play Musyawarah & Pementasan Drama "Meneladani 4 Sifat Kepemimpinan Rasulullah"',
    category: 'PjBL',
    badge: 'Project Based Learning',
    description: 'Murid merancang dan mementaskan simulasi musyawarah kelas atau naskah drama pendek (durasi 3-5 menit) yang memperagakan penerapan sifat Siddiq, Amanah, Tablig, dan Fatanah dalam kehidupan sekolah.',
    objective: 'Murid mampu merefleksikan dan memperagakan sikap jujur, bertanggung jawab, pemberani, cerdas, dan bermusyawarah dalam menyelesaikan masalah kehidupan.',
    steps: [
      '1. Susun skenario naskah drama pendek tentang pemilihan ketua kelompok atau penyelesaian perselisihan piket kelas.',
      '2. Tentukan peran tokoh yang mencerminkan sifat Ṣiddīq, Amānah, Tablīġ, dan Faṭānah.',
      '3. Lakukan adegan musyawarah dengan bahasa yang santun dan saling menghargai pendapat.',
      '4. Tampilkan pementasan simulasi drama di depan kelas secara bergantian.',
      '5. Tarik kesimpulan hikmah kepemimpinan bersama guru dan teman-teman.'
    ],
    output: 'Pementasan Drama Simulasi Kepemimpinan dan Naskah Skenario Musyawarah.',
    rubrik: [
      'Kesesuaian adegan drama dengan 4 sifat kepemimpinan Rasulullah saw. (30%)',
      'Penerapan adab bermusyawarah dan penyampaian pendapat yang santun (30%)',
      'Penghayatan karakter tokoh & kreativitas alur cerita (20%)',
      'Kekompakan kelompok dan kerjasama tim (20%)'
    ],
    note: 'Sesuai kebijakan guru'
  },
  {
    id: 'pbl-1',
    title: 'Studi Kasus Fiqih & Siroh: "Menyelesaikan Perselisihan Teman dengan Prinsip Musyawarah & Piagam Madinah"',
    category: 'PBL',
    badge: 'Problem Based Learning',
    description: 'Murid disajikan sebuah skenario perselisihan antar kelompok murid di sekolah mengenai penggunaan lapangan/piket, lalu menganalisis solusi berdasarkan 5 prinsip Piagam Madinah dan budaya musyawarah.',
    objective: 'Murid mampu berpikir kritis dan mengaplikasikan prinsip kesetaraan hak, keadilan, dan musyawarah Piagam Madinah untuk mengatasi konflik teman sekelas.',
    steps: [
      '1. Baca skenario konflik: Kelompok A dan Kelompok B berebut jam latihan olahraga dan saling menuding.',
      '2. Analisis masalah dari sudut pandang prinsip Piagam Madinah (hak yang sama, penyelesaian adil, menjaga kedamaian).',
      '3. Formulasikan 3 langkah musyawarah mufakat yang adil untuk kedua belah pihak tanpa memihak.',
      '4. Susunlah "Draf Kesepakatan Damai Kelas" yang diilhami dari Piagam Madinah.',
      '5. Bagikan dan diskusikan draf solusi di hadapan forum diskusi kelas.'
    ],
    output: 'Laporan Analisis Konflik dan Draf "Kesepakatan Damai Kelas".',
    rubrik: [
      'Ketajaman analisis konflik berdasarkan prinsip Piagam Madinah (40%)',
      'Keadilan dan kelogisan solusi musyawarah yang ditawarkan (30%)',
      'Kerapian draf kesepakatan & penyampaian hasil diskusi (30%)'
    ],
    note: 'Sesuai kebijakan guru'
  },
  {
    id: 'pbl-2',
    title: 'Analisis Dilema Akhlak: "Penerapan Sifat Siddiq, Amanah, Tablig, Fatanah dalam Kerja Kelompok"',
    category: 'PBL',
    badge: 'Problem Based Learning',
    description: 'Murid menganalisis 4 situasi dilematis sehari-hari (menyontek, merusak barang pinjaman, takut menyampaikan kebenaran, malas berpikir) dan menentukan tindakan paling tepat sesuai 4 sifat Rasulullah saw.',
    objective: 'Murid mampu mengevaluasi tindakan yang salah dan merumuskan solusi berakhlak mulia dengan meneladani sifat Ṣiddīq, Amānah, Tablīġ, dan Faṭānah.',
    steps: [
      '1. Analisis 4 studi kasus dilema:',
      '   - Kasus A: Budi melihat teman dekatnya menyontek saat ujian PAI (Uji Sifat Ṣiddīq & Tablīġ).',
      '   - Kasus B: Cici memecahkan penggaris pinjaman milik perpustakaan sekolah (Uji Sifat Ṣiddīq & Amānah).',
      '   - Kasus C: Doni melihat sampah berserakan di kelas tapi pura-pura tidak tahu (Uji Sifat Amānah & Faṭānah).',
      '   - Kasus D: Kelompok E bingung membagi tugas proyek karena satu anggota pasif (Uji Sifat Faṭānah & Musyawarah).',
      '2. Diskusikan solusi berakhlak mulia untuk tiap kasus berdasarkan sifat Rasulullah saw.',
      '3. Susun Matriks Solusi Akhlak Kepemimpinan beserta komitmen tindakan murid.'
    ],
    output: 'Matriks Analisis Dilema Akhlak Kepemimpinan dan Lembar Komitmen Murid.',
    rubrik: [
      'Ketepatan menghubungkan tiap kasus dengan 4 sifat kepemimpinan Rasulullah (40%)',
      'Kedalaman alasan dan kepraktisan solusi berakhlak mulia (30%)',
      'Kejelasan draf komitmen penerapan dalam kehidupan sehari-hari (30%)'
    ],
    note: 'Sesuai kebijakan guru'
  }
];

export const KELAS5_P5_QUEST_STEPS = [
  {
    id: 1,
    title: 'Pos 1: Latar Belakang Peristiwa Hijrah',
    story: 'Kamu memulai petualangan di Kota Makkah. Rasulullah saw. dan sahabat berdakwah 13 tahun menghadapi tantangan berat dari kaum Quraisy. Atas perintah Allah Swt., beliau berhijrah.',
    question: 'Apakah tujuan utama peristiwa hijrah Nabi Muhammad saw. ke Madinah?',
    options: [
      'Melarikan diri karena takut pada ancaman kaum Quraisy.',
      'Perintah Allah Swt. untuk menyelamatkan akidah serta membangun masyarakat Islam yang kuat, damai, dan bersatu.',
      'Mencari tempat berdagang baru agar menjadi kaya raya di Madinah.',
      'Menghindari tugas dakwah dan beristirahat di Yatsrib.'
    ],
    correct: 1,
    hint: 'Hijrah terjadi atas perintah Allah Swt. untuk membangun tatanan masyarakat Islam berlandaskan keimanan dan persaudaraan.'
  },
  {
    id: 2,
    title: 'Pos 2: Penyambutan Kaum Muhajirin & Anshar',
    story: 'Kamu tiba di batas kota Madinah. Penduduk Madinah menyambut kedatangan Rasulullah saw. dan kaum Muhajirin dengan kegembiraan luar biasa.',
    question: 'Siapakah yang dimaksud dengan Kaum Muhajirin dan Kaum Anshar?',
    options: [
      'Muhajirin adalah penduduk Madinah, sedangkan Anshar adalah pendatang dari Makkah.',
      'Muhajirin adalah umat Islam dari Makkah yang berhijrah, sedangkan Anshar adalah penduduk Madinah yang menolong mereka.',
      'Kedua kaum tersebut adalah pasukan perang dari kota Taif.',
      'Muhajirin adalah pedagang asing, sedangkan Anshar adalah raja Madinah.'
    ],
    correct: 1,
    hint: 'Muhajirin berasal dari kata hijrah (Makkah), Anshar berarti penolong (penduduk Madinah).'
  },
  {
    id: 3,
    title: 'Pos 3: Pembangunan Masjid Nabawi',
    story: 'Rasulullah saw. memulai langkah pertamanya di Madinah dengan mendirikan Masjid Nabawi bersama kaum Muhajirin dan Anshar.',
    question: 'Manakah yang BUKAN merupakan fungsi Masjid Nabawi pada masa Rasulullah saw.?',
    options: [
      'Pusat ibadah shalat dan pembinaan akhlak umat.',
      'Pusat pendidikan, musyawarah, dan penyelesaian masalah masyarakat.',
      'Tempat perlombaan senjata dan gudang komersial mencari keuntungan.',
      'Tempat menerima kunjungan tamu utusan dari luar Madinah.'
    ],
    correct: 2,
    hint: 'Masjid Nabawi adalah pusat kehidupan spiritual, pendidikan, sosial, dan musyawarah—bukan tempat komersial/perlombaan senjata.'
  },
  {
    id: 4,
    title: 'Pos 4: Persaudaraan Islam (Ukhuwah)',
    story: 'Untuk mencegah perpecahan, Rasulullah saw. mempersaudarakan setiap satu orang Muhajirin dengan satu orang Anshar.',
    question: 'Hikmah utama dari tindakan Rasulullah mempersaudarakan kaum Muhajirin dan Anshar adalah...',
    options: [
      'Agar kaum Muhajirin menguasai seluruh rumah penduduk Anshar.',
      'Memupuk semangat kebersamaan, saling membantu, berbagi, dan memperkuat persatuan umat.',
      'Memaksa kaum Anshar untuk pindah tempat tinggal ke Makkah.',
      'Membagi wilayah Madinah menjadi dua kerajaan yang terpisah.'
    ],
    correct: 1,
    hint: 'Persaudaraan mempersatukan hati, menghilangkan perbedaan suku, dan memperkuat ikatan keimanan.'
  },
  {
    id: 5,
    title: 'Pos 5: Piagam Madinah (Sahifah Madinah)',
    story: 'Di Balai Kota Madinah, Rasulullah saw. menyusun dokumen tertulis untuk mengatur kehidupan masyarakat heterogen yang terdiri dari berbagai suku dan agama.',
    question: 'Apakah nama dokumen kesepakatan bersama yang mengatur hak dan kewajiban penduduk Madinah tersebut?',
    options: [
      'Perjanjian Hudaibiyah',
      'Piagam Madinah (Sahifah Madinah)',
      'Deklarasi Makkah',
      'Undang-Undang Fathul Makkah'
    ],
    correct: 1,
    hint: 'Dokumen konstitusi pertama yang mengatur kerukunan Muslim dan non-Muslim di Madinah adalah Piagam Madinah.'
  },
  {
    id: 6,
    title: 'Pos 6: Isi & Prinsip Piagam Madinah',
    story: 'Kamu membaca poin-poin penting dalam Piagam Madinah tentang kebebasan beragama dan persamaan di hadapan hukum.',
    question: 'Manakah salah satu isi pokok Piagam Madinah yang dirumuskan Rasulullah saw.?',
    options: [
      'Penduduk non-Muslim dilarang tinggal di kota Madinah.',
      'Setiap warga memiliki hak yang sama di hadapan hukum dan bebas menjalankan agamanya.',
      'Hanya suku Aus saja yang berhak menjadi hakim di Madinah.',
      'Seluruh perselisihan diselesaikan dengan peperangan antar suku.'
    ],
    correct: 1,
    hint: 'Piagam Madinah menjamin kesetaraan hukum, toleransi beragama, dan perdamaian bersama.'
  },
  {
    id: 7,
    title: 'Pos 7: Menegakkan Keadilan & Musyawarah',
    story: 'Rasulullah saw. memimpin Madinah dengan adil dan selalu mengajak para sahabat bermusyawarah sebelum mengambil keputusan penting.',
    question: 'Sikap manakah yang mencerminkan keteladanan Rasulullah saw. dalam menegakkan keadilan?',
    options: [
      'Membela teman dekat walaupun bersalah.',
      'Berlaku adil kepada siapa pun tanpa membeda-bedakan suku, kedudukan, atau kekayaan.',
      'Mengambil keputusan sendiri tanpa mau mendengar pendapat orang lain.',
      'Memberikan hukuman hanya kepada rakyat miskin saja.'
    ],
    correct: 1,
    hint: 'Keadilan Rasulullah saw. tidak memandang suku atau kekayaan, serta tidak memihak kepada yang salah.'
  },
  {
    id: 8,
    title: 'Pos 8: Sifat Kepemimpinan Rasulullah saw.',
    story: 'Di Puncak Teladan, kamu menguji pemahaman tentang 4 sifat wajib Rasulullah saw.: Ṣiddīq, Amānah, Tablīġ, dan Faṭānah.',
    question: 'Manakah pasangan sifat kepemimpinan Rasulullah saw. dan artinya yang BENAR?',
    options: [
      'Ṣiddīq = Cerdas; Faṭānah = Jujur',
      'Amānah = Menyampaikan; Tablīġ = Dapat dipercaya',
      'Ṣiddīq = Jujur; Amānah = Dapat dipercaya; Tablīġ = Menyampaikan kebenaran; Faṭānah = Cerdas',
      'Faṭānah = Berdusta; Ṣiddīq = Khianat'
    ],
    correct: 2,
    hint: 'Siddiq (Jujur), Amanah (Dapat Dipercaya), Tablig (Menyampaikan), Fatanah (Cerdas).'
  }
];

export const KELAS5_P5_QUESTIONS_PG: QuestionPG[] = [
  {
    id: 1,
    question: 'Nabi Muhammad saw. dan para sahabat berdakwah di Makkah selama kurang lebih 13 tahun menghadapi penolakan dan pemboikotan kaum Quraisy. Tujuan utama peristiwa hijrah Nabi ke Madinah adalah...',
    options: [
      'Melarikan diri karena takut ancaman fisik kaum Quraisy',
      'Menjalankan perintah Allah Swt. untuk menyelamatkan keimanan dan membangun masyarakat Islam yang damai',
      'Mencari daerah kekuasaan baru untuk membalas dendam kepada kaum Quraisy',
      'Menghentikan kegiatan dakwah Islam di kota Makkah'
    ],
    correctAnswer: 1,
    explanation: 'Hijrah merupakan strategi perjuangan atas perintah Allah Swt. untuk menegakkan nilai keimanan dan persaudaraan di tempat yang aman.'
  },
  {
    id: 2,
    question: 'Penduduk Madinah yang menyambut kedatangan Nabi Muhammad saw. dan siap membantu memberikan tempat tinggal serta perlindungan kepada kaum Muhajirin disebut...',
    options: [
      'Kaum Quraisy',
      'Kaum Anshar',
      'Kaum Yahudi Khaybar',
      'Kaum Munafik'
    ],
    correctAnswer: 1,
    explanation: 'Kaum Anshar adalah sebutan bagi penduduk Madinah yang membantu dan menyambut kaum Muhajirin dari Makkah.'
  },
  {
    id: 3,
    question: 'Langkah pertama yang dilakukan Rasulullah saw. begitu tiba di kota Madinah adalah mendirikan Masjid Nabawi. Fungsi utama Masjid Nabawi pada masa itu adalah...',
    options: [
      'Hanya tempat shalat fardhu dan beriktikaf saja',
      'Pusat ibadah, pendidikan, musyawarah, penyelesaian masalah, dan pembinaan akhlak umat',
      'Gudang komoditas perdagangan dan tempat penyimpanan perhiasan raja',
      'Arena benteng pertahanan perang khusus tentara'
    ],
    correctAnswer: 1,
    explanation: 'Masjid Nabawi berfungsi multifungsi sebagai pusat ibadah, sosial, musyawarah, pendidikan, dan pemerintahan.'
  },
  {
    id: 4,
    question: 'Untuk mempererat persatuan dan mencegah perpecahan antara pendatang dari Makkah dan penduduk Madinah, strategi cerdas yang dilakukan Rasulullah saw. adalah...',
    options: [
      'Memberikan modal uang tunai dalam jumlah besar',
      'Mempersaudarakan kaum Muhajirin dan kaum Anshar satu per satu',
      'Membuat garis batas wilayah pemukiman yang terpisah',
      'Mewajibkan kaum Muhajirin bekerja sebagai pelayan kaum Anshar'
    ],
    correctAnswer: 1,
    explanation: 'Rasulullah saw. mempersaudarakan kaum Muhajirin dan Anshar untuk menumbuhkan rasa saling mengasihi dan memperkuat ukhuwah Islamiyah.'
  },
  {
    id: 5,
    question: 'Rasulullah saw. menyusun dokumen tertulis pertama di dunia yang mengatur hak dan kewajiban seluruh warga Madinah (Muslim dan non-Muslim). Dokumen tersebut bernama...',
    options: [
      'Perjanjian Hudaibiyah',
      'Piagam Madinah (Sahifah Madinah)',
      'Deklarasi Makkah Al-Mukarramah',
      'Undang-Undang Uhud'
    ],
    correctAnswer: 1,
    explanation: 'Piagam Madinah adalah kesepakatan tertulis yang menjadi konstitusi pertama untuk menjamin hak asasi dan kerukunan beragama di Madinah.'
  },
  {
    id: 6,
    question: 'Perhatikan pernyataan berikut!\n(1) Bebas menjalankan agama masing-masing\n(2) Hak yang sama di hadapan hukum\n(3) Wajib bersama menjaga keamanan kota\nSemua pernyataan di atas merupakan isi pokok dari...',
    options: [
      'Perjanjian Aqabah I',
      'Piagam Madinah',
      'Sumpah Pemuda',
      'Perjanjian Hudaibiyah'
    ],
    correctAnswer: 1,
    explanation: 'Tiga poin tersebut merupakan prinsip utama yang tertuang di dalam Piagam Madinah.'
  },
  {
    id: 7,
    question: 'Seorang murid selalu berkata benar, tidak menyontek saat ujian, dan berani mengakui kesalahan jika berbuat salah. Sikap murid ini meneladani sifat kepemimpinan Rasulullah saw. yaitu...',
    options: [
      'Ṣiddīq (Jujur)',
      'Amānah (Dapat Dipercaya)',
      'Tablīġ (Menyampaikan)',
      'Faṭānah (Cerdas)'
    ],
    correctAnswer: 0,
    explanation: 'Ṣiddīq artinya jujur atau berkata benar. Bebas dari dusta dan kecurangan saat ujian adalah cerminan sifat Ṣiddīq.'
  },
  {
    id: 8,
    question: 'Saat menjadi ketua kelompok, Siti membagi tugas piket secara adil, menjaga alat tulis yang dipinjamkan guru, dan mengerjakan tugas dengan sungguh-sungguh. Sikap Siti mencerminkan sifat...',
    options: [
      'Amānah (Dapat Dipercaya & Bertanggung Jawab)',
      'Tablīġ (Menyampaikan)',
      'Faṭānah (Cerdas)',
      'Ṣiddīq (Jujur)'
    ],
    correctAnswer: 0,
    explanation: 'Amānah berarti dapat dipercaya dalam memegang tanggung jawab dan menjaga kepercayaan yang diberikan.'
  },
  {
    id: 9,
    question: 'Rasulullah saw. memiliki kecerdasan luar biasa dalam menyelesaikan masalah perselisihan antarsuku dan strategi membangun masyarakat. Sifat cerdas tersebut dinamakan...',
    options: [
      'Ṣiddīq',
      'Amānah',
      'Tablīġ',
      'Faṭānah'
    ],
    correctAnswer: 3,
    explanation: 'Faṭānah artinya cerdas dan bijaksana dalam berpikir serta mengambil keputusan.'
  },
  {
    id: 10,
    question: 'Di bawah ini merupakan hikmah meneladani kepemimpinan Nabi Muhammad saw. dalam kehidupan sehari-hari, KECUALI...',
    options: [
      'Memiliki kepribadian yang jujur dan bertanggung jawab',
      'Menjadi anak yang disukai oleh teman, guru, dan keluarga',
      'Menjadi pribadi yang sombong dan merasa paling berkuasa',
      'Mampu menyelesaikan masalah melalui musyawarah secara bijaksana'
    ],
    correctAnswer: 2,
    explanation: 'Menjadi sombong bukan hikmah kepemimpinan Rasulullah saw. Kepemimpinan beliau mendidik kerendahan hati dan kasih sayang.'
  }
];

export const KELAS5_P5_QUESTIONS_PGK: QuestionPGK[] = [
  {
    id: 1,
    question: 'Manakah di antara faktor berikut yang menjadi latar belakang hijrah Nabi Muhammad saw. dan para sahabat ke Madinah? (Pilih lebih dari satu jawaban benar)',
    options: [
      'Perintah langsung dari Allah Swt. melalui wahyu',
      'Adanya penolakan, penyiksaan, dan pemboikotan dari kaum Quraisy di Makkah',
      'Penduduk Madinah siap menyambut dan memberikan perlindungan',
      'Nabi ingin mencari kekayaan dari hasil perdagangan Madinah'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Hijrah berlatar belakang wahyu Allah Swt., ancaman kekejaman Quraisy, dan sambutan hangat warga Madinah.'
  },
  {
    id: 2,
    question: 'Pilihlah fungsi-fungsi utama dari didirikannya Masjid Nabawi pada masa Rasulullah saw. di Madinah! (Pilih lebih dari satu jawaban benar)',
    options: [
      'Pusat ibadah shalat berjamaah dan pembinaan akhlak',
      'Tempat bermusyawarah mengambil keputusan penting masyarakat',
      'Pusat pendidikan, dakwah, dan penerimaan utusan tamu',
      'Pasar jual beli barang secara komersial'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Masjid Nabawi berfungsi sebagai pusat ibadah, musyawarah, pendidikan, dakwah, dan sosial. Bukan untuk transaksi pasar.'
  },
  {
    id: 3,
    question: 'Manakah pernyataan yang BENAR mengenai hubungan Kaum Muhajirin dan Kaum Anshar? (Pilih lebih dari satu jawaban benar)',
    options: [
      'Kaum Muhajirin adalah sebutan untuk umat Islam yang berhijrah dari Makkah',
      'Kaum Anshar adalah penduduk asli Madinah yang menolong kaum Muhajirin',
      'Rasulullah saw. mempersaudarakan mereka untuk mencegah perpecahan',
      'Kaum Muhajirin dan Anshar saling bertengkar memperebutkan wilayah'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Muhajirin (pendatang dari Makkah) dan Anshar (penolong dari Madinah) dipersaudarakan oleh Nabi sehingga hidup rukun.'
  },
  {
    id: 4,
    question: 'Pilihlah isi pokok dan prinsip utama yang tertuang di dalam Piagam Madinah! (Pilih lebih dari satu jawaban benar)',
    options: [
      'Setiap warga negara memiliki hak yang sama di hadapan hukum',
      'Semua kelompok masyarakat wajib bekerja sama menjaga keamanan kota Madinah',
      'Setiap orang bebas menjalankan ibadah sesuai ajaran agamanya',
      'Hukum hanya berlaku bagi kaum miskin saja'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Piagam Madinah menjamin kesetaraan hukum, keamanan bersama, dan kebebasan menjalankan agama.'
  },
  {
    id: 5,
    question: 'Manakah di bawah ini yang merupakan 4 sifat utama kepemimpinan Nabi Muhammad saw.? (Pilih empat jawaban benar)',
    options: [
      'Ṣiddīq (Jujur)',
      'Amānah (Dapat dipercaya)',
      'Tablīġ (Menyampaikan kebenaran)',
      'Faṭānah (Cerdas)'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'Empat sifat wajib bagi Rasulullah saw. adalah Ṣiddīq, Amānah, Tablīġ, dan Faṭānah.'
  },
  {
    id: 6,
    question: 'Pilihlah contoh perilaku murid yang meneladani sifat Ṣiddīq (jujur) dalam kehidupan sehari-hari! (Pilih lebih dari satu jawaban benar)',
    options: [
      'Berkata jujur dan sebenarnya kepada orang tua dan guru',
      'Mengerjakan ulangan/ujian dengan jujur tanpa menyontek',
      'Berani mengakui kesalahan yang diperbuat dan meminta maaf',
      'Menyalahkan teman lain saat berbuat salah'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Siddiq diwujudkan dengan berkata benar, tidak menyontek, dan berani jujur mengakui kesalahan.'
  },
  {
    id: 7,
    question: 'Manakah contoh tindakan yang mencerminkan sifat Amānah (dapat dipercaya) di sekolah? (Pilih lebih dari satu jawaban benar)',
    options: [
      'Melaksanakan tugas piket kelas dengan penuh rasa tanggung jawab',
      'Menjaga dan mengembalikan barang pinjaman milik teman/sekolah tepat waktu',
      'Mengerjakan PR dan tugas sekolah dengan sungguh-sungguh',
      'Meninggalkan tugas kelas begitu saja untuk bermain'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Amanah berarti bertanggung jawab atas tugas piket, barang pinjaman, dan tugas sekolah.'
  },
  {
    id: 8,
    question: 'Pilihlah penerapan sifat Faṭānah (cerdas) yang tepat bagi seorang murid SD! (Pilih lebih dari satu jawaban benar)',
    options: [
      'Rajin dan tekun belajar menuntut ilmu pengetahuan',
      'Berpikir matang dan hati-hati sebelum bertindak',
      'Aktif mencari solusi bijak ketika menghadapi masalah',
      'Malas membaca buku dan enggan berpikir'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Fatanah diwujudkan dengan rajin belajar, berpikir cermat sebelum bertindak, dan pandai mencari solusi.'
  },
  {
    id: 9,
    question: 'Pilihlah tindakan murid di sekolah yang meneladani kepemimpinan Rasulullah saw.! (Pilih lebih dari satu jawaban benar)',
    options: [
      'Datang ke sekolah tepat waktu dan menghormati guru',
      'Menjaga kebersihan kelas dan menaati tata tertib sekolah',
      'Menyelesaikan perselisihan teman melalui musyawarah secara damai',
      'Pilih-pilih teman berdasarkan kekayaan orang tua'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Disiplin waktu, menjaga kebersihan, dan musyawarah adalah wujud meneladani Rasulullah saw. di sekolah.'
  },
  {
    id: 10,
    question: 'Manakah hikmah yang didapatkan murid jika meneladani kepemimpinan Rasulullah saw.? (Pilih lebih dari satu jawaban benar)',
    options: [
      'Menjadi pribadi yang jujur dan dapat dipercaya',
      'Disukai dan dihormati oleh teman, guru, dan keluarga',
      'Mampu bekerja sama dan menghargai perbedaan pendapat',
      'Menjadi calon pemimpin masa depan yang amanah dan adil'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'Semua pilihan di atas adalah hikmah mulia dari meneladani kepemimpinan Nabi Muhammad saw.'
  }
];

export const KELAS5_P5_MATCH_PAIRS: MatchPair[] = [
  {
    id: 1,
    premise: 'Kaum Muhajirin',
    answer: 'Umat Islam dari Makkah yang Berhijrah ke Madinah'
  },
  {
    id: 2,
    premise: 'Kaum Anshar',
    answer: 'Penduduk Asli Madinah yang Menolong dan Menyambut Pembawa Hijrah'
  },
  {
    id: 3,
    premise: 'Piagam Madinah',
    answer: 'Konstitusi Tertulis Pertama Mengatur Kesetaraan Hak dan Kerukunan Warga'
  },
  {
    id: 4,
    premise: 'Sifat Ṣiddīq',
    answer: 'Jujur dan Berkata Benar Tanpa Berdusta'
  },
  {
    id: 5,
    premise: 'Sifat Faṭānah',
    answer: 'Cerdas dan Bijaksana dalam Menyelesaikan Masalah'
  }
];

export const KELAS5_P5_QUESTIONS_BS: QuestionBS[] = [
  {
    id: 1,
    statement: 'Nabi Muhammad saw. dan para sahabat berdakwah di kota Makkah selama kurang lebih 13 tahun sebelum akhirnya berhijrah ke Madinah.',
    isTrue: true,
    explanation: 'Benar. Dakwah fase Makkah berlangsung selama ±13 tahun menghadapi penolakan kaum Quraisy sebelum hijrah ke Madinah.'
  },
  {
    id: 2,
    statement: 'Penduduk Madinah menolak dan mengusir kedatangan Nabi Muhammad saw. saat beliau tiba dari Makkah.',
    isTrue: false,
    explanation: 'Salah. Penduduk Madinah menyambut kedatangan Nabi saw. dengan penuh kegembiraan dan lagu penghormatan.'
  },
  {
    id: 3,
    statement: 'Langkah pertama yang dilakukan Rasulullah saw. di Madinah adalah mendirikan Masjid Nabawi.',
    isTrue: true,
    explanation: 'Benar. Pembangunan Masjid Nabawi adalah prioritas utama sebagai pusat ibadah, sosial, dan pendidikan.'
  },
  {
    id: 4,
    statement: 'Kaum Muhajirin adalah penduduk asli kota Madinah yang memberikan pertolongan.',
    isTrue: false,
    explanation: 'Salah. Penduduk asli Madinah yang menolong adalah Kaum Anshar. Kaum Muhajirin adalah pendatang dari Makkah.'
  },
  {
    id: 5,
    statement: 'Piagam Madinah menjamin kebebasan beragama bagi seluruh penduduk Madinah baik Muslim maupun non-Muslim.',
    isTrue: true,
    explanation: 'Benar. Salah satu isi pokok Piagam Madinah adalah memberi kebebasan beribadah sesuai keyakinan agama masing-masing.'
  },
  {
    id: 6,
    statement: 'Rasulullah saw. tidak pernah mengajak para sahabat bermusyawarah karena beliau mengambil semua keputusan sendiri.',
    isTrue: false,
    explanation: 'Salah. Rasulullah saw. selalu bermusyawarah dengan para sahabat sebelum mengambil keputusan penting.'
  },
  {
    id: 7,
    statement: 'Sifat Ṣiddīq berarti jujur, sedangkan sifat Amānah berarti dapat dipercaya.',
    isTrue: true,
    explanation: 'Benar. Ṣiddīq artinya jujur/berkata benar, dan Amānah artinya dapat dipercaya memegang tanggung jawab.'
  },
  {
    id: 8,
    statement: 'Menyontek saat mengerjakan ujian sekolah merupakan contoh penerapan sifat Tablīġ.',
    isTrue: false,
    explanation: 'Salah. Menyontek adalah perbuatan curang yang melanggar sifat Ṣiddīq dan Amānah.'
  },
  {
    id: 9,
    statement: 'Sifat Faṭānah mengajarkan murid untuk rajin belajar, berpikir cermat sebelum bertindak, dan pandai mencari solusi.',
    isTrue: true,
    explanation: 'Benar. Faṭānah artinya cerdas dan menggunakan akal pikiran untuk kemaslahatan bersama.'
  },
  {
    id: 10,
    statement: 'Salah satu hikmah meneladani kepemimpinan Rasulullah saw. adalah melatih kita menjadi calon pemimpin yang amanah dan adil.',
    isTrue: true,
    explanation: 'Benar. Meneladani kepemimpinan Nabi mendidik karakter jujur, adil, dan bertanggung jawab untuk masa depan.'
  }
];

export const KELAS5_P5_QUESTIONS_ESSAY: QuestionEssay[] = [
  {
    id: 1,
    question: 'Jelaskan latar belakang mengapa Nabi Muhammad saw. dan para sahabat melakukan hijrah dari kota Makkah ke Madinah!',
    rubric: 'Skor Maksimal 20: Menyebutkan dakwah 13 tahun di Makkah (5 pt), adanya ancaman/pemboikotan/penyiksaan kaum Quraisy (5 pt), perintah dari Allah Swt. (5 pt), serta sambutan hangat penduduk Madinah untuk membangun masyarakat Islam yang aman (5 pt).',
    sampleAnswer: 'Latar belakang hijrah ke Madinah adalah karena selama 13 tahun berdakwah di Makkah, Rasulullah saw. dan para sahabat menghadapi penolakan, penyiksaan, dan pemboikotan dari kaum Quraisy. Atas perintah Allah Swt., beliau berhijrah ke Madinah yang penduduknya (Kaum Anshar) siap menyambut dan memberikan perlindungan untuk membangun peradaban Islam yang kuat dan damai.'
  },
  {
    id: 2,
    question: 'Sebutkan 5 fungsi utama Masjid Nabawi yang dibangun Rasulullah saw. pada masa awal kehidupan di Madinah!',
    rubric: 'Skor Maksimal 20: Menyebutkan 5 fungsi dengan benar (masing-masing 4 pt): (1) Tempat shalat/ibadah, (2) Pusat pendidikan/ilmu, (3) Tempat musyawarah, (4) Pusat dakwah & penerimaan tamu, (5) Tempat menyelesaikan masalah & pembinaan akhlak.',
    sampleAnswer: 'Lima fungsi utama Masjid Nabawi pada masa Rasulullah saw.: (1) Pusat ibadah shalat dan pembinaan akhlak, (2) Pusat pendidikan dan pengajaran ilmu agama, (3) Tempat musyawarah mengambil keputusan bersama, (4) Pusat dakwah dan penerimaan tamu utusan, (5) Tempat menyelesaikan perselisihan masyarakat secara adil.'
  },
  {
    id: 3,
    question: 'Jelaskan apa yang dimaksud dengan Piagam Madinah serta sebutkan 3 isi pokok kesepakatan yang terkandung di dalamnya!',
    rubric: 'Skor Maksimal 20: Menjelaskan pengertian Piagam Madinah sebagai konstitusi tertulis kesepakatan seluruh warga Madinah (8 pt), dan menyebutkan 3 isi pokok (12 pt: persetujuan hak hukum sama, bebas beragama, dan wajib menjaga keamanan kota).',
    sampleAnswer: 'Piagam Madinah adalah kesepakatan tertulis bersama yang disusun oleh Rasulullah saw. untuk mengatur hak dan kewajiban seluruh penduduk Madinah (baik Muslim maupun non-Muslim). Tiga isi pokoknya: (1) Setiap warga memiliki hak yang sama di hadapan hukum, (2) Setiap orang bebas menjalankan agamanya, (3) Seluruh kelompok masyarakat wajib bersama-sama menjaga keamanan kota Madinah.'
  },
  {
    id: 4,
    question: 'Tuliskan dan jelaskan 4 sifat utama kepemimpinan Rasulullah saw. (Ṣiddīq, Amānah, Tablīġ, Faṭānah) beserta contoh penerapannya di sekolah!',
    rubric: 'Skor Maksimal 20: Menyebutkan arti dan contoh tiap sifat (masing-masing 5 pt): Ṣiddīq (Jujur - tidak menyontek), Amānah (Dapat dipercaya - jalankan piket), Tablīġ (Menyampaikan - berani bicara santun), Faṭānah (Cerdas - rajin belajar).',
    sampleAnswer: 'Empat sifat kepemimpinan Rasulullah saw.: (1) Ṣiddīq (Jujur): Berkata benar, contohnya tidak menyontek saat tes. (2) Amānah (Dapat dipercaya): Bertanggung jawab, contohnya melaksanakan piket kelas dengan disiplin. (3) Tablīġ (Menyampaikan kebenaran): Contohnya mengingatkan teman berbuat baik. (4) Faṭānah (Cerdas): Contohnya rajin belajar dan aktif memberi solusi saat tugas kelompok.'
  },
  {
    id: 5,
    question: 'Uraikan 4 hikmah yang kamu dapatkan jika meneladani sikap kepemimpinan Nabi Muhammad saw. dalam kehidupan sehari-hari!',
    rubric: 'Skor Maksimal 20: Menyebutkan 4 hikmah secara logis dan runtut (masing-masing 5 pt): Memiliki karakter jujur, bertanggung jawab, disukai teman & guru, mampu musyawarah dan bijaksana.',
    sampleAnswer: 'Empat hikmah meneladani kepemimpinan Nabi Muhammad saw.: (1) Menjadi pribadi yang jujur dan dipercaya orang lain, (2) Menjadi anak yang bertanggung jawab terhadap tugas dan amanah, (3) Disukai dan dihormati oleh teman, guru, serta keluarga, (4) Mampu bekerja sama dan menyelesaikan masalah melalui musyawarah secara bijaksana.'
  }
];
