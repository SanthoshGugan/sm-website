import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducer/UserReducer';
import thunk from 'redux-thunk';
import PostReducer from './reducer/PostReducer';

const middleware = [thunk]

const reducer = combineReducers({
    user: UserReducer,
    post: PostReducer
})

const store  = configureStore({
    reducer,
    middleware
});

export default store;