import React, { useRef, useState } from 'react';

// GSAP IMPORTS
import gsap from 'gsap';
import Physics2DPlugin from 'gsap/Physics2DPlugin';
import { Draggable } from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';

import styles from './DraggableComponent.module.css';

gsap.registerPlugin(Draggable, useGSAP, Physics2DPlugin);

export default function DraggableComponent({ children }) {
  const draggableRef = useRef(null);
  const [isDraggable, setIsDraggable] = useState(false);
  const dragInstance = useRef(null);

  const random = gsap.utils.random;

  useGSAP(() => {
    if (draggableRef.current === null) return;

    // Set initial position
    gsap.set(draggableRef.current, {
      x: random(0, window.innerWidth - 460),
      y: -500,
      rotate: random(-60, 60),
    });

    // Create falling animation
    gsap.to(draggableRef.current, {
      duration: random(2, 3.8),
      rotate: 0,
      y: window.innerHeight - 130,
      ease: `bounce.out(${random(1.8, 2.5)})`,
      delay: random(0, 1.2),

      onComplete: () => setIsDraggable(true),
    });
  }, []);

  useGSAP(() => {
    if (isDraggable && draggableRef.current) {
      // Kill any ongoing animations
      gsap.killTweensOf(draggableRef.current);

      // Create draggable instance
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
    >
      {children}
    </div>
  );
}
