import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import Cart from './Cart/Cart';


const BasicRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Favorites" component={Favorites}/>
        <Route path="/Cart" component={Cart}/>
    </Switch>
)

export default BasicRouter;
