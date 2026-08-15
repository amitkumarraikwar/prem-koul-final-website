import Link from 'next/link';
import {
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  WhatsApp as WhatsAppIcon,
  Phone as PhoneIcon,
  Home as HomeIcon
} from '@mui/icons-material';

export function Footer() {
  return (
    <footer className="bg-brand-card text-brand-primary/80 pt-16 pb-8 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Column */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex flex-col">
            <span className="font-hindi-alt text-2xl text-brand-saffron tracking-wider font-extrabold">
              प्रेम चंद कौल
            </span>
            <span className="text-xs uppercase tracking-widest text-brand-primary/50 font-bold -mt-1">
              Indore Vidhan Sabha 5
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-brand-primary/70">
            कार्यालय नहीं, अब सेवा आपके दरवाज़े तक। इंदौर-5 के नागरिकों के लिए 24/7 स्वास्थ्य, शिक्षा और प्रशासनिक सेवाओं की होम-डिलिवरी का क्रांतिकारी विज़न।
          </p>
          <div className="flex items-center space-x-3 pt-2">
            <a
              href="https://www.linkedin.com/in/premkoul20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-border/40 text-brand-primary hover:bg-brand-saffron hover:text-brand-bg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/premkoulfilm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-border/40 text-brand-primary hover:bg-brand-saffron hover:text-brand-bg transition-colors"
              aria-label="Facebook Profile"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@premkoul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-border/40 text-brand-primary hover:bg-brand-saffron hover:text-brand-bg transition-colors"
              aria-label="YouTube Channel"
            >
              <YouTubeIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919691110995"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-border/40 text-brand-primary hover:bg-brand-saffron hover:text-brand-bg transition-colors"
              aria-label="WhatsApp Helpline"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold">
            Quick Navigation / त्वरित लिंक्स
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-brand-primary/75">
            <li>
              <Link href="/" className="hover:text-brand-saffron transition-colors">Home / मुख्य</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand-saffron transition-colors">Biography / परिचय</Link>
            </li>
            <li>
              <Link href="/vision" className="hover:text-brand-saffron transition-colors">Vision / विज़न</Link>
            </li>
            <li>
              <Link href="/compare" className="hover:text-brand-saffron transition-colors">Compare / रिपोर्ट कार्ड</Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-brand-saffron transition-colors">Team / टीम</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand-saffron transition-colors">Blog / विचार-पत्र</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-brand-saffron transition-colors">Gallery / गैलरी</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-saffron transition-colors">Contact / संपर्क</Link>
            </li>
          </ul>
        </div>

        {/* Portals / Campaign Column */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold">
            Support Portals / जनभागीदारी
          </h3>
          <ul className="space-y-2.5 text-sm text-brand-primary/75">
            <li>
              <Link href="/grievance" className="hover:text-brand-saffron transition-colors flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Grievance Portal / जन-शिकायत</span>
              </Link>
            </li>
            <li>
              <Link href="/volunteer" className="hover:text-brand-saffron transition-colors flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Volunteer Hub / स्वयंसेवक पंजीकरण</span>
              </Link>
            </li>
            <li>
              <a
                href="https://udanta-martanda.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-saffron transition-colors flex items-center space-x-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Udant Martand Digital / उदन्त मार्तण्ड</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold">
            Helpline Contact / संपर्क केंद्र
          </h3>
          <div className="flex flex-col space-y-2.5 text-sm">
            <div className="flex items-start space-x-2">
              <PhoneIcon className="w-5 h-5 text-brand-saffron shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-brand-primary">24/7 Helpline Number</p>
                <a href="tel:+919691110995" className="hover:text-brand-saffron transition-colors text-base font-semibold text-brand-primary">
                  +91 96911 10995
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <HomeIcon className="w-5 h-5 text-brand-saffron shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-brand-primary">Area Office</p>
                <p className="text-brand-primary/60">Indore Vidhan Sabha Constituency 5, Madhya Pradesh</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between text-xs text-brand-primary/50">
        <p>© 2026 Prem Chand Koul · Indore-5. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Premium Civic Transparency & Doorstep Governance.</p>
      </div>
    </footer>
  );
}
