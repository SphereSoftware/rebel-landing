import styles from './styles.css';
import React from 'react';
import Logo from './images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="heavy-border-top">
        <a href="#" className={ `${styles.forkRibbon} text-center` }>Fork it on GitHub</a>
        <div className="layout horizontal center-center mb-40">
          <img src={ Logo } alt="logo" className={ styles.logo }/>
        </div>
        <div className="text-center text-24">
          Simple and clean SVG icon pack with the code to support
          <br/>
          Rails, Sprockets, Node.js, Gulp, Grunt and CDN.
        </div>
      </header>
    );
  }
}

export default Header;
