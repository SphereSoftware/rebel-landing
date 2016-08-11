import React from 'react'
import style from './style.css'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={style.copyright}>© 2016 Company, Inc. All Rights Reserved.</div>
        <nav>
          <a href="/about/">About Us</a>
          <a href="/contact/">Contact</a>
        </nav>
      </footer>
    );
  }
}

export default Footer;
