

import Image,{ ImageProps } from 'next/image';
import { useState } from 'react';
const airline = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065463/airline_exattr.png'
const airline2 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065490/airline02_qmkpb3.png'
const certificate03 = 'https://res.cloudinary.com/djxfy60tt/image/upload/q_auto/f_auto/v1776065831/certificate03_jmsuk0.png'
const certificate04 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065468/certificate04_ixqnru.png'
const certificate05 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065478/certificate05_efwwog.png'
const certificate06 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065512/certificate06_d8yiiy.png'

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

  const certificates = [
    { src: airline, alt: "Ethiopian Airlines Appreciation" },
    { src: airline2, alt: "Regional Appreciation Certificate" },
    { src: certificate03, alt: "ECEAA Membership" },
    { src: certificate04, alt: "Belsty Trading Recognition" },
    { src: certificate05, alt: "Professional Accreditation" },
    { src: certificate06, alt: "Technical Certification" },
  ]
     
export default function Certificate(){
    return (
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
                    
                    

                    {/* Certificate Image */}
                    <div className="relative w-full h-full filter  transition-all duration-700">
                    <ImageWithLoader 
                        src={cert.src} 
                        alt={cert.alt} 
                        fill 
                        className="object-contain" 
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
    )
}