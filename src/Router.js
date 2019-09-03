import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '~/Views/Home';
import Detail from '~/Views/Detail';

const Routes = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/salon/:id' component={Detail} />
    </Router>
  );
};

export default Routes;
