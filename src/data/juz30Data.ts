export interface QuranVerse {
  number: number;
  arabic: string;
  latin: string;
  translation: string;
}

export interface QuranSurah {
  number: number;
  name: string;
  arabicName: string;
  translationName: string;
  revelationType: 'Makkiyah' | 'Madaniyah';
  numberOfVerses: number;
  audioUrl?: string;
  verses: QuranVerse[];
}

export const JUZ_30_SURAHS: QuranSurah[] = [
  {
    number: 78,
    name: "An-Naba'",
    arabicName: "النبأ",
    translationName: "Berita Besar",
    revelationType: "Makkiyah",
    numberOfVerses: 40,
    audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/78.mp3",
    verses: [
      { number: 1, arabic: "عَمَّ يَتَسَاءَلُونَ", latin: "‘Amma yatasā'alūn(a).", translation: "Tentang apakah mereka saling bertanya-tanya?" },
      { number: 2, arabic: "عَنِ النَّبَإِ الْعَظِيمِ", latin: "‘Anin-naba'il-‘aẓīm(i).", translation: "Tentang berita yang besar (hari Kebangkitan)," },
      { number: 3, arabic: "الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ", latin: "Allażī hum fīhi mukhtalifūn(a).", translation: "yang dalam hal itu mereka berselisih." },
      { number: 4, arabic: "كَلَّا سَيَعْلَمُونَ", latin: "Kallā saya‘lamūn(a).", translation: "Sekali-kali tidak! Kelak mereka akan mengetahui," },
      { number: 5, arabic: "ثُمَّ كَلَّا سَيَعْلَمُونَ", latin: "Ṡumma kallā saya‘lamūn(a).", translation: "kemudian sekali-kali tidak! Kelak mereka akan mengetahui." },
      { number: 6, arabic: "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا", latin: "Alam naj‘alil-arḍa mihādā(n).", translation: "Bukankah Kami telah menjadikan bumi sebagai hamparan," },
      { number: 7, arabic: "وَالْجِبَالَ أَوْتَادًا", latin: "Wal-jibāla autādā(n).", translation: "dan gunung-gunung sebagai pasak?" },
      { number: 8, arabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا", latin: "Wa khalaqnākum azwājā(n).", translation: "Dan Kami menciptakan kamu berpasang-pasangan," },
      { number: 9, arabic: "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا", latin: "Wa ja‘alnā naumakum subātā(n).", translation: "dan Kami menjadikan tidurmu untuk istirahat," },
      { number: 10, arabic: "وَجَعَلْنَا اللَّيْلَ لِبَاسًا", latin: "Wa ja‘alnal-laila libāsā(n).", translation: "dan Kami menjadikan malam sebagai pakaian," },
      { number: 11, arabic: "وَجَعَلْنَا النَّهَارَ مَعَاشًا", latin: "Wa ja‘alnan-nahāra ma‘āshā(n).", translation: "dan Kami menjadikan siang untuk mencari penghidupan," },
      { number: 12, arabic: "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا", latin: "Wa banainā fauqakum sab‘an shidādā(n).", translation: "dan Kami membangun di atas kamu tujuh (langit) yang kokoh," },
      { number: 13, arabic: "وَجَعَلْنَا سِرَاجًا وَهَّاجًا", latin: "Wa ja‘alnā sirājaw-wahhājā(n).", translation: "dan Kami menjadikan pelita yang terang benderang (matahari)," },
      { number: 14, arabic: "وَأَنْزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا", latin: "Wa anzalnā minal-mu‘ṣirāti mā'an ṡajjājā(n).", translation: "dan Kami menurunkan dari awan air hujan yang tercurah lebat," },
      { number: 15, arabic: "لِنُخْرِجَ بِهِ حَبًّا وَنَبَاتًا", latin: "Li nukhrija bihī ḥabbaw-wa nabātā(n).", translation: "untuk Kami tumbuhkan dengan air itu biji-bijian dan tanam-tanaman," },
      { number: 16, arabic: "وَجَنَّاتٍ أَلْفَافًا", latin: "Wa jannātin alfāfā(n).", translation: "dan kebun-kebun yang lebat." },
      { number: 17, arabic: "إِنَّ يَوْمَ الْفَصْلِ كَانَ مِيقَاتًا", latin: "Inna yaumal-faṣli kāna mīqātā(n).", translation: "Sungguh, hari Keputusan adalah suatu waktu yang telah ditetapkan," },
      { number: 18, arabic: "يَوْمَ يُنْفَخُ فِي الصُّورِ فَتَأْتُونَ أَفْوَاجًا", latin: "Yauma yunfakhu fiṣ-ṣūri fa ta'tūna afwājā(n).", translation: "yaitu hari (yang pada waktu itu) ditiup sangkakala lalu kamu datang berkelompok-kelompok," },
      { number: 19, arabic: "وَفُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا", latin: "Wa futiḥatis-samā'u fa kānat abwābā(n).", translation: "dan langit pun dibuka, maka terdapatlah beberapa pintu," },
      { number: 20, arabic: "وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا", latin: "Wa suyyiratil-jibālu fa kānat sarābā(n).", translation: "dan gunung-gunung pun dijalankan sehingga menjadi fatamorgana." },
      { number: 21, arabic: "إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا", latin: "Inna jahannama kānat mirṣādā(n).", translation: "Sungguh, neraka Jahannam itu (sebagai) tempat pengintai," },
      { number: 22, arabic: "لِلطَّاغِينَ مَآبًا", latin: "Liṭ-ṭāghīna ma'ābā(n).", translation: "menjadi tempat kembali bagi orang-orang yang melampaui batas," },
      { number: 23, arabic: "لَابِثِينَ فِيهَا أَحْقَابًا", latin: "Lābiṡīna fīhā aḥqābā(n).", translation: "mereka tinggal di sana berabad-abad lamanya," },
      { number: 24, arabic: "لَا يَذُوقُونَ فِيهَا بَرْدًا وَلَا شَرَابًا", latin: "Lā yażūqūna fīhā bardaw-walā sharābā(n).", translation: "mereka tidak merasakan kesejukan di dalamnya dan tidak (pula mendapat) minuman," },
      { number: 25, arabic: "إِلَّا حَمِيمًا وَغَسَّاقًا", latin: "Illā ḥamīmaw-wa ghassāqā(n).", translation: "selain air yang mendidih dan nanah," },
      { number: 26, arabic: "جَزَاءً وِفَاقًا", latin: "Jazā'aw-wifāqā(n).", translation: "sebagai pembalasan yang setimpal." },
      { number: 27, arabic: "إِنَّهُمْ كَانُوا لَا يَرْجُونَ حِسَابًا", latin: "Innahum kānū lā yarjūna ḥisābā(n).", translation: "Sesungguhnya mereka dahulu tidak pernah mengharapkan perhitungan," },
      { number: 28, arabic: "وَكَذَّبُوا بِآيَاتِنَا كِذَّابًا", latin: "Wa każżabū bi'āyātinā kiżżābā(n).", translation: "dan mereka mendustakan ayat-ayat Kami dengan sungguh-sungguh mendustakan." },
      { number: 29, arabic: "وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ كِتَابًا", latin: "Wa kulla shai'in aḥṣaināhu kitābā(n).", translation: "Dan segala sesuatu telah Kami catat dalam suatu Kitab." },
      { number: 30, arabic: "فَذُوقُوا فَلَنْ نَزِيدَكُمْ إِلَّا عَذَابًا", latin: "Fa żūqū falan nazīdakum illā ‘ażābā(n).", translation: "Maka rasakanlah! Dan Kami tidak akan menambah kepadamu selain azab." },
      { number: 31, arabic: "إِنَّ لِلْمُتَّقِينَ مَفَازًا", latin: "Inna lil-muttaqīna mafāzā(n).", translation: "Sungguh, bagi orang-orang yang bertakwa mendapat kemenangan," },
      { number: 32, arabic: "حَدَائِقَ وَأَعْنَابًا", latin: "Ḥadā'iqa wa a‘nābā(n).", translation: "(yaitu) kebun-kebun dan buah anggur," },
      { number: 33, arabic: "وَكَوَاعِبَ أَتْرَابًا", latin: "Wa kawā‘iba atrābā(n).", translation: "dan gadis-gadis remaja yang sebaya," },
      { number: 34, arabic: "وَكَأْسًا دِهَاقًا", latin: "Wa ka'san dihāqā(n).", translation: "dan gelas-gelas yang penuh (berisi minuman)." },
      { number: 35, arabic: "لَا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا كِذَّابًا", latin: "Lā yasma‘ūna fīhā laghwaw-walā kiżżābā(n).", translation: "Di sana mereka tidak mendengar perkataan yang sia-sia dan tidak pula perkataan dusta." },
      { number: 36, arabic: "جَزَاءً مِنْ رَبِّكَ عَطَاءً حِسَابًا", latin: "Jazā'am-mir-rabbika ‘aṭā'an ḥisābā(n).", translation: "Sebagai balasan dan pemberian yang cukup dari Tuhanmu," },
      { number: 37, arabic: "رَبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الرَّحْمَٰنِ ۖ لَا يَمْلِكُونَ مِنْهُ خِطَابًا", latin: "Rabbis-samāwāti wal-arḍi wa mā bainahumar-raḥmāni lā yamlikūna minhu khiṭābā(n).", translation: "Tuhan (yang memelihara) langit dan bumi dan apa yang ada di antara keduanya; Yang Maha Pengasih, mereka tidak mampu berbicara dengan-Nya." },
      { number: 38, arabic: "يَوْمَ يَقُومُ الرُّوحُ وَالْمَلَائِكَةُ صَفًّا ۖ لَا يَتَكَلَّمُونَ إِلَّا مَنْ أَذِنَ لَهُ الرَّحْمَٰنُ وَقَالَ صَوَابًا", latin: "Yauma yaqūmur-rūḥu wal-malā'ikatu ṣaffāl-lā yatakallamūna illā man ażina lahur-raḥmānu wa qāla ṣawābā(n).", translation: "Pada hari, ketika Ruh (Jibril) dan malaikat berdiri bershaf-shaf, mereka tidak berkata-kata, kecuali siapa yang telah diberi izin kepadanya oleh Tuhan Yang Maha Pengasih dan dia mengucapkan kata yang benar." },
      { number: 39, arabic: "ذَٰلِكَ الْيَوْمُ الْحَقُّ ۖ فَمَنْ شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ مَآبًا", latin: "Żālikal-yaumul-ḥaqq(u), faman shā'at-takhaża ilā rabbihī ma'ābā(n).", translation: "Itulah hari yang pasti terjadi. Maka barangsiapa menghendaki, niscaya dia mengambil tempat kembali kepada Tuhannya." },
      { number: 40, arabic: "إِنَّا أَنْذَرْنَاكُمْ عَذَابًا قَرِيبًا يَوْمَ يَنْظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ الْكَافِرُ يَا لَيْتَنِي كُنْتُ تُرَابًا", latin: "Innā anżarnākum ‘ażāban qarībā(n), yauma yanẓurul-mar'u mā qaddamat yadāhu wa yaqūlul-kāfiru yā laitanī kuntu turābā(n).", translation: "Sungguh, Kami telah memperingatkan kepadamu (orang kafir) azab yang dekat, pada hari manusia melihat apa yang telah diperbuat oleh kedua tangannya; dan orang kafir berkata, 'Alangkah baiknya jikalau dahulu aku menjadi tanah'." }
    ]
  },
  {
    number: 79,
    name: "An-Nazi'at",
    arabicName: "النازعات",
    translationName: "Malaikat-Malaikat Yang Mencabut",
    revelationType: "Makkiyah",
    numberOfVerses: 46,
    verses: [
      { number: 1, arabic: "وَالنَّازِعَاتِ غَرْقًا", latin: "Wan-nāzi‘āti gharqā(n).", translation: "Demi (malaikat) yang mencabut (nyawa) dengan keras," },
      { number: 2, arabic: "وَالنَّاشِطَاتِ نَشْطًا", latin: "Wan-nāshiṭāti nashṭā(n).", translation: "demi (malaikat) yang mencabut (nyawa) dengan lemah-lembut," },
      { number: 3, arabic: "وَالسَّابِحَاتِ سَبْحًا", latin: "Was-sābiḥāti sabḥā(n).", translation: "demi (malaikat) yang turun dari langit dengan cepat," },
      { number: 4, arabic: "فَالسَّابِقَاتِ سَبْقًا", latin: "Fas-sābiqāti sabqā(n).", translation: "dan (malaikat) yang mendahului dengan kencang," },
      { number: 5, arabic: "فَالْمُدَبِّرَاتِ أَمْرًا", latin: "Fal-mudabbirāti amrā(n).", translation: "dan (malaikat) yang mengatur urusan (dunia)." }
    ]
  },
  {
    number: 80,
    name: "'Abasa",
    arabicName: "عبس",
    translationName: "Ia Bermuka Masam",
    revelationType: "Makkiyah",
    numberOfVerses: 42,
    verses: [
      { number: 1, arabic: "عَبَسَ وَتَوَلَّىٰ", latin: "‘Abasa wa tawallā.", translation: "Dia (Muhammad) bermuka masam dan berpaling," },
      { number: 2, arabic: "أَنْ جَاءَهُ الْأَعْمَىٰ", latin: "An jā'ahul-a‘mā.", translation: "karena seorang buta telah datang kepadanya (Abdullah bin Ummi Maktum)." },
      { number: 3, arabic: "وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ", latin: "Wa mā yudrīka la‘allahū yazzakkā.", translation: "Tahukah engkau barangkali dia ingin menyucikan dirinya (dari dosa)," },
      { number: 4, arabic: "أَوْ يَذَّكَّرُ فَتَنْفَعَهُ الذِّكْرَىٰ", latin: "Au yażżakkaru fa tanfa‘ahuż-żikrā.", translation: "atau dia (ingin) mendapatkan pengajaran, yang pengajaran itu memberi manfaat kepadanya?" }
    ]
  },
  {
    number: 81,
    name: "At-Takwir",
    arabicName: "التكوير",
    translationName: "Menggulung",
    revelationType: "Makkiyah",
    numberOfVerses: 29,
    verses: [
      { number: 1, arabic: "إِذَا الشَّمْسُ كُوِّرَتْ", latin: "Iżaş-şamsu kuwwirat.", translation: "Apabila matahari digulung," },
      { number: 2, arabic: "وَإِذَا النُّجُومُ انْكَدَرَتْ", latin: "Wa iżan-nujūmunkadarat.", translation: "dan apabila bintang-bintang berjatuhan," },
      { number: 3, arabic: "وَإِذَا الْجِبَالُ سُيِّرَتْ", latin: "Wa iżal-jibālu suyyirat.", translation: "dan apabila gunung-gunung dihancurkan," }
    ]
  },
  {
    number: 82,
    name: "Al-Infitar",
    arabicName: "الإنفطار",
    translationName: "Terbelah",
    revelationType: "Makkiyah",
    numberOfVerses: 19,
    verses: [
      { number: 1, arabic: "إِذَا السَّمَاءُ انْفَطَرَتْ", latin: "Iżas-samā'unfaṭarat.", translation: "Apabila langit terbelah," },
      { number: 2, arabic: "وَإِذَا الْكَوَاكِبُ انْتَثَرَتْ", latin: "Wa iżal-kawākibuntatsarat.", translation: "dan apabila bintang-bintang jatuh berserakan," },
      { number: 3, arabic: "وَإِذَا الْبِحَارُ فُجِّرَتْ", latin: "Wa iżal-biḥāru fujjirat.", translation: "dan apabila lautan dijadikan meluap," }
    ]
  },
  {
    number: 83,
    name: "Al-Mutaffifin",
    arabicName: "المطففين",
    translationName: "Orang-Orang Yang Curang",
    revelationType: "Makkiyah",
    numberOfVerses: 36,
    verses: [
      { number: 1, arabic: "وَيْلٌ لِلْمُطَفِّفِينَ", latin: "Wailul-lil-muṭaffifīn(a).", translation: "Celakalah bagi orang-orang yang curang (dalam menakar dan menimbang)!" },
      { number: 2, arabic: "الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ", latin: "Allażīna iżaktālū ‘alan-nāsi yastaufūn(a).", translation: "(yaitu) orang-orang yang apabila menerima takaran dari orang lain mereka minta dipenuhi," },
      { number: 3, arabic: "وَإِذَا كَالُوهُمْ أَوْ وَزَنُوهُمْ يُخْسِرُونَ", latin: "Wa iżā kālūhum aw wazanūhum yukhsirūn(a).", translation: "dan apabila mereka menakar atau menimbang (untuk orang lain), mereka menguranginya." }
    ]
  },
  {
    number: 84,
    name: "Al-Inshiqaq",
    arabicName: "الإنشقاق",
    translationName: "Terbelah",
    revelationType: "Makkiyah",
    numberOfVerses: 25,
    verses: [
      { number: 1, arabic: "إِذَا السَّمَاءُ انْشَقَّتْ", latin: "Iżas-samā'unshaqqat.", translation: "Apabila langit terbelah," },
      { number: 2, arabic: "وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ", latin: "Wa ażinat lirabbihā wa ḥuqqat.", translation: "dan patuh kepada Tuhannya, dan sudah semestinya patuh," }
    ]
  },
  {
    number: 85,
    name: "Al-Buruj",
    arabicName: "البروج",
    translationName: "Gugusan Bintang",
    revelationType: "Makkiyah",
    numberOfVerses: 22,
    verses: [
      { number: 1, arabic: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ", latin: "Was-samā'i żātil-burūj(i).", translation: "Demi langit yang mempunyai gugusan bintang," },
      { number: 2, arabic: "وَالْيَوْمِ الْمَوْعُودِ", latin: "Wal-yaumil-mau‘ūd(i).", translation: "dan demi hari yang dijanjikan," },
      { number: 3, arabic: "وَشَاهِدٍ وَمَشْهُودٍ", latin: "Wa shāhidiw-wa mash-hūd(in).", translation: "demi yang menyaksikan dan yang disaksikan." }
    ]
  },
  {
    number: 86,
    name: "At-Tariq",
    arabicName: "الطارق",
    translationName: "Yang Datang Di Malam Hari",
    revelationType: "Makkiyah",
    numberOfVerses: 17,
    verses: [
      { number: 1, arabic: "وَالسَّمَاءِ وَالطَّارِقِ", latin: "Was-samā'i waṭ-ṭāriq(i).", translation: "Demi langit dan yang datang pada malam hari." },
      { number: 2, arabic: "وَمَا أَدْرَاكَ مَا الطَّارِقُ", latin: "Wa mā adrāka maṭ-ṭāriq(u).", translation: "Tahukah kamu apakah yang datang pada malam hari itu?" },
      { number: 3, arabic: "النَّجْمُ الثَّاقِبُ", latin: "An-najmuṡ-ṡāqib(u).", translation: "(Yaitu) bintang yang bersinar tajam." }
    ]
  },
  {
    number: 87,
    name: "Al-A'la",
    arabicName: "الأعلى",
    translationName: "Yang Maha Tinggi",
    revelationType: "Makkiyah",
    numberOfVerses: 19,
    verses: [
      { number: 1, arabic: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى", latin: "Sabbiḥisma rabbikal-a‘lā.", translation: "Sucikanlah nama Tuhanmu Yang Mahatinggi," },
      { number: 2, arabic: "الَّذِي خَلَقَ فَسَوَّىٰ", latin: "Allażī khalaqa fasawwā.", translation: "yang menciptakan, lalu menyempurnakan (ciptaan-Nya)," },
      { number: 3, arabic: "وَالَّذِي قَدَّرَ فَهَدَىٰ", latin: "Wal-lażī qaddara fahadā.", translation: "yang menentukan kadar (masing-masing) dan memberi petunjuk," },
      { number: 4, arabic: "وَالَّذِي أَخْرَجَ الْمَرْعَىٰ", latin: "Wal-lażī akhrajal-mar‘ā.", translation: "dan yang menumbuhkan rerumputan," },
      { number: 5, arabic: "فَجَعَلَهُ غُثَاءً أَحْوَىٰ", latin: "Fa ja‘alahū ghusā'an aḥwā.", translation: "lalu dijadikan-Nya rumput-rumput itu kering kehitam-hitaman." }
    ]
  },
  {
    number: 88,
    name: "Al-Ghashiyah",
    arabicName: "الغاشية",
    translationName: "Hari Pembalasan",
    revelationType: "Makkiyah",
    numberOfVerses: 26,
    verses: [
      { number: 1, arabic: "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ", latin: "Hal atāka ḥadīṡul-ghāshiyah(ti).", translation: "Sudahkah sampai kepadamu berita tentang hari Kiamat?" },
      { number: 2, arabic: "وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ", latin: "Wujūhuy-yauma'iżin khāshi‘ah(tun).", translation: "Banyak muka pada hari itu tunduk terhina," }
    ]
  },
  {
    number: 89,
    name: "Al-Fajr",
    arabicName: "الفجر",
    translationName: "Fajar",
    revelationType: "Makkiyah",
    numberOfVerses: 30,
    verses: [
      { number: 1, arabic: "وَالْفَجْرِ", latin: "Wal-fajr(i).", translation: "Demi fajar," },
      { number: 2, arabic: "وَلَيَالٍ عَشْرٍ", latin: "Wa layālin ‘ashr(in).", translation: "demi malam yang sepuluh," },
      { number: 3, arabic: "وَالشَّفْعِ وَالْوَتْرِ", latin: "Wash-shaf‘i wal-watr(i).", translation: "demi yang genap dan yang ganjil," },
      { number: 4, arabic: "وَاللَّيْلِ إِذَا يَسْرِ", latin: "Wal-laili iżā yasr(i).", translation: "demi malam apabila berlalu." }
    ]
  },
  {
    number: 90,
    name: "Al-Balad",
    arabicName: "البلد",
    translationName: "Negeri",
    revelationType: "Makkiyah",
    numberOfVerses: 20,
    verses: [
      { number: 1, arabic: "لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ", latin: "Lā uqsimu bihāżal-balad(i).", translation: "Aku benar-benar bersumpah dengan kota ini (Mekkah)," },
      { number: 2, arabic: "وَأَنْتَ حِلٌّ بِهَٰذَا الْبَلَدِ", latin: "Wa anta ḥillum-bihāżal-balad(i).", translation: "dan engkau (Muhammad) bertempat di kota Mekkah ini," }
    ]
  },
  {
    number: 91,
    name: "Ash-Shams",
    arabicName: "الشمس",
    translationName: "Matahari",
    revelationType: "Makkiyah",
    numberOfVerses: 15,
    verses: [
      { number: 1, arabic: "وَالشَّمْسِ وَضُحَاهَا", latin: "Wash-shamsi wa ḍuḥāhā.", translation: "Demi matahari dan sinarnya pada pagi hari," },
      { number: 2, arabic: "وَالْقَمَرِ إِذَا تَلَاهَا", latin: "Wal-qamari iżā talāhā.", translation: "demi bulan apabila mengiringinya," },
      { number: 3, arabic: "وَالنَّهَارِ إِذَا جَلَّاهَا", latin: "Wan-nahāri iżā jallāhā.", translation: "demi siang apabila menampakkannya," },
      { number: 4, arabic: "وَاللَّيْلِ إِذَا يَغْشَاهَا", latin: "Wal-laili iżā yaghshāhā.", translation: "demi malam apabila menutupinya," }
    ]
  },
  {
    number: 92,
    name: "Al-Lail",
    arabicName: "الليل",
    translationName: "Malam",
    revelationType: "Makkiyah",
    numberOfVerses: 21,
    verses: [
      { number: 1, arabic: "وَاللَّيْلِ إِذَا يَغْشَىٰ", latin: "Wal-laili iżā yaghshā.", translation: "Demi malam apabila menutupi (cahaya siang)," },
      { number: 2, arabic: "وَالنَّهَارِ إِذَا تَجَلَّىٰ", latin: "Wan-nahāri iżā tajallā.", translation: "demi siang apabila terang benderang," },
      { number: 3, arabic: "وَمَا خَلَقَ الذَّكَرَ وَالْأُنْثَىٰ", latin: "Wa mā khalaqaż-żakara wal-unsā.", translation: "demi penciptaan laki-laki dan perempuan," }
    ]
  },
  {
    number: 93,
    name: "Ad-Duha",
    arabicName: "الضحى",
    translationName: "Waktu Dhuha",
    revelationType: "Makkiyah",
    numberOfVerses: 11,
    verses: [
      { number: 1, arabic: "وَالضُّحَىٰ", latin: "Waḍ-ḍuḥā.", translation: "Demi waktu duha (ketika matahari naik sepenggalah)," },
      { number: 2, arabic: "وَاللَّيْلِ إِذَا سَجَىٰ", latin: "Wal-laili iżā sajā.", translation: "dan demi malam apabila telah sunyi," },
      { number: 3, arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ", latin: "Mā wadda‘aka rabbuka wa mā qalā.", translation: "Tuhanmu tidak meninggalkan engkau (Muhammad) dan tidak (pula) membencimu," },
      { number: 4, arabic: "وَلَلْآخِرَةُ خَيْرٌ لَكَ مِنَ الْأُولَىٰ", latin: "Wa lal-ākhiratu khairul-laka minal-ūlā.", translation: "dan sungguh, yang kemudian itu lebih baik bagimu daripada yang permulaan." },
      { number: 5, arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ", latin: "Wa lasaufa yu‘ṭīka rabbuka fa tarḍā.", translation: "Dan sungguh, kelak Tuhanmu pasti memberikan karunia-Nya kepadamu, sehingga engkau menjadi puas." },
      { number: 6, arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ", latin: "Alam yajidka yatīman fa āwā.", translation: "Bukankah Dia mendapatimu sebagai seorang anak yatim, lalu Dia melindungi(mu)," },
      { number: 7, arabic: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ", latin: "Wa wajadaka ḍāllan fa hadā.", translation: "dan Dia mendapatimu sebagai seorang yang bingung, lalu Dia memberikan petunjuk," },
      { number: 8, arabic: "وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ", latin: "Wa wajadaka ‘ā'ilan fa aghnā.", translation: "dan Dia mendapatimu sebagai seorang yang kekurangan, lalu Dia memberikan kecukupan?" },
      { number: 9, arabic: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ", latin: "Fa ammal-yatīma falā taqhar.", translation: "Maka terhadap anak yatim janganlah engkau berlaku sewenang-wenang." },
      { number: 10, arabic: "وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ", latin: "Wa ammas-sā'ila falā tanhar.", translation: "Dan terhadap orang yang meminta-minta janganlah engkau menghardik(nya)." },
      { number: 11, arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ", latin: "Wa ammā bini‘mati rabbika fa ḥaddis.", translation: "Dan terhadap nikmat Tuhanmu hendaklah engkau nyatakan (dengan bersyukur)." }
    ]
  },
  {
    number: 94,
    name: "Ash-Sharh",
    arabicName: "الشرح",
    translationName: "Kelapangan",
    revelationType: "Makkiyah",
    numberOfVerses: 8,
    verses: [
      { number: 1, arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", latin: "Alam nashraḥ laka ṣadrak(a).", translation: "Bukankah Kami telah melapangkan dadamu (Muhammad)?" },
      { number: 2, arabic: "وَوَضَعْنَا عَنْكَ وِزْرَكَ", latin: "Wa waḍa‘nā ‘anka wizrak(a).", translation: "dan Kami pun telah menurunkan bebanmu darimu," },
      { number: 3, arabic: "الَّذِي أَنْقَضَ ظَهْرَكَ", latin: "Allażī anqaḍa ẓahrak(a).", translation: "yang memberatkan punggungmu," },
      { number: 4, arabic: "وَرَفَعْنَا لَكَ ذِكْرَكَ", latin: "Wa rafa‘nā laka żikrak(a).", translation: "dan Kami tinggikan sebutan (nama)mu bagimu." },
      { number: 5, arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", latin: "Fa inna ma‘al-‘usri yusrā(n).", translation: "Maka sesungguhnya bersama kesulitan ada kemudahan," },
      { number: 6, arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", latin: "Inna ma‘al-‘usri yusrā(n).", translation: "sungguh, bersama kesulitan ada kemudahan." },
      { number: 7, arabic: "فَإِذَا فَرَغْتَ فَانْصَبْ", latin: "Fa iżā faraghta fanṣab.", translation: "Maka apabila engkau telah selesai (dari suatu urusan), tetaplah bekerja keras (untuk urusan yang lain)," },
      { number: 8, arabic: "وَإِلَىٰ رَبِّكَ فَارْغَبْ", latin: "Wa ilā rabbika farghab.", translation: "dan hanya kepada Tuhanmulah engkau berharap." }
    ]
  },
  {
    number: 95,
    name: "At-Tin",
    arabicName: "التين",
    translationName: "Buah Tin",
    revelationType: "Makkiyah",
    numberOfVerses: 8,
    verses: [
      { number: 1, arabic: "وَالتِّينِ وَالزَّيْتُونِ", latin: "Wat-tīni waz-zaitūn(i).", translation: "Demi (buah) Tin dan (buah) Zaitun," },
      { number: 2, arabic: "وَطُورِ سِينِينَ", latin: "Wa ṭūri sīnīn(a).", translation: "demi gunung Sinai," },
      { number: 3, arabic: "وَهَٰذَا الْبَلَدِ الْأَمِينِ", latin: "Wa hāżal-baladil-amīn(i).", translation: "dan demi negeri (Mekkah) yang aman ini." },
      { number: 4, arabic: "لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ", latin: "Laqad khalaqnal-insāna fī aḥsani taqwīm(in).", translation: "Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya," },
      { number: 5, arabic: "ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ", latin: "Ṡumma radadnāhu asfala sāfilīn(a).", translation: "kemudian Kami kembalikan dia ke tempat yang serendah-rendahnya," },
      { number: 6, arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ", latin: "Illal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti falahum ajrun ghairu mamnūn(in).", translation: "kecuali orang-orang yang beriman dan mengerjakan kebajikan; maka mereka akan mendapat pahala yang tidak putus-putusnya." },
      { number: 7, arabic: "فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ", latin: "Famā yukażżibuka ba‘du bid-dīn(i).", translation: "Maka apa yang menyebabkan (mereka) mendustakanmu tentang hari pembalasan setelah (adanya bukti-bukti) itu?" },
      { number: 8, arabic: "أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ", latin: "Alaisallāhu bi'aḥkamil-ḥākimīn(a).", translation: "Bukankah Allah Hakim yang paling adil?" }
    ]
  },
  {
    number: 96,
    name: "Al-'Alaq",
    arabicName: "العلق",
    translationName: "Segumpal Darah",
    revelationType: "Makkiyah",
    numberOfVerses: 19,
    verses: [
      { number: 1, arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ", latin: "Iqra' bismi rabbikal-lażī khalaq(a).", translation: "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan," },
      { number: 2, arabic: "خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ", latin: "Khalaqal-insāna min ‘alaq(in).", translation: "Dia telah menciptakan manusia dari segumpal darah." },
      { number: 3, arabic: "اقْرَأْ وَرَبُّكَ الْأَكْرَمُ", latin: "Iqra' wa rabbukal-akram(u).", translation: "Bacalah, dan Tuhanmulah Yang Mahamulia," },
      { number: 4, arabic: "الَّذِي عَلَّمَ بِالْقَلَمِ", latin: "Allażī ‘allama bil-qalam(i).", translation: "yang mengajar (manusia) dengan pena." },
      { number: 5, arabic: "عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ", latin: "‘Allamal-insāna mā lam ya‘lam.", translation: "Dia mengajarkan manusia apa yang tidak diketahuinya." }
    ]
  },
  {
    number: 97,
    name: "Al-Qadr",
    arabicName: "القدر",
    translationName: "Kemuliaan",
    revelationType: "Makkiyah",
    numberOfVerses: 5,
    verses: [
      { number: 1, arabic: "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ", latin: "Innā anzalnāhu fī lailatil-qadr(i).", translation: "Sesungguhnya Kami telah meurunkan-Nya (Al-Qur'an) pada malam kemuliaan." },
      { number: 2, arabic: "وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ", latin: "Wa mā adrāka mā lailatul-qadr(i).", translation: "Dan tahukah kamu apakah malam kemuliaan itu?" },
      { number: 3, arabic: "لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ", latin: "Lailatul-qadri khairum-min alfi shahr(in).", translation: "Malam kemuliaan itu lebih baik daripada seribu bulan." },
      { number: 4, arabic: "تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِمْ مِنْ كُلِّ أَمْرٍ", latin: "Tanazzalul-malā'ikatu war-rūḥu fīhā bi'iżni rabbihim min kulli amr(in).", translation: "Pada malam itu turun malaikat-malaikat dan malaikat Jibril dengan izin Tuhannya untuk mengatur segala urusan." },
      { number: 5, arabic: "سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ", latin: "Salāmun hiya ḥattā maṭla‘il-fajr(i).", translation: "Sejahteralah (malam itu) sampai terbit fajar." }
    ]
  },
  {
    number: 98,
    name: "Al-Bayyinah",
    arabicName: "البينة",
    translationName: "Bukti Yang Nyata",
    revelationType: "Madaniyah",
    numberOfVerses: 8,
    verses: [
      { number: 1, arabic: "لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنْفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ", latin: "Lam yakunil-lażīna kafarū min ahlil-kitābi wal-mushrikīna munfakkīna ḥattā ta'tiyahumul-bayyinah(tu).", translation: "Orang-orang kafir dari golongan Ahli Kitab dan orang-orang musyrik tidak akan meninggalkan (agama mereka) sampai datang kepada mereka bukti yang nyata," },
      { number: 2, arabic: "رَسُولٌ مِنَ اللَّهِ يَتْلُو صُحُفًا مُطَهَّرَةً", latin: "Rasūlum-minallāhi yatlū ṣuḥufam-muṭahharah(tan).", translation: "(yaitu) seorang Rasul dari Allah (Muhammad) yang membacakan lembaran-lembaran yang disucikan (Al-Qur'an)," },
      { number: 3, arabic: "فِيهَا كُتُبٌ قَيِّمَةٌ", latin: "Fīhā kutubun qayyimah(tun).", translation: "di dalamnya terdapat (isi) kitab-kitab yang lurus (benar)." }
    ]
  },
  {
    number: 99,
    name: "Az-Zalzalah",
    arabicName: "الزلزلة",
    translationName: "Kegoncangan",
    revelationType: "Madaniyah",
    numberOfVerses: 8,
    verses: [
      { number: 1, arabic: "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا", latin: "Iżā zulzilatil-arḍu zilzālahā.", translation: "Apabila bumi digoncangkan dengan goncangan yang dahsyat," },
      { number: 2, arabic: "وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا", latin: "Wa akhrajatil-arḍu aṡqālahā.", translation: "dan bumi telah mengeluarkan beban-beban berat (yang dikandung)nya," },
      { number: 3, arabic: "وَقَالَ الْإِنْسَانُ مَا لَهَا", latin: "Wa qālal-insānu mā lahā.", translation: "dan manusia bertanya, 'Apa yang terjadi pada bumi ini?'" },
      { number: 4, arabic: "يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا", latin: "Yauma'iżin tuḥaddiṡu akhbārahā.", translation: "Pada hari itu bumi menyampaikan beritanya," },
      { number: 5, arabic: "بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا", latin: "Bi'anna rabbaka auḥā lahā.", translation: "karena sesungguhnya Tuhanmu telah memerintahkan (yang demikian itu) padanya." },
      { number: 6, arabic: "يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِيُرَوْا أَعْمَالَهُمْ", latin: "Yauma'iżiy-yaṣdurun-nāsu ashtātāl-liyuraw a‘mālahum.", translation: "Pada hari itu manusia keluar dari kuburnya dalam keadaan berkelompok-kelompok, untuk diperlihatkan kepada mereka (balasan) pekerjaan mereka." },
      { number: 7, arabic: "فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ", latin: "Famay-ya‘mal mithqāla żarratin khairay-yarah(ū).", translation: "Maka barangsiapa mengerjakan kebaikan seberat zarrah, niscaya dia akan melihat (balasan)nya," },
      { number: 8, arabic: "وَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ", latin: "Wa may-ya‘mal mithqāla żarratin sharray-yarah(ū).", translation: "dan barangsiapa mengerjakan kejahatan seberat zarrah, niscaya dia akan melihat (balasan)nya." }
    ]
  },
  {
    number: 100,
    name: "Al-'Adiyat",
    arabicName: "العاديات",
    translationName: "Kuda Perang Yang Berlari Kencang",
    revelationType: "Makkiyah",
    numberOfVerses: 11,
    verses: [
      { number: 1, arabic: "وَالْعَادِيَاتِ ضَبْحًا", latin: "Wal-‘ādiyāti ḍabḥā(n).", translation: "Demi kuda perang yang berlari kencang terengah-engah," },
      { number: 2, arabic: "فَالْمُورِيَاتِ قَدْحًا", latin: "Fal-mūriyāti qadḥā(n).", translation: "dan kuda yang memercikkan bunga api (dengan pukulan kuku kakinya)," },
      { number: 3, arabic: "فَالْمُغِيرَاتِ صُبْحًا", latin: "Fal-mughīrāti ṣubḥā(n).", translation: "dan kuda yang menyerang dengan tiba-tiba pada waktu subuh," },
      { number: 4, arabic: "فَأَثَرْنَ بِهِ نَقْعًا", latin: "Fa aṡarna bihī naq‘ā(n).", translation: "sehingga menerbangkan debu," },
      { number: 5, arabic: "فَوَسَطْنَ بِهِ جَمْعًا", latin: "Fa wasaṭna bihī jam‘ā(n).", translation: "lalu menyerbu ke tengah-tengah kumpulan musuh." }
    ]
  },
  {
    number: 101,
    name: "Al-Qari'ah",
    arabicName: "القارعة",
    translationName: "Hari Kiamat",
    revelationType: "Makkiyah",
    numberOfVerses: 11,
    verses: [
      { number: 1, arabic: "الْقَارِعَةُ", latin: "Al-qāri‘ah(tu).", translation: "Hari Kiamat," },
      { number: 2, arabic: "مَا الْقَارِعَةُ", latin: "Mal-qāri‘ah(tu).", translation: "Apakah hari Kiamat itu?" },
      { number: 3, arabic: "وَمَا أَدْرَاكَ مَا الْقَارِعَةُ", latin: "Wa mā adrāka mal-qāri‘ah(tu).", translation: "Dan tahukah kamu apakah hari Kiamat itu?" },
      { number: 4, arabic: "يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ", latin: "Yauma yakūnun-nāsu kal-farāshil-mabṡūṡ(i).", translation: "Pada hari itu manusia seperti laron yang berterbangan," },
      { number: 5, arabic: "وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنْفُوشِ", latin: "Wa takūnul-jibālu kal-‘ihnil-manfūsh(i).", translation: "dan gunung-gunung seperti bulu yang dihambur-hamburkan." }
    ]
  },
  {
    number: 102,
    name: "At-Takathur",
    arabicName: "التكاثر",
    translationName: "Bermegah-Megahan",
    revelationType: "Makkiyah",
    numberOfVerses: 8,
    verses: [
      { number: 1, arabic: "أَلْهَاكُمُ التَّكَاثُرُ", latin: "Alhākumut-takāṡur(u).", translation: "Bermegah-megahan telah melalaikan kamu," },
      { number: 2, arabic: "حَتَّىٰ زُرْتُمُ الْمَقَابِرَ", latin: "Ḥattā zurtumul-maqābir(a).", translation: "sampai kamu masuk ke dalam kubur." },
      { number: 3, arabic: "كَلَّا سَوْفَ تَعْلَمُونَ", latin: "Kallā saufa ta‘lamūn(a).", translation: "Sekali-kali tidak! Kelak kamu akan mengetahui (akibat perbuatanmu itu)," },
      { number: 4, arabic: "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ", latin: "Ṡumma kallā saufa ta‘lamūn(a).", translation: "kemudian sekali-kali tidak! Kelak kamu akan mengetahui." }
    ]
  },
  {
    number: 103,
    name: "Al-'Asr",
    arabicName: "العصر",
    translationName: "Masa / Waktu",
    revelationType: "Makkiyah",
    numberOfVerses: 3,
    verses: [
      { number: 1, arabic: "وَالْعَصْرِ", latin: "Wal-‘aṣr(i).", translation: "Demi masa." },
      { number: 2, arabic: "إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ", latin: "Innal-insāna lafī khusr(in).", translation: "Sungguh, manusia berada dalam kerugian," },
      { number: 3, arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ", latin: "Illal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti wa tawāṣau bil-ḥaqqi wa tawāṣau biṣ-ṣabr(i).", translation: "kecuali orang-orang yang beriman dan mengerjakan kebajikan serta saling menasihati untuk kebenaran dan saling menasihati untuk kesabaran." }
    ]
  },
  {
    number: 104,
    name: "Al-Humazah",
    arabicName: "الهمزة",
    translationName: "Pengumpat",
    revelationType: "Makkiyah",
    numberOfVerses: 9,
    verses: [
      { number: 1, arabic: "وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ", latin: "Wailul-likulli humazatil-lumazah(tin).", translation: "Celakalah bagi setiap pengumpat lagi pencela," },
      { number: 2, arabic: "الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ", latin: "Allażī jama‘a mālaw-wa ‘addadah(ū).", translation: "yang mengumpulkan harta dan menghitung-hitungnya," },
      { number: 3, arabic: "يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ", latin: "Yaḥsabu anna mālahū akhladah(ū).", translation: "dia mengira bahwa hartanya itu dapat mengekalkannya." }
    ]
  },
  {
    number: 105,
    name: "Al-Fil",
    arabicName: "الفيل",
    translationName: "Gajah",
    revelationType: "Makkiyah",
    numberOfVerses: 5,
    verses: [
      { number: 1, arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ", latin: "Alam tara kaifa fa‘ala rabbuka bi'aṣḥābil-fīl(i).", translation: "Tidakkah engkau (Muhammad) perhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?" },
      { number: 2, arabic: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ", latin: "Alam yaj‘al kaidahum fī taḍlīl(in).", translation: "Bukankah Dia telah menjadikan tipu daya mereka itu sia-sia?" },
      { number: 3, arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ", latin: "Wa arsala ‘alaihim ṭairan abābīl(a).", translation: "dan Dia mengirimkan kepada mereka burung yang berbondong-bondong," },
      { number: 4, arabic: "تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ", latin: "Tarmīhim biḥijāratim-min sijjīl(in).", translation: "yang melempari mereka dengan batu dari tanah yang terbakar," },
      { number: 5, arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ", latin: "Fa ja‘alahum ka‘aṣfim-ma'kūl(in).", translation: "sehingga mereka dijadikan-Nya seperti daun-daun yang dimakan (ulat)." }
    ]
  },
  {
    number: 106,
    name: "Quraysh",
    arabicName: "قريش",
    translationName: "Suku Quraisy",
    revelationType: "Makkiyah",
    numberOfVerses: 4,
    verses: [
      { number: 1, arabic: "لِإِيلَافِ قُرَيْشٍ", latin: "Li'īlāfi quraish(in).", translation: "Karena kebiasaan orang-orang Quraisy," },
      { number: 2, arabic: "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ", latin: "Īlāfihim riḥlatash-shitā'i waṣ-ṣaif(i).", translation: "(yaitu) kebiasaan mereka bepergian pada musim dingin dan musim panas." },
      { number: 3, arabic: "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ", latin: "Fal-ya‘budū rabba hāżal-bait(i).", translation: "Maka hendaklah mereka menyembah Tuhan (pemilik) rumah ini (Ka'bah)," },
      { number: 4, arabic: "الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ", latin: "Allażī aṭ‘amahum min jū‘iw-wa āmanahum min khauf(in).", translation: "yang telah memberi makanan kepada mereka untuk menghilangkan lapar dan mengamankan mereka dari rasa takut." }
    ]
  },
  {
    number: 107,
    name: "Al-Ma'un",
    arabicName: "الماعون",
    translationName: "Barang-Barang Yang Berguna",
    revelationType: "Makkiyah",
    numberOfVerses: 7,
    verses: [
      { number: 1, arabic: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ", latin: "Ara'aital-lażī yukażżibu bid-dīn(i).", translation: "Tahukah kamu (orang) yang mendustakan agama?" },
      { number: 2, arabic: "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ", latin: "Fa żālikal-lażī yadu‘‘ul-yatīm(a).", translation: "Maka itulah orang yang menghardik anak yatim," },
      { number: 3, arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ", latin: "Wa lā yaḥuḍḍu ‘alā ṭa‘āmil-miskīn(i).", translation: "dan tidak mendorong memberi makan orang miskin." },
      { number: 4, arabic: "فَوَيْلٌ لِلْمُصَلِّينَ", latin: "Fa wailul-lil-muṣallīn(a).", translation: "Maka celakalah orang yang shalat," },
      { number: 5, arabic: "الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ", latin: "Allażīna hum ‘an ṣalātihim sāhūn(a).", translation: "(yaitu) orang-orang yang lalai terhadap shalatnya," },
      { number: 6, arabic: "الَّذِينَ هُمْ يُرَاءُونَ", latin: "Allażīna hum yurā'ūn(a).", translation: "yang berbuat riya'," },
      { number: 7, arabic: "وَيَمْنَعُونَ الْمَاعُونَ", latin: "Wa yamna‘ūnal-mā‘ūn(a).", translation: "dan enggan (memberikan) bantuan barang berguna." }
    ]
  },
  {
    number: 108,
    name: "Al-Kautsar",
    arabicName: "الكوثر",
    translationName: "Nikmat Yang Banyak",
    revelationType: "Makkiyah",
    numberOfVerses: 3,
    verses: [
      { number: 1, arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", latin: "Innā a‘ṭainākal-kauṡar(a).", translation: "Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak." },
      { number: 2, arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ", latin: "Fa ṣalli lirabbika wanḥar.", translation: "Maka laksanakanlah shalat karena Tuhanmu, dan berkurbanlah." },
      { number: 3, arabic: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", latin: "Inna shāni'aka huwal-abtar(u).", translation: "Sungguh, orang-orang yang membencimu dialah yang terputus (dari rahmat Allah)." }
    ]
  },
  {
    number: 109,
    name: "Al-Kafirun",
    arabicName: "الكافرون",
    translationName: "Orang-Orang Kafir",
    revelationType: "Makkiyah",
    numberOfVerses: 6,
    verses: [
      { number: 1, arabic: "قُلْ يَا أَيُّهَا الْكَافِرُونَ", latin: "Qul yā ayyuhal-kāfirūn(a).", translation: "Katakanlah (Muhammad), 'Wahai orang-orang kafir!'" },
      { number: 2, arabic: "لَا أَعْبُدُ مَا تَعْبُدُونَ", latin: "Lā a‘budu mā ta‘budūn(a).", translation: "Aku tidak akan menyembah apa yang kamu sembah." },
      { number: 3, arabic: "وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ", latin: "Wa lā antum ‘ābidūna mā a‘bud(u).", translation: "Dan kamu bukan penyembah apa yang aku sembah." },
      { number: 4, arabic: "وَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ", latin: "Wa lā ana ‘ābidum-mā ‘abattum.", translation: "Dan aku tidak pernah menjadi penyembah apa yang kamu sembah," },
      { number: 5, arabic: "وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ", latin: "Wa lā antum ‘ābidūna mā a‘bud(u).", translation: "dan kamu tidak pernah (pula) menjadi penyembah apa yang aku sembah." },
      { number: 6, arabic: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ", latin: "Lakum dīnukum wa liya dīn(i).", translation: "Untukmu agamamu, dan untukku agamaku.'" }
    ]
  },
  {
    number: 110,
    name: "An-Nasr",
    arabicName: "النصر",
    translationName: "Pertolongan",
    revelationType: "Madaniyah",
    numberOfVerses: 3,
    verses: [
      { number: 1, arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ", latin: "Iżā jā'a naṣrullāhi wal-fatḥ(u).", translation: "Apabila telah datang pertolongan Allah dan kemenangan," },
      { number: 2, arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا", latin: "Wa ra'aitan-nāsa yadkhulūna fī dīnillāhi afwājā(n).", translation: "dan engkau melihat manusia berbondong-bondong masuk agama Allah," },
      { number: 3, arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا", latin: "Fa sabbiḥ biḥamdi rabbika wastaghfirh(u), innahū kāna tawwābā(n).", translation: "maka bertasbihlah dengan memuji Tuhanmu dan mohonlah ampunan kepada-Nya. Sungguh, Dia Maha Penerima tobat." }
    ]
  },
  {
    number: 111,
    name: "Al-Lahab",
    arabicName: "المسد",
    translationName: "Gejolak Api",
    revelationType: "Makkiyah",
    numberOfVerses: 5,
    verses: [
      { number: 1, arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ", latin: "Tabbat yadā abī lahabiw-wa tabb(a).", translation: "Binasalah kedua tangan Abu Lahab dan benar-benar binasa dia!" },
      { number: 2, arabic: "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ", latin: "Mā aghnā ‘anhu māluhū wa mā kasab(a).", translation: "Tidaklah berguna baginya hartanya dan apa yang dia usahakan." },
      { number: 3, arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ", latin: "Sayaṣlā nāran żāta lahab(in).", translation: "Kelak dia akan masuk ke dalam api yang bergejolak (neraka)." },
      { number: 4, arabic: "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ", latin: "Wamra'atuhū ḥammālatal-ḥaṭab(i).", translation: "Dan (begitu pula) istrinya, pembawa kayu bakar (penyebar fitnah)." },
      { number: 5, arabic: "فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ", latin: "Fī jīdihā ḥablum-mim-masad(in).", translation: "Di lehernya ada tali dari sabut yang dipintal." }
    ]
  },
  {
    number: 112,
    name: "Al-Ikhlas",
    arabicName: "الإخلاص",
    translationName: "Memurnikan Keesaan Allah",
    revelationType: "Makkiyah",
    numberOfVerses: 4,
    audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/112.mp3",
    verses: [
      { number: 1, arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", latin: "Qul huwallāhu aḥad(un).", translation: "Katakanlah (Muhammad), 'Dialah Allah, Yang Maha Esa.'" },
      { number: 2, arabic: "اللَّهُ الصَّمَدُ", latin: "Allāhuṣ-ṣamad(u).", translation: "Allah tempat meminta segala sesuatu." },
      { number: 3, arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ", latin: "Lam yalid wa lam yūlad.", translation: "(Allah) tidak beranak dan tidak pula diperanakkan," },
      { number: 4, arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", latin: "Wa lam yakul-lahū kufuwan aḥad(un).", translation: "dan tidak ada sesuatu pun yang setara dengan Dia.'" }
    ]
  },
  {
    number: 113,
    name: "Al-Falaq",
    arabicName: "الفلق",
    translationName: "Waktu Subuh",
    revelationType: "Makkiyah",
    numberOfVerses: 5,
    audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/113.mp3",
    verses: [
      { number: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", latin: "Qul a‘ūżu birabbil-falaq(i).", translation: "Katakanlah, 'Aku berlindung kepada Tuhan yang menguasai subuh (fajar),'" },
      { number: 2, arabic: "مِنْ شَرِّ مَا خَلَقَ", latin: "Min sharri mā khalaq(a).", translation: "dari kejahatan (makhluk yang) Dia ciptakan," },
      { number: 3, arabic: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ", latin: "Wa min sharri ghāsiqin iżā waqab(a).", translation: "dan dari kejahatan malam apabila telah gelap gulita," },
      { number: 4, arabic: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", latin: "Wa min sharrin-naffāṡāti fil-‘uqad(i).", translation: "dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya)," },
      { number: 5, arabic: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", latin: "Wa min sharri ḥāsidin iżā ḥasad(a).", translation: "dan dari kejahatan orang yang dengki apabila dia dengki.'" }
    ]
  },
  {
    number: 114,
    name: "An-Nas",
    arabicName: "الناس",
    translationName: "Manusia",
    revelationType: "Makkiyah",
    numberOfVerses: 6,
    audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/114.mp3",
    verses: [
      { number: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", latin: "Qul a‘ūżu birabbin-nās(i).", translation: "Katakanlah, 'Aku berlindung kepada Tuhannya manusia,'" },
      { number: 2, arabic: "مَلِكِ النَّاسِ", latin: "Malikin-nās(i).", translation: "Raja manusia," },
      { number: 3, arabic: "إِلَٰهِ النَّاسِ", latin: "Ilāhin-nās(i).", translation: "Sembahan manusia," },
      { number: 4, arabic: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", latin: "Min sharril-waswāsil-khannās(i).", translation: "dari kejahatan (bisikan) setan yang bersembunyi," },
      { number: 5, arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", latin: "Allażī yuwaswisu fī ṣudūrin-nās(i).", translation: "yang membisikkan (kejahatan) ke dalam dada manusia," },
      { number: 6, arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ", latin: "Minal-jinnati wan-nās(i).", translation: "dari (golongan) jin dan manusia.'" }
    ]
  }
];
