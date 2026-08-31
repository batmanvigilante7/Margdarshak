import React from 'react';
import { createRoot } from 'react-dom/client';
import { NavigationController, navigateTo } from './navigation/NavigationController';
import './styles.css';

export { navigateTo };

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationController />
  </React.StrictMode>
);