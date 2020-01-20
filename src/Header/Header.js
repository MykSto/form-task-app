import React from 'react';
import './Header.css'
import Navbar from '../Navigation/Navbar'

const Header = (props) => {
    return(
        <header className="header">
             <Navbar />
        </header>
    )
}

export default Header;