import { useState,useEffect } from "react"
import React from 'react'

const One = () => {

    let [user,setuser]=useState([])

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/comments')

        .then(res => setuser(res.data))

        
    },[])
  return (
    <div>


        <pre>{JSON.stringify(user)}</pre>


      
    </div>
  )
}

export default One
