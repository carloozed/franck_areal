import React, { useRef } from 'react';

import styles from './Draggables.module.css';
import DraggableComponent from './DraggableComponent';

import arrowCenter from '../assets/images/svg/arrowcenter.svg';

export default function Draggables() {
  const containerRef = useRef(null);

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.relative}>
        <DraggableComponent>
          <h1>Let's create our world in 6 days</h1>
        </DraggableComponent>
        <DraggableComponent>
          <h1>Let's create our world in 6 days</h1>
        </DraggableComponent>
        <DraggableComponent>
          <h1>Let's create our world in 6 days</h1>
        </DraggableComponent>
        <DraggableComponent>
          <h1>Let's create our world in 6 days</h1>
        </DraggableComponent>
        <DraggableComponent>
          <img src={arrowCenter} />
        </DraggableComponent>
        <DraggableComponent>
          <h1>Let's create our world in 6 days</h1>
        </DraggableComponent>
      </div>
    </section>
  );
}
