import React from 'react';
import MyTodoCss from './MyTodoCss.css'

function TodoItem() {
    return (
        <span className="todoItem">
            <input type="checkbox" />
            <p className="todoText">Place holder text</p>
        </span>
    );
}

export default TodoItem;