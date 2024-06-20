
import useContextInfo from '../../Hooks/useContextInfo';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {

    const { user, logout } = useContextInfo();
    const {pathname} = useLocation()

  

    return (
      <div className="">
        <div className="flex justify-center items-center font-Outfit">
          <div className="dropdown mt-3">
            <div
              tabIndex={0}
              role="button"
              className="btn !glass m-1 !outline !outline-1 !outline-slate-300"
            >
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <span>{user?.name}</span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box !w-full"
            >
              <li>
                {pathname === "/" ? (
                  <Link to={"/profile"}>Profile</Link>
                ) : (
                  <Link to={"/"}>Home</Link>
                )}
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default NavBar;