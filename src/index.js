import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/routes/app';
import '../src/styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
