import MainRoot from "../pages/User/MainRoot";
import Home from "../pages/User/Home";
import Employees from "../pages/User/Exployees";
import EmployeeDetail from "../pages/User/EmployeeDetail"
import Favorites from "../pages/User/Favorites";
import NotFaund from "../pages/User/NotFaund";
import Employee from "../pages/User/Employee";
//Admin//
import AdminRoot from "../pages/Admin/AdminRoot";
import Exployees from "../pages/Admin/Employees";
import AddEmployee from "../pages/Admin/AddEmployee";
import EditEmployee from "../pages/Admin/EditEmplooye";

export const ROUTES = [
    {
        path: '/',
        element: <MainRoot />,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'employeedetail',
                element:<EmployeeDetail/>
            },
            {
                path: 'favorites',
                element:<Favorites/>
            },
            {
                path: 'employees',
                element:<Employees/>
            },
            {
                path: 'employees/:id',
                element:<Employee/>
            },
            {
                path: '*',
                element:<NotFaund/>
            }

        ]
    },
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
            {
                path: '',
                element: <Exployees/>
            },
            {
                path: 'add-employee',
                element: <AddEmployee/>
            },
            {
                path: 'employees/edit/:id',
                element: <EditEmployee/>
            }
        ]
    }
]