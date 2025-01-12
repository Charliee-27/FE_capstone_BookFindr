import React from 'react';

const Newsletter = () => {
  return (
    <div className="flex justify-center items-center bg-black py-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="h3 mb-4">Our Newsletter</h2>
        <p className="body-3 text-gray-700 mb-6">
          Subscribe to our newsletter to get the latest updates on features and updates on the app.
        </p>
        <form>
          <div className="mb-4">
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Your Email Address"
              required
            />
          </div>
          <button 
            className="bg-s1 text-p1 font-bold py-2  px-10 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
