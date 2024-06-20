/* eslint-disable react/prop-types */


import { Navigate, useLocation } from "react-router-dom";

import useContextInfo from "../../Hooks/useContextInfo";
import { AnimatePresence } from "framer-motion";


const PrivateRouteForLoginSignUp = ({children}) => {

const {state} = useLocation()


return (
  
   {children}

);

 
    // if(loading){
    //     return (
    //       <>
    //         <div className="h-screen">
    //           <div className="place-items-stretch h-screen w-full">
    //             <div className="skeleton wave bg-[#6AC7BD]" />
    //           </div>
    //         </div>
    //       </>
    //     );
    // }

   

    // return (
      
    //     <Navigate key={'/'} to={`${state ? state : "/"}`}></Navigate>
     
    // );
};

export default PrivateRouteForLoginSignUp;