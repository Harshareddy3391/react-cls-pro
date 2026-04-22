import React from 'react';
import { useState } from 'react';

const Hook = () => {

    let [msg,setmsg]=useState("hello")

    let gmhandle = ( )=>{
        setmsg("HEYY HII GOOD MORNIG")
    }

    let gnhandle = () =>{
        setmsg("HEYY HII GOOD NIGHT")
    }


  return (
    <div>
      <button onClick={gmhandle}>click gm</button>
      <button onClick={gnhandle}>click gn</button>

      <h1>{msg}</h1>
    </div>
  )
}

export default Hook
