import React, { useEffect } from 'react';
import MinimizedPost from './MinimizedPost';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed } from '../reducer/PostReducer';

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
            {feed.map(post => (<MinimizedPost post={post} key={post.id}/>))}
            
        </div>
    );
};

export default Posts;