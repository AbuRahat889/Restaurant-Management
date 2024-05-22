import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Routes/Pages/Shared page/Footer/Footer";
import Navbar from "./Routes/Pages/Shared page/Navbar/Navbar";

function App() {
  const location = useLocation();
  // console.log(location);
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
