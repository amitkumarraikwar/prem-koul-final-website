'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ThreeWrapper } from '@/components/ThreeWrapper';

// MUI Icons
import {
  BusinessCenter as BusinessCenterIcon,
  Verified as VerifiedIcon,
  Phone as PhoneIcon,
  TaskAlt as TaskAltIcon,
  School as SchoolIcon,
  Movie as MovieIcon,
  Architecture as ArchitectureIcon,
  ArrowForward as ArrowForwardIcon,
  HelpOutlined as HelpOutlineIcon,
  AssignmentLate as AssignmentLateIcon,
  GroupAdd as GroupAddIcon
} from '@mui/icons-material';

const STATS = [
  { value: '9+', label: 'मीडिया व संस्थागत अनुभव', icon: BusinessCenterIcon, sub: 'IIM Indore व NCERT' },
  { value: '4', label: 'मुख्य डोरस्टेप सेवा संकल्प', icon: TaskAltIcon, sub: 'स्वास्थ्य, शिक्षा व सहायता' },
  { value: '24/7', label: 'जनसुनवाई हेल्पलाइन', icon: PhoneIcon, sub: 'Indore-5 नागरिकों हेतु' },
  { value: '100%', label: 'पारदर्शी जनसेवा विज़न', icon: VerifiedIcon, sub: '0 क्रिमिनल रिकॉर्ड (ADR)' },
];

const VALUES = [
  {
    title: 'राष्ट्र प्रथम व जनसेवा',
    titleEn: 'Nation First & Selfless Service',
    desc: 'राष्ट्र के प्रति समर्पित भावना से जनसेवा। इंदौर-5 के नागरिकों के सर्वांगीण विकास व जनकल्याण के लिए निरंतर निःस्वार्थ भाव से कार्य करना।',
  },
  {
    title: 'संगठन व पारदर्शिता',
    titleEn: 'Transparency & Integrity',
    desc: 'भ्रष्टाचार मुक्त, 100% पारदर्शी और जवाबदेह जनसेवा मॉडल। बिना किसी बिचौलिए या सरकारी दफ्तरों के चक्कर काटे सीधे नागरिक तक पहुंच।',
  },
  {
    title: 'सांस्कृतिक उत्थान व युवा शक्ति',
    titleEn: 'Culture & Youth Empowerment',
    desc: 'हमारी देववाणी संस्कृत का संवर्धन, ओपन माइक मंच के जरिए स्थानीय युवा प्रतिभाओं का पोषण, और रोजगारोन्मुखी आधुनिक डिजिटल स्किल्स की ट्रेनिंग।',
  },
  {
    title: 'डोरस्टेप सेवा संकल्प',
    titleEn: 'Doorstep Governance 24/7',
    desc: 'नागरिक के दरवाजे पर प्राथमिक डॉक्टर व शिक्षक की पहुंच। पेंशन, राशन व अन्य सरकारी प्रमाणपत्रों के लिए वार्ड-स्तरीय होम डिलीवरी।',
  },
];

