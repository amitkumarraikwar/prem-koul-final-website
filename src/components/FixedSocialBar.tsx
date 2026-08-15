'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  WhatsApp as WhatsAppIcon,
  Share as ShareIcon,
  Close as CloseIcon
} from '@mui/icons-material';

const SOCIALS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/premkoul20',
    icon: <LinkedInIcon className="w-5 h-5" />,
    color: '#0077b5',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/premkoulfilm',
    icon: <FacebookIcon className="w-5 h-5" />,
    color: '#1877f2',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@premkoul',
    icon: <YouTubeIcon className="w-5 h-5" />,
    color: '#ff0000',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/919691110995',
    icon: <WhatsAppIcon className="w-5 h-5" />,
    color: '#25d366',
  },
];

export function FixedSocialBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop fixed social bar (hidden on mobile) */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col space-y-4 z-50">
        {SOCIALS.map((soc) => (
          <a
            key={soc.name}
            href={soc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-11 h-11 rounded-full border border-brand-border bg-brand-card text-brand-primary opacity-70 hover:opacity-100 hover:scale-110 hover:border-brand-gold transition-all duration-300 shadow-md"
            title={soc.name}
          >
            <div className="transition-colors group-hover:scale-110" style={{ color: soc.color }}>
              {soc.icon}
            </div>
            {/* Tooltip */}
            <span className="absolute right-14 bg-brand-primary text-brand-bg text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-brand-border">
              {soc.name}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile Expanding FAB (hidden on desktop) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col space-y-3"
            >
              {SOCIALS.map((soc) => (
                <motion.a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-11 h-11 rounded-full text-white shadow-lg"
                  style={{ backgroundColor: soc.color }}
                  aria-label={soc.name}
                >
                  {soc.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-saffron text-brand-bg shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Toggle Social Menu"
        >
          {mobileOpen ? <CloseIcon className="w-6 h-6" /> : <ShareIcon className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
}
