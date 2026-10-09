import { motion } from 'framer-motion';

const DevStatusComponent = () => {
  return (
    <div className="relative flex items-center justify-center h-80 w-full bg-white rounded-3xl overflow-hidden border border-slate-100 p-8">
      {/* Background Dotted Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative">
        
        {/* Main Header Card */}
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 mb-2"
        >
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
            Planning Follow-up
          </h2>
        </motion.div>

        {/* Animated Pointer & Badge Group */}
        <motion.div
          initial={{ x: -40, y: 40, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative ml-12"
        >
          {/* THE MOVING POINTER */}
          <motion.div 
            className="absolute -top-1 -left-6  text-[#FF7043]"
            animate={{ 
              x: [0, 5, 0], 
              y: [0, -8, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1">
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            </svg>
          </motion.div>

          {/* THE TILTED BADGE */}
          <motion.div
            animate={{ rotate: -8 }}
            whileHover={{ rotate: -5, scale: 1.02 }}
            className="bg-[#FF7043] px-8 py-3 rounded-2xl shadow-xl shadow-orange-200"
          >
            <p className="text-white text-xl font-bold whitespace-nowrap italic tracking-wide">
              Next steps are ready!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DevStatusComponent;
