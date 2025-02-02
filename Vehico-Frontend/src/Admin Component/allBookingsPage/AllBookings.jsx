import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AllBookings = () => {
  // Temporary mock data for testing
  const [bookings, setBookings] = useState([
    {
      userEmail: 'user1@example.com',
      vehicleName: 'Honda Civic',
      from: '2024-12-01',
      to: '2024-12-05',
      totalCost: 2000,
      status: 'Confirmed',
    },
    {
      userEmail: 'user2@example.com',
      vehicleName: 'Toyota Corolla',
      from: '2024-12-10',
      to: '2024-12-15',
      totalCost: 3000,
      status: 'Pending',
    },
    {
      userEmail: 'user3@example.com',
      vehicleName: 'Ford Mustang',
      from: '2024-12-18',
      to: '2024-12-22',
      totalCost: 5000,
      status: 'Cancelled',
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center">All Bookings</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-center">User Email</TableCell>
              <TableCell className="text-center">Vehicle Name</TableCell>
              <TableCell className="text-center">From</TableCell>
              <TableCell className="text-center">To</TableCell>
              <TableCell className="text-center">Total Cost</TableCell>
              <TableCell className="text-center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">{booking.userEmail}</TableCell>
                <TableCell className="text-center">{booking.vehicleName}</TableCell>
                <TableCell className="text-center">{new Date(booking.from).toLocaleDateString()}</TableCell>
                <TableCell className="text-center">{new Date(booking.to).toLocaleDateString()}</TableCell>
                <TableCell className="text-center">{`₹${booking.totalCost}`}</TableCell>
                <TableCell className="text-center">{booking.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllBookings;
