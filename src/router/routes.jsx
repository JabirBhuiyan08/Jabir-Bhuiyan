import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main.jsx";
import Login from "../Pages/Login page/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Dashboard from "../Layout/Dashboard.jsx";
import User from "../Pages/Dashboard/User.jsx";
import DashHome from "../Pages/Dashboard/DashboardHome/DashHome.jsx";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            
        ]
    },
    {
        path: "dashboard",
        element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "",
                element:<DashHome></DashHome>
            },
            // {
            //     path: "portfolios",
            //     element:<Portfolios></Portfolios>
            // },
            {
                path: "user",   
                element: <User></User>,
            },
        ]
    }
   
]);