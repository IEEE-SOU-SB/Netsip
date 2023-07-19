// add header
// from 'evnia/client/src/assets/images/Untitled.svg'

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import logo from '../../assets/images/header_netsip-01.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        {/*<nav className="header__nav">*/}
        {/*  /!*<ul>*!/*/}
        {/*  /!*  <li>*!/*/}
        {/*  /!*    <Link to="/">Home</Link>*!/*/}
        {/*  /!*  </li>*!/*/}
        {/*  /!*  <li>*!/*/}
        {/*  /!*    <Link to="/about">About</Link>*!/*/}
        {/*  /!*  </li>*!/*/}
        {/*  /!*  <li>*!/*/}
        {/*  /!*    <Link to="/contact">Contact</Link>*!/*/}
        {/*  /!*  </li>*!/*/}
        {/*  /!*</ul>*!/*/}
        {/*</nav>*/}
      </header>
    );
  }
}

export default Header;