import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postApiUrl = "http://localhost:8080/post/feed";

export const fetchFeed = createAsyncThunk(
    'posts/feed',
    async id => {
        const resp = await axios.get(`${postApiUrl}/${id}`);
        return resp.data;
    }
);

