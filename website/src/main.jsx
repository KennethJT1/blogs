import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";
import SingleBlogPage from "./pages/SingleBlogPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlogPage />,
        loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
