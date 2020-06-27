import Movies from '../Movies-img/Movies';
import { ADD_TO_FAVORITES } from '../Actions/ActionTypes'


const initialState = {
    movies: Movies,
    favorite: []
}

export default function(state = initialState, action){
    let addedMovie = state.movies.find(movie => movie.id === action.id);
    let existedMovie = state.favorite.find(movie => action.id === movie.id);
    switch(action.type){
        case ADD_TO_FAVORITES:
            if(existedMovie){
                return {
                    favorite: [addedMovie]
                }
            }
            else{
                return {
                    ...state,
                    favorite: [...state.favorite, addedMovie]
                }
            };

        default:
            return state;
    }
    
}