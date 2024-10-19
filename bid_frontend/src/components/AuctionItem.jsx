import React from 'react';
import MainHeader from './MainHeader';
import { useNavigate } from 'react-router-dom';

const AuctionPage = () => {
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  const handleClick = () => {
    navigate("/"); // Navigate to the 'About' page on button click
  };
  return (
    <>
    <MainHeader/>
    <div className="flex flex-col md:flex-row p-6 space-x-0 md:space-x-8">
      {/* Left Section - Product Details */}
      <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-md">
        <button className="text-blue-500 text-sm font-semibold mb-4" onClick={handleClick}>
          &larr; Back to catalog 
        </button>
        <img
          src="https://via.placeholder.com/300"
          alt="Sony Black Headphones"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <span className="inline-block bg-green-200 text-green-700 text-xs font-semibold px-2 py-1 rounded mb-2">
          Live Auction
        </span>
        <h3 className="text-xl font-bold text-gray-800 mt-2 mb-4">
          Sony Black Headphones
        </h3>
        <div className="text-lg text-gray-600 mb-2">
          <p>
            <span className="font-semibold">Minimum Bid:</span> $100
          </p>
          <p>
            <span className="font-semibold">Current Bid:</span> $165
          </p>
        </div>
        <p className="text-sm text-gray-500 mb-4">Ends in: 1 day 12 hrs 43 minutes</p>
      </div>

      {/* Right Section - Description and Reviews */}
      <div className="w-full md:w-2/3">
        <div className="bg-white p-6 shadow-md rounded-md mb-6">
          <h3 className="text-lg font-bold mb-4">Description</h3>
          <p className="text-gray-600 mb-4">
            Immerse yourself in pristine sound quality with the Sony Black Headphones.
            Crafted for audiophiles and casual listeners alike, these headphones deliver
            an exceptional audio experience with deep, resonant bass and crystal-clear
            highs. The sleek black design complements any style, whether you're on the go
            or relaxing at home.
          </p>
          <p className="text-gray-600 mb-4">
            Equipped with advanced noise-canceling technology, these headphones block out
            distractions so you can enjoy your music, podcasts, or calls without
            interference. Comfort is key with plush ear cushions that provide long-lasting
            comfort for extended listening sessions.
          </p>
          <p className="text-gray-600">
            Foldable and compact, they're perfect for travel and storage. Whether you're
            commuting, working out, or simply unwinding, the Sony Black Headphones offer
            premium sound quality and comfort that elevate your listening experience to
            new heights.
          </p>
        </div>

        {/* Reviews */}
        <div className="bg-white p-6 shadow-md rounded-md">
          <h3 className="text-lg font-bold mb-4">Reviews</h3>
          <div className="space-y-6">
            {/* Review 1 */}
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Reviewer"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-yellow-400">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <p className="text-sm text-gray-500 ml-2">March 14, 2021</p>
                </div>
                <p className="text-gray-700 font-semibold">Kristin Watson</p>
                <p className="text-gray-600">
                  These headphones are a game-changer for my daily commute. The
                  noise-canceling feature works like a charm.
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Reviewer"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-yellow-400">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <p className="text-sm text-gray-500 ml-2">January 28, 2021</p>
                </div>
                <p className="text-gray-700 font-semibold">Jenny Wilson</p>
                <p className="text-gray-600">
                  I'm blown away by the sound clarity these headphones offer.
                </p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Reviewer"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-yellow-400">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </span>
                  <p className="text-sm text-gray-500 ml-2">December 12, 2020</p>
                </div>
                <p className="text-gray-700 font-semibold">Renee Carson</p>
                <p className="text-gray-600">
                  As a frequent flyer, these headphones have become my must-have travel
                  companion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bid Section */}
      <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-md mt-8 md:mt-0">
        <h3 className="text-lg font-bold mb-4">Your bid is $165</h3>
        <ul className="text-gray-600 text-sm space-y-2 mb-4">
          <li>The Floor bids $157</li>
          <li>The Floor bids $150</li>
          <li>Internet Bidder bids $145</li>
          <li>The Floor bids $140</li>
          <li>Internet Bidder bids $132</li>
          <li>The Floor bids $111</li>
          <li>Internet Bidder bids $109</li>
          <li>The Floor bids $105</li>
        </ul>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
          Bid now &rarr;
        </button>
      </div>
    </div>
    </>
  );
};

export default AuctionPage;
