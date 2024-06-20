import { Outlet } from "react-router-dom";
import NavBar from "../Components/navigation/NavBar";
import useContextInfo from "../Hooks/useContextInfo";
import { Toaster } from "react-hot-toast";




const Main = () => {

  const {user} = useContextInfo()


  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-blue-200">
      {user.name && <NavBar />}
      <Outlet />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default Main;
