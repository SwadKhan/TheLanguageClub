import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import moment from "moment";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-3 px-4 shadow-md">
      <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
        <div className="logo">
          <img className="w-14 sm:w-16" src={logo} alt="Language Club Logo" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-emerald-500 font-semibold text-lg sm:text-2xl">
            The Language Club
          </h2>
          <p className="text-sm sm:text-base">
            Mark this {moment().format("MMMM Do")} as a new starting day!
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4 lg:mt-0">
        <div className="flex flex-col items-center">
          {user && user?.email ? (
            <div className="flex flex-col items-center">
              <img
                className="w-12 h-12 rounded-full border-2 border-emerald-300"
                src={user?.photoURL}
                alt="User"
              />
              <p className="text-sm sm:text-base">{user.displayName}</p>
            </div>
          ) : (
            <img
              className="w-12 h-12 rounded-full border-2 border-gray-300"
              src={userIcon}
              alt="Default User Icon"
            />
          )}
        </div>
        {user && user?.email ? (
          <button
            className="btn bg-emerald-300 text-black font-medium w-full sm:w-auto"
            onClick={logOut}
          >
            Log-Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral text-sm w-full sm:w-auto"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
