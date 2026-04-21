import React from 'react';
import Props2 from './props2';

const Props1 = () => {

    let name="harsha"
    let l_name="vardhan"
  return (
    <div>
        <p>hey  i am props1</p>
        <Props2 name={name} l_name={l_name}/>
      
    </div>
  )
}

export default Props1;
