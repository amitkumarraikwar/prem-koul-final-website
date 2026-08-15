You are building a premium, animated, fully responsive personal/political portfolio 
website for "Prem Chand Koul" (also known as Prem Koul, Prem Kaul, Prem Chandra Koul, 
Prem Chandra Kaul) — an IIM Indore Media Executive, former NCERT/PSSCIVE Producer, 
Documentary Filmmaker, Founder of Prem Koul Film Production, and civic leader for 
Indore Vidhan Sabha (Assembly Constituency) 5, running on a "Doorstep Governance" 
vision. This is a real production website — educational + political + personal brand 
site — not a demo/template.

====================================================================
1. TECH STACK (mandatory — set up exactly like this)
====================================================================
- Framework: Next.js (latest, App Router) — created via `npx create-next-app@latest`
  - TypeScript: yes
  - Tailwind CSS: yes
  - ESLint: yes
  - src/ directory: yes
  - App Router: yes
- UI component primitives: Untitled UI React (Next.js integration) 
  → https://www.untitledui.com/react/integrations/nextjs
- Icons: Material Icons via MUI
  → npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
- 3D: Three.js (npm install three @react-three/fiber @react-three/drei)
- Animation: Framer Motion (npm install framer-motion) for UI/scroll/page transitions
- Animation: GSAP (npm install gsap) for scroll-triggered / timeline / text animations
  (use GSAP ScrollTrigger for section reveals, use Framer Motion for micro-interactions
  and page/route transitions — don't fight the two libraries, split responsibilities)
- Forms: React Hook Form + Zod validation for the Contact form
- Deployment target: Vercel

====================================================================
2. FONTS (self-host via next/font/google — do NOT use runtime <link> tags)
====================================================================
- Display / Hero headline font (English, big impactful headings): "Bungee"
  → https://fonts.google.com/specimen/Bungee
- Accent / signature-style font (quotes, taglines, name signature): "Kaushan Script"
  → https://fonts.google.com/specimen/Kaushan+Script
- Hindi body/heading font #1 (for Devanagari headings, warm/traditional feel): "Amita"
  → https://fonts.google.com/specimen/Amita
- Hindi display font #2 (for Devanagari bold statements, political-style headings): "Sarpanch"
  → https://fonts.google.com/specimen/Sarpanch
- For regular Hindi + English body text (paragraphs, UI text) use a clean readable
  Google font that supports Devanagari well (e.g. "Noto Sans Devanagari" or "Hind")
  paired with "Inter" for English body text — Bungee/Kaushan Script/Amita/Sarpanch are
  DISPLAY fonts only, never use them for paragraph body text (readability).
- Set up font variables in Tailwind config: --font-display, --font-signature,
  --font-hindi-heading, --font-hindi-alt, --font-body, --font-body-hindi

====================================================================
3. DESIGN DIRECTION — "Premium, Minimal, Animated"
====================================================================
- Overall feel: premium political/personal brand site — think along the lines of a
  high-end creative portfolio crossed with a modern civic-tech / campaign microsite.
  NOT a generic Bootstrap political template. Should feel custom-designed.
- Color palette: keep it minimal — 1 primary brand color (suggest a deep saffron/amber
  or deep indigo/navy — designer's choice, but must feel "trustworthy + premium", not
  loud/cheap-political-poster style), 1 neutral near-black for text, off-white/cream
  background (not pure white), subtle gold/accent for highlights and CTAs. Support
  dark mode.
- Generous white space, large type scale, soft shadows, subtle glassmorphism on cards,
  rounded-xl corners, subtle grain/noise texture option on dark hero sections.
- Micro-interactions everywhere: hover states, button magnetic/scale effects, animated
  underlines, cursor-aware hover glow on cards.
- Every major section must have a scroll-reveal entrance animation (GSAP ScrollTrigger
  or Framer Motion whileInView) — staggered children, fade+slide up, no jankiness.
- Must look and feel equally premium on mobile (phone) AND desktop — not just a
  scaled-down desktop layout. Design mobile-first, then enhance for desktop with the
  3D/parallax elements.
- Add a subtle animated custom cursor on desktop (optional, hide on touch devices).
- Add a scroll progress indicator bar at the top.
- Add smooth page transitions between routes (Framer Motion AnimatePresence).

====================================================================
4. 3D ANIMATION REQUIREMENT
====================================================================
Use Three.js (via @react-three/fiber + @react-three/drei) for at least:
- A subtle animated 3D hero background element (e.g. abstract flowing particles /
  geometric wireframe / floating low-poly shapes in the brand colors) behind the
  hero section on the homepage — should be performant, GPU-light, and pause/reduce
  when off-screen or on low-power/mobile devices (respect prefers-reduced-motion).
- Optional: a subtle 3D tilt/parallax effect on profile photo cards using drei's
  `<Float>` or mouse-parallax on scroll.
Make sure the 3D canvas never blocks text readability or hurts Lighthouse performance
score — lazy-load the Three.js canvas (dynamic import, ssr:false) and show a
lightweight animated gradient/skeleton as fallback while it loads.

====================================================================
5. LAYOUT — GLOBAL ELEMENTS
====================================================================
- Sticky/transparent-to-solid header on scroll, with logo "PK — प्रेम चंद कौल —
  Indore Vidhan Sabha 5", nav links, and a WhatsApp + Helpline quick-contact button.
- IMPORTANT: Social media links must be shown as a FIXED VERTICAL BAR on the RIGHT 
  SIDE of the screen (desktop) — icons stacked vertically, semi-transparent till
  hover, with tooltips, staying fixed while scrolling. On mobile, collapse this into
  either a floating action button (bottom-right) that expands, or move it into the
  footer/menu — a vertical fixed bar doesn't work well on narrow phone screens, so
  make it responsive accordingly. Social links to include:
    - LinkedIn: https://www.linkedin.com/in/premkoul20
    - Facebook: https://www.facebook.com/premkoulfilm
    - YouTube: https://youtube.com/@premkoul
    - WhatsApp: https://wa.me/919691110995
  Use MUI Material Icons for each (LinkedIn, Facebook, YouTube, WhatsApp icons).
- Footer: 4-column layout — About/tagline, Quick Links, Social/Connect, Newsletter or
  contact snippet. Include "© 2026 Prem Chand Koul · Indore-5".

====================================================================
6. PAGES / ROUTES & CONTENT (use this real content, translate/restructure as needed 
   but DO NOT invent false facts — this is the authentic content pulled from the 
   existing site prem-koul.vercel.app)
====================================================================

### 6.1 Homepage (/)
Hero section:
  - Eyebrow: "Indore Vidhan Sabha 5 · 2028"
  - Headline (Hindi, use Sarpanch/Amita for heading font): 
    "कार्यालय नहीं, अब सेवा आपके दरवाज़े तक"
  - Subtext: प्रेम चंद कौल (Prem Chand Koul) — IIM इंदौर में मीडिया एग्जीक्यूटिव, 
    पूर्व NCERT प्रोड्यूसर, फिल्म निर्देशक और 9+ वर्षों के मीडिया एवं जनसेवा अनुभव के 
    साथ, इंदौर-5 के लिए "डोरस्टेप गवर्नेंस" का क्रांतिकारी विज़न।
  - CTA buttons: "पूरा विज़न देखें" (/vision), "प्रेम कौल का परिचय पढ़ें" (/about),
    "संपर्क करें" (/contact)
  - Hero profile photo + animated 3D background
  - Stat chips (animate count-up on scroll): "9+ वर्ष — मीडिया व संस्थागत अनुभव",
    "4 मुख्य — डोरस्टेप सेवा संकल्प", "24/7 — जनसुनवाई हेल्पलाइन",
    "100% — पारदर्शी जनसेवा"

Values section — "राष्ट्र प्रथम, जनसेवा सर्वोपरि" — 4 cards:
  1. राष्ट्र प्रथम व जनसेवा (Nation First & Selfless Service)
  2. संगठन व पारदर्शिता (Transparency & Integrity)
  3. सांस्कृतिक उत्थान व युवा शक्ति (Culture & Youth Empowerment)
  4. डोरस्टेप सेवा मॉडल (Doorstep Governance 24/7)
  (each with the descriptive paragraph from content below in section 6.2)

Career highlights strip — 4 cards: मीडिया एग्जीक्यूटिव (IIM Indore), पूर्व निर्माता 
  (PSSCIVE NCERT), फिल्म निर्देशक (Prem Koul Film Production), IGNCA सर्टिफाइड

Comparison teaser: "इंदौर के नेता vs प्रेम चंद कौल — रिपोर्ट कार्ड" with CTA →
  "तुलनात्मक डेटा टेबल देखें" linking to /compare (ADR MyNeta based comparison)

Media/newspaper feature: "उदन्त मार्तण्ड (Udant Martand)" — India's first Hindi 
  newspaper, reborn digital, supported by Prem Chand Koul → external link
  https://udanta-martanda.vercel.app/

Bio teaser block with photo → "पूरा जीवन परिचय एवं अनुभव देखें" → /about

"डोरस्टेप गवर्नेंस के 4 मुख्य संकल्प" — numbered 01-04 animated timeline/cards
  (full text in section 6.2 vision content)

"इंदौर विधानसभा 5 विकास रोडमैप" — Vision 2026+ 4 pillars (01-04, see section 6.2)

Latest blog/news teaser (pull latest post): "संस्कृत शिक्षा और इंदौर-5 की उपेक्षा:
  एक कार्यकर्ता की पुकार" → /blog/sanskrit-education-and-indore-5-grievances

FAQ accordion section — 4 Q&As (see section 6.5)

Grievance portal CTA banner → /grievance
Volunteer registration CTA banner → /volunteer
Final CTA section with 3 buttons → /contact, /volunteer, /vision

### 6.2 About page (/about) — "परिचय एवं जीवन यात्रा (Biography & Experience)"
Full biography content (structure as timeline/cards, animate on scroll):

**वर्तमान व पूर्व पद एवं दायित्व:**
- मीडिया एग्जीक्यूटिव — भारतीय प्रबंध संस्थान (IIM Indore) — मई 2014-वर्तमान 
  [NOTE: content had two different date ranges for this role across the source page 
  — "मई 2014–वर्तमान" AND "दिसंबर 2023–वर्तमान" — use "दिसंबर 2023 – वर्तमान" for the 
  IIM Indore Media Executive role in the detailed timeline, since that's the more 
  specific figure given later on the same page]
- संस्थापक एवं स्टूडियो डायरेक्टर — प्रेम कौल फिल्म प्रोडक्शन — मई 2014 – वर्तमान
- पूर्व निर्माता व सहायक निर्माता — PSSCIVE NCERT भोपाल एवं NCERT नई दिल्ली
- पूर्व मीडिया प्रोड्यूसर — मेडीकैप्स इंस्टीट्यूट ऑफ टेक्नोलॉजी एंड मैनेजमेंट, इंदौर
- मुख्य संयोजक व विजनरी — इंदौर-5 डोरस्टेप गवर्नेंस अभियान

**जीवन यात्रा (bio paragraph):** प्रेम चंद कौल इंदौर (मध्य प्रदेश) के एक प्रख्यात मीडिया 
विशेषज्ञ, डॉक्यूमेंट्री फिल्म निर्माता, शिक्षा-मीडिया निर्देशक और जनसेवक हैं। 9+ वर्षों 
के अनुभव के साथ उन्होंने IIM Indore, NCERT दिल्ली, PSSCIVE भोपाल और Medicaps Institute 
में मीडिया प्रबंधन व कंटेंट निर्माण का नेतृत्व किया है। उज्जैन सिंहस्थ कुंभ 2016, 
प्रयागराज INTECH 2019 तथा मिलाण फाउंडेशन की 'गर्ल आइकॉन फेलोशिप' का वीडियो कवरेज व 
डॉक्यूमेंटेशन किया; उनकी डॉक्यूमेंट्री राष्ट्रीय (2022) एवं अंतर्राष्ट्रीय फिल्म 
महोत्सव (2024) में चयनित हो चुकी है।

**शिक्षा एवं विशेष प्रशिक्षण:**
- मास्टर ऑफ जर्नलिज्म एंड मास कम्यूनिकेशन (MJMC) — DAVV, इंदौर
- डॉक्यूमेंट्री एंड एथ्नोग्राफिक फिल्म मेकिंग — IGNCA, नई दिल्ली (2019)
- सिनेमैटोग्राफी एवं एडिटिंग डिप्लोमा — NEI इंडिया फिल्म एंड टीवी एडिटिंग इंस्टीट्यूट

**सामाजिक/सांस्कृतिक पहल:**
- इन्दौर ओपन माइक कला मंच
- उज्जैन सिंहस्थ कुंभ 2016 दस्तावेजीकरण
- INTECH सिंहस्थ प्रयागराज 2019
- मिलाण फाउंडेशन (Girl Icon Fellowship)
- युवा स्किल व डिजिटल मीडिया वर्कशॉप्स

**प्रमुख उपलब्धियां (checklist/badge style):**
- राष्ट्रीय (2022) व अंतर्राष्ट्रीय (जनवरी 2024) फिल्म महोत्सव चयन
- संस्कृत लघु फिल्में विंध्याचल फिल्म फेस्टिवल 2026 (सेमी-फाइनल) व उज्जैन फिल्म 
  फेस्टिवल 2026 हेतु चयनित
- IIM इंदौर व NCERT में 9+ वर्षों का मीडिया प्रबंधन
- इंदौर-5 के लिए 'डोरस्टेप गवर्नेंस' का पहला व्यावहारिक मॉडल
- दर्जनों शैक्षणिक/सामाजिक/सांस्कृतिक वृत्तचित्रों का निर्माण
- इन्दौर ओपन माइक के जरिए सैकड़ों स्थानीय युवा प्रतिभाओं को मंच

**फिल्म एवं वृत्तचित्र (embed these 3 YouTube videos in a video-card grid):**
1. कुटुम्ब बन्धनम् (Kutumb Bandhanm) — youtube.com/embed/wqchHQoNhSw — संस्कृत लघु 
   फिल्म, विंध्याचल फिल्म फेस्टिवल 2026 (सेमी-फाइनल) व उज्जैन फिल्म फेस्टिवल 2026
2. एकम् लक्षम् (Ekam Laksham) — youtube.com/embed/qWA85OkYsqY — संस्कृत लघु फिल्म, 
   सांस्कृतिक पुनर्जागरण और शिक्षा
3. RSS सकारात्मक संदेश — youtube.com/embed/mlO4xdGkdAU — राष्ट्रीय स्वयंसेवक संघ की 
   सामाजिक सेवा भावना पर संदेश

**सांस्कृतिक व सामाजिक पृष्ठभूमि:** प्रेम चंद कौल का सामाजिक-सांस्कृतिक जुड़ाव बचपन से 
रहा है। वर्ष 2000 से (7 वर्ष की आयु में) बाल स्वयंसेवक के रूप में वीर सावरकर नगर, 
बद्रीनाथ जिला, मालवा प्रांत में संस्कारिक प्रशिक्षण प्रारंभ हुआ। यह चरित्र निर्माण, 
अनुशासन, देशभक्ति व सामाजिक सेवा की भावना का आधार है।
[Include disclaimer note exactly: "नोट: यह जानकारी सांस्कृतिक पृष्ठभूमि के रूप में 
प्रस्तुत है, किसी राजनीतिक दल के समर्थन के रूप में नहीं।"]

**Optional collapsible/accordion section — "अंक ज्योतिष दृष्टिकोण (एक सांस्कृतिक पक्ष)":**
[Keep this as an expandable/collapsed-by-default section with its disclaimer intact —
this is presented as cultural commentary, NOT a factual claim, per the source site]
"यह पारंपरिक अंक ज्योतिष पर आधारित एक सांस्कृतिक दृष्टिकोण है, तथ्यात्मक दावा नहीं। लो 
शू ग्रिड जन्मतिथि विश्लेषण के अनुसार मूलांक व भाग्यांक 4 का योग माना जाता है, जो 
मानसिक धरातल व विचार धरातल के संतुलन को संदर्भित करता है। पारंपरिक मान्यताओं में इसे 
अनुशासित कार्यशैली, रणनीतिक दृष्टिकोण और संकट प्रबंधन की क्षमता से जोड़ा जाता है। यह 
व्यक्तिगत सांस्कृतिक विश्वासों एवं प्राचीन अंक विद्या का एक अध्ययन पक्ष मात्र है।"

### 6.3 Vision page (/vision) — "डोरस्टेप गवर्नेंस"
"डोरस्टेप गवर्नेंस के 4 मुख्य संकल्प" (numbered timeline, each with 3 sub-bullets):

01. एक कॉल पर डॉक्टर और शिक्षक — जिस तरह ई-कॉमर्स से सामान घर आता है, उसी तरह 24/7 
    हेल्पलाइन के जरिए डॉक्टर और होम ट्यूटर आपके दरवाजे पर।
    - वरिष्ठ नागरिकों की नियमित जांच
    - निःशुल्क डिजिटल ट्यूशन सहायता
    - आपातकालीन स्वास्थ्य सहायता

02. सक्रिय साप्ताहिक निगरानी (Doorstep Audits) — बिना बुलाए, समर्पित टीमें हर घर 
    जाकर बुजुर्गों का स्वास्थ्य हाल लेंगी और बच्चों की पढ़ाई व पोषण ट्रैक करेंगी।
    - साप्ताहिक वार्ड विजिट्स
    - स्वास्थ्य कार्ड ट्रैकिंग
    - बच्चों की रिपोर्ट कार्ड समीक्षा

03. सरकारी दफ्तरों के चक्करों से मुक्ति — राशन कार्ड, पेंशन, आयुष्मान कार्ड और 
    आय/जाति प्रमाण पत्र जैसे काम वार्ड-स्तरीय कोऑर्डिनेटर के जरिए घर बैठे पूरे होंगे।
    - होम डिलीवरी सर्टिफिकेट्स
    - वरिष्ठ नागरिकों को पेंशन होम सर्विस
    - पारदर्शी ऑनलाइन आवेदन

04. विधानसभा स्तरीय युवा स्किल व रोजगार हब — डिजिटल मार्केटिंग, वीडियो एडिटिंग, 
    कोडिंग, फिल्म मेकिंग व वोकेशनल स्किल्स की ट्रेनिंग विधानसभा स्तर पर।
    - निःशुल्क कोडिंग व एडिट लैब
    - स्थानीय ओपन माइक कला मंच
    - रोजगार मेला व स्टार्टअप सपोर्ट

"इंदौर विधानसभा 5 विकास रोडमैप" (Vision 2026+ pillars, 01-04):
01. डोरस्टेप हेल्थकेयर (Doctor at Home) — वरिष्ठ नागरिकों, बच्चों व जरूरतमंदों के लिए 
    मोबाइल मेडिकल यूनिट और 24 घंटे उपलब्ध घर-घर स्वास्थ्य चेकअप सेवा।
02. गुणवत्तापूर्ण शिक्षा एवं डिजिटल कोचिंग — प्रतिभावान विद्यार्थियों के लिए निःशुल्क 
    डिजिटल कोचिंग, करियर काउंसलिंग और होम-ट्यूटर नेटवर्क।
03. हरित व स्वच्छ इंदौर-5 (Green Infrastructure) — सघन पौधारोपण, सौर ऊर्जा प्रोत्साहन 
    और आधुनिक कचरा प्रबंधन।
04. सुरक्षा व 24/7 स्मार्ट जनसुनवाई — महिलाओं व वरिष्ठ नागरिकों की सुरक्षा हेतु स्मार्ट 
    सीसीटीवी नेटवर्क और ऑनलाइन शिकायत निवारण पोर्टल।

### 6.4 Compare page (/compare) — "ADR MyNeta Data & Benchmark Report Card"
"इंदौर के नेता vs प्रेम चंद कौल — रिपोर्ट कार्ड" — build this as a clean animated 
comparison table (education, criminal cases [0 for Prem Koul], service model) citing 
ADR MyNeta as data source. NOTE: Do not fabricate specific numeric data about other 
named candidates (e.g. Mahendra Hardia, Satyanarayan Patel) — leave placeholder rows 
marked "[Verify from ADR MyNeta before publishing]" for any comparative figures you 
don't have confirmed source data for. Only "0 Criminal Cases" and the education/
experience facts already listed for Prem Koul in this prompt are confirmed.

### 6.5 FAQ (component reused on homepage, can also live on its own /faq if desired)
Q1. डोरस्टेप गवर्नेंस (Doorstep Governance) का मुख्य विचार क्या है?
A1. डोरस्टेप गवर्नेंस का अर्थ है कि नागरिक को अपने हक और सुविधाओं के लिए सरकारी 
    कार्यालयों के चक्कर न लगाने पड़ें। आधुनिक तकनीक और 24/7 हेल्पलाइन के जरिए स्वास्थ्य, 
    शिक्षा और प्रशासनिक सेवाएं सीधे नागरिक के घर पहुँचेंगी।

Q2. एक कॉल पर डॉक्टर व शिक्षक योजना का लाभ कैसे मिलेगा?
A2. इंदौर विधानसभा 5 के प्रत्येक परिवार के लिए एक केंद्रीकृत हेल्पलाइन नंबर जारी किया 
    जाएगा। आपातकालीन या नियमित जांच के लिए डॉक्टर की टीम और बच्चों की पढ़ाई में मदद के 
    लिए ट्यूटर सीधे घर पहुँचेंगे।

Q3. युवाओं के लिए कौन-कौन से स्किल कोर्स उपलब्ध होंगे?
A3. विधानसभा स्तर पर डिजिटल मार्केटिंग, वीडियो एडिटिंग, सिनेमैटोग्राफी, कोडिंग, और 
    वोकेशनल स्किल्स के प्रैक्टिकल ट्रेनिंग सेंटर स्थापित किए जाएंगे।

Q4. प्रेम चंद कौल जी से नागरिक सीधे कैसे जुड़ सकते हैं?
A4. आप वेबसाइट के संपर्क फॉर्म (Contact Page) द्वारा संदेश भेज सकते हैं, या उनके 
    आधिकारिक सोशल मीडिया हैंडल (LinkedIn, Facebook, YouTube) और आगामी वार्ड जनसुनवाई 
    शिविरों के जरिए सीधे विचार साझा कर सकते हैं।

### 6.6 Contact page (/contact) — MUST HAVE A FORM
Build a premium animated contact page with:
- Left/top: contact info cards — WhatsApp (https://wa.me/919691110995), Helpline 
  (tel:+919691110995 — placeholder, mark as "[UPDATE WITH REAL HELPLINE NUMBER]"),
  office/area (Indore Vidhan Sabha 5), social links repeated here for mobile users.
- Right/bottom: a real working contact FORM with fields: Full Name, Email, Phone, 
  Subject/Category (dropdown: General/Grievance/Volunteer/Media/Other), Message 
  (textarea). Use React Hook Form + Zod for validation, animated field focus states, 
  success/error toast or inline confirmation animation on submit. Wire it to a 
  serverless API route (app/api/contact/route.ts) that can later be connected to an 
  email service (e.g. Resend/Nodemailer) — stub this clearly with a TODO comment for 
  where to plug in the email API key.
- Add a Google Maps embed for Indore Vidhan Sabha 5 area (generic constituency map, 
  not a specific private address).

### 6.7 Grievance Portal (/grievance)
"आपकी समस्या, हमारी ज़िम्मेदारी" — पानी, सड़क, शिक्षा, स्वास्थ्य समेत किसी भी समस्या की 
शिकायत दर्ज करने का फॉर्म (Name, Phone, Ward/Area, Category dropdown, Description, 
optional photo upload). Same form-building approach as Contact page.

### 6.8 Volunteer Registration (/volunteer)
"अभियान से जुड़ें, बदलाव लाएं" — डिजिटल कैंपेन, ग्राउंड वर्क, कंटेंट या डिजाइन में मदद 
हेतु स्वयंसेवक पंजीकरण फॉर्म (Name, Phone, Email, Area/Ward, Skills-interest 
multi-select: Digital Campaign / Ground Work / Content / Design / Video Editing / 
Other, Availability).

### 6.9 Team page — "हमारी टीम / Our Team" (NEW SECTION — add as /team page AND as a 
homepage section)
Build an animated team grid section. Since exact team member data wasn't in the 
original source content, structure it as a reusable TeamMember component 
(photo, name, role, one-line bio, social links) and seed it with Prem Chand Koul as 
the founder/lead entry using his existing bio data, plus 3-5 placeholder team member 
cards clearly marked "[ADD REAL TEAM MEMBER NAME/ROLE/PHOTO]" so the site owner can 
fill in real teammates later. Do NOT invent fake names for real people.

### 6.10 Blog (/blog and /blog/[slug])
List page pulling from a blog data source (MDX or CMS - your choice, keep it simple 
with local MDX files in a /content/blog folder for now). Seed with the one known post:
- Title: "संस्कृत शिक्षा और इंदौर-5 की उपेक्षा: एक कार्यकर्ता की पुकार"
- Date: 9/8/2026 (8 Sept 2026 or Sept 8 2026 depending on locale format used on 
  source — verify before publishing)
- Category: विचार (Opinion)
- Excerpt: "यह लेख इंदौर विधानसभा क्षेत्र 5 की प्राथमिक जमीनी समस्याओं, सांस्कृतिक 
  धरोहर एवं संस्कृत शिक्षा के प्रति व्यवस्था की उपेक्षा पर एक समर्पित कार्यकर्ता का 
  विचार-पत्र है।"
- Slug: /blog/sanskrit-education-and-indore-5-grievances
(Build the full article page template even though full body text wasn't extracted — 
add a content placeholder + TODO to paste full article text later.)

### 6.11 Gallery (/gallery)
Photo gallery grid with lightbox (Framer Motion animated), masonry or grid layout, 
lazy-loaded images, categories filter (Events / Campaign / Films / Media).

====================================================================
7. SEO / AEO / AIO (VERY IMPORTANT — this is a real political/public-figure site)
====================================================================
- Full Next.js Metadata API usage per page (generateMetadata) — title, description, 
  keywords, openGraph, twitter card, canonical URL.
- Primary target names to optimize for across the whole site (use naturally in H1s, 
  meta, alt text, structured data — never keyword-stuff): "Prem Koul", "Prem Chand 
  Koul", "Prem Kaul", "Prem Chandra Koul", "Prem Chandra Kaul".
- Site title pattern: "Prem Chand Koul (Prem Koul) | Indore Vidhan Sabha 5 Leader"
- Meta description (homepage, reuse/adapt from source): "Prem Chand Koul (Prem Koul, 
  Prem Kaul, Prem Chandra Koul) - IIM Indore Media Executive, Former NCERT Producer, 
  Founder Prem Koul Film Production & Visionary Leader for Indore Vidhan Sabha 5. 
  100% Clean Integrity Record (0 Criminal Cases), Master's in Journalism (DAVV 
  Indore), IGNCA Film Diploma. Pioneer of 24/7 Doorstep Governance in Madhya Pradesh."
