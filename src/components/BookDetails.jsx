import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { key } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://openlibrary.org${key}.json`)
      .then((response) => response.json())
      .then((data) => setBookDetails(data))
      .catch(() => setError('Failed to fetch book details. Maybe it’s time to start using a library card?'));
  }, [key]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-auto p-4">
      <div className="max-w-lg rounded overflow-hidden shadow-lg m-5 p-3">
        <h1 className="font-bold text-xl mb-2">{bookDetails.title}</h1>
        <p><strong>Description:</strong> {bookDetails.description}</p>
        <p><strong>Publication Date:</strong> {bookDetails.publish_date}</p>
        <p><strong>ISBN:</strong> {bookDetails.isbn ? bookDetails.isbn.join(', ') : 'N/A'}</p>
        <p><strong>Number of Pages:</strong> {bookDetails.number_of_pages}</p>
        <p><strong>Subjects:</strong> {bookDetails.subjects ? bookDetails.subjects.join(', ') : 'N/A'}</p>
      </div>
    </div>
  );
};

export default BookDetails;
