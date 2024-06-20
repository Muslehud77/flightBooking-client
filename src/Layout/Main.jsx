import { Outlet } from "react-router-dom";
import NavBar from "../Components/navigation/NavBar";
import useContextInfo from "../Hooks/useContextInfo";




const Main = () => {

  const {user} = useContextInfo()


  return (
    <div className="h-screen bg-gradient-to-r from-gray-200 to-blue-200">
      {user.name && <NavBar />}
      <Outlet />
    </div>
  );
};

export default Main;
