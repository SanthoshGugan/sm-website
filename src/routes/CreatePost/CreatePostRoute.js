import CreatePost from "../../component/CreatePost";
import ErrorPage from "./ErrorPage";

const Create = {
    path: "/post",
    element: <CreatePost />,
    errorElement: <ErrorPage />
};

export default  Create;