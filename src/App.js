import { Fragment } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Params,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import DownloadPage from "./website/website";
import NotFoundPage from "./app_modules/404Page";
import Instructions from "./website/Instructions";

const router = createBrowserRouter([
  {path: '/', element: <DownloadPage/>},
  {path: '/download/instructions', element: <Instructions/>},
  { path: '*', element: <NotFoundPage /> }, // This catches all undefined routes
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;