import {useState,useEffect } from 'react'
import React from 'react'
import Axios   from 'axios'

const Fetchapi = () => {


    let [data,setdata]=useState([])
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>setdata(res.data))
        //.then((catch)=>console.log(catch))
    })
  return (
    <div>

        <pre>{data}</pre>
      
    </div>
  )
}

export default Fetchapi
