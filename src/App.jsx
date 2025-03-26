import './App.css';

import Draggables from './components/Draggables';
import DraggableComponent from './components/DraggableComponent';
import Navigation from './components/Navigation/Navigation';
import Background from './components/Background/Background';
function App() {
  return (
    <>
      <Navigation />
      <Draggables />
      <Background />
    </>
  );
}

export default App;
