import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import App from './components/App';
import Main from './components/Main';
import InstallationGuide from './components/InstallationGuide';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Main } />
      <Route path="installation" component={ InstallationGuide } />
    </Route>
  </Router>,
  document.getElementById('root')
);
