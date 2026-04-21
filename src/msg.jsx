import React from 'react'


const Message = () => {


    let msg="good morning"
    function greet(){
        return "hello i am function"
    }
  return (
    <div>

        <h1>this is varible : {msg}</h1>
        <h1>this is function : {greet()}</h1>
      
    </div>
  )
}

export default Message
