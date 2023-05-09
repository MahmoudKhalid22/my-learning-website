import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Collection from "./components/Deadline/collection/Collection";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CollectionS from "./components/Subjects/collectionSubjects/CollectionS";
import Error from "./pages/Error/Error";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/deadline", element: <Collection /> },
      { path: "/subjects", element: <CollectionS /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
