import React from 'react';

import styles from './Background.module.css';

export default function Background() {
  return (
    <div className={styles.bg}>
      <div className={styles.imageContainer}></div>
    </div>
  );
}
