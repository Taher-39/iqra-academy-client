import { createBrowserRouter } from "react-router-dom"; 
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { studentPaths } from "./student.routes";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { routeGenerator } from "../utils/RouteGenaretor";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/admin',
        element: <App />,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/faculty',
        element: <App />,
        children: routeGenerator(facultyPaths)
    },
    {
        path: '/student',
        element: <App />,
        children: routeGenerator(studentPaths)
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
]);
