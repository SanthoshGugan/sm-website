import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../utils/StatusUtil";
import { Backdrop, Paper } from "@mui/material";
import { fetchPost } from "../reducer/PostReducer";
import PostHeader from "./PostHeader";
import Comments from "./Comments";


const Post = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const { 
        post,
        postStatus: status
    } = useSelector(state => state?.post);
    
    const { user = {} } = useSelector(state => state.user);
    const { id: userId } = user;

    const { content, id, authorId } = post;
    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [dispatch])
    return (
        <Paper sx={{ 
            display: 'flex' ,
            flexDirection: 'column',
            margin: '0 5rem'
        }}>
            <Backdrop open={status !== STATUS.SUCCEED} />
            <div style={{
                flex: '0 1 25%'
                }}
            > 
                <PostHeader post={post} showOptions={authorId == userId}/>
            </div>
            <div style={{
                flex: '1 0.25 100px',
                display: 'flex',
                margin: '1rem',
                justifyContent: 'flex-start'
            }}
            > {content}</div>
            <div>
                {id && (<Comments />)}
            </div>
        </Paper>
    );
};

export default Post;