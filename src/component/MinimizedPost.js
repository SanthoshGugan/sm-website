import { Avatar, Icon, IconButton, Paper } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";
import { BorderColor } from "@mui/icons-material";

const MinimizedPost = () => {

    return(
        <Paper sx={{ 
            display: 'flex' ,
            flexDirection: 'column',
            margin: '0 5rem'
        }}>
            <div style={{
                flex: '0 1 25%'
                }}
            > 
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '0.5rem 1rem',
                        alignContent: 'center',
                        borderBottom: '1.5px none grey'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <Avatar sx={{ bgcolor: "darkblue"}}>S</Avatar>
                        <div>Santhosh Gugan</div>
                    </div>
                    <div>
                    <IconButton aria-label="Example">
                        <MoreVertIcon />
                    </IconButton>
                    </div>
                </div>
            </div>
            <div style={{
                flex: '1 0.25 100px',
                display: 'flex',
                margin: '1rem',
                justifyContent: 'flex-start'
            }}
            > content</div>
        </Paper>
    );
};

export default MinimizedPost;