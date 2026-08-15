'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import {
  PhoneInTalk as PhoneInTalkIcon,
  LocalHospital as LocalHospitalIcon,
  Description as DescriptionIcon,
  Stars as StarsIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

const RESOLVES = [
  {
    num: '01',
    title: 'एक कॉल पर डॉक्टर और शिक्षक',
    desc: 'जिस तरह ई-कॉमर्स से सामान घर आता है, उसी तरह 24/7 हेल्पलाइन के जरिए डॉक्टर और होम ट्यूटर आपके दरवाजे पर आएंगे। स्वास्थ्य व शिक्षा की सेवाएं हर नागरिक के लिए सुलभ बनाना हमारा मुख्य ध्येय है।',
    icon: LocalHospitalIcon,
    bullets: [
      'वरिष्ठ नागरिकों की घर-घर नियमित स्वास्थ्य जांच',
      'निःशुल्क डिजिटल ट्यूशन व गृह-शिक्षक सहायता',
      'आपातकालीन प्राथमिक चिकित्सा व स्वास्थ्य परामर्श',
    ],
  },
  {
    num: '02',
    title: 'सक्रिय साप्ताहिक निगरानी (Doorstep Audits)',
    desc: 'बिना किसी पूर्व सूचना या नागरिक के बुलाए, हमारी समर्पित सामाजिक टीमें हर घर जाकर बुजुर्गों का स्वास्थ्य हाल लेंगी, और बच्चों की पढ़ाई व पोषण स्तर को ट्रैक करेंगी।',
    icon: PhoneInTalkIcon,
    bullets: [
      'नियमित साप्ताहिक वार्ड-स्तरीय गृह विजिट्स',
      'स्वास्थ्य कार्ड का समयबद्ध ट्रैकिंग व डेटाबेस',
      'बच्चों के रिपोर्ट कार्ड की नियमित शैक्षिक समीक्षा',
    ],
  },
  {
    num: '03',
    title: 'सरकारी दफ्तरों के चक्करों से मुक्ति',
    desc: 'राशन कार्ड, पेंशन योजना, आयुष्मान कार्ड और आय/जाति प्रमाण पत्र जैसे सभी प्रशासनिक कार्य वार्ड-स्तरीय कोऑर्डिनेटर के जरिए घर बैठे पूरे होंगे। किसी नागरिक को कतार में नहीं लगना पड़ेगा।',
    icon: DescriptionIcon,
    bullets: [
      'सरकारी प्रमाणपत्रों की घर पर सुरक्षित डिलीवरी',
      'वरिष्ठ नागरिकों को पेंशन होम सर्विस वितरण',
      'पारदर्शी, त्वरित ऑनलाइन डिजिटल आवेदन सहायता',
    ],
  },
  {
    num: '04',
    title: 'विधानसभा स्तरीय युवा स्किल व रोजगार हब',
    desc: 'डिजिटल मार्केटिंग, वीडियो एडिटिंग, कोडिंग, फिल्म मेकिंग व वोकेशनल स्किल्स की एडवांस प्रैक्टिकल ट्रेनिंग विधानसभा स्तर पर निःशुल्क प्रदान की जाएगी। युवाओं को स्वावलंबी बनाना संकल्प है।',
    icon: StarsIcon,
    bullets: [
      'निःशुल्क हाई-टेक कोडिंग व वीडियो एडिटिंग लैब्स',
      'इन्दौर ओपन माइक के माध्यम से स्थानीय कला मंच',
      'नियमित रोजगार मेला, करियर काउंसलिंग व स्टार्टअप मेंटॉरशिप',
    ],
  },
];

const ROADMAPS = [
  {
    num: '01',
    title: 'डोरस्टेप हेल्थकेयर (Doctor at Home)',
    desc: 'वरिष्ठ नागरिकों, बच्चों व जरूरतमंदों के लिए मोबाइल मेडिकल यूनिट और 24 घंटे उपलब्ध घर-घर स्वास्थ्य चेकअप सेवा। स्वास्थ्य सुविधाओं का विकेंद्रीकरण कर हर घर तक प्राथमिक उपचार पहुंचाना।',
  },
  {
    num: '02',
    title: 'गुणवत्तापूर्ण शिक्षा एवं डिजिटल कोचिंग',
    desc: 'प्रतिभावान विद्यार्थियों के लिए निःशुल्क डिजिटल कोचिंग, करियर काउंसलिंग और होम-ट्यूटर नेटवर्क। प्रतियोगी परीक्षाओं के लिए छात्रों को स्थानीय स्तर पर तैयार करना।',
  },
  {
    num: '03',
    title: 'हरित व स्वच्छ इंदौर-5 (Green Infrastructure)',
    desc: 'सघन पौधारोपण, सौर ऊर्जा प्रोत्साहन और आधुनिक कचरा प्रबंधन। इंदौर-5 को स्वच्छ पर्यावरण और सस्टेनेबल इंफ्रास्ट्रक्चर के साथ आदर्श हरित क्षेत्र बनाना।',
  },
  {
    num: '04',
    title: 'सुरक्षा व 24/7 स्मार्ट जनसुनवाई',
    desc: 'महिलाओं व वरिष्ठ नागरिकों की सुरक्षा हेतु स्मार्ट सीसीटीवी नेटवर्क का विस्तार। त्वरित ऑनलाइन शिकायत निवारण पोर्टल जिससे समस्याओं का तय समय में समाधान हो सके।',
  },
];

