import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAsync } from "../reducer/UserReducer";
import { fetch } from "../api/UserApis";

const User = () => {
    const {
        user,
        status
    } = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetch('6448df431c60990d77f7a497'))
    }, [dispatch]);

    console.log(" status : " + status)
    return (
        <> User : {status == 'loading' && (<>loading....</>)}
        {status == 'succeeded' && <>{user?.name}</>}
        </>
    );
};

export default User;