import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface Review {
  username: string;
  avatarUrl: string;
  text: string;
}

const ReviewsSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const reviews: Review[] = [
    {
      username: '@mark_locus',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      text: "Altis has an incredible eye for motion. They took our static brand guidelines and turned them into a living, breathing digital experience. The way the elements interact as you scroll is pure magic—it's the best our brand has ever looked."
    },
    {
      username: '@tonya.sa',
      avatarUrl: 'https://i.pravatar.cc/150?img=33',
      text: "Most designers shy away from the technical side of Framer, but Altis thrives there. They built a custom CMS for our blog and integrated our complex tracking scripts without a hitch. Fast, clean, and zero bugs. Highly recommended."
    },
    {
      username: '@johnbai',
      avatarUrl: 'https://i.pravatar.cc/150?img=15',
      text: "I was worried a site this visual would be slow, but Altis optimized everything to perfection. Our load times are lightning-fast, and the mobile responsiveness is the best I've seen. They really understand the 'web' part of web design."
    },
    {
      username: '@chrismaw',
      avatarUrl: 'https://i.pravatar.cc/150?img=68',
      text: "We had a hard launch deadline for our seed round and Altis delivered a high-fidelity landing page in record time. They didn't just meet the deadline; they exceeded our expectations on the design front too. A total lifesaver."
    },
    {
      username: '@jemmy',
      avatarUrl: 'https://i.pravatar.cc/150?img=52',
      text: "Altis is our go-to for anything Framer. Their communication is clear, their process is organized, and they always find a creative solution to our 'can we do this?' questions. If you're looking for a top-tier partner, look no further."
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
    <section className="w-full px-4 py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#FF6B35]">✦</span>Reviews
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Loved by Creators
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            We don't just deliver edits — we make creators look good, grow faster, and stay consistent.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Reviews with Stacking Effect */}
          <div className="relative">
            <div className="flex flex-col gap-0">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="sticky bg-white rounded-xl p-5 md:p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 mb-4 shadow-sm"
                  style={{ top: `${index * 24 + 32}px` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={review.avatarUrl} 
                      alt={review.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700">{review.username}</span>
                  </div>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    {review.text}
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
                  Book a 15-min intro call
                </h3>

                {/* CTA Button */}
                <button className="group flex items-center gap-2.5 bg-white hover:bg-gray-100 text-black text-base font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mb-8">
                  Book a Call
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

                {/* Email */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-1">Prefer to Email?</p>
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
                    Collaboration
                  </span>
                  <span className="px-3 py-1.5 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-sm">
                    Business Inquiry
                  </span>
                  <span className="px-3 py-1.5 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-sm">
                    Went
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