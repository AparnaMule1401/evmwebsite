'use client'
import React, { useState } from "react";
import Link from "next/link"; 

import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";

export default function IndexFour() {
  const [time, setTime] = useState(1);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [day, setDay] = useState("");
  const [location, setLocation] = useState("");

  const decrementTime = () => {
    if (time > 1) {
      setTime(time - 1);
    }
  };

  const incrementTime = () => {
    if (time < 24) {
      setTime(time + 1);
    }
  };

  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-100" style={{ backgroundImage: "url('/images/bg/b15.jpg')" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Select Pickup Date</h2>
            <input 
              type="date" 
              value={date}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">Select Pickup Day</h2>
            <input 
              type="text" 
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="e.g., Monday"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">Select Duration (in hours)</h2>
            <div className="flex items-center mb-4">
              <button onClick={decrementTime} className="px-2 py-1 bg-gray-200 rounded-full mr-2">-</button>
              <input
                type="range"
                min="1"
                max="24"
                value={time}
                onChange={(e) => setTime(parseInt(e.target.value))}
                className="w-full appearance-none"
                style={{
                  background: 'linear-gradient(to right, #68d391 0%, #68d391 ' + ((time / 24) * 100) + '%, #e2e8f0 ' + ((time / 24) * 100) + '%, #e2e8f0 100%)'
                }}
              />
              <button onClick={incrementTime} className="px-2 py-1 bg-gray-200 rounded-full ml-2">+</button>
              <div className="w-12 text-center ml-4">{time} Hours</div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <input 
              type="text" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <button className="block w-full bg-green-500 text-white py-3 rounded hover:bg-green-600">
              <Link href="/index-three">Book Now</Link>
            </button>
          
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
