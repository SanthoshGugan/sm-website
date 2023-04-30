import MyPosts from "../../component/MyPosts";
import ProtectedRoute from "../../component/ProtectedRoute";
import ErrorPage from "./ErrorPage";

const MyPostRoute = {
    path: '/myposts',
    element: <ProtectedRoute component={MyPosts} redirectTo="/login" />,
    errorElement: <ErrorPage />
};

export default MyPostRoute;