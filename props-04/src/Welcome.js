import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome, {this.props.name}!</h1>
                <p>Your age is {this.props.age}</p>
            </div>
        )
    }
}
Welcome.defaultProps = {
    name: "Andrea",
    age: 26
}