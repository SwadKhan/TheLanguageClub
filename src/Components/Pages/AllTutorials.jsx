import React from "react";
import { Link } from "react-router-dom";

const ALLTutorials = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-xl md:text-2xl font-bold text-red-400 text-center mb-5">
        Tutorials on Alphabet
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border rounded-lg bg-lime-100 p-6">
        {/* YouTube Video Embeds */}
        <div className="flex justify-center items-center">
          <iframe
            className="w-full h-60 md:h-72"
            src="https://www.youtube.com/embed/o4ZnexeNAQk?si=4Mc33x8ENNZclhj_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-center items-center">
          <iframe
            className="w-full h-60 md:h-72"
            src="https://www.youtube.com/embed/fGcf-gzxVNc?si=3QML42sF3PWXwTSK"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-center items-center">
          <iframe
            className="w-full h-60 md:h-72"
            src="https://www.youtube.com/embed/tupRbmVM9Wc?si=dI_PJ9Kp92T1tJoK"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-center items-center">
          <iframe
            className="w-full h-60 md:h-72"
            src="https://www.youtube.com/embed/sISIVKJh_EA?si=WhV5Br_4oozUT9GJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-center items-center">
          <iframe
            className="w-full h-60 md:h-72"
            src="https://www.youtube.com/embed/7fvCb5_Nzq4?si=6LeS6NSGv52E7ZJd"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-center items-center">
          <iframe
            className="w-full h-60 md:h-72"
            src="https://www.youtube.com/embed/YxM_UoHcbDA?si=AaPlqgVp-pcq9pwD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link to="/learn" className="btn bg-red-700 text-white">
          Learn Vocabularies
        </Link>
      </div>
    </div>
  );
};

export default ALLTutorials;
