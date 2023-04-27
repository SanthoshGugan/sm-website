import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const userApiUrl = "http://localhost:8080/users";

export const fetch = createAsyncThunk(
    'user/fetchUser', 
    async id => {
        const response = await axios.get(`${userApiUrl}/${id}`);
        return response.data;
});

export const post = async (user) =>  axios.post(userApiUrl, { ...user });

export const del = async (id) => axios.delete(`${userApiUrl}/${id}`);

export const update = async (id, user) => axios.put(`${userApiUrl}/${id}`, { ...user });
