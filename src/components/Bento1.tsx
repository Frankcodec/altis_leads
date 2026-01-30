import { motion } from 'framer-motion';
import { Headset } from 'lucide-react';

const LaunchSupportCard = () => {
  return (
    <div className="w-full max-w-2xl h-full bg-white rounded-[2.5rem] overflow-hidden flex">
      
      {/* LEFT SIDE: LAUNCH SECTION */}
      <div className="relative flex-1 p-8 flex flex-col justify-between border-r border-slate-50 overflow-hidden">
        <div className="z-10">
          
          <h3 className="text-2xl font-black text-slate-900 font-light ">
            Production <br /> Launch
          </h3>
        </div>

        {/* Rocket Flame Animation */}
        <div className="absolute -bottom-10 -right-10 pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 45, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-40 h-40  blur-[60px] rounded-full"
          />
        </div>

        
      </div>

      {/* RIGHT SIDE: SUPPORT SECTION */}
      <div className="relative flex-1  p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-white/10 p-2 rounded-xl">
            <Headset size={20} className="text-[#FF5100]" />
          </div>
          {/* Status Indicator */}
          <div className="flex items-center gap-2  px-3 py-1 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-wider">Live</span>
          </div>
        </div>

        <div>
          <p className="text-slate-400 text-xs font-medium mb-3">Response Activity</p>
          {/* Support Visual: The Audio/Activity Waveform */}
          <div className="flex items-end gap-1 h-10">
            {[0.4, 0.8, 0.5, 0.9, 0.6, 1.0, 0.7, 0.4].map((val, i) => (
              <motion.div
                key={i}
                initial={{ height: "20%" }}
                animate={{ height: `${val * 100}%` }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 0.6, 
                  delay: i * 0.1 
                }}
                className="flex-1 bg-gradient-to-t from-[#FF5100] to-[#ff8147] rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchSupportCard;