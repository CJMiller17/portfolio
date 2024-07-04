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
          "linear-gradient(-45deg, #FFC700, #7389AE, #416788, #81D2C7)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
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

      ".firefly": {
        position: "fixed",
        left: "50%",
        top: "50%",
        width: "0.4vw",
        height: "0.4vw",
        margin: "-0.2vw 0 0 9.8vw",
        animation: "ease 200s alternate infinite",
        pointerEvents: "none",
      },
      ".firefly::before, .firefly::after": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        transformOrigin: "-10vw",
      },
      ".firefly::before": {
        background: "black",
        opacity: 0.4,
        animation: "drift ease alternate infinite",
      },
      ".firefly::after": {
        background: "white",
        opacity: 0,
        boxShadow: "0 0 0vw 0vw yellow",
        animation: "drift ease alternate infinite, flash ease infinite",
      },
      "@keyframes drift": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      "@keyframes flash": {
        "0%, 30%, 100%": {
          opacity: 0,
          boxShadow: "0 0 0vw 0vw yellow",
        },
        "5%": {
          opacity: 1,
          boxShadow: "0 0 2vw 0.4vw yellow",
        },
      },
      "@keyframes move1": {
        "0%": {
          transform: "translateX(-50vw) translateY(-50vh) scale(0.25)",
        },
        "100%": {
          transform: "translateX(-50vw) translateY(-50vh) scale(1)",
        },
      },
      ".firefly:nth-child(1)": {
        animationName: "move1",
      },
      ".firefly:nth-child(1)::before": {
        animationDuration: "18s",
      },
      ".firefly:nth-child(1)::after": {
        animationDuration: "18s, 5291ms",
        animationDelay: "0ms, 7773ms",
      },
      /* Repeat the above .firefly:nth-child(n) styles for 2 to 15 */
    },
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: { base: "sm", sm: "2xl", md: "2xl", lg: "2xl" },
        fontWeight: "bold",
        bgGradient: "linear(to bottom, #FFF455, #FFC700, #EE4E4E)",
        bgClip: "text",
        transition: "transform 0.2s ease-in-out",
        _hover: {
          transform: "scale(1.2)",
          bgGradient: "linear(to bottom, #FFC700, #EE4E4E)",
        },
      },
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
