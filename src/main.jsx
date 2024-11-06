import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "./App.css";

import NavBar from "./NavBar";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer";

import Homepage from "./HomePage";
import About from "./About";
import Blog from "./Card";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact"

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        background:
          "linear-gradient(-45deg, #023047, #219EBC, #8ECAE6, #FFB703)",
        backgroundSize: "400% 400%",
        animation: "gradient 12s ease infinite",
        height: "100vh",
        margin: 0,
      },
      "@keyframes gradient": {
        "0%": {
          backgroundPosition: "0% 50%",
        },
        "50%": {
          backgroundPosition: "100% 50%",
        },
        "100%": {
          backgroundPosition: "0% 50%",
        },
      },

      /* Repeat the above .firefly:nth-child(n) styles for 2 to 15 */
    },
  },
});


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
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={customTheme} resetCSS={false}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
