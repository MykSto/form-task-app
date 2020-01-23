import React from 'react';
import logo from 'assets/swedbank-logo.png';
import './Navbar.css';
import email from 'assets/email-icon.svg';
import mobile from 'assets/mobile-icon.svg';
import login from 'assets/log-icon.svg';

const Navbar = () => (
  <nav className="container-fluid pt-5 pb-5">
    <ul className="left-menu pl-0">
      <li className="logo">
        <img src={logo} alt="logo" />
      </li>
      <li className="environment">
        <span>PRIVATIEMS</span>
      </li>
    </ul>
    <ul className="right-menu pl-0">
      <li className="mobile-icon pr-4">
        <img src={mobile} alt="mobile" />
      </li>
      <li className="email-icon pr-4">
        <img src={email} alt="email" />
      </li>
      <li className="pr-4">LT</li>
      <li className="login-icon">
        <img src={login} alt="login" />
LOGIN
      </li>
    </ul>
  </nav>
);

export default Navbar;
