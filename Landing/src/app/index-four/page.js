"use client";
// Importing React and necessary components
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js

// Importing Navbar, Footer, and Switcher components
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";

// Defining the IndexFour component
export default function IndexFour() {
  // State to hold the current time value
  const [time, setTime] = useState(1);

  // Function to handle decrementing time by 1 hour
  const decrementTime = () => {
    if (time > 1) {
      setTime(time - 1);
    }
  };

  // Function to handle incrementing time by 1 hour
  const incrementTime = () => {
    if (time < 24) {
      setTime(time + 1);
    }
  };

  return (
    <>
      {/* Rendering the Navbar component */}
      <Navbar />
      {/* Main section */}
      <section className="relative py-40 lg:h-screen flex justify-center items-center bg-green-600/10">
        <div className="container">
          {/* Form section */}
          <section className="relative md:pb-24 pb-16">
            {/* Styling the "At what date do you need?" heading */}
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">At what date do you need?</h2>
            <input type="date" />
            {/* Styling the "How much time do you need?" heading */}
            <h2 className="text-3xl lg:text-4xl font-bold mt-8 mb-4">How much time do you need?</h2>
            <div className="flex items-center">
              {/* Range input for selecting time */}
              <input
                type="range"
                min="1"
                max="24"
                value={time}
                onChange={(e) => setTime(parseInt(e.target.value))}
                className="w-full mr-4 appearance-none"
              />
              {/* Buttons for decrementing and incrementing time */}
              <button onClick={decrementTime} className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600">-</button>
              <div className="w-8 text-center">{time}</div> {/* Display the current value */}
              <button onClick={incrementTime} className="bg-green-500 text-white px-4 py-2 rounded ml-2 hover:bg-green-600">+</button>
            </div>
            <p>Starting at give price</p>
            {/* Styling the button with green color */}
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              <Link href="/index-three">Choose a ride</Link>
            </button>
          </section>
        </div>
      </section>
      {/* Rendering the Footer component */}
      <Footer />
      {/* Rendering the Switcher component */}
      <Switcher />
    </>
  );
}
