import axios from "axios";

const postApiUrl = "http://localhost:8080/post";

export const fetchMyPostApi = async userId => axios.get(`${postApiUrl}/user/${userId}`);

export const feedsApi = async (id) => axios.get(`${postApiUrl}/feeds/${id}`);

export const fetchFeedApi = async (id) => axios.get(`${postApiUrl}/feed/${id}`)

export const createPostApi = async post => axios.post(`${postApiUrl}`, {...post});

export const editPostApi = async (id, post) => axios.put(`${postApiUrl}/${id}`, {...post});

export const deletePostApi = async id => axios.delete(`${postApiUrl}/${id}`);


