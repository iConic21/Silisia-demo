import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Loadable from 'react-loadable';

// TODO add loading place holder
const Teams = Loadable({
    loader: () => import('./components/modules/Teams'),
    loading: () => <span />,
});

// TODO add loading place holder
const ProjectDashboard = Loadable({
    loader: () => import('./components/modules/Projects/Dashboard'),
    loading: () => <span />,
});

// TODO add loading place holder
const Login = Loadable({
    loader: () => import('./components/modules/AuthenticationPages/Login'),
    loading: () => <span />,
});

class App extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact={true} component={Teams} path='/' />
                    <Route exact={true} component={ProjectDashboard} path='/team/:teamId/project/:id' />
                    <Route exact={true} component={Login} path='/login' />
                </Switch>
            </div>
        );
    }
}

export default App;
