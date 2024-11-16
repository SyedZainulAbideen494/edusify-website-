import { Fragment } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Params,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import Website from "./pages/website";
import AboutUs from "./pages/aboutUs";
import Features from "./pages/features";
import Blog1 from "./blogs/blog1";

const router = createBrowserRouter([
  {path: '/', element: <Website/>},
  {path:'/features', element: <Features/>},
  {path:'/about-us',element: <AboutUs/>},
  {path: '/blog1', element: <Blog1/>},
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;