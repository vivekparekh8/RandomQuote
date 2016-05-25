// import React, {Component, PropTypes} from 'react';

// import Main from '../components/Main';
// import card from '../components/card';
// import Router, {Route} from 'react-router';

// var IndexRoute = Router.IndexRoute

// export default (
//   <Route path="/" component={Main}>
  
//   <IndexRoute component={card} />
//   </Route>
// )

import React, {Component, PropTypes} from 'react';
import Main from '../components/Main';
import card from '../components/card';

var Router = require('react-router')
import { Route, IndexRoute } from 'react-router';
export default (
  <Route path="/" component={Main}>
 
  <IndexRoute component={card} />
  </Route>
)