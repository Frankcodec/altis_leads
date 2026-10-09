import React from 'react';

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
          padding: 20px 18px !important;
          margin: 0 16px !important;
        }
        .custom-card-top-section {
          padding: 16px 16px !important;
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
          padding: 18px 16px !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const floatingDots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    top: `${(i * 37) % 100}%`,
    left: `${(i * 61) % 100}%`,
    animationDuration: `${4 + (i % 7)}s`,
    animationDelay: `${(i % 5)}s`,
    size: `${2 + (i % 3)}px`,
  }));

  const styles = {
    pricingContainer: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      position: 'relative' as const,
    } as React.CSSProperties,

    gridBackground: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      opacity: 0.03,
      pointerEvents: 'none' as const,
      backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
      backgroundSize: '32px 32px'
    } as React.CSSProperties,

    contentWrapper: {
      position: 'relative' as const,
      zIndex: 1,
    } as React.CSSProperties,

    pricingHeader: {
      textAlign: 'center' as const,
      marginBottom: '50px',
    } as React.CSSProperties,

    pricingLabel: {
      color: '#ff5722',
      fontSize: '16px',
      fontWeight: 500,
      display: 'inline-block',
      marginBottom: '12px',
    } as React.CSSProperties,

    pricingTitle: {
      fontSize: '64px',
      fontWeight: 600,
      color: '#1a1a1a',
      marginBottom: '12px',
      letterSpacing: '-1px',
    } as React.CSSProperties,

    pricingSubtitle: {
      fontSize: '20px',
      color: '#666',
      lineHeight: '1.6',
    } as React.CSSProperties,

    pricingCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      maxWidth: '1152px',
      margin: '0 auto 32px',
      padding: '0 20px',
    } as React.CSSProperties,

    pricingCard: {
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '16px 16px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px dashed #d0d0d0',
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
      fontSize: '26px',
      fontWeight: 500,
      color: '#1a1a1a',
      margin: 0,
    } as React.CSSProperties,

    popularBadge: {
      backgroundColor: '#ff5722',
      color: 'white',
      padding: '6px 16px',
      borderRadius: '18px',
      fontSize: '15px',
      fontWeight: 500,
    } as React.CSSProperties,

    priceSection: {
      marginBottom: '12px',
    } as React.CSSProperties,

    price: {
      fontSize: '56px',
      fontWeight: 600,
      color: '#1a1a1a',
      letterSpacing: '-1.5px',
    } as React.CSSProperties,

    pricePeriod: {
      fontSize: '17px',
      color: '#666',
      marginLeft: '6px',
    } as React.CSSProperties,

    planDescription: {
      fontSize: '17px',
      color: '#666',
      marginBottom: '24px',
      lineHeight: '1.5',
      margin: '0 0 24px 0',
    } as React.CSSProperties,

    ctaButton: {
      backgroundColor: '#1a1a1a',
      color: 'white',
      border: 'none',
      padding: '15px 32px',
      borderRadius: '50px',
      fontSize: '17px',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '8px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      marginBottom: '0',
      width: '100%',
    } as React.CSSProperties,

    featuresTitle: {
      fontSize: '18px',
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
      fontSize: '16px',
      color: '#666',
      display: 'flex',
      alignItems: 'center',
    } as React.CSSProperties,

    customPlanCard: {
      background: '#1a1a1a',
      borderRadius: '20px',
      padding: '16px 16px',
      maxWidth: '1115px',
      margin: '0 20px',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative' as const,
      overflow: 'hidden',
      border: '1px dashed #555',
    } as React.CSSProperties,

    customCardTopSection: {
      backgroundColor: '#252525',
      padding: '20px 20px',
      borderRadius: '16px',
      border: '1px dashed #555',
      position: 'relative' as const,
      zIndex: 2,
    } as React.CSSProperties,

    customCardBottomSection: {
      padding: '0',
      backgroundColor: 'transparent',
      position: 'relative' as const,
      zIndex: 2,
    } as React.CSSProperties,

    customPlanContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      alignItems: 'start',
    } as React.CSSProperties,

    customPlanLeft: {
      display: 'flex',
      flexDirection: 'column' as const,
    } as React.CSSProperties,

    customPlanName: {
      fontSize: '26px',
      fontWeight: 500,
      color: 'white',
      margin: 0,
    } as React.CSSProperties,

    customPrice: {
      fontSize: '56px',
      fontWeight: 600,
      color: 'white',
      letterSpacing: '-1.5px',
    } as React.CSSProperties,

    customPricePeriod: {
      fontSize: '17px',
      color: '#999',
      marginLeft: '6px',
    } as React.CSSProperties,

    customPlanDescription: {
      fontSize: '17px',
      color: '#ccc',
      marginBottom: '24px',
      lineHeight: '1.5',
      margin: '0 0 24px 0',
    } as React.CSSProperties,

    ctaButtonWhite: {
      backgroundColor: 'white',
      color: '#1a1a1a',
      border: 'none',
      padding: '15px 32px',
      borderRadius: '50px',
      fontSize: '17px',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '8px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      marginBottom: '0',
      width: '100%',
    } as React.CSSProperties,

    customPlanRight: {
      display: 'flex',
      flexDirection: 'column' as const,
      position: 'relative' as const,
      zIndex: 2,
    } as React.CSSProperties,

    customFeaturesTitle: {
      fontSize: '18px',
      fontWeight: 500,
      color: 'white',
      marginBottom: '16px',
      margin: '0 0 16px 0',
    } as React.CSSProperties,

    customFeaturesListItem: {
      fontSize: '16px',
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
      {/* Grid Background */}
      <div style={styles.gridBackground} />
      
      {/* Content Wrapper */}
      <div style={styles.contentWrapper}>
        <div style={styles.pricingHeader}>
          <span style={styles.pricingLabel}>✦ Engagements</span>
          <h1 style={styles.pricingTitle} className="pricing-title">Start With the Work You Need</h1>
          <p style={styles.pricingSubtitle} className="pricing-subtitle">
            Every business has a different customer-acquisition problem. We define a focused scope
            <br />
            around the research, strategy, and support that will be most useful.
          </p>
        </div>

        <div style={styles.pricingCards} className="pricing-cards">
          {/* Focused research engagement */}
          <div style={styles.pricingCard} className="pricing-card">
            <div style={styles.cardTopSection} className="card-top-section">
              <div style={styles.cardHeader}>
                <h3 style={styles.planName} className="plan-name">Market Research</h3>
              </div>
              <div style={styles.priceSection}>
                <span style={styles.price} className="price">Scoped</span>
                <span style={styles.pricePeriod}>to your business</span>
              </div>
              <p style={styles.planDescription}>A clear starting point for finding the opportunities worth pursuing.</p>
              
              <a href="https://cal.com/altis-studios-nspiml/15min" target="_blank" rel="noopener noreferrer">
               <button style={styles.ctaButton}>
                Discuss Your Market
                <span style={{
                  backgroundColor: '#ff5722',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              </a>
             
            </div>

            <div style={styles.cardBottomSection}>
              <h4 style={styles.featuresTitle}>May include:</h4>
              <ul style={styles.featuresList}>
                <li style={styles.featuresListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Local market research</p>
                </li>
                <li style={styles.featuresListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Strong-fit prospect research</p>
                </li>
                <li style={styles.featuresListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Buying-trigger notes</p>
                </li>
                <li style={styles.featuresListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Prioritized opportunity list</p>
                </li>
                <li style={styles.featuresListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Recommended next steps</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Customer-acquisition strategy engagement */}
          <div style={styles.pricingCard} className="pricing-card">
            <div style={styles.cardTopSection} className="card-top-section">
              <div style={styles.cardHeader}>
                <h3 style={styles.planName} className="plan-name">Outreach Strategy</h3>
                <span style={styles.popularBadge}>Tailored</span>
              </div>
              <div style={styles.priceSection}>
                <span style={styles.price} className="price">Scoped</span>
                <span style={styles.pricePeriod}>to your needs</span>
              </div>
              <p style={styles.planDescription}>For businesses that need an approach, not merely a list of names.</p>

              <a href="https://cal.com/altis-studios-nspiml/15min" target="_blank" rel="noopener noreferrer">
              <button style={styles.ctaButton}>
                Discuss Your Approach
                <span style={{
                  backgroundColor: '#ff5722',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              </a>
              
            </div>

            <div style={styles.cardBottomSection}>
              <h4 style={styles.featuresTitle}>May include:</h4>
              <ul style={styles.featuresList}>
                <li style={styles.featuresListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Decision-maker research</p>
                </li>
                <li style={styles.featuresListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Relevant outreach angles</p>
                </li>
                <li style={styles.featuresListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Referral-source opportunities</p>
                </li>
                <li style={styles.featuresListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Follow-up planning</p>
                </li>
                <li style={styles.featuresListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Conversion-path recommendations</p>
                </li>
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
            <div style={styles.customCardTopSection} className="custom-card-top-section">
              <div style={styles.customPlanLeft}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.customPlanName} className="plan-name">Custom Scope</h3>
                </div>
                <div style={styles.priceSection}>
                  <span style={styles.customPrice} className="price">Let&apos;s talk</span>
                  <span style={styles.customPricePeriod}>about the right scope</span>
                </div>
                <p style={styles.customPlanDescription}>Built around the exact customer-acquisition work your business needs.</p>
                <a href="https://cal.com/altis-studios-nspiml/15min" target="_blank" rel="noopener noreferrer">
                  <button style={styles.ctaButtonWhite}>
                  Start a Conversation
                  <span style={{
                    backgroundColor: '#ff5722',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                </a>
                
              </div>
            </div>

            <div style={{...styles.customPlanRight, paddingTop: '60px'}}>
              <h4 style={styles.customFeaturesTitle}>Could include:</h4>
              <ul style={styles.featuresList}>
                <li style={styles.customFeaturesListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Deeper local-market research</p>
                </li>
                <li style={styles.customFeaturesListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Campaign and follow-up support</p>
                </li>
                <li style={styles.customFeaturesListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Referral relationship mapping</p>
                </li>
                <li style={styles.customFeaturesListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Landing-page or booking-path planning</p>
                </li>
                <li style={styles.customFeaturesListItem}>
                  <span style={{color: '#ff5722'}}>✦</span>
                  <p style={{paddingLeft: '12px', margin: 0}}>Ongoing opportunity review</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
