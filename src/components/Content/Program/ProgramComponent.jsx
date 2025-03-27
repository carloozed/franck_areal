import React from 'react';

import styles from './Program.module.css';

import program from './program';

import programImage from '../../../assets/images/program_1.png';

export default function ProgramComponent({ ...contentProps }) {
  const { activeNavigation, setActiveNavigation } = contentProps;

  return (
    <div
      className={`${styles.container} ${
        activeNavigation === 'program' ? styles.open : ''
      }`}
    >
      <div className={styles.titleContainer}>
        <img src={programImage} onClick={() => setActiveNavigation('')} />
        <img src={programImage} onClick={() => setActiveNavigation('')} />
      </div>
      <div className={styles.events}>
        {program.map((day, index) => (
          <div className={styles.event} key={index}>
            <div className={styles.leftSide}>
              <h2>{day.date}</h2>
            </div>
            <div className={styles.rightSide}>
              {' '}
              <h3>{day.label}</h3>
              <div>
                {day.acts.map((act, index) => {
                  return (
                    <div key={index} className={styles.act}>
                      <h4 className={styles.actName}>{act[0]}</h4>
                      <h4>{act[1]}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>{' '}
      <div className={styles.titleContainer}>
        <img src={programImage} onClick={() => setActiveNavigation('')} />
        <img src={programImage} onClick={() => setActiveNavigation('')} />
      </div>
    </div>
  );
}
