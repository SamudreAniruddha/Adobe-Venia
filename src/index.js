import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import Router from './Router';
import { store } from './store';

import './aem-grid.css';


/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
);

reportWebVitals(); */

ReactDOM.createRoot(
  document.getElementById('root')
  ).render(
    <Provider store={store}>
     
      <Router />
    </Provider>
);

