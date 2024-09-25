import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Pharmacy App" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold text-gray-800">Pharmacy App</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/products" className="text-gray-800 hover:text-blue-500">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-800 hover:text-blue-500">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/account" className="text-gray-800 hover:text-blue-500">
                Account
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <ul className="flex flex-col items-center space-y-4 mt-4">
          <li>
            <Link to="/products" className="text-gray-800 hover:text-blue-500">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-gray-800 hover:text-blue-500">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/account" className="text-gray-800 hover:text-blue-500">
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;