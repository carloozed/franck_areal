'use client';

import React, { createContext, useEffect, useState } from 'react';

const MobileContext = createContext({
  isMobile: false,
  isTablet: false,
  isTabletPortrait: false,
  isDesktop: true,
});

export const MobileProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isTabletPortrait: false,
    isDesktop: true,
  });

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;

      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isTabletPortrait =
        isTablet && window.innerHeight > window.innerWidth;
      const isDesktop = width >= 1024;

      setState({
        isMobile,
        isTablet,
        isTabletPortrait,
        isDesktop,
      });

      setIsInitialized(true);
    };

    // Initial check
    checkDeviceType();

    // Add resize listener
    window.addEventListener('resize', checkDeviceType);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  return (
    <MobileContext.Provider value={state}>
      {!isInitialized ? (
        <div style={{ display: 'none' }} data-hydration-trigger></div>
      ) : null}
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => {
  return React.useContext(MobileContext);
};
