import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const faqData: FAQItem[] = [
    {
      question: "What kinds of businesses is this for?",
      answer: "The work is built for local businesses that have a useful service but want a more proactive way to find potential customers. That can include home services, contractors, property-related businesses, food businesses, professional services, and other growing local companies."
    },
    {
      question: "Is this just a lead list?",
      answer: "No. A contact list without context is rarely enough to create good conversations. The focus is on finding relevant opportunities, understanding why they may be a fit, and organizing a practical approach to reaching them."
    },
    {
      question: "Do you contact prospects for us?",
      answer: "That depends on the engagement. Some businesses need research, priorities, and messaging they can use themselves; others may need more support with outreach and follow-up planning. We decide what is useful before defining the scope."
    },
    {
      question: "Can you help with our website or booking flow?",
      answer: "Where a simple landing page or booking path would help turn interest into inquiries, that can be part of the conversation. It is not assumed that every business needs a new website or funnel."
    },
    {
      question: "What should we bring to the first conversation?",
      answer: "Share what you sell, who you would most like to work with, where you serve, and what has made customer acquisition difficult so far. A website or social page is helpful, but not required."
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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full px-4 py-16 md:py-20 bg-white relative">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Title */}
          <div className="lg:sticky lg:top-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#FF6B35]">✦</span>FAQ
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Clear Questions.<br />
              Practical Answers.
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-md">
              Straightforward answers about the work, who it is for, and what happens next.
            </p>
          </div>

          {/* Right Side - Accordion */}
          <div className="flex flex-col gap-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-[#1a1a1a] text-white'
                    : "bg-white border border-dashed border-[#d0d0d0] text-black hover:bg-gray-50"
                }`}
              >
                {/* Animated particles for open card */}
                {openIndex === index && (
                  <canvas
                    ref={index === openIndex ? canvasRef : null}
                    className="absolute inset-0 pointer-events-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                )}

                <button
                  onClick={() => toggleAccordion(index)}
                  className="relative z-10 w-full text-left px-6 md:px-8 py-6 md:py-7 flex items-start justify-between gap-4"
                >
                  <span className="text-lg md:text-xl font-normal leading-snug pr-4">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 mt-1">
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`relative z-10 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-7">
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
