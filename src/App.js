import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Collection from "./components/Deadline/collection/Collection";
// import Measurements from "./components/Deadline/Measurements/Measurements";
// import Organization from "./components/Deadline/Organization/Organization";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CollectionS from "./components/Subjects/collectionSubjects/CollectionS";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/deadline", element: <Collection /> },
  { path: "/subjects", element: <CollectionS /> },
]);

function App() {
  return (
    <div className="App">
      <Navbar />

      <div id="#deadline" className="d">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
