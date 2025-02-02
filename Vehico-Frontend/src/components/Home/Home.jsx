import React from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";
import { luxuryVehicles } from "./luxuryVehicles";
import VehicleCard from "../Vehicle/VehicleCard";
import { Navbar } from "../Navbar/Navbar";

export const Home = () => {
  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[60vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">Vehico</p>
          <p className="z-10 text-gray-300 text-sm lg:text-xl">
            Welcome to Vehico, your one-stop solution for hassle-free vehicle
            rentals! Whether you're looking for a car, bike, or even a truck,
            Vehico connects renters with a wide variety of vehicles to suit
            every need. Our platform is designed to provide a seamless rental
            experience with features like: Easy Booking: Explore and book
            vehicles effortlessly with just a few clicks. Flexible Options:
            Choose from various vehicle types such as cars, bikes, trucks,
            buses, SUVs, and more. Secure Transactions: Enjoy peace of mind with
            secure payment methods and verified users. Personalized Dashboard:
            Admins can manage vehicles and bookings efficiently, while customers
            can view and track their rentals. Real-Time Notifications: Stay
            updated with booking approvals, rejections, or status changes
            instantly. Vehico aims to bridge the gap between vehicle providers
            and renters, offering a convenient, reliable, and trustworthy
            platform. Whether you're planning a short trip or need a vehicle for
            business, we're here to make it happen!
          </p>
        </div>
        <div className="cover absolute top-0 right-0"></div>
        <div className="fadout "></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-5">
          Top Luxury Cars
        </p>
        <MultiItemCarousel />
      </section>

      <section className="px-5 lg:px-20 pt-5">
        <h1 className="text-2xl font-semibold text-gray-400 pb-5">
          Luxury Cars We Have{" "}
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-3">
          {luxuryVehicles.map((item, index) => (
            <VehicleCard
              key={index}
              name={item.name}
              image={item.imageUrl}
              description={item.description}
              price={item.pricePerDay}
              vehicleId={index}
              isAvailable={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
