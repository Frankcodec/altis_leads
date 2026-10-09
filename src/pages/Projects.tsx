import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Footer from '../components/Footer';
import PortfolioSection from '../components/Portfoliosection';
import FAQSection from '../components/FAQSection';

const WorksHeader = () => {
  return (
    <>
        <section className="relative pt-24 pb-12 bg-white overflow-hidden">
      {/* 1. Consistent Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 2. "Selected Works" Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-dashed border-gray-300 bg-white shadow-sm text-sm font-medium text-gray-600 mb-8"
        >
          <Plus className="w-3.5 h-3.5 text-orange-500" />
          <span className="tracking-tight">Where This Fits</span>
        </motion.div>

        {/* 3. Main Title & Description */}
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold text-neutral-900 leading-[0.95] tracking-tighter mb-8"
          >
            Find Opportunities <br />
            <span className="text-orange-500 italic">Before They Find You</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-2xl max-w-2xl leading-relaxed"
          >
            A practical customer-acquisition process for local businesses that want to identify strong-fit prospects and approach them with more purpose.
          </motion.p>
        </div>
      </div>
    </section>
    <PortfolioSection />
    <FAQSection />
    <Footer />
    </>
  );
};

export default WorksHeader;
