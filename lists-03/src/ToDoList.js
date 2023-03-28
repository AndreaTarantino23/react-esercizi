import React from "react";

export class ToDoList extends React.Component {

    state = {
        task: ""
    }

    arr = []
    element = []
    handleEvent = () => {
        this.arr.push(this.state.task);
        this.element = this.arr.map(el => <li>{el}</li>)
        console.log(this.element)
    }

    render() {

        return (
            <div>
                <input placeholder="Insert task" onChange={e => this.setState({ task: e.target.value })} />
                <button type="button" onClick={this.handleEvent}>Add</button>
                <ul>{this.element}</ul>
            </div>
        )
    }
}
