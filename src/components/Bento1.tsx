import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const LaunchSupportCard = () => {
  // Increased bar count for full-width coverage
  const bars = [0.4, 0.8, 0.5, 0.9, 0.6, 1.0, 0.7, 0.4, 0.9, 0.6, 0.8, 0.5, 0.7, 0.4, 1.0, 0.6, 0.8];

  return (
    <div className="w-full max-w-md bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
      
      {/* TOP SECTION: LAUNCH */}
      <div className="relative p-8 pb-4 flex justify-between items-start overflow-hidden">
        <div className="z-10">
          <div className="flex items-center gap-2 mb-2">
            <Rocket size={16} className="text-[#FF5100]" />
            <span className="text-[#FF5100] font-bold text-[10px] tracking-[0.2em] uppercase">Production</span>
          </div>
          <h3 className="text-3xl font-black font-light text-slate-900 leading-none">
            Launch <br /> Sequence
          </h3>
        </div>

        

        {/* Rocket Flame Background Animation */}
        <div className="absolute -top-10 -right-10 pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-48 h-48 blur-[50px] rounded-full"
          />
        </div>
      </div>

      {/* BOTTOM SECTION: SUPPORT MONITOR */}
      <div className="p-8 pt-4">
        

        {/* Full-Width Activity Waveform */}
        <div className="flex items-end gap-1.5 h-16 w-full">
          {bars.map((val, i) => (
            <motion.div
              key={i}
              initial={{ height: "10%" }}
              animate={{ height: `${val * 100}%` }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 0.8, 
                delay: i * 0.05 
              }}
              className="flex-1 bg-gradient-to-t from-[#FF5100] to-[#ff9e75] rounded-full min-w-[4px]"
            />
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
            <span className="text-[10px] text-slate-400 font-mono">0.0ms Latency</span>
            <span className="text-[10px] text-slate-400 font-mono">100% Uptime</span>
        </div>
      </div>
    </div>
  );
};

export default LaunchSupportCard;