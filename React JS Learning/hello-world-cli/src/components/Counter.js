import React, { Component } from 'react';
class Counter extends Component {
    state = {
        counter: 0,
        changeDefault: 1,
    }
    add = () => {
        this.setState({ counter: this.state.counter + this.state.changeDefault });
    }
    updateValues = (event) => {
        this.setState({ changeDefault: Number(event.target.value) });
    }

    componentWillUnmount() {
        console.log('component is going to be removed.');
    }

    render() {
        console.log('render called.');
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <span>It will increment by {this.state.changeDefault}.</span>
                <br />
                <span>change by:</span>  <input value={this.state.changeDefault} onChange={this.updateValues} />
                <br />
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}
export default Counter;