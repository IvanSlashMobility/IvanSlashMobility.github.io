import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';


//TODO: change HashRouter to BrowserRouter if deploy server is properly configured
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App/>
  </HashRouter>
);
