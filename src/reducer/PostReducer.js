import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPostApi, deletePostApi, editPostApi, feedsApi, fetchFeedApi, fetchMyPostApi } from "../api/PostApis";
import { STATUS } from "../utils/StatusUtil";
import { createLikeByUserAndPostApi, deleteLikeByUserAndPostApi, likeByUserAndPostApi } from "../api/LikeApi";
import { useDispatch } from "react-redux";

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
    editPost: {},
    editPostStatus: STATUS.IDLE,
    deletePostStatus: STATUS.IDLE,
    userLikedPost: false,
    likeByUserAndPostStatus: STATUS.IDLE,
};

const reducers = {
    feedFetched(state, action) {
        state.feed = action.payload;
    },
    postFetched(state, action) {
        state.post = action.payload;
    },
    editPostInit(state, action) {
        state.editPost = action.payload;
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
        .addCase(editPostAsync.pending, state => {
            state.editPostStatus = LOADING
        })
        .addCase(editPostAsync.fulfilled, (state) => {
            state.editPostStatus = SUCCEED;
        })
        .addCase(editPostAsync.rejected, (state) => {
            state.editPostStatus = FAILED;
        })
        .addCase(deletePost.pending, state => {
            state.deletePostStatus = LOADING
        })
        .addCase(deletePost.fulfilled, (state) => {
            state.deletePostStatus = SUCCEED;
        })
        .addCase(deletePost.rejected, (state) => {
            state.deletePostStatus = FAILED;
        })
        .addCase(likeByUserAndPost.pending, state => {
            state.likeByUserAndPostStatus = LOADING;
        })
        .addCase(likeByUserAndPost.fulfilled, (state, action) => {
            state.likeByUserAndPostStatus = SUCCEED;
            state.userLikedPost = action?.payload?.userLiked || false;
        })
        .addCase(likeByUserAndPost.rejected, (state) => {
            state.likeByUserAndPostStatus = FAILED;
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
);

export const editPostAsync = createAsyncThunk(
    'post/edit',
    async ({id, post}) => {
        console.log("edit post submit " + JSON.stringify(post));
        const resp = await editPostApi(id, post);
        return resp.data;
        
    }
);

export const deletePost = createAsyncThunk(
    'post/delete',
    async id => {
        await deletePostApi(id);
    }
);

export const updateLikeToPost = createAsyncThunk(
    'like/user/post/add',
    async ({userId, postId, post, isIncrement }) => {
        const updatedPost = {
            ...post,
            likes: isIncrement ? post.likes + 1 : post.likes - 1 || 0
        };
        
        const resp = await editPostApi(postId, updatedPost);
        return resp.data;
        // await likeByUserAndPostApi(postId, userId);
    }
);

export const addLike = createAsyncThunk(
    'like/user/post/add',
    async ({userId, postId }) => {
        const like = {
            postId,
            userId
        };
        
        const resp = await createLikeByUserAndPostApi(like);
        return resp.data;
    }
);


export const removeLike = createAsyncThunk(
    'like/user/post/remove',
    async ({userId, postId }) => {
        const resp = await deleteLikeByUserAndPostApi(postId, userId);
        return resp.data;
    }
);

export const likeByUserAndPost = createAsyncThunk(
    'like/post/user',
    async ({postId, userId}) => {
        const resp = await likeByUserAndPostApi(postId, userId);
        return resp.data;
    }
)

export const {
    feedFetched,
    postFetched,
    editPostInit,
    onLikeHandler
} = postSlice.actions;

export default postSlice.reducer;