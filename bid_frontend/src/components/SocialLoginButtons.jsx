import React, { useState } from 'react';

function SocialLoginButtons() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <>
   
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div>
    <div className="   w-96 ">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-700">Keep me signed in</label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Continue
        </button>
      </form>
      <div className="text-center mt-4">
        <a href="#" className="text-blue-500 hover:underline">
          Forgot Password?
        </a>
      </div>
    </div>
    <div className="flex justify-center mt-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
        <i className="fab fa-google mr-2"></i>
        Google
      </button>
      <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-2">
        <i className="fab fa-apple mr-2"></i>
        Apple
      </button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <i className="fab fa-facebook-f mr-2"></i>
        Facebook
      </button>
    </div>
    </div>
    </div>
    
    </>
  );
}
export default SocialLoginButtons