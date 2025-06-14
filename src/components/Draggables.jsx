import React, { useRef, useState, useEffect } from 'react';

import styles from './Draggables.module.css';
import DraggableComponent from './DraggableComponent';

import { imageArray } from './imageArray';

export default function Draggables() {
  const containerRef = useRef(null);
  const [dropDistance, setDropDistance] = useState(0);

  const updateDropDistance = () => {
    const isMobile = window.innerWidth < 768;
    setDropDistance(isMobile ? 85 : 100);
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
              <img
                src={image.url}
                alt={`Dropimage ${index}`}
                style={{
                  display: image.name === 'specialthanksto' ? 'none' : 'block',
                }}
              />
            </DraggableComponent>
          ))}
      </div>
    </section>
  );
}
