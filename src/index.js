import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import './index.css';

import Home from './components/Home'
import Projects from './components/Projects'
import notFound from './components/NotFound'
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div>
            <Menu>
                <Menu.Item as={Link} to='/'>
                    Home
                </Menu.Item>
                <Menu.Item as={Link} to='/projects'>
                    Projects
                </Menu.Item>
            </Menu>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/projects' component={Projects} />
                <Route component={notFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
