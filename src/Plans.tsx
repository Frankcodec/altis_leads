import React from 'react';
import { motion } from "framer-motion";
import { Star } from 'lucide-react';

const Plans: React.FC = () => {
  // Add keyframes for animations
  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes floatAround {
        0% { transform: translate(0, 0); }
        25% { transform: translate(20px, -20px); }
        50% { transform: translate(-10px, -30px); }
        75% { transform: translate(-20px, 10px); }
        100% { transform: translate(0, 0); }
      }

      /* Responsive Media Queries */
      @media (max-width: 1024px) {
        .pricing-cards {
          grid-template-columns: 1fr !important;
          max-width: 600px !important;
        }
        .custom-plan-content {
          grid-template-columns: 1fr !important;
          gap: 30px !important;
        }
      }

      @media (max-width: 768px) {
        .pricing-title {
          font-size: 38px !important;
        }
        .pricing-cards {
          max-width: 100% !important;
          padding: 0 16px !important;
        }
        .pricing-card {
          padding: 20px 18px !important;
        }
        .card-top-section {
          padding: 16px 16px !important;
        }
        .custom-plan-card {
          padding: 28px 24px !important;
          margin: 0 16px !important;
        }
        .price {
          font-size: 32px !important;
        }
      }

      @media (max-width: 480px) {
        .pricing-title {
          font-size: 32px !important;
        }
        .pricing-subtitle {
          font-size: 14px !important;
        }
        .price {
          font-size: 28px !important;
        }
        .plan-name {
          font-size: 18px !important;
        }
        .pricing-card {
          padding: 18px 16px !important;
        }
        .custom-plan-card {
          padding: 24px 20px !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Generate random positions for floating dots
  const floatingDots = React.useMemo(() => {
    const dots = [];
    for (let i = 0; i < 20; i++) {
      dots.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${4 + Math.random() * 6}s`,
        animationDelay: `${Math.random() * 5}s`,
        size: `${2 + Math.random() * 3}px`,
      });
    }
    return dots;
  }, []);

  const styles = {
    pricingContainer: {
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
    } as React.CSSProperties,

    pricingHeader: {
      textAlign: 'center' as const,
      marginBottom: '50px',
    } as React.CSSProperties,

    pricingLabel: {
      color: '#ff5722',
      fontSize: '13px',
      fontWeight: 500,
      display: 'inline-block',
      marginBottom: '12px',
    } as React.CSSProperties,

    pricingTitle: {
      fontSize: '52px',
      fontWeight: 600,
      color: '#1a1a1a',
      marginBottom: '12px',
      letterSpacing: '-1px',
    } as React.CSSProperties,

    pricingSubtitle: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.6',
    } as React.CSSProperties,

    pricingCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
      maxWidth: '1000px',
      margin: '0 auto 32px',
      padding: '0 20px',
    } as React.CSSProperties,

    pricingCard: {
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '32px 28px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      overflow: 'visible',
    } as React.CSSProperties,

    cardTopSection: {
      backgroundColor: '#fafafa',
      padding: '20px 20px',
      borderRadius: '16px',
      border: '1px dashed #d0d0d0',
      marginBottom: '24px',
    } as React.CSSProperties,

    cardBottomSection: {
      padding: '0',
      backgroundColor: 'transparent',
    } as React.CSSProperties,

    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    } as React.CSSProperties,

    planName: {
      fontSize: '20px',
      fontWeight: 500,
      color: '#1a1a1a',
      margin: 0,
    } as React.CSSProperties,

    popularBadge: {
      backgroundColor: '#ff5722',
      color: 'white',
      padding: '5px 14px',
      borderRadius: '18px',
      fontSize: '13px',
      fontWeight: 500,
    } as React.CSSProperties,

    priceSection: {
      marginBottom: '12px',
    } as React.CSSProperties,

    price: {
      fontSize: '44px',
      fontWeight: 600,
      color: '#1a1a1a',
      letterSpacing: '-1.5px',
    } as React.CSSProperties,

    pricePeriod: {
      fontSize: '14px',
      color: '#666',
      marginLeft: '6px',
    } as React.CSSProperties,

    planDescription: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '24px',
      lineHeight: '1.5',
      margin: '0 0 24px 0',
    } as React.CSSProperties,

    ctaButton: {
      backgroundColor: '#1a1a1a',
      color: 'white',
      border: 'none',
      padding: '13px 28px',
      borderRadius: '50px',
      fontSize: '15px',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      marginBottom: '0',
    } as React.CSSProperties,

    featuresTitle: {
      fontSize: '15px',
      fontWeight: 500,
      color: '#1a1a1a',
      marginBottom: '16px',
      margin: '0 0 16px 0',
    } as React.CSSProperties,

    featuresList: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '12px',
      padding: 0,
      margin: 0,
    } as React.CSSProperties,

    featuresListItem: {
      fontSize: '14px',
      color: '#666',
      display: 'flex',
      alignItems: 'center',
    } as React.CSSProperties,

    customPlanCard: {
      background: '#1a1a1a',
      borderRadius: '20px',
      padding: '36px 32px',
      maxWidth: '1000px',
      margin: '0 20px',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative' as const,
      overflow: 'hidden',
    } as React.CSSProperties,

    customPlanContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      position: 'relative' as const,
      zIndex: 2,
    } as React.CSSProperties,

    customPlanLeft: {
      display: 'flex',
      flexDirection: 'column' as const,
    } as React.CSSProperties,

    customPlanName: {
      fontSize: '20px',
      fontWeight: 500,
      color: 'white',
      marginBottom: '20px',
      margin: '0 0 20px 0',
    } as React.CSSProperties,

    customPrice: {
      fontSize: '44px',
      fontWeight: 600,
      color: 'white',
      letterSpacing: '-1.5px',
    } as React.CSSProperties,

    customPricePeriod: {
      fontSize: '14px',
      color: '#999',
      marginLeft: '6px',
    } as React.CSSProperties,

    customPlanDescription: {
      fontSize: '14px',
      color: '#ccc',
      marginBottom: '24px',
      lineHeight: '1.5',
      margin: '0 0 24px 0',
    } as React.CSSProperties,

    ctaButtonWhite: {
      backgroundColor: 'white',
      color: '#1a1a1a',
      border: 'none',
      padding: '13px 28px',
      borderRadius: '50px',
      fontSize: '15px',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      marginBottom: '0',
      width: 'fit-content',
    } as React.CSSProperties,

    customPlanRight: {
      display: 'flex',
      flexDirection: 'column' as const,
    } as React.CSSProperties,

    customFeaturesTitle: {
      fontSize: '15px',
      fontWeight: 500,
      color: 'white',
      marginBottom: '16px',
      margin: '0 0 16px 0',
    } as React.CSSProperties,

    customFeaturesListItem: {
      fontSize: '14px',
      color: '#ccc',
      display: 'flex',
      alignItems: 'center',
    } as React.CSSProperties,

    decorativeDots: {
      position: 'absolute' as const,
      bottom: '32px',
      right: '50px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
      opacity: 0.3,
      zIndex: 1,
    } as React.CSSProperties,

    dot: {
      width: '5px',
      height: '5px',
      backgroundColor: 'white',
      borderRadius: '50%',
      animation: 'float 3s ease-in-out infinite',
    } as React.CSSProperties,

    floatingDotsContainer: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 1,
      pointerEvents: 'none' as const,
    } as React.CSSProperties,

    floatingDot: {
      position: 'absolute' as const,
      width: '3px',
      height: '3px',
      backgroundColor: 'white',
      borderRadius: '50%',
      opacity: 0.4,
    } as React.CSSProperties,
  };

  return (
    <div style={styles.pricingContainer}>
      <div style={styles.pricingHeader}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          /* Added w-fit to wrap the text and mx-auto to center it */
          className="w-fit mx-auto flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-gray-300 bg-white/50 text-sm font-medium text-gray-600 mb-8"
        >
          <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
          <span className="tracking-tight">Plans</span>
        </motion.div>
        <h1 style={styles.pricingTitle} className="pricing-title">Simple Plans</h1>
        <p style={styles.pricingSubtitle} className="pricing-subtitle">
          Whether you're uploading weekly or scaling fast, we've got a plan
          <br />
          tailored to your content flow.
        </p>
      </div>

      <div style={styles.pricingCards} className="pricing-cards">
        {/* Landing Page Plan */}
        <div style={styles.pricingCard} className="pricing-card">
          <div style={styles.cardTopSection} className="card-top-section">
            <div style={styles.cardHeader}>
              <h3 style={styles.planName} className="plan-name">Landing Page</h3>
            </div>
            <div style={styles.priceSection}>
              <span style={styles.price} className="price">$1000</span>
              <span style={styles.pricePeriod}>/one time payment</span>
            </div>
            <p style={styles.planDescription}>Convert visitors into leads or customers.</p>
            
            <button style={styles.ctaButton}>
              Book a Call
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div style={styles.cardBottomSection}>
            <h4 style={styles.featuresTitle}>Features included:</h4>
            <ul style={styles.featuresList}>
              <li style={styles.featuresListItem}>✦ Single page</li>
              <li style={styles.featuresListItem}>✦ 2 design concept</li>
              <li style={styles.featuresListItem}>✦ Full copywriting</li>
              <li style={styles.featuresListItem}>✦ Framer development</li>
              <li style={styles.featuresListItem}>✦ 1 month free support</li>
            </ul>
          </div>
        </div>

        {/* Multi-Page Plan */}
        <div style={styles.pricingCard} className="pricing-card">
          <div style={styles.cardTopSection} className="card-top-section">
            <div style={styles.cardHeader}>
              <h3 style={styles.planName} className="plan-name">Multi-Page</h3>
              <span style={styles.popularBadge}>Popular</span>
            </div>
            <div style={styles.priceSection}>
              <span style={styles.price} className="price">$1800</span>
              <span style={styles.pricePeriod}>/one time payment</span>
            </div>
            <p style={styles.planDescription}>Build trust, brand presence, and scalability.</p>
            
            <button style={styles.ctaButton}>
              Book a Call
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div style={styles.cardBottomSection}>
            <h4 style={styles.featuresTitle}>Features included:</h4>
            <ul style={styles.featuresList}>
              <li style={styles.featuresListItem}>✦ Multiple Pages</li>
              <li style={styles.featuresListItem}>✦ 2-5 pages</li>
              <li style={styles.featuresListItem}>✦ Full copywriting</li>
              <li style={styles.featuresListItem}>✦ Framer development</li>
              <li style={styles.featuresListItem}>✦ 1 month free support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Custom Plan */}
      <div style={styles.customPlanCard} className="custom-plan-card">
        {/* Floating animated dots */}
        <div style={styles.floatingDotsContainer}>
          {floatingDots.map((dot) => (
            <span
              key={dot.id}
              style={{
                ...styles.floatingDot,
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                animation: `floatAround ${dot.animationDuration} ease-in-out infinite`,
                animationDelay: dot.animationDelay,
              }}
            ></span>
          ))}
        </div>

        <div style={styles.customPlanContent} className="custom-plan-content">
          <div style={styles.customPlanLeft}>
            <h3 style={styles.customPlanName}>Custom Plan</h3>
            <div style={styles.priceSection}>
              <span style={styles.customPrice} className="price">???</span>
              <span style={styles.customPricePeriod}>/one time payment</span>
            </div>
            <p style={styles.customPlanDescription}>Fully tailored digital experience.</p>
            
            <button style={styles.ctaButtonWhite}>
              Book a Call
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div style={styles.customPlanRight}>
            <h4 style={styles.customFeaturesTitle}>Features included:</h4>
            <ul style={styles.featuresList}>
              <li style={styles.customFeaturesListItem}>✦ Multiple pages</li>
              <li style={styles.customFeaturesListItem}>✦ 5+ pages</li>
              <li style={styles.customFeaturesListItem}>✦ Full copywriting</li>
              <li style={styles.customFeaturesListItem}>✦ Framer development</li>
              <li style={styles.customFeaturesListItem}>✦ 1 month free support</li>
            </ul>
          </div>
        </div>
        
        {/* Decorative dots */}
        <div style={styles.decorativeDots}>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
        </div>
      </div>
    </div>
  );
};

export default Plans;