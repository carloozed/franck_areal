import React, { useEffect, useState } from 'react';

import styles from './Program.module.css';

import { program, programDesktop } from './program';

import programImage from '../../../assets/images/program_1.png';

export default function ProgramComponent({ ...contentProps }) {
  const { activeNavigation, setActiveNavigation } = contentProps;
  const [isDesktop, setIsDesktop] = useState();
  const [programData, setProgramData] = useState(program);

  useEffect(() => {
    window.innerWidth > 768 ? setIsDesktop(true) : setIsDesktop(false);
  }, []);

  useEffect(() => {
    isDesktop ? setProgramData(programDesktop) : setProgramData(program);
  }, [isDesktop]);

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
          {programData.map((day, index) => (
            <div className={styles.event} key={index}>
              <div className={styles.leftSide}>
                <div>
                  <h2>{day.date}</h2>
                </div>
              </div>
              <div className={styles.rightSide}>
                {day.blur && (
                  <div className={styles.overlay}>
                    <h3>SOON</h3>
                  </div>
                )}
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
        </div>
      </div>
    </div>
  );
}
