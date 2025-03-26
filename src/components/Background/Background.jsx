import React from 'react';

import styles from './Background.module.css';

import bgFirst from '../../assets/images/bg_first.png';

export default function Background() {
  return (
    <div className={styles.bg}>
      <div className={styles.imageContainer}>
        <div className={styles.background}>
          <img src={bgFirst}></img>
        </div>
      </div>
    </div>
  );
}
