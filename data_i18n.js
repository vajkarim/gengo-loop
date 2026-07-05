/* 多言語データ（追加注入）
 * 対応言語を data.js に後付けで足す。ヒンディー / ネパール / インドネシア / マンダリン(中) / ベトナム。
 * ※ ネパール語の読み上げ音声は Nepali TTS がほぼ存在しないため、ヒンディー語(hi-IN)の音声を流用。
 * ※ 機械生成の訳のため、特にネパール語・ベトナム語は要確認。修正はこのファイル1か所でOK。
 */
(function(){
  const W = {}; window.WORDS.forEach(w=>W[w.id]=w);
  const E = {}; window.EXPRESSIONS.forEach(e=>E[e.id]=e);
  const SM = {}; window.SENTENCES.forEach(s=>SM[s.wordId+"|"+s.exprId]=s);

  /* ---------- 単語訳 ---------- */
  const words = {
  hi:{
    japan:"जापान",japanese:"जापानी",morning:"सुबह",night:"रात",friend:"दोस्त",home:"घर",culture:"संस्कृति",car:"गाड़ी",food:"खाना",family:"परिवार",photo:"फ़ोटो",student:"छात्र",station:"स्टेशन",lang:"जो भाषा मैं सीख रहा हूँ",movie:"फ़िल्म",resto:"रेस्टोरेंट",hotel:"होटल",mom:"माँ",dad:"पापा",woman:"औरत",man:"आदमी",train:"ट्रेन",place:"जगह",brother:"भाई",sister:"बहन",problem:"समस्या",people:"लोग",shopping:"खरीदारी",every_all:"सब कुछ",company:"कंपनी",money:"पैसा",time:"समय",store:"दुकान",kid:"बच्चा",weather:"मौसम",name:"नाम",rain:"बारिश",music:"संगीत",water:"पानी",message:"संदेश",bathroom:"बाथरूम",book:"किताब",
    very:"बहुत",a_little:"थोड़ा",maybe:"शायद",together:"साथ में",later:"बाद में",usually:"आमतौर पर",still:"अभी भी",also:"भी",often:"अक्सर",only:"सिर्फ़",about:"लगभग",well:"अच्छे से",again:"फिर से",
    nice:"अच्छा",tall:"लंबा",big:"बड़ा",small:"छोटा",hot:"गरम",hard:"मुश्किल",easy:"आसान",yummy:"स्वादिष्ट",a_lot:"बहुत सारे",different:"अलग",important:"ज़रूरी",famous:"मशहूर",fun:"मज़ेदार",similar:"मिलता-जुलता",busy:"व्यस्त",long:"लंबा",pretty:"सुंदर",cheap:"सस्ता",pricey:"महँगा",sad:"उदास",far:"दूर",close:"पास",tired:"थका हुआ",hungry:"भूखा",new:"नया",good:"अच्छा",every:"हर",first:"पहला",last:"पिछला",next:"अगला",
    what:"क्या",when:"कब",where:"कहाँ",how:"कैसे",how_much:"कितना",how_long:"कितनी देर",why:"क्यों",who:"कौन",which:"कौन सा",what_time:"कितने बजे",how_old:"कितने साल के",
    or:"या",so:"इसलिए",but:"लेकिन",and:"और",
    with:"के साथ",from:"से",for:"के लिए",of:"का",at:"में",to:"को",
    here:"यहाँ",there:"वहाँ",today:"आज",tomorrow:"कल",yesterday:"बीता कल",day:"दिन",week:"हफ़्ता",month:"महीना",year:"साल",now:"अभी",
    one:"एक",two:"दो",three:"तीन",
    yes:"हाँ",awesome:"बढ़िया!",really:"सच में?",no:"नहीं",too_bad:"अफ़सोस है",i_see:"अच्छा, समझ गया",
    g_morning:"सुप्रभात",hi:"नमस्ते",g_evening:"शुभ संध्या",bye:"अलविदा",excuse_me:"सुनिए",thanks:"धन्यवाद",sorry:"माफ़ कीजिए",how_are_you:"कैसे हैं आप?",nice_meet:"आपसे मिलकर खुशी हुई"
  },
  ne:{
    japan:"जापान",japanese:"जापानी",morning:"बिहान",night:"रात",friend:"साथी",home:"घर",culture:"संस्कृति",car:"गाडी",food:"खाना",family:"परिवार",photo:"फोटो",student:"विद्यार्थी",station:"स्टेशन",lang:"म सिक्दै गरेको भाषा",movie:"फिल्म",resto:"रेस्टुरेन्ट",hotel:"होटल",mom:"आमा",dad:"बुबा",woman:"महिला",man:"पुरुष",train:"रेल",place:"ठाउँ",brother:"दाजुभाइ",sister:"दिदीबहिनी",problem:"समस्या",people:"मानिसहरू",shopping:"किनमेल",every_all:"सबै",company:"कम्पनी",money:"पैसा",time:"समय",store:"पसल",kid:"बच्चा",weather:"मौसम",name:"नाम",rain:"वर्षा",music:"संगीत",water:"पानी",message:"सन्देश",bathroom:"शौचालय",book:"किताब",
    very:"धेरै",a_little:"अलिकति",maybe:"सायद",together:"सँगै",later:"पछि",usually:"सामान्यतया",still:"अझै",also:"पनि",often:"प्रायः",only:"मात्र",about:"लगभग",well:"राम्ररी",again:"फेरि",
    nice:"असल",tall:"अग्लो",big:"ठूलो",small:"सानो",hot:"गर्मी",hard:"गाह्रो",easy:"सजिलो",yummy:"मिठो",a_lot:"धेरै",different:"फरक",important:"महत्त्वपूर्ण",famous:"प्रसिद्ध",fun:"रमाइलो",similar:"उस्तै",busy:"व्यस्त",long:"लामो",pretty:"राम्रो",cheap:"सस्तो",pricey:"महँगो",sad:"दुःखी",far:"टाढा",close:"नजिक",tired:"थकित",hungry:"भोकाएको",new:"नयाँ",good:"राम्रो",every:"हरेक",first:"पहिलो",last:"अघिल्लो",next:"अर्को",
    what:"के",when:"कहिले",where:"कहाँ",how:"कसरी",how_much:"कति",how_long:"कति समय",why:"किन",who:"को",which:"कुन",what_time:"कति बजे",how_old:"कति वर्ष",
    or:"वा",so:"त्यसैले",but:"तर",and:"र",
    with:"सँग",from:"बाट",for:"लागि",of:"को",at:"मा",to:"तिर",
    here:"यहाँ",there:"त्यहाँ",today:"आज",tomorrow:"भोलि",yesterday:"हिजो",day:"दिन",week:"हप्ता",month:"महिना",year:"वर्ष",now:"अहिले",
    one:"एक",two:"दुई",three:"तीन",
    yes:"हो",awesome:"वाह!",really:"साँच्चै?",no:"होइन",too_bad:"दुःख लाग्यो",i_see:"बुझें",
    g_morning:"शुभ प्रभात",hi:"नमस्ते",g_evening:"शुभ सन्ध्या",bye:"फेरि भेटौंला",excuse_me:"सुन्नुहोस्",thanks:"धन्यवाद",sorry:"माफ गर्नुहोस्",how_are_you:"कस्तो हुनुहुन्छ?",nice_meet:"भेटेर खुशी लाग्यो"
  },
  id:{
    japan:"Jepang",japanese:"orang Jepang",morning:"pagi",night:"malam",friend:"teman",home:"rumah",culture:"budaya",car:"mobil",food:"makanan",family:"keluarga",photo:"foto",student:"pelajar",station:"stasiun",lang:"bahasa yang saya pelajari",movie:"film",resto:"restoran",hotel:"hotel",mom:"ibu",dad:"ayah",woman:"wanita",man:"pria",train:"kereta",place:"tempat",brother:"saudara laki-laki",sister:"saudara perempuan",problem:"masalah",people:"orang-orang",shopping:"belanja",every_all:"semua",company:"perusahaan",money:"uang",time:"waktu",store:"toko",kid:"anak",weather:"cuaca",name:"nama",rain:"hujan",music:"musik",water:"air",message:"pesan",bathroom:"toilet",book:"buku",
    very:"sangat",a_little:"sedikit",maybe:"mungkin",together:"bersama",later:"nanti",usually:"biasanya",still:"masih",also:"juga",often:"sering",only:"hanya",about:"sekitar",well:"dengan baik",again:"lagi",
    nice:"baik",tall:"tinggi",big:"besar",small:"kecil",hot:"panas",hard:"sulit",easy:"mudah",yummy:"enak",a_lot:"banyak",different:"berbeda",important:"penting",famous:"terkenal",fun:"menyenangkan",similar:"mirip",busy:"sibuk",long:"panjang",pretty:"cantik",cheap:"murah",pricey:"mahal",sad:"sedih",far:"jauh",close:"dekat",tired:"lelah",hungry:"lapar",new:"baru",good:"bagus",every:"setiap",first:"pertama",last:"sebelumnya",next:"berikutnya",
    what:"apa",when:"kapan",where:"di mana",how:"bagaimana",how_much:"berapa",how_long:"berapa lama",why:"kenapa",who:"siapa",which:"yang mana",what_time:"jam berapa",how_old:"berapa umur",
    or:"atau",so:"jadi",but:"tapi",and:"dan",
    with:"dengan",from:"dari",for:"untuk",of:"dari",at:"di",to:"ke",
    here:"di sini",there:"di sana",today:"hari ini",tomorrow:"besok",yesterday:"kemarin",day:"hari",week:"minggu",month:"bulan",year:"tahun",now:"sekarang",
    one:"satu",two:"dua",three:"tiga",
    yes:"ya",awesome:"keren!",really:"benarkah?",no:"tidak",too_bad:"sayang sekali",i_see:"oh begitu",
    g_morning:"selamat pagi",hi:"halo",g_evening:"selamat malam",bye:"sampai jumpa",excuse_me:"permisi",thanks:"terima kasih",sorry:"maaf",how_are_you:"apa kabar?",nice_meet:"senang bertemu"
  },
  zh:{
    japan:"日本",japanese:"日本人",morning:"早上",night:"晚上",friend:"朋友",home:"家",culture:"文化",car:"车",food:"食物",family:"家人",photo:"照片",student:"学生",station:"车站",lang:"我在学的语言",movie:"电影",resto:"餐厅",hotel:"酒店",mom:"妈妈",dad:"爸爸",woman:"女人",man:"男人",train:"火车",place:"地方",brother:"兄弟",sister:"姐妹",problem:"问题",people:"人们",shopping:"购物",every_all:"一切",company:"公司",money:"钱",time:"时间",store:"商店",kid:"孩子",weather:"天气",name:"名字",rain:"雨",music:"音乐",water:"水",message:"消息",bathroom:"洗手间",book:"书",
    very:"很",a_little:"一点",maybe:"也许",together:"一起",later:"待会",usually:"通常",still:"还",also:"也",often:"经常",only:"只",about:"大约",well:"好",again:"再",
    nice:"友善",tall:"高",big:"大",small:"小",hot:"热",hard:"难",easy:"简单",yummy:"好吃",a_lot:"很多",different:"不同",important:"重要",famous:"有名",fun:"有趣",similar:"相似",busy:"忙",long:"长",pretty:"美",cheap:"便宜",pricey:"贵",sad:"难过",far:"远",close:"近",tired:"累",hungry:"饿",new:"新",good:"好",every:"每",first:"第一",last:"上一个",next:"下一个",
    what:"什么",when:"什么时候",where:"哪里",how:"怎么",how_much:"多少钱",how_long:"多久",why:"为什么",who:"谁",which:"哪个",what_time:"几点",how_old:"几岁",
    or:"或者",so:"所以",but:"但是",and:"和",
    with:"和",from:"从",for:"为了",of:"的",at:"在",to:"到",
    here:"这里",there:"那里",today:"今天",tomorrow:"明天",yesterday:"昨天",day:"天",week:"星期",month:"月",year:"年",now:"现在",
    one:"一",two:"二",three:"三",
    yes:"是",awesome:"太棒了！",really:"真的吗？",no:"不",too_bad:"太可惜了",i_see:"原来如此",
    g_morning:"早上好",hi:"你好",g_evening:"晚上好",bye:"再见",excuse_me:"打扰一下",thanks:"谢谢",sorry:"对不起",how_are_you:"你好吗？",nice_meet:"很高兴认识你"
  },
  vi:{
    japan:"Nhật Bản",japanese:"người Nhật",morning:"buổi sáng",night:"buổi tối",friend:"bạn",home:"nhà",culture:"văn hóa",car:"xe hơi",food:"thức ăn",family:"gia đình",photo:"ảnh",student:"học sinh",station:"nhà ga",lang:"ngôn ngữ tôi đang học",movie:"phim",resto:"nhà hàng",hotel:"khách sạn",mom:"mẹ",dad:"bố",woman:"phụ nữ",man:"đàn ông",train:"tàu hỏa",place:"nơi",brother:"anh em",sister:"chị em",problem:"vấn đề",people:"mọi người",shopping:"mua sắm",every_all:"mọi thứ",company:"công ty",money:"tiền",time:"thời gian",store:"cửa hàng",kid:"trẻ con",weather:"thời tiết",name:"tên",rain:"mưa",music:"âm nhạc",water:"nước",message:"tin nhắn",bathroom:"nhà vệ sinh",book:"sách",
    very:"rất",a_little:"một chút",maybe:"có lẽ",together:"cùng nhau",later:"lát nữa",usually:"thường",still:"vẫn",also:"cũng",often:"thường xuyên",only:"chỉ",about:"khoảng",well:"giỏi",again:"lại",
    nice:"tốt bụng",tall:"cao",big:"to",small:"nhỏ",hot:"nóng",hard:"khó",easy:"dễ",yummy:"ngon",a_lot:"nhiều",different:"khác",important:"quan trọng",famous:"nổi tiếng",fun:"vui",similar:"giống",busy:"bận",long:"dài",pretty:"đẹp",cheap:"rẻ",pricey:"đắt",sad:"buồn",far:"xa",close:"gần",tired:"mệt",hungry:"đói",new:"mới",good:"tốt",every:"mỗi",first:"đầu tiên",last:"trước",next:"tiếp theo",
    what:"gì",when:"khi nào",where:"ở đâu",how:"thế nào",how_much:"bao nhiêu",how_long:"bao lâu",why:"tại sao",who:"ai",which:"cái nào",what_time:"mấy giờ",how_old:"bao nhiêu tuổi",
    or:"hoặc",so:"nên",but:"nhưng",and:"và",
    with:"với",from:"từ",for:"cho",of:"của",at:"ở",to:"đến",
    here:"ở đây",there:"ở đó",today:"hôm nay",tomorrow:"ngày mai",yesterday:"hôm qua",day:"ngày",week:"tuần",month:"tháng",year:"năm",now:"bây giờ",
    one:"một",two:"hai",three:"ba",
    yes:"vâng",awesome:"tuyệt!",really:"thật à?",no:"không",too_bad:"tiếc quá",i_see:"ra vậy",
    g_morning:"chào buổi sáng",hi:"xin chào",g_evening:"chào buổi tối",bye:"tạm biệt",excuse_me:"xin lỗi",thanks:"cảm ơn",sorry:"xin lỗi",how_are_you:"bạn khỏe không?",nice_meet:"rất vui được gặp"
  }
  };
  Object.keys(words).forEach(lang=>{
    Object.keys(words[lang]).forEach(id=>{ if(W[id]) W[id].tr[lang]={ w:words[lang][id] }; });
  });

  /* ---------- 追加50語（主語7 / 動詞36 / 形容詞4 / 数字メタ3）の各言語訳 ---------- */
  const words2 = {
  hi:{
    i:"मैं",you:"आप",he:"वह",she:"वह",we:"हम",this:"यह",that:"वह",
    go:"जाना",come:"आना",live:"रहना",eat:"खाना",buy:"खरीदना",see:"देखना",use:"इस्तेमाल करना",hear:"सुनना",wake:"उठना",sleep:"सोना",speak:"बोलना",say:"कहना",talk:"बात करना",work:"काम करना",know:"जानना",meet:"मिलना",wait:"इंतज़ार करना",write:"लिखना",have:"पास होना",start:"शुरू होना",finish:"ख़त्म होना",think:"सोचना",send:"भेजना",be:"होना",understand:"समझना",read:"पढ़ना",help:"मदद करना",like:"पसंद करना",enter:"अंदर जाना",arrive:"पहुँचना",remember:"याद रखना",quit:"छोड़ना",become:"बनना",study:"पढ़ाई करना",ride:"चढ़ना",go_home:"घर जाना",
    happy:"खुश",favorite:"पसंदीदा",foreign:"विदेशी",smart:"होशियार",
    my_age:"(आपकी उम्र)",birth_month:"(जन्म का महीना)",birth_day:"(जन्म का दिन)"
  },
  ne:{
    i:"म",you:"तपाईं",he:"ऊ",she:"उनी",we:"हामी",this:"यो",that:"त्यो",
    go:"जानु",come:"आउनु",live:"बस्नु",eat:"खानु",buy:"किन्नु",see:"देख्नु",use:"प्रयोग गर्नु",hear:"सुन्नु",wake:"उठ्नु",sleep:"सुत्नु",speak:"बोल्नु",say:"भन्नु",talk:"कुरा गर्नु",work:"काम गर्नु",know:"थाहा हुनु",meet:"भेट्नु",wait:"पर्खनु",write:"लेख्नु",have:"हुनु",start:"सुरु हुनु",finish:"सकिनु",think:"सोच्नु",send:"पठाउनु",be:"हुनु",understand:"बुझ्नु",read:"पढ्नु",help:"मद्दत गर्नु",like:"मन पराउनु",enter:"भित्र जानु",arrive:"पुग्नु",remember:"सम्झनु",quit:"छोड्नु",become:"बन्नु",study:"अध्ययन गर्नु",ride:"चढ्नु",go_home:"घर जानु",
    happy:"खुसी",favorite:"मनपर्ने",foreign:"विदेशी",smart:"चलाख",
    my_age:"(तपाईंको उमेर)",birth_month:"(जन्म महिना)",birth_day:"(जन्म दिन)"
  },
  id:{
    i:"saya",you:"kamu",he:"dia",she:"dia",we:"kami",this:"ini",that:"itu",
    go:"pergi",come:"datang",live:"tinggal",eat:"makan",buy:"beli",see:"lihat",use:"pakai",hear:"dengar",wake:"bangun",sleep:"tidur",speak:"berbicara",say:"bilang",talk:"ngobrol",work:"bekerja",know:"tahu",meet:"bertemu",wait:"menunggu",write:"menulis",have:"punya",start:"mulai",finish:"selesai",think:"pikir",send:"kirim",be:"adalah",understand:"mengerti",read:"baca",help:"bantu",like:"suka",enter:"masuk",arrive:"tiba",remember:"ingat",quit:"berhenti",become:"menjadi",study:"belajar",ride:"naik",go_home:"pulang",
    happy:"senang",favorite:"favorit",foreign:"asing",smart:"pintar",
    my_age:"(umur kamu)",birth_month:"(bulan lahir)",birth_day:"(tanggal lahir)"
  },
  zh:{
    i:"我",you:"你",he:"他",she:"她",we:"我们",this:"这",that:"那",
    go:"去",come:"来",live:"住",eat:"吃",buy:"买",see:"看见",use:"用",hear:"听见",wake:"起床",sleep:"睡觉",speak:"说",say:"说",talk:"聊天",work:"工作",know:"知道",meet:"见面",wait:"等",write:"写",have:"有",start:"开始",finish:"结束",think:"想",send:"发送",be:"是",understand:"懂",read:"读",help:"帮助",like:"喜欢",enter:"进入",arrive:"到达",remember:"记得",quit:"停止",become:"成为",study:"学习",ride:"坐",go_home:"回家",
    happy:"开心",favorite:"最喜欢的",foreign:"外国的",smart:"聪明",
    my_age:"（你的年龄）",birth_month:"（出生月份）",birth_day:"（出生日期）"
  },
  vi:{
    i:"tôi",you:"bạn",he:"anh ấy",she:"cô ấy",we:"chúng tôi",this:"cái này",that:"cái đó",
    go:"đi",come:"đến",live:"sống",eat:"ăn",buy:"mua",see:"nhìn thấy",use:"dùng",hear:"nghe thấy",wake:"thức dậy",sleep:"ngủ",speak:"nói",say:"nói",talk:"trò chuyện",work:"làm việc",know:"biết",meet:"gặp",wait:"chờ",write:"viết",have:"có",start:"bắt đầu",finish:"kết thúc",think:"nghĩ",send:"gửi",be:"là",understand:"hiểu",read:"đọc",help:"giúp",like:"thích",enter:"vào",arrive:"đến nơi",remember:"nhớ",quit:"bỏ",become:"trở thành",study:"học",ride:"đi xe",go_home:"về nhà",
    happy:"vui",favorite:"yêu thích",foreign:"nước ngoài",smart:"thông minh",
    my_age:"(tuổi của bạn)",birth_month:"(tháng sinh)",birth_day:"(ngày sinh)"
  }
  };
  Object.keys(words2).forEach(lang=>{
    Object.keys(words2[lang]).forEach(id=>{ if(W[id]) W[id].tr[lang]={ w:words2[lang][id] }; });
  });

  /* ---------- 所有格の新規単語（主語カテゴリ）の各言語訳 ---------- */
  const wordsPoss = {
    hi:{ my:"मेरा", your:"आपका", his:"उसका", her:"उसका", our:"हमारा" },
    ne:{ my:"मेरो", your:"तपाईंको", his:"उसको", her:"उनको", our:"हाम्रो" },
    id:{ my:"saya", your:"kamu", his:"dia", her:"dia", our:"kami" },
    zh:{ my:"我的", your:"你的", his:"他的", her:"她的", our:"我们的" },
    vi:{ my:"của tôi", your:"của bạn", his:"của anh ấy", her:"của cô ấy", our:"của chúng tôi" }
  };
  Object.keys(wordsPoss).forEach(lang=>{
    Object.keys(wordsPoss[lang]).forEach(id=>{ if(W[id]) W[id].tr[lang]={ w:wordsPoss[lang][id] }; });
  });

  /* ---------- 「勉強している言語」= 各言語の名前 ---------- */
  const wordsLang = { en:"English", hi:"हिन्दी", ne:"नेपाली", id:"bahasa Indonesia", zh:"中文", vi:"tiếng Việt" };
  Object.keys(wordsLang).forEach(l=>{ if(W["lang"]) W["lang"].tr[l]={ w:wordsLang[l] }; });

  /* ---------- 表現テンプレ（{W}=単語スロット） ---------- */
  const expr = {
  hi:{ e_am:"मैं {W} हूँ।",e_name:"मेरा नाम {W} है।",e_do:"मैं {W} करता हूँ।",e_ing:"मैं अभी {W} कर रहा हूँ।",e_can:"मैं {W} कर सकता हूँ।",e_like:"मुझे {W} पसंद है।",e_was:"वह {W} था।",e_did:"मैंने कल {W} किया।",e_have:"मैंने पहले {W} किया है।",e_been:"मैं {W} गया हूँ।",e_if:"अगर {W}, तो बताओ।",e_when:"जब {W}, तब बताओ।",e_please:"क्या आप {W} कर सकते हैं?",e_lets:"चलो {W} करते हैं।",e_think:"मुझे लगता है {W}।",e_wanna:"मुझे {W} करना है।",e_gotta:"मुझे {W} करना पड़ेगा।",e_is:"{W} अच्छा है।",e_gonna:"मैं {W} करने वाला हूँ।",e_are_you:"क्या आप {W} हैं?",e_do_you:"क्या आप {W} करते हैं?",e_have_you:"क्या आपने कभी {W} किया है?",e_qwhen:"आप कब {W} करते हैं?",e_where:"आप कहाँ {W} करते हैं?",e_how:"आप कैसे {W} करते हैं?",e_not:"मैं {W} नहीं हूँ।",e_dont:"मैं {W} नहीं करता।",e_cant:"मैं {W} नहीं कर सकता।",e_never:"मैंने कभी {W} नहीं किया।",e_dont_have:"मुझे {W} करने की ज़रूरत नहीं।" },
  ne:{ e_am:"म {W} हुँ।",e_name:"मेरो नाम {W} हो।",e_do:"म {W} गर्छु।",e_ing:"म अहिले {W} गर्दैछु।",e_can:"म {W} गर्न सक्छु।",e_like:"मलाई {W} मन पर्छ।",e_was:"त्यो {W} थियो।",e_did:"मैले हिजो {W} गरें।",e_have:"मैले पहिले {W} गरेको छु।",e_been:"म {W} गएको छु।",e_if:"यदि {W} भने, भन्नुहोस्।",e_when:"{W} बेला, भन्नुहोस्।",e_please:"तपाईं {W} गर्न सक्नुहुन्छ?",e_lets:"{W} गरौं।",e_think:"मलाई लाग्छ {W}।",e_wanna:"मलाई {W} गर्न मन छ।",e_gotta:"मैले {W} गर्नुपर्छ।",e_is:"{W} राम्रो छ।",e_gonna:"म {W} गर्न लागेको छु।",e_are_you:"तपाईं {W} हुनुहुन्छ?",e_do_you:"तपाईं {W} गर्नुहुन्छ?",e_have_you:"तपाईंले कहिल्यै {W} गर्नुभएको छ?",e_qwhen:"तपाईं कहिले {W} गर्नुहुन्छ?",e_where:"तपाईं कहाँ {W} गर्नुहुन्छ?",e_how:"तपाईं कसरी {W} गर्नुहुन्छ?",e_not:"म {W} होइन।",e_dont:"म {W} गर्दिनँ।",e_cant:"म {W} गर्न सक्दिनँ।",e_never:"मैले कहिल्यै {W} गरेको छैन।",e_dont_have:"मैले {W} गर्नु पर्दैन।" },
  id:{ e_am:"Saya {W}.",e_name:"Nama saya {W}.",e_do:"Saya {W}.",e_ing:"Saya sedang {W}.",e_can:"Saya bisa {W}.",e_like:"Saya suka {W}.",e_was:"Itu {W}.",e_did:"Saya {W} kemarin.",e_have:"Saya pernah {W}.",e_been:"Saya pernah ke {W}.",e_if:"Kalau {W}, beri tahu saya.",e_when:"Saat {W}, hubungi saya.",e_please:"Bisakah kamu {W}?",e_lets:"Ayo {W}.",e_think:"Menurut saya {W}.",e_wanna:"Saya ingin {W}.",e_gotta:"Saya harus {W}.",e_is:"{W} itu bagus.",e_gonna:"Saya akan {W}.",e_are_you:"Apakah kamu {W}?",e_do_you:"Apakah kamu {W}?",e_have_you:"Pernahkah kamu {W}?",e_qwhen:"Kapan kamu {W}?",e_where:"Di mana kamu {W}?",e_how:"Bagaimana kamu {W}?",e_not:"Saya bukan {W}.",e_dont:"Saya tidak {W}.",e_cant:"Saya tidak bisa {W}.",e_never:"Saya belum pernah {W}.",e_dont_have:"Saya tidak harus {W}." },
  zh:{ e_am:"我是{W}。",e_name:"我叫{W}。",e_do:"我{W}。",e_ing:"我正在{W}。",e_can:"我会{W}。",e_like:"我喜欢{W}。",e_was:"那时很{W}。",e_did:"我昨天{W}了。",e_have:"我{W}过。",e_been:"我去过{W}。",e_if:"如果{W}，告诉我。",e_when:"{W}的时候，叫我。",e_please:"你可以{W}吗？",e_lets:"我们一起{W}吧。",e_think:"我觉得{W}。",e_wanna:"我想{W}。",e_gotta:"我得{W}。",e_is:"{W}很好。",e_gonna:"我要{W}。",e_are_you:"你{W}吗？",e_do_you:"你{W}吗？",e_have_you:"你{W}过吗？",e_qwhen:"你什么时候{W}？",e_where:"你在哪里{W}？",e_how:"你怎么{W}？",e_not:"我不是{W}。",e_dont:"我不{W}。",e_cant:"我不能{W}。",e_never:"我从没{W}过。",e_dont_have:"我不用{W}。" },
  vi:{ e_am:"Tôi là {W}.",e_name:"Tôi tên là {W}.",e_do:"Tôi {W}.",e_ing:"Tôi đang {W}.",e_can:"Tôi có thể {W}.",e_like:"Tôi thích {W}.",e_was:"Nó đã {W}.",e_did:"Hôm qua tôi {W}.",e_have:"Tôi đã từng {W}.",e_been:"Tôi đã đến {W}.",e_if:"Nếu {W}, hãy nói với tôi.",e_when:"Khi {W}, hãy gọi tôi.",e_please:"Bạn có thể {W} không?",e_lets:"Hãy cùng {W}.",e_think:"Tôi nghĩ {W}.",e_wanna:"Tôi muốn {W}.",e_gotta:"Tôi phải {W}.",e_is:"{W} thì tốt.",e_gonna:"Tôi sẽ {W}.",e_are_you:"Bạn có {W} không?",e_do_you:"Bạn có {W} không?",e_have_you:"Bạn đã từng {W} chưa?",e_qwhen:"Bạn {W} khi nào?",e_where:"Bạn {W} ở đâu?",e_how:"Bạn {W} thế nào?",e_not:"Tôi không phải {W}.",e_dont:"Tôi không {W}.",e_cant:"Tôi không thể {W}.",e_never:"Tôi chưa bao giờ {W}.",e_dont_have:"Tôi không cần {W}." }
  };
  Object.keys(expr).forEach(lang=>{
    Object.keys(expr[lang]).forEach(id=>{ if(E[id]) E[id].tr[lang]={ t:expr[lang][id] }; });
  });

  /* ---------- 文法メモ（英語）: 入れる語がどう変化するか ---------- */
  const gnotes = { en:{
    e_am:"be動詞。I→am / you・複数→are / he・she→is。あとに形容詞や名詞をそのまま置く（I'm tired）。",
    e_name:"名前をそのまま入れる。I'm 〜／My name is 〜 どちらもOK。",
    e_do:"動詞は原形。ただし主語が he/she/it のときは動詞に -s（go→goes, like→likes）。",
    e_ing:"「〜している最中」。動詞を ing 形に（go→going, study→studying）。be動詞＋〜ing。",
    e_can:"can ＋ 動詞の原形。can は活用しない（× cans）。",
    e_like:"名詞ならそのまま。動詞なら to＋原形 か 〜ing（like to go／like going）。",
    e_was:"過去のbe動詞。I/he/she→was、you/複数→were。あとに形容詞・名詞。",
    e_did:"動詞を過去形に。規則動詞は -ed（like→liked）、不規則は変化（go→went, eat→ate, see→saw）。",
    e_have:"経験「〜したことがある」。動詞を過去分詞に（go→gone, eat→eaten, see→seen）。have＋過去分詞。",
    e_been:"been to で「〜へ行ったことがある」。あとに場所を入れる。",
    e_if:"「もし〜なら」。あとに〈主語＋動詞〉の文（If you're free…）。条件は現在形で表す。",
    e_when:"「〜のとき」。あとに〈主語＋動詞〉の文（When you arrive…）。",
    e_please:"依頼。Can you ＋ 動詞の原形（Can you come?）。Please＋原形でも可。",
    e_lets:"提案「〜しよう」。Let's ＋ 動詞の原形（Let's eat）。",
    e_think:"「〜だと思う」。think のあとに〈主語＋動詞〉の文（I think it's good）。",
    e_wanna:"wanna＝want to のくだけた形。wanna ＋ 動詞の原形（I wanna go）。",
    e_gotta:"gotta＝(have) got to のくだけた形。gotta ＋ 動詞の原形（I gotta go）。",
    e_is:"〈名詞〉is〈形容詞〉。主語が複数なら is→are（Dogs are cute）。",
    e_gonna:"未来。gonna＝going to のくだけた形。gonna ＋ 動詞の原形（I'm gonna go）。",
    e_are_you:"疑問。be動詞を前に出す。あとに形容詞・名詞（Are you busy?）。",
    e_do_you:"疑問。Do＋主語＋動詞の原形（Do you eat…?）。he/she なら Does。",
    e_have_you:"経験の疑問。Have you ever ＋ 過去分詞（…ever been?）。",
    e_qwhen:"When do you ＋動詞の原形? で「いつ〜しますか」。時を尋ねる（When do you go?）。he/she なら does。",
    e_where:"Where do you ＋動詞の原形? で「どこで〜しますか」。場所を尋ねる（Where do you live?）。he/she なら does。",
    e_how:"How do you ＋動詞の原形? で「どのように〜しますか」。方法・手段を尋ねる（How do you go?）。he/she なら does。",
    e_not:"否定。be動詞＋not（I'm not…）。あとに形容詞・名詞。",
    e_dont:"否定。don't ＋ 動詞の原形。he/she なら doesn't。",
    e_cant:"can't ＋ 動詞の原形（I can't come）。",
    e_never:"never ＋ 過去分詞（I've never seen…）。「一度も〜ない」。",
    e_dont_have:"「〜しなくてよい」。don't have to ＋ 動詞の原形。"
  }, id:{
    e_am:"インドネシア語に be動詞はない。Saya＋形容詞/名詞をそのまま置く（Saya lelah＝疲れてる）。",
    e_name:"名前をそのまま。Nama saya＝「私の名前は」。",
    e_do:"動詞は活用しない。主語や時制が変わっても形は同じ（saya makan／dia makan）。",
    e_ing:"sedang＋動詞で「〜している最中」。動詞は変化なし。",
    e_can:"bisa＋動詞（形はそのまま）。",
    e_like:"suka＋名詞/動詞（どちらもそのまま）。",
    e_was:"形容詞は過去でも変化なし。過去は tadi／kemarin など時間の語で表す。be動詞なし。",
    e_did:"動詞は変化しない。過去は kemarin（昨日）等の時間語や sudah（もう〜した）で表す。",
    e_have:"pernah＋動詞で「〜したことがある」。動詞は変化なし。",
    e_been:"pernah ke＋場所で「〜へ行ったことがある」。",
    e_if:"kalau＋〈文〉。動詞は変化なし。",
    e_when:"saat（または ketika）＋〈文〉。",
    e_please:"Bisakah kamu＋動詞。より柔らかい依頼は tolong＋動詞。",
    e_lets:"Ayo＋動詞で「〜しよう」。",
    e_think:"Menurut saya（私の考えでは）＋〈文〉。",
    e_wanna:"ingin＋動詞で「〜したい」。口語では mau も同義。",
    e_gotta:"harus＋動詞で「〜しなければ」。",
    e_is:"〈名詞〉itu〈形容詞〉。be動詞なし。itu が主題を示す（Makanan itu enak）。複数でも形は不変。",
    e_gonna:"akan＋動詞で未来。口語では mau も使う。",
    e_are_you:"Apakah＋主語＋形容詞/名詞。Apakah を省いて語尾を上げるだけでも疑問になる。",
    e_do_you:"Apakah kamu＋動詞（変化なし）。Apakah は省略可。",
    e_have_you:"Pernahkah kamu＋動詞（または Kamu pernah…?）で経験を尋ねる。",
    e_qwhen:"Kapan＋主語＋動詞で「いつ〜しますか」。動詞は変化なし（Kapan kamu makan?）。",
    e_where:"Di mana＋主語＋動詞で「どこで〜しますか」。動詞は変化なし。",
    e_how:"Bagaimana＋主語＋動詞で「どのように〜しますか」。動詞は変化なし。",
    e_not:"名詞の否定は bukan（Saya bukan pelajar）。※形容詞・動詞の否定は tidak なので使い分けに注意。",
    e_dont:"tidak＋動詞/形容詞で否定。",
    e_cant:"tidak bisa＋動詞。",
    e_never:"belum pernah＋動詞で「まだ一度も〜ない」。",
    e_dont_have:"tidak harus（＝tidak perlu）＋動詞で「〜しなくてよい」。"
  }, zh:{
    e_am:"「是」は名詞・身分に使う（我是学生）。形容詞のときは 是 を使わず「我很＋形容詞」（我很累＝疲れてる）。",
    e_name:"我叫＋名前。「我叫〜」で自己紹介。",
    e_do:"動詞はそのまま。中国語は活用・時制変化がない。",
    e_ing:"正在＋動詞で進行「〜している」。文末に 呢 も付く（我正在吃呢）。",
    e_can:"会＋動詞は「（習って）できる」。許可・可能は 可以／能。",
    e_like:"喜欢＋名詞/動詞（どちらもそのまま）。",
    e_was:"時制変化はない。形容詞は 很 を伴う（那时很累）。過去は「那时／以前」など時間語で表す。",
    e_did:"動詞＋了 で完了。過去は「昨天」など時間語＋了。動詞自体は変化しない。",
    e_have:"動詞＋过 で経験「〜したことがある」。",
    e_been:"去过＋場所で「〜へ行ったことがある」。",
    e_if:"如果＋〈文〉。後半に 就 を添えることが多い（如果…就…）。",
    e_when:"〈文〉＋的时候 で「〜のとき」。",
    e_please:"你可以＋動詞＋吗？ で依頼。より丁寧には 请＋動詞。",
    e_lets:"我们一起＋動詞＋吧 で「一緒に〜しよう」。",
    e_think:"我觉得＋〈文〉で「〜だと思う」。",
    e_wanna:"想＋動詞で「〜したい」。",
    e_gotta:"得(děi)＋動詞で「〜しなければ」。必须 も同様。",
    e_is:"形容詞述語は 很 を伴うのが基本（〈名詞〉很好）。是 は使わない。",
    e_gonna:"要＋動詞で「〜するつもり／〜する」（意志・未来）。",
    e_are_you:"文末に 吗 を付けて疑問。形容詞なら「你累吗？」（很は不要）。名詞・身分なら「你是…吗？」と 是 が要る。",
    e_do_you:"你＋動詞＋吗？ で「〜しますか」。",
    e_have_you:"你＋動詞＋过吗？ で経験を尋ねる（你去过吗？）。",
    e_qwhen:"「いつ」は 什么时候 を動詞の前に置く（你什么时候{W}？）。語順は平叙文と同じ。",
    e_where:"「どこで」は 在哪里 を動詞の前に置く（你在哪里工作？）。語順は平叙文と同じ。",
    e_how:"「どのように」は 怎么 を動詞の前に置く（你怎么{W}？）。方法を尋ねる。",
    e_not:"不是＋名詞 で名詞の否定。形容詞は「不＋形容詞」（我不累）。過去の否定は 没(有)＋動詞。",
    e_dont:"不＋動詞 で否定（習慣・現在）。過去の否定は 没＋動詞。",
    e_cant:"不能＋動詞（できない・許されない）。能力 会 の否定は 不会。",
    e_never:"从没(从来没有)＋動詞＋过 で「一度も〜ない」。",
    e_dont_have:"不用＋動詞 で「〜しなくてよい」。"
  }, vi:{
    e_am:"là は名詞・身分に使う（Tôi là học sinh）。形容詞のときは là を使わない（Tôi mệt＝疲れてる）。",
    e_name:"Tôi tên là＋名前で「私の名前は〜」。",
    e_do:"動詞はそのまま。ベトナム語は活用・時制変化がない。",
    e_ing:"đang＋動詞で進行「〜している」。",
    e_can:"có thể＋動詞で「〜できる」。",
    e_like:"thích＋名詞/動詞（どちらもそのまま）。",
    e_was:"形容詞は変化なし。過去は đã や時間語（hôm qua など）で表す。",
    e_did:"動詞は変化しない。過去は hôm qua など時間語、または動詞の前に đã を置く。",
    e_have:"đã từng＋動詞で経験「〜したことがある」。",
    e_been:"đã đến＋場所で「〜へ行ったことがある」。",
    e_if:"Nếu＋〈文〉。後半に thì を添えることも（Nếu…thì…）。",
    e_when:"Khi＋〈文〉で「〜のとき」。",
    e_please:"Bạn có thể＋動詞＋không? で依頼。丁寧には làm ơn＋動詞。",
    e_lets:"Hãy cùng＋動詞で「一緒に〜しよう」。文末に nhé も柔らかい。",
    e_think:"Tôi nghĩ＋〈文〉で「〜だと思う」。",
    e_wanna:"muốn＋動詞で「〜したい」。",
    e_gotta:"phải＋動詞で「〜しなければ」。",
    e_is:"形容詞述語に là は不要（〈名詞〉＋形容詞）。「とても」は rất＋形容詞。thì は主題の強調。",
    e_gonna:"sẽ＋動詞で未来「〜するつもり」。",
    e_are_you:"Bạn có＋形容詞＋không? で疑問（Bạn có mệt không?）。名詞なら Bạn có phải là…không?。",
    e_do_you:"Bạn có＋動詞＋không? で「〜しますか」。",
    e_have_you:"Bạn đã từng＋動詞＋chưa? で経験を尋ねる。",
    e_qwhen:"「いつ」は khi nào を文末に置くと未来・習慣（Bạn đi khi nào?）。文頭 khi nào は過去の意味。",
    e_where:"「どこで」は ở đâu を文末に置く（… ở đâu?）。語順は平叙文と同じ。",
    e_how:"「どのように」は (như) thế nào を文末に置く（Bạn làm thế nào?）。方法を尋ねる。",
    e_not:"名詞の否定は không phải (là)（Tôi không phải là học sinh）。形容詞・動詞は không だけ（Tôi không mệt）。",
    e_dont:"không＋動詞で否定。",
    e_cant:"không thể＋動詞で「〜できない」。",
    e_never:"chưa bao giờ＋動詞で「一度も〜ない」。",
    e_dont_have:"không cần＋動詞で「〜しなくてよい」。"
  }, hi:{
    e_am:"मैं …हूँ で「私は〜です」。形容詞・名詞は話者の性で変化（男 अच्छा／女 अच्छी）。हूँ は1人称現在のbe。",
    e_name:"मेरा नाम …है で「私の名前は〜」。名前をそのまま入れる。",
    e_do:"習慣「〜する」。本来は動詞が活用する（行く जाना→男 मैं जाता हूँ／女 मैं जाती हूँ）。काम・पढ़ाई など動作名詞は「…करता हूँ」でOK。このテンプレは簡易形。",
    e_ing:"進行「〜している」。動詞語幹＋रहा/रही/रहे＋हूँ（男 कर रहा हूँ／女 कर रही हूँ）。",
    e_can:"「〜できる」。動詞語幹＋सकता/सकती हूँ（性で変化）。",
    e_like:"「〜が好き」。好む人は मुझे（को格）で示し、好きな物が主語。物の数で है/हैं。",
    e_was:"過去のbe動詞。性・数で था(男)／थी(女)／थे(複)。形容詞も一致。",
    e_did:"過去（他動詞）。主語に ने が付き、動詞は目的語の性・数に一致（मैंने खाना खाया／चाय पी）。",
    e_have:"経験・完了。ने＋完了分詞＋है（मैंने देखा है）。目的語に一致。",
    e_been:"「〜へ行ったことがある」。मैं …गया/गई हूँ（性で変化）。場所には को/में などの後置詞。",
    e_if:"अगर＋〈文〉, तो … で「もし〜なら、〜」。",
    e_when:"जब＋〈文〉, तब … で「〜のとき、〜」。",
    e_please:"依頼。क्या आप …सकते हैं? は丁寧。命令なら 動詞＋इए（कीजिए）。",
    e_lets:"चलो …करते हैं で「（一緒に）〜しよう」。",
    e_think:"मुझे लगता है (कि) … で「〜だと思う」。",
    e_wanna:"「〜したい」。不定詞（…ना）＋चाहिए、または मुझे …करना है。",
    e_gotta:"「〜しなければ」。मुझे …करना पड़ेगा／है（義務）。",
    e_is:"「〈名詞〉は〜だ」。形容詞は主語の性・数で変化（अच्छा/अच्छी/अच्छे）＋है/हैं。",
    e_gonna:"近未来・意志「〜するつもり」。…करने वाला/वाली हूँ（性で変化）。",
    e_are_you:"क्या आप …हैं? で疑問。क्या を文頭に置くか語尾を上げる。",
    e_do_you:"क्या आप …करते हैं? で「〜しますか」。本来は動詞が活用（आप जाते हैं?）。",
    e_have_you:"क्या आपने कभी …किया है? で経験の疑問（ने＋完了）。",
    e_qwhen:"「いつ」は कब を動詞の前に置く（आप कब …?）。時を尋ねる。",
    e_where:"「どこで」は कहाँ を動詞の前に置く（आप कहाँ …?）。",
    e_how:"「どのように」は कैसे を動詞の前に置く（आप कैसे …?）。方法を尋ねる。",
    e_not:"否定は नहीं を動詞・形容詞の前に。मैं …नहीं हूँ で「〜ではない」。",
    e_dont:"मैं …नहीं करता/करती で「〜しない」（性で変化）。",
    e_cant:"मैं …नहीं कर सकता/सकती で「〜できない」。",
    e_never:"मैंने कभी …नहीं किया で「一度も〜ない」（ने＋完了）。",
    e_dont_have:"…करने की ज़रूरत नहीं で「〜する必要はない」。"
  }, ne:{
    e_am:"म …हुँ で「私は〜です」。हुँ は1人称のbe。形容詞・名詞をそのまま。",
    e_name:"मेरो नाम …हो で「私の名前は〜」。",
    e_do:"習慣「〜する」。本来は動詞が人称で活用（行く जानु→म जान्छु／तपाईं जानुहुन्छ）。काम など動作名詞は「…गर्छु」でOK。このテンプレは簡易形。",
    e_ing:"進行「〜している」。動詞＋दैछु（म गर्दैछु／खाँदैछु）。",
    e_can:"「〜できる」。動詞＋न सक्छु（जान सक्छु）。",
    e_like:"「〜が好き」。好む人は मलाई（लाई格）、対象＋मन पर्छ。",
    e_was:"過去のbe。थिएँ(私)／थियो(それ)／थिए。",
    e_did:"過去（他動詞）。主語に ले が付く（मैले）。動詞は人称で活用（1人称過去 गरें）。",
    e_have:"完了・経験。…गरेको छु（〜したことがある／してある）。",
    e_been:"म …गएको छु で「〜へ行ったことがある」。",
    e_if:"यदि …भने, … で「もし〜なら」。",
    e_when:"…बेला で「〜のとき」（…गर्दा も可）。",
    e_please:"तपाईं …गर्न सक्नुहुन्छ? は丁寧な依頼。命令は …गर्नुहोस्。",
    e_lets:"…गरौं で「（一緒に）〜しよう」。",
    e_think:"मलाई लाग्छ … で「〜だと思う」。",
    e_wanna:"मलाई …गर्न मन छ で「〜したい」。",
    e_gotta:"मैले …गर्नुपर्छ で「〜しなければ」。",
    e_is:"「〈名詞〉は〜だ」。形容詞＋छ（राम्रो छ）。",
    e_gonna:"म …गर्न लागेको छु で「今〜しようとしている／するつもり」。",
    e_are_you:"तपाईं …हुनुहुन्छ? で疑問（敬称）。相手により तिमी …छौ? など活用が変わる。",
    e_do_you:"तपाईं …गर्नुहुन्छ? で「〜しますか」（敬称）。",
    e_have_you:"तपाईंले कहिल्यै …गर्नुभएको छ? で経験の疑問。",
    e_qwhen:"「いつ」は कहिले を動詞の前に置く（तपाईं कहिले …?）。時を尋ねる。",
    e_where:"「どこで」は कहाँ を動詞の前に置く（तपाईं कहाँ …?）。",
    e_how:"「どのように」は कसरी を動詞の前に置く（तपाईं कसरी …?）。方法を尋ねる。",
    e_not:"身分・名詞の否定は होइन（म …होइन）。形容詞・存在の否定は छैन（म थकित छैन）。",
    e_dont:"म …गर्दिनँ で「〜しない」（否定の活用）。",
    e_cant:"म …गर्न सक्दिनँ で「〜できない」。",
    e_never:"मैले कहिल्यै …गरेको छैन で「一度も〜ない」。",
    e_dont_have:"…गर्नु पर्दैन で「〜する必要はない」。"
  }};
  Object.keys(gnotes).forEach(lang=>{
    Object.keys(gnotes[lang]).forEach(id=>{ if(E[id]&&E[id].tr[lang]) E[id].tr[lang].g = gnotes[lang][id]; });
  });

  /* ---------- 例文（コア24文 × 各言語）※ jp対訳は英語エントリを流用 ---------- */
  const sents = {
    "name|e_name":   { hi:"मेरा नाम केन है।", ne:"मेरो नाम केन हो।", id:"Nama saya Ken.", zh:"我叫Ken。", vi:"Tôi tên là Ken." },
    "student|e_am":  { hi:"मैं छात्र हूँ।", ne:"म विद्यार्थी हुँ।", id:"Saya pelajar.", zh:"我是学生。", vi:"Tôi là học sinh." },
    "japanese|e_am": { hi:"मैं जापानी हूँ।", ne:"म जापानी हुँ।", id:"Saya orang Jepang.", zh:"我是日本人。", vi:"Tôi là người Nhật." },
    "tired|e_am":    { hi:"मैं आज बहुत थका हुआ हूँ।", ne:"म आज धेरै थकित छु।", id:"Saya sangat lelah hari ini.", zh:"我今天很累。", vi:"Hôm nay tôi rất mệt." },
    "hungry|e_am":   { hi:"मुझे अभी भूख लगी है।", ne:"मलाई अहिले भोक लाग्यो।", id:"Saya lapar sekarang.", zh:"我现在很饿。", vi:"Bây giờ tôi đói." },
    "busy|e_am":     { hi:"मैं आज व्यस्त हूँ।", ne:"म आज व्यस्त छु।", id:"Saya sibuk hari ini.", zh:"我今天很忙。", vi:"Hôm nay tôi bận." },
    "home|e_wanna":  { hi:"मुझे घर जाना है।", ne:"मलाई घर जान मन छ।", id:"Saya ingin pulang.", zh:"我想回家。", vi:"Tôi muốn về nhà." },
    "food|e_wanna":  { hi:"मुझे कुछ खाना है।", ne:"मलाई केही खान मन छ।", id:"Saya ingin makan sesuatu.", zh:"我想吃点东西。", vi:"Tôi muốn ăn gì đó." },
    "water|e_wanna": { hi:"मुझे पानी पीना है।", ne:"मलाई पानी पिउन मन छ।", id:"Saya ingin minum air.", zh:"我想喝水。", vi:"Tôi muốn uống nước." },
    "friend|e_like": { hi:"मुझे अपने दोस्त पसंद हैं।", ne:"मलाई मेरा साथीहरू मन पर्छ।", id:"Saya suka teman-teman saya.", zh:"我喜欢我的朋友。", vi:"Tôi thích bạn bè của tôi." },
    "music|e_like":  { hi:"मुझे यह संगीत पसंद है।", ne:"मलाई यो संगीत मन पर्छ।", id:"Saya suka musik ini.", zh:"我喜欢这个音乐。", vi:"Tôi thích nhạc này." },
    "food|e_like":   { hi:"मुझे जापानी खाना पसंद है।", ne:"मलाई जापानी खाना मन पर्छ।", id:"Saya suka makanan Jepang.", zh:"我喜欢日本菜。", vi:"Tôi thích món ăn Nhật." },
    "movie|e_wanna": { hi:"मुझे आज रात फ़िल्म देखनी है।", ne:"मलाई आज राति फिल्म हेर्न मन छ।", id:"Saya ingin menonton film malam ini.", zh:"我今晚想看电影。", vi:"Tối nay tôi muốn xem phim." },
    "bathroom|e_where":{ hi:"बाथरूम कहाँ है?", ne:"शौचालय कहाँ छ?", id:"Di mana toiletnya?", zh:"洗手间在哪里？", vi:"Nhà vệ sinh ở đâu?" },
    "station|e_where":{ hi:"स्टेशन कहाँ है?", ne:"स्टेशन कहाँ छ?", id:"Di mana stasiunnya?", zh:"车站在哪里？", vi:"Nhà ga ở đâu?" },
    "money|e_dont_have":{ hi:"मेरे पास ज़्यादा पैसे नहीं हैं।", ne:"मसँग धेरै पैसा छैन।", id:"Saya tidak punya banyak uang.", zh:"我没有很多钱。", vi:"Tôi không có nhiều tiền." },
    "time|e_dont_have":{ hi:"आज मेरे पास समय नहीं है।", ne:"आज मसँग समय छैन।", id:"Saya tidak punya waktu hari ini.", zh:"我今天没有时间。", vi:"Hôm nay tôi không có thời gian." },
    "weather|e_is":  { hi:"आज मौसम अच्छा है।", ne:"आज मौसम राम्रो छ।", id:"Cuacanya bagus hari ini.", zh:"今天天气很好。", vi:"Hôm nay thời tiết đẹp." },
    "hungry|e_are_you":{ hi:"क्या आपको भूख लगी है?", ne:"तपाईंलाई भोक लाग्यो?", id:"Apakah kamu lapar?", zh:"你饿吗？", vi:"Bạn đói không?" },
    "busy|e_are_you":{ hi:"क्या आप अभी व्यस्त हैं?", ne:"तपाईं अहिले व्यस्त हुनुहुन्छ?", id:"Apakah kamu sibuk sekarang?", zh:"你现在忙吗？", vi:"Bây giờ bạn bận không?" },
    "good|e_am":     { hi:"मैं ठीक हूँ, धन्यवाद।", ne:"म ठीक छु, धन्यवाद।", id:"Saya baik, terima kasih.", zh:"我很好，谢谢。", vi:"Tôi khỏe, cảm ơn." },
    "photo|e_can":   { hi:"क्या आप एक फ़ोटो ले सकते हैं?", ne:"तपाईं एउटा फोटो खिच्न सक्नुहुन्छ?", id:"Bisakah kamu memotret?", zh:"你可以拍张照吗？", vi:"Bạn chụp ảnh giúp được không?" },
    "shopping|e_lets":{ hi:"चलो खरीदारी करने चलें!", ne:"किनमेल गर्न जाऔं!", id:"Ayo pergi belanja!", zh:"我们去购物吧！", vi:"Đi mua sắm thôi!" },
    "car|e_gonna":   { hi:"मैं एक नई गाड़ी खरीदने वाला हूँ।", ne:"म नयाँ गाडी किन्न लागेको छु।", id:"Saya akan membeli mobil baru.", zh:"我要买一辆新车。", vi:"Tôi sẽ mua xe mới." }
  };
  Object.keys(sents).forEach(key=>{
    const s = SM[key]; if(!s) return;
    Object.keys(sents[key]).forEach(lang=>{ s.tr[lang]={ s:sents[key][lang] }; });
  });

  /* ---------- Day1の例文（動詞13語×2文）を5言語で手作り翻訳 ---------- */
  const sents2 = {
    "go|e_wanna":   { hi:"मुझे अभी जाना है।", ne:"मलाई अहिले जान मन छ।", id:"Saya ingin pergi sekarang.", zh:"我现在想去。", vi:"Bây giờ tôi muốn đi." },
    "go|e_gonna":   { hi:"मैं वहाँ जाने वाला हूँ।", ne:"म त्यहाँ जान लागेको छु।", id:"Saya akan pergi ke sana.", zh:"我要去那里。", vi:"Tôi sẽ đến đó." },
    "come|e_please":{ hi:"क्या आप यहाँ आ सकते हैं?", ne:"तपाईं यहाँ आउन सक्नुहुन्छ?", id:"Bisakah kamu datang ke sini?", zh:"你可以过来吗？", vi:"Bạn đến đây được không?" },
    "come|e_did":   { hi:"वह कल आई थी।", ne:"उनी हिजो आइन्।", id:"Dia datang kemarin.", zh:"她昨天来了。", vi:"Hôm qua cô ấy đã đến." },
    "live|e_do":    { hi:"मैं टोक्यो में रहता हूँ।", ne:"म टोकियोमा बस्छु।", id:"Saya tinggal di Tokyo.", zh:"我住在东京。", vi:"Tôi sống ở Tokyo." },
    "live|e_wanna": { hi:"मुझे विदेश में रहना है।", ne:"मलाई विदेशमा बस्न मन छ।", id:"Saya ingin tinggal di luar negeri.", zh:"我想住在国外。", vi:"Tôi muốn sống ở nước ngoài." },
    "eat|e_wanna":  { hi:"मुझे कुछ खाना है।", ne:"मलाई केही खान मन छ।", id:"Saya ingin makan sesuatu.", zh:"我想吃点东西。", vi:"Tôi muốn ăn gì đó." },
    "eat|e_did":    { hi:"मैंने बहुत खाया।", ne:"मैले धेरै खाएँ।", id:"Saya makan banyak.", zh:"我吃了很多。", vi:"Tôi đã ăn rất nhiều." },
    "buy|e_gonna":  { hi:"मैं इसे खरीदने वाला हूँ।", ne:"म यो किन्न लागेको छु।", id:"Saya akan membelinya.", zh:"我要买它。", vi:"Tôi sẽ mua nó." },
    "buy|e_wanna":  { hi:"मुझे नए जूते खरीदने हैं।", ne:"मलाई नयाँ जुत्ता किन्न मन छ।", id:"Saya ingin membeli sepatu baru.", zh:"我想买新鞋。", vi:"Tôi muốn mua giày mới." },
    "see|e_can":    { hi:"मुझे यह दिख रहा है।", ne:"मलाई यो देखिन्छ।", id:"Saya bisa melihatnya.", zh:"我能看见它。", vi:"Tôi có thể nhìn thấy nó." },
    "see|e_wanna":  { hi:"मैं आपसे मिलना चाहता हूँ।", ne:"मलाई तपाईंलाई भेट्न मन छ।", id:"Saya ingin bertemu kamu.", zh:"我想见你。", vi:"Tôi muốn gặp bạn." },
    "use|e_please": { hi:"क्या मैं इसे इस्तेमाल कर सकता हूँ?", ne:"के म यो प्रयोग गर्न सक्छु?", id:"Boleh saya pakai ini?", zh:"我可以用这个吗？", vi:"Tôi dùng cái này được không?" },
    "use|e_do":     { hi:"मैं इसे हर दिन इस्तेमाल करता हूँ।", ne:"म यो हरेक दिन प्रयोग गर्छु।", id:"Saya memakainya setiap hari.", zh:"我每天都用它。", vi:"Tôi dùng nó mỗi ngày." },
    "hear|e_can":   { hi:"मुझे आपकी आवाज़ सुनाई दे रही है।", ne:"मलाई तपाईंको आवाज सुनिन्छ।", id:"Saya bisa mendengar kamu.", zh:"我能听见你。", vi:"Tôi có thể nghe thấy bạn." },
    "hear|e_did":   { hi:"मैंने खबर सुनी।", ne:"मैले समाचार सुनें।", id:"Saya mendengar beritanya.", zh:"我听到那个消息了。", vi:"Tôi đã nghe tin đó." },
    "wake|e_did":   { hi:"मैं जल्दी उठा।", ne:"म चाँडै उठें।", id:"Saya bangun pagi-pagi.", zh:"我早起了。", vi:"Tôi đã dậy sớm." },
    "wake|e_gotta": { hi:"मुझे जल्दी उठना पड़ेगा।", ne:"मैले चाँडै उठ्नुपर्छ।", id:"Saya harus bangun pagi.", zh:"我得早起。", vi:"Tôi phải dậy sớm." },
    "sleep|e_wanna":{ hi:"मुझे सोना है।", ne:"मलाई सुत्न मन छ।", id:"Saya ingin tidur.", zh:"我想睡觉。", vi:"Tôi muốn ngủ." },
    "sleep|e_gotta":{ hi:"मुझे अभी सोना पड़ेगा।", ne:"मैले अहिले सुत्नुपर्छ।", id:"Saya harus tidur sekarang.", zh:"我现在得睡了。", vi:"Bây giờ tôi phải ngủ." },
    "speak|e_can":  { hi:"मैं थोड़ा बोल सकता हूँ।", ne:"म अलिकति बोल्न सक्छु।", id:"Saya bisa berbicara sedikit.", zh:"我会说一点。", vi:"Tôi có thể nói một chút." },
    "speak|e_wanna":{ hi:"मुझे अंग्रेज़ी बोलनी है।", ne:"मलाई अंग्रेजी बोल्न मन छ।", id:"Saya ingin berbicara bahasa Inggris.", zh:"我想说英语。", vi:"Tôi muốn nói tiếng Anh." },
    "say|e_wanna":  { hi:"मुझे कुछ कहना है।", ne:"मलाई केही भन्न मन छ।", id:"Saya ingin mengatakan sesuatu.", zh:"我想说点什么。", vi:"Tôi muốn nói điều gì đó." },
    "say|e_did":    { hi:"उसने हाँ कहा।", ne:"उनले हो भने।", id:"Dia bilang ya.", zh:"他说了是。", vi:"Anh ấy đã nói đồng ý." },
    "talk|e_wanna": { hi:"मैं आपसे बात करना चाहता हूँ।", ne:"मलाई तपाईंसँग कुरा गर्न मन छ।", id:"Saya ingin ngobrol dengan kamu.", zh:"我想和你聊天。", vi:"Tôi muốn nói chuyện với bạn." },
    "talk|e_lets":  { hi:"चलो बाद में बात करते हैं।", ne:"पछि कुरा गरौं।", id:"Ayo ngobrol nanti.", zh:"我们待会聊吧。", vi:"Lát nữa nói chuyện nhé." }
  };
  Object.keys(sents2).forEach(key=>{
    const s = SM[key]; if(!s) return;
    Object.keys(sents2[key]).forEach(lang=>{ s.tr[lang]={ s:sents2[key][lang] }; });
  });

  /* ---------- マンダリン Day1: 単語ピンイン ---------- */
  const zhRoma = {
    go:"qù", come:"lái", live:"zhù", eat:"chī", buy:"mǎi", see:"kànjiàn", use:"yòng", hear:"tīngjiàn",
    wake:"qǐchuáng", sleep:"shuìjiào", speak:"shuō", say:"shuō", talk:"liáotiān", work:"gōngzuò",
    know:"zhīdào", meet:"jiànmiàn", wait:"děng", write:"xiě", have:"yǒu", start:"kāishǐ"
  };
  Object.keys(zhRoma).forEach(id=>{ if(W[id]&&W[id].tr.zh) W[id].tr.zh.roma = zhRoma[id]; });

  /* ---------- マンダリン Day1: 例文（漢字＋ピンイン） ---------- */
  const zhSents = {
    "go|e_gonna":   { s:"我要去车站。",            roma:"Wǒ yào qù chēzhàn." },
    "come|e_qwhen": { s:"你什么时候来我家？",      roma:"Nǐ shénme shíhou lái wǒ jiā?" },
    "live|e_where": { s:"你现在住在哪里？",        roma:"Nǐ xiànzài zhù zài nǎlǐ?" },
    "eat|e_lets":   { s:"我们一起吃吧。",          roma:"Wǒmen yìqǐ chī ba." },
    "buy|e_do_you": { s:"你在这里买食物吗？",      roma:"Nǐ zài zhèlǐ mǎi shíwù ma?" },
    "see|e_can":    { s:"我能看见火车。",          roma:"Wǒ néng kànjiàn huǒchē." },
    "use|e_did":    { s:"我昨天用了它。",          roma:"Wǒ zuótiān yòng le tā." },
    "hear|e_did":   { s:"我在公司听见了那个消息。", roma:"Wǒ zài gōngsī tīngjiàn le nàge xiāoxi." },
    "wake|e_gotta": { s:"我明天得早点起床。",      roma:"Wǒ míngtiān děi zǎodiǎn qǐchuáng." },
    "sleep|e_wanna":{ s:"我现在想睡觉。",          roma:"Wǒ xiànzài xiǎng shuìjiào." },
    "speak|e_do":   { s:"我说两种语言。",          roma:"Wǒ shuō liǎng zhǒng yǔyán." },
    "say|e_did":    { s:"他说了一些好话。",        roma:"Tā shuō le yìxiē hǎo huà." },
    "talk|e_wanna": { s:"我想和你的家人聊天。",    roma:"Wǒ xiǎng hé nǐ de jiārén liáotiān." },
    "work|e_do":    { s:"我每天工作。",            roma:"Wǒ měitiān gōngzuò." },
    "know|e_dont":  { s:"我不知道你的名字。",      roma:"Wǒ bù zhīdào nǐ de míngzi." },
    "meet|e_qwhen": { s:"你什么时候和朋友见面？",  roma:"Nǐ shénme shíhou hé péngyǒu jiànmiàn?" },
    "wait|e_please":{ s:"你可以在这里等吗？",      roma:"Nǐ kěyǐ zài zhèlǐ děng ma?" },
    "write|e_ing":  { s:"我正在写消息。",          roma:"Wǒ zhèngzài xiě xiāoxi." },
    "have|e_dont":  { s:"我现在没有钱。",          roma:"Wǒ xiànzài méiyǒu qián." },
    "start|e_qwhen":{ s:"你什么时候开始工作？",    roma:"Nǐ shénme shíhou kāishǐ gōngzuò?" }
  };
  Object.keys(zhSents).forEach(key=>{ const s=SM[key]; if(s) s.tr.zh = { s:zhSents[key].s, roma:zhSents[key].roma }; });

  /* ---------- Day1 例文（英語ベース）の hi / ne / id / vi 訳。Day1文を確実に上書き ---------- */
  const dayOne = {
    "go|e_gonna":   { hi:"मैं स्टेशन जाने वाला हूँ।",        ne:"म स्टेशन जान लागेको छु।",           id:"Saya akan pergi ke stasiun.",       vi:"Tôi sẽ đi đến nhà ga." },
    "come|e_qwhen": { hi:"आप घर कब आते हैं?",                ne:"तपाईं घर कहिले आउनुहुन्छ?",          id:"Kapan kamu datang ke rumah?",       vi:"Khi nào bạn đến nhà tôi?" },
    "live|e_where": { hi:"आप अभी कहाँ रहते हैं?",            ne:"तपाईं अहिले कहाँ बस्नुहुन्छ?",        id:"Di mana kamu tinggal sekarang?",    vi:"Bây giờ bạn sống ở đâu?" },
    "eat|e_lets":   { hi:"चलो साथ में खाते हैं।",            ne:"सँगै खाऔं।",                        id:"Ayo makan bersama.",                vi:"Hãy cùng ăn nhé." },
    "buy|e_do_you": { hi:"क्या आप यहाँ खाना खरीदते हैं?",     ne:"तपाईं यहाँ खाना किन्नुहुन्छ?",        id:"Apakah kamu beli makanan di sini?", vi:"Bạn có mua thức ăn ở đây không?" },
    "see|e_can":    { hi:"मुझे ट्रेन दिख रही है।",           ne:"मलाई रेल देखिन्छ।",                  id:"Saya bisa melihat kereta.",         vi:"Tôi có thể nhìn thấy tàu hỏa." },
    "use|e_did":    { hi:"मैंने कल इसे इस्तेमाल किया।",       ne:"मैले हिजो यो प्रयोग गरें।",           id:"Saya memakainya kemarin.",          vi:"Hôm qua tôi đã dùng nó." },
    "hear|e_did":   { hi:"मैंने काम पर खबर सुनी।",           ne:"मैले काममा समाचार सुनें।",          id:"Saya mendengar berita di tempat kerja.", vi:"Tôi đã nghe tin đó ở chỗ làm." },
    "wake|e_gotta": { hi:"मुझे कल जल्दी उठना पड़ेगा।",        ne:"मैले भोलि चाँडै उठ्नुपर्छ।",          id:"Saya harus bangun pagi besok.",     vi:"Ngày mai tôi phải dậy sớm." },
    "sleep|e_wanna":{ hi:"मुझे अभी सोना है।",               ne:"मलाई अहिले सुत्न मन छ।",             id:"Saya ingin tidur sekarang.",        vi:"Bây giờ tôi muốn ngủ." },
    "speak|e_do":   { hi:"मैं दो भाषाएँ बोलता हूँ।",          ne:"म दुई भाषा बोल्छु।",                 id:"Saya berbicara dua bahasa.",        vi:"Tôi nói hai ngôn ngữ." },
    "say|e_did":    { hi:"उसने कुछ अच्छा कहा।",              ne:"उनले केही राम्रो भने।",              id:"Dia mengatakan sesuatu yang baik.", vi:"Anh ấy đã nói điều gì đó tốt đẹp." },
    "talk|e_wanna": { hi:"मैं आपके परिवार से बात करना चाहता हूँ।", ne:"मलाई तपाईंको परिवारसँग कुरा गर्न मन छ।", id:"Saya ingin ngobrol dengan keluargamu.", vi:"Tôi muốn nói chuyện với gia đình bạn." },
    "work|e_do":    { hi:"मैं हर दिन काम करता हूँ।",          ne:"म हरेक दिन काम गर्छु।",              id:"Saya bekerja setiap hari.",         vi:"Tôi làm việc mỗi ngày." },
    "know|e_dont":  { hi:"मुझे आपका नाम नहीं पता।",          ne:"मलाई तपाईंको नाम थाहा छैन।",         id:"Saya tidak tahu namamu.",           vi:"Tôi không biết tên bạn." },
    "meet|e_qwhen": { hi:"आप अपने दोस्तों से कब मिलते हैं?",   ne:"तपाईं आफ्ना साथीहरूलाई कहिले भेट्नुहुन्छ?", id:"Kapan kamu bertemu teman-temanmu?", vi:"Khi nào bạn gặp bạn bè?" },
    "wait|e_please":{ hi:"क्या आप यहाँ इंतज़ार कर सकते हैं?",  ne:"तपाईं यहाँ पर्खन सक्नुहुन्छ?",        id:"Bisakah kamu menunggu di sini?",    vi:"Bạn có thể chờ ở đây không?" },
    "write|e_ing":  { hi:"मैं अभी एक संदेश लिख रहा हूँ।",      ne:"म अहिले सन्देश लेख्दैछु।",            id:"Saya sedang menulis pesan.",        vi:"Tôi đang viết tin nhắn." },
    "have|e_dont":  { hi:"मेरे पास अभी पैसे नहीं हैं।",        ne:"मसँग अहिले पैसा छैन।",               id:"Saya tidak punya uang sekarang.",   vi:"Bây giờ tôi không có tiền." },
    "start|e_qwhen":{ hi:"आप काम कब शुरू करते हैं?",          ne:"तपाईं काम कहिले सुरु गर्नुहुन्छ?",     id:"Kapan kamu mulai bekerja?",         vi:"Khi nào bạn bắt đầu làm việc?" }
  };
  Object.keys(dayOne).forEach(key=>{ const s=SM[key]; if(!s) return; Object.keys(dayOne[key]).forEach(l=>{ s.tr[l]={ s:dayOne[key][l] }; }); });

  /* ---------- インドネシア語: 残り全単語の例文 ---------- */
  const restId = {
    "family|e_like":"Saya sayang keluarga saya.","hotel|e_been":"Saya pernah ke hotel ini.","train|e_did":"Saya naik kereta hari ini.",
    "book|e_ing":"Saya sedang baca buku.","message|e_gonna":"Saya akan kirim pesan.","rain|e_ing":"Sekarang sedang hujan.",
    "kid|e_was":"Saya dulu anak pemalu.","morning|e_do":"Saya lari di pagi hari.","night|e_do":"Saya baca di malam hari.",
    "people|e_like":"Saya suka bertemu orang baru.","place|e_been":"Saya pernah ke tempat ini.","store|e_gonna":"Saya akan pergi ke toko.",
    "company|e_do":"Saya bekerja di perusahaan besar.","culture|e_like":"Saya suka budaya Jepang.","problem|e_is":"Itu masalah besar.",
    "mom|e_gonna":"Saya akan menelepon ibu saya.","dad|e_is":"Ayah saya sangat tinggi.","nice|e_is":"Teman saya sangat baik.",
    "big|e_is":"Kota ini besar.","small|e_is":"Kamar saya kecil.","hot|e_is":"Hari ini sangat panas.","hard|e_is":"Ini agak sulit.",
    "easy|e_is":"Tes itu mudah.","yummy|e_is":"Ini sangat enak!","famous|e_is":"Tempat ini terkenal.","fun|e_is":"Permainan ini sangat menyenangkan.",
    "cheap|e_is":"Yang ini murah.","pricey|e_is":"Itu terlalu mahal.","sad|e_am":"Saya agak sedih hari ini.","new|e_is":"Ponsel saya baru.",
    "close|e_is":"Stasiunnya dekat.","far|e_is":"Bandaranya jauh.","important|e_is":"Ini sangat penting.","different|e_is":"Yang ini berbeda.",
    "similar|e_is":"Kita cukup mirip.","pretty|e_is":"Pemandangannya cantik.","long|e_is":"Filmnya panjang.","tall|e_is":"Saudara saya sangat tinggi.",
    "resto|e_wanna":"Saya ingin mencoba restoran itu.","woman|e_is":"Wanita itu sangat baik.","man|e_is":"Pria itu sangat tinggi.",
    "brother|e_is":"Saudara laki-laki saya sangat tinggi.","sister|e_is":"Saudara perempuan saya sangat baik.","every_all|e_is":"Semua baik-baik saja.",
    "finish|e_did":"Saya sudah selesai bekerja.","think|e_do":"Saya pikir begitu.","send|e_gonna":"Saya akan kirim pesan.",
    "understand|e_do":"Saya mengerti.","read|e_ing":"Saya sedang baca buku.","help|e_please":"Bisakah kamu bantu saya?",
    "like|e_do":"Saya suka itu.","enter|e_please":"Boleh saya masuk?","arrive|e_did":"Saya tiba di stasiun.","remember|e_do":"Saya ingat kamu.",
    "quit|e_gonna":"Saya akan berhenti merokok.","become|e_wanna":"Saya ingin menjadi guru.","study|e_gotta":"Saya harus belajar malam ini.",
    "ride|e_wanna":"Saya ingin naik kereta.","go_home|e_wanna":"Saya ingin pulang.","happy|e_am":"Saya sangat senang hari ini.",
    "favorite|e_is":"Ini favorit saya.","foreign|e_is":"Ini negara asing.","smart|e_is":"Dia sangat pintar.","very|e_is":"Hari ini sangat panas.",
    "a_little|e_am":"Saya sedikit lelah.","maybe|e_gonna":"Mungkin saya akan pergi besok.","together|e_lets":"Ayo belajar bersama.",
    "later|e_lets":"Ayo ngobrol nanti.","usually|e_do":"Saya biasanya bangun pagi.","still|e_ing":"Saya masih bekerja.",
    "also|e_do":"Saya juga berbicara bahasa Inggris.","often|e_do":"Saya sering bertemu teman saya.","only|e_have":"Saya hanya punya satu mobil.",
    "about|e_is":"Sekitar sepuluh dolar.","well|e_can":"Saya bisa berbicara bahasa Inggris dengan baik.","again|e_lets":"Ayo bertemu lagi.",
    "with|e_wanna":"Saya ingin pergi dengan kamu.","from|e_am":"Saya dari Jepang.","for|e_did":"Saya membeli makanan untuk kamu.",
    "of|e_is":"Dia salah satu dari teman saya.","at|e_am":"Saya di rumah sekarang.","to|e_gonna":"Saya akan pergi ke stasiun.",
    "or|e_do_you":"Apakah kamu mau air atau makanan?","so|e_am":"Saya lelah, jadi saya ingin tidur.","but|e_like":"Saya suka itu, tapi mahal.",
    "and|e_like":"Saya suka makanan dan musik.","what|e_do_you":"Apa yang kamu makan?","when|e_qwhen":"Kapan kamu mulai?",
    "where|e_where":"Di mana kamu tinggal?","how|e_how":"Bagaimana kamu pergi ke tempat kerja?","how_much|e_is":"Berapa harga ini?",
    "how_long|e_do_you":"Berapa lama kamu bekerja?","why|e_do_you":"Kenapa kamu belajar bahasa Inggris?","who|e_is":"Siapa pria itu?",
    "which|e_do_you":"Yang mana yang kamu suka?","what_time|e_do_you":"Jam berapa kamu bangun?","how_old|e_are_you":"Berapa umur kamu?",
    "here|e_do":"Saya tinggal di sini.","there|e_been":"Saya di sana kemarin.","today|e_am":"Saya sibuk hari ini.",
    "tomorrow|e_gonna":"Saya akan pergi besok.","yesterday|e_did":"Saya bertemu teman kemarin.","day|e_do":"Saya bekerja setiap hari.",
    "week|e_gonna":"Saya akan bepergian minggu depan.","month|e_did":"Saya mulai bulan ini.","year|e_am":"Saya sibuk tahun ini.",
    "now|e_wanna":"Saya ingin tidur sekarang.","one|e_have":"Saya punya satu saudara.","two|e_have":"Saya punya dua teman.",
    "three|e_have":"Saya punya tiga mobil.","yes|phrase":"Ya, saya bisa.","awesome|phrase":"Itu keren!","really|phrase":"Benarkah? Keren.",
    "no|phrase":"Tidak, saya tidak.","too_bad|phrase":"Sayang sekali.","i_see|phrase":"Oh begitu, masuk akal.","g_morning|phrase":"Selamat pagi!",
    "hi|phrase":"Halo, apa kabar?","g_evening|phrase":"Selamat malam!","bye|phrase":"Sampai jumpa nanti.","excuse_me|phrase":"Permisi, bisakah kamu bantu saya?",
    "thanks|phrase":"Terima kasih banyak!","sorry|phrase":"Maaf, saya terlambat.","how_are_you|phrase":"Apa kabar hari ini?","nice_meet|phrase":"Senang bertemu denganmu.",
    "be|e_wanna":"Saya ingin menjadi pelajar.","japan|e_been":"Saya pernah ke Jepang.","lang|e_ing":"Saya sedang belajar bahasa Indonesia.",
    "a_lot|e_have":"Saya punya banyak teman.","every|e_do":"Saya belajar setiap hari.","first|e_is":"Ini pertama kali saya.",
    "last|e_did":"Saya melihatnya minggu lalu.","next|e_gonna":"Saya akan mulai bulan depan."
  };
  Object.keys(restId).forEach(k=>{ const s=SM[k]; if(s) s.tr.id={ s:restId[k] }; });

  /* ---------- マンダリン: 残り全単語の例文（漢字＋ピンイン） ---------- */
  const restZh = {
    "family|e_like":{s:"我爱我的家人。",roma:"Wǒ ài wǒ de jiārén."},
    "hotel|e_been":{s:"我来过这家酒店。",roma:"Wǒ láiguò zhè jiā jiǔdiàn."},
    "train|e_did":{s:"我今天坐了火车。",roma:"Wǒ jīntiān zuòle huǒchē."},
    "book|e_ing":{s:"我正在读书。",roma:"Wǒ zhèngzài dúshū."},
    "message|e_gonna":{s:"我要给你发消息。",roma:"Wǒ yào gěi nǐ fā xiāoxi."},
    "rain|e_ing":{s:"现在正在下雨。",roma:"Xiànzài zhèngzài xiàyǔ."},
    "kid|e_was":{s:"我小时候是个害羞的孩子。",roma:"Wǒ xiǎoshíhou shì ge hàixiū de háizi."},
    "morning|e_do":{s:"我早上跑步。",roma:"Wǒ zǎoshang pǎobù."},
    "night|e_do":{s:"我晚上看书。",roma:"Wǒ wǎnshang kànshū."},
    "people|e_like":{s:"我喜欢和人们见面。",roma:"Wǒ xǐhuan hé rénmen jiànmiàn."},
    "place|e_been":{s:"我来过这个地方。",roma:"Wǒ láiguò zhège dìfang."},
    "store|e_gonna":{s:"我要去商店。",roma:"Wǒ yào qù shāngdiàn."},
    "company|e_do":{s:"我在一家大公司工作。",roma:"Wǒ zài yī jiā dà gōngsī gōngzuò."},
    "culture|e_like":{s:"我喜欢日本文化。",roma:"Wǒ xǐhuan Rìběn wénhuà."},
    "problem|e_is":{s:"那是个大问题。",roma:"Nà shì ge dà wèntí."},
    "mom|e_gonna":{s:"我要给妈妈打电话。",roma:"Wǒ yào gěi māma dǎ diànhuà."},
    "dad|e_is":{s:"我爸爸很高。",roma:"Wǒ bàba hěn gāo."},
    "nice|e_is":{s:"我朋友很友善。",roma:"Wǒ péngyǒu hěn yǒushàn."},
    "big|e_is":{s:"这座城市很大。",roma:"Zhè zuò chéngshì hěn dà."},
    "small|e_is":{s:"我的房间很小。",roma:"Wǒ de fángjiān hěn xiǎo."},
    "hot|e_is":{s:"今天很热。",roma:"Jīntiān hěn rè."},
    "hard|e_is":{s:"这有点难。",roma:"Zhè yǒudiǎn nán."},
    "easy|e_is":{s:"那个考试很简单。",roma:"Nàge kǎoshì hěn jiǎndān."},
    "yummy|e_is":{s:"这个很好吃！",roma:"Zhège hěn hǎochī!"},
    "famous|e_is":{s:"这个地方很有名。",roma:"Zhège dìfang hěn yǒumíng."},
    "fun|e_is":{s:"这个游戏很有趣。",roma:"Zhège yóuxì hěn yǒuqù."},
    "cheap|e_is":{s:"这个很便宜。",roma:"Zhège hěn piányi."},
    "pricey|e_is":{s:"那个太贵了。",roma:"Nàge tài guì le."},
    "sad|e_am":{s:"我今天有点难过。",roma:"Wǒ jīntiān yǒudiǎn nánguò."},
    "new|e_is":{s:"我的手机是新的。",roma:"Wǒ de shǒujī shì xīn de."},
    "close|e_is":{s:"车站很近。",roma:"Chēzhàn hěn jìn."},
    "far|e_is":{s:"机场很远。",roma:"Jīchǎng hěn yuǎn."},
    "important|e_is":{s:"这个很重要。",roma:"Zhège hěn zhòngyào."},
    "different|e_is":{s:"这个不同。",roma:"Zhège bùtóng."},
    "similar|e_is":{s:"我们很相似。",roma:"Wǒmen hěn xiāngsì."},
    "pretty|e_is":{s:"风景很美。",roma:"Fēngjǐng hěn měi."},
    "long|e_is":{s:"那部电影很长。",roma:"Nà bù diànyǐng hěn cháng."},
    "tall|e_is":{s:"我哥哥很高。",roma:"Wǒ gēge hěn gāo."},
    "resto|e_wanna":{s:"我想试试那家餐厅。",roma:"Wǒ xiǎng shìshi nà jiā cāntīng."},
    "woman|e_is":{s:"那个女人很友善。",roma:"Nàge nǚrén hěn yǒushàn."},
    "man|e_is":{s:"那个男人很高。",roma:"Nàge nánrén hěn gāo."},
    "brother|e_is":{s:"我兄弟很高。",roma:"Wǒ xiōngdì hěn gāo."},
    "sister|e_is":{s:"我姐妹很善良。",roma:"Wǒ jiěmèi hěn shànliáng."},
    "every_all|e_is":{s:"一切都很好。",roma:"Yīqiè dōu hěn hǎo."},
    "finish|e_did":{s:"我的工作结束了。",roma:"Wǒ de gōngzuò jiéshù le."},
    "think|e_do":{s:"我想是的。",roma:"Wǒ xiǎng shì de."},
    "send|e_gonna":{s:"我要发送消息。",roma:"Wǒ yào fāsòng xiāoxi."},
    "understand|e_do":{s:"我懂了。",roma:"Wǒ dǒng le."},
    "read|e_ing":{s:"我正在读书。",roma:"Wǒ zhèngzài dúshū."},
    "help|e_please":{s:"你可以帮助我吗？",roma:"Nǐ kěyǐ bāngzhù wǒ ma?"},
    "like|e_do":{s:"我喜欢它。",roma:"Wǒ xǐhuan tā."},
    "enter|e_please":{s:"我可以进入吗？",roma:"Wǒ kěyǐ jìnrù ma?"},
    "arrive|e_did":{s:"我到达了车站。",roma:"Wǒ dàodále chēzhàn."},
    "remember|e_do":{s:"我记得你。",roma:"Wǒ jìde nǐ."},
    "quit|e_gonna":{s:"我要停止吸烟。",roma:"Wǒ yào tíngzhǐ xīyān."},
    "become|e_wanna":{s:"我想成为老师。",roma:"Wǒ xiǎng chéngwéi lǎoshī."},
    "study|e_gotta":{s:"我今晚得学习。",roma:"Wǒ jīnwǎn děi xuéxí."},
    "ride|e_wanna":{s:"我想坐火车。",roma:"Wǒ xiǎng zuò huǒchē."},
    "go_home|e_wanna":{s:"我想回家。",roma:"Wǒ xiǎng huí jiā."},
    "happy|e_am":{s:"我今天很开心。",roma:"Wǒ jīntiān hěn kāixīn."},
    "favorite|e_is":{s:"这是我最喜欢的。",roma:"Zhè shì wǒ zuì xǐhuan de."},
    "foreign|e_is":{s:"这个国家是外国的。",roma:"Zhège guójiā shì wàiguó de."},
    "smart|e_is":{s:"她很聪明。",roma:"Tā hěn cōngmíng."},
    "very|e_is":{s:"今天很热。",roma:"Jīntiān hěn rè."},
    "a_little|e_am":{s:"我有一点累。",roma:"Wǒ yǒu yīdiǎn lèi."},
    "maybe|e_gonna":{s:"也许我明天要去。",roma:"Yěxǔ wǒ míngtiān yào qù."},
    "together|e_lets":{s:"我们一起学习吧。",roma:"Wǒmen yīqǐ xuéxí ba."},
    "later|e_lets":{s:"我们待会聊吧。",roma:"Wǒmen dāihuì liáo ba."},
    "usually|e_do":{s:"我通常早起。",roma:"Wǒ tōngcháng zǎoqǐ."},
    "still|e_ing":{s:"我还在工作。",roma:"Wǒ hái zài gōngzuò."},
    "also|e_do":{s:"我也说英语。",roma:"Wǒ yě shuō Yīngyǔ."},
    "often|e_do":{s:"我经常见朋友。",roma:"Wǒ jīngcháng jiàn péngyǒu."},
    "only|e_have":{s:"我只有一辆车。",roma:"Wǒ zhǐ yǒu yī liàng chē."},
    "about|e_is":{s:"大约十美元。",roma:"Dàyuē shí měiyuán."},
    "well|e_can":{s:"我英语说得很好。",roma:"Wǒ Yīngyǔ shuō de hěn hǎo."},
    "again|e_lets":{s:"我们再见面吧。",roma:"Wǒmen zài jiànmiàn ba."},
    "with|e_wanna":{s:"我想和你一起去。",roma:"Wǒ xiǎng hé nǐ yīqǐ qù."},
    "from|e_am":{s:"我从日本来。",roma:"Wǒ cóng Rìběn lái."},
    "for|e_did":{s:"我为了你买了食物。",roma:"Wǒ wèile nǐ mǎile shíwù."},
    "of|e_is":{s:"他是我的朋友。",roma:"Tā shì wǒ de péngyǒu."},
    "at|e_am":{s:"我现在在家。",roma:"Wǒ xiànzài zài jiā."},
    "to|e_gonna":{s:"我要到车站。",roma:"Wǒ yào dào chēzhàn."},
    "or|e_do_you":{s:"你要水还是食物？",roma:"Nǐ yào shuǐ háishì shíwù?"},
    "so|e_am":{s:"我累了，所以我想睡觉。",roma:"Wǒ lèi le, suǒyǐ wǒ xiǎng shuìjiào."},
    "but|e_like":{s:"我喜欢，但是很贵。",roma:"Wǒ xǐhuan, dànshì hěn guì."},
    "and|e_like":{s:"我喜欢食物和音乐。",roma:"Wǒ xǐhuan shíwù hé yīnyuè."},
    "what|e_do_you":{s:"你吃什么？",roma:"Nǐ chī shénme?"},
    "when|e_qwhen":{s:"你什么时候开始？",roma:"Nǐ shénme shíhou kāishǐ?"},
    "where|e_where":{s:"你住在哪里？",roma:"Nǐ zhù zài nǎlǐ?"},
    "how|e_how":{s:"你怎么去上班？",roma:"Nǐ zěnme qù shàngbān?"},
    "how_much|e_is":{s:"这个多少钱？",roma:"Zhège duōshǎo qián?"},
    "how_long|e_do_you":{s:"你工作多久？",roma:"Nǐ gōngzuò duōjiǔ?"},
    "why|e_do_you":{s:"你为什么学英语？",roma:"Nǐ wèishénme xué Yīngyǔ?"},
    "who|e_is":{s:"那个男人是谁？",roma:"Nàge nánrén shì shéi?"},
    "which|e_do_you":{s:"你喜欢哪个？",roma:"Nǐ xǐhuan nǎge?"},
    "what_time|e_do_you":{s:"你几点起床？",roma:"Nǐ jǐ diǎn qǐchuáng?"},
    "how_old|e_are_you":{s:"你几岁？",roma:"Nǐ jǐ suì?"},
    "here|e_do":{s:"我住在这里。",roma:"Wǒ zhù zài zhèlǐ."},
    "there|e_been":{s:"我去过那里。",roma:"Wǒ qùguò nàlǐ."},
    "today|e_am":{s:"我今天很忙。",roma:"Wǒ jīntiān hěn máng."},
    "tomorrow|e_gonna":{s:"我明天要去。",roma:"Wǒ míngtiān yào qù."},
    "yesterday|e_did":{s:"我昨天见了一个朋友。",roma:"Wǒ zuótiān jiànle yī ge péngyǒu."},
    "day|e_do":{s:"我每天工作。",roma:"Wǒ měitiān gōngzuò."},
    "week|e_gonna":{s:"我下个星期要去旅行。",roma:"Wǒ xià ge xīngqī yào qù lǚxíng."},
    "month|e_did":{s:"我这个月开始了。",roma:"Wǒ zhège yuè kāishǐ le."},
    "year|e_am":{s:"我今年很忙。",roma:"Wǒ jīnnián hěn máng."},
    "now|e_wanna":{s:"我现在想睡觉。",roma:"Wǒ xiànzài xiǎng shuìjiào."},
    "one|e_have":{s:"我有一个兄弟。",roma:"Wǒ yǒu yī ge xiōngdì."},
    "two|e_have":{s:"我有两个朋友。",roma:"Wǒ yǒu liǎng ge péngyǒu."},
    "three|e_have":{s:"我有三辆车。",roma:"Wǒ yǒu sān liàng chē."},
    "yes|phrase":{s:"是的，我可以。",roma:"Shì de, wǒ kěyǐ."},
    "awesome|phrase":{s:"太棒了！",roma:"Tài bàng le!"},
    "really|phrase":{s:"真的吗？很酷。",roma:"Zhēnde ma? Hěn kù."},
    "no|phrase":{s:"不，我不。",roma:"Bù, wǒ bù."},
    "too_bad|phrase":{s:"太可惜了。",roma:"Tài kěxī le."},
    "i_see|phrase":{s:"原来如此，有道理。",roma:"Yuánlái rúcǐ, yǒu dàolǐ."},
    "g_morning|phrase":{s:"早上好！",roma:"Zǎoshang hǎo!"},
    "hi|phrase":{s:"你好，你好吗？",roma:"Nǐ hǎo, nǐ hǎo ma?"},
    "g_evening|phrase":{s:"晚上好！",roma:"Wǎnshang hǎo!"},
    "bye|phrase":{s:"再见，待会见。",roma:"Zàijiàn, dāihuì jiàn."},
    "excuse_me|phrase":{s:"打扰一下，你能帮我吗？",roma:"Dǎrǎo yīxià, nǐ néng bāng wǒ ma?"},
    "thanks|phrase":{s:"太谢谢了！",roma:"Tài xièxie le!"},
    "sorry|phrase":{s:"对不起，我迟到了。",roma:"Duìbùqǐ, wǒ chídào le."},
    "how_are_you|phrase":{s:"你今天好吗？",roma:"Nǐ jīntiān hǎo ma?"},
    "nice_meet|phrase":{s:"很高兴认识你。",roma:"Hěn gāoxìng rènshi nǐ."},
    "be|e_wanna":{s:"我想成为学生。",roma:"Wǒ xiǎng chéngwéi xuésheng."},
    "japan|e_been":{s:"我去过日本。",roma:"Wǒ qùguò Rìběn."},
    "lang|e_ing":{s:"我在学中文。",roma:"Wǒ zài xué Zhōngwén."},
    "a_lot|e_have":{s:"我有很多朋友。",roma:"Wǒ yǒu hěnduō péngyǒu."},
    "every|e_do":{s:"我每天学习。",roma:"Wǒ měitiān xuéxí."},
    "first|e_is":{s:"这是我第一次。",roma:"Zhè shì wǒ dì-yī cì."},
    "last|e_did":{s:"我上周见了他。",roma:"Wǒ shàngzhōu jiànle tā."},
    "next|e_gonna":{s:"我下个月要开始。",roma:"Wǒ xià ge yuè yào kāishǐ."}
  };
  Object.keys(restZh).forEach(k=>{ const s=SM[k]; if(s) s.tr.zh={ s:restZh[k].s, roma:restZh[k].roma }; });

  /* ---------- マンダリン: 初期の core/sents2 文にピンインを補完 ---------- */
  const coreRoma = {
    "friend|e_like":"Wǒ xǐhuan wǒ de péngyǒu.","food|e_like":"Wǒ xǐhuan Rìběn cài.","food|e_wanna":"Wǒ xiǎng chī diǎn dōngxi.",
    "movie|e_wanna":"Wǒ jīnwǎn xiǎng kàn diànyǐng.","car|e_gonna":"Wǒ yào mǎi yī liàng xīn chē.","photo|e_can":"Nǐ kěyǐ pāi zhāng zhào ma?",
    "station|e_where":"Chēzhàn zài nǎlǐ?","money|e_dont_have":"Wǒ méiyǒu hěnduō qián.","time|e_dont_have":"Wǒ jīntiān méiyǒu shíjiān.",
    "shopping|e_lets":"Wǒmen qù gòuwù ba!","music|e_like":"Wǒ xǐhuan zhège yīnyuè.","water|e_wanna":"Wǒ xiǎng hē shuǐ.",
    "bathroom|e_where":"Xǐshǒujiān zài nǎlǐ?","weather|e_is":"Jīntiān tiānqì hěn hǎo.","name|e_name":"Wǒ jiào Ken.",
    "home|e_wanna":"Wǒ xiǎng huí jiā.","student|e_am":"Wǒ shì xuésheng.","japanese|e_am":"Wǒ shì Rìběnrén.",
    "tired|e_am":"Wǒ jīntiān hěn lèi.","hungry|e_am":"Wǒ xiànzài hěn è.","hungry|e_are_you":"Nǐ è ma?",
    "busy|e_am":"Wǒ jīntiān hěn máng.","busy|e_are_you":"Nǐ xiànzài máng ma?","good|e_am":"Wǒ hěn hǎo, xièxie.",
    "go|e_wanna":"Wǒ xiànzài xiǎng qù.","come|e_please":"Nǐ kěyǐ guòlái ma?","come|e_did":"Tā zuótiān lái le.",
    "live|e_do":"Wǒ zhù zài Dōngjīng.","live|e_wanna":"Wǒ xiǎng zhù zài guówài.","eat|e_wanna":"Wǒ xiǎng chī diǎn dōngxi.",
    "eat|e_did":"Wǒ chīle hěnduō.","buy|e_gonna":"Wǒ yào mǎi tā.","buy|e_wanna":"Wǒ xiǎng mǎi xīn xié.",
    "see|e_wanna":"Wǒ xiǎng jiàn nǐ.","use|e_please":"Wǒ kěyǐ yòng zhège ma?","use|e_do":"Wǒ měitiān dōu yòng tā.",
    "hear|e_can":"Wǒ néng tīngjiàn nǐ.","wake|e_did":"Wǒ zǎo qǐ le.","sleep|e_gotta":"Wǒ xiànzài děi shuì le.",
    "speak|e_can":"Wǒ huì shuō yīdiǎn.","speak|e_wanna":"Wǒ xiǎng shuō Yīngyǔ.","say|e_wanna":"Wǒ xiǎng shuō diǎn shénme.",
    "talk|e_lets":"Wǒmen dāihuì liáo ba."
  };
  Object.keys(coreRoma).forEach(k=>{ const s=SM[k]; if(s && s.tr.zh) s.tr.zh.roma = coreRoma[k]; });

  /* ---------- ベトナム語: 残り全単語の例文 ---------- */
  const restVi = {
    "family|e_like":"Tôi yêu gia đình của tôi.","hotel|e_been":"Tôi đã đến khách sạn này.","train|e_did":"Hôm nay tôi đi tàu hỏa.",
    "book|e_ing":"Tôi đang đọc sách.","message|e_gonna":"Tôi sẽ gửi tin nhắn cho bạn.","rain|e_ing":"Bây giờ trời đang mưa.",
    "kid|e_was":"Tôi từng là một đứa trẻ nhút nhát.","morning|e_do":"Tôi chạy vào buổi sáng.","night|e_do":"Tôi đọc sách vào buổi tối.",
    "people|e_like":"Tôi thích gặp những người mới.","place|e_been":"Tôi đã đến nơi này.","store|e_gonna":"Tôi sẽ đi đến cửa hàng.",
    "company|e_do":"Tôi làm việc ở một công ty lớn.","culture|e_like":"Tôi thích văn hóa Nhật Bản.","problem|e_is":"Đó là một vấn đề lớn.",
    "mom|e_gonna":"Tôi sẽ gọi cho mẹ tôi.","dad|e_is":"Bố tôi rất cao.","nice|e_is":"Bạn tôi rất tốt bụng.",
    "big|e_is":"Thành phố này rất to.","small|e_is":"Phòng của tôi nhỏ.","hot|e_is":"Hôm nay rất nóng.","hard|e_is":"Cái này hơi khó.",
    "easy|e_is":"Bài kiểm tra đó dễ.","yummy|e_is":"Cái này rất ngon!","famous|e_is":"Nơi này nổi tiếng.","fun|e_is":"Trò chơi này rất vui.",
    "cheap|e_is":"Cái này rẻ.","pricey|e_is":"Cái đó quá đắt.","sad|e_am":"Hôm nay tôi hơi buồn.","new|e_is":"Điện thoại của tôi mới.",
    "close|e_is":"Nhà ga gần.","far|e_is":"Sân bay xa.","important|e_is":"Cái này rất quan trọng.","different|e_is":"Cái này khác.",
    "similar|e_is":"Chúng ta khá giống nhau.","pretty|e_is":"Cảnh đẹp.","long|e_is":"Bộ phim dài.","tall|e_is":"Anh trai tôi rất cao.",
    "resto|e_wanna":"Tôi muốn thử nhà hàng đó.","woman|e_is":"Người phụ nữ đó rất tốt bụng.","man|e_is":"Người đàn ông đó rất cao.",
    "brother|e_is":"Anh em tôi rất cao.","sister|e_is":"Chị em tôi rất tốt bụng.","every_all|e_is":"Mọi thứ đều ổn.",
    "finish|e_did":"Công việc của tôi đã kết thúc.","think|e_do":"Tôi nghĩ vậy.","send|e_gonna":"Tôi sẽ gửi tin nhắn.",
    "understand|e_do":"Tôi hiểu.","read|e_ing":"Tôi đang đọc sách.","help|e_please":"Bạn có thể giúp tôi không?",
    "like|e_do":"Tôi thích nó.","enter|e_please":"Tôi vào được không?","arrive|e_did":"Tôi đã đến nơi rồi.","remember|e_do":"Tôi nhớ bạn.",
    "quit|e_gonna":"Tôi sẽ bỏ thuốc lá.","become|e_wanna":"Tôi muốn trở thành giáo viên.","study|e_gotta":"Tối nay tôi phải học.",
    "ride|e_wanna":"Tôi muốn đi xe lửa.","go_home|e_wanna":"Tôi muốn về nhà.","happy|e_am":"Hôm nay tôi rất vui.",
    "favorite|e_is":"Đây là món yêu thích của tôi.","foreign|e_is":"Đây là một nước ngoài.","smart|e_is":"Cô ấy rất thông minh.",
    "very|e_is":"Hôm nay trời rất nóng.","a_little|e_am":"Tôi mệt một chút.","maybe|e_gonna":"Có lẽ ngày mai tôi sẽ đi.",
    "together|e_lets":"Hãy học cùng nhau nhé.","later|e_lets":"Lát nữa nói chuyện nhé.","usually|e_do":"Tôi thường dậy sớm.",
    "still|e_ing":"Tôi vẫn đang làm việc.","also|e_do":"Tôi cũng nói tiếng Anh.","often|e_do":"Tôi thường xuyên gặp bạn bè.",
    "only|e_have":"Tôi chỉ có một chiếc xe.","about|e_is":"Khoảng mười đô la.","well|e_can":"Tôi có thể nói tiếng Anh giỏi.",
    "again|e_lets":"Hãy gặp lại nhé.","with|e_wanna":"Tôi muốn đi với bạn.","from|e_am":"Tôi đến từ Nhật Bản.",
    "for|e_did":"Tôi đã mua thức ăn cho bạn.","of|e_is":"Anh ấy là bạn của tôi.","at|e_am":"Bây giờ tôi ở nhà.",
    "to|e_gonna":"Tôi sẽ đi đến nhà ga.","or|e_do_you":"Bạn muốn nước hay thức ăn?","so|e_am":"Tôi mệt, nên tôi muốn ngủ.",
    "but|e_like":"Tôi thích nó, nhưng nó đắt.","and|e_like":"Tôi thích thức ăn và âm nhạc.","what|e_do_you":"Bạn ăn gì?",
    "when|e_qwhen":"Khi nào bạn bắt đầu?","where|e_where":"Bạn sống ở đâu?","how|e_how":"Bạn đi làm thế nào?",
    "how_much|e_is":"Cái này bao nhiêu tiền?","how_long|e_do_you":"Bạn làm việc bao lâu?","why|e_do_you":"Tại sao bạn học tiếng Anh?",
    "who|e_is":"Người đàn ông đó là ai?","which|e_do_you":"Bạn thích cái nào?","what_time|e_do_you":"Bạn thức dậy lúc mấy giờ?",
    "how_old|e_are_you":"Bạn bao nhiêu tuổi?","here|e_do":"Tôi sống ở đây.","there|e_been":"Tôi đã ở đó rồi.","today|e_am":"Hôm nay tôi bận.",
    "tomorrow|e_gonna":"Ngày mai tôi sẽ đi.","yesterday|e_did":"Hôm qua tôi gặp một người bạn.","day|e_do":"Tôi làm việc mỗi ngày.",
    "week|e_gonna":"Tuần sau tôi sẽ đi du lịch.","month|e_did":"Tôi bắt đầu tháng này.","year|e_am":"Năm nay tôi bận.",
    "now|e_wanna":"Bây giờ tôi muốn ngủ.","one|e_have":"Tôi có một anh em.","two|e_have":"Tôi có hai người bạn.",
    "three|e_have":"Tôi có ba chiếc xe.","yes|phrase":"Vâng, tôi có thể.","awesome|phrase":"Tuyệt quá!","really|phrase":"Thật à? Hay đấy.",
    "no|phrase":"Không, tôi không.","too_bad|phrase":"Tiếc quá.","i_see|phrase":"Ra vậy, hợp lý.","g_morning|phrase":"Chào buổi sáng!",
    "hi|phrase":"Xin chào, bạn khỏe không?","g_evening|phrase":"Chào buổi tối!","bye|phrase":"Tạm biệt, hẹn gặp lại.",
    "excuse_me|phrase":"Xin lỗi, bạn có thể giúp tôi không?","thanks|phrase":"Cảm ơn nhiều!","sorry|phrase":"Xin lỗi, tôi đến muộn.",
    "how_are_you|phrase":"Hôm nay bạn khỏe không?","nice_meet|phrase":"Rất vui được gặp bạn.","be|e_wanna":"Tôi muốn trở thành học sinh.",
    "japan|e_been":"Tôi đã đến Nhật Bản.","lang|e_ing":"Tôi đang học tiếng Việt.","a_lot|e_have":"Tôi có nhiều bạn.",
    "every|e_do":"Tôi học mỗi ngày.","first|e_is":"Đây là lần đầu tiên của tôi.","last|e_did":"Tuần trước tôi gặp anh ấy.",
    "next|e_gonna":"Tháng sau tôi sẽ bắt đầu."
  };
  Object.keys(restVi).forEach(k=>{ const s=SM[k]; if(s) s.tr.vi={ s:restVi[k] }; });

  /* ---------- ヒンディー語: 残り全単語の例文（男性話者の一人称） ---------- */
  const restHi = {
    "family|e_like":"मुझे अपने परिवार से प्यार है।","hotel|e_been":"मैं इस होटल गया हूँ।","train|e_did":"मैंने आज ट्रेन ली।",
    "book|e_ing":"मैं अभी एक किताब पढ़ रहा हूँ।","message|e_gonna":"मैं तुम्हें एक संदेश भेजने वाला हूँ।","rain|e_ing":"अभी बारिश हो रही है।",
    "kid|e_was":"मैं एक शर्मीला बच्चा था।","morning|e_do":"मैं सुबह दौड़ता हूँ।","night|e_do":"मैं रात को पढ़ता हूँ।",
    "people|e_like":"मुझे नए लोगों से मिलना पसंद है।","place|e_been":"मैं इस जगह गया हूँ।","store|e_gonna":"मैं दुकान जाने वाला हूँ।",
    "company|e_do":"मैं एक बड़ी कंपनी में काम करता हूँ।","culture|e_like":"मुझे जापानी संस्कृति पसंद है।","problem|e_is":"यह एक बड़ी समस्या है।",
    "mom|e_gonna":"मैं अपनी माँ को फ़ोन करने वाला हूँ।","dad|e_is":"मेरे पापा बहुत लंबे हैं।","nice|e_is":"मेरा दोस्त बहुत अच्छा है।",
    "big|e_is":"यह शहर बड़ा है।","small|e_is":"मेरा कमरा छोटा है।","hot|e_is":"आज बहुत गरम है।","hard|e_is":"यह थोड़ा मुश्किल है।",
    "easy|e_is":"वह परीक्षा आसान थी।","yummy|e_is":"यह बहुत स्वादिष्ट है!","famous|e_is":"यह जगह मशहूर है।","fun|e_is":"यह खेल बहुत मज़ेदार है।",
    "cheap|e_is":"यह सस्ता है।","pricey|e_is":"वह बहुत महँगा है।","sad|e_am":"मैं आज थोड़ा उदास हूँ।","new|e_is":"मेरा फ़ोन नया है।",
    "close|e_is":"स्टेशन पास है।","far|e_is":"हवाई अड्डा दूर है।","important|e_is":"यह बहुत ज़रूरी है।","different|e_is":"यह अलग है।",
    "similar|e_is":"हम काफ़ी मिलते-जुलते हैं।","pretty|e_is":"नज़ारा सुंदर है।","long|e_is":"फ़िल्म लंबी है।","tall|e_is":"मेरा भाई बहुत लंबा है।",
    "resto|e_wanna":"मैं उस रेस्टोरेंट को आज़माना चाहता हूँ।","woman|e_is":"वह औरत बहुत अच्छी है।","man|e_is":"वह आदमी बहुत लंबा है।",
    "brother|e_is":"मेरा भाई बहुत लंबा है।","sister|e_is":"मेरी बहन बहुत दयालु है।","every_all|e_is":"सब कुछ ठीक है।",
    "finish|e_did":"मैंने अपना काम ख़त्म किया।","think|e_do":"मुझे ऐसा लगता है।","send|e_gonna":"मैं एक संदेश भेजने वाला हूँ।",
    "understand|e_do":"मैं समझता हूँ।","read|e_ing":"मैं अभी एक किताब पढ़ रहा हूँ।","help|e_please":"क्या आप मेरी मदद कर सकते हैं?",
    "like|e_do":"मुझे यह पसंद है।","enter|e_please":"क्या मैं अंदर आ सकता हूँ?","arrive|e_did":"मैं स्टेशन पहुँच गया।","remember|e_do":"मुझे तुम याद हो।",
    "quit|e_gonna":"मैं धूम्रपान छोड़ने वाला हूँ।","become|e_wanna":"मैं एक शिक्षक बनना चाहता हूँ।","study|e_gotta":"मुझे आज रात पढ़ाई करनी है।",
    "ride|e_wanna":"मैं ट्रेन लेना चाहता हूँ।","go_home|e_wanna":"मैं घर जाना चाहता हूँ।","happy|e_am":"मैं आज बहुत खुश हूँ।",
    "favorite|e_is":"यह मेरा पसंदीदा है।","foreign|e_is":"यह एक विदेशी देश है।","smart|e_is":"वह बहुत होशियार है।",
    "very|e_is":"आज बहुत गरम है।","a_little|e_am":"मैं थोड़ा थका हुआ हूँ।","maybe|e_gonna":"शायद मैं कल जाऊँगा।",
    "together|e_lets":"चलो साथ में पढ़ते हैं।","later|e_lets":"चलो बाद में बात करते हैं।","usually|e_do":"मैं आमतौर पर जल्दी उठता हूँ।",
    "still|e_ing":"मैं अभी भी काम कर रहा हूँ।","also|e_do":"मैं अंग्रेज़ी भी बोलता हूँ।","often|e_do":"मैं अक्सर अपने दोस्तों से मिलता हूँ।",
    "only|e_have":"मेरे पास सिर्फ़ एक गाड़ी है।","about|e_is":"यह लगभग दस डॉलर है।","well|e_can":"मैं अंग्रेज़ी अच्छे से बोल सकता हूँ।",
    "again|e_lets":"चलो फिर से मिलते हैं।","with|e_wanna":"मैं तुम्हारे साथ जाना चाहता हूँ।","from|e_am":"मैं जापान से हूँ।",
    "for|e_did":"मैंने तुम्हारे लिए खाना खरीदा।","of|e_is":"वह मेरा दोस्त है।","at|e_am":"मैं अभी घर पर हूँ।",
    "to|e_gonna":"मैं स्टेशन जाने वाला हूँ।","or|e_do_you":"क्या आप पानी या खाना चाहते हैं?","so|e_am":"मैं थका हुआ हूँ, इसलिए मैं सोना चाहता हूँ।",
    "but|e_like":"मुझे यह पसंद है, लेकिन यह महँगा है।","and|e_like":"मुझे खाना और संगीत पसंद है।","what|e_do_you":"आप क्या खाते हैं?",
    "when|e_qwhen":"आप कब शुरू करते हैं?","where|e_where":"आप कहाँ रहते हैं?","how|e_how":"आप काम पर कैसे जाते हैं?",
    "how_much|e_is":"यह कितने का है?","how_long|e_do_you":"आप कितनी देर काम करते हैं?","why|e_do_you":"आप अंग्रेज़ी क्यों पढ़ते हैं?",
    "who|e_is":"वह आदमी कौन है?","which|e_do_you":"आपको कौन सा पसंद है?","what_time|e_do_you":"आप कितने बजे उठते हैं?",
    "how_old|e_are_you":"आप कितने साल के हैं?","here|e_do":"मैं यहाँ रहता हूँ।","there|e_been":"मैं वहाँ गया हूँ।","today|e_am":"मैं आज व्यस्त हूँ।",
    "tomorrow|e_gonna":"मैं कल जाने वाला हूँ।","yesterday|e_did":"मैं कल एक दोस्त से मिला।","day|e_do":"मैं हर दिन काम करता हूँ।",
    "week|e_gonna":"मैं अगले हफ़्ते यात्रा करने वाला हूँ।","month|e_did":"मैंने इस महीने शुरू किया।","year|e_am":"मैं इस साल व्यस्त हूँ।",
    "now|e_wanna":"मैं अभी सोना चाहता हूँ।","one|e_have":"मेरा एक भाई है।","two|e_have":"मेरे दो दोस्त हैं।",
    "three|e_have":"मेरे पास तीन गाड़ियाँ हैं।","yes|phrase":"हाँ, मैं कर सकता हूँ।","awesome|phrase":"यह बढ़िया है!","really|phrase":"सच में? बढ़िया।",
    "no|phrase":"नहीं, मैं नहीं करता।","too_bad|phrase":"अफ़सोस है।","i_see|phrase":"अच्छा, समझ गया।","g_morning|phrase":"सुप्रभात!",
    "hi|phrase":"नमस्ते, आप कैसे हैं?","g_evening|phrase":"शुभ संध्या!","bye|phrase":"अलविदा, फिर मिलेंगे।",
    "excuse_me|phrase":"सुनिए, क्या आप मेरी मदद कर सकते हैं?","thanks|phrase":"बहुत धन्यवाद!","sorry|phrase":"माफ़ कीजिए, मुझे देर हो गई।",
    "how_are_you|phrase":"आज आप कैसे हैं?","nice_meet|phrase":"आपसे मिलकर खुशी हुई।","be|e_wanna":"मैं छात्र बनना चाहता हूँ।",
    "japan|e_been":"मैं जापान गया हूँ।","lang|e_ing":"मैं हिन्दी सीख रहा हूँ।","a_lot|e_have":"मेरे बहुत सारे दोस्त हैं।",
    "every|e_do":"मैं हर दिन पढ़ाई करता हूँ।","first|e_is":"यह मेरी पहली बार है।","last|e_did":"मैंने उसे पिछले हफ़्ते देखा।",
    "next|e_gonna":"मैं अगले महीने शुरू करने वाला हूँ।"
  };
  Object.keys(restHi).forEach(k=>{ const s=SM[k]; if(s) s.tr.hi={ s:restHi[k] }; });

  /* ---------- ネパール語: 残り全単語の例文 ---------- */
  const restNe = {
    "family|e_like":"मलाई मेरो परिवार माया लाग्छ।","hotel|e_been":"म यो होटल गएको छु।","train|e_did":"मैले आज रेल चढें।",
    "book|e_ing":"म अहिले किताब पढ्दैछु।","message|e_gonna":"म तपाईंलाई सन्देश पठाउन लागेको छु।","rain|e_ing":"अहिले पानी परिरहेको छ।",
    "kid|e_was":"म लजालु बच्चा थिएँ।","morning|e_do":"म बिहान दौडन्छु।","night|e_do":"म राति पढ्छु।",
    "people|e_like":"मलाई नयाँ मानिसहरूसँग भेट्न मन पर्छ।","place|e_been":"म यो ठाउँ गएको छु।","store|e_gonna":"म पसल जान लागेको छु।",
    "company|e_do":"म ठूलो कम्पनीमा काम गर्छु।","culture|e_like":"मलाई जापानी संस्कृति मन पर्छ।","problem|e_is":"त्यो ठूलो समस्या हो।",
    "mom|e_gonna":"म मेरी आमालाई फोन गर्न लागेको छु।","dad|e_is":"मेरो बुबा धेरै अग्लो हुनुहुन्छ।","nice|e_is":"मेरो साथी धेरै असल छ।",
    "big|e_is":"यो सहर ठूलो छ।","small|e_is":"मेरो कोठा सानो छ।","hot|e_is":"आज धेरै गर्मी छ।","hard|e_is":"यो अलि गाह्रो छ।",
    "easy|e_is":"त्यो परीक्षा सजिलो थियो।","yummy|e_is":"यो धेरै मिठो छ!","famous|e_is":"यो ठाउँ प्रसिद्ध छ।","fun|e_is":"यो खेल धेरै रमाइलो छ।",
    "cheap|e_is":"यो सस्तो छ।","pricey|e_is":"त्यो धेरै महँगो छ।","sad|e_am":"म आज अलि दुःखी छु।","new|e_is":"मेरो फोन नयाँ छ।",
    "close|e_is":"स्टेशन नजिक छ।","far|e_is":"विमानस्थल टाढा छ।","important|e_is":"यो धेरै महत्त्वपूर्ण छ।","different|e_is":"यो फरक छ।",
    "similar|e_is":"हामी उस्तै छौं।","pretty|e_is":"दृश्य राम्रो छ।","long|e_is":"फिल्म लामो छ।","tall|e_is":"मेरो दाजु धेरै अग्लो छ।",
    "resto|e_wanna":"मलाई त्यो रेस्टुरेन्ट प्रयास गर्न मन छ।","woman|e_is":"त्यो महिला धेरै असल छिन्।","man|e_is":"त्यो पुरुष धेरै अग्लो छ।",
    "brother|e_is":"मेरो दाजुभाइ धेरै अग्लो छ।","sister|e_is":"मेरी दिदीबहिनी धेरै दयालु छिन्।","every_all|e_is":"सबै ठीक छ।",
    "finish|e_did":"मैले मेरो काम सकें।","think|e_do":"मलाई त्यस्तै लाग्छ।","send|e_gonna":"म सन्देश पठाउन लागेको छु।",
    "understand|e_do":"म बुझ्छु।","read|e_ing":"म अहिले किताब पढ्दैछु।","help|e_please":"तपाईं मलाई मद्दत गर्न सक्नुहुन्छ?",
    "like|e_do":"मलाई यो मन पर्छ।","enter|e_please":"के म भित्र जान सक्छु?","arrive|e_did":"म स्टेशन पुगें।","remember|e_do":"मलाई तपाईं सम्झना छ।",
    "quit|e_gonna":"म धूम्रपान छोड्न लागेको छु।","become|e_wanna":"मलाई शिक्षक बन्न मन छ।","study|e_gotta":"मैले आज राति अध्ययन गर्नुपर्छ।",
    "ride|e_wanna":"मलाई रेल चढ्न मन छ।","go_home|e_wanna":"मलाई घर जान मन छ।","happy|e_am":"म आज धेरै खुसी छु।",
    "favorite|e_is":"यो मेरो मनपर्ने हो।","foreign|e_is":"यो विदेशी देश हो।","smart|e_is":"उनी धेरै चलाख छिन्।",
    "very|e_is":"आज धेरै गर्मी छ।","a_little|e_am":"म अलिकति थकित छु।","maybe|e_gonna":"सायद म भोलि जान्छु।",
    "together|e_lets":"सँगै अध्ययन गरौं।","later|e_lets":"पछि कुरा गरौं।","usually|e_do":"म सामान्यतया चाँडै उठ्छु।",
    "still|e_ing":"म अझै काम गर्दैछु।","also|e_do":"म अंग्रेजी पनि बोल्छु।","often|e_do":"म प्रायः मेरा साथीहरूलाई भेट्छु।",
    "only|e_have":"मसँग मात्र एउटा गाडी छ।","about|e_is":"यो लगभग दस डलर हो।","well|e_can":"म अंग्रेजी राम्ररी बोल्न सक्छु।",
    "again|e_lets":"फेरि भेटौं।","with|e_wanna":"मलाई तपाईंसँग जान मन छ।","from|e_am":"म जापानबाट हुँ।",
    "for|e_did":"मैले तपाईंको लागि खाना किनें।","of|e_is":"उनी मेरो साथी हुन्।","at|e_am":"म अहिले घरमा छु।",
    "to|e_gonna":"म स्टेशनतिर जान लागेको छु।","or|e_do_you":"तपाईं पानी वा खाना चाहनुहुन्छ?","so|e_am":"म थकित छु, त्यसैले मलाई सुत्न मन छ।",
    "but|e_like":"मलाई यो मन पर्छ, तर यो महँगो छ।","and|e_like":"मलाई खाना र संगीत मन पर्छ।","what|e_do_you":"तपाईं के खानुहुन्छ?",
    "when|e_qwhen":"तपाईं कहिले सुरु गर्नुहुन्छ?","where|e_where":"तपाईं कहाँ बस्नुहुन्छ?","how|e_how":"तपाईं काममा कसरी जानुहुन्छ?",
    "how_much|e_is":"यो कति पर्छ?","how_long|e_do_you":"तपाईं कति समय काम गर्नुहुन्छ?","why|e_do_you":"तपाईं किन अंग्रेजी पढ्नुहुन्छ?",
    "who|e_is":"त्यो पुरुष को हो?","which|e_do_you":"तपाईंलाई कुन मन पर्छ?","what_time|e_do_you":"तपाईं कति बजे उठ्नुहुन्छ?",
    "how_old|e_are_you":"तपाईं कति वर्षको हुनुहुन्छ?","here|e_do":"म यहाँ बस्छु।","there|e_been":"म त्यहाँ गएको छु।","today|e_am":"म आज व्यस्त छु।",
    "tomorrow|e_gonna":"म भोलि जान लागेको छु।","yesterday|e_did":"मैले हिजो एउटा साथीलाई भेटें।","day|e_do":"म हरेक दिन काम गर्छु।",
    "week|e_gonna":"म अर्को हप्ता यात्रा गर्न लागेको छु।","month|e_did":"मैले यो महिना सुरु गरें।","year|e_am":"म यो वर्ष व्यस्त छु।",
    "now|e_wanna":"मलाई अहिले सुत्न मन छ।","one|e_have":"मेरो एउटा दाजुभाइ छ।","two|e_have":"मेरा दुई साथी छन्।",
    "three|e_have":"मसँग तीन गाडी छन्।","yes|phrase":"हो, म सक्छु।","awesome|phrase":"वाह!","really|phrase":"साँच्चै? राम्रो।",
    "no|phrase":"होइन, म गर्दिनँ।","too_bad|phrase":"दुःख लाग्यो।","i_see|phrase":"बुझें, ठीक छ।","g_morning|phrase":"शुभ प्रभात!",
    "hi|phrase":"नमस्ते, कस्तो हुनुहुन्छ?","g_evening|phrase":"शुभ सन्ध्या!","bye|phrase":"बिदाइ, फेरि भेटौंला।",
    "excuse_me|phrase":"सुन्नुहोस्, तपाईं मलाई मद्दत गर्न सक्नुहुन्छ?","thanks|phrase":"धेरै धन्यवाद!","sorry|phrase":"माफ गर्नुहोस्, मलाई ढिलो भयो।",
    "how_are_you|phrase":"आज कस्तो हुनुहुन्छ?","nice_meet|phrase":"भेटेर खुशी लाग्यो।","be|e_wanna":"मलाई विद्यार्थी बन्न मन छ।",
    "japan|e_been":"म जापान गएको छु।","lang|e_ing":"म नेपाली सिक्दैछु।","a_lot|e_have":"मेरा धेरै साथी छन्।",
    "every|e_do":"म हरेक दिन अध्ययन गर्छु।","first|e_is":"यो मेरो पहिलो पटक हो।","last|e_did":"मैले उनलाई अघिल्लो हप्ता देखें।",
    "next|e_gonna":"म अर्को महिना सुरु गर्न लागेको छु।"
  };
  Object.keys(restNe).forEach(k=>{ const s=SM[k]; if(s) s.tr.ne={ s:restNe[k] }; });

  /* ---------- 言語定義（表示名 / TTS言語コード） ---------- */
  Object.assign(window.LANGS, {
    hi:{ label:"ヒンディー語",       voiceLang:"hi-IN" },
    ne:{ label:"ネパール語（音声=ヒンディー）", voiceLang:"hi-IN" }, // ネパール音声はヒンディーを流用
    id:{ label:"インドネシア語",     voiceLang:"id-ID" },
    zh:{ label:"マンダリン（中国語）", voiceLang:"zh-CN" },
    vi:{ label:"ベトナム語",         voiceLang:"vi-VN" }
  });
})();
