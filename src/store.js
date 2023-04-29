import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducer/UserReducer';
import thunk from 'redux-thunk';
import PostReducer from './reducer/PostReducer';
import CommentReducer from './reducer/CommentReducer';

const middleware = [thunk]

const reducer = combineReducers({
    user: UserReducer,
    post: PostReducer,
    comment: CommentReducer
})

const store  = configureStore({
    reducer,
    middleware
});

export default store;