export const MOVIES = [
    {
        title: 'Arab Twit',
        titleArabic: 'عرب تويت',
        type: 'movie',
        illustration: require('./images/arabtwit.jpg'),
        promo: 'http://qshoow.com/arabtwit/promo.mp4',
        info: `المدة= 2 ساعة
التصنيف= مسرحية
الوصف= مسرحية كوميدية هادفة تدور أحداثها حول الوطن العربي وما يحدث فيه، حيث هناك اسقاطات سياسية واجتماعية واقتصادية وإعلامية فضلا عن العديد من المشكلات التي تواجهها الأسر العربية. 
فكرة وقصة: د. هاشم السيد
تأليف: طالب الدوس
إخراج: فالح فايز
		السنة= 2017
`,
        description: `محمد المنصور، عبدالناصر درويش، علي الغرير، جاسم الأنصاري، منى شداد، بوهلال، محمد أنور، نوره البلوشي، علي ربشة`,
        episodes: ['http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'],
        available: false,
        price: 3
    },
    {
        title: 'Malhamat Ghadr',
        titleArabic: 'ملحمة الغدر',
        type: 'movie',
        illustration: require('./images/malhaamtghadr_poster.jpg'),//TODO
        promo: 'http://qshoow.com/malhamtghadr/promomalhamtalghadr.mp4',
        info: `المدة= 40 دقيقة
التصنيف= مونودراما
فكرة وقصة: د. هاشم السيد
إخراج = إيمان ذياب
التمثيل= فيصل جواد
السنة= 2015`,
        description: `الوصف: تتحدث الملحمة عن مجموعة من الناسِ كانوا يستقلون قاربا للرحيل من أرضهم التي لفَظتهم بسبب ظلم من فيها لكنهم يقعوا فيخدعة أخرى وهي أن القارب متهالك ولم يستطع أن يتحمل قوة الأمواجِ، فيغرق كل من على المركب إلا شخص واحد هو الناجي الوحيدالذي يعاني الظلم من كل من حوله` + `.`,
        episodes: ['http://qshoow.com/malhamtghadr/malhamtghadr.mp4'],
        available: true,
    },
    {
        title: 'Malhamat Dhad',
        titleArabic: 'ملحمة الضاد',
        type: 'movie',
        illustration: require('./images/malhama_poster.jpg'),//TODO
        promo: 'http://qshoow.com/malhamtdhad/promomalhamtdhad.mp4',
        info: `المدة= 43 دقيقة
التصنيف= مونودراما
فكرة وقصة: د. هاشم السيد
إخراج = صبري الرماحي
التمثيل= محمود أبو العباس
السنة= 2014`,
        description: `الوصف: تناقش المسرحية بعض المشاكل التي طرأت على تعلم اللغة يستخدمها العرب. ويتمثل وجه الصراع في طبيعة التفكير وكيف` +
        `أن اللهجة العامية أسرع في التفكير ولا تحتاج إلى جهد كبير بينما اللغة العربية الفصحى أعمق في التفكير وأكثر دلالة. ومن المشاكل` +
        `أيضا إدخال مجموعة من الألفاظ والمصطلحات الأجنبية في اللغة العربية الأمر الذي يضر باللغة وصحيحها`,
        episodes: ['http://qshoow.com/malhamtdhad/promomalhamtdhad.mp4'],
        available: true,
    },
    {
        title: 'Malhamat Sakhra',
        titleArabic: 'ملحمة صغرة',
        type: 'movie',
        illustration: require('./images/malhamtsakhra_poster.jpg'), //the images I was given were not on a secure domain(https) so I had to download the images and require them
        promo: 'http://qshoow.com/malhamtsakhra/malhamtsakhrapromo.mp4', //http://qshoow.com/malhamtsakhra/malhamtsakhrapromo.mp4
        description: `الوصف: تُعد من قبيل الخواطر السياسية، حيث تتحدث عن وضع الأمة العربية، وما أصابها من تفكك نتيجة المؤامرات والدسائس
على يد أعداء الإنسانية. فيشبه الأمة العربية بصخرة ورغم كل ما حل بها إلا أن شكلها يوحي بالقوة لكل من يراها لا تتحرك من مكانها نتيجة استقرار خيالها بأنها مثقلة بإرث الماضي وعظمة التاريخ وانتصاراتها وصمودها في وجه الرياح. ثم تستنهض روح البطولة والتاريخ، لأن كل هذه المؤامرات حتماً إلى زوال، فكم تعرضت الأمة العربية لحلقات من النار لكنها أصبحت أقوى وأكثر جلادة وملكت جبروت يحسدها أعدؤها عليه.`,
        info: `المدة= 19 دقيقة 
لتصنيف= ملحة صوتية          
تأليف:د.هاشم السيد
إلقاء:عباس الحربي
إخراج:محسن العلي
السنة= 2017
            `,
        episodes: ['http://qshoow.com/malhamtsakhra/malhamtsakhra.mp4'],
        available: true
    },
    {
        title: 'Dinar',
        titleArabic: 'دينار',
        type: 'movie',
        illustration: require('./images/dinar_poster.jpg'),
        promo: 'http://qshoow.com/dinar/promo.mp4',
        description: `الوصف: وتدور أحداثه حول شخصية محورية "دينار" وهو البطل الحقيقي لها المتخصص في شؤون المصارف وتعاملاتها، مهتماً ومتابعاً لكل ما يخص المصارف الوطنية وأخر ما توصلت إليه المصارف العالمية ومنتقداً دائماً لما يشوب المصارف الوطنية من شوائب قد تؤدي إلى إنهيارها وبالتالي إنهيار الاقتصاد الوطني.`,
        info: `المدة=  10 دقيقة
التصنيف= كرتون 3 دي
فكرة وقصة: د. هاشم السيد
إخراج = سامح مصطفى
السنة= 2010`,
        episodes: ['http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'],
        available: false,
        price: 1
    },
    {
        title: 'Temba 1',
        titleArabic: 'تمبة1',
        type: 'movie',
        illustration: require('./images/temba1.jpg'),
        promo: 'http://qshoow.com/tmba1/Temba1promo.mp4',
        description: `الوصف: تدور أحداث المسلسل حول العادات الاجتماعية في دولة قطر ودول الخليج بنوع من الكوميديا مع التركيز على لعبة كرةالقدم باعتبارها اللعبة الشعبية الأولى ليس فقط على المستوى المحلي بل على المستويين الإقليمي والعالمي أيضاً، مع استعراض`,
        info: `المدة=  8 دقيقة
التصنيف= كرتون 3 دي
فكرة وقصة: د. هاشم السيد
إخراج = تامر نادي
السنة= 2014`,
        episodes: ['http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'],
        available: false,
        price: 1
    },
    {
        title: 'Temba 2',
        titleArabic: 'تمبة2',
        type: 'movie',
        illustration: require('./images/temba2.jpg'),
        promo: 'http://qshoow.com/tmba2/promo.mp4',
        description: `الوصف: يتناول المسلسل لعبة كرة القدم وما تحمله من تشويق في كافة عناصرها، وتحمل كل حلقة عنوانا خاصا يرتبط بالفكرةالعامة للمسلسل مثل لاعب محترف، الفريق النسائي، بطل الدوري، رئيس النادي، الحكم، الانتخابات، نجم الفريق، المعسكر.مع مشاركة نفس الممثلين أبطال الجزء الأول لأداء الأصوات`,
        info: `المدة=  8 دقيقة
التصنيف= كرتون 3 دي
فكرة وقصة: د. هاشم السيد
إخراج = سامح مصطفى
السنة= 2015`,
        episodes: ['http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'],
        available: false,
        price: 1
    },
    {
        title: 'Khaybar',
        titleArabic: 'خيبر',
        type: 'movie',
        illustration: require('./images/khaybar.jpg'),
        promo: 'http://qshoow.com/khayber/promo.mp4',
        description: `الوصف : حاز المسلسل على العديد من الجوائز الذهبية كأفضل عمل درامي تاريخي منها جائزة مونديال القاهرة للإذاعة والتلفزيون عاموجائزة أحسن إخراج ومنتج منفذ من مهرجان القاهرة للدراما العربية  وجائزة مهرجان الخليج للإذاعة والتلفزيون الثالث عشر عام ` + 
        `2014` + `ويستعرض المسلسل تاريخ اليهود وجلاءهم عن الجزيرة العربية وقصة المعركة الفاصلة.
` + ` التمثيل =  أيمن زيدان وسلافه معمار وقمر خلف، ورولا ذبيان، وعلا بدر وعبد الحكيم قطيفان وعامر علي ومهيار خضور، بيير داغر` +
        `ومن الأردن وسام البريحي ومحمد القبانى وعبير عيسى باسم قهار وسامى قفطان وجواد الشكرجي، مصر سامح الصريطى، خليل` + 
        `مرسي، سناء شافع، أحمد ماهر`,
        info: `المدة=  45 دقيقة
التصنيف= مسلسل تاريخي
فكرة وقصة: د. هاشم السيد
إخراج = محمد عزيزية
السنة= 2014`,
        episodes: ['http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'],
        available: false,
        price: 2
    },
];

