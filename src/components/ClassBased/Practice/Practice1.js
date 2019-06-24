import React from 'react'

class Practice1 extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.handleIncrementClick = this.handleIncrementClick.bind(this);
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
        this.handleSqtRootClick = this.handleSqtRootClick.bind(this);
        this.handleCubeRootClick = this.handleCubeRootClick.bind(this);
    }
    handleIncrementClick() {
        console.log('Increment button clicked');

        // way 1
        // this.setState({ counter: 10 });

        // way 2
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        });
    }
    handleDecrementClick() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter > 0 ? prevState.counter - 1 : 0
            }
        });
    }

    handleSqtRootClick() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter * prevState.counter
            }
        });
    }
    handleCubeRootClick() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter * prevState.counter * prevState.counter
            }
        });
    }

    render() {
        return (
            <div>

                <span>
                    <br /> <br />
                    <button onClick={this.handleIncrementClick}>Increment</button>
                    <br /><br />
                    <button onClick={this.handleDecrementClick}>Decrement</button>
                    <br />  <br />
                    <button onClick={this.handleSqtRootClick}>Square Root</button>
                    <br /><br />
                    <button onClick={this.handleCubeRootClick}>Cube Root</button>
                </span>
                <span><h3>Counter: {this.state.counter}</h3></span>

            </div>
        );
    }
}

export default Practice1;