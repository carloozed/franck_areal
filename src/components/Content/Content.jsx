import React from 'react';

import styles from './Content.module.css';

import main from '../../assets/images/maintitle.png';
import location from '../../assets/images/location.png';

import ProgramComponent from './Program/ProgramComponent';

export default function Content({ ...contentProps }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ProgramComponent {...contentProps} />
        <div className={styles.main}>
          <img src={main} alt="Frank Areal" />
        </div>
        <div className={styles.location}>
          <img src={location} alt="Frank Areal" />
        </div>
      </div>
    </div>
  );
}
