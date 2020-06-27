import { ADD_TO_FAVORITES } from './ActionTypes';

export const addToFavorites = (id) => {
    return {
        type: ADD_TO_FAVORITES,
        id
    };
};