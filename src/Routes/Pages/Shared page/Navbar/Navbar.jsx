import { Link, NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../../Contex/AuthProvaider";
import { BsCart2 } from "react-icons/bs";
import UseCart from "../../../../Hooks/UseCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCart();
  

  const handleLogOut = () => {
    logOut();
  };

  const navOpstion = (
    <>
      <NavLink to="/" className="">
        HOME
      </NavLink>

      <NavLink to="/signin" className="mx-6">
        CONTACT US
      </NavLink>

      <NavLink to="/dashbord">DASHBOARD</NavLink>

      <NavLink to="/menu" className="mx-6">
        OUR MENU
      </NavLink>

      <NavLink to="/ourshop">OUR SHOP</NavLink>

      <NavLink to={'/dashbord/mycart'} className="flex ml-5">
        <BsCart2 className="text-2xl" />
        <div className="badge badge-secondary">+{cart.length}</div>
      </NavLink>
    </>
  );
  return (
    <div className="max-w-screen-xl mx-left">
      <div className="navbar bg-black bg-opacity-30  fixed z-10 text-white px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-600 rounded-box w-52 "
            >
              {navOpstion}
            </ul>
          </div>
          <div className="cinzel">
            <a className=" text-xl font-black">Bistro Boss</a>
            <p className="tracking-widest font-bold ">RESTAURANT</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 z ">{navOpstion}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link  onClick={handleLogOut} className="mr-5 tooltip  tooltip-left" data-tip={user?.displayName}>
                SIGN OUT{" "}
              </Link>
            </>
          ) : (
            <>
              <Link to={"/signin"} className="mr-5">
                SIGN IN{" "}
              </Link>
            </>
          )}
         

          <div className="avatar online">
            <div className="size-14 rounded-full">
              {user ? (
                <>
                  {/* <h1>{user.displayName}</h1> */}

                  <img src={user.photoURL} alt="" />
                </>
              ) : (
                <>
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
