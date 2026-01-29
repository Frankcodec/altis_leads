
export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-white w-full px-6 py-12 mt-10 overflow-hidden">
      {/* Decorative white dots - smaller and more subtle */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Top left dots */}
        <div className="absolute top-8 left-12 flex gap-2">
          <span className="w-0.5 h-0.5 rounded-full bg-white opacity-40"></span>
          <span className="w-1 h-1 rounded-full bg-white opacity-25"></span>
        </div>
        {/* Top right dots */}
        <div className="absolute top-12 right-16 flex gap-1">
          <span className="w-0.5 h-0.5 rounded-full bg-white opacity-30"></span>
          <span className="w-1 h-1 rounded-full bg-white opacity-20"></span>
        </div>
        {/* Bottom left dots */}
        <div className="absolute bottom-32 left-24 flex gap-1">
          <span className="w-1 h-1 rounded-full bg-white opacity-25"></span>
          <span className="w-0.5 h-0.5 rounded-full bg-white opacity-35"></span>
        </div>
        {/* Bottom right dots */}
        <div className="absolute bottom-36 right-32 flex gap-2">
          <span className="w-0.5 h-0.5 rounded-full bg-white opacity-40"></span>
          <span className="w-1 h-1 rounded-full bg-white opacity-25"></span>
        </div>
        {/* Additional scattered dots */}
        <div className="absolute top-1/3 left-1/4">
          <span className="w-1 h-1 rounded-full bg-white opacity-20"></span>
        </div>
        <div className="absolute bottom-1/3 right-1/3 flex gap-3">
          <span className="w-0.5 h-0.5 rounded-full bg-white opacity-30"></span>
          <span className="w-1 h-1 rounded-full bg-white opacity-15"></span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-12 lg:gap-20 max-w-7xl mx-auto mb-16">
        {/* Logo & Description */}
        <div className="flex flex-col items-start gap-5 min-w-[280px] max-w-md">
          <div className="flex items-center gap-2.5 mb-1">
            {/* <div className="w-7 h-7 bg-[#FF5100] rounded-sm" style={{clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)'}}></div> */}
            <img src="./public/altis.png" alt="Altis Logo" className='w-32' />
            <span className="text-2xl font-medium tracking-wide">Altis</span>
          </div>
          <p className="text-gray-400 text-[15px] leading-relaxed">
            Empowering startups to dominate their niche with high-fidelity design, custom full-stack builds, and rapid deployment.
          </p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-5 min-w-[140px]">
          <h3 className="text-gray-500 text-[15px] font-normal">Company</h3>
          <nav className="flex flex-col gap-3.5">
            <a href="#" className="hover:text-[#FF5100] transition-colors text-[15px] text-white font-light">Home</a>
            <a href="#" className="hover:text-[#FF5100] transition-colors text-[15px] text-white font-light">Services</a>
            <a href="#" className="hover:text-[#FF5100] transition-colors text-[15px] text-white font-light">Works</a>
            <a href="#" className="hover:text-[#FF5100] transition-colors text-[15px] text-white font-light">Reviews</a>
            <a href="#" className="hover:text-[#FF5100] transition-colors text-[15px] text-white font-light">FAQ</a>
          </nav>
        </div>

        {/* Legal Pages */}
        <div className="flex flex-col gap-5 min-w-[160px]">
          <h3 className="text-gray-500 text-[15px] font-normal">Legal Pages</h3>
          <nav className="flex flex-col gap-3.5">
            <a href="#" className="hover:text-[#FF5100] transition-colors text-[15px] text-white font-light">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF5100] transition-colors text-[15px] text-white font-light">Terms of Services</a>
            <a href="#" className="hover:text-[#FF5100] transition-colors text-[15px] text-white font-light">Refund Policy</a>
          </nav>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-5 min-w-[140px]">
          <h3 className="text-gray-500 text-[15px] font-normal">Socials</h3>
          <nav className="flex flex-col gap-3.5">
            <a href="#" className="hover:text-[#FF5100] transition-colors text-[15px] text-white font-light">LinkedIn</a>
            <a href="#" className="hover:text-[#FF5100] transition-colors text-[15px] text-white font-light">Facebook</a>
            <a href="#" className="hover:text-[#FF5100] transition-colors text-[15px] text-white font-light">Twitter</a>
          </nav>
        </div>
      </div>

      {/* Large ALTIS text at bottom */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-8">
        <h1 className="font-black tracking-[0.3em] text-center  text-[clamp(4rem,15vw,12rem)] leading-none select-none uppercase">
          ALTIS
        </h1>
      </div>
    </footer>
  );
}