import CreatePost from "../../component/CreatePost";
import ProtectedRoute from "../../component/ProtectedRoute";
import ErrorPage from "./ErrorPage";

const CreateRouter = {
    path: "/post",
    element: <ProtectedRoute component={CreatePost} redirectTo="/login" />,
    errorElement: <ErrorPage />
};

export default  CreateRouter;