import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/StatusUtil";
import { addFriend, friendsByUserId, recommendationsByUserId } from "../api/FriendApi";

const initialState = {
    friends: [],
    recommendations: [],
    status: STATUS.IDLE,
    recommendationStatus: STATUS.IDLE,
    error: null
};

const reducers = {
    friendsFetched(state, action) {
        state.friends = action.payload;
        state.status = STATUS.SUCCEED;
    },
    recommendationsFetched(state, action) {
        state.recommendations = action.payload;
        state.recommendationStatus = STATUS.SUCCEED; 
    }
};

const extraReducers = builder => {
    builder
    .addCase(fetchFriends.pending, (state) => {
        state.status = STATUS.LOADING;
    })
    .addCase(fetchFriends.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEED;
        state.friends = action.payload;
    })
    .addCase(fetchFriends.rejected, state => {
        state.status = STATUS.FAILED;
    })
    .addCase(fetchRecommendations.pending, (state) => {
        state.recommendationStatus = STATUS.LOADING;
    })
    .addCase(fetchRecommendations.fulfilled, (state, action) => {
        state.recommendationStatus = STATUS.SUCCEED;
        state.recommendations = action.payload;
    })
    .addCase(fetchRecommendations.rejected, state => {
        state.recommendationStatus = STATUS.FAILED;
    })
}

const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers,
    extraReducers
});

export const fetchFriends = createAsyncThunk(
    'friends/{userId}',
    async id => {
        const response = await friendsByUserId(id);
        return response.data;
    }
);

export const fetchRecommendations = createAsyncThunk(
    'friends/recommendation/{userid}',
    async id => {
        const response = await recommendationsByUserId(id);
        return response.data;
    }
);

export const addFriendAsync = createAsyncThunk(
    'friends/add',
    async (friend, { dispatch }) => {
        const { user_id: id } = friend;
        await addFriend(friend);
        dispatch(fetchFriends(id));
        dispatch(fetchRecommendations(id));
    }
);


export const {
    friendsFetched,
    recommendationsFetched
} = friendsSlice.actions;

export default friendsSlice.reducer;