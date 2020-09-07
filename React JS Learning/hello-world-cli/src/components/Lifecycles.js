import React, { Component } from 'react';

/*
rendering or mounting:
constructor
getDerivedStateFromProps
render
componentDidMount

update or change:
getDerivedStateFromProps
shouldComponentUpdate
render
getSnapshotBeforeUpdate
componentDidUpdate

Removing Or Unmounting:
componentWillUnmount
*/


class Lifecycles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: 'Life Cycles Events'
        }
        console.log('inside contructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('inside getDerivedStateFromProps');
        return { topic: props.topic };
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        console.log('inside componentDidMount');
    }

    render() {
        console.log('inside render');
        return <h1>Learning {this.state.topic}</h1>
    }
}

export default Lifecycles;