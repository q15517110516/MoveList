import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import Cart from './Cart/Cart';
import Review from './Review/Review';


const Router = () => (
    <Switch>
        <Route exact path="/MovieList/" component={Home}/>
        <Route exact path="/MovieList/Favorites" component={Favorites}/>
        <Route exact path="/MovieList/Cart" component={Cart}/>
        <Route exact path="/MovieList/Review" component={Review}/>

    </Switch>
)

export default Router
