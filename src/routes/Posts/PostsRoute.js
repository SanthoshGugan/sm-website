import Posts from "../../component/Posts";
import ProtectedRoute from "../../component/ProtectedRoute";
import ErrorPage from "./ErrorPage";

const PostsRoute = {
    path: "/posts",
    element: <ProtectedRoute redirectTo="/login" component={Posts} />,
    errorElement: <ErrorPage />
};

export default  PostsRoute;