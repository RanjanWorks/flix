// MovieContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from multiple APIs
  const fetchData = async () => {
    setLoading(true);
    try {
      const [
        topRatedResponse,
        popularResponse,
        upcomingResponse,
        discoverResponse,
        trendingResponse,
        tvResponse,
      ] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=4c1eef5a8d388386187a3426bc2345be`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=4c1eef5a8d388386187a3426bc2345be`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=4c1eef5a8d388386187a3426bc2345be`
        ),
        axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=4c1eef5a8d388386187a3426bc2345be`
        ),
        axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=4c1eef5a8d388386187a3426bc2345be`
        ),
        axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=4c1eef5a8d388386187a3426bc2345be`
        ),
      ]);
      setTopRatedMovies(topRatedResponse.data.results || []);
      setPopularMovies(popularResponse.data.results || []);
      setUpcomingMovies(upcomingResponse.data.results || []);
      setDiscoverMovies(discoverResponse.data.results || []);
      setTrendingMovies(trendingResponse.data.results || []);
      setTvShows(tvResponse.data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the provider mounts
  }, []);

  return (
    <MovieContext.Provider
      value={{
        topRatedMovies,
        popularMovies,
        upcomingMovies,
        discoverMovies,
        trendingMovies,
        tvShows,
        loading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
