'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';

// MUI Icons
import {
  CalendarMonth as CalendarMonthIcon,
  School as SchoolIcon,
  EmojiEvents as EmojiEventsIcon,
  PlayCircleOutlined as PlayCircleOutlineIcon,
  VerifiedUser as VerifiedUserIcon,
  SelfImprovement as SelfImprovementIcon,
  Timeline as TimelineIcon
} from '@mui/icons-material';

const TIMELINE_ROLES = [
  {
    role: 'मीडिया एग्जीक्यूटिव',
    org: 'भारतीय प्रबंध संस्थान (IIM Indore)',
    date: 'दिसंबर 2023 – वर्तमान',
    desc: 'संस्थान के राष्ट्रव्यापी व अंतर्राष्ट्रीय मीडिया संबंधों, जनसंपर्क नीतियों और मीडिया कंटेंट का नेतृत्व। उच्च प्रबंधकीय कौशल व संस्थागत अनुभव।',
  },
  {
    role: 'संस्थापक एवं स्टूडियो डायरेक्टर',
    org: 'प्रेम कौल फिल्म प्रोडक्शन',
    date: 'मई 2014 – वर्तमान',
    desc: 'शैक्षणिक, सामाजिक और संस्कृत वृत्तचित्रों का निर्माण। विंध्याचल व उज्जैन फिल्म फेस्टिवल 2026 में संस्कृत फिल्मों का सेमी-फाइनल व फाइनल चयन।',
  },
  {
    role: 'पूर्व निर्माता व सहायक निर्माता',
    org: 'PSSCIVE NCERT भोपाल एवं NCERT नई दिल्ली',
    date: 'पूर्व कार्यकाल',
    desc: 'राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद (NCERT) हेतु व्यावसायिक शिक्षा पर आधारित ऑडियो-विजुअल कंटेंट व डॉक्युमेंट्रीज़ का निर्माण।',
  },
  {
    role: 'पूर्व मीडिया प्रोड्यूसर',
    org: 'मेडीकैप्स इंस्टीट्यूट ऑफ टेक्नोलॉजी एंड मैनेजमेंट, इंदौर',
    date: 'पूर्व कार्यकाल',
    desc: 'संस्थान के जनसंपर्क गतिविधियों व मीडिया सेल का प्रबंधन तथा ब्रांडिंग/सार्थक कंटेंट का निर्माण।',
  },
  {
    role: 'मुख्य संयोजक व विजनरी',
    org: 'इंदौर-5 डोरस्टेप गवर्नेंस अभियान',
    date: 'सक्रिय पहल',
    desc: 'इंदौर विधानसभा क्षेत्र 5 के नागरिकों के लिए "डोरस्टेप सर्विस" (Doctor/Tutor/Certificates at Home) का पहला व्यावहारिक अभियान मॉडल।',
  },
];

const EDUCATION = [
  {
    degree: 'मास्टर ऑफ जर्नलिज्म एंड मास कम्यूनिकेशन (MJMC)',
    inst: 'देवी अहिल्या विश्वविद्यालय (DAVV), इंदौर',
    desc: 'मास मीडिया, पत्रकारिता और जनसंचार में उन्नत स्नातकोत्तर शिक्षा।',
  },
  {
    degree: 'डॉक्यूमेंट्री एंड एथ्नोग्राफिक फिल्म मेकिंग',
    inst: 'इंदिरा गांधी राष्ट्रीय कला केंद्र (IGNCA), नई दिल्ली (2019)',
    desc: 'वृत्तचित्र व एथ्नोग्राफिक सिनेमा में उच्च स्तरीय फिल्म मेकिंग का विशेषज्ञ प्रशिक्षण।',
  },
  {
    degree: 'सिनेमैटोग्राफी एवं एडिटिंग डिप्लोमा',
    inst: 'NEI इंडिया फिल्म एंड टीवी एडिटिंग इंस्टीट्यूट',
    desc: 'दृश्य संपादन, कैमरा संचालन और पोस्ट-प्रोडक्शन का व्यावहारिक प्रशिक्षण।',
  },
];

