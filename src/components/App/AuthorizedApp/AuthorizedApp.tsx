import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../../Navbar/Navbar';

interface Props { 
    history: any
}

export const AuthorizedApp: React.FC<Props> = ({history}) => {
    return (
        <div className="App">
            <Router history={history}>
                <Navbar authorized={true} />
                <Switch>
                    <Route path="/settings">
                        <div>settings</div>
                    </Route>
                    <Route path="/jobs">
                        <div>jobs</div>
                    </Route>
                    <Route path="/">
                        <div>jobs</div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
