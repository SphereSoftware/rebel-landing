import AppStyles from './css/app.css';

import React from 'react';
import IconConfigurator from './IconConfigurator';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

class App extends React.Component {
 render() {
    return (
      <div>
        <Header/>
          <IconConfigurator>
            <Main />
          </IconConfigurator>
        <Footer/>
      </div>
    );
  }
}

export default App;
