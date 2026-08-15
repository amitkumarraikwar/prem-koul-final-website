'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon
} from '@mui/icons-material';

interface NavLink {
  href: string;
  labelEnglish: string;
  labelHindi: string;
}

const NAV_LINKS: NavLink[] = [
  { href: '/', labelEnglish: 'Home', labelHindi: 'मुख्य पृष्ठ' },
  { href: '/about', labelEnglish: 'Biography', labelHindi: 'जीवन यात्रा' },
  { href: '/vision', labelEnglish: 'Vision', labelHindi: 'डोरस्टेप गवर्नेंस' },
  { href: '/compare', labelEnglish: 'Compare', labelHindi: 'रिपोर्ट कार्ड' },
  { href: '/team', labelEnglish: 'Team', labelHindi: 'हमारी टीम' },
  { href: '/blog', labelEnglish: 'Blog', labelHindi: 'विचार-पत्र' },
  { href: '/gallery', labelEnglish: 'Gallery', labelHindi: 'गैलरी' },
  { href: '/contact', labelEnglish: 'Contact', labelHindi: 'संपर्क' }
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mounting
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isHomepage = pathname === '/';
  const showGlass = mounted && (!isHomepage || isScrolled);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        showGlass
          ? 'glassmorphism shadow-sm border-b border-brand-border/50 py-2.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex flex-col group">
          <span className="font-hindi-alt text-xl md:text-2xl text-brand-saffron tracking-wider font-extrabold transition-colors">
            प्रेम चंद कौल
          </span>
          <span className="text-[10px] uppercase tracking-widest opacity-80 font-bold -mt-1 group-hover:text-brand-gold transition-colors">
            Indore Vidhan Sabha 5
          </span>
        </Link>

        {/* Stacked Bilingual Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.map((link) => {
            const isActive = mounted && pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center group py-1"
              >
                <span
                  className={`text-xs font-extrabold tracking-wide transition-colors ${
                    isActive
                      ? 'text-brand-saffron'
                      : 'text-brand-primary/80 group-hover:text-brand-gold'
                  }`}
                >
                  {link.labelEnglish}
                </span>
                <span
                  className={`text-[9px] font-semibold tracking-wider transition-colors mt-0.5 ${
                    isActive
                      ? 'text-brand-saffron/75'
                      : 'text-brand-primary/45 group-hover:text-brand-gold/60'
                  }`}
                >
                  {link.labelHindi}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Quick Contact & Action Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-brand-border hover:bg-brand-card hover:text-brand-saffron transition-all duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <LightModeIcon className="w-5 h-5" /> : <DarkModeIcon className="w-5 h-5" />}
            </button>
          )}

          {/* Quick Helpline (tel) */}
          <a
            href="tel:+919691110995"
            className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider bg-brand-primary text-brand-bg px-4 py-2.5 rounded-lg hover:bg-brand-gold transition-colors"
            title="Helpline"
          >
            <PhoneIcon className="w-4 h-4 text-brand-saffron" />
            <span className="hidden md:inline">Helpline</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/919691110995"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2.5 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors"
            title="WhatsApp Helpline"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Actions */}
        <div className="lg:hidden flex items-center space-x-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-brand-border hover:bg-brand-card transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <LightModeIcon className="w-5 h-5" /> : <DarkModeIcon className="w-5 h-5" />}
            </button>
          )}

          <a
            href="https://wa.me/919691110995"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-green-500 text-white transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-brand-border text-brand-primary hover:bg-brand-card transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-40 bg-brand-bg/95 backdrop-blur-md flex flex-col justify-between py-8 px-6 animate-fade-in border-t border-brand-border">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bold py-2 border-b border-brand-border/40 transition-colors flex flex-col ${
                    isActive ? 'text-brand-saffron pl-2' : 'hover:text-brand-gold'
                  }`}
                >
                  <span className="text-base font-extrabold">{link.labelEnglish}</span>
                  <span className="text-xs font-semibold opacity-70 mt-0.5">{link.labelHindi}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col space-y-4 pt-6">
            <a
              href="tel:+919691110995"
              className="flex items-center justify-center space-x-2 w-full bg-brand-primary text-brand-bg py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors hover:bg-brand-gold"
            >
              <PhoneIcon className="w-5 h-5 text-brand-saffron" />
              <span>Helpline / जनसुनवाई: +91 96911 10995</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
