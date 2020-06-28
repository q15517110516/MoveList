import { ADD_TO_FAVORITES } from './ActionTypes';
import { ADD_TO_CART } from './ActionTypes';


export const addToFavorites = (id) => {
    return {
        type: ADD_TO_FAVORITES,
        id
    };
};

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    };
};