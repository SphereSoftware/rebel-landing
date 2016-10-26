import React, { PropTypes } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

export default function App({ children }) {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node
};
