import React, { useEffect } from 'react';
import MinimizedPost from './MinimizedPost';
import { Box, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed } from '../api/PostApis';
// import { useSelector } from 'react-redux';

const posts = [
    {
        authorId: "41241351dd123",
        content: "as;hkdba hf baohjfvaou hapisfboahifvb aosishfb ajshfvoajhvf ouhavsf ausfhvasoufv o"
    },

    {
        authorId: "41241351dd123",
        content: "as;hkdba hf baohjfvaou hapisfboahifvb aosishfb ajshfvoajhvf ouhavsf ausfhvasoufv o"
    },

    {
        authorId: "41241351dd123",
        content: "as;hkdba hf baohjfvaou hapisfboahifvb aosishfb ajshfvoajhvf ouhavsf ausfhvasoufv o"
    },

    {
        authorId: "41241351dd123",
        content: "as;hkdba hf baohjfvaou hapisfboahifvb aosishfb ajshfvoajhvf ouhavsf ausfhvasoufv o"
    },

    {
        authorId: "41241351dd123",
        content: "as;hkdba hf baohjfvaou hapisfboahifvb aosishfb ajshfvoajhvf ouhavsf ausfhvasoufv o"
    }
];

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
            {feed.map(post => (<MinimizedPost />))}
            
        </div>
    );
};

export default Posts;