import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            <Link to="/home">My Portfolio</Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link to="/home" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/home" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
