import React, { Component } from 'react';

function changeState() {
    console.log('My state is ready to change');
    this.props.todo.completed = !this.props.todo.completed;
}

class TodoClassItem extends Component {

    render() {
        return (
            <div>
                <div>
                    <tr className="todoItem">
                        <td><input type="checkbox" checked={this.props.todo.completed} onChange={changeState} /></td>
                        <td><p className="todoText">{this.props.todo.text}</p></td>
                    </tr>
                </div>
            </div>
        );
    }
}

export default TodoClassItem;