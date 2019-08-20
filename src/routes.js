import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/main';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
    </Router>
);

export default Routes;