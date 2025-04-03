import React, { useEffect } from 'react';
import styles from './AboutComponent.module.css';

import aboutContent from './about';

export default function AboutComponent({ ...contentProps }) {
  const { activeNavigation } = contentProps;

  useEffect(() => {
    console.log(activeNavigation);
  }, [activeNavigation]);

  return (
    <div
      className={`${styles.container} ${
        activeNavigation === 'about' ? styles.open : ''
      }`}
    >
      <h1>{aboutContent[0].title}</h1>
      <div className={styles.content}>
        {aboutContent.map((section, index) => (
          <div key={index} className={styles.section}>
            <div className={styles.titleContainer}>
              <h3>{section.lang}</h3>
            </div>
            <div className={styles.textContainer}>
              <p dangerouslySetInnerHTML={{ __html: section.first_text }} />
              <p dangerouslySetInnerHTML={{ __html: section.second_text }} />
            </div>
            <div className={styles.eventInformation}>
              <p>{section.date}</p>
              <p>{section.time}</p>
              <p>{section.entry}</p>
            </div>
            <div className={styles.locationInformation}>
              <p dangerouslySetInnerHTML={{ __html: section.location }} />
              <p>{section.transportation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