const INITIATIVES = [
  { title: 'इन्दौर ओपन माइक कला मंच', desc: 'सैकड़ों स्थानीय नवोदित कवियों, संगीतकारों और कलात्मक प्रतिभाओं को अपनी कला प्रदर्शन हेतु एक खुला मंच प्रदान करना।' },
  { title: 'उज्जैन सिंहस्थ कुंभ 2016 दस्तावेजीकरण', desc: 'सिंहस्थ कुंभ के गौरवशाली इतिहास, सांस्कृतिक समृद्धि और आयोजनों का व्यापक वृत्तचित्र निर्माण व दस्तावेजीकरण।' },
  { title: 'INTECH सिंहस्थ प्रयागराज 2019', desc: 'प्रयागराज कुंभ के दौरान आयोजित विशाल तकनीकी व सामाजिक पहलों का वीडियो डॉक्युमेंटेशन।' },
  { title: 'मिलाण फाउंडेशन (Girl Icon Fellowship)', desc: 'फाउंडेशन के बालिका सशक्तिकरण व नेतृत्व कार्यक्रम (Girl Icon Fellowship) का संपूर्ण वीडियो कवरेज व संपादन।' },
  { title: 'युवा स्किल व डिजिटल मीडिया वर्कशॉप्स', desc: 'विधानसभा स्तर पर युवाओं को कोडिंग, वीडियो एडिटिंग और स्वरोजगार हेतु व्यावहारिक डिजिटल प्रशिक्षण कार्यशालाएं।' },
];

const ACHIEVEMENTS = [
  'राष्ट्रीय (2022) व अंतर्राष्ट्रीय (जनवरी 2024) फिल्म महोत्सवों में वृत्तचित्रों का चयन।',
  'संस्कृत लघु फिल्में विंध्याचल फिल्म फेस्टिवल 2026 (सेमी-फाइनल) व उज्जैन फिल्म फेस्टिवल 2026 हेतु चयनित।',
  'IIM इंदौर व NCERT में 9+ वर्षों का मीडिया प्रबंधन और प्रामाणिक कार्यशैली।',
  'इंदौर-5 के लिए "डोरस्टेप गवर्नेंस" का पहला व्यावहारिक व क्रियाशील मॉडल विकसित किया।',
  'दर्जनों शैक्षणिक, सामाजिक व सांस्कृतिक विषयों पर ज्ञानवर्धक वृत्तचित्रों का निर्माण।',
  'इन्दौर ओपन माइक के जरिए सैकड़ों स्थानीय युवा कलाकारों व छात्रों को मंच प्रदान किया।',
];

const VIDEOS = [
  {
    title: 'कुटुम्ब बन्धनम् (Kutumb Bandhanm)',
    embedId: 'wqchHQoNhSw',
    tag: 'संस्कृत लघु फिल्म',
    desc: 'विंध्याचल फिल्म फेस्टिवल 2026 (सेमी-फाइनल) व उज्जैन फिल्म फेस्टिवल 2026 हेतु चयनित पारिवारिक व नैतिक मूल्यों पर आधारित फिल्म।',
  },
  {
    title: 'एकम् लक्षम् (Ekam Laksham)',
    embedId: 'qWA85OkYsqY',
    tag: 'संस्कृत लघु फिल्म',
    desc: 'सांस्कृतिक पुनर्जागरण और गुणवत्तापूर्ण नैतिक शिक्षा के महत्व को दर्शाने वाली सुंदर कलात्मक रचना।',
  },
  {
    title: 'RSS सकारात्मक संदेश',
    embedId: 'mlO4xdGkdAU',
    tag: 'सामाजिक संदेश',
    desc: 'राष्ट्रीय स्वयंसेवक संघ की निस्वार्थ सामाजिक सेवा भावना, आपदा प्रबंधन और राष्ट्र निर्माण के संदेश पर आधारित वीडियो।',
  },
];

