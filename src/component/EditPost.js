import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import { createPost, editPostAsync } from "../reducer/PostReducer";
import { Alert, IconButton, Snackbar, TextareaAutosize } from "@mui/material";
import { STATUS } from "../utils/StatusUtil";

const EditPost = () => {
    const dispatch = useDispatch();

    const { user = {} } = useSelector(state => state.user);
    const { editPostStatus: status, editPost = {} } = useSelector(state => state.post);
    
    const { id } = user;
    const { content: postContent, id: editPostId } = editPost;

    const [content, setContent] = useState(postContent);
    const [openSuccessNotif, setOpenSuccessNotif] = useState(false);

    useEffect(() => {
        if (status == STATUS.SUCCEED) {
            setOpenSuccessNotif(true);
        }
    }, [status]);

    const onSubmit = () => {
        const updatedPost = {
            ...editPost,
            content
        }
        dispatch(editPostAsync({id: editPostId, post: updatedPost}));
        
    }

    const handleNotifClose = () => {
        setOpenSuccessNotif(false);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: 'center',
            gap: '2rem',
            margin: '5rem 0'
        }}>
            {}
            <TextareaAutosize
            style={{
                flex: '1 0 10rem',
                minWidth: '25rem'
            }}
            minRows={10}
            value={content}
            onChange={e => setContent(e.target.value)}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '0 2rem', flex: '1 1 auto'}}>
                <IconButton onClick={() => onSubmit()}>
                    <AddIcon /> Submit
                </IconButton>

            </div>

            <Snackbar
                open = {openSuccessNotif}
                autoHideDuration={500}
            >
                <Alert onClose={handleNotifClose} severity="success" sx={{ width: '100%' }}>
                    Post edited successfully
                </Alert>
            </Snackbar>
        </div>
    );
};

export default EditPost;