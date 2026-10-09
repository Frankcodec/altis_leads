import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const PRINCIPLES = [
  { label: "Start with the market", value: "01" },
  { label: "Focus on strong-fit prospects", value: "02" },
  { label: "Build a useful next step", value: "03" },
];

const StatItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-4xl md:text-5xl font-semibold text-orange-500 tracking-tighter">
        {value}
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
          <span className="text-orange-500 font-bold">Altis</span> helps local businesses make their customer-acquisition effort more deliberate. Instead of relying only on posts, referrals, or chance discovery, we look for realistic opportunities, understand why they matter, and build a sensible way to approach them.
        </motion.h2>

        {/* Stats Container */}
        <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm border border-dashed border-gray-200 rounded-[32px] p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-center">
            {PRINCIPLES.map((stat, index) => (
              <StatItem key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
