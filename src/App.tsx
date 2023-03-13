import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './config/routes';

function App() {
  return <RouterProvider router={Routes} />;
}

export default App;
