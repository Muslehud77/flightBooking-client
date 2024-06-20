/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useContextInfo from "../../Hooks/useContextInfo";

// eslint-disable-next-line react/prop-types
const SearchSuggestions = ({ suggestions }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { setSelected, user, openLogin } = useContextInfo();
  const setContestDetails = (data) => {
    if (user) {
      setSelected(data);
    } else {
      openLogin();
    }
  };

  return (
    <div>
      {suggestions?.length>0 && (
        <ul
          data-theme="dark"
          className="overflow-y-scroll  p-5 mt-5 max-h-56 bg-base-200 rounded-box absolute w-full z-30"
        >
          {suggestions?.map((suggestion) => (
            <li key={suggestion._id} className="mb-1 rounded-xl">
              <div className="flex justify-between cursor-pointer">
                <span
                  onClick={() => setContestDetails(suggestion)}
                  className="hover:bg-gray-600 bg-gray-500 text-gray-200 w-full p-1 rounded-l-md transition-all duration-500"
                >
                  {suggestion.contestName}
                </span>
                <span
                  onClick={() =>
                    navigate("/contests", { state: suggestion.contestCategory })
                  }
                  className="hover:bg-white bg-gray-600 rounded-r-md transition-all duration-500  hover:text-black p-1"
                >
                  {suggestion.contestCategory}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchSuggestions;
