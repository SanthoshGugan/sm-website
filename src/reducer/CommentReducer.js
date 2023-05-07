import { commentsByPost, createCommentApi, deleteCommentApi, updateCommentApi } from "../api/CommentApi";
import { COMMENT_BOX_MODE } from "../utils/CommentUtil";
import { STATUS } from "../utils/StatusUtil";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState= {
    comments: [],
    editComment: {},
    commentStatus: STATUS.IDLE,
    commentsError : null,
    commentsFetchStatus: STATUS.IDLE,
    createCommentStatus: STATUS.IDLE,
    deleteCommentStatus: STATUS.IDLE,
    editCommentStatus: STATUS.IDLE,
    commentBoxMode: COMMENT_BOX_MODE.DEFAULT,
};

const reducers = {
    commentsFetched(state, action) {
        state.comments = action.payload;
    },
    setCommentBoxMode(state, action) {
        state.commentBoxMode = action.payload;
    },
    onEditComment(state, action) {
        state.editComment = { ...action.payload };
        state.commentBoxMode = COMMENT_BOX_MODE.EDIT;
    }
};

const extraReducers = builder => {
    builder
    .addCase(fetchComments.pending, state => {
        state.commentsFetchStatus = STATUS.LOADING;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentsFetchStatus = STATUS.SUCCEED;
        state.comments = [...action.payload] || [];
    })
    .addCase(fetchComments.rejected, state => {
        state.commentsFetchStatus = STATUS.FAILED;
    })
    .addCase(createComment.pending, state => {
        state.createCommentStatus = STATUS.LOADING;
    })
    .addCase(createComment.fulfilled, (state, action) => {
        state.createCommentStatus = STATUS.SUCCEED;
        state.comments = [ ...state.comments, action.payload];
    })
    .addCase(createComment.rejected, state => {
        state.createCommentStatus = STATUS.FAILED;
    })
    .addCase(updateComment.pending, state => {
        state.editCommentStatus = STATUS.LOADING;
    })
    .addCase(updateComment.fulfilled, state => {
        state.editCommentStatus = STATUS.SUCCEED;
    })
    .addCase(updateComment.rejected, state => {
        state.editCommentStatus = STATUS.FAILED;
    })
    .addCase(deleteComment.pending, state => {
        state.deleteCommentStatus = STATUS.LOADING;
    })
    .addCase(deleteComment.fulfilled, state => {
        state.deleteCommentStatus = STATUS.SUCCEED;
    })
    .addCase(deleteComment.rejected, state => {
        state.deleteCommentStatus = STATUS.FAILED;
    });
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers,
    extraReducers
});

export const fetchComments = createAsyncThunk(
    'comments/fetch',
    async postId => {
        const resp = await commentsByPost(postId);
        return resp.data;
    }
);

export const createComment = createAsyncThunk(
    'comment/create',
    async comment => {
        const resp = await createCommentApi(comment); 
        return resp.data;
    }
);

export const updateComment = createAsyncThunk(
    'comment/edit',
    async ({comment, id}) => {
        await updateCommentApi(id, comment);
    }
);

export const deleteComment = createAsyncThunk(
    'comment/delete',
    async (id) => {
        await deleteCommentApi(id);
    }
);

export const {
    commentsFetched,
    setCommentBoxMode,
    onEditComment
} = commentsSlice.actions;

export default commentsSlice.reducer;

