import { createCommentApi, deleteCommentApi, updateCommentApi } from "../api/CommentApi";
import { STATUS } from "../utils/StatusUtil";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState= {
    comments: [],
    commentStatus: STATUS.IDLE,
    commentsError : null,
    createCommentStatus: STATUS.IDLE,
    deleteCommentStatus: STATUS.IDLE,
    editCommentStatus: STATUS.IDLE
};

const reducers = {
    commentsFetched(state, action) {
        state.comments = action.payload;
    }
};

const extraReducers = builder => {
    builder.addCase(createComment.pending, state => {
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
    commentsFetched
} = commentsSlice.actions;

export default commentsSlice.reducer;

