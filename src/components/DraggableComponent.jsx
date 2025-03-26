import React from 'react';
import gsap from 'gsap';

import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

export default function DraggableComponent({ children }) {
  return <div>{children}</div>;
}