- og:locale: hi_IN, og:type: website, og:site_name: "Prem Chand Koul Official"
- twitter:card: summary_large_image
- robots: index, follow (all public pages)
- Implement JSON-LD structured data (schema.org):
  - Person schema on homepage/about (name, alternateName array with all name 
    variants, jobTitle, alumniOf, sameAs [LinkedIn, Facebook, YouTube URLs])
  - FAQPage schema wrapping the FAQ section content from 6.5
  - BreadcrumbList schema on inner pages
  - Organization schema for "Prem Koul Film Production"
  - Article schema for blog posts
- AEO (Answer Engine Optimization) considerations: write FAQ answers as clean, 
  self-contained, directly-answerable paragraphs (already structured this way above) 
  since these get pulled into AI answer engines / Google's AI overviews / voice 
  search.
- AIO (AI/LLM crawlability): ensure server-rendered content (no content trapped 
  behind client-only JS that crawlers/LLM scrapers can't see) — use Next.js server 
  components for all real text content, and add a clean llms.txt file at the root 
  summarizing who Prem Chand Koul is and linking to key pages, per the emerging 
  llms.txt convention.
- Generate sitemap.xml (app/sitemap.ts) and robots.txt (app/robots.ts) using Next.js 
  built-in file conventions, including every route listed in section 6.
- Optimize all images (next/image, proper alt text using real descriptive text 
  mentioning "Prem Chand Koul" naturally where accurate — not spammy).
- Core Web Vitals: keep LCP fast despite 3D/animation — lazy load Three.js, GSAP, 
  and below-the-fold Framer Motion content; use next/font for zero layout shift.
- Add a proper favicon set + PWA manifest.

====================================================================
8. ACCESSIBILITY & PERFORMANCE
====================================================================
- Respect prefers-reduced-motion (disable/simplify 3D + heavy animations for users 
  who request it).
- All forms fully keyboard accessible with proper labels/aria attributes.
- Color contrast must pass WCAG AA even with the premium dark theme.
- Test responsive at 360px (small phones), 768px (tablet), 1024px, 1440px, 1920px.

====================================================================
9. PROJECT SETUP STEPS (do these in order)
====================================================================
1. npx create-next-app@latest prem-koul-portfolio (TS, Tailwind, App Router, src/)
2. npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
3. npm install three @react-three/fiber @react-three/drei
4. npm install framer-motion gsap
5. npm install react-hook-form zod @hookform/resolvers
6. Set up Untitled UI per https://www.untitledui.com/react/integrations/nextjs
7. Configure next/font for Bungee, Kaushan Script, Amita, Sarpanch + a body font pair
8. Build design tokens in tailwind.config (colors, font families, spacing, radius)
9. Build shared layout: Header (with right-side social bar), Footer, 
   ScrollProgressBar, PageTransition wrapper
10. Build homepage sections top to bottom per section 6.1
11. Build /about, /vision, /compare, /contact, /grievance, /volunteer, /team, /blog, 
    /gallery per sections 6.2–6.11
12. Wire SEO metadata, JSON-LD, sitemap.ts, robots.ts, llms.txt per section 7
13. QA: run Lighthouse, fix performance/accessibility issues, test on real phone 
    viewport sizes, verify prefers-reduced-motion behavior, verify all forms validate 
    and submit correctly (even if email backend is still a TODO stub).
14. Deploy to Vercel.

Build this now, starting with project scaffolding and the design token / font setup, 
then the shared layout components, then homepage, then inner pages. Ask me if any 
content (like team member details, real helpline number, or full blog article body) 
is missing before publishing — use clearly marked placeholders for those instead of 
inventing facts.