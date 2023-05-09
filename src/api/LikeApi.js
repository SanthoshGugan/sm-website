import axios from "axios";

const likeApiUrl = "http://localhost:8080/like";

export const likeByUserAndPostApi = async (postId, userId) => axios.get(`${likeApiUrl}/post/${postId}/user/${userId}`);

export const createLikeByUserAndPostApi = async (like) => axios.post(`${likeApiUrl}`, {...like });

export const deleteLikeByUserAndPostApi = async (postId, userId) => axios.delete(`${likeApiUrl}/post/${postId}/user/${userId}`);