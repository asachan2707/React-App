import React from 'react';

function ContactCardNew(props) {
    return (
        <div className="constact-card">
            <img src={props.src} />
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>email: {props.email}</p>
        </div>
    );
}

export default ContactCardNew;