import { useQuery } from "@tanstack/react-query";
import useAxios from "./../Hooks/useAxios";
const useMyBookings = () => {
  const axios = useAxios();

  const {
    data: bookings = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["my-bookings"],
    queryFn: async () => {
      const res = await axios.get(`/bookings/my-bookings`, {
        withCredentials: true,
      });
     
      return res.data.data;
    },
  });

  return { bookings, isFetching, refetch };
};

export default useMyBookings;
