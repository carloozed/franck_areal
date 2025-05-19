import './App.css';

import { useState } from 'react';

import Draggables from './components/Draggables';
import Navigation from './components/Navigation/Navigation';
import Background from './components/Background/Background';
import Content from './components/Content/Content';

function App() {
  const [backgroundClick, setBackgroundClick] = useState(0);
  const [activeNavigation, setActiveNavigation] = useState('');

  const backgroundProps = {
    backgroundClick: backgroundClick,
    setBackgroundClick: setBackgroundClick,
  };

  const navigationProps = {
    backgroundClick: backgroundClick,
    setBackgroundClick: setBackgroundClick,
    activeNavigation: activeNavigation,
    setActiveNavigation: setActiveNavigation,
  };

  const contentProps = {
    activeNavigation: activeNavigation,
    setActiveNavigation: setActiveNavigation,
  };

  return (
    <>
      <div className={StyleSheet.main}>
        <Navigation {...navigationProps} />
        <Content {...contentProps} />
        <Draggables />
        <Background {...backgroundProps} />
      </div>
    </>
  );
}

export default App;
