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
  { src: haramaya, alt: 'Haramaya University',name:"Haramaya Univ." },
  { src: addis, alt: 'Addis Ababa University', name:"Addis Abeba Univ." },
  { src: bule, alt: 'Bule Hora University', name:"Bule Hora Univ." },
  { src: central, alt: 'Central',name:"Central" },
  { src: ethioairline, alt: 'Ethiopian Airlines',name:"Ethiopian Airline" },
  { src: insa, alt: 'INSA', name:"NISS" },
  { src: sam, alt: 'SAM',name:"SAM" },
  { src: city, alt: 'City Administration',name:"City Admin" },
  { src: experiance, alt: 'Experience',name:"Experience" },
  { src: nurbelay, alt: 'Nurbelay',name:"Nurbelay" },
  { src: eco, alt: 'Eco', name:"Eco" },
  { src: habesha, alt: 'Habesha',name:"Habesha" },
  { src: remeda, alt: 'Remeda',name:"Remeda" },
  { src: ecole, alt: 'Ecole',name:"Ecole" },
  { src: rift, alt: 'Rift Valley',name:"Rift Valley" },
  { src: elsewedy, alt: 'Elsewedy Electric',name:"Elsewedy" },
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
    <main className="bg-white overflow-x-hidden">
      
      {/* PROFESSIONAL SLIDESHOW LANDING PAGE */}
      <section className="relative w-full h-screen overflow-hidden bg-slate-900">
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
        priority
        className="object-cover transition-transform duration-[10000ms] ease-linear"
        style={{ transform: index === currentSlide ? 'scale(1.15)' : 'scale(1.0)' }}
      />
      <div className="absolute inset-0 bg-black/50" /> 
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        {/* Staggered Animations */}
        <p className={`text-[#E5A343] font-bold tracking-[0.5em] uppercase text-xs md:text-sm mb-6 transition-all duration-1000 delay-300 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {slide.location}
        </p>
        <h1 className={`text-4xl md:text-6xl lg:text-5xl font-[800] text-white tracking-[-0.04em] leading-[0.9] max-w-5xl mb-10 transition-all duration-1000 delay-500 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {slide.title}
        </h1>
        <div className={`h-[6px] w-24 bg-[#E5A343] transition-all duration-1000 delay-700 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
      </div>
    </div>
  ))}

  {/* Progress Bar Indicators */}
  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
    {slides.map((_, i) => (
      <button 
        key={i} 
        onClick={() => setCurrentSlide(i)}
        className="group relative h-1 w-12 bg-white/20 overflow-hidden"
      >
        <div className={`absolute inset-0 bg-[#E5A343] transition-transform duration-[5000ms] linear ${i === currentSlide ? "translate-x-0" : "-translate-x-full"}`} />
      </button>
    ))}
  </div>
