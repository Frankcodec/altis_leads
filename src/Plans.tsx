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
      padding: '80px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
    } as React.CSSProperties,

    pricingHeader: {
      textAlign: 'center' as const,
      marginBottom: '60px',
    } as React.CSSProperties,

    pricingLabel: {
      color: '#ff5722',
      fontSize: '14px',
      fontWeight: 500,
      display: 'inline-block',
      marginBottom: '16px',
    } as React.CSSProperties,

    pricingTitle: {
      fontSize: '64px',
      fontWeight: 600,
      color: '#1a1a1a',
      marginBottom: '16px',
      letterSpacing: '-1px',
    } as React.CSSProperties,

    pricingSubtitle: {
      fontSize: '18px',
      color: '#666',
      lineHeight: '1.6',
    } as React.CSSProperties,

    pricingCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto 40px',
    } as React.CSSProperties,

    pricingCard: {
      backgroundColor: 'white',
      borderRadius: '24px',
      padding: '48px 40px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    } as React.CSSProperties,

    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
    } as React.CSSProperties,

    planName: {
      fontSize: '24px',
      fontWeight: 500,
      color: '#1a1a1a',
    } as React.CSSProperties,

    popularBadge: {
      backgroundColor: '#ff5722',
      color: 'white',
      padding: '6px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 500,
    } as React.CSSProperties,

    priceSection: {
      marginBottom: '16px',
    } as React.CSSProperties,

    price: {
      fontSize: '56px',
      fontWeight: 600,
      color: '#1a1a1a',
      letterSpacing: '-2px',
    } as React.CSSProperties,

    pricePeriod: {
      fontSize: '16px',
      color: '#666',
      marginLeft: '8px',
    } as React.CSSProperties,

    planDescription: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '32px',
      lineHeight: '1.5',
    } as React.CSSProperties,

    ctaButton: {
      backgroundColor: '#1a1a1a',
      color: 'white',
      border: 'none',
      padding: '16px 32px',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      marginBottom: '40px',
    } as React.CSSProperties,

    featuresTitle: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#1a1a1a',
      marginBottom: '20px',
    } as React.CSSProperties,

    featuresList: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '16px',
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
      borderRadius: '24px',
      padding: '48px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative' as const,
      overflow: 'hidden',
    } as React.CSSProperties,

    customPlanContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      position: 'relative' as const,
      zIndex: 2,
    } as React.CSSProperties,

    customPlanLeft: {
      display: 'flex',
      flexDirection: 'column' as const,
    } as React.CSSProperties,

    customPlanName: {
      fontSize: '24px',
      fontWeight: 500,
      color: 'white',
      marginBottom: '24px',
    } as React.CSSProperties,

    customPrice: {
      fontSize: '56px',
      fontWeight: 600,
      color: 'white',
      letterSpacing: '-2px',
    } as React.CSSProperties,

    customPricePeriod: {
      fontSize: '16px',
      color: '#999',
      marginLeft: '8px',
    } as React.CSSProperties,

    customPlanDescription: {
      fontSize: '16px',
      color: '#ccc',
      marginBottom: '32px',
      lineHeight: '1.5',
    } as React.CSSProperties,

    ctaButtonWhite: {
      backgroundColor: 'white',
      color: '#1a1a1a',
      border: 'none',
      padding: '16px 32px',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      marginBottom: '40px',
    } as React.CSSProperties,

    customPlanRight: {
      display: 'flex',
      flexDirection: 'column' as const,
    } as React.CSSProperties,

    customFeaturesTitle: {
      fontSize: '16px',
      fontWeight: 500,
      color: 'white',
      marginBottom: '20px',
    } as React.CSSProperties,

    customFeaturesListItem: {
      fontSize: '16px',
      color: '#ccc',
      display: 'flex',
      alignItems: 'center',
    } as React.CSSProperties,

    decorativeDots: {
      position: 'absolute' as const,
      bottom: '40px',
      right: '60px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      opacity: 0.3,
      zIndex: 1,
    } as React.CSSProperties,

    dot: {
      width: '6px',
      height: '6px',
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
      width: '4px',
      height: '4px',
      backgroundColor: 'white',
      borderRadius: '50%',
      opacity: 0.4,
    } as React.CSSProperties,
  };

  return (
    <div style={styles.pricingContainer}>
      <div style={styles.pricingHeader}>
        <span style={styles.pricingLabel}>✦ Pricing</span>
        <h1 style={styles.pricingTitle}> Plans</h1>
        <p style={styles.pricingSubtitle}>
          Whether you're uploading weekly or scaling fast, we've got a plan
          <br />
          tailored to your content flow.
        </p>
      </div>

      <div style={styles.pricingCards}>
        {/* Landing Page Plan */}
        <div style={styles.pricingCard}>
          <div style={styles.cardHeader}>
            <h3 style={styles.planName}>Landing Page</h3>
          </div>
          <div style={styles.priceSection}>
            <span style={styles.price}>$1000</span>
            <span style={styles.pricePeriod}>/one time payment</span>
          </div>
          <p style={styles.planDescription}>Convert visitors into leads or customers.</p>
          
          <button style={styles.ctaButton}>
            Book a Call
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div>
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
        <div style={styles.pricingCard}>
          <div style={styles.cardHeader}>
            <h3 style={styles.planName}>Multi-Page</h3>
            <span style={styles.popularBadge}>Popular</span>
          </div>
          <div style={styles.priceSection}>
            <span style={styles.price}>$1800</span>
            <span style={styles.pricePeriod}>/one time payment</span>
          </div>
          <p style={styles.planDescription}>Build trust, brand presence, and scalability.</p>
          
          <button style={styles.ctaButton}>
            Book a Call
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div>
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
      <div style={styles.customPlanCard}>
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

        <div style={styles.customPlanContent}>
          <div style={styles.customPlanLeft}>
            <h3 style={styles.customPlanName}>Custom Plan</h3>
            <div style={styles.priceSection}>
              <span style={styles.customPrice}>???</span>
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