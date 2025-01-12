import React from 'react';

const Search = () => {
  return (
    <main>
      <section className="bg-[url('/images/SearchCover.png')] bg-cover bg-no-repeat bg-center px-10 h-50">
        <div className="h2 text-white py-10 text-center">
          <h2>Find Your Next Read</h2>
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center py-10">
          <input className="border-4" type="text" />
          <br />
          <button className="bg-s1 py-1.5 px-5 rounded my-2 mt-5">Search</button>
        </div>
      </section>
    </main>
  );
}

export default Search;
