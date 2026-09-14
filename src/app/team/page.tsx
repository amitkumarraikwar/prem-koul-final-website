'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';

// MUI Icons
import {
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  HelpOutlined as HelpOutlineIcon
} from '@mui/icons-material';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  isPlaceholder?: boolean;
  socials?: {
    linkedin?: string;
    facebook?: string;
    youtube?: string;
  };
}

function TeamMemberCard({ name, role, bio, photoUrl, isPlaceholder, socials }: TeamMemberProps) {
  return (
    <div className={`card-base glassmorphism p-5 flex flex-col justify-between h-full space-y-4 hover:border-brand-saffron/40 ${isPlaceholder ? 'border-dashed border-2' : ''}`}>
      <div className="space-y-4">
        {/* Photo Container */}
        <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-brand-border bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
          {isPlaceholder ? (
            <HelpOutlineIcon className="w-16 h-16 text-brand-primary/20" />
          ) : (
            <Image
              src={photoUrl}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, 250px"
              className="object-cover object-top"
              unoptimized
            />
          )}
        </div>

        {/* Text */}
        <div className="space-y-1">
          <h3 className={`font-hindi-alt text-lg font-extrabold ${isPlaceholder ? 'text-brand-primary/45 italic' : 'text-brand-primary'}`}>
            {name}
          </h3>
          <p className={`text-xs font-mono font-bold uppercase ${isPlaceholder ? 'text-brand-primary/45' : 'text-brand-saffron'}`}>
            {role}
          </p>
          <p className="text-sm text-brand-primary/70 leading-relaxed font-semibold">
            {bio}
          </p>
        </div>
      </div>

      {/* Socials */}
      {!isPlaceholder && socials && (
        <div className="flex items-center gap-3 pt-2 border-t border-brand-border/60">
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-primary/60 hover:text-brand-saffron transition-colors" aria-label={`${name} LinkedIn`}>
              <LinkedInIcon className="w-5 h-5" />
            </a>
          )}
          {socials.facebook && (
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-primary/60 hover:text-brand-saffron transition-colors" aria-label={`${name} Facebook`}>
              <FacebookIcon className="w-5 h-5" />
            </a>
          )}
          {socials.youtube && (
            <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="text-brand-primary/60 hover:text-brand-saffron transition-colors" aria-label={`${name} YouTube`}>
              <YouTubeIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

const TEAM_MEMBERS: TeamMemberProps[] = [
  {
    name: 'प्रेम चंद कौल (Prem Chand Koul)',
    role: 'Founder & Lead Campaigner / मुख्य संयोजक',
    bio: 'IIM इंदौर मीडिया एग्जीक्यूटिव, पूर्व NCERT मीडिया प्रोड्यूसर, फिल्म निर्देशक और इंदौर विधानसभा क्षेत्र 5 डोरस्टेप गवर्नेंस अभियान के मुख्य प्रणेता।',
    photoUrl: '/profile.jpeg',
    isPlaceholder: false,
    socials: {
      linkedin: 'https://www.linkedin.com/in/premkoul20',
      facebook: 'https://www.facebook.com/premkoulfilm',
      youtube: 'https://youtube.com/@premkoul',
    },
  },
  {
    name: '[ADD REAL TEAM MEMBER NAME]',
    role: '[ADD ROLE / उदा. वार्ड समन्वयक]',
    bio: '[ADD ONE-LINE BIO / उदा. वार्ड 53 में डोरस्टेप स्वास्थ्य व शिक्षा ऑडिट टीमों का समन्वय व नागरिक संपर्क]',
    photoUrl: '',
    isPlaceholder: true,
  },
  {
    name: '[ADD REAL TEAM MEMBER NAME]',
    role: '[ADD ROLE / उदा. तकनीकी समन्वयक]',
    bio: '[ADD ONE-LINE BIO / उदा. जनसुनवाई हेल्पलाइन, शिकायत निवारण ट्रैकिंग और डिजिटल समस्या ट्रैकिंग का तकनीकी प्रबंधन]',
    photoUrl: '',
    isPlaceholder: true,
  },
  {
    name: '[ADD REAL TEAM MEMBER NAME]',
    role: '[ADD ROLE / उदा. युवा कौशल समन्वयक]',
    bio: '[ADD ONE-LINE BIO / उदा. विधानसभा स्तर पर निःशुल्क डिजिटल एडिटिंग, कोडिंग लैब व वोकेशनल ट्रेनिंग हब का प्रबंधन]',
    photoUrl: '',
    isPlaceholder: true,
  },
];

export default function TeamPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-brand-bg">
      {/* Header */}
      <section className="bg-brand-primary text-slate-100 py-20 border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-brand-saffron/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="container-width text-center space-y-4 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">
            Our Team / हमारी टीम
          </span>
          <h1 className="font-hindi-alt text-4xl sm:text-5xl font-black text-brand-saffron">हमारी टीम / Our Team</h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-medium">
            इंदौर विधानसभा 5 के {"\"डोरस्टेप गवर्नेंस\""} अभियान को सफल बनाने में जुटे समर्पित कार्यकर्ता व तकनीकी विशेषज्ञ।
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className="section-padding">
        <div className="container-width space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <TeamMemberCard {...member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
