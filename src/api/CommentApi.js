import axios from "axios";

const commentsApiUrl = "http://localhost:8080/comment";

export const commentsByPost = async (postId) => axios.get(`${commentsApiUrl}/post/${postId}`);

export const createCommentApi = async comment => axios.post(`${commentsApiUrl}`, {...comment});

export const deleteCommentApi = async commentId => axios.delete(`${commentsApiUrl}/${commentId}`);

export const updateCommentApi = async (commentId, comment) => axios.put(`${commentsApiUrl}/${commentId}`, {...comment});
