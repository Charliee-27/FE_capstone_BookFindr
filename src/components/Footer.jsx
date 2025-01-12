import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-100 p-8 border-t border-gray-300">

    <div className='flex flex-row gap-10 container'>
      <div className="mb-8 basis-2/5">
        <img src="images\Footer Logo.png" alt="Logo" className='pb-5' />
        <p className="text-sm text-gray-600">
          BookFindr is meant to be a reading resource for the reading enthusiasts Developed by Charles Mizinga as his Elder Sister’s Christmas Gift due to her Love for Reading
        </p>
      </div>

      <div className="mb-8 basis-1/5">
        <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
        <ul>
          <li><a href="#" className="text-gray-700">Home</a></li>
          <li><a href="#" className="text-gray-700">Books</a></li>
          <li><a href="#" className="text-gray-700">Contact Us</a></li>
          <li><a href="#" className="text-gray-700">About Us</a></li>
        </ul>
      </div>

      <div className="mb-8 basis-1/5">
        <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
        <ul>
          <li><a href="mailto:Info@BookFindr.com" className="text-gray-700">Info@BookFindr.com</a></li>
          <li><a href="tel:+27783848740" className="text-gray-700">+27 78 384 8740</a></li>
          <li className="flex space-x-2">
            <a href="#"><img src="images/x-icon.png" alt="X" /></a> <br />
            <a href="#"><img src="images/facebook-icon.png" alt="Facebook" /></a> <br />
            <a href="#"><img src="images/instagram-icon.png" alt="Instagram" /></a> <br />
          </li>
        </ul>
      </div>

      <div className="mb-8 basis-1/5">
        <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
        <input type="email" className="p-2 w-4/5 border border-gray-300 rounded mb-2" placeholder="Your Email Address" />
        <button className="p-2 bg-gray-700 text-white rounded">Subscribe now</button>
      </div>
    </div>
    </footer>

    <div className='bg-p2 py-3 px-5'>
      <div className="flex justify-between base text-slate-200 content-center">
        <a href="#">Privacy</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">About Us</a>
        <p>&copy; 2024 BookFindr</p>
      </div>
      
    </div>
    </>
  );
}

export default Footer;
