import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import './App.css';
import './styles/theme.css'; // Import the new theme.css
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupThemeSwitcher } from './scripts/theme-switcher'; // Import setupThemeSwitcher

// Initialize the theme switcher
setupThemeSwitcher();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();