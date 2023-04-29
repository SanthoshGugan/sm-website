import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentsByPost } from "../api/CommentApi";
import { commentsFetched } from "../reducer/CommentReducer";

const Comments = () => {
    const dispatch = useDispatch();

    const { post =  {}} = useSelector(state => state.post);
    const { id } = post;

    const { comments = [] } = useSelector(state =>  state.comment);

    const fetchComment = async () => {
        const resp = await commentsByPost(id);
        console.log(resp.data)
        dispatch(commentsFetched(resp.data));
    }
    useEffect(() => {
        fetchComment();
    }, [])
    return (
        <div style={{
            borderTop: '1px solid #e0e0e0'
        }}>
            {comments.map(comment => (<>{comment.content}</>))}
        </div>
    );
};

export default Comments;