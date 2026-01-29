import { motion } from 'framer-motion';

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your goals, audience, and vision. This allows us to define a clear direction before any design or development begins.",
    image: "/image.png", // Replace with your actual image path
  },
  {
    number: "02",
    title: "Design",
    description: "We craft thoughtful, modern designs focused on clarity, usability, and visual impact — tailored to your brand.",
    image: "/image2.png",
  },
  {
    number: "03",
    title: "Development",
    description: "We bring the designs to life with clean, scalable code, ensuring performance, responsiveness, and reliability across all devices.",
    image: "/process-dev.png",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We handle a smooth, stress-free launch, ensuring everything works perfectly across devices and platforms.",
    image: "/process-launch.png",
  }
];

const ProcessSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
            How It Works?
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            A quick overview of how we work together to make your edit best in class!
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Card Container */}
              <div className="bg-[#F8F8F8] border border-gray-100 rounded-[32px] p-2 flex flex-col h-full hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500">
                
                {/* Illustration Area */}
                <div className="relative aspect-[7/4] rounded-[26px] bg-white overflow-hidden flex items-center justify-center p-6 mb-6">
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 bg-white border border-gray-100 rounded-xl px-3 py-1 text-sm font-bold text-gray-400 shadow-sm">
                    {step.number}
                  </div>
                  
                  {/* Illustration placeholder */}
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content Area */}
                <div className="px-6 pb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;