import React from 'react';

import styles from './Navigation.module.css';

import Top from './components/Top';
import Left from './components/Left';
import Bottom from './components/Bottom';
import Right from './components/Right';

export default function Navigation({ ...navigationProps }) {
  const { setNavigationItemHovered, setBackgroundClick } = navigationProps;
  return (
    <nav className={styles.nav}>
      <div className={styles.navcontainer}>
        <div
          className={styles.navitem}
          onMouseEnter={() => setNavigationItemHovered('top')}
          onMouseLeave={() => setNavigationItemHovered('')}
          onClick={() => setBackgroundClick(true)}
        >
          <Top />
        </div>
        <div
          className={styles.navitem}
          onMouseEnter={() => setNavigationItemHovered('program')}
          onMouseLeave={() => setNavigationItemHovered('')}
        >
          <Left />
        </div>
        <div
          className={styles.navitem}
          onMouseEnter={() => setNavigationItemHovered('about')}
          onMouseLeave={() => setNavigationItemHovered('')}
        >
          <Bottom />
        </div>
        <div
          className={styles.navitem}
          onMouseEnter={() => setNavigationItemHovered('insta')}
          onMouseLeave={() => setNavigationItemHovered('')}
        >
          <Right />
        </div>
      </div>
    </nav>
  );
}
