import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Movi from './movi.jsx';
import Clacomponet from './clscomp.jsx';

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <App />
    <Movi/>
    <Clacomponet/>
  </StrictMode>,
)
