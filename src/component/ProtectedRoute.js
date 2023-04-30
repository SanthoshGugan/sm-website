import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, 
    redirectTo: to,
    ...rest }) => {
    const { loggedInStatus } = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedInStatus) {
            navigate(to);
        }
    });

    return (
        <>
            {loggedInStatus && <Component {...rest} />}
        </>
    );
};

export default ProtectedRoute;