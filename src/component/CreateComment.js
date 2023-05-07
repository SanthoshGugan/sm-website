import { IconButton, TextareaAutosize } from "@mui/material";
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../reducer/CommentReducer";

const CreateComment = () => {
    const disptach = useDispatch();
    const { user } = useSelector(state => state.user);
    const { post } = useSelector(state => state.post);

    const { id: userId } = user;
    const { id: postId } = post;
    const [comment, setComment] = useState("");

    const onCreateComment = () => {
        const newComment = {
            parent_id: postId,
            content: comment,
            author_id: userId
        }
        disptach(createComment(newComment));
        setComment("");
    };

    return (
        <div
            style={{
                border: '1px solid #cfcfcf',
                borderRadius: '10px',
                padding: '5px'
            }}
        >
            <TextareaAutosize
                minRows={5}
                value={comment}
                onChange={e => setComment(e.target.value)}
                style={{ width: '98%'}}
                placeholder="Add new comment"
            />
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignContent: 'center'
                }}
            >
                <IconButton 
                    style={{
                        flex: '0 0 5rem' 
                    }}
                    onClick={() => onCreateComment()}
                >
                    <ArrowForwardTwoToneIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default CreateComment;