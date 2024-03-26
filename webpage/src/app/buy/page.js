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
      default:
        break;
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-400 p-10 border border-green-400 rounded-lg shadow-md w-3/5 h-3/5">
      <div className="text-center">
        <button className="absolute top-0 right-0 px-3 py-1 text-xl font-bold text-gray-600 hover:text-gray-800" onClick={onClose}>X</button>
        <h2 className="font-bold text-xl">Buy on Electrify EVM</h2>
        <div className="flex justify-center mt-5">
          <button className="flex flex-col items-center m-2 p-4 border border-black-500 square-full overflow-hidden" onClick={() => handleBuyOption('Car')}>
            <img src="/images/popup/s1.jpeg" alt="Buy Car" className="w-40 h-40 square-full" />
            <span className="mt-2">Buy Car</span>
          </button>
          <button className="flex flex-col items-center m-2 p-4 border border-black-500 square-full overflow-hidden" onClick={() => handleBuyOption('Bike')}>
            <img src="/images/popup/b1.jpeg" alt="Buy Bicycle" className="w-40 h-40 square-full" />
            <span className="mt-2">Buy Bicycle</span>
          </button>
          <button className="flex flex-col items-center m-2 p-4 border border-black-500 square-full overflow-hidden" onClick={() => handleBuyOption('Scooter')}>
            <img src="/images/popup/s3.jpg" alt="Buy Scooter" className="w-40 h-40 square-full" />
            <span className="mt-2">Buy Scooter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyPopup;
