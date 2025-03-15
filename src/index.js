import React from 'react';
import ReactDOM from 'react-dom/client';  // ✅ Corrected import
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Correct way for React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();