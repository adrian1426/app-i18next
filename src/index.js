import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './config/i18next-config';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="cargando">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
