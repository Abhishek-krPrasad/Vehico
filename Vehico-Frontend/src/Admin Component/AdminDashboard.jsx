import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardNavigation from './DashboardNavigation';
import Admin from './Admin';
import VehiclePage from './vehiclePage/VehiclePage';
import AllBookings from './allBookingsPage/AllBookings';
import BookingRequests from './bookingRequestPage/BookingRequests';

const AdminDashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[80vh] lg:w-[20%]">
        <DashboardNavigation open={openSidebar} />
      </div>
      <div className="lg:w-[80%]">
        <Routes>
          <Route path="admin-profile" element={<Admin />} />
          <Route path="vehicles" element={<VehiclePage />} />
          <Route path="all-bookings" element={<AllBookings />} />
          <Route path="booking-requests" element={<BookingRequests />} />
          {/* Other routes can be added similarly */}
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
