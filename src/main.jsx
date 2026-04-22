import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Emp from './classprops/cls2.jsx'
import Hook from './hooks/usestate/usestate'

createRoot(document.getElementById('root1')).render(
  <StrictMode>
 
   <Hook/>
     
  </StrictMode>,
)
