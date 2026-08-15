'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ScrollReveal } from '@/components/ScrollReveal';

// MUI Icons
import {
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  Home as HomeIcon,
  Send as SendIcon,
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material';

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters / नाम कम से कम २ अक्षरों का होना चाहिए' }),
  email: z.string().email({ message: 'Invalid email address / अमान्य ईमेल' }).or(z.literal('')),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Phone must be a valid 10-digit number / मोबाइल नंबर १० अंकों का होना चाहिए' }),
  subject: z.string().min(1, { message: 'Please select a subject / विषय का चयन करें' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters / संदेश कम से कम १० अक्षरों का होना चाहिए' }),
});

type ContactInput = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'Contact', ...data }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setResponseMsg(result.message);
        reset();
      } else {
        setStatus('error');
        setResponseMsg(result.message);
      }
    } catch {
      setStatus('error');
      setResponseMsg('Something went wrong. Please try again later. / कोई तकनीकी समस्या आई है।');
    }
  };

  return (
    <div className="flex-1 w-full flex flex-col">
      {/* Header */}
      <section className="bg-brand-primary text-slate-100 py-20 border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-brand-saffron/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="container-width text-center space-y-4 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">
            Get in Touch / संपर्क करें
          </span>
          <h1 className="font-hindi-alt text-4xl sm:text-5xl font-black">हमसे संपर्क करें</h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-medium">
            आपकी समस्याएं, सुझाव या अभियान में जनभागीदारी हेतु संदेश भेजें। डोरस्टेप गवर्नेंस हेल्पलाइन नंबर सदैव उपलब्ध है।
          </p>
        </div>
      </section>

      {/* Forms & Contacts Grid */}
      <section className="section-padding bg-brand-bg">
        <div className="container-width grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="font-hindi-alt text-2xl font-extrabold text-brand-primary">संपर्क जानकारी</h2>
                
                {/* Helpline */}
                <div className="card-base glassmorphism p-5 flex items-start gap-4 hover:border-brand-saffron/40">
                  <PhoneIcon className="text-brand-saffron w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-base text-brand-primary">Helpline / 24/7 जनसुनवाई हेल्पलाइन</h3>
                    <p className="text-xs text-brand-saffron font-bold uppercase mt-0.5">[UPDATE WITH REAL HELPLINE NUMBER]</p>
                    <a href="tel:+919691110995" className="text-lg font-black text-brand-primary hover:text-brand-saffron transition-colors">
                      +91 96911 10995
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="card-base glassmorphism p-5 flex items-start gap-4 hover:border-green-500/40">
                  <WhatsAppIcon className="text-green-500 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-base text-brand-primary">WhatsApp Helpline</h3>
                    <p className="text-xs text-green-500 font-bold uppercase mt-0.5">तुरंत चैट पर जुड़ें</p>
                    <a
                      href="https://wa.me/919691110995"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-black text-brand-primary hover:text-green-500 transition-colors"
                    >
                      +91 96911 10995
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="card-base glassmorphism p-5 flex items-start gap-4">
                  <HomeIcon className="text-brand-saffron w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-base text-brand-primary">Office Area / कार्यालय</h3>
                    <p className="text-sm text-brand-primary/70 leading-relaxed font-semibold mt-1">
                      Indore Vidhan Sabha Constituency 5, Madhya Pradesh, India.
                    </p>
                  </div>
                </div>

                {/* Social Icons for Mobile */}
                <div className="card-base glassmorphism p-5 space-y-3">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-brand-gold">सोशल मीडिया नेटवर्क</h3>
                  <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/in/premkoul20" target="_blank" rel="noopener noreferrer" className="text-brand-primary/75 hover:text-brand-saffron transition-colors">
                      <LinkedInIcon className="w-6 h-6" />
                    </a>
                    <a href="https://www.facebook.com/premkoulfilm" target="_blank" rel="noopener noreferrer" className="text-brand-primary/75 hover:text-brand-saffron transition-colors">
                      <FacebookIcon className="w-6 h-6" />
                    </a>
                    <a href="https://youtube.com/@premkoul" target="_blank" rel="noopener noreferrer" className="text-brand-primary/75 hover:text-brand-saffron transition-colors">
                      <YouTubeIcon className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Working Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <div className="card-base glassmorphism p-6 md:p-8 space-y-6 shadow-xl">
                <h2 className="font-hindi-alt text-2xl font-black text-brand-primary">संदेश या सुझाव भेजें</h2>
                
                {status === 'success' ? (
                  <div className="p-5 bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 rounded-xl space-y-3">
                    <h3 className="font-bold text-lg">Thank You / धन्यवाद!</h3>
                    <p className="text-sm font-semibold">{responseMsg}</p>
                    <button onClick={() => setStatus('idle')} className="btn-secondary text-xs py-2 px-4 rounded-lg bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400">
                      नया संदेश भेजें
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {status === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg text-sm font-semibold">
                        {responseMsg}
                      </div>
                    )}

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                        Full Name / पूरा नाम <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="उदा. राहुल शर्मा"
                        className="input-field"
                        {...register('name')}
                      />
                      {errors.name && <p className="text-xs font-semibold text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                        Mobile Number / मोबाइल नंबर <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="उदा. 9876543210"
                        className="input-field"
                        {...register('phone')}
                      />
                      {errors.phone && <p className="text-xs font-semibold text-red-500">{errors.phone.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                        Email Address / ईमेल आईडी
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="उदा. name@example.com"
                        className="input-field"
                        {...register('email')}
                      />
                      {errors.email && <p className="text-xs font-semibold text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* Subject/Category */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                        Subject / संदेश श्रेणी <span className="text-red-500">*</span>
                      </label>
                      <select id="subject" className="input-field" {...register('subject')}>
                        <option value="">-- विषय का चयन करें --</option>
                        <option value="General">सामान्य सुझाव (General Suggestion)</option>
                        <option value="Grievance">समस्या रिपोर्ट (Constituency Grievance)</option>
                        <option value="Volunteer">स्वयंसेवक सहभागिता (Volunteer Join)</option>
                        <option value="Media">मीडिया / साक्षात्कार (Media & Interview)</option>
                        <option value="Other">अन्य (Other)</option>
                      </select>
                      {errors.subject && <p className="text-xs font-semibold text-red-500">{errors.subject.message}</p>}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                        Message / संदेश का विवरण <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="अपनी बात विस्तार से यहाँ लिखें..."
                        className="input-field"
                        {...register('message')}
                      />
                      {errors.message && <p className="text-xs font-semibold text-red-500">{errors.message.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full justify-center text-xs uppercase tracking-wider font-extrabold"
                    >
                      {status === 'submitting' ? (
                        <span>भेजा जा रहा है...</span>
                      ) : (
                        <>
                          <span>संदेश भेजें</span>
                          <SendIcon className="w-4 h-4 ml-1.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="bg-brand-bg/50 border-t border-brand-border h-[400px] w-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d117762.63737968595!2d75.80726462725832!3d22.723797686523912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b4106fd%3A0xe444870c66f50b9e!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          title="Indore Area Constituency Map"
          className="absolute inset-0 w-full h-full border-none opacity-80 dark:opacity-70 dark:invert-[0.9] dark:hue-rotate-180"
          loading="lazy"
          allowFullScreen
        />
      </section>
    </div>
  );
}
