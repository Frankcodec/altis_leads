import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, List, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Services', 'Process', 'Works', 'Pricing', 'Reviews', 'FAQ', 'Blog'];

  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {/* Replace with your <img src="/logo.png" /> */}
          <img src="/logo-dark.png" alt="Logo" className=" h-6" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-orange-500 transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Toggle & Desktop CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex bg-neutral-900 text-white px-6 py-2.5 rounded-full items-center gap-2 hover:bg-neutral-800 transition-all group text-sm font-medium">
            Contact
            <div className="bg-white rounded-full p-0.5 group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </div>
          </button>

          {/* Mobile Menu Button - Styled as per your screenshot */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden bg-neutral-900 text-white p-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 bg-white border border-gray-100 p-6 flex flex-col gap-4 lg:hidden shadow-2xl rounded-2xl"
          >
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-lg font-medium text-gray-800 pb-2 border-b border-gray-50 hover:text-orange-500 transition-colors">
                {link}
              </a>
            ))}
            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold mt-2">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;