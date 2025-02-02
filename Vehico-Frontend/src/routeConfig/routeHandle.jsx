import { useEffect, useState } from "react";
import { Home } from "../components/Home/Home";
import { Navbar } from "../components/Navbar/Navbar";
import allRoute from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RouteHandler = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Fetch role and token from localStorage
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token) {
      setIsLoggedIn(true); // User is logged in
      setIsAdmin(role === "ADMIN"); // Check if the user is admin
    } else {
      setIsLoggedIn(false); // User is not logged in
    }
  }, []);

  return (
    <div>
      {/* Show Navbar only for customers and not logged-in users */}
      {(!isAdmin || !isLoggedIn) && <Navbar />}
      
      <Routes>
        {allRoute?.map((item, index) => (
          <Route key={index} path={item?.path} element={item?.component} />
        ))}
      </Routes>
    </div>
  );
};

export default RouteHandler;
