import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Register from "./../Pages/Register/Register";


import ErrorPage from "./../Pages/404/ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home ></Home>,
      },
  
    
      {
        path: "/register",
        element: (
            <Register></Register>
        
        ),
      },
     
    ],
  },
 
]);
