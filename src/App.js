import { Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';

import Header from './component/Header';
import { router } from './routes/RouteProvider';
import { Box, Card, Container } from '@mui/material';

function App() {
  return (
    <Box className="App">
      <Header></Header>
      <div sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        margin: '1rem 0' 
        }}>
        <Card sx={{ flex: '0 1 65%'}}>
          <RouterProvider router={router} />
        </Card>
      </div>
    </Box>
  );
}

export default App;
