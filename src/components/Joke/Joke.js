import React from 'react';
import { tsPropertySignature } from '@babel/types';

function Joke(props) {
    console.log('props: ', props);
    return (
        <div>
            <div style={{ display: !props.question && 'none' }}>Question: {props.question}</div>
            <div style={{ display: !props.punch && 'none' }}>Punch: {props.punch}</div>
            <hr />
        </div>
    );
}

export default Joke;