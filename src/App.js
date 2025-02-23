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
const router = createBrowserRouter([
  {path: '/', element: <HomeWebApp/>},
  {path: '/get-app', element: <DownloadPage/>},
]);


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;