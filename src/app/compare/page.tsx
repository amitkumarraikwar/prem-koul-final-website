'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

// MUI Icons
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  School as SchoolIcon,
  Gavel as GavelIcon,
  Stars as StarsIcon,
  People as PeopleIcon,
  KeyboardArrowDown as ArrowIcon
} from '@mui/icons-material';

interface CandidateRow {
  name: string;
  badge?: string;
  constituency: string;
  party: string;
  education: string;
  cases: string;
  casesStatus: 'clean' | 'warning';
  verified: boolean;
  experience: string;
  serviceModel: string;
  isKoul?: boolean;
}

const COMPARISON_ROWS: CandidateRow[] = [
  // --- INDORE-5 (208) ---
  {
    name: 'प्रेम चंद कौल (Prem Chand Koul)',
    badge: 'विज़नरी प्रणेता',
    constituency: 'इंदौर विधानसभा 5 (208)',
    party: 'निर्दलीय / जनसेवक विज़न',
    education: 'MJMC स्नातकोत्तर (DAVV) + IGNCA फिल्म डिप्लोमा',
    cases: '0 (100% साफ़ निष्कलंक रिकॉर्ड)',
    casesStatus: 'clean',
    verified: true,
    experience: '9+ वर्ष संस्थागत अनुभव (IIM इंदौर, NCERT भोपाल/दिल्ली)',
    serviceModel: '24/7 डोरस्टेप गवर्नेंस (1 कॉल पर डॉक्टर, ट्यूटर व राशन घर तक)',
    isKoul: true
  },
  {
    name: 'महेन्द्र हार्डिया (Mahendra Hardia)',
    constituency: 'इंदौर विधानसभा 5 (208) (वर्तमान विधायक)',
    party: 'भारतीय जनता पार्टी (BJP)',
    education: 'पोस्ट ग्रेजुएट (M.Sc.)',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: '5 बार विधायक व पूर्व राज्य मंत्री (पारंपरिक राजनीति)',
    serviceModel: 'पारंपरिक विधायक कार्यालय व्यवस्था'
  },
  {
    name: 'सत्यनारायण पटेल (Satyanarayan Patel)',
    constituency: 'इंदौर विधानसभा 5 (208) (पूर्व प्रत्याशी)',
    party: 'भारतीय राष्ट्रीय कांग्रेस (INC)',
    education: '12वीं पास',
    cases: '8 (गंभीर आपराधिक मामले दर्ज)',
    casesStatus: 'warning',
    verified: true,
    experience: 'पूर्व विधायक व कृषि/उद्योग व्यवसाय',
    serviceModel: 'पारंपरिक राजनीतिक जनसंपर्क'
  },

  // --- DEPALPUR (203) ---
  {
    name: 'मनोज पटेल (Manoj Patel)',
    constituency: 'देपालपुर (203) (विधायक)',
    party: 'भारतीय जनता पार्टी (BJP)',
    education: 'स्नातक (Graduate)',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: 'विधायक (देपालपुर) व भाजपा नेता',
    serviceModel: 'पारंपरिक ग्रामीण जनसंपर्क'
  },
  {
    name: 'विशाल जगदीश पटेल (Vishal Jagdish Patel)',
    constituency: 'देपालपुर (203) (पूर्व विधायक)',
    party: 'भारतीय राष्ट्रीय कांग्रेस (INC)',
    education: 'स्नातक (Graduate)',
    cases: '1 (दर्ज मामला)',
    casesStatus: 'warning',
    verified: true,
    experience: 'पूर्व विधायक (देपालपुर) व कृषि/उद्योगपति',
    serviceModel: 'स्थानीय कृषि व व्यापार मंडल'
  },

  // --- INDORE-1 (204) ---
  {
    name: 'कैलाश विजयवर्गीय (Kailash Vijayvargiya)',
    constituency: 'इंदौर विधानसभा 1 (204) (कैबिनेट मंत्री)',
    party: 'भारतीय जनता पार्टी (BJP)',
    education: 'एल.एल.बी. (LLB)',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: 'वरिष्ठ कैबिनेट मंत्री व राष्ट्रीय संगठन नेता',
    serviceModel: 'राज्य स्तरीय प्रशासनिक राजनीति'
  },
  {
    name: 'संजय शुक्ला (Sanjay Shukla)',
    constituency: 'इंदौर विधानसभा 1 (204) (पूर्व प्रत्याशी)',
    party: 'भारतीय राष्ट्रीय कांग्रेस / भाजपा (INC/BJP)',
    education: '12वीं पास',
    cases: '4+ (आपराधिक मामले दर्ज)',
    casesStatus: 'warning',
    verified: true,
    experience: 'पूर्व विधायक व रियल एस्टेट/व्यापार',
    serviceModel: 'पारंपरिक जनसंपर्क व धार्मिक आयोजन'
  },
  {
    name: 'अनुराग यादव (Deepu Bhaiya)',
    constituency: 'इंदौर विधानसभा 1 (204) (आप प्रत्याशी)',
    party: 'आम आदमी पार्टी (AAP)',
    education: 'स्नातक (Graduate)',
    cases: '1 (दर्ज प्रकरण)',
    casesStatus: 'warning',
    verified: true,
    experience: 'आप इंदौर-1 प्रत्याशी व युवा कार्यकर्ता',
    serviceModel: 'आप जन सेवा व वालंटियर मॉडल'
  },

  // --- INDORE-2 (205) ---
  {
    name: 'रमेश मेंदोला (Ramesh Mendola)',
    constituency: 'इंदौर विधानसभा 2 (205) (विधायक)',
    party: 'भारतीय जनता पार्टी (BJP)',
    education: 'स्नातक (Graduate)',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: 'बहु-अवधि विधायक व संगठन नेता',
    serviceModel: 'स्थानीय धार्मिक/सांस्कृतिक उत्सव आयोजन'
  },
  {
    name: 'चिंतामणि चौकसे चिंटू (Chintamani Chaukse Chintu)',
    constituency: 'इंदौर विधानसभा 2 (205) (नेता प्रतिपक्ष नगर निगम)',
    party: 'भारतीय राष्ट्रीय कांग्रेस (INC)',
    education: '12वीं पास',
    cases: '7 (आपराधिक मामले दर्ज)',
    casesStatus: 'warning',
    verified: true,
    experience: 'नेता प्रतिपक्ष इंदौर नगर निगम व कांग्रेस संगठन',
    serviceModel: 'नगर निगम विपक्ष व क्षेत्र जनसंपर्क'
  },

  // --- INDORE-3 (206) ---
  {
    name: 'राकेश गोलू शुक्ला (Rakesh Golu Shukla)',
    constituency: 'इंदौर विधानसभा 3 (206) (विधायक)',
    party: 'भारतीय जनता पार्टी (BJP)',
    education: '12वीं पास',
    cases: '2 (दर्ज मामले)',
    casesStatus: 'warning',
    verified: true,
    experience: 'युवा मोर्चा संगठन व स्थानीय व्यापार',
    serviceModel: 'पारंपरिक युवा नेटवर्क व्यवस्था'
  },
  {
    name: 'दीपक पिंटू जोशी (Deepak Pintu Joshi)',
    constituency: 'इंदौर विधानसभा 3 (206) (प्रत्याशी)',
    party: 'भारतीय राष्ट्रीय कांग्रेस (INC)',
    education: 'पोस्ट ग्रेजुएट',
    cases: '1 (दर्ज मामला)',
    casesStatus: 'warning',
    verified: true,
    experience: 'कांग्रेस युवा संगठन व जनसंपर्क',
    serviceModel: 'विपक्षी जनसंपर्क अभियान'
  },

  // --- INDORE-4 (207) ---
  {
    name: 'मालिनी गौड़ (Malini Gaur)',
    constituency: 'इंदौर विधानसभा 4 (207) (विधायक)',
    party: 'भारतीय जनता पार्टी (BJP)',
    education: 'स्नातक (Graduate)',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: 'पूर्व महापौर व बहु-अवधि विधायक',
    serviceModel: 'पारंपरिक नगर निगम व विधायक कार्यालय'
  },
  {
    name: 'राजा मधवानी (Raja Mandhwani / P L Raja)',
    constituency: 'इंदौर विधानसभा 4 (207) (प्रत्याशी)',
    party: 'भारतीय राष्ट्रीय कांग्रेस (INC)',
    education: 'स्नातक (Graduate)',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: 'स्थानीय व्यापार व कांग्रेस संगठन',
    serviceModel: 'पारंपरिक व्यापारी नेटवर्क'
  },
  {
    name: 'डॉ. पीयूष जोशी (Dr. Piyush Joshi)',
    constituency: 'इंदौर विधानसभा 4 (207) (आप प्रत्याशी)',
    party: 'आम आदमी पार्टी (AAP)',
    education: 'Graduate Professional (BDS)',
    cases: '1 (दर्ज प्रकरण)',
    casesStatus: 'warning',
    verified: true,
    experience: 'चिकित्सक व आम आदमी पार्टी जन सेवा',
    serviceModel: 'स्वास्थ्य सेवा व आप वालंटियर मॉडल'
  },

  // --- DR. AMBEDKAR NAGAR - MHOW (209) ---
  {
    name: 'उषा ठाकुर (Usha Thakur)',
    constituency: 'डॉ. अम्बेडकर नगर - महू (209) (पूर्व मंत्री)',
    party: 'भारतीय जनता पार्टी (BJP)',
    education: 'पोस्ट ग्रेजुएट (M.A. इतिहास)',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: 'पूर्व राज्य मंत्री व बहु-अवधि विधायक',
    serviceModel: 'संस्कृति, धार्मिक व पारंपरिक विधायक मॉडल'
  },
  {
    name: 'राम किशोर शुक्ला (Ramkishor Shukla)',
    constituency: 'डॉ. अम्बेडकर नगर - महू (209) (प्रत्याशी)',
    party: 'भारतीय राष्ट्रीय कांग्रेस (INC)',
    education: 'पोस्ट ग्रेजुएट',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: 'वरिष्ठ कांग्रेस नेता व स्थानीय जनसेवक',
    serviceModel: 'ग्रामीण व क्षेत्रीय जनसंपर्क'
  },

  // --- RAU (210) ---
  {
    name: 'मधु वर्मा (Madhu Verma)',
    constituency: 'राऊ (210) (विधायक)',
    party: 'भारतीय जनता पार्टी (BJP)',
    education: '10वीं पास',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: 'पूर्व IDA अध्यक्ष व विधायक',
    serviceModel: 'प्राधिकरण व पारंपरिक जनसंपर्क'
  },
  {
    name: 'जीतू पटवारी (Jitu Patwari)',
    constituency: 'राऊ (210) (पूर्व विधायक व प्रदेशाध्यक्ष)',
    party: 'भारतीय राष्ट्रीय कांग्रेस (INC)',
    education: 'स्नातक / LLB',
    cases: '11+ (आपराधिक व दर्ज प्रकरण)',
    casesStatus: 'warning',
    verified: true,
    experience: 'पूर्व मंत्री व कांग्रेस प्रदेशाध्यक्ष',
    serviceModel: 'विपक्षीय आंदोलन व संगठन नेतृत्व'
  },

  // --- SANWER (211) ---
  {
    name: 'तुलसीराम सिलावट (Tulsi Silawat)',
    constituency: 'सांवेर (211) (कैबिनेट मंत्री)',
    party: 'भारतीय जनता पार्टी (BJP)',
    education: 'पोस्ट ग्रेजुएट (M.A.)',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: 'जल संसाधन कैबिनेट मंत्री व बहु-अवधि विधायक',
    serviceModel: 'मंत्रालयीन प्रशासन व पारंपरिक राजनीति'
  },
  {
    name: 'रीना बोरासी सेतिया (Reena Baurasi Setiya)',
    constituency: 'सांवेर (211) (प्रत्याशी)',
    party: 'भारतीय राष्ट्रीय कांग्रेस (INC)',
    education: 'पोस्ट ग्रेजुएट',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: 'जिला पंचायत सदस्य व संगठन कार्य',
    serviceModel: 'ग्रामीण व युवा जनसंपर्क'
  },

  // --- AGAR (166) ---
  {
    name: 'विपिन वानखेड़े (Vipin Wankhede)',
    constituency: 'आगर SC (166) (पूर्व विधायक)',
    party: 'भारतीय राष्ट्रीय कांग्रेस (INC)',
    education: 'स्नातक (B.Com DAVV Indore / Christian Eminent)',
    cases: '10 (आपराधिक मामले दर्ज)',
    casesStatus: 'warning',
    verified: true,
    experience: 'पूर्व विधायक (आगर) व छात्र/युवा कांग्रेस नेता',
    serviceModel: 'क्षेत्रीय राजनीतिक आंदोलन'
  },

  // --- OTHER INDEPENDENTS / CANDIDATES ---
  {
    name: 'अभय जैन (Abhay Jain)',
    constituency: 'इंदौर विधानसभा 1 (204) (प्रत्याशी)',
    party: 'निर्दलीय (IND)',
    education: 'Graduate Professional',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: '60 वर्ष, समाज सेवा व निर्दलीय जन अभियान',
    serviceModel: 'स्वैच्छिक नागरिक अभियान'
  },
  {
    name: 'अंतर सिंह दरबार (Antar Singh Darbar)',
    constituency: 'डॉ. अम्बेडकर नगर - महू (209) (पूर्व विधायक)',
    party: 'निर्दलीय / पूर्व कांग्रेस (IND)',
    education: 'स्नातक (Graduate)',
    cases: '1 (दर्ज मामला)',
    casesStatus: 'warning',
    verified: true,
    experience: 'पूर्व विधायक (महू) व वरिष्ठ आदिवासी नेता',
    serviceModel: 'जनजातीय व क्षेत्रीय जनसंपर्क'
  },
  {
    name: 'प्रमोद नामदेव (Pramod Namdev)',
    constituency: 'इंदौर विधानसभा 2 (205) (प्रत्याशी)',
    party: 'SUCI(C)',
    education: 'पोस्ट ग्रेजुएट',
    cases: '0 (शून्य)',
    casesStatus: 'clean',
    verified: true,
    experience: 'जन आंदोलनों व छात्र अधिकारों के लिए संघर्षरत',
    serviceModel: 'वामपंथी जनआंदोलन मॉडल'
  },
  {
    name: 'यासिर पठान (Yasir Pathan)',
    constituency: 'इंदौर विधानसभा 1 (204) (प्रत्याशी)',
    party: 'AIMIM',
    education: 'स्नातक (Graduate)',
    cases: '2 (दर्ज मामले)',
    casesStatus: 'warning',
    verified: true,
    experience: 'अल्पसंख्यक अधिकार व एमआईएम संगठन',
    serviceModel: 'क्षेत्रीय अल्पसंख्यक जनसंपर्क'
  }
];

