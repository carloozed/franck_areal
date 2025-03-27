import './App.css';

import { useState } from 'react';

import Draggables from './components/Draggables';
import Navigation from './components/Navigation/Navigation';
import Background from './components/Background/Background';
import Cursor from './components/Cursor/Cursor';

function App() {
  const [backgroundClick, setBackgroundClick] = useState(false);
  const [navigationItemHovered, setNavigationItemHovered] = useState('');

  const cursorProps = {
    navigationItemHovered: navigationItemHovered,
  };

  const backgroundProps = {
    backgroundClick: backgroundClick,
  };

  const navigationProps = {
    setNavigationItemHovered: setNavigationItemHovered,
    setBackgroundClick: setBackgroundClick,
  };

  return (
    <>
      <Cursor {...cursorProps} />
      <Navigation {...navigationProps} />
      <Draggables />
      <Background {...backgroundProps} />
    </>
  );
}

export default App;
