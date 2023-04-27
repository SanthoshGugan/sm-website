import { createBrowserRouter } from "react-router-dom";
import PostsRoute from "./Posts/PostsRoute";
import PostRoute from "./Post/PostRoute";
import CreatePost from "./CreatePost/CreatePostRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello</div>
    },
    PostsRoute,
    PostRoute,
    CreatePost
]);