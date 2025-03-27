import React from 'react';

import styles from './Navigation.module.css';

import Top from './components/Top';
import Left from './components/Left';
import Bottom from './components/Bottom';
import Right from './components/Right';

export default function Navigation({ ...navigationProps }) {
  const {
    setNavigationItemHovered,
    setBackgroundClick,
    activeNavigation,
    setActiveNavigation,
    backgroundClick,
  } = navigationProps;
  return (
    <nav className={styles.nav}>
      <div className={styles.navcontainer}>
        <div
          className={styles.navitem}
          onMouseEnter={() => setNavigationItemHovered('top')}
          onMouseLeave={() => setNavigationItemHovered('')}
          onClick={() => setBackgroundClick(backgroundClick + 1)}
        >
          <Top />
        </div>
        <div
          className={styles.navitem}
          onMouseEnter={() => setNavigationItemHovered('program')}
          onMouseLeave={() => setNavigationItemHovered('')}
          onClick={() => {
            activeNavigation === 'program'
              ? setActiveNavigation('')
              : setActiveNavigation('program');
          }}
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
          <a href="https://www.instagram.com/omg_franck/" target="_blank">
            <Right />
          </a>
        </div>
      </div>
    </nav>
  );
}
