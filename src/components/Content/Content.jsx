import React from 'react';

import styles from './Content.module.css';

import main from '../../assets/images/maintitle.png';

import ProgramComponent from './Program/ProgramComponent';

export default function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {' '}
        <ProgramComponent />
        <div className={styles.main}>
          <img src={main} alt="Frank Areal" />
        </div>{' '}
      </div>
    </div>
  );
}
