import React, { useRef, useState } from 'react';

// GSAP IMPORTS
import gsap from 'gsap';
import Physics2DPlugin from 'gsap/Physics2DPlugin';
import { Draggable } from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';

import styles from './DraggableComponent.module.css';

gsap.registerPlugin(Draggable, useGSAP, Physics2DPlugin);

export default function DraggableComponent({ children, index, dropDistance }) {
  const draggableRef = useRef(null);
  const [isDraggable, setIsDraggable] = useState(false);
  const dragInstance = useRef(null);

  const random = gsap.utils.random;

  useGSAP(() => {
    if (draggableRef.current === null) return;

    gsap.set(draggableRef.current, {
      x: random(0, window.innerWidth - 100),
      y: random(0, window.innerHeight - 250),
      rotate: random(-190, 190),
    });

    gsap.to(draggableRef.current, {
      duration: random(1.5, 2.8),
      rotate: 0,
      y: window.innerHeight - dropDistance,
      ease: `bounce.out(${random(1.8, 3.5)})`,
      delay: random(2, 18),
      onComplete: () => setIsDraggable(true),
    });
  }, [dropDistance]);

  useGSAP(() => {
    if (isDraggable && draggableRef.current) {
      gsap.killTweensOf(draggableRef.current);

      dragInstance.current = Draggable.create(draggableRef.current, {
        type: 'x,y',
        bounds: {
          minX: 0,
          maxX: window.innerWidth - 50,
          minY: 0,
          maxY: window.innerHeight - 50,
        },
        edgeResistance: 0.15,
      });
    }
  }, [isDraggable]);

  return (
    <div
      ref={draggableRef}
      style={{ position: 'absolute' }}
      className={styles.draggable}
      key={`Dropimage ${index}`}
    >
      {children}
    </div>
  );
}
