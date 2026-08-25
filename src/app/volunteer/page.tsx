'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ScrollReveal } from '@/components/ScrollReveal';
import { GroupAdd as GroupAddIcon, Send as SendIcon } from '@mui/icons-material';

const SKILLS_OPTIONS = [
  { value: 'Digital Campaign', label: 'डिजिटल कैंपेन / सोशल मीडिया (Digital Campaign)' },
  { value: 'Ground Work', label: 'जमीनी संपर्क / जनसंपर्क (Ground Work)' },
  { value: 'Content', label: 'लेखन व कंटेंट राइटिंग (Content Creation)' },
  { value: 'Design', label: 'ग्राफिक डिजाइन व रचनात्मक पोस्टर (Graphic Design)' },
  { value: 'Video Editing', label: 'वीडियो संपादन व सिनेमैटोग्राफी (Video Editing)' },
  { value: 'Other', label: 'अन्य (Other)' },
];

// Validation Schema
const volunteerSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters / नाम कम से कम २ अक्षरों का होना चाहिए' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Phone must be a valid 10-digit number / मोबाइल नंबर १० अंकों का होना चाहिए' }),
  email: z.string().email({ message: 'Invalid email address / अमान्य ईमेल आईडी' }),
  ward: z.string().min(1, { message: 'Please specify your Area or Ward / अपना वार्ड या क्षेत्र दर्ज करें' }),
  skills: z.array(z.string()).min(1, { message: 'Please select at least one skill / कम से कम एक कौशल/रुचि का चयन करें' }),
  availability: z.string().min(1, { message: 'Please specify your availability / समय की उपलब्धता दर्ज करें' }),
});

type VolunteerInput = z.infer<typeof volunteerSchema>;

export default function VolunteerPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<VolunteerInput>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      ward: '',
      skills: [],
      availability: '',
    },
  });

  const onSubmit = async (data: VolunteerInput) => {
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'Volunteer', ...data }),
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
    <div className="flex-1 w-full flex flex-col bg-brand-bg">
      {/* Header */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-16 sm:py-20 border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="container-width text-center space-y-4 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            Join the Movement / अभियान से जुड़ें
          </span>
          <h1 className="font-hindi-alt text-4xl sm:text-5xl font-black text-white">{"\"अभियान से जुड़ें, बदलाव लाएं\""}</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            डोरस्टेप गवर्नेंस विज़न को इंदौर-5 के प्रत्येक घर तक पहुँचाने के लिए हमारे साथ जुड़ें। आपकी छोटी सी सहभागिता बड़े बदलाव का आधार बन सकती है।
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-width max-w-2xl">
          <ScrollReveal>
            <div className="card-base glassmorphism p-6 md:p-8 space-y-6 shadow-xl border-l-4 border-l-brand-saffron">
              <div className="flex items-center gap-3">
                <GroupAddIcon className="text-brand-saffron w-8 h-8" />
                <div>
                  <h2 className="font-hindi-alt text-2xl font-black text-brand-primary">स्वयंसेवक पंजीकरण फॉर्म</h2>
                  <p className="text-xs text-brand-primary/50 font-bold uppercase">Volunteer Registration</p>
                </div>
              </div>

              {status === 'success' ? (
                <div className="p-5 bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 rounded-xl space-y-3">
                  <h3 className="font-bold text-lg">Registration Successful / पंजीकरण पूर्ण हुआ!</h3>
                  <p className="text-sm font-semibold">{responseMsg}</p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary text-xs py-2 px-4 rounded-lg bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400">
                    नया स्वयंसेवक दर्ज करें
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg text-sm font-semibold">
                      {responseMsg}
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                        Full Name / पूरा नाम <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="उदा. अमित रायकवार"
                        className="input-field"
                        {...register('name')}
                      />
                      {errors.name && <p className="text-xs font-semibold text-red-500">{errors.name.message}</p>}
                    </div>

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
                  </div>

                  {/* Email & Ward */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                        Email Address / ईमेल <span className="text-red-500">*</span>
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

                    <div className="space-y-1.5">
                      <label htmlFor="ward" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                        Ward or Area / वार्ड या क्षेत्र <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="ward"
                        type="text"
                        placeholder="उदा. वार्ड 55, वीर सावरकर नगर"
                        className="input-field"
                        {...register('ward')}
                      />
                      {errors.ward && <p className="text-xs font-semibold text-red-500">{errors.ward.message}</p>}
                    </div>
                  </div>

                  {/* Skills/Interests Checklist */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-primary/70 block">
                      Skills & Interests / आप किस क्षेत्र में मदद कर सकते हैं? <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border border-brand-border bg-brand-card/40 p-4 rounded-xl">
                      <Controller
                        name="skills"
                        control={control}
                        render={({ field }) => {
                          const onChange = (value: string, checked: boolean) => {
                            if (checked) {
                              field.onChange([...field.value, value]);
                            } else {
                              field.onChange(field.value.filter((val) => val !== value));
                            }
                          };
                          return (
                            <>
                              {SKILLS_OPTIONS.map((opt) => (
                                <label key={opt.value} className="flex items-start gap-2.5 text-sm font-bold text-brand-primary/80 cursor-pointer select-none">
                                  <input
                                    type="checkbox"
                                    value={opt.value}
                                    checked={field.value.includes(opt.value)}
                                    onChange={(e) => onChange(opt.value, e.target.checked)}
                                    className="mt-1 accent-brand-saffron"
                                  />
                                  <span>{opt.label}</span>
                                </label>
                              ))}
                            </>
                          );
                        }}
                      />
                    </div>
                    {errors.skills && <p className="text-xs font-semibold text-red-500">{errors.skills.message}</p>}
                  </div>

                  {/* Availability */}
                  <div className="space-y-1.5">
                    <label htmlFor="availability" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                      Availability / समय की उपलब्धता <span className="text-red-500">*</span>
                    </label>
                    <select id="availability" className="input-field" {...register('availability')}>
                      <option value="">-- उपलब्धता चुनें --</option>
                      <option value="Weekends">सप्ताहांत (Only Weekends)</option>
                      <option value="Few hours weekdays">कार्यदिवसों में कुछ घंटे (Few hours on Weekdays)</option>
                      <option value="Flexible">लचीला समय (Flexible Availability)</option>
                      <option value="Full-time">पूर्णकालिक (Full-time Support)</option>
                    </select>
                    {errors.availability && <p className="text-xs font-semibold text-red-500">{errors.availability.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full justify-center text-xs uppercase tracking-wider font-extrabold"
                  >
                    {status === 'submitting' ? (
                      <span>पंजीकरण किया जा रहा है...</span>
                    ) : (
                      <>
                        <span>पंजीकरण करें</span>
                        <SendIcon className="w-4 h-4 ml-1.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
