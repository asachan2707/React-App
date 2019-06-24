import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ isToggleOn: !this.state.isToggleOn });
    }

    render() {
        return (
            <div>Toggle is {this.state.isToggleOn ? 'ON' : 'OFF'}
                <br />
                <h4><button onClick={this.handleClick}>Toggle</button></h4>
            </div>
        );
    }
}

export default Toggle;