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
      <button onClick={gmhandle}>goodmornig</button>
      <button onClick={gnhandle}>goodnight</button>
    </div>
  )
}

export default Hook
