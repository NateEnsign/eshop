import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);
