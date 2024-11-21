import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LessonCard from "./LessonCard";
import Header from "./Header";
import Tutorial from "./Tutorial";
import Footer from "./Footer";

const Learn = () => {
  const [categoryCard, setCategory] = useState([]);

  useEffect(() => {
    fetch("./unique_vocabulary.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  });
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto">
        <h2 className="text-2xl text-sky-400 font-medium mb-4 text-left my-2">
          Let's Learn Together!!!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryCard.map((card) => (
            <LessonCard key={card.id} card={card}></LessonCard>
          ))}
        </div>
        <Tutorial></Tutorial>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Learn;
