import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-white shadow-500 sticky top-0 z-50">
        <header className="flex flex-row items-center container justify-between py-5">
          <img src="/images/Logo.png" alt="logo" />
          <nav className="hidden md:flex gap-10">
            <NavLink to="/" className="text-gray-700">Home</NavLink>
            <NavLink to="/search" className="text-gray-700">Search</NavLink>
            <NavLink to="/about-us" className="text-gray-700">About Us</NavLink>
            <NavLink to="/contact-us" className="text-gray-700">Contact Us</NavLink>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </header>
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <NavLink to="/" className="block px-4 py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/search" className="block px-4 py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>Search</NavLink>
            <NavLink to="/about-us" className="block px-4 py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/contact-us" className="block px-4 py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
          </nav>
        )}
      </div>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
