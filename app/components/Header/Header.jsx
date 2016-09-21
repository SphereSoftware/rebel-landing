import React from 'react';
import Logo from './images/logo.png';
import styles from './styles.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="heavy-border-top">
        <a href="#" className={ `${styles.forkRibbon} text-center` }>Fork it on GitHub</a>
        <div className="layout horizontal center-center mb-40">
          <img src={ Logo } alt="logo" className={ styles.logo }/>
        </div>
      </header>
    );
  }
}
