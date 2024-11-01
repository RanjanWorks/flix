import React, { useState } from "react";
import axios from "axios";
import { MdOutlineSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Search = ({ onQueryChange, onSearchClick }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fetchMovies = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: "4c1eef5a8d388386187a3426bc2345be",
            query,
          },
        }
      );
      // Filter out movies without images
      const moviesWithImages = response.data.results.filter(
        (movie) => movie.poster_path
      );
      setSuggestions(moviesWithImages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onQueryChange(value);
    fetchMovies(value);
    setShowSuggestions(true);
  };

  // const handleSuggestionClick = (title) => {
  //   setQuery(title);
  //   onQueryChange(title);
  //   setShowSuggestions(false);
  // };

  return (
    <div className="flex items-center bg-slate-900 mt-5 p-1 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 gap-1 rounded-md relative">
      <div className="px-2 text-slate-400">
        <MdOutlineSearch size={20} />
      </div>
      <div className="w-full max-w-md mx-auto">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search movie..."
          className="w-full p-3 rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-white"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        />

        {showSuggestions && (
          <div className="absolute z-10 w-full mt-1 bg-gray-900 border border-gray-700 rounded-b-md shadow-lg max-h-60 overflow-y-auto left-0">
            {loading ? (
              <div className="p-3 text-white">Loading...</div>
            ) : suggestions.length > 0 ? (
              suggestions.map((movie) => (
                <NavLink
                to={`/movies/${movie.id}`}
                  key={movie.id}
                  className="flex items-center gap-3 p-3 text-white cursor-pointer hover:bg-gray-700 text-left"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    alt={movie.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div>
                    <div className="font-semibold">{movie.title}</div>
                    <div className="text-sm text-gray-400">
                      {movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A"}
                    </div>
                  </div>
                </NavLink>
              ))
            ) : (
              <div className="p-3 text-gray-400">No results found</div>
            )}
          </div>
        )}
      </div>
      <button onClick={onSearchClick} className="h-full rounded-md bg-yellow-500 text-yellow-950 p-3 text-sm sm:text-base">
        Search
      </button>
    </div>
  );
};

export default Search;
