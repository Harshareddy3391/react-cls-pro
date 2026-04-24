import React, { useState } from 'react'

const Handler = () => {
    ler [msg,setmsg]=useState("hello")


    let updateva=(val)=>{

        setmsg(val)

    }
  return (
    <div>

        <h1>{msg}</h1>
        <button onClick={updateva.bind(null,"gm")}>gm</button>
        <button onClick={updateva.bind(null,"ga")}>ga</button>
        <button onClick={updateva.bind(null,"ge")}>ge</button>
        <button onClick={updateva.bind(null,"gn")}>gn</button>
      
    </div>
  )
}

export default Handler;
