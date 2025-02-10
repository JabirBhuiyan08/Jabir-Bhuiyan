import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar/Navbar";



const Main = () => {
  return (
    <div className="mx-5">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
