import React from 'react';
import SearchBar from '../components/SearchBar';

const Search = () => {
  return (
    <main>
      <section className="bg-[url('/images/SearchCover.png')] bg-cover bg-no-repeat bg-center px-10 h-50">
        <div className="h2 text-white py-10 text-center">
          <h2>Find Your Next Read</h2>
        </div>
      </section>

      <section>
       <SearchBar />
      </section>
    </main>
  );
}




export default Search;
