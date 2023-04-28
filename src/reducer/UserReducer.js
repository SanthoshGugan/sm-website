import { createSlice } from "@reduxjs/toolkit";
import { fetch, post, del, update } from "../api/UserApis";

const initialState = {
    user: {},
    status: 'idle',
    error: null,
    loggedInStatus: false
};

const reducers = {
    userFetched(state, action) {
        state.user = action.payload
    },
    userDeleted(state, action) {
        state.user = initialState.user
    },
    userPosted(state, action) {
        state.user = action.payload
    },
    userUpdated(state, action) {
        state.user = action.payload
    }
};

const extraReducers = builder => {
    builder
    .addCase(fetch.pending, (state) => {
        state.status = 'loading';
        state.loggedInStatus = false;
    })
    .addCase(fetch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.loggedInStatus = true;
    })
    .addCase(fetch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loggedInStatus = false;
    })

    // [post.pending]: (state) => state.status = 'loading',
    // [post.fulfilled]: (state, action) => {
    //     state.status = 'succeeded';
    //     state.user = action.payload;
    // },
    // [post.rejected]: (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.error.message;
    // },
    
    // [del.pending]: (state) => state.status = 'loading',
    // [del.fulfilled]: (state, action) => {
    //     state.status = 'succeeded';
    //     state.user = initialState.user;
    // },
    // [del.rejected]: (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.error.message;
    // },

    // [update.pending]: (state) => state.status = 'loading',
    // [update.fulfilled]: (state, action) => {
    //     state.status = 'succeeded';
    //     state.user = action.payload;
    // },
    // [update.rejected]: (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.error.message;
    // }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers,
    extraReducers
});

export const { 
    userFetched,
    userPosted,
    userDeleted,
    userUpdated
} = userSlice.actions;

export const fetchUserAsync = (id) => async dispatch => {
    dispatch(fetch.pending);
    try {
        const response = await fetch(id);
        dispatch(fetch.fulfilled(response.data));
    } catch (error) {
        dispatch(fetch.rejected(error.message));
    }
}

export default userSlice.reducer;