const CAREER = [
  {
    title: 'मीडिया एग्जीक्यूटिव (IIM Indore)',
    tag: 'अनुभव',
    subtitle: 'दिसंबर 2023 - वर्तमान',
    desc: 'भारतीय प्रबंध संस्थान (IIM Indore) में मीडिया प्रबंधन, जनसंपर्क और राष्ट्रीय/अंतर्राष्ट्रीय शैक्षणिक स्तर के वीडियो कंटेंट निर्माण का नेतृत्व।',
    icon: BusinessCenterIcon,
  },
  {
    title: 'पूर्व निर्माता (PSSCIVE NCERT)',
    tag: 'शिक्षा',
    subtitle: 'भोपाल व नई दिल्ली',
    desc: 'NCERT के PSSCIVE विंग में निर्माता के रूप में शैक्षणिक वृत्तचित्रों और व्यावसायिक प्रशिक्षण मॉड्यूल हेतु मीडिया कंटेंट का निर्माण व निर्देशन।',
    icon: SchoolIcon,
  },
  {
    title: 'फिल्म निर्देशक (Koul Film Production)',
    tag: 'कला',
    subtitle: 'संस्थापक व स्टूडियो डायरेक्टर',
    desc: 'दर्जनों शैक्षणिक, सामाजिक और सांस्कृतिक लघु फिल्मों व वृत्तचित्रों का निर्माण, जो राष्ट्रीय व अंतर्राष्ट्रीय फिल्म महोत्सवों में सराही गई हैं।',
    icon: MovieIcon,
  },
  {
    title: 'IGNCA सर्टिफाइड',
    tag: 'प्रशिक्षण',
    subtitle: 'नई दिल्ली (2019)',
    desc: 'इंदिरा गांधी राष्ट्रीय कला केंद्र, नई दिल्ली से डॉक्यूमेंट्री एवं एथ्नोग्राफिक फिल्म मेकिंग में विशेष प्रशिक्षण और राष्ट्रीय स्तर का प्रमाणन।',
    icon: ArchitectureIcon,
  },
];

const TIMELINE = [
  {
    num: '01',
    title: 'एक कॉल पर डॉक्टर और शिक्षक',
    desc: 'जिस तरह ई-कॉमर्स से सामान घर आता है, उसी तरह 24/7 हेल्पलाइन के जरिए डॉक्टर और होम ट्यूटर आपके दरवाजे पर।',
    bullets: ['वरिष्ठ नागरिकों की नियमित जांच', 'निःशुल्क डिजिटल ट्यूशन सहायता', 'आपातकालीन स्वास्थ्य सहायता'],
  },
  {
    num: '02',
    title: 'सक्रिय साप्ताहिक निगरानी (Doorstep Audits)',
    desc: 'बिना बुलाए, समर्पित टीमें हर घर जाकर बुजुर्गों का स्वास्थ्य हाल लेंगी और बच्चों की पढ़ाई व पोषण ट्रैक करेंगी।',
    bullets: ['साप्ताहिक वार्ड विजिट्स', 'स्वास्थ्य कार्ड ट्रैकिंग', 'बच्चों की रिपोर्ट कार्ड समीक्षा'],
  },
  {
    num: '03',
    title: 'सरकारी दफ्तरों के चक्करों से मुक्ति',
    desc: 'राशन कार्ड, पेंशन, आयुष्मान कार्ड और आय/जाति प्रमाण पत्र जैसे काम वार्ड-स्तरीय कोऑर्डिनेटर के जरिए घर बैठे पूरे होंगे।',
    bullets: ['होम डिलीवरी सर्टिफिकेट्स', 'वरिष्ठ नागरिकों को पेंशन होम सेवा', 'पारदर्शी ऑनलाइन आवेदन सहायता'],
  },
  {
    num: '04',
    title: 'विधानसभा स्तरीय युवा स्किल व रोजगार हब',
    desc: 'डिजिटल मार्केटिंग, वीडियो एडिटिंग, कोडिंग, फिल्म मेकिंग व वोकेशनल स्किल्स की प्रैक्टिकल ट्रेनिंग विधानसभा स्तर पर।',
    bullets: ['निःशुल्क कोडिंग व एडिट लैब', 'स्थानीय ओपन माइक कला मंच', 'रोजगार मेला व स्टार्टअप सपोर्ट'],
  },
];

const ROADMAP = [
  { num: '01', title: 'डोरस्टेप हेल्थकेयर (Doctor at Home)', desc: 'वरिष्ठ नागरिकों, बच्चों व जरूरतमंदों के लिए मोबाइल मेडिकल यूनिट और 24 घंटे उपलब्ध घर-घर स्वास्थ्य चेकअप सेवा।' },
  { num: '02', title: 'गुणवत्तापूर्ण शिक्षा एवं डिजिटल कोचिंग', desc: 'प्रतिभावान विद्यार्थियों के लिए निःशुल्क डिजिटल कोचिंग, करियर काउंसलिंग और होम-ट्यूटर नेटवर्क।' },
  { num: '03', title: 'हरित व स्वच्छ इंदौर-5 (Green Infrastructure)', desc: 'सघन पौधारोपण, सौर ऊर्जा प्रोत्साहन और आधुनिक कचरा प्रबंधन।' },
  { num: '04', title: 'सुरक्षा व 24/7 स्मार्ट जनसुनवाई', desc: 'महिलाओं व वरिष्ठ नागरिकों की सुरक्षा हेतु स्मार्ट सीसीटीवी नेटवर्क और ऑनलाइन शिकायत निवारण पोर्टल।' },
];

