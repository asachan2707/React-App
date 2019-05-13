import React from 'react';
import ContactCard from './ContactCard';
import ContactCardNew from './ContactCardNew';
import logo from '../logo.svg'

function ContactList() {

    // multiple ways of passing data in child component which is reusable

    return (
        <div className="contacts">
            <ContactCard contact={{ name: "Abhinav Singh", imgUrl: { logo }, phone: "4567890", email: "asa@mail.com" }} />

            <ContactCard contact={{ name: "Vijay Singh", imgUrl: { logo }, phone: "786755674", email: "vijay@mail.com" }} />

            <ContactCardNew
                name="Sanjay"
                imgUrl={logo}
                phone="38647896540"
                email="Sanjay@mail.com" />

            <ContactCardNew
                name="Ranvijay"
                imgUrl={logo}
                phone="04959690543"
                email="ranvijay@mail.com" />
        </div>
    );
}

export default ContactList; 