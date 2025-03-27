import React from 'react';

import styles from './Program.module.css';

import program from './program';

import programImage from '../../../assets/images/program_1.png';

export default function ProgramComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={programImage} />

        <img src={programImage} />
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
      </div>
    </div>
  );
}
