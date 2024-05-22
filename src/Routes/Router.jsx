import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Our Menu/Menu/Menu";
import OurShop from "./Pages/Our Shop/OurShop";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/Sign UP/SignUp";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/ourshop',
          element:<OurShop></OurShop>
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);