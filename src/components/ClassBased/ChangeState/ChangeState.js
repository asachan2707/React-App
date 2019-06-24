import React from 'react';
import ChangeChildState from './ChangeChildState';

class ChangeState extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // way 1
        // this.setState({ count: 1 });

        // way 2
        this.setState((prevState) => {
            console.log('prv: ', prevState);
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick} >Change!</button>
                <ChangeChildState count={this.state.count} />
            </div>
        );
    }
}

export default ChangeState;