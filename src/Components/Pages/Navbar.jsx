import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");
  const { user } = useContext(AuthContext);

  const handleMouseEnter = (tab) => setActiveTab(tab);
  const handleMouseLeave = () => setActiveTab("");

  return (
    <div className="bg-base-200 shadow-md p-4 flex flex-col lg:flex-row justify-between items-center gap-3">
      <div className="flex flex-wrap gap-4 text-lg sm:text-xl font-semibold animate__animated animate__bounceInRight text-blue-400">
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          {activeTab === "home" && (
            <div className="absolute top-10 left-0 bg-primary text-white p-4 rounded shadow-lg w-64 animate-slideDown">
              Welcome to the homepage!
            </div>
          )}
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("start-learning")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/learn" className="hover:text-primary">
            Start-Learning
          </Link>
          {activeTab === "start-learning" && (
            <div className="absolute top-10 left-0 bg-primary text-white p-4 rounded shadow-lg w-64 animate-slideDown">
              Start your learning journey here!
            </div>
          )}
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("tutorials")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/tutorials" className="hover:text-primary">
            Tutorials
          </Link>
          {activeTab === "tutorials" && (
            <div className="absolute top-10 left-0 bg-primary text-white p-4 rounded shadow-lg w-64 animate-slideDown">
              Explore our tutorials!
            </div>
          )}
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          {activeTab === "about" && (
            <div className="absolute top-10 left-0 bg-primary text-white p-4 rounded shadow-lg w-64 animate-slideDown">
              Learn more about me!
            </div>
          )}
        </div>

        {user && user?.email ? (
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("myProfile")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/myProfile" className="hover:text-primary">
              My Profile
            </Link>
            {activeTab === "myProfile" && (
              <div className="absolute top-10 left-0 bg-primary text-white p-4 rounded shadow-lg w-64 animate-slideDown">
                Let's Change it!
              </div>
            )}
          </div>
        ) : null}
      </div>

      <div className="text-center mt-3 lg:mt-0">
        {user && user?.email ? (
          <div className="text-xl sm:text-2xl font-semibold text-teal-300 animate__animated animate__bounceInRight">
            <p>Welcome, {user.displayName} to this learning journey!!!</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
