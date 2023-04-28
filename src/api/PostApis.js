import axios from "axios";

const postApiUrl = "http://localhost:8080/post";


export const feedsApi = async (id) => axios.get(`${postApiUrl}/feeds/${id}`);

export const fetchFeedApi = async (id) => axios.get(`${postApiUrl}/feed/${id}`)

