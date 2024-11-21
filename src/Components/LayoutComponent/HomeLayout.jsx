import React from "react";
import Header from "../Pages/Header";
import Navbar from "../Pages/Navbar";
import Banner from "../Pages/Banner";
import Achievement from "../Pages/Achievement";
import Footer from "../Pages/Footer";
import AboutUs from "../Pages/AboutUs";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <section>
        <Navbar></Navbar>
      </section>
      <main>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Achievement></Achievement>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
