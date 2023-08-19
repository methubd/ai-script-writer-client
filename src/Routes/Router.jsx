import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyScripts from "../Pages/Dashboard/MyScripts/MyScripts";
import EditScript from "../Pages/Dashboard/EditScript/EditScript";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children: [
            {
              path: '/dashboard/create-script'
            },
            {
              path: '/dashboard/my-scripts',
              element: <MyScripts></MyScripts>              
            },
            {
              path: '/dashboard/demo-scripts'
            },
            {
              path: '/dashboard/edit-script/:id',
              element: <EditScript></EditScript>,
              loader: ({params}) => fetch(`http://localhost:5000/specific-scripts/${params.id}`)
            }
          ]
        }
      ]
    },

  ]);

export default router;