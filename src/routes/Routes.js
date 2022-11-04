import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/pages/Froms/Booking";
import Login from "../components/pages/Froms/Login";
import Reset from "../components/pages/Froms/Reset";
import SignUp from "../components/pages/Froms/SignUp";
import Home from "../components/pages/Home/Home";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                loader:()=>fetch('http://localhost:5000/places'),
                element:<Home />
            }
        ]

    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/registration',
        element:<SignUp />
    },
    {
        path:'/reset-password',
        element:<Reset />
    },
    {
        path:'/booking',
        element:<Booking />
    }
])