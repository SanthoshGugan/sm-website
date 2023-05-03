import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentsByPost } from "../api/CommentApi";
import { commentsFetched } from "../reducer/CommentReducer";
import { render } from "@testing-library/react";

const Comments = () => {
    const dispatch = useDispatch();

    const { post =  {}} = useSelector(state => state.post);
    const { user = {} } = useSelector(state => state.user);

    const { id } = post;
    const {id : userId = "" } = user;

    const { comments = [] } = useSelector(state =>  state.comment);
    
    useEffect(() => {
        fetchComment();
    }, []);

    const fetchComment = async () => {
        const resp = await commentsByPost(id);
        console.log(resp.data)
        dispatch(commentsFetched(resp.data));
    };

    const renderComment = ({ 
        content = "", 
        author_name: authorName = "",
        author_id: authorId
    }) => {
        return (
            <div style={{
                display: "flex",
                justifyContent: authorId == userId ? "flex-start" : "flex-end",
                alignItems: "center",
            }}
                key={authorId}
            >
                <div style={{ flex: "0 0 75%", border: "2px solid #acacac", borderRadius: "15px" }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        borderBottom: '1px solid #bfbfbf',
                        backgroundColor: '#f2f2f2',
                        padding: '0.3rem 0.1rem',
                        borderRadius: '0.7rem'
                    }}><>{authorName}</></div>
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
        </div>
    );
};

export default Comments;