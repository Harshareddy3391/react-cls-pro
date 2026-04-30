import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Emp from './classprops/cls2.jsx'
//import Hook from './hooks/usestate/usestate'
//import Handler from './hooks/usestate/handler'
//import Message from './hooks/usestate/clsstate'


//import One from './apis/one.jsx'

import Fetchapi from './apis/two'

createRoot(document.getElementById('root1')).render(
  <StrictMode>

    <Fetchapi/>
 
 
   
     
  </StrictMode>,
)
