import { useState,useEffect } from "react"
import React from 'react'
import Axios from 'axios'

const One = () => {

    let [user,setuser]=useState([])

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/comments')

         .then((res)=>{setuser(res.data)})
         .catch(err=>console.log(err))

        
    },[])
  return (
    <div>


        <pre>{JSON.stringify(user)}</pre>


       {user.length > 0 ? <>
       <table style={{
         border:"2px solid #333",
         borderCollapse:"collapse",
         width:"100%",
         marginTop:"20px",
         boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
       }}>
        <thead style={{backgroundColor:"#4CAF50",color:"white"}}> 
            <th style={{border:"1px solid #333", padding:"12px", textAlign:"left", fontWeight:"bold"}}>ID</th>
            <th style={{border:"1px solid #333", padding:"12px", textAlign:"left", fontWeight:"bold"}}>Name</th>
            <th style={{border:"1px solid #333", padding:"12px", textAlign:"left", fontWeight:"bold"}}>Email</th>
        </thead>

        <tbody> 
            {user.map((user,index)=>{
                return <tr key={index} style={{backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff"}}>
                    <td style={{border:"1px solid #ddd", padding:"10px"}}>{user.id}</td>
                    <td style={{border:"1px solid #ddd", padding:"10px"}}>{user.name}</td>
                    <td style={{border:"1px solid #ddd", padding:"10px"}}>{user.email}</td>
                </tr>
            })}
        </tbody>
       </table>
       </> : <h1>Loading...</h1>}


      
    </div>
  )
}

export default One
