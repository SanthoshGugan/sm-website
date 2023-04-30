import _ from "lodash";
import { AppBar, Avatar, Button, IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAsync, logoutUser } from "../reducer/UserReducer";
import { render } from "@testing-library/react";
import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom";


const AVATAR_STYLE = { height: '1.5rem', width: '1.5rem'};

const history = createBrowserHistory()

const Header = () => {
    const { user = {}, loggedInStatus } = useSelector(state => state.user);

    const { profileDpUrl = "", name = "", id} = user;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // dispatch(fetchUserAsync('6448c64066394fc33bae3b47'))
    }, [dispatch])

    const handleLoginLogout = () => {
        if (loggedInStatus) {
            dispatch(logoutUser());
        } 
        navigate('/login');
    }

    const gotoFriends = () => {
        navigate("/friends/"+id);
    }

    const gotoFeeds = () => {
        navigate("/posts");
    }

    const gotoCreatePost = () => {
        navigate("/post");
    }

    const gotoMyPosts = () => {
        navigate("/myposts");
    }

    const renderMyPosts = () => {
        if (!loggedInStatus) return <></>;

        return (
            <div
                style={{
                    display: 'flex', justifyContent: 'center', flex: '0.1 0 auto', alignItems:'center'
                }}
            >
                <Button variant="text"
                    style={{ color : 'white'}}
                    onClick={() => gotoMyPosts()}
                >
                    My Posts 
                </Button>
            </div>
        );
    };

    const renderCreatePost = () => {
        if (!loggedInStatus) return <></>;

        return (
            <div
                style={{
                    display: 'flex', justifyContent: 'center', flex: '0.1 0 auto', alignItems:'center'
                }}
            >
                <Button variant="text"
                    style={{ color : 'white'}}
                    onClick={() => gotoCreatePost()}
                >
                    Create Post 
                </Button>
            </div>
        );
    };

    const renderFeeds = () => {
        if (!loggedInStatus) return <></>;

        return (
            <div
                style={{
                    display: 'flex', justifyContent: 'center', flex: '0.1 0 auto', alignItems:'center'
                }}
            >
                <Button variant="text"
                    style={{ color : 'white'}}
                    onClick={() => gotoFeeds()}
                >
                    Feed
                </Button>
            </div>
        );
    }

    const renderFriends = () => {
        if (!loggedInStatus) return <></>;

        return (
            <div
                style={{
                    display: 'flex', justifyContent: 'center', flex: '0.1 0 auto', alignItems:'center'
                }}
            >
                <Button variant="text"
                    style={{ color : 'white'}}
                    onClick={() => gotoFriends()}
                >
                    My Friends
                </Button>
            </div>
        );
    }

    const renderUser = () => {
        if (!loggedInStatus) return <></>;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 
        '1rem' }}>
                <div style={{ flex :'1 0.75 auto'}}>{name}</div>
                {/* {profileDpUrl && (<Avatar sx={ AVATAR_STYLE } src={profileDpUrl} />)} */}
            </div>
        );
    };

    const renderLoginLogout = () => { 
        return (
            <IconButton onClick={() => handleLoginLogout()}>
                {loggedInStatus ? (<LogoutIcon />) : (<LoginIcon />)}
            </IconButton>
        );
    };

    return ( 

    <AppBar position='static' sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0 1rem'
    }}>
            <IconButton style={{ flex: '0 0 5%'}}>
                <DensitySmallIcon style={{ color: 'white'}}/>
            </IconButton>
            <div style={{ color: 'white', flex: '1 0 auto', fontSize: '1.5rem', fontWeight: '500'}}>
                The Social Media
            </div>
            <div style={{ flex: '0.10 0 20%', display: 'flex', alignContent: 'center', justifyContent: 'flex-end'}}>
                {renderMyPosts()}
                {renderCreatePost()}
                {renderFeeds()}
                {renderFriends()}
                {renderUser()}
                {renderLoginLogout()}
            </div>
        </AppBar>
        );
};


export default Header;
