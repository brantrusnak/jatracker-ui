import React, { useState } from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import { UnauthorizedApp } from './UnauthorizedApp/UnauthorizedApp';
import { AuthorizedApp } from './AuthorizedApp/AuthorizedApp';

export const App: React.FC = () => {
  const [auth, setAuth] = useState(false);
  const history = createBrowserHistory();
  return (
    <div className="App">
      <button onClick={() => setAuth(!auth)}>Switch</button>
      {auth === true ? <AuthorizedApp history={history} /> : <UnauthorizedApp history={history} />}
    </div>
  )
}