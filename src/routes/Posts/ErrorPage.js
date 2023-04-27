import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error } = useRouteError();

    return (
        <div>
            <p>Error while loading posts!</p>
            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    )

};

export default ErrorPage;