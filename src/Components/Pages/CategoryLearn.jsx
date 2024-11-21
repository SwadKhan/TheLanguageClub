import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import Navbar from "./Navbar";
import LessonCard from "./LessonCard";
import Header from "./Header";
import CategoryLesson from "./CategoryLesson";
import Footer from "./Footer";

const CategoryLearn = () => {
  const { lesson_no } = useParams();
  const data = useLoaderData();
  const id = parseInt(lesson_no);
  const card = data.filter((data) => data.lesson_no === id);

  //   const [categoryCard, setCategory] = useState([]);

  //   useEffect(() => {
  //     fetch("./unique_vocabulary.json")
  //       .then((res) => res.json())
  //       .then((data) => setCategory(data));
  //   });
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between items-center py-3">
          <h2 className="text-2xl text-sky-400 font-medium mb-4 text-left my-2">
            Let's Learn Together!!!
          </h2>
          <div>
            <Link
              to="/learn"
              className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md w-full"
            >
              Back to Learn Page
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {card.map((card, ind) => (
            <CategoryLesson key={ind} card={card}></CategoryLesson>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CategoryLearn;
