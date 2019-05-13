import React from 'react';
import TodoItem from './TodoItem';
import MyTodoCss from './MyTodoCss.css'

function MyTodo() {
    return (
        // Todo List:
        <div className="todoList">
            <h4>Todo list:</h4>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}

export default MyTodo;