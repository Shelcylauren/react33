import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../image/v.jpg'

function Login() {
  return (
    <div className="main-login flex flex-col md:flex-row max-h-screen bg-gray-100" > {/* Fond bleu ciel */}
      {/* Section principale du formulaire avec fond transparent */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-white bg-opacity-50 rounded-lg shadow-lg">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Login</h2>

          <form className="space-y-4">
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

            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Don't have an account? <Link to="/Register" className="text-blue-600 hover:text-blue-700">Register</Link>
          </p>
        </div>
      </div>

      {/* Section pour l'image décorative */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-transparent">
        <img 
          src={myImage}  // Assurez-vous que le chemin de l'image est correct src='../images'
          alt="Decorative" 
          className="w-3/3 h-auto min-w-xs"
        />
      </div>
    </div>
  );
}

export default Login;


