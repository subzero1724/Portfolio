import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { PreferencesProvider } from './hooks/Preferences';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PreferencesProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PreferencesProvider>
  </React.StrictMode>,
);
