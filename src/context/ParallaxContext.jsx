import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * Margdarshak Paper Parallax & Motion Hook
 * Provides smooth, damped, pointer-based and scroll-based parallax
 * Strictly respects prefers-reduced-motion
 */

const ParallaxContext = createContext({
  x: 0,
  y: 0,
  scrollY: 0,
  reducedMotion: false
});

export const ParallaxProvider = ({ children }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    if (mediaQuery.matches) return () => mediaQuery.removeEventListener('change', handleMediaChange);

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId = null;

    const handleMouseMove = (e) => {
      // Damped normalized offset between -1 and 1
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset || 0);
    };

    // Smooth damping loop (ease-out spring-like interpolation without bounce)
    const updateMotion = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      setCoords({
        x: parseFloat(currentX.toFixed(4)),
        y: parseFloat(currentY.toFixed(4))
      });

      animId = requestAnimationFrame(updateMotion);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    animId = requestAnimationFrame(updateMotion);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <ParallaxContext.Provider value={{ ...coords, scrollY, reducedMotion }}>
      {children}
    </ParallaxContext.Provider>
  );
};

export const useParallax = () => useContext(ParallaxContext);

/**
 * ParallaxLayer: Declarative 3-plane parallax layer
 * Plane 1 — Paper background (1–3px)
 * Plane 2 — Decorative/editorial elements (3–8px)
 * Plane 3 — Interactive content / cards (1–4px)
 */
export const ParallaxLayer = ({ 
  children, 
  depth = 1, // 1 (subtle bg), 2 (mid/decorative), 3 (hero/content)
  className = '', 
  style = {},
  scrollFactor = 0,
  ...props 
}) => {
  const { x, y, scrollY, reducedMotion } = useParallax();

  if (reducedMotion) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  // Calculate restrained translation based on plane depth
  let maxMove = 2; // Plane 1 (1-3px)
  if (depth === 2) maxMove = 5; // Plane 2 (3-8px)
  if (depth === 3) maxMove = 3; // Plane 3 (1-4px)

  const translateX = (x * maxMove).toFixed(2);
  const translateY = (y * maxMove + (scrollFactor ? scrollY * scrollFactor : 0)).toFixed(2);

  return (
    <div
      className={className}
      style={{
        ...style,
        transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
        transition: 'transform 0.05s linear',
        willChange: 'transform'
      }}
      {...props}
    >
      {children}
    </div>
  );
};
