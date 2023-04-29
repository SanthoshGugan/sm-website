import { act } from "react-dom/test-utils";
import { STATUS } from "../utils/StatusUtil";
import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    comments: [],
    commentStatus: STATUS.IDLE,
    commentsError : null
};

const reducers = {
    commentsFetched(state, action) {
        state.comments = action.payload;
    }
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers
});

export const {
    commentsFetched
} = commentsSlice.actions;

export default commentsSlice.reducer;

