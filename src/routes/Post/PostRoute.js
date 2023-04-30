import Post from "../../component/Post";
import ProtectedRoute from "../../component/ProtectedRoute";

const PostRoute = {
    path: '/post/:postId',
    element: <ProtectedRoute component={Post} redirectTo="/login" />
};

export default PostRoute;