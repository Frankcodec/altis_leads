import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, List, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Change to white after scrolling 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white border-b border-gray-100 py-4 shadow-sm" 
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo-dark.png" alt="Altis" className="h-6 w-auto" />
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {['Services', 'Process', 'Works', 'Pricing'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className={`transition-colors hover:text-orange-500 ${
                scrolled ? "text-gray-600" : "text-gray-700"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className={`hidden lg:flex pl-6 pr-2 py-1.5 rounded-full items-center gap-4 transition-all group text-sm font-medium ${
            scrolled 
              ? "bg-neutral-900 text-white" 
              : "bg-white text-neutral-900 shadow-lg"
          }`}>
            Contact
            <div className={`rounded-full p-2 group-hover:rotate-45 transition-transform duration-300 ${
              scrolled ? "bg-white text-black" : "bg-neutral-900 text-white"
            }`}>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "bg-neutral-900 text-white" : "bg-white text-neutral-900 shadow-md"
            }`}
          >
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 lg:hidden shadow-xl"
          >
            {['Services', 'Process', 'Works', 'Pricing'].map((link) => (
              <a key={link} onClick={() => setIsOpen(false)} href={`#${link.toLowerCase()}`} className="text-lg font-medium text-gray-800">
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;