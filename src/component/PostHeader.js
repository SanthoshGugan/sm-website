import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";
import { getPostInitial } from "../utils/postUtil";

const PostHeader = (props) => {

    const { post = {} } = props;
    const { authorName = "" } = post;

    return (
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
    );
};

export default PostHeader;