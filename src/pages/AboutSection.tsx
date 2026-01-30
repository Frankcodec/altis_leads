import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const STATS = [
  { label: "Landing Pages Optimized", value: 150 },
  { label: "Projects Completed", value: 500 },
  { label: "Websites Delivered", value: 380 },
];

const StatItem = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps approx

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <span className="text-4xl md:text-5xl font-semibold text-orange-500 tracking-tighter">
        {count}+
      </span>
      <span className="text-[13px] md:text-sm font-medium text-gray-600 leading-tight max-w-[120px] md:max-w-full">
        {label}
      </span>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#FCFCFC] overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* About Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-gray-300 bg-white/50 text-sm font-medium text-gray-600 mb-8"
        >
          <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
          <span className="tracking-tight">About</span>
        </motion.div>

        {/* Studio Description */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-[34px] leading-[1.3] font-semibold text-neutral-900 max-w-8xl mb-16"
        >
          <span className="text-orange-500 font-bold">Altis</span> is a digital design studio dedicated to creating thoughtful websites and high–impact digital experiences. We help founders and companies bring their ideas to life through clean, modern design and user–focused interfaces. Every project is crafted to engage audiences, elevate brands, and drive real results.
        </motion.h2>

        {/* Stats Container */}
        <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm border border-dashed border-gray-200 rounded-[32px] p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-center">
            {STATS.map((stat, index) => (
              <StatItem key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;