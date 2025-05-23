import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from './contexts/BudgetsContext.jsx'; 
import { BrowserRouter } from 'react-router-dom';
import {AuthContextProvider} from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <BrowserRouter>
    <AuthContextProvider>
      <BudgetsProvider>
        <App />
      </BudgetsProvider>
    </AuthContextProvider>
  //   </BrowserRouter>
  // </React.StrictMode>,
)
