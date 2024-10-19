// components/AuctionCard.js
import React from 'react';
import getToken from '../functions/getToken';
import {  useNavigate } from 'react-router-dom';

const AuctionCard = ({ auction, imageUrl }) => {
  const navigate = useNavigate()
  const handleBidSubmit=(e)=>{
   
    if(getToken()===null){
      navigate('/login');
        }

  }
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
      {/* Image Section */}
      <div className="relative" onClick={(e)=>{e.preventDefault();navigate('/auction')}}>
        <img 
          src="https://placehold.co/600x400/D6BCFA/white"
          alt={auction.title} 
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{auction.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{auction.description}</p>
        <div className="text-gray-800 text-lg font-medium">
          Starting Bid: <span className="text-green-500">${auction.startingBid}</span>
        </div>
        <div className="text-sm text-gray-500 mt-2">
          Ends on: {new Date(auction.endDate).toLocaleDateString()} at {new Date(auction.endDate).toLocaleTimeString()}
        </div>
        <div className="mt-4">
         
          <button
            onClick={(e)=>handleBidSubmit(e)}
            className="mt-2 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-200"
          >
            Bid Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
