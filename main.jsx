// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './src/core/redux/store.js';
import RouterComponent from './src/routes/router.jsx'; // Assurez-vous d'importer correctement le composant router

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <RouterComponent /> {/* Utilisez votre composant router ici */}
      </Router>
    </Provider>
  </React.StrictMode>
);
