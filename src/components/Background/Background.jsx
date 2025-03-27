import React, { useState, useEffect } from 'react';

import styles from './Background.module.css';

import bgFirst from '../../assets/images/bg_first.png';
import bgSecond from '../../assets/images/bg2.png';
import bgThird from '../../assets/images/background.png';
import bgFourth from '../../assets/images/letscreate.png';

export default function Background({ ...backgroundProps }) {
  const [url, setUrl] = useState(bgFirst);
  const { backgroundClick, setBackgroundClick } = backgroundProps;

  const backgroundArray = [bgFirst, bgSecond, bgThird, bgFourth];

  useEffect(() => {
    if (backgroundClick > backgroundArray.length - 1) {
      setBackgroundClick(0);
    }
    if (backgroundClick === 0) {
      setUrl(bgFirst);
    } else if (backgroundClick === 1) {
      setUrl(bgSecond);
    } else if (backgroundClick === 2) {
      setUrl(bgThird);
    } else if (backgroundClick === 3) {
      setUrl(bgFourth);
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
