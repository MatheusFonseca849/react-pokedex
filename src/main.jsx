import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  GlobalStyle  from "./styles/global.js";
import Reset from './styles/reset.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Reset/>
    <App />
  </React.StrictMode>,
)
