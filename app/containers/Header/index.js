import style from './style.css'
import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <a href="/about/">About Us</a>
          <a href="/contact/">Contact</a>
        </nav>
      </header>
    );
  }
}

export default Header;
