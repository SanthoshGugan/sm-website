import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Card } from "@mui/material";

const Root = () => {
    return (
        <>
            <Header></Header>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center',
                backgroundColor: '#fcfafb'
                }}>
                <Card sx={{ 
                flex: '0 1 65%',
                }}>
                <Outlet />
                </Card>
            </div>
      </>
    );
};

export default Root;