import React, { useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (slide) => {
    setActiveSlide(slide); // Update the active slide
  };

  return (
    <div className="carousel w-full relative  ">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-[500px] ">
        <img
          src="https://i.ibb.co/z2J6Vy2/handwriting-820913.jpg"
          className="w-full h-full object-cover -z-10"
          alt="Slide 1"
        />
        <div className="absolute flex flex-col justify-center items-center w-full h-full top-0 bg-black bg-opacity-40 text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Learning!
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Explore top-notch lessons and resources to grow your skills.
          </p>
          <Link
            to="learn"
            className={`btn btn-primary btn-wide ${
              activeSlide === 1
                ? "animate__animated animate__bounceInRight"
                : ""
            }`}
          >
            Let's Learn
          </Link>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide4"
            className="btn btn-circle"
            onClick={() => handleSlideChange(4)}
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle"
            onClick={() => handleSlideChange(2)}
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-[500px]">
        <img
          src="https://i.ibb.co/VtNFb84/letters-5570359.jpg"
          className="w-full h-full object-cover -z-10"
          alt="Slide 2"
        />
        <div className="absolute flex flex-col justify-center items-center w-full h-full top-0 bg-black bg-opacity-40 text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Learn Anytime, Anywhere
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Join our global community of learners today!
          </p>
          <Link
            to="learn"
            className={`btn btn-accent btn-wide ${
              activeSlide === 2
                ? "animate__animated animate__bounceInRight"
                : ""
            }`}
          >
            Let's Learn
          </Link>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide1"
            className="btn btn-circle"
            onClick={() => handleSlideChange(1)}
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle"
            onClick={() => handleSlideChange(3)}
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-[500px]">
        <img
          src="https://i.ibb.co/2WtDj4t/learn-languages-effectively.jpg"
          className="w-full h-full object-cover -z-10"
          alt="Slide 3"
        />
        <div className="absolute flex flex-col justify-center items-center w-full h-full top-0 bg-black bg-opacity-40 text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Expert Instructors
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Learn from the best educators in every field.
          </p>
          <Link
            to="learn"
            className={`btn btn-secondary btn-wide ${
              activeSlide === 3
                ? "animate__animated animate__bounceInRight"
                : ""
            }`}
          >
            Let's Learn
          </Link>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide2"
            className="btn btn-circle"
            onClick={() => handleSlideChange(2)}
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle"
            onClick={() => handleSlideChange(4)}
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full h-[500px]">
        <img
          src="https://i.ibb.co/ZKRQNP7/a-group-student-studies-many-languages-vector-17234469.jpg"
          className="w-full h-full object-cover -z-10"
          alt="Slide 4"
        />
        <div className="absolute flex flex-col justify-center items-center w-full h-full top-0 bg-black bg-opacity-40 text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Achieve Your Goals
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Take the next step in your professional journey.
          </p>
          <Link
            to="learn"
            className={`btn btn-success btn-wide ${
              activeSlide === 4
                ? "animate__animated animate__bounceInRight"
                : ""
            }`}
          >
            Let's Learn
          </Link>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide3"
            className="btn btn-circle"
            onClick={() => handleSlideChange(3)}
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle"
            onClick={() => handleSlideChange(1)}
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
