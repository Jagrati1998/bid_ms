import { FaRegPlayCircle } from "react-icons/fa";
import dashboardImage from "../assests/images/dashboard.png";

function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row justify-between items-center mt-16  py-8 ">
      {/* Text Section - 1/3 of the width */}
      <div className="md:w-1/3 p-6 rounded-lg text-black">
        <h1 className="text-4xl font-bold leading-tight">
          Your Gateway to Extraordinary Finds
        </h1>
        <p className="text-lg mt-4">
          Unlock deals, bid smart, and seize the moment with our online bidding bonanza!
        </p>
        <button 
        className="mt-6 flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          <FaRegPlayCircle className="mr-2" /> Watch Video
        </button>
      </div>

      {/* Image Section - 2/3 of the width */}
      <div className="md:w-2/3 mt-6 md:mt-0 flex justify-center p-7">
        <img
          src={dashboardImage}
          alt="Excited person holding a phone"
          className="h-96 w-full object-contain"
        />
      </div>
    </div>
    </div>
  );
}

export default HeroSection;
