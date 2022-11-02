/* eslint-disable */
/* eslint disabled here for module.hot.accept(); */

import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.sass';
import App from './components/App/App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <p>text</p>
    {/* <App /> */}
  </React.StrictMode>
);

module.hot.accept();
