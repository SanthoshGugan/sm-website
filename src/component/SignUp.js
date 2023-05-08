import { AccountCircle } from "@mui/icons-material";
import { Box, Button, InputAdornment, Paper, Snackbar, TextField, Alert } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByName, setSignUpStatus, signUpUser, userFetched } from "../reducer/UserReducer";
import { userFetchByName } from "../api/UserApis";
import { useNavigate } from "react-router-dom";
import { STATUS } from "../utils/StatusUtil";

const SignUp = () => {
    const { user = {}, signUpStatus } = useSelector(state => state.user);

    const { id } = user;

    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [openSuccessNotif, setOpenSuccessNotif] = useState(false);

    useEffect(() => {
        if (id != null) {
            navigate("/posts");
        }
    }, [])

    useEffect(() => {

        if (signUpStatus == STATUS.FAILED) {
            setOpenSuccessNotif(true);
        } else if (signUpStatus == STATUS.SUCCEED) {
            setOpenSuccessNotif(true);
            navigate("/posts");
        }

        return () => {
            dispatch(setSignUpStatus(STATUS.IDLE));
        }

    }, [signUpStatus])

    const handleSubmit = async () => {
        const newUser = {
            name,
            profileDpUrl: null
        }
        await dispatch(signUpUser(newUser));
    };


    const handleNotifClose = () => {
        setOpenSuccessNotif(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '10rem', gap: '5rem', padding: '3rem 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, height: '2rem', width: '2rem' }} />
                <TextField id="input-with-sx" label="Username" variant="standard" 
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', flex: '0.3 0 auto' }}>
                <Button variant="contained" endIcon={<SendIcon />} onClick={(e) => handleSubmit()}>
                    Signup
                </Button>
            </div>
            
            <Snackbar
                open = {openSuccessNotif}
                autoHideDuration={500}
            >
                <div>
                {signUpStatus == STATUS.SUCCEED &&  (<Alert onClose={handleNotifClose} severity="success" sx={{ width: '100%' }}>
                    Created user successfully
                </Alert>)}
                {signUpStatus == STATUS.FAILED &&  (<Alert onClose={handleNotifClose} severity="error" sx={{ width: '100%' }}>
                    User already exists
                </Alert>)}
                </div>
            </Snackbar>  
        </div>
    )
};

export default SignUp;