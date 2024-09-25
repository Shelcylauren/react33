import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../image/v.jpg'

function Register() {
  return (
    <div className="flex flex-col md:flex-row max-h-screen bg-gray-100">
      <div className="flex-1 flex items-center justify-center p-4 md:p-12">
        <div className="max-w-md w-full">
          
          <div className="mb-6"></div>

          <h2 className="text-2xl font-bold mb-4">Register</h2>

          <form className="space-y-5">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                required 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Register Button */}
            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account? <Link to="/Login" className="text-blue-600 hover:text-blue-700">Log in</Link>
          </p>
        </div>
      </div>

      {/* Decorative Image Section with Sky Blue Background */}
      <div className="hidden md:flex flex-0 items-center justify-center bg-whrite-100">
        <img 
          src={myImage} 
          alt="Decorative" 
          className="w-10/10 h-full min-w-xs"
        />
      </div>
    </div>
  );
}

export default Register;
