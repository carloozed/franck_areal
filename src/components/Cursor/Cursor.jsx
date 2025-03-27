import React, { useRef, useEffect, useState } from 'react';
import styles from './Cursor.module.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Cursor({ ...cursorProps }) {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const [cursorContent, setCursorContent] = useState('');
  const currentTl = useRef(null);

  // Create refs for all timelines
  const topTlRef = useRef(null);
  const programTlRef = useRef(null);
  const aboutTlRef = useRef(null);
  const instaTlRef = useRef(null);

  const { navigationItemHovered } = cursorProps;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    switch (navigationItemHovered) {
      case 'top':
        setCursorContent('CLICK');
        break;
      case 'program':
        setCursorContent('PROGRAM');
        break;
      case 'about':
        setCursorContent('ABOUT');
        break;
      case 'insta':
        setCursorContent('INSTA');
        break;
      default:
        setCursorContent('');
    }
  }, [navigationItemHovered]);

  // Initialize all timelines once
  useGSAP(() => {
    // Initial state - hidden cursor
    gsap.set(cursorRef.current, {
      opacity: 0,
    });

    gsap.set(textRef.current, {
      opacity: 0,
    });

    topTlRef.current = gsap.timeline({ paused: true });
    programTlRef.current = gsap.timeline({ paused: true });
    aboutTlRef.current = gsap.timeline({ paused: true });
    instaTlRef.current = gsap.timeline({ paused: true });

    topTlRef.current
      .to(cursorRef.current, {
        opacity: 1,
        duration: 0.3,
        yPercent: 100,
        ease: 'power2.out',
      })
      .to(
        textRef.current,
        {
          opacity: 1,
          duration: 0.01,
        },
        '-=0.1'
      );

    programTlRef.current
      .to(cursorRef.current, {
        opacity: 1,
        x: 50,
        duration: 0.3,
        ease: 'power2.out',
      })
      .to(
        textRef.current,
        {
          opacity: 1,
          duration: 0.2,
        },
        '-=0.1'
      );

    aboutTlRef.current
      .to(cursorRef.current, {
        opacity: 1,
        yPercent: -200,
        duration: 0.3,
        ease: 'power2.out',
      })
      .to(
        textRef.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        '-=0.1'
      );

    instaTlRef.current
      .to(cursorRef.current, {
        opacity: 1,
        xPercent: -150,
        duration: 0.3,
        ease: 'power2.out',
      })
      .to(
        textRef.current,
        {
          opacity: 1,
          duration: 0.2,
        },
        '-=0.1'
      );
  }, []);

  useEffect(() => {
    if (currentTl.current) {
      currentTl.current.reverse();
    }

    if (navigationItemHovered === '') {
      gsap.to(cursorRef.current, {
        opacity: 0,
        xPercent: 0,
        yPercent: 0,
        duration: 0.01,
      });
      return;
    }

    switch (navigationItemHovered) {
      case 'top':
        currentTl.current = topTlRef.current;
        break;
      case 'program':
        currentTl.current = programTlRef.current;
        break;
      case 'about':
        currentTl.current = aboutTlRef.current;
        break;
      case 'insta':
        currentTl.current = instaTlRef.current;
        break;
      default:
        currentTl.current = null;
        return;
    }

    if (currentTl.current) {
      gsap.set(cursorRef.current, {
        xPercent: 0,
        yPercent: 0,
      });
      currentTl.current.play(0);
    }
  }, [navigationItemHovered]);

  return (
    <div
      className={`${styles.cursor} ${
        navigationItemHovered !== '' ? styles.fullWidth : ''
      }`}
      ref={cursorRef}
    >
      <h2 className={styles.title} ref={textRef}>
        {cursorContent}
      </h2>
    </div>
  );
}
