import React from 'react';
import Props1 from './props';   

const Props2 = (props) => {
  return (
    <div>

        <pre>{JSON.stringify(props)}</pre>
        <p>hello</p>

        <h1>i am props 2 but from {props.name}{props.l_name}</h1>
        
      
    </div>
  )
}

export default Props2
