import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <main className="main-content">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;