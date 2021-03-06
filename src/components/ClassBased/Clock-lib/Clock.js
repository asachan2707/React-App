import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    // lifecycle methods
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>Hello World !!!</h2>
                <h4>Time is {this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export default Clock;


// When < Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component.Since Clock needs to display the current time, it initializes this.state with an object including the current time.We will later update this state.
// React then calls the Clock component’s render() method.This is how React learns what should be displayed on the screen.React then updates the DOM to match the Clock’s render output.
// When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method.Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
// Every second the browser calls the tick() method.Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time.Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen.This time, this.state.date in the render() method will be different, and so the render output will include the updated time.React updates the DOM accordingly.
// If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.

// Wrong
// this.setState({
//     counter: this.state.counter + this.props.increment,
//   });

// Correct
// this.setState((state, props) => ({
//     counter: state.counter + props.increment
//   }));