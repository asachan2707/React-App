import React from 'react'

class ChangeChildState extends React.Component {

    render() {
        return (
            <div>
                <p>Child state: {this.props.count}</p>
            </div>
        );
    }
}

export default ChangeChildState;