import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
 
const Handler = () => {
    let [msg,setmsg]=useState("hello")


    let updateva=(val)=>{

        setmsg(val)

    }
  return (
    <div>

        <h1>{msg}</h1>
        <button className="btn btn-warning"  onClick={updateva.bind(null,"gm")}>gm</button>
        <button onClick={updateva.bind(null,"ga")}>ga</button>
        <button onClick={updateva.bind(null,"ge")}>ge</button>
        <button onClick={updateva.bind(null,"gn")}>gn</button>
        <button onClick={()=>setmsg("hello single handler")}>hi</button>
        
      
    </div>
  )
}

export default Handler;
