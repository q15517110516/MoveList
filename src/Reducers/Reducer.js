import Movies from '../AllMovies';
import { ADD_TO_FAVORITES, 
        ADD_TO_CART, 
        REMOVE_MOVIE,
        REMOVE_FAVORITES,
        CHECK_OUT
        } from '../Actions/ActionTypes'


const initialState = {
    movies: Movies,
    favorite: [],
    cart: [],
    totalPrice: 0,
    myMovies: [],
    // disabled: false //TODO

};

export default function(state = initialState, action){
    let addedMovie = state.movies.find(movie => movie.id === action.id);

    // Favorite
    let existedMovie = state.favorite.find(movie => action.id === movie.id);
    let newFavorite = state.favorite.filter(movie => action.id !== movie.id);

    // Cart
    let cartMovie = state.cart.find(movie => action.id === movie.id);
    let newCart = state.cart.filter(movie => action.id !== movie.id);

    switch(action.type){

        // Add to Favorite
        case ADD_TO_FAVORITES:
            if(existedMovie){
                return {
                    ...state,
                    favorite: [...state.favorite],
                }
            }
            else{
                return {
                    ...state,
                    favorite: [...state.favorite, addedMovie],
                }
            }

        // Add to Cart
        case ADD_TO_CART:
            if(cartMovie){
                return {
                    ...state,
                    cart: [...state.cart],
                    totalPrice: state.totalPrice + addedMovie.price
                }
            }
            else{
                let newTotalPrice = state.totalPrice + addedMovie.price;
                return {
                    ...state,
                    cart: [...state.cart, addedMovie],
                    totalPrice: newTotalPrice
                }
            }

        case REMOVE_FAVORITES:
            return {
                ...state,
                favorite: newFavorite
            }

        // Remove movie from Cart
        case REMOVE_MOVIE:
            let newTotalPrice = state.totalPrice - (cartMovie.price);
            return {
                ...state,
                cart: newCart,
                totalPrice: newTotalPrice
            }

        // Check out and move movies from Cart to Review 
        case CHECK_OUT:
            return {
                ...state,
                myMovies: state.cart,
                cart: [],
                
            }

        default:
            return state;
    }
    
}