import React from 'react';

import styles from './Navigation.module.css';

import Top from './components/Top';
import Left from './components/Left';
import Bottom from './components/Bottom';
import Right from './components/Right';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navcontainer}>
        <div className={styles.navitem}>
          <Top />
        </div>
        <div className={styles.navitem}>
          <Left />
        </div>
        <div className={styles.navitem}>
          <Bottom />
        </div>
        <div className={styles.navitem}>
          <Right />
        </div>
      </div>
    </nav>
  );
}
