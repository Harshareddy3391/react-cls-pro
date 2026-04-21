import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Props1 from './props/props.jsx'

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <Props1/>
     
  </StrictMode>,
)
