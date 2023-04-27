import { Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';

import Header from './component/Header';
import { router } from './routes/RouteProvider';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
