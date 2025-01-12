import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ coverImage, title, author, publisher, key }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-5 p-3">
      <img className="w-full" src={coverImage} alt={`${title} cover`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base"><strong>Author(s):</strong> {author}</p>
        <p className="text-gray-700 text-base"><strong>Publisher:</strong> {publisher}</p>
        <Link to={`/book/${key}`} className="text-blue-500">View Details</Link>
      </div>
    </div>
  );
};

export default BookCard;
