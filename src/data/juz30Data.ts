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
    "number": 78,
    "name": "An-Naba'",
    "arabicName": "النبأ",
    "translationName": "Berita Besar",
    "revelationType": "Makkiyah",
    "numberOfVerses": 40,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/078.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "عَمَّ يَتَسَاۤءَلُوْنَۚ ",
        "latin": "‘Amma yatasā'alūn(a).",
        "translation": "Tentang apakah mereka saling bertanya?"
      },
      {
        "number": 2,
        "arabic": "عَنِ النَّبَاِ الْعَظِيْمِۙ ",
        "latin": "‘Anin naba'il-‘aẓīm(i).",
        "translation": "Tentang berita yang besar (hari Kebangkitan)"
      },
      {
        "number": 3,
        "arabic": "الَّذِيْ هُمْ فِيْهِ مُخْتَلِفُوْنَۗ ",
        "latin": "Allażī hum fīhi mukhtalifūn(a).",
        "translation": "yang dalam hal itu mereka berselisih."
      },
      {
        "number": 4,
        "arabic": "كَلَّا سَيَعْلَمُوْنَۙ ",
        "latin": "Kallā saya‘lamūn(a).",
        "translation": "Sekali-kali tidak! Kelak mereka akan mengetahui."
      },
      {
        "number": 5,
        "arabic": "ثُمَّ كَلَّا سَيَعْلَمُوْنَ",
        "latin": "Ṡumma kallā saya‘lamūn(a).",
        "translation": "Sekali lagi, tidak! Kelak mereka akan mengetahui."
      },
      {
        "number": 6,
        "arabic": "اَلَمْ نَجْعَلِ الْاَرْضَ مِهٰدًاۙ",
        "latin": "Alam naj‘alil-arḍa mihādā(n).",
        "translation": "Bukankah Kami telah menjadikan bumi sebagai hamparan"
      },
      {
        "number": 7,
        "arabic": "وَّالْجِبَالَ اَوْتَادًاۖ",
        "latin": "Wal-jibāla autādā(n).",
        "translation": "dan gunung-gunung sebagai pasak?"
      },
      {
        "number": 8,
        "arabic": "وَّخَلَقْنٰكُمْ اَزْوَاجًاۙ ",
        "latin": "Wa khalaqnākum azwājā(n).",
        "translation": "Kami menciptakan kamu berpasang-pasangan."
      },
      {
        "number": 9,
        "arabic": "وَّجَعَلْنَا نَوْمَكُمْ سُبَاتًاۙ ",
        "latin": "Wa ja‘alnā naumakum subātā(n).",
        "translation": "Kami menjadikan tidurmu untuk beristirahat."
      },
      {
        "number": 10,
        "arabic": "وَّجَعَلْنَا الَّيْلَ لِبَاسًاۙ ",
        "latin": "Wa ja‘alnal-laila libāsā(n).",
        "translation": "Kami menjadikan malam sebagai pakaian."
      },
      {
        "number": 11,
        "arabic": "وَّجَعَلْنَا النَّهَارَ مَعَاشًاۚ",
        "latin": "Wa ja‘alnan-nahāra ma‘āsyā(n).",
        "translation": "Kami menjadikan siang untuk mencari penghidupan."
      },
      {
        "number": 12,
        "arabic": "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًاۙ ",
        "latin": "Wa banainā fauqakum sab‘an syidādā(n).",
        "translation": "Kami membangun tujuh (langit) yang kukuh di atasmu."
      },
      {
        "number": 13,
        "arabic": "وَّجَعَلْنَا سِرَاجًا وَّهَّاجًاۖ",
        "latin": "Wa ja‘alnā sirājaw wahhājā(n).",
        "translation": "Kami menjadikan pelita yang terang-benderang (matahari)."
      },
      {
        "number": 14,
        "arabic": "وَّاَنْزَلْنَا مِنَ الْمُعْصِرٰتِ مَاۤءً ثَجَّاجًاۙ",
        "latin": "Wa anzalnā minal-mu‘ṣirāti mā'an ṡajjājā(n).",
        "translation": "Kami menurunkan dari awan air hujan yang tercurah dengan deras"
      },
      {
        "number": 15,
        "arabic": "لِّنُخْرِجَ بِهٖ حَبًّا وَّنَبَاتًاۙ",
        "latin": "Linukhrija bihī ḥabbaw wa nabātā(n).",
        "translation": "agar Kami menumbuhkan dengannya biji-bijian, tanam-tanaman,"
      },
      {
        "number": 16,
        "arabic": "وَّجَنّٰتٍ اَلْفَافًاۗ",
        "latin": "Wa jannātin alfāfā(n).",
        "translation": "dan kebun-kebun yang rindang."
      },
      {
        "number": 17,
        "arabic": "اِنَّ يَوْمَ الْفَصْلِ كَانَ مِيْقَاتًاۙ",
        "latin": "Inna yaumal-faṣli kāna mīqātā(n).",
        "translation": "Sesungguhnya hari Keputusan itu adalah waktu yang telah ditetapkan,"
      },
      {
        "number": 18,
        "arabic": "يَّوْمَ يُنْفَخُ فِى الصُّوْرِ فَتَأْتُوْنَ اَفْوَاجًاۙ",
        "latin": "Yauma yunfakhu fiṣ-ṣūri fa ta'tūna afwājā(n).",
        "translation": "(yaitu) hari (ketika) sangkakala ditiup, lalu kamu datang berbondong-bondong."
      },
      {
        "number": 19,
        "arabic": "وَّفُتِحَتِ السَّمَاۤءُ فَكَانَتْ اَبْوَابًاۙ",
        "latin": "Wa futiḥatis-samā'u fa kānat abwābā(n).",
        "translation": "Langit pun dibuka. Maka, terdapatlah beberapa pintu."
      },
      {
        "number": 20,
        "arabic": "وَّسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًاۗ",
        "latin": "Wa suyyiratil-jibālu fa kānat sarābā(n).",
        "translation": "Gunung-gunung pun dijalankan. Maka, ia menjadi (seperti) fatamorgana."
      },
      {
        "number": 21,
        "arabic": "اِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًاۙ",
        "latin": "Inna jahannama kānat mirṣādā(n).",
        "translation": "Sesungguhnya (neraka) Jahanam itu (merupakan) tempat mengintai (bagi penjaga neraka)"
      },
      {
        "number": 22,
        "arabic": "لِّلطّٰغِيْنَ مَاٰبًاۙ",
        "latin": "Liṭ-ṭāgīna ma'ābā(n).",
        "translation": "(dan) menjadi tempat kembali bagi orang-orang yang melampaui batas."
      },
      {
        "number": 23,
        "arabic": "لّٰبِثِيْنَ فِيْهَآ اَحْقَابًاۚ",
        "latin": "Lābiṡīna fīhā aḥqābā(n).",
        "translation": "Mereka tinggal di sana dalam masa yang lama."
      },
      {
        "number": 24,
        "arabic": "لَا يَذُوْقُوْنَ فِيْهَا بَرْدًا وَّلَا شَرَابًاۙ",
        "latin": "Lā yażūqūna fīhā bardaw wa lā syarābā(n).",
        "translation": "Mereka tidak merasakan kesejukan di dalamnya dan tidak (pula mendapat) minuman,"
      },
      {
        "number": 25,
        "arabic": "اِلَّا حَمِيْمًا وَّغَسَّاقًاۙ",
        "latin": "Illā ḥamīmaw wa gassāqā(n).",
        "translation": "selain air yang mendidih dan nanah,"
      },
      {
        "number": 26,
        "arabic": "جَزَاۤءً وِّفَاقًاۗ",
        "latin": "Jazā'aw wifāqā(n).",
        "translation": "sebagai pembalasan yang setimpal."
      },
      {
        "number": 27,
        "arabic": "اِنَّهُمْ كَانُوْا لَا يَرْجُوْنَ حِسَابًاۙ",
        "latin": "Innahum kānū lā yarjūna ḥisābā(n).",
        "translation": "Sesungguhnya mereka tidak pernah mengharapkan perhitungan."
      },
      {
        "number": 28,
        "arabic": "وَّكَذَّبُوْا بِاٰيٰتِنَا كِذَّابًاۗ",
        "latin": "Wa każżabū bi'āyātinā kiżżābā(n).",
        "translation": "Mereka benar-benar mendustakan ayat-ayat Kami."
      },
      {
        "number": 29,
        "arabic": "وَكُلَّ شَيْءٍ اَحْصَيْنٰهُ كِتٰبًاۙ",
        "latin": "Wa kulla syai'in aḥṣaināhu kitābā(n).",
        "translation": "Segala sesuatu telah Kami catat dalam kitab (catatan amal manusia)."
      },
      {
        "number": 30,
        "arabic": "فَذُوْقُوْا فَلَنْ نَّزِيْدَكُمْ اِلَّا عَذَابًا ࣖ",
        "latin": "Fa żūqū falan nazīdakum illā ‘ażābā(n)",
        "translation": "Oleh karena itu, rasakanlah! Tidak akan Kami tambahkan kepadamu, kecuali azab."
      },
      {
        "number": 31,
        "arabic": "اِنَّ لِلْمُتَّقِيْنَ مَفَازًاۙ",
        "latin": "Inna lil-muttaqīna mafāzā(n).",
        "translation": "Sesungguhnya bagi orang-orang yang bertakwa (ada) kemenangan (surga),"
      },
      {
        "number": 32,
        "arabic": "حَدَاۤىِٕقَ وَاَعْنَابًاۙ",
        "latin": "Ḥadā'iqa wa a‘nābā(n).",
        "translation": "(yaitu) kebun-kebun, buah anggur,"
      },
      {
        "number": 33,
        "arabic": "وَّكَوَاعِبَ اَتْرَابًاۙ",
        "latin": "Wa kawā‘iba atrābā(n).",
        "translation": "gadis-gadis molek yang sebaya,"
      },
      {
        "number": 34,
        "arabic": "وَّكَأْسًا دِهَاقًاۗ",
        "latin": "Wa ka'san dihāqā(n).",
        "translation": "dan gelas-gelas yang penuh (berisi minuman)."
      },
      {
        "number": 35,
        "arabic": "لَا يَسْمَعُوْنَ فِيْهَا لَغْوًا وَّلَا كِذّٰبًا",
        "latin": "Lā yasma‘ūna fīhā lagwaw wa lā kiżżābā(n).",
        "translation": "Di sana mereka tidak mendengar percakapan yang sia-sia dan tidak pula (perkataan) dusta."
      },
      {
        "number": 36,
        "arabic": "جَزَاۤءً مِّنْ رَّبِّكَ عَطَاۤءً حِسَابًاۙ",
        "latin": "Jazā'am mir rabbika ‘aṭā'an ḥisābā(n).",
        "translation": "(Hal itu) sebagai balasan (dan) pemberian yang banyak dari Tuhanmu,"
      },
      {
        "number": 37,
        "arabic": "رَّبِّ السَّمٰوٰتِ وَالْاَرْضِ وَمَا بَيْنَهُمَا الرَّحْمٰنِ لَا يَمْلِكُوْنَ مِنْهُ خِطَابًاۚ ",
        "latin": "Rabbis-samāwāti wal-arḍi wa mā bainahumar-raḥmāni lā yamlikūna minhu khiṭābā(n).",
        "translation": "(yaitu) Tuhan (pemelihara) langit, bumi, dan apa yang ada di antara keduanya, Yang Maha Pengasih. Mereka tidak memiliki (hak) berbicara dengan-Nya."
      },
      {
        "number": 38,
        "arabic": "يَوْمَ يَقُوْمُ الرُّوْحُ وَالْمَلٰۤىِٕكَةُ صَفًّاۙ  لَّا يَتَكَلَّمُوْنَ اِلَّا مَنْ اَذِنَ لَهُ الرَّحْمٰنُ وَقَالَ صَوَابًا",
        "latin": "Yauma yaqūmur-rūḥu wal-malā'ikatu ṣaffā(n), lā yatakallamūna illā man ażina lahur-raḥmānu wa qāla ṣawābā(n).",
        "translation": "Pada hari ketika Rūḥ dan malaikat berdiri bersaf-saf. Mereka tidak berbicara, kecuali yang diizinkan oleh Tuhan Yang Maha Pengasih dan dia mengatakan yang benar."
      },
      {
        "number": 39,
        "arabic": "ذٰلِكَ الْيَوْمُ الْحَقُّۚ فَمَنْ شَاۤءَ اتَّخَذَ اِلٰى رَبِّهٖ مَاٰبًا",
        "latin": "Żālikal-yaumul-ḥaqq(u), faman syā'attakhaża ilā rabbihī ma'ābā(n).",
        "translation": "Itulah hari yang hak (pasti terjadi). Siapa yang menghendaki (keselamatan) niscaya menempuh jalan kembali kepada Tuhannya (dengan beramal saleh)."
      },
      {
        "number": 40,
        "arabic": "اِنَّآ اَنْذَرْنٰكُمْ عَذَابًا قَرِيْبًا ەۙ يَّوْمَ يَنْظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُوْلُ الْكٰفِرُ يٰلَيْتَنِيْ كُنْتُ تُرٰبًا ࣖ",
        "latin": "Innā anżarnākum ‘ażāban qarībā(n), yauma yanẓurul-mar'u mā qaddamat yadāhu wa yaqūlul-kāfiru yā laitanī kuntu turābā(n).",
        "translation": "Sesungguhnya Kami telah memperingatkan kamu akan azab yang dekat pada hari (ketika) manusia melihat apa yang telah diperbuat oleh kedua tangannya dan orang kafir berkata, “Oh, seandainya saja aku menjadi tanah.”"
      }
    ]
  },
  {
    "number": 79,
    "name": "An-Nazi'at",
    "arabicName": "النّٰزعٰت",
    "translationName": "Malaikat Yang Mencabut",
    "revelationType": "Makkiyah",
    "numberOfVerses": 46,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/079.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَالنّٰزِعٰتِ غَرْقًاۙ",
        "latin": "Wan-nāzi‘āti garqā(n).",
        "translation": "Demi (malaikat) yang mencabut (nyawa orang kafir) dengan keras,"
      },
      {
        "number": 2,
        "arabic": "وَّالنّٰشِطٰتِ نَشْطًاۙ",
        "latin": "Wan-nāsyiṭāti nasyṭā(n).",
        "translation": "demi (malaikat) yang mencabut (nyawa orang mukmin) dengan lemah lembut,"
      },
      {
        "number": 3,
        "arabic": "وَّالسّٰبِحٰتِ سَبْحًاۙ",
        "latin": "Was-sābiḥāti sabḥā(n).",
        "translation": "demi (malaikat) yang cepat (menunaikan tugasnya) dengan mudah,"
      },
      {
        "number": 4,
        "arabic": "فَالسّٰبِقٰتِ سَبْقًاۙ",
        "latin": "Fas-sābiqāti sabqā(n).",
        "translation": "(malaikat) yang bergegas (melaksanakan perintah Allah) dengan cepat,"
      },
      {
        "number": 5,
        "arabic": "فَالْمُدَبِّرٰتِ اَمْرًاۘ",
        "latin": "Fal-mudabbirāti amrā(n).",
        "translation": "dan (malaikat) yang mengatur urusan (dunia),"
      },
      {
        "number": 6,
        "arabic": "يَوْمَ تَرْجُفُ الرَّاجِفَةُۙ",
        "latin": "Yauma tarjufur-rājifah(tu).",
        "translation": "(kamu benar-benar akan dibangkitkan) pada hari ketika tiupan pertama mengguncang (alam semesta)."
      },
      {
        "number": 7,
        "arabic": "تَتْبَعُهَا الرَّادِفَةُ ۗ",
        "latin": "Tatba‘uhar-rādifah(tu).",
        "translation": "(Tiupan pertama) itu diiringi oleh tiupan kedua."
      },
      {
        "number": 8,
        "arabic": "قُلُوْبٌ يَّوْمَىِٕذٍ وَّاجِفَةٌۙ",
        "latin": "Qulūbuy yauma'iżiw wājifah(tun).",
        "translation": "Hati manusia pada hari itu merasa sangat takut;"
      },
      {
        "number": 9,
        "arabic": "اَبْصَارُهَا خَاشِعَةٌ  ۘ",
        "latin": "Abṣāruhā khāsyi‘ah(tun).",
        "translation": "pandangannya tertunduk."
      },
      {
        "number": 10,
        "arabic": "يَقُوْلُوْنَ ءَاِنَّا لَمَرْدُوْدُوْنَ فِى الْحَافِرَةِۗ",
        "latin": "Yaqūlūna a'innā lamardūdūna fil-ḥāfirah(ti).",
        "translation": "Mereka (di dunia) berkata, “Apakah kita benar-benar akan dikembalikan pada kehidupan yang semula?"
      },
      {
        "number": 11,
        "arabic": "ءَاِذَا كُنَّا عِظَامًا نَّخِرَةً ۗ",
        "latin": "A'iżā kunnā ‘iẓāman nakhirah(tan).",
        "translation": "Apabila kita telah menjadi tulang-belulang yang hancur, apakah kita (akan dibangkitkan juga)?”"
      },
      {
        "number": 12,
        "arabic": "قَالُوْا تِلْكَ اِذًا كَرَّةٌ خَاسِرَةٌ  ۘ",
        "latin": "Qālū tilka iżan karratun khāsirah(tun).",
        "translation": "Mereka berkata, “Kalau demikian, itu suatu pengembalian yang merugikan.”"
      },
      {
        "number": 13,
        "arabic": "فَاِنَّمَا هِيَ زَجْرَةٌ وَّاحِدَةٌۙ",
        "latin": "Fa innamā hiya zajratuw wāḥidah(tun).",
        "translation": "(Jangan dianggap sulit,) pengembalian itu (dilakukan) hanyalah dengan sekali tiupan."
      },
      {
        "number": 14,
        "arabic": "فَاِذَا هُمْ بِالسَّاهِرَةِۗ",
        "latin": "Fa iżā hum bis-sāhirah(ti).",
        "translation": "Seketika itu, mereka hidup kembali di bumi (yang baru)."
      },
      {
        "number": 15,
        "arabic": "هَلْ اَتٰىكَ حَدِيْثُ مُوْسٰىۘ",
        "latin": "Hal atāka ḥadīṡu mūsā.",
        "translation": "Sudah sampaikah kepadamu (Nabi Muhammad) kisah Musa?"
      },
      {
        "number": 16,
        "arabic": "اِذْ نَادٰىهُ رَبُّهٗ بِالْوَادِ الْمُقَدَّسِ طُوًىۚ",
        "latin": "Iż nādāhu rabbuhū bil-wādil-muqaddasi ṭuwā(n).",
        "translation": "(Ingatlah) ketika Tuhannya menyeru dia (Musa) di lembah suci, yaitu Lembah Tuwa,"
      },
      {
        "number": 17,
        "arabic": "اِذْهَبْ اِلٰى فِرْعَوْنَ اِنَّهٗ طَغٰىۖ",
        "latin": "Iżhab ilā fir‘auna innahū ṭagā.",
        "translation": "“Pergilah engkau kepada Fir‘aun! Sesungguhnya dia telah melampaui batas."
      },
      {
        "number": 18,
        "arabic": "فَقُلْ هَلْ لَّكَ اِلٰٓى اَنْ تَزَكّٰىۙ",
        "latin": "Fa qul hal laka ilā an tazakkā.",
        "translation": "Lalu, katakanlah (kepada Fir‘aun), ‘Adakah keinginanmu untuk menyucikan diri (dari kesesatan)"
      },
      {
        "number": 19,
        "arabic": "وَاَهْدِيَكَ اِلٰى رَبِّكَ فَتَخْشٰىۚ",
        "latin": "Wa ahdiyaka ilā rabbika fa takhsyā.",
        "translation": "dan aku akan menunjukimu ke (jalan) Tuhanmu agar engkau takut (kepada-Nya)?’”"
      },
      {
        "number": 20,
        "arabic": "فَاَرٰىهُ الْاٰيَةَ الْكُبْرٰىۖ",
        "latin": "Fa arāhul-āyatal-kubrā.",
        "translation": "Lalu, dia (Musa) memperlihatkan mukjizat yang besar kepadanya."
      },
      {
        "number": 21,
        "arabic": "فَكَذَّبَ وَعَصٰىۖ",
        "latin": "Fa każżaba wa ‘aṣā.",
        "translation": "Akan tetapi, dia (Fir‘aun) mendustakan (kerasulan) dan mendurhakai (Allah)."
      },
      {
        "number": 22,
        "arabic": "ثُمَّ اَدْبَرَ يَسْعٰىۖ",
        "latin": "Ṡumma adbara yas‘ā.",
        "translation": "Kemudian, dia berpaling seraya berusaha (menantang Musa)."
      },
      {
        "number": 23,
        "arabic": "فَحَشَرَ فَنَادٰىۖ",
        "latin": "Fa ḥasyara fanādā.",
        "translation": "Maka, dia mengumpulkan (pembesar-pembesarnya), lalu berseru (memanggil kaumnya)."
      },
      {
        "number": 24,
        "arabic": "فَقَالَ اَنَا۠ رَبُّكُمُ الْاَعْلٰىۖ",
        "latin": "Fa qāla ana rabbukumul-a‘lā.",
        "translation": "Dia berkata, “Akulah Tuhanmu yang paling tinggi.”"
      },
      {
        "number": 25,
        "arabic": "فَاَخَذَهُ اللّٰهُ نَكَالَ الْاٰخِرَةِ وَالْاُوْلٰىۗ",
        "latin": "Fa akhażahullāhu nakālal-ākhirati wal-ūlā.",
        "translation": "Maka, Allah menghukumnya dengan azab di akhirat dan (siksaan) di dunia."
      },
      {
        "number": 26,
        "arabic": "اِنَّ فِيْ ذٰلِكَ لَعِبْرَةً لِّمَنْ يَّخْشٰى ۗ ࣖ",
        "latin": "Inna fī żālika la‘ibratal limay yakhsyā.",
        "translation": "Sesungguhnya pada yang demikian itu benar-benar terdapat pelajaran bagi orang yang takut (kepada Allah)."
      },
      {
        "number": 27,
        "arabic": "ءَاَنْتُمْ اَشَدُّ خَلْقًا اَمِ السَّمَاۤءُ ۚ بَنٰىهَاۗ",
        "latin": "A'antum asyaddu khalqan amis-samā'u banāhā.",
        "translation": "Apakah penciptaan kamu yang lebih hebat ataukah langit yang telah dibangun-Nya?"
      },
      {
        "number": 28,
        "arabic": "رَفَعَ سَمْكَهَا فَسَوّٰىهَاۙ",
        "latin": "Rafa‘a samkahā fa sawwāhā.",
        "translation": "Dia telah meninggikan bangunannya, lalu menyempurnakannya."
      },
      {
        "number": 29,
        "arabic": "وَاَغْطَشَ لَيْلَهَا وَاَخْرَجَ ضُحٰىهَاۖ",
        "latin": "Wa agṭasya lailahā wa akhraja ḍuḥāhā.",
        "translation": "Dia menjadikan malamnya (gelap gulita) dan menjadikan siangnya (terang benderang)."
      },
      {
        "number": 30,
        "arabic": "وَالْاَرْضَ بَعْدَ ذٰلِكَ دَحٰىهَاۗ",
        "latin": "Wal-arḍa ba‘da żālika daḥāhā.",
        "translation": "Setelah itu, bumi Dia hamparkan (untuk dihuni)."
      },
      {
        "number": 31,
        "arabic": "اَخْرَجَ مِنْهَا مَاۤءَهَا وَمَرْعٰىهَاۖ",
        "latin": "Akhraja minhā mā'ahā wa mar‘āhā.",
        "translation": "Darinya (bumi) Dia mengeluarkan air dan (menyediakan) tempat penggembalaan."
      },
      {
        "number": 32,
        "arabic": "وَالْجِبَالَ اَرْسٰىهَاۙ",
        "latin": "Wal-jibāla arsāhā.",
        "translation": "Gunung-gunung Dia pancangkan dengan kukuh."
      },
      {
        "number": 33,
        "arabic": "مَتَاعًا لَّكُمْ وَلِاَنْعَامِكُمْۗ",
        "latin": "Matā‘al lakum wa li'an‘āmikum.",
        "translation": "(Semua itu disediakan) untuk kesenanganmu dan hewan ternakmu."
      },
      {
        "number": 34,
        "arabic": "فَاِذَا جَاۤءَتِ الطَّاۤمَّةُ الْكُبْرٰىۖ",
        "latin": "Fa iżā jā'atiṭ-ṭāmmatul-kubrā.",
        "translation": "Maka, apabila malapetaka terbesar (hari Kiamat) telah datang,"
      },
      {
        "number": 35,
        "arabic": "يَوْمَ يَتَذَكَّرُ الْاِنْسَانُ مَا سَعٰىۙ",
        "latin": "Yauma yatażakkarul-insānu mā sa‘ā.",
        "translation": "pada hari (itu) manusia teringat apa yang telah dikerjakannya"
      },
      {
        "number": 36,
        "arabic": "وَبُرِّزَتِ الْجَحِيْمُ لِمَنْ يَّرٰى",
        "latin": "Wa burrizatil-jaḥīmu limay yarā.",
        "translation": "dan (neraka) Jahim diperlihatkan dengan jelas kepada orang yang melihat(-nya)."
      },
      {
        "number": 37,
        "arabic": "فَاَمَّا مَنْ طَغٰىۖ",
        "latin": "Fa ammā man ṭagā.",
        "translation": "Adapun orang yang melampaui batas"
      },
      {
        "number": 38,
        "arabic": "وَاٰثَرَ الْحَيٰوةَ الدُّنْيَاۙ",
        "latin": "Wa āṡaral-ḥayātad-dun-yā.",
        "translation": "dan lebih mengutamakan kehidupan dunia,"
      },
      {
        "number": 39,
        "arabic": "فَاِنَّ الْجَحِيْمَ هِيَ الْمَأْوٰىۗ",
        "latin": "Fa innal-jaḥīma hiyal-ma'wā.",
        "translation": "sesungguhnya (neraka) Jahimlah tempat tinggal(-nya)."
      },
      {
        "number": 40,
        "arabic": "وَاَمَّا مَنْ خَافَ مَقَامَ رَبِّهٖ وَنَهَى النَّفْسَ عَنِ الْهَوٰىۙ",
        "latin": "Wa ammā man khāfa maqāma rabbihī wa nahan-nafsa ‘anil-hawā.",
        "translation": "Adapun orang-orang yang takut pada kebesaran Tuhannya dan menahan diri dari (keinginan) hawa nafsunya,"
      },
      {
        "number": 41,
        "arabic": "فَاِنَّ الْجَنَّةَ هِيَ الْمَأْوٰىۗ",
        "latin": "Fa innal-jannata hiyal-ma'wā.",
        "translation": "sesungguhnya surgalah tempat tinggal(-nya)."
      },
      {
        "number": 42,
        "arabic": "يَسْـَٔلُوْنَكَ عَنِ السَّاعَةِ اَيَّانَ مُرْسٰىهَاۗ",
        "latin": "Yas'alūnaka ‘anis-sā‘ati ayyāna mursāhā.",
        "translation": "Mereka (orang-orang kafir) bertanya kepadamu (Nabi Muhammad) tentang hari Kiamat, “Kapankah terjadinya?”"
      },
      {
        "number": 43,
        "arabic": "فِيْمَ اَنْتَ مِنْ ذِكْرٰىهَاۗ",
        "latin": "Fīma anta min żikrāhā.",
        "translation": "Untuk apa engkau perlu menyebutkan (waktu)-nya?"
      },
      {
        "number": 44,
        "arabic": "اِلٰى رَبِّكَ مُنْتَهٰىهَاۗ",
        "latin": "Ilā rabbika muntahāhā.",
        "translation": "Kepada Tuhanmulah (dikembalikan) kesudahan (ketentuan waktu)-nya."
      },
      {
        "number": 45,
        "arabic": "اِنَّمَآ اَنْتَ مُنْذِرُ مَنْ يَّخْشٰىهَاۗ",
        "latin": "Innamā anta munżiru may yakhsyāhā.",
        "translation": "Engkau (Nabi Muhammad) hanyalah pemberi peringatan kepada siapa yang takut padanya (hari Kiamat)."
      },
      {
        "number": 46,
        "arabic": "كَاَنَّهُمْ يَوْمَ يَرَوْنَهَا لَمْ يَلْبَثُوْٓا اِلَّا عَشِيَّةً اَوْ ضُحٰىهَا ࣖ",
        "latin": "Ka'annahum yauma yaraunahā lam yalbaṡū illā ‘asyiyyatan au ḍuḥāhā.",
        "translation": "Pada hari ketika melihatnya (hari Kiamat itu), mereka merasa seakan-akan hanya (sebentar) tinggal (di dunia) pada waktu petang atau pagi."
      }
    ]
  },
  {
    "number": 80,
    "name": "'Abasa",
    "arabicName": "عبس",
    "translationName": "Bermuka Masam",
    "revelationType": "Makkiyah",
    "numberOfVerses": 42,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/080.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "عَبَسَ وَتَوَلّٰىٓۙ",
        "latin": "‘Abasa wa tawallā.",
        "translation": "Dia (Nabi Muhammad) berwajah masam dan berpaling"
      },
      {
        "number": 2,
        "arabic": "اَنْ جَاۤءَهُ الْاَعْمٰىۗ",
        "latin": "An jā'ahul-a‘mā.",
        "translation": "karena seorang tunanetra (Abdullah bin Ummi Maktum) telah datang kepadanya."
      },
      {
        "number": 3,
        "arabic": "وَمَا يُدْرِيْكَ لَعَلَّهٗ يَزَّكّٰىٓۙ",
        "latin": "Wa mā yudrīka la‘allahū yazzakkā.",
        "translation": "Tahukah engkau (Nabi Muhammad) boleh jadi dia ingin menyucikan dirinya (dari dosa)"
      },
      {
        "number": 4,
        "arabic": "اَوْ يَذَّكَّرُ فَتَنْفَعَهُ الذِّكْرٰىۗ",
        "latin": "Au yażżakkaru fatanfa‘ahuż-żikrā.",
        "translation": "atau dia (ingin) mendapatkan pengajaran sehingga pengajaran itu bermanfaat baginya?"
      },
      {
        "number": 5,
        "arabic": "اَمَّا مَنِ اسْتَغْنٰىۙ",
        "latin": "Ammā manistagnā.",
        "translation": "Adapun orang yang merasa dirinya serba cukup (para pembesar Quraisy),"
      },
      {
        "number": 6,
        "arabic": "فَاَنْتَ لَهٗ تَصَدّٰىۗ",
        "latin": "Fa anta lahū taṣaddā.",
        "translation": "engkau (Nabi Muhammad) memberi perhatian kepadanya."
      },
      {
        "number": 7,
        "arabic": "وَمَا عَلَيْكَ اَلَّا يَزَّكّٰىۗ",
        "latin": "Wa mā ‘alaika allā yazzakkā.",
        "translation": "Padahal, tidak ada (cela) atasmu kalau dia tidak menyucikan diri (beriman)."
      },
      {
        "number": 8,
        "arabic": "وَاَمَّا مَنْ جَاۤءَكَ يَسْعٰىۙ",
        "latin": "Wa ammā man jā'aka yas‘ā.",
        "translation": "Adapun orang yang datang kepadamu dengan bersegera (untuk mendapatkan pengajaran),"
      },
      {
        "number": 9,
        "arabic": "وَهُوَ يَخْشٰىۙ",
        "latin": "Wa huwa yakhsyā.",
        "translation": "sedangkan dia takut (kepada Allah),"
      },
      {
        "number": 10,
        "arabic": "فَاَنْتَ عَنْهُ تَلَهّٰىۚ",
        "latin": "Fa anta ‘anhu talahhā.",
        "translation": "malah engkau (Nabi Muhammad) abaikan."
      },
      {
        "number": 11,
        "arabic": "كَلَّآ اِنَّهَا تَذْكِرَةٌ ۚ",
        "latin": "Kallā innahā tażkirah(tun).",
        "translation": "Sekali-kali jangan (begitu)! Sesungguhnya (ajaran Allah) itu merupakan peringatan."
      },
      {
        "number": 12,
        "arabic": "فَمَنْ شَاۤءَ ذَكَرَهٗ ۘ",
        "latin": "Faman syā'a żakarah(ū).",
        "translation": "Siapa yang menghendaki tentulah akan memperhatikannya"
      },
      {
        "number": 13,
        "arabic": "فِيْ صُحُفٍ مُّكَرَّمَةٍۙ",
        "latin": "Fī ṣuḥufim mukarrmah(tin).",
        "translation": "di dalam suhuf yang dimuliakan (di sisi Allah),"
      },
      {
        "number": 14,
        "arabic": "مَّرْفُوْعَةٍ مُّطَهَّرَةٍ ۢ ۙ",
        "latin": "Marfū‘atim muṭahharah(tin).",
        "translation": "yang ditinggikan (kedudukannya) lagi disucikan"
      },
      {
        "number": 15,
        "arabic": "بِاَيْدِيْ سَفَرَةٍۙ",
        "latin": "Bi'aidī safarah(tin).",
        "translation": "di tangan para utusan (malaikat)"
      },
      {
        "number": 16,
        "arabic": "كِرَامٍۢ بَرَرَةٍۗ",
        "latin": "Kirāmim bararah(tin).",
        "translation": "yang mulia lagi berbudi."
      },
      {
        "number": 17,
        "arabic": "قُتِلَ الْاِنْسَانُ مَآ اَكْفَرَهٗۗ",
        "latin": "Qutilal-insānu mā akfarah(ū).",
        "translation": "Celakalah manusia! Alangkah kufur dia!"
      },
      {
        "number": 18,
        "arabic": "مِنْ اَيِّ شَيْءٍ خَلَقَهٗۗ",
        "latin": "Min ayyi syai'in khalaqah(ū).",
        "translation": "Dari apakah Dia menciptakannya?"
      },
      {
        "number": 19,
        "arabic": "مِنْ نُّطْفَةٍۗ خَلَقَهٗ فَقَدَّرَهٗۗ",
        "latin": "Min nuṭfah(tin), khalaqahū fa qaddarah(ū).",
        "translation": "Dia menciptakannya dari setetes mani, lalu menentukan (takdir)-nya."
      },
      {
        "number": 20,
        "arabic": "ثُمَّ السَّبِيْلَ يَسَّرَهٗۙ",
        "latin": "Ṡummas-sabīla yassarah(ū).",
        "translation": "Kemudian, jalannya Dia mudahkan."
      },
      {
        "number": 21,
        "arabic": "ثُمَّ اَمَاتَهٗ فَاَقْبَرَهٗۙ",
        "latin": "Ṡumma amātahū fa aqbarah(ū).",
        "translation": "Kemudian, Dia mematikannya lalu menguburkannya."
      },
      {
        "number": 22,
        "arabic": "ثُمَّ اِذَا شَاۤءَ اَنْشَرَهٗۗ",
        "latin": "Ṡumma iżā syā'a ansyarah(ū).",
        "translation": "Kemudian, jika menghendaki, Dia membangkitkannya kembali."
      },
      {
        "number": 23,
        "arabic": "كَلَّا لَمَّا يَقْضِ مَآ اَمَرَهٗۗ",
        "latin": "Kallā lammā yaqḍi mā amarah(ū).",
        "translation": "Sekali-kali jangan (begitu)! Dia (manusia) itu belum melaksanakan apa yang Dia (Allah) perintahkan kepadanya."
      },
      {
        "number": 24,
        "arabic": "فَلْيَنْظُرِ الْاِنْسَانُ اِلٰى طَعَامِهٖٓ ۙ ",
        "latin": "Falyanẓuril-insānu ilā ṭa‘āmih(ī).",
        "translation": "Maka, hendaklah manusia itu memperhatikan makanannya."
      },
      {
        "number": 25,
        "arabic": "اَنَّا صَبَبْنَا الْمَاۤءَ صَبًّاۙ",
        "latin": "Annā ṣababnal-mā'a ṣabbā(n).",
        "translation": "Sesungguhnya Kami telah mencurahkan air (dari langit) dengan berlimpah."
      },
      {
        "number": 26,
        "arabic": "ثُمَّ شَقَقْنَا الْاَرْضَ شَقًّاۙ",
        "latin": "Ṡumma syaqaqnal-arḍa syaqqā(n).",
        "translation": "Kemudian, Kami belah bumi dengan sebaik-baiknya."
      },
      {
        "number": 27,
        "arabic": "فَاَنْۢبَتْنَا فِيْهَا حَبًّاۙ",
        "latin": "Fa'ambatnā fīhā ḥabbā(n).",
        "translation": "Lalu, Kami tumbuhkan padanya biji-bijian,"
      },
      {
        "number": 28,
        "arabic": "وَّعِنَبًا وَّقَضْبًاۙ",
        "latin": "Wa ‘inabaw wa qaḍbā(n).",
        "translation": "anggur, sayur-sayuran,"
      },
      {
        "number": 29,
        "arabic": "وَّزَيْتُوْنًا وَّنَخْلًاۙ",
        "latin": "Wa zaitūnaw wa nakhlā(n).",
        "translation": "zaitun, pohon kurma,"
      },
      {
        "number": 30,
        "arabic": "وَّحَدَاۤىِٕقَ غُلْبًا",
        "latin": "Wa ḥadā'iqa gulbā(n).",
        "translation": "kebun-kebun (yang) rindang,"
      },
      {
        "number": 31,
        "arabic": "وَفَاكِهَةً وَّاَبًّا",
        "latin": "Wa fākihataw wa abbā(n).",
        "translation": "buah-buahan, dan rerumputan."
      },
      {
        "number": 32,
        "arabic": "مَتَاعًا لَّكُمْ وَلِاَنْعَامِكُمْۗ",
        "latin": "Matā‘al lakum wa li'an‘āmikum.",
        "translation": "(Semua itu disediakan) untuk kesenanganmu dan hewan-hewan ternakmu."
      },
      {
        "number": 33,
        "arabic": "فَاِذَا جَاۤءَتِ الصَّاۤخَّةُ ۖ",
        "latin": "Fa iżā jā'atiṣ-ṣākhkhah(tu).",
        "translation": "Maka, apabila datang suara yang memekakkan (dari tiupan sangkakala),"
      },
      {
        "number": 34,
        "arabic": "يَوْمَ يَفِرُّ الْمَرْءُ مِنْ اَخِيْهِۙ",
        "latin": "Yauma yafirrul-mar'u min akhīh(i).",
        "translation": "pada hari itu manusia lari dari saudaranya,"
      },
      {
        "number": 35,
        "arabic": "وَاُمِّهٖ وَاَبِيْهِۙ",
        "latin": "Wa ummihī wa abīh(i).",
        "translation": "(dari) ibu dan bapaknya,"
      },
      {
        "number": 36,
        "arabic": "وَصَاحِبَتِهٖ وَبَنِيْهِۗ",
        "latin": "Wa ṣāḥibatihī wa banīh(i).",
        "translation": "serta (dari) istri dan anak-anaknya."
      },
      {
        "number": 37,
        "arabic": "لِكُلِّ امْرِئٍ مِّنْهُمْ يَوْمَىِٕذٍ شَأْنٌ يُّغْنِيْهِۗ",
        "latin": "Likullimri'im minhum yauma'iżin sya'nuy yugnīh(i).",
        "translation": "Setiap orang dari mereka pada hari itu mempunyai urusan yang menyibukkannya."
      },
      {
        "number": 38,
        "arabic": "وُجُوْهٌ يَّوْمَىِٕذٍ مُّسْفِرَةٌۙ",
        "latin": "Wujūhuy yauma'iżim musfirah(tun).",
        "translation": "Pada hari itu ada wajah-wajah yang berseri-seri,"
      },
      {
        "number": 39,
        "arabic": "ضَاحِكَةٌ مُّسْتَبْشِرَةٌ ۚ",
        "latin": "Ḍāḥikatum mustabsyirah(tun).",
        "translation": "tertawa lagi gembira ria."
      },
      {
        "number": 40,
        "arabic": "وَوُجُوْهٌ يَّوْمَىِٕذٍ عَلَيْهَا غَبَرَةٌۙ",
        "latin": "Wa wujūhuy yauma'iżin ‘alaihā gabarah(tun).",
        "translation": "Pada hari itu ada (pula) wajah-wajah yang tertutup debu (suram)"
      },
      {
        "number": 41,
        "arabic": "تَرْهَقُهَا قَتَرَةٌ ۗ",
        "latin": "Tarhaquhā qatarah(tun).",
        "translation": "dan tertutup oleh kegelapan (ditimpa kehinaan dan kesusahan)."
      },
      {
        "number": 42,
        "arabic": "اُولٰۤىِٕكَ هُمُ الْكَفَرَةُ الْفَجَرَةُ ࣖ",
        "latin": "Ulā'ika humul-kafaratul-fajarah(tu).",
        "translation": "Mereka itulah orang-orang kafir lagi para pendurhaka."
      }
    ]
  },
  {
    "number": 81,
    "name": "At-Takwir",
    "arabicName": "التكوير",
    "translationName": "Penggulungan",
    "revelationType": "Makkiyah",
    "numberOfVerses": 29,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/081.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اِذَا الشَّمْسُ كُوِّرَتْۖ",
        "latin": "Iżasy-syamsu kuwwirat.",
        "translation": "Apabila matahari digulung,"
      },
      {
        "number": 2,
        "arabic": "وَاِذَا النُّجُوْمُ انْكَدَرَتْۖ",
        "latin": "Wa iżan-nujūmunkadarat.",
        "translation": "apabila bintang-bintang berjatuhan,"
      },
      {
        "number": 3,
        "arabic": "وَاِذَا الْجِبَالُ سُيِّرَتْۖ",
        "latin": "Wa iżal-jibālu suyyirat.",
        "translation": "apabila gunung-gunung dihancurkan,"
      },
      {
        "number": 4,
        "arabic": "وَاِذَا الْعِشَارُ عُطِّلَتْۖ",
        "latin": "Wa iżal-‘isyāru ‘uṭṭilat.",
        "translation": "apabila unta-unta yang bunting ditinggalkan (tidak terurus),"
      },
      {
        "number": 5,
        "arabic": "وَاِذَا الْوُحُوْشُ حُشِرَتْۖ",
        "latin": "Wa iżal-wuḥūsy ḥusyirat.",
        "translation": "apabila binatang-binatang liar dikumpulkan,"
      },
      {
        "number": 6,
        "arabic": "وَاِذَا الْبِحَارُ سُجِّرَتْۖ",
        "latin": "Wa iżal-biḥāru sujjirat.",
        "translation": "apabila lautan dipanaskan,"
      },
      {
        "number": 7,
        "arabic": "وَاِذَا النُّفُوْسُ زُوِّجَتْۖ",
        "latin": "Wa iżan-nufūsu zuwwijat.",
        "translation": "apabila roh-roh dipertemukan (dengan tubuh),"
      },
      {
        "number": 8,
        "arabic": "وَاِذَا الْمَوْءٗدَةُ سُىِٕلَتْۖ ",
        "latin": "Wa iżal-mau'ūdatu su'ilat.",
        "translation": "apabila bayi-bayi perempuan yang dikubur hidup-hidup ditanya,"
      },
      {
        "number": 9,
        "arabic": "بِاَيِّ ذَنْۢبٍ قُتِلَتْۚ",
        "latin": "Bi'ayyi żambin qutilat.",
        "translation": "“Karena dosa apa dia dibunuh,”"
      },
      {
        "number": 10,
        "arabic": "وَاِذَا الصُّحُفُ نُشِرَتْۖ",
        "latin": "Wa iżaṣ-ṣuḥufu nusyirat.",
        "translation": "apabila lembaran-lembaran (catatan amal) telah dibuka lebar-lebar,"
      },
      {
        "number": 11,
        "arabic": "وَاِذَا السَّمَاۤءُ كُشِطَتْۖ",
        "latin": "Wa iżas-samā'u kusyiṭat.",
        "translation": "apabila langit dilenyapkan,"
      },
      {
        "number": 12,
        "arabic": "وَاِذَا الْجَحِيْمُ سُعِّرَتْۖ",
        "latin": "Wa iżal-jaḥīmu su‘‘irat.",
        "translation": "apabila (neraka) Jahim dinyalakan,"
      },
      {
        "number": 13,
        "arabic": "وَاِذَا الْجَنَّةُ اُزْلِفَتْۖ",
        "latin": "Wa iżal-jannatu uzlifat.",
        "translation": "dan apabila surga didekatkan,"
      },
      {
        "number": 14,
        "arabic": "عَلِمَتْ نَفْسٌ مَّآ اَحْضَرَتْۗ",
        "latin": "‘Alimat nafsum mā aḥḍarat.",
        "translation": "setiap jiwa akan mengetahui apa yang telah dikerjakannya."
      },
      {
        "number": 15,
        "arabic": "فَلَآ اُقْسِمُ بِالْخُنَّسِۙ",
        "latin": "Falā uqsimu bil-khunnas(i).",
        "translation": "Aku bersumpah demi bintang-bintang"
      },
      {
        "number": 16,
        "arabic": "الْجَوَارِ الْكُنَّسِۙ",
        "latin": "Al-jawāril-kunnas(i).",
        "translation": "yang beredar lagi terbenam,"
      },
      {
        "number": 17,
        "arabic": "وَالَّيْلِ اِذَا عَسْعَسَۙ",
        "latin": "Wal-laili iżā ‘as‘as(a).",
        "translation": "demi malam apabila telah larut,"
      },
      {
        "number": 18,
        "arabic": "وَالصُّبْحِ اِذَا تَنَفَّسَۙ",
        "latin": "Waṣ-ṣubḥi iżā tanaffas(a).",
        "translation": "demi subuh apabila (fajar) telah menyingsing,"
      },
      {
        "number": 19,
        "arabic": "اِنَّهٗ لَقَوْلُ رَسُوْلٍ كَرِيْمٍۙ",
        "latin": "Innahū laqaulu rasūlin karīm(in).",
        "translation": "sesungguhnya (Al-Qur’an) itu benar-benar firman (Allah yang dibawa oleh) utusan yang mulia (Jibril)"
      },
      {
        "number": 20,
        "arabic": "ذِيْ قُوَّةٍ عِنْدَ ذِى الْعَرْشِ مَكِيْنٍۙ",
        "latin": "Żī quwwatin ‘inda żil-‘arsyi makīn(in).",
        "translation": "yang memiliki kekuatan dan kedudukan tinggi di sisi (Allah) yang memiliki ʻArasy,"
      },
      {
        "number": 21,
        "arabic": "مُّطَاعٍ ثَمَّ اَمِيْنٍۗ",
        "latin": "Muṭā‘in ṡamma amīn(in).",
        "translation": "yang di sana (Jibril) ditaati lagi dipercaya."
      },
      {
        "number": 22,
        "arabic": "وَمَا صَاحِبُكُمْ بِمَجْنُوْنٍۚ",
        "latin": "Wa mā ṣāḥibukum bimajnūn(in).",
        "translation": "Temanmu (Nabi Muhammad) itu bukanlah orang gila."
      },
      {
        "number": 23,
        "arabic": "وَلَقَدْ رَاٰهُ بِالْاُفُقِ الْمُبِيْنِۚ",
        "latin": "Wa laqad ra'āhu bil-ufuqil-mubīn(i).",
        "translation": "Sungguh, dia (Nabi Muhammad) benar-benar telah melihatnya (Jibril) di ufuk yang terang."
      },
      {
        "number": 24,
        "arabic": "وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِيْنٍۚ",
        "latin": "Wa mā huwa ‘alal-gaibi biḍanīn(in).",
        "translation": "Dia (Nabi Muhammad) bukanlah seorang yang kikir (enggan) untuk menerangkan yang gaib."
      },
      {
        "number": 25,
        "arabic": "وَمَا هُوَ بِقَوْلِ شَيْطٰنٍ رَّجِيْمٍۚ",
        "latin": "Wa mā huwa biqauli syaiṭānir rajīm(in).",
        "translation": "(Al-Qur’an) itu bukanlah perkataan setan yang terkutuk."
      },
      {
        "number": 26,
        "arabic": "فَاَيْنَ تَذْهَبُوْنَۗ",
        "latin": "Fa aina tażhabūn(a).",
        "translation": "Maka, ke manakah kamu akan pergi?"
      },
      {
        "number": 27,
        "arabic": "اِنْ هُوَ اِلَّا ذِكْرٌ لِّلْعٰلَمِيْنَۙ",
        "latin": "In huwa illā żikrul lil-‘ālamīn(a).",
        "translation": "(Al-Qur’an) itu tidak lain, kecuali peringatan bagi semesta alam,"
      },
      {
        "number": 28,
        "arabic": "لِمَنْ شَاۤءَ مِنْكُمْ اَنْ يَّسْتَقِيْمَۗ",
        "latin": "Liman syā'a minkum ay yastaqīm(a).",
        "translation": "(yaitu) bagi siapa di antaramu yang hendak menempuh jalan yang lurus."
      },
      {
        "number": 29,
        "arabic": "وَمَا تَشَاۤءُوْنَ اِلَّآ اَنْ يَّشَاۤءَ اللّٰهُ رَبُّ الْعٰلَمِيْنَ ࣖ",
        "latin": "Wa mā tasyā'ūna illā ay yasyā'allāhu rabbul-‘ālamīn(a).",
        "translation": "Kamu tidak dapat berkehendak, kecuali apabila dikehendaki Allah, Tuhan semesta alam."
      }
    ]
  },
  {
    "number": 82,
    "name": "Al-Infitar",
    "arabicName": "الانفطار",
    "translationName": "Terbelah",
    "revelationType": "Makkiyah",
    "numberOfVerses": 19,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/082.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اِذَا السَّمَاۤءُ انْفَطَرَتْۙ",
        "latin": "Iżas-samā'unfaṭarat.",
        "translation": "Apabila langit terbelah,"
      },
      {
        "number": 2,
        "arabic": "وَاِذَا الْكَوَاكِبُ انْتَثَرَتْۙ",
        "latin": "Wa iżal-kawākibuntaṡarat.",
        "translation": "apabila bintang-bintang jatuh berserakan,"
      },
      {
        "number": 3,
        "arabic": "وَاِذَا الْبِحَارُ فُجِّرَتْۙ",
        "latin": "Wa iżal-biḥāru fujjirat.",
        "translation": "apabila lautan diluapkan,"
      },
      {
        "number": 4,
        "arabic": "وَاِذَا الْقُبُوْرُ بُعْثِرَتْۙ",
        "latin": "Wa iżal-qubūru bu‘ṡirat.",
        "translation": "dan apabila kuburan-kuburan dibongkar,"
      },
      {
        "number": 5,
        "arabic": "عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَاَخَّرَتْۗ",
        "latin": "‘Alimat nafsum mā qaddamat wa akhkharat.",
        "translation": "setiap jiwa akan mengetahui apa yang telah dikerjakan dan yang dilalaikan(-nya)."
      },
      {
        "number": 6,
        "arabic": "يٰٓاَيُّهَا الْاِنْسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيْمِۙ",
        "latin": "Yā ayyuhal-insānu mā garraka birabbikal-karīm(i).",
        "translation": "Wahai manusia, apakah yang telah memperdayakanmu (berbuat durhaka) terhadap Tuhanmu Yang Maha Mulia,"
      },
      {
        "number": 7,
        "arabic": "الَّذِيْ خَلَقَكَ فَسَوّٰىكَ فَعَدَلَكَۙ",
        "latin": "Allażī khalaqaka fa sawwāka fa ‘adalak(a).",
        "translation": "yang telah menciptakanmu lalu menyempurnakan kejadianmu dan menjadikan (susunan tubuh)-mu seimbang?"
      },
      {
        "number": 8,
        "arabic": "فِيْٓ اَيِّ صُوْرَةٍ مَّا شَاۤءَ رَكَّبَكَۗ",
        "latin": "Fī ayyi ṣūratim mā syā'a rakkabak(a).",
        "translation": "Dalam bentuk apa saja yang dikehendaki, Dia menyusun (tubuh)-mu."
      },
      {
        "number": 9,
        "arabic": "كَلَّا بَلْ تُكَذِّبُوْنَ بِالدِّيْنِۙ",
        "latin": "Kallā bal tukażżibūna bid-dīn(i).",
        "translation": "Jangan sekali-kali begitu! Bahkan, kamu mendustakan hari Pembalasan."
      },
      {
        "number": 10,
        "arabic": "وَاِنَّ عَلَيْكُمْ لَحٰفِظِيْنَۙ",
        "latin": "Wa inna ‘alaikum laḥāfiẓīn(a).",
        "translation": "Sesungguhnya bagi kamu ada (malaikat-malaikat) pengawas"
      },
      {
        "number": 11,
        "arabic": "كِرَامًا كٰتِبِيْنَۙ",
        "latin": "Kirāman kātibīn(a).",
        "translation": "yang mulia (di sisi Allah) dan mencatat (amal perbuatanmu)."
      },
      {
        "number": 12,
        "arabic": "يَعْلَمُوْنَ مَا تَفْعَلُوْنَ",
        "latin": "Ya‘lamūna mā taf‘alūn(a).",
        "translation": "Mereka mengetahui apa yang kamu kerjakan."
      },
      {
        "number": 13,
        "arabic": "اِنَّ الْاَبْرَارَ لَفِيْ نَعِيْمٍۙ",
        "latin": "Innal-abrāra lafī na‘īm(in).",
        "translation": "Sesungguhnya orang-orang yang berbakti benar-benar berada dalam (surga yang penuh) kenikmatan."
      },
      {
        "number": 14,
        "arabic": "وَّاِنَّ الْفُجَّارَ لَفِيْ جَحِيْمٍ",
        "latin": "Wa innal-fujjāra lafī jaḥīm(in).",
        "translation": "Sesungguhnya orang-orang yang durhaka benar-benar berada dalam (neraka) Jahim."
      },
      {
        "number": 15,
        "arabic": "يَصْلَوْنَهَا يَوْمَ الدِّيْنِ",
        "latin": "Yaṣlaunahā yaumad-dīn(i).",
        "translation": "Mereka memasukinya pada hari Pembalasan."
      },
      {
        "number": 16,
        "arabic": "وَمَا هُمْ عَنْهَا بِغَاۤىِٕبِيْنَۗ",
        "latin": "Wa mā hum ‘anhā bigā'ibīn(a). ",
        "translation": "Mereka tidak mungkin keluar dari (neraka) itu."
      },
      {
        "number": 17,
        "arabic": "وَمَآ اَدْرٰىكَ مَا يَوْمُ الدِّيْنِۙ",
        "latin": "Wa mā adrāka mā yaumud-dīn(i).",
        "translation": "Tahukah engkau apakah hari Pembalasan itu?"
      },
      {
        "number": 18,
        "arabic": "ثُمَّ مَآ اَدْرٰىكَ مَا يَوْمُ الدِّيْنِۗ",
        "latin": "Ṡumma mā adrāka mā yaumud-dīn(i).",
        "translation": "Kemudian, tahukah engkau apakah hari Pembalasan itu?"
      },
      {
        "number": 19,
        "arabic": "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْـًٔا ۗوَالْاَمْرُ يَوْمَىِٕذٍ لِّلّٰهِ ࣖ",
        "latin": "Yauma lā tamliku nafsul linafsin syai'ā(n), wal-amru yauma'iżil lillāh(i).",
        "translation": "(Itulah) hari (ketika) seseorang tidak berdaya (menolong) orang lain sedikit pun. Segala urusan pada hari itu adalah milik Allah."
      }
    ]
  },
  {
    "number": 83,
    "name": "Al-Mutaffifin",
    "arabicName": "المطفّفين",
    "translationName": "Orang-Orang Curang",
    "revelationType": "Makkiyah",
    "numberOfVerses": 36,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/083.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَيْلٌ لِّلْمُطَفِّفِيْنَۙ",
        "latin": "Wailul lil-muṭaffifīn(a).",
        "translation": "Celakalah orang-orang yang curang (dalam menakar dan menimbang)!"
      },
      {
        "number": 2,
        "arabic": "الَّذِيْنَ اِذَا اكْتَالُوْا عَلَى النَّاسِ يَسْتَوْفُوْنَۖ",
        "latin": "Allażīna iżaktālū ‘alan-nāsi yastaufūn(a).",
        "translation": "(Mereka adalah) orang-orang yang apabila menerima takaran dari orang lain, mereka minta dipenuhi."
      },
      {
        "number": 3,
        "arabic": "وَاِذَا كَالُوْهُمْ اَوْ وَّزَنُوْهُمْ يُخْسِرُوْنَۗ",
        "latin": "Wa iżā kālūhum au wazanūhum yukhsirūn(a).",
        "translation": "(Sebaliknya,) apabila mereka menakar atau menimbang untuk orang lain, mereka kurangi."
      },
      {
        "number": 4,
        "arabic": "اَلَا يَظُنُّ اُولٰۤىِٕكَ اَنَّهُمْ مَّبْعُوْثُوْنَۙ",
        "latin": "Alā yaẓunnu ulā'ika annahum mab‘ūṡūn(a).",
        "translation": "Tidakkah mereka mengira (bahwa) sesungguhnya mereka akan dibangkitkan"
      },
      {
        "number": 5,
        "arabic": "لِيَوْمٍ عَظِيْمٍۙ",
        "latin": "Liyaumin ‘aẓīm(in).",
        "translation": "pada suatu hari yang besar (Kiamat),"
      },
      {
        "number": 6,
        "arabic": "يَّوْمَ يَقُوْمُ النَّاسُ لِرَبِّ الْعٰلَمِيْنَۗ",
        "latin": "Yauma yaqūmun-nāsu lirabbil-‘ālamīn(a).",
        "translation": "(yaitu) hari (ketika) manusia bangkit menghadap Tuhan seluruh alam?"
      },
      {
        "number": 7,
        "arabic": "كَلَّآ اِنَّ كِتٰبَ الْفُجَّارِ لَفِيْ سِجِّيْنٍۗ",
        "latin": "Kallā inna kitābal-fujjāri lafī sijjīn(in).",
        "translation": "Jangan sekali-kali begitu! Sesungguhnya catatan orang yang durhaka benar-benar (tersimpan) dalam Sijjīn."
      },
      {
        "number": 8,
        "arabic": "وَمَآ اَدْرٰىكَ مَا سِجِّيْنٌۗ",
        "latin": "Wa mā adrāka mā sijjīn(un).",
        "translation": "Tahukah engkau apakah Sijjīn itu?"
      },
      {
        "number": 9,
        "arabic": "كِتٰبٌ مَّرْقُوْمٌۗ",
        "latin": "Kitābum marqūm(un).",
        "translation": "(Ia adalah) kitab yang berisi catatan (amal)."
      },
      {
        "number": 10,
        "arabic": "وَيْلٌ يَّوْمَىِٕذٍ لِّلْمُكَذِّبِيْنَۙ",
        "latin": "Wailuy yauma'iżil lil-mukażżibīn(a).",
        "translation": "Celakalah pada hari itu bagi para pendusta,"
      },
      {
        "number": 11,
        "arabic": "الَّذِيْنَ يُكَذِّبُوْنَ بِيَوْمِ الدِّيْنِۗ",
        "latin": "Allażīna yukażżibūna biyaumid-dīn(i).",
        "translation": "yaitu orang-orang yang mendustakan hari Pembalasan."
      },
      {
        "number": 12,
        "arabic": "وَمَا يُكَذِّبُ بِهٖٓ اِلَّا كُلُّ مُعْتَدٍ اَثِيْمٍۙ",
        "latin": "Wa mā yukażżibu bihī illā kullu mu‘tadin aṡīm(in).",
        "translation": "Tidak ada yang mendustakannya, kecuali setiap orang yang melampaui batas lagi sangat berdosa."
      },
      {
        "number": 13,
        "arabic": "اِذَا تُتْلٰى عَلَيْهِ اٰيٰتُنَا قَالَ اَسَاطِيْرُ الْاَوَّلِيْنَۗ",
        "latin": "Iżā tutlā ‘alaihi āyātunā qāla asāṭīrul-awwalīn(a).",
        "translation": "Apabila dibacakan kepadanya ayat-ayat Kami, dia berkata, “(Itu adalah) dongeng orang-orang dahulu.”"
      },
      {
        "number": 14,
        "arabic": "كَلَّا بَلْ ۜرَانَ عَلٰى قُلُوْبِهِمْ مَّا كَانُوْا يَكْسِبُوْنَ ",
        "latin": "Kallā bal…rāna ‘alā qulūbihim mā kānū yaksibūn(a).",
        "translation": "Sekali-kali tidak! Bahkan, apa yang selalu mereka kerjakan itu telah menutupi hati mereka."
      },
      {
        "number": 15,
        "arabic": "كَلَّآ اِنَّهُمْ عَنْ رَّبِّهِمْ يَوْمَىِٕذٍ لَّمَحْجُوْبُوْنَۗ",
        "latin": "Kallā innahum ‘ar rabbihim yauma'iżil lamaḥjūbūn(a).",
        "translation": "Sekali-kali tidak! Sesungguhnya mereka pada hari itu benar-benar terhalang dari (rahmat) Tuhannya."
      },
      {
        "number": 16,
        "arabic": "ثُمَّ اِنَّهُمْ لَصَالُوا الْجَحِيْمِۗ",
        "latin": "Ṡumma innahum laṣālul-jaḥīm(i). ",
        "translation": "Sesungguhnya mereka kemudian benar-benar masuk (neraka) Jahim."
      },
      {
        "number": 17,
        "arabic": "ثُمَّ يُقَالُ هٰذَا الَّذِيْ كُنْتُمْ بِهٖ تُكَذِّبُوْنَۗ",
        "latin": "Ṡumma yuqālu hāżal-lażī kuntum bihī tukażżibūn(a).",
        "translation": "Lalu dikatakan (kepada mereka), “Inilah (azab) yang selalu kamu dustakan.”"
      },
      {
        "number": 18,
        "arabic": "كَلَّآ اِنَّ كِتٰبَ الْاَبْرَارِ لَفِيْ عِلِّيِّيْنَۗ ",
        "latin": "Kallā inna kitābal-abrāri lafī ‘illiyyīn(a).",
        "translation": "Sekali-kali tidak! Sesungguhnya catatan orang-orang yang berbakti benar-benar tersimpan dalam ‘Illiyyīn."
      },
      {
        "number": 19,
        "arabic": "وَمَآ اَدْرٰىكَ مَا عِلِّيُّوْنَۗ",
        "latin": "Wa mā adrāka mā ‘illiyyūn(a).",
        "translation": "Tahukah engkau apakah ‘Illiyyīn itu?"
      },
      {
        "number": 20,
        "arabic": "كِتٰبٌ مَّرْقُوْمٌۙ",
        "latin": "Kitābum marqūm(un).",
        "translation": "(Itulah) kitab yang berisi catatan (amal)"
      },
      {
        "number": 21,
        "arabic": "يَّشْهَدُهُ الْمُقَرَّبُوْنَۗ",
        "latin": "Yasyhaduhul-muqarrabūn(a).",
        "translation": "yang disaksikan oleh (malaikat-malaikat) yang didekatkan (kepada Allah)."
      },
      {
        "number": 22,
        "arabic": "اِنَّ الْاَبْرَارَ لَفِيْ نَعِيْمٍۙ",
        "latin": "Innal-abrāra lafī na‘īm(in).",
        "translation": "Sesungguhnya orang-orang yang berbakti benar-benar berada dalam (surga yang penuh) kenikmatan."
      },
      {
        "number": 23,
        "arabic": "عَلَى الْاَرَاۤىِٕكِ يَنْظُرُوْنَۙ",
        "latin": "‘Alal-arā'iki yanẓurūn(a).",
        "translation": "Mereka (duduk) di atas dipan-dipan (sambil) melepas pandangan."
      },
      {
        "number": 24,
        "arabic": "تَعْرِفُ فِيْ وُجُوْهِهِمْ نَضْرَةَ النَّعِيْمِۚ",
        "latin": "Ta‘rifu fī wujūhihim naḍratan na‘īm(i).",
        "translation": "Engkau dapat mengetahui pada wajah mereka gemerlapnya kenikmatan."
      },
      {
        "number": 25,
        "arabic": "يُسْقَوْنَ مِنْ رَّحِيْقٍ مَّخْتُوْمٍۙ",
        "latin": "Yusqauna mir raḥīqim makhtūm(in).",
        "translation": "Mereka diberi minum dari khamar murni (tidak memabukkan) yang (tempatnya) masih diberi lak (sebagai jaminan keasliannya)."
      },
      {
        "number": 26,
        "arabic": "خِتٰمُهٗ مِسْكٌ ۗوَفِيْ ذٰلِكَ فَلْيَتَنَافَسِ الْمُتَنٰفِسُوْنَۗ",
        "latin": "Khitāmuhū misk(un), wa fī żālika falyatanāfasil-mutanāfisūn(a).",
        "translation": "Laknya terbuat dari kasturi. Untuk (mendapatkan) yang demikian itu hendaknya orang berlomba-lomba."
      },
      {
        "number": 27,
        "arabic": "وَمِزَاجُهٗ مِنْ تَسْنِيْمٍۙ",
        "latin": "Wa mizājuhū min tasnīm(in).",
        "translation": "Campurannya terbuat dari tasnīm,"
      },
      {
        "number": 28,
        "arabic": "عَيْنًا يَّشْرَبُ بِهَا الْمُقَرَّبُوْنَۗ",
        "latin": "‘Ainay yasyrabu bihal-muqarrabūn(a).",
        "translation": "(yaitu) mata air yang diminum oleh mereka yang didekatkan (kepada Allah)."
      },
      {
        "number": 29,
        "arabic": "اِنَّ الَّذِيْنَ اَجْرَمُوْا كَانُوْا مِنَ الَّذِيْنَ اٰمَنُوْا يَضْحَكُوْنَۖ",
        "latin": "Innal-lażīna ajramū kānū minal-lażīna āmanū yaḍḥakūn(a).",
        "translation": "Sesungguhnya orang-orang yang berdosa adalah mereka yang dahulu selalu mentertawakan orang-orang yang beriman."
      },
      {
        "number": 30,
        "arabic": "وَاِذَا مَرُّوْا بِهِمْ يَتَغَامَزُوْنَۖ",
        "latin": "Wa iżā marrū bihim yatagāmazūn(a).",
        "translation": "Apabila mereka (orang-orang yang beriman) melintas di hadapan mereka, mereka saling mengedip-ngedipkan matanya."
      },
      {
        "number": 31,
        "arabic": "وَاِذَا انْقَلَبُوْٓا اِلٰٓى اَهْلِهِمُ انْقَلَبُوْا فَكِهِيْنَۖ",
        "latin": "Wa iżanqalabū ilā ahlihimunqalabū fakihīn(a).",
        "translation": "Apabila kembali kepada kaumnya, mereka kembali dengan gembira ria (dan sombong)."
      },
      {
        "number": 32,
        "arabic": "وَاِذَا رَاَوْهُمْ قَالُوْٓا اِنَّ هٰٓؤُلَاۤءِ لَضَاۤلُّوْنَۙ",
        "latin": "Wa iżā ra'auhum qālū inna hā'ulā'i laḍāllūn(a).",
        "translation": "Apabila melihat (orang-orang mukmin), mereka mengatakan, “Sesungguhnya mereka benar-benar orang-orang sesat,”"
      },
      {
        "number": 33,
        "arabic": "وَمَآ اُرْسِلُوْا عَلَيْهِمْ حٰفِظِيْنَۗ",
        "latin": "Wa mā ursilū ‘alaihim ḥāfiẓīn(a). ",
        "translation": "padahal mereka (orang-orang yang berdosa itu) tidak diutus sebagai penjaga (orang-orang mukmin)."
      },
      {
        "number": 34,
        "arabic": "فَالْيَوْمَ الَّذِيْنَ اٰمَنُوْا مِنَ الْكُفَّارِ يَضْحَكُوْنَۙ",
        "latin": "Fal-yaumal-lażīna āmanū minal kuffāri yaḍḥakūn(a).",
        "translation": "Pada hari ini (hari Kiamat), orang-orang yang berimanlah yang mentertawakan orang-orang kafir."
      },
      {
        "number": 35,
        "arabic": "عَلَى الْاَرَاۤىِٕكِ يَنْظُرُوْنَۗ",
        "latin": "‘Alal-arā'iki yanẓurūn(a).",
        "translation": "Mereka (duduk) di atas dipan-dipan (sambil) melepas pandangan."
      },
      {
        "number": 36,
        "arabic": "هَلْ ثُوِّبَ الْكُفَّارُ مَا كَانُوْا يَفْعَلُوْنَ ࣖ",
        "latin": "Hal ṡuwwibal-kuffāru mā kānū yaf‘alūn(a).",
        "translation": "Apakah orang-orang kafir itu telah diberi balasan (hukuman) terhadap apa yang selalu mereka perbuat?"
      }
    ]
  },
  {
    "number": 84,
    "name": "Al-Insyiqaq",
    "arabicName": "الانشقاق",
    "translationName": "Terbelah",
    "revelationType": "Makkiyah",
    "numberOfVerses": 25,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/084.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اِذَا السَّمَاۤءُ انْشَقَّتْۙ ",
        "latin": "Iżas-samā'unsyaqqat.",
        "translation": "Apabila langit terbelah"
      },
      {
        "number": 2,
        "arabic": "وَاَذِنَتْ لِرَبِّهَا وَحُقَّتْۙ ",
        "latin": "Wa ażinat lirabbihā wa ḥuqqat.",
        "translation": "serta patuh kepada Tuhannya dan sudah semestinya patuh."
      },
      {
        "number": 3,
        "arabic": "وَاِذَا الْاَرْضُ مُدَّتْۙ ",
        "latin": "Wa iẓal-arḍu muddat. ",
        "translation": "Apabila bumi diratakan,"
      },
      {
        "number": 4,
        "arabic": "وَاَلْقَتْ مَا فِيْهَا وَتَخَلَّتْۙ ",
        "latin": "Wa alqat mā fīhā wa takhallat. ",
        "translation": "memuntahkan apa yang ada di dalamnya dan menjadi kosong,"
      },
      {
        "number": 5,
        "arabic": "وَاَذِنَتْ لِرَبِّهَا وَحُقَّتْۗ ",
        "latin": "Wa ażinat lirabbihā wa ḥuqqat. ",
        "translation": "serta patuh kepada Tuhannya, dan sudah semestinya patuh."
      },
      {
        "number": 6,
        "arabic": "يٰٓاَيُّهَا الْاِنْسَانُ اِنَّكَ كَادِحٌ اِلٰى رَبِّكَ كَدْحًا فَمُلٰقِيْهِۚ ",
        "latin": "Yā ayyuhal-insānu innaka kādiḥun ilā rabbika kadḥan fa mulāqīh(i). ",
        "translation": "Wahai manusia, sesungguhnya engkau telah bekerja keras menuju (pertemuan dengan) Tuhanmu. Maka, engkau pasti menemui-Nya."
      },
      {
        "number": 7,
        "arabic": "فَاَمَّا مَنْ اُوْتِيَ كِتٰبَهٗ بِيَمِيْنِهٖۙ ",
        "latin": "Fa ammā man ūtiya kitābahū biyamīnih(ī). ",
        "translation": "Adapun orang yang catatannya diberikan dari sebelah kanannya,"
      },
      {
        "number": 8,
        "arabic": "فَسَوْفَ يُحَاسَبُ حِسَابًا يَّسِيْرًاۙ ",
        "latin": "Fa saufa yuḥāsabu ḥisābay yasīrā(n).",
        "translation": "dia akan dihisab dengan pemeriksaan yang mudah"
      },
      {
        "number": 9,
        "arabic": "وَّيَنْقَلِبُ اِلٰٓى اَهْلِهٖ مَسْرُوْرًاۗ ",
        "latin": "Wa yanqalibu ilā ahlihī masrūrā(n).",
        "translation": "dan dia akan kembali kepada keluarganya (yang sama-sama beriman) dengan gembira."
      },
      {
        "number": 10,
        "arabic": "وَاَمَّا مَنْ اُوْتِيَ كِتٰبَهٗ وَرَاۤءَ ظَهْرِهٖۙ ",
        "latin": "Wa ammā man ūtiya kitābahū warā'a ẓahrih(ī).",
        "translation": "Adapun orang yang catatannya diberikan dari belakang punggungnya,"
      },
      {
        "number": 11,
        "arabic": "فَسَوْفَ يَدْعُوْا ثُبُوْرًاۙ ",
        "latin": "Fa saufa yad‘ū ṡubūrā(n).",
        "translation": "dia akan berteriak, “Celakalah aku!”"
      },
      {
        "number": 12,
        "arabic": "وَّيَصْلٰى سَعِيْرًاۗ ",
        "latin": "Wa yaṣlā sa‘īrā(n).",
        "translation": "Dia akan memasuki (neraka) Sa‘ir (yang menyala-nyala)."
      },
      {
        "number": 13,
        "arabic": "اِنَّهٗ كَانَ فِيْٓ اَهْلِهٖ مَسْرُوْرًاۗ ",
        "latin": "Innahū kāna fī ahlihī masrūrā(n).",
        "translation": "Sesungguhnya dia dahulu (di dunia) bergembira di kalangan keluarganya (yang sama-sama kafir)."
      },
      {
        "number": 14,
        "arabic": "اِنَّهٗ ظَنَّ اَنْ لَّنْ يَّحُوْرَ ۛ ",
        "latin": "Innahū ẓanna allay yaḥūr(a).",
        "translation": "Sesungguhnya dia mengira bahwa dia tidak akan kembali (kepada Tuhannya)."
      },
      {
        "number": 15,
        "arabic": "بَلٰىۛ اِنَّ رَبَّهٗ كَانَ بِهٖ بَصِيْرًاۗ ",
        "latin": "Balā, inna rabbahū kāna bihī baṣīrā(n).",
        "translation": "Tidak demikian. Sesungguhnya Tuhannya selalu melihatnya."
      },
      {
        "number": 16,
        "arabic": "فَلَآ اُقْسِمُ بِالشَّفَقِۙ ",
        "latin": "Falā uqsimu bisy-syafaq(i).",
        "translation": "Aku bersumpah demi cahaya merah pada waktu senja,"
      },
      {
        "number": 17,
        "arabic": "وَالَّيْلِ وَمَا وَسَقَۙ ",
        "latin": "Wal-laili wa mā wasaq(a).",
        "translation": "demi malam dan apa yang diselubunginya,"
      },
      {
        "number": 18,
        "arabic": "وَالْقَمَرِ اِذَا اتَّسَقَۙ ",
        "latin": "Wal-qamari iżattasaq(a).",
        "translation": "dan demi bulan apabila jadi purnama,"
      },
      {
        "number": 19,
        "arabic": "لَتَرْكَبُنَّ طَبَقًا عَنْ طَبَقٍۗ ",
        "latin": "Latarkabunna ṭabaqan ‘an ṭabaq(in).",
        "translation": "sungguh, kamu benar-benar akan menjalani tingkat demi tingkat (dalam kehidupan)."
      },
      {
        "number": 20,
        "arabic": "فَمَا لَهُمْ لَا يُؤْمِنُوْنَۙ ",
        "latin": "Famā lahum lā yu'minūn(a).",
        "translation": "Maka, mengapa mereka tidak mau beriman?"
      },
      {
        "number": 21,
        "arabic": "وَاِذَا قُرِئَ عَلَيْهِمُ الْقُرْاٰنُ لَا يَسْجُدُوْنَ ۗ ۩ ",
        "latin": "Wa iżā quri'a ‘alaihimul-qur'ānu lā yasjudūn(a).",
        "translation": "Apabila Al-Qur’an dibacakan kepada mereka, mereka tidak (mau) bersujud,"
      },
      {
        "number": 22,
        "arabic": "بَلِ الَّذِيْنَ كَفَرُوْا يُكَذِّبُوْنَۖ ",
        "latin": "Balil-lażīna kafarū yukażżibūn(a).",
        "translation": "bahkan orang-orang yang kufur itu mendustakan(-nya)."
      },
      {
        "number": 23,
        "arabic": "وَاللّٰهُ اَعْلَمُ بِمَا يُوْعُوْنَۖ ",
        "latin": "Wallāhu a‘lamu bimā yū‘ūn(a).",
        "translation": "Allah lebih mengetahui apa yang mereka sembunyikan (dalam hati mereka)."
      },
      {
        "number": 24,
        "arabic": "فَبَشِّرْهُمْ بِعَذَابٍ اَلِيْمٍۙ ",
        "latin": "Fa basysyirhum bi‘ażābin alīm(in).",
        "translation": "Maka, berilah mereka kabar ‘gembira’ dengan azab yang pedih,"
      },
      {
        "number": 25,
        "arabic": "اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ لَهُمْ اَجْرٌ غَيْرُ مَمْنُوْنٍ ࣖ ",
        "latin": "Illal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti lahum ajrun gairu mamnūn(in).",
        "translation": "Kecuali orang-orang yang beriman dan mengerjakan kebajikan. Bagi merekalah pahala yang tidak putus-putus."
      }
    ]
  },
  {
    "number": 85,
    "name": "Al-Buruj",
    "arabicName": "البروج",
    "translationName": "Gugusan Bintang",
    "revelationType": "Makkiyah",
    "numberOfVerses": 22,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/085.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَالسَّمَاۤءِ ذَاتِ الْبُرُوْجِۙ ",
        "latin": "Was-samā'i żātil-burūj(i).",
        "translation": "Demi langit yang mempunyai gugusan bintang,"
      },
      {
        "number": 2,
        "arabic": "وَالْيَوْمِ الْمَوْعُوْدِۙ ",
        "latin": "Wal-yaumil-mau‘ūd(i).",
        "translation": "demi hari yang dijanjikan,"
      },
      {
        "number": 3,
        "arabic": "وَشَاهِدٍ وَّمَشْهُوْدٍۗ ",
        "latin": "Wa syāhidiw wa masyhūd(in).",
        "translation": "demi yang menyaksikan dan yang disaksikan,"
      },
      {
        "number": 4,
        "arabic": "قُتِلَ اَصْحٰبُ الْاُخْدُوْدِۙ ",
        "latin": "Qutila aṣḥābul-ukhdūd(i).",
        "translation": "binasalah orang-orang yang membuat parit (tempat menyiksa orang mukmin)"
      },
      {
        "number": 5,
        "arabic": "النَّارِ ذَاتِ الْوَقُوْدِۙ ",
        "latin": "An-nāri żātil-waqūd(i).",
        "translation": "(yang dikobarkan) api penuh kayu bakar."
      },
      {
        "number": 6,
        "arabic": "اِذْ هُمْ عَلَيْهَا قُعُوْدٌۙ ",
        "latin": "Iż hum ‘alaihā qu‘ūd(un).",
        "translation": "Ketika (itu) mereka (hanya) duduk di sekitarnya."
      },
      {
        "number": 7,
        "arabic": "وَّهُمْ عَلٰى مَا يَفْعَلُوْنَ بِالْمُؤْمِنِيْنَ شُهُوْدٌ  ۗ ",
        "latin": "Wa hum ‘alā mā yaf‘alūna bil-mu'minīna syuhūd(un).",
        "translation": "Mereka menyaksikan apa yang mereka perbuat terhadap orang-orang mukmin."
      },
      {
        "number": 8,
        "arabic": "وَمَا نَقَمُوْا مِنْهُمْ اِلَّآ اَنْ يُّؤْمِنُوْا بِاللّٰهِ الْعَزِيْزِ الْحَمِيْدِۙ ",
        "latin": "Wa mā naqamū minhum illā ay yu'minū billāhil-‘azīzil-ḥamīd(i).",
        "translation": "Tidaklah mereka menyiksa (membakar) orang-orang mukmin itu, kecuali karena mereka beriman kepada Allah Yang Maha Perkasa lagi Maha Terpuji,"
      },
      {
        "number": 9,
        "arabic": "الَّذِيْ لَهٗ مُلْكُ السَّمٰوٰتِ وَالْاَرْضِ ۗوَاللّٰهُ عَلٰى كُلِّ شَيْءٍ شَهِيْدٌ  ۗ ",
        "latin": "Allażī lahū mulkus-samāwāti wal-arḍ(i), wallāhu ‘alā kulli syai'in syahīd(un).",
        "translation": "yang memiliki kerajaan langit dan bumi. Allah Maha Menyaksikan segala sesuatu."
      },
      {
        "number": 10,
        "arabic": "اِنَّ الَّذِيْنَ فَتَنُوا الْمُؤْمِنِيْنَ وَالْمُؤْمِنٰتِ ثُمَّ لَمْ يَتُوْبُوْا فَلَهُمْ عَذَابُ جَهَنَّمَ وَلَهُمْ عَذَابُ الْحَرِيْقِۗ ",
        "latin": "Innal-lażīna fatanul-mu'minīna wal-mu'mināti ṡumma lam yatūbū fa lahum ‘ażābu jahannama wa lahum ‘ażābul-ḥarīq(i).",
        "translation": "Sesungguhnya, orang-orang yang menimpakan cobaan (siksa) terhadap mukmin laki-laki dan perempuan, lalu mereka tidak bertobat, mereka akan mendapat azab Jahanam dan mereka akan mendapat azab (neraka) yang membakar."
      },
      {
        "number": 11,
        "arabic": "اِنَّ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ لَهُمْ جَنّٰتٌ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ ەۗ ذٰلِكَ الْفَوْزُ الْكَبِيْرُۗ",
        "latin": "Innal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti lahum jannātun tajrī min taḥtihal-anhār(u), żālikal-fauzul-kabīr(u).",
        "translation": "Sesungguhnya, orang-orang yang beriman dan mengerjakan kebajikan, mereka akan mendapat surga yang mengalir di bawahnya sungai-sungai. Itulah kemenangan yang besar."
      },
      {
        "number": 12,
        "arabic": "اِنَّ بَطْشَ رَبِّكَ لَشَدِيْدٌ ۗ ",
        "latin": "Inna baṭsya rabbika lasyadīd(un).",
        "translation": "Sesungguhnya azab Tuhanmu sangat keras."
      },
      {
        "number": 13,
        "arabic": "اِنَّهٗ هُوَ يُبْدِئُ وَيُعِيْدُۚ ",
        "latin": "Innahū huwa yubdi'u wa yu‘īd(u).",
        "translation": "Sesungguhnya Dialah yang memulai (penciptaan makhluk) dan yang mengembalikan (hidup setelah mati)."
      },
      {
        "number": 14,
        "arabic": "وَهُوَ الْغَفُوْرُ الْوَدُوْدُۙ ",
        "latin": "Wa huwal-gafūrul-wadūd(u).",
        "translation": "Dialah Yang Maha Pengampun lagi Maha Pengasih,"
      },
      {
        "number": 15,
        "arabic": "ذُو الْعَرْشِ الْمَجِيْدُۙ ",
        "latin": "Żul-‘arsyil-majīd(i).",
        "translation": "Pemilik ʻArasy lagi Maha Mulia,"
      },
      {
        "number": 16,
        "arabic": "فَعَّالٌ لِّمَا يُرِيْدُۗ ",
        "latin": "Fa‘‘ālul limā yurīd(u).",
        "translation": "Maha Kuasa berbuat apa saja yang Dia kehendaki."
      },
      {
        "number": 17,
        "arabic": "هَلْ اَتٰىكَ حَدِيْثُ الْجُنُوْدِۙ ",
        "latin": "Hal atāka ḥadīṡul-junūd(i).",
        "translation": "Sudahkah sampai kepadamu berita tentang bala tentara,"
      },
      {
        "number": 18,
        "arabic": "فِرْعَوْنَ وَثَمُوْدَۗ ",
        "latin": "Fir‘auna wa ṡamūd(a).",
        "translation": "(yaitu bala tentara) Fir‘aun dan Samud?"
      },
      {
        "number": 19,
        "arabic": "بَلِ الَّذِيْنَ كَفَرُوْا فِيْ تَكْذِيْبٍۙ ",
        "latin": "Balil-lażīna kafarū fī takżīb(in).",
        "translation": "Memang orang-orang kafir (selalu) mendustakan,"
      },
      {
        "number": 20,
        "arabic": "وَّاللّٰهُ مِنْ وَّرَاۤىِٕهِمْ مُّحِيْطٌۚ ",
        "latin": "Wallāhu miw warā'ihim muḥīṭ(un).",
        "translation": "padahal Allah mengepung dari belakang mereka."
      },
      {
        "number": 21,
        "arabic": "بَلْ هُوَ قُرْاٰنٌ مَّجِيْدٌۙ ",
        "latin": "Bal huwa qur'ānum majīd(un).",
        "translation": "Bahkan, (yang didustakan itu) Al-Qur’an yang mulia"
      },
      {
        "number": 22,
        "arabic": "فِيْ لَوْحٍ مَّحْفُوْظٍ ࣖ ",
        "latin": "Fī lauḥim maḥfūẓ(in).",
        "translation": "yang (tersimpan) dalam (tempat) yang terjaga (Lauhulmahfuz)."
      }
    ]
  },
  {
    "number": 86,
    "name": "At-Tariq",
    "arabicName": "الطارق",
    "translationName": "Yang Datang Di Malam Hari",
    "revelationType": "Makkiyah",
    "numberOfVerses": 17,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/086.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَالسَّمَاۤءِ وَالطَّارِقِۙ ",
        "latin": "Was-samā'i waṭ-ṭāriq(i).",
        "translation": "Demi langit dan yang datang pada malam hari."
      },
      {
        "number": 2,
        "arabic": "وَمَآ اَدْرٰىكَ مَا الطَّارِقُۙ ",
        "latin": "Wa mā adrāka maṭ-ṭāriq(u).",
        "translation": "Tahukah kamu apakah yang datang pada malam hari itu?"
      },
      {
        "number": 3,
        "arabic": "النَّجْمُ الثَّاقِبُۙ ",
        "latin": "An-najmuṡ-ṡāqib(u).",
        "translation": "(Itulah) bintang yang bersinar tajam."
      },
      {
        "number": 4,
        "arabic": "اِنْ كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌۗ ",
        "latin": "In kullu nafsil lammā ‘alaihā ḥāfiẓ(un).",
        "translation": "Setiap orang pasti ada penjaganya."
      },
      {
        "number": 5,
        "arabic": "فَلْيَنْظُرِ الْاِنْسَانُ مِمَّ خُلِقَ ",
        "latin": "Falyanẓuril-insānu mimma khuliq(a).",
        "translation": "Hendaklah manusia memperhatikan dari apa dia diciptakan."
      },
      {
        "number": 6,
        "arabic": "خُلِقَ مِنْ مَّاۤءٍ دَافِقٍۙ ",
        "latin": "Khuliqa mim mā'in dāfiq(in).",
        "translation": "Dia diciptakan dari air (mani) yang memancar,"
      },
      {
        "number": 7,
        "arabic": "يَّخْرُجُ مِنْۢ بَيْنِ الصُّلْبِ وَالتَّرَاۤىِٕبِۗ ",
        "latin": "Yakhruju mim bainiṣ-ṣulbi wat-tarā'ib(i).",
        "translation": "yang keluar dari antara tulang sulbi (punggung) dan tulang dada."
      },
      {
        "number": 8,
        "arabic": "اِنَّهٗ عَلٰى رَجْعِهٖ لَقَادِرٌۗ ",
        "latin": "Innahū ‘alā raj‘ihī laqādir(un).",
        "translation": "Sesungguhnya Dia (Allah) benar-benar kuasa untuk mengembalikannya (hidup setelah mati)"
      },
      {
        "number": 9,
        "arabic": "يَوْمَ تُبْلَى السَّرَاۤىِٕرُۙ ",
        "latin": "Yauma tublas-sarā'ir(u).",
        "translation": "pada hari ditampakkan segala rahasia."
      },
      {
        "number": 10,
        "arabic": "فَمَا لَهٗ مِنْ قُوَّةٍ وَّلَا نَاصِرٍۗ ",
        "latin": "Famā lahū min quwwatiw wa lā nāṣir(in).",
        "translation": "Maka, baginya (manusia) tidak ada lagi kekuatan dan tidak (pula) ada penolong."
      },
      {
        "number": 11,
        "arabic": "وَالسَّمَاۤءِ ذَاتِ الرَّجْعِۙ ",
        "latin": "Was-samā'i żātir-raj‘(i).",
        "translation": "Demi langit yang mengandung hujan"
      },
      {
        "number": 12,
        "arabic": "وَالْاَرْضِ ذَاتِ الصَّدْعِۙ ",
        "latin": "Wal-arḍi żātiṣ-ṣad‘(i).",
        "translation": "dan bumi yang memiliki rekahan (tempat tumbuhnya pepohonan),"
      },
      {
        "number": 13,
        "arabic": "اِنَّهٗ لَقَوْلٌ فَصْلٌۙ ",
        "latin": "Innahū laqaulun faṣl(un).",
        "translation": "sesungguhnya (Al-Qur’an) itu benar-benar firman pemisah (antara yang hak dan yang batil)"
      },
      {
        "number": 14,
        "arabic": "وَّمَا هُوَ بِالْهَزْلِۗ ",
        "latin": "Wa mā huwa bil-hazl(i).",
        "translation": "dan ia (Al-Qur’an) sama sekali bukan perkataan senda gurau."
      },
      {
        "number": 15,
        "arabic": "اِنَّهُمْ يَكِيْدُوْنَ كَيْدًاۙ ",
        "latin": "Innahum yakīdūna kaidā(n).",
        "translation": "Sesungguhnya mereka (orang kafir) melakukan tipu daya."
      },
      {
        "number": 16,
        "arabic": "وَّاَكِيْدُ كَيْدًاۖ ",
        "latin": "Wa akīdu kaidā(n).",
        "translation": "Aku pun membalasnya dengan tipu daya."
      },
      {
        "number": 17,
        "arabic": "فَمَهِّلِ الْكٰفِرِيْنَ اَمْهِلْهُمْ رُوَيْدًا ࣖ ",
        "latin": "Fa mahhilil-kāfirīna amhilhum ruwaidā(n).",
        "translation": "Maka, tangguhkanlah orang-orang kafir itu. Biarkanlah mereka sejenak (bersenang-senang)."
      }
    ]
  },
  {
    "number": 87,
    "name": "Al-A'la",
    "arabicName": "الاعلى",
    "translationName": "Maha Tinggi",
    "revelationType": "Makkiyah",
    "numberOfVerses": 19,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/087.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "سَبِّحِ اسْمَ رَبِّكَ الْاَعْلَىۙ ",
        "latin": "Sabbiḥisma rabbikal-a‘lā.",
        "translation": "Sucikanlah nama Tuhanmu Yang Maha Tinggi,"
      },
      {
        "number": 2,
        "arabic": "الَّذِيْ خَلَقَ فَسَوّٰىۖ ",
        "latin": "Allażī khalaqa fasawwā.",
        "translation": "yang menciptakan, lalu menyempurnakan (ciptaan-Nya),"
      },
      {
        "number": 3,
        "arabic": "وَالَّذِيْ قَدَّرَ فَهَدٰىۖ ",
        "latin": "Wal-lażī qaddara fahadā.",
        "translation": "yang menentukan kadar (masing-masing) dan memberi petunjuk,"
      },
      {
        "number": 4,
        "arabic": "وَالَّذِيْٓ اَخْرَجَ الْمَرْعٰىۖ ",
        "latin": "Wal-lażī akhrajal-mar‘ā.",
        "translation": "dan yang menumbuhkan (rerumputan) padang gembala,"
      },
      {
        "number": 5,
        "arabic": "فَجَعَلَهٗ غُثَاۤءً اَحْوٰىۖ ",
        "latin": "Fa ja‘alahū guṡā'an aḥwā.",
        "translation": "lalu menjadikannya kering kehitam-hitaman."
      },
      {
        "number": 6,
        "arabic": "سَنُقْرِئُكَ فَلَا تَنْسٰىٓ  ۖ ",
        "latin": "Sanuqri'uka falā tansā.",
        "translation": "Kami akan membacakan (Al-Qur’an) kepadamu (Nabi Muhammad) sehingga engkau tidak akan lupa,"
      },
      {
        "number": 7,
        "arabic": "اِلَّا مَا شَاۤءَ اللّٰهُ ۗاِنَّهٗ يَعْلَمُ الْجَهْرَ وَمَا يَخْفٰىۗ ",
        "latin": "Illā mā syā'allāh(u), innahū ya‘lamul-jahra wa mā yakhfā.",
        "translation": "kecuali jika Allah menghendaki. Sesungguhnya Dia mengetahui yang terang dan yang tersembunyi."
      },
      {
        "number": 8,
        "arabic": "وَنُيَسِّرُكَ لِلْيُسْرٰىۖ ",
        "latin": "Wa nuyassiruka lil-yusrā.",
        "translation": "Kami akan melapangkan bagimu jalan kemudahan (dalam segala urusan)."
      },
      {
        "number": 9,
        "arabic": "فَذَكِّرْ اِنْ نَّفَعَتِ الذِّكْرٰىۗ ",
        "latin": "Fa żakkir in nafa‘atiż-żikrā.",
        "translation": "Maka, sampaikanlah peringatan jika peringatan itu bermanfaat."
      },
      {
        "number": 10,
        "arabic": "سَيَذَّكَّرُ مَنْ يَّخْشٰىۙ ",
        "latin": "Sayażżakkaru may yakhsyā.",
        "translation": "Orang yang takut (kepada Allah) akan mengambil pelajaran,"
      },
      {
        "number": 11,
        "arabic": "وَيَتَجَنَّبُهَا الْاَشْقَىۙ ",
        "latin": "Wa yatajannabuhal-asyqā.",
        "translation": "sedangkan orang-orang yang celaka (kafir) akan menjauhinya,"
      },
      {
        "number": 12,
        "arabic": "الَّذِيْ يَصْلَى النَّارَ الْكُبْرٰىۚ ",
        "latin": "Allażī yaṣlan-nāral-kubrā.",
        "translation": "(yaitu) orang yang akan memasuki api (neraka) yang besar."
      },
      {
        "number": 13,
        "arabic": "ثُمَّ لَا يَمُوْتُ فِيْهَا وَلَا يَحْيٰىۗ ",
        "latin": "Ṡumma lā yamūtu fīhā wa lā yaḥyā.",
        "translation": "Selanjutnya, dia tidak mati dan tidak (pula) hidup di sana."
      },
      {
        "number": 14,
        "arabic": "قَدْ اَفْلَحَ مَنْ تَزَكّٰىۙ ",
        "latin": "Qad aflaḥa man tazakkā.",
        "translation": "Sungguh, beruntung orang yang menyucikan diri (dari kekafiran)"
      },
      {
        "number": 15,
        "arabic": "وَذَكَرَ اسْمَ رَبِّهٖ فَصَلّٰىۗ ",
        "latin": "Wa żakarasma rabbihī fa ṣallā.",
        "translation": "dan mengingat nama Tuhannya, lalu dia salat."
      },
      {
        "number": 16,
        "arabic": "بَلْ تُؤْثِرُوْنَ الْحَيٰوةَ الدُّنْيَاۖ ",
        "latin": "Bal tu'ṡirūnal-ḥayātad-dun-yā.",
        "translation": "Adapun kamu (orang-orang kafir) mengutamakan kehidupan dunia,"
      },
      {
        "number": 17,
        "arabic": "وَالْاٰخِرَةُ خَيْرٌ وَّاَبْقٰىۗ ",
        "latin": "Wal-ākhiratu khairuw wa abqā.",
        "translation": "padahal kehidupan akhirat itu lebih baik dan lebih kekal."
      },
      {
        "number": 18,
        "arabic": "اِنَّ هٰذَا لَفِى الصُّحُفِ الْاُوْلٰىۙ ",
        "latin": "Inna hāżā lafiṣ-ṣuḥufil-ūlā.",
        "translation": "Sesungguhnya (penjelasan) ini terdapat dalam suhuf (lembaran-lembaran) yang terdahulu,"
      },
      {
        "number": 19,
        "arabic": "صُحُفِ اِبْرٰهِيْمَ وَمُوْسٰى ࣖ ",
        "latin": "Ṣuḥufi ibrāhīma wa mūsā.",
        "translation": "(yaitu) suhuf (yang diturunkan kepada) Ibrahim dan Musa."
      }
    ]
  },
  {
    "number": 88,
    "name": "Al-Gasyiyah",
    "arabicName": "الغاشية",
    "translationName": "Hari Kiamat",
    "revelationType": "Makkiyah",
    "numberOfVerses": 26,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/088.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "هَلْ اَتٰىكَ حَدِيْثُ الْغَاشِيَةِۗ",
        "latin": "Hal atāka ḥadīṡul-gāsyiyah(ti).",
        "translation": "Sudahkah sampai kepadamu berita tentang al-Gāsyiyah (hari Kiamat yang menutupi kesadaran manusia dengan kedahsyatannya)?"
      },
      {
        "number": 2,
        "arabic": "وُجُوْهٌ يَّوْمَىِٕذٍ خَاشِعَةٌ  ۙ",
        "latin": "Wujūhuy yauma'iżin khāsyi‘ah(tun).",
        "translation": "Pada hari itu banyak wajah yang tertunduk hina"
      },
      {
        "number": 3,
        "arabic": "عَامِلَةٌ نَّاصِبَةٌ  ۙ",
        "latin": "‘Amilatun nāṣibah(tun).",
        "translation": "(karena) berusaha keras (menghindari azab neraka) lagi kepayahan (karena dibelenggu)."
      },
      {
        "number": 4,
        "arabic": "تَصْلٰى نَارًا حَامِيَةً  ۙ",
        "latin": "Taṣlā nāran ḥāmiyah(tan).",
        "translation": "Mereka memasuki api (neraka) yang sangat panas."
      },
      {
        "number": 5,
        "arabic": "تُسْقٰى مِنْ عَيْنٍ اٰنِيَةٍ ۗ",
        "latin": "Tusqā min ‘ainin āniyah(tin).",
        "translation": "(Mereka) diberi minum dari sumber mata air yang sangat panas."
      },
      {
        "number": 6,
        "arabic": "لَيْسَ لَهُمْ طَعَامٌ اِلَّا مِنْ ضَرِيْعٍۙ",
        "latin": "Laisa lahum ṭa‘āmun illā min ḍarī‘(in).",
        "translation": "Tidak ada makanan bagi mereka selain dari pohon yang berduri,"
      },
      {
        "number": 7,
        "arabic": "لَّا يُسْمِنُ وَلَا يُغْنِيْ مِنْ جُوْعٍۗ",
        "latin": "Lā yusminu wa lā yugnī min jū‘(in).",
        "translation": "yang tidak menggemukkan dan tidak pula menghilangkan lapar."
      },
      {
        "number": 8,
        "arabic": "وُجُوْهٌ يَّوْمَىِٕذٍ نَّاعِمَةٌ  ۙ",
        "latin": "Wujūhuy yauma'iżin nā‘imah(tun).",
        "translation": "Pada hari itu banyak (pula) wajah yang berseri-seri,"
      },
      {
        "number": 9,
        "arabic": "لِّسَعْيِهَا رَاضِيَةٌ  ۙ ",
        "latin": "Lisa‘yihā rāḍiyah(tun).",
        "translation": "merasa puas karena usahanya."
      },
      {
        "number": 10,
        "arabic": "فِيْ جَنَّةٍ عَالِيَةٍۙ",
        "latin": "Fī jannatin ‘āliyah(tin).",
        "translation": "(Mereka) dalam surga yang tinggi."
      },
      {
        "number": 11,
        "arabic": "لَّا تَسْمَعُ فِيْهَا لَاغِيَةً ۗ",
        "latin": "Lā tasama‘u fīhā lāgiyah(tan).",
        "translation": "Di sana kamu tidak mendengar (perkataan) yang tidak berguna."
      },
      {
        "number": 12,
        "arabic": "فِيْهَا عَيْنٌ جَارِيَةٌ  ۘ",
        "latin": "Fīhā ‘ainun jāriyah(tun).",
        "translation": "Di sana ada mata air yang mengalir."
      },
      {
        "number": 13,
        "arabic": "فِيْهَا سُرُرٌ مَّرْفُوْعَةٌ  ۙ",
        "latin": "Fīhā sururum marfū‘ah(tun).",
        "translation": "Di sana ada (pula) dipan-dipan yang ditinggikan,"
      },
      {
        "number": 14,
        "arabic": "وَّاَكْوَابٌ مَّوْضُوْعَةٌ  ۙ",
        "latin": "Wa akwābum mauḍū‘ah(tun).",
        "translation": "gelas-gelas yang tersedia (di dekatnya),"
      },
      {
        "number": 15,
        "arabic": "وَّنَمَارِقُ مَصْفُوْفَةٌ  ۙ ",
        "latin": "Wa namāriqu maṣfūfah(tun).",
        "translation": "bantal-bantal sandaran yang tersusun,"
      },
      {
        "number": 16,
        "arabic": "وَّزَرَابِيُّ مَبْثُوْثَةٌ  ۗ",
        "latin": "Wa zarābiyyu mabṡūṡah(tun).",
        "translation": "dan permadani-permadani yang terhampar."
      },
      {
        "number": 17,
        "arabic": "اَفَلَا يَنْظُرُوْنَ اِلَى الْاِبِلِ كَيْفَ خُلِقَتْۗ",
        "latin": "Afalā yanẓurūna ilal-ibili kaifa khuliqat.",
        "translation": "Tidakkah mereka memperhatikan unta, bagaimana ia diciptakan?"
      },
      {
        "number": 18,
        "arabic": "وَاِلَى السَّمَاۤءِ كَيْفَ رُفِعَتْۗ",
        "latin": "Wa ilas-samā'i kaifa rufi‘at.",
        "translation": "Bagaimana langit ditinggikan?"
      },
      {
        "number": 19,
        "arabic": "وَاِلَى الْجِبَالِ كَيْفَ نُصِبَتْۗ",
        "latin": "Wa ilal-jibāli kaifa nuṣibat.",
        "translation": "Bagaimana gunung-gunung ditegakkan?"
      },
      {
        "number": 20,
        "arabic": "وَاِلَى الْاَرْضِ كَيْفَ سُطِحَتْۗ ",
        "latin": "Wa ilal-arḍi kaifa suṭiḥat.",
        "translation": "Bagaimana pula bumi dihamparkan?"
      },
      {
        "number": 21,
        "arabic": "فَذَكِّرْۗ اِنَّمَآ اَنْتَ مُذَكِّرٌۙ",
        "latin": "Fa żakkir, innamā anta mużakkir(un).",
        "translation": "Maka, berilah peringatan karena sesungguhnya engkau (Nabi Muhammad) hanyalah pemberi peringatan."
      },
      {
        "number": 22,
        "arabic": "لَّسْتَ عَلَيْهِمْ بِمُصَيْطِرٍۙ",
        "latin": "Lasta ‘alaihim bimusaiṭir(in). ",
        "translation": "Engkau bukanlah orang yang berkuasa atas mereka."
      },
      {
        "number": 23,
        "arabic": "اِلَّا مَنْ تَوَلّٰى وَكَفَرَۙ",
        "latin": "Illā man tawallā wa kafar(a).",
        "translation": "Akan tetapi, orang yang berpaling dan kufur,"
      },
      {
        "number": 24,
        "arabic": "فَيُعَذِّبُهُ اللّٰهُ الْعَذَابَ الْاَكْبَرَۗ",
        "latin": "Fa yu‘ażżibuhullāhul-‘ażābal-akbar(a).",
        "translation": "Allah akan mengazabnya dengan azab yang paling besar."
      },
      {
        "number": 25,
        "arabic": "اِنَّ اِلَيْنَآ اِيَابَهُمْ",
        "latin": "Inna ilainā iyābahum.",
        "translation": "Sesungguhnya kepada Kamilah mereka kembali."
      },
      {
        "number": 26,
        "arabic": "ثُمَّ اِنَّ عَلَيْنَا حِسَابَهُمْ ࣖ",
        "latin": "Ṡumma inna ‘alainā ḥisābahum.",
        "translation": "Kemudian, sesungguhnya Kamilah yang berhak melakukan hisab (perhitungan) atas mereka."
      }
    ]
  },
  {
    "number": 89,
    "name": "Al-Fajr",
    "arabicName": "الفجر",
    "translationName": "Fajar",
    "revelationType": "Makkiyah",
    "numberOfVerses": 30,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/089.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَالْفَجْرِۙ",
        "latin": "Wal-fajr(i).",
        "translation": "Demi waktu fajar,"
      },
      {
        "number": 2,
        "arabic": "وَلَيَالٍ عَشْرٍۙ",
        "latin": "Wa layālin ‘asyr(in).",
        "translation": "demi malam yang sepuluh,"
      },
      {
        "number": 3,
        "arabic": "وَّالشَّفْعِ وَالْوَتْرِۙ",
        "latin": "Wasy-syaf‘i wal-watr(i).",
        "translation": "demi yang genap dan yang ganjil,"
      },
      {
        "number": 4,
        "arabic": "وَالَّيْلِ اِذَا يَسْرِۚ",
        "latin": "Wal-laili iżā yasr(i).",
        "translation": "dan demi malam apabila berlalu."
      },
      {
        "number": 5,
        "arabic": "هَلْ فِيْ ذٰلِكَ قَسَمٌ لِّذِيْ حِجْرٍۗ",
        "latin": "Hal fī żālika qasamul liżī ḥijr(in).",
        "translation": "Apakah pada yang demikian itu terdapat sumpah (yang dapat diterima) oleh (orang) yang berakal?"
      },
      {
        "number": 6,
        "arabic": "اَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍۖ",
        "latin": "Alam tara kaifa fa‘ala rabbuka bi‘ād(in).",
        "translation": "Tidakkah engkau (Nabi Muhammad) memperhatikan bagaimana Tuhanmu berbuat terhadap (kaum) ‘Ad,"
      },
      {
        "number": 7,
        "arabic": "اِرَمَ ذَاتِ الْعِمَادِۖ",
        "latin": "Irama żātil-‘imād(i).",
        "translation": "(yaitu) penduduk Iram (ibu kota kaum ‘Ad) yang mempunyai bangunan-bangunan yang tinggi"
      },
      {
        "number": 8,
        "arabic": "الَّتِيْ لَمْ يُخْلَقْ مِثْلُهَا فِى الْبِلَادِۖ",
        "latin": "Allatī lam yukhlaq miṡluhā fil-bilād(i).",
        "translation": "yang sebelumnya tidak pernah dibangun (suatu kota pun) seperti itu di negeri-negeri (lain)?"
      },
      {
        "number": 9,
        "arabic": "وَثَمُوْدَ الَّذِيْنَ جَابُوا الصَّخْرَ بِالْوَادِۖ",
        "latin": "Wa ṡamūdal-lażīna jābuṣ-ṣakhra bil-wād(i).",
        "translation": "(Tidakkah engkau perhatikan pula kaum) Samud yang memotong batu-batu besar di lembah"
      },
      {
        "number": 10,
        "arabic": "وَفِرْعَوْنَ ذِى الْاَوْتَادِۖ",
        "latin": "Wa fir‘auna żil-autād(i). ",
        "translation": "dan Fir‘aun yang mempunyai pasak-pasak (bangunan yang besar)"
      },
      {
        "number": 11,
        "arabic": "الَّذِيْنَ طَغَوْا فِى الْبِلَادِۖ",
        "latin": "Allażīna ṭagau fil-bilād(i).",
        "translation": "yang berbuat sewenang-wenang dalam negeri,"
      },
      {
        "number": 12,
        "arabic": "فَاَكْثَرُوْا فِيْهَا الْفَسَادَۖ",
        "latin": "Fa akṡarū fīhal-fasād(a).",
        "translation": "lalu banyak berbuat kerusakan di dalamnya (negeri itu),"
      },
      {
        "number": 13,
        "arabic": "فَصَبَّ عَلَيْهِمْ رَبُّكَ سَوْطَ عَذَابٍۖ",
        "latin": "Fa ṣabba ‘alaihim rabbuka sauṭa ‘ażāb(in).",
        "translation": "maka Tuhanmu menimpakan cemeti azab (yang dahsyat) kepada mereka?"
      },
      {
        "number": 14,
        "arabic": "اِنَّ رَبَّكَ لَبِالْمِرْصَادِۗ",
        "latin": "Inna rabbaka labil-mirṣād(i).",
        "translation": "Sesungguhnya Tuhanmu benar-benar mengawasi."
      },
      {
        "number": 15,
        "arabic": "فَاَمَّا الْاِنْسَانُ اِذَا مَا ابْتَلٰىهُ رَبُّهٗ فَاَكْرَمَهٗ وَنَعَّمَهٗۙ فَيَقُوْلُ رَبِّيْٓ اَكْرَمَنِۗ",
        "latin": "Fa ammal-insānu iżā mabtalāhu rabbuhū fa akramahū wa na‘‘amah(ū), fa yaqūlu rabbī akraman(i).",
        "translation": "Adapun manusia, apabila Tuhan mengujinya lalu memuliakannya dan memberinya kenikmatan, berkatalah dia, “Tuhanku telah memuliakanku.”"
      },
      {
        "number": 16,
        "arabic": "وَاَمَّآ اِذَا مَا ابْتَلٰىهُ فَقَدَرَ عَلَيْهِ رِزْقَهٗ ەۙ فَيَقُوْلُ رَبِّيْٓ اَهَانَنِۚ",
        "latin": "Wa ammā iżā mabtalāhu fa qadara ‘alaihi rizqah(ū), fa yaqūlu rabbī ahānan(i).",
        "translation": "Sementara itu, apabila Dia mengujinya lalu membatasi rezekinya, berkatalah dia, “Tuhanku telah menghinaku.”"
      },
      {
        "number": 17,
        "arabic": "كَلَّا بَلْ لَّا تُكْرِمُوْنَ الْيَتِيْمَۙ",
        "latin": "Kallā bal lā tukrimūnal-yatīm(a).",
        "translation": "Sekali-kali tidak! Sebaliknya, kamu tidak memuliakan anak yatim,"
      },
      {
        "number": 18,
        "arabic": "وَلَا تَحٰۤضُّوْنَ عَلٰى طَعَامِ الْمِسْكِيْنِۙ",
        "latin": "Wa lā taḥāḍḍūna ‘alā ṭa‘āmil-miskīn(i).",
        "translation": "tidak saling mengajak memberi makan orang miskin,"
      },
      {
        "number": 19,
        "arabic": "وَتَأْكُلُوْنَ التُّرَاثَ اَكْلًا لَّمًّاۙ",
        "latin": "Wa ta'kulūnat-turāṡa aklal lammā(n).",
        "translation": "memakan harta warisan dengan cara mencampurbaurkan (yang halal dan yang haram),"
      },
      {
        "number": 20,
        "arabic": "وَّتُحِبُّوْنَ الْمَالَ حُبًّا جَمًّاۗ",
        "latin": "Wa tuḥibbūnal-māla ḥubban jammā(n).",
        "translation": "dan mencintai harta dengan kecintaan yang berlebihan."
      },
      {
        "number": 21,
        "arabic": "كَلَّآ اِذَا دُكَّتِ الْاَرْضُ دَكًّا دَكًّاۙ",
        "latin": "Kallā iżā dukkatil-arḍu dakkan dakkā(n).",
        "translation": "Jangan sekali-kali begitu! Apabila bumi diguncangkan berturut-turut (berbenturan),"
      },
      {
        "number": 22,
        "arabic": "وَّجَاۤءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّاۚ",
        "latin": "Wa jā'a rabbuka wal-malaku ṣaffan ṣaffā(n).",
        "translation": "Tuhanmu datang, begitu pula para malaikat (yang datang) berbaris-baris,"
      },
      {
        "number": 23,
        "arabic": "وَجِايْۤءَ يَوْمَىِٕذٍۢ بِجَهَنَّمَۙ يَوْمَىِٕذٍ يَّتَذَكَّرُ الْاِنْسَانُ وَاَنّٰى لَهُ الذِّكْرٰىۗ",
        "latin": "Wa jī'a yauma'iżim bijahannam(a), yauma'iżiy yatażakkarul-insānu wa annā lahuż-żikrā.",
        "translation": "dan pada hari itu (neraka) Jahanam didatangkan, sadarlah manusia pada hari itu juga. Akan tetapi, bagaimana bisa kesadaran itu bermanfaat baginya?"
      },
      {
        "number": 24,
        "arabic": "يَقُوْلُ يٰلَيْتَنِيْ قَدَّمْتُ لِحَيَاتِيْۚ",
        "latin": "Yaqūlu yā laitanī qaddamtu liḥayātī.",
        "translation": "Dia berkata, “Oh, seandainya dahulu aku mengerjakan (kebajikan) untuk hidupku ini!”"
      },
      {
        "number": 25,
        "arabic": "فَيَوْمَىِٕذٍ لَّا يُعَذِّبُ عَذَابَهٗٓ اَحَدٌ ۙ",
        "latin": "Fa yauma'iżil lā yu‘ażżibu ‘ażābahū aḥad(un).",
        "translation": "Pada hari itu tidak ada seorang pun yang mampu mengazab (seadil) azab-Nya."
      },
      {
        "number": 26,
        "arabic": "وَّلَا يُوْثِقُ وَثَاقَهٗٓ اَحَدٌ ۗ",
        "latin": "Wa lā yūṡiqu waṡāqahū aḥad(un).",
        "translation": "Tidak ada seorang pun juga yang mampu mengikat (sekuat) ikatan-Nya."
      },
      {
        "number": 27,
        "arabic": "يٰٓاَيَّتُهَا النَّفْسُ الْمُطْمَىِٕنَّةُۙ",
        "latin": "Yā ayyatuhan-nafsul-muṭma'innah(tu).",
        "translation": "Wahai jiwa yang tenang,"
      },
      {
        "number": 28,
        "arabic": "ارْجِعِيْٓ اِلٰى رَبِّكِ رَاضِيَةً مَّرْضِيَّةً ۚ",
        "latin": "Irji‘ī ilā rabbiki rāḍiyatam marḍiyyah(tan).",
        "translation": "kembalilah kepada Tuhanmu dengan rida dan diridai."
      },
      {
        "number": 29,
        "arabic": "فَادْخُلِيْ فِيْ عِبٰدِيْۙ",
        "latin": "Fadkhuli fī ‘ibādī.",
        "translation": "Lalu, masuklah ke dalam golongan hamba-hamba-Ku"
      },
      {
        "number": 30,
        "arabic": "وَادْخُلِيْ جَنَّتِيْ ࣖࣖ",
        "latin": "Wadkhulī jannatī.",
        "translation": "dan masuklah ke dalam surga-Ku!"
      }
    ]
  },
  {
    "number": 90,
    "name": "Al-Balad",
    "arabicName": "البلد",
    "translationName": "Negeri",
    "revelationType": "Makkiyah",
    "numberOfVerses": 20,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/090.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "لَآ اُقْسِمُ بِهٰذَا الْبَلَدِۙ",
        "latin": "Lā uqsimu bihāżal-balad(i).",
        "translation": "Aku bersumpah demi negeri ini (Makkah),"
      },
      {
        "number": 2,
        "arabic": "وَاَنْتَ حِلٌّۢ بِهٰذَا الْبَلَدِۙ",
        "latin": "Wa anta ḥillum bihāżal-balad(i).",
        "translation": "sedangkan engkau (Nabi Muhammad) bertempat tinggal di negeri (Makkah) ini."
      },
      {
        "number": 3,
        "arabic": "وَوَالِدٍ وَّمَا وَلَدَۙ",
        "latin": "Wa wālidiw wa mā walad(a).",
        "translation": "(Aku juga bersumpah) demi bapak dan anaknya,"
      },
      {
        "number": 4,
        "arabic": "لَقَدْ خَلَقْنَا الْاِنْسَانَ فِيْ كَبَدٍۗ",
        "latin": "Laqad khalaqnal-insāna fī kabad(in).",
        "translation": "sungguh, Kami benar-benar telah menciptakan manusia dalam keadaan susah payah."
      },
      {
        "number": 5,
        "arabic": "اَيَحْسَبُ اَنْ لَّنْ يَّقْدِرَ عَلَيْهِ اَحَدٌ ۘ",
        "latin": "Ayaḥsabu allay yaqdira ‘alaihi  aḥad(un).",
        "translation": "Apakah dia (manusia) itu mengira bahwa tidak ada seorang pun yang berkuasa atasnya?"
      },
      {
        "number": 6,
        "arabic": "يَقُوْلُ اَهْلَكْتُ مَالًا لُّبَدًاۗ",
        "latin": "Yaqūlu ahlaktu mālal lubadā(n).",
        "translation": "Dia mengatakan, “Aku telah menghabiskan harta yang banyak.”"
      },
      {
        "number": 7,
        "arabic": "اَيَحْسَبُ اَنْ لَّمْ يَرَهٗٓ اَحَدٌۗ",
        "latin": "Ayaḥsabu allam yarahū aḥad(un).",
        "translation": "Apakah dia mengira bahwa tidak ada seorang pun yang melihatnya?"
      },
      {
        "number": 8,
        "arabic": "اَلَمْ نَجْعَلْ لَّهٗ عَيْنَيْنِۙ",
        "latin": "Alam naj‘al lahū ‘ainain(i).",
        "translation": "Bukankah Kami telah menjadikan untuknya sepasang mata,"
      },
      {
        "number": 9,
        "arabic": "وَلِسَانًا وَّشَفَتَيْنِۙ",
        "latin": "Wa lisānaw wa syafatain(i).",
        "translation": "lidah, dan sepasang bibir,"
      },
      {
        "number": 10,
        "arabic": "وَهَدَيْنٰهُ النَّجْدَيْنِۙ",
        "latin": "Wa hadaināhun-najdain(i).",
        "translation": "serta Kami juga telah menunjukkan kepadanya dua jalan (kebajikan dan kejahatan)?"
      },
      {
        "number": 11,
        "arabic": "فَلَا اقْتَحَمَ الْعَقَبَةَ ۖ",
        "latin": "Falaqtaḥamal-‘aqabah(ta).",
        "translation": "Maka, tidakkah sebaiknya dia menempuh jalan (kebajikan) yang mendaki dan sukar?"
      },
      {
        "number": 12,
        "arabic": "وَمَآ اَدْرٰىكَ مَا الْعَقَبَةُ ۗ",
        "latin": "Wa mā adrāka mal-‘aqabah(tu).",
        "translation": "Tahukah kamu apakah jalan yang mendaki dan sukar itu?"
      },
      {
        "number": 13,
        "arabic": "فَكُّ رَقَبَةٍۙ",
        "latin": "Fakku raqabah(tin).",
        "translation": "(Itulah upaya) melepaskan perbudakan"
      },
      {
        "number": 14,
        "arabic": "اَوْ اِطْعَامٌ فِيْ يَوْمٍ ذِيْ مَسْغَبَةٍۙ",
        "latin": "Au iṭ‘āmun fī yaumin żī masgabah(tin).",
        "translation": "atau memberi makan pada hari terjadi kelaparan"
      },
      {
        "number": 15,
        "arabic": "يَّتِيْمًا ذَا مَقْرَبَةٍۙ",
        "latin": "Yatīman żā maqrabah(tin).",
        "translation": "(kepada) anak yatim yang memiliki hubungan kekerabatan"
      },
      {
        "number": 16,
        "arabic": "اَوْ مِسْكِيْنًا ذَا مَتْرَبَةٍۗ",
        "latin": "Au miskīnan żā matrabah(tin).",
        "translation": "atau orang miskin yang sangat membutuhkan."
      },
      {
        "number": 17,
        "arabic": "ثُمَّ كَانَ مِنَ الَّذِيْنَ اٰمَنُوْا وَتَوَاصَوْا بِالصَّبْرِ وَتَوَاصَوْا بِالْمَرْحَمَةِۗ",
        "latin": "Ṡumma kāna minal-lażīna āmanū wa tawāṣau biṣ-ṣabri wa tawāṣau bil-marḥamah(ti). ",
        "translation": "Kemudian, dia juga termasuk orang-orang yang beriman dan saling berpesan untuk bersabar serta saling berpesan untuk berkasih sayang."
      },
      {
        "number": 18,
        "arabic": "اُولٰۤىِٕكَ اَصْحٰبُ الْمَيْمَنَةِۗ",
        "latin": "Ulā'ika aṣḥābul-maimanah(ti).",
        "translation": "Mereka itulah golongan kanan."
      },
      {
        "number": 19,
        "arabic": "وَالَّذِيْنَ كَفَرُوْا بِاٰيٰتِنَا هُمْ اَصْحٰبُ الْمَشْـَٔمَةِۗ",
        "latin": "Wal-lażīna kafarū bi'āyātinā hum aṣḥābul-masy'amah(ti).",
        "translation": "Adapun orang-orang yang kufur pada ayat-ayat Kami, merekalah golongan kiri."
      },
      {
        "number": 20,
        "arabic": "عَلَيْهِمْ نَارٌ مُّؤْصَدَةٌ ࣖ",
        "latin": "‘Alaihim nārum mu'ṣadah(tun).",
        "translation": "Mereka berada dalam neraka yang ditutup rapat."
      }
    ]
  },
  {
    "number": 91,
    "name": "Asy-Syams",
    "arabicName": "الشمس",
    "translationName": "Matahari",
    "revelationType": "Makkiyah",
    "numberOfVerses": 15,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/091.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَالشَّمْسِ وَضُحٰىهَاۖ",
        "latin": "Wasy-syamsi wa ḍuḥāhā.",
        "translation": "Demi matahari dan sinarnya pada waktu duha (ketika matahari naik sepenggalah),"
      },
      {
        "number": 2,
        "arabic": "وَالْقَمَرِ اِذَا تَلٰىهَاۖ",
        "latin": "Wal-qamari iżā talāhā.",
        "translation": "demi bulan saat mengiringinya,"
      },
      {
        "number": 3,
        "arabic": "وَالنَّهَارِ اِذَا جَلّٰىهَاۖ",
        "latin": "Wan-nahāri iżā jallāhā.",
        "translation": "demi siang saat menampakkannya,"
      },
      {
        "number": 4,
        "arabic": "وَالَّيْلِ اِذَا يَغْشٰىهَاۖ",
        "latin": "Wal-laili iżā yagsyāhā.",
        "translation": "demi malam saat menutupinya (gelap gulita),"
      },
      {
        "number": 5,
        "arabic": "وَالسَّمَاۤءِ وَمَا بَنٰىهَاۖ",
        "latin": "Was-samā'i wa mā banāhā.",
        "translation": "demi langit serta pembuatannya,"
      },
      {
        "number": 6,
        "arabic": "وَالْاَرْضِ وَمَا طَحٰىهَاۖ",
        "latin": "Wal-arḍi wa mā ṭaḥāhā.",
        "translation": "demi bumi serta penghamparannya,"
      },
      {
        "number": 7,
        "arabic": "وَنَفْسٍ وَّمَا سَوّٰىهَاۖ",
        "latin": "Wa nafsiw wa mā sawwāhā.",
        "translation": "dan demi jiwa serta penyempurnaan (ciptaan)-nya,"
      },
      {
        "number": 8,
        "arabic": "فَاَلْهَمَهَا فُجُوْرَهَا وَتَقْوٰىهَاۖ",
        "latin": "Fa alhamahā fujūrahā wa taqwāhā.",
        "translation": "lalu Dia mengilhamkan kepadanya (jalan) kejahatan dan ketakwaannya,"
      },
      {
        "number": 9,
        "arabic": "قَدْ اَفْلَحَ مَنْ زَكّٰىهَاۖ",
        "latin": "Qad aflaḥa man zakkāhā.",
        "translation": "sungguh beruntung orang yang menyucikannya (jiwa itu)"
      },
      {
        "number": 10,
        "arabic": "وَقَدْ خَابَ مَنْ دَسّٰىهَاۗ",
        "latin": "Wa qad khāba man dassāhā.",
        "translation": "dan sungguh rugi orang yang mengotorinya."
      },
      {
        "number": 11,
        "arabic": "كَذَّبَتْ ثَمُوْدُ بِطَغْوٰىهَآ  ۖ",
        "latin": "Każżabat ṡamūdu biṭagwāhā.",
        "translation": "(Kaum) Samud telah mendustakan (rasulnya) karena mereka melampaui batas"
      },
      {
        "number": 12,
        "arabic": "اِذِ انْۢبَعَثَ اَشْقٰىهَاۖ",
        "latin": "Iżimba‘aṡa asyqāhā.",
        "translation": "ketika orang yang paling celaka di antara mereka bangkit (untuk menyembelih unta betina Allah)."
      },
      {
        "number": 13,
        "arabic": "فَقَالَ لَهُمْ رَسُوْلُ اللّٰهِ نَاقَةَ اللّٰهِ وَسُقْيٰهَاۗ",
        "latin": "Fa qāla lahum rasūlullāhi nāqatallāhi wa suqyāhā.",
        "translation": "Rasul Allah (Saleh) lalu berkata kepada mereka, “(Biarkanlah) unta betina Allah ini beserta minumannya.”"
      },
      {
        "number": 14,
        "arabic": "فَكَذَّبُوْهُ فَعَقَرُوْهَاۖ فَدَمْدَمَ عَلَيْهِمْ رَبُّهُمْ بِذَنْۢبِهِمْ فَسَوّٰىهَاۖ",
        "latin": "Fa każżabūhu fa ‘aqarūhā fa damdama ‘alaihim rabbuhum biżambihim fa sawwāhā.",
        "translation": "Namun, mereka kemudian mendustakannya (Saleh) dan menyembelih (unta betina) itu. Maka, Tuhan membinasakan mereka karena dosa-dosanya, lalu meratakan mereka (dengan tanah)."
      },
      {
        "number": 15,
        "arabic": "وَلَا يَخَافُ عُقْبٰهَا ࣖ",
        "latin": "Wa lā yakhāfu ‘uqbāhā.",
        "translation": "Dia tidak takut terhadap akibatnya."
      }
    ]
  },
  {
    "number": 92,
    "name": "Al-Lail",
    "arabicName": "الّيل",
    "translationName": "Malam",
    "revelationType": "Makkiyah",
    "numberOfVerses": 21,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/092.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَالَّيْلِ اِذَا يَغْشٰىۙ",
        "latin": "Wal-laili iżā yagsyā.",
        "translation": "Demi malam apabila menutupi (cahaya siang),"
      },
      {
        "number": 2,
        "arabic": "وَالنَّهَارِ اِذَا تَجَلّٰىۙ",
        "latin": "Wan-nahāri iżā tajallā.",
        "translation": "demi siang apabila terang benderang,"
      },
      {
        "number": 3,
        "arabic": "وَمَا خَلَقَ الذَّكَرَ وَالْاُنْثٰىٓ ۙ",
        "latin": "Wa mā khalaqaż-żakara wal-unṡā.",
        "translation": "dan demi penciptaan laki-laki dan perempuan,"
      },
      {
        "number": 4,
        "arabic": "اِنَّ سَعْيَكُمْ لَشَتّٰىۗ",
        "latin": "Inna sa‘yakum lasyattā.",
        "translation": "sesungguhnya usahamu benar-benar beraneka ragam."
      },
      {
        "number": 5,
        "arabic": "فَاَمَّا مَنْ اَعْطٰى وَاتَّقٰىۙ",
        "latin": "Fa ammā man a‘ṭā wattaqā.",
        "translation": "Siapa yang memberikan (hartanya di jalan Allah) dan bertakwa"
      },
      {
        "number": 6,
        "arabic": "وَصَدَّقَ بِالْحُسْنٰىۙ",
        "latin": "Wa ṣaddaqa bil-ḥusnā.",
        "translation": "serta membenarkan adanya (balasan) yang terbaik (surga),"
      },
      {
        "number": 7,
        "arabic": "فَسَنُيَسِّرُهٗ لِلْيُسْرٰىۗ",
        "latin": "Fa sanuyassiruhū lil-yusrā.",
        "translation": "Kami akan melapangkan baginya jalan kemudahan (kebahagiaan)."
      },
      {
        "number": 8,
        "arabic": "وَاَمَّا مَنْۢ بَخِلَ وَاسْتَغْنٰىۙ",
        "latin": "Wa ammā man bakhila wastagnā.",
        "translation": "Adapun orang yang kikir dan merasa dirinya cukup (tidak perlu pertolongan Allah)"
      },
      {
        "number": 9,
        "arabic": "وَكَذَّبَ بِالْحُسْنٰىۙ",
        "latin": "Wa każżaba bil-ḥusnā.",
        "translation": "serta mendustakan (balasan) yang terbaik,"
      },
      {
        "number": 10,
        "arabic": "فَسَنُيَسِّرُهٗ لِلْعُسْرٰىۗ",
        "latin": "Fa sanuyassiruhū lil-‘usrā.   ",
        "translation": "Kami akan memudahkannya menuju jalan kesengsaraan."
      },
      {
        "number": 11,
        "arabic": "وَمَا يُغْنِيْ عَنْهُ مَالُهٗٓ اِذَا تَرَدّٰىٓۙ",
        "latin": "Wa mā yugnī ‘anhu māluhū iżā taraddā.",
        "translation": "Hartanya tidak bermanfaat baginya apabila dia telah binasa."
      },
      {
        "number": 12,
        "arabic": "اِنَّ عَلَيْنَا لَلْهُدٰىۖ",
        "latin": "Inna ‘alainā lal-hudā.",
        "translation": "Sesungguhnya Kamilah yang (berhak) memberi petunjuk."
      },
      {
        "number": 13,
        "arabic": "وَاِنَّ لَنَا لَلْاٰخِرَةَ وَالْاُوْلٰىۗ",
        "latin": "Wa inna lanā lal-ākhirata wal-ūlā.",
        "translation": "Sesungguhnya milik Kamilah akhirat dan dunia."
      },
      {
        "number": 14,
        "arabic": "فَاَنْذَرْتُكُمْ نَارًا تَلَظّٰىۚ",
        "latin": "Fa anżartukum nāran talaẓẓā.",
        "translation": "Aku memperingatkanmu dengan neraka yang menyala-nyala."
      },
      {
        "number": 15,
        "arabic": "لَا يَصْلٰىهَآ اِلَّا الْاَشْقَىۙ",
        "latin": "Lā yaṣlāhā illal-asyqā.",
        "translation": "Tidak masuk ke dalamnya kecuali orang yang paling celaka,"
      },
      {
        "number": 16,
        "arabic": "الَّذِيْ كَذَّبَ وَتَوَلّٰىۗ",
        "latin": "Allażī każżaba wa tawallā.",
        "translation": "yang mendustakan (kebenaran) dan berpaling (dari keimanan)."
      },
      {
        "number": 17,
        "arabic": "وَسَيُجَنَّبُهَا الْاَتْقَىۙ",
        "latin": "Wa sayujannabuhal-atqā.",
        "translation": "Akan dijauhkan darinya (neraka) orang yang paling bertakwa,"
      },
      {
        "number": 18,
        "arabic": "الَّذِيْ يُؤْتِيْ مَالَهٗ يَتَزَكّٰىۚ",
        "latin": "Allażī yu'tī mālahū yatazakkā.",
        "translation": "yang menginfakkan hartanya (di jalan Allah) untuk membersihkan (diri dari sifat kikir dan tamak)."
      },
      {
        "number": 19,
        "arabic": "وَمَا لِاَحَدٍ عِنْدَهٗ مِنْ نِّعْمَةٍ تُجْزٰىٓۙ",
        "latin": "Wa mā li'aḥadin ‘indahū min ni‘matin tujzā.",
        "translation": "Tidak ada suatu nikmat pun yang diberikan seseorang kepadanya yang harus dibalas,"
      },
      {
        "number": 20,
        "arabic": "اِلَّا ابْتِغَاۤءَ وَجْهِ رَبِّهِ الْاَعْلٰىۚ",
        "latin": "Illabtigā'a wajhi rabbihil-a‘lā.",
        "translation": "kecuali (dia memberikannya semata-mata) karena mencari keridaan Tuhannya Yang Maha Tinggi."
      },
      {
        "number": 21,
        "arabic": "وَلَسَوْفَ يَرْضٰى ࣖ",
        "latin": "Wa lasaufa yarḍā.",
        "translation": "Sungguh, kelak dia akan mendapatkan kepuasan (menerima balasan amalnya)."
      }
    ]
  },
  {
    "number": 93,
    "name": "Ad-Duha",
    "arabicName": "الضحى",
    "translationName": "Duha",
    "revelationType": "Makkiyah",
    "numberOfVerses": 11,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/093.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَالضُّحٰىۙ",
        "latin": "Waḍ-ḍuḥā.",
        "translation": "Demi waktu duha"
      },
      {
        "number": 2,
        "arabic": "وَالَّيْلِ اِذَا سَجٰىۙ",
        "latin": "Wal-laili iżā sajā.",
        "translation": "dan demi waktu malam apabila telah sunyi,"
      },
      {
        "number": 3,
        "arabic": "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلٰىۗ",
        "latin": "Mā wadda‘aka rabbuka wa mā qalā.",
        "translation": "Tuhanmu (Nabi Muhammad) tidak meninggalkan dan tidak (pula) membencimu."
      },
      {
        "number": 4,
        "arabic": "وَلَلْاٰخِرَةُ خَيْرٌ لَّكَ مِنَ الْاُوْلٰىۗ",
        "latin": "Wa lal-ākhiratu khairul laka minal-ūlā.",
        "translation": "Sungguh, akhirat itu lebih baik bagimu daripada yang permulaan (dunia)."
      },
      {
        "number": 5,
        "arabic": "وَلَسَوْفَ يُعْطِيْكَ رَبُّكَ فَتَرْضٰىۗ",
        "latin": "Wa lasaufa yu‘ṭīka rabbuka fa tarḍā.",
        "translation": "Sungguh, kelak (di akhirat nanti) Tuhanmu pasti memberikan karunia-Nya kepadamu sehingga engkau rida."
      },
      {
        "number": 6,
        "arabic": "اَلَمْ يَجِدْكَ يَتِيْمًا فَاٰوٰىۖ",
        "latin": "Alam yajidka yatīman fa āwā.",
        "translation": "Bukankah Dia mendapatimu sebagai seorang yatim, lalu Dia melindungi(-mu);"
      },
      {
        "number": 7,
        "arabic": "وَوَجَدَكَ ضَاۤلًّا فَهَدٰىۖ",
        "latin": "Wa wajadaka ḍāllan fa hadā.",
        "translation": "mendapatimu sebagai seorang yang tidak tahu (tentang syariat), lalu Dia memberimu petunjuk (wahyu);"
      },
      {
        "number": 8,
        "arabic": "وَوَجَدَكَ عَاۤىِٕلًا فَاَغْنٰىۗ",
        "latin": "Wa wajadaka ‘ā'ilan fa agnā.",
        "translation": "dan mendapatimu sebagai seorang yang fakir, lalu Dia memberimu kecukupan?"
      },
      {
        "number": 9,
        "arabic": "فَاَمَّا الْيَتِيْمَ فَلَا تَقْهَرْۗ",
        "latin": "Fa ammal-yatīma falā taqhar.",
        "translation": "Terhadap anak yatim, janganlah engkau berlaku sewenang-wenang."
      },
      {
        "number": 10,
        "arabic": "وَاَمَّا السَّاۤىِٕلَ فَلَا تَنْهَرْ",
        "latin": "Wa ammas-sā'ila falā tanhar.",
        "translation": "Terhadap orang yang meminta-minta, janganlah engkau menghardik."
      },
      {
        "number": 11,
        "arabic": "وَاَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ ࣖ",
        "latin": "Wa ammā bini‘mati rabbika fa ḥaddiṡ.",
        "translation": "Terhadap nikmat Tuhanmu, nyatakanlah (dengan bersyukur)."
      }
    ]
  },
  {
    "number": 94,
    "name": "Al-Insyirah",
    "arabicName": "الشرح",
    "translationName": "Lapang",
    "revelationType": "Makkiyah",
    "numberOfVerses": 8,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/094.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اَلَمْ نَشْرَحْ لَكَ صَدْرَكَۙ",
        "latin": "Alam nasyraḥ laka ṣadrak(a).",
        "translation": "Bukankah Kami telah melapangkan dadamu (Nabi Muhammad),"
      },
      {
        "number": 2,
        "arabic": "وَوَضَعْنَا عَنْكَ وِزْرَكَۙ",
        "latin": "Wa waḍa‘nā ‘anka wizrak(a).",
        "translation": "meringankan beban (tugas-tugas kenabian) darimu"
      },
      {
        "number": 3,
        "arabic": "الَّذِيْٓ اَنْقَضَ ظَهْرَكَۙ",
        "latin": "Allażī anqaḍa ẓahrak(a).",
        "translation": "yang memberatkan punggungmu,"
      },
      {
        "number": 4,
        "arabic": "وَرَفَعْنَا لَكَ ذِكْرَكَۗ",
        "latin": "Wa rafa‘nā laka żikrak(a).",
        "translation": "dan meninggikan (derajat)-mu (dengan selalu) menyebut-nyebut (nama)-mu?"
      },
      {
        "number": 5,
        "arabic": "فَاِنَّ مَعَ الْعُسْرِ يُسْرًاۙ",
        "latin": "Fa'inna ma‘al-‘usri yusrā(n).",
        "translation": "Maka, sesungguhnya beserta kesulitan ada kemudahan."
      },
      {
        "number": 6,
        "arabic": "اِنَّ مَعَ الْعُسْرِ يُسْرًاۗ",
        "latin": "Inna ma‘al-‘usri yusrā(n).",
        "translation": "Sesungguhnya beserta kesulitan ada kemudahan."
      },
      {
        "number": 7,
        "arabic": "فَاِذَا فَرَغْتَ فَانْصَبْۙ",
        "latin": "Fa iżā faragta fanṣab.",
        "translation": "Apabila engkau telah selesai (dengan suatu kebajikan), teruslah bekerja keras (untuk kebajikan yang lain)"
      },
      {
        "number": 8,
        "arabic": "وَاِلٰى رَبِّكَ فَارْغَبْ ࣖ",
        "latin": "Wa ilā rabbika fargab.",
        "translation": "dan hanya kepada Tuhanmu berharaplah!"
      }
    ]
  },
  {
    "number": 95,
    "name": "At-Tin",
    "arabicName": "التين",
    "translationName": "Buah Tin",
    "revelationType": "Makkiyah",
    "numberOfVerses": 8,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/095.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَالتِّيْنِ وَالزَّيْتُوْنِۙ",
        "latin": "Wat-tīni waz-zaitūn(i).",
        "translation": "Demi (buah) tin dan (buah) zaitun,"
      },
      {
        "number": 2,
        "arabic": "وَطُوْرِ سِيْنِيْنَۙ",
        "latin": "Wa ṭūri sīnīn(a).",
        "translation": "demi gunung Sinai,"
      },
      {
        "number": 3,
        "arabic": "وَهٰذَا الْبَلَدِ الْاَمِيْنِۙ",
        "latin": "Wa hāżal-baladil-amīn(i).",
        "translation": "dan demi negeri (Makkah) yang aman ini,"
      },
      {
        "number": 4,
        "arabic": "لَقَدْ خَلَقْنَا الْاِنْسَانَ فِيْٓ اَحْسَنِ تَقْوِيْمٍۖ",
        "latin": "Laqad khalaqnal-insāna fī aḥsani taqwīm(in).",
        "translation": "sungguh, Kami benar-benar telah menciptakan manusia dalam bentuk yang sebaik-baiknya."
      },
      {
        "number": 5,
        "arabic": "ثُمَّ رَدَدْنٰهُ اَسْفَلَ سٰفِلِيْنَۙ",
        "latin": "Ṡumma radadnāhu asfala sāfilīn(a).",
        "translation": "Kemudian, kami kembalikan dia ke tempat yang serendah-rendahnya,"
      },
      {
        "number": 6,
        "arabic": "اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ فَلَهُمْ اَجْرٌ غَيْرُ مَمْنُوْنٍۗ",
        "latin": "Illal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti falahum ajrun gairu mamnūn(in).",
        "translation": "kecuali orang-orang yang beriman dan mengerjakan kebajikan. Maka, mereka akan mendapat pahala yang tidak putus-putusnya."
      },
      {
        "number": 7,
        "arabic": "فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّيْنِۗ",
        "latin": "Famā yukażżibuka ba‘du bid-dīn(i).",
        "translation": "Maka, apa alasanmu (wahai orang kafir) mendustakan hari Pembalasan setelah (adanya bukti-bukti) itu?"
      },
      {
        "number": 8,
        "arabic": "اَلَيْسَ اللّٰهُ بِاَحْكَمِ الْحٰكِمِيْنَ ࣖ",
        "latin": "Alaisallāhu bi'aḥkamil-ḥākimīn(a).",
        "translation": "Bukankah Allah hakim yang paling adil?"
      }
    ]
  },
  {
    "number": 96,
    "name": "Al-'Alaq",
    "arabicName": "العلق",
    "translationName": "Segumpal Darah",
    "revelationType": "Makkiyah",
    "numberOfVerses": 19,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/096.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِيْ خَلَقَۚ",
        "latin": "Iqra' bismi rabbikal-lażī khalaq(a).",
        "translation": "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan!"
      },
      {
        "number": 2,
        "arabic": "خَلَقَ الْاِنْسَانَ مِنْ عَلَقٍۚ",
        "latin": "Khalaqal-insāna min ‘alaq(in).",
        "translation": "Dia menciptakan manusia dari segumpal darah."
      },
      {
        "number": 3,
        "arabic": "اِقْرَأْ وَرَبُّكَ الْاَكْرَمُۙ",
        "latin": "Iqra' wa rabbukal-akram(u).",
        "translation": "Bacalah! Tuhanmulah Yang Maha Mulia,"
      },
      {
        "number": 4,
        "arabic": "الَّذِيْ عَلَّمَ بِالْقَلَمِۙ",
        "latin": "Allażī ‘allama bil-qalam(i).",
        "translation": "yang mengajar (manusia) dengan pena."
      },
      {
        "number": 5,
        "arabic": "عَلَّمَ الْاِنْسَانَ مَا لَمْ يَعْلَمْۗ",
        "latin": "‘Allamal-insāna mā lam ya‘lam.",
        "translation": "Dia mengajarkan manusia apa yang tidak diketahuinya."
      },
      {
        "number": 6,
        "arabic": "كَلَّآ اِنَّ الْاِنْسَانَ لَيَطْغٰىٓ ۙ",
        "latin": "Kallā innal-insāna layaṭgā.",
        "translation": "Sekali-kali tidak! Sesungguhnya manusia itu benar-benar melampaui batas"
      },
      {
        "number": 7,
        "arabic": "اَنْ رَّاٰهُ اسْتَغْنٰىۗ",
        "latin": "Ar ra'āhustagnā.",
        "translation": "ketika melihat dirinya serba berkecukupan."
      },
      {
        "number": 8,
        "arabic": "اِنَّ اِلٰى رَبِّكَ الرُّجْعٰىۗ",
        "latin": "Inna ilā rabbikar-ruj‘ā.",
        "translation": "Sesungguhnya hanya kepada Tuhanmulah tempat kembali(-mu)."
      },
      {
        "number": 9,
        "arabic": "اَرَاَيْتَ الَّذِيْ يَنْهٰىۙ",
        "latin": "Ara'aital-lażī yanhā.",
        "translation": "Tahukah kamu tentang orang yang melarang"
      },
      {
        "number": 10,
        "arabic": "عَبْدًا اِذَا صَلّٰىۗ",
        "latin": "‘Abdan iżā ṣallā.",
        "translation": "seorang hamba ketika dia melaksanakan salat?"
      },
      {
        "number": 11,
        "arabic": "اَرَاَيْتَ اِنْ كَانَ عَلَى الْهُدٰىٓۙ",
        "latin": "Ara'aita in kāna ‘alal-hudā.",
        "translation": "Bagaimana pendapatmu kalau terbukti dia berada di dalam kebenaran"
      },
      {
        "number": 12,
        "arabic": "اَوْ اَمَرَ بِالتَّقْوٰىۗ",
        "latin": "Au amara bit-taqwā. ",
        "translation": "atau dia menyuruh bertakwa (kepada Allah)?"
      },
      {
        "number": 13,
        "arabic": "اَرَاَيْتَ اِنْ كَذَّبَ وَتَوَلّٰىۗ",
        "latin": "Ara'aita in każżaba wa tawallā.",
        "translation": "Bagaimana pendapatmu kalau dia mendustakan (kebenaran) dan berpaling (dari keimanan)?"
      },
      {
        "number": 14,
        "arabic": "اَلَمْ يَعْلَمْ بِاَنَّ اللّٰهَ يَرٰىۗ",
        "latin": "Alam ya‘lam bi'annallāha yarā.",
        "translation": "Tidakkah dia mengetahui bahwa sesungguhnya Allah melihat (segala perbuatannya)?"
      },
      {
        "number": 15,
        "arabic": "كَلَّا لَىِٕنْ لَّمْ يَنْتَهِ ەۙ لَنَسْفَعًاۢ بِالنَّاصِيَةِۙ",
        "latin": "Kallā la'il lam yantah(i), lanasfa‘am bin-nāṣiyah(ti).",
        "translation": "Sekali-kali tidak! Sungguh, jika dia tidak berhenti (berbuat demikian), niscaya Kami tarik ubun-ubunnya (ke dalam neraka),"
      },
      {
        "number": 16,
        "arabic": "نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍۚ",
        "latin": "Nāṣiyatin kāżibatin khāṭi'ah(tin).",
        "translation": "(yaitu) ubun-ubun orang yang mendustakan (kebenaran) dan durhaka."
      },
      {
        "number": 17,
        "arabic": "فَلْيَدْعُ نَادِيَهٗۙ",
        "latin": "Falyad‘u nādiyah(ū).",
        "translation": "Biarlah dia memanggil golongannya (untuk menolongnya)."
      },
      {
        "number": 18,
        "arabic": "سَنَدْعُ الزَّبَانِيَةَۙ",
        "latin": "Sanad‘uz-zabāniyah(ta).",
        "translation": "Kelak Kami akan memanggil (Malaikat) Zabaniah (penyiksa orang-orang yang berdosa)."
      },
      {
        "number": 19,
        "arabic": "كَلَّاۗ  لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِبْ ۩ ࣖ",
        "latin": "Kallā, lā tuṭi‘hu wasjud waqtarib.",
        "translation": "Sekali-kali tidak! Janganlah patuh kepadanya, (tetapi) sujud dan mendekatlah (kepada Allah)."
      }
    ]
  },
  {
    "number": 97,
    "name": "Al-Qadr",
    "arabicName": "القدر",
    "translationName": "Kemuliaan",
    "revelationType": "Makkiyah",
    "numberOfVerses": 5,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/097.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اِنَّآ اَنْزَلْنٰهُ فِيْ لَيْلَةِ الْقَدْرِ ",
        "latin": "Innā anzalnāhu fī lailatil-qadr(i).",
        "translation": "Sesungguhnya Kami telah menurunkannya (Al-Qur’an) pada Lailatulqadar."
      },
      {
        "number": 2,
        "arabic": "وَمَآ اَدْرٰىكَ مَا لَيْلَةُ الْقَدْرِۗ",
        "latin": "Wa mā adrāka mā lailatul-qadr(i).",
        "translation": "Tahukah kamu apakah Lailatulqadar itu?"
      },
      {
        "number": 3,
        "arabic": "لَيْلَةُ الْقَدْرِ ەۙ خَيْرٌ مِّنْ اَلْفِ شَهْرٍۗ",
        "latin": "Lailatul-qadri khairum min alfi syahr(in).",
        "translation": "Lailatulqadar itu lebih baik daripada seribu bulan."
      },
      {
        "number": 4,
        "arabic": "تَنَزَّلُ الْمَلٰۤىِٕكَةُ وَالرُّوْحُ فِيْهَا بِاِذْنِ رَبِّهِمْۚ مِنْ كُلِّ اَمْرٍۛ",
        "latin": "Tanazzalul-malā'ikatu war rūḥu fīhā bi'iżni rabbihim min kulli amr(in).",
        "translation": "Pada malam itu turun para malaikat dan Rūḥ (Jibril) dengan izin Tuhannya untuk mengatur semua urusan."
      },
      {
        "number": 5,
        "arabic": "سَلٰمٌ ۛهِيَ حَتّٰى مَطْلَعِ الْفَجْرِ ࣖ",
        "latin": "Salāmun hiya ḥattā maṭla‘il-fajr(i). ",
        "translation": "Sejahteralah (malam) itu sampai terbit fajar."
      }
    ]
  },
  {
    "number": 98,
    "name": "Al-Bayyinah",
    "arabicName": "البيّنة",
    "translationName": "Bukti Nyata",
    "revelationType": "Madaniyah",
    "numberOfVerses": 8,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/098.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "لَمْ يَكُنِ الَّذِيْنَ كَفَرُوْا مِنْ اَهْلِ الْكِتٰبِ وَالْمُشْرِكِيْنَ مُنْفَكِّيْنَ حَتّٰى تَأْتِيَهُمُ الْبَيِّنَةُۙ",
        "latin": "Lam yakunil-lażīna kafarū min ahlil-kitābi wal-musyrikīna munfakkīna ḥattā ta'tiyahumul-bayyinah(tu).",
        "translation": "Orang-orang yang kufur dari golongan Ahlulkitab dan orang-orang musyrik tidak akan meninggalkan (kekufuran mereka) sampai datang kepada mereka bukti yang nyata,"
      },
      {
        "number": 2,
        "arabic": "رَسُوْلٌ مِّنَ اللّٰهِ يَتْلُوْا صُحُفًا مُّطَهَّرَةًۙ",
        "latin": "Rasūlum minallāhi yatlū ṣuḥufam muṭahharah(tan).",
        "translation": "(yaitu) seorang Rasul dari Allah (Nabi Muhammad) yang membacakan lembaran-lembaran suci (Al-Qur’an)"
      },
      {
        "number": 3,
        "arabic": "فِيْهَا كُتُبٌ قَيِّمَةٌ  ۗ",
        "latin": "Fīhā kutubun qayyimah(tun).",
        "translation": "yang di dalamnya terdapat (isi) kitab-kitab yang lurus (benar)."
      },
      {
        "number": 4,
        "arabic": "وَمَا تَفَرَّقَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ اِلَّا مِنْۢ بَعْدِ مَا جَاۤءَتْهُمُ الْبَيِّنَةُ ۗ",
        "latin": "Wa mā tafarraqal-lażīna ūtul-kitāba illā mim ba‘di mā jā'athumul-bayyinah(tu).",
        "translation": "Tidaklah terpecah-belah orang-orang Ahlulkitab, melainkan setelah datang kepada mereka bukti yang nyata."
      },
      {
        "number": 5,
        "arabic": "وَمَآ اُمِرُوْٓا اِلَّا لِيَعْبُدُوا اللّٰهَ مُخْلِصِيْنَ لَهُ الدِّيْنَ ەۙ حُنَفَاۤءَ وَيُقِيْمُوا الصَّلٰوةَ وَيُؤْتُوا الزَّكٰوةَ وَذٰلِكَ دِيْنُ الْقَيِّمَةِۗ",
        "latin": "Wa mā umirū illā liya‘budullāha mukhliṣīna lahud-dīn(a), ḥunafā'a wa yuqīmuṣ-ṣalāta wa yu'tuz-zakāta  wa żālika dīnul-qayyimah(ti).",
        "translation": "Mereka tidak diperintah, kecuali untuk menyembah Allah dengan mengikhlaskan ketaatan kepada-Nya lagi hanif (istikamah), melaksanakan salat, dan menunaikan zakat. Itulah agama yang lurus (benar)."
      },
      {
        "number": 6,
        "arabic": "اِنَّ الَّذِيْنَ كَفَرُوْا مِنْ اَهْلِ الْكِتٰبِ وَالْمُشْرِكِيْنَ فِيْ نَارِ جَهَنَّمَ خٰلِدِيْنَ فِيْهَاۗ اُولٰۤىِٕكَ هُمْ شَرُّ الْبَرِيَّةِۗ",
        "latin": "Innal-lażīna kafarū min ahlil-kitābi wal-musyrikīna fī nāri jahannama khālidīna fīhā, ulā'ika hum syarrul-bariyyah(ti).",
        "translation": "Sesungguhnya orang-orang yang kufur dari golongan Ahlulkitab dan orang-orang musyrik (akan masuk) neraka Jahanam. Mereka kekal di dalamnya. Mereka itulah seburuk-buruk makhluk."
      },
      {
        "number": 7,
        "arabic": "اِنَّ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ اُولٰۤىِٕكَ هُمْ خَيْرُ الْبَرِيَّةِۗ",
        "latin": "Innal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti ulā'ika hum khairul-bariyyah(ti).",
        "translation": "Sesungguhnya orang-orang yang beriman dan mengerjakan kebajikan, mereka itulah sebaik-baik makhluk."
      },
      {
        "number": 8,
        "arabic": "جَزَاۤؤُهُمْ عِنْدَ رَبِّهِمْ جَنّٰتُ عَدْنٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَآ اَبَدًا ۗرَضِيَ اللّٰهُ عَنْهُمْ وَرَضُوْا عَنْهُ ۗ ذٰلِكَ لِمَنْ خَشِيَ رَبَّهٗ ࣖ",
        "latin": "Jazā'uhum ‘inda rabbihim jannātu ‘adnin tajrī min taḥtihal-anhāru khālidīna fīhā abadā(n), raḍiyallāhu ‘anhum wa raḍū ‘anh(u), żālika liman khasyiya rabbah(ū).",
        "translation": "Balasan mereka di sisi Tuhannya adalah surga ‘Adn yang mengalir di bawahnya sungai-sungai. Mereka kekal di dalamnya selama-lamanya. Allah rida terhadap mereka dan mereka pun rida kepada-Nya. Itu adalah (balasan) bagi orang yang takut kepada Tuhannya."
      }
    ]
  },
  {
    "number": 99,
    "name": "Az-Zalzalah",
    "arabicName": "الزلزلة",
    "translationName": "Guncangan",
    "revelationType": "Madaniyah",
    "numberOfVerses": 8,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/099.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اِذَا زُلْزِلَتِ الْاَرْضُ زِلْزَالَهَاۙ",
        "latin": "Iżā zulzilatil-arḍu zilzālahā.",
        "translation": "Apabila bumi diguncangkan dengan guncangan yang dahsyat,"
      },
      {
        "number": 2,
        "arabic": "وَاَخْرَجَتِ الْاَرْضُ اَثْقَالَهَاۙ",
        "latin": "Wa akhrajatil-arḍu aṡqālahā.",
        "translation": "bumi mengeluarkan isi perutnya,"
      },
      {
        "number": 3,
        "arabic": "وَقَالَ الْاِنْسَانُ مَا لَهَاۚ",
        "latin": "Wa qālal-insānu mā lahā.",
        "translation": "dan manusia bertanya, “Apa yang terjadi dengannya (bumi)?”"
      },
      {
        "number": 4,
        "arabic": "يَوْمَىِٕذٍ تُحَدِّثُ اَخْبَارَهَاۙ",
        "latin": "Yauma'iżin tuḥaddiṡu akhbārahā.",
        "translation": "Pada hari itu (bumi) menyampaikan berita (tentang apa yang diperbuat manusia di atasnya)"
      },
      {
        "number": 5,
        "arabic": "بِاَنَّ رَبَّكَ اَوْحٰى لَهَاۗ",
        "latin": "Bi'anna rabbaka auḥā lahā.",
        "translation": "karena sesungguhnya Tuhanmu telah memerintahkan (yang demikian itu) kepadanya."
      },
      {
        "number": 6,
        "arabic": "يَوْمَىِٕذٍ يَّصْدُرُ النَّاسُ اَشْتَاتًا ەۙ لِّيُرَوْا اَعْمَالَهُمْۗ",
        "latin": "Yauma'iżiy yaṣdurun-nāsu asytātā(n), liyurau a‘mālahum.",
        "translation": "Pada hari itu manusia keluar (dari kuburnya) dalam keadaan terpencar untuk diperlihatkan kepada mereka (balasan) semua perbuatan mereka."
      },
      {
        "number": 7,
        "arabic": "فَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهٗۚ",
        "latin": "Famay ya‘mal miṡqāla żarratin khairay yarah(ū).",
        "translation": "Siapa yang mengerjakan kebaikan seberat zarah, dia akan melihat (balasan)-nya."
      },
      {
        "number": 8,
        "arabic": "وَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَّرَهٗ ࣖ",
        "latin": "Wa may ya‘mal miṡqāla żarratin syarray yarah(ū).",
        "translation": "Siapa yang mengerjakan kejahatan seberat zarah, dia akan melihat (balasan)-nya."
      }
    ]
  },
  {
    "number": 100,
    "name": "Al-'Adiyat",
    "arabicName": "العٰديٰت",
    "translationName": "Kuda Yang Berlari Kencang",
    "revelationType": "Makkiyah",
    "numberOfVerses": 11,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/100.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَالْعٰدِيٰتِ ضَبْحًاۙ ",
        "latin": "Wal-‘ādiyāti ḍabḥā(n). ",
        "translation": "Demi kuda-kuda perang yang berlari kencang terengah-engah,"
      },
      {
        "number": 2,
        "arabic": "فَالْمُوْرِيٰتِ قَدْحًاۙ",
        "latin": "Fal-mūriyāti qadḥā(n).",
        "translation": "yang memercikkan bunga api (dengan entakan kakinya),"
      },
      {
        "number": 3,
        "arabic": "فَالْمُغِيْرٰتِ صُبْحًاۙ",
        "latin": "Fal-mugīrāti ṣubḥā(n).",
        "translation": "yang menyerang (dengan tiba-tiba) pada waktu pagi"
      },
      {
        "number": 4,
        "arabic": "فَاَثَرْنَ بِهٖ نَقْعًاۙ",
        "latin": "Fa'aṡarna bihī naq‘ā(n).",
        "translation": "sehingga menerbangkan debu,"
      },
      {
        "number": 5,
        "arabic": "فَوَسَطْنَ بِهٖ جَمْعًاۙ",
        "latin": "Fawasaṭna bihī jam‘ā(n).",
        "translation": "lalu menyerbu ke tengah-tengah kumpulan musuh,"
      },
      {
        "number": 6,
        "arabic": "اِنَّ الْاِنْسَانَ لِرَبِّهٖ لَكَنُوْدٌ ۚ",
        "latin": "Innal-insāna lirabbihī lakanūd(un).",
        "translation": "sesungguhnya manusia itu sangatlah ingkar kepada Tuhannya."
      },
      {
        "number": 7,
        "arabic": "وَاِنَّهٗ عَلٰى ذٰلِكَ لَشَهِيْدٌۚ",
        "latin": "Wa innahū ‘alā żālika lasyahīd(un).",
        "translation": "Sesungguhnya dia benar-benar menjadi saksi atas hal itu (keingkarannya)."
      },
      {
        "number": 8,
        "arabic": "وَاِنَّهٗ لِحُبِّ الْخَيْرِ لَشَدِيْدٌ ۗ",
        "latin": "Wa innahū liḥubbil-khairi lasyadīd(un).",
        "translation": "Sesungguhnya cintanya pada harta benar-benar berlebihan."
      },
      {
        "number": 9,
        "arabic": "۞ اَفَلَا يَعْلَمُ اِذَا بُعْثِرَ مَا فِى الْقُبُوْرِۙ",
        "latin": "Afalā ya‘lamu iżā bu‘ṡira mā fil-qubūr(i).",
        "translation": "Maka, tidakkah dia mengetahui (apa yang akan dialaminya) apabila dikeluarkan apa yang ada di dalam kubur"
      },
      {
        "number": 10,
        "arabic": "وَحُصِّلَ مَا فِى الصُّدُوْرِۙ",
        "latin": "Wa ḥuṣṣila mā fiṣ-ṣudūr(i).",
        "translation": "dan ditampakkan apa yang tersimpan di dalam dada?"
      },
      {
        "number": 11,
        "arabic": "اِنَّ رَبَّهُمْ بِهِمْ يَوْمَىِٕذٍ لَّخَبِيْرٌ ࣖ",
        "latin": "Inna rabbahum bihim yauma'iżil lakhabīr(un).",
        "translation": "Sesungguhnya Tuhan mereka pada hari itu benar-benar Maha Teliti terhadap (keadaan) mereka."
      }
    ]
  },
  {
    "number": 101,
    "name": "Al-Qari'ah",
    "arabicName": "القارعة",
    "translationName": "Hari Kiamat",
    "revelationType": "Makkiyah",
    "numberOfVerses": 11,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/101.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اَلْقَارِعَةُۙ",
        "latin": "Al-qāri‘ah(tu).",
        "translation": "Al-Qāri‘ah (hari Kiamat yang menggetarkan)."
      },
      {
        "number": 2,
        "arabic": "مَا الْقَارِعَةُ ۚ",
        "latin": "Mal-qāri‘ah(tu).",
        "translation": "Apakah al-Qāri‘ah itu?"
      },
      {
        "number": 3,
        "arabic": "وَمَآ اَدْرٰىكَ مَا الْقَارِعَةُ ۗ",
        "latin": "Wa mā adrāka mal-qāri‘ah(tu).",
        "translation": "Tahukah kamu apakah al-Qāri‘ah itu?"
      },
      {
        "number": 4,
        "arabic": "يَوْمَ يَكُوْنُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوْثِۙ",
        "latin": "Yauma yakūnun-nāsu kal-farāsyil-mabṡūṡ(i).",
        "translation": "Pada hari itu manusia seperti laron yang beterbangan"
      },
      {
        "number": 5,
        "arabic": "وَتَكُوْنُ الْجِبَالُ كَالْعِهْنِ الْمَنْفُوْشِۗ",
        "latin": "Wa takūnul-jibālu kal-‘ihnil-manfūsy(i).",
        "translation": "dan gunung-gunung seperti bulu yang berhamburan."
      },
      {
        "number": 6,
        "arabic": "فَاَمَّا مَنْ ثَقُلَتْ مَوَازِيْنُهٗۙ ",
        "latin": "Fa ammā man ṡaqulat mawāzīnuh(ū).",
        "translation": "Siapa yang berat timbangan (kebaikan)-nya,"
      },
      {
        "number": 7,
        "arabic": "فَهُوَ فِيْ عِيْشَةٍ رَّاضِيَةٍۗ",
        "latin": "Fa huwa fī ‘īsyatir rāḍiyah(tin).",
        "translation": "dia berada dalam kehidupan yang menyenangkan."
      },
      {
        "number": 8,
        "arabic": "وَاَمَّا مَنْ خَفَّتْ مَوَازِيْنُهٗۙ",
        "latin": "Wa ammā man khaffat mawāzīnuh(ū).",
        "translation": "Adapun orang yang ringan timbangan (kebaikan)-nya,"
      },
      {
        "number": 9,
        "arabic": "فَاُمُّهٗ هَاوِيَةٌ  ۗ",
        "latin": "Fa ummuhū hāwiyah(tun).",
        "translation": "tempat kembalinya adalah (neraka) Hawiyah."
      },
      {
        "number": 10,
        "arabic": "وَمَآ اَدْرٰىكَ مَا هِيَهْۗ",
        "latin": "Wa mā adrāka mā hiyah.",
        "translation": "Tahukah kamu apakah (neraka Hawiyah) itu?"
      },
      {
        "number": 11,
        "arabic": "نَارٌ حَامِيَةٌ ࣖ",
        "latin": "Nārun ḥāmiyah(tun).",
        "translation": "(Ia adalah) api yang sangat panas."
      }
    ]
  },
  {
    "number": 102,
    "name": "At-Takasur",
    "arabicName": "التكاثر",
    "translationName": "Bermegah-Megahan",
    "revelationType": "Makkiyah",
    "numberOfVerses": 8,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/102.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اَلْهٰىكُمُ التَّكَاثُرُۙ",
        "latin": "Alhākumut-takāṡur(u). ",
        "translation": "Berbangga-bangga dalam memperbanyak (dunia) telah melalaikanmu"
      },
      {
        "number": 2,
        "arabic": "حَتّٰى زُرْتُمُ الْمَقَابِرَۗ",
        "latin": "Ḥattā zurtumul-maqābir(a).",
        "translation": "sampai kamu masuk ke dalam kubur."
      },
      {
        "number": 3,
        "arabic": "كَلَّا سَوْفَ تَعْلَمُوْنَۙ",
        "latin": "Kallā saufa ta‘lamūn(a).",
        "translation": "Sekali-kali tidak! Kelak kamu akan mengetahui (akibat perbuatanmu itu)."
      },
      {
        "number": 4,
        "arabic": "ثُمَّ كَلَّا سَوْفَ تَعْلَمُوْنَ ",
        "latin": "Ṡumma kallā saufa ta‘lamūn(a).",
        "translation": "Sekali-kali tidak (jangan melakukan itu)! Kelak kamu akan mengetahui (akibatnya)."
      },
      {
        "number": 5,
        "arabic": "كَلَّا لَوْ تَعْلَمُوْنَ عِلْمَ الْيَقِيْنِۗ",
        "latin": "Kallā lau ta‘lamūna ‘ilmal-yaqīn(i).",
        "translation": "Sekali-kali tidak (jangan melakukan itu)! Sekiranya kamu mengetahui dengan pasti, (niscaya kamu tidak akan melakukannya)."
      },
      {
        "number": 6,
        "arabic": "لَتَرَوُنَّ الْجَحِيْمَۙ",
        "latin": "Latarawunnal-jaḥīm(a).",
        "translation": "Pasti kamu benar-benar akan melihat (neraka) Jahim."
      },
      {
        "number": 7,
        "arabic": "ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِيْنِۙ",
        "latin": "Ṡumma latarawunnahā ‘ainal-yaqīn(i).",
        "translation": "Kemudian, kamu pasti benar-benar akan melihatnya dengan ainulyakin."
      },
      {
        "number": 8,
        "arabic": "ثُمَّ لَتُسْـَٔلُنَّ يَوْمَىِٕذٍ عَنِ النَّعِيْمِ ࣖ",
        "latin": "Ṡumma latus'alunna yauma'iżin ‘anin-na‘īm(i).",
        "translation": "Kemudian, kamu pasti benar-benar akan ditanya pada hari itu tentang kenikmatan (yang megah di dunia itu)."
      }
    ]
  },
  {
    "number": 103,
    "name": "Al-'Asr",
    "arabicName": "العصر",
    "translationName": "Masa",
    "revelationType": "Makkiyah",
    "numberOfVerses": 3,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/103.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَالْعَصْرِۙ",
        "latin": "Wal-‘aṣr(i).",
        "translation": "Demi masa,"
      },
      {
        "number": 2,
        "arabic": "اِنَّ الْاِنْسَانَ لَفِيْ خُسْرٍۙ",
        "latin": "Innal-insāna lafī khusr(in).",
        "translation": "sesungguhnya manusia benar-benar berada dalam kerugian,"
      },
      {
        "number": 3,
        "arabic": "اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ وَتَوَاصَوْا بِالْحَقِّ ەۙ وَتَوَاصَوْا بِالصَّبْرِ ࣖ",
        "latin": "Illal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti wa tawāṣau bil-ḥaqq(i), wa tawāṣau biṣ-ṣabr(i).",
        "translation": "kecuali orang-orang yang beriman dan beramal saleh serta saling menasihati untuk kebenaran dan kesabaran."
      }
    ]
  },
  {
    "number": 104,
    "name": "Al-Humazah",
    "arabicName": "الهمزة",
    "translationName": "Pengumpat",
    "revelationType": "Makkiyah",
    "numberOfVerses": 9,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/104.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍۙ",
        "latin": "Wailul likulli humazatil-lumazah(tin).",
        "translation": "Celakalah setiap pengumpat lagi pencela"
      },
      {
        "number": 2,
        "arabic": " ۨالَّذِيْ جَمَعَ مَالًا وَّعَدَّدَهٗۙ",
        "latin": "Allażī jama‘a mālaw wa ‘addadah(ū).",
        "translation": "yang mengumpulkan harta dan menghitung-hitungnya."
      },
      {
        "number": 3,
        "arabic": "يَحْسَبُ اَنَّ مَالَهٗٓ اَخْلَدَهٗۚ",
        "latin": "Yaḥsabu anna mālahū akhladah(ū).",
        "translation": "Dia (manusia) mengira bahwa hartanya dapat mengekalkannya."
      },
      {
        "number": 4,
        "arabic": "كَلَّا لَيُنْۢبَذَنَّ فِى الْحُطَمَةِۖ",
        "latin": "Kallā layumbażanna fil-ḥuṭamah(ti).",
        "translation": "Sekali-kali tidak! Pasti dia akan dilemparkan ke dalam (neraka) Hutamah."
      },
      {
        "number": 5,
        "arabic": "وَمَآ اَدْرٰىكَ مَا الْحُطَمَةُ ۗ",
        "latin": "Wa mā adrāka mal-ḥuṭamah(tu).",
        "translation": "Tahukah kamu apakah (neraka) Hutamah?"
      },
      {
        "number": 6,
        "arabic": "نَارُ اللّٰهِ الْمُوْقَدَةُۙ",
        "latin": "Nārullāhil-mūqadah(tu).",
        "translation": "(Ia adalah) api (azab) Allah yang dinyalakan"
      },
      {
        "number": 7,
        "arabic": "الَّتِيْ تَطَّلِعُ عَلَى الْاَفْـِٕدَةِۗ",
        "latin": "Allatī taṭṭali‘u ‘alal-af'idah(ti).",
        "translation": "yang (membakar) naik sampai ke hati."
      },
      {
        "number": 8,
        "arabic": "اِنَّهَا عَلَيْهِمْ مُّؤْصَدَةٌۙ",
        "latin": "Innahā ‘alaihim mu'ṣadah(tun).",
        "translation": "Sesungguhnya dia (api itu) tertutup rapat (sebagai hukuman) atas mereka,"
      },
      {
        "number": 9,
        "arabic": "فِيْ عَمَدٍ مُّمَدَّدَةٍ ࣖ",
        "latin": "Fī ‘amadim mumaddadah(tin).",
        "translation": "(sedangkan mereka) diikat pada tiang-tiang yang panjang."
      }
    ]
  },
  {
    "number": 105,
    "name": "Al-Fil",
    "arabicName": "الفيل",
    "translationName": "Gajah",
    "revelationType": "Makkiyah",
    "numberOfVerses": 5,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/105.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِاَصْحٰبِ الْفِيْلِۗ",
        "latin": "Alam tara kaifa fa‘ala rabbuka bi'aṣḥābil-fīl(i).",
        "translation": "Tidakkah engkau (Nabi Muhammad) memperhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?"
      },
      {
        "number": 2,
        "arabic": "اَلَمْ يَجْعَلْ كَيْدَهُمْ فِيْ تَضْلِيْلٍۙ",
        "latin": "Alam yaj‘al kaidahum fī taḍlīl(in).",
        "translation": "Bukankah Dia telah menjadikan tipu daya mereka itu sia-sia?"
      },
      {
        "number": 3,
        "arabic": "وَّاَرْسَلَ عَلَيْهِمْ طَيْرًا اَبَابِيْلَۙ",
        "latin": "Wa arsala ‘alaihim ṭairan abābīl(a).",
        "translation": "Dia mengirimkan kepada mereka burung yang berbondong-bondong"
      },
      {
        "number": 4,
        "arabic": "تَرْمِيْهِمْ بِحِجَارَةٍ مِّنْ سِجِّيْلٍۙ",
        "latin": "Tarmīhim biḥijāratim min sijjīl(in).",
        "translation": "yang melempari mereka dengan batu dari tanah liat yang dibakar,"
      },
      {
        "number": 5,
        "arabic": "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُوْلٍ ࣖ ",
        "latin": "Fa ja‘alahum ka‘aṣfim ma'kūl(in).",
        "translation": "sehingga Dia menjadikan mereka seperti daun-daun yang dimakan (ulat)."
      }
    ]
  },
  {
    "number": 106,
    "name": "Quraisy",
    "arabicName": "قريش",
    "translationName": "Quraisy",
    "revelationType": "Makkiyah",
    "numberOfVerses": 4,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/106.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "لِاِيْلٰفِ قُرَيْشٍۙ",
        "latin": "Li'īlāfi quraisy(in).",
        "translation": "Disebabkan oleh kebiasaan orang-orang Quraisy,"
      },
      {
        "number": 2,
        "arabic": "اٖلٰفِهِمْ رِحْلَةَ الشِّتَاۤءِ وَالصَّيْفِۚ",
        "latin": "´lāfihim riḥlatasy-syitā'i waṣ-ṣaif(i).",
        "translation": "(yaitu) kebiasaan mereka bepergian pada musim dingin dan musim panas (sehingga mendapatkan banyak keuntungan),"
      },
      {
        "number": 3,
        "arabic": "فَلْيَعْبُدُوْا رَبَّ هٰذَا الْبَيْتِۙ",
        "latin": "Falya‘budū rabba hāżal-bait(i).",
        "translation": "maka hendaklah mereka menyembah Tuhan (pemilik) rumah ini (Ka‘bah)"
      },
      {
        "number": 4,
        "arabic": "الَّذِيْٓ اَطْعَمَهُمْ مِّنْ جُوْعٍ ەۙ وَّاٰمَنَهُمْ مِّنْ خَوْفٍ ࣖ",
        "latin": "Allażī aṭ‘amahum min jū‘(in), wa āmanahum min khauf(in).",
        "translation": "yang telah memberi mereka makanan untuk menghilangkan lapar dan mengamankan mereka dari rasa takut."
      }
    ]
  },
  {
    "number": 107,
    "name": "Al-Ma'un",
    "arabicName": "الماعون",
    "translationName": "Barang Yang Berguna",
    "revelationType": "Makkiyah",
    "numberOfVerses": 7,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/107.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اَرَءَيْتَ الَّذِيْ يُكَذِّبُ بِالدِّيْنِۗ",
        "latin": "Ara'aital-lażī yukażżibu bid-dīn(i).",
        "translation": "Tahukah kamu (orang) yang mendustakan agama?"
      },
      {
        "number": 2,
        "arabic": "فَذٰلِكَ الَّذِيْ يَدُعُّ الْيَتِيْمَۙ",
        "latin": "Fa żālikal-lażī yadu‘‘ul-yatīm(a).",
        "translation": "Itulah orang yang menghardik anak yatim"
      },
      {
        "number": 3,
        "arabic": "وَلَا يَحُضُّ عَلٰى طَعَامِ الْمِسْكِيْنِۗ",
        "latin": "Wa lā yaḥuḍḍu ‘alā ṭa‘āmil-miskīn(i).",
        "translation": "dan tidak menganjurkan untuk memberi makan orang miskin."
      },
      {
        "number": 4,
        "arabic": "فَوَيْلٌ لِّلْمُصَلِّيْنَۙ",
        "latin": "Fawailul lil-muṣallīn(a).",
        "translation": "Celakalah orang-orang yang melaksanakan salat,"
      },
      {
        "number": 5,
        "arabic": "الَّذِيْنَ هُمْ عَنْ صَلَاتِهِمْ سَاهُوْنَۙ",
        "latin": "Allażīna hum ‘an ṣalātihim sāhūn(a).",
        "translation": "(yaitu) yang lalai terhadap salatnya,"
      },
      {
        "number": 6,
        "arabic": "الَّذِيْنَ هُمْ يُرَاۤءُوْنَۙ",
        "latin": "Allażīna hum yurā'ūn(a).",
        "translation": "yang berbuat riya,"
      },
      {
        "number": 7,
        "arabic": "وَيَمْنَعُوْنَ الْمَاعُوْنَ ࣖ",
        "latin": "Wa yamna‘ūnal-mā‘ūn(a).",
        "translation": "dan enggan (memberi) bantuan."
      }
    ]
  },
  {
    "number": 108,
    "name": "Al-Kausar",
    "arabicName": "الكوثر",
    "translationName": "Pemberian Yang Banyak",
    "revelationType": "Makkiyah",
    "numberOfVerses": 3,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/108.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اِنَّآ اَعْطَيْنٰكَ الْكَوْثَرَۗ",
        "latin": "Innā a‘ṭainākal-kauṡar(a).",
        "translation": "Sesungguhnya Kami telah memberimu (Nabi Muhammad) nikmat yang banyak."
      },
      {
        "number": 2,
        "arabic": "فَصَلِّ لِرَبِّكَ وَانْحَرْۗ",
        "latin": "Faṣalli lirabbika wanḥar.",
        "translation": "Maka, laksanakanlah salat karena Tuhanmu dan berkurbanlah!"
      },
      {
        "number": 3,
        "arabic": "اِنَّ شَانِئَكَ هُوَ الْاَبْتَرُ ࣖ",
        "latin": "Inna syāni'aka huwal-abtar(u).",
        "translation": "Sesungguhnya orang yang membencimu, dialah yang terputus (dari rahmat Allah)."
      }
    ]
  },
  {
    "number": 109,
    "name": "Al-Kafirun",
    "arabicName": "الكٰفرون",
    "translationName": "Orang-Orang kafir",
    "revelationType": "Makkiyah",
    "numberOfVerses": 6,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/109.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "قُلْ يٰٓاَيُّهَا الْكٰفِرُوْنَۙ",
        "latin": "Qul yā ayyuhal-kāfirūn(a).",
        "translation": "Katakanlah (Nabi Muhammad), “Wahai orang-orang kafir,"
      },
      {
        "number": 2,
        "arabic": "لَآ اَعْبُدُ مَا تَعْبُدُوْنَۙ",
        "latin": "Lā a‘budu mā ta‘budūn(a).",
        "translation": "aku tidak akan menyembah apa yang kamu sembah."
      },
      {
        "number": 3,
        "arabic": "وَلَآ اَنْتُمْ عٰبِدُوْنَ مَآ اَعْبُدُۚ",
        "latin": "Wa lā antum ‘ābidūna mā a‘bud(u).",
        "translation": "Kamu juga bukan penyembah apa yang aku sembah."
      },
      {
        "number": 4,
        "arabic": "وَلَآ اَنَا۠ عَابِدٌ مَّا عَبَدْتُّمْۙ",
        "latin": "Wa lā ana ‘ābidum mā ‘abattum.",
        "translation": "Aku juga tidak pernah menjadi penyembah apa yang kamu sembah."
      },
      {
        "number": 5,
        "arabic": "وَلَآ اَنْتُمْ عٰبِدُوْنَ مَآ اَعْبُدُۗ",
        "latin": "Wa lā antum ‘ābidūna mā a‘bud(u).",
        "translation": "Kamu tidak pernah (pula) menjadi penyembah apa yang aku sembah."
      },
      {
        "number": 6,
        "arabic": "لَكُمْ دِيْنُكُمْ وَلِيَ دِيْنِ ࣖ",
        "latin": "Lakum dīnukum wa liya dīn(i).",
        "translation": "Untukmu agamamu dan untukku agamaku.”"
      }
    ]
  },
  {
    "number": 110,
    "name": "An-Nasr",
    "arabicName": "النصر",
    "translationName": "Pertolongan",
    "revelationType": "Madaniyah",
    "numberOfVerses": 3,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/110.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "اِذَا جَاۤءَ نَصْرُ اللّٰهِ وَالْفَتْحُۙ",
        "latin": "Iżā jā'a naṣrullāhi wal-fatḥ(u).",
        "translation": "Apabila telah datang pertolongan Allah dan kemenangan"
      },
      {
        "number": 2,
        "arabic": "وَرَاَيْتَ النَّاسَ يَدْخُلُوْنَ فِيْ دِيْنِ اللّٰهِ اَفْوَاجًاۙ",
        "latin": "Wa ra'aitan-nāsa yadkhulūna fī dīnillāhi afwājā(n).",
        "translation": "dan engkau melihat manusia berbondong-bondong masuk agama Allah,"
      },
      {
        "number": 3,
        "arabic": "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُۗ اِنَّهٗ كَانَ تَوَّابًا ࣖ",
        "latin": "Fasabbiḥ biḥamdi rabbika wastagfirh(u), innahū kāna tawwābā(n).",
        "translation": "bertasbihlah dengan memuji Tuhanmu dan mohonlah ampun kepada-Nya. Sesungguhnya Dia Maha Penerima tobat."
      }
    ]
  },
  {
    "number": 111,
    "name": "Al-Lahab",
    "arabicName": "اللهب",
    "translationName": "Api Yang Bergejolak",
    "revelationType": "Makkiyah",
    "numberOfVerses": 5,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/111.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "تَبَّتْ يَدَآ اَبِيْ لَهَبٍ وَّتَبَّۗ",
        "latin": "Tabbat yadā abī lahabiw wa tabb(a).",
        "translation": "Binasalah kedua tangan Abu Lahab dan benar-benar binasa dia."
      },
      {
        "number": 2,
        "arabic": "مَآ اَغْنٰى عَنْهُ مَالُهٗ وَمَا كَسَبَۗ",
        "latin": "Mā agnā ‘anhu māluhū wa mā kasab(a).",
        "translation": "Tidaklah berguna baginya hartanya dan apa yang dia usahakan."
      },
      {
        "number": 3,
        "arabic": "سَيَصْلٰى نَارًا ذَاتَ لَهَبٍۙ",
        "latin": "Sayaṣlā nāran żāta lahab(in).",
        "translation": "Kelak dia akan memasuki api yang bergejolak (neraka),"
      },
      {
        "number": 4,
        "arabic": "وَّامْرَاَتُهٗ ۗحَمَّالَةَ الْحَطَبِۚ",
        "latin": "Wamra'atuh(ū), ḥammālatal-ḥaṭab(i).",
        "translation": "(begitu pula) istrinya, pembawa kayu bakar (penyebar fitnah)."
      },
      {
        "number": 5,
        "arabic": "فِيْ جِيْدِهَا حَبْلٌ مِّنْ مَّسَدٍ ࣖ",
        "latin": "Fī jīdihā ḥablum mim masad(in).",
        "translation": "Di lehernya ada tali dari sabut yang dipintal."
      }
    ]
  },
  {
    "number": 112,
    "name": "Al-Ikhlas",
    "arabicName": "الاخلاص",
    "translationName": "Ikhlas",
    "revelationType": "Makkiyah",
    "numberOfVerses": 4,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/112.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "قُلْ هُوَ اللّٰهُ اَحَدٌۚ",
        "latin": "Qul huwallāhu aḥad(un).",
        "translation": "Katakanlah (Nabi Muhammad), “Dialah Allah Yang Maha Esa."
      },
      {
        "number": 2,
        "arabic": "اَللّٰهُ الصَّمَدُۚ",
        "latin": "Allāhuṣ-ṣamad(u).",
        "translation": "Allah tempat meminta segala sesuatu."
      },
      {
        "number": 3,
        "arabic": "لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ",
        "latin": "Lam yalid wa lam yūlad.",
        "translation": "Dia tidak beranak dan tidak pula diperanakkan"
      },
      {
        "number": 4,
        "arabic": "وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ ࣖ",
        "latin": "Wa lam yakul lahū kufuwan aḥad(un).",
        "translation": "serta tidak ada sesuatu pun yang setara dengan-Nya.”"
      }
    ]
  },
  {
    "number": 113,
    "name": "Al-Falaq",
    "arabicName": "الفلق",
    "translationName": "Subuh",
    "revelationType": "Madaniyah",
    "numberOfVerses": 5,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/113.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ",
        "latin": "Qul a‘ūżu birabbil-falaq(i).",
        "translation": "Katakanlah (Nabi Muhammad), “Aku berlindung kepada Tuhan yang (menjaga) fajar (subuh)"
      },
      {
        "number": 2,
        "arabic": "مِنْ شَرِّ مَا خَلَقَۙ",
        "latin": "Min syarri mā khalaq(a).",
        "translation": "dari kejahatan (makhluk yang) Dia ciptakan,"
      },
      {
        "number": 3,
        "arabic": "وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ",
        "latin": "Wa min syarri gāsiqin iżā waqab(a).",
        "translation": "dari kejahatan malam apabila telah gelap gulita,"
      },
      {
        "number": 4,
        "arabic": "وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِۙ",
        "latin": "Wa min syarrin-naffāṡāti fil-‘uqad(i).",
        "translation": "dari kejahatan perempuan-perempuan (penyihir) yang meniup pada buhul-buhul (talinya),"
      },
      {
        "number": 5,
        "arabic": "وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ ࣖ",
        "latin": "Wa min syarri ḥāsidin iżā ḥasad(a).",
        "translation": "dan dari kejahatan orang yang dengki apabila dia dengki.”"
      }
    ]
  },
  {
    "number": 114,
    "name": "An-Nas",
    "arabicName": "الناس",
    "translationName": "Manusia",
    "revelationType": "Madaniyah",
    "numberOfVerses": 6,
    "audioUrl": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/114.mp3",
    "verses": [
      {
        "number": 1,
        "arabic": "قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ",
        "latin": "Qul a‘ūżu birabbin-nās(i).",
        "translation": "Katakanlah (Nabi Muhammad), “Aku berlindung kepada Tuhan manusia,"
      },
      {
        "number": 2,
        "arabic": "مَلِكِ النَّاسِۙ",
        "latin": "Malikin-nās(i).",
        "translation": "raja manusia,"
      },
      {
        "number": 3,
        "arabic": "اِلٰهِ النَّاسِۙ",
        "latin": "Ilāhin-nās(i).",
        "translation": "sembahan manusia"
      },
      {
        "number": 4,
        "arabic": "مِنْ شَرِّ الْوَسْوَاسِ ەۙ الْخَنَّاسِۖ",
        "latin": "Min syarril-waswāsil-khannās(i).",
        "translation": "dari kejahatan (setan) pembisik yang bersembunyi"
      },
      {
        "number": 5,
        "arabic": "الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِۙ",
        "latin": "Allażī yuwaswisu fī ṣudūrin-nās(i).",
        "translation": "yang membisikkan (kejahatan) ke dalam dada manusia,"
      },
      {
        "number": 6,
        "arabic": "مِنَ الْجِنَّةِ وَالنَّاسِ ࣖ ",
        "latin": "Minal jinnati wan-nās(i).",
        "translation": "dari (golongan) jin dan manusia.”"
      }
    ]
  }
];
