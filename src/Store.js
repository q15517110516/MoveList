import { createStore } from 'redux';
import reducer from './Reducers/Reducer';


const initialState = {};

const store = createStore(
    reducer,
    initialState
)

export default store;