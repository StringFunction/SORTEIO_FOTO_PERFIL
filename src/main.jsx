import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Conteiner from './conteiner/Conteiner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Conteiner>

    <App />   
    </Conteiner>
  </StrictMode>,
)
