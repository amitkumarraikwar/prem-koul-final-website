'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ReportProblem as ReportProblemIcon, Send as SendIcon } from '@mui/icons-material';

// Validation Schema
const grievanceSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters / नाम कम से कम २ अक्षरों का होना चाहिए' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Phone must be a valid 10-digit number / मोबाइल नंबर १० अंकों का होना चाहिए' }),
  ward: z.string().min(1, { message: 'Please specify your Ward or Area / कृपया वार्ड या क्षेत्र दर्ज करें' }),
  category: z.string().min(1, { message: 'Please select a category / शिकायत श्रेणी का चयन करें' }),
  description: z.string().min(15, { message: 'Description must be at least 15 characters / समस्या का विवरण कम से कम १५ अक्षरों का होना चाहिए' }),
  photoUrl: z.string().url({ message: 'Invalid URL / अमान्य यूआरएल' }).or(z.literal('')),
});

type GrievanceInput = z.infer<typeof grievanceSchema>;

export default function GrievancePage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GrievanceInput>({
    resolver: zodResolver(grievanceSchema),
    defaultValues: {
      name: '',
      phone: '',
      ward: '',
      category: '',
      description: '',
      photoUrl: '',
    },
  });

  const onSubmit = async (data: GrievanceInput) => {
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'Grievance', ...data }),
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
      <section className="bg-brand-primary text-slate-100 py-20 border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-brand-saffron/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="container-width text-center space-y-4 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">
            Constituency Grievance Portal / जनसुनवाई शिकायत निवारण
          </span>
          <h1 className="font-hindi-alt text-4xl sm:text-5xl font-black text-black">{"\"आपकी समस्या, हमारी ज़िम्मेदारी\""}</h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-medium">
            पानी, सड़क, बिजली, स्वास्थ्य या सुरक्षा संबंधी किसी भी समस्या की शिकायत यहाँ दर्ज करें। हमारी समर्पित वार्ड टीमें समाधान के लिए सक्रिय प्रयास करेंगी।
          </p>
        </div>
      </section>

      {/* Bhagiratpura Water Crisis Warning Banner */}
      <section className="bg-slate-900 text-white py-6 border-b border-rose-500/40">
        <div className="container-width">
          <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/40 border border-rose-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-rose-400 uppercase tracking-wider">
                🚨 Alert: Water Contamination Safety / शुद्ध जल सुरक्षा
              </span>
              <p className="text-sm font-bold text-slate-100">
                भाग्यरतपुरा दूषित पानी जैसी गंभीर त्रासदियों से बचाव हेतु - अपने वार्ड में गंदे/सीवर युक्त पानी या लीकेज की शिकायत तुरंत दर्ज कराएं।
              </p>
            </div>
            <a
              href="/blog/indore-bhagiratpura-water-tragedy-and-civic-accountability"
              className="shrink-0 text-xs font-extrabold text-brand-saffron hover:underline bg-brand-saffron/10 px-3.5 py-2 rounded-xl border border-brand-saffron/30"
            >
              भाग्यरतपुरा रिपोर्ट पढ़ें →
            </a>
          </div>
        </div>
      </section>

      {/* Form Area */}
      <section className="section-padding">
        <div className="container-width max-w-2xl">
          <ScrollReveal>
            <div className="card-base glassmorphism p-6 md:p-8 space-y-6 shadow-xl border-l-4 border-l-red-500">
              <div className="flex items-center gap-3">
                <ReportProblemIcon className="text-red-500 w-8 h-8" />
                <div>
                  <h2 className="font-hindi-alt text-2xl font-black text-brand-primary">समस्या रिपोर्ट फॉर्म</h2>
                  <p className="text-xs text-brand-primary/50 font-bold uppercase">Grievance Registration</p>
                </div>
              </div>

              {status === 'success' ? (
                <div className="p-5 bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 rounded-xl space-y-3">
                  <h3 className="font-bold text-lg">Grievance Registered / शिकायत दर्ज हुई!</h3>
                  <p className="text-sm font-semibold">{responseMsg}</p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary text-xs py-2 px-4 rounded-lg bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400">
                    एक और समस्या दर्ज करें
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                        Full Name / पूरा नाम <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="उदा. अमित कुमार"
                        className="input-field"
                        {...register('name')}
                      />
                      {errors.name && <p className="text-xs font-semibold text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                        Phone / मोबाइल नंबर <span className="text-red-500">*</span>
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

                  {/* Ward / Area */}
                  <div className="space-y-1.5">
                    <label htmlFor="ward" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                      Ward No. or Area / वार्ड संख्या या क्षेत्र <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="ward"
                      type="text"
                      placeholder="उदा. वार्ड 53, साकेत नगर"
                      className="input-field"
                      {...register('ward')}
                    />
                    {errors.ward && <p className="text-xs font-semibold text-red-500">{errors.ward.message}</p>}
                  </div>

                  {/* Category */}
                  <div className="space-y-1.5">
                    <label htmlFor="category" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                      Issue Category / समस्या की श्रेणी <span className="text-red-500">*</span>
                    </label>
                    <select id="category" className="input-field" {...register('category')}>
                      <option value="">-- श्रेणी चुनें --</option>
                      <option value="water">जल आपूर्ति / गंदा पानी (Water Supply)</option>
                      <option value="roads">सड़कें / जलभराव (Roads & Drainage)</option>
                      <option value="electricity">स्ट्रीट लाइट / बिजली (Electricity)</option>
                      <option value="education">सरकारी स्कूल / शिक्षा (Sanskrit & Education)</option>
                      <option value="health">स्वास्थ्य सेवाएं / डिस्पेंसरी (Healthcare)</option>
                      <option value="safety">सुरक्षा व असामाजिक तत्व (Safety & Security)</option>
                      <option value="other">अन्य (Other)</option>
                    </select>
                    {errors.category && <p className="text-xs font-semibold text-red-500">{errors.category.message}</p>}
                  </div>

                  {/* Description */}
                  <div className="space-y-1.5">
                    <label htmlFor="description" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                      Description / समस्या का विवरण <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      placeholder="समस्या का विस्तृत विवरण यहाँ लिखें, जिससे समस्या समझने में आसानी हो..."
                      className="input-field"
                      {...register('description')}
                    />
                    {errors.description && <p className="text-xs font-semibold text-red-500">{errors.description.message}</p>}
                  </div>

                  {/* Photo URL (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="photoUrl" className="text-xs font-bold uppercase tracking-wider text-brand-primary/70">
                      Photo Link (Optional) / समस्या की फोटो का यूआरएल
                    </label>
                    <input
                      id="photoUrl"
                      type="text"
                      placeholder="उदा. https://example.com/image.jpg"
                      className="input-field"
                      {...register('photoUrl')}
                    />
                    {errors.photoUrl && <p className="text-xs font-semibold text-red-500">{errors.photoUrl.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full justify-center text-xs uppercase tracking-wider font-extrabold"
                  >
                    {status === 'submitting' ? (
                      <span>दर्ज किया जा रहा है...</span>
                    ) : (
                      <>
                        <span>शिकायत दर्ज करें</span>
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
