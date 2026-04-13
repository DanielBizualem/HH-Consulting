"use client"
import React, { useState } from 'react';
import Image,{ ImageProps } from 'next/image';
import { Users, Lightbulb, Award, Star,Wallet } from 'lucide-react';

// Images - update these paths to your project structure
import recognition from '../../public/staff_recognition.png';
import paymentDept from '../../public/payement_dept.png';
import designDept from '../../public/design_dept.png';

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

export default function StaffPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header with Company Logo Background */}
      <header className="pt-40 pb-20 bg-[#f8fafc] border-b border-slate-100 relative overflow-hidden">
        {/* Subtle large logo as background element */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] scale-150 rotate-[-10deg]">
           {/* Add your logo image component here for background effect, e.g.:
           <Image src="/your-logo.png" alt="" width={800} height={800} /> 
           */}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 text-center lg:text-left">
          <div className="flex gap-2 items-center justify-center lg:justify-start mb-6">
            <Users size={18} className="text-blue-600" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">Our Teams</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter max-w-2xl mx-auto lg:mx-0">
            Meet the HH Consulting <span className=" font-semibold text-blue-600">Teams</span>
          </h1>
          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
            A diverse and multidisciplinary collective of architects, engineers, and project management professionals dedicated to visionary design and technical excellence across Ethiopia.
          </p>
        </div>
      </header>

      {/* 2. Department Sections Grid */}
      <section className="px-6 lg:px-20 py-24 max-w-7xl mx-auto space-y-24">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Design Department Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={24} className="text-blue-500" />
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">Design</h2>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Design & Architecture Department
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our visionaries translate abstract concepts into tangible, resilient architectural and infrastructure designs, balancing aesthetics, function, and sustainability.
            </p>
          </div>
          
          {/* Design Department Image */}
          <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200">
            <ImageWithLoader 
              src={designDept}
              alt="Design Department at work"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Payment Department */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Payment Department Image */}
          <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200">
            <ImageWithLoader 
              src={paymentDept}
              alt="Payment Department processing"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Payment Department Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div  />
              <Wallet size={24} className="text-blue-500" />
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">Payment</h2>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Contract & Payment Department
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ensuring efficient and economical project management through meticulous contract administration, cost estimation, and quality control solutions.
            </p>
          </div>
        </div>

      </section>

      {/* 3. Staff Recognition Feature Section */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
        {/* Star icon effect */}
        <div className="absolute top-10 right-10 opacity-10">
          <Star size={120} className="text-yellow-400" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-12 gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Award size={24} className="text-blue-400" />
              <h2 className="text-xs font-black tracking-[0.3em] uppercase text-blue-300">Recognition</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
              Celebrating Excellence & Innovation
            </h3>
            <p className="text-slate-300 leading-relaxed">
              We foster a partnership-driven and creative work environment. Recognizing outstanding performance is fundamental to promoting quality control solutions and achieving efficient project delivery.
            </p>
          </div>
          
          {/* Image - now with professional borders and shadows */}
          <div className="lg:col-span-7 relative aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-slate-700 shadow-[0_30px_70px_rgba(59,130,246,0.1)]">
            <ImageWithLoader 
              src={recognition}
              alt="HH Consulting Staff Recognition Ceremony"
              fill
              className="object-cover transition-all duration-700 hover:scale-105"
            />
            {/* Overlay for professionalism */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/10" />
          </div>
        </div>
      </section>

      {/* 4. Company Cores Recap (Optional, for continuity) */}
      <section id="cores-recap" className="px-6 lg:px-20 py-24 max-w-7xl mx-auto text-center">
          <div className="p-16 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex gap-2 items-center mb-6 md:mb-0">
                  <Star size={16} className="text-blue-500" />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">Driven by values</span>
              </div>
              <p className="text-sm font-bold text-slate-900 flex items-center gap-3">
                  <Star size={16} className="text-slate-400" /> Passion for automated solutions
              </p>
              <p className="text-sm font-bold text-slate-900 flex items-center gap-3">
                  <Star size={16} className="text-slate-400" /> Contribution to efficient project management
              </p>
              <p className="text-sm font-bold text-slate-900 flex items-center gap-3">
                  <Star size={16} className="text-slate-400" /> Promotes quality control solutions
              </p>
          </div>
      </section>
    </main>
  );
}