import React from 'react';

import styles from './Navigation.module.css';

import Top from './components/Top';
import Left from './components/Left';
import Bottom from './components/Bottom';
import Right from './components/Right';

export default function Navigation({ ...navigationProps }) {
  const {
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
          onClick={() => setBackgroundClick(backgroundClick + 1)}
        >
          <a href="https://mp3.radiox.ch/standard.mp3" target="_blank">
            <Top />
          </a>
        </div>
        <div
          className={styles.navitem}
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
          onClick={() => {
            activeNavigation === 'about'
              ? setActiveNavigation('')
              : setActiveNavigation('about');
          }}
        >
          <Bottom />
        </div>
        <div className={styles.navitem}>
          <a href="https://www.instagram.com/omg_franck/" target="_blank">
            <Right />
          </a>
        </div>
      </div>
    </nav>
  );
}
