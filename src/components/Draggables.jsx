import React, { useRef } from 'react';

import styles from './Draggables.module.css';
import DraggableComponent from './DraggableComponent';

import funnystuff from '../assets/images/funnystuff.png';
import yellowleft from '../assets/images/yellowleft.png';
import colorcircle from '../assets/images/colorcircle.png';
import coolstuff from '../assets/images/coolstuff.png';
import stringsetc from '../assets/images/stringsetc.png';
import stuff from '../assets/images/stuff.png';
import omgstuff from '../assets/images/omgstuff.png';
import funnythingi from '../assets/images/funnythingi.png';
import circlesetc from '../assets/images/circlesetc.png';

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
          <img src={stringsetc} />
        </DraggableComponent>
        <DraggableComponent>
          <img src={stuff} />
        </DraggableComponent>
        <DraggableComponent>
          <img src={omgstuff} />
        </DraggableComponent>
        <DraggableComponent>
          <img src={funnythingi} />
        </DraggableComponent>
        <DraggableComponent>
          <img src={circlesetc} />
        </DraggableComponent>
      </div>
    </section>
  );
}