const FAQS = [
  {
    q: 'डोरस्टेप गवर्नेंस (Doorstep Governance) का मुख्य विचार क्या है?',
    a: 'डोरस्टेप गवर्नेंस का अर्थ है कि नागरिक को अपने हक और सुविधाओं के लिए सरकारी कार्यालयों के चक्कर न लगाने पड़ें। आधुनिक तकनीक और 24/7 हेल्पलाइन के जरिए स्वास्थ्य, शिक्षा और प्रशासनिक सेवाएं सीधे नागरिक के घर पहुँचेंगी।',
  },
  {
    q: 'एक कॉल पर डॉक्टर व शिक्षक योजना का लाभ कैसे मिलेगा?',
    a: 'इंदौर विधानसभा 5 के प्रत्येक परिवार के लिए एक केंद्रीकृत हेल्पलाइन नंबर जारी किया जाएगा। आपातकालीन या नियमित जांच के लिए डॉक्टर की टीम और बच्चों की पढ़ाई में मदद के लिए ट्यूटर सीधे घर पहुँचेंगे।',
  },
  {
    q: 'युवाओं के लिए कौन-कौन से स्किल कोर्स उपलब्ध होंगे?',
    a: 'विधानसभा स्तर पर डिजिटल मार्केटिंग, वीडियो एडिटिंग, सिनेमैटोग्राफी, कोडिंग, और वोकेशनल स्किल्स के प्रैक्टिकल ट्रेनिंग सेंटर स्थापित किए जाएंगे।',
  },
  {
    q: 'प्रेम चंद कौल जी से नागरिक सीधे कैसे जुड़ सकते हैं?',
    a: 'आप वेबसाइट के संपर्क फॉर्म (Contact Page) द्वारा संदेश भेज सकते हैं, या उनके आधिकारिक सोशल मीडिया हैंडल (LinkedIn, Facebook, YouTube) और आगामी वार्ड जनसुनवाई शिविरों के जरिए सीधे विचार साझा कर सकते हैं।',
  },
];

