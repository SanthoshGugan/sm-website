import React, { useEffect } from 'react';
import MinimizedPost from './MinimizedPost';
import { Box, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed } from '../api/PostApis';

const Posts = () => {
    const { feed } = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFeed('6448c64066394fc33bae3b47'));
    }, [dispatch])
    return (
        <div style={{
            margin: '1rem 0'
        }}>
            {feed.map(post => (<MinimizedPost post={post}/>))}
            
        </div>
    );
};

export default Posts;