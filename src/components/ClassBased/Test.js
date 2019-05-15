import React from 'react';

class Test extends React.Component {
    render() {
        return (
            <div>
                <Header username={'Abhianv'}/>
                <Greeting />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}</p>
            </header>
        );
    }
}

class Greeting extends React.Component {
    render() {
        const date = new Date();
        const hours = date.getHours();

        return (
            <div>
            Number of hours passed {hours}
            </div>
        );
    }
}

export default Test;