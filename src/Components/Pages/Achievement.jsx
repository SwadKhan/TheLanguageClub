import React from "react";
import { Link } from "react-router-dom";

const Tutorial = () => {
  return (
    <div className="flex flex-col gap-4 border border-x-red-300 bg-lime-100 p-6 justify-center items-center my-10 max-w-screen-lg mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-400 text-center">
        Tutorials on Alphabet
      </h2>
      <div className="w-full flex justify-center">
        <iframe
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl"
          height="315"
          src="https://www.youtube.com/embed/o4ZnexeNAQk?si=4Mc33x8ENNZclhj_"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <Link
        to="/tutorials"
        className="btn bg-red-700 text-white px-6 py-2 text-center"
      >
        View More
      </Link>
    </div>
  );
};

export default Tutorial;
