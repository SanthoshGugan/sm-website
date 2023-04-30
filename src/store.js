import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducer/UserReducer';
import thunk from 'redux-thunk';
import PostReducer from './reducer/PostReducer';
import CommentReducer from './reducer/CommentReducer';
import FriendReducer from './reducer/FriendReducer';

const middleware = [thunk]

const reducer = combineReducers({
    user: UserReducer,
    post: PostReducer,
    comment: CommentReducer,
    friend: FriendReducer
})

const store  = configureStore({
    reducer,
    middleware
});

export default store;