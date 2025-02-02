import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const BookingRequests = () => {
  // Temporary mock data for testing
  const [requests, setRequests] = useState([
    {
      userEmail: 'user1@example.com',
      vehicleName: 'Honda Civic',
      from: '2024-12-01',
      to: '2024-12-05',
      totalCost: 2000,
      status: 'Pending',
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
      status: 'Pending',
    },
  ]);

  const handleAccept = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = 'Confirmed';
    setRequests(updatedRequests);
  };

  const handleReject = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = 'Rejected';
    setRequests(updatedRequests);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center">Booking Requests</h1>
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
              <TableCell className="text-center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">{request.userEmail}</TableCell>
                <TableCell className="text-center">{request.vehicleName}</TableCell>
                <TableCell className="text-center">{new Date(request.from).toLocaleDateString()}</TableCell>
                <TableCell className="text-center">{new Date(request.to).toLocaleDateString()}</TableCell>
                <TableCell className="text-center">{`₹${request.totalCost}`}</TableCell>
                <TableCell className="text-center">{request.status}</TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleAccept(index)}
                    disabled={request.status !== 'Pending'}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleReject(index)}
                    disabled={request.status !== 'Pending'}
                    className="ml-2"
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BookingRequests;