export default function VisionPage() {
  return (
    <div className="flex-1 w-full flex flex-col">
      {/* Header Banner */}
      <section className="bg-brand-primary text-slate-100 py-20 border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-brand-saffron/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="container-width text-center space-y-4 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">
            Campaign Vision & Mission / विज़न
          </span>
          <h1 className="font-hindi-alt text-4xl sm:text-5xl font-black">{"\"डोरस्टेप गवर्नेंस\""} विज़न</h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-medium">
            एक क्रांतिकारी प्रशासनिक और सेवा मॉडल, जो इंदौर विधानसभा 5 के नागरिकों को कार्यालयों के चक्कर काटने से मुक्त कर हर अधिकार उनके द्वार पर दिलाएगा।
          </p>
        </div>
      </section>

      {/* Resolves Section */}
      <section className="section-padding bg-brand-bg">
        <div className="container-width space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">
              Core Promises / 4 मुख्य संकल्प
            </span>
            <h2 className="font-hindi-alt text-3xl font-extrabold text-brand-primary">
              डोरस्टेप गवर्नेंस के 4 स्तंभ
            </h2>
            <p className="text-sm sm:text-base text-brand-primary/60 font-semibold leading-relaxed">
              प्रत्येक वार्ड में सक्रिय टीमों व एकीकृत तकनीकी समाधानों के माध्यम से नागरिकों की बुनियादी आवश्यकताओं की शत-प्रतिशत पूर्ति।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {RESOLVES.map((res, idx) => (
              <ScrollReveal key={res.num} delay={idx * 0.08}>
                <div className="card-base glassmorphism p-6 md:p-8 flex flex-col justify-between h-full space-y-6 hover:border-brand-saffron/40 border-t-4 border-t-brand-saffron shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-4xl font-extrabold text-brand-saffron/20">{res.num}</span>
                      <res.icon className="text-brand-saffron w-8 h-8" />
                    </div>
                    <h3 className="font-hindi-alt text-xl font-extrabold text-brand-primary">{res.title}</h3>
                    <p className="text-sm text-brand-primary/75 leading-relaxed font-semibold">{res.desc}</p>
                  </div>
                  <div className="border-t border-brand-border/60 pt-4 space-y-2.5">
                    <h4 className="text-xs font-mono font-bold tracking-wider text-brand-gold uppercase">प्रमुख पहलू:</h4>
                    <ul className="space-y-2 text-sm text-brand-primary/80 font-bold">
                      {res.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircleIcon className="text-brand-gold w-4 h-4 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="section-padding bg-brand-bg/50 border-t border-brand-border">
        <div className="container-width space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">
              Constituency Infrastructure / 2026+ विकास योजना
            </span>
            <h2 className="font-hindi-alt text-3xl font-extrabold text-brand-primary">
              विधानसभा विकास योजना (Indore 5)
            </h2>
            <p className="text-sm sm:text-base text-brand-primary/60 font-semibold leading-relaxed">
              सड़कों, जल, सुरक्षा और स्वास्थ्य की समस्याओं से मुक्त कर एक स्मार्ट, हरित व सुरक्षित इंदौर-5 का निर्माण।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {ROADMAPS.map((road, idx) => (
              <ScrollReveal key={road.num} delay={idx * 0.08}>
                <div className="card-base glassmorphism p-6 flex gap-4 h-full shadow-sm hover:border-brand-gold/40 border-l-4 border-l-brand-gold">
                  <span className="font-display text-3xl font-bold text-brand-gold shrink-0">
                    0{road.num}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-hindi-alt text-lg font-bold text-brand-primary">{road.title}</h3>
                    <p className="text-sm text-brand-primary/70 leading-relaxed font-semibold">{road.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
