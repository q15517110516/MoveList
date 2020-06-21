import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';

const BasicRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
)

export default BasicRouter;