export const BOOKS = [
    {
        title: 'Abder Rahman',
        titleArabic: 'عبدالرحمن',
        type: 'book',
        illustration: require('./images/abderahman_poster.jpg'),
        full_pic: require('./images/abderahman_full.jpg'),
        pdf_link: "http://gsl.mit.edu/media/programs/south-africa-summer-2015/materials/0to1.pdf",
        available: false,
        price: 2
    },
    {
        title: 'Hawkama',
        titleArabic: ' احلوكمة',
        type: 'book',
        illustration: require('./images/hawkama.jpg'),
        full_pic: require('./images/hawkama.jpg'),
        pdf_link: "http://gsl.mit.edu/media/programs/south-africa-summer-2015/materials/0to1.pdf",
        available: false,
        price: 2
    },
    {
        title: 'Anakidmal',
        titleArabic: 'عناقيد املال',
        type: 'book',
        illustration: require('./images/anakidmal.jpg'),
        full_pic: require('./images/anakidmal.jpg'),
        pdf_link: "http://gsl.mit.edu/media/programs/south-africa-summer-2015/materials/0to1.pdf",
        available: false,
        price: 1
    },
    {
        title: 'Fasila',
        titleArabic: 'فسيلة الحياة',
        type: 'book',
        illustration: require('./images/fasila.jpg'),
        full_pic: require('./images/fasila.jpg'),
        pdf_link: "http://gsl.mit.edu/media/programs/south-africa-summer-2015/materials/0to1.pdf",
        available: false,
        price: 1
    },
    {
        title: 'Fawdha',
        titleArabic: 'فوضى',
        type: 'book',
        illustration: require('./images/fawdha.jpg'),
        full_pic: require('./images/fawdha.jpg'),
        pdf_link: "http://gsl.mit.edu/media/programs/south-africa-summer-2015/materials/0to1.pdf",
        available: false,
        price: 1
    },
    {
        title: 'Hikayat Masrifia',
        titleArabic: 'هيكايات مصرفية',
        type: 'book',
        illustration: require('./images/hikayat_masrifa.jpg'),
        full_pic: require('./images/hikayat_masrifa.jpg'),
        pdf_link: "http://gsl.mit.edu/media/programs/south-africa-summer-2015/materials/0to1.pdf",
        available: false,
        price: 1
    },
    {
        title: 'Kifaya Dhol',
        titleArabic: 'كيفيا دول',
        type: 'book',
        illustration: require('./images/kifaya_dhol_poster.jpg'),
        full_pic: require('./images/kifaya_dhol.jpg'),
        pdf_link: "http://gsl.mit.edu/media/programs/south-africa-summer-2015/materials/0to1.pdf",
        available: false,
        price: 1
    },
    {
        title: 'Malhamat Sakhra',
        titleArabic: 'ملحمة صغرة',
        type: 'book',
        illustration: require('./images/malhamt_sakhra_poster.jpg'),
        full_pic: require('./images/malhamt_sakhra.jpg'),
        pdf_link: "http://qshoow.com/book/malhamtsakhra/malhamtsakhra.pdf",
        available: true
    },
    {
        title: 'Hamasat Al Sif',
        titleArabic: 'همسات سيف',
        type: 'book',
        illustration: require('./images/hamasat_poster.jpg'),
        full_pic: require('./images/hamasat_sif.jpg'),
        pdf_link: "http://gsl.mit.edu/media/programs/south-africa-summer-2015/materials/0to1.pdf",
        available: false,
        price: 1
    },
    {
        title: 'Maraka Hasma',
        titleArabic: 'المعركـة الحاسمة',
        type: 'book',
        illustration: require('./images/maraka_poster.jpg'),
        full_pic: require('./images/maraka_hasma.jpg'),
        pdf_link: "http://qshoow.com/book/ma3rakahasma/ma3rakahasma.pdf",
        available: true
    },
    {
        title: 'Malhaamt Ghadr',
        titleArabic: 'ملحمة الغدر',
        type: 'book',
        illustration: require('./images/malhaamtghadr_poster.jpg'),
        full_pic: require('./images/malhaamtghadr_full.jpg'),
        pdf_link: "http://qshoow.com/book/malhaamtghadr/malhaamtghadr.pdf",
        available: true
    },
    {
        title: 'Malhaamt Ghadr 2',
        titleArabic: '2ملحمة الغدر',
        type: 'book',
        illustration: require('./images/malhamt_ghadr2.jpg'),
        full_pic: require('./images/malhamt_ghadr2.jpg'),
        pdf_link: "http://qshoow.com/book/malhamtghadr/malhamtghadr.pdf",
        available: true
    },
    {
        title: 'Malhamat Dhad',
        titleArabic: 'ملحمة الضاد',
        type: 'book',
        illustration: require('./images/malhama_poster.jpg'),
        full_pic: require('./images/malhama_full.jpg'),
        pdf_link: "http://qshoow.com/book/malhamtdhad/malhama.pdf",
        available: true
    },
    {
        title: 'Khatiraat Kalam',
        titleArabic: 'خاطرة  قلم',
        type: 'book',
        illustration: require('./images/khatiraatkalam_poster.jpg'),
        full_pic: require('./images/khatiraatkalam_poster.jpg'),
        pdf_link: "http://qshoow.com/book/khatiraatkalam/khatiraatkalam.pdf",
        available: true
    },
    {
        title: 'Mawsoua Masrifia',
        titleArabic: 'موسى مصرفية',
        type: 'book',
        illustration: require('./images/mawsoua_masrifia.jpg'),
        full_pic: require('./images/mawsoua_masrifia.jpg'),
        pdf_link: "http://gsl.mit.edu/media/programs/south-africa-summer-2015/materials/0to1.pdf",
        available: false,
        price: 2
    },
    {
        title: 'Nafidhat Elazen',
        titleArabic: 'نفدت العازن',
        type: 'book',
        illustration: require('./images/nafidhat_elazen.jpg'),
        full_pic: require('./images/nafidhat_elazen.jpg'),
        pdf_link: "http://gsl.mit.edu/media/programs/south-africa-summer-2015/materials/0to1.pdf",
        available: false,
        price: 1
    },
    {
        title: 'Nihayet Tarik',
        titleArabic: 'نيهايت طارق',
        type: 'book',
        illustration: require('./images/nihayet_poster.jpg'),
        full_pic: require('./images/nihayet_tarik.jpg'),
        pdf_link: "http://gsl.mit.edu/media/programs/south-africa-summer-2015/materials/0to1.pdf",
        available: false,
        price: 1
    }
];
