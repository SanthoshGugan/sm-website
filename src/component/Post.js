import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../utils/StatusUtil";
import { Backdrop, Button, Paper } from "@mui/material";
import ThumbUpOffAltSharpIcon from '@mui/icons-material/ThumbUpOffAltSharp';

import { addLike, fetchPost, likeByUserAndPost, removeLike, updateLikeToPost } from "../reducer/PostReducer";
import PostHeader from "./PostHeader";
import Comments from "./Comments";
import { ThumbUpOffAltOutlined } from "@mui/icons-material";


const Post = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const { 
        post,
        postStatus: status,
        userLikedPost
    } = useSelector(state => state?.post);
    
    const { user = {} } = useSelector(state => state.user);
    const { id: userId } = user;

    const { content, id, authorId, likes = 0 } = post;
    useEffect(() => {
        dispatch(fetchPost(postId));
        dispatch(likeByUserAndPost({ postId, userId }))
    }, [dispatch, userLikedPost])

    const onLikeClick = () => {
        if (userLikedPost) {
            dispatch(updateLikeToPost({ userId, postId: id, post, isIncrement: false }));

            dispatch(removeLike({ userId, postId }));
            dispatch(fetchPost(postId));;
        } else {
            dispatch(updateLikeToPost({userId, postId, post, isIncrement: true }));
            dispatch(addLike({ userId, postId }));
            dispatch(fetchPost(postId));
        }
        dispatch(likeByUserAndPost({postId, userId}));
    };

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

<div
                style={{
                    flex: '0 0.1 4rem',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignContent: 'center'
                }}
            >
                <div 
                    style={{
                        margin: '0 2rem'
                    }}
                >
                    <Button variant={userLikedPost ? "contained" : "outlined"} endIcon={userLikedPost ? <ThumbUpOffAltSharpIcon /> : <ThumbUpOffAltOutlined />}
                        onClick={() => onLikeClick()}
                    >
                        <div style={{ margin: '0.4rem 0 0 0'}}>{likes || ''}</div>
                    </Button>
                </div>
            </div>
            <div>
                {id && (<Comments />)}
            </div>
        </Paper>
    );
};

export default Post;