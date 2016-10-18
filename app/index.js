import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/app.css';

import App from './components/App';
import Main from './components/Main';
import InstallationGuide from './components/InstallationGuide';

import js from 'highlight.js/lib/languages/javascript';
import lowlight from 'lowlight/lib/core';
lowlight.registerLanguage('javascript', js);

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Main } />
      <Route path="installation" component={ InstallationGuide } />
    </Route>
  </Router>,
  document.getElementById('root')
);
