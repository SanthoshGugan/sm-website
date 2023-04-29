import Login from "../../component/Login";
import ErrorPage from "./ErrorPage.js";

const LoginRoute = {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
};

export default LoginRoute;