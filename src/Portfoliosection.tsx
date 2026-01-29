import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const SERVICE_TAGS = [
  "Multi-Page Website Design", "UI/UX Design", "Brand-Focused Interfaces", 
  "Responsive & Modern Design", "Fast Delivery", "Design Systems"
];

const ROW_1 = [
  { id: 1, title: "Vandal", image: "/vandal.jpg", color: "bg-[#F3F3F3]" },
  { id: 2, title: "Soma", image: "/soma.jpg", color: "bg-[#F1E9FF]" },
  { id: 3, title: "Flowstate", image: "/flowstate.jpg", color: "bg-[#111111]" },
];

const ROW_2 = [
  { id: 4, title: "Biology", image: "/biology.jpg", color: "bg-[#1A1A1A]" },
  { id: 5, title: "Bearcoin", image: "/bear.jpg", color: "bg-[#FFEFD6]" },
  { id: 6, title: "Vantige", image: "/vantige.jpg", color: "bg-[#2ABEB1]" },
];

const ProjectCard = ({ project }: { project: typeof ROW_1[0] }) => (
  <div className="min-w-[350px] md:min-w-[500px] lg:min-w-[600px] group cursor-pointer px-4">
    <div className={`relative aspect-[16/10] rounded-[32px] overflow-hidden ${project.color}`}>
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="bg-white rounded-full p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform">
          <ArrowUpRight className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
    <div className="mt-6 flex justify-between items-center px-4">
      <h3 className="text-xl font-bold text-neutral-900 uppercase tracking-widest">{project.title}</h3>
      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">View Project</span>
    </div>
  </div>
);

const PortfolioSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Row 1 moves Left, Row 2 moves Right
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      {/* 1. Service Tags Marquee (Top) */}
      <div className="mb-20 overflow-hidden border-y border-gray-100 py-6">
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {[...SERVICE_TAGS, ...SERVICE_TAGS].map((tag, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-2 rounded-full border border-gray-200 bg-white flex-shrink-0">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-bold text-neutral-800 tracking-tight">{tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Interactive Moving Projects Grid */}
      <div className="flex flex-col gap-16">
        {/* Row 1: Moves Left on Scroll */}
        <motion.div style={{ x: xLeft }} className="flex">
          {[...ROW_1, ...ROW_1].map((p, i) => (
            <ProjectCard key={`r1-${i}`} project={p} />
          ))}
        </motion.div>

        {/* Row 2: Moves Right on Scroll */}
        <motion.div style={{ x: xRight }} className="flex">
          {[...ROW_2, ...ROW_2].map((p, i) => (
            <ProjectCard key={`r2-${i}`} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;