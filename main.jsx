import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './src/core/redux/store.js';
import RouterComponent from './src/routes/router.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <RouterComponent />
      </Router>
    </Provider>
  </React.StrictMode>
);
