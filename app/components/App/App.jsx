import React, { PropTypes } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import './css/app.css';

export default function App({ children }) {
  return (
    <div>
      <Header/>
      { children }
      <Footer/>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node
};
