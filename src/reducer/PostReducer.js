import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { feedsApi, fetchFeedApi } from "../api/PostApis";
import { STATUS } from "../utils/StatusUtil";

const {
    IDLE,
    LOADING,
    SUCCEED,
    FAILED
} = STATUS;

const initialState = {
    feed: [],
    feedStatus: IDLE,
    feedError: null,
    post: {},
    postStatus: IDLE,
    postError: null
};

const reducers = {
    feedFetched(state, action) {
        state.feed = action.payload;
    },
    postFetched(state, action) {
        state.post = action.payload;
    }
};

const extraReducers = builder => {
    builder
        .addCase(fetchFeed.pending, state => {
            state.feedStatus = LOADING;
        })
        .addCase(fetchFeed.fulfilled, (state, action) => {
            state.feedStatus = SUCCEED;
            state.feed = [...action.payload] || [];
        })
        .addCase(fetchFeed.rejected, (state, action) => {
            state.feedStatus = FAILED;
            state.feedError = action.error?.message || action.reason;
        })
        .addCase(fetchPost.pending, state => {
            state.postStatus = LOADING
        })
        .addCase(fetchPost.fulfilled, (state, action) => {
            state.postStatus = SUCCEED
            state.post = action.payload;
        })
        .addCase(fetchPost.rejected, (state, action) => {
            state.postStatus = FAILED;
            state.postError = action.error?.message || action.reason;
        });    
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers,
    extraReducers
});


export const fetchFeed = createAsyncThunk(
    'posts/feed',
    async id => {
        const resp = await feedsApi(id);
        return resp.data;
    }
);

export const fetchPost = createAsyncThunk(
    'posts/{id}',
    async id => {
        const resp = await fetchFeedApi(id);
        return resp.data;
    }
);

export const {
    feedFetched,
    postFetched
} = postSlice.actions;

export default postSlice.reducer;