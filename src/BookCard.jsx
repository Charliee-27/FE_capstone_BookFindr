import React from 'react';

const BookCard = ({ coverImage, title, author, publisher }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
      <img className="w-full" src={coverImage} alt={`${title} cover`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">Author(s): {author}</p>
        <p className="text-gray-700 text-base">Publisher: {publisher}</p>
      </div>
    </div>
  );
};

export default BookCard;
