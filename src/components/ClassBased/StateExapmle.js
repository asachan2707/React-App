import React, { Component } from 'react';

class StateExapmle extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: 'Yes',
            isLoggedIn: true
        }
    }

    render() {
        let worldDisplay;
        if (this.state.isLoggedIn) {
            worldDisplay = 'IN';
        } else {
            worldDisplay = 'OUT';
        }
        return (
            <div>
                Test!!!
                <br />
                State: {this.state.answer}
                <Child answer={this.state.answer} />
                <h5>You are currently logged {worldDisplay}</h5>
            </div>
        );
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                Child loaded.  :-)
                <br />
                Child state is {this.props.answer}
            </div>
        );
    }
}

export default StateExapmle;