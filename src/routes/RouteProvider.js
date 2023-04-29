import { createBrowserRouter } from "react-router-dom";
import PostsRoute from "./Posts/PostsRoute";
import PostRoute from "./Post/PostRoute";
import CreatePost from "./CreatePost/CreatePostRoute";
import LoginRoute from "./Login/LoginRoute";
import Root from "../component/Root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            PostsRoute,
            PostRoute,
            CreatePost,
            LoginRoute
        ],
    },
]);