import React from 'react';

import styles from './Program.module.css';

import program from './program';

export default function ProgramComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.events}>
        {program.map((day, index) => (
          <div className={styles.event} key={index}>
            <h3>{day.date}</h3>
            <h3>{day.label}</h3>
            <h3>{day.acts}</h3>
            <h3>{day.day}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
