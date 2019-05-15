import React from 'react';
import jokesData from '../data/jokesData'
import Joke from './Joke';

function JokeList2() {
    const jokesComponent = jokesData.map((joke) => <Joke key={joke.id} question={joke.question} punch={joke.punch} />);

    return (
        <div>
            {jokesComponent}
        </div>
    );
}

export default JokeList2;