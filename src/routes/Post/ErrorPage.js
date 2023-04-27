import React from "react";
import { useParams, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error } = useRouteError();
    const { postId } = useParams();
    return (
        <div>
            <p>Error while loading Post {postId}!</p>
            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    )

};

export default ErrorPage;