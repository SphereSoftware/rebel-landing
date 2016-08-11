import normalize from './css/normalize.css'
import base from './css/base.css'
import style from './css/style.css'

import React from 'react'

import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

class App extends React.Component {
 render() {
    return (
      <div className={style.app}>
        <h1>red text <small>green</small></h1>
        <Header/>
          <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
