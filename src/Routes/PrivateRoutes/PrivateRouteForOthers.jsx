import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useContextInfo from '../../Hooks/useContextInfo';

const PrivateRouteForOthers = ({children}) => {
    const { user, loading, openLogin } = useContextInfo();
    const {pathname} = useLocation();


     if (loading) {
       return (
         <>
           <div className="absolute top-0 place-items-stretch h-screen w-full">
             <div className="skeleton wave info" />
           </div>
         </>
       );
     }

     if (user) {
      
       return children;
     }

     if(!user){
      
      return <Navigate state={pathname} to={"/"}></Navigate>;
     }
      

    
};

export default PrivateRouteForOthers;