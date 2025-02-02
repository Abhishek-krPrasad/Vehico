import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import { Divider, Drawer, useMediaQuery } from '@mui/material';

const menu = [
  { title: "Bookings", icon: <ListIcon />, path: "/my-Profile/bookings" },
  { title: "Notifications", icon: <NotificationsIcon />, path: "/my-Profile/notifications" },
  { title: "Logout", icon: <LogoutIcon />, path: "/" }, // Logout will navigate to home
];

const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    // Clear authentication data from localStorage or sessionStorage
    localStorage.removeItem('token');  // Or use sessionStorage.removeItem('token');
    
    // Redirect to the home page or login page
    navigate('/');
  };

  return (
    <div>
      <Drawer variant={isSmallScreen ? "temporary" : "permanent"} onClose={handleClose} open={open} anchor='left' sx={{ zIndex: 1, position: "sticky" }}>
        <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col mt-12 text-xl gap-8 pt-16">
          {menu.map((item, i) => (
            <React.Fragment key={i}>
              {item.title === "Logout" ? (
                <div onClick={handleLogout} className="px-5 flex items-center space-x-5 cursor-pointer">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className="nav-item"
                  style={({ isActive }) => ({
                    // backgroundColor: isActive ? "#f1f1f1" : "transparent", // Active style
                    color: isActive ? "#fff" : "#fff",  // Active style
                  })}
                >
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

export default ProfileNavigation;
