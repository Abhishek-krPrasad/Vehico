import React, { useEffect, useState } from 'react'
import { getAllVehiclesService } from '../../components/config/api';
import AdminVehicleCard from './AdminVehicleCard';

const AllVehicle = () => {
  const [allVehicles, setAllVehicles] = useState([]);

  useEffect(() => {
    const fetchAllvehicles = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const response = await getAllVehiclesService(token);
          console.log(response);
          setAllVehicles(response.data); // Assuming response.data contains the list of vehicles
        } catch (error) {
          console.error("Error fetching vehicles:", error);
        }
      }
    };

    fetchAllvehicles();
  }, []);

  return (
    <div>
      {allVehicles && allVehicles.length > 0 ? (
        allVehicles.map((vehicle, index) => (
          <AdminVehicleCard
            key={index}
            name={vehicle.name}
            image={vehicle.images}
            description={vehicle.description}
            price={vehicle.pricePerDay}
          />
        ))
      ) : (
        <p>No vehicles available</p>
      )}
    </div>
  );
}

export default AllVehicle;
