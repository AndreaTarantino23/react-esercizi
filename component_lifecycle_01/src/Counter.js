import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.start
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                count: this.state.count + this.props.amount
            })
        }, this.props.interval)
    }


    render() {
        return <div>
            <CounterDisplay count={this.state.count} />
        </div>
    }
}
