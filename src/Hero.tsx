import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#FCFCFC] overflow-hidden">
      {/* 1. Background Image - Positioned from the very top */}
      <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 pointer-events-none z-0 hidden lg:block overflow-visible">
        <motion.img 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/gradient.jpeg" 
          alt=""
          className="w-full h-full object-cover object-right-top overflow-visible"
        />
      </div>

      {/* 2. Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
           backgroundSize: '32px 32px' }} />

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Text Content - Takes up 8/12 columns on desktop */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-gray-300 bg-white/50 text-sm font-medium text-gray-600 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for work
            </motion.div>

            {/* Headline */}
            <div className="relative mb-6">
              <h1 className="text-4xl md:text-7xl lg:text-[100px] font-bold tracking-tight text-neutral-900 leading-[1.05]">
                Premium Website  <br />
                That <span className="text-orange-500">Stand Out!</span>
                
              </h1>

              {/* Magic Wand: Only on Tab/Mobile */}
              <div className="lg:hidden absolute -right-10 top-1/4 -translate-y-1/2 bg-orange-500 p-3 rounded-2xl shadow-xl text-white">
                <Sparkles size={24} />
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-10">
              We design thoughtful websites and digital experiences for founders and companies, 
              helping brands grow, engage their audience and stand out online.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-4">
              <button className="bg-neutral-900 text-white pl-8 pr-2 py-2 rounded-full flex items-center gap-8 hover:bg-neutral-800 transition-all shadow-2xl group">
                <span className="text-xl font-medium">Book a Call</span>
                <div className="bg-white rounded-full p-3 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-6 h-6 text-black" />
                </div>
              </button>
              <p className="text-gray-400 text-sm ml-4 font-medium uppercase tracking-widest">Let's talk strategy</p>
            </div>
          </div>
          
          {/* Empty Space for Grid alignment on Desktop */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </main>
    </div>
  );
};

export default Hero;