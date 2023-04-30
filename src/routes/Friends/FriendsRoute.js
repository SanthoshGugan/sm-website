import Friends from "../../component/Friends";
import ProtectedRoute from "../../component/ProtectedRoute";
import ErrorPage from "./ErrorPage";

const FriendsRoute = {
    path: '/friends/:id',
    element: <ProtectedRoute component={Friends} redirectTo="/login"/>,
    errorElement: <ErrorPage />
};
export default FriendsRoute;