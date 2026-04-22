import React from "react";


class Emp extends React.Component{


    name="harsha";


    render(){
        return (
            <>
            <h1>hello i am class componet</h1>
            <p>{this.name}</p>
            </>
        );
    }
}

export default Emp;