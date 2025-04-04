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

export default function Background({ ...backgroundProps }) {
  const [url, setUrl] = useState(asset_1);
  const { backgroundClick, setBackgroundClick } = backgroundProps;

  const backgroundArray = [
    asset_1,
    asset_2,
    asset_2,
    asset_3,
    asset_4,
    asset_5,
    asset_6,
    asset_7,
    asset_8,
    asset_9,
  ];

  useEffect(() => {
    if (backgroundClick > backgroundArray.length - 1) {
      setBackgroundClick(0);
    }
    if (backgroundClick === 0) {
      setUrl(asset_1);
    } else if (backgroundClick === 1) {
      setUrl(asset_2);
    } else if (backgroundClick === 2) {
      setUrl(asset_3);
    } else if (backgroundClick === 3) {
      setUrl(asset_4);
    } else if (backgroundClick === 4) {
      setUrl(asset_5);
    } else if (backgroundClick === 5) {
      setUrl(asset_6);
    } else if (backgroundClick === 6) {
      setUrl(asset_7);
    } else if (backgroundClick === 7) {
      setUrl(asset_8);
    } else if (backgroundClick === 8) {
      setUrl(asset_9);
    } else if (backgroundClick === 9) {
      setUrl(asset_10);
    }
  }, [backgroundClick, setBackgroundClick]);
  return (
    <div className={styles.bg}>
      <div className={styles.imageContainer}>
        <div className={styles.background}>
          <img src={url}></img>
        </div>
      </div>
    </div>
  );
}
