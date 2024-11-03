import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { TbExternalLink } from "react-icons/tb";
import { Helmet } from "react-helmet";
import Card from "./Card";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { MdShare } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import SEO from "./Seo";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [confirmDownload, setConfirmDownload] = useState(false);
  const [imageColor, setImageColor] = useState(null);
  const suffix = "site:filmyzilla.com.by";

  const handleSearch = () => {
    if (searchQuery) {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery + " " + suffix
      )}`;
      window.open(googleSearchUrl, "_blank");
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4c1eef5a8d388386187a3426bc2345be`
        );
        setMovie(response.data);
        setSearchQuery(response.data.title);

        const relatedResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4c1eef5a8d388386187a3426bc2345be`
        );
        setRelatedMovies(relatedResponse.data.results);

        const trailerResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4c1eef5a8d388386187a3426bc2345be`
        );
        const trailers = trailerResponse.data.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailers.length > 0) {
          setTrailer(`https://www.youtube.com/embed/${trailers[0].key}`);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  // Confirm download dialog
  const handleDownloadClick = () => setConfirmDownload(true);
  const handleConfirmDownload = () => {
    setConfirmDownload(false);
    handleSearch();
  };
  const handleCancelDownload = () => setConfirmDownload(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [id]);

  const handleShare = async () => {
    if (navigator.share && movie) {
      try {
        await navigator.share({
          title: movie.title,
          text: movie.overview,
          url: window.location.href,
        });
        console.log("Movie shared successfully");
      } catch (error) {
        console.error("Error sharing movie:", error);
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  const convertMinutesToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    // Format the result based on hours and minutes
    const hoursPart = hours > 0 ? `${hours}h` : "";
    const minutesPart = remainingMinutes > 0 ? `${remainingMinutes}m` : "";

    return `${hoursPart} ${minutesPart}`.trim(); // Ensure no extra space
  };

  if (loading) {
    return (
      <div className=" mt-5 p-5 bg-gray-900 text-white ">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8 p-5 lg:p-10 bg-opacity-50 backdrop-blur-md bg-gray-900/30 shadow-md text-white">
          <div className="flex justify-center items-center p-4 rounded-lg">
            <Skeleton
              height={380}
              width={280}
              borderRadius={10}
              baseColor="black"
              highlightColor="#0F172A"
            />
          </div>
          <div className="flex flex-col gap-3 col-span-2">
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
              width="100%"
              height={100}
              baseColor="black"
              highlightColor="#0F172A"
            />
            <Skeleton
              width="20%"
              height={20}
              baseColor="black"
              highlightColor="#0F172A"
            />
            <Skeleton
              width="10%"
              height={20}
              baseColor="black"
              highlightColor="#0F172A"
            />

            <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 lg:gap-3">
              <Skeleton  height={50} baseColor="black" highlightColor="#0F172A" />{" "}
              <Skeleton height={50} baseColor="black" highlightColor="#0F172A" />{" "}
              <Skeleton height={50} baseColor="black" highlightColor="#0F172A" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!movie) return <p className="text-slate-300 text-center mt-24">Well, this is as invisible as a ghost 👻</p>;

  return (
    <>
      <SEO 
        title={movie.title} 
        description={movie.overview} 
        image={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} 
        url={window.location.href} 
      />
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderImageSource: `linear-gradient(hsl(240 0% 0% / 0.8), hsl(240 0% 0% / 0.7))`,
          borderImageSlice: "fill 1",
        }}
        className=" relative grid grid-cols-1 lg:grid-cols-3 gap-2 p-5 mt-12 lg:py-8 shadow-md text-white"
      >
        <div className="relative flex justify-center items-center  rounded-lg bg-cover bg-center">
          <img
            className="lg:w-2/3 h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg border"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="flex flex-col gap-3 col-span-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            {movie.title}
          </h1>
          <p className="text-sm lg:text-base text-gray-400">{movie.tagline}</p>
          <p className="text-xs lg:text-base text-gray-400">
            {movie.release_date}
          </p>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            {movie.overview}
          </p>
          <p className="text-sm lg:text-base text-gray-400">
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="text-sm lg:text-base text-gray-400">
            <strong>Runtime: </strong>
            {convertMinutesToTime(movie.runtime)}
          </p>
          <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 lg:gap-3">
            <button
              onClick={handleDownloadClick}
              className="rounded-md bg-yellow-500 hover:bg-yellow-400 text-yellow-950 p-3 text-sm sm:text-base flex items-center gap-2 justify-center mt-1"
            >
              <TbExternalLink />
              Download
            </button>
            {trailer && (
              <button
                onClick={handleOpenDialog}
                className="rounded-md bg-blue-500 hover:bg-blue-400 text-white p-3 text-sm sm:text-base flex items-center gap-2 justify-center mt-1"
              >
                <MdVideoLibrary />
                Play Trailer
              </button>
            )}
            <button
              onClick={handleShare}
              className="rounded-md bg-green-500 hover:bg-green-400 text-white p-3 text-sm sm:text-base flex items-center gap-2 justify-center mt-1"
            >
              <MdShare />
              Share
            </button>
          </div>
        </div>
      </div>

      <Dialog open={confirmDownload} onClose={handleCancelDownload}>
        <DialogTitle>Confirm Redirect</DialogTitle>
        <DialogContent>
          <p>
            You are being redirected to a new website. Do you want to continue?
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDownload} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDownload} color="secondary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ background: "#111827", color: "white" }}>
          {movie.title} - Trailer
        </DialogTitle>
        <DialogContent sx={{ background: "#0F172A", padding: "0" }}>
          {trailer ? (
            <iframe
              width="100%"
              height="315"
              src={`${trailer}?autoplay=1`} // Adding autoplay parameter
              title="Movie Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Trailer not available.</p>
          )}
        </DialogContent>
      </Dialog>

    {relatedMovies.length>0?  <h1 className="mt-10 lg:col-span-4 text-3xl text-white font-semibold p-5">
        Related Movies
      </h1>: ""}
      <div className="p-5 grid grid-cols-3 lg:grid-cols-5 gap-5  text-white">
        {relatedMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
