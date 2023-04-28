import { Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';

import Header from './component/Header';
import { router } from './routes/RouteProvider';
import { Box, Card } from '@mui/material';

function App() {
  return (
    <Box className="App">
      <Header></Header>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        backgroundColor: '#fcfafb'
        }}>
        <Card sx={{ 
          flex: '0 1 65%',
          }}>
          <RouterProvider router={router} />
        </Card>
      </div>
    </Box>
  );
}

export default App;
