import React, { useRef } from 'react';

import styles from './Draggables.module.css';
import DraggableComponent from './DraggableComponent';

import letscreate from '../assets/images/letscreate.png';
import funnystuff from '../assets/images/funnystuff.png';
import yellowleft from '../assets/images/yellowleft.png';
import colorcircle from '../assets/images/colorcircle.png';
import coolstuff from '../assets/images/coolstuff.png';

export default function Draggables() {
  const containerRef = useRef(null);

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.relative}>
        <DraggableComponent>
          <img src={funnystuff} />
        </DraggableComponent>
        <DraggableComponent>
          <img src={yellowleft} />
        </DraggableComponent>
        <DraggableComponent>
          <img src={colorcircle} />
        </DraggableComponent>
        <DraggableComponent>
          <img src={coolstuff} />
        </DraggableComponent>
        <DraggableComponent>
          <img src={letscreate} />
        </DraggableComponent>
        <DraggableComponent>
          <img src={letscreate} />
        </DraggableComponent>
      </div>
    </section>
  );
}
