import { AccountCircle } from "@mui/icons-material";
import { Box, Button, InputAdornment, Paper, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserByName, userFetched } from "../reducer/UserReducer";
import { userFetchByName } from "../api/UserApis";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const resp = await userFetchByName(name);
        dispatch(userFetched(resp.data));
        navigate("/posts");
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '10rem', gap: '5rem', padding: '3rem 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, height: '2rem', width: '2rem' }} />
                <TextField id="input-with-sx" label="Username" variant="standard" 
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', flex: '0.3 0 auto', width: '100%', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
                <Link to="/signup">Dont have account? Sign up</Link>
                <Button variant="contained" endIcon={<SendIcon />} onClick={(e) => handleSubmit()}>
                    Login
                </Button>
            </div>   
        </div>
    )
};

export default Login;