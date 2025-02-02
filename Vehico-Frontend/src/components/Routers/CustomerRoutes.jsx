import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import Profile from "../Profile/Profile";
import Auth from "../Auth/Auth";
import VehiclePage from "../Vehicle/VehiclePage";
import About from "../About/About";

const CustomerRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/account/register" element={<Home />}></Route>
        <Route path="/account/login" element={<Home />}></Route>
        <Route path="/vehicles" element={<VehiclePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/my-profile/*" element={<Profile />}></Route>
      </Routes>
      <Auth />
    </div>
  );
};

export default CustomerRoutes;
