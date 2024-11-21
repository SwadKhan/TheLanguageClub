import { createBrowserRouter, Link } from "react-router-dom";
import HomeLayout from "../Components/LayoutComponent/HomeLayout";
import AuthLayout from "../Components/LayoutComponent/AuthLayout";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import Learn from "../Components/Pages/Learn";
import CategoryLearn from "../Components/Pages/CategoryLearn";
import PrivateRoutes from "./PrivateRoutes";
import Tutorial from "../Components/Pages/Tutorial";
import AllTutorials from "../Components/Pages/AllTutorials";
import ForgetPassword from "../Components/Pages/ForgetPassword";
import MyProfile from "../Components/Pages/MyProfile";
import UpdateProfile from "../Components/Pages/UpdateProfile";
import About from "../Components/Pages/About";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "learn",
    element: <Learn></Learn>,
  },
  {
    path: "learn/:lesson_no",
    element: (
      <PrivateRoutes>
        <CategoryLearn></CategoryLearn>
      </PrivateRoutes>
    ),
    loader: () => fetch("/J_vocabulary_words.json"),
  },
  {
    path: "tutorials",
    element: (
      <PrivateRoutes>
        <AllTutorials></AllTutorials>
      </PrivateRoutes>
    ),
  },
  {
    path: "forget",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "myProfile",
    element: (
      <PrivateRoutes>
        <MyProfile></MyProfile>
      </PrivateRoutes>
    ),
  },
  {
    path: "updateProfile",
    element: (
      <PrivateRoutes>
        <UpdateProfile></UpdateProfile>
      </PrivateRoutes>
    ),
  },
  {
    path: "about",
    element: <About></About>,
  },
  {
    path: "*",
    element: (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-500 font-bold text-2xl">Not Found Page</h1>
        <Link to="/">Back to Home</Link>
      </div>
    ),
  },
]);

export default Routes;
