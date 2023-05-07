import { IconButton, TextareaAutosize } from "@mui/material";
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment, fetchComments, setCommentBoxMode, updateComment } from "../reducer/CommentReducer";
import { COMMENT_BOX_MODE } from "../utils/CommentUtil";

const COMMENT_BOX_CONTENT_INIT = (commentBoxMode, editCommentContent) => {
    if (commentBoxMode == COMMENT_BOX_MODE.CREATE) return "";
    if (commentBoxMode == COMMENT_BOX_MODE.EDIT) return editCommentContent; 
    return "";
};

const CreateComment = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    const { post } = useSelector(state => state.post);
    const { commentBoxMode, editComment = {} } = useSelector(state => state.comment);

    const { id: userId } = user;
    const { id: postId } = post;
    const { content: editCommentContent, id: editCommentId } = editComment;

    const [comment, setComment] = useState(() => COMMENT_BOX_CONTENT_INIT(commentBoxMode, editCommentContent));

    useEffect(() => {
        setComment(COMMENT_BOX_CONTENT_INIT(commentBoxMode, editCommentContent));
    }, [commentBoxMode]);

    const onCreateComment = () => {
        const newComment = {
            parent_id: postId,
            content: comment,
            author_id: userId
        }
        dispatch(createComment(newComment));
        setComment("");
    };

    const onUpdateComment = () => {
        const updatedComment = {
            ...editComment,
            content: comment
        };

        dispatch(updateComment({ comment: updatedComment, id: editCommentId }));
        dispatch(setCommentBoxMode(COMMENT_BOX_MODE.DEFAULT));
        dispatch(fetchComments(postId));
    };


    const onSubmitClick = () => {
        if (commentBoxMode === COMMENT_BOX_MODE.CREATE) return onCreateComment();
        if (commentBoxMode === COMMENT_BOX_MODE.EDIT) return onUpdateComment();
    }

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
                    onClick={() => onSubmitClick()}
                >
                    {commentBoxMode === COMMENT_BOX_MODE.CREATE && <>create</>} 
                    {commentBoxMode === COMMENT_BOX_MODE.EDIT && <>update</>} 
                    <ArrowForwardTwoToneIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default CreateComment;