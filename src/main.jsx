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
        background: "linear-gradient(-45deg, black, #333331, black)",
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
  components: {
    // Text: {
    //   baseStyle: {
    //     fontSize: { base: "sm", sm: "2xl", md: "2xl", lg: "2xl" },
    //     fontWeight: "bold",
    //     bgGradient: "linear(to bottom, #FFF455, #FFC700, #ee6e4e)",
    //     bgClip: "text",
    //     transition: "transform 0.2s ease-in-out",
    //     _hover: {
    //       bgGradient: "linear(to bottom, #FFC700, #EE4E4E)",
    //     },
    //   },
    // },
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
