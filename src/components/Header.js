import React from 'react';
import HeaderCss from './HeaderCss.css'

function Header() {
    return (
        <header>
            <nav>
                <h1 className="header">This is the header</h1>
                <ul>
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                    <li>Thing 3</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;