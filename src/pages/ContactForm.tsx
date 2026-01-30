import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = 'service_o56muau'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'iV3xIfCImTfdZuUb9'; // Replace with your EmailJS public key
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        budget: formData.budget,
        message: formData.message,
        to_email: 'altis.studios01@gmail.com' // Your email address
      };
      
      // Send email using EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams
        })
      });
      
      if (response.ok) {
        // Show success message
        setShowSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        console.log('EmailJS response not ok:', response); 
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] px-5 py-10">
      <div className="max-w-[840px] mx-auto mb-16">
        <button className="text-[#ff5722] text-[15px] font-normal bg-transparent border-none cursor-pointer p-0 tracking-wide">
          + Contact
        </button>
      </div>
      
      <h1 className="max-w-[840px] mx-auto mb-6 text-[48px] md:text-[72px] font-bold leading-[1.1] text-[#1a1a1a] tracking-[-1.5px]">
        Start Your <span className="text-[#ff5722]">Next<br />Project</span> With Us
      </h1>
      
      <p className="max-w-[840px] mx-auto mb-16 text-[16px] md:text-[18px] leading-[1.6] text-[#4a4a4a] font-normal">
        Got a project in mind or just want to say hi? Fill out the form and we'll<br />
        get back to you shortly.
      </p>

      <form className="max-w-[840px] mx-auto bg-white rounded-2xl px-6 md:px-14 py-8 md:py-12 shadow-sm" onSubmit={handleSubmit}>
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 text-center font-medium">
              ✓ Submitted successfully! We'll get back to you shortly.
            </p>
          </div>
        )}
        
        <div className="mb-8">
          <label htmlFor="name" className="block text-[15px] font-medium text-[#1a1a1a] mb-3 tracking-wide">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-[18px] py-4 text-[15px] text-[#1a1a1a] bg-[#fafafa] border border-[#f0f0f0] rounded-lg outline-none transition-all duration-200 placeholder:text-[#b8b8b8] focus:bg-white focus:border-[#e0e0e0]"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="email" className="block text-[15px] font-medium text-[#1a1a1a] mb-3 tracking-wide">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jane@framer.com"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-[18px] py-4 text-[15px] text-[#1a1a1a] bg-[#fafafa] border border-[#f0f0f0] rounded-lg outline-none transition-all duration-200 placeholder:text-[#b8b8b8] focus:bg-white focus:border-[#e0e0e0]"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="projectType" className="block text-[15px] font-medium text-[#1a1a1a] mb-3 tracking-wide">
            Project Type
          </label>
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-[18px] py-4 pr-12 text-[15px] bg-[#fafafa] border border-[#f0f0f0] rounded-lg outline-none transition-all duration-200 cursor-pointer appearance-none focus:bg-white focus:border-[#e0e0e0]"
              style={{
                color: formData.projectType ? '#1a1a1a' : '#b8b8b8'
              }}
            >
              <option value="">Select...</option>
              <option value="web-design">Web Design</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App</option>
              <option value="branding">Branding</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-[18px] top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="budget" className="block text-[15px] font-medium text-[#1a1a1a] mb-3 tracking-wide">
            Budget
          </label>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-[18px] py-4 pr-12 text-[15px] bg-[#fafafa] border border-[#f0f0f0] rounded-lg outline-none transition-all duration-200 cursor-pointer appearance-none focus:bg-white focus:border-[#e0e0e0]"
              style={{
                color: formData.budget ? '#1a1a1a' : '#b8b8b8'
              }}
            >
              <option value="">Select...</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-plus">$50,000+</option>
            </select>
            <div className="absolute right-[18px] top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block text-[15px] font-medium text-[#1a1a1a] mb-3 tracking-wide">
            Drop a Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write about your project"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-[18px] py-4 text-[15px] text-[#1a1a1a] bg-[#fafafa] border border-[#f0f0f0] rounded-lg outline-none transition-all duration-200 resize-y min-h-[120px] leading-[1.6] placeholder:text-[#b8b8b8] focus:bg-white focus:border-[#e0e0e0]"
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full px-[18px] py-[18px] text-base font-medium text-white bg-[#1a1a1a] border-none rounded-lg cursor-pointer transition-colors duration-200 tracking-wide mt-2 hover:bg-[#2d2d2d] active:bg-[#0a0a0a] disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;