import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Emp from './classprops/cls2.jsx'
//import Hook from './hooks/usestate/usestate'
import Message from './hooks/usestate/clsstate'

createRoot(document.getElementById('root1')).render(
  <StrictMode>
 
 
   <Message/>
     
  </StrictMode>,
)
