import { ADD_TO_FAVORITES } from './ActionTypes';
import { ADD_TO_CART } from './ActionTypes';
import { REMOVE_MOVIE } from './ActionTypes';
import { REMOVE_FAVORITES } from './ActionTypes';
import { CHECK_OUT } from './ActionTypes';




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

export const removeFavorites = (id) => {
    return {
        type: REMOVE_FAVORITES,
        id
    };
};

export const removeMovie = (id) => {
    return {
        type: REMOVE_MOVIE,
        id
    };
};

export const checkOut = (movie) => {
    return {
        type: CHECK_OUT,
        movie
    };
};

