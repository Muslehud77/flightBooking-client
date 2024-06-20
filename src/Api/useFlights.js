
import { useQuery } from '@tanstack/react-query';
import useAxios from './../Hooks/useAxios';
const useFlights = (queryParams) => {

  const axios = useAxios();

  const {
    data: flights = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["flights"],
    queryFn: async () => {
      const res = await axios.get(`/flights${queryParams}`);
      return res.data.data;
    },
  });

  return { flights, isFetching, refetch };
};

export default useFlights;