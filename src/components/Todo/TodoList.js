import React from 'react';
import todosData from '../data/todosData';
import TodoItem from './TodoItem';
import MyTodoCss from '../MyTodoCss.css'

function TodoList() {
    const todosComponents = todosData.map((item) => <TodoItem key={item.id} todo={item} />)

    return (
        <div className="todoList">
            <h4>Todo list:</h4>
            {todosComponents}
        </div>
    );

}

export default TodoList;