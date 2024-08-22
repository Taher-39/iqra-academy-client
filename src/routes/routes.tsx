import { createBrowserRouter } from "react-router-dom"; 
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { AdminPaths } from "./admin.routes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/admin',
        // element: <AdminLaout />,
        element: <App/>,
        children: AdminPaths
    },
    {
        path: '/faculty',
        // element: <AdminLaout />,
        element: <App/>,
        children: AdminPaths
    },
    {
        path: '/student',
        // element: <AdminLaout />,
        element: <App/>,
        children: AdminPaths
    },
 
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
])