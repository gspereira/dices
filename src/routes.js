import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import AddListForm from './components/AddListForm';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Form" component={AddListForm} />
        </Switch>
    </Router>
);

export default Routes;