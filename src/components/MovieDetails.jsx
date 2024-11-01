import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS
import { TbExternalLink } from "react-icons/tb";
import { Helmet } from "react-helmet"; // Import Helmet
import Card from "./Card";

export default function MovieDetails() {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedMovies, setRelatedMovies] = useState([]); // State for related movies
  const suffix = "site:filmyzilla.com.by"; // Define your suffix here

  const handleSearch = () => {
    if (searchQuery) {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery + " " + suffix
      )}`;
      window.open(googleSearchUrl, "_blank"); // Open in a new tab
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // Fetch movie details
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4c1eef5a8d388386187a3426bc2345be`
        );
        setMovie(response.data);
        setSearchQuery(response.data.title);

        // Fetch related movies
        const relatedResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4c1eef5a8d388386187a3426bc2345be`
        );
        setRelatedMovies(relatedResponse.data.results); // Store related movies
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movie]);
  if (loading) {
    return (
      <div className="p-5 bg-gray-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 lg:p-10 bg-opacity-50 backdrop-blur-md bg-gray-900/30 shadow-md text-white">
          {/* Skeleton for Image */}
          <div className="flex justify-center items-center p-4 rounded-lg">
            <Skeleton
              height={450}
              width={300}
              borderRadius={10}
              baseColor="black"
              highlightColor="#0F172A" // Slightly lighter shade for shimmer effect
            />
          </div>

          {/* Skeleton for Text Content */}
          <div className="flex flex-col gap-3">
            <Skeleton
              width="70%"
              height={40}
              baseColor="black"
              highlightColor="#0F172A"
            />
            <Skeleton
              width="40%"
              height={20}
              baseColor="black"
              highlightColor="#0F172A"
            />
            <Skeleton
              width="30%"
              height={20}
              baseColor="black"
              highlightColor="#0F172A"
            />
            <Skeleton
              width="100%"
              height={100}
              baseColor="black"
              highlightColor="#0F172A"
            />
            <Skeleton
              width="50%"
              height={20}
              baseColor="black"
              highlightColor="#0F172A"
            />
            <Skeleton
              width="50%"
              height={20}
              baseColor="black"
              highlightColor="#0F172A"
            />
            <Skeleton
              width="30%"
              height={20}
              baseColor="black"
              highlightColor="#0F172A"
            />
            <Skeleton
              width="30%"
              height={40}
              borderRadius={10}
              baseColor="black"
              highlightColor="#0F172A"
            />
          </div>
        </div>
      </div>
    );
  }

  if (!movie) return <p className="text-white">Movie not found</p>;

  return (
    <>
      <div className="my-12">
        <Helmet>
          <title>{movie.title} - Movie Details</title>
          <meta name="description" content={movie.overview} />
          <meta property="og:title" content={movie.title} />
          <meta property="og:description" content={movie.overview} />
          <meta
            property="og:image"
            content={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <meta property="og:url" content={window.location.href} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 lg:p-10 shadow-md text-white">
          {/* Image Container */}
          <div className="flex justify-center items-center p-2 rounded-lg">
            <img
              className="lg:w-2/3 h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {movie.title}
            </h1>
            <p className="text-sm lg:text-base text-gray-400">
              {movie.tagline}
            </p>
            <p className="text-sm lg:text-base text-gray-400">
              {movie.release_date}
            </p>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              {movie.overview}
            </p>
            <p className="text-sm lg:text-base text-gray-400">
              <strong>Budget:</strong> ${movie.budget.toLocaleString() || "N/A"}
            </p>
            <p className="text-sm lg:text-base text-gray-400">
              <strong>Revenue:</strong> $
              {movie.revenue.toLocaleString() || "N/A"}
            </p>
            <p className="text-sm lg:text-base text-gray-400">
              <strong>Runtime:</strong> {movie.runtime} mins
            </p>
            <p className="text-sm lg:text-base text-gray-400">
              <strong>Genres:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="text-sm lg:text-base text-gray-400">
              <strong>Production Companies:</strong>{" "}
              {movie.production_companies
                .map((company) => company.name)
                .join(", ") || "N/A"}
            </p>
            <p className="text-sm lg:text-base text-gray-400">
              <strong>Language:</strong> {movie.original_language.toUpperCase()}
            </p>

            <button
              onClick={handleSearch}
              className="rounded-md bg-yellow-500 hover:bg-yellow-400 text-yellow-950 p-3 text-sm sm:text-base flex items-center gap-2 justify-center mt-5"
            >
              <TbExternalLink />
              Download
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-white text-2xl font-bold px-5">Similar Movies</h2>
      <div className=" px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8">
        {relatedMovies.map((relatedMovie, i) => (
          <Card key={relatedMovie.id} movie={relatedMovie} /> // Ensure unique key for each card
        ))}
      </div>
    </>
  );
}
