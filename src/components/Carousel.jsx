// Carousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";
import { useMovies } from "../api/MovieContext";
import CustomSkeleton from "./CustomSkeleton";


export default function Carousel() {
  const {
    topRatedMovies,
    popularMovies,
    upcomingMovies,
    discoverMovies,
    trendingMovies,
    tvShows,
    loading,
  } = useMovies(); // Use the context data

  // Function to determine if we should show skeletons
  const shouldRenderSkeletons = () => {
    return (
      loading &&
      trendingMovies.length === 0 &&
      topRatedMovies.length === 0 &&
      popularMovies.length === 0 &&
      upcomingMovies.length === 0 &&
      discoverMovies.length === 0 &&
      tvShows.length === 0
    );
  };

  return (
    <div className="px-5">
      <h2 className="text-white text-2xl font-bold my-5">Trending Movies</h2>
      <Swiper
        spaceBetween={5}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {shouldRenderSkeletons()
          ? Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CustomSkeleton />
              </SwiperSlide>
            ))
          : trendingMovies.map((movie, index) => (
              <SwiperSlide key={index}>
                <Card movie={movie} />
              </SwiperSlide>
            ))}
      </Swiper>

      <h2 className="text-white text-2xl font-bold my-5">Top Rated Movies</h2>
      <Swiper
        spaceBetween={5}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {shouldRenderSkeletons()
          ? Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CustomSkeleton />
              </SwiperSlide>
            ))
          : topRatedMovies.map((movie, index) => (
              <SwiperSlide key={index}>
                <Card movie={movie} />
              </SwiperSlide>
            ))}
      </Swiper>

      <h2 className="text-white text-2xl font-bold my-5">Popular Movies</h2>
      <Swiper
        spaceBetween={5}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {shouldRenderSkeletons()
          ? Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CustomSkeleton />
              </SwiperSlide>
            ))
          : popularMovies.map((movie, index) => (
              <SwiperSlide key={index}>
                <Card movie={movie} />
              </SwiperSlide>
            ))}
      </Swiper>

      <h2 className="text-white text-2xl font-bold my-5">Upcoming Movies</h2>
      <Swiper
        spaceBetween={5}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {shouldRenderSkeletons()
          ? Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CustomSkeleton />
              </SwiperSlide>
            ))
          : upcomingMovies.map((movie, index) => (
              <SwiperSlide key={index}>
                <Card movie={movie} />
              </SwiperSlide>
            ))}
      </Swiper>

      <h2 className="text-white text-2xl font-bold my-5">Discover Movies</h2>
      <Swiper
        spaceBetween={5}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {shouldRenderSkeletons()
          ? Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CustomSkeleton />
              </SwiperSlide>
            ))
          : discoverMovies.map((movie, index) => (
              <SwiperSlide key={index}>
                <Card movie={movie} />
              </SwiperSlide>
            ))}
      </Swiper>

      <h2 className="text-white text-2xl font-bold my-5">Popular TV Shows</h2>
      <Swiper
        spaceBetween={5}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {shouldRenderSkeletons()
          ? Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CustomSkeleton />
              </SwiperSlide>
            ))
          : tvShows.map((show, index) => (
              <SwiperSlide key={index}>
                <Card movie={show} /> {/* Modify Card if needed for TV shows */}
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