const CONSTITUENCIES = [
  { id: 'All', label: 'All / सभी' },
  { id: 'Indore-5', label: 'Indore-5 (208)' },
  { id: 'Indore-1', label: 'Indore-1 (204)' },
  { id: 'Indore-2', label: 'Indore-2 (205)' },
  { id: 'Indore-3', label: 'Indore-3 (206)' },
  { id: 'Indore-4', label: 'Indore-4 (207)' },
  { id: 'Rau', label: 'Rau / राऊ (210)' },
  { id: 'Sanwer', label: 'Sanwer / सांवेर (211)' },
  { id: 'Depalpur', label: 'Depalpur / देपालपुर (203)' },
  { id: 'Mhow', label: 'Mhow / महू (209)' },
  { id: 'Agar', label: 'Agar / आगर (166)' }
];

const FAQS = [
  {
    q: 'क्या हम हमेशा सिर्फ दो विकल्पों (भाजपा/कांग्रेस) तक सीमित रहें?',
    a: 'नहीं। स्वस्थ लोकतंत्र का मूल सिद्धांत है कि मतदाता पार्टी चिन्ह या जातीय ध्रुवीकरण के स्थान पर उम्मीदवार की व्यक्तिगत योग्यता, ट्रैक रिकॉर्ड और ईमानदारी पर विचार करे। मतदाता को निर्दलीय व अन्य विकल्पों की भी निष्पक्ष तुलना कर, मूलभूत सुविधाओं (सड़क, शुद्ध जल, स्वास्थ्य, शिक्षा) पर समयबद्ध लिखित जवाबदेही माँगनी चाहिए।'
  },
  {
    q: 'इस तुलनात्मक डेटा टेबल का मुख्य उद्देश्य क्या है?',
    a: 'इसका मुख्य उद्देश्य इंदौर संभाग के विभिन्न विधानसभा क्षेत्रों के प्रत्याशियों के शैक्षणिक योग्यता, आपराधिक रिकॉर्ड एवं उनके नागरिक सेवा दृष्टिकोण की स्पष्ट, पारदर्शी व तथ्यात्मक तुलना करना है, जिससे जागरूक मतदान को बढ़ावा मिले।'
  },
  {
    q: 'क्या यह डेटा सत्यापित है?',
    a: 'हाँ, यह सारा तुलनात्मक डेटा प्रत्याशियों द्वारा चुनाव आयोग (Election Commission of India) में दिए गए आधिकारिक निर्वाचन शपथ-पत्रों एवं एसोसिएशन फॉर डेमोक्रेटिक रिफॉर्म्स (ADR MyNeta) की सार्वजनिक रिपोर्टों से संकलित व सत्यापित किया गया है।'
  },
  {
    q: '24/7 डोरस्टेप गवर्नेंस मॉडल अन्य जनसेवा मॉडलों से कैसे अलग है?',
    a: 'पारंपरिक प्रणालियों में नागरिकों को सरकारी कार्यालयों के चक्कर लगाने पड़ते हैं, जबकि प्रेम चंद कौल के डोरस्टेप मॉडल का उद्देश्य 24/7 हेल्पलाइन के माध्यम से डॉक्टर, शिक्षक व प्रमाण-पत्र जैसी बुनियादी सेवाएं सीधे नागरिक के घर तक पहुँचाना है।'
  }
];

