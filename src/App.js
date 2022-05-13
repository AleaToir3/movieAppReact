import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
const BEST_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=3d036b0952aafe04795e01bae549bb8a&language=fr-FRA&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3d036b0952aafe04795e01bae549bb8a&language=fr-FRA&page=1&include_adult=false&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const getApi = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    getApi(BEST_API);
    console.log('ALLOQUOI !!!!!');
  },[]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getApi(SEARCH_API + searchTerm);
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Recherche..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
