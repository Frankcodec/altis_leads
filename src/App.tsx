import './App.css'

import Footer from './components/Footer'
import Hero from './pages/Hero'
import PortfolioSection from './components/Portfoliosection'
import AboutSection from './pages/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import Plans from './components/Plans'
import ReviewsSection from './components/ReviewsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import ContactForm from './pages/ContactForm'

function App() {
  return (
    <>
    <ContactForm />
      <Hero />
      <PortfolioSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <Plans />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default App



