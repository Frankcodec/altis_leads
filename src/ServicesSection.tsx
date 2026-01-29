import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Zap, 
  MousePointerClick, 
  Layout, 
  Layers, 
  ShieldCheck, 
  Smartphone, 
  Monitor, 
  Activity 
} from 'lucide-react';

const SERVICES = [
  {
    title: "Landing Page Design",
    description: "We create high-converting landing pages that engage visitors, highlight your value, and drive action. Every page is designed for clarity, impact, and results.",
    tags: [
      { label: "High-Conversion", icon: <ArrowUpRight className="w-3.5 h-3.5" /> },
      { label: "Fast Loading", icon: <Zap className="w-3.5 h-3.5" /> },
      { label: "Strong CTA", icon: <MousePointerClick className="w-3.5 h-3.5" /> }
    ]
  },
  {
    title: "Multi-Page Website Design",
    description: "From small business sites to complex multi-page platforms, we design modern websites that reflect your brand and scale with your goals.",
    tags: [
      { label: "Brand-Focused", icon: <Layout className="w-3.5 h-3.5" /> }
    ]
  },
  {
    title: "Full-Stack Web Development",
    description: "At Altis, we combine design with solid engineering. As full-stack web developers, we build websites that are not only visually refined but also fast, scalable, and reliable.",
    tags: [
      { label: "Secure Backend", icon: <ShieldCheck className="w-3.5 h-3.5" /> }
    ]
  },
  {
    title: "App Development",
    description: "One video, 10 pieces of content — cut into Shorts, Reels, quote cards, and teasers. Perfect for creators who want to stay visible everywhere.",
    tags: [
      { label: "Intuitive UI", icon: <Smartphone className="w-3.5 h-3.5" /> },
      { label: "Cross-Platform", icon: <Monitor className="w-3.5 h-3.5" /> },
      { label: "Smooth Performance", icon: <Activity className="w-3.5 h-3.5" /> }
    ]
  }
];

const ServiceCard = ({ service, index }: { service: typeof SERVICES[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-[#141414] rounded-[32px] p-8 md:p-10 flex flex-col gap-6 group hover:bg-[#1a1a1a] transition-colors duration-300 shadow-2xl"
  >
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        {service.title}
      </h3>
      <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
        {service.description}
      </p>
    </div>

    {/* Tags Grid */}
    <div className="flex flex-wrap gap-3 mt-auto pt-4">
      {service.tags.map((tag, i) => (
        <div 
          key={i} 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#222222] border border-white/5 text-sm font-medium text-gray-300"
        >
          <span className="text-orange-500">{tag.icon}</span>
          {tag.label}
        </div>
      ))}
    </div>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#FCFCFC] overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">
            At Altis, we craft high-performing websites, landing pages, and UI/UX designs tailored for founders and companies. Every project blends strategy, creativity, and usability to deliver digital experiences that engage audiences and elevate brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;