export default function HomePage() {
  return (
    <div className="flex-1 w-full flex flex-col">
      {/* ================================================
          1. HERO SECTION WITH 3D CANVAS
          ================================================ */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden border-b border-brand-border bg-gradient-to-b from-slate-50 via-slate-50/50 to-brand-bg dark:from-slate-900/60 dark:via-slate-900/40 dark:to-brand-bg">
        <ThreeWrapper />

        <div className="container-width grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-brand-saffron shadow-sm">
                Indore Vidhan Sabha 5 · 2028
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-saffron/30 bg-brand-saffron/10 px-3.5 py-1 text-xs font-extrabold text-brand-saffron shadow-2xs">
                🎯 Motive: Reach with People → Convert to Vote (Main Output)
              </span>
            </div>

            <h1 className="font-hindi-alt text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-brand-primary tracking-wide">
              कार्यालय नहीं, अब सेवा <br />
              <span className="saffron-gradient-text">आपके दरवाज़े तक</span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-brand-primary/80 max-w-2xl font-medium">
              <span className="font-extrabold text-brand-saffron font-hindi-alt">प्रेम चंद कौल (Prem Chand Koul)</span> — IIM इंदौर में मीडिया एग्जीक्यूटिव, पूर्व NCERT प्रोड्यूसर, film निर्देशक और 9+ वर्षों के मीडिया एवं जनसेवा अनुभव के साथ, इंदौर-5 के लिए {"\"डोरस्टेप गवर्नेंस\""} का क्रांतिकारी विज़न।
            </p>

            {/* Core Campaign Motive Banner */}
            <div className="p-3.5 rounded-2xl bg-brand-card border border-brand-saffron/30 text-xs sm:text-sm font-semibold text-brand-primary/90 space-y-1">
              <p className="text-xs uppercase font-mono font-extrabold text-brand-saffron tracking-wider flex items-center gap-1.5">
                <GroupAddIcon className="w-4 h-4 text-brand-saffron" />
                Campaign Core Motive / अभियान का मुख्य उद्देश्य:
              </p>
              <p className="font-bold text-slate-800 dark:text-slate-100">
                {"\"Reach with People → Convert to Vote (Main Output)\""} — जन-जन तक सघन पहुँच और हर जनसंपर्क को निर्णायक जनादेश (Vote) में परिवर्तित करना।
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/vision" className="btn-primary flex items-center gap-2">
                <span>पूरा विज़न देखें</span>
                <ArrowForwardIcon className="w-4 h-4" />
              </Link>
              <Link href="/about" className="btn-secondary flex items-center gap-2">
                <span>परिचय पढ़ें</span>
              </Link>
              <Link href="/contact" className="btn-secondary flex items-center gap-2 border-brand-saffron/40 hover:border-brand-saffron">
                <span>संपर्क करें</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Profile Image Card */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative mx-auto max-w-sm rounded-3xl border border-brand-border bg-brand-card p-4 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-brand-border bg-slate-100 dark:bg-slate-900">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D5603AQG0Me2IFI_vXQ/profile-displayphoto-scale_400_400/B56ZmaUFiRI8Ag-/0/1759230583447?e=1787788800&v=beta&t=8o9F-2i_vNFM1xf4_rqz0SX5dtc91XmX8mtGKm-167Q"
                    alt="Prem Chand Koul"
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover object-center filter contrast-105"
                    priority
                    unoptimized
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-brand-primary">Prem Chand Koul</h3>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-0.5 bg-brand-saffron/10 text-brand-saffron rounded-full">
                      Indore-5
                    </span>
                  </div>
                  <p className="text-xs text-brand-primary/70 font-medium">
                    Producer · Director · Media Executive
                  </p>
                  <div className="pt-2 border-t border-brand-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-brand-primary/50 font-bold">
                    <span>Indore & Bhopal, MP</span>
                    <span className="text-brand-saffron">9+ Years Experience</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================
          2. KEY STATS STRIP (Animated count-up)
          ================================================ */}
      <section className="section-padding bg-brand-bg border-b border-brand-border">
        <div className="container-width">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((st, i) => (
              <ScrollReveal key={st.label} delay={i * 0.08}>
                <div className="card-base text-center space-y-2 flex flex-col items-center justify-center p-6 glassmorphism">
                  <st.icon className="text-brand-saffron w-8 h-8" />
                  <AnimatedCounter
                    value={st.value}
                    className="block font-display text-2xl text-brand-primary sm:text-3xl font-extrabold"
                  />
                  <p className="text-sm font-extrabold text-brand-primary">{st.label}</p>
                  <p className="text-xs text-brand-primary/60 font-semibold">{st.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          3. VALUES SECTION
          ================================================ */}
      <section className="section-padding bg-brand-bg/50 border-b border-brand-border">
        <div className="container-width space-y-12">
          <ScrollReveal>
            <div className="max-w-2xl space-y-3">
              <h2 className="font-hindi-alt text-3xl font-extrabold text-brand-primary sm:text-4xl">
                राष्ट्र प्रथम, जनसेवा सर्वोपरि
              </h2>
              <p className="text-sm sm:text-base text-brand-primary/60 font-semibold leading-relaxed">
                Visualizing visual narratives, youth empowerment, and modern doorstep solutions in Indore Constituency 5.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 0.08}>
                <div className="card-base space-y-3 h-full glassmorphism flex flex-col justify-between p-6">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">
                      Pillar 0{i + 1}
                    </span>
                    <h3 className="font-hindi-alt text-xl font-bold text-brand-primary mt-1">
                      {val.title}
                    </h3>
                    <p className="text-xs text-brand-primary/50 font-bold -mt-0.5 mb-2">
                      {val.titleEn}
                    </p>
                    <p className="text-sm text-brand-primary/75 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          4. CAREER HIGHLIGHTS STRIP
          ================================================ */}
      <section className="section-padding bg-brand-bg border-b border-brand-border">
        <div className="container-width space-y-12">
          <ScrollReveal>
            <div className="max-w-2xl space-y-3">
              <h2 className="font-hindi-alt text-3xl font-extrabold text-brand-primary sm:text-4xl">
                संस्थागत पृष्ठभूमि व मीडिया अनुभव
              </h2>
              <p className="text-sm sm:text-base text-brand-primary/60 font-semibold leading-relaxed">
                Executive leadership across premier management institutes, national media bodies, and documentary production.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER.map((car, i) => (
              <ScrollReveal key={car.title} delay={i * 0.08}>
                <div className="card-base space-y-3 h-full glassmorphism flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase text-brand-saffron bg-brand-saffron/10 px-3 py-1 rounded-full border border-brand-saffron/20">
                        <car.icon className="w-3.5 h-3.5" />
                        {car.tag}
                      </span>
                      <span className="text-xs text-brand-primary/50 font-bold">{car.subtitle}</span>
                    </div>
                    <h3 className="font-hindi-alt text-xl font-extrabold text-brand-primary">{car.title}</h3>
                    <p className="text-sm text-brand-primary/70 leading-relaxed mt-2">{car.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          5. COMPARISON TEASER CARD
          ================================================ */}
      <section className="section-padding bg-brand-bg/50 border-b border-brand-border">
        <div className="container-width">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-brand-saffron/20 bg-brand-card/90 p-8 sm:p-12 shadow-xl glassmorphism">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-saffron/5 rounded-full blur-[60px] pointer-events-none" />
              <div className="max-w-3xl space-y-6 relative z-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-brand-saffron bg-brand-saffron/10 px-3 py-1 rounded-full border border-brand-saffron/20">
                  Benchmarking Candidate Quality
                </span>
                <h2 className="font-hindi-alt text-3xl font-extrabold text-brand-primary sm:text-4xl">
                  इंदौर के नेता vs प्रेम चंद कौल — रिपोर्ट कार्ड
                </h2>
                <p className="text-sm sm:text-base text-brand-primary/70 leading-relaxed font-semibold">
                  ADR MyNeta-based benchmark comparison. Compare educational qualifications, criminal history, and service models to make an informed, value-based decision.
                </p>
                <div className="pt-2">
                  <Link href="/compare" className="btn-primary flex items-center gap-2">
                    <span>तुलनात्मक डेटा टेबल देखें</span>
                    <ArrowForwardIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          6. UDANT MARTAND NEWSPAPER FEATURE
          ================================================ */}
      <section className="section-padding bg-brand-bg border-b border-brand-border">
        <div className="container-width">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-brand-border bg-brand-card/70 p-8 sm:p-12 glassmorphism shadow-md">
              <div className="max-w-3xl space-y-6 relative z-10">
                <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">
                  डिजिटल समाचार पत्र · External Link
                </span>
                <h2 className="font-hindi-alt text-3xl font-extrabold text-brand-primary sm:text-4xl">
                  उदन्त मार्तण्ड (Udant Martand) — डिजिटल क्रांति
                </h2>
                <p className="text-sm sm:text-base text-brand-primary/70 leading-relaxed font-semibold">
                  India&apos;s first Hindi newspaper, reborn digital, supported by Prem Chand Koul. Active publication focusing on unbiased local reporting, cultural heritage, and transparency.
                </p>
                <div className="pt-2">
                  <a
                    href="https://udanta-martanda.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary border-brand-saffron/30 hover:border-brand-saffron hover:bg-brand-saffron hover:text-white"
                  >
                    <span>उदन्त मार्तण्ड डिजिटल ई-पेपर देखें ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          7. TIMELINE: 4 RESOLVES (डोरस्टेप गवर्नेंस संकल्प)
          ================================================ */}
      <section className="section-padding bg-brand-bg/50 border-b border-brand-border">
        <div className="container-width space-y-12">
          <ScrollReveal>
            <div className="max-w-2xl space-y-3">
              <h2 className="font-hindi-alt text-3xl font-extrabold text-brand-primary sm:text-4xl">
                डोरस्टेप गवर्नेंस के 4 मुख्य संकल्प
              </h2>
              <p className="text-sm sm:text-base text-brand-primary/60 font-semibold leading-relaxed">
                4 core citizen-centric promises transforming governance to doorstep deliveries in Indore 5.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((time, i) => (
              <ScrollReveal key={time.num} delay={i * 0.08}>
                <div className="card-base h-full glassmorphism flex flex-col justify-between p-6 hover:scale-102 transition-transform border-t-4 border-t-brand-saffron">
                  <div>
                    <span className="font-display text-4xl font-extrabold text-brand-saffron/30 block mb-2">
                      {time.num}
                    </span>
                    <h3 className="font-hindi-alt text-lg font-extrabold text-brand-primary mb-2">
                      {time.title}
                    </h3>
                    <p className="text-xs text-brand-primary/70 mb-4 leading-relaxed font-semibold">
                      {time.desc}
                    </p>
                    <ul className="space-y-1.5 text-xs text-brand-primary/80 font-bold">
                      {time.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
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

      {/* ================================================
          8. CONSTITUENCY DEVELOPMENT ROADMAP
          ================================================ */}
      <section className="section-padding bg-brand-bg border-b border-brand-border">
        <div className="container-width space-y-12">
          <ScrollReveal>
            <div className="max-w-2xl space-y-3">
              <h2 className="font-hindi-alt text-3xl font-extrabold text-brand-primary sm:text-4xl">
                इंदौर विधानसभा 5 विकास रोडमैप
              </h2>
              <p className="text-sm sm:text-base text-brand-primary/60 font-semibold leading-relaxed">
                Strategic infrastructure and social wellness roadmap for Indore-5 Constituency (Vision 2026+).
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROADMAP.map((road, i) => (
              <ScrollReveal key={road.num} delay={i * 0.08}>
                <div className="card-base glassmorphism p-6 flex gap-4 h-full">
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

      {/* ================================================
          9. LATEST BLOG TEASER
          ================================================ */}
      <section className="section-padding bg-brand-bg/50 border-b border-brand-border">
        <div className="container-width space-y-10">
          <ScrollReveal>
            <div className="flex items-end justify-between flex-wrap gap-4 border-b border-brand-border pb-6">
              <div className="space-y-2">
                <h2 className="font-hindi-alt text-3xl font-extrabold text-brand-primary sm:text-4xl">
                  नवीनतम ब्लॉग व विचार-पत्र
                </h2>
                <p className="text-sm text-brand-primary/60 font-semibold">
                  Read views on Sanskrit education, local administration issues, and grassroots reforms.
                </p>
              </div>
              <Link href="/blog" className="text-sm font-bold text-brand-saffron hover:text-brand-gold flex items-center gap-1">
                <span>सभी लेख देखें</span>
                <ArrowForwardIcon className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="card-base glassmorphism p-6 md:p-8 space-y-4 hover:scale-101 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-brand-saffron bg-brand-saffron/10 px-3 py-1 rounded-full border border-brand-saffron/20">
                    विचार (Opinion)
                  </span>
                  <span className="text-xs text-brand-primary/50 font-bold">9 सितंबर 2026</span>
                </div>
                <h3 className="font-hindi-alt text-2xl font-black text-brand-primary">
                  संस्कृत शिक्षा और इंदौर-5 की उपेक्षा: एक कार्यकर्ता की पुकार
                </h3>
                <p className="text-sm text-brand-primary/75 leading-relaxed font-semibold">
                  यह लेख इंदौर विधानसभा क्षेत्र 5 की प्राथमिक जमीनी समस्याओं, सांस्कृतिक धरोहर एवं संस्कृत शिक्षा के प्रति व्यवस्था की उपेक्षा पर एक समर्पित कार्यकर्ता का विचार-पत्र है।
                </p>
                <div className="pt-2">
                  <Link
                    href="/blog/sanskrit-education-and-indore-5-grievances"
                    className="text-sm font-extrabold text-brand-saffron hover:underline flex items-center gap-1"
                  >
                    <span>पूरा लेख पढ़ें</span>
                    <ArrowForwardIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================
          10. FAQ SECTION
          ================================================ */}
      <section className="section-padding bg-brand-bg border-b border-brand-border">
        <div className="container-width max-w-4xl space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-3">
              <HelpOutlineIcon className="text-brand-saffron w-10 h-10" />
              <h2 className="font-hindi-alt text-3xl font-extrabold text-brand-primary sm:text-4xl">
                पूछे जाने वाले प्रश्न (FAQ)
              </h2>
              <p className="text-sm text-brand-primary/60 font-semibold max-w-2xl mx-auto">
                इंदौर-5 डोरस्टेप गवर्नेंस अभियान और प्रमुख सामाजिक पहलों के बारे में सामान्य प्रश्नोत्तर।
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <details className="group card-base glassmorphism p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                  <summary className="flex items-center justify-between text-brand-primary font-bold">
                    <h3 className="font-hindi-alt text-base md:text-lg pr-4">{faq.q}</h3>
                    <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-brand-saffron">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-brand-primary/75 leading-relaxed font-semibold border-t border-brand-border/60 pt-4">
                    {faq.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          11. VOLUNTEER & GRIEVANCE CTA BANNERS
          ================================================ */}
      <section className="section-padding bg-brand-bg/50 border-b border-brand-border">
        <div className="container-width grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Grievance Portal CTA */}
          <ScrollReveal direction="right">
            <div className="card-base glassmorphism p-8 space-y-4 flex flex-col justify-between h-full hover:border-brand-saffron/40 border-l-4 border-l-red-500">
              <div className="space-y-2">
                <AssignmentLateIcon className="text-red-500 w-8 h-8" />
                <h3 className="font-hindi-alt text-2xl font-black text-brand-primary">जनसुनवाई व समस्या निवारण</h3>
                <p className="text-xs text-brand-primary/40 font-bold -mt-1 uppercase">Grievance Portal</p>
                <p className="text-sm text-brand-primary/75 leading-relaxed font-semibold">
                  क्या आपके वार्ड में पेयजल आपूर्ति, जलभराव या अन्य प्रशासनिक शिकायत है? सीधे रिपोर्ट दर्ज करें ताकि त्वरित समाधान हेतु पहल की जा सके।
                </p>
              </div>
              <div className="pt-4">
                <Link href="/grievance" className="btn-secondary border-red-500/35 hover:border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 font-bold text-xs uppercase tracking-wider w-full justify-center">
                  शिकायत दर्ज करें
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Volunteer CTA */}
          <ScrollReveal direction="left">
            <div className="card-base glassmorphism p-8 space-y-4 flex flex-col justify-between h-full hover:border-brand-saffron/40 border-l-4 border-l-brand-saffron">
              <div className="space-y-2">
                <GroupAddIcon className="text-brand-saffron w-8 h-8" />
                <h3 className="font-hindi-alt text-2xl font-black text-brand-primary">अभियान से जुड़ें (स्वयंसेवक)</h3>
                <p className="text-xs text-brand-primary/40 font-bold -mt-1 uppercase">Volunteer Hub</p>
                <p className="text-sm text-brand-primary/75 leading-relaxed font-semibold">
                  डोरस्टेप गवर्नेंस विज़न को जमीनी स्तर पर उतारने के लिए डिजिटल कैंपेन, ग्राउंड वर्क, कंटेंट या डिजाइन में स्वयंसेवक बनकर योगदान दें।
                </p>
              </div>
              <div className="pt-4">
                <Link href="/volunteer" className="btn-primary w-full justify-center text-xs uppercase tracking-wider font-extrabold">
                  स्वयंसेवक बनें
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================
          12. FINAL CALL-TO-ACTION SECTION
          ================================================ */}
      <section className="section-padding bg-brand-bg text-center">
        <div className="container-width max-w-3xl space-y-6">
          <ScrollReveal>
            <h2 className="font-hindi-alt text-3xl font-black text-brand-primary sm:text-4xl">
              बदलाव का हिस्सा बनें
            </h2>
            <p className="text-sm sm:text-base text-brand-primary/70 max-w-xl mx-auto font-semibold leading-relaxed">
              एक पारदर्शी और नागरिक-अनुकूल विधानसभा के निर्माण में हाथ मिलाएं। संपर्क करें या सीधे विज़न योजना समीक्षा से जुड़ें।
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/contact" className="btn-primary">
                <span>संपर्क करें</span>
              </Link>
              <Link href="/volunteer" className="btn-secondary">
                <span>स्वयंसेवक बनें</span>
              </Link>
              <Link href="/vision" className="btn-secondary">
                <span>डोरस्टेप विज़न</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Prem Chand Koul",
            "alternateName": [
              "Prem Koul",
              "Prem Kaul",
              "Prem Chandra Koul",
              "Prem Chandra Kaul"
            ],
            "jobTitle": "IIM Indore Media Executive",
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Devi Ahilya Vishwavidyalaya (DAVV), Indore"
            },
            "sameAs": [
              "https://www.linkedin.com/in/premkoul20",
              "https://www.facebook.com/premkoulfilm",
              "https://youtube.com/@premkoul"
            ],
            "description": "IIM Indore Media Executive, former NCERT Producer, Filmmaker, and civic leader for Indore Vidhan Sabha 5."
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "डोरस्टेप गवर्नेंस (Doorstep Governance) का मुख्य विचार क्या है?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "डोरस्टेप गवर्नेंस का अर्थ है कि नागरिक को अपने हक और सुविधाओं के लिए सरकारी कार्यालयों के चक्कर न लगाने पड़ें। आधुनिक तकनीक और 24/7 हेल्पलाइन के जरिए स्वास्थ्य, शिक्षा और प्रशासनिक सेवाएं सीधे नागरिक के घर पहुँचेंगी।"
                }
              },
              {
                "@type": "Question",
                "name": "एक कॉल पर डॉक्टर व शिक्षक योजना का लाभ कैसे मिलेगा?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "इंदौर विधानसभा 5 के प्रत्येक परिवार के लिए एक केंद्रीकृत हेल्पलाइन नंबर जारी किया जाएगा। आपातकालीन या नियमित जांच के लिए डॉक्टर की टीम और बच्चों की पढ़ाई में मदद के लिए ट्यूटर सीधे घर पहुँचेंगे।"
                }
              },
              {
                "@type": "Question",
                "name": "युवाओं के लिए कौन-कौन से स्किल कोर्स उपलब्ध होंगे?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "विधानसभा स्तर पर डिजिटल मार्केटिंग, वीडियो एडिटिंग, सिनेमैटोग्राफी, कोडिंग, और वोकेशनल स्किल्स के प्रैक्टिकल ट्रेनिंग सेंटर स्थापित किए जाएंगे।"
                }
              },
              {
                "@type": "Question",
                "name": "प्रेम चंद कौल जी से नागरिक सीधे कैसे जुड़ सकते हैं?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "आप वेबसाइट के संपर्क फॉर्म (Contact Page) द्वारा संदेश भेज सकते हैं, या उनके आधिकारिक सोशल मीडिया हैंडल (LinkedIn, Facebook, YouTube) और आगामी वार्ड जनसुनवाई शिविरों के जरिए सीधे विचार साझा कर सकते हैं।"
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
