import axios from "axios";

const commentsApiUrl = "http://localhost:8080/comment";

export const commentsByPost = async (postId) => axios.get(`${commentsApiUrl}/post/${postId}`);


