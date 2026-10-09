import { motion } from 'framer-motion';
import DevStatusComponent from './Bento';
import LaunchSupportCard from './Bento1';
import DesignCard from './Bento2';
import IntegrationPipeline from './Bento3';
import { Star } from 'lucide-react';

const STEPS = [
  {
    number: "01",
    title: "Understand the business",
    description: "We get clear on the services you want to sell, the customers you want to reach, and the locations that matter to your business.",
    component: <IntegrationPipeline />
  },
  {
    number: "02",
    title: "Find relevant opportunities",
    description: "We research the local market, identify promising prospects, and look for the situations that could make your service timely or useful.",
    component: <DesignCard />
  },
  {
    number: "03",
    title: "Build the approach",
    description: "We prioritize the opportunities and develop messaging angles, outreach ideas, and a clear order of operations for your next moves.",
    component: <DevStatusComponent />
  },
  {
    number: "04",
    title: "Turn research into conversations",
    description: "Depending on your needs, we can support follow-ups, referral outreach, or a simple conversion path that helps interested prospects inquire or book.",
    component: <LaunchSupportCard />
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
        <motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  /* Added w-fit to wrap the text and mx-auto to center it */
  className="w-fit mx-auto flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-gray-300 bg-white/50 text-sm font-medium text-gray-600 mb-8"
>
  <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
  <span className="tracking-tight">The Process</span>
</motion.div>
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
            A More Deliberate Way to Find Customers
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Each engagement is shaped around your customer-acquisition problem, but the work usually follows this practical sequence.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-4">
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
              <div className="bg-white border border-gray-100 rounded-[22px] p-2 flex flex-col h-full hover:shadow-xl hover:shadow-gray-200/50 shadow-lg transition-all duration-500">
                
                {/* Illustration Area */}
                <div className="relative aspect-[7/4] rounded-[26px] bg-white overflow-hidden flex items-center justify-center p-0 md:p-0 mb-6">
                  {/* Step Number Badge */}
                  <div className="absolute z-50 top-4 left-4 bg-white border border-gray-100 rounded-xl px-3 py-2 text-sm font-bold text-gray-400 shadow-sm">
                    {step.number}
                  </div>
                  
                  {/* Illustration placeholder */}

                  {!step.component ? <img 
                    src={step.component} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  /> : step.component }
                  
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
