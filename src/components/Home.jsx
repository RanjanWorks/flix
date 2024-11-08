import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import axios from "axios";
import Search from "./SearchBox";
import Card from "./Card";
import Skeleton from "react-loading-skeleton"; // Import Skeleton
import SEO from "./Seo";

const SkeletonCard = () => (
  <div className="bg-gray-800 rounded-lg p-4 animate-pulse">
    <Skeleton height={192} baseColor="#1F2937" highlightColor="#374151" />
    <div className="mt-4">
      <Skeleton height={16} baseColor="#1F2937" highlightColor="#374151" />
    </div>
    <div className="mt-2">
      <Skeleton
        height={14}
        baseColor="#1F2937"
        highlightColor="#374151"
        width="75%"
      />
    </div>
  </div>
);

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [Movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const handleSearchClick = () => {
    if (searchQuery.trim() === "") {
      alert("Abe, search box khali hai!");
      return;
    }
    setHasSearched(true);
    fetchDataSearch();
  };

  async function fetchDataSearch() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4c1eef5a8d388386187a3426bc2345be&query=${searchQuery}`
      );
      setMovies(response.data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <SEO />
      <div className="flex flex-col items-center justify-center text-center gap-2 py-10 px-4 sm:px-8 lg:px-16 mt-10">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col gap-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Search Movies
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400">
            Free Movie Downloads | Download Movies Online | Movie Downloader |
            Best Movie Download Site
          </p>
        </div>
        <Search
          onQueryChange={handleSearchQuery}
          onSearchClick={handleSearchClick}
        />
      </div>

      <div className="px-5 w-full">
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8">
            {[...Array(10)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : Movies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8">
            {Movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          hasSearched && (
            <p className="text-gray-400 text-center my-8">No results found</p>
          )
        )}
      </div>

      <Carousel />
    </>
  );
};

export default Home;
