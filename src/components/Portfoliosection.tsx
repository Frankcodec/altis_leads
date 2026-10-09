import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const SERVICE_TAGS = [
  "Local Market Research", "Prospect Prioritization", "Buying Triggers",
  "Outreach Angles", "Referral Sources", "Follow-up Planning"
];

const ROW_1 = [
  { id: 1, title: "Home Services", image: "/1.png", color: "bg-[#F3F3F3]" },
  { id: 2, title: "Property Care", image: "/2.png", color: "bg-[#F1E9FF]" },
  { id: 3, title: "Food & Hospitality", image: "/3.png", color: "bg-[#111111]" },
  { id: 4, title: "Professional Services", image: "/4.png", color: "bg-[#2ABEB1]" },
];

const ROW_2 = [
  { id: 5, title: "Contractors", image: "/5.png", color: "bg-[#1A1A1A]" },
  { id: 6, title: "Local Retail", image: "/6.png", color: "bg-[#FFEFD6]" },
  { id: 7, title: "Marine & Dock", image: "/7.png", color: "bg-zinc-800" },
  { id: 8, title: "Real Estate", image: "/8.png", color: "bg-teal-50" },
];

const ProjectCard = ({ project }: { project: typeof ROW_1[0] }) => (
  <div className="min-w-[60%] sm:min-w-[45%] lg:min-w-[28%] group cursor-pointer px-2 md:px-4">
    <div className={`relative aspect-[16/11] rounded-[20px] md:rounded-[32px] overflow-hidden ${project.color} shadow-sm transition-all duration-500`}>
      <img 
        src={project.image} 
        alt={`Illustrative opportunity area for ${project.title}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="bg-white rounded-full p-2.5 md:p-4 shadow-xl">
          <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 text-black" />
        </div>
      </div>
    </div>
    <div className="mt-3 md:mt-6 flex justify-between items-center px-1">
      <h3 className="text-sm md:text-xl font-bold text-neutral-900 uppercase tracking-tighter">{project.title}</h3>
      <span className="hidden sm:block text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-gray-100 px-3 py-1 rounded-full">
        Opportunity Area
      </span>
    </div>
  </div>
);

const PortfolioSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for the project rows
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section ref={containerRef} className="py-12 md:py-32 bg-white overflow-hidden">
      
      {/* 1. INFINITE MARQUEE (Framer Motion) */}
      <div className="mb-10 md:mb-24 border-y border-gray-100 py-3 md:py-8 bg-white/50 backdrop-blur-sm overflow-hidden flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {/* Duplicate tags for seamless loop */}
          {[...SERVICE_TAGS, ...SERVICE_TAGS].map((tag, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-4 px-3 md:px-6">
              <div className="flex items-center gap-2 md:gap-4 px-4 md:px-8 py-1.5 md:py-3 rounded-full border border-gray-200 bg-white flex-shrink-0 shadow-sm">
                <Sparkles className="w-2.5 h-2.5 md:w-4 md:h-4 text-orange-500 fill-orange-500" />
                <span className="text-[10px] md:text-sm font-black text-neutral-800 uppercase tracking-tight">
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. PROJECT ROWS (Scroll-based Parallax) */}
      <div className="flex flex-col gap-6 md:gap-20">
        <motion.div style={{ x: xLeft }} className="flex will-change-transform">
          {ROW_1.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          <ProjectCard project={ROW_1[0]} /> {/* Visual Buffer */}
        </motion.div>

        <motion.div style={{ x: xRight }} className="flex will-change-transform">
          {ROW_2.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          <ProjectCard project={ROW_2[0]} /> {/* Visual Buffer */}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
