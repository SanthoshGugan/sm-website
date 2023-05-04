import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPostApi, deletePostApi, feedsApi, fetchFeedApi, fetchMyPostApi } from "../api/PostApis";
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
    postError: null,
    createPostStatus: STATUS.IDLE,
    myPosts: [],
    myPostsStatus: STATUS.IDLE,
    myPostsError: null,
    deletePostStatus: STATUS.IDLE
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
        .addCase(fetchMyPosts.pending, state => {
            state.myPostsStatus = LOADING;
        })
        .addCase(fetchMyPosts.fulfilled, (state, action) => {
            state.myPostsStatus = SUCCEED;
            state.myPosts = [...action.payload] || [];
        })
        .addCase(fetchMyPosts.rejected, (state, action) => {
            state.myPostsStatus = FAILED;
            state.myPostsError = action.error?.message || action.reason;
        })  
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
        })
        .addCase(createPost.pending, state => {
            state.createPostStatus = LOADING
        })
        .addCase(createPost.fulfilled, (state) => {
            state.createPostStatus = SUCCEED;
        })
        .addCase(createPost.rejected, (state) => {
            state.createPostStatus = FAILED;
        })
        .addCase(deletePost.pending, state => {
            state.deletePostStatus = LOADING
        })
        .addCase(deletePost.fulfilled, (state) => {
            state.deletePostStatus = SUCCEED;
        })
        .addCase(deletePost.rejected, (state) => {
            state.deletePostStatus = FAILED;
        });    
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers,
    extraReducers
});

export const fetchMyPosts = createAsyncThunk(
    'myPosts',
    async id => {
        const resp = await fetchMyPostApi(id);
        return resp.data;
    }
)


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

export const createPost = createAsyncThunk(
    'post/create',
    async post => {
        const resp = await createPostApi(post);
        return resp.data;
    }
)

export const deletePost = createAsyncThunk(
    'post/delete',
    async id => {
        await deletePostApi(id);
    }
);

export const {
    feedFetched,
    postFetched
} = postSlice.actions;

export default postSlice.reducer;