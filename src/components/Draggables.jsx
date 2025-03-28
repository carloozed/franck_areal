import React, { useRef, useState, useEffect } from 'react';

import styles from './Draggables.module.css';
import DraggableComponent from './DraggableComponent';

import { imageArray } from './imageArray';

export default function Draggables() {
  const containerRef = useRef(null);
  const [dropDistance, setDropDistance] = useState(0);

  const updateDropDistance = () => {
    const isMobile = window.innerWidth < 768;
    setDropDistance(isMobile ? 85 : 130);
  };

  useEffect(() => {
    updateDropDistance();

    window.addEventListener('resize', updateDropDistance);

    return () => {
      window.removeEventListener('resize', updateDropDistance);
    };
  }, []);

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.relative}>
        {dropDistance !== 0 &&
          imageArray.map((image, index) => (
            <DraggableComponent key={index} dropDistance={dropDistance}>
              <img src={image} alt={`Dropimage ${index}`} />
            </DraggableComponent>
          ))}
      </div>
    </section>
  );
}
