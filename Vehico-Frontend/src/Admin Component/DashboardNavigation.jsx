import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CarRentalIcon from '@mui/icons-material/CarRental';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const menu = [
  { title: "Admin Profile", icon: <AdminPanelSettingsIcon />, path: "/admin-profile" },
  { title: "Vehicles", icon: <CarRentalIcon />, path: "/vehicles" },
  { title: "All Bookings", icon: <ListIcon />, path: "/all-bookings" },
  { title: "Booking Requests", icon: <NotificationsIcon />, path: "/booking-requests" },
  { title: "Logout", icon: <LogoutIcon />, path: "/" }, // Logout will navigate to home
];

const DashboardNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Logout action
    navigate('/');
  };

  return (
    <div>
      <Drawer variant={isSmallScreen ? "temporary" : "permanent"} onClose={handleClose} open={open} anchor="left" sx={{ position: "sticky", zIndex: "1" }}>
        <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col text-xl gap-8 pt-10">
          {menu.map((item, i) => (
            <React.Fragment key={i}>
              {item.title === "Logout" ? (
                <div onClick={handleLogout} className="px-5 flex items-center space-x-5 cursor-pointer">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              ) : (
                <NavLink to={`/dashboard${item.path}`} activeClassName="active-nav-item" className="nav-item">
                  <div className="px-5 flex items-center space-x-5 cursor-pointer">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                </NavLink>
              )}
              {i !== menu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default DashboardNavigation;
