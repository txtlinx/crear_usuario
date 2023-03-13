import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles';
import AppProvider from './context/appContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <GlobalStyle />
    <AppProvider>
      <App />
    </AppProvider>
  </React.Fragment>
);
