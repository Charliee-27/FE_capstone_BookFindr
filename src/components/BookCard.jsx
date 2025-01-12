import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ coverImage, title, author, publisher, index }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-5 p-3 bg-white">
      <img className="w-full" src={coverImage} alt={`${title} cover`} />
      <div className="px-6 py-4">
        <h3 className="h5 mb-2">{title}</h3>
        <p className="body-3 text-gray-700"><strong>Author(s):</strong> {author}</p>
        <p className="body-3 text-gray-700"><strong>Publisher:</strong> {publisher}</p>
        <Link to={`/book/${index}`} className="text-blue-500">View Details</Link>
      </div>
    </div>
  );
};

export default BookCard;
