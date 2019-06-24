import React from 'react'

function handleClick(params) {
    setTimeout(function () {
        alert("Click happen !!!");
        console.log('I was clicked');
    }, 2000);
}

class EventHandling extends React.Component {
    render() {
        return (
            <div>
                <img src="../../../logo.svg" onMouseOver={() => console.log('IMG hovered')} />
                <br />
                <br />
                <button onClick={handleClick}>Click me!</button>
            </div>
        );
    }
}

export default EventHandling;