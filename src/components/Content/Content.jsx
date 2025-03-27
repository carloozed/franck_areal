import React from 'react';

import styles from './Content.module.css';

import main from '../../assets/images/maintitle.png';

export default function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.main}>
          <img src={main} alt="Frank Areal" />
        </div>
      </div>
    </div>
  );
}