export default function ComparePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConstituency, setSelectedConstituency] = useState('All');

  // Filter rows based on search and constituency
  const filteredRows = COMPARISON_ROWS.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.party.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.education.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.constituency.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedConstituency === 'All') return matchesSearch;
    if (selectedConstituency === 'Indore-5') return matchesSearch && (row.constituency.includes('विधानसभा 5') || row.constituency.includes('208'));
    if (selectedConstituency === 'Indore-1') return matchesSearch && (row.constituency.includes('विधानसभा 1') || row.constituency.includes('204'));
    if (selectedConstituency === 'Indore-2') return matchesSearch && (row.constituency.includes('विधानसभा 2') || row.constituency.includes('205'));
    if (selectedConstituency === 'Indore-3') return matchesSearch && (row.constituency.includes('विधानसभा 3') || row.constituency.includes('206'));
    if (selectedConstituency === 'Indore-4') return matchesSearch && (row.constituency.includes('विधानसभा 4') || row.constituency.includes('207'));
    if (selectedConstituency === 'Rau') return matchesSearch && (row.constituency.includes('राऊ') || row.constituency.includes('210'));
    if (selectedConstituency === 'Sanwer') return matchesSearch && (row.constituency.includes('सांवेर') || row.constituency.includes('211'));
    if (selectedConstituency === 'Depalpur') return matchesSearch && (row.constituency.includes('देपालपुर') || row.constituency.includes('203'));
    if (selectedConstituency === 'Mhow') return matchesSearch && (row.constituency.includes('महू') || row.constituency.includes('मऊ') || row.constituency.includes('209'));
    if (selectedConstituency === 'Agar') return matchesSearch && (row.constituency.includes('आगर') || row.constituency.includes('166'));
    return matchesSearch;
  });

  // Dynamic statistics calculations
  const totalCases = COMPARISON_ROWS.length;
  const cleanRecordCount = COMPARISON_ROWS.filter(r => r.casesStatus === 'clean').length;
  const highlyQualifiedCount = COMPARISON_ROWS.filter(r => r.education.includes('स्नातक') || r.education.includes('ग्रेजुएट') || r.education.includes('पीजी') || r.education.includes('MJMC') || r.education.includes('LLB') || r.education.includes('M.Sc.') || r.education.includes('M.A.') || r.education.includes('Professional')).length;

  return (
    <div className="flex-1 w-full flex flex-col">
      {/* Header Section */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-12 border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="container-width relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h1 className="font-hindi-alt text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                इंदौर नेताओं का तुलनात्मक डेटा टेबल (MyNeta Data Table)
              </h1>
              <p className="text-xs text-slate-300 mt-1 font-semibold">
                शिक्षा, आपराधिक मामले, संस्थागत अनुभव एवं नागरिक सेवा मॉडल की सीधी तुलना
              </p>
            </div>
            <span className="text-[11px] font-mono font-bold text-amber-400 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700 self-start sm:self-center">
              Source: Election Commission Affidavits / MyNeta ADR
            </span>
          </div>
        </div>
      </section>

      {/* Stats Summary Cards Component */}
      <section className="bg-slate-50 dark:bg-slate-900/30 pt-8 pb-4 border-b border-brand-border/50">
        <div className="container-width grid grid-cols-2 md:grid-cols-4 gap-4">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="card-base bg-brand-card p-4 text-center space-y-1">
              <PeopleIcon className="w-5 h-5 text-brand-saffron mx-auto" />
              <p className="text-xl font-black text-brand-primary">{totalCases}</p>
              <p className="text-[10px] uppercase font-bold text-brand-primary/50 tracking-wider">Total Compared</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="card-base bg-brand-card p-4 text-center space-y-1">
              <GavelIcon className="w-5 h-5 text-emerald-500 mx-auto" />
              <p className="text-xl font-black text-brand-primary">{cleanRecordCount}</p>
              <p className="text-[10px] uppercase font-bold text-brand-primary/50 tracking-wider">Clean Affidavits</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <div className="card-base bg-brand-card p-4 text-center space-y-1">
              <SchoolIcon className="w-5 h-5 text-blue-500 mx-auto" />
              <p className="text-xl font-black text-brand-primary">{highlyQualifiedCount}+</p>
              <p className="text-[10px] uppercase font-bold text-brand-primary/50 tracking-wider">Graduates / Postgraduates</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="card-base bg-brand-card p-4 text-center space-y-1 border border-brand-saffron/30">
              <StarsIcon className="w-5 h-5 text-brand-saffron mx-auto" />
              <p className="text-xl font-black text-brand-saffron">1 Pioneer</p>
              <p className="text-[10px] uppercase font-bold text-brand-saffron tracking-wider">Doorstep Model (Koul)</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Controls (Search & Filters) Component */}
      <section className="bg-brand-bg pt-8 pb-4">
        <div className="container-width space-y-4">
          {/* Row 1: Search Input & Filter Label */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-primary/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search candidate, party, or qualification..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-11 py-2.5"
              />
            </div>
            
            {/* Filter Label */}
            <div className="flex items-center gap-2 text-xs font-bold text-brand-primary/60 shrink-0">
              <FilterIcon className="w-4 h-4" />
              <span>Filter by constituency / क्षेत्र चुनें:</span>
            </div>
          </div>

          {/* Row 2: Horizontal Scrollable Filter Strip */}
          <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2 scrollbar-hide max-sm:-mx-4 max-sm:px-4">
            {CONSTITUENCIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedConstituency(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer shrink-0 whitespace-nowrap ${
                  selectedConstituency === c.id
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-slate-900 dark:border-slate-100 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 text-brand-primary/75 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-primary'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="pb-16 bg-brand-bg">
        <div className="container-width space-y-8">
          <ScrollReveal>
            <div className="overflow-x-auto rounded-3xl border border-brand-border bg-brand-card shadow-sm">
              <table className="w-full text-left border-collapse text-xs min-w-[950px]">
                <thead>
                  <tr className="bg-slate-900 dark:bg-slate-950 text-white uppercase font-mono tracking-wider">
                    <th className="p-4 border-b border-brand-border">नेता / प्रत्याशी</th>
                    <th className="p-4 border-b border-brand-border">विधानसभा क्षेत्र / दल</th>
                    <th className="p-4 border-b border-brand-border">शैक्षणिक योग्यता</th>
                    <th className="p-4 border-b border-brand-border">आपराधिक मामले (ADR)</th>
                    <th className="p-4 border-b border-brand-border">अनुभव एवं पृष्ठभूमि</th>
                    <th className="p-4 border-b border-brand-border">जनसेवा मॉडल</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/60">
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`transition-colors hover:bg-brand-card/40 ${
                          row.isKoul
                            ? 'bg-brand-saffron/10 hover:bg-brand-saffron/15 border-l-4 border-brand-saffron font-medium'
                            : ''
                        }`}
                      >
                        {/* Name */}
                        <td className="p-4 font-bold text-brand-primary">
                          {row.name}
                          {row.badge && (
                            <span className="ml-2 inline-block rounded-full bg-brand-saffron px-2 py-0.5 text-[9px] font-bold text-brand-bg uppercase">
                              {row.badge}
                            </span>
                          )}
                        </td>

                        {/* Constituency / Party */}
                        <td className="p-4 text-brand-primary/80">
                          <p className="font-semibold">{row.constituency}</p>
                          <p className="text-[11px] text-brand-primary/50">{row.party}</p>
                        </td>

                        {/* Education */}
                        <td className="p-4 text-brand-primary/80 font-medium">
                          {row.education}
                        </td>

                        {/* Criminal Cases */}
                        <td className="p-4 whitespace-nowrap">
                          <div className="flex flex-col gap-1 items-start">
                            <span
                              className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold whitespace-nowrap shadow-2xs border ${
                                row.casesStatus === 'clean'
                                  ? 'bg-emerald-100 dark:bg-emerald-950/45 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                                  : 'bg-rose-100 dark:bg-rose-950/45 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-800'
                              }`}
                            >
                              {row.cases}
                            </span>
                            {row.verified && (
                              <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                ✓ Verified
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Experience */}
                        <td className="p-4 text-brand-primary/75 leading-relaxed">
                          {row.experience}
                        </td>

                        {/* Service Model */}
                        <td className="p-4 text-brand-primary/80 font-semibold">
                          {row.serviceModel}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-sm font-semibold text-brand-primary/40">
                        No candidates found matching the search criteria. / कोई परिणाम नहीं मिला।
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Accordions / FAQ Block Component */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/30 border-t border-brand-border">
        <div className="container-width space-y-8">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center space-y-2">
              <h2 className="font-hindi-alt text-2xl font-extrabold text-brand-primary">तुलना मार्गदर्शिका एवं प्रश्नोत्तर</h2>
              <p className="text-xs text-brand-primary/60 font-semibold">अक्सर पूछे जाने वाले सवाल और डेटा संबंधी स्पष्टीकरण</p>
            </div>
          </ScrollReveal>

          <div className="space-y-4 max-w-4xl mx-auto">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.08}>
                <details className="group card-base bg-brand-card p-5 cursor-pointer list-none [&_summary::-webkit-details-marker]:hidden border border-brand-border">
                  <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-brand-primary select-none list-none">
                    <span className="pr-4">{faq.q}</span>
                    <ArrowIcon className="w-5 h-5 text-brand-primary/40 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-brand-primary/70 leading-relaxed font-semibold pl-1 border-l-2 border-brand-saffron">
                    {faq.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
