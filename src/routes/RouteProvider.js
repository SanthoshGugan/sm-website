import { createBrowserRouter } from "react-router-dom";
import PostsRoute from "./Posts/PostsRoute";
import PostRoute from "./Post/PostRoute";
import CreatePost from "./CreatePost/CreatePostRoute";
import LoginRoute from "./Login/LoginRoute";
import Root from "../component/Root";
import FriendsRoute from "./Friends/FriendsRoute";
import MyPostRoute from "./MyPosts/MyPostRoute";
import ProtectedRoute from "../component/ProtectedRoute";
import Login from "../component/Login";
import EditRouter from "./EditPost/EditPostRoute";
import SignUpRoute from "./SignUp/SignUpRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        // element: <ProtectedRoute component={Root} redirectTo="/login" />,
        element: <Root />,
        children: [
            PostsRoute,
            PostRoute,
            CreatePost,
            EditRouter,
            SignUpRoute,
            LoginRoute,
            FriendsRoute,
            MyPostRoute,
            {
                path: "/",
                element: <Login />
            }
        ]
    },
]);