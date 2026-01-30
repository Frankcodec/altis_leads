import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Zap, MousePointerClick, Layout, ShieldCheck, Smartphone, Monitor, Activity, Star
} from 'lucide-react';

const SERVICES = [
  {
    title: "Landing Page Design",
    description: "We create high-converting landing pages that engage visitors, highlight your value, and drive action. Every page is designed for clarity, impact, and results.",
    tags: [
      { label: "High-Conversion", icon: <ArrowUpRight className="w-3.5 h-3.5" /> },
      { label: "Fast Loading", icon: <Zap className="w-3.5 h-3.5" /> },
      { label: "Strong CTA", icon: <MousePointerClick className="w-3.5 h-3.5" /> }
    ],
    className: "lg:col-span-7" // Larger width
  },
  {
    title: "Multi-Page Website Design",
    description: "From small business sites to complex multi-page platforms, we design modern websites that reflect your brand and scale with your goals.",
    tags: [
      { label: "Brand-Focused", icon: <Layout className="w-3.5 h-3.5" /> }
    ],
    className: "lg:col-span-5" // Smaller width
  },
  {
    title: "Full-Stack Web Development",
    description: "At Altis, we combine design with solid engineering. As full-stack web developers, we build websites that are not only visually refined but also fast, scalable, and reliable.",
    tags: [
      { label: "Secure Backend", icon: <ShieldCheck className="w-3.5 h-3.5" /> }
    ],
    className: "lg:col-span-5" // Smaller width
  },
  {
    title: "App Development",
    description: "One video, 10 pieces of content — cut into Shorts, Reels, quote cards, and teasers. Perfect for creators who want to stay visible everywhere.",
    tags: [
      { label: "Intuitive UI", icon: <Smartphone className="w-3.5 h-3.5" /> },
      { label: "Cross-Platform", icon: <Monitor className="w-3.5 h-3.5" /> },
      { label: "Smooth Performance", icon: <Activity className="w-3.5 h-3.5" /> }
    ],
    className: "lg:col-span-7" // Larger width
  }
];

const ServicesSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#FCFCFC] overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Services Badge */}
        <motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  /* Added w-fit to wrap the text and mx-auto to center it */
  className="w-fit mx-auto flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-gray-300 bg-white/50 text-sm font-medium text-gray-600 mb-8"
>
  <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
  <span className="tracking-tight">Services</span>
</motion.div>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
            At Altis, we craft high-performing websites, landing pages, and UI/UX designs tailored for founders and companies.
          </p>
        </div>

        {/* Uneven Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-[#141414] rounded-[22px] p-8 md:p-7 flex flex-col justify-between min-h-[360px] ${service.className}`}
            >
              <div>
                <h3 className="text-2xl md:text-2xl font-semibold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {service.tags.map((tag, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#222222] border border-white/5 text-[13px] md:text-sm font-medium text-gray-300"
                  >
                    <span className="text-orange-500">{tag.icon}</span>
                    {tag.label}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;