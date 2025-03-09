import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar/Navbar";



const Main = () => {

  const location = useLocation();

  const noHeaderFooter = location.pathname.includes("/login") || location.pathname.includes("/");


  return (
    <div className="mx-5">
      {!noHeaderFooter && <Navbar></Navbar>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
