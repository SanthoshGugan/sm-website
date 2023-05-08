import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post, postUserApi, userFetch, userFetchByName } from "../api/UserApis";
import { STATUS } from "../utils/StatusUtil";

const initialState = {
    user: {},
    status: 'idle',
    error: null,
    loggedInStatus: false,
    signUpStatus: STATUS.IDLE
};

const reducers = {
    userFetched(state, action) {
        state.loggedInStatus = true;
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
    },
    logoutUser(state, action) {
        state.user = {};
        state.status = STATUS.IDLE;
        state.loggedInStatus = false;
    },
    setSignUpStatus(state, action) {
        state.signUpStatus = action.payload || STATUS.IDLE;
    }
};

const extraReducers = builder => {
    builder
    .addCase(fetchUserAsync.pending, (state) => {
        state.status = 'loading';
        state.loggedInStatus = false;
    })
    .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.loggedInStatus = true;
    })
    .addCase(fetchUserAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loggedInStatus = false;
    })
    .addCase(fetchUserByName.pending, state => {
        state.status = STATUS.LOADING;
        state.loggedInStatus = false;
    })
    .addCase(fetchUserByName.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEED;
        state.user = action.payload;
        state.loggedInStatus = true;
    })
    .addCase(fetchUserByName.rejected, state => {
        state.status = STATUS.FAILED;
        state.loggedInStatus = false;
    })
    .addCase(signUpUser.pending, state => {
        state.signUpStatus = STATUS.LOADING;
        state.loggedInStatus = false;
    })
    .addCase(signUpUser.fulfilled, (state, action) => {
        state.signUpStatus = STATUS.SUCCEED;
        state.user = action.payload;
        state.loggedInStatus = true;
    })
    .addCase(signUpUser.rejected, state => {
        state.signUpStatus = STATUS.FAILED;
        state.loggedInStatus = false;
    });
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
    userUpdated,
    logoutUser,
    setSignUpStatus
} = userSlice.actions;


export const fetchUserAsync = createAsyncThunk(
    'user/fetchUser', 
    async id => {
        const response = await userFetch(id);
        return response.data;
});

export const fetchUserByName = createAsyncThunk(
    'user/fetchByName',
    async name => {
        const response = await userFetchByName(name);
        return response.data;
    }
);

export const signUpUser = createAsyncThunk(
    'user/create',
    async newUser => {
        const response = await postUserApi(newUser);
        return response.data;
    }
);

export default userSlice.reducer;