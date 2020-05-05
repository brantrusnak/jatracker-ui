import React from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { Router, Switch, Route } from 'react-router-dom';
import { Signin } from '../Signin/Signin';
import { Signup } from '../Signup/Signup';
import { Landing } from '../Landing/Landing';
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />

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

export default App;
