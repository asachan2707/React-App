import React from 'react';
import todosData from '../../data/todosData';
import TodoClassItem from './TodoClassItem';

class TodoClassList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todoComponent = this.state.todos.map(item => <TodoClassItem key={item.id} todo={item} />);
        return (
            <div className="todoList">
                {todoComponent}
            </div>
        );
    }
}

export default TodoClassList;