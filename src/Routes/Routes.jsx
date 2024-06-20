import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Register from "./../Pages/Register/Register";


import ErrorPage from "./../Pages/404/ErrorPage";
import PrivateRouteForOthers from "./PrivateRoutes/PrivateRouteForOthers";
import PrivateRouteForLoginSignUp from './PrivateRoutes/PrivateRouteForLoginSignUp';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRouteForOthers>
            <Home></Home>
          </PrivateRouteForOthers>
        ),
      },

      {
        path: "/register",
        element: (
          <PrivateRouteForLoginSignUp>
           
            <Register></Register>
          </PrivateRouteForLoginSignUp>
        ),
      },
    ],
  },
]);
