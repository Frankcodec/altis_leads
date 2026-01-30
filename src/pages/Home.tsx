import '../App.css'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PortfolioSection from '../components/Portfoliosection'
import AboutSection from './AboutSection'
import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'
import Plans from '../Plans'
import ReviewsSection from '../components/ReviewsSection'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'

function Home() {
  return (
    <>
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

export default Home;



