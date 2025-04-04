import React, { useState, useEffect } from 'react';

import styles from './Background.module.css';

import asset_1 from '../../assets/images/bg/asset.webp';
import asset_2 from '../../assets/images/bg/asset_11.webp';
import asset_3 from '../../assets/images/bg/asset_2.webp';
import asset_4 from '../../assets/images/bg/asset_3.webp';
import asset_5 from '../../assets/images/bg/asset_4.webp';
import asset_6 from '../../assets/images/bg/asset_5.webp';
import asset_7 from '../../assets/images/bg/asset_6.webp';
import asset_8 from '../../assets/images/bg/asset_7.webp';
import asset_9 from '../../assets/images/bg/asset_8.webp';
import asset_10 from '../../assets/images/bg/asset_9.webp';

import asset_1_mobile from '../../assets/images/bg/mobile/asset_mobile.webp';
import asset_2_mobile from '../../assets/images/bg/mobile/asset_1_mobile.webp';
import asset_3_mobile from '../../assets/images/bg/mobile/asset_2_mobile.webp';
import asset_4_mobile from '../../assets/images/bg/mobile/asset_3_mobile.webp';
import asset_5_mobile from '../../assets/images/bg/mobile/asset_4_mobile.webp';
import asset_6_mobile from '../../assets/images/bg/mobile/asset_5_mobile.webp';
import asset_7_mobile from '../../assets/images/bg/mobile/asset_6_mobile.webp';
import asset_8_mobile from '../../assets/images/bg/mobile/asset_7_mobile.webp';
import asset_9_mobile from '../../assets/images/bg/mobile/asset_8_mobile.webp';
import asset_10_mobile from '../../assets/images/bg/mobile/asset_9_mobile.webp';

export default function Background({ ...backgroundProps }) {
  const [url, setUrl] = useState(asset_1);
  const [isMobile, setIsMobile] = useState(false);
  const { backgroundClick, setBackgroundClick } = backgroundProps;

  const backgroundArray = [
    asset_1,
    asset_2,
    asset_3,
    asset_4,
    asset_5,
    asset_6,
    asset_7,
    asset_8,
    asset_9,
    asset_10,
  ];

  const mobileArray = [
    asset_1_mobile,
    asset_2_mobile,
    asset_3_mobile,
    asset_4_mobile,
    asset_5_mobile,
    asset_6_mobile,
    asset_7_mobile,
    asset_8_mobile,
    asset_9_mobile,
    asset_10_mobile,
  ];

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Common breakpoint for mobile
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (backgroundClick > backgroundArray.length - 1) {
      setBackgroundClick(0);
    }

    // Use the appropriate array based on device type
    const currentArray = isMobile ? mobileArray : backgroundArray;
    setUrl(currentArray[backgroundClick]);
  }, [backgroundClick, setBackgroundClick, isMobile]);

  return (
    <div className={styles.bg}>
      <div className={styles.imageContainer}>
        <div className={styles.background}>
          <img src={url} alt="Background" />
        </div>
      </div>
    </div>
  );
}
