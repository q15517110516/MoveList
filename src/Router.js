import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import Cart from './Cart/Cart';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Favorites" component={Favorites}/>
        <Route exact path="/Cart" component={Cart}/>
    </Switch>
)

export default Router
