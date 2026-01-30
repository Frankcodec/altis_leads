import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';



const IntegrationPipeline = () => {
  // SVG Path definitions for the 3 streams
  const paths = [
    "M 50 50 L 250 50 C 350 50, 350 150, 450 150", // Top
    "M 50 150 L 450 150",                         // Middle
    "M 50 250 L 250 250 C 350 250, 350 150, 450 150", // Bottom
  ];

  return (
    <div className="relative w-full max-w-3xl h-[400px] bg-slate-50 rounded-[3rem] flex items-center justify-center p-12 overflow-hidden border border-slate-200">
      
      {/* 1. The SVG Connector Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 300">
        {paths.map((path, i) => (
          <g key={i}>
            {/* Background static path */}
            <path
              d={path}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Animated Pulse (The "Something" passing through) */}
            <motion.path
              d={path}
              fill="none"
              stroke="#FF5100"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
              animate={{ 
                pathOffset: [0, 1],
                opacity: [0, 1, 1, 0] 
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}
      </svg>

      {/* 2. Source Icons (Left) */}
      <div className="absolute left-12 flex flex-col justify-between h-[220px] z-10">
        {[
          { color: 'bg-blue-500', image: 'tool.png' }, // Dropbox Style
          { color: 'bg-purple-600', image: 'tool1.png' }, // T-Style
          { color: 'bg-amber-400', image: 'tool2.png' }  // Drive Style
        ].map((source, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className={` w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-slate-200`}
          >
            <img src={source.image} alt={`Source ${i}`} className="w-10 h-10" />
          </motion.div>
        ))}
      </div>

      {/* 3. The Main Hub (Right) */}
      <div className="absolute right-12 z-10">
        <div className="relative flex items-center justify-center">
          {/* Pulsing Aura */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute w-32 h-32 bg-[#FF5100] rounded-full blur-3xl"
          />
          
          {/* Central Hub Orb */}
          <motion.div 
            className="relative w-24 h-24 bg-[#FF5100] rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
            style={{ boxShadow: '0 0 40px rgba(255, 81, 0, 0.4)' }}
          >
            <Sparkles className="w-10 h-10 text-white fill-white " />
          </motion.div>
        </div>
      </div>

     
    </div>
  );
};

export default IntegrationPipeline;