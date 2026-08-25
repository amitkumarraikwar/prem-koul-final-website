export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'विश्व में भारत का डंका बजे या ना बजे… लेकिन इंदौर के भाग्यरतपुरा में घंटा जरूर बज गया है',
    slug: 'indore-bhagiratpura-water-tragedy-and-civic-accountability',
    date: '25 अगस्त 2026',
    category: 'जनस्वास्थ्य व प्रशासनिक जवाबदेही',
    excerpt: 'स्वच्छता सर्वेक्षण में लगातार नंबर-1 रहने वाले इंदौर के भाग्यरतपुरा में नल से निकला सीवर-मिश्रित पानी। 30 से अधिक मौतें, सैकड़ों बीमार। प्रशासनिक नाकामी और राजनीतिक संवेदनहीनता पर एक तीखा विश्लेषण।',
    coverImage: 'https://media.licdn.com/dms/image/v2/D5603AQG0Me2IFI_vXQ/profile-displayphoto-scale_400_400/B56ZmaUFiRI8Ag-/0/1759230583447?e=1787788800&v=beta&t=8o9F-2i_vNFM1xf4_rqz0SX5dtc91XmX8mtGKm-167Q',
    content: `
      <div class="rounded-2xl border-l-4 border-rose-500 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 p-5 mb-8 text-rose-900 dark:text-rose-200 font-bold leading-relaxed shadow-md">
        यह लेख इंदौर के भाग्यरतपुरा में दूषित पानी के कारण हुई दुखद मौतों, प्रशासनिक विफलता और जनस्वास्थ्य की उपेक्षा पर एक स्पष्ट, निष्पक्ष व तीखा राजनीतिक व प्रशासनिक विश्लेषण है।
      </div>

      <h3 class="text-2xl font-black font-hindi-alt text-brand-primary mt-6 mb-4">
        स्वच्छता का तमगा बनाम नलों से निकलता जहर
      </h3>
      <p class="text-base text-brand-primary/85 leading-relaxed mb-5 font-semibold">
        देश का सबसे स्वच्छ शहर। स्वच्छता सर्वेक्षण में लगातार नंबर-1। ग्रीन बॉन्ड, स्मार्ट सिटी, नर्मदा जल… तमाम तारीफों और तमगों का शहर। और उसी शहर के भाग्यरतपुरा में नल से निकला सीवर-मिश्रित पानी। उल्टी-दस्त, हैजा, बच्चों और बुजुर्गों की मौतें। सरकारी आंकड़ों में 20-22, स्थानीय दावों में 30 से ऊपर। सैकड़ों अस्पताल में। सैकड़ों परिवार तबाह।
      </p>

      <h3 class="text-xl font-bold font-hindi-alt text-brand-primary mt-8 mb-4 border-l-4 border-brand-saffron pl-3 py-1 bg-brand-card border border-brand-border rounded-r-xl">
        सवाल उठे तो जवाब आया — “घंटा”
      </h3>
      <p class="text-base text-brand-primary/85 leading-relaxed mb-5 font-semibold">
        और जब सवाल उठे, तो जवाब आया — <strong>“घंटा”</strong>। मंत्री कैलाश विजयवर्गीय के उस शब्द ने पूरे विवाद को एक नई दिशा दे दी। विपक्ष ने “घंटा बजाओ” आंदोलन शुरू किया। प्रशासन को जगाने के लिए घंटे लेकर सड़क पर उतरे। पुलिस ने घंटा छीन लिया। वीडियो वायरल हुए। सोशल मीडिया पर मजाक और गुस्सा दोनों चले। लेकिन मौतें नहीं रुकीं। लापरवाही का दाग नहीं मिटा।
      </p>

      <h3 class="text-xl font-bold font-hindi-alt text-brand-primary mt-8 mb-4 border-l-4 border-brand-saffron pl-3 py-1 bg-brand-card border border-brand-border rounded-r-xl">
        व्यवस्था का आइना और सोता हुआ सिस्टम
      </h3>
      <p class="text-base text-brand-primary/85 leading-relaxed mb-5 font-semibold">
        यह सिर्फ एक बस्ती की त्रासदी नहीं है। यह उस व्यवस्था का आइना है जो स्वच्छता का प्रमाणपत्र बांटती है, लेकिन पाइपलाइन में सीवर और पीने के पानी को मिलने से नहीं रोक पाती। शिकायतें पहले से थीं। बदबूदार पानी की शिकायतें। टाइफाइड और पीलिया की शिकायतें। फिर भी सिस्टम सोता रहा। जब मौतें हुईं, तब जाकर मुआवजा, सस्पेंशन, जांच और नए वायदे शुरू हुए।
      </p>

      <h3 class="text-xl font-bold font-hindi-alt text-brand-primary mt-8 mb-4 border-l-4 border-brand-saffron pl-3 py-1 bg-brand-card border border-brand-border rounded-r-xl">
        प्रशासनिक नाकामी और नागरिक उपेक्षा
      </h3>
      <p class="text-base text-brand-primary/85 leading-relaxed mb-5 font-semibold">
        भारत का डंका विश्व में बजे या न बजे — यह अलग बहस है। लेकिन भाग्यरतपुरा में जो घंटा बजा, वह प्रशासनिक नाकामी, नागरिक उपेक्षा और राजनीतिक संवेदनहीनता का घंटा है। वह घंटा जो कहता है कि तमगे और टैगलाइन से शहर नहीं चलते। पाइपलाइन, ड्रेनेज और जवाबदेही से चलते हैं।
      </p>

      <p class="text-base text-brand-primary/85 leading-relaxed mb-5 font-semibold">
        आज भी कई परिवार उस पानी के साए में जी रहे हैं। कुछ को मुआवजा मिला, कुछ को नहीं। कुछ अधिकारी निलंबित हुए, कुछ नहीं। शहर फिर “नंबर-1” बनने की कोशिश में लगा है। लेकिन भाग्यरतपुरा का घंटा अभी भी कानों में गूंज रहा है।
      </p>

      <div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 font-bold text-amber-800 dark:text-amber-300 text-lg text-center shadow-lg">
        "क्योंकि जब पानी जहर बन जाए, तो डंका बजने का मतलब ही खो जाता है।"
      </div>
    `,
  },
  {
    title: 'लोकतांत्रिक निष्पक्षता व उम्मीदवार की कसौटी: एक गैर-लक्षित नागरिक वक्तव्य',
    slug: 'democratic-accountability-and-neutral-citizen-manifesto',
    date: '25 अगस्त 2026',
    category: 'लोकतांत्रिक सुधार (Civic Manifesto)',
    excerpt: 'क्या हम हमेशा सिर्फ दो विकल्पों तक सीमित रहें? पार्टी और जाति के बजाय उम्मीदवार को उसके काम, ईमानदारी और समयबद्ध जवाबदेही के आधार पर परखने हेतु एक खुला लोकतांत्रिक नागरिक वक्तव्य।',
    coverImage: 'https://media.licdn.com/dms/image/v2/D5603AQG0Me2IFI_vXQ/profile-displayphoto-scale_400_400/B56ZmaUFiRI8Ag-/0/1759230583447?e=1787788800&v=beta&t=8o9F-2i_vNFM1xf4_rqz0SX5dtc91XmX8mtGKm-167Q',
    content: `
      <div class="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 p-5 mb-8 text-emerald-900 dark:text-emerald-200 font-bold leading-relaxed shadow-md">
        यह एक सार्वजनिक, गैर-लक्षित नागरिक वक्तव्य (Non-Targeted Public Statement) है जिसे किसी विशिष्ट सामाजिक/जातीय समूह को निशाना बनाए बिना, खुले लोकतांत्रिक मंच पर प्रस्तुत किया जा सकता है।
      </div>

      <h3 class="text-2xl font-black font-hindi-alt text-brand-primary mt-6 mb-4">
        क्या हम हमेशा सिर्फ दो विकल्पों तक सीमित रहें?
      </h3>
      <p class="text-base text-brand-primary/85 leading-relaxed mb-5 font-semibold">
        यह मूल विचार—<em>“क्या हम हमेशा सिर्फ दो विकल्पों (भाजपा बनाम कांग्रेस) तक सीमित रहें, और उम्मीदवार को उसके काम व जवाबदेही के आधार पर परखें?”</em>—हमारे स्थानीय लोकतंत्र की मजबूती के लिए अत्यंत आवश्यक है।
      </p>

      <h3 class="text-xl font-bold font-hindi-alt text-brand-primary mt-8 mb-4 border-l-4 border-emerald-500 pl-3 py-1 bg-brand-card border border-brand-border rounded-r-xl">
        लोकतांत्रिक सुधार के 6 मुख्य सिद्धांत
      </h3>
      <ul class="my-6 space-y-3 rounded-2xl border border-brand-border bg-brand-card p-6 shadow-xl font-semibold">
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-xs">✓</span>
          <div>
            <strong class="font-black text-brand-primary">काम व ईमानदारी पर परखना:</strong> उम्मीदवार को पार्टी चिन्ह के बजाय उसकी व्यक्तिगत योग्यता, ट्रैक रिकॉर्ड और ईमानदारी पर आंकना।
          </div>
        </li>
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-xs">✓</span>
          <div>
            <strong class="font-black text-brand-primary">निर्दलीय व अन्य विकल्पों पर विचार:</strong> पारंपरिक भाजपा और कांग्रेस के अलावा योग्य निर्दलीय व नए विकल्पों का निष्पक्ष मूल्यांकन करना।
          </div>
        </li>
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-xs">✓</span>
          <div>
            <strong class="font-black text-brand-primary">दल-बदल व वास्तविक विकास पर सवाल:</strong> केवल चेहरे या दल बदलने के बजाय क्षेत्र में हुए वास्तविक विकास और बुनियादी ढांचे पर प्रश्न पूछना।
          </div>
        </li>
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-xs">✓</span>
          <div>
            <strong class="font-black text-brand-primary">मूलभूत सुविधाएं चुनाव का केंद्र:</strong> शुद्ध पीने का पानी, सीवरेज, सड़क, सफाई, यातायात, स्वास्थ्य, शिक्षा और रोजगार को ही चुनाव का मुख्य मुद्दा बनाना।
          </div>
        </li>
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-xs">✓</span>
          <div>
            <strong class="font-black text-brand-primary">समयबद्ध लिखित जवाबदेही:</strong> उम्मीदवार से मौखिक नारों के स्थान पर लिखित, मापने योग्य (measurable) और समयबद्ध सेवा का वचन माँगना।
          </div>
        </li>
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-xs">✓</span>
          <div>
            <strong class="font-black text-brand-primary">स्वतंत्र तुलनात्मक निर्णय:</strong> मतदाता को बिना किसी दबाव या अंध-भक्ति के सभी प्रत्याशियों के कार्यों की निष्पक्ष तुलना करके विवेकपूर्ण निर्णय लेना।
          </div>
        </li>
      </ul>

      <div class="my-6 p-6 rounded-2xl bg-brand-card border border-brand-saffron/40 font-bold text-brand-primary text-base leading-relaxed shadow-lg">
        <p class="text-brand-saffron font-black text-xs uppercase tracking-widest mb-2 font-mono">
          लोकतांत्रिक अपील / Democratic Appeal:
        </p>
        "हमारा संदेश 'मुझे वोट दीजिए' की अंधी अपील के बजाय—'मुझे भी उसी निष्पक्ष कसौटी पर परखिए जिस पर आप बाकी प्रत्याशियों को परखते हैं' जैसी स्वस्थ और परिपक्व लोकतांत्रिक परंपरा पर आधारित होना चाहिए।"
      </div>
    `,
  },
  {
    title: 'संस्कृत शिक्षा और इंदौर-5 की उपेक्षा: एक कार्यकर्ता की पुकार',
    slug: 'sanskrit-education-and-indore-5-grievances',
    date: '9 सितंबर 2026',
    category: 'विचार (Opinion)',
    excerpt: 'यह लेख इंदौर विधानसभा क्षेत्र 5 की प्राथमिक जमीनी समस्याओं, सांस्कृतिक धरोहर एवं संस्कृत शिक्षा के प्रति व्यवस्था की उपेक्षा पर एक समर्पित कार्यकर्ता का विचार-पत्र है।',
    coverImage: 'https://media.licdn.com/dms/image/v2/D5603AQG0Me2IFI_vXQ/profile-displayphoto-scale_400_400/B56ZmaUFiRI8Ag-/0/1759230583447?e=1787788800&v=beta&t=8o9F-2i_vNFM1xf4_rqz0SX5dtc91XmX8mtGKm-167Q',
    content: `
      <div class="rounded-2xl border-l-4 border-[#c5a85c] bg-slate-100 dark:bg-slate-900 border border-brand-border p-5 mb-8 text-brand-primary font-medium leading-relaxed shadow-md">
        यह लेख इंदौर विधानसभा क्षेत्र 5 की प्राथमिक जमीनी समस्याओं, सांस्कृतिक धरोहर एवं संस्कृत शिक्षा के प्रति व्यवस्था की उपेक्षा पर एक समर्पित कार्यकर्ता का विचार-पत्र है। इसमें इंदौर-5 के वार्ड-स्तरीय मुद्दों और शिक्षा व्यवस्था के सुधार हेतु एक व्यावहारिक दृष्टिकोण प्रस्तुत किया गया है।
      </div>

      <h3 class="text-xl font-bold font-hindi-alt text-brand-primary mt-8 mb-4 border-l-4 border-[#c5a85c] pl-3 py-1 bg-brand-card border border-brand-border rounded-r-xl">
        संस्कृत भाषा व देववाणी का सांस्कृतिक महत्त्व
      </h3>
      <p class="text-base text-brand-primary/80 leading-relaxed mb-5 font-semibold">
        भारत की प्राचीन ज्ञान परंपरा, संस्कार और बौद्धिक संपदा का मूल आधार संस्कृत भाषा है। दुर्भाग्यवश, आधुनिक नीतिगत अनदेखी और उदासीनता के कारण विद्यालयी एवं उच्च शिक्षा स्तर पर संस्कृत अध्यापन और प्रोत्साहन को हासिये पर धकेल दिया गया है।
      </p>
      <p class="text-base text-brand-primary/80 leading-relaxed mb-5 font-semibold">
        देववाणी संस्कृत केवल एक भाषा नहीं, बल्कि हमारी सांस्कृतिक पहचान और नैतिक शिक्षा का संवाहक है। प्राथमिक विद्यालयों से लेकर उच्च शिक्षण संस्थानों में संस्कृत अध्यापकों के रिक्त पद और घटते प्रोत्साहन पर तुरंत संज्ञान लेना अनिवार्य है।
      </p>

      <h3 class="text-xl font-bold font-hindi-alt text-brand-primary mt-8 mb-4 border-l-4 border-[#c5a85c] pl-3 py-1 bg-brand-card border border-brand-border rounded-r-xl">
        इंदौर-5: जमीनी उपेक्षा व मूलभूत समस्याएं
      </h3>
      <p class="text-base text-brand-primary/80 leading-relaxed mb-5 font-semibold">
        इंदौर विधानसभा 5 क्षेत्र में विकास के बड़े-बड़े दावों के बावजूद कई वार्डों में बुनियादी पेयजल आपूर्ति, जलभराव, जर्जर सड़कें, और जनस्वास्थ्य सुविधाओं की भारी कमी है। आम नागरिक छोटी-छोटी शिकायतों के लिए सरकारी कार्यालयों के चक्कर लगाने को मजबूर हैं।
      </p>
      <p class="text-base text-brand-primary/80 leading-relaxed mb-5 font-semibold">
        जब तक स्थानीय प्रशासन और जनप्रतिनिधि जमीनी धरातल पर पारदर्शी जवाबदेही तय नहीं करेंगे, तब तक नागरिकों की मूलभूत समस्याएं दूर नहीं हो सकतीं।
      </p>

      <h3 class="text-xl font-bold font-hindi-alt text-brand-primary mt-8 mb-4 border-l-4 border-[#c5a85c] pl-3 py-1 bg-brand-card border border-brand-border rounded-r-xl">
        सुधार हेतु 3 मुख्य बिंदु:
      </h3>
      <ol class="my-6 space-y-3 rounded-2xl border border-brand-border bg-brand-card p-6 shadow-xl font-bold">
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c5a85c]/20 border border-[#c5a85c]/40 text-[#c5a85c] font-bold text-xs font-mono">1</span>
          <div>
            <strong class="font-black text-[#c5a85c]">संस्कृत व वोकेशनल शिक्षा प्रोत्साहन:</strong> प्राथमिक व माध्यमिक स्तर पर निःशुल्क संस्कृत व आधुनिक स्किल कोचिंग केंद्रों की स्थापना।
          </div>
        </li>
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c5a85c]/20 border border-[#c5a85c]/40 text-[#c5a85c] font-bold text-xs font-mono">2</span>
          <div>
            <strong class="font-black text-[#c5a85c]">24/7 डोरस्टेप शिकायत निवारण:</strong> हर वार्ड में पारदर्शी डिजिटल शिकायत ट्रैकिंग और होम-डिलीवरी सेवा।
          </div>
        </li>
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c5a85c]/20 border border-[#c5a85c]/40 text-[#c5a85c] font-bold text-xs font-mono">3</span>
          <div>
            <strong class="font-black text-[#c5a85c]">सक्रिय जनसुनवाई:</strong> जनप्रतिनिधियों और प्रशासनिक अधिकारियों की वार्ड-स्तरीय नियमित जवाबदेही।
          </div>
        </li>
      </ol>
    `,
  },
];
