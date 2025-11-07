"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PatientDashboard() {
  const [locationAllowed, setLocationAllowed] = useState(false);
  const [city, setCity] = useState<string | null>(null);

  // Ask for location when page loads
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          setLocationAllowed(true);

          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          // Fetch city from backend OR directly here
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
          );
          const data = await response.json();
          setCity(data.city || "Unknown");
        },
        () => setLocationAllowed(false)
      );
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 flex flex-col items-center px-4 py-10">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Patient Dashboard
      </motion.h1>

      {/* Show detected city */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-gray-700 mb-4 text-lg"
      >
        {city
          ? `📍 Your Location: ${city}`
          : "Detecting location..."}
      </motion.div>

      {/* Emergency Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        onClick={() => (window.location.href = "/dashboard/emergency")}
        className="w-full max-w-md py-6 mb-6 rounded-2xl 
                   bg-red-600 text-white text-2xl font-semibold shadow-xl
                   hover:bg-red-700 hover:shadow-2xl transition-all"
      >
        🚨 Emergency
      </motion.button>

      {/* Regular Booking Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => (window.location.href = "/dashboard/regular")}
        className="w-full max-w-md py-5 rounded-2xl 
                   bg-blue-600 text-white text-xl font-medium shadow-lg
                   hover:bg-blue-700 transition-all"
      >
        📅 Book a Regular Appointment
      </motion.button>
    </div>
  );
}
