
import error from '../../Assets/Lotties/404.json'
import Lottie from "react-lottie-player";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ErrorPage = () => {
  const navigation = useNavigate()
    return (
      <div>
        <main className="grid min-h-full place-items-center bg-white ">
          <div className="flex flex-col justify-center items-center">
            <Lottie
              loop
              animationData={error}
              play
              style={{ width: 600, height: 600 }}
            />

            <div className="flex items-center gap-5 justify-center">
              <button onClick={() => navigation(-1)} className="btn text-xl btn-md">
                <FaArrowAltCircleLeft />
              </button>
              <Link
                to={"/"}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
};

export default ErrorPage;