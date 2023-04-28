import _ from "lodash";
import { AppBar, Avatar, IconButton } from '@mui/material';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import React from 'react';
import { useSelector } from 'react-redux';

const AVATAR_STYLE = { height: '1.5rem', width: '1.5rem'};
const userNotLoggedIn = (<Avatar style={ AVATAR_STYLE }/>);
const userLoggedInButNoDp = (<Avatar style={{...AVATAR_STYLE, color: 'lightblue' } }/>);

const Header = () => {
    const { user = {}, loggedInStatus } = useSelector(state => state.user);

    const { profileDpUrl = ""} = user;

    const renderAvatar = () => {
        if (!loggedInStatus) {
            return userNotLoggedIn;
        }

        if (_.isEmpty(user.profileDpUrl)) return userLoggedInButNoDp;
        return (
            <Avatar sx={ AVATAR_STYLE } src={profileDpUrl} />
        );
    }

    return ( 
    <AppBar position='static' sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center'
    }}>
            <IconButton style={{ flex: '0 0 5%'}}>
                <DensitySmallIcon style={{ color: 'white'}}/>
            </IconButton>
            <div style={{ color: 'white', flex: '1 0 auto', fontSize: '1.5rem', fontWeight: '500'}}>
                The Social Media
            </div>
            <div style={{ flex: '0 0 5%', display: 'flex', alignContent: 'center'}}>
                {renderAvatar()}
            </div>
        </AppBar>
        );
};


export default Header;
