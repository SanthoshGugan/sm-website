import React from "react";
import { useParams } from "react-router-dom";

const CreatePost = () => {
    const { postId } = useParams();
    return (
        <div>
            CreatePost
        </div>
    );
};

export default CreatePost;