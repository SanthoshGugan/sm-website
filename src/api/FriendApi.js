import axios from "axios";

const friendsApiUrl = "http://localhost:8080/friend";

export const friendsByUserId = async (userId) => axios.get(`${friendsApiUrl}/users/${userId}`);

export const recommendationsByUserId = async (userId) => axios.get(`${friendsApiUrl}/recommendation/${userId}`);

export const addFriend = async (friend) => axios.post(`${friendsApiUrl}`, {...friend}); 