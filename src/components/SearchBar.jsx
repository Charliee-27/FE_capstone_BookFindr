import React, { useState } from 'react';
import BookCard from './BookCard';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState({ keyword: '', author: '', title: '', isbn: '' });
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    const queryParts = [];
    if (searchQuery.keyword) queryParts.push(`q=${searchQuery.keyword}`);
    if (searchQuery.author) queryParts.push(`author=${searchQuery.author}`);
    if (searchQuery.title) queryParts.push(`title=${searchQuery.title}`);
    if (searchQuery.isbn) queryParts.push(`isbn=${searchQuery.isbn}`);
    const queryString = queryParts.join('&');

    fetch(`https://openlibrary.org/search.json?${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.docs.length === 0) {
          setError('No books found. The literary world weeps...');
        } else {
          const bookArray = data.docs.map((book) => ({
            coverImage: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : '',
            title: book.title,
            author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
            publisher: book.publisher ? book.publisher[0] : 'Unknown Publisher',
            key: book.key,
          }));
          setBooks(bookArray);
          setError('');
        }
      })
      .catch(() => setError('Something went wrong. Did you anger the book gods?'));
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <form onSubmit={handleSearch} className="mb-4 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by keyword"
          value={searchQuery.keyword}
          onChange={(e) => setSearchQuery({ ...searchQuery, keyword: e.target.value })}
          className="border px-4 py-2 w-full md:w-auto"
        />
        <input
          type="text"
          placeholder="Search by author name"
          value={searchQuery.author}
          onChange={(e) => setSearchQuery({ ...searchQuery, author: e.target.value })}
          className="border px-4 py-2 w-full md:w-auto"
        />
        <input
          type="text"
          placeholder="Search by book title"
          value={searchQuery.title}
          onChange={(e) => setSearchQuery({ ...searchQuery, title: e.target.value })}
          className="border px-4 py-2 w-full md:w-auto"
        />
        <input
          type="text"
          placeholder="Search by ISBN"
          value={searchQuery.isbn}
          onChange={(e) => setSearchQuery({ ...searchQuery, isbn: e.target.value })}
          className="border px-4 py-2 w-full md:w-auto"
        />
        <button className="bg-s1  text-p1 px-4 py-2 rounded-md w-full md:w-auto">
          Search Books
        </button>
      </form>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="flex flex-wrap justify-center">
        {books.map((book, index) => (
          <BookCard
            key={book.key}
            index={index}
            coverImage={book.coverImage}
            title={book.title}
            author={book.author}
            publisher={book.publisher}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