export default function AboutPage() {
  return (
    <div className="flex-1 w-full flex flex-col">
      {/* Page Header */}
      <section className="bg-brand-primary text-slate-100 py-20 border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-brand-saffron/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="container-width text-center space-y-4 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">
            Biography & Experience / जीवन यात्रा
          </span>
          <h1 className="font-hindi-alt text-4xl sm:text-5xl font-black text-brand-saffron">परिचय एवं कार्य अनुभव</h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-medium">
            प्रेम चंद कौल (Prem Chand Koul) — 9+ वर्षों के मीडिया प्रबंधन, वृत्तचित्र निर्देशन व जनसेवा के अनुभव के साथ इंदौर-5 के लिए समर्पित।
          </p>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="section-padding bg-brand-bg">
        <div className="container-width grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ScrollReveal direction="right">
              <div className="card-base glassmorphism p-5 space-y-4 shadow-xl">
                <div className="relative h-80 w-full overflow-hidden rounded-xl border border-brand-border bg-slate-100 dark:bg-slate-900">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D5603AQG0Me2IFI_vXQ/profile-displayphoto-scale_400_400/B56ZmaUFiRI8Ag-/0/1759230583447?e=1787788800&v=beta&t=8o9F-2i_vNFM1xf4_rqz0SX5dtc91XmX8mtGKm-167Q"
                    alt="Prem Chand Koul"
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover object-top filter contrast-102"
                    unoptimized
                  />
                </div>
                <div className="space-y-1 text-center">
                  <h2 className="font-hindi-alt text-xl font-bold text-brand-primary">प्रेम चंद कौल</h2>
                  <p className="text-xs font-mono font-bold text-brand-saffron uppercase">IIM Indore Media Executive</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="font-hindi-alt text-2xl font-black text-brand-primary flex items-center gap-2">
                  <TimelineIcon className="text-brand-saffron" />
                  जीवन परिचय
                </h3>
                <div className="text-sm sm:text-base text-brand-primary/85 leading-relaxed font-semibold space-y-4">
                  <p>
                    प्रेम चंद कौल इंदौर (मध्य प्रदेश) के एक प्रख्यात मीडिया विशेषज्ञ, डॉक्यूमेंट्री फिल्म निर्माता, शिक्षा-मीडिया निर्देशक और जनसेवक हैं। 9+ वर्षों के मीडिया अनुभव के साथ उन्होंने <strong className="text-brand-saffron">IIM Indore</strong>, <strong className="text-brand-saffron">NCERT दिल्ली</strong>, <strong className="text-brand-saffron">PSSCIVE भोपाल</strong> और <strong className="text-brand-saffron">Medicaps Institute</strong> में मीडिया प्रबंधन व कंटेंट निर्माण का नेतृत्व किया है।
                  </p>
                  <p>
                    उन्होंने उज्जैन सिंहस्थ कुंभ 2016, प्रयागराज INTECH 2019 तथा मिलाण फाउंडेशन की &apos;गर्ल आइकॉन फेलोशिप&apos; का विस्तृत वीडियो कवरेज व दस्तावेजीकरण किया है। कला व सामाजिक चेतना को समर्पित उनकी वृत्तचित्र फिल्में राष्ट्रीय (2022) एवं अंतर्राष्ट्रीय फिल्म महोत्सवों (2024) में सराही और चयनित की जा चुकी हैं।
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Roles & Timeline */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <h3 className="font-hindi-alt text-2xl font-black text-brand-primary flex items-center gap-2 border-t border-brand-border pt-8">
                  <CalendarMonthIcon className="text-brand-saffron" />
                  वर्तमान व पूर्व पद एवं दायित्व
                </h3>
                <div className="space-y-6 relative border-l border-brand-border pl-5 ml-2.5">
                  {TIMELINE_ROLES.map((role, idx) => (
                    <div key={idx} className="relative space-y-1.5">
                      {/* Timeline dot */}
                      <span className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-brand-saffron border border-brand-bg shadow-sm" />
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-hindi-alt text-lg font-extrabold text-brand-primary">{role.role}</h4>
                        <span className="text-xs text-brand-saffron bg-brand-saffron/10 px-2 py-0.5 rounded border border-brand-saffron/20 font-bold">{role.date}</span>
                      </div>
                      <p className="text-xs text-brand-primary/60 font-bold -mt-1">{role.org}</p>
                      <p className="text-sm text-brand-primary/75 leading-relaxed font-semibold">{role.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Education & Achievements Section */}
      <section className="section-padding bg-brand-bg/50 border-b border-brand-border border-t border-brand-border">
        <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education column */}
          <div className="space-y-6">
            <h3 className="font-hindi-alt text-2xl font-black text-brand-primary flex items-center gap-2">
              <SchoolIcon className="text-brand-saffron" />
              शिक्षा एवं विशेष प्रशिक्षण
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="card-base glassmorphism p-5 space-y-1.5">
                  <h4 className="font-hindi-alt text-base font-extrabold text-brand-primary">{edu.degree}</h4>
                  <p className="text-xs font-bold text-brand-saffron">{edu.inst}</p>
                  <p className="text-sm text-brand-primary/70 font-semibold">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements column */}
          <div className="space-y-6">
            <h3 className="font-hindi-alt text-2xl font-black text-brand-primary flex items-center gap-2">
              <EmojiEventsIcon className="text-brand-saffron" />
              प्रमुख उपलब्धियां
            </h3>
            <div className="card-base glassmorphism p-6 space-y-4">
              <ul className="space-y-3.5 text-sm text-brand-primary/80 font-bold">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <VerifiedUserIcon className="text-brand-saffron w-5 h-5 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Social / Cultural Initiatives */}
      <section className="section-padding bg-brand-bg border-b border-brand-border">
        <div className="container-width space-y-8">
          <h3 className="font-hindi-alt text-2xl font-black text-brand-primary flex items-center gap-2">
            <SelfImprovementIcon className="text-brand-saffron" />
            सामाजिक/सांस्कृतिक पहलें
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INITIATIVES.map((init, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="card-base glassmorphism h-full p-5 space-y-2 border-b-2 border-b-brand-gold">
                  <h4 className="font-hindi-alt text-lg font-extrabold text-brand-primary">{init.title}</h4>
                  <p className="text-sm text-brand-primary/70 leading-relaxed font-semibold">{init.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video Grid */}
      <section className="section-padding bg-brand-bg/50 border-b border-brand-border">
        <div className="container-width space-y-8">
          <div className="space-y-2">
            <h3 className="font-hindi-alt text-2xl font-black text-brand-primary flex items-center gap-2">
              <PlayCircleOutlineIcon className="text-brand-saffron" />
              फिल्म एवं वृत्तचित्र
            </h3>
            <p className="text-sm text-brand-primary/60 font-semibold">
              Selected documentaries and Sanskrit short films select features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEOS.map((vid, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="card-base glassmorphism p-4 flex flex-col justify-between h-full space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-brand-border bg-black shadow-inner">
                    <iframe
                      src={`https://www.youtube.com/embed/${vid.embedId}`}
                      title={vid.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-brand-saffron bg-brand-saffron/10 px-2 py-0.5 rounded border border-brand-saffron/20 uppercase">
                      {vid.tag}
                    </span>
                    <h4 className="font-hindi-alt text-lg font-bold text-brand-primary pt-1">{vid.title}</h4>
                    <p className="text-xs text-brand-primary/70 leading-relaxed font-semibold">{vid.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Background & Disclaimer */}
      <section className="section-padding bg-brand-bg border-b border-brand-border">
        <div className="container-width max-w-4xl">
          <ScrollReveal>
            <div className="card-base glassmorphism p-6 md:p-8 space-y-4 border-l-4 border-l-brand-saffron shadow-sm">
              <h3 className="font-hindi-alt text-xl font-extrabold text-brand-primary">सांस्कृतिक व सामाजिक पृष्ठभूमि</h3>
              <div className="text-sm sm:text-base text-brand-primary/80 leading-relaxed font-semibold space-y-3">
                <p>
                  प्रेम चंद कौल का सामाजिक-सांस्कृतिक जुड़ाव बचपन से रहा है। वर्ष 2000 से (7 वर्ष की आयु में) बाल स्वयंसेवक के रूप में वीर सावरकर नगर, बद्रीनाथ जिला, मालवा प्रांत में संस्कारिक प्रशिक्षण प्रारंभ हुआ। यह चरित्र निर्माण, अनुशासन, देशभक्ति व सामाजिक सेवा की भावना का आधार है।
                </p>
                <p className="text-xs font-mono font-bold text-brand-saffron/90 bg-brand-saffron/5 p-3 rounded-lg border border-brand-saffron/15 mt-4">
                  नोट: यह जानकारी सांस्कृतिक पृष्ठभूमि के रूप में प्रस्तुत है, किसी राजनीतिक दल के समर्थन के रूप में नहीं।
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Numerology Accordion Section */}
      <section className="section-padding bg-brand-bg/50">
        <div className="container-width max-w-4xl">
          <ScrollReveal>
            <details className="group card-base glassmorphism p-5 border border-brand-gold/30 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between text-brand-primary font-bold">
                <h3 className="font-hindi-alt text-lg md:text-xl text-brand-gold">अंक ज्योतिष दृष्टिकोण (एक सांस्कृतिक पक्ष)</h3>
                <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-brand-gold">
                  ▼
                </span>
              </summary>
              <div className="mt-4 text-sm leading-relaxed text-brand-primary/80 font-semibold border-t border-brand-border/60 pt-4 space-y-3">
                <p className="text-xs font-mono font-bold text-brand-gold/80 bg-brand-gold/5 p-2.5 rounded border border-brand-gold/15">
                  यह पारंपरिक अंक ज्योतिष पर आधारित एक सांस्कृतिक दृष्टिकोण है, तथ्यात्मक दावा नहीं।
                </p>
                <p>
                  लो शू ग्रिड जन्मतिथि विश्लेषण के अनुसार मूलांक व भाग्यांक 4 का योग माना जाता है, जो मानसिक धरातल व विचार धरातल के संतुलन को संदर्भित करता है। पारंपरिक मान्यताओं में इसे अनुशासित कार्यशैली, रणनीतिक दृष्टिकोण और संकट प्रबंधन की क्षमता से जोड़ा जाता है। यह व्यक्तिगत सांस्कृतिक विश्वासों एवं प्राचीन अंक विद्या का एक अध्ययन पक्ष मात्र है।
                </p>
              </div>
            </details>
          </ScrollReveal>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://prem-koul.vercel.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Biography",
                "item": "https://prem-koul.vercel.app/about"
              }
            ]
          })
        }}
      />
    </div>
  );
}

