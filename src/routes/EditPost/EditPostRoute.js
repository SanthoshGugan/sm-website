import EditPost from "../../component/EditPost";
import ProtectedRoute from "../../component/ProtectedRoute";
import ErrorPage from "./ErrorPage";

const EditRouter = {
    path: "/post/edit",
    element: <ProtectedRoute component={EditPost} redirectTo="/login" />,
    errorElement: <ErrorPage />
};

export default  EditRouter;