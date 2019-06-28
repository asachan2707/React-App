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
import TodoClassList from './components/ClassBased/Todo/TodoClassList';
import EventHandling from './components/ClassBased/EventHandling/EventHandling';
import ChangeState from './components/ClassBased/ChangeState/ChangeState';
import Practice1 from './components/ClassBased/Practice/Practice1';
import Clock from './components/ClassBased/Clock-lib/Clock'
import Toggle from './components/ClassBased/Toggle-lib/Toggle'
import Login from './components/ClassBased/Login-lib/Login'
import Blog from './components/ClassBased/Blog-lib/Blog';
import Form_Reservation from './components/ClassBased/Reservation-lib/ReservationForm'
import Temparature_Calculator from './components/ClassBased/Temp_Calculator/Temparature_Calculator'
import Temparature_Calculator2 from './components/ClassBased/Temp_Calculator/Temparature_Calculator2'

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
    // ReactDOM.render(<StateExapmle />, document.getElementById('root'));

    // 9 Event handling i.e. click, hover
    // ReactDOM.render(<EventHandling />, document.getElementById('root')); 

    // 10 state change
    // ReactDOM.render(<ChangeState />, document.getElementById('root'));

    // Practice - 1
    // ReactDOM.render(<Practice1 />, document.getElementById('root'));

    // 11 TODO app classbased with more features
    // ReactDOM.render(<TodoClassList />, document.getElementById('root'));

    // 12 Create a clock 
    // ReactDOM.render(<Clock />, document.getElementById('root'));  // explanation in Clock component

    // 13 Toggle
    // ReactDOM.render(<Toggle />, document.getElementById('root'));

    // 14 Login console
    // ReactDOM.render(<Login />, document.getElementById('root'));

    // 15 Unique 'Key'
    // ReactDOM.render(<Blog />, document.getElementById('root'));

    // 16 Form
    // ReactDOM.render(<Form_Reservation />, document.getElementById('root'));

    // 17 A.  Lifting State Up > Temparature calculator
    // ReactDOM.render(<Temparature_Calculator />, document.getElementById('root'));

    // 17 B.  Lifting State Up > Temparature calculator
    ReactDOM.render(<Temparature_Calculator2 />, document.getElementById('root'));