import React from 'react';

function ContactCard(props) {
    console.log(props);
    return (
        <div className="constact-card">
            <img src={props.contact.src} />
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>email: {props.contact.email}</p>
        </div>
    );
}

export default ContactCard;