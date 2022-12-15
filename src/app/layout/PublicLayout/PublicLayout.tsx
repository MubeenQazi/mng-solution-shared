import React from "react";
import {Outlet } from "react-router-dom";
import PublicHeader from "../../components/PublicHeader/PublicHeader";
import Footer from "../../components/Footer/Footer";

const PublicLayout = () => (

    <div className="dashboard-layout">
        <PublicHeader />
        <main className="main-content">
            <Outlet/>
        </main>
        <Footer/>
    </div>
);

export default PublicLayout;
