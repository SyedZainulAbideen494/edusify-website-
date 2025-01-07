import { Fragment, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Params,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import HomeWebApp from "./pages/websiteHome";
import DownloadPage from "./pages/DownloadPage";
import AboutUs from "./pages/AboutUs";
const router = createBrowserRouter([
  {path: '/', element: <HomeWebApp/>},
  {path: '/get-app', element: <DownloadPage/>},
  {path: '/about-us', element: <AboutUs/>}
]);


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;