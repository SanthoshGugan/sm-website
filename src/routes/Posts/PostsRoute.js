import Posts from "../../component/Posts";
import ErrorPage from "./ErrorPage";

const PostsRoute = {
    path: "/posts",
    element: <Posts />,
    errorElement: <ErrorPage />
};

export default  PostsRoute;