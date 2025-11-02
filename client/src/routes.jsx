import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { Login } from './pages/Login/Login.jsx';
import { Register } from './pages/Register/Register.jsx';

import { APITest } from './pages/APITest/APITest.jsx';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/apitest', element: <APITest /> },
]);
