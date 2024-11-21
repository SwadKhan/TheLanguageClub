import React from "react";
import { Link } from "react-router-dom";

const LessonCard = ({ card }) => {
  const { category, word, pronunciation, meaning, example, image, lesson_no } =
    card;

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; // Japanese language
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col justify-between bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-2xl rounded-xl overflow-hidden h-full">
      <figure className="w-full h-48">
        <img src={image} alt={word} className="w-full h-full object-cover" />
      </figure>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl lg:text-2xl font-bold text-blue-700">
          {word} ({category})
        </h2>
        <p className="text-gray-600 italic mt-1">
          Pronunciation: {pronunciation}
        </p>
        <p className="text-gray-800 mt-2">
          <strong>Meaning:</strong> {meaning}
        </p>
        <p className="text-gray-800 mt-2">
          <strong>Example:</strong> {example}
        </p>
      </div>
      <div className="p-4">
        <button
          onClick={() => pronounceWord(word)}
          className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md w-full"
        >
          Pronounce Word
        </button>
        <Link
          to={`/learn/${lesson_no}`}
          className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md w-full mt-3"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
