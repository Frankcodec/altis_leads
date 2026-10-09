import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface Situation {
  title: string;
  text: string;
}

const ReviewsSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const situations: Situation[] = [
    {
      title: 'You know your work is valuable, but your next buyer is unclear.',
      text: 'Use local research to identify the businesses, property owners, organizations, or people who are more likely to need what you offer.'
    },
    {
      title: 'Most growth has come from referrals or chance discovery.',
      text: 'Build a focused prospecting approach alongside the channels that already work, without pretending social posts alone will solve the problem.'
    },
    {
      title: 'You have names, but no reason to contact them now.',
      text: 'Look for relevant buying triggers and practical messaging angles so outreach has a clear reason to exist.'
    },
    {
      title: 'The strongest opportunities get lost in a long, unorganized list.',
      text: 'Prioritize prospects by fit and timing, then define a workable next step and follow-up sequence.'
    },
    {
      title: 'Interested prospects are not turning into inquiries.',
      text: 'When appropriate, clarify the handoff with a simple landing page or booking path that makes it easier for people to take action.'
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const particles: Particle[] = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
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
    <section className="w-full px-4 py-12 md:py-16 bg-white relative">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#FF6B35]">✦</span>Practical Fit
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Built for the Work That Happens Before a Sale
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            These are common customer-acquisition problems the process is designed to help you work through. They are not promises of a particular result.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Reviews with Stacking Effect */}
          <div className="relative">
            <div className="flex flex-col gap-0">
              {situations.map((situation, index) => (
                <div
                  key={index}
                  className="sticky bg-white rounded-xl p-5 md:p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 mb-4 shadow-sm"
                  style={{ top: `${index * 24 + 32}px` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 text-orange-500 font-semibold">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-medium text-gray-700">{situation.title}</span>
                  </div>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    {situation.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="relative bg-[#1a1a1a] rounded-2xl p-8 md:p-10 overflow-hidden">
              {/* Animated particles canvas */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                style={{ width: '100%', height: '100%' }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl mb-6">
                  😊
                </div>

                {/* Heading */}
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  Start with a focused 15-minute conversation
                </h3>

                {/* CTA Button */}
                <a href="https://cal.com/altis-studios-nspiml/15min" target="_blank" rel="noopener noreferrer">

                <button className="group flex items-center gap-2.5 bg-white hover:bg-gray-100 text-black text-base font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mb-8">
                  Start a Conversation
                  <span className="flex items-center justify-center w-8 h-8 bg-[#FF5100] rounded-full transition-transform group-hover:translate-x-1">
                    <svg 
                      className="w-4 h-4 text-white" 
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
                

                {/* Email */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-1">Prefer email?</p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=altis.studios01@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    altis.studios01@gmail.com
                  </a>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="px-3 py-1.5 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-sm">
                    Local research
                  </span>
                  <span className="px-3 py-1.5 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-sm">
                    Prospect strategy
                  </span>
                  <span className="px-3 py-1.5 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-sm">
                    Practical next steps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
