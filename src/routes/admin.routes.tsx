import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CraeteAdmin from "../pages/Admin/CraeteAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";


const CentralPath = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: '/admin/create-admin',
                element: <CraeteAdmin />
            },
            {
                name: 'Create Faculty',
                path: '/admin/create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create Student',
                path: '/admin/create-student',
                element: <CreateStudent />
            },
        ]
    }
]

export const SidebarItems = CentralPath.map(item => {
    if (item.children) {
        return {
            key: item.name,
            label: item.name,
            children: item.children.map(child => ({
                key: child.name,
                label: <NavLink to={child.path}>{child.name}</NavLink>,
            }))
        };
    } else {
        return {
            key: item.name,
            label: <NavLink to={item.path}>{item.name}</NavLink>
        };
    }
});


//Programmatical way
export const AdminPaths = CentralPath.flatMap(item => {
    if (item.children) {
        return item.children.map(child => ({
            path: child.path.replace('/admin/', ''), // removing the '/admin/' prefix
            element: child.element
        }));
    } else {
        return [
            {
                index: true,
                element: item.element
            },
            {
                path: item.path.replace('/admin/', ''),
                element: item.element
            }
        ];
    }
});

//Hard Coded way
// export const AdminPaths = [
//     {
//         index: true,
//         element: <AdminDashboard />
//     },
//     {
//         path: 'dashboard',
//         element: <AdminDashboard />
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent />
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty/>
//     },
//     {
//         path: 'create-admin',
//         element: <CraeteAdmin />
//     },
// ]
