import React, { useState } from "react";
import LoginPageImage from "../assests/images/side.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SuccessBox from "../utility/SuccessBox";
import FailureBox from "../utility/FailureBox";

const SignUp = () => {
  const [signUpState, setSignUpState] = useState(null)
  const [formData, setFormData] = useState({
   
    email: "",
    password: "",
  
  });
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  const handleClick = () => {
    navigate("/"); // Navigate to the 'About' page on button click
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    console.log("this console function is working")
    e.preventDefault();
    try {
        console.log(formData)
      // Making a POST request to the API

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, formData);
      if(res.data){
      const token = res.data.token;

        // Save the token to localStorage
        localStorage.setItem('token', token);

        // Navigate to the dashboard or another page after successful login
        navigate('/');
      }
    //   setResponse(res.data); // Update response state with the returned data
    setSignUpState(true)
    } catch (error) {
      setSignUpState(false)
      console.error('Error:', error);
    //   setResponse({ error: 'Failed to submit form' });
    }
  };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted: ", formData);
//   };

return (
  <>
  <div className="w-full h-screen bg-white ">
  <div className="w-full ">
    <div className="flex justify-start gap-10 items-center h-16 w-full shadow-md rounded-md p-2">
      {/* Logo */}
      <button  
        className="text-blue-500 text-sm font-semibold mb-4"
        onClick={handleClick}
      >
        &larr; Back to catalog
      </button>
      <div className="flex-shrink-0">
        <a href="#" className="text-2xl font-bold flex items-center">
          <img
            src="https://placehold.jp/0e74f0/3584e4/50x50.png"
            alt="logo"
            className="h-8 w-8 mr-2"
          />
          Genix Auctions
        </a>
      </div>
    </div>

    {/* Sign-up form container */}
    <div className="flex justify-center items-start p-0 mt-10">  {/* Adjust this line */}
      <div className="w-full max-w-lg p-8  mt-20 h-fit">
        <h2 className="text-4xl font-semibold text-gray-600 text-left">Login</h2>
        <p className="text-gray-500 text-sm mt-4 mb-4">
            Welcome back , Enter your credentials to access your account
            </p>
        <form onSubmit={handleSubmit}>
         

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-red-300"
              required
            />
           
          </div>

          

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring"
            >
              Continue
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-500">or sign up with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="bg-gray-200 p-2 rounded-full">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
                alt="Google"
                className="w-6 h-6"
              />
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
                alt="Apple"
                className="w-6 h-6"
              />
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/facebook.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 underline">
            Auction rules
          </a>
        </div>
      </div>

      {/* Right-side illustration */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center w-full h-full">
        <img src={LoginPageImage} alt="Illustration" className="w-180 h-180" />
      </div>
    </div>
  </div>
  {signUpState===true && (
        <SuccessBox 
          title="Login Successful!" 
          description="You have successfully Logged in for the auction." 
        />
      )}
       {signUpState===false && (
        <FailureBox 
          title="Login Unsuccessful!" 
          description="something went worng" 
        />
      )}

  </div>
  <div className="w-full bg-white p-4 shadow-md rounded-md">
      {/* Show Success Box if successful */}
    
      {/* Rest of your sign-up form */}
      <form onSubmit={handleSubmit}>
        {/* form fields and submit button */}
      </form>
    </div>
  </>
  
);

};

export default SignUp;
