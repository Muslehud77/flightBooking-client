

import { Navigate, useLocation } from 'react-router-dom';
import useContextInfo from '../../Hooks/useContextInfo';

const PrivateRouteForOthers = ({children}) => {
    const { user, loading } = useContextInfo();
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

     
     if (user?.name) {
      
       return children;
     }else{
      return <Navigate state={pathname} to={"/register"}></Navigate>;
     }
    
      

    
};

export default PrivateRouteForOthers;