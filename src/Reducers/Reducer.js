import Movies from '../AllMovies';
import { ADD_TO_FAVORITES, ADD_TO_CART } from '../Actions/ActionTypes'


const initialState = {
    movies: Movies,
    favorite: [],
    cart: [],
    totalPrice: 0

}

export default function(state = initialState, action){
    let addedMovie = state.movies.find(movie => movie.id === action.id);
    let existedMovie = state.favorite.find(movie => action.id === movie.id);
    let cartMovie = state.cart.find(movie => action.id === movie.id);
    
    switch(action.type){
        case ADD_TO_FAVORITES:
            if(existedMovie){
                return {
                    ...state,
                    favorite: [...state.favorite]
                }
            }
            else{
                return {
                    ...state,
                    favorite: [...state.favorite, addedMovie]
                }
            };
        case ADD_TO_CART:
            if(cartMovie){
                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
            else{
                return {
                    ...state,
                    cart: [...state.cart, addedMovie]
                }
            };
        default:
            return state;
    }
    
}