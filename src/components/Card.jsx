import React from "react";
import { NavLink } from "react-router-dom";
import Rating from "@mui/material/Rating";

const Card = ({ movie }) => {
  if (!movie || !movie.poster_path) return null; // Exclude movies without an image

  const {
    title = "No Title",
    poster_path,
    release_date = "N/A",
    vote_average = 2,
    id,
    first_air_date = "",
    name = "No Name"
  } = movie;

  // Adjust vote_average to a 5-star scale
  const normalizedRating = vote_average / 2;

  return (
    <NavLink to={`/movies/${id}`} className="max-w-xs">
      <div className="relative">
        <img
          className="h-auto w-full rounded-md"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </div>
      <div className="text-white my-2">
        <h1
          className="text-base md:text-lg lg:text-xl overflow-hidden text-ellipsis whitespace-nowrap"
          title={title}
        >
          {title === "No Title" ? name : title}
        </h1>
        <p className="text-xs text-slate-300">
          {release_date !== "N/A" ? release_date.split("-")[0] : first_air_date}
        </p>
        <div className="mt-3">
          <Rating
            size="small"
            name="read-only"
            value={normalizedRating}
            readOnly
          />
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
