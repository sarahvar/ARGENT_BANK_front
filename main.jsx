import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Importer Provider depuis react-redux
import App from './App.jsx';
import './index.css';
import store from './src/core/redux/store.js'; // Importer votre magasin Redux

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envelopper votre composant App avec le Provider et passer le magasin Redux comme prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

