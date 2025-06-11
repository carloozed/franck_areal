import React from 'react';

import styles from './Program.module.css';

import programImage from '../../../assets/images/program_1.png';

import programFinal from '../../../assets/images/program_final.png';

export default function ProgramComponent({ ...contentProps }) {
  const { activeNavigation, setActiveNavigation } = contentProps;

  return (
    <div
      className={`${styles.container} ${
        activeNavigation === 'program' ? styles.open : ''
      }`}
    >
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <img src={programImage} onClick={() => setActiveNavigation('')} />
        </div>
        <div className={styles.events}>
          <img src={programFinal} />
        </div>
        <div className={styles.titleContainer}>
          <img src={programImage} onClick={() => setActiveNavigation('')} />
        </div>
      </div>
    </div>
  );
}
