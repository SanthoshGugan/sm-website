import { createSlice } from "@reduxjs/toolkit";
import { fetchFeed } from "../api/PostApis";


const initialState = {
    feed: [],
    feedStatus: 'idle',
    error: null
};

const reducers = {
    feedFetched(state, action) {
        state.feed = action.payload;
    }
};

const extraReducers = builder => {
    builder
        .addCase(fetchFeed.pending, state => {
            state.feedStatus = 'loading';
        })
        .addCase(fetchFeed.fulfilled, (state, action) => {
            state.feedStatus = 'succeeded';
            state.feed = [...action.payload] || [];
        })
        .addCase(fetchFeed.rejected, (state, action) => {
            state.feedStatus = 'failed';
            state.error = action.error?.message || action.reason;
        });    
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers,
    extraReducers
});

export const {
    feedFetched
} = postSlice.actions;

export default postSlice.reducer;