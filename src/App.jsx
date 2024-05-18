import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Routes/Pages/Shared page/Footer/Footer";

function App() {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
