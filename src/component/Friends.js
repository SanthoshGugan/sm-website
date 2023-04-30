import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addFriendAsync, fetchFriends, fetchRecommendations, friendsFetched, recommendationsFetched } from "../reducer/FriendReducer";
import { friendsByUserId, recommendationsByUserId } from "../api/FriendApi";
import { STATUS } from "../utils/StatusUtil";
import { addFriendRequest } from "../utils/FriendUtil";


const Friends = () => {

    const dispatch = useDispatch();
    const { friends = [], recommendations = [], recommendationStatus } = useSelector(state => state.friend);
    const { id } = useParams();


    useEffect(() => {
        dispatch(fetchFriends(id));
        dispatch(fetchRecommendations(id))
    }, [dispatch]);

    const handleAddFriend = (friendId) => {
        const request = addFriendRequest(id, friendId);
        dispatch(addFriendAsync(request));
    }

    const renderFriend = (friend) => {
        const { friend_name: name = "",
            friend_profile_dp_url: dp = "", id
        } = friend;
        return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', flex: '1 1 auto' }} key={id}>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar alt={name} src={dp} style={{ color: 'white', backgroundColor: 'blue'}}/>
              </ListItemAvatar>
              <ListItemText
                primary={name}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
        );
    };


    const renderRecommendation = (recommendation) => {
        const { name = "",
            profileDpUrl: dp = "", id
        } = recommendation;
        if (recommendationStatus == STATUS.LOADING) { return (<>Loading.....</>)}
        return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', flex: '1 1 auto' }} key={id}>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar alt={name} src={dp} style={{ color: 'white', backgroundColor: 'blue'}}/>
              </ListItemAvatar>
              <ListItemText
                primary={name}
              />
              <IconButton onClick={() => handleAddFriend(id)}>
                <AddIcon />
            </IconButton>
            </ListItem>
            
            
            <Divider variant="inset" component="li" />
        </List>
        );
    };

    return (
        <Box sx={{ padding: '1rem '}}>
            <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '1rem'}}>
                <div style={{ flex: '0 0 5rem', fontSize:'2rem', fontWeight: 500}}>My Friends</div>
                {friends.map(friend => renderFriend(friend, false))}
            </div>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '1rem', margin: '1rem 0'}}>
                <div style={{ flex: '0 0 5rem', fontSize:'2rem', fontWeight: 500}}>Recommendations</div>
                {recommendationStatus == STATUS.SUCCEED 
                    ? recommendations.map(recommendation => renderRecommendation(recommendation)) 
                    : <>Loading.....</>
                }
            </div>
        </Box>
    );
};

export default Friends;