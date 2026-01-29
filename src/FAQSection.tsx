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
      question: "Does Altis only work in Framer, or do you handle custom builds?",
      answer: "While we love Framer for high-performance marketing sites, we are Full-Stack Developers at heart. If your project requires a custom web app, specialized React components, or a robust backend, we build tailored solutions using modern stacks like Next.js, TypeScript, and Node.js. We choose the tool that best fits your business goals, not the other way around."
    },
    {
      question: "Can you integrate custom APIs or third-party backend services?",
      answer: "Yes, absolutely! We specialize in integrating custom APIs and third-party services to create seamless, powerful solutions for your business."
    },
    {
      question: "I have a complex Figma design. Can you code it from scratch?",
      answer: "Definitely! We excel at translating complex Figma designs into pixel-perfect, production-ready code with clean architecture and best practices."
    },
    {
      question: "How do you handle hosting, security, and scalability?",
      answer: "We provide comprehensive hosting solutions with enterprise-grade security measures and scalable infrastructure to grow with your business."
    },
    {
      question: "Can you build custom Framer components with code?",
      answer: "Yes! We create custom Framer components with advanced functionality, animations, and interactions tailored to your specific needs."
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
    <section className="w-full px-4 py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Title */}
          <div className="lg:sticky lg:top-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#FF6B35]">✦</span>FAQ
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Got Questions?<br />
              We Got Answers
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-md">
              Straightforward, no-fluff answers to help you feel confident about working with us.
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
                    : 'bg-white text-black hover:bg-gray-50'
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