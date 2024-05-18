import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Routes/Pages/Shared page/Footer/Footer";
import Navbar from "./Routes/Pages/Shared page/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
