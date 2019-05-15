import React from 'react';
import MyTodoCss from '../MyTodoCss.css'

function TodoItem(props) {

    return (
        <div>
            <tr className="todoItem">
                <td><input type="checkbox" checked={props.todo.completed} /></td>
                <td><p className="todoText">{props.todo.text}</p></td>
            </tr>
        </div>
    );
}

export default TodoItem;