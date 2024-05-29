import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared page/Footer/Footer";
import Navbar from "../Pages/Shared page/Navbar/Navbar";

function App() {
  const location = useLocation();

  const hideFooter =
    location.pathname.includes("signin") ||
    location.pathname.includes("signup");
  return (
    <div>
      {hideFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {hideFooter || <Footer></Footer>}
    </div>
  );
}

export default App;
