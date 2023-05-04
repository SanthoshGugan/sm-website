import { Avatar, ClickAwayListener, IconButton, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useRef, useState } from "react";
import { getPostInitial } from "../utils/postUtil";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../reducer/PostReducer";
import { useNavigate } from "react-router-dom";

const PostHeader = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector(state => state.user);
    const { id: userId } = user;

    const { post = {}, showOptions = false } = props;
    const [openPopper, setOpenPopper] = useState(false);
    const [anchorRef, setAnchorRef] = useState(null);
    const { authorName = "", id, authorId } = post;

    const handlePopperOpen = (e) => {
        setOpenPopper(!openPopper);
        setAnchorRef(e.currentTarget)
    };

    const handleDeletePost = () => {
        dispatch(deletePost(id));
        navigate("/myposts");
    };

    const renderPostOptions = () => {
        return (
        <IconButton ref={anchorRef} onClick={e => handlePopperOpen(e)}>
            <MoreVertIcon />
        </IconButton>
        );
    }

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
            
            {showOptions && renderPostOptions()}
            <Popper
                open={openPopper}
                anchorEl={anchorRef}
            >
                <Paper>
                    <ClickAwayListener 
                        onClickAway={() => setOpenPopper(false)}
                    >
                        <MenuList autoFocusItem>
                            <MenuItem 
                                key="delete"
                                onClick={() => handleDeletePost()}
                            >
                                Delete Post
                            </MenuItem>
                        </MenuList>

                    </ClickAwayListener>
                </Paper>

            </Popper>
            </div>
        </div>
    );
};

export default PostHeader;