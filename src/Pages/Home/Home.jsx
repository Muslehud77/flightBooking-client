import { useEffect, useState } from "react";
import useFlights from "../../Api/useFlights";
import Flights from "../../Components/Flights/Flights";
import FlightCard from "../../Components/Flights/FlightCard";

const Home = () => {
  const [queryParams, setQueryParams] = useState("");
  const { flights, isFetching, refetch } = useFlights(queryParams);
  
 
  useEffect(() => {
    refetch();
  }, [queryParams, refetch]);

  

  return (
    <div className="relative">
      <Flights
        refetch={refetch}
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
      {isFetching ? (
        <div className="flex justify-center my-10">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <h2 className="text-5xl text-center">
          {queryParams === "" ? "All Flights" : "Search result"}
        </h2>
      )}

      {flights.length &&
        flights?.map((flight) => (
          <FlightCard key={flight._id} flight={flight} home={true} />
        ))}
    </div>
  );
};

export default Home;
