/* eslint-disable @next/next/no-img-element */
import React from "react";


const BuyPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBuyOption = (option) => {
    switch (option) {
      case 'Car':
        window.location.href = '/grid';
        break;
      case 'Bike':
        window.location.href = '/bike';
        break;
      case 'Scooter':
        window.location.href = '/scooter';
        break;
      case 'Auto':
        window.location.href = '/auto';
        break;
      case 'Truck':
          window.location.href = '/truck';
          break;  
      case 'Drone':
            window.location.href = '/drone';
            break;
      case 'Tractor':
              window.location.href = '/tractor';
              break;      

      default:
        break;
    }
  };

  const calculateHeight = () => {
    const numVehicles = 7; // Number of vehicles
    const numRows = Math.ceil(numVehicles / 3); // Calculate number of rows needed
    const minHeight = 'h-3/5'; // Minimum height for the popup
    
    // Determine the height class based on the number of rows
    switch (numRows) {
      case 1:
        return minHeight; // Minimum height if there's only one row
      case 2:
        return 'h-4/5'; // Adjust height for two rows
      default:
        return 'h-full'; // Full height for more than two rows
    }
  };
  

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 border border-green-400 rounded-lg shadow-md w-3/5 ${calculateHeight()} `}>

    <button
      className="absolute top-0 right-0 px-3 py-1 text-xl font-bold text-gray-600 hover:text-gray-800 btn-blue"
      onClick={onClose}
    >
      X
        </button>
        <h2 className="font-bold text-xl">Buy on Electrify EVM</h2>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <button
            className="flex flex-col items-center m-2 p-4 border border-black-500 square-full overflow-hidden"
            onClick={() => handleBuyOption('Car')}
          >
            <img
              src="/images/popup/s1.jpeg"
              alt="Buy Car"
              className="w-40 h-40 square-full"
            />
            <span className="mt-2">Buy Car</span>
          </button>
          <button
            className="flex flex-col items-center m-2 p-4 border border-black-500 square-full overflow-hidden"
            onClick={() => handleBuyOption('Bike')}
          >
            <img
              src="/images/popup/b1.jpeg"
              alt="Buy Bicycle"
              className="w-40 h-40 square-full"
            />
            <span className="mt-2">Buy Bicycle</span>
          </button>
          <button
            className="flex flex-col items-center m-2 p-4 border border-black-500 square-full overflow-hidden"
            onClick={() => handleBuyOption('Scooter')}
          >
            <img
              src="/images/popup/s3.jpg"
              alt="Buy Scooter"
              className="w-40 h-40 square-full"
            />
            <span className="mt-2">Buy Scooter</span>
          </button>

          <button
            className="flex flex-col items-center m-2 p-4 border border-black-500 square-full overflow-hidden"
            onClick={() => handleBuyOption('Auto')}
          >
            <img
              src="/images/popup/b1.jpeg"
              alt="Buy Bicycle"
              className="w-40 h-40 square-full"
            />
            <span className="mt-2">Buy Auto</span>
          </button>

          <button
            className="flex flex-col items-center m-2 p-4 border border-black-500 square-full overflow-hidden"
            onClick={() => handleBuyOption('Truck')}
          >
            <img
              src="/images/popup/b1.jpeg"
              alt="Buy Bicycle"
              className="w-40 h-40 square-full"
            />
            <span className="mt-2">Buy Truck</span>
          </button>

          <button
            className="flex flex-col items-center m-2 p-4 border border-black-500 square-full overflow-hidden"
            onClick={() => handleBuyOption('drone')}
          >
            <img
              src="/images/popup/b1.jpeg"
              alt="Buy Bicycle"
              className="w-40 h-40 square-full"
            />
            <span className="mt-2">Buy Drone</span>
          </button>

          <button
            className="flex flex-col items-center m-2 p-4 border border-black-500 square-full overflow-hidden"
            onClick={() => handleBuyOption('Tractor')}
          >
            <img
              src="/images/popup/b1.jpeg"
              alt="Buy Bicycle"
              className="w-40 h-40 square-full"
            />
            <span className="mt-2">Buy Tractor</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyPopup;
