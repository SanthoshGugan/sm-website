import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import AddIcon from '@mui/icons-material/Add';
import { createPost } from "../reducer/PostReducer";
import { set } from "lodash";
import { Alert, IconButton, Snackbar } from "@mui/material";
import { STATUS } from "../utils/StatusUtil";

const CreatePost = () => {
    const dispatch = useDispatch();

    const { user = {} } = useSelector(state => state.user);
    const { createPostStatus: status } = useSelector(state => state.post);
    const { id } = user;

    const [content, setContent] = useState("");
    const [openSuccessNotif, setOpenSuccessNotif] = useState(false);

    useEffect(() => {
        if (status == STATUS.SUCCEED) {
            setOpenSuccessNotif(true);
            setContent("");
        }
    }, [status]);

    const onSubmit = () => {
        const post = {
            content,
            author_id: id
        }
        dispatch(createPost(post));
        
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
                    <AddIcon /> Post
                </IconButton>

            </div>

            <Snackbar
                open = {openSuccessNotif}
                autoHideDuration={500}
            >
                <Alert onClose={handleNotifClose} severity="success" sx={{ width: '100%' }}>
                    Post successfully created
                </Alert>
            </Snackbar>
        </div>
    );
};

export default CreatePost;