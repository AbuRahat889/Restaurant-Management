import { createBrowserRouter } from "react-router-dom";
import App from "../LayOut/App";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Our Menu/Menu/Menu";
import OurShop from "../Pages/Our Shop/OurShop";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/Sign UP/SignUp";
import Dashbord from "../LayOut/Dashbord";
import MyCart from "../Pages/UserDashBord/My Cart/MyCart";
import AllUsers from "../Pages/Admin Dashbord/All Users/AllUsers";
import AdminHome from "../Pages/Admin Dashbord/Admin Home/AdminHome";
import AddItems from "../Pages/Admin Dashbord/Add Items/AddItems";
import ManageItems from "../Pages/Admin Dashbord/Manage Items/ManageItems";
import BookingManage from "../Pages/Admin Dashbord/Bookings/BookingManage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/ourshop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashbord",
    element: (
      <PrivateRoute>
        <Dashbord></Dashbord>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashbord/mycart",
        element: <MyCart></MyCart>,
      },

      //admin routes
      {
        path: "/dashbord/adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashbord/addItems",
        element: <AddItems></AddItems>,
      },
      {
        path: "/dashbord/manageItems",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "/dashbord/bookingManage",
        element: <BookingManage></BookingManage>,
      },
      {
        path: "/dashbord/allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
