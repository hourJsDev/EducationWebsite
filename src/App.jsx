import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import { Courses, Home, Mentors } from "./Page";
import "./App.css";
import "./Styles/Animation.css"
const App = () => {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      path: "/",
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "mentors",
          element: <Mentors/>
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