</section>

      {/* 1. WHO WE ARE */}
      <section id="about" className="w-full py-24 lg:py-40 bg-[#f8f9fa] font-poppins overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      
      {/* Content Side - Spans 7 columns on desktop */}
      <div className="lg:col-span-7 order-2 lg:order-1">
        <div className="space-y-8">
          {/* Section Label */}
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#E5A343]" />
            <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.5em] text-[#E5A343] antialiased">
              Since 1992
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-6xl font-[800] text-slate-900 tracking-[-0.04em] leading-[0.9] antialiased">
            Who We <span className="text-slate-400">Are.</span>
          </h2>

          {/* Narrative Paragraphs */}
          <div className="space-y-8 text-slate-600">
            <p className="text-lg lg:text-[20px] leading-relaxed font-light tracking-tight border-l-4 border-slate-900 pl-6 py-2">
              A multidisciplinary firm based in Ethiopia, dedicated to providing 
              innovative, sustainable, and integrated solutions in architecture 
              and engineering.
            </p>

            <div className="pt-4">
              <h3 className="text-[11px] font-[800] uppercase tracking-[0.3em] text-slate-900 mb-4">
                Our Approach
              </h3>
              <p className="text-[15px] lg:text-[16px] leading-[1.8] font-normal text-slate-500 max-w-2xl">
                We combine visionary design with technical excellence to deliver impactful 
                projects. Our designs balance aesthetics, function, and environmental 
                responsibility, ensuring every project meets technical and social expectations.
              </p>
            </div>
          </div>

          {/* Team Link - Styled as a Button */}
          <div className="pt-8">
            <Link href="/staff" className="inline-flex items-center gap-6 group">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-slate-900 group-hover:text-[#E5A343] transition-colors">
                Meet our team
              </span>
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 group-hover:border-[#E5A343] transition-all">
                <ArrowRight size={18} className="text-slate-900 group-hover:text-[#E5A343] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Side - Spans 5 columns on desktop */}
      <div className="lg:col-span-5 order-1 lg:order-2">
        <div className="relative">
          {/* Decorative Background Box */}
          <div className="absolute -top-6 -right-6 w-full h-full border-[1px] border-slate-200 z-0" />
          
          <div className="relative h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden z-10 shadow-2xl">
             <ImageWithLoader 
              src={tower} 
              alt="HH Consulting Architects project" 
              fill
              className="object-cover scale-100 hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Floating Stat or Label */}
          <div className="absolute -bottom-8 -left-8 bg-white p-8 hidden md:block z-20 shadow-xl border-t-4 border-[#E5A343]">
            <p className="text-4xl font-[800] text-slate-900 mb-1">30+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years of Experience</p>
          </div>
        </div>
      </div>

    </div>
  </div>
     </section>

      {/* 2. MISSION, VISION, VALUE */}
      <section id="profile" className="w-full py-12 lg:py-18 bg-white font-poppins border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
    
    {/* Section Header */}
    <div className="mb-16 md:mb-24">
      <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.5em] text-[#E5A343] block mb-4 antialiased">
        Company Philosophy
      </span>
      <h2 className="text-4xl lg:text-6xl font-[800] text-slate-900 tracking-[-0.03em] leading-none mb-8 antialiased">
        Our <span className="text-[#E5A343]">Cores.</span>
      </h2>
      <div className="h-[4px] w-12 bg-slate-900" />
    </div>

    {/* The Technical Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-slate-200">
      
      {/* Mission Card */}
      <div className="group relative p-10 md:p-14 border-r border-b border-slate-200 hover:bg-slate-50 transition-all duration-500">
        <div className="mb-10 text-[#E5A343]">
          <Target size={40} strokeWidth={1} />
        </div>
        <h3 className="text-2xl font-[700] tracking-tight text-slate-900 mb-6 uppercase">
          Mission
        </h3>
        <p className="text-slate-500 text-[15px] lg:text-[16px] leading-[1.8] font-normal">
          HH Consulting Architects and Engineers PLC is driven by a passion for automated project management solutions with architectural and civil engineering services.
        </p>
      </div>

      {/* Vision Card */}
      <div className="group relative p-10 md:p-14 border-r border-b border-slate-200 hover:bg-slate-50 transition-all duration-500">
        <div className="mb-10 text-[#E5A343]">
          <Lightbulb size={40} strokeWidth={1} />
        </div>
        <h3 className="text-2xl font-[700] tracking-tight text-slate-900 mb-6 uppercase">
          Vision
        </h3>
        <p className="text-slate-500 text-[15px] lg:text-[16px] leading-[1.8] font-normal">
          We strive to achieve innovative project management and quality control solutions for the local construction industry by creating partnership and creative working environments.
        </p>
      </div>

      {/* Value Card - Dark Accent */}
      <div className="group relative p-10 md:p-14 border-r border-b border-slate-900 bg-[#1a2e44] text-white overflow-hidden">
        {/* Subtle Decorative Background Text */}
        <span className="absolute -bottom-4 -right-4 text-white/[0.03] text-8xl font-black select-none">
          VALUE
        </span>
        
        <div className="mb-10 text-[#E5A343]">
          <Diamond size={40} strokeWidth={1} />
        </div>
        <h3 className="text-2xl font-[700] tracking-tight mb-8 uppercase">
          Value
        </h3>
        <ul className="space-y-5">
          {[
            "Appropriate usage of time",
            "Developing behavioral qualities",
            "Serving customers in kind"
          ].map((val, i) => (
            <li key={i} className="flex items-center gap-4 group/item">
              <div className="h-[1px] w-4 bg-[#E5A343] transition-all group-hover/item:w-8" />
              <span className="text-slate-300 text-[14px] lg:text-[15px] font-medium tracking-wide">
                {val}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
      </section>

      {/* 3. EXPERTISE */}
      <section id="expertise" className="w-full py-12 lg:py-18 bg-white font-poppins border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
    
    {/* Section Header */}
    <div className="mb-20">
      <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.5em] text-[#E5A343] block mb-4 antialiased">
        Disciplines
      </span>
      <h2 className="text-4xl lg:text-6xl font-[800] text-slate-900 tracking-[-0.03em] leading-none mb-8 antialiased">
        Professional <span className="text-slate-400">Expertise.</span>
      </h2>
      <div className="h-[4px] w-12 bg-slate-900" />
    </div>

    {/* Expertise Grid - Technical Blueprint Style */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
      {[
        {
          icon: <Ruler size={36} strokeWidth={1} />,
          title: "Architectural & Engineering",
          desc: ["Architectural Design", "Structural Engineering", "Electrical Systems", "Sanitary & Plumbing"]
        },
        {
          icon: <Pickaxe size={36} strokeWidth={1} />,
          title: "Infrastructure",
          desc: ["Road & Highway Design", "Bridges", "Irrigation", "Master Planning"]
        },
        {
          icon: <TreePine size={36} strokeWidth={1} />,
          title: "Urban & Environmental",
          desc: ["Regional Master Plans", "EIA Assessments", "Landscape Design", "Topographic Surveys"]
        },
        {
          icon: <FileSearch size={36} strokeWidth={1} />,
          title: "Feasibility & Planning",
          desc: ["Public/Private Feasibility", "Strategic Site Analysis", "Cost Estimations"]
        },
        {
          icon: <Briefcase size={36} strokeWidth={1} />,
          title: "Project Management",
          desc: ["Contract Administration", "Quality Control", "Site Supervision", "Scheduling"]
        }
      ].map((item, index) => (
        <div 
          key={index} 
          className="group p-10 lg:p-14 border-r border-b border-slate-200 hover:bg-[#1a2e44] transition-all duration-700 ease-in-out relative overflow-hidden"
        >
          {/* Subtle Background Number */}
          <span className="absolute top-6 right-8 text-slate-100 group-hover:text-white/5 text-5xl font-[800] transition-colors">
            0{index + 1}
          </span>

          <div className="relative z-10">
            {/* Icon - Gold Accent */}
            <div className="mb-10 text-[#E5A343] group-hover:text-white transition-colors duration-500">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-[700] tracking-tight text-slate-900 group-hover:text-white mb-6 uppercase leading-snug">
              {item.title}
            </h3>

            {/* Disciplines List */}
            <ul className="space-y-3">
              {item.desc.map((sub, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-[1px] w-3 bg-[#E5A343] group-hover:bg-white/40 group-hover:w-5 transition-all" />
                  <span className="text-slate-500 group-hover:text-slate-300 text-[13px] lg:text-[14px] font-medium tracking-wide">
                    {sub}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4. CERTIFICATIONS */}
      <section id="certificates" className="w-full py-12 lg:py-18 bg-slate-50 font-poppins border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
    
    {/* Section Header */}
    <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
      <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.5em] text-[#E5A343] block mb-4 antialiased">
        Accreditations
      </span>
      <h2 className="text-4xl lg:text-6xl font-[800] text-slate-900 tracking-[-0.03em] leading-none mb-8 antialiased">
        Our <span className="text-[#E5A343]">Certifications.</span>
      </h2>
      <div className="h-[4px] w-12 bg-slate-900" />
    </div>

    {/* Certifications Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {certificates.map((cert, index) => (
        <div key={index} className="group flex flex-col gap-6">
          
          {/* The Frame */}
          <div className="relative aspect-[4/3] bg-white border border-slate-200 flex items-center justify-center p-8 transition-all duration-700 ease-in-out group-hover:border-[#E5A343] group-hover:-translate-y-2">
            
            {/* Subtle Index Number */}
            <span className="absolute top-4 left-4 text-[10px] font-bold text-slate-200 group-hover:text-[#E5A343]/30 transition-colors">
              REF. 0{index + 1}
            </span>

            {/* Certificate Image */}
            <div className="relative w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700">
              <ImageWithLoader 
                src={cert.src} 
                alt={cert.alt} 
                fill 
                className="object-contain p-2" 
              />
            </div>

            {/* Architectural Border Accents (corners) */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-transparent group-hover:border-[#E5A343] transition-all" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-transparent group-hover:border-[#E5A343] transition-all" />
          </div>

          {/* Technical Label Underneath */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[11px] font-[800] uppercase tracking-[0.2em] text-slate-900 group-hover:text-[#E5A343] transition-colors">
              {cert.alt}
            </h4>
            <div className="h-[1px] w-8 bg-slate-300 group-hover:w-full group-hover:bg-[#E5A343] transition-all duration-500" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Verified Accreditation
            </p>
          </div>

        </div>
      ))}
    </div>
  </div>
</section>

      {/* 5. CLIENTS */}
      <section id="clients" className="w-full py-12 lg:py-18 bg-white border-t border-gray-100 font-poppins overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
    {/* Section Header */}
    <div className="text-left">
      <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.5em] text-[#E5A343] block mb-4 antialiased">
        Collaborations
      </span>
      <h2 className="text-4xl lg:text-6xl font-[800] text-slate-900 tracking-[-0.03em] leading-none mb-6 antialiased">
        Partners & <span className="text-[#E5A343]">Clients.</span>
      </h2>
      <div className="h-[4px] w-12 bg-slate-900" />
    </div>
  </div>

  {/* Slider Container */}
  <div className="relative flex overflow-hidden border-y border-slate-100 bg-slate-50/30 py-16">
    <div className="flex animate-infinite-scroll whitespace-nowrap">
      {[...partners, ...partners].map((partner, index) => (
        <div 
          key={index} 
          className="flex flex-col w-[180px] md:w-[260px] items-center justify-center px-6 md:px-10 group cursor-pointer"
        >
          {/* CIRCULAR CONTAINER - NO BORDER / NO SHADOW */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out group-hover:bg-slate-50 mb-6">
            {/* LOGO - LARGER SIZE / ORIGINAL COLORS */}
            <div className="relative w-3/4 h-3/4 opacity-100 transition-all duration-500">
              <ImageWithLoader
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain scale-100 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Partner Name Label */}
          <div className="flex flex-col items-center">
            <p className="text-[10px] md:text-[11px] font-[700] uppercase tracking-[0.25em] text-slate-500 group-hover:text-[#E5A343] transition-colors duration-500">
              {partner.name}
            </p>
            {/* Animated Underline */}
            <div className="h-[1.5px] w-0 group-hover:w-full bg-[#E5A343] transition-all duration-500 mt-2" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    <section id="feasibility_study" className="w-full py-12 lg:py-18 bg-white border-t border-gray-100 font-poppins">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
    
    {/* Section Header */}
    <div className="mb-16">
      <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.5em] text-[#E5A343] block mb-4 antialiased">
        Technical Excellence
      </span>
      
      {/* Poppins looks incredible at weight 800 with tight tracking */}
      <h2 className="text-4xl lg:text-6xl font-[800] text-slate-900 tracking-[-0.03em] leading-[1.1] mb-6 antialiased">
        Feasibility <span className="text-[#E5A343]">Study.</span>
      </h2>
      <div className="h-[4px] w-12 bg-slate-900" />
    </div>

    {/* Intro Text: Poppins weight 300/400 is very clean */}
    <div className="max-w-3xl mb-20">
      <p className="text-lg lg:text-[22px] text-slate-500 leading-relaxed font-light tracking-tight">
        Our resident engineer oversees critical environmental operations, ensuring 
        compliance and strategic alignment across all project phases.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-24 gap-x-12 gap-y-16">
      {[
        "Organizing high-level events and drafting comprehensive environmental policies",
        "Liaising with review board stakeholders to facilitate formal environmental assessments",
        "Strategic communication with stakeholders and the public regarding EIA processes",
        "Technical data analysis and professional report preparation",
        "Establishing detailed budgets and strategic work plans for project assessments",
        "Drafting policy and position papers on environmental impact assessment methodologies"
      ].map((service, index) => (
        <div key={index} className="group flex flex-col gap-5 border-l-[1px] border-slate-200 pl-8 hover:border-[#E5A343] transition-all duration-500">
          
          <span className="text-[11px] font-bold text-slate-300 group-hover:text-[#E5A343] transition-colors uppercase tracking-[0.2em]">
            Step 0{index + 1}
          </span>
          
          {/* Poppins Body: Weight 400 is perfectly balanced for readability */}
          <p className="text-slate-700 text-[15px] lg:text-[17px] leading-[1.7] font-normal tracking-wide text-balance">
            {service}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 6. LOCATION & CONTACT */}
    <section id="location" className="px-4 md:px-10 lg:px-20 py-12 md:py-18 bg-slate-900 text-white">
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