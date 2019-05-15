import React from 'react';
import Joke from './Joke'

function JokeList() {
    return (
        <div>
            <Joke punch='Hi I am there' />
            <Joke question='make my day?' punch='Hi I am there' />
            <Joke question='hows your day?' />
            <Joke question='how are you?' punch='Hi I am there' />
            <Joke question='how are you?' punch='Hi I am there' />
        </div>
    );
}

export default JokeList;