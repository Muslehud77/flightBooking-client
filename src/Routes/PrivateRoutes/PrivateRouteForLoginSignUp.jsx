/* eslint-disable react/prop-types */


import { Navigate, useLocation } from "react-router-dom";

import useContextInfo from "../../Hooks/useContextInfo";


const PrivateRouteForLoginSignUp = ({children}) => {

 const { user, loading } = useContextInfo();
 const { pathname } = useLocation();
console.log(user);
 if (loading) {
   return (
     <>
       <div className="absolute top-0 place-items-stretch h-screen w-full">
         <div className="skeleton wave info" />
       </div>
     </>
   );
 }

 if (!user.name) {
   return children;
 }

 if (user) {
   return <Navigate state={pathname} to={"/"}></Navigate>;
 }
      
};

export default PrivateRouteForLoginSignUp;