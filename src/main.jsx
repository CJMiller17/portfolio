import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ChakraBaseProvider } from "@chakra-ui/react";

// project styles
// import "./CSS/App.css";

import About from "./About";
import App from "./App";
import NavBar from "./NavBar";
import Homepage from "./HomePage";

import Blog from "./Card";
import Projects from "./Projects";
import Resume from "./Resume";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";

function Layout() {
  return (
    <>
      <NavBar />
      <div id="page-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
//gos inside the children array.
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraBaseProvider>
    <RouterProvider router={router} />
  </ChakraBaseProvider>
);
