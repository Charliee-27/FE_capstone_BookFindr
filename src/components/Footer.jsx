import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 p-8 border-t border-gray-300">
        <div className='flex flex-col md:flex-row gap-10 container'>
          <div className="mb-8 basis-full md:basis-2/5">
            <img src="images\Footer Logo.png" alt="Logo" className='pb-5' />
            <p className="body-3 text-gray-600">
              BookFindr is meant to be a reading resource for the reading enthusiasts. Developed by Charles Mizinga as his Elder Sister’s Christmas Gift due to her Love for Reading.
            </p>
          </div>

          <div className="mb-8 basis-full md:basis-1/5">
            <h3 className="h5 mb-4">QUICK LINKS</h3>
            <ul>
              <li><a href="#" className="text-gray-700">Home</a></li>
              <li><a href="#" className="text-gray-700">Books</a></li>
              <li><a href="#" className="text-gray-700">Contact Us</a></li>
              <li><a href="#" className="text-gray-700">About Us</a></li>
            </ul>
          </div>

          <div className="mb-8 basis-full md:basis-1/5">
            <h3 className="h5 mb-4">CONTACT US</h3>
            <ul>
              <li><a href="mailto:Info@BookFindr.com" className="text-gray-700">Info@BookFindr.com</a></li>
              <li><a href="tel:+27783848740" className="text-gray-700">+27 78 384 8740</a></li>
              <li className="flex space-x-2">
                <a href="#"><img src="images\x-icon.png" alt="X" /></a> 
                <a href="#"><img src="images\facebook-icon.png" alt="Facebook" /></a> 
                <a href="#"><img src="images\instagram-icon.png" alt="Instagram" /></a> 
              </li>
            </ul>
          </div>

          <div className="mb-8 basis-full md:basis-1/5">
            <h3 className="h5 mb-4">NEWSLETTER</h3>
            <input type="email" className="p-2 w-4/5 border border-gray-300 rounded mb-2" placeholder="Your Email Address" />
            <button className="p-2 bg-s1 text-p1 rounded">Subscribe now</button>
          </div>
        </div>
      </footer>

      <div className='bg-p2 py-3 px-5'>
        <div className="container flex justify-between text-slate-200 content-center">
          <a href="#" className="base">Privacy</a>
          <a href="#" className="base">Terms and Conditions</a>
          <a href="#" className="base">About Us</a>
          <p className="base">&copy; 2024 BookFindr</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
