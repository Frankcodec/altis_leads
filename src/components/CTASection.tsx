import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const CTASection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const particles: Particle[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <section className="relative w-full px-4 py-16 bg-white overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.03,
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative bg-[#1a1a1a] rounded-[2rem] px-8 py-16 md:py-20 overflow-hidden">
          {/* Animated particles */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find a Better Path to Your Next Customers.
            </h2>

            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
              Tell us what your business offers, who you want to reach, and where customer acquisition feels stuck. We will start with the problem in front of you.
            </p>

            {/* Main CTA */}
            <a href="https://cal.com/altis-studios-nspiml/15min" target="_blank" rel="noopener noreferrer">
               <button className="group flex items-center gap-3 bg-white hover:bg-gray-100 text-black text-lg font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mb-16">
              Let&apos;s Talk About Your Market
              <span className="flex items-center justify-center w-10 h-10 bg-[#FF5100] rounded-full transition-transform group-hover:translate-x-1">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
            </a>
           

            {/* Bottom Pills */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-32 w-full max-w-4xl">
              <div className="relative">
                <span className="absolute -top-8 -left-8 text-gray-400 text-sm font-light italic -rotate-12 whitespace-nowrap">
                  Know Your Market
                </span>
                <button className="bg-[#FF5100] hover:bg-[#ff6a2e] text-white text-base font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Find stronger fits
                </button>
              </div>

              <div className="relative">
                <span className="absolute -top-8 -right-2 text-gray-400 text-sm font-light italic rotate-12 whitespace-nowrap">
                  Make a plan
                </span>
                <button className="bg-[#FF5100] hover:bg-[#ff6a2e] text-white text-base font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Approach with purpose
                </button>
                <span className="absolute -bottom-8 -right-36 text-gray-400 text-sm font-light italic rotate-6 whitespace-nowrap">
                  Start a conversation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
