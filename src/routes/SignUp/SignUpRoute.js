import SignUp from "../../component/SignUp";
import ErrorPage from "./ErrorPage";

const SignUpRoute = {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />
};

export default SignUpRoute;