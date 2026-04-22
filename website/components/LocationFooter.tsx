

import { Globe, Phone, MapPin, Mail } from "lucide-react"
import Image,{ ImageProps } from 'next/image';
const facebook = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065499/facebookIcon_ykqzvg.png'
const youtube = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065768/youtubeIcon01_bo9il6.png'
const twitter = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065768/twitterIcon_zuysqm.png'
const linkedin = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065513/linkedinIcon_vxqebf.png'

const socialMedia = [
    {src:facebook, alt:'facebook',href:"https://web.facebook.com/profile.php?id=100076434397072"},
    {src:youtube, alt:'youtube',href:"https://www.youtube.com/@hhconsulting208"},
    {src:twitter, alt:'twitter',},
    {src:linkedin, alt:'linkedin'},
  ]
  

export default function LocationFooter(){
    return (
        <section id="location" className="relative overflow-hidden px-4 md:px-10 lg:px-20 py-16 md:py-24 bg-[#050914]  font-sans text-slate-200 antialiased">
  
  {/* --- STRIPE-STYLE BACKGROUND LAYER --- */}
  <div className="absolute inset-0 z-0">
    {/* 1.5px Dotted Grid */}
    <div 
      className="absolute inset-0 opacity-[0.15]" 
      style={{ 
        backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #94a3b8 1.5px, transparent 0)`,
        backgroundSize: '30px 30px', 
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }}
    ></div>
    
    {/* Ambient Glows */}
    <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"></div>
    <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full"></div>
  </div>

  {/* --- CONTENT LAYER --- */}
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
    
    {/* Contact Details Section */}
    <div className="order-1">
      <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-8 md:mb-12 text-center md:text-left">
        Location
      </h2>
      <div className="space-y-8 md:space-y-10">
        <ContactItem 
          icon={<MapPin size={22} className="text-blue-400" />} 
          title="Address" 
          content="Ethiopia, Addis Ababa, 22 Mazoriya, Efrata building, 3rd floor" 
        />
        <ContactItem 
          icon={<Phone size={22} className="text-blue-400" />} 
          title="Phone" 
          content={
            <div className="flex flex-wrap text-sm md:text-lg text-slate-300 gap-1">
              <span>011 8683830</span>
              <span>||</span>
              <span>011 6672951</span>
              <span>||</span>
              <span>+251 913592121</span>
              <span>||</span>
              <span>+251 911228253</span>
              <span>||</span>
              <span>+251 966935979</span>
            </div>
          } 
        />
        <ContactItem 
          icon={<Mail size={22} className="text-blue-400" />} 
          title="Email" 
          content={<span className="text-sm md:text-lg break-all text-slate-300">hhconsultingarchitectengineers@gmail.com</span>} 
        />
        <ContactItem 
          icon={<Globe size={22} className="text-blue-400" />} 
          title="Website" 
          content={<span className="text-slate-300">www.hhconsulting.et</span>} 
        />
      </div>
    </div>
    
    {/* Map and Socials Section */}
    <div className="flex flex-col gap-10 order-2">
      <div className="w-full h-64 md:h-96 bg-slate-950/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.548456079979!2d38.783103!3d9.013627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859846664d6b%3A0xe74f4b2383c2763c!2sEfrata%20building!5e0!3m2!1sen!2set!4v1712990000000!5m2!1sen!2set" 
          className="absolute inset-0 w-full h-full duration-700"
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
        <div className="grid grid-cols-4 gap-4 max-w-[320px] mx-auto md:mx-0">
          {socialMedia.map((social, index) => (
            <a 
              key={index} 
              href={social.href || "#"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center justify-center transition-all bg-white/[0.03] backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/10"
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
    )
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