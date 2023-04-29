import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css';

import Header from './component/Header';
import { router } from './routes/RouteProvider';
import { Box, Card } from '@mui/material';

function App() {
  return (
    <Box className="App">
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
