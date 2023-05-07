import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentsByPost } from "../api/CommentApi";
import { commentsFetched, deleteComment } from "../reducer/CommentReducer";
import CreateComment from "./CreateComment";
import { Divider, IconButton } from "@mui/material";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const Comments = () => {
    const dispatch = useDispatch();

    const { post =  {}} = useSelector(state => state.post);
    const { user = {} } = useSelector(state => state.user);

    const { id, authorId: postAuthorId } = post;
    const {id : userId = "" } = user;

    const { comments = [] } = useSelector(state =>  state.comment);
    
    useEffect(() => {
        commentsFetched([]);
        fetchComment();
    }, [id]);

    const fetchComment = async () => {
        const resp = await commentsByPost(id);
        dispatch(commentsFetched(resp.data));
    };

    const onDeleteComment = (id) => {
        dispatch(deleteComment(id));
        fetchComment();
    }

    const renderComment = ({ 
        content = "", 
        author_name: authorName = "",
        author_id: authorId,
        id
    }) => {
        return (
            <div style={{
                display: "flex",
                justifyContent: authorId === postAuthorId ? "flex-start" : "flex-end",
                alignContent: "center",
                margin: '2rem 2rem'
            }}
                key={id}
            >
                <div style={{ flex: "0 0 75%", border: "2px solid #acacac", borderRadius: "15px" }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #bfbfbf',
                        backgroundColor: '#f2f2f2',
                        padding: '0.3rem 0.5rem',
                        borderRadius: '0.7rem'
                    }}>
                        <>{authorName}</>
                        <>{ (authorId == userId || postAuthorId == userId) &&
                        (<IconButton
                            onClick={() => onDeleteComment(id)}
                        >
                            <DeleteTwoToneIcon />
                        </IconButton>)}
                        </>

                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        padding: '1rem 0.5rem'
                    }}><>{content}</></div>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            borderTop: '1px solid #e0e0e0',
            margin: '0.5rem 0'
        }}>
            {comments.map(comment => renderComment(comment))}
            <Divider style={{ margin: '1rem 0.25rem'}}/>
            <div
                style= {{
                    width: '90%',
                    margin: 'auto',
                    padding: '0.5rem'
                }}
            >
                <CreateComment />
            </div>
        </div>
    );
};

export default Comments;