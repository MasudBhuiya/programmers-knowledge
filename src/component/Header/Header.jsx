import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Programmer's Knowledge</h2>
            <div>
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="login">Log-In</a>
            </div>
        </div>
    );
};

export default Header;