import { Avatar, Icon, IconButton, Paper, Tooltip } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";
import { useHistory, useNavigate } from 'react-router-dom';
import CropFreeIcon from '@mui/icons-material/CropFree';

import { getPostInitial } from "../utils/postUtil";

const MinimizedPost = (props) => {

    const navigate = useNavigate();
    const { post = {} } = props;

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
                flex: '0 1 25%',
                borderBottom: ""
                }}
            > 
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '0.5rem 1rem',
                        alignContent: 'center',
                        borderBottom: '1.5px none grey'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <Avatar sx={{ bgcolor: "darkblue"}}>{getPostInitial(authorName)}</Avatar>
                        <div>{authorName}</div>
                    </div>
                    <div>
                    <IconButton aria-label="Example">
                        <MoreVertIcon />
                    </IconButton>
                    </div>
                </div>
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