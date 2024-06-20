
import { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthContext';

const useContextInfo = () => {

    const info = useContext(AuthContext)
   
    return info
};

export default useContextInfo;