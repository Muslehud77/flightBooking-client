/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useContextInfo from "../../Hooks/useContextInfo";
import { useForm } from "react-hook-form";
import useAllContest from "../../Api/useAllContest";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import SearchSuggestions from "./SearchSuggestions";



const Search = ({currentTab}) => {
const [suggestions, setSuggestions] = useState([]);
const { search, setSearch } = useContextInfo();

const { allContests } = useAllContest(currentTab || "All");




 const { register, handleSubmit, watch, setValue } = useForm();

  const onSubmit = (data) => {
    setSearch(data.search)
   
    if(data.search){
      setSuggestions(allContests);
    }else{
      setSuggestions([])
    }
  };


useEffect(() => {

  
  const update = () => {
    if (watch("search") === '') {
      return setSuggestions([]);
    }
    setSearch(watch("search"));
    setSuggestions(allContests);
  };

  return update();
}, [watch("search")]);





  
  const clear = ()=>{
   setValue('search','')
   setSuggestions([])
  setSearch('')
  }



    return (
      <div className="relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            autoComplete="off"
            type="text"
            placeholder="Search here"
            {...register("search")}
            className="input bg-transparent  input-bordered text-white border-white border-2 w-60 md:w-96"
          />
          {suggestions?.length ? (
            <button
              onClick={clear}
              type="button"
              className="text-white cursor-pointer text-2xl absolute right-2 top-2"
            >
              <RxCross1 />
            </button>
          ) : (
            <button
              type="submit"
              className="text-white text-2xl absolute right-2 top-2"
            >
              <IoIosSearch />
            </button>
          )}
        </form>
        <SearchSuggestions suggestions={suggestions} />
      </div>
    );
};

export default Search;