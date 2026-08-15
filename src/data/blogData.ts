export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'संस्कृत शिक्षा और इंदौर-5 की उपेक्षा: एक कार्यकर्ता की पुकार',
    slug: 'sanskrit-education-and-indore-5-grievances',
    date: '9 सितंबर 2026',
    category: 'विचार (Opinion)',
    excerpt: 'यह लेख इंदौर विधानसभा क्षेत्र 5 की प्राथमिक जमीनी समस्याओं, सांस्कृतिक धरोहर एवं संस्कृत शिक्षा के प्रति व्यवस्था की उपेक्षा पर एक समर्पित कार्यकर्ता का विचार-पत्र है।',
    coverImage: 'https://media.licdn.com/dms/image/v2/D5603AQG0Me2IFI_vXQ/profile-displayphoto-scale_400_400/B56ZmaUFiRI8Ag-/0/1759230583447?e=1787788800&v=beta&t=8o9F-2i_vNFM1xf4_rqz0SX5dtc91XmX8mtGKm-167Q',
    content: `
      <div class="rounded-2xl border-l-4 border-[#c5a85c] bg-slate-100 dark:bg-slate-900 border border-brand-border p-5 mb-8 text-brand-primary font-medium leading-relaxed shadow-md">
        यह लेख इंदौर विधानसभा क्षेत्र 5 की प्राथमिक जमीनी समस्याओं, सांस्कृतिक धरोहर एवं संस्कृत शिक्षा के प्रति व्यवस्था की उपेक्षा पर एक समर्पित कार्यकर्ता का विचार-पत्र है। इसमें इंदौर-5 के वार्ड-स्तरीय मुद्दों और शिक्षा व्यवस्था के सुधार हेतु एक व्यावहारिक दृष्टिकोण प्रस्तुत किया गया है।
      </div>

      <h3 class="text-xl font-bold font-hindi-alt text-brand-primary mt-8 mb-4 border-l-4 border-[#c5a85c] pl-3 py-1 bg-brand-card border border-brand-border rounded-r-xl">
        संस्कृत भाषा व देववाणी का सांस्कृतिक महत्त्व
      </h3>
      <p class="text-base text-brand-primary/80 leading-relaxed mb-5 font-semibold">
        भारत की प्राचीन ज्ञान परंपरा, संस्कार और बौद्धिक संपदा का मूल आधार संस्कृत भाषा है। दुर्भाग्यवश, आधुनिक नीतिगत अनदेखी और उदासीनता के कारण विद्यालयी एवं उच्च शिक्षा स्तर पर संस्कृत अध्यापन और प्रोत्साहन को हासिये पर धकेल दिया गया है।
      </p>
      <p class="text-base text-brand-primary/80 leading-relaxed mb-5 font-semibold">
        देववाणी संस्कृत केवल एक भाषा नहीं, बल्कि हमारी सांस्कृतिक पहचान और नैतिक शिक्षा का संवाहक है। प्राथमिक विद्यालयों से लेकर उच्च शिक्षण संस्थानों में संस्कृत अध्यापकों के रिक्त पद और घटते प्रोत्साहन पर तुरंत संज्ञान लेना अनिवार्य है।
      </p>

      <h3 class="text-xl font-bold font-hindi-alt text-brand-primary mt-8 mb-4 border-l-4 border-[#c5a85c] pl-3 py-1 bg-brand-card border border-brand-border rounded-r-xl">
        इंदौर-5: जमीनी उपेक्षा व मूलभूत समस्याएं
      </h3>
      <p class="text-base text-brand-primary/80 leading-relaxed mb-5 font-semibold">
        इंदौर विधानसभा 5 क्षेत्र में विकास के बड़े-बड़े दावों के बावजूद कई वार्डों में बुनियादी पेयजल आपूर्ति, जलभराव, जर्जर सड़कें, और जनस्वास्थ्य सुविधाओं की भारी कमी है। आम नागरिक छोटी-छोटी शिकायतों के लिए सरकारी कार्यालयों के चक्कर लगाने को मजबूर हैं।
      </p>
      <p class="text-base text-brand-primary/80 leading-relaxed mb-5 font-semibold">
        जब तक स्थानीय प्रशासन और जनप्रतिनिधि जमीनी धरातल पर पारदर्शी जवाबदेही तय नहीं करेंगे, तब तक नागरिकों की मूलभूत समस्याएं दूर नहीं हो सकतीं।
      </p>

      <h3 class="text-xl font-bold font-hindi-alt text-brand-primary mt-8 mb-4 border-l-4 border-[#c5a85c] pl-3 py-1 bg-brand-card border border-brand-border rounded-r-xl">
        सुधार हेतु 3 मुख्य बिंदु:
      </h3>
      <ol class="my-6 space-y-3 rounded-2xl border border-brand-border bg-brand-card p-6 shadow-xl font-bold">
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c5a85c]/20 border border-[#c5a85c]/40 text-[#c5a85c] font-bold text-xs font-mono">1</span>
          <div>
            <strong class="font-black text-[#c5a85c]">संस्कृत व वोकेशनल शिक्षा प्रोत्साहन:</strong> प्राथमिक व माध्यमिक स्तर पर निःशुल्क संस्कृत व आधुनिक स्किल कोचिंग केंद्रों की स्थापना।
          </div>
        </li>
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c5a85c]/20 border border-[#c5a85c]/40 text-[#c5a85c] font-bold text-xs font-mono">2</span>
          <div>
            <strong class="font-black text-[#c5a85c]">24/7 डोरस्टेप शिकायत निवारण:</strong> हर वार्ड में पारदर्शी डिजिटल शिकायत ट्रैकिंग और होम-डिलीवरी सेवा।
          </div>
        </li>
        <li class="flex items-start gap-3 text-base text-brand-primary/85 leading-relaxed">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c5a85c]/20 border border-[#c5a85c]/40 text-[#c5a85c] font-bold text-xs font-mono">3</span>
          <div>
            <strong class="font-black text-[#c5a85c]">सक्रिय जनसुनवाई:</strong> जनप्रतिनिधियों और प्रशासनिक अधिकारियों की वार्ड-स्तरीय नियमित जवाबदेही।
          </div>
        </li>
      </ol>
    `,
  },
];
