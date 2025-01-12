import React from 'react';
import SearchBar from '../components/SearchBar';

const Search = () => {
  return (
    <main>
      <section className="bg-[url('/images/SearchCover.png')] bg-cover bg-no-repeat bg-center h-50">
        <div className="container py-10 text-center">
          <h2 className="h2 text-white">Find Your Next Read</h2>
        </div>
      </section>

      <section className="container py-10">
        <SearchBar />
      </section>
    </main>
  );
}

export default Search;
