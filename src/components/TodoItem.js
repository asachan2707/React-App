import React from 'react';
import TodoItemCss from './TodoItemCss.css'

function TodoItem() {
    return (
        <span className="todoItem">
            <input type="checkbox" />
            <p className="todoText">Place holder text</p>
        </span>
    );
}

export default TodoItem;