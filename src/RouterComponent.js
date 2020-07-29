import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import ImageView from './ImageView/ImageView';

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/image/:id" component={ImageView} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
