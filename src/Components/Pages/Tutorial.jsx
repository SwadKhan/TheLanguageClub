import React from "react";
import { Link } from "react-router-dom";

const Tutorial = () => {
  return (
    <div className="flex flex-col gap-3 border border-x-red-300 bg-lime-100  p-6 justify-center items-center my-10">
      <h2 className="text-xl font-bold text-red-400">Tutorials on Alphabet</h2>
      {/* YouTube Video Embed */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/o4ZnexeNAQk?si=4Mc33x8ENNZclhj_"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <Link to="/tutorials" className="btn bg-red-700 text-white">
        View More
      </Link>
    </div>
  );
};

export default Tutorial;
