import React, { useEffect, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import AvtarImage from "../assests/images/avtar.jpeg"
import getToken from '../functions/getToken';

const MainHeader = () => {
  const navigate = useNavigate();

  // Simulate a logged-in state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    
    // Optionally, clear any other user-related data here
    // localStorage.removeItem('user');

    // Redirect to the login page or home page
    navigate('/login');
  };
  const handleClick = () => {
    navigate('/sign-up');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };
  useEffect(() => {
    const token = getToken();

    if (token) {
     setIsLoggedIn(true)
    }
  
    return () => {
      
    }
  }, [])
  

  return (
    <header className="bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold flex items-center">
              <img src="https://placehold.jp/0e74f0/3584e4/50x50.png" alt="logo" className="h-8 w-8 mr-2" />
              Genix Auctions
            </a>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex space-x-8">
            {/* Auctions Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 flex items-center">
                Auctions
                <HiChevronDown className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md p-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Upcoming</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Past Auctions</a>
              </div>
            </div>

            {/* Bidding Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 flex items-center">
                Bidding
                <HiChevronDown className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md p-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Active Bids</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bidding History</a>
              </div>
            </div>

            {/* About Us */}
            <a href="/about" className="text-gray-700 hover:text-blue-500 flex items-center">About Us</a>
          </div>

          {/* Right-side Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 flex items-center">
                <img src="path_to_language_icon.svg" className="h-5 w-5 mr-1"  />
                English
                <HiChevronDown className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md p-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Spanish</a>
              </div>
            </div>

            {/* Conditional Rendering for Login/Sign Up or Profile */}
            {!isLoggedIn ? (
              <>
                {/* Login */}
                <a onClick={handleLogin} href="#" className="text-gray-700 hover:text-blue-500">Login</a>

                {/* Get Started Button */}
                <a
                  onClick={handleClick}
                  href="#"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600"
                >
                  Get Started
                </a>
                
              </>
            ) : (
              <>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-500 flex items-center">
                  <img src={AvtarImage} className="h-8 w-8 rounded-full mr-2" alt="User Profile" />
                  
                  <HiChevronDown className="ml-1" />
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md p-2">
                  {/* Dropdown items */}
                  <a href="#" onClick={handleProfileClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    View Profile
                  </a>
                  <a  href="#"  onClick={logout}className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </a>
                </div>
              </div>
               <a
               href="#"
               onClick={logout}
               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
             >
               Logout
             </a>
             </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              {/* Heroicon menu icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
