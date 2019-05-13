import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import MyTodo from './components/MyTodo';
import ContactList from './components/ContactList'

// Normal page with header, footer and main content section
// ReactDOM.render(<App />, document.getElementById('root'))

// a small todo app
// ReactDOM.render(<MyTodo />, document.getElementById('root'))

// Reusable component
ReactDOM.render(<ContactList />, document.getElementById('root'))