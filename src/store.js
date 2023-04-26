import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducer/UserReducer';
import thunk from 'redux-thunk';

const middleware = [thunk]

const reducer = combineReducers({
    user: UserReducer
})

const store  = configureStore({
    reducer,
    middleware
});

export default store;