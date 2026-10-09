import { motion } from 'framer-motion';

const DesignCard = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    initialX: (i * 73) % 400 - 200,
    initialY: (i * 127) % 400 - 200,
    targetX: (i * 191) % 400 - 200,
    targetY: (i * 149) % 400 - 200,
    duration: 10 + (i % 10),
  }));

  return (
    <div className="relative h-full w-full rounded-[3rem] overflow-hidden flex items-center justify-center ">
      
      {/* 1. Generative "Noise" Background */}
      <div className="absolute inset-0 z-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: particle.initialX,
              y: particle.initialY,
              opacity: 0 
            }}
            animate={{ 
              y: [null, particle.targetY],
              x: [null, particle.targetX],
              opacity: [0, 0.15, 0] 
            }}
            transition={{ 
              duration: particle.duration,
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-[#FF5100] rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* 2. The Kinetic Text Ribbon (Infinite Loop) */}
      <div className="relative z-10 flex flex-col gap-2 rotate-[-5deg]">
        <div className="flex overflow-hidden w-full whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-6xl font-black italic tracking-tighter text-transparent stroke-text uppercase">
                Market Research •
              </span>
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden w-full whitespace-nowrap">
          <motion.div 
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-6xl font-black italic tracking-tighter text-[#FF5100] uppercase">
                Prioritize & Reach •
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3. Static Overlay Labels */}
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#FF5100]" />
        <span className="text-[10px] text-white font-mono uppercase tracking-[0.3em]">Opportunity Map</span>
      </div>

      

      {/* Tailwind Style for Hollow Text */}
      <style >{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 81, 0, 0.4);
        }
      `}</style>
    </div>
  );
};

export default DesignCard;
