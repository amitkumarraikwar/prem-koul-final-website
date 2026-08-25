'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Close as CloseIcon } from '@mui/icons-material';

interface GalleryItem {
  id: string;
  title: string;
  category: 'events' | 'campaign' | 'films' | 'media';
  imageUrl: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'कुटुम्ब बन्धनम् फ़िल्म प्रीमियर',
    category: 'films',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop',
    caption: 'विंध्याचल एवं उज्जैन फिल्म फेस्टिवल 2026 में चयनित संस्कृत लघु फिल्म का प्रीमियर।',
  },
  {
    id: '2',
    title: 'इंदौर-5 जनसंपर्क यात्रा',
    category: 'campaign',
    imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=600&auto=format&fit=crop',
    caption: 'इंदौर विधानसभा क्षेत्र 5 में डोरस्टेप गवर्नेंस अभियान के तहत नागरिकों से चर्चा।',
  },
  {
    id: '3',
    title: 'IIM इंदौर मीडिया प्रबंधन',
    category: 'media',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop',
    caption: 'IIM इंदौर में मीडिया समन्वय एवं राष्ट्रीय स्तर के शैक्षणिक कवरेज का संचालन।',
  },
  {
    id: '4',
    title: 'वार्ड जनसुनवाई शिविर',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
    caption: 'वार्ड स्तर पर नागरिकों की शिकायतों व सुझावों के समाधान हेतु जनसुनवाई शिविर।',
  },
  {
    id: '5',
    title: 'एकम् लक्षम् लघु फ़िल्म स्क्रीनिंग',
    category: 'films',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop',
    caption: 'सांस्कृतिक पुनर्जागरण और नैतिक शिक्षा को बढ़ावा देती संस्कृत फिल्म की विशेष स्क्रीनिंग।',
  },
  {
    id: '6',
    title: 'डिजिटल मीडिया कौशल कार्यशाला',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop',
    caption: 'विधानसभा क्षेत्र के युवाओं हेतु डिजिटल मार्केटिंग व वीडियो एडिटिंग प्रशिक्षण शिविर।',
  },
];

const CATEGORIES = [
  { value: 'all', label: 'All / सभी चित्र' },
  { value: 'events', label: 'Events / कार्यक्रम' },
  { value: 'campaign', label: 'Campaign / जनसंपर्क' },
  { value: 'films', label: 'Films / लघु फिल्में' },
  { value: 'media', label: 'Media / प्रेस-वार्ता' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="flex-1 w-full flex flex-col bg-brand-bg">
      {/* Header */}
      <section className="bg-brand-primary text-slate-100 py-20 border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-brand-saffron/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="container-width text-center space-y-4 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">
            Visual Highlights / फोटो गैलरी
          </span>
          <h1 className="font-hindi-alt text-4xl sm:text-5xl font-black text-black">फोटो गैलरी / Gallery</h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-medium">
            जनसंपर्क अभियानों, फिल्म प्रीमियरों, शैक्षणिक कार्यशालाओं और वार्ड जनसुनवाई के प्रमुख क्षणों के चित्र।
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-width space-y-8">

          {/* Category Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`text-xs md:text-sm font-bold px-4 py-2 rounded-full border transition-all cursor-pointer ${activeCategory === cat.value
                      ? 'bg-brand-saffron border-brand-saffron text-white shadow-md'
                      : 'border-brand-border bg-brand-card hover:border-brand-gold text-brand-primary'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-card h-64 shadow-md cursor-pointer hover:border-brand-gold/45"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Backdrop Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-saffron">
                      {item.category}
                    </span>
                    <h3 className="font-hindi-alt text-sm font-bold text-white line-clamp-1">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking modal box
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white z-10 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full">
                <Image
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Caption Area */}
              <div className="p-5 md:p-6 bg-slate-950 text-slate-100 space-y-2">
                <span className="text-xs font-mono font-bold text-brand-saffron uppercase">
                  {selectedItem.category}
                </span>
                <h2 className="font-hindi-alt text-lg md:text-xl font-bold">{selectedItem.title}</h2>
                <p className="text-sm text-slate-400 font-semibold leading-relaxed">{selectedItem.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
