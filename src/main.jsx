import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { MobileProvider } from '../context/MobileContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MobileProvider>
      <App />
    </MobileProvider>
  </StrictMode>
);
