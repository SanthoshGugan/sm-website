import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyPosts } from "../reducer/PostReducer";
import MinimizedPost from "./MinimizedPost";

const MyPosts = () => {
    const dispatch = useDispatch();

    const { user = {} } = useSelector(state => state.user);
    const { id = "" } = user;
    const { myPosts = []} = useSelector(state => state.post);

    useEffect(() => {
        dispatch(fetchMyPosts(id))
    }, [dispatch]);


    return (
        <div style={{
            margin: '1rem 0'
        }}>
            {myPosts.map(post => (<MinimizedPost post={post} key={post.id}/>))}
            
        </div>
    );
};

export default MyPosts;