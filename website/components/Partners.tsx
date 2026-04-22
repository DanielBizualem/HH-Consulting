
import Image,{ ImageProps } from 'next/image';
import { useState } from 'react';
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
export default function Partners(){
    return (
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
  <div className="relative flex overflow-hidden border-y border-slate-100 bg-slate-50/30 py-4">
    <div className="flex animate-infinite-scroll whitespace-nowrap">
      {[...partners, ...partners].map((partner, index) => (
        <div 
          key={index} 
          className="flex flex-col w-[180px] md:w-[260px] items-center justify-center px-6 md:px-10 group cursor-pointer"
        >
          {/* CIRCULAR CONTAINER - NO BORDER / NO SHADOW */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out group-hover:bg-slate-50 mb-6">
            {/* LOGO - LARGER SIZE / ORIGINAL COLORS */}
            <div className="relative w-3/4 h-3/4 opacity-100 transition-all duration-300">
              <ImageWithLoader
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain scale-100 group-hover:scale-110 transition-transform duration-300"
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
    )
}