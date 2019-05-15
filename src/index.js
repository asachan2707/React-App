import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import MyTodo from './components/MyTodo';
import ContactList from './components/ContactList'
import JokeList from './components/Joke/JokeList'
import JokeList2 from './components/Joke/JokeList2';
import ProductList from './components/Products/ProductList'
import TodoList from './components/Todo/TodoList';
import Test from './components/ClassBased/Test';
import StateExapmle from './components/ClassBased/StateExapmle';

// Functional component start
    // 1 Normal page with header, footer and main content section
    // ReactDOM.render(<App />, document.getElementById('root'))

    // 2 a small todo app
    // ReactDOM.render(<MyTodo />, document.getElementById('root'))

    // 3 Reusable component
    // ReactDOM.render(<ContactList />, document.getElementById('root'))

    // 4 Practice session
    // ReactDOM.render(<JokeList />, document.getElementById('root'));
    // ReactDOM.render(<JokeList2 />, document.getElementById('root'))
    
    // 5
    // ReactDOM.render(<ProductList />, document.getElementById('root'));

    // 6 New todo with more functionality
    // ReactDOM.render(<TodoList />, document.getElementById('root'));
// Functional component end


// Class based component
    // 7 Practice
    // ReactDOM.render(<Test />, document.getElementById('root'));

    // 8
    ReactDOM.render(<StateExapmle />, document.getElementById('root'));