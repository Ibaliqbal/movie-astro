import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselSection = ({ movies }: { movies: Movies }) => {
  return (
    <section className="mb-14">
      <Carousel
        autoPlay
        infiniteLoop
        className="w-full"
        showArrows={true}
        dynamicHeight
        interval={5000}
        transitionTime={2000}
        showStatus={false}
        showThumbs={false}
      >
        {movies.map((movie) => (
          <a href={`/movie/${movie.id}`} key={movie.id}>
            <img
              src={`${import.meta.env.PUBLIC_TMDB_IMG_URL_ORIGINAL_SIZE}${
                movie.poster_path
              }`}
              loading="lazy"
              width={500}
              height={500}
              alt={movie.title}
              className="object-cover object-center h-full lg:h-[26rem]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold cursor-pointer transition duration-300 ease-in-out hover:bg-opacity-20">
              <h2>{movie.title}</h2>
            </div>
          </a>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselSection;
