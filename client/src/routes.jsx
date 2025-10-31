import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Register } from "./pages/Register/Register.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register />}
]);

