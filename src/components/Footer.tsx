import React from 'react';

export default function Footer() {
  // Generate random positions for animated floating dots
  const floatingDots = React.useMemo(() => {
    const dots = [];
    for (let i = 0; i < 30; i++) {
      dots.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${5 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 8}s`,
        size: Math.random() > 0.5 ? '2px' : '3px',
        opacity: 0.2 + Math.random() * 0.3,
      });
    }
    return dots;
  }, []);

  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes floatDots {
        0% { transform: translate(0, 0); opacity: 0.3; }
        25% { transform: translate(15px, -20px); opacity: 0.5; }
        50% { transform: translate(-10px, -35px); opacity: 0.2; }
        75% { transform: translate(-15px, 10px); opacity: 0.4; }
        100% { transform: translate(0, 0); opacity: 0.3; }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const styles = {
    footer: {
      position: 'relative' as const,
      backgroundColor: '#1a1a1a',
      color: 'white',
      width: '100%',
      padding: '60px 24px 40px',
      marginTop: '40px',
      overflow: 'hidden',
    } as React.CSSProperties,

    dotsContainer: {
      pointerEvents: 'none' as const,
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    } as React.CSSProperties,

    floatingDot: {
      position: 'absolute' as const,
      backgroundColor: 'white',
      borderRadius: '50%',
    } as React.CSSProperties,

    contentWrapper: {
      position: 'relative' as const,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'row' as const,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '80px',
      maxWidth: '1400px',
      margin: '0 auto 80px',
      flexWrap: 'wrap' as const,
    } as React.CSSProperties,

    logoSection: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'flex-start',
      gap: '20px',
      minWidth: '320px',
      maxWidth: '450px',
      flex: '1',
    } as React.CSSProperties,

    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '4px',
    } as React.CSSProperties,

    // logoIcon: {
    //   width: '32px',
    //   height: '32px',
    //   backgroundColor: '#FF5100',
    //   clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)',
    // } as React.CSSProperties,

    logoText: {
      fontSize: '28px',
      fontWeight: 500,
      letterSpacing: '0.02em',
    } as React.CSSProperties,

    description: {
      color: '#999',
      fontSize: '15px',
      lineHeight: '1.7',
    } as React.CSSProperties,

    navSection: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '20px',
      minWidth: '140px',
    } as React.CSSProperties,

    navTitle: {
      color: '#999',
      fontSize: '15px',
      fontWeight: 400,
    } as React.CSSProperties,

    navList: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '14px',
    } as React.CSSProperties,

    navLink: {
      color: 'white',
      fontSize: '15px',
      fontWeight: 300,
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    } as React.CSSProperties,

    altisTextContainer: {
      position: 'relative' as const,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '40px',
    } as React.CSSProperties,

    altisText: {
      fontFamily: 'Tinos Variable, serif',
      fontWeight: 900,
      letterSpacing: '0.15em',
      textAlign: 'center' as const,
      fontSize: 'clamp(80px, 18vw, 200px)',
      lineHeight: 1,
      userSelect: 'none' as const,
      textTransform: 'uppercase' as const,
      color: '#2a2a2a',
    } as React.CSSProperties,
  };

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#FF5100';
  };

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'white';
  };

  return (
    <footer style={styles.footer}>
      {/* Animated floating dots */}
      <div style={styles.dotsContainer}>
        {floatingDots.map((dot) => (
          <span
            key={dot.id}
            style={{
              ...styles.floatingDot,
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
              animation: `floatDots ${dot.animationDuration} ease-in-out infinite`,
              animationDelay: dot.animationDelay,
            }}
          ></span>
        ))}
      </div>

      <div style={styles.contentWrapper}>
        {/* Logo & Description */}
        <div style={styles.logoSection}>
          <div style={styles.logoContainer}>
            {/* <div style={styles.logoIcon}></div> */}
<div className="flex items-center">
  <img
    src="/logo-white.png"
    alt="Altis Logo"
    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
  />
</div>
          </div>
          <p style={styles.description}>
            Empowering startups to dominate their niche with high-fidelity design, custom
            full-stack builds, and rapid deployment.
          </p>
        </div>

        {/* Company */}
        <div style={styles.navSection}>
          <h3 style={styles.navTitle}>Company</h3>
          <nav style={styles.navList}>
            <a
              href="#"
              style={styles.navLink}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Home
            </a>
            <a
              href="#"
              style={styles.navLink}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Services
            </a>
            <a
              href="#"
              style={styles.navLink}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Works
            </a>
            <a
              href="#"
              style={styles.navLink}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Reviews
            </a>
            <a
              href="#"
              style={styles.navLink}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              FAQ
            </a>
          </nav>
        </div>

        {/* Legal Pages */}
        <div style={styles.navSection}>
          <h3 style={styles.navTitle}>Legal Pages</h3>
          <nav style={styles.navList}>
            <a
              href="#"
              style={styles.navLink}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={styles.navLink}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Terms of Services
            </a>
            <a
              href="#"
              style={styles.navLink}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Refund Policy
            </a>
          </nav>
        </div>

        {/* Socials */}
        {/* <div style={styles.navSection}>
          <h3 style={styles.navTitle}>Socials</h3>
          <nav style={styles.navList}>
            <a
              href="#"
              style={styles.navLink}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              LinkedIn
            </a>
            <a
              href="#"
              style={styles.navLink}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Facebook
            </a>
            <a
              href="#"
              style={styles.navLink}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Twitter
            </a>
          </nav>
        </div> */}
      </div>

      {/* Large ALTIS text at bottom */}
      <div style={styles.altisTextContainer}>
        <h1 style={styles.altisText}>ALTIS</h1>
      </div>
    </footer>
  );
}