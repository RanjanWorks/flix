import React, { useState } from "react";
// import AsynchronousMovieSearch from "./SearchBox";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 py-10 px-4 sm:px-8 lg:px-16 mt-10">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col gap-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-white">
          Search Movies
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400">
          Free Movie Downloads | Download Movies Online | Movie Downloader |
          Best Movie Download Site
        </p>
      </div>
    {/* <AsynchronousMovieSearch/> */}
    </div>
  );
};

export default Hero;
