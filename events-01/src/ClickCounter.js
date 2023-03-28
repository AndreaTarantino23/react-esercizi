import React from "react";

export class ClickCounter extends React.Component {
    state = { count: 0 }

    handleCounterState() {
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        })
    }
    render() {
        return (
            <button onClick={this.handleCounterState.bind(this)}>
                Counter: {this.state.count}
            </button>
        )
    }

}
