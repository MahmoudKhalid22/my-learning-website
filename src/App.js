import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import Farsh from "./components/Farsh/Farsh";
import CollectionS from "./components/Subjects/collectionSubjects/CollectionS";
import Collection from "./components/Deadline/collection/Collection";
import Error from "./pages/Error/Error";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/farsh", element: <Farsh /> },
      { path: "/deadline", element: <Collection /> },
      { path: "/subjects", element: <CollectionS /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
