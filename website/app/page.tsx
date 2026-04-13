"use client";
import { useState, useEffect } from 'react';
import { 
  Target, 
  Lightbulb, 
  Diamond, 
  ShieldCheck, 
  MapPin, 
  Ruler,
  Briefcase,
  TreePine,
  Pickaxe,
  FileSearch,
  Phone, 
  Mail, 
  Globe, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Image,{ ImageProps } from 'next/image';


const slide01 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776067690/01_b2dwqc.png'
const slide02 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776068337/02_c1hfzw.png'
const slide03 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065501/03_s2lall.png'
const slide04 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065507/04_qtg4ka.png'
const slide05 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065527/05_nyk5tt.png'

const facebook = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065499/facebookIcon_ykqzvg.png'
const youtube = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065768/youtubeIcon01_bo9il6.png'
const twitter = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065768/twitterIcon_zuysqm.png'
const linkedin = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065513/linkedinIcon_vxqebf.png'

const tower = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776068942/kebede_aapsef.png'
const airline = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065463/airline_exattr.png'
const airline2 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065490/airline02_qmkpb3.png'
const certificate03 = 'https://res.cloudinary.com/djxfy60tt/image/upload/q_auto/f_auto/v1776065831/certificate03_jmsuk0.png'
const certificate04 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065468/certificate04_ixqnru.png'
const certificate05 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065478/certificate05_efwwog.png'
const certificate06 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065512/certificate06_d8yiiy.png'
const haramaya = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065509/haramaya_v6ls3p.png'
const addis = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065450/addis_hie23t.png'
const bule = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065770/bule_faqzdf.jpg'
const central = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065769/central_cyfltn.png'
const ethioairline = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065497/ethioairline_hjydfn.png'
const insa = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065515/niss_rrwhix.png'
const sam = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065724/sam_grfilx.png'
const city = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065482/city_yl0ays.jpg'
const experiance = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065498/experiance_ivwkno.jpg'
const nurbelay = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065515/nurbelay_knnjzg.jpg'
const eco = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065491/eco_astaj2.jpg'
const habesha = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065508/habesha_ztaco5.jpg'
const remeda = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065722/remeda_iez8tk.png'
const ecole = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065494/ecole_xkd8hs.jpg'
const rift = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065724/riftvalley_hafagl.jpg'
const elsewedy = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065495/elsewedy_rjthxq.jpg'

const slides = [
  { src: slide01, title: "Dr. Ali Birra Comprehensive Hospital", location: "Innovative Healthcare Infrastructure", },
  { src: slide02, title: "Dr. Ali Birra Guest House", location: "Resilient Architectural Design" },
  { src: slide03, title: "Modern Urban Living", location: "Structural Excellence" },
  { src: slide04, title: "Haramaya Guest House", location: "Sustainability & Function" },
  { src: slide05, title: "Haramaya University Project", location: "Educational Landmark Development" },
];

const certificates = [
  { src: airline, alt: "Ethiopian Airlines Appreciation" },
  { src: airline2, alt: "Regional Appreciation Certificate" },
  { src: certificate03, alt: "ECEAA Membership" },
  { src: certificate04, alt: "Belsty Trading Recognition" },
  { src: certificate05, alt: "Professional Accreditation" },
  { src: certificate06, alt: "Technical Certification" },
]

const partners = [
  { src: haramaya, alt: 'Haramaya University' },
  { src: addis, alt: 'Addis Ababa University' },
  { src: bule, alt: 'Bule Hora University' },
  { src: central, alt: 'Central' },
  { src: ethioairline, alt: 'Ethiopian Airlines' },
  { src: insa, alt: 'INSA' },
  { src: sam, alt: 'SAM' },
  { src: city, alt: 'City Administration' },
  { src: experiance, alt: 'Experience' },
  { src: nurbelay, alt: 'Nurbelay' },
  { src: eco, alt: 'Eco' },
  { src: habesha, alt: 'Habesha' },
  { src: remeda, alt: 'Remeda' },
  { src: ecole, alt: 'Ecole' },
  { src: rift, alt: 'Rift Valley' },
  { src: elsewedy, alt: 'Elsewedy Electric' },
]

const socialMedia = [
  {src:facebook, alt:'facebook',href:"https://web.facebook.com/profile.php?id=100076434397072"},
  {src:youtube, alt:'youtube',href:"https://www.youtube.com/@hhconsulting208"},
  {src:twitter, alt:'twitter',},
  {src:linkedin, alt:'linkedin'},
]

const ImageWithLoader = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[50px] flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 animate-pulse">
            Loading...
          </span>
        </div>
      )}
      <Image
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        className={`${props.className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
      />
    </div>
  );
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="pt-16 bg-white overflow-x-hidden">
      
      {/* PROFESSIONAL SLIDESHOW LANDING PAGE */}
      <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden bg-slate-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithLoader
              src={slide.src}
              alt={slide.title}
              fill
              className="object-cover transition-transform duration-[10000ms]"
              style={{ transform: index === currentSlide ? 'scale(1.1)' : 'scale(1.0)' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-slate-900/10" />
            
            <div className="absolute bottom-24 md:bottom-32 left-6 lg:left-20 max-w-[90%] md:max-w-3xl text-white">
              <p className="text-blue-400 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4">
                {slide.location}
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {slide.title}
              </h1>
            </div>
          </div>
        ))}

        {/* Navigation Controls - Hidden on small mobile for cleaner look */}
        <div className="hidden sm:flex absolute bottom-10 right-6 lg:right-20 gap-4">
          <button onClick={prevSlide} className="p-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-6 lg:left-20 flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-500 rounded-full ${i === currentSlide ? "w-8 md:w-12 bg-blue-500" : "w-4 bg-white/30"}`}
            />
          ))}
        </div>
      </section>

      {/* 1. WHO WE ARE */}
      <section id="about" className="px-6 lg:px-20 py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-400 mb-6 md:mb-8">
              Who We Are
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                A multidisciplinary firm based in Ethiopia, dedicated to providing innovative, sustainable, and integrated solutions in architecture and engineering. We combine visionary design with technical excellence to deliver impactful and resilient projects across Ethiopia and beyond.
              </p>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3">
                  OUR APPROACH
                </h3>
                <p>
                  We are committed to excellence, sustainability, and innovation. Our designs balance aesthetics, function, and environmental responsibility. We work closely with clients to ensure every project meets technical, regulatory, and social expectations.
                </p>
              </div>
            </div>
            <Link href="/staff" className="text-sm font-bold uppercase tracking-widest text-blue-600 flex items-center gap-2 group mt-8">
              Meet our team <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="relative h-[300px] md:h-[450px] lg:h-auto rounded-sm overflow-hidden border border-slate-100 shadow-md order-1 lg:order-2">
            <ImageWithLoader 
              src={tower} 
              alt="HH Consulting Architects project" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. MISSION, VISION, VALUE */}
      <section id="profile" className="px-6 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-gray-400">
            Our Cores
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100 shadow-xl md:shadow-2xl">
          <CoreCard 
            icon={<Target size={32} strokeWidth={1.5} />} 
            title="Mission" 
            text="HH Consulting Architects and Engineers plc is driven by a passion for automated project management solutions with architectural and civil engineering services. Implements innovative ideas across multiple services." 
          />
          <CoreCard 
            icon={<Lightbulb size={32} strokeWidth={1.5} />} 
            title="Vision" 
            text="We strive to achieve innovative project management and quality control solutions for the local construction industry by creating partnership and creative working environment." 
          />
          <div className="group relative bg-[#1a2e44] p-8 md:p-12 transition-all duration-500 text-white">
            <div className="relative z-10">
              <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white transition-colors">
                <Diamond size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-widest mb-6">Value</h4>
              <ul className="text-slate-300 text-sm space-y-4 group-hover:text-white transition-colors">
                {["Appropriate usage of time", "Developing behavioral qualities", "Serving customers in kind"].map((val, i) => (
                  <li key={i} className="flex items-start gap-3 italic">
                    <span className="text-blue-400 font-bold">•</span> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE */}
      <section id="expertise" className="px-6 lg:px-20 py-12 max-w-7xl mx-auto">
        <h2 className="text-center text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-gray-400 mb-12">
          Professional Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          <ExpertiseBox icon={<Ruler size={32} />} title="Architectural & Engineering" desc={["Architectural Design", "Structural Engineering", "Electrical Systems", "Sanitary & Plumbing"]} />
          <ExpertiseBox icon={<Pickaxe size={32} />} title="Infrastructure" desc={["Road & Highway Design", "Bridges", "Irrigation", "Master Planning"]} />
          <ExpertiseBox icon={<TreePine size={32} />} title="Urban & Environmental" desc={["Regional Master Plans", "EIA Assessments", "Landscape Design", "Topographic Surveys"]} />
          <ExpertiseBox icon={<FileSearch size={32} />} title="Feasibility & Planning" desc={["Public/Private Feasibility", "Strategic Site Analysis", "Cost Estimations"]} />
          <ExpertiseBox icon={<Briefcase size={32} />} title="Project Management" desc={["Contract Administration", "Quality Control", "Site Supervision", "Scheduling"]} />
        </div>
      </section>

      {/* 4. CERTIFICATIONS */}
      <section id="certificates" className="w-full py-16 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="mb-12 text-center">
            <h2 className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-gray-400">
               Our Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="group relative aspect-[4/3] bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6">
                <ImageWithLoader src={cert.src} alt={cert.alt} fill className="object-contain p-4" />
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 bg-white/95 px-2 py-1 shadow-sm truncate w-full">
                    {cert.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENTS */}
    <section id="clients" className="w-full py-16 md:py-24 bg-slate-50 border-t border-gray-100">
      <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-slate-400">
            Partners & Potential Clients
            </h2>
            <div className="h-1 w-12 bg-blue-600 mt-4 rounded-full" />
          </div>
          {/* Switched to grid: grid-cols-2 for mobile, md:grid-cols-4 or 5 for desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="group bg-white w-full h-[120px] md:h-[140px] flex items-center justify-center p-4 border border-slate-200 rounded-sm shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative w-full h-full">
                  <ImageWithLoader 
                    src={partner.src} 
                    alt={partner.alt} 
                    fill 
                    className="object-contain transition-all duration-500 scale-90 group-hover:scale-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>

      <section id="feasibility_study" className="w-full py-16 md:py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-slate-400">
              Feasibility Study
            </h2>
            <div className="h-1 w-12 bg-blue-600 mt-4 rounded-full" />
          </div>

          {/* The Improved P Tag */}
          <p className="max-w-3xl text-slate-600 text-base md:text-lg leading-relaxed font-light mb-12">
            Our resident engineer oversees various activities pertaining to 
            environmental issues, including:
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "Organizing high-level events and drafting comprehensive environmental policies",
              "Liaising with review board stakeholders to facilitate formal environmental assessments",
              "Strategic communication with stakeholders and the public regarding EIA processes",
              "Technical data analysis and professional report preparation",
              "Establishing detailed budgets and strategic work plans for project assessments",
              "Drafting policy and position papers on environmental impact assessment methodologies"
            ].map((service, index) => (
              <div key={index} className="flex gap-4 group">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 group-hover:scale-150 transition-transform" />
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. LOCATION & CONTACT */}
    <section id="location" className="px-4 md:px-10 lg:px-20 py-12 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          
          {/* Contact Details Section */}
          <div className="order-1">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-6 md:mb-10 text-center md:text-left">
              Location
            </h2>
            <div className="space-y-6 md:space-y-8">
              <ContactItem 
                icon={<MapPin size={20} className="text-blue-400" />} 
                title="Address" 
                content="Ethiopia, Addis Ababa, 22 Mazoriya, Efrata building, 3rd floor" 
              />
              <ContactItem 
                icon={<Phone size={20} className="text-blue-400" />} 
                title="Phone" 
                content={
                  <div className="flex flex-col text-sm md:text-lg">
                    <span>011 8683830</span>
                    <span>011 6672951</span>
                    <span>+251 913592121</span>
                    <span>+251 911228253</span>
                    <span>+251 966935979</span>
                  </div>
                } 
              />
              <ContactItem 
                icon={<Mail size={20} className="text-blue-400" />} 
                title="Email" 
                content={<span className="text-sm md:text-lg break-all">hhconsultingarchitectengineers@gmail.com</span>} 
              />
              <ContactItem 
                icon={<Globe size={20} className="text-blue-400" />} 
                title="Website" 
                content="www.hhconsulting.et" 
              />
            </div>
          </div>
          
          {/* Map and Socials Section */}
          <div className="flex flex-col gap-8 order-2">
            <div className="w-full h-64 md:h-96 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.548456079979!2d38.783103!3d9.013627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859846664d6b%3A0xe74f4b2383c2763c!2sEfrata%20building!5e0!3m2!1sen!2set!4v1712990000000!5m2!1sen!2set" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="pt-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 text-center md:text-left">
                Follow Us
              </p>
              <div className="grid grid-cols-4 gap-4 max-w-[280px] mx-auto md:mx-0">
                {socialMedia.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center justify-center transition-all bg-slate-800 p-3 rounded-lg hover:bg-slate-700 border border-slate-700"
                  >
                    <div className="relative w-6 h-6 md:w-8 md:h-8">
                      <Image 
                        src={social.src} 
                        alt={social.alt} 
                        fill 
                        className="object-contain transition-transform group-hover:scale-110" 
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
    </main>
  );
}

// Sub-components for cleaner structure
function CoreCard({ icon, title, text }: any) {
  return (
    <div className="group relative bg-[#1a2e44] p-8 md:p-12 transition-all duration-500 text-white">
      <div className="relative z-10">
        <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white transition-colors">
          <div className="text-white">{icon}</div>
        </div>
        <h4 className="text-xl font-bold uppercase tracking-widest mb-6">{title}</h4>
        <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">{text}</p>
      </div>
    </div>
  );
}

function ExpertiseBox({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 md:p-10 hover:bg-slate-50 transition-all duration-300 group flex flex-col h-full border-r border-b border-gray-100">
      <div className="text-blue-600 mb-6 group-hover:-translate-y-1 transition-transform">{icon}</div>
      <h4 className="text-lg md:text-xl font-bold tracking-tight mb-4 text-slate-900 leading-tight">{title}</h4>
      <ul className="text-gray-500 text-xs md:text-sm space-y-2 list-disc ml-4">
        {Array.isArray(desc) ? desc.map((item: string, i: number) => <li key={i}>{item}</li>) : desc}
      </ul>
    </div>
  );
}

function ContactItem({ icon, title, content }: any) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="text-blue-400 mt-1 transition-transform group-hover:scale-110 shrink-0">{icon}</div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{title}</p>
        <div className="text-sm md:text-lg font-light leading-tight">{content}</div>
      </div>
    </div>
  );
}