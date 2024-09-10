import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="bg-transparent p-7 fixed top-0 left-0 w-full"
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000, // Ensure it is on top of other elements
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link to="/" className="hover:text-gray-300">Early Learners Hub</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Landing Page</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
