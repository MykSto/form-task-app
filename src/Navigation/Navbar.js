import React from "react";
import logo from "../Content/swedbank.png";
import "../Navigation/Navbar.css";
import email from "../Content/email-icon.svg";
import mobile from "../Content/mobile-icon.svg";
import login from "../Content/log-icon.svg"

const Navbar = () => {
  return (
      <nav className='container-fluid pt-5 pb-5'>
        <ul className="left-menu pl-0">
          <li className='logo'>
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
          <li className='pr-4'>LT</li>
          <li className='login-icon'><img src={login} alt="login"/>LOGIN</li>
        </ul>
      </nav>
  );
};

export default Navbar;
