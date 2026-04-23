"use client";
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Certificate as CertIcon, ArrowsOut, X, SealCheck } from "@phosphor-icons/react";

const airline = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065463/airline_exattr.png';
const airline2 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065490/airline02_qmkpb3.png';
const certificate03 = 'https://res.cloudinary.com/djxfy60tt/image/upload/q_auto/f_auto/v1776065831/certificate03_jmsuk0.png';
const certificate04 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065468/certificate04_ixqnru.png';
const certificate05 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065478/certificate05_efwwog.png';
const certificate06 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065512/certificate06_d8yiiy.png';

const ImageWithLoader = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[100px] flex items-center justify-center bg-white overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-10">
          <div className="w-8 h-8 border-2 border-slate-200 border-t-[#E5A343] rounded-full animate-spin" />
        </div>
      )}
      <Image
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        className={`${props.className} ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100 transition-all duration-700'}`}
      />
    </div>
  );
};

const certificates = [
  { src: airline, alt: "Ethiopian Airlines Appreciation", year: "2024" },
  { src: airline2, alt: "Regional Appreciation Certificate", year: "2023" },
  { src: certificate03, alt: "Belsty Trading Recognition", year: "2024" },
  { src: certificate04, alt: "ECEAA Membership", year: "2022" },
  { src: certificate05, alt: "Technical Certificate", year: "Current" },
  { src: certificate06, alt: "Professional Certification", year: "Active" },
];
const a = "ECEAA Membership"

export default function Certificate() {
  const [selectedImg, setSelectedImg] = useState<null | typeof certificates[0]>(null);

  return (
    <section id="certificates" className="w-full py-24 lg:py-32 bg-[#FAFBFC] font-poppins">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* --- Header --- */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-[#E5A343]" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E5A343]">
              Accreditations
            </span>
            <div className="h-px w-8 bg-[#E5A343]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-[800] text-slate-900 tracking-tight leading-none mb-8"
          >
            Our <span className="text-slate-400 font-[300]">Industry</span><span className="text-[#E5A343]"> Trust.</span>
          </motion.h2>
          <div className="h-1 w-12 bg-slate-900 rounded-full" />
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImg(cert)}
            >
              {/* Architectural Frame */}
              <div className="relative aspect-[4/5] bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col p-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#E5A343]/10 group-hover:-translate-y-3">
                
                {/* Image Container */}
                <div className="relative flex-1 w-full overflow-hidden bg-slate-50 rounded-sm">
                   <ImageWithLoader 
                    src={cert.src} 
                    alt={cert.alt} 
                    fill 
                    className="object-contain p-4 group-hover:scale-105" 
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#0F172A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-white">
                      <ArrowsOut size={32} weight="thin" className="animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">View Document</span>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-[#E5A343] transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-transparent group-hover:border-[#E5A343] transition-all duration-500" />
              </div>

              {/* Label */}
              <div className="mt-8 flex justify-between items-start">
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 group-hover:text-[#E5A343] transition-colors">
                    {cert.alt}
                  </h4>
                  <div className="flex items-center gap-2">
                    <SealCheck size={14} weight="fill" className="text-[#E5A343]" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Verified {cert.year}
                    </span>
                  </div>
                </div>
                <CertIcon size={20} weight="thin" className="text-slate-300 group-hover:text-[#E5A343]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0F172A]/95 backdrop-blur-xl p-6 lg:p-20"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button 
              className="absolute top-10 right-10 text-white/50 hover:text-white"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} weight="thin" />
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImg.src} 
                alt={selectedImg.alt} 
                fill 
                className="object-contain" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}