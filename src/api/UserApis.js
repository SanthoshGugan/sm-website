import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const userApiUrl = "http://localhost:8080/users";

export const userFetch = async id => axios.get(`${userApiUrl}/${id}`);

export const userFetchByName = async name => axios.get(`${userApiUrl}/name/${name}`);

export const post = async (user) =>  axios.post(userApiUrl, { ...user });

export const del = async (id) => axios.delete(`${userApiUrl}/${id}`);

export const update = async (id, user) => axios.put(`${userApiUrl}/${id}`, { ...user });
