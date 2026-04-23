import React from "react";

class Message extends React.Component {

    constructor(props) {
        super(props);
        console.log("first constructor");

        this.state = { msg: "hello" };   // ✅ correct
    }

    render() {
        console.log("second render");

        return (
            <div>
                <h1>message component</h1>
                <h2>value: {this.state.msg}</h2>
            </div>
        );
    }
}

export default Message;