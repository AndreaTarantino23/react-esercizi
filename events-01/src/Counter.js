import React from "react";
import { ClickCounter } from "./ClickCounter";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.start
    }
    render() {
        return <div>
            <CounterDisplay count={this.state.count} />
            <ClickCounter />
        </div>
    }
}
