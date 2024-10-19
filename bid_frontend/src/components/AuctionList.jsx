import React, { useEffect, useState } from 'react';
import AuctionCard from './AuctionCard';
import axios from 'axios';

function AuctionList() {
  let auctionURL=`${process.env.REACT_APP_API_URL}/api/auctions/`
 
  const [auctions, setAuctions] = useState([]); // State to hold auction data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  // Function to fetch the auction list
  const fetchAuctions = async () => {
    try {
      const response = await axios.get(auctionURL); // Adjust this URL to match your API endpoint
      setAuctions(response.data); // Assuming API response contains the auction list in 'data' key
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // useEffect to call the function when the component mounts
  useEffect(() => {
    fetchAuctions();
  }, []); // Empty dependency array ensures it runs once when the component mounts
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore Auctions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {auctions.map((auction, index) => (
          <AuctionCard key={index} auction={auction} />
        ))}
      </div>
    </div>
  );
}

export default AuctionList;