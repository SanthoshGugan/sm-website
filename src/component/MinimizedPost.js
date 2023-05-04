import { Avatar, Icon, IconButton, Paper, Tooltip } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";
import { useHistory, useNavigate } from 'react-router-dom';
import CropFreeIcon from '@mui/icons-material/CropFree';

import { getPostInitial } from "../utils/postUtil";
import PostHeader from "./PostHeader";
import { STATUS } from "../utils/StatusUtil";

const MinimizedPost = (props) => {

    const navigate = useNavigate();
    const { post = {}, postStatus: status = STATUS.IDLE } = props;

    const { 
        authorName = "",
        content = "",
        id
    } = post;

    const onViewPostClick = (e) => {
        navigate(`/post/${id}`);
    }

    return(
        <Paper sx={{ 
            display: 'flex' ,
            flexDirection: 'column',
            margin: '0 5rem'
        }}>
            <div style={{
                flex: '0 1 25%'
                }}
            > 
                <PostHeader post={post} showOptions={false}/>
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
                    display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '0 2rem 1rem 0'
                }}
            >
                <Tooltip title="View Post">
                    <IconButton onClick={e => onViewPostClick(e)}>
                        <CropFreeIcon  />
                    </IconButton>
                </Tooltip>
                
            </div>
        </Paper>
    );
};

export default MinimizedPost;