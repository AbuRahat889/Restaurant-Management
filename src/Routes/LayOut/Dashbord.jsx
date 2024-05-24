import { FaBook, FaCalendarPlus, FaHome, FaList, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { IoWallet } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { TbMessage2Star } from "react-icons/tb";
import { TfiMenu } from "react-icons/tfi";
import { GiShoppingBag } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import "../LayOut/Dashbord.css";
import { ImSpoonKnife } from "react-icons/im";

const Dashbord = () => {
  //TODO : get isadmin value form database
  const isAdmin = true;

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex gap-10">
        <div className="w-64 min-h-screen bg-[#d1a054] p-6">
          {/* logo bistor boss */}
          <div className="cinzel mb-10">
            <a className=" text-xl font-black">Bistro Boss</a>
            <p className="tracking-widest font-bold ">RESTAURANT</p>
          </div>

          <ul>
            {isAdmin ? (
              <>
              <li className="flex gap-2 items-center text-2xl mb-6">
              <FaHome></FaHome>
              <NavLink to={"/dashbord/adminHome"}> Admin Home</NavLink>
            </li>
            <li className="flex gap-2 items-center text-2xl mb-6">
            <ImSpoonKnife />
              <NavLink to={"/dashbord/addItems"}> Add Items</NavLink>
            </li>
            <li className="flex gap-2 items-center text-2xl mb-6">
              <FaList />
              <NavLink to={"/dashbord/manageItems"}> Manage Items</NavLink>
            </li>
            <li>
              <NavLink
                className="flex gap-2 items-center text-2xl mb-6"
                to={"/dashbord/bookingManage"}
              >
                <FaBook></FaBook>Bookings
              </NavLink>
            </li>
            <li className="flex gap-2 items-center text-2xl mb-6">
            <FaUsers />
              <NavLink to={"/dashbord/allusers"}>All Users</NavLink>
            </li>
            
              </>
            ) : (
              <>
                <li className="flex gap-2 items-center text-2xl mb-6">
                  <FaHome></FaHome>
                  <NavLink to={"/userHome"}> User Home</NavLink>
                </li>
                <li className="flex gap-2 items-center text-2xl mb-6">
                  <SlCalender />
                  <NavLink to={"/userHome"}> reservation</NavLink>
                </li>
                <li className="flex gap-2 items-center text-2xl mb-6">
                  <IoWallet />
                  <NavLink to={"/userHome"}> payment history</NavLink>
                </li>
                <li>
                  <NavLink
                    className="flex gap-2 items-center text-2xl mb-6"
                    to={"/dashbord/mycart"}
                  >
                    <BsCart></BsCart>my cart
                  </NavLink>
                </li>
                <li className="flex gap-2 items-center text-2xl mb-6">
                  <TbMessage2Star />
                  <NavLink to={"/userHome"}>add review</NavLink>
                </li>
                <li className="flex gap-2 items-center text-2xl mb-6">
                  <FaCalendarPlus />
                  <NavLink to={"/userHome"}>my booking</NavLink>
                </li>
              </>
            )}

            <div className="divider bg-white h-1"></div>

            <li className="flex gap-2 items-center text-2xl my-6">
              <FaHome></FaHome>
              <NavLink to={"/"}> Home</NavLink>
            </li>
            <li className="flex gap-2 items-center text-2xl my-6">
              <TfiMenu />
              <NavLink to={"/menu"}> Menu</NavLink>
            </li>
            <li className="flex gap-2 items-center text-2xl my-6">
              <GiShoppingBag />
              <NavLink to={"/ourshop"}> Shop</NavLink>
            </li>
            <li className="flex gap-2 items-center text-2xl my-6">
              <IoMdMail />
              <NavLink to={"/ourshop"}> Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
