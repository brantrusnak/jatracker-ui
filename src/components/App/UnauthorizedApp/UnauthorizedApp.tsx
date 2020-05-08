import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../../Navbar/Navbar';
import { Signin } from '../../Signin/Signin';
import { Signup } from '../../Signup/Signup';
import { Landing } from '../../Landing/Landing';

interface Props { 
    history: any
}

export const UnauthorizedApp: React.FC<Props> = ({history}) => {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar authorized={false} />
